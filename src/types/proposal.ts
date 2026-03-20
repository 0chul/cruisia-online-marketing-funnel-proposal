export type SourceReference = {
  label: string;
  url: string;
};

export type MarketStat = {
  label: string;
  value: string;
  detail: string;
  sources?: SourceReference[];
};

export type FunnelStageId =
  | 'awareness'
  | 'interest'
  | 'consideration'
  | 'intent'
  | 'purchase'
  | 'retention';

export type FunnelStage = {
  id: FunnelStageId;
  title: string;
  objective: string;
  kpis: string[];
  channels: string[];
  message: string;
  deliverables: string[];
  userMindset: string;
  landingFocus: string;
  assetTypes: string[];
};

export type KpiRow = {
  stageId: FunnelStage['id'];
  primary: string[];
  secondary: string[];
  targetPolicy: 'open';
};

export type ChannelPlay = {
  channel: string;
  category: 'Paid Social' | 'Search' | 'Retargeting' | 'Vertical / Professional' | 'Partnership / Distribution';
  role: string;
  strengths: string[];
  cautions: string[];
  campaignObjectives: string[];
  setupPoints: string[];
  stageIds: FunnelStage['id'][];
  audience: string;
  tone: string;
  recommendedAssets: string[];
  measurementFocus: string[];
  operatingRisk: string;
};

export type RetargetingStep = {
  window: string;
  audience: string;
  message: string;
};

export type CreativeTrack = {
  name: string;
  audience: string;
  angles: string[];
  assetTypes: string[];
};

export type BudgetScenario = {
  tier: 'Low' | 'Medium' | 'High';
  monthlyBudgetKRW: number;
  awarenessPct: number;
  searchPct: number;
  retargetingPct: number;
  experimentPct: number;
  note: string;
};

export type TimelineItem = {
  phase: 'foundation' | 'creative' | 'acquisition' | 'optimization';
  title: string;
  startWeek: number;
  durationWeeks: number;
  deliverables: string[];
};

export type ComplianceItem = {
  title: string;
  summary: string;
  riskLevel: 'high' | 'medium';
};

export type HeroSummary = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaTarget: string;
  secondaryCtaLabel: string;
  secondaryCtaTarget: string;
};

export type ValueProp = {
  title: string;
  description: string;
  sources?: SourceReference[];
};

export type CertaintyDriver = {
  label: string;
  detail: string;
};

export type PositioningPoint = {
  name: string;
  x: number;
  y: number;
  description: string;
  sources?: SourceReference[];
};

export type EventStep = {
  name: string;
  description: string;
};

export type CreativeSpec = {
  channel: string;
  imageFormat: string;
  videoFormat: string;
  length: string;
  testUnit: string;
};

export type AbTestItem = {
  title: string;
  variants: string[];
};

export type UxLayer = {
  title: string;
  focus: string;
  detail: string;
};

export type UxRecommendation = {
  title: string;
  detail: string;
};

export type MeasurementNode = {
  title: string;
  detail: string;
};

export type NextStep = {
  title: string;
  description: string;
};
