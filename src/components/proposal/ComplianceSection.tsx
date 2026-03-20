import React from 'react';
import { ComplianceItem } from '../../types/proposal';
import { SectionShell } from './SectionShell';

type ComplianceSectionProps = {
  items: ComplianceItem[];
};

export const ComplianceSection: React.FC<ComplianceSectionProps> = ({ items }) => (
  <SectionShell
    id="compliance"
    eyebrow="Compliance & Risk"
    title="광고 효율보다 먼저 가격 표시, 환불, 신뢰 요소를 정렬해야 합니다"
    description="여행 광고는 표시 의무, 가격 투명성, 취소·환불 안내가 핵심입니다. Cruisia는 투명성을 차별점으로 가져가야 장기적으로 효율이 올라갑니다."
  >
    <div className="compliance-banner">
      <span className="section-kicker">Transparency First</span>
      <h3>규모보다 신뢰를 먼저 확보해야 광고 효율이 누적됩니다</h3>
      <p>
        광고와 랜딩, 체크아웃, 제휴 운영 문구가 동일한 정책 철학을 유지해야 합니다. 여행/OTA에서는 정책
        불일치가 가장 비싼 손실입니다.
      </p>
    </div>

    <div className="stack-grid stack-grid--two">
      {items.map((item) => (
        <article className="risk-card" key={item.title}>
          <div className="risk-card__header">
            <span className={`risk-badge risk-badge--${item.riskLevel}`}>{item.riskLevel}</span>
            <h3>{item.title}</h3>
          </div>
          <p>{item.summary}</p>
        </article>
      ))}
    </div>
  </SectionShell>
);
