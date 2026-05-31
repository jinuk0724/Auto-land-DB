# 테스트 및 빌드 검증 보고서

## 개요

전국 부동산 인사이트 데스크톱 앱은 연결된 Windows 컴퓨터의 `D:\AI\manus\real-estate-insight` 경로에서 구현 및 빌드되었습니다. Node.js와 .NET SDK가 전역 설치되어 있지 않은 환경이었기 때문에, 프로젝트 내부에 portable Node.js를 배치하고 Electron + React + TypeScript 기반으로 앱을 구성했습니다.

## 검증 항목

| 항목 | 결과 | 비고 |
| --- | --- | --- |
| TypeScript 컴파일 | 통과 | `npm run build` 실행 완료 |
| Vite 번들 생성 | 통과 | `dist/index.html`, `dist/assets/*.css`, `dist/assets/*.js` 생성 |
| Electron 메인 프로세스 컴파일 | 통과 | `dist-electron/main.js`, `dist-electron/preload.js`, API 브리지 번들 생성 |
| 공공데이터 API 브리지 | 구현 완료 | API 키 입력 시 공공 API 호출, 실패 시 샘플 데이터 fallback |
| 지도 렌더링 구성 | 구현 완료 | Leaflet + OpenStreetMap 타일 사용 |
| 상권·유동인구 차트 | 구현 완료 | Chart.js 기반 가격, 업종, 유동인구 차트 구성 |
| CSV 내보내기 | 구현 완료 | 검색 결과를 UTF-8 BOM 포함 CSV로 저장 |
| 휴대용 실행 폴더 | 생성 완료 | `release\전국부동산인사이트-portable` |
| ZIP 압축본 | 생성 완료 | `release\전국부동산인사이트-portable.zip` |

## 패키징 참고 사항

Electron Builder의 `--win portable` 패키징은 현재 Windows 권한 환경에서 코드서명 도구 압축 해제 중 심볼릭 링크 생성 오류가 발생했습니다. 따라서 앱 배포본은 Electron 런타임을 직접 복사하고 `resources\app`에 빌드 산출물을 배치하는 방식으로 생성했습니다. 이 방식은 설치가 필요 없는 휴대용 배포 구조이며, 실행 파일은 다음 경로에 있습니다.

```text
D:\AI\manus\real-estate-insight\release\전국부동산인사이트-portable\전국부동산인사이트.exe
```

## 알려진 제한

공공데이터포털 서비스키가 없는 경우 실제 실거래 API 조회는 수행되지 않으며, 앱은 자동으로 샘플 데이터 모드로 동작합니다. 또한 민간 부동산 매물 사이트 크롤링과 법원경매정보 자동 수집은 이용약관과 법적 위험을 고려해 기본 구현에서 제외했습니다. 경매·공매는 온비드 API와 법원경매정보 외부 링크를 중심으로 확장할 수 있도록 구조화했습니다.
