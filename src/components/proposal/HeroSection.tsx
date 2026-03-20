import React from 'react';
import { ArrowDownRight, Compass, Radar, Waves } from 'lucide-react';
import { HeroSummary, MarketStat } from '../../types/proposal';

type HeroSectionProps = {
  hero: HeroSummary;
  stats: MarketStat[];
};

export const HeroSection: React.FC<HeroSectionProps> = ({ hero, stats }) => (
  <section className="hero-panel">
    <div className="hero-panel__content">
      <div className="hero-copy">
        <span className="hero-eyebrow">{hero.eyebrow}</span>
        <h1>{hero.title}</h1>
        <p>{hero.description}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={hero.primaryCtaTarget}>
            {hero.primaryCtaLabel}
            <ArrowDownRight size={18} />
          </a>
          <a className="btn btn-secondary" href={hero.secondaryCtaTarget}>
            {hero.secondaryCtaLabel}
          </a>
        </div>
      </div>

      <div className="hero-stage">
        <div className="hero-orbit hero-orbit--one" />
        <div className="hero-orbit hero-orbit--two" />
        <div className="hero-card hero-card--main">
          <div className="hero-card__header">
            <span className="status-pill">Executive Summary</span>
            <span className="status-pill status-pill--muted">Proposal View</span>
          </div>
          <div className="hero-metric-stack">
            <div className="hero-metric-card">
              <Radar size={18} />
              <strong>실시간 재고</strong>
              <span>광고 메시지를 실제 예약 확실성으로 연결</span>
            </div>
            <div className="hero-metric-card">
              <Compass size={18} />
              <strong>6단 퍼널</strong>
              <span>인지부터 재구매까지 단계별 채널과 KPI 분리</span>
            </div>
            <div className="hero-metric-card">
              <Waves size={18} />
              <strong>전문가형 설계</strong>
              <span>미디어, UX, 측정, 컴플라이언스를 한 구조로 통합</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="hero-stats-grid">
      {stats.map((stat, index) => (
        <article className="stat-card" key={stat.label} style={{ animationDelay: `${index * 120}ms` }}>
          <span className="stat-card__label">{stat.label}</span>
          <strong className="stat-card__value">{stat.value}</strong>
          <p>{stat.detail}</p>
        </article>
      ))}
    </div>
  </section>
);
