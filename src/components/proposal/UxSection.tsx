import React from 'react';
import { UxLayer, UxRecommendation } from '../../types/proposal';
import { SectionShell } from './SectionShell';

type UxSectionProps = {
  layers: UxLayer[];
  recommendations: UxRecommendation[];
};

export const UxSection: React.FC<UxSectionProps> = ({ layers, recommendations }) => (
  <SectionShell
    id="ux"
    eyebrow="Landing UX & Conversion"
    title="전환을 막는 핵심 원인은 관심 부족보다 불확실성입니다"
    description="크루즈 예약 이탈은 가격 변화, 포함사항, 취소 규정, 확정 여부에 대한 불안에서 발생합니다. 랜딩의 목표는 설득보다 확신 제거입니다."
  >
    <div className="ux-journey">
      {layers.map((layer) => (
        <article className="journey-card" key={layer.title}>
          <span className="section-kicker">{layer.focus}</span>
          <h3>{layer.title}</h3>
          <p>{layer.detail}</p>
        </article>
      ))}
    </div>

    <div className="ux-comparison">
      <article className="comparison-card">
        <span className="section-kicker">Before</span>
        <h3>광고가 약속하고 랜딩이 설명하지 못하는 상태</h3>
        <ul className="detail-list">
          <li>가격 구조가 뒤늦게 노출됨</li>
          <li>회원가입 강요와 긴 입력 폼</li>
          <li>정책 정보가 약관 링크 뒤에 숨어 있음</li>
        </ul>
      </article>
      <article className="comparison-card comparison-card--highlight">
        <span className="section-kicker">After</span>
        <h3>실시간성과 정책 신뢰를 화면에서 증명하는 상태</h3>
        <ul className="detail-list">
          <li>총액과 현지 지불 항목을 상단 고정</li>
          <li>게스트 체크아웃 + 최소 필드 구조</li>
          <li>업데이트 시각, 가격 알림, 정책 요약 동시 노출</li>
        </ul>
      </article>
    </div>

    <div className="stack-grid stack-grid--two">
      {recommendations.map((item) => (
        <article className="glass-card" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.detail}</p>
        </article>
      ))}
    </div>
  </SectionShell>
);
