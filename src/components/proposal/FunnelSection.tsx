import React, { useMemo, useState } from 'react';
import { FunnelStage } from '../../types/proposal';
import { SectionShell } from './SectionShell';

type FunnelSectionProps = {
  stages: FunnelStage[];
};

export const FunnelSection: React.FC<FunnelSectionProps> = ({ stages }) => {
  const [activeStageId, setActiveStageId] = useState<FunnelStage['id']>(stages[0]?.id ?? 'awareness');

  const activeStage = useMemo(
    () => stages.find((stage) => stage.id === activeStageId) ?? stages[0],
    [activeStageId, stages]
  );

  return (
    <SectionShell
      id="funnel"
      eyebrow="Funnel Architecture"
      title="인지부터 재구매까지, 단계별 메시지·채널·랜딩을 분리한 6단 구조"
      description="크루즈는 짧은 전환 퍼널이 아니라 긴 탐색과 비교, 재확신이 필요한 고관여 상품입니다. 각 단계의 KPI와 경험을 다르게 설계해야 합니다."
    >
      <div className="funnel-timeline" role="tablist" aria-label="Cruisia funnel stages">
        {stages.map((stage, index) => (
          <button
            key={stage.id}
            type="button"
            className={`funnel-chip ${stage.id === activeStage.id ? 'is-active' : ''}`}
            onClick={() => setActiveStageId(stage.id)}
            aria-selected={stage.id === activeStage.id}
          >
            <span className="funnel-chip__index">{index + 1}</span>
            <span className="funnel-chip__label">{stage.title}</span>
          </button>
        ))}
      </div>

      <div className="funnel-visual">
        {stages.map((stage, index) => (
          <div
            key={stage.id}
            className={`funnel-bar ${stage.id === activeStage.id ? 'is-active' : ''}`}
            style={{ height: `${100 - index * 9}%` }}
          >
            <span>{stage.title}</span>
          </div>
        ))}
      </div>

      <article className="stage-detail-card">
        <div className="stage-detail-card__header">
          <div>
            <span className="section-kicker">{activeStage.title}</span>
            <h3>{activeStage.objective}</h3>
          </div>
          <div className="stage-mindset">
            <span>User mindset</span>
            <p>{activeStage.userMindset}</p>
          </div>
        </div>

        <div className="detail-columns">
          <div>
            <h4>핵심 메시지</h4>
            <p>{activeStage.message}</p>
          </div>
          <div>
            <h4>랜딩 경험</h4>
            <p>{activeStage.landingFocus}</p>
          </div>
        </div>

        <div className="pill-cluster">
          {activeStage.channels.map((channel) => (
            <span className="pill" key={channel}>
              {channel}
            </span>
          ))}
        </div>

        <div className="detail-grid">
          <div>
            <h4>핵심 KPI</h4>
            <ul className="detail-list">
              {activeStage.kpis.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>필수 산출물</h4>
            <ul className="detail-list">
              {activeStage.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>권장 광고 소재</h4>
            <ul className="detail-list">
              {activeStage.assetTypes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </SectionShell>
  );
};
