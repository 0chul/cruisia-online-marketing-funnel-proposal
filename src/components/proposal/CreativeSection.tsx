import React from 'react';
import { AbTestItem, CreativeSpec, CreativeTrack } from '../../types/proposal';
import { SectionShell } from './SectionShell';

type CreativeSectionProps = {
  tracks: CreativeTrack[];
  specs: CreativeSpec[];
  abTests: AbTestItem[];
};

export const CreativeSection: React.FC<CreativeSectionProps> = ({ tracks, specs, abTests }) => (
  <SectionShell
    id="creative"
    eyebrow="Creative Production System"
    title="예쁜 여행 영상이 아니라 탐색 행동을 유도하는 구조적 크리에이티브가 필요합니다"
    description="크루즈는 선택 변수가 많기 때문에 광고 한 편이 곧바로 판매를 끝내기 어렵습니다. 광고의 역할은 탐색 행동과 비교 행동을 설계하는 것입니다."
  >
    <div className="stack-grid stack-grid--four">
      {tracks.map((track) => (
        <article className="glass-card" key={track.name}>
          <span className="section-kicker">{track.audience}</span>
          <h3>{track.name}</h3>
          <ul className="detail-list">
            {track.angles.map((angle) => (
              <li key={angle}>{angle}</li>
            ))}
          </ul>
          <div className="pill-cluster">
            {track.assetTypes.map((assetType) => (
              <span className="pill" key={assetType}>
                {assetType}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>

    <div className="creative-pipeline">
      <div className="pipeline-node">
        <span>Hook</span>
        <p>3초 안에 항로, 가격, 포함사항을 구조화</p>
      </div>
      <div className="pipeline-node">
        <span>Proof</span>
        <p>실시간 가격과 예약 화면, 비교 논리 제시</p>
      </div>
      <div className="pipeline-node">
        <span>Action</span>
        <p>실시간 가격 보기 / 일정 찾기 / 초보자 가이드</p>
      </div>
    </div>

    <div className="creative-spec-table">
      <div className="creative-spec-table__header">
        <span>채널</span>
        <span>이미지</span>
        <span>영상</span>
        <span>길이/제한</span>
        <span>A/B 테스트</span>
      </div>
      {specs.map((spec) => (
        <div className="creative-spec-table__row" key={spec.channel}>
          <strong>{spec.channel}</strong>
          <span>{spec.imageFormat}</span>
          <span>{spec.videoFormat}</span>
          <span>{spec.length}</span>
          <span>{spec.testUnit}</span>
        </div>
      ))}
    </div>

    <div className="stack-grid stack-grid--two">
      {abTests.map((test) => (
        <article className="ab-card" key={test.title}>
          <span className="section-kicker">{test.title}</span>
          <div className="ab-card__variants">
            {test.variants.map((variant) => (
              <div className="ab-card__variant" key={variant}>
                {variant}
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  </SectionShell>
);
