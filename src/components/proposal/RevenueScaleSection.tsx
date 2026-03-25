import React from 'react';
import {
  RevenueScaleExample,
  RevenueScaleFlowStep,
  RevenueScaleNote,
  RevenueScalePrinciple,
  RevenueScaleStage
} from '../../types/proposal';
import { SectionShell } from './SectionShell';

type RevenueScaleSectionProps = {
  principles: RevenueScalePrinciple[];
  stages: RevenueScaleStage[];
  examples: RevenueScaleExample[];
  flow: RevenueScaleFlowStep[];
  note: RevenueScaleNote;
};

const formatBudget = (value: number) => `${(value / 10000).toLocaleString()}만원`;

export const RevenueScaleSection: React.FC<RevenueScaleSectionProps> = ({
  principles,
  stages,
  examples,
  flow,
  note
}) => (
  <SectionShell
    id="revenue-scale"
    eyebrow="Revenue-Linked Scale Logic"
    title="크루즈 OTA는 매출이 확인될수록 마케팅 집행 규모를 함께 키울 수 있는 구조입니다"
    description="예약 전환이 발생하면 광고비는 단순 비용이 아니라 매출 회수 속도에 맞춰 증액 가능한 성장 재원으로 작동합니다. 따라서 초기 검증 구간에서 효율을 확인한 뒤, 성과가 유지되는 범위에서 예산을 단계적으로 늘리는 접근이 맞습니다."
  >
    <div className="revenue-scale-grid">
      {principles.map((principle) => (
        <article className="revenue-principle-card" key={principle.title}>
          <span className="section-kicker">Principle</span>
          <h3>{principle.title}</h3>
          <p>{principle.description}</p>
        </article>
      ))}
    </div>

    <div className="revenue-stage-track">
      {stages.map((stage, index) => (
        <article className="revenue-stage-card" key={stage.title}>
          <span className="step-index">0{index + 1}</span>
          <h3>{stage.title}</h3>
          <p>{stage.description}</p>
        </article>
      ))}
    </div>

    <div className="revenue-example-grid">
      {examples.map((example) => (
        <article className="revenue-example-card" key={example.label}>
          <div className="revenue-example-card__header">
            <span className="section-kicker">{example.label}</span>
            <span className="status-pill status-pill--muted">설명용 예시</span>
          </div>
          <div className="revenue-example-card__metrics">
            <div>
              <span>월 광고비</span>
              <strong>{formatBudget(example.monthlyAdSpendKRW)}</strong>
            </div>
            <div>
              <span>예시 예약 매출</span>
              <strong>{formatBudget(example.exampleRevenueKRW)}</strong>
            </div>
          </div>
          <p>{example.implication}</p>
          <small>실제 수치는 AOV, 마진율, 취소율에 따라 조정</small>
        </article>
      ))}
    </div>

    <div className="revenue-flow" aria-label="Revenue-linked scale flow">
      {flow.map((step, index) => (
        <div className="revenue-flow-step" key={step.label}>
          <strong>{step.label}</strong>
          {index < flow.length - 1 ? <span className="revenue-flow-step__arrow">→</span> : null}
        </div>
      ))}
    </div>

    <div className="revenue-note-panel">
      <span className="section-kicker">Executive Note</span>
      <h3>{note.title}</h3>
      <p>{note.description}</p>
    </div>
  </SectionShell>
);
