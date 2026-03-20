import React from 'react';
import { NextStep } from '../../types/proposal';
import { SectionShell } from './SectionShell';

type ClosingSectionProps = {
  steps: NextStep[];
  prerequisiteData: string[];
};

export const ClosingSection: React.FC<ClosingSectionProps> = ({ steps, prerequisiteData }) => (
  <SectionShell
    id="next-step"
    eyebrow="Next Step"
    title="파일럿 데이터를 확보한 뒤, 프론트엔드 개편과 SEO 협업을 병행하는 구조가 가장 안전합니다"
    description="이 결과물은 제안용 마이크로사이트 기준입니다. 실제 서비스 전환 작업은 별도 프론트엔드 개편 및 SEO 프로젝트와 연결해 실행하는 것이 맞습니다."
  >
    <div className="stack-grid stack-grid--three">
      {steps.map((step, index) => (
        <article className="glass-card glass-card--cta" key={step.title}>
          <span className="step-index">0{index + 1}</span>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </article>
      ))}
    </div>

    <div className="closing-panel">
      <div>
        <span className="section-kicker">Pilot Inputs</span>
        <h3>실행 전 확보가 필요한 선행 데이터</h3>
        <div className="pill-cluster">
          {prerequisiteData.map((item) => (
            <span className="pill pill--gold" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="closing-note">
        <strong>병행 메모</strong>
        <p>
          제안 단계에서는 퍼널 구조와 메시지 체계를 먼저 확정하고, 실제 프론트엔드 개편 팀과는 검색 UX,
          체크아웃 마찰, SEO 콘텐츠 허브를 병행 설계하는 방식이 효율적입니다.
        </p>
      </div>
    </div>
  </SectionShell>
);
