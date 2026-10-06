import React from 'react';
import { Compass, Truck, Home, Stethoscope, ArrowRight } from 'lucide-react';
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
        <div className="section-header">
          <div className="eyebrow">NURSERY CAPABILITIES</div>
          <h2 className="section-heading">Landscaping & Services</h2>
          <p className="section-subtext">
            From luxury estate master plans to nationwide wholesale freight, our experienced team delivers end-to-end botanical excellence.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES_DATA.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-img-wrapper">
                <img src={service.image} alt={service.title} />
                <div className="service-icon-badge">{getIcon(service.iconName)}</div>
              </div>

              <div className="service-body">
                <h3 className="service-title font-serif">{service.title}</h3>
                <p className="service-tagline font-serif">{service.tagline}</p>
                <p className="service-desc">{service.description}</p>

                <ul className="service-highlights">
                  {service.highlights.map((h) => (
                    <li key={h}>✓ {h}</li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${NURSERY_DETAILS.whatsapp}?text=Hello%20Satyadeva%20Nursery,%20I%20would%20like%20to%20consult%20about%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline service-cta"
                >
                  <span>Book Consultation</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-section {
          padding: 6rem 1.5rem;
          background: var(--bg-surface);
        }

        .services-container {
          max-width: 1240px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .service-card {
          background: #FFFFFF;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          transition: var(--transition-smooth);
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: var(--color-primary);
        }

        .service-img-wrapper {
          position: relative;
          height: 200px;
        }

        .service-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .service-icon-badge {
          position: absolute;
          bottom: -1.25rem;
          left: 1.5rem;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--color-primary);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-md);
        }

        .service-body {
          padding: 2.25rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          flex-grow: 1;
        }

        .service-title {
          font-size: 1.5rem;
          color: var(--color-primary);
        }

        .service-tagline {
          font-size: 0.95rem;
          color: var(--color-accent);
          font-style: italic;
        }

        .service-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .service-highlights {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          font-size: 0.85rem;
          color: var(--text-primary);
          margin-top: 0.5rem;
          margin-bottom: 1rem;
        }

        .service-cta {
          margin-top: auto;
          width: 100%;
          justify-content: center;
        }
      `}</style>
    </section>
  );
};
