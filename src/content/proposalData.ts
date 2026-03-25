import {
  AbTestItem,
  BudgetScenario,
  CertaintyDriver,
  ChannelPlay,
  ComplianceItem,
  CreativeSpec,
  CreativeTrack,
  EventStep,
  FunnelStage,
  HeroSummary,
  KpiRow,
  MarketStat,
  MeasurementNode,
  NextStep,
  PositioningPoint,
  RetargetingStep,
  TimelineItem,
  UxLayer,
  UxRecommendation,
  ValueProp
} from '../types/proposal';

export const heroSummary: HeroSummary = {
  eyebrow: 'Cruisia Online Marketing Funnel Proposal',
  title: '실시간 재고를 실제 구매 전환으로 연결하는 6단 퍼널',
  description:
    'Cruisia의 핵심 자산은 실시간 재고, 가격 비교, 국내 결제, 즉시 예약이라는 확실성입니다. 이 제안서는 크루즈 구매 여정 전체를 인지부터 재구매까지 재설계해 광고, 콘텐츠, 랜딩, 측정 체계를 하나의 퍼널로 연결합니다.',
  primaryCtaLabel: '전략 구조 보기',
  primaryCtaTarget: '#funnel',
  secondaryCtaLabel: '채널 실행안 보기',
  secondaryCtaTarget: '#channels'
};

export const marketStats: MarketStat[] = [
  {
    label: '신규 이용자',
    value: '31%',
    detail: '최근 2년 내 신규 크루즈 이용자 비중이 높아 초보자 교육형 콘텐츠가 퍼널 초반에 반드시 필요합니다.',
    sources: [{ label: 'CLIA State of the Cruise Industry Report 2025', url: 'https://cruising.org/sites/default/files/2025-07/State%20of%20the%20Cruise%20Industry%20Report%202025.pdf' }]
  },
  {
    label: '40세 미만',
    value: '36%',
    detail: '젊어지는 수요 구조는 크루즈가 중장년 전용 여행이라는 인식을 깨는 핵심 근거입니다.',
    sources: [{ label: 'CLIA State of the Cruise Industry Report 2025', url: 'https://cruising.org/sites/default/files/2025-07/State%20of%20the%20Cruise%20Industry%20Report%202025.pdf' }]
  },
  {
    label: '1년+ 선예약',
    value: '11%',
    detail: '장기 고려 구간이 존재하므로 검색 이후의 리드 너처링, 가격 알림, 리타겟팅 체계가 중요합니다.',
    sources: [{ label: 'CLIA State of the Cruise Industry Report 2025', url: 'https://cruising.org/sites/default/files/2025-07/State%20of%20the%20Cruise%20Industry%20Report%202025.pdf' }]
  },
  {
    label: '다세대 동행',
    value: '28%',
    detail: '가족과 다세대 여행 수요가 높아 세그먼트별 메시지와 광고 소재를 분리 설계해야 합니다.',
    sources: [{ label: 'CLIA State of the Cruise Industry Report 2025', url: 'https://cruising.org/sites/default/files/2025-07/State%20of%20the%20Cruise%20Industry%20Report%202025.pdf' }]
  }
];

export const valueProps: ValueProp[] = [
  {
    title: '실시간 검색·비교·예약',
    description: '전 세계 크루즈 재고를 실시간으로 조회하고 비교해 바로 예약할 수 있는 검색 엔진형 OTA 포지션입니다.',
    sources: [
      { label: 'Cruisia 공식 사이트', url: 'https://www.cruisia.co.kr/' },
      { label: '연합뉴스 출시 기사', url: 'https://www.yna.co.kr/view/AKR20250508152700542' }
    ]
  },
  {
    title: '국내 결제와 가격 투명성',
    description: '국내 정산 기반과 수수료 구조 단순화 메시지는 구매 직전의 불안 해소에 직접 연결됩니다.',
    sources: [
      { label: 'Cruisia 공식 사이트', url: 'https://www.cruisia.co.kr/' },
      { label: '연합뉴스 출시 기사', url: 'https://www.yna.co.kr/view/AKR20250508152700542' }
    ]
  },
  {
    title: 'B2B 제휴 확장성',
    description: '여행사·OTA와의 연계를 통해 D2C뿐 아니라 재고 유통 플랫폼으로도 확장 가능한 구조입니다.',
    sources: [{ label: '노랑풍선 제휴 기사', url: 'https://m.travelinfo.co.kr/cmm/index_news.html?BD_CD=NEWS&MODE=view&MSEQ=60517&b_uid=3&m_uid=4' }]
  }
];

export const certaintyDrivers: CertaintyDriver[] = [
  { label: '원하는 일정', detail: '내가 원하는 항로와 날짜에 실제 예약 가능한지 즉시 확인되어야 합니다.' },
  { label: '원하는 선실', detail: '객실 카테고리와 가능 여부가 실시간으로 검증되어야 합니다.' },
  { label: '합리적인 총액', detail: '필수 비용과 현지 지불 항목이 한 화면에서 분리 표기되어야 합니다.' },
  { label: '취소·환불 신뢰', detail: '광고와 랜딩 전반에서 핵심 정책이 같은 문장으로 이어져야 합니다.' },
  { label: '즉시 확정 경험', detail: '실시간이라는 말이 아니라, 즉시 확정되는 인터페이스로 신뢰를 증명해야 합니다.' }
];

export const positioningPoints: PositioningPoint[] = [
  {
    name: 'Cruisia',
    x: 82,
    y: 78,
    description: '실시간 재고 기반 탐색성과 구매 확실성을 동시에 강조하는 포지션입니다.',
    sources: [
      { label: 'Cruisia 공식 사이트', url: 'https://www.cruisia.co.kr/' },
      { label: '연합뉴스 출시 기사', url: 'https://www.yna.co.kr/view/AKR20250508152700542' }
    ]
  },
  {
    name: '크루즈 전문 플랫폼형',
    x: 70,
    y: 58,
    description: '실시간 예약을 일부 제공하지만 비교 범위와 브랜드 차별화는 제한될 수 있습니다.',
    sources: [{ label: '크루즈TMK 기사', url: 'https://www.ktnbm.co.kr/news_view.html?news_seq=3810' }]
  },
  {
    name: '대형 여행사/패키지형',
    x: 38,
    y: 74,
    description: '신뢰는 강하지만 실시간 비교와 바텀업 탐색 측면에서는 마찰이 큽니다.',
    sources: [{ label: '하나투어 크루즈 카테고리', url: 'https://www.hanatour.com/package/cruise' }]
  },
  {
    name: '선사 직판형',
    x: 56,
    y: 36,
    description: '단일 브랜드 경험은 좋지만 다선사 비교라는 Cruisia의 장점은 제공하지 못합니다.',
    sources: [{ label: 'MSC Cruises Korea', url: 'https://www.msccruises.co.kr/' }]
  }
];

export const earlyMarketSources = [
  { label: 'CLIA State of the Cruise Industry Report 2025', url: 'https://cruising.org/sites/default/files/2025-07/State%20of%20the%20Cruise%20Industry%20Report%202025.pdf' },
  { label: 'Cruisia 공식 사이트', url: 'https://www.cruisia.co.kr/' },
  { label: '연합뉴스 출시 기사', url: 'https://www.yna.co.kr/view/AKR20250508152700542' },
  { label: '노랑풍선 제휴 기사', url: 'https://m.travelinfo.co.kr/cmm/index_news.html?BD_CD=NEWS&MODE=view&MSEQ=60517&b_uid=3&m_uid=4' },
  { label: '크루즈TMK 기사', url: 'https://www.ktnbm.co.kr/news_view.html?news_seq=3810' },
  { label: '하나투어 크루즈 카테고리', url: 'https://www.hanatour.com/package/cruise' },
  { label: 'MSC Cruises Korea', url: 'https://www.msccruises.co.kr/' }
];

export const funnelStages: FunnelStage[] = [
  {
    id: 'awareness',
    title: 'Awareness',
    objective: '크루즈를 떠올리게 만들고, 기존 고정관념을 깨는 단계',
    kpis: ['Reach', 'CPM', 'Video Views', '브랜드 검색량'],
    channels: ['FB/IG', 'YouTube Shorts', 'TikTok', 'PR', '전문 아티클'],
    message: '크루즈는 멀고 복잡한 여행이 아니라 여러 도시를 한 번에 경험하는 효율적인 프리미엄 이동 방식입니다.',
    deliverables: ['숏폼 영상', 'UGC형 소재', '브랜드 PR 에셋', '초보자용 콘텐츠 허브'],
    userMindset: '“크루즈는 나와 상관없는 여행 아닌가?”',
    landingFocus: '브랜드 스토리와 초보자 가이드를 통해 탐색 진입을 유도',
    assetTypes: ['6~15초 숏폼', '세로 모션 그래픽', '소셜 스와이프 카드']
  },
  {
    id: 'interest',
    title: 'Interest',
    objective: '사이트 유입과 첫 탐색을 시작시키는 단계',
    kpis: ['LP CVR', 'On-site Search 사용률', 'Engaged Sessions'],
    channels: ['SEO', 'Google/Naver 검색', 'YouTube 롱폼', 'Meta Traffic'],
    message: '크루즈 초보자도 선사, 선실, 항로를 쉽게 비교할 수 있다는 학습 경험을 제공합니다.',
    deliverables: ['초보자 가이드', '항로별 랜딩', '비교 콘텐츠', '검색 광고 카피'],
    userMindset: '“나도 탈 수 있을 것 같은데, 어디서부터 봐야 하지?”',
    landingFocus: '검색과 비교로 이어지는 정보 랜딩과 콘텐츠 허브 구성',
    assetTypes: ['60초 설명 영상', '검색 랜딩', '비교형 인포그래픽']
  },
  {
    id: 'consideration',
    title: 'Consideration',
    objective: '상품 비교와 shortlist 생성을 지원하는 단계',
    kpis: ['상품 상세 조회', '관심 상품 저장', '예약 정보 입력 시작', '재방문율'],
    channels: ['Google Ads Search', 'Naver Search', 'Meta Retargeting', 'OTA 제휴'],
    message: '너무 많은 선택지를 대신 구조화해 선사, 일정, 선실, 포함사항을 빠르게 판단하게 만듭니다.',
    deliverables: ['비교표', '카탈로그형 소재', '항로별 상세 페이지', '저장·가격 알림 기능'],
    userMindset: '“어디, 언제, 어떤 선박이 나한테 맞지?”',
    landingFocus: '필터, 정렬, 비교, 저장 기능이 중심인 검색 결과 경험',
    assetTypes: ['카탈로그 카드', '비교형 캐러셀', '목적지 가이드']
  },
  {
    id: 'intent',
    title: 'Intent',
    objective: '체크아웃 직전 확신을 강화하는 단계',
    kpis: ['Checkout Progression', '상담/문의율', '가격 알림 등록'],
    channels: ['Brand Search', 'RLSA', 'Meta 리타겟팅', 'CRM'],
    message: '실시간 가격, 총액 투명성, 취소/환불 조건을 통해 “예약해도 되겠다”는 확신을 만듭니다.',
    deliverables: ['총액 안내 블록', '정책 요약', '체크아웃 보조 카피', '리타겟팅 시퀀스'],
    userMindset: '“가격과 조건만 납득되면 예약해도 되겠다.”',
    landingFocus: '총액, 포함/불포함, 확정 프로세스를 한 화면에서 설명',
    assetTypes: ['리타겟팅 배너', '정책형 카드', '체크아웃 신뢰 배지']
  },
  {
    id: 'purchase',
    title: 'Purchase',
    objective: '결제와 예약 확정 완료',
    kpis: ['예약 완료', 'CVR', 'CPA', 'ROAS'],
    channels: ['Google/Naver Search', 'RLSA', '체크아웃 이탈 리마케팅'],
    message: '구매 전환은 광고 효율보다 정책 신뢰, 입력 마찰 제거, 결제 직전 불안 해소가 좌우합니다.',
    deliverables: ['간결한 폼 구조', '게스트 체크아웃', '결제 직전 FAQ', '예약 완료 화면'],
    userMindset: '“이 단계에서 문제만 생기지 않으면 지금 결제한다.”',
    landingFocus: '필드 최소화와 결제 확정 UX 최적화',
    assetTypes: ['체크아웃 메시지', '결제 보조 UI', '신뢰 요소 배치']
  },
  {
    id: 'retention',
    title: 'Post-purchase & Retention',
    objective: '출항 전 준비, 후기, 추천, 재구매로 이어지는 단계',
    kpis: ['Repeat Purchase Rate', '리뷰 생성률', 'Referral', 'CRM CTR'],
    channels: ['CRM', 'Email/알림', '리퍼럴', '콘텐츠 시리즈', 'OTA/B2B 재판매'],
    message: '크루즈는 재탑승 의향이 높기 때문에 후기와 CRM을 통한 회수가 구조적으로 중요합니다.',
    deliverables: ['출항 전 체크리스트', '후기 요청', '추천 프로그램', '다음 항차 제안'],
    userMindset: '“이번 경험이 좋으면 다음 여행도 크루즈를 볼 수 있다.”',
    landingFocus: '출항 준비와 후기/추천을 자연스럽게 연결하는 CRM 설계',
    assetTypes: ['리텐션 이메일', '추천 배너', '후기 재활용 콘텐츠']
  }
];

export const kpiFramework: KpiRow[] = [
  { stageId: 'awareness', primary: ['Reach', 'CPM', 'ThruPlay'], secondary: ['CTR', '브랜드 검색량', '사이트 체류'], targetPolicy: 'open' },
  { stageId: 'interest', primary: ['LP CVR', 'On-site Search 사용률'], secondary: ['CPC', 'CTR', 'Engaged Sessions'], targetPolicy: 'open' },
  { stageId: 'consideration', primary: ['상품 상세 조회', '관심 상품 저장', '예약 정보 입력 시작'], secondary: ['재방문율', '구독 전환'], targetPolicy: 'open' },
  { stageId: 'intent', primary: ['Checkout Progression', '가격 알림 등록'], secondary: ['문의율', '세션 깊이'], targetPolicy: 'open' },
  { stageId: 'purchase', primary: ['예약 완료', 'CPA', 'ROAS'], secondary: ['결제 실패율', '취소율'], targetPolicy: 'open' },
  { stageId: 'retention', primary: ['Repeat Purchase', 'Referral'], secondary: ['리뷰 생성률', 'CRM CTR'], targetPolicy: 'open' }
];

export const eventSteps: EventStep[] = [
  { name: '검색 결과·상품 목록 조회', description: '검색 결과와 항로 리스트를 본 순간부터 탐색 데이터를 축적합니다.' },
  { name: '상품 상세 조회', description: '선사·선박·일정·선실 상세 진입을 확인합니다.' },
  { name: '예약 정보 입력 시작', description: '탑승자 정보 입력 시작을 전환 직전 신호로 봅니다.' },
  { name: '결제 정보 입력', description: '결제 수단 선택과 마지막 확신 구간을 측정합니다.' },
  { name: '예약 완료', description: '예약·결제 확정을 핵심 비즈니스 지표로 기록합니다.' }
];

export const customEvents = ['크루즈 검색 실행', '출발일 선택', '객실 선택', '가격 알림 신청'];

export const channelPlaybook: ChannelPlay[] = [
  {
    channel: 'Meta FB/IG',
    category: 'Paid Social',
    role: '인지부터 의도까지 메시지 시퀀스를 설계하고, 리타겟팅으로 재확신을 만드는 주력 채널.',
    strengths: ['크리에이티브 확장성이 높음', '웹사이트 맞춤타겟과 유사타겟 활용 가능', '픽셀 + CAPI 기반 서버 전환 보강'],
    cautions: ['즉시 구매보다 영감/설명형에 더 강함', 'iOS/브라우저 제한으로 픽셀 누락 가능성 존재'],
    campaignObjectives: ['Video Views', 'Traffic', 'Conversions', 'Retargeting'],
    setupPoints: ['표준 이벤트 + CAPI 동시 운영', 'eventID 기반 중복 제거', '9:16 마스터 후 1:1/4:5 크롭 대응'],
    stageIds: ['awareness', 'interest', 'consideration', 'intent'],
    audience: '30~50대 가족 여행층, 초보 크루즈 탐색층, 재방문 사용자',
    tone: '프리미엄이지만 설명 친화적, 과장보다 확실성 중심',
    recommendedAssets: ['6~15초 훅 영상', '카탈로그형 캐러셀', '정책·총액 요약 카드'],
    measurementFocus: ['Search', 'ViewContent', 'InitiateCheckout', 'Purchase'],
    operatingRisk: '픽셀 단독 학습 의존 시 신호 품질이 흔들릴 수 있습니다.'
  },
  {
    channel: 'TikTok',
    category: 'Paid Social',
    role: '크루즈를 처음 떠올리게 만드는 대량 관심 생성 채널.',
    strengths: ['숏폼 파급력', '크리에이터 협업', 'Spark Ads 확장성'],
    cautions: ['비의도 트래픽이 많아 직접 ROAS 기대는 위험', '가격/포함사항 구조화가 약하면 여행 영상으로 소비됨'],
    campaignObjectives: ['In-Feed', 'Spark Ads', 'Retargeting'],
    setupPoints: ['In-Feed 9:16 규격 준수', 'Events API 병행', '3~5초 내 가격/기간/항로 구조화'],
    stageIds: ['awareness', 'interest'],
    audience: '젊은 수요층, 커플/솔로, 새로운 여행 경험 탐색층',
    tone: '가볍게 시작하되 CTA는 구조적으로 명확하게',
    recommendedAssets: ['훅 강한 세로 영상', '크리에이터 리액션', '실시간 가격 보기 CTA'],
    measurementFocus: ['영상 시청률', '세그먼트 확보', '리타겟팅 풀 생성'],
    operatingRisk: '관심 데이터 구축 전 직접 구매 최적화를 걸면 학습 효율이 낮습니다.'
  },
  {
    channel: 'YouTube',
    category: 'Paid Social',
    role: '검색 전 수요를 만들고, 긴 설명형 콘텐츠로 초보자 불안을 낮추는 교육 채널.',
    strengths: ['대량 도달과 스토리텔링', '검색 의도와 자연스럽게 연결', '롱폼과 Shorts를 함께 설계 가능'],
    cautions: ['길어질수록 완주율이 급감', '제작비와 빈도 관리 필요'],
    campaignObjectives: ['Shorts awareness', 'In-stream consideration', '브랜드 검색 유도'],
    setupPoints: ['20초/60초/120~180초 길이 분리', 'Shorts 60초 미만 중심', '검색 유입용 CTA 구조화'],
    stageIds: ['awareness', 'interest', 'consideration'],
    audience: '초보자, 정보 탐색형 수요, 비교·학습을 원하는 타깃',
    tone: '전문적 설명과 여행 감성을 균형 있게 배치',
    recommendedAssets: ['초보자 가이드', '예약 화면 데모', '항로별 설명 영상'],
    measurementFocus: ['View Rate', '브랜드 검색량', '사이트 유입'],
    operatingRisk: '크루즈 입문 설명이 길어지면 액션 전환이 약해질 수 있습니다.'
  },
  {
    channel: 'Google Ads Search',
    category: 'Search',
    role: '고의도 수요를 직접 구매로 연결하는 핵심 퍼포먼스 채널.',
    strengths: ['의도 기반 전환', '키워드별 세밀한 제어', '브랜드 방어와 비브랜드 확장 가능'],
    cautions: ['CPC 상승 가능성', '크루즈 단일 키워드 중심 집행 시 예산 낭비 위험'],
    campaignObjectives: ['Brand Defense', 'High-intent Non-brand', 'RLSA'],
    setupPoints: ['항로/출발월/선사/선박/선실 중심 구조', 'Broad Match + Smart Bidding 신중 적용', 'Enhanced Conversions 도입'],
    stageIds: ['consideration', 'intent', 'purchase'],
    audience: '비교·가격 확인·예약 직전의 고의도 검색층',
    tone: '구체적이고 명확한 검색 의도 대응형',
    recommendedAssets: ['RSA 카피', '가격·정책 랜딩', '체크아웃 리마케팅'],
    measurementFocus: ['예약 완료', 'CPA', 'ROAS', '검색어 품질'],
    operatingRisk: '전환 지표를 예약 완료 하나만 두면 학습 속도가 지나치게 느립니다.'
  },
  {
    channel: 'Naver Search',
    category: 'Search',
    role: '국내 검색 수요를 흡수하고 브랜드 신뢰를 강화하는 핵심 로컬 검색 채널.',
    strengths: ['국내 검색 점유', '브랜드검색과 파워링크 활용', '검수 기준 내에서 신뢰 메시지 강조 가능'],
    cautions: ['검수 엄격', '최상급/과장 표현 제한'],
    campaignObjectives: ['파워링크', '브랜드검색', '전환추적'],
    setupPoints: ['항로/도시/선사/월/출발지 키워드 구조', '정책 준수 카피', '웹 전환 추적 스크립트 정비'],
    stageIds: ['consideration', 'intent', 'purchase'],
    audience: '국내 포털 검색 친화층, 비교/브랜드 확인 수요',
    tone: '정확하고 검수 친화적, 혜택보다 정보 중심',
    recommendedAssets: ['텍스트 광고', '브랜드 요약 랜딩', '정책 안내 블록'],
    measurementFocus: ['전환수', '키워드별 CTR', '브랜드 검색 보호'],
    operatingRisk: '근거 없는 최저가/단독 표현은 검수 차단과 신뢰 하락을 동시에 일으킵니다.'
  },
  {
    channel: 'Google Display + RLSA',
    category: 'Retargeting',
    role: '탐색 단계에서 이탈한 사용자를 재호출하고, 검색 재노출로 의도를 회수하는 보조 채널.',
    strengths: ['리마케팅 스케일', '검색과 디스플레이 결합 회수 전략', '목록 기반 세분화'],
    cautions: ['저품질 인벤토리 관리 필요', '크리에이티브가 약하면 피로도 증가'],
    campaignObjectives: ['Display Retargeting', 'Search RLSA'],
    setupPoints: ['이탈 단계별 세그먼트 구성', '빈도 제어', '검색 재노출 조건 설계'],
    stageIds: ['consideration', 'intent', 'purchase'],
    audience: '검색·비교·체크아웃 이탈자',
    tone: '재설명보다 확신 강화 중심',
    recommendedAssets: ['가격 포함내역 배너', '정책형 배너', '관심 항로 재노출'],
    measurementFocus: ['세그먼트별 복귀율', '재방문 후 예약 완료'],
    operatingRisk: '재방문 이유가 없는 단순 반복 노출은 브랜드 피로만 키웁니다.'
  },
  {
    channel: 'Blind / Remember / 직장인 플랫폼',
    category: 'Vertical / Professional',
    role: '고가치 직장인 세그먼트에 맞춤 오퍼를 전달하는 프리미엄 세그먼트 채널.',
    strengths: ['업계/회사/직급 기반 타깃', '구매력 높은 세그먼트 집중', '복지/인센티브/허니문 메시지 적합'],
    cautions: ['톤이 어색하면 반감 발생', '전국 단위 확장성보다 정밀 타깃 적합'],
    campaignObjectives: ['직군 세그먼트 캠페인', '고가치 상품 프로모션'],
    setupPoints: ['세그먼트별 메시지 분기', '허니문/가족/인센티브용 제안 분리', '고소득층 전용 랜딩 구성'],
    stageIds: ['interest', 'consideration', 'intent'],
    audience: '30~50대 직장인, 허니문, 고소득 가족층',
    tone: '프리미엄, 시간 효율, 높은 만족도 강조',
    recommendedAssets: ['배너', '리드형 카드', '혜택 정리형 랜딩'],
    measurementFocus: ['세그먼트별 리드 질', '예약 전환율', '고객가치'],
    operatingRisk: '전 국민형 카피를 그대로 쓰면 전문 플랫폼 문맥과 맞지 않습니다.'
  },
  {
    channel: 'Daangn 오프라인 설명회',
    category: 'Vertical / Professional',
    role: '직접 ROAS보다 설명회/세미나/상담 예약을 만드는 지역형 보조 채널.',
    strengths: ['지역 기반 문맥', '행사/상담 유도 적합', '부산/인천 등 항구 도시 실험 가능'],
    cautions: ['국제 크루즈 직접 판매와는 거리감 존재', '지역 적합도 검증 필요'],
    campaignObjectives: ['설명회 모집', 'Q&A 세미나', '오프라인 상담'],
    setupPoints: ['소액 파일럿', '지역별 오퍼 차등', '가족/은퇴/허니문 세미나 기획'],
    stageIds: ['awareness', 'interest'],
    audience: '항구 도시권, 상담 지향 고객, 오프라인 신뢰 선호층',
    tone: '친근하지만 전문적, 교육형',
    recommendedAssets: ['지역형 이미지', '이벤트 배너', '설명회 초대 카드'],
    measurementFocus: ['참여 신청', '상담 예약', '현장 전환'],
    operatingRisk: '지역 적합성 검증 없이 전국 확장하면 효율이 급격히 낮아질 수 있습니다.'
  },
  {
    channel: 'OTA / 여행사 제휴',
    category: 'Partnership / Distribution',
    role: '신뢰와 유통망을 활용해 빠르게 GMV를 키우는 성장 채널.',
    strengths: ['여행사 영향력 활용', '상담/패키징과 실시간 재고의 역할 분담', 'B2B 확장성'],
    cautions: ['마진·정산 구조 복잡', '정책 문구 표준화 필요'],
    campaignObjectives: ['재고 연동', '공동 기획전', 'B2B 공급 확대'],
    setupPoints: ['Partner GMV 기준 관리', '공급 커버리지 추적', '계약/환불/CS 표준화'],
    stageIds: ['consideration', 'intent', 'purchase', 'retention'],
    audience: '여행사, 제휴 OTA, 복지 플랫폼, B2B 유통 파트너',
    tone: '플랫폼 신뢰, 운영 효율, 확정성 중심',
    recommendedAssets: ['제휴 제안 자료', '공동 프로모션 키트', '파트너용 세일즈 자료'],
    measurementFocus: ['Partner GMV', '파트너별 전환율', '취소율', 'CS 처리 시간'],
    operatingRisk: '광고 효율보다 운영 정책 정합성이 더 큰 성공 변수입니다.'
  }
];

export const retargetingSequence: RetargetingStep[] = [
  { window: '1~3일', audience: '상품 상세를 보거나 객실을 고른 사용자', message: '해당 일정의 핵심 포인트 3개와 취소/환불 요약을 바로 제시해 첫 이탈 이유를 차단합니다.' },
  { window: '4~14일', audience: '예약 정보 입력 단계에서 이탈한 사용자', message: '총액 투명성, 포함 내역, 고객센터 연결, 예약 확정 프로세스를 전면에 내세웁니다.' },
  { window: '15~60일', audience: '관심 항로 저장 또는 장기 미전환 사용자', message: '기항지 가이드, 시즌별 추천, 가격 알림 기반 콘텐츠로 재관심을 유도합니다.' }
];

export const creativeTracks: CreativeTrack[] = [
  { name: '초보자 트랙', audience: '크루즈가 낯선 first-time 탐색층', angles: ['크루즈 용어 쉽게 설명', '선실/항로/선사 차이 정리', '처음 예약할 때 보는 체크리스트'], assetTypes: ['Shorts', '가이드 랜딩', 'FAQ 카드'] },
  { name: '가성비 트랙', audience: '총 여행 효율과 가격 구조를 따지는 실속형 수요', angles: ['한 번 결제, 여러 도시 체크인', '호텔 이동 비용 절감', '포함사항 기준 총액 비교'], assetTypes: ['비교형 인포그래픽', '카탈로그 광고', '총액 안내 카드'] },
  { name: '가족/다세대 트랙', audience: '가족, 부모 동반, 단체 여정을 고민하는 세그먼트', angles: ['3~5세대가 함께 즐기는 구조', '이동 피로를 줄이는 여행 방식', '세대별 만족 포인트 정리'], assetTypes: ['가족형 영상', '일정 시뮬레이션', '설명회 리드 광고'] },
  { name: '솔로/커플 트랙', audience: '허니문, 커플, 프리미엄 휴식 수요', angles: ['감성/휴식', '특별한 기념일', '호텔보다 높은 몰입감'], assetTypes: ['프리미엄 영상', '감성형 배너', '직장인 플랫폼 광고'] }
];

export const creativeSpecs: CreativeSpec[] = [
  { channel: 'Meta', imageFormat: '1:1, 4:5, 9:16', videoFormat: '9:16 마스터 후 크롭', length: '지면별 상이 / 첫 2초 훅이 핵심', testUnit: '훅, 오퍼 문구, 가격 표기, CTA' },
  { channel: 'YouTube Shorts', imageFormat: 'N/A', videoFormat: '세로형', length: '60초 미만 권장', testUnit: '오프닝 5초, 자막 유무, 실사용 화면' },
  { channel: 'YouTube In-stream', imageFormat: 'N/A', videoFormat: '16:9 기본', length: '15초 / 30초 / 60초 / 120초+', testUnit: '길이 버전, 엔딩 CTA, 설명 깊이' },
  { channel: 'TikTok', imageFormat: '썸네일 포함', videoFormat: '9:16', length: 'In-Feed 최적화형', testUnit: '훅, 자막, Spark/UGC 여부' },
  { channel: '네이버 검색', imageFormat: '텍스트 중심', videoFormat: 'N/A', length: '검수 기준 준수', testUnit: '헤드라인 가치 제안, 확장소재' }
];

export const abTestMatrix: AbTestItem[] = [
  { title: '가격 표기', variants: ['총액(필수경비 포함)', '최저가(조건 명시)'] },
  { title: '가치 제안', variants: ['실시간 재고/가격', '국내 결제/정산', '수수료 없음'] },
  { title: '사회적 증거', variants: ['후기/평점', '선사/선박 공식 이미지'] },
  { title: 'CTA', variants: ['실시간 가격 보기', '내 일정 찾기', '초보자 가이드 보기'] }
];

export const uxLayers: UxLayer[] = [
  { title: '정보 랜딩', focus: 'Interest', detail: '크루즈 초보자 가이드와 목적지 인사이트를 제공한 뒤 검색 경험으로 자연스럽게 연결합니다.' },
  { title: '검색 결과 랜딩', focus: 'Consideration', detail: '필터, 정렬, 비교, 저장, 가격 알림이 중심이며 선택 피로를 줄이는 UI가 핵심입니다.' },
  { title: '상품 상세/결제 랜딩', focus: 'Intent → Purchase', detail: '총액, 불포함 비용, 취소/환불 조건, 업데이트 시각, 확정 흐름을 한 화면에서 검증하게 합니다.' }
];

export const uxRecommendations: UxRecommendation[] = [
  { title: '필드 최소화', detail: '예약 확정에 필요한 최소 정보만 먼저 입력 받고, 나머지는 출항 전 마이페이지에서 보완합니다.' },
  { title: '게스트 체크아웃', detail: '고관여 상품일수록 강제 회원가입은 마찰입니다. 간편가입 또는 비회원 예약을 기본값으로 둡니다.' },
  { title: '가격 투명성 고정 노출', detail: '필수 비용 포함 총액과 현지 지불 항목을 분리해 결제 단계 상단에 고정합니다.' },
  { title: '신뢰 요소 상시 노출', detail: '사업자 정보, 연락처, 취소/환불 규정, 운영시간, 분쟁 처리 루트를 헤더와 체크아웃에서 바로 확인하게 합니다.' },
  { title: '실시간 증거 UX', detail: '최근 업데이트 시각, 가격 구성 툴팁, 가격 알림 기능으로 “실시간”을 카피가 아니라 인터페이스로 증명합니다.' }
];

export const measurementStack: MeasurementNode[] = [
  { title: 'GA4 Ecommerce Layer', detail: '상품 목록 조회부터 예약 완료까지의 핵심 행동 흐름을 Cruisia 특화 이벤트와 함께 운영합니다.' },
  { title: 'GTM & Tag Governance', detail: '태그, 전환 링크, UTM 명명 규칙을 단일 기준으로 관리해 리포트 파편화를 방지합니다.' },
  { title: 'Meta CAPI + Pixel', detail: '브라우저와 서버 이벤트를 함께 보내고 eventID로 중복을 제거해 신호 품질을 높입니다.' },
  { title: 'Enhanced Conversions', detail: 'Google Ads의 해시 처리된 자사 데이터를 활용해 검색 전환 측정 정확도를 보강합니다.' },
  { title: 'TikTok Events API', detail: '관심 세그먼트 축적과 리타겟팅 최적화에 필요한 서버 이벤트를 보완합니다.' },
  { title: 'Naver Conversion Tracking', detail: '국내 검색 광고 성과를 분리 추적할 수 있도록 웹 전환 스크립트를 통합합니다.' },
  { title: 'Reporting Layer', detail: '채널별 성과가 아니라 퍼널 단계별 KPI와 마이크로 전환 흐름을 대시보드로 관리합니다.' }
];

export const utmRules = [
  'utm_source: google / naver / meta / tiktok / daangn / partner',
  'utm_medium: cpc / paid_social / display / video / affiliate / newsletter',
  'utm_campaign: kr_cruise_{stage}_{theme}_{yyyymm}',
  'utm_content: hookA / hookB / price_total / price_from',
  'utm_term: 검색 키워드 또는 세그먼트'
];

export const budgetScenarios: BudgetScenario[] = [
  { tier: 'Low', monthlyBudgetKRW: 10000000, awarenessPct: 25, searchPct: 45, retargetingPct: 20, experimentPct: 10, note: '검색 비중이 높지만 신규 수요 발굴을 완전히 포기하지 않는 파일럿 구조.' },
  { tier: 'Medium', monthlyBudgetKRW: 30000000, awarenessPct: 30, searchPct: 40, retargetingPct: 20, experimentPct: 10, note: '퍼널 전 단계 학습을 병행하며 크리에이티브 테스트와 검색 수확을 균형 있게 운영.' },
  { tier: 'High', monthlyBudgetKRW: 100000000, awarenessPct: 35, searchPct: 35, retargetingPct: 20, experimentPct: 10, note: '브랜드 수요 확장과 채널 다각화를 동시에 추진하는 스케일 단계.' }
];

export const performanceFormulas = [
  '클릭수 = 예산 / CPC',
  '구매수 = 클릭수 × CVR',
  'CPA = 예산 / 구매수',
  'ROAS = (구매수 × AOV) / 예산'
];

export const budgetScenarioPlans: BudgetScenario[] = [
  {
    tier: 'Low',
    monthlyBudgetKRW: 5000000,
    operatingPct: 50,
    executionPct: 50,
    mediaPctWithinExecution: 70,
    productionPctWithinExecution: 30,
    positioning: '고의도 검색 수요를 먼저 포착하고 전환 데이터를 확보하는 파일럿 구조',
    operationsScope: [
      '주 1회 운영 리포트와 검색어/소재 정리',
      'GA4 전환 점검과 리타겟팅 세그먼트 최소 셋업',
      '랜딩 핵심 카피와 CTA 문구 보정'
    ],
    channelMix: [
      'Google 검색 광고',
      '네이버 검색 광고',
      'Meta 리타겟팅',
      '브랜드 방어성 디스플레이 소액 운영'
    ],
    creativeScope: [
      '카피라이팅 중심 메시지 설계',
      '가격/혜택/신뢰 포인트 기반 이미지 배너 세트',
      '기존 이미지 기반의 간단한 모션 컷 또는 슬라이드형 영상 1종 수준'
    ],
    note: '검색과 리타겟팅 위주로 효율을 검증하고, 제작은 정적 소재 중심으로 시작하는 구간입니다.'
  },
  {
    tier: 'Medium',
    monthlyBudgetKRW: 10000000,
    operatingPct: 35,
    executionPct: 65,
    mediaPctWithinExecution: 70,
    productionPctWithinExecution: 30,
    positioning: '수요 포착과 신규 수요 생성의 균형을 맞추는 본격 테스트 단계',
    operationsScope: [
      '주간 성과 리뷰와 채널별 예산 재배분',
      '퍼널 단계별 이벤트 모니터링과 카피 A/B 테스트',
      '검색어, 세그먼트, 소재 회전 주기 운영'
    ],
    channelMix: [
      'Google 검색 + RLSA',
      '네이버 검색',
      'Meta FB/IG Prospecting + 리타겟팅',
      'YouTube Shorts',
      'Google Display 리마케팅'
    ],
    creativeScope: [
      '카피라이팅 프레임 2~3종 병행 테스트',
      '채널별 이미지 배너 세트와 비교형 카드 뉴스 제작',
      '숏폼 세로 영상 2~3종 제작 및 썸네일/후킹 문구 분화'
    ],
    note: '검색 성과를 유지하면서 Meta와 YouTube로 신규 유입을 넓히고, 숏폼 영상 테스트를 병행하는 구간입니다.'
  },
  {
    tier: 'High',
    monthlyBudgetKRW: 15000000,
    operatingPct: 25,
    executionPct: 75,
    mediaPctWithinExecution: 70,
    productionPctWithinExecution: 30,
    positioning: '브랜드 수요 생성과 고관여 리타겟팅을 동시에 확장하는 스케일 단계',
    operationsScope: [
      '주간 리포트 + 월간 전략 리뷰 + 채널 확장 테스트',
      '퍼널/세그먼트별 입찰과 빈도 제어 고도화',
      'OTA/제휴 연동 성과 점검과 버티컬 매체 분리 운영'
    ],
    channelMix: [
      'Google 검색 + RLSA',
      '네이버 검색',
      'Meta FB/IG 풀퍼널',
      'YouTube Shorts + In-stream',
      'TikTok',
      'Blind/Remember 등 직장인 타깃 매체',
      'Google Display 리마케팅',
      'OTA/제휴 공동 프로모션'
    ],
    creativeScope: [
      '세그먼트별 카피라이팅 패키지와 랜딩 메시지 동기화',
      '정적 배너, 비교형 배너, 리타겟팅 전용 배너까지 다층 제작',
      '전용 숏폼 영상과 설명형 브랜드 영상, 모션 그래픽 컷다운까지 포함한 영상 제작'
    ],
    note: '신규 수요 생성, 버티컬 확장, 영상 자산 축적까지 포함한 브랜드형 운영이 가능한 예산 구간입니다.'
  }
];

export const timelinePhases: TimelineItem[] = [
  { phase: 'foundation', title: '트래킹 설계, GTM/GA4, 전환 API, UTM 규칙, 1차 UX 개선', startWeek: 1, durationWeeks: 3, deliverables: ['측정 구조 설계', '대시보드 정의', '체크아웃 진단'] },
  { phase: 'creative', title: '9:16 마스터 템플릿 제작과 SEO/초보자 콘텐츠 1차 발행', startWeek: 2, durationWeeks: 4, deliverables: ['숏폼 템플릿', '롱폼 스크립트', '초보자 콘텐츠 허브'] },
  { phase: 'acquisition', title: '구글/네이버 검색 파일럿과 Shorts/TikTok 인지 캠페인 런칭', startWeek: 3, durationWeeks: 4, deliverables: ['검색 캠페인', '숏폼 캠페인', '초기 세그먼트 데이터'] },
  { phase: 'optimization', title: '리타겟팅 시퀀스, A/B 테스트, 예산 재배분과 스케일', startWeek: 5, durationWeeks: 5, deliverables: ['리타겟팅 룹', '카피/오퍼 테스트', '채널 재배분'] }
];

export const complianceChecklist: ComplianceItem[] = [
  { title: '총액과 현지 지불 항목 분리 표기', summary: '필수 비용은 총액에 포함하고, 현지 지불 항목은 별도 명시해 가격 인지 혼란을 줄여야 합니다.', riskLevel: 'high' },
  { title: '취소·환불 조건 요약 우선 노출', summary: '세부 약관 링크만 제공하지 말고, 결제 전 핵심 정책을 먼저 보여줘야 분쟁 가능성이 낮아집니다.', riskLevel: 'high' },
  { title: '사업자 정보와 고객센터 상시 접근', summary: '운영 시간, 연락처, 분쟁 처리 루트를 헤더와 체크아웃에서 바로 찾을 수 있어야 합니다.', riskLevel: 'medium' },
  { title: '근거 없는 최상급 표현 금지', summary: '최저가, 단독, 무조건과 같은 표현은 네이버·Google·Meta 정책과 동시에 충돌할 수 있습니다.', riskLevel: 'high' },
  { title: '광고와 랜딩의 일관성 유지', summary: '광고에서 약속한 혜택, 가격, 정책 문구가 랜딩에서 동일하게 이어져야 신뢰가 유지됩니다.', riskLevel: 'medium' }
];

export const nextSteps: NextStep[] = [
  { title: '진단', description: '현재 트래픽, 전환 구조, AOV, 마진, 취소율, 검색 수요를 기준으로 파일럿 우선순위를 정의합니다.' },
  { title: '파일럿', description: '검색 + 숏폼 + 리타겟팅 조합으로 2~4주 테스트를 운영하며 open KPI를 실제 계정 데이터로 보정합니다.' },
  { title: '스케일', description: '성과가 검증된 채널과 세그먼트를 중심으로 예산을 재배분하고, SEO 및 프론트엔드 개편 프로젝트와 병행합니다.' }
];

export const prerequisiteData = ['AOV', '마진율', '취소율', '현재 트래픽', '현재 전환율', '선사/항로별 재고 구조'];
