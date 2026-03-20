import React from 'react';
import { TimelineItem } from '../../types/proposal';
import { SectionShell } from './SectionShell';

type RoadmapSectionProps = {
  items: TimelineItem[];
};

const phaseLabels: Record<TimelineItem['phase'], string> = {
  foundation: 'Foundation',
  creative: 'Creative & Content',
  acquisition: 'Acquisition',
  optimization: 'Optimization'
};

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ items }) => (
  <SectionShell
    id="roadmap"
    eyebrow="12-Week Roadmap"
    title="12주 안에 측정, 콘텐츠, 획득, 최적화 루프를 순차적으로 올리는 구조"
    description="파일럿과 스케일이 섞이면 데이터가 흐려집니다. 12주 로드맵은 측정 기반과 크리에이티브 자산을 먼저 깔고, 이후 검색/숏폼/리타겟팅을 확장하는 순서로 설계합니다."
  >
    <div className="roadmap-grid">
      <div className="roadmap-grid__weeks">
        <span>Phase</span>
        {Array.from({ length: 12 }, (_, index) => (
          <span key={index + 1}>W{index + 1}</span>
        ))}
      </div>
      {items.map((item) => (
        <div className="roadmap-row" key={item.title}>
          <div className="roadmap-row__label">
            <span className="section-kicker">{phaseLabels[item.phase]}</span>
            <h3>{item.title}</h3>
            <div className="pill-cluster">
              {item.deliverables.map((deliverable) => (
                <span className="pill" key={deliverable}>
                  {deliverable}
                </span>
              ))}
            </div>
          </div>
          <div className="roadmap-row__track">
            <div
              className={`roadmap-bar roadmap-bar--${item.phase}`}
              style={{
                gridColumn: `${item.startWeek} / span ${item.durationWeeks}`
              }}
            />
          </div>
        </div>
      ))}
    </div>
  </SectionShell>
);
