export type DealType = 'rent' | 'sale' | 'auction' | 'commercial';

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
  lat: number;
  lng: number;
  tags: string[];
};

export type CommerceRecord = {
  id: string;
  name: string;
  industry: string;
  address: string;
  lat: number;
  lng: number;
};

export type SearchResponse = {
  ok: boolean;
  message: string;
  mode: 'api' | 'sample';
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

const refs = [
  { title: '국토교통부_아파트 전월세 실거래가 자료', url: 'https://www.data.go.kr/data/15126474/openapi.do' },
  { title: '국토교통부_상업업무용 부동산 매매 실거래가 자료', url: 'https://www.data.go.kr/data/15126463/openapi.do' },
  { title: '소상공인시장진흥공단_상가(상권)정보_API', url: 'https://www.data.go.kr/data/15012005/openapi.do' },
  { title: '온비드 부동산 물건목록 조회서비스', url: 'https://www.data.go.kr/en/data/15157207/openapi.do' },
];

export async function fetchRealEstateData(request: SearchRequest): Promise<SearchResponse> {
  const normalizedApiKey = normalizeServiceKey(request.apiKey);
  const normalizedRequest = { ...request, apiKey: normalizedApiKey };

  if (!normalizedApiKey || normalizedApiKey.length < 10) {
    return sampleResponse(request, '공공데이터포털 서비스키가 없어 샘플 데이터로 표시합니다.');
  }

  try {
    if (request.dealType === 'rent') {
      const records = await fetchApartmentRent(normalizedRequest);
      return withCommerceAndPopulation(normalizedRequest, records, 'api', '국토교통부 아파트 전월세 API 조회 결과입니다.');
    }

    if (request.dealType === 'commercial' || request.dealType === 'sale') {
      const records = await fetchCommercialSale(normalizedRequest);
      return withCommerceAndPopulation(normalizedRequest, records, 'api', '국토교통부 상업업무용 매매 API 조회 결과입니다.');
    }

    if (request.dealType === 'auction') {
      const records = await fetchOnbid(normalizedRequest);
      return withCommerceAndPopulation(normalizedRequest, records, 'api', '온비드 부동산 공매 API 조회 결과입니다. 법원경매는 공식 API 확인이 어려워 바로가기로 제공합니다.');
    }

    return sampleResponse(normalizedRequest, '지원하지 않는 유형이므로 샘플 데이터로 표시합니다.');
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return sampleResponse(normalizedRequest, `서비스키는 입력되었지만 API 조회에 실패해 샘플 데이터로 전환했습니다: ${message}`);
  }
}

async function fetchApartmentRent(request: SearchRequest): Promise<PropertyRecord[]> {
  const url = new URL('https://apis.data.go.kr/1613000/RTMSDataSvcAptRent/getRTMSDataSvcAptRent');
  url.searchParams.set('serviceKey', request.apiKey ?? '');
  url.searchParams.set('LAWD_CD', request.regionCode);
  url.searchParams.set('DEAL_YMD', request.contractMonth.replace('-', ''));
  url.searchParams.set('numOfRows', '100');
  url.searchParams.set('pageNo', '1');

  const xml = await fetchText(url);
  const items = parseItems(xml);
  return items.slice(0, 50).map((item, index) => ({
    id: `rent-${index}-${item['aptNm'] ?? item['단지명'] ?? index}`,
    source: '국토교통부 아파트 전월세',
    dealType: 'rent',
    title: item['aptNm'] ?? item['단지명'] ?? '아파트 전월세',
    address: `${request.regionName} ${item['umdNm'] ?? item['법정동'] ?? ''}`.trim(),
    category: '주거용 아파트',
    priceLabel: `보증금 ${formatMoney(Number(cleanNumber(item['deposit'] ?? item['보증금액'] ?? 0)))} / 월세 ${formatMoney(Number(cleanNumber(item['monthlyRent'] ?? item['월세금액'] ?? 0)))}`,
    price: Number(cleanNumber(item['deposit'] ?? item['보증금액'] ?? 0)),
    area: Number(cleanNumber(item['excluUseAr'] ?? item['전용면적'] ?? 0)),
    floor: item['floor'] ?? item['층'],
    contractDate: `${item['dealYear'] ?? ''}.${item['dealMonth'] ?? ''}.${item['dealDay'] ?? ''}`,
    lat: jitterLat(request.regionCode, index),
    lng: jitterLng(request.regionCode, index),
    tags: ['전월세', '공공데이터', '실거래'],
  }));
}

async function fetchCommercialSale(request: SearchRequest): Promise<PropertyRecord[]> {
  const url = new URL('https://apis.data.go.kr/1613000/RTMSDataSvcNrgTrade/getRTMSDataSvcNrgTrade');
  url.searchParams.set('serviceKey', request.apiKey ?? '');
  url.searchParams.set('LAWD_CD', request.regionCode);
  url.searchParams.set('DEAL_YMD', request.contractMonth.replace('-', ''));
  url.searchParams.set('numOfRows', '100');
  url.searchParams.set('pageNo', '1');

  const xml = await fetchText(url);
  const items = parseItems(xml);
  return items.slice(0, 50).map((item, index) => ({
    id: `commercial-${index}-${item['buildingName'] ?? index}`,
    source: '국토교통부 상업업무용 매매',
    dealType: request.dealType,
    title: item['buildingName'] ?? item['건물명'] ?? '상업업무용 부동산',
    address: `${request.regionName} ${item['umdNm'] ?? item['법정동'] ?? ''}`.trim(),
    category: item['buildingUse'] ?? item['건물주용도'] ?? '상업업무용',
    priceLabel: `거래금액 ${formatMoney(Number(cleanNumber(item['dealAmount'] ?? item['거래금액'] ?? 0)))}`,
    price: Number(cleanNumber(item['dealAmount'] ?? item['거래금액'] ?? 0)),
    area: Number(cleanNumber(item['excluUseAr'] ?? item['건물면적'] ?? 0)),
    floor: item['floor'] ?? item['층'],
    contractDate: `${item['dealYear'] ?? ''}.${item['dealMonth'] ?? ''}.${item['dealDay'] ?? ''}`,
    lat: jitterLat(request.regionCode, index),
    lng: jitterLng(request.regionCode, index),
    tags: ['상업업무용', '매매', '실거래'],
  }));
}

async function fetchOnbid(request: SearchRequest): Promise<PropertyRecord[]> {
  const url = new URL('http://apis.data.go.kr/B010003/OnbidRlstListSrvc2/getRlstCltrList2');
  url.searchParams.set('serviceKey', request.apiKey ?? '');
  url.searchParams.set('pageNo', '1');
  url.searchParams.set('numOfRows', '50');
  url.searchParams.set('resultType', 'json');
  url.searchParams.set('prptDivCd', '0007,0005');
  url.searchParams.set('pvctTrgtYn', 'N');
  url.searchParams.set('lctnSdnm', request.regionName.split(' ')[0] ?? '서울특별시');

  const res = await fetch(url);
  if (!res.ok) throw new Error(`온비드 API HTTP ${res.status}`);
  const data = await res.json() as any;
  const items = data?.response?.body?.items?.item ?? data?.items ?? [];
  const arr = Array.isArray(items) ? items : [items];
  return arr.filter(Boolean).slice(0, 50).map((item: any, index: number) => ({
    id: `auction-${index}-${item.cltrMngNo ?? index}`,
    source: '온비드 부동산 공매',
    dealType: 'auction',
    title: item.onbidCltrNm ?? item.cltrNm ?? '온비드 부동산 물건',
    address: item.lctnFullAddr ?? `${item.lctnSdnm ?? ''} ${item.lctnSggnm ?? ''} ${item.lctnEmdNm ?? ''}`.trim(),
    category: item.cltrUsgSclsCtgrNm ?? item.cltrUsgMclsCtgrNm ?? '부동산 공매',
    priceLabel: `최저입찰가 ${formatMoney(Number(item.lowstBidPrc ?? 0))}`,
    price: Number(item.lowstBidPrc ?? 0),
    area: Number(item.landSqms ?? item.bldSqms ?? 0),
    contractDate: item.bidPrdYmdEnd ?? undefined,
    lat: jitterLat(request.regionCode, index),
    lng: jitterLng(request.regionCode, index),
    tags: ['공매', '온비드', item.bidStatNm ?? '입찰'],
  }));
}

async function fetchText(url: URL): Promise<string> {
  const res = await fetch(url);
  const text = await res.text();
  if (!res.ok) {
    const detail = extractApiError(text);
    throw new Error(detail ? `HTTP ${res.status} · ${detail}` : `HTTP ${res.status}`);
  }
  const detail = extractApiError(text);
  if (detail) throw new Error(detail);
  return text;
}

function normalizeServiceKey(value?: string | null) {
  const trimmed = String(value ?? '').trim().replace(/^['"]|['"]$/g, '');
  if (!trimmed) return '';
  if (!trimmed.includes('%')) return trimmed;
  try {
    return decodeURIComponent(trimmed);
  } catch {
    return trimmed;
  }
}

function extractApiError(text: string) {
  if (!text) return '';
  const code = matchTag(text, 'resultCode') || matchTag(text, 'returnAuthMsg') || matchTag(text, 'returnReasonCode');
  const message = matchTag(text, 'resultMsg') || matchTag(text, 'returnReasonCode') || matchTag(text, 'errMsg');
  if (!code && !message) return '';
  if (code === '00' || code === 'NORMAL_SERVICE') return '';
  return [code, message].filter(Boolean).join(' / ');
}

function matchTag(text: string, tagName: string) {
  const match = text.match(new RegExp(`<${tagName}>([\\s\\S]*?)<\\/${tagName}>`, 'i'));
  return match ? decodeXml(match[1].trim()) : '';
}

function parseItems(xml: string): Record<string, string>[] {
  const itemMatches = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)];
  return itemMatches.map((match) => {
    const content = match[1];
    const fields: Record<string, string> = {};
    for (const field of content.matchAll(/<([^/][^>]*)>([\s\S]*?)<\/\1>/g)) {
      fields[field[1]] = decodeXml(field[2].trim());
    }
    return fields;
  });
}

function decodeXml(value: string) {
  return value.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&quot;/g, '"');
}

function cleanNumber(value: unknown) {
  return String(value ?? '0').replace(/,/g, '').replace(/\s/g, '') || '0';
}

function formatMoney(value: number) {
  if (!Number.isFinite(value) || value <= 0) return '정보 없음';
  if (value >= 10000) return `${Math.round(value / 10000).toLocaleString()}억 ${Math.round(value % 10000).toLocaleString()}만 원`;
  return `${value.toLocaleString()}만 원`;
}

function withCommerceAndPopulation(request: SearchRequest, records: PropertyRecord[], mode: 'api' | 'sample', message: string): SearchResponse {
  if (records.length === 0) return sampleResponse(request, 'API에서 결과가 없어 샘플 데이터로 표시합니다. 검색 조건 또는 API 키를 확인하세요.');
  return {
    ok: true,
    message,
    mode,
    records,
    commerce: sampleCommerce(request),
    population: samplePopulation(request),
    references: refs,
  };
}

function sampleResponse(request: SearchRequest, message: string): SearchResponse {
  return {
    ok: true,
    message,
    mode: 'sample',
    records: sampleRecords(request),
    commerce: sampleCommerce(request),
    population: samplePopulation(request),
    references: refs,
  };
}

function sampleRecords(request: SearchRequest): PropertyRecord[] {
  const baseLat = baseCoord(request.regionCode).lat;
  const baseLng = baseCoord(request.regionCode).lng;
  const names = request.dealType === 'auction'
    ? ['역세권 근린생활시설 공매', '복합상가 지분 공매', '도심 업무시설 경매', '저층 상가주택 경매']
    : request.dealType === 'rent'
      ? ['래미안 시티뷰 전세', '중심상권 오피스텔 월세', '대단지 아파트 반전세', '역세권 투룸 월세']
      : ['대로변 상업업무시설', '신축 근린생활시설', '업무지구 오피스', '수익형 상가건물'];

  return names.map((name, index) => ({
    id: `sample-${request.dealType}-${index}`,
    source: '샘플 데이터',
    dealType: request.dealType,
    title: name,
    address: `${request.regionName} 샘플동 ${12 + index}-${index}`,
    category: request.dealType === 'rent' ? '주거용' : request.dealType === 'auction' ? '경매/공매' : '비주거용',
    priceLabel: request.dealType === 'rent' ? `보증금 ${(3 + index).toLocaleString()}억 / 월세 ${80 + index * 35}만 원` : `예상가 ${(8 + index * 3).toLocaleString()}억 원`,
    price: request.dealType === 'rent' ? (30000 + index * 5000) : (80000 + index * 30000),
    area: 54 + index * 18,
    floor: `${index + 2}층`,
    contractDate: request.contractMonth,
    lat: baseLat + (index - 1.5) * 0.006,
    lng: baseLng + (index - 1.5) * 0.008,
    tags: request.dealType === 'auction' ? ['경매', '권리분석 필요', '현장조사'] : ['실거래', '상권연계', '지도분석'],
  }));
}

function sampleCommerce(request: SearchRequest): CommerceRecord[] {
  const industries = ['음식점', '카페', '편의점', '학원', '병원', '미용', '부동산중개', '생활서비스', '소매점'];
  const base = baseCoord(request.regionCode);
  return industries.map((industry, index) => ({
    id: `commerce-${index}`,
    name: `${industry} 샘플 ${index + 1}`,
    industry,
    address: `${request.regionName} 상권로 ${20 + index}`,
    lat: base.lat + Math.sin(index) * 0.012,
    lng: base.lng + Math.cos(index) * 0.012,
  }));
}

function samplePopulation(request: SearchRequest) {
  const seed = Number(request.regionCode.slice(0, 2)) || 11;
  return {
    floatingIndex: 65 + (seed % 25),
    weekday: 7200 + seed * 110,
    weekend: 5600 + seed * 95,
    age20to39: 38 + (seed % 14),
    age40to59: 31 + (seed % 10),
  };
}

function baseCoord(regionCode: string) {
  const region = regionCode.slice(0, 2);
  const map: Record<string, { lat: number; lng: number }> = {
    '11': { lat: 37.5665, lng: 126.9780 },
    '26': { lat: 35.1796, lng: 129.0756 },
    '27': { lat: 35.8714, lng: 128.6014 },
    '28': { lat: 37.4563, lng: 126.7052 },
    '29': { lat: 35.1595, lng: 126.8526 },
    '30': { lat: 36.3504, lng: 127.3845 },
    '31': { lat: 35.5384, lng: 129.3114 },
    '41': { lat: 37.4138, lng: 127.5183 },
    '43': { lat: 36.6357, lng: 127.4917 },
    '44': { lat: 36.6588, lng: 126.6728 },
    '46': { lat: 34.8161, lng: 126.4629 },
    '47': { lat: 36.5760, lng: 128.5056 },
    '48': { lat: 35.2383, lng: 128.6924 },
    '50': { lat: 33.4996, lng: 126.5312 },
    '51': { lat: 37.8228, lng: 128.1555 },
    '52': { lat: 35.7175, lng: 127.1530 },
  };
  return map[region] ?? map['11'];
}

function jitterLat(regionCode: string, index: number) {
  return baseCoord(regionCode).lat + ((index % 9) - 4) * 0.004;
}

function jitterLng(regionCode: string, index: number) {
  return baseCoord(regionCode).lng + ((index % 7) - 3) * 0.005;
}
