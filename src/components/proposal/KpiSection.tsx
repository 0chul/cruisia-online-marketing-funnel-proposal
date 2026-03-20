import React from 'react';
import { EventStep, FunnelStage, KpiRow } from '../../types/proposal';
import { SectionShell } from './SectionShell';

type KpiSectionProps = {
  rows: KpiRow[];
  stages: FunnelStage[];
  eventSteps: EventStep[];
  customEvents: string[];
};

export const KpiSection: React.FC<KpiSectionProps> = ({ rows, stages, eventSteps, customEvents }) => (
  <SectionShell
    id="kpi"
    eyebrow="KPI Framework"
    title="채널이 아니라 퍼널 단계별로 KPI를 관리해야 학습 속도가 맞아집니다"
    description="Awareness의 CTR과 Purchase의 CTR은 같은 숫자가 아닙니다. Cruisia는 마이크로 전환을 촘촘히 두고 단계별 목표를 open 정책으로 관리해야 합니다."
  >
    <div className="kpi-matrix">
      <div className="kpi-matrix__header">
        <span>퍼널 단계</span>
        <span>Primary KPI</span>
        <span>Secondary KPI</span>
        <span>Target Policy</span>
      </div>
      {rows.map((row) => {
        const stage = stages.find((item) => item.id === row.stageId);
        return (
          <div className="kpi-matrix__row" key={row.stageId}>
            <strong>{stage?.title}</strong>
            <p>{row.primary.join(' · ')}</p>
            <p>{row.secondary.join(' · ')}</p>
            <span className="policy-badge">{row.targetPolicy}</span>
          </div>
        );
      })}
    </div>

    <div className="event-flow">
      {eventSteps.map((step, index) => (
        <div className="event-node" key={step.name}>
          <strong>{step.name}</strong>
          <p>{step.description}</p>
          {index < eventSteps.length - 1 ? <span className="event-node__arrow">→</span> : null}
        </div>
      ))}
    </div>

    <div className="custom-events-panel">
      <div>
        <span className="section-kicker">Cruisia Custom Events</span>
        <h3>실제 예약 의도와 탐색 품질을 더 잘 설명하는 특화 이벤트</h3>
      </div>
      <div className="pill-cluster">
        {customEvents.map((eventName) => (
          <span className="pill pill--gold" key={eventName}>
            {eventName}
          </span>
        ))}
      </div>
    </div>
  </SectionShell>
);
