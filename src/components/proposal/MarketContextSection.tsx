import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { CertaintyDriver, PositioningPoint, SourceReference, ValueProp } from '../../types/proposal';
import { SectionShell } from './SectionShell';

type MarketContextSectionProps = {
  valueProps: ValueProp[];
  certaintyDrivers: CertaintyDriver[];
  positioningPoints: PositioningPoint[];
  sectionSources: SourceReference[];
};

export const MarketContextSection: React.FC<MarketContextSectionProps> = ({
  valueProps,
  certaintyDrivers,
  positioningPoints,
  sectionSources
}) => (
  <SectionShell
    id="market"
    eyebrow="Product & Market Context"
    title="실시간이라는 기능을 확실성이라는 구매 이유로 번역해야 합니다"
    description="Cruisia의 강점은 기술 스펙이 아니라, 가격·가능 여부·정책·확정 경험을 하나의 신뢰 구조로 제시할 수 있다는 점입니다."
  >
    <div className="stack-grid stack-grid--three">
      {valueProps.map((item) => (
        <article className="glass-card" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {item.sources?.length ? (
            <div className="source-links">
              {item.sources.map((source) => (
                <a className="source-link" key={`${item.title}-${source.url}`} href={source.url} target="_blank" rel="noreferrer">
                  출처: {source.label}
                </a>
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </div>

    <div className="market-context-layout">
      <article className="devils-advocate">
        <div className="devils-advocate__header">
          <ShieldCheck size={18} />
          <strong>핵심 전환 리스크 점검</strong>
        </div>
        <p>사용자는 “실시간”만 보고 결제하지 않습니다. 실제 구매를 만드는 것은 실시간이 만들어내는 확실성입니다.</p>
        <div className="certainty-list">
          {certaintyDrivers.map((driver) => (
            <div className="certainty-item" key={driver.label}>
              <span>{driver.label}</span>
              <p>{driver.detail}</p>
            </div>
          ))}
        </div>
      </article>

      <article className="positioning-map">
        <div className="positioning-map__frame">
          <span className="axis axis-x">탐색성과 비교 용이성</span>
          <span className="axis axis-y">구매 확실성</span>
          {positioningPoints.map((point) => (
            <div
              key={point.name}
              className={`positioning-point ${point.name === 'Cruisia' ? 'positioning-point--highlight' : ''}`}
              style={{ left: `${point.x}%`, bottom: `${point.y}%` }}
            >
              <span>{point.name}</span>
            </div>
          ))}
        </div>
        <div className="positioning-legend">
          {positioningPoints.map((point) => (
            <div className="positioning-legend__item" key={point.name}>
              <strong>{point.name}</strong>
              <p>{point.description}</p>
              {point.sources?.length ? (
                <div className="source-links">
                  {point.sources.map((source) => (
                    <a className="source-link" key={`${point.name}-${source.url}`} href={source.url} target="_blank" rel="noreferrer">
                      출처: {source.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </article>
    </div>

    <div className="certainty-arrow">
      <span>실시간 재고</span>
      <ArrowRight size={18} />
      <span>총액 투명성</span>
      <ArrowRight size={18} />
      <span>정책 신뢰</span>
      <ArrowRight size={18} />
      <span>즉시 확정</span>
    </div>

    <div className="section-source-strip">
      {sectionSources.map((source) => (
        <a className="source-link" key={source.url} href={source.url} target="_blank" rel="noreferrer">
          출처: {source.label}
        </a>
      ))}
    </div>
  </SectionShell>
);
