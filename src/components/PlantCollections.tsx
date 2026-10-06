import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { PLANT_CATEGORIES, PLANTS_DATA } from '../data/nurseryData';

gsap.registerPlugin(ScrollTrigger);

export const PlantCollections: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const track = trackRef.current;

    const scrollTween = gsap.to(track, {
      x: () => -(track.scrollWidth - window.innerWidth + 100),
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${track.scrollWidth - window.innerWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => scrollTween.scrollTrigger?.kill();
  }, []);

  return (
    <section ref={sectionRef} id="collections" className="collections-section">
      <div className="collections-header">
        <div className="eyebrow">03 // EXPLORE BOTANICAL HARVEST</div>
        <h2 className="text-display-lg">Curated Collections</h2>
      </div>

      <div className="horizontal-overflow">
        <div ref={trackRef} className="horizontal-track">
          {PLANT_CATEGORIES.filter((c) => c !== 'All').map((category, idx) => {
            const categoryPlants = PLANTS_DATA.filter((p) => p.category === category);
            const samplePlant = categoryPlants[0] || PLANTS_DATA[idx % PLANTS_DATA.length];

            return (
              <div
                key={category}
                className="collection-card"
                data-cursor-text="EXPLORE"
              >
                <div className="card-image-wrapper">
                  <img src={samplePlant.image} alt={category} className="card-img" />
                  <div className="card-badge font-mono">0{idx + 1}</div>
                </div>

                <div className="card-details">
                  <span className="card-count font-mono">{categoryPlants.length} Species</span>
                  <h3 className="card-title font-serif">{category}</h3>
                  <p className="card-desc">{samplePlant.description}</p>

                  <a href="#catalogue" className="card-link">
                    <span>Browse Collection</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .collections-section {
          position: relative;
          width: 100vw;
          min-height: 100vh;
          background: var(--bg-surface);
          padding: 6rem 0;
          overflow: hidden;
        }

        .collections-header {
          padding: 0 4rem;
          margin-bottom: 3rem;
        }

        .horizontal-overflow {
          width: 100%;
          overflow: hidden;
        }

        .horizontal-track {
          display: flex;
          gap: 2.5rem;
          padding: 0 4rem;
          width: max-content;
        }

        .collection-card {
          width: 380px;
          flex-shrink: 0;
          background: var(--bg-card);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }

        .collection-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: var(--shadow-lg);
          border-color: var(--accent-terracotta);
        }

        .card-image-wrapper {
          position: relative;
          height: 280px;
          overflow: hidden;
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .collection-card:hover .card-img {
          transform: scale(1.1);
        }

        .card-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(11, 26, 18, 0.8);
          backdrop-filter: blur(8px);
          color: var(--accent-terracotta);
          padding: 0.3rem 0.8rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          border: 1px solid var(--border-accent);
        }

        .card-details {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex-grow: 1;
        }

        .card-count {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--accent-sage);
        }

        .card-title {
          font-size: 2rem;
          color: var(--text-primary);
        }

        .card-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;

          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-link {
          margin-top: auto;
          padding-top: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--accent-terracotta);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        @media (max-width: 768px) {
          .collections-header { padding: 0 1.5rem; }
          .horizontal-track { padding: 0 1.5rem; gap: 1.5rem; }
          .collection-card { width: 300px; }
        }
      `}</style>
    </section>
  );
};
