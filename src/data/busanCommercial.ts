export type RankedItem = {
  name: string;
  count: number;
  share: number;
};

export type SampleStore = {
  name: string;
  category: string;
  majorCategory: string;
  minorCategory: string;
  address: string;
  dong: string;
  status: string;
  openedDate: string;
  lat: number | null;
  lng: number | null;
};

export type BusanCommercialArea = {
  name: string;
  totalStores: number;
  activeStores: number;
  closedStores: number;
  activeRate: number;
  closedRate: number;
  topMajorCategories: RankedItem[];
  topMinorCategories: RankedItem[];
  topBusinessTypes: RankedItem[];
  topAdministrativeDongs: RankedItem[];
  center: { lat: number | null; lng: number | null };
  sampleStores: SampleStore[];
};

export type BusanCommercialSummary = {
  source: {
    name: string;
    url: string;
    provider: string;
    baseDate: string;
    note: string;
  };
  overall: BusanCommercialArea;
  districts: BusanCommercialArea[];
};

export type BusanFloatingPopulationPoint = {
  id: string;
  count: number;
  centerLat: number;
  centerLng: number;
  bounds: {
    leftLng: number;
    topLat: number;
    rightLng: number;
    bottomLat: number;
  };
};

export type BusanJinFloatingPopulation = {
  source: {
    name: string;
    url: string;
    provider: string;
    sampleDateTime: string;
    note: string;
  };
  totalPopulation: number;
  gridCount: number;
  maxGridPopulation: number;
  points: BusanFloatingPopulationPoint[];
};

export const busanCommercialSummary: BusanCommercialSummary = {
  "source": {
    "name": "부산광역시_상권 점포이력 현황(SHP)_20231231",
    "url": "https://www.data.go.kr/data/15117346/fileData.do",
    "provider": "부산광역시 빅데이터과",
    "baseDate": "2023-12-31",
    "note": "상점명, 대·중분류, 업종명, 주소, 개업일, 폐업일, 좌표가 포함된 SHP 파일을 집계해 앱 내 정적 분석 데이터로 사용합니다."
  },
  "overall": {
    "name": "부산광역시",
    "totalStores": 72234,
    "activeStores": 30043,
    "closedStores": 42191,
    "activeRate": 41.6,
    "closedRate": 58.4,
    "topMajorCategories": [
      {
        "name": "서비스",
        "count": 57303,
        "share": 79.3
      },
      {
        "name": "소매",
        "count": 5998,
        "share": 8.3
      },
      {
        "name": "미분류",
        "count": 5156,
        "share": 7.1
      },
      {
        "name": "외식",
        "count": 3777,
        "share": 5.2
      }
    ],
    "topMinorCategories": [
      {
        "name": "일반미용업",
        "count": 19234,
        "share": 26.6
      },
      {
        "name": "미분류",
        "count": 15277,
        "share": 21.1
      },
      {
        "name": "피부미용업",
        "count": 5879,
        "share": 8.1
      },
      {
        "name": "의원",
        "count": 4831,
        "share": 6.7
      },
      {
        "name": "일반세탁업",
        "count": 4522,
        "share": 6.3
      },
      {
        "name": "노래연습장",
        "count": 4148,
        "share": 5.7
      },
      {
        "name": "제과점영업",
        "count": 3777,
        "share": 5.2
      },
      {
        "name": "네일아트업",
        "count": 3398,
        "share": 4.7
      },
      {
        "name": "여관업",
        "count": 2536,
        "share": 3.5
      },
      {
        "name": "한의원",
        "count": 2135,
        "share": 3.0
      }
    ],
    "topBusinessTypes": [
      {
        "name": "미용실",
        "count": 19234,
        "share": 26.6
      },
      {
        "name": "오락장 운영업",
        "count": 8271,
        "share": 11.5
      },
      {
        "name": "피부관리실",
        "count": 6830,
        "share": 9.5
      },
      {
        "name": "일반 의원",
        "count": 5455,
        "share": 7.6
      },
      {
        "name": "일반이용업",
        "count": 5089,
        "share": 7.0
      },
      {
        "name": "가정용 세탁업",
        "count": 4793,
        "share": 6.6
      },
      {
        "name": "의약품 소매업",
        "count": 4761,
        "share": 6.6
      },
      {
        "name": "여관업",
        "count": 3871,
        "share": 5.4
      },
      {
        "name": "제과점업",
        "count": 3777,
        "share": 5.2
      },
      {
        "name": "기타 미용업",
        "count": 3651,
        "share": 5.1
      },
      {
        "name": "한의원",
        "count": 2175,
        "share": 3.0
      },
      {
        "name": "치과 의원",
        "count": 1964,
        "share": 2.7
      }
    ],
    "topAdministrativeDongs": [
      {
        "name": "미분류",
        "count": 4127,
        "share": 5.7
      },
      {
        "name": "연산동",
        "count": 3498,
        "share": 4.8
      },
      {
        "name": "부전동",
        "count": 2881,
        "share": 4.0
      },
      {
        "name": "대연동",
        "count": 2101,
        "share": 2.9
      },
      {
        "name": "온천동",
        "count": 2085,
        "share": 2.9
      },
      {
        "name": "우동",
        "count": 2062,
        "share": 2.9
      },
      {
        "name": "광안동",
        "count": 1765,
        "share": 2.4
      },
      {
        "name": "좌동",
        "count": 1630,
        "share": 2.3
      },
      {
        "name": "구포동",
        "count": 1398,
        "share": 1.9
      },
      {
        "name": "장전동",
        "count": 1340,
        "share": 1.9
      }
    ],
    "center": {
      "lat": 35.1671033,
      "lng": 129.0668304
    },
    "sampleStores": [
      {
        "name": "건강만세365병원",
        "category": "일반 의원",
        "majorCategory": "서비스",
        "minorCategory": "병원",
        "address": "부산광역시 중구 대청로 105, 건강만세365병원 -1,1~9층 (대청동2가)",
        "dong": "대청동2가",
        "status": "영업/정상",
        "openedDate": "2020-01-03",
        "lat": 35.1032956,
        "lng": 129.0313041
      },
      {
        "name": "심당요양병원",
        "category": "일반 의원",
        "majorCategory": "서비스",
        "minorCategory": "요양병원(일반요양병원)",
        "address": "부산광역시 중구 동광길 179 (영주동)",
        "dong": "영주동",
        "status": "영업/정상",
        "openedDate": "2007-12-05",
        "lat": 35.1105566,
        "lng": 129.036913
      },
      {
        "name": "의료법인송산의료재단 해양요양병원",
        "category": "일반 의원",
        "majorCategory": "서비스",
        "minorCategory": "요양병원(일반요양병원)",
        "address": "부산광역시 중구 광복로97번길 26-2(동광동2가)",
        "dong": "동광동2가",
        "status": "영업/정상",
        "openedDate": "2011-05-26",
        "lat": 35.1009628,
        "lng": 129.0348861
      },
      {
        "name": "의료법인연송의료재단 신창요양병원",
        "category": "일반 의원",
        "majorCategory": "서비스",
        "minorCategory": "요양병원(일반요양병원)",
        "address": "부산광역시 중구 중앙대로 55 (중앙동2가)",
        "dong": "중앙동2가",
        "status": "영업/정상",
        "openedDate": "2013-11-07",
        "lat": 35.102559,
        "lng": 129.0360964
      },
      {
        "name": "의료법인나라의료재단중앙나라요양병원",
        "category": "일반 의원",
        "majorCategory": "서비스",
        "minorCategory": "요양병원(일반요양병원)",
        "address": "부산광역시 중구 중앙대로 69 (중앙동3가)",
        "dong": "중앙동3가",
        "status": "영업/정상",
        "openedDate": "2005-12-15",
        "lat": 35.1038331,
        "lng": 129.035892
      },
      {
        "name": "재단법인천주교부산교구유지재단 메리놀병원",
        "category": "일반 의원",
        "majorCategory": "서비스",
        "minorCategory": "종합병원",
        "address": "부산광역시 중구 중구로 121 (대청동4가)",
        "dong": "대청동4가",
        "status": "영업/정상",
        "openedDate": "1974-04-30",
        "lat": 35.1072344,
        "lng": 129.0320899
      },
      {
        "name": "휘림한방병원",
        "category": "한의원",
        "majorCategory": "서비스",
        "minorCategory": "한방병원",
        "address": "부산광역시 중구 중앙대로 26, 5,6,7층 (중앙동6가)",
        "dong": "중앙동6가",
        "status": "영업/정상",
        "openedDate": "2013-03-22",
        "lat": 35.0999651,
        "lng": 129.0369794
      },
      {
        "name": "동아대학교대신병원",
        "category": "일반 의원",
        "majorCategory": "서비스",
        "minorCategory": "병원",
        "address": "부산광역시 서구 대신공원로 26, 동아대학교병원 (동대신동3가)",
        "dong": "동대신동3가",
        "status": "영업/정상",
        "openedDate": "2019-03-27",
        "lat": 35.1201684,
        "lng": 129.0178122
      },
      {
        "name": "신세계한방병원",
        "category": "한의원",
        "majorCategory": "서비스",
        "minorCategory": "한방병원",
        "address": "부산광역시 서구 구덕로 95, 3층 일부, 4층, 6층 (충무동1가)",
        "dong": "충무동1가",
        "status": "영업/정상",
        "openedDate": "2021-03-09",
        "lat": 35.0966478,
        "lng": 129.0255172
      },
      {
        "name": "바른병원",
        "category": "일반 의원",
        "majorCategory": "서비스",
        "minorCategory": "병원",
        "address": "부산광역시 서구 보수대로 9, 4~12층 (충무동1가)",
        "dong": "충무동1가",
        "status": "영업/정상",
        "openedDate": "2015-09-08",
        "lat": 35.0976438,
        "lng": 129.024909
      },
      {
        "name": "엘앤더슨병원",
        "category": "일반 의원",
        "majorCategory": "서비스",
        "minorCategory": "병원",
        "address": "부산광역시 서구 대신공원로 39 (서대신동3가)",
        "dong": "서대신동3가",
        "status": "영업/정상",
        "openedDate": "2018-06-12",
        "lat": 35.1213773,
        "lng": 129.0167579
      },
      {
        "name": "고신대학교복음병원",
        "category": "일반 의원",
        "majorCategory": "서비스",
        "minorCategory": "종합병원",
        "address": "부산광역시 서구 감천로 262 (암남동)",
        "dong": "암남동",
        "status": "영업/정상",
        "openedDate": "1974-02-26",
        "lat": 35.0816003,
        "lng": 129.0131753
      }
    ]
  },
  "districts": [
    {
      "name": "강서구",
      "totalStores": 1446,
      "activeStores": 858,
      "closedStores": 588,
      "activeRate": 59.3,
      "closedRate": 40.7,
      "topMajorCategories": [
        {
          "name": "서비스",
          "count": 1144,
          "share": 79.1
        },
        {
          "name": "외식",
          "count": 109,
          "share": 7.5
        },
        {
          "name": "소매",
          "count": 100,
          "share": 6.9
        },
        {
          "name": "미분류",
          "count": 93,
          "share": 6.4
        }
      ],
      "topMinorCategories": [
        {
          "name": "일반미용업",
          "count": 356,
          "share": 24.6
        },
        {
          "name": "미분류",
          "count": 321,
          "share": 22.2
        },
        {
          "name": "피부미용업",
          "count": 140,
          "share": 9.7
        },
        {
          "name": "네일아트업",
          "count": 122,
          "share": 8.4
        },
        {
          "name": "제과점영업",
          "count": 109,
          "share": 7.5
        },
        {
          "name": "의원",
          "count": 66,
          "share": 4.6
        },
        {
          "name": "노래연습장",
          "count": 51,
          "share": 3.5
        },
        {
          "name": "일반세탁업",
          "count": 43,
          "share": 3.0
        },
        {
          "name": "여관업",
          "count": 41,
          "share": 2.8
        },
        {
          "name": "치과의원",
          "count": 40,
          "share": 2.8
        }
      ],
      "topBusinessTypes": [
        {
          "name": "미용실",
          "count": 356,
          "share": 24.6
        },
        {
          "name": "오락장 운영업",
          "count": 179,
          "share": 12.4
        },
        {
          "name": "피부관리실",
          "count": 178,
          "share": 12.3
        },
        {
          "name": "기타 미용업",
          "count": 132,
          "share": 9.1
        },
        {
          "name": "제과점업",
          "count": 109,
          "share": 7.5
        },
        {
          "name": "일반 의원",
          "count": 82,
          "share": 5.7
        },
        {
          "name": "의약품 소매업",
          "count": 76,
          "share": 5.3
        },
        {
          "name": "일반이용업",
          "count": 67,
          "share": 4.6
        },
        {
          "name": "여관업",
          "count": 60,
          "share": 4.1
        },
        {
          "name": "가정용 세탁업",
          "count": 51,
          "share": 3.5
        },
        {
          "name": "치과 의원",
          "count": 40,
          "share": 2.8
        },
        {
          "name": "한의원",
          "count": 30,
          "share": 2.1
        }
      ],
      "topAdministrativeDongs": [
        {
          "name": "명지동",
          "count": 879,
          "share": 60.8
        },
        {
          "name": "신호동",
          "count": 131,
          "share": 9.1
        },
        {
          "name": "대저1동",
          "count": 78,
          "share": 5.4
        },
        {
          "name": "대저2동",
          "count": 76,
          "share": 5.3
        },
        {
          "name": "지사동",
          "count": 74,
          "share": 5.1
        },
        {
          "name": "미분류",
          "count": 63,
          "share": 4.4
        },
        {
          "name": "강동동",
          "count": 39,
          "share": 2.7
        },
        {
          "name": "송정동",
          "count": 24,
          "share": 1.7
        },
        {
          "name": "범방동",
          "count": 14,
          "share": 1.0
        },
        {
          "name": "녹산동",
          "count": 14,
          "share": 1.0
        }
      ],
      "center": {
        "lat": 35.112229,
        "lng": 128.9079036
      },
      "sampleStores": [
        {
          "name": "명지자연병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 강서구 명지오션시티4로 99, 3~10층 (명지동)",
          "dong": "명지동",
          "status": "영업/정상",
          "openedDate": "2023-01-10",
          "lat": 35.0802014,
          "lng": 128.9039292
        },
        {
          "name": "개나리소아청소년과병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 강서구 명지국제8로 269, 유당빌딩 4~5층 (명지동)",
          "dong": "명지동",
          "status": "영업/정상",
          "openedDate": "2019-09-19",
          "lat": 35.0981433,
          "lng": 128.9224219
        },
        {
          "name": "의료법인 갑을의료재단 갑을녹산병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 강서구 녹산산단321로 24-8 (송정동)",
          "dong": "송정동",
          "status": "영업/정상",
          "openedDate": "2009-02-27",
          "lat": 35.0905355,
          "lng": 128.8532223
        },
        {
          "name": "명지아동병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 강서구 명지국제8로 240, 402,501,601호 (명지동, 국제메디칼빌딩)",
          "dong": "명지동",
          "status": "영업/정상",
          "openedDate": "2016-06-27",
          "lat": 35.097821,
          "lng": 128.9188696
        },
        {
          "name": "오션시티치과병원",
          "category": "치과의원",
          "majorCategory": "서비스",
          "minorCategory": "치과병원",
          "address": "부산광역시 강서구 명지오션시티4로 70, 601호 (명지동, NC TOWER)",
          "dong": "명지동",
          "status": "영업/정상",
          "openedDate": "2015-07-31",
          "lat": 35.0827847,
          "lng": 128.9032678
        },
        {
          "name": "365하하병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 강서구 명지오션시티4로 88, 3~7층 (명지동)",
          "dong": "명지동",
          "status": "영업/정상",
          "openedDate": "2020-07-16",
          "lat": 35.0811624,
          "lng": 128.90327
        },
        {
          "name": "행복한어린이병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 강서구 명지국제1로 25, 우진메디컬프라 8~10층 (명지동)",
          "dong": "명지동",
          "status": "영업/정상",
          "openedDate": "2012-08-07",
          "lat": 35.0913059,
          "lng": 128.9033631
        },
        {
          "name": "우아한방병원",
          "category": "한의원",
          "majorCategory": "서비스",
          "minorCategory": "한방병원",
          "address": "부산광역시 강서구 명지국제1로 25, 우진메디컬프라자 5층 (명지동)",
          "dong": "명지동",
          "status": "영업/정상",
          "openedDate": "2022-10-31",
          "lat": 35.0913059,
          "lng": 128.9033631
        },
        {
          "name": "웰하이여성아동병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 강서구 명지오션시티4로 95, 2~8, 10층 일부호 (명지동)",
          "dong": "명지동",
          "status": "영업/정상",
          "openedDate": "2019-01-02",
          "lat": 35.0804418,
          "lng": 128.903929
        },
        {
          "name": "한국미인부산배내과의원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "의원",
          "address": "부산광역시 강서구 대저로 283-1 (대저1동)",
          "dong": "대저1동",
          "status": "영업/정상",
          "openedDate": "2001-10-31",
          "lat": 35.212397,
          "lng": 128.9831662
        },
        {
          "name": "고운세상피부과의원 서부산점",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "의원",
          "address": "부산광역시 강서구 명지국제5로 42, 동진빌딩 3층 302호 (명지동)",
          "dong": "명지동",
          "status": "영업/정상",
          "openedDate": "2019-01-16",
          "lat": 35.0976661,
          "lng": 128.9202493
        },
        {
          "name": "명지엘치과의원",
          "category": "치과 의원",
          "majorCategory": "서비스",
          "minorCategory": "치과의원",
          "address": "부산광역시 강서구 명지국제8로 230, 403,404호 (명지동)",
          "dong": "명지동",
          "status": "영업/정상",
          "openedDate": "2019-03-07",
          "lat": 35.0979067,
          "lng": 128.9178883
        }
      ]
    },
    {
      "name": "금정구",
      "totalStores": 5902,
      "activeStores": 2041,
      "closedStores": 3861,
      "activeRate": 34.6,
      "closedRate": 65.4,
      "topMajorCategories": [
        {
          "name": "서비스",
          "count": 4361,
          "share": 73.9
        },
        {
          "name": "소매",
          "count": 878,
          "share": 14.9
        },
        {
          "name": "미분류",
          "count": 404,
          "share": 6.8
        },
        {
          "name": "외식",
          "count": 259,
          "share": 4.4
        }
      ],
      "topMinorCategories": [
        {
          "name": "미분류",
          "count": 1589,
          "share": 26.9
        },
        {
          "name": "일반미용업",
          "count": 1425,
          "share": 24.1
        },
        {
          "name": "의원",
          "count": 466,
          "share": 7.9
        },
        {
          "name": "피부미용업",
          "count": 444,
          "share": 7.5
        },
        {
          "name": "일반세탁업",
          "count": 373,
          "share": 6.3
        },
        {
          "name": "노래연습장",
          "count": 369,
          "share": 6.3
        },
        {
          "name": "제과점영업",
          "count": 259,
          "share": 4.4
        },
        {
          "name": "한의원",
          "count": 245,
          "share": 4.2
        },
        {
          "name": "치과의원",
          "count": 189,
          "share": 3.2
        },
        {
          "name": "네일아트업",
          "count": 187,
          "share": 3.2
        }
      ],
      "topBusinessTypes": [
        {
          "name": "미용실",
          "count": 1425,
          "share": 24.1
        },
        {
          "name": "의약품 소매업",
          "count": 701,
          "share": 11.9
        },
        {
          "name": "오락장 운영업",
          "count": 676,
          "share": 11.5
        },
        {
          "name": "일반 의원",
          "count": 532,
          "share": 9.0
        },
        {
          "name": "피부관리실",
          "count": 487,
          "share": 8.3
        },
        {
          "name": "일반이용업",
          "count": 401,
          "share": 6.8
        },
        {
          "name": "가정용 세탁업",
          "count": 380,
          "share": 6.4
        },
        {
          "name": "제과점업",
          "count": 259,
          "share": 4.4
        },
        {
          "name": "한의원",
          "count": 249,
          "share": 4.2
        },
        {
          "name": "기타 미용업",
          "count": 206,
          "share": 3.5
        },
        {
          "name": "치과 의원",
          "count": 189,
          "share": 3.2
        },
        {
          "name": "안경 소매업",
          "count": 177,
          "share": 3.0
        }
      ],
      "topAdministrativeDongs": [
        {
          "name": "장전동",
          "count": 1340,
          "share": 22.7
        },
        {
          "name": "부곡동",
          "count": 1082,
          "share": 18.3
        },
        {
          "name": "구서동",
          "count": 1074,
          "share": 18.2
        },
        {
          "name": "서동",
          "count": 1027,
          "share": 17.4
        },
        {
          "name": "남산동",
          "count": 745,
          "share": 12.6
        },
        {
          "name": "미분류",
          "count": 319,
          "share": 5.4
        },
        {
          "name": "금사동",
          "count": 148,
          "share": 2.5
        },
        {
          "name": "청룡동",
          "count": 97,
          "share": 1.6
        },
        {
          "name": "회동동",
          "count": 39,
          "share": 0.7
        },
        {
          "name": "노포동",
          "count": 14,
          "share": 0.2
        }
      ],
      "center": {
        "lat": 35.2374189,
        "lng": 129.0923594
      },
      "sampleStores": [
        {
          "name": "의료법인 청림의료재단 온천요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 금정구 부곡로 36, 2-4층 (부곡동, 애플타워)",
          "dong": "부곡동",
          "status": "휴업",
          "openedDate": "2009-07-08",
          "lat": 35.2198428,
          "lng": 129.0882752
        },
        {
          "name": "단골병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 금정구 중앙대로 1829, 5~10, 14층 12~13층 일부호 (구서동)",
          "dong": "구서동",
          "status": "영업/정상",
          "openedDate": "2019-11-19",
          "lat": 35.2476687,
          "lng": 129.0919658
        },
        {
          "name": "더희망찬병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 금정구 부곡로 130 (부곡동)",
          "dong": "부곡동",
          "status": "영업/정상",
          "openedDate": "2016-04-15",
          "lat": 35.2274372,
          "lng": 129.0923324
        },
        {
          "name": "다움병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "정신병원",
          "address": "부산광역시 금정구 체육공원로 608 (두구동)",
          "dong": "두구동",
          "status": "영업/정상",
          "openedDate": "1993-02-01",
          "lat": 35.2949021,
          "lng": 129.1118966
        },
        {
          "name": "의료법인영파의료재단 마음향기병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "정신병원",
          "address": "부산광역시 금정구 금샘로 56 (장전동)",
          "dong": "장전동",
          "status": "영업/정상",
          "openedDate": "1990-08-01",
          "lat": 35.2308864,
          "lng": 129.0770743
        },
        {
          "name": "세웅병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 금정구 서동로 162 (서동)",
          "dong": "서동",
          "status": "영업/정상",
          "openedDate": "1994-04-09",
          "lat": 35.2143846,
          "lng": 129.1040609
        },
        {
          "name": "의료법인 삼세의료재단 삼세한방병원",
          "category": "한의원",
          "majorCategory": "서비스",
          "minorCategory": "한방병원",
          "address": "부산광역시 금정구 중앙대로 1580 (부곡동)",
          "dong": "부곡동",
          "status": "영업/정상",
          "openedDate": "1999-01-27",
          "lat": 35.2255969,
          "lng": 129.0893847
        },
        {
          "name": "보람요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 금정구 중앙대로 1961 (구서동)",
          "dong": "구서동",
          "status": "영업/정상",
          "openedDate": "2005-05-18",
          "lat": 35.2593882,
          "lng": 129.0910732
        },
        {
          "name": "의료법인해림의료재단 부산금사요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 금정구 반송로 470, 2~7층 (금사동)",
          "dong": "금사동",
          "status": "영업/정상",
          "openedDate": "2005-06-14",
          "lat": 35.2155531,
          "lng": 129.1152373
        },
        {
          "name": "의료법인대성사랑의료재단 제일요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 금정구 서부로 56 (서동)",
          "dong": "서동",
          "status": "영업/정상",
          "openedDate": "2005-08-22",
          "lat": 35.2182754,
          "lng": 129.1009338
        },
        {
          "name": "부곡요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 금정구 부곡로 56 (부곡동)",
          "dong": "부곡동",
          "status": "영업/정상",
          "openedDate": "2005-09-28",
          "lat": 35.2210615,
          "lng": 129.0895531
        },
        {
          "name": "의료법인 영파의료재단 규림요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 금정구 금샘로 59 (장전동)",
          "dong": "장전동",
          "status": "영업/정상",
          "openedDate": "2005-10-14",
          "lat": 35.2307414,
          "lng": 129.0760652
        }
      ]
    },
    {
      "name": "기장군",
      "totalStores": 2458,
      "activeStores": 1247,
      "closedStores": 1211,
      "activeRate": 50.7,
      "closedRate": 49.3,
      "topMajorCategories": [
        {
          "name": "서비스",
          "count": 1962,
          "share": 79.8
        },
        {
          "name": "소매",
          "count": 212,
          "share": 8.6
        },
        {
          "name": "외식",
          "count": 156,
          "share": 6.3
        },
        {
          "name": "미분류",
          "count": 128,
          "share": 5.2
        }
      ],
      "topMinorCategories": [
        {
          "name": "일반미용업",
          "count": 632,
          "share": 25.7
        },
        {
          "name": "미분류",
          "count": 508,
          "share": 20.7
        },
        {
          "name": "피부미용업",
          "count": 227,
          "share": 9.2
        },
        {
          "name": "제과점영업",
          "count": 156,
          "share": 6.3
        },
        {
          "name": "의원",
          "count": 146,
          "share": 5.9
        },
        {
          "name": "네일아트업",
          "count": 143,
          "share": 5.8
        },
        {
          "name": "노래연습장",
          "count": 132,
          "share": 5.4
        },
        {
          "name": "일반세탁업",
          "count": 112,
          "share": 4.6
        },
        {
          "name": "여관업",
          "count": 68,
          "share": 2.8
        },
        {
          "name": "한의원",
          "count": 63,
          "share": 2.6
        }
      ],
      "topBusinessTypes": [
        {
          "name": "미용실",
          "count": 632,
          "share": 25.7
        },
        {
          "name": "오락장 운영업",
          "count": 300,
          "share": 12.2
        },
        {
          "name": "피부관리실",
          "count": 264,
          "share": 10.7
        },
        {
          "name": "일반 의원",
          "count": 181,
          "share": 7.4
        },
        {
          "name": "의약품 소매업",
          "count": 173,
          "share": 7.0
        },
        {
          "name": "기타 미용업",
          "count": 165,
          "share": 6.7
        },
        {
          "name": "제과점업",
          "count": 156,
          "share": 6.3
        },
        {
          "name": "가정용 세탁업",
          "count": 144,
          "share": 5.9
        },
        {
          "name": "일반이용업",
          "count": 126,
          "share": 5.1
        },
        {
          "name": "여관업",
          "count": 115,
          "share": 4.7
        },
        {
          "name": "한의원",
          "count": 68,
          "share": 2.8
        },
        {
          "name": "치과 의원",
          "count": 56,
          "share": 2.3
        }
      ],
      "topAdministrativeDongs": [
        {
          "name": "기장읍",
          "count": 1101,
          "share": 44.8
        },
        {
          "name": "정관읍",
          "count": 845,
          "share": 34.4
        },
        {
          "name": "일광읍",
          "count": 235,
          "share": 9.6
        },
        {
          "name": "장안읍",
          "count": 140,
          "share": 5.7
        },
        {
          "name": "미분류",
          "count": 87,
          "share": 3.5
        },
        {
          "name": "철마면",
          "count": 50,
          "share": 2.0
        }
      ],
      "center": {
        "lat": 35.2795443,
        "lng": 129.2045668
      },
      "sampleStores": [
        {
          "name": "의료법인창성의료재단 일신치과병원",
          "category": "치과의원",
          "majorCategory": "서비스",
          "minorCategory": "치과병원",
          "address": "부산광역시 기장군 정관읍 정관6로 31, 3층 301, 302호",
          "dong": "정관읍",
          "status": "영업/정상",
          "openedDate": "2019-02-28",
          "lat": 35.3196923,
          "lng": 129.1774485
        },
        {
          "name": "일광서울병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 기장군 일광읍 해빛5로 29, 4~7층,8층일부(801호)",
          "dong": "일광읍",
          "status": "영업/정상",
          "openedDate": "2023-06-02",
          "lat": 35.260358,
          "lng": 129.222438
        },
        {
          "name": "(재)일신기독교선교회 정관일신기독병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 기장군 정관읍 정관6로 31, 3-8, 10층",
          "dong": "정관읍",
          "status": "영업/정상",
          "openedDate": "2018-03-29",
          "lat": 35.3196923,
          "lng": 129.1774485
        },
        {
          "name": "(의)서일의료재단기장병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 기장군 기장읍 대청로72번길 6",
          "dong": "미분류",
          "status": "영업/정상",
          "openedDate": "1997-05-03",
          "lat": null,
          "lng": null
        },
        {
          "name": "(의)피터의료재단새소망요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 기장군 기장읍 기장해안로 552",
          "dong": "기장읍",
          "status": "영업/정상",
          "openedDate": "2005-03-17",
          "lat": 35.2228429,
          "lng": 129.226904
        },
        {
          "name": "평거요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 기장군 기장읍 대청로36번길 11-33",
          "dong": "기장읍",
          "status": "영업/정상",
          "openedDate": "2011-01-24",
          "lat": 35.2372798,
          "lng": 129.2161357
        },
        {
          "name": "기장연세요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 기장군 기장읍 반송로 1644",
          "dong": "기장읍",
          "status": "영업/정상",
          "openedDate": "2012-04-09",
          "lat": 35.2507335,
          "lng": 129.2178905
        },
        {
          "name": "현대요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 기장군 기장읍 반송로 1555",
          "dong": "기장읍",
          "status": "영업/정상",
          "openedDate": "2006-07-28",
          "lat": 35.2487654,
          "lng": 129.2100887
        },
        {
          "name": "동남권원자력의학원원자력병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "종합병원",
          "address": "부산광역시 기장군 장안읍 좌동길 40",
          "dong": "장안읍",
          "status": "영업/정상",
          "openedDate": "2010-04-14",
          "lat": 35.3211079,
          "lng": 129.243878
        },
        {
          "name": "의료법인뵈뵈의료재단복있는요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 기장군 기장읍 대변로 117-2",
          "dong": "기장읍",
          "status": "영업/정상",
          "openedDate": "2010-08-09",
          "lat": 35.2278765,
          "lng": 129.2258973
        },
        {
          "name": "정관우리아동병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 기장군 정관읍 정관중앙로 56, 프라임빌딩",
          "dong": "정관읍",
          "status": "영업/정상",
          "openedDate": "2010-10-11",
          "lat": 35.3217186,
          "lng": 129.1796155
        },
        {
          "name": "태흥당한방병원",
          "category": "한의원",
          "majorCategory": "서비스",
          "minorCategory": "한방병원",
          "address": "부산광역시 기장군 정관읍 정관중앙로 61",
          "dong": "미분류",
          "status": "영업/정상",
          "openedDate": "2022-12-09",
          "lat": null,
          "lng": null
        }
      ]
    },
    {
      "name": "남구",
      "totalStores": 4984,
      "activeStores": 2003,
      "closedStores": 2981,
      "activeRate": 40.2,
      "closedRate": 59.8,
      "topMajorCategories": [
        {
          "name": "서비스",
          "count": 3885,
          "share": 77.9
        },
        {
          "name": "소매",
          "count": 492,
          "share": 9.9
        },
        {
          "name": "미분류",
          "count": 347,
          "share": 7.0
        },
        {
          "name": "외식",
          "count": 260,
          "share": 5.2
        }
      ],
      "topMinorCategories": [
        {
          "name": "일반미용업",
          "count": 1506,
          "share": 30.2
        },
        {
          "name": "미분류",
          "count": 1160,
          "share": 23.3
        },
        {
          "name": "의원",
          "count": 339,
          "share": 6.8
        },
        {
          "name": "일반세탁업",
          "count": 330,
          "share": 6.6
        },
        {
          "name": "피부미용업",
          "count": 294,
          "share": 5.9
        },
        {
          "name": "제과점영업",
          "count": 260,
          "share": 5.2
        },
        {
          "name": "노래연습장",
          "count": 246,
          "share": 4.9
        },
        {
          "name": "네일아트업",
          "count": 226,
          "share": 4.5
        },
        {
          "name": "한의원",
          "count": 177,
          "share": 3.6
        },
        {
          "name": "치과의원",
          "count": 151,
          "share": 3.0
        }
      ],
      "topBusinessTypes": [
        {
          "name": "미용실",
          "count": 1506,
          "share": 30.2
        },
        {
          "name": "오락장 운영업",
          "count": 567,
          "share": 11.4
        },
        {
          "name": "의약품 소매업",
          "count": 373,
          "share": 7.5
        },
        {
          "name": "피부관리실",
          "count": 368,
          "share": 7.4
        },
        {
          "name": "일반 의원",
          "count": 362,
          "share": 7.3
        },
        {
          "name": "가정용 세탁업",
          "count": 350,
          "share": 7.0
        },
        {
          "name": "일반이용업",
          "count": 342,
          "share": 6.9
        },
        {
          "name": "제과점업",
          "count": 260,
          "share": 5.2
        },
        {
          "name": "기타 미용업",
          "count": 240,
          "share": 4.8
        },
        {
          "name": "한의원",
          "count": 178,
          "share": 3.6
        },
        {
          "name": "치과 의원",
          "count": 151,
          "share": 3.0
        },
        {
          "name": "여관업",
          "count": 120,
          "share": 2.4
        }
      ],
      "topAdministrativeDongs": [
        {
          "name": "대연동",
          "count": 2101,
          "share": 42.2
        },
        {
          "name": "용호동",
          "count": 1183,
          "share": 23.7
        },
        {
          "name": "문현동",
          "count": 684,
          "share": 13.7
        },
        {
          "name": "미분류",
          "count": 483,
          "share": 9.7
        },
        {
          "name": "감만동",
          "count": 278,
          "share": 5.6
        },
        {
          "name": "우암동",
          "count": 162,
          "share": 3.3
        },
        {
          "name": "용당동",
          "count": 93,
          "share": 1.9
        }
      ],
      "center": {
        "lat": 35.130649,
        "lng": 129.0943217
      },
      "sampleStores": [
        {
          "name": "의료법인정화의료재단봉생힐링병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 남구 양지골로 241, 감만동 봉생 제3병원 (감만동)",
          "dong": "미분류",
          "status": "영업/정상",
          "openedDate": "2023-03-21",
          "lat": null,
          "lng": null
        },
        {
          "name": "대연성모병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "정신병원",
          "address": "부산광역시 남구 황령대로353번길 66 (대연동)",
          "dong": "미분류",
          "status": "영업/정상",
          "openedDate": "1990-03-09",
          "lat": null,
          "lng": null
        },
        {
          "name": "의료법인인혜의료재단가나병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "정신병원",
          "address": "부산광역시 남구 유엔평화로 156 (용당동)",
          "dong": "미분류",
          "status": "영업/정상",
          "openedDate": "1999-02-12",
          "lat": null,
          "lng": null
        },
        {
          "name": "의료법인고려의료재단부산고려병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 남구 수영로 238 (대연동)",
          "dong": "대연동",
          "status": "영업/정상",
          "openedDate": "2002-04-22",
          "lat": 35.1349043,
          "lng": 129.0926358
        },
        {
          "name": "부산성모병원(재단법인 천주교부산교구유지재단)",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "종합병원",
          "address": "부산광역시 남구 용호로232번길 25-14 (용호동)",
          "dong": "용호동",
          "status": "영업/정상",
          "openedDate": "2006-06-02",
          "lat": 35.1096983,
          "lng": 129.1099543
        },
        {
          "name": "파크사이드재활의학병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 남구 유엔평화로125번길 11-10 (대연동)",
          "dong": "대연동",
          "status": "영업/정상",
          "openedDate": "2006-09-25",
          "lat": 35.1251726,
          "lng": 129.0971762
        },
        {
          "name": "효메디요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 남구 용호로 95 (용호동)",
          "dong": "용호동",
          "status": "영업/정상",
          "openedDate": "2006-10-04",
          "lat": 35.1236624,
          "lng": 129.1127514
        },
        {
          "name": "의료법인은경의료재단 인창대연요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 남구 수영로 164 (대연동)",
          "dong": "대연동",
          "status": "영업/정상",
          "openedDate": "2016-09-13",
          "lat": 35.1344856,
          "lng": 129.0845781
        },
        {
          "name": "우리들40플란트치과병원",
          "category": "치과의원",
          "majorCategory": "서비스",
          "minorCategory": "치과병원",
          "address": "부산광역시 남구 전포대로 90, 4층 401,402호 (문현동)",
          "dong": "문현동",
          "status": "영업/정상",
          "openedDate": "2017-03-14",
          "lat": 35.1447559,
          "lng": 129.0671229
        },
        {
          "name": "윌리스요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 남구 수영로 185-7 (대연동)",
          "dong": "대연동",
          "status": "영업/정상",
          "openedDate": "2007-04-09",
          "lat": 35.1353091,
          "lng": 129.0865774
        },
        {
          "name": "그랜드자연요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 남구 황령대로 355-14 (대연동)",
          "dong": "대연동",
          "status": "영업/정상",
          "openedDate": "2007-11-08",
          "lat": 35.1467922,
          "lng": 129.0977948
        },
        {
          "name": "BH병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "정신병원",
          "address": "부산광역시 남구 수영로 165 (대연동)",
          "dong": "미분류",
          "status": "영업/정상",
          "openedDate": "2009-02-13",
          "lat": null,
          "lng": null
        }
      ]
    },
    {
      "name": "동구",
      "totalStores": 2432,
      "activeStores": 925,
      "closedStores": 1507,
      "activeRate": 38.0,
      "closedRate": 62.0,
      "topMajorCategories": [
        {
          "name": "서비스",
          "count": 1835,
          "share": 75.5
        },
        {
          "name": "미분류",
          "count": 260,
          "share": 10.7
        },
        {
          "name": "소매",
          "count": 218,
          "share": 9.0
        },
        {
          "name": "외식",
          "count": 119,
          "share": 4.9
        }
      ],
      "topMinorCategories": [
        {
          "name": "일반미용업",
          "count": 668,
          "share": 27.5
        },
        {
          "name": "미분류",
          "count": 575,
          "share": 23.6
        },
        {
          "name": "여관업",
          "count": 190,
          "share": 7.8
        },
        {
          "name": "일반세탁업",
          "count": 150,
          "share": 6.2
        },
        {
          "name": "의원",
          "count": 135,
          "share": 5.6
        },
        {
          "name": "제과점영업",
          "count": 119,
          "share": 4.9
        },
        {
          "name": "피부미용업",
          "count": 101,
          "share": 4.2
        },
        {
          "name": "네일아트업",
          "count": 82,
          "share": 3.4
        },
        {
          "name": "노래연습장",
          "count": 78,
          "share": 3.2
        },
        {
          "name": "여인숙업",
          "count": 74,
          "share": 3.0
        }
      ],
      "topBusinessTypes": [
        {
          "name": "미용실",
          "count": 668,
          "share": 27.5
        },
        {
          "name": "여관업",
          "count": 297,
          "share": 12.2
        },
        {
          "name": "일반이용업",
          "count": 260,
          "share": 10.7
        },
        {
          "name": "의약품 소매업",
          "count": 189,
          "share": 7.8
        },
        {
          "name": "오락장 운영업",
          "count": 175,
          "share": 7.2
        },
        {
          "name": "일반 의원",
          "count": 155,
          "share": 6.4
        },
        {
          "name": "가정용 세탁업",
          "count": 151,
          "share": 6.2
        },
        {
          "name": "피부관리실",
          "count": 120,
          "share": 4.9
        },
        {
          "name": "제과점업",
          "count": 119,
          "share": 4.9
        },
        {
          "name": "기타 미용업",
          "count": 92,
          "share": 3.8
        },
        {
          "name": "한의원",
          "count": 74,
          "share": 3.0
        },
        {
          "name": "치과 의원",
          "count": 55,
          "share": 2.3
        }
      ],
      "topAdministrativeDongs": [
        {
          "name": "초량동",
          "count": 799,
          "share": 32.9
        },
        {
          "name": "범일동",
          "count": 733,
          "share": 30.1
        },
        {
          "name": "수정동",
          "count": 547,
          "share": 22.5
        },
        {
          "name": "미분류",
          "count": 191,
          "share": 7.9
        },
        {
          "name": "좌천동",
          "count": 160,
          "share": 6.6
        },
        {
          "name": "청학동",
          "count": 2,
          "share": 0.1
        }
      ],
      "center": {
        "lat": 35.1288614,
        "lng": 129.0476293
      },
      "sampleStores": [
        {
          "name": "의료법인청십자의료재단 청십자요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 동구 중앙대로 364 (수정동, 청십자병원)",
          "dong": "수정동",
          "status": "휴업",
          "openedDate": "2005-12-14",
          "lat": 35.1277454,
          "lng": 129.0483301
        },
        {
          "name": "더힐러스병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "정신병원",
          "address": "부산광역시 동구 범일로 112 (범일동)",
          "dong": "범일동",
          "status": "영업/정상",
          "openedDate": "2019-12-18",
          "lat": 35.1399331,
          "lng": 129.0596632
        },
        {
          "name": "재단법인일신기독교선교회 일신기독병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "종합병원",
          "address": "부산광역시 동구 정공단로 27 (좌천동)",
          "dong": "좌천동",
          "status": "영업/정상",
          "openedDate": "1984-07-02",
          "lat": 35.1354822,
          "lng": 129.0541031
        },
        {
          "name": "의료법인정화의료재단 봉생기념병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "종합병원",
          "address": "부산광역시 동구 중앙대로 401 (좌천동, 봉생병원)",
          "dong": "좌천동",
          "status": "영업/정상",
          "openedDate": "1985-01-05",
          "lat": 35.1310615,
          "lng": 129.0504785
        },
        {
          "name": "좋은문화병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "종합병원",
          "address": "부산광역시 동구 범일로 119 (범일동)",
          "dong": "범일동",
          "status": "영업/정상",
          "openedDate": "1986-11-01",
          "lat": 35.1408919,
          "lng": 129.0590597
        },
        {
          "name": "힘내라병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 동구 범일로 85 (범일동, 삼미85 빌딩)",
          "dong": "범일동",
          "status": "영업/정상",
          "openedDate": "2015-07-13",
          "lat": 35.1377649,
          "lng": 129.0589211
        },
        {
          "name": "세일병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 동구 중앙대로 317 (초량동, 세일병원)",
          "dong": "초량동",
          "status": "영업/정상",
          "openedDate": "1983-09-10",
          "lat": 35.1248455,
          "lng": 129.0445599
        },
        {
          "name": "새부산병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 동구 초량중로 74 (초량동, 새부산병원)",
          "dong": "초량동",
          "status": "영업/정상",
          "openedDate": "2005-11-22",
          "lat": 35.1182879,
          "lng": 129.0391847
        },
        {
          "name": "의료법인인당의료재단 부산혜민요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 동구 중앙대로 524 (범일동)",
          "dong": "범일동",
          "status": "영업/정상",
          "openedDate": "2006-08-10",
          "lat": 35.1400079,
          "lng": 129.0569574
        },
        {
          "name": "의료법인나라의료재단 부산나라요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 동구 중앙대로 421(좌천동)",
          "dong": "좌천동",
          "status": "영업/정상",
          "openedDate": "2007-03-06",
          "lat": 35.1322053,
          "lng": 129.0518186
        },
        {
          "name": "의료법인은경의료재단 인창요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 동구 중앙대로 281 (초량동)",
          "dong": "초량동",
          "status": "영업/정상",
          "openedDate": "2008-02-29",
          "lat": 35.1218316,
          "lng": 129.0428396
        },
        {
          "name": "의료법인서강의료재단 서강병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 동구 중앙대로 514, 2층3층 (범일동, 한성기린아파트)",
          "dong": "범일동",
          "status": "영업/정상",
          "openedDate": "2015-10-15",
          "lat": 35.1389821,
          "lng": 129.0569253
        }
      ]
    },
    {
      "name": "동래구",
      "totalStores": 6482,
      "activeStores": 2652,
      "closedStores": 3830,
      "activeRate": 40.9,
      "closedRate": 59.1,
      "topMajorCategories": [
        {
          "name": "서비스",
          "count": 5243,
          "share": 80.9
        },
        {
          "name": "소매",
          "count": 469,
          "share": 7.2
        },
        {
          "name": "미분류",
          "count": 443,
          "share": 6.8
        },
        {
          "name": "외식",
          "count": 327,
          "share": 5.0
        }
      ],
      "topMinorCategories": [
        {
          "name": "일반미용업",
          "count": 1775,
          "share": 27.4
        },
        {
          "name": "미분류",
          "count": 1249,
          "share": 19.3
        },
        {
          "name": "일반세탁업",
          "count": 522,
          "share": 8.1
        },
        {
          "name": "노래연습장",
          "count": 456,
          "share": 7.0
        },
        {
          "name": "피부미용업",
          "count": 435,
          "share": 6.7
        },
        {
          "name": "의원",
          "count": 356,
          "share": 5.5
        },
        {
          "name": "여관업",
          "count": 332,
          "share": 5.1
        },
        {
          "name": "제과점영업",
          "count": 327,
          "share": 5.0
        },
        {
          "name": "네일아트업",
          "count": 325,
          "share": 5.0
        },
        {
          "name": "한의원",
          "count": 204,
          "share": 3.1
        }
      ],
      "topBusinessTypes": [
        {
          "name": "미용실",
          "count": 1775,
          "share": 27.4
        },
        {
          "name": "오락장 운영업",
          "count": 793,
          "share": 12.2
        },
        {
          "name": "가정용 세탁업",
          "count": 542,
          "share": 8.4
        },
        {
          "name": "피부관리실",
          "count": 504,
          "share": 7.8
        },
        {
          "name": "일반이용업",
          "count": 436,
          "share": 6.7
        },
        {
          "name": "여관업",
          "count": 417,
          "share": 6.4
        },
        {
          "name": "일반 의원",
          "count": 408,
          "share": 6.3
        },
        {
          "name": "의약품 소매업",
          "count": 376,
          "share": 5.8
        },
        {
          "name": "기타 미용업",
          "count": 340,
          "share": 5.2
        },
        {
          "name": "제과점업",
          "count": 327,
          "share": 5.0
        },
        {
          "name": "한의원",
          "count": 208,
          "share": 3.2
        },
        {
          "name": "치과 의원",
          "count": 185,
          "share": 2.9
        }
      ],
      "topAdministrativeDongs": [
        {
          "name": "온천동",
          "count": 2085,
          "share": 32.2
        },
        {
          "name": "사직동",
          "count": 1138,
          "share": 17.6
        },
        {
          "name": "안락동",
          "count": 1075,
          "share": 16.6
        },
        {
          "name": "명장동",
          "count": 544,
          "share": 8.4
        },
        {
          "name": "명륜동",
          "count": 539,
          "share": 8.3
        },
        {
          "name": "수안동",
          "count": 420,
          "share": 6.5
        },
        {
          "name": "미분류",
          "count": 328,
          "share": 5.1
        },
        {
          "name": "복천동",
          "count": 158,
          "share": 2.4
        },
        {
          "name": "낙민동",
          "count": 153,
          "share": 2.4
        },
        {
          "name": "칠산동",
          "count": 42,
          "share": 0.6
        }
      ],
      "center": {
        "lat": 35.204667,
        "lng": 129.0827461
      },
      "sampleStores": [
        {
          "name": "의료법인 은빛의료재단 세하병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 동래구 충렬대로 258, 2층 일부, 4-5층 (낙민동)",
          "dong": "낙민동",
          "status": "영업/정상",
          "openedDate": "2010-03-31",
          "lat": 35.2006591,
          "lng": 129.0872911
        },
        {
          "name": "새힘병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 동래구 아시아드대로 261, 지하1~지상6층 (온천동)",
          "dong": "온천동",
          "status": "영업/정상",
          "openedDate": "2019-11-25",
          "lat": 35.2069957,
          "lng": 129.0687174
        },
        {
          "name": "대동병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "종합병원",
          "address": "부산광역시 동래구 충렬대로 187 (명륜동)",
          "dong": "명륜동",
          "status": "영업/정상",
          "openedDate": "1980-02-21",
          "lat": 35.2042338,
          "lng": 129.0802213
        },
        {
          "name": "의료법인 파란시티의료재단 부산항운병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 동래구 충렬대로348번길 1 (안락동)",
          "dong": "미분류",
          "status": "영업/정상",
          "openedDate": "2000-08-01",
          "lat": null,
          "lng": null
        },
        {
          "name": "세화병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 동래구 미남로132번길 28 (온천동)",
          "dong": "온천동",
          "status": "영업/정상",
          "openedDate": "2003-08-11",
          "lat": 35.2059146,
          "lng": 129.0711763
        },
        {
          "name": "사단법인 부산의료선교회 세계로병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 동래구 종합운동장로 42 (사직동)",
          "dong": "미분류",
          "status": "영업/정상",
          "openedDate": "2004-01-26",
          "lat": null,
          "lng": null
        },
        {
          "name": "미주치과병원",
          "category": "치과의원",
          "majorCategory": "서비스",
          "minorCategory": "치과병원",
          "address": "부산광역시 동래구 충렬대로 114 (온천동)",
          "dong": "온천동",
          "status": "영업/정상",
          "openedDate": "2004-09-02",
          "lat": 35.2062242,
          "lng": 129.0730032
        },
        {
          "name": "하나인치과병원",
          "category": "치과의원",
          "majorCategory": "서비스",
          "minorCategory": "치과병원",
          "address": "부산광역시 동래구 명안로85번길 42 (명장동)",
          "dong": "명장동",
          "status": "영업/정상",
          "openedDate": "2006-01-11",
          "lat": 35.2045636,
          "lng": 129.1023094
        },
        {
          "name": "의료법인 은빛의료재단 참사랑요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 동래구 충렬대로 258 (낙민동)",
          "dong": "미분류",
          "status": "영업/정상",
          "openedDate": "2006-06-21",
          "lat": null,
          "lng": null
        },
        {
          "name": "부산우리들병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 동래구 중앙대로 1523 (온천동, SKHUBSKY)",
          "dong": "온천동",
          "status": "영업/정상",
          "openedDate": "2006-11-14",
          "lat": 35.2212943,
          "lng": 129.0855781
        },
        {
          "name": "의)은성의료재단 좋은애인요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 동래구 충렬대로359번길 8, 좋은애인요양병원 지하2~지상8층 (안락동)",
          "dong": "안락동",
          "status": "영업/정상",
          "openedDate": "2006-11-22",
          "lat": 35.1983826,
          "lng": 129.0983597
        },
        {
          "name": "성산현대요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 동래구 시실로 12 (명륜동)",
          "dong": "명륜동",
          "status": "영업/정상",
          "openedDate": "2006-12-26",
          "lat": 35.2173391,
          "lng": 129.0854283
        }
      ]
    },
    {
      "name": "부산진구",
      "totalStores": 9303,
      "activeStores": 4101,
      "closedStores": 5202,
      "activeRate": 44.1,
      "closedRate": 55.9,
      "topMajorCategories": [
        {
          "name": "서비스",
          "count": 7595,
          "share": 81.6
        },
        {
          "name": "소매",
          "count": 728,
          "share": 7.8
        },
        {
          "name": "미분류",
          "count": 538,
          "share": 5.8
        },
        {
          "name": "외식",
          "count": 442,
          "share": 4.8
        }
      ],
      "topMinorCategories": [
        {
          "name": "일반미용업",
          "count": 2263,
          "share": 24.3
        },
        {
          "name": "미분류",
          "count": 1740,
          "share": 18.7
        },
        {
          "name": "의원",
          "count": 828,
          "share": 8.9
        },
        {
          "name": "피부미용업",
          "count": 764,
          "share": 8.2
        },
        {
          "name": "네일아트업",
          "count": 643,
          "share": 6.9
        },
        {
          "name": "노래연습장",
          "count": 582,
          "share": 6.3
        },
        {
          "name": "일반세탁업",
          "count": 471,
          "share": 5.1
        },
        {
          "name": "제과점영업",
          "count": 442,
          "share": 4.8
        },
        {
          "name": "여관업",
          "count": 367,
          "share": 3.9
        },
        {
          "name": "한의원",
          "count": 308,
          "share": 3.3
        }
      ],
      "topBusinessTypes": [
        {
          "name": "미용실",
          "count": 2263,
          "share": 24.3
        },
        {
          "name": "오락장 운영업",
          "count": 1056,
          "share": 11.4
        },
        {
          "name": "피부관리실",
          "count": 1029,
          "share": 11.1
        },
        {
          "name": "일반 의원",
          "count": 887,
          "share": 9.5
        },
        {
          "name": "기타 미용업",
          "count": 690,
          "share": 7.4
        },
        {
          "name": "의약품 소매업",
          "count": 572,
          "share": 6.1
        },
        {
          "name": "일반이용업",
          "count": 535,
          "share": 5.8
        },
        {
          "name": "가정용 세탁업",
          "count": 494,
          "share": 5.3
        },
        {
          "name": "여관업",
          "count": 487,
          "share": 5.2
        },
        {
          "name": "제과점업",
          "count": 442,
          "share": 4.8
        },
        {
          "name": "한의원",
          "count": 313,
          "share": 3.4
        },
        {
          "name": "치과 의원",
          "count": 256,
          "share": 2.8
        }
      ],
      "topAdministrativeDongs": [
        {
          "name": "부전동",
          "count": 2880,
          "share": 31.0
        },
        {
          "name": "전포동",
          "count": 1188,
          "share": 12.8
        },
        {
          "name": "양정동",
          "count": 829,
          "share": 8.9
        },
        {
          "name": "개금동",
          "count": 798,
          "share": 8.6
        },
        {
          "name": "당감동",
          "count": 708,
          "share": 7.6
        },
        {
          "name": "범천동",
          "count": 578,
          "share": 6.2
        },
        {
          "name": "가야동",
          "count": 558,
          "share": 6.0
        },
        {
          "name": "미분류",
          "count": 504,
          "share": 5.4
        },
        {
          "name": "부암동",
          "count": 457,
          "share": 4.9
        },
        {
          "name": "초읍동",
          "count": 443,
          "share": 4.8
        }
      ],
      "center": {
        "lat": 35.1597534,
        "lng": 129.0526093
      },
      "sampleStores": [
        {
          "name": "큰힘병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 부산진구 신천대로 246, 2층 (부암동, 메리움아파트)",
          "dong": "부암동",
          "status": "영업/정상",
          "openedDate": "2023-08-18",
          "lat": 35.1637561,
          "lng": 129.0511196
        },
        {
          "name": "메타한방병원",
          "category": "한의원",
          "majorCategory": "서비스",
          "minorCategory": "한방병원",
          "address": "부산광역시 부산진구 중앙대로 653, DR에코시티 2~4층, 5층 일부 (부전동)",
          "dong": "부전동",
          "status": "영업/정상",
          "openedDate": "2022-04-19",
          "lat": 35.1511238,
          "lng": 129.058865
        },
        {
          "name": "바로서면병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 부산진구 중앙대로 777, 4,6,7층 (부전동)",
          "dong": "부전동",
          "status": "영업/정상",
          "openedDate": "2023-06-05",
          "lat": 35.1618351,
          "lng": 129.0618882
        },
        {
          "name": "에덴어린이병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 부산진구 가야대로 649, 6~15층 (가야동)",
          "dong": "개금동",
          "status": "영업/정상",
          "openedDate": "2021-12-24",
          "lat": 35.153492,
          "lng": 129.0234027
        },
        {
          "name": "부산큰병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 부산진구 가야대로 494, 지하1층~지상1층 각 일부, 지상2층~4층 전부 (개금동)",
          "dong": "개금동",
          "status": "영업/정상",
          "openedDate": "2020-04-10",
          "lat": 35.1529023,
          "lng": 129.0263881
        },
        {
          "name": "서면더존한방병원",
          "category": "한의원",
          "majorCategory": "서비스",
          "minorCategory": "한방병원",
          "address": "부산광역시 부산진구 중앙대로 708, 지하1,2,3층 지상2층 각 일부, 9~10층 전부 (부전동)",
          "dong": "부전동",
          "status": "영업/정상",
          "openedDate": "2020-05-06",
          "lat": 35.1559732,
          "lng": 129.0595736
        },
        {
          "name": "학교법인 춘해병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "종합병원",
          "address": "부산광역시 부산진구 중앙대로 605, 지상1층~지상9층 (범천동)",
          "dong": "미분류",
          "status": "영업/정상",
          "openedDate": "1974-02-26",
          "lat": null,
          "lng": null
        },
        {
          "name": "인제대학교부산백병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "종합병원",
          "address": "부산광역시 부산진구 복지로 75, 진사로83번길 81, 1층(일부), 3층 (개금동)",
          "dong": "개금동",
          "status": "영업/정상",
          "openedDate": "1979-06-01",
          "lat": 35.1459532,
          "lng": 129.0208104
        },
        {
          "name": "성가병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 부산진구 범일로 133, 135, 3층 일부, 4층 전부, 5층 일부 (범천동)",
          "dong": "범천동",
          "status": "영업/정상",
          "openedDate": "1981-04-14",
          "lat": 35.1420609,
          "lng": 129.0590214
        },
        {
          "name": "학교법인)동의병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "종합병원",
          "address": "부산광역시 부산진구 양정로 62, 지상2ㆍ3ㆍ10층 각 일부/ 지하1ㆍ지상1ㆍ지상4~지상8층 전층 (양정동)",
          "dong": "미분류",
          "status": "영업/정상",
          "openedDate": "1990-04-21",
          "lat": null,
          "lng": null
        },
        {
          "name": "동의대부속 한방병원",
          "category": "한의원",
          "majorCategory": "서비스",
          "minorCategory": "한방병원",
          "address": "부산광역시 부산진구 양정로 62, 지상2층 일부, 지상3층 일부, 지상9층 전부, 지상10층 일부 (양정동)",
          "dong": "미분류",
          "status": "영업/정상",
          "openedDate": "1990-04-21",
          "lat": null,
          "lng": null
        },
        {
          "name": "한사랑요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 부산진구 새싹로 107, 지하1층~지상6층층 (부암동)",
          "dong": "부암동",
          "status": "영업/정상",
          "openedDate": "2004-01-20",
          "lat": 35.1661024,
          "lng": 129.0519134
        }
      ]
    },
    {
      "name": "북구",
      "totalStores": 5150,
      "activeStores": 2080,
      "closedStores": 3070,
      "activeRate": 40.4,
      "closedRate": 59.6,
      "topMajorCategories": [
        {
          "name": "서비스",
          "count": 4168,
          "share": 80.9
        },
        {
          "name": "미분류",
          "count": 428,
          "share": 8.3
        },
        {
          "name": "소매",
          "count": 317,
          "share": 6.2
        },
        {
          "name": "외식",
          "count": 237,
          "share": 4.6
        }
      ],
      "topMinorCategories": [
        {
          "name": "일반미용업",
          "count": 1286,
          "share": 25.0
        },
        {
          "name": "미분류",
          "count": 1014,
          "share": 19.7
        },
        {
          "name": "피부미용업",
          "count": 702,
          "share": 13.6
        },
        {
          "name": "일반세탁업",
          "count": 373,
          "share": 7.2
        },
        {
          "name": "노래연습장",
          "count": 331,
          "share": 6.4
        },
        {
          "name": "의원",
          "count": 273,
          "share": 5.3
        },
        {
          "name": "여관업",
          "count": 237,
          "share": 4.6
        },
        {
          "name": "제과점영업",
          "count": 237,
          "share": 4.6
        },
        {
          "name": "네일아트업",
          "count": 198,
          "share": 3.8
        },
        {
          "name": "한의원",
          "count": 130,
          "share": 2.5
        }
      ],
      "topBusinessTypes": [
        {
          "name": "미용실",
          "count": 1286,
          "share": 25.0
        },
        {
          "name": "피부관리실",
          "count": 741,
          "share": 14.4
        },
        {
          "name": "오락장 운영업",
          "count": 600,
          "share": 11.7
        },
        {
          "name": "일반이용업",
          "count": 427,
          "share": 8.3
        },
        {
          "name": "가정용 세탁업",
          "count": 422,
          "share": 8.2
        },
        {
          "name": "일반 의원",
          "count": 313,
          "share": 6.1
        },
        {
          "name": "여관업",
          "count": 273,
          "share": 5.3
        },
        {
          "name": "의약품 소매업",
          "count": 247,
          "share": 4.8
        },
        {
          "name": "제과점업",
          "count": 237,
          "share": 4.6
        },
        {
          "name": "기타 미용업",
          "count": 226,
          "share": 4.4
        },
        {
          "name": "한의원",
          "count": 131,
          "share": 2.5
        },
        {
          "name": "치과 의원",
          "count": 122,
          "share": 2.4
        }
      ],
      "topAdministrativeDongs": [
        {
          "name": "구포동",
          "count": 1398,
          "share": 27.1
        },
        {
          "name": "덕천동",
          "count": 1171,
          "share": 22.7
        },
        {
          "name": "화명동",
          "count": 1157,
          "share": 22.5
        },
        {
          "name": "만덕동",
          "count": 765,
          "share": 14.9
        },
        {
          "name": "금곡동",
          "count": 342,
          "share": 6.6
        },
        {
          "name": "미분류",
          "count": 317,
          "share": 6.2
        }
      ],
      "center": {
        "lat": 35.216959,
        "lng": 129.0129078
      },
      "sampleStores": [
        {
          "name": "화명하나병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 북구 화명신도시로 120 (화명동)",
          "dong": "화명동",
          "status": "휴업",
          "openedDate": "2014-11-06",
          "lat": 35.2345876,
          "lng": 129.0111521
        },
        {
          "name": "의료법인 신생의료재단 센트럴병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 북구 만덕대로 37 (덕천동)",
          "dong": "덕천동",
          "status": "영업/정상",
          "openedDate": "2019-03-21",
          "lat": 35.2113214,
          "lng": 129.0091627
        },
        {
          "name": "구포성심병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "종합병원",
          "address": "부산광역시 북구 낙동대로 1786 (구포동)",
          "dong": "구포동",
          "status": "영업/정상",
          "openedDate": "1983-04-19",
          "lat": 35.209699,
          "lng": 129.0047076
        },
        {
          "name": "한사랑내과병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 북구 만덕대로 38 (덕천동)",
          "dong": "덕천동",
          "status": "영업/정상",
          "openedDate": "1996-06-24",
          "lat": 35.2107963,
          "lng": 129.0091351
        },
        {
          "name": "재단법인 일신기독교선교회 화명일신기독병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 북구 금곡대로 264 (화명동)",
          "dong": "화명동",
          "status": "영업/정상",
          "openedDate": "1998-12-24",
          "lat": 35.2318472,
          "lng": 129.0136502
        },
        {
          "name": "아하브병원(의료법인 백양의료재단)",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "정신병원",
          "address": "부산광역시 북구 만덕고개길 84, 지하1~2층, 지상1~5층, 7층일부 (만덕동)",
          "dong": "만덕동",
          "status": "영업/정상",
          "openedDate": "1999-11-12",
          "lat": 35.211562,
          "lng": 129.0486468
        },
        {
          "name": "의료법인 인당의료재단 부민병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "종합병원",
          "address": "부산광역시 북구 만덕대로 59 (덕천동)",
          "dong": "덕천동",
          "status": "영업/정상",
          "openedDate": "2003-01-02",
          "lat": 35.2118667,
          "lng": 129.0112472
        },
        {
          "name": "사과나무치과병원",
          "category": "치과의원",
          "majorCategory": "서비스",
          "minorCategory": "치과병원",
          "address": "부산광역시 북구 금곡대로303번길 2, 5층 (화명동, 시티타워)",
          "dong": "미분류",
          "status": "영업/정상",
          "openedDate": "2003-01-09",
          "lat": null,
          "lng": null
        },
        {
          "name": "아하브요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 북구 만덕고개길 84, 아하브병원 6층, 7층일부층 (만덕동)",
          "dong": "만덕동",
          "status": "영업/정상",
          "openedDate": "2003-12-22",
          "lat": 35.211562,
          "lng": 129.0486468
        },
        {
          "name": "미래로병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 북구 금곡대로 15 (덕천동)",
          "dong": "덕천동",
          "status": "영업/정상",
          "openedDate": "2006-06-01",
          "lat": 35.2113333,
          "lng": 129.0043535
        },
        {
          "name": "다사랑요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 북구 덕천로 339 (만덕동)",
          "dong": "만덕동",
          "status": "영업/정상",
          "openedDate": "2006-10-16",
          "lat": 35.2091339,
          "lng": 129.0407959
        },
        {
          "name": "남산정요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 북구 만덕대로 158 (덕천동)",
          "dong": "덕천동",
          "status": "영업/정상",
          "openedDate": "2007-09-04",
          "lat": 35.2130064,
          "lng": 129.0219611
        }
      ]
    },
    {
      "name": "사상구",
      "totalStores": 3774,
      "activeStores": 1737,
      "closedStores": 2037,
      "activeRate": 46.0,
      "closedRate": 54.0,
      "topMajorCategories": [
        {
          "name": "서비스",
          "count": 2955,
          "share": 78.3
        },
        {
          "name": "미분류",
          "count": 344,
          "share": 9.1
        },
        {
          "name": "소매",
          "count": 290,
          "share": 7.7
        },
        {
          "name": "외식",
          "count": 185,
          "share": 4.9
        }
      ],
      "topMinorCategories": [
        {
          "name": "미분류",
          "count": 945,
          "share": 25.0
        },
        {
          "name": "일반미용업",
          "count": 906,
          "share": 24.0
        },
        {
          "name": "노래연습장",
          "count": 327,
          "share": 8.7
        },
        {
          "name": "일반세탁업",
          "count": 324,
          "share": 8.6
        },
        {
          "name": "여관업",
          "count": 216,
          "share": 5.7
        },
        {
          "name": "제과점영업",
          "count": 185,
          "share": 4.9
        },
        {
          "name": "의원",
          "count": 178,
          "share": 4.7
        },
        {
          "name": "피부미용업",
          "count": 157,
          "share": 4.2
        },
        {
          "name": "네일아트업",
          "count": 148,
          "share": 3.9
        },
        {
          "name": "치과의원",
          "count": 81,
          "share": 2.1
        }
      ],
      "topBusinessTypes": [
        {
          "name": "미용실",
          "count": 906,
          "share": 24.0
        },
        {
          "name": "오락장 운영업",
          "count": 638,
          "share": 16.9
        },
        {
          "name": "일반이용업",
          "count": 341,
          "share": 9.0
        },
        {
          "name": "가정용 세탁업",
          "count": 332,
          "share": 8.8
        },
        {
          "name": "여관업",
          "count": 326,
          "share": 8.6
        },
        {
          "name": "일반 의원",
          "count": 223,
          "share": 5.9
        },
        {
          "name": "의약품 소매업",
          "count": 220,
          "share": 5.8
        },
        {
          "name": "제과점업",
          "count": 185,
          "share": 4.9
        },
        {
          "name": "피부관리실",
          "count": 184,
          "share": 4.9
        },
        {
          "name": "기타 미용업",
          "count": 163,
          "share": 4.3
        },
        {
          "name": "치과 의원",
          "count": 81,
          "share": 2.1
        },
        {
          "name": "안경 소매업",
          "count": 70,
          "share": 1.9
        }
      ],
      "topAdministrativeDongs": [
        {
          "name": "괘법동",
          "count": 820,
          "share": 21.7
        },
        {
          "name": "주례동",
          "count": 734,
          "share": 19.4
        },
        {
          "name": "모라동",
          "count": 546,
          "share": 14.5
        },
        {
          "name": "덕포동",
          "count": 414,
          "share": 11.0
        },
        {
          "name": "엄궁동",
          "count": 359,
          "share": 9.5
        },
        {
          "name": "학장동",
          "count": 338,
          "share": 9.0
        },
        {
          "name": "감전동",
          "count": 324,
          "share": 8.6
        },
        {
          "name": "삼락동",
          "count": 137,
          "share": 3.6
        },
        {
          "name": "미분류",
          "count": 102,
          "share": 2.7
        }
      ],
      "center": {
        "lat": 35.1598775,
        "lng": 128.9881037
      },
      "sampleStores": [
        {
          "name": "의료법인 은성의료재단 좋은주례요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 사상구 가야대로 264 (주례동)",
          "dong": "주례동",
          "status": "휴업",
          "openedDate": "2014-04-29",
          "lat": 35.1500527,
          "lng": 129.0014675
        },
        {
          "name": "의료법인 효원의료재단 주례자연병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "정신병원",
          "address": "부산광역시 사상구 학장로 325 (주례동)",
          "dong": "주례동",
          "status": "휴업",
          "openedDate": "2006-11-23",
          "lat": 35.1495585,
          "lng": 128.9995316
        },
        {
          "name": "이너피스한방병원",
          "category": "한의원",
          "majorCategory": "서비스",
          "minorCategory": "한방병원",
          "address": "부산광역시 사상구 백양대로804번길 36(덕포동)",
          "dong": "덕포동",
          "status": "휴업",
          "openedDate": "2022-06-13",
          "lat": 35.1785793,
          "lng": 128.991573
        },
        {
          "name": "의료법인 영재의료재단 큰솔2병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 사상구 학장로 189 (학장동)",
          "dong": "학장동",
          "status": "영업/정상",
          "openedDate": "2019-04-01",
          "lat": 35.1436111,
          "lng": 128.9872323
        },
        {
          "name": "상현한방병원",
          "category": "한의원",
          "majorCategory": "서비스",
          "minorCategory": "한방병원",
          "address": "부산광역시 사상구 사상로 174 (괘법동)",
          "dong": "괘법동",
          "status": "영업/정상",
          "openedDate": "2024-09-25",
          "lat": 35.1610628,
          "lng": 128.9860801
        },
        {
          "name": "사상연세비앤이치과병원",
          "category": "치과의원",
          "majorCategory": "서비스",
          "minorCategory": "치과병원",
          "address": "부산광역시 사상구 학감대로 233, 2층 (감전동)",
          "dong": "감전동",
          "status": "영업/정상",
          "openedDate": "2024-03-22",
          "lat": 35.1519933,
          "lng": 128.9896534
        },
        {
          "name": "의료법인현백의료재단사상고려병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 사상구 사상로 282, 280일부 (덕포동)",
          "dong": "덕포동",
          "status": "영업/정상",
          "openedDate": "2008-08-26",
          "lat": 35.1699159,
          "lng": 128.9828398
        },
        {
          "name": "의료법인센텀의료재단 서부산센텀병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 사상구 새벽로 226 (괘법동)",
          "dong": "괘법동",
          "status": "영업/정상",
          "openedDate": "2009-02-04",
          "lat": 35.1611655,
          "lng": 128.9845525
        },
        {
          "name": "강림요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 사상구 낙동대로 792 (엄궁동)",
          "dong": "엄궁동",
          "status": "영업/정상",
          "openedDate": "2010-04-23",
          "lat": 35.1311466,
          "lng": 128.972753
        },
        {
          "name": "의료법인 은성의료재단 좋은부산요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 사상구 학감대로39번길 67 (학장동)",
          "dong": "학장동",
          "status": "영업/정상",
          "openedDate": "2010-07-19",
          "lat": 35.1333694,
          "lng": 128.9963935
        },
        {
          "name": "미래어린이병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 사상구 낙동대로 790, 3,4,7층 (엄궁동, 신우프라자)",
          "dong": "미분류",
          "status": "영업/정상",
          "openedDate": "2011-03-02",
          "lat": null,
          "lng": null
        },
        {
          "name": "우리병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "정신병원",
          "address": "부산광역시 사상구 사상로 237 (괘법동, 1,3,4,5층)",
          "dong": "미분류",
          "status": "영업/정상",
          "openedDate": "2011-11-15",
          "lat": null,
          "lng": null
        }
      ]
    },
    {
      "name": "사하구",
      "totalStores": 6304,
      "activeStores": 2463,
      "closedStores": 3841,
      "activeRate": 39.1,
      "closedRate": 60.9,
      "topMajorCategories": [
        {
          "name": "서비스",
          "count": 5066,
          "share": 80.4
        },
        {
          "name": "미분류",
          "count": 509,
          "share": 8.1
        },
        {
          "name": "소매",
          "count": 424,
          "share": 6.7
        },
        {
          "name": "외식",
          "count": 305,
          "share": 4.8
        }
      ],
      "topMinorCategories": [
        {
          "name": "일반미용업",
          "count": 1985,
          "share": 31.5
        },
        {
          "name": "미분류",
          "count": 1296,
          "share": 20.6
        },
        {
          "name": "의원",
          "count": 564,
          "share": 8.9
        },
        {
          "name": "일반세탁업",
          "count": 410,
          "share": 6.5
        },
        {
          "name": "피부미용업",
          "count": 373,
          "share": 5.9
        },
        {
          "name": "노래연습장",
          "count": 321,
          "share": 5.1
        },
        {
          "name": "제과점영업",
          "count": 305,
          "share": 4.8
        },
        {
          "name": "네일아트업",
          "count": 265,
          "share": 4.2
        },
        {
          "name": "치과의원",
          "count": 192,
          "share": 3.0
        },
        {
          "name": "한의원",
          "count": 187,
          "share": 3.0
        }
      ],
      "topBusinessTypes": [
        {
          "name": "미용실",
          "count": 1985,
          "share": 31.5
        },
        {
          "name": "오락장 운영업",
          "count": 684,
          "share": 10.9
        },
        {
          "name": "일반 의원",
          "count": 641,
          "share": 10.2
        },
        {
          "name": "일반이용업",
          "count": 503,
          "share": 8.0
        },
        {
          "name": "피부관리실",
          "count": 443,
          "share": 7.0
        },
        {
          "name": "가정용 세탁업",
          "count": 439,
          "share": 7.0
        },
        {
          "name": "의약품 소매업",
          "count": 327,
          "share": 5.2
        },
        {
          "name": "제과점업",
          "count": 305,
          "share": 4.8
        },
        {
          "name": "기타 미용업",
          "count": 280,
          "share": 4.4
        },
        {
          "name": "치과 의원",
          "count": 192,
          "share": 3.0
        },
        {
          "name": "한의원",
          "count": 191,
          "share": 3.0
        },
        {
          "name": "여관업",
          "count": 157,
          "share": 2.5
        }
      ],
      "topAdministrativeDongs": [
        {
          "name": "괴정동",
          "count": 1329,
          "share": 21.1
        },
        {
          "name": "하단동",
          "count": 1187,
          "share": 18.8
        },
        {
          "name": "다대동",
          "count": 910,
          "share": 14.4
        },
        {
          "name": "장림동",
          "count": 760,
          "share": 12.1
        },
        {
          "name": "당리동",
          "count": 640,
          "share": 10.2
        },
        {
          "name": "신평동",
          "count": 570,
          "share": 9.0
        },
        {
          "name": "미분류",
          "count": 424,
          "share": 6.7
        },
        {
          "name": "감천동",
          "count": 420,
          "share": 6.7
        },
        {
          "name": "구평동",
          "count": 64,
          "share": 1.0
        }
      ],
      "center": {
        "lat": 35.0913646,
        "lng": 128.9778812
      },
      "sampleStores": [
        {
          "name": "의료법인 현대의료재단 라온제나한방병원",
          "category": "한의원",
          "majorCategory": "서비스",
          "minorCategory": "한방병원",
          "address": "부산광역시 사하구 다대로 485 (다대동)",
          "dong": "다대동",
          "status": "휴업",
          "openedDate": "2011-12-06",
          "lat": 35.061192,
          "lng": 128.9760075
        },
        {
          "name": "의료법인 진연의료재단 감천문화요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 사하구 옥천로 38 (감천동)",
          "dong": "감천동",
          "status": "휴업",
          "openedDate": "2013-05-01",
          "lat": 35.0903876,
          "lng": 129.0067952
        },
        {
          "name": "에디스여성병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 사하구 낙동대로 361 (당리동)",
          "dong": "당리동",
          "status": "영업/정상",
          "openedDate": "2007-10-01",
          "lat": 35.1015062,
          "lng": 128.9778696
        },
        {
          "name": "항스퀘어 병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 사하구 다대로 251 (장림동)",
          "dong": "장림동",
          "status": "영업/정상",
          "openedDate": "2019-12-27",
          "lat": 35.0799107,
          "lng": 128.97764
        },
        {
          "name": "파크병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 사하구 까치고개로 79-1 (괴정동)",
          "dong": "괴정동",
          "status": "영업/정상",
          "openedDate": "2020-02-24",
          "lat": 35.1057641,
          "lng": 129.009579
        },
        {
          "name": "부산더키즈병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 사하구 다대로 234, 5,6,7,8,9층 (장림동)",
          "dong": "장림동",
          "status": "영업/정상",
          "openedDate": "2023-02-20",
          "lat": 35.0816621,
          "lng": 128.9769185
        },
        {
          "name": "의료법인 신암의료재단 제일요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 사하구 동매로44번길 8 (하단동)",
          "dong": "하단동",
          "status": "영업/정상",
          "openedDate": "2018-02-12",
          "lat": 35.1028127,
          "lng": 128.9631667
        },
        {
          "name": "장림한서병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 사하구 다대로 315 (장림동)",
          "dong": "장림동",
          "status": "영업/정상",
          "openedDate": "1992-01-16",
          "lat": 35.0741209,
          "lng": 128.9769176
        },
        {
          "name": "강동병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 사하구 다대로 145 (신평동)",
          "dong": "신평동",
          "status": "영업/정상",
          "openedDate": "1993-04-30",
          "lat": 35.0895872,
          "lng": 128.9782728
        },
        {
          "name": "경희병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 사하구 다대로 321 (장림동)",
          "dong": "장림동",
          "status": "영업/정상",
          "openedDate": "1994-06-30",
          "lat": 35.0735081,
          "lng": 128.9768083
        },
        {
          "name": "큐병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 사하구 낙동남로 1401 (하단동)",
          "dong": "하단동",
          "status": "영업/정상",
          "openedDate": "1995-04-18",
          "lat": 35.1065752,
          "lng": 128.9648692
        },
        {
          "name": "의료법인벧엘의료재단 부산정신병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "정신병원",
          "address": "부산광역시 사하구 하신중앙로3번나길 10 (장림동, 부산정신병원)",
          "dong": "장림동",
          "status": "영업/정상",
          "openedDate": "1999-04-27",
          "lat": 35.0766924,
          "lng": 128.9622306
        }
      ]
    },
    {
      "name": "서구",
      "totalStores": 2101,
      "activeStores": 884,
      "closedStores": 1217,
      "activeRate": 42.1,
      "closedRate": 57.9,
      "topMajorCategories": [
        {
          "name": "서비스",
          "count": 1531,
          "share": 72.9
        },
        {
          "name": "소매",
          "count": 254,
          "share": 12.1
        },
        {
          "name": "미분류",
          "count": 214,
          "share": 10.2
        },
        {
          "name": "외식",
          "count": 102,
          "share": 4.9
        }
      ],
      "topMinorCategories": [
        {
          "name": "일반미용업",
          "count": 590,
          "share": 28.1
        },
        {
          "name": "미분류",
          "count": 563,
          "share": 26.8
        },
        {
          "name": "일반세탁업",
          "count": 151,
          "share": 7.2
        },
        {
          "name": "여관업",
          "count": 118,
          "share": 5.6
        },
        {
          "name": "의원",
          "count": 111,
          "share": 5.3
        },
        {
          "name": "피부미용업",
          "count": 108,
          "share": 5.1
        },
        {
          "name": "제과점영업",
          "count": 102,
          "share": 4.9
        },
        {
          "name": "노래연습장",
          "count": 85,
          "share": 4.0
        },
        {
          "name": "여인숙업",
          "count": 61,
          "share": 2.9
        },
        {
          "name": "치과의원",
          "count": 46,
          "share": 2.2
        }
      ],
      "topBusinessTypes": [
        {
          "name": "미용실",
          "count": 590,
          "share": 28.1
        },
        {
          "name": "의약품 소매업",
          "count": 231,
          "share": 11.0
        },
        {
          "name": "일반이용업",
          "count": 214,
          "share": 10.2
        },
        {
          "name": "여관업",
          "count": 189,
          "share": 9.0
        },
        {
          "name": "오락장 운영업",
          "count": 180,
          "share": 8.6
        },
        {
          "name": "가정용 세탁업",
          "count": 158,
          "share": 7.5
        },
        {
          "name": "일반 의원",
          "count": 128,
          "share": 6.1
        },
        {
          "name": "피부관리실",
          "count": 114,
          "share": 5.4
        },
        {
          "name": "제과점업",
          "count": 102,
          "share": 4.9
        },
        {
          "name": "한의원",
          "count": 50,
          "share": 2.4
        },
        {
          "name": "기타 미용업",
          "count": 50,
          "share": 2.4
        },
        {
          "name": "치과 의원",
          "count": 46,
          "share": 2.2
        }
      ],
      "topAdministrativeDongs": [
        {
          "name": "암남동",
          "count": 253,
          "share": 12.0
        },
        {
          "name": "남부민동",
          "count": 224,
          "share": 10.7
        },
        {
          "name": "미분류",
          "count": 199,
          "share": 9.5
        },
        {
          "name": "서대신동3가",
          "count": 180,
          "share": 8.6
        },
        {
          "name": "충무동1가",
          "count": 172,
          "share": 8.2
        },
        {
          "name": "동대신동3가",
          "count": 149,
          "share": 7.1
        },
        {
          "name": "서대신동2가",
          "count": 142,
          "share": 6.8
        },
        {
          "name": "아미동2가",
          "count": 127,
          "share": 6.0
        },
        {
          "name": "서대신동1가",
          "count": 109,
          "share": 5.2
        },
        {
          "name": "동대신동2가",
          "count": 107,
          "share": 5.1
        }
      ],
      "center": {
        "lat": 35.1002578,
        "lng": 129.0188186
      },
      "sampleStores": [
        {
          "name": "동아대학교대신병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 서구 대신공원로 26, 동아대학교병원 (동대신동3가)",
          "dong": "동대신동3가",
          "status": "영업/정상",
          "openedDate": "2019-03-27",
          "lat": 35.1201684,
          "lng": 129.0178122
        },
        {
          "name": "신세계한방병원",
          "category": "한의원",
          "majorCategory": "서비스",
          "minorCategory": "한방병원",
          "address": "부산광역시 서구 구덕로 95, 3층 일부, 4층, 6층 (충무동1가)",
          "dong": "충무동1가",
          "status": "영업/정상",
          "openedDate": "2021-03-09",
          "lat": 35.0966478,
          "lng": 129.0255172
        },
        {
          "name": "바른병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 서구 보수대로 9, 4~12층 (충무동1가)",
          "dong": "충무동1가",
          "status": "영업/정상",
          "openedDate": "2015-09-08",
          "lat": 35.0976438,
          "lng": 129.024909
        },
        {
          "name": "엘앤더슨병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 서구 대신공원로 39 (서대신동3가)",
          "dong": "서대신동3가",
          "status": "영업/정상",
          "openedDate": "2018-06-12",
          "lat": 35.1213773,
          "lng": 129.0167579
        },
        {
          "name": "고신대학교복음병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "종합병원",
          "address": "부산광역시 서구 감천로 262 (암남동)",
          "dong": "암남동",
          "status": "영업/정상",
          "openedDate": "1974-02-26",
          "lat": 35.0816003,
          "lng": 129.0131753
        },
        {
          "name": "송도요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 서구 암남공원로 522 (암남동)",
          "dong": "암남동",
          "status": "영업/정상",
          "openedDate": "2005-11-17",
          "lat": 35.0796782,
          "lng": 129.0119063
        },
        {
          "name": "부산대학교병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "종합병원",
          "address": "부산광역시 서구 구덕로 179 (아미동1가)",
          "dong": "아미동1가",
          "status": "영업/정상",
          "openedDate": "1981-08-27",
          "lat": 35.1005519,
          "lng": 129.0190571
        },
        {
          "name": "동아대학교병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "종합병원",
          "address": "부산광역시 서구 대신공원로 26 (동대신동3가)",
          "dong": "동대신동3가",
          "status": "영업/정상",
          "openedDate": "1990-03-03",
          "lat": 35.1201684,
          "lng": 129.0178122
        },
        {
          "name": "(복지)예사랑병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "정신병원",
          "address": "부산광역시 서구 옥천로130번길 38 (아미동2가)",
          "dong": "아미동2가",
          "status": "영업/정상",
          "openedDate": "2012-02-29",
          "lat": 35.0972585,
          "lng": 129.0134805
        },
        {
          "name": "선하요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 서구 구덕로200번길 8 (부민동1가)",
          "dong": "부민동1가",
          "status": "영업/정상",
          "openedDate": "2013-11-19",
          "lat": 35.1023781,
          "lng": 129.0203284
        },
        {
          "name": "이의용밝은길요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 서구 대영로85번길 31 (동대신동2가)",
          "dong": "동대신동2가",
          "status": "영업/정상",
          "openedDate": "2014-04-01",
          "lat": 35.1123056,
          "lng": 129.0196381
        },
        {
          "name": "삼육부산병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "종합병원",
          "address": "부산광역시 서구 대티로 170 (서대신동2가)",
          "dong": "서대신동2가",
          "status": "영업/정상",
          "openedDate": "1974-03-07",
          "lat": 35.1119241,
          "lng": 129.0108592
        }
      ]
    },
    {
      "name": "수영구",
      "totalStores": 4498,
      "activeStores": 1911,
      "closedStores": 2587,
      "activeRate": 42.5,
      "closedRate": 57.5,
      "topMajorCategories": [
        {
          "name": "서비스",
          "count": 3643,
          "share": 81.0
        },
        {
          "name": "소매",
          "count": 316,
          "share": 7.0
        },
        {
          "name": "미분류",
          "count": 299,
          "share": 6.6
        },
        {
          "name": "외식",
          "count": 240,
          "share": 5.3
        }
      ],
      "topMinorCategories": [
        {
          "name": "일반미용업",
          "count": 1302,
          "share": 28.9
        },
        {
          "name": "미분류",
          "count": 854,
          "share": 19.0
        },
        {
          "name": "피부미용업",
          "count": 380,
          "share": 8.4
        },
        {
          "name": "네일아트업",
          "count": 264,
          "share": 5.9
        },
        {
          "name": "노래연습장",
          "count": 263,
          "share": 5.8
        },
        {
          "name": "일반세탁업",
          "count": 254,
          "share": 5.6
        },
        {
          "name": "제과점영업",
          "count": 240,
          "share": 5.3
        },
        {
          "name": "의원",
          "count": 223,
          "share": 5.0
        },
        {
          "name": "한의원",
          "count": 144,
          "share": 3.2
        },
        {
          "name": "치과의원",
          "count": 120,
          "share": 2.7
        }
      ],
      "topBusinessTypes": [
        {
          "name": "미용실",
          "count": 1302,
          "share": 28.9
        },
        {
          "name": "오락장 운영업",
          "count": 502,
          "share": 11.2
        },
        {
          "name": "피부관리실",
          "count": 458,
          "share": 10.2
        },
        {
          "name": "일반이용업",
          "count": 297,
          "share": 6.6
        },
        {
          "name": "기타 미용업",
          "count": 273,
          "share": 6.1
        },
        {
          "name": "의약품 소매업",
          "count": 260,
          "share": 5.8
        },
        {
          "name": "가정용 세탁업",
          "count": 259,
          "share": 5.8
        },
        {
          "name": "여관업",
          "count": 254,
          "share": 5.6
        },
        {
          "name": "일반 의원",
          "count": 252,
          "share": 5.6
        },
        {
          "name": "제과점업",
          "count": 240,
          "share": 5.3
        },
        {
          "name": "한의원",
          "count": 145,
          "share": 3.2
        },
        {
          "name": "치과 의원",
          "count": 120,
          "share": 2.7
        }
      ],
      "topAdministrativeDongs": [
        {
          "name": "광안동",
          "count": 1765,
          "share": 39.2
        },
        {
          "name": "남천동",
          "count": 836,
          "share": 18.6
        },
        {
          "name": "망미동",
          "count": 649,
          "share": 14.4
        },
        {
          "name": "민락동",
          "count": 597,
          "share": 13.3
        },
        {
          "name": "수영동",
          "count": 495,
          "share": 11.0
        },
        {
          "name": "미분류",
          "count": 156,
          "share": 3.5
        }
      ],
      "center": {
        "lat": 35.1597772,
        "lng": 129.1138402
      },
      "sampleStores": [
        {
          "name": "가나안요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 수영구 수영로 563-1, 지하1~10층 (광안동)",
          "dong": "광안동",
          "status": "영업/정상",
          "openedDate": "2019-05-20",
          "lat": 35.1561717,
          "lng": 129.1124138
        },
        {
          "name": "경희정도한방병원",
          "category": "한의원",
          "majorCategory": "서비스",
          "minorCategory": "한방병원",
          "address": "부산광역시 수영구 수영로 711, 5~15(9층제외)층 (수영동)",
          "dong": "수영동",
          "status": "영업/정상",
          "openedDate": "2020-01-16",
          "lat": 35.1682862,
          "lng": 129.1172229
        },
        {
          "name": "365드림치과병원",
          "category": "치과의원",
          "majorCategory": "서비스",
          "minorCategory": "치과병원",
          "address": "부산광역시 수영구 연수로 408, 8-12층 (광안동)",
          "dong": "광안동",
          "status": "영업/정상",
          "openedDate": "2024-03-25",
          "lat": 35.1681222,
          "lng": 129.1135843
        },
        {
          "name": "광안자모병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 수영구 수영로 555 (광안동)",
          "dong": "광안동",
          "status": "영업/정상",
          "openedDate": "1995-03-13",
          "lat": 35.1553322,
          "lng": 129.1122961
        },
        {
          "name": "의료법인 센텀의료재단 센텀종합병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "종합병원",
          "address": "부산광역시 수영구 수영로679번길 8 (광안동)",
          "dong": "광안동",
          "status": "영업/정상",
          "openedDate": "2002-12-02",
          "lat": 35.1668046,
          "lng": 129.1144001
        },
        {
          "name": "비에이치에스한서병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "종합병원",
          "address": "부산광역시 수영구 수영로 615 (광안동)",
          "dong": "광안동",
          "status": "영업/정상",
          "openedDate": "1987-11-02",
          "lat": 35.1608151,
          "lng": 129.1131956
        },
        {
          "name": "한나병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 수영구 황령대로481번길 7 (남천동)",
          "dong": "남천동",
          "status": "영업/정상",
          "openedDate": "2004-06-12",
          "lat": 35.1392601,
          "lng": 129.1070377
        },
        {
          "name": "의료법인 은성의료재단 좋은강안병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "종합병원",
          "address": "부산광역시 수영구 수영로 493 (남천동)",
          "dong": "남천동",
          "status": "영업/정상",
          "openedDate": "2005-02-23",
          "lat": 35.1501927,
          "lng": 129.1105513
        },
        {
          "name": "성분도치과병원",
          "category": "치과의원",
          "majorCategory": "서비스",
          "minorCategory": "치과병원",
          "address": "부산광역시 수영구 수영로 501 (광안동)",
          "dong": "광안동",
          "status": "영업/정상",
          "openedDate": "2005-09-12",
          "lat": 35.1510176,
          "lng": 129.1106669
        },
        {
          "name": "의료법인전일의료재단한가족요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 수영구 장대골로7번길 45, 2-4층 (광안동, 광안유림노르웨이아침)",
          "dong": "광안동",
          "status": "영업/정상",
          "openedDate": "2007-01-17",
          "lat": 35.1569305,
          "lng": 129.1124274
        },
        {
          "name": "의료법인백세의료재단백세요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 수영구 광일로43번길 25 (광안동)",
          "dong": "미분류",
          "status": "영업/정상",
          "openedDate": "2007-01-25",
          "lat": null,
          "lng": null
        },
        {
          "name": "메트로적추병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 수영구 수영로 390-1 (남천동)",
          "dong": "남천동",
          "status": "영업/정상",
          "openedDate": "2009-05-19",
          "lat": 35.1411617,
          "lng": 129.107505
        }
      ]
    },
    {
      "name": "연제구",
      "totalStores": 4634,
      "activeStores": 1910,
      "closedStores": 2724,
      "activeRate": 41.2,
      "closedRate": 58.8,
      "topMajorCategories": [
        {
          "name": "서비스",
          "count": 3708,
          "share": 80.0
        },
        {
          "name": "소매",
          "count": 355,
          "share": 7.7
        },
        {
          "name": "미분류",
          "count": 341,
          "share": 7.4
        },
        {
          "name": "외식",
          "count": 230,
          "share": 5.0
        }
      ],
      "topMinorCategories": [
        {
          "name": "일반미용업",
          "count": 1265,
          "share": 27.3
        },
        {
          "name": "미분류",
          "count": 983,
          "share": 21.2
        },
        {
          "name": "피부미용업",
          "count": 460,
          "share": 9.9
        },
        {
          "name": "일반세탁업",
          "count": 328,
          "share": 7.1
        },
        {
          "name": "의원",
          "count": 276,
          "share": 6.0
        },
        {
          "name": "노래연습장",
          "count": 241,
          "share": 5.2
        },
        {
          "name": "제과점영업",
          "count": 230,
          "share": 5.0
        },
        {
          "name": "네일아트업",
          "count": 227,
          "share": 4.9
        },
        {
          "name": "여관업",
          "count": 138,
          "share": 3.0
        },
        {
          "name": "치과의원",
          "count": 133,
          "share": 2.9
        }
      ],
      "topBusinessTypes": [
        {
          "name": "미용실",
          "count": 1265,
          "share": 27.3
        },
        {
          "name": "오락장 운영업",
          "count": 528,
          "share": 11.4
        },
        {
          "name": "피부관리실",
          "count": 514,
          "share": 11.1
        },
        {
          "name": "가정용 세탁업",
          "count": 338,
          "share": 7.3
        },
        {
          "name": "일반이용업",
          "count": 337,
          "share": 7.3
        },
        {
          "name": "일반 의원",
          "count": 326,
          "share": 7.0
        },
        {
          "name": "의약품 소매업",
          "count": 289,
          "share": 6.2
        },
        {
          "name": "기타 미용업",
          "count": 243,
          "share": 5.2
        },
        {
          "name": "제과점업",
          "count": 230,
          "share": 5.0
        },
        {
          "name": "여관업",
          "count": 175,
          "share": 3.8
        },
        {
          "name": "한의원",
          "count": 133,
          "share": 2.9
        },
        {
          "name": "치과 의원",
          "count": 133,
          "share": 2.9
        }
      ],
      "topAdministrativeDongs": [
        {
          "name": "연산동",
          "count": 3498,
          "share": 75.5
        },
        {
          "name": "거제동",
          "count": 836,
          "share": 18.0
        },
        {
          "name": "미분류",
          "count": 298,
          "share": 6.4
        },
        {
          "name": "양정동",
          "count": 2,
          "share": 0.0
        }
      ],
      "center": {
        "lat": 35.1844449,
        "lng": 129.0862574
      },
      "sampleStores": [
        {
          "name": "정한방병원",
          "category": "한의원",
          "majorCategory": "서비스",
          "minorCategory": "한방병원",
          "address": "부산광역시 연제구 월드컵대로 125, 더웰타워 6층일부,9~11층 (연산동)",
          "dong": "연산동",
          "status": "영업/정상",
          "openedDate": "2020-04-28",
          "lat": 35.1852246,
          "lng": 129.0818413
        },
        {
          "name": "베테랑병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 연제구 중앙대로 1098, 7~11층 (연산동)",
          "dong": "연산동",
          "status": "영업/정상",
          "openedDate": "2024-02-02",
          "lat": 35.1852745,
          "lng": 129.0815106
        },
        {
          "name": "의료법인 황산의료재단 황산요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 연제구 쌍미천로84번길 37 (연산동)",
          "dong": "연산동",
          "status": "영업/정상",
          "openedDate": "2009-01-15",
          "lat": 35.1818717,
          "lng": 129.0881343
        },
        {
          "name": "부산광역시의료원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "종합병원",
          "address": "부산광역시 연제구 월드컵대로 359 (거제동, 1동, 5동일부)",
          "dong": "거제동",
          "status": "영업/정상",
          "openedDate": "1982-06-30",
          "lat": 35.1867161,
          "lng": 129.0589628
        },
        {
          "name": "성은의료재단 연산병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "정신병원",
          "address": "부산광역시 연제구 배산북로 50(연산동)",
          "dong": "연산동",
          "status": "영업/정상",
          "openedDate": "1988-04-30",
          "lat": 35.1783339,
          "lng": 129.094439
        },
        {
          "name": "연제일신병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 연제구 고분로 6 (연산동)",
          "dong": "연산동",
          "status": "영업/정상",
          "openedDate": "2002-03-06",
          "lat": 35.1856781,
          "lng": 129.0828796
        },
        {
          "name": "웰니스병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 연제구 반송로 52 (연산동)",
          "dong": "연산동",
          "status": "영업/정상",
          "openedDate": "2004-11-17",
          "lat": 35.1889016,
          "lng": 129.0860078
        },
        {
          "name": "부산노인전문제2병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 연제구 월드컵대로 359 (거제동)",
          "dong": "거제동",
          "status": "영업/정상",
          "openedDate": "2007-10-19",
          "lat": 35.1867161,
          "lng": 129.0589628
        },
        {
          "name": "우리행복요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 연제구 과정로 130 (연산동, 1층(일부제외)∼8층)",
          "dong": "연산동",
          "status": "영업/정상",
          "openedDate": "2007-03-13",
          "lat": 35.1830454,
          "lng": 129.1074346
        },
        {
          "name": "새항운병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 연제구 중앙대로 1064 (연산동)",
          "dong": "연산동",
          "status": "영업/정상",
          "openedDate": "2010-02-22",
          "lat": 35.1829087,
          "lng": 129.07957
        },
        {
          "name": "금정의료소비자생활협동조합 금송요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 연제구 중앙대로 1078 (연산동, 4,5층)",
          "dong": "연산동",
          "status": "영업/정상",
          "openedDate": "2013-05-02",
          "lat": 35.1839873,
          "lng": 129.0805439
        },
        {
          "name": "의료법인명은의료재단 명은병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 연제구 월드컵대로 184, 명은 병원 (거제동)",
          "dong": "거제동",
          "status": "영업/정상",
          "openedDate": "2013-05-23",
          "lat": 35.1881352,
          "lng": 129.0766476
        }
      ]
    },
    {
      "name": "영도구",
      "totalStores": 2127,
      "activeStores": 824,
      "closedStores": 1303,
      "activeRate": 38.7,
      "closedRate": 61.3,
      "topMajorCategories": [
        {
          "name": "서비스",
          "count": 1668,
          "share": 78.4
        },
        {
          "name": "미분류",
          "count": 213,
          "share": 10.0
        },
        {
          "name": "소매",
          "count": 166,
          "share": 7.8
        },
        {
          "name": "외식",
          "count": 80,
          "share": 3.8
        }
      ],
      "topMinorCategories": [
        {
          "name": "일반미용업",
          "count": 642,
          "share": 30.2
        },
        {
          "name": "미분류",
          "count": 486,
          "share": 22.8
        },
        {
          "name": "일반세탁업",
          "count": 197,
          "share": 9.3
        },
        {
          "name": "피부미용업",
          "count": 140,
          "share": 6.6
        },
        {
          "name": "의원",
          "count": 126,
          "share": 5.9
        },
        {
          "name": "여관업",
          "count": 109,
          "share": 5.1
        },
        {
          "name": "노래연습장",
          "count": 103,
          "share": 4.8
        },
        {
          "name": "제과점영업",
          "count": 80,
          "share": 3.8
        },
        {
          "name": "네일아트업",
          "count": 56,
          "share": 2.6
        },
        {
          "name": "여인숙업",
          "count": 48,
          "share": 2.3
        }
      ],
      "topBusinessTypes": [
        {
          "name": "미용실",
          "count": 642,
          "share": 30.2
        },
        {
          "name": "일반이용업",
          "count": 213,
          "share": 10.0
        },
        {
          "name": "오락장 운영업",
          "count": 210,
          "share": 9.9
        },
        {
          "name": "가정용 세탁업",
          "count": 203,
          "share": 9.5
        },
        {
          "name": "여관업",
          "count": 161,
          "share": 7.6
        },
        {
          "name": "피부관리실",
          "count": 143,
          "share": 6.7
        },
        {
          "name": "의약품 소매업",
          "count": 138,
          "share": 6.5
        },
        {
          "name": "일반 의원",
          "count": 136,
          "share": 6.4
        },
        {
          "name": "제과점업",
          "count": 80,
          "share": 3.8
        },
        {
          "name": "기타 미용업",
          "count": 59,
          "share": 2.8
        },
        {
          "name": "한의원",
          "count": 46,
          "share": 2.2
        },
        {
          "name": "치과 의원",
          "count": 43,
          "share": 2.0
        }
      ],
      "topAdministrativeDongs": [
        {
          "name": "동삼동",
          "count": 512,
          "share": 24.1
        },
        {
          "name": "청학동",
          "count": 308,
          "share": 14.5
        },
        {
          "name": "미분류",
          "count": 204,
          "share": 9.6
        },
        {
          "name": "대교동2가",
          "count": 140,
          "share": 6.6
        },
        {
          "name": "영선동2가",
          "count": 108,
          "share": 5.1
        },
        {
          "name": "남항동1가",
          "count": 105,
          "share": 4.9
        },
        {
          "name": "영선동1가",
          "count": 100,
          "share": 4.7
        },
        {
          "name": "대교동1가",
          "count": 87,
          "share": 4.1
        },
        {
          "name": "봉래동3가",
          "count": 81,
          "share": 3.8
        },
        {
          "name": "영선동3가",
          "count": 67,
          "share": 3.1
        }
      ],
      "center": {
        "lat": 35.0869139,
        "lng": 129.0533084
      },
      "sampleStores": [
        {
          "name": "에스병원(S병원)",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 영도구 동삼로 55-1, 지하2층, 2층~8층, 9층 일부 (동삼동)",
          "dong": "동삼동",
          "status": "휴업",
          "openedDate": "2020-01-10",
          "lat": 35.0782754,
          "lng": 129.0700242
        },
        {
          "name": "의료법인 행도의료재단 해동병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "종합병원",
          "address": "부산광역시 영도구 태종로 133 (봉래동3가)",
          "dong": "봉래동3가",
          "status": "영업/정상",
          "openedDate": "1984-07-05",
          "lat": 35.0918936,
          "lng": 129.0439196
        },
        {
          "name": "영도병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "종합병원",
          "address": "부산광역시 영도구 태종로 85 (대교동2가)",
          "dong": "대교동2가",
          "status": "영업/정상",
          "openedDate": "1996-06-29",
          "lat": 35.0921985,
          "lng": 129.0405125
        },
        {
          "name": "태종대요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 영도구 태종로 820-23 (동삼동)",
          "dong": "동삼동",
          "status": "영업/정상",
          "openedDate": "2008-08-12",
          "lat": 35.0632073,
          "lng": 129.080363
        },
        {
          "name": "인제요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 영도구 절영로 21 (대교동2가)",
          "dong": "미분류",
          "status": "영업/정상",
          "openedDate": "2011-09-09",
          "lat": null,
          "lng": null
        },
        {
          "name": "의료법인 성원의료재단 영도참편한 요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 영도구 동삼서로 21 (동삼동, 영도참편한요양병원)",
          "dong": "동삼동",
          "status": "영업/정상",
          "openedDate": "2012-06-13",
          "lat": 35.0808611,
          "lng": 129.0686847
        },
        {
          "name": "정요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 영도구 절영로 32 (대교동1가)",
          "dong": "대교동1가",
          "status": "영업/정상",
          "openedDate": "2013-01-25",
          "lat": 35.0915813,
          "lng": 129.038875
        },
        {
          "name": "아이(i)서울병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 영도구 영선대로 75, 삼호빌딩 (영선동2가)",
          "dong": "영선동2가",
          "status": "영업/정상",
          "openedDate": "2016-10-10",
          "lat": 35.0877675,
          "lng": 129.0417012
        },
        {
          "name": "의료법인 일혜의료재단 행복한요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 영도구 태종로372번길 41 (청학동)",
          "dong": "청학동",
          "status": "영업/정상",
          "openedDate": "2016-11-23",
          "lat": 35.0920561,
          "lng": 129.0637577
        },
        {
          "name": "보민한의원",
          "category": "한의원",
          "majorCategory": "서비스",
          "minorCategory": "한의원",
          "address": "부산광역시 영도구 태종로 137, 2층 (봉래동3가)",
          "dong": "봉래동3가",
          "status": "영업/정상",
          "openedDate": "2013-07-26",
          "lat": 35.0922449,
          "lng": 129.0441723
        },
        {
          "name": "몸편한 제통 재활의학과의원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "의원",
          "address": "부산광역시 영도구 동삼로 12, 3~4층 (동삼동)",
          "dong": "동삼동",
          "status": "영업/정상",
          "openedDate": "2019-03-04",
          "lat": 35.0756316,
          "lng": 129.0732731
        },
        {
          "name": "오션이비인후과의원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "의원",
          "address": "부산광역시 영도구 동삼로 56, 한나타워 203-2호 (동삼동)",
          "dong": "동삼동",
          "status": "영업/정상",
          "openedDate": "2019-04-23",
          "lat": 35.0784546,
          "lng": 129.0708145
        }
      ]
    },
    {
      "name": "중구",
      "totalStores": 2314,
      "activeStores": 967,
      "closedStores": 1347,
      "activeRate": 41.8,
      "closedRate": 58.2,
      "topMajorCategories": [
        {
          "name": "서비스",
          "count": 1792,
          "share": 77.4
        },
        {
          "name": "소매",
          "count": 226,
          "share": 9.8
        },
        {
          "name": "미분류",
          "count": 173,
          "share": 7.5
        },
        {
          "name": "외식",
          "count": 123,
          "share": 5.3
        }
      ],
      "topMinorCategories": [
        {
          "name": "미분류",
          "count": 554,
          "share": 23.9
        },
        {
          "name": "일반미용업",
          "count": 508,
          "share": 22.0
        },
        {
          "name": "피부미용업",
          "count": 223,
          "share": 9.6
        },
        {
          "name": "의원",
          "count": 137,
          "share": 5.9
        },
        {
          "name": "여관업",
          "count": 134,
          "share": 5.8
        },
        {
          "name": "노래연습장",
          "count": 125,
          "share": 5.4
        },
        {
          "name": "제과점영업",
          "count": 123,
          "share": 5.3
        },
        {
          "name": "네일아트업",
          "count": 119,
          "share": 5.1
        },
        {
          "name": "일반세탁업",
          "count": 92,
          "share": 4.0
        },
        {
          "name": "치과의원",
          "count": 61,
          "share": 2.6
        }
      ],
      "topBusinessTypes": [
        {
          "name": "미용실",
          "count": 508,
          "share": 22.0
        },
        {
          "name": "오락장 운영업",
          "count": 280,
          "share": 12.1
        },
        {
          "name": "피부관리실",
          "count": 259,
          "share": 11.2
        },
        {
          "name": "여관업",
          "count": 197,
          "share": 8.5
        },
        {
          "name": "일반이용업",
          "count": 173,
          "share": 7.5
        },
        {
          "name": "일반 의원",
          "count": 155,
          "share": 6.7
        },
        {
          "name": "의약품 소매업",
          "count": 143,
          "share": 6.2
        },
        {
          "name": "기타 미용업",
          "count": 130,
          "share": 5.6
        },
        {
          "name": "제과점업",
          "count": 123,
          "share": 5.3
        },
        {
          "name": "가정용 세탁업",
          "count": 93,
          "share": 4.0
        },
        {
          "name": "안경 소매업",
          "count": 83,
          "share": 3.6
        },
        {
          "name": "호텔업",
          "count": 62,
          "share": 2.7
        }
      ],
      "topAdministrativeDongs": [
        {
          "name": "영주동",
          "count": 167,
          "share": 7.2
        },
        {
          "name": "남포동6가",
          "count": 158,
          "share": 6.8
        },
        {
          "name": "부평동2가",
          "count": 147,
          "share": 6.4
        },
        {
          "name": "남포동5가",
          "count": 137,
          "share": 5.9
        },
        {
          "name": "남포동2가",
          "count": 133,
          "share": 5.7
        },
        {
          "name": "중앙동4가",
          "count": 122,
          "share": 5.3
        },
        {
          "name": "미분류",
          "count": 121,
          "share": 5.2
        },
        {
          "name": "대청동2가",
          "count": 106,
          "share": 4.6
        },
        {
          "name": "보수동1가",
          "count": 100,
          "share": 4.3
        },
        {
          "name": "창선동1가",
          "count": 95,
          "share": 4.1
        }
      ],
      "center": {
        "lat": 35.1018682,
        "lng": 129.0305157
      },
      "sampleStores": [
        {
          "name": "건강만세365병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 중구 대청로 105, 건강만세365병원 -1,1~9층 (대청동2가)",
          "dong": "대청동2가",
          "status": "영업/정상",
          "openedDate": "2020-01-03",
          "lat": 35.1032956,
          "lng": 129.0313041
        },
        {
          "name": "심당요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 중구 동광길 179 (영주동)",
          "dong": "영주동",
          "status": "영업/정상",
          "openedDate": "2007-12-05",
          "lat": 35.1105566,
          "lng": 129.036913
        },
        {
          "name": "의료법인송산의료재단 해양요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 중구 광복로97번길 26-2(동광동2가)",
          "dong": "동광동2가",
          "status": "영업/정상",
          "openedDate": "2011-05-26",
          "lat": 35.1009628,
          "lng": 129.0348861
        },
        {
          "name": "의료법인연송의료재단 신창요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 중구 중앙대로 55 (중앙동2가)",
          "dong": "중앙동2가",
          "status": "영업/정상",
          "openedDate": "2013-11-07",
          "lat": 35.102559,
          "lng": 129.0360964
        },
        {
          "name": "의료법인나라의료재단중앙나라요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 중구 중앙대로 69 (중앙동3가)",
          "dong": "중앙동3가",
          "status": "영업/정상",
          "openedDate": "2005-12-15",
          "lat": 35.1038331,
          "lng": 129.035892
        },
        {
          "name": "재단법인천주교부산교구유지재단 메리놀병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "종합병원",
          "address": "부산광역시 중구 중구로 121 (대청동4가)",
          "dong": "대청동4가",
          "status": "영업/정상",
          "openedDate": "1974-04-30",
          "lat": 35.1072344,
          "lng": 129.0320899
        },
        {
          "name": "휘림한방병원",
          "category": "한의원",
          "majorCategory": "서비스",
          "minorCategory": "한방병원",
          "address": "부산광역시 중구 중앙대로 26, 5,6,7층 (중앙동6가)",
          "dong": "중앙동6가",
          "status": "영업/정상",
          "openedDate": "2013-03-22",
          "lat": 35.0999651,
          "lng": 129.0369794
        },
        {
          "name": "제이린의원 남포점",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "의원",
          "address": "부산광역시 중구 구덕로 5, 10,11층 (남포동1가)",
          "dong": "미분류",
          "status": "영업/정상",
          "openedDate": "2024-03-15",
          "lat": null,
          "lng": null
        },
        {
          "name": "미소안의원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "의원",
          "address": "부산광역시 중구 구덕로 40, 12층 (남포동2가)",
          "dong": "남포동2가",
          "status": "영업/정상",
          "openedDate": "2019-03-06",
          "lat": 35.0985089,
          "lng": 129.0315865
        },
        {
          "name": "경희미르애한의원",
          "category": "한의원",
          "majorCategory": "서비스",
          "minorCategory": "한의원",
          "address": "부산광역시 중구 구덕로 90, 3층 (남포동6가)",
          "dong": "남포동6가",
          "status": "영업/정상",
          "openedDate": "2019-04-11",
          "lat": 35.0975831,
          "lng": 129.0259995
        },
        {
          "name": "마음웰치과의원",
          "category": "치과 의원",
          "majorCategory": "서비스",
          "minorCategory": "치과의원",
          "address": "부산광역시 중구 구덕로 40, 10층 (남포동2가)",
          "dong": "남포동2가",
          "status": "영업/정상",
          "openedDate": "2019-08-23",
          "lat": 35.0985089,
          "lng": 129.0315865
        },
        {
          "name": "온지프롤로의원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "의원",
          "address": "부산광역시 중구 구덕로 5, 2층 (남포동1가)",
          "dong": "미분류",
          "status": "영업/정상",
          "openedDate": "2019-09-10",
          "lat": null,
          "lng": null
        }
      ]
    },
    {
      "name": "해운대구",
      "totalStores": 8304,
      "activeStores": 3437,
      "closedStores": 4867,
      "activeRate": 41.4,
      "closedRate": 58.6,
      "topMajorCategories": [
        {
          "name": "서비스",
          "count": 6730,
          "share": 81.0
        },
        {
          "name": "외식",
          "count": 603,
          "share": 7.3
        },
        {
          "name": "소매",
          "count": 549,
          "share": 6.6
        },
        {
          "name": "미분류",
          "count": 422,
          "share": 5.1
        }
      ],
      "topMinorCategories": [
        {
          "name": "일반미용업",
          "count": 2125,
          "share": 25.6
        },
        {
          "name": "미분류",
          "count": 1436,
          "share": 17.3
        },
        {
          "name": "피부미용업",
          "count": 930,
          "share": 11.2
        },
        {
          "name": "제과점영업",
          "count": 603,
          "share": 7.3
        },
        {
          "name": "의원",
          "count": 599,
          "share": 7.2
        },
        {
          "name": "노래연습장",
          "count": 436,
          "share": 5.3
        },
        {
          "name": "일반세탁업",
          "count": 392,
          "share": 4.7
        },
        {
          "name": "네일아트업",
          "count": 347,
          "share": 4.2
        },
        {
          "name": "한의원",
          "count": 247,
          "share": 3.0
        },
        {
          "name": "치과의원",
          "count": 233,
          "share": 2.8
        }
      ],
      "topBusinessTypes": [
        {
          "name": "미용실",
          "count": 2125,
          "share": 25.6
        },
        {
          "name": "피부관리실",
          "count": 1023,
          "share": 12.3
        },
        {
          "name": "오락장 운영업",
          "count": 901,
          "share": 10.9
        },
        {
          "name": "일반 의원",
          "count": 665,
          "share": 8.0
        },
        {
          "name": "제과점업",
          "count": 603,
          "share": 7.3
        },
        {
          "name": "여관업",
          "count": 475,
          "share": 5.7
        },
        {
          "name": "의약품 소매업",
          "count": 444,
          "share": 5.3
        },
        {
          "name": "가정용 세탁업",
          "count": 437,
          "share": 5.3
        },
        {
          "name": "일반이용업",
          "count": 417,
          "share": 5.0
        },
        {
          "name": "기타 미용업",
          "count": 362,
          "share": 4.4
        },
        {
          "name": "한의원",
          "count": 248,
          "share": 3.0
        },
        {
          "name": "치과 의원",
          "count": 233,
          "share": 2.8
        }
      ],
      "topAdministrativeDongs": [
        {
          "name": "우동",
          "count": 2062,
          "share": 24.8
        },
        {
          "name": "좌동",
          "count": 1629,
          "share": 19.6
        },
        {
          "name": "반여동",
          "count": 1162,
          "share": 14.0
        },
        {
          "name": "중동",
          "count": 1116,
          "share": 13.4
        },
        {
          "name": "재송동",
          "count": 931,
          "share": 11.2
        },
        {
          "name": "반송동",
          "count": 806,
          "share": 9.7
        },
        {
          "name": "미분류",
          "count": 316,
          "share": 3.8
        },
        {
          "name": "송정동",
          "count": 276,
          "share": 3.3
        },
        {
          "name": "석대동",
          "count": 5,
          "share": 0.1
        },
        {
          "name": "초량동",
          "count": 1,
          "share": 0.0
        }
      ],
      "center": {
        "lat": 35.1806099,
        "lng": 129.1522465
      },
      "sampleStores": [
        {
          "name": "새생명요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 해운대구 해운대로 802, 10층 (좌동)",
          "dong": "좌동",
          "status": "휴업",
          "openedDate": "2009-08-27",
          "lat": 35.1691462,
          "lng": 129.1766624
        },
        {
          "name": "의료법인에벤에셀의료재단 아름다운요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 해운대구 해운대로61번길 47 (재송동)",
          "dong": "재송동",
          "status": "휴업",
          "openedDate": "2009-11-02",
          "lat": 35.1938914,
          "lng": 129.1240788
        },
        {
          "name": "퀸즈파크여성병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 해운대구 해운대로 794, 10~11층 (좌동)",
          "dong": "좌동",
          "status": "영업/정상",
          "openedDate": "2019-06-12",
          "lat": 35.1688116,
          "lng": 129.1757569
        },
        {
          "name": "해운대 한빛요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 해운대구 반여로 156, 한빛요양병원 (반여동)",
          "dong": "반여동",
          "status": "영업/정상",
          "openedDate": "2019-09-03",
          "lat": 35.2050646,
          "lng": 129.1262509
        },
        {
          "name": "한마음병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 해운대구 달맞이길 30, 제포디움동 2층 2017~2020,2079~2081호 (중동, 엘시티)",
          "dong": "중동",
          "status": "영업/정상",
          "openedDate": "2024-09-06",
          "lat": 35.1605568,
          "lng": 129.1687865
        },
        {
          "name": "센텀메디힐병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 해운대구 해운대로161번길 40 (재송동)",
          "dong": "재송동",
          "status": "영업/정상",
          "openedDate": "2024-04-05",
          "lat": 35.1852245,
          "lng": 129.1254648
        },
        {
          "name": "더블유에스치과병원",
          "category": "치과의원",
          "majorCategory": "서비스",
          "minorCategory": "치과병원",
          "address": "부산광역시 해운대구 좌동순환로 6, 5층및 6층일부층 (중동)",
          "dong": "중동",
          "status": "영업/정상",
          "openedDate": "2020-05-29",
          "lat": 35.167234,
          "lng": 129.1680975
        },
        {
          "name": "부산성모안과병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 해운대구 해운대로 409 (우동)",
          "dong": "우동",
          "status": "영업/정상",
          "openedDate": "1992-09-30",
          "lat": 35.1675779,
          "lng": 129.1409345
        },
        {
          "name": "의료법인인본의료재단해운대자명병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "정신병원",
          "address": "부산광역시 해운대구 해운대로469번가길 75 (우동)",
          "dong": "미분류",
          "status": "영업/정상",
          "openedDate": "1999-05-04",
          "lat": null,
          "lng": null
        },
        {
          "name": "제일여성병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "병원",
          "address": "부산광역시 해운대구 좌동로 66 (중동)",
          "dong": "미분류",
          "status": "영업/정상",
          "openedDate": "2004-08-02",
          "lat": null,
          "lng": null
        },
        {
          "name": "달맞이요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 해운대구 달맞이길117번나길 30 (중동)",
          "dong": "중동",
          "status": "영업/정상",
          "openedDate": "2006-05-30",
          "lat": 35.158465,
          "lng": 129.1810981
        },
        {
          "name": "미소요양병원",
          "category": "일반 의원",
          "majorCategory": "서비스",
          "minorCategory": "요양병원(일반요양병원)",
          "address": "부산광역시 해운대구 아랫반송로6번길 37 (반송동)",
          "dong": "미분류",
          "status": "영업/정상",
          "openedDate": "2007-05-30",
          "lat": null,
          "lng": null
        }
      ]
    }
  ]
};

export const busanJinFloatingPopulation: BusanJinFloatingPopulation = {
  "source": {
    "name": "부산광역시 부산진구_유동인구분석",
    "url": "https://www.busanjin.go.kr/crowdflow/data.do",
    "provider": "부산광역시 부산진구",
    "sampleDateTime": "2026-05-31 08:56",
    "note": "부산진구 S-서비스 데이터제공 화면의 1분 단위 격자 유동인구 표본입니다. 앱에서는 부산진구 선택 시 분포 마커와 요약 지표로 표시합니다."
  },
  "totalPopulation": 486,
  "gridCount": 52,
  "maxGridPopulation": 48,
  "points": [
    {
      "id": "4367",
      "count": 5,
      "centerLat": 35.1477607,
      "centerLng": 129.0215074,
      "bounds": {
        "leftLng": 129.02128285040945,
        "topLat": 35.147944367576905,
        "rightLng": 129.02173200805152,
        "bottomLat": 35.14757710479421
      }
    },
    {
      "id": "8936",
      "count": 5,
      "centerLat": 35.1503315,
      "centerLng": 129.0331855,
      "bounds": {
        "leftLng": 129.032960949103,
        "topLat": 35.15051516064674,
        "rightLng": 129.03341010674507,
        "bottomLat": 35.15014790946636
      }
    },
    {
      "id": "11564",
      "count": 1,
      "centerLat": 35.1547384,
      "centerLng": 129.0399229,
      "bounds": {
        "leftLng": 129.0396983137339,
        "topLat": 35.1549220455239,
        "rightLng": 129.04014747137597,
        "bottomLat": 35.15455481423407
      }
    },
    {
      "id": "11823",
      "count": 3,
      "centerLat": 35.1888838,
      "centerLng": 129.0408212,
      "bounds": {
        "leftLng": 129.040596629018,
        "topLat": 35.189067309113256,
        "rightLng": 129.04104578666008,
        "bottomLat": 35.18870023201222
      }
    },
    {
      "id": "15195",
      "count": 3,
      "centerLat": 35.178605,
      "centerLng": 129.0493552,
      "bounds": {
        "leftLng": 129.04913062421718,
        "topLat": 35.17878852347461,
        "rightLng": 129.04957978185922,
        "bottomLat": 35.178421399944256
      }
    },
    {
      "id": "15992",
      "count": 10,
      "centerLat": 35.1444553,
      "centerLng": 129.0511518,
      "bounds": {
        "leftLng": 129.0509272547854,
        "topLat": 35.14463894286533,
        "rightLng": 129.05137641242746,
        "bottomLat": 35.144271665165924
      }
    },
    {
      "id": "17892",
      "count": 8,
      "centerLat": 35.1576762,
      "centerLng": 129.0560926,
      "bounds": {
        "leftLng": 129.05586798884804,
        "topLat": 35.15785983616856,
        "rightLng": 129.05631714649013,
        "bottomLat": 35.15749261813969
      }
    },
    {
      "id": "18068",
      "count": 11,
      "centerLat": 35.1576762,
      "centerLng": 129.0565417,
      "bounds": {
        "leftLng": 129.05631714649013,
        "topLat": 35.15785983616856,
        "rightLng": 129.05676630413217,
        "bottomLat": 35.15749261813969
      }
    },
    {
      "id": "18069",
      "count": 3,
      "centerLat": 35.157309,
      "centerLng": 129.0565417,
      "bounds": {
        "leftLng": 129.05631714649013,
        "topLat": 35.15749261813969,
        "rightLng": 129.05676630413217,
        "bottomLat": 35.15712539845318
      }
    },
    {
      "id": "18244",
      "count": 16,
      "centerLat": 35.1576762,
      "centerLng": 129.0569909,
      "bounds": {
        "leftLng": 129.05676630413217,
        "topLat": 35.15785983616856,
        "rightLng": 129.05721546177423,
        "bottomLat": 35.15749261813969
      }
    },
    {
      "id": "18420",
      "count": 7,
      "centerLat": 35.1576762,
      "centerLng": 129.05744,
      "bounds": {
        "leftLng": 129.05721546177423,
        "topLat": 35.15785983616856,
        "rightLng": 129.0576646194163,
        "bottomLat": 35.15749261813969
      }
    },
    {
      "id": "18425",
      "count": 4,
      "centerLat": 35.1558401,
      "centerLng": 129.05744,
      "bounds": {
        "leftLng": 129.05721546177423,
        "topLat": 35.15602372944782,
        "rightLng": 129.0576646194163,
        "bottomLat": 35.155656503130785
      }
    },
    {
      "id": "19125",
      "count": 1,
      "centerLat": 35.157309,
      "centerLng": 129.0592367,
      "bounds": {
        "leftLng": 129.05901209234247,
        "topLat": 35.15749261813969,
        "rightLng": 129.05946124998454,
        "bottomLat": 35.15712539845318
      }
    },
    {
      "id": "19126",
      "count": 6,
      "centerLat": 35.1569418,
      "centerLng": 129.0592367,
      "bounds": {
        "leftLng": 129.05901209234247,
        "topLat": 35.15712539845318,
        "rightLng": 129.05946124998454,
        "bottomLat": 35.15675817710902
      }
    },
    {
      "id": "19127",
      "count": 11,
      "centerLat": 35.1565746,
      "centerLng": 129.0592367,
      "bounds": {
        "leftLng": 129.05901209234247,
        "topLat": 35.15675817710902,
        "rightLng": 129.05946124998454,
        "bottomLat": 35.15639095410724
      }
    },
    {
      "id": "19129",
      "count": 8,
      "centerLat": 35.1558401,
      "centerLng": 129.0592367,
      "bounds": {
        "leftLng": 129.05901209234247,
        "topLat": 35.15602372944782,
        "rightLng": 129.05946124998454,
        "bottomLat": 35.155656503130785
      }
    },
    {
      "id": "19130",
      "count": 10,
      "centerLat": 35.1554729,
      "centerLng": 129.0592367,
      "bounds": {
        "leftLng": 129.05901209234247,
        "topLat": 35.155656503130785,
        "rightLng": 129.05946124998454,
        "bottomLat": 35.15528927515614
      }
    },
    {
      "id": "19131",
      "count": 4,
      "centerLat": 35.1551057,
      "centerLng": 129.0592367,
      "bounds": {
        "leftLng": 129.05901209234247,
        "topLat": 35.15528927515614,
        "rightLng": 129.05946124998454,
        "bottomLat": 35.1549220455239
      }
    },
    {
      "id": "19132",
      "count": 8,
      "centerLat": 35.1547384,
      "centerLng": 129.0592367,
      "bounds": {
        "leftLng": 129.05901209234247,
        "topLat": 35.1549220455239,
        "rightLng": 129.05946124998454,
        "bottomLat": 35.15455481423407
      }
    },
    {
      "id": "19133",
      "count": 1,
      "centerLat": 35.1543712,
      "centerLng": 129.0592367,
      "bounds": {
        "leftLng": 129.05901209234247,
        "topLat": 35.15455481423407,
        "rightLng": 129.05946124998454,
        "bottomLat": 35.15418758128664
      }
    },
    {
      "id": "19472",
      "count": 9,
      "centerLat": 35.1591451,
      "centerLng": 129.060135,
      "bounds": {
        "leftLng": 129.0599104076266,
        "topLat": 35.159328691707394,
        "rightLng": 129.06035956526864,
        "bottomLat": 35.15896148030919
      }
    },
    {
      "id": "19485",
      "count": 22,
      "centerLat": 35.1543712,
      "centerLng": 129.060135,
      "bounds": {
        "leftLng": 129.0599104076266,
        "topLat": 35.15455481423407,
        "rightLng": 129.06035956526864,
        "bottomLat": 35.15418758128664
      }
    },
    {
      "id": "19646",
      "count": 6,
      "centerLat": 35.1598795,
      "centerLng": 129.0605841,
      "bounds": {
        "leftLng": 129.06035956526864,
        "topLat": 35.16006310953073,
        "rightLng": 129.0608087229107,
        "bottomLat": 35.159695901447904
      }
    },
    {
      "id": "19647",
      "count": 26,
      "centerLat": 35.1595123,
      "centerLng": 129.0605841,
      "bounds": {
        "leftLng": 129.06035956526864,
        "topLat": 35.159695901447904,
        "rightLng": 129.0608087229107,
        "bottomLat": 35.159328691707394
      }
    },
    {
      "id": "19648",
      "count": 5,
      "centerLat": 35.1591451,
      "centerLng": 129.0605841,
      "bounds": {
        "leftLng": 129.06035956526864,
        "topLat": 35.159328691707394,
        "rightLng": 129.0608087229107,
        "bottomLat": 35.15896148030919
      }
    },
    {
      "id": "19659",
      "count": 8,
      "centerLat": 35.1551057,
      "centerLng": 129.0605841,
      "bounds": {
        "leftLng": 129.06035956526864,
        "topLat": 35.15528927515614,
        "rightLng": 129.0608087229107,
        "bottomLat": 35.1549220455239
      }
    },
    {
      "id": "19821",
      "count": 19,
      "centerLat": 35.1602467,
      "centerLng": 129.0610333,
      "bounds": {
        "leftLng": 129.0608087229107,
        "topLat": 35.16043031595584,
        "rightLng": 129.06125788055277,
        "bottomLat": 35.16006310953073
      }
    },
    {
      "id": "19822",
      "count": 14,
      "centerLat": 35.1598795,
      "centerLng": 129.0610333,
      "bounds": {
        "leftLng": 129.0608087229107,
        "topLat": 35.16006310953073,
        "rightLng": 129.06125788055277,
        "bottomLat": 35.159695901447904
      }
    },
    {
      "id": "19837",
      "count": 48,
      "centerLat": 35.1543712,
      "centerLng": 129.0610333,
      "bounds": {
        "leftLng": 129.0608087229107,
        "topLat": 35.15455481423407,
        "rightLng": 129.06125788055277,
        "bottomLat": 35.15418758128664
      }
    },
    {
      "id": "19995",
      "count": 6,
      "centerLat": 35.1609811,
      "centerLng": 129.0614825,
      "bounds": {
        "leftLng": 129.06125788055277,
        "topLat": 35.161164723832925,
        "rightLng": 129.06170703819484,
        "bottomLat": 35.16079752072325
      }
    },
    {
      "id": "19996",
      "count": 19,
      "centerLat": 35.1606139,
      "centerLng": 129.0614825,
      "bounds": {
        "leftLng": 129.06125788055277,
        "topLat": 35.16079752072325,
        "rightLng": 129.06170703819484,
        "bottomLat": 35.16043031595584
      }
    },
    {
      "id": "20170",
      "count": 35,
      "centerLat": 35.1613483,
      "centerLng": 129.0619316,
      "bounds": {
        "leftLng": 129.06170703819484,
        "topLat": 35.1615319252849,
        "rightLng": 129.0621561958369,
        "bottomLat": 35.161164723832925
      }
    },
    {
      "id": "20171",
      "count": 9,
      "centerLat": 35.1609811,
      "centerLng": 129.0619316,
      "bounds": {
        "leftLng": 129.06170703819484,
        "topLat": 35.161164723832925,
        "rightLng": 129.0621561958369,
        "bottomLat": 35.16079752072325
      }
    },
    {
      "id": "20362",
      "count": 14,
      "centerLat": 35.1554729,
      "centerLng": 129.0623808,
      "bounds": {
        "leftLng": 129.0621561958369,
        "topLat": 35.155656503130785,
        "rightLng": 129.06260535347894,
        "bottomLat": 35.15528927515614
      }
    },
    {
      "id": "20528",
      "count": 19,
      "centerLat": 35.1591451,
      "centerLng": 129.0628299,
      "bounds": {
        "leftLng": 129.06260535347894,
        "topLat": 35.159328691707394,
        "rightLng": 129.063054511121,
        "bottomLat": 35.15896148030919
      }
    },
    {
      "id": "20538",
      "count": 4,
      "centerLat": 35.1554729,
      "centerLng": 129.0628299,
      "bounds": {
        "leftLng": 129.06260535347894,
        "topLat": 35.155656503130785,
        "rightLng": 129.063054511121,
        "bottomLat": 35.15528927515614
      }
    },
    {
      "id": "20539",
      "count": 2,
      "centerLat": 35.1551057,
      "centerLng": 129.0628299,
      "bounds": {
        "leftLng": 129.06260535347894,
        "topLat": 35.15528927515614,
        "rightLng": 129.063054511121,
        "bottomLat": 35.1549220455239
      }
    },
    {
      "id": "20540",
      "count": 9,
      "centerLat": 35.1547384,
      "centerLng": 129.0628299,
      "bounds": {
        "leftLng": 129.06260535347894,
        "topLat": 35.1549220455239,
        "rightLng": 129.063054511121,
        "bottomLat": 35.15455481423407
      }
    },
    {
      "id": "20888",
      "count": 4,
      "centerLat": 35.1562073,
      "centerLng": 129.0637282,
      "bounds": {
        "leftLng": 129.06350366876308,
        "topLat": 35.15639095410724,
        "rightLng": 129.06395282640514,
        "bottomLat": 35.15602372944782
      }
    },
    {
      "id": "20890",
      "count": 12,
      "centerLat": 35.1554729,
      "centerLng": 129.0637282,
      "bounds": {
        "leftLng": 129.06350366876308,
        "topLat": 35.155656503130785,
        "rightLng": 129.06395282640514,
        "bottomLat": 35.15528927515614
      }
    },
    {
      "id": "20891",
      "count": 18,
      "centerLat": 35.1551057,
      "centerLng": 129.0637282,
      "bounds": {
        "leftLng": 129.06350366876308,
        "topLat": 35.15528927515614,
        "rightLng": 129.06395282640514,
        "bottomLat": 35.1549220455239
      }
    },
    {
      "id": "20892",
      "count": 2,
      "centerLat": 35.1547384,
      "centerLng": 129.0637282,
      "bounds": {
        "leftLng": 129.06350366876308,
        "topLat": 35.1549220455239,
        "rightLng": 129.06395282640514,
        "bottomLat": 35.15455481423407
      }
    },
    {
      "id": "21063",
      "count": 2,
      "centerLat": 35.1565746,
      "centerLng": 129.0641774,
      "bounds": {
        "leftLng": 129.06395282640514,
        "topLat": 35.15675817710902,
        "rightLng": 129.06440198404718,
        "bottomLat": 35.15639095410724
      }
    },
    {
      "id": "21068",
      "count": 1,
      "centerLat": 35.1547384,
      "centerLng": 129.0641774,
      "bounds": {
        "leftLng": 129.06395282640514,
        "topLat": 35.1549220455239,
        "rightLng": 129.06440198404718,
        "bottomLat": 35.15455481423407
      }
    },
    {
      "id": "21240",
      "count": 7,
      "centerLat": 35.1562073,
      "centerLng": 129.0646266,
      "bounds": {
        "leftLng": 129.06440198404718,
        "topLat": 35.15639095410724,
        "rightLng": 129.06485114168925,
        "bottomLat": 35.15602372944782
      }
    },
    {
      "id": "21241",
      "count": 6,
      "centerLat": 35.1558401,
      "centerLng": 129.0646266,
      "bounds": {
        "leftLng": 129.06440198404718,
        "topLat": 35.15602372944782,
        "rightLng": 129.06485114168925,
        "bottomLat": 35.155656503130785
      }
    },
    {
      "id": "21242",
      "count": 15,
      "centerLat": 35.1554729,
      "centerLng": 129.0646266,
      "bounds": {
        "leftLng": 129.06440198404718,
        "topLat": 35.155656503130785,
        "rightLng": 129.06485114168925,
        "bottomLat": 35.15528927515614
      }
    },
    {
      "id": "21243",
      "count": 4,
      "centerLat": 35.1551057,
      "centerLng": 129.0646266,
      "bounds": {
        "leftLng": 129.06440198404718,
        "topLat": 35.15528927515614,
        "rightLng": 129.06485114168925,
        "bottomLat": 35.1549220455239
      }
    },
    {
      "id": "21244",
      "count": 1,
      "centerLat": 35.1547384,
      "centerLng": 129.0646266,
      "bounds": {
        "leftLng": 129.06440198404718,
        "topLat": 35.1549220455239,
        "rightLng": 129.06485114168925,
        "bottomLat": 35.15455481423407
      }
    },
    {
      "id": "21421",
      "count": 12,
      "centerLat": 35.1543712,
      "centerLng": 129.0650757,
      "bounds": {
        "leftLng": 129.06485114168925,
        "topLat": 35.15455481423407,
        "rightLng": 129.0653002993313,
        "bottomLat": 35.15418758128664
      }
    },
    {
      "id": "26294",
      "count": 2,
      "centerLat": 35.1745665,
      "centerLng": 129.0776521,
      "bounds": {
        "leftLng": 129.0774275556669,
        "topLat": 35.17475007344738,
        "rightLng": 129.077876713309,
        "bottomLat": 35.17438293167853
      }
    },
    {
      "id": "27925",
      "count": 1,
      "centerLat": 35.157309,
      "centerLng": 129.0816946,
      "bounds": {
        "leftLng": 129.08146997444547,
        "topLat": 35.15749261813969,
        "rightLng": 129.0819191320875,
        "bottomLat": 35.15712539845318
      }
    }
  ]
};

