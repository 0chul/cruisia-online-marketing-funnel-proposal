import React from 'react';
import { MeasurementNode } from '../../types/proposal';
import { SectionShell } from './SectionShell';

type MeasurementSectionProps = {
  nodes: MeasurementNode[];
  utmRules: string[];
};

export const MeasurementSection: React.FC<MeasurementSectionProps> = ({ nodes, utmRules }) => (
  <SectionShell
    id="measurement"
    eyebrow="Measurement & Attribution"
    title="광고 매체보다 먼저 측정 계층을 정리해야 학습과 리포팅이 살아납니다"
    description="Cruisia의 퍼널은 브라우저 이벤트, 서버 이벤트, 검색 전환, 리타겟팅 세그먼트가 동시에 얽혀 있습니다. 신호 품질을 높이는 기술 설계가 필수에 가깝습니다."
  >
    <div className="measurement-flow">
      {nodes.map((node, index) => (
        <article className="measurement-node" key={node.title}>
          <span className="measurement-node__index">0{index + 1}</span>
          <h3>{node.title}</h3>
          <p>{node.detail}</p>
        </article>
      ))}
    </div>

    <div className="stack-grid stack-grid--two">
      <article className="glass-card">
        <span className="section-kicker">Server-side Principle</span>
        <h3>브라우저만 보지 말고 서버 신호를 함께 보내야 합니다</h3>
        <p>
          Pixel만 또는 서버만으로 단일화하기보다, Meta CAPI·Enhanced Conversions·TikTok Events
          API·Naver 전환 스크립트를 함께 운영하고 중복 제거 기준을 고정하는 방식이 운영 리스크가 낮습니다.
        </p>
      </article>
      <article className="glass-card">
        <span className="section-kicker">UTM Taxonomy</span>
        <h3>일관성 없는 명명 규칙은 GA4 리포트를 망가뜨립니다</h3>
        <ul className="detail-list">
          {utmRules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </article>
    </div>
  </SectionShell>
);
