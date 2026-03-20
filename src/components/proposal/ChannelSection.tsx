import React, { useMemo, useState } from 'react';
import { ChannelPlay, FunnelStage, RetargetingStep } from '../../types/proposal';
import { SectionShell } from './SectionShell';

type ChannelSectionProps = {
  channelPlaybook: ChannelPlay[];
  retargetingSequence: RetargetingStep[];
  stages: FunnelStage[];
};

const categories: ChannelPlay['category'][] = [
  'Paid Social',
  'Search',
  'Retargeting',
  'Vertical / Professional',
  'Partnership / Distribution'
];

export const ChannelSection: React.FC<ChannelSectionProps> = ({
  channelPlaybook,
  retargetingSequence,
  stages
}) => {
  const [activeCategory, setActiveCategory] = useState<ChannelPlay['category']>('Paid Social');

  const filteredChannels = useMemo(
    () => channelPlaybook.filter((item) => item.category === activeCategory),
    [activeCategory, channelPlaybook]
  );

  return (
    <SectionShell
      id="channels"
      eyebrow="Channel Activation Playbook"
      title="각 채널은 같은 역할을 하지 않습니다. 단계별 역할과 메시지 톤을 분리해야 합니다"
      description="Paid Social, Search, Retargeting, Vertical Media, Partnership 트랙을 하나의 퍼널 안에서 배치해야 검색 효율이 뒤에서 터지지 않습니다."
    >
      <div className="channel-layout">
        <aside className="channel-sidebar">
          {categories.map((category) => (
            <button
              type="button"
              className={`channel-tab ${category === activeCategory ? 'is-active' : ''}`}
              key={category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </aside>

        <div className="channel-main">
          <div className="channel-matrix">
            <div className="channel-matrix__header">
              <span>Channel</span>
              {stages.map((stage) => (
                <span key={stage.id}>{stage.title}</span>
              ))}
            </div>
            {filteredChannels.map((channel) => (
              <div className="channel-matrix__row" key={channel.channel}>
                <strong>{channel.channel}</strong>
                {stages.map((stage) => (
                  <span
                    key={`${channel.channel}-${stage.id}`}
                    className={`coverage-dot ${channel.stageIds.includes(stage.id) ? 'is-covered' : ''}`}
                    aria-label={`${channel.channel} coverage ${stage.title}`}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="stack-grid stack-grid--two">
            {filteredChannels.map((channel) => (
              <article className="channel-card" key={channel.channel}>
                <div className="channel-card__header">
                  <div>
                    <span className="section-kicker">{channel.category}</span>
                    <h3>{channel.channel}</h3>
                  </div>
                  <span className="policy-badge">{channel.audience}</span>
                </div>
                <p className="channel-role">{channel.role}</p>
                <div className="detail-columns">
                  <div>
                    <h4>메시지 톤</h4>
                    <p>{channel.tone}</p>
                  </div>
                  <div>
                    <h4>운영 리스크</h4>
                    <p>{channel.operatingRisk}</p>
                  </div>
                </div>
                <div className="channel-meta-grid">
                  <div>
                    <h4>추천 캠페인</h4>
                    <ul className="detail-list">
                      {channel.campaignObjectives.map((objective) => (
                        <li key={objective}>{objective}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>핵심 세팅</h4>
                    <ul className="detail-list">
                      {channel.setupPoints.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>추천 소재</h4>
                    <ul className="detail-list">
                      {channel.recommendedAssets.map((asset) => (
                        <li key={asset}>{asset}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>측정 포인트</h4>
                    <ul className="detail-list">
                      {channel.measurementFocus.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="retargeting-lane">
        {retargetingSequence.map((step) => (
          <article className="sequence-card" key={step.window}>
            <span className="section-kicker">{step.window}</span>
            <h3>{step.audience}</h3>
            <p>{step.message}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
};
