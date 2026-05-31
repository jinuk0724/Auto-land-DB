export {};

declare global {
  interface Window {
    desktopApi: {
      searchRealEstate: (request: SearchRequest) => Promise<SearchResponse>;
      openExternal: (url: string) => Promise<boolean>;
    };
  }
}

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
