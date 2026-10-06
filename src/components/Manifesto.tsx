import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NURSERY_DETAILS } from '../data/nurseryData';

gsap.registerPlugin(ScrollTrigger);

export const Manifesto: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const statement = "At Sri Satyadeva Nursery, we believe plants are not mere decorations — they are living legacies. For over 75 years, from the fertile soils of Kadiyam to gardens across India, we cultivate living harmony, breathing vitality into human spaces.";

  useEffect(() => {
    if (textRef.current && sectionRef.current) {
      const words = textRef.current.querySelectorAll('.word');

      gsap.fromTo(
        words,
        { color: 'var(--text-muted)', opacity: 0.3 },
        {
          color: 'var(--accent-terracotta)',
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'bottom 40%',
            scrub: 0.8,
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} id="manifesto" className="manifesto-section">
      <div className="manifesto-container">
        <div className="eyebrow">01 // OUR BOTANICAL MANIFESTO</div>

        <p ref={textRef} className="manifesto-statement text-display-md">
          {statement.split(" ").map((word, index) => (
            <span key={index} className="word" style={{ display: 'inline-block', marginRight: '0.35em' }}>
              {word}
            </span>
          ))}
        </p>

        {/* Legacy Odometer Metrics */}
        <div className="manifesto-stats">
          {NURSERY_DETAILS.stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-number font-serif">
                {stat.value}
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .manifesto-section {
          padding: 8rem 2rem;
          background: var(--bg-surface);
          position: relative;
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }

        .manifesto-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .manifesto-statement {
          font-family: var(--font-serif);
          font-size: clamp(2rem, 4vw, 3.8rem);
          line-height: 1.25;
          max-width: 1100px;
        }

        .manifesto-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2rem;
          padding-top: 4rem;
          border-top: 1px solid var(--border-medium);
        }

        .stat-card {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .stat-number {
          font-size: clamp(3rem, 5vw, 4.5rem);
          font-weight: 300;
          color: var(--text-primary);
          line-height: 1;
        }

        .stat-suffix {
          color: var(--accent-terracotta);
          margin-left: 0.2rem;
        }

        .stat-label {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
};
