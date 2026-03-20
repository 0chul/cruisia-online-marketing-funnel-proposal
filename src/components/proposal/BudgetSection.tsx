import React from 'react';
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { BudgetScenario } from '../../types/proposal';
import { SectionShell } from './SectionShell';

type BudgetSectionProps = {
  scenarios: BudgetScenario[];
  formulas: string[];
};

const budgetColors = ['#48d1c2', '#7dd3fc', '#f6d36b', '#0f172a'];

export const BudgetSection: React.FC<BudgetSectionProps> = ({ scenarios, formulas }) => {
  const chartData = scenarios.map((scenario) => ({
    name: scenario.tier,
    Awareness: scenario.awarenessPct,
    Search: scenario.searchPct,
    Retargeting: scenario.retargetingPct,
    Experiment: scenario.experimentPct
  }));

  return (
    <SectionShell
      id="budget"
      eyebrow="Budget Scenarios"
      title="검색에만 몰지 않고, 신규 수요 생성과 회수 구조를 함께 예산에 반영해야 합니다"
      description="크루즈는 신규 유입 비중이 높은 상품입니다. 검색만 늘리면 CPA가 뒤에서 터질 수 있기 때문에 awareness와 retargeting을 함께 가져가야 합니다."
    >
      <div className="chart-panel">
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(128, 158, 186, 0.18)" />
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#08111f',
                border: '1px solid rgba(125, 211, 252, 0.2)',
                borderRadius: '16px',
                color: '#f8fafc'
              }}
            />
            <Bar dataKey="Awareness" stackId="a" radius={[0, 0, 10, 10]}>
              {chartData.map((_, index) => (
                <Cell key={`awareness-${index}`} fill={budgetColors[0]} />
              ))}
            </Bar>
            <Bar dataKey="Search" stackId="a">
              {chartData.map((_, index) => (
                <Cell key={`search-${index}`} fill={budgetColors[1]} />
              ))}
            </Bar>
            <Bar dataKey="Retargeting" stackId="a">
              {chartData.map((_, index) => (
                <Cell key={`retargeting-${index}`} fill={budgetColors[2]} />
              ))}
            </Bar>
            <Bar dataKey="Experiment" stackId="a" radius={[10, 10, 0, 0]}>
              {chartData.map((_, index) => (
                <Cell key={`experiment-${index}`} fill={budgetColors[3]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="stack-grid stack-grid--three">
        {scenarios.map((scenario) => (
          <article className="glass-card" key={scenario.tier}>
            <span className="section-kicker">{scenario.tier}</span>
            <h3>₩{scenario.monthlyBudgetKRW.toLocaleString()}</h3>
            <ul className="detail-list">
              <li>Awareness {scenario.awarenessPct}%</li>
              <li>Search {scenario.searchPct}%</li>
              <li>Retargeting {scenario.retargetingPct}%</li>
              <li>Experiment {scenario.experimentPct}%</li>
            </ul>
            <p>{scenario.note}</p>
          </article>
        ))}
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
