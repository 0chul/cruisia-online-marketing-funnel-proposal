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
      description="제안 예산은 모든 구간에서 운영과 집행을 1:1로 두고, 집행 예산 안에서는 매체비와 제작비를 7:3으로 설계했습니다. 즉 총액 기준으로는 운영 50%, 매체비 35%, 제작비 15% 구조입니다."
    >
      <div className="budget-architecture">
        <div className="budget-architecture__summary">
          <span className="section-kicker">Budget Structure</span>
          <h3>운영 50% / 집행 50%</h3>
          <p>집행 예산은 다시 매체비 70%, 제작비 30%로 분해합니다. 퍼포먼스 운영 인력과 분석 리소스를 충분히 확보하면서도, 실제 집행과 제작 품질을 동시에 관리하기 위한 구조입니다.</p>
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
            <strong>총액 기준</strong>
            <p>운영 50% / 매체비 35% / 제작비 15%</p>
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
