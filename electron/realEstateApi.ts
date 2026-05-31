export type DealType = 'rent' | 'sale' | 'auction' | 'commercial';

export type SearchErrorType = 'NO_KEY' | 'NO_PERMISSION' | 'NO_RESULT' | 'NETWORK' | 'PARSE' | 'UNSUPPORTED';

export type SearchRequest = {
  apiKey?: string;
  dealType: DealType;
  regionCode: string;
  regionName: string;
  contractMonth: string;
  keyword?: string;
  minPrice?: number;
  maxPrice?: number;
};

export type PropertyRecord = {
  id: string;
  source: string;
  dealType: DealType;
  title: string;
  address: string;
  category: string;
  priceLabel: string;
  price: number;
  area: number;
  floor?: string;
  contractDate?: string;
  lat?: number;
  lng?: number;
  tags: string[];
};

export type CommerceRecord = {
  id: string;
  name: string;
  industry: string;
  address: string;
  lat?: number;
  lng?: number;
};

export type SearchResponse = {
  ok: boolean;
  message: string;
  mode: 'api' | 'error';
  errorType?: SearchErrorType;
  records: PropertyRecord[];
  commerce: CommerceRecord[];
  population: {
    floatingIndex: number;
    weekday: number;
    weekend: number;
    age20to39: number;
    age40to59: number;
  };
  references: Array<{ title: string; url: string }>;
};

type ApiEndpoint = {
  dealType: Extract<DealType, 'rent' | 'sale'>;
  source: string;
  url: string;
};

type PublicDataError = Error & { type?: SearchErrorType };

const refs = [
  { title: '국토교통부_아파트 전월세 실거래가 자료', url: 'https://www.data.go.kr/data/15126474/openapi.do' },
  { title: '국토교통부_아파트 매매 실거래가 자료', url: 'https://www.data.go.kr/data/15126469/openapi.do' },
  { title: '행정표준코드관리시스템_법정동코드', url: 'https://www.code.go.kr/stdcode/regCodeL.do' },
];

const endpoints: Record<'rent' | 'sale', ApiEndpoint> = {
  rent: {
    dealType: 'rent',
    source: '국토교통부 아파트 전월세 실거래가',
    url: 'https://apis.data.go.kr/1613000/RTMSDataSvcAptRent/getRTMSDataSvcAptRent',
  },
  sale: {
    dealType: 'sale',
    source: '국토교통부 아파트 매매 실거래가',
    url: 'https://apis.data.go.kr/1613000/RTMSDataSvcAptTrade/getRTMSDataSvcAptTrade',
  },
};

export async function fetchRealEstateData(request: SearchRequest): Promise<SearchResponse> {
  const apiKey = request.apiKey?.trim() ?? '';

  if (!apiKey || apiKey.length < 10) {
    return errorResponse('NO_KEY', '공공데이터포털 서비스키가 없습니다. 서비스키를 입력한 뒤 다시 조회하세요. 샘플 데이터로 자동 대체하지 않습니다.');
  }

  if (request.dealType === 'commercial') {
    return errorResponse('UNSUPPORTED', '비주거용·상가 매매는 2차 지원 항목입니다. 현재 MVP에서는 아파트 매매와 아파트 전월세만 조회합니다.');
  }

  if (request.dealType === 'auction') {
    return errorResponse('UNSUPPORTED', '경매·공매는 2차 지원 항목입니다. 현재 MVP에서는 아파트 매매와 아파트 전월세만 조회합니다.');
  }

  try {
    const records = await fetchApartmentTransactions(request, endpoints[request.dealType]);

    if (records.length === 0) {
      return errorResponse('NO_RESULT', '공공데이터 API 조회는 정상 처리되었지만 조건에 맞는 거래가 없습니다. 지역, 계약월 또는 거래 유형을 변경해 보세요.');
    }

    return {
      ok: true,
      message: `${request.regionName} ${request.contractMonth} ${request.dealType === 'rent' ? '아파트 전월세' : '아파트 매매'} 실거래가 ${records.length}건을 조회했습니다. 좌표가 확인되지 않은 거래는 지도에 표시하지 않습니다.`,
      mode: 'api',
      records,
      commerce: [],
      population: emptyPopulation(),
      references: refs,
    };
  } catch (error) {
    const classified = classifyError(error);
    return errorResponse(classified.type, classified.message);
  }
}

async function fetchApartmentTransactions(request: SearchRequest, endpoint: ApiEndpoint): Promise<PropertyRecord[]> {
  const url = new URL(endpoint.url);
  url.searchParams.set('serviceKey', request.apiKey ?? '');
  url.searchParams.set('LAWD_CD', request.regionCode);
  url.searchParams.set('DEAL_YMD', request.contractMonth.replace('-', ''));
  url.searchParams.set('numOfRows', '100');
  url.searchParams.set('pageNo', '1');

  const xml = await fetchText(url);
  assertPublicDataSuccess(xml);
  const items = parseItems(xml);

  return items.slice(0, 100).map((item, index) => toApartmentRecord(item, index, request, endpoint));
}

async function fetchText(url: URL): Promise<string> {
  let response: Response;
  try {
    response = await fetch(url);
  } catch (error) {
    throw publicDataError('NETWORK', `네트워크 오류로 공공데이터 API에 접속하지 못했습니다: ${stringifyError(error)}`);
  }

  if (!response.ok) {
    if (response.status === 401 || response.status === 403) {
      throw publicDataError('NO_PERMISSION', `공공데이터 API 권한 오류가 발생했습니다. HTTP ${response.status}`);
    }
    throw publicDataError('NETWORK', `공공데이터 API HTTP 오류가 발생했습니다. HTTP ${response.status}`);
  }

  return response.text();
}

function assertPublicDataSuccess(xml: string) {
  if (!xml || !xml.trim()) {
    throw publicDataError('PARSE', '공공데이터 API 응답이 비어 있어 파싱할 수 없습니다.');
  }

  const resultCode = extractTag(xml, 'resultCode') ?? extractTag(xml, 'returnAuthMsg') ?? extractTag(xml, 'returnReasonCode');
  const resultMessage = extractTag(xml, 'resultMsg') ?? extractTag(xml, 'returnReasonMsg') ?? extractTag(xml, 'errMsg') ?? '';

  if (!resultCode) return;

  const normalizedCode = resultCode.trim().toUpperCase();
  if (normalizedCode === '00' || normalizedCode === '000' || normalizedCode === 'NORMAL SERVICE.' || normalizedCode === 'NORMAL_CODE') return;

  const message = resultMessage || `공공데이터 API 오류 코드 ${resultCode}`;
  if (normalizedCode.includes('SERVICE_KEY') || normalizedCode.includes('INVALID') || message.includes('SERVICE KEY') || message.includes('서비스키') || message.includes('인증키')) {
    throw publicDataError('NO_PERMISSION', `서비스키 또는 활용신청 권한을 확인하세요. ${message}`);
  }

  throw publicDataError('PARSE', `공공데이터 API가 정상 코드가 아닌 응답을 반환했습니다. ${message}`);
}

function parseItems(xml: string): Record<string, string>[] {
  try {
    const itemMatches = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)];
    return itemMatches.map((match) => {
      const content = match[1];
      const fields: Record<string, string> = {};
      for (const field of content.matchAll(/<([^/][^>\s]*)(?:\s[^>]*)?>([\s\S]*?)<\/\1>/g)) {
        fields[field[1]] = decodeXml(field[2].trim());
      }
      return fields;
    });
  } catch (error) {
    throw publicDataError('PARSE', `공공데이터 API 응답 파싱 중 오류가 발생했습니다: ${stringifyError(error)}`);
  }
}

function toApartmentRecord(item: Record<string, string>, index: number, request: SearchRequest, endpoint: ApiEndpoint): PropertyRecord {
  const apartmentName = firstValue(item, ['aptNm', '아파트', '단지명']) || '아파트';
  const legalDong = firstValue(item, ['umdNm', '법정동']) || '';
  const jibun = firstValue(item, ['jibun', '지번']) || '';
  const address = [request.regionName, legalDong, jibun].filter(Boolean).join(' ').replace(/\s+/g, ' ').trim();
  const area = toNumber(firstValue(item, ['excluUseAr', '전용면적', '전용면적(㎡)']));
  const dealYear = firstValue(item, ['dealYear', '년']) || '';
  const dealMonth = firstValue(item, ['dealMonth', '월']) || '';
  const dealDay = firstValue(item, ['dealDay', '일']) || '';
  const contractDate = formatContractDate(dealYear, dealMonth, dealDay, request.contractMonth);

  if (endpoint.dealType === 'rent') {
    const deposit = toNumber(firstValue(item, ['deposit', '보증금액']));
    const monthlyRent = toNumber(firstValue(item, ['monthlyRent', '월세금액']));
    return {
      id: stableId(['rent', request.regionCode, contractDate, apartmentName, legalDong, String(index)]),
      source: endpoint.source,
      dealType: 'rent',
      title: apartmentName,
      address,
      category: '아파트 전월세',
      priceLabel: `보증금 ${formatMoney(deposit)} / 월세 ${formatMoney(monthlyRent)}`,
      price: deposit,
      area,
      floor: firstValue(item, ['floor', '층']) || undefined,
      contractDate,
      tags: ['전월세', '공공데이터', '실거래', '좌표 미검증'],
    };
  }

  const dealAmount = toNumber(firstValue(item, ['dealAmount', '거래금액']));
  return {
    id: stableId(['sale', request.regionCode, contractDate, apartmentName, legalDong, String(index)]),
    source: endpoint.source,
    dealType: 'sale',
    title: apartmentName,
    address,
    category: '아파트 매매',
    priceLabel: `거래금액 ${formatMoney(dealAmount)}`,
    price: dealAmount,
    area,
    floor: firstValue(item, ['floor', '층']) || undefined,
    contractDate,
    tags: ['매매', '공공데이터', '실거래', '좌표 미검증'],
  };
}

function errorResponse(errorType: SearchErrorType, message: string): SearchResponse {
  return {
    ok: false,
    message,
    mode: 'error',
    errorType,
    records: [],
    commerce: [],
    population: emptyPopulation(),
    references: refs,
  };
}

function emptyPopulation() {
  return {
    floatingIndex: 0,
    weekday: 0,
    weekend: 0,
    age20to39: 0,
    age40to59: 0,
  };
}

function classifyError(error: unknown): { type: SearchErrorType; message: string } {
  const typed = error as PublicDataError;
  if (typed?.type) return { type: typed.type, message: typed.message };
  return { type: 'NETWORK', message: `알 수 없는 조회 오류가 발생했습니다: ${stringifyError(error)}` };
}

function publicDataError(type: SearchErrorType, message: string): PublicDataError {
  const error = new Error(message) as PublicDataError;
  error.type = type;
  return error;
}

function extractTag(xml: string, tagName: string) {
  const match = xml.match(new RegExp(`<${tagName}>([\\s\\S]*?)<\\/${tagName}>`, 'i'));
  return match ? decodeXml(match[1].trim()) : undefined;
}

function firstValue(item: Record<string, string>, keys: string[]) {
  for (const key of keys) {
    const value = item[key];
    if (value !== undefined && value !== null && String(value).trim() !== '') return value;
  }
  return undefined;
}

function toNumber(value: unknown) {
  const numeric = Number(String(value ?? '0').replace(/,/g, '').replace(/\s/g, ''));
  return Number.isFinite(numeric) ? numeric : 0;
}

function decodeXml(value: string) {
  return value
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function formatMoney(value: number) {
  if (!Number.isFinite(value) || value <= 0) return '정보 없음';
  if (value >= 10000) {
    const eok = Math.floor(value / 10000);
    const man = Math.round(value % 10000);
    return man > 0 ? `${eok.toLocaleString()}억 ${man.toLocaleString()}만 원` : `${eok.toLocaleString()}억 원`;
  }
  return `${Math.round(value).toLocaleString()}만 원`;
}

function formatContractDate(year: string, month: string, day: string, fallbackMonth: string) {
  if (!year || !month || !day) return fallbackMonth;
  return `${year}.${month.padStart(2, '0')}.${day.padStart(2, '0')}`;
}

function stableId(parts: string[]) {
  return parts.join('-').replace(/\s+/g, '_').replace(/[^\w가-힣.-]/g, '');
}

function stringifyError(error: unknown) {
  return error instanceof Error ? error.message : String(error);
}
