import React from 'react';
import { BudgetScenario } from '../../types/proposal';
import { SectionShell } from './SectionShell';

type BudgetSectionProps = {
  scenarios: BudgetScenario[];
  formulas: string[];
};

const formatBudget = (value: number) => `${(value / 10000).toLocaleString()}만원`;

const segmentLabels = [
  { key: 'operations', label: '운영', className: 'budget-segment--operations' },
  { key: 'media', label: '매체비', className: 'budget-segment--media' },
  { key: 'production', label: '제작비', className: 'budget-segment--production' }
] as const;

export const BudgetSection: React.FC<BudgetSectionProps> = ({ scenarios, formulas }) => {
  return (
    <SectionShell
      id="budget"
      eyebrow="Budget Scenarios"
      title="예산은 운영과 집행을 분리해서 보고, 집행 안에서 매체비와 제작비를 다시 쪼개야 실제 실행안이 선명해집니다."
      description="제안 예산은 스케일 요소에 따라 운영 비중을 효율적으로 낮춰가며, 집행 예산 안에서는 매체비와 제작비를 7:3으로 고정 설계했습니다."
    >
      <div className="budget-architecture">
        <div className="budget-architecture__summary">
          <span className="section-kicker">Budget Structure</span>
          <h3>규모별 유동적 운영 비중 (25~50%)</h3>
          <p>파일럿 단계에서는 퍼포먼스 분석 리소스 비중이 높지만, 예산이 확장될수록 매체비와 제작비의 실집행 비중(65~75%)을 늘려 광고 효율을 극대화합니다.</p>
        </div>

        <div className="budget-architecture__legend">
          {segmentLabels.map((segment) => (
            <div className="budget-legend" key={segment.key}>
              <span className={`budget-legend__dot ${segment.className}`} />
              <span>{segment.label}</span>
            </div>
          ))}
        </div>

        <div className="budget-architecture__ratios">
          <div className="budget-ratio-card">
            <strong>운영 및 집행 비중</strong>
            <p>예산 규모에 따라 제한적 운영비(25~50%) 적용</p>
          </div>
          <div className="budget-ratio-card">
            <strong>집행 내부 비중</strong>
            <p>매체비 70% / 제작비 30%</p>
          </div>
        </div>
      </div>

      <div className="budget-scenario-grid">
        {scenarios.map((scenario) => {
          const operatingPct = scenario.operatingPct ?? 50;
          const executionPct = scenario.executionPct ?? 50;
          const mediaPctWithinExecution = scenario.mediaPctWithinExecution ?? 70;
          const productionPctWithinExecution = scenario.productionPctWithinExecution ?? 30;

          const operatingAmount = scenario.monthlyBudgetKRW * (operatingPct / 100);
          const executionAmount = scenario.monthlyBudgetKRW * (executionPct / 100);
          const mediaAmount = executionAmount * (mediaPctWithinExecution / 100);
          const productionAmount = executionAmount * (productionPctWithinExecution / 100);
          const mediaPctOfTotal = executionPct * (mediaPctWithinExecution / 100);
          const productionPctOfTotal = executionPct * (productionPctWithinExecution / 100);

          return (
            <article className="budget-scenario-card" key={scenario.tier}>
              <div className="budget-scenario-card__header">
                <div>
                  <span className="section-kicker">{scenario.tier}</span>
                  <h3>{formatBudget(scenario.monthlyBudgetKRW)}</h3>
                </div>
                <span className="status-pill status-pill--muted">{scenario.positioning}</span>
              </div>

              <div className="budget-slimbar" aria-label={`${scenario.tier} budget structure`}>
                <div
                  className="budget-segment budget-segment--operations"
                  style={{ width: `${operatingPct}%` }}
                />
                <div
                  className="budget-segment budget-segment--media"
                  style={{ width: `${mediaPctOfTotal}%` }}
                />
                <div
                  className="budget-segment budget-segment--production"
                  style={{ width: `${productionPctOfTotal}%` }}
                />
              </div>

              <div className="budget-scenario-card__amounts">
                <div className="budget-amount-card">
                  <span>운영</span>
                  <strong>{formatBudget(operatingAmount)}</strong>
                  <p>{operatingPct}%</p>
                </div>
                <div className="budget-amount-card">
                  <span>매체비</span>
                  <strong>{formatBudget(mediaAmount)}</strong>
                  <p>총액의 {mediaPctOfTotal}%</p>
                </div>
                <div className="budget-amount-card">
                  <span>제작비</span>
                  <strong>{formatBudget(productionAmount)}</strong>
                  <p>총액의 {productionPctOfTotal}%</p>
                </div>
              </div>

              <div className="budget-scenario-card__detail">
                <div className="budget-detail-block">
                  <h4>운영 범위</h4>
                  <ul className="detail-list">
                    {(scenario.operationsScope ?? []).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="budget-detail-block">
                  <h4>집행 매체</h4>
                  <ul className="detail-list">
                    {(scenario.channelMix ?? []).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="budget-detail-block">
                  <h4>광고 소재 수준</h4>
                  <ul className="detail-list">
                    {(scenario.creativeScope ?? []).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <p>{scenario.note}</p>
            </article>
          );
        })}
      </div>

      <div className="formula-panel">
        {formulas.map((formula) => (
          <div className="formula-card" key={formula}>
            {formula}
          </div>
        ))}
      </div>
    </SectionShell>
  );
};
