import React from 'react';
import { ArrowUpRight, Compass, Truck, Home, Stethoscope } from 'lucide-react';
import { SERVICES_DATA, NURSERY_DETAILS } from '../data/nurseryData';

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass size={24} />;
      case 'Truck': return <Truck size={24} />;
      case 'Home': return <Home size={24} />;
      case 'Stethoscope': return <Stethoscope size={24} />;
      default: return <Compass size={24} />;
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <div className="eyebrow">06 // HORTICULTURAL CAPABILITIES</div>
          <h2 className="text-display-lg">Landscaping & Master Services</h2>
          <p>From private estate master plans to nationwide wholesale freight, we craft botanical environments engineered for longevity.</p>
        </div>

        {/* Bento Layout */}
        <div className="bento-grid">
          {SERVICES_DATA.map((service, idx) => (
            <div key={service.id} className={`bento-item item-${idx + 1}`}>
              <div className="bento-img-bg">
                <img src={service.image} alt={service.title} />
                <div className="bento-gradient" />
              </div>

              <div className="bento-content">
                <div className="bento-icon-badge">{getIcon(service.iconName)}</div>
                <h3 className="bento-title font-serif">{service.title}</h3>
                <p className="bento-tagline">{service.tagline}</p>
                <p className="bento-desc">{service.description}</p>

                <ul className="bento-highlights">
                  {service.highlights.map((h) => (
                    <li key={h}>✓ {h}</li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${NURSERY_DETAILS.whatsapp}?text=Hello%20Satyadeva%20Nursery,%20I%20would%20like%20to%20consult%20about%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial bento-cta"
                >
                  <span>Book Consultation</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-section {
          padding: 8rem 2rem;
          background: var(--bg-deep);
        }

        .services-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .services-header {
          margin-bottom: 4rem;
        }

        .bento-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 2rem;
        }

        .bento-item {
          position: relative;
          background: var(--bg-card);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          overflow: hidden;
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          min-height: 440px;
          transition: var(--transition-smooth);
        }

        .bento-item:hover {
          border-color: var(--accent-terracotta);
          transform: translateY(-4px);
        }

        .item-1 { grid-column: span 7; }
        .item-2 { grid-column: span 5; }
        .item-3 { grid-column: span 5; }
        .item-4 { grid-column: span 7; }

        .bento-img-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .bento-img-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.25;
          transition: transform 0.8s ease, opacity 0.8s ease;
        }

        .bento-item:hover .bento-img-bg img {
          transform: scale(1.08);
          opacity: 0.35;
        }

        .bento-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, var(--bg-card) 20%, transparent 100%);
        }

        .bento-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .bento-icon-badge {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--accent-moss);
          color: #FFF;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bento-title {
          font-size: 2.2rem;
          color: var(--text-primary);
        }

        .bento-tagline {
          font-size: 1rem;
          color: var(--accent-sage);
          font-style: italic;
        }

        .bento-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .bento-highlights {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem 1rem;
          font-size: 0.85rem;
          color: var(--text-primary);
          margin-top: 0.5rem;
        }

        .bento-cta {
          align-self: flex-start;
          margin-top: 1rem;
          font-size: 0.75rem;
        }

        @media (max-width: 900px) {
          .item-1, .item-2, .item-3, .item-4 { grid-column: span 12; }
          .bento-highlights { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};
