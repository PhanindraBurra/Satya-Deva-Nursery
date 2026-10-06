import React, { useState } from 'react';
import { NURSERY_DETAILS, MAKEOVERS_DATA } from '../data/nurseryData';
import { Sparkles, MapPin } from 'lucide-react';

export const BehindTheNursery: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50); // 0 to 100 percentage

  const makeover = MAKEOVERS_DATA[0];

  return (
    <section id="story" className="story-section">
      <div className="story-container">
        {/* Story Intro */}
        <div className="story-grid">
          <div className="story-text-col">
            <div className="eyebrow">08 // HERITAGE SINCE 1950</div>
            <h2 className="text-display-lg">The Legacy of Chantiyya Garu</h2>
            <p className="lead-text">
              In 1950, founder <strong>{NURSERY_DETAILS.founder}</strong> planted the first saplings on the fertile banks of the Godavari in Kadiyam. What began as a modest family orchard grew into India's premier nursery region.
            </p>
            <p className="body-text">
              Today, Sri Satyadeva Nursery spans over 120 acres, holding mother stock plants that supply horticulturists, government forestry departments, estate owners, and plant lovers nationwide.
            </p>

            <div className="story-quote">
              <Sparkles size={20} className="quote-icon" />
              <blockquote>
                "A seed planted with genuine care outlives generations. We do not just sell plants; we nurture lifelong relationships with nature."
              </blockquote>
              <cite>— Pulla Satyanarayana (Chantiyya Garu), Founder</cite>
            </div>
          </div>

          <div className="story-img-col">
            <img
              src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&q=80&w=800"
              alt="Kadiyam Mother Orchards"
              className="story-hero-img"
            />
            <div className="story-img-badge font-mono">
              <MapPin size={14} /> Kadiyapulanka, AP
            </div>
          </div>
        </div>

        {/* Before / After Interactive Slider */}
        <div className="makeover-block">
          <div className="makeover-header">
            <h3 className="text-display-md font-serif">Garden Makeover Transformation</h3>
            <p>Drag the slider to reveal how our landscape team transforms barren grounds into lush paradises.</p>
          </div>

          <div className="slider-container">
            {/* After Image (Full background) */}
            <img src={makeover.afterImage} alt="After Makeover" className="slider-img after-img" />

            {/* Before Image (Clipped overlay) */}
            <div className="slider-before-wrapper" style={{ width: `${sliderPos}%` }}>
              <img src={makeover.beforeImage} alt="Before Makeover" className="slider-img before-img" />
              <div className="before-label font-mono">BEFORE</div>
            </div>

            <div className="after-label font-mono">AFTER (SATYADEVA DESIGN)</div>

            {/* Range Handle Input */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="slider-range-input"
            />

            <div className="slider-divider-line" style={{ left: `${sliderPos}%` }}>
              <div className="slider-handle-knob">↔</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .story-section {
          padding: 8rem 2rem;
          background: var(--bg-deep);
        }

        .story-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 6rem;
        }

        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .story-text-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .lead-text {
          font-size: var(--font-body-lg);
          color: var(--text-primary);
          line-height: 1.7;
        }

        .body-text {
          font-size: var(--font-body-md);
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .story-quote {
          background: var(--bg-card);
          border-left: 4px solid var(--accent-terracotta);
          padding: 2rem;
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          margin-top: 1rem;
        }

        .quote-icon { color: var(--accent-marigold); margin-bottom: 0.75rem; }

        .story-quote blockquote {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          color: var(--text-primary);
          font-style: italic;
          margin-bottom: 0.75rem;
        }

        .story-quote cite {
          font-size: 0.85rem;
          color: var(--accent-sage);
          font-style: normal;
        }

        .story-img-col {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          height: 520px;
        }

        .story-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .story-img-badge {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          background: rgba(11, 26, 18, 0.85);
          backdrop-filter: blur(10px);
          color: var(--accent-sage);
          padding: 0.5rem 1rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        /* Makeover Slider */
        .makeover-block {
          background: var(--bg-card);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          padding: 3rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .slider-container {
          position: relative;
          width: 100%;
          height: 480px;
          border-radius: var(--radius-md);
          overflow: hidden;
          user-select: none;
        }

        .slider-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .slider-before-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          overflow: hidden;
          z-index: 2;
        }

        .slider-before-wrapper .slider-img {
          width: var(--container-width, 100%);
          max-width: none;
        }

        .before-label, .after-label {
          position: absolute;
          top: 1rem;
          padding: 0.4rem 0.8rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          z-index: 5;
        }

        .before-label {
          left: 1rem;
          background: rgba(0,0,0,0.8);
          color: #FFF;
        }

        .after-label {
          right: 1rem;
          background: var(--accent-terracotta);
          color: #FFF;
        }

        .slider-range-input {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: e-resize;
          z-index: 10;
        }

        .slider-divider-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #FFF;
          z-index: 6;
          transform: translateX(-50%);
          pointer-events: none;
        }

        .slider-handle-knob {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #FFF;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
        }

        @media (max-width: 900px) {
          .story-grid { grid-template-columns: 1fr; }
          .story-img-col { height: 350px; }
          .slider-container { height: 320px; }
        }
      `}</style>
    </section>
  );
};
