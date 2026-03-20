import React from 'react';
import { Compass } from 'lucide-react';
import {
  abTestMatrix,
  budgetScenarios,
  channelPlaybook,
  complianceChecklist,
  creativeSpecs,
  creativeTracks,
  customEvents,
  earlyMarketSources,
  eventSteps,
  funnelStages,
  heroSummary,
  kpiFramework,
  marketStats,
  measurementStack,
  nextSteps,
  performanceFormulas,
  positioningPoints,
  prerequisiteData,
  retargetingSequence,
  timelinePhases,
  utmRules,
  uxLayers,
  uxRecommendations,
  valueProps,
  certaintyDrivers
} from './content/proposalData';
import { BudgetSection } from './components/proposal/BudgetSection';
import { ChannelSection } from './components/proposal/ChannelSection';
import { ClosingSection } from './components/proposal/ClosingSection';
import { ComplianceSection } from './components/proposal/ComplianceSection';
import { CreativeSection } from './components/proposal/CreativeSection';
import { FunnelSection } from './components/proposal/FunnelSection';
import { HeroSection } from './components/proposal/HeroSection';
import { KpiSection } from './components/proposal/KpiSection';
import { MarketContextSection } from './components/proposal/MarketContextSection';
import { MeasurementSection } from './components/proposal/MeasurementSection';
import { RoadmapSection } from './components/proposal/RoadmapSection';
import { UxSection } from './components/proposal/UxSection';

const navItems = [
  { label: 'Market', href: '#market' },
  { label: 'Funnel', href: '#funnel' },
  { label: 'Channels', href: '#channels' },
  { label: 'Creative', href: '#creative' },
  { label: 'UX', href: '#ux' },
  { label: 'Measurement', href: '#measurement' },
  { label: 'Budget', href: '#budget' },
  { label: 'Roadmap', href: '#roadmap' }
];

const App: React.FC = () => (
  <div className="proposal-app">
    <header className="proposal-nav">
      <div className="proposal-brand">
        <div className="proposal-brand__mark">
          <Compass size={20} />
        </div>
        <div>
          <strong>Cruisia Proposal</strong>
          <span>Online Marketing Funnel Landing</span>
        </div>
      </div>
      <nav className="proposal-nav__links" aria-label="Primary">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>

    <main className="proposal-main">
      <HeroSection hero={heroSummary} stats={marketStats} sectionSources={earlyMarketSources} />
      <MarketContextSection
        valueProps={valueProps}
        certaintyDrivers={certaintyDrivers}
        positioningPoints={positioningPoints}
        sectionSources={earlyMarketSources}
      />
      <FunnelSection stages={funnelStages} />
      <KpiSection rows={kpiFramework} stages={funnelStages} eventSteps={eventSteps} customEvents={customEvents} />
      <ChannelSection
        channelPlaybook={channelPlaybook}
        retargetingSequence={retargetingSequence}
        stages={funnelStages}
      />
      <CreativeSection tracks={creativeTracks} specs={creativeSpecs} abTests={abTestMatrix} />
      <UxSection layers={uxLayers} recommendations={uxRecommendations} />
      <MeasurementSection nodes={measurementStack} utmRules={utmRules} />
      <BudgetSection scenarios={budgetScenarios} formulas={performanceFormulas} />
      <RoadmapSection items={timelinePhases} />
      <ComplianceSection items={complianceChecklist} />
      <ClosingSection steps={nextSteps} prerequisiteData={prerequisiteData} />
    </main>

    <footer className="proposal-footer">
      <div className="proposal-footer__inner">
        Cruisia의 제안 포인트는 실시간 데이터 자체가 아니라, 그 데이터가 만드는 구매 확실성을 광고와 랜딩,
        체크아웃, CRM에 일관되게 반영하는 것입니다.
      </div>
    </footer>
  </div>
);

export default App;
