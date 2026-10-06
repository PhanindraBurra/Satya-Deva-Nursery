import React, { useState } from 'react';
import { MapPin, Sparkles } from 'lucide-react';
import { NURSERY_DETAILS, MAKEOVERS_DATA } from '../data/nurseryData';

export const BehindTheNursery: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const makeover = MAKEOVERS_DATA[0];

  return (
    <section id="story" className="story-section">
      <div className="story-container">
        {/* Heritage Story */}
        <div className="story-grid">
          <div className="story-text">
            <div className="eyebrow">OUR HERITAGE SINCE 1950</div>
            <h2 className="section-heading">The Legacy of Chantiyya Garu</h2>
            <p className="story-lead">
              Founded in 1950 by <strong>{NURSERY_DETAILS.founder}</strong> on the fertile banks of the Godavari in Kadiyam, Sri Satyadeva Nursery set the benchmark for commercial horticulture in Andhra Pradesh.
            </p>
            <p className="story-body">
              Today, our 120-acre mother plant orchards nurture over 500+ certified varieties, supplying government forestry initiatives, commercial fruit orchards, resort developments, and plant enthusiasts across India.
            </p>

            <div className="quote-box font-serif">
              <Sparkles size={20} className="quote-sparkle" />
              <p>"A tree planted with care outlives generations. We nurture living harmony for homes across India."</p>
              <cite>— Pulla Satyanarayana (Chantiyya Garu)</cite>
            </div>
          </div>

          <div className="story-visual">
            <img
              src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&q=80&w=800"
              alt="Kadiyapulanka Nursery Orchards"
              className="story-img"
            />
            <div className="location-badge font-mono">
              <MapPin size={14} /> Kadiyapulanka, AP
            </div>
          </div>
        </div>

        {/* Garden Makeover Slider */}
        <div className="makeover-section">
          <div className="section-header">
            <div className="eyebrow">BEFORE & AFTER TRANSFORMATION</div>
            <h2 className="section-heading">Landscape Makeover Showcase</h2>
            <p className="section-subtext">Drag the slider to see how our landscape team turns open ground into lush paradises.</p>
          </div>

          <div className="makeover-slider-container">
            <img src={makeover.afterImage} alt="After Satyadeva Design" className="slider-img after-img" />

            <div className="slider-before-layer" style={{ width: `${sliderPos}%` }}>
              <img src={makeover.beforeImage} alt="Before Makeover" className="slider-img before-img" />
              <span className="slider-tag before-tag font-mono">BEFORE</span>
            </div>

            <span className="slider-tag after-tag font-mono">AFTER (SATYADEVA DESIGN)</span>

            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="slider-input"
            />

            <div className="slider-line" style={{ left: `${sliderPos}%` }}>
              <div className="slider-handle font-mono">↔</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .story-section {
          padding: 6rem 1.5rem;
          background: var(--bg-surface);
        }

        .story-container {
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 5rem;
        }

        .story-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
        }

        .story-text {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .story-lead {
          font-size: 1.15rem;
          color: var(--text-primary);
          line-height: 1.65;
        }

        .story-body {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .quote-box {
          background: #FFFFFF;
          border-left: 4px solid var(--color-primary);
          padding: 1.75rem;
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          margin-top: 1rem;
          box-shadow: var(--shadow-sm);
        }

        .quote-sparkle { color: var(--color-gold); margin-bottom: 0.5rem; }

        .quote-box p {
          font-size: 1.2rem;
          color: var(--color-primary);
          font-style: italic;
          margin-bottom: 0.5rem;
        }

        .quote-box cite {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-style: normal;
        }

        .story-visual {
          position: relative;
          height: 480px;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }

        .story-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .location-badge {
          position: absolute;
          bottom: 1.25rem;
          left: 1.25rem;
          background: rgba(15, 56, 44, 0.9);
          color: #FFFFFF;
          padding: 0.4rem 0.9rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        /* Makeover Slider */
        .makeover-slider-container {
          position: relative;
          width: 100%;
          height: 440px;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          margin-top: 2rem;
          user-select: none;
        }

        .slider-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .slider-before-layer {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          overflow: hidden;
          z-index: 2;
        }

        .slider-before-layer .slider-img {
          width: var(--container-width, 100%);
          max-width: none;
        }

        .slider-tag {
          position: absolute;
          top: 1rem;
          padding: 0.4rem 0.8rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 700;
          z-index: 5;
        }

        .before-tag { left: 1rem; background: rgba(0,0,0,0.8); color: #FFF; }
        .after-tag { right: 1rem; background: var(--color-primary); color: #FFF; }

        .slider-input {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: e-resize;
          z-index: 10;
        }

        .slider-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 3px;
          background: #FFFFFF;
          z-index: 6;
          transform: translateX(-50%);
          pointer-events: none;
        }

        .slider-handle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #FFFFFF;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }

        @media (max-width: 900px) {
          .story-grid { grid-template-columns: 1fr; }
          .story-visual { height: 320px; }
          .makeover-slider-container { height: 320px; }
        }
      `}</style>
    </section>
  );
};
