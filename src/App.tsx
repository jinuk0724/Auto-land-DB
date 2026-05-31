import { useEffect, useMemo, useRef, useState } from 'react';
import L from 'leaflet';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Building2, Download, ExternalLink, KeyRound, MapPin, Search, Store, TrendingUp, UsersRound } from 'lucide-react';
import type { DealType, PropertyRecord, SearchRequest, SearchResponse } from './global';
import { allDistricts, provinces } from './data/regions';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, Tooltip, Legend);

const dealLabels: Record<DealType, string> = {
  rent: '전세·월세',
  sale: '매매',
  commercial: '비주거용·상가 매매',
  auction: '경매·공매',
};

const defaultMonth = new Date().toISOString().slice(0, 7);
const bundledApiKey = import.meta.env.VITE_PUBLIC_DATA_SERVICE_KEY ?? '';
const defaultProvinceCode = '11';
const defaultRegionCode = '11680';
const supportedDealTypes: DealType[] = ['rent', 'sale'];

export default function App() {
  const [apiKey, setApiKey] = useState(localStorage.getItem('publicDataApiKey') ?? bundledApiKey);
  const [dealType, setDealType] = useState<DealType>('rent');
  const [provinceCode, setProvinceCode] = useState(defaultProvinceCode);
  const [regionCode, setRegionCode] = useState(defaultRegionCode);
  const [contractMonth, setContractMonth] = useState(defaultMonth);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<PropertyRecord | null>(null);
  const [response, setResponse] = useState<SearchResponse | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const leafletRef = useRef<L.Map | null>(null);
  const layerRef = useRef<L.LayerGroup | null>(null);

  const districtOptions = useMemo(() => provinces.find((province) => province.code === provinceCode)?.districts ?? provinces[0]?.districts ?? [], [provinceCode]);
  const regionName = useMemo(() => allDistricts.find((region) => region.code === regionCode)?.fullName ?? '서울특별시 강남구', [regionCode]);

  const filteredRecords = useMemo(() => {
    const records = response?.records ?? [];
    const lowered = keyword.trim().toLowerCase();
    if (!lowered) return records;
    return records.filter((record) => `${record.title} ${record.address} ${record.category}`.toLowerCase().includes(lowered));
  }, [keyword, response]);

  const recordsOnMap = useMemo(() => filteredRecords.filter((record) => typeof record.lat === 'number' && typeof record.lng === 'number'), [filteredRecords]);

  const summary = useMemo(() => {
    const records = filteredRecords;
    const total = records.reduce((acc, item) => acc + item.price, 0);
    const avgPrice = records.length ? Math.round(total / records.length) : 0;
    const avgArea = records.length ? Math.round(records.reduce((acc, item) => acc + item.area, 0) / records.length) : 0;
    const commerceCount = response?.commerce.length ?? 0;
    const floatingIndex = response?.population.floatingIndex ?? 0;
    const riskScore = Math.max(18, Math.min(86, 100 - Math.round((floatingIndex + commerceCount * 4) / 2)));
    return { count: records.length, avgPrice, avgArea, commerceCount, floatingIndex, riskScore };
  }, [filteredRecords, response]);

  useEffect(() => {
    void runSearch();
  }, []);

  useEffect(() => {
    if (!mapRef.current || leafletRef.current) return;
    leafletRef.current = L.map(mapRef.current, { zoomControl: false }).setView([37.5665, 126.978], 12);
    L.control.zoom({ position: 'bottomright' }).addTo(leafletRef.current);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(leafletRef.current);
    layerRef.current = L.layerGroup().addTo(leafletRef.current);
  }, []);

  useEffect(() => {
    const map = leafletRef.current;
    const layer = layerRef.current;
    if (!map || !layer || !response) return;
    layer.clearLayers();
    const bounds: L.LatLngTuple[] = [];

    recordsOnMap.forEach((record) => {
      if (typeof record.lat !== 'number' || typeof record.lng !== 'number') return;
      const marker = L.circleMarker([record.lat, record.lng], {
        radius: 9,
        fillColor: record.dealType === 'rent' ? '#06b6d4' : '#22c55e',
        color: '#ffffff',
        weight: 2,
        fillOpacity: 0.92,
      }).bindPopup(`<strong>${record.title}</strong><br/>${record.address}<br/>${record.priceLabel}`);
      marker.on('click', () => setSelected(record));
      marker.addTo(layer);
      bounds.push([record.lat, record.lng]);
    });

    response.commerce.forEach((shop) => {
      if (typeof shop.lat !== 'number' || typeof shop.lng !== 'number') return;
      L.circleMarker([shop.lat, shop.lng], {
        radius: 5,
        fillColor: '#8b5cf6',
        color: '#ede9fe',
        weight: 1,
        fillOpacity: 0.75,
      }).bindPopup(`<strong>${shop.name}</strong><br/>${shop.industry}<br/>${shop.address}`).addTo(layer);
      bounds.push([shop.lat, shop.lng]);
    });

    if (bounds.length) map.fitBounds(bounds, { padding: [36, 36], maxZoom: 14 });
  }, [recordsOnMap, response]);

  async function runSearch() {
    setLoading(true);
    setSelected(null);
    localStorage.setItem('publicDataApiKey', apiKey);
    const request: SearchRequest = { apiKey, dealType, regionCode, regionName, contractMonth, keyword };
    try {
      const result = await window.desktopApi.searchRealEstate(request);
      setResponse(result);
      setSelected(result.records[0] ?? null);
    } finally {
      setLoading(false);
    }
  }

  function exportCsv() {
    const header = ['출처', '유형', '제목', '주소', '가격', '면적', '층', '계약일'];
    const rows = filteredRecords.map((record) => [record.source, dealLabels[record.dealType], record.title, record.address, record.priceLabel, `${record.area}㎡`, record.floor ?? '', record.contractDate ?? '']);
    const csv = [header, ...rows].map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([`\uFEFF${csv}`], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `real-estate-insight-${regionCode}-${dealType}.csv`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  const commerceChart = useMemo(() => {
    const counts = new Map<string, number>();
    response?.commerce.forEach((item) => counts.set(item.industry, (counts.get(item.industry) ?? 0) + 1));
    return {
      labels: [...counts.keys()],
      datasets: [{ data: [...counts.values()], backgroundColor: ['#22c55e', '#06b6d4', '#8b5cf6', '#f97316', '#eab308', '#ec4899', '#14b8a6', '#64748b', '#ef4444'] }],
    };
  }, [response]);

  const priceChart = useMemo(() => ({
    labels: filteredRecords.map((record) => record.title.slice(0, 10)),
    datasets: [{ label: '가격 지표(만원)', data: filteredRecords.map((record) => record.price), backgroundColor: '#38bdf8', borderColor: '#0ea5e9' }],
  }), [filteredRecords]);

  const populationChart = useMemo(() => ({
    labels: ['평일', '주말', '20~39세', '40~59세'],
    datasets: [{ label: '유동인구·연령 지표', data: [response?.population.weekday ?? 0, response?.population.weekend ?? 0, (response?.population.age20to39 ?? 0) * 180, (response?.population.age40to59 ?? 0) * 180], borderColor: '#a78bfa', backgroundColor: 'rgba(167, 139, 250, 0.18)', tension: 0.35, fill: true }],
  }), [response]);

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Public Real Estate Intelligence Desktop</p>
          <h1>전국 부동산 인사이트</h1>
        </div>
        <div className="header-actions">
          <button className="ghost" onClick={() => window.desktopApi.openExternal('https://www.courtauction.go.kr/')}><ExternalLink size={16} /> 법원경매정보</button>
          <button className="ghost" onClick={() => window.desktopApi.openExternal('https://www.data.go.kr/')}><KeyRound size={16} /> 공공데이터포털</button>
        </div>
      </header>

      <main className="layout">
        <aside className="panel search-panel">
          <h2><Search size={18} /> 통합 검색</h2>
          <label>공공데이터포털 서비스키</label>
          <input value={apiKey} onChange={(event) => setApiKey(event.target.value)} placeholder="서비스키를 입력하면 실제 API 조회" type="password" />
          <label>거래 유형</label>
          <div className="segmented">
            {(Object.keys(dealLabels) as DealType[]).map((type) => (
              <button key={type} className={dealType === type ? 'active' : ''} onClick={() => setDealType(type)} disabled={!supportedDealTypes.includes(type)} title={!supportedDealTypes.includes(type) ? '2차 지원 예정 기능입니다.' : undefined}>
                {dealLabels[type]}{!supportedDealTypes.includes(type) ? ' · 예정' : ''}
              </button>
            ))}
          </div>
          <label>시·도</label>
          <select value={provinceCode} onChange={(event) => {
            const nextProvinceCode = event.target.value;
            const nextDistricts = provinces.find((province) => province.code === nextProvinceCode)?.districts ?? [];
            setProvinceCode(nextProvinceCode);
            setRegionCode(nextDistricts[0]?.code ?? defaultRegionCode);
          }}>
            {provinces.map((province) => <option key={province.code} value={province.code}>{province.name}</option>)}
          </select>
          <label>시·군·구</label>
          <select value={regionCode} onChange={(event) => setRegionCode(event.target.value)}>{districtOptions.map((district) => <option key={district.code} value={district.code}>{district.name}</option>)}</select>
          <label>계약·입찰 기준월</label>
          <input value={contractMonth} onChange={(event) => setContractMonth(event.target.value)} type="month" />
          <label>결과 내 키워드 필터</label>
          <input value={keyword} onChange={(event) => setKeyword(event.target.value)} placeholder="상가, 아파트, 업무시설 등" />
          <button className="primary" onClick={runSearch} disabled={loading}>{loading ? '조회 중...' : '검색 및 분석 실행'}</button>

          <div className="notice">
            <strong>{response?.ok ? '실제 API 조회 완료' : '실제 API 조회 대기'}</strong>
            <span>{response?.message ?? '공공데이터포털 서비스키를 입력하면 아파트 매매·전월세 실거래가를 조회합니다. 샘플 데이터로 자동 대체하지 않습니다.'}</span>
          </div>
        </aside>

        <section className="map-section">
          <div className="map-toolbar">
            <div><MapPin size={18} /> {regionName} · 지도 표시 {recordsOnMap.length}건</div>
            <button className="ghost compact" onClick={exportCsv}><Download size={15} /> CSV 내보내기</button>
          </div>
          <div ref={mapRef} className="map" />
          {selected && <div className="floating-card"><strong>{selected.title}</strong><span>{selected.address}</span><b>{selected.priceLabel}</b><small>{selected.category} · {selected.area}㎡ · {selected.source}</small></div>}
        </section>

        <aside className="panel insight-panel">
          <h2><TrendingUp size={18} /> 분석 요약</h2>
          <div className="metric-grid">
            <Metric icon={<Building2 />} label="검색 물건" value={`${summary.count}건`} />
            <Metric icon={<TrendingUp />} label="평균 가격" value={`${summary.avgPrice.toLocaleString()}만원`} />
            <Metric icon={<Store />} label="주변 상가" value={`${summary.commerceCount}개`} />
            <Metric icon={<UsersRound />} label="유동지수" value={`${summary.floatingIndex}/100`} />
          </div>

          <div className="score-card">
            <span>상권 매력도</span>
            <strong>{Math.min(96, summary.floatingIndex + summary.commerceCount * 3)}</strong>
            <small>유동인구, 주변 상가 밀도, 거래 결과 수를 합산한 내부 지표입니다.</small>
          </div>

          <div className="chart-card"><h3>물건별 가격 지표</h3><Bar data={priceChart} options={{ plugins: { legend: { display: false } }, scales: { x: { ticks: { color: '#94a3b8' } }, y: { ticks: { color: '#94a3b8' } } } }} /></div>
          <div className="chart-card"><h3>업종 분포</h3><Doughnut data={commerceChart} options={{ plugins: { legend: { position: 'bottom', labels: { color: '#cbd5e1' } } } }} /></div>
          <div className="chart-card"><h3>유동인구 추정</h3><Line data={populationChart} options={{ plugins: { legend: { display: false } }, scales: { x: { ticks: { color: '#94a3b8' } }, y: { ticks: { color: '#94a3b8' } } } }} /></div>
        </aside>
      </main>

      <section className="results panel">
        <div className="results-header"><h2>검색 결과</h2><span>{filteredRecords.length}건 표시 · 지도 {recordsOnMap.length}건</span></div>

        <table>
          <thead><tr><th>유형</th><th>제목</th><th>주소</th><th>가격</th><th>면적</th><th>태그</th></tr></thead>
          <tbody>{filteredRecords.map((record) => <tr key={record.id} onClick={() => setSelected(record)} className={selected?.id === record.id ? 'selected' : ''}><td>{dealLabels[record.dealType]}</td><td>{record.title}</td><td>{record.address}</td><td>{record.priceLabel}</td><td>{record.area}㎡</td><td>{record.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</td></tr>)}</tbody>
        </table>
      </section>

      <footer className="footer">
        <span>데이터 출처: 국토교통부 아파트 매매·전월세 실거래가, 행정표준코드관리시스템 법정동코드. 좌표가 검증되지 않은 거래는 지도에 표시하지 않고 목록과 CSV에만 제공합니다.</span>
        <div>{response?.references.map((ref) => <button key={ref.url} onClick={() => window.desktopApi.openExternal(ref.url)}>{ref.title}</button>)}</div>
      </footer>
    </div>
  );
}

function Metric({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return <div className="metric"><span>{icon}</span><small>{label}</small><strong>{value}</strong></div>;
}
