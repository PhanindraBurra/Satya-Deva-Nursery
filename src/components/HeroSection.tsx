import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, Truck, Sprout, Award } from 'lucide-react';
import { NURSERY_DETAILS } from '../data/nurseryData';

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Hero Content Left */}
        <div className="hero-text-block">
          <div className="eyebrow">SRI SATYADEVA NURSERY • EST. 1950</div>

          <h1 className="hero-headline font-serif">
            Bring Nature Home from India's Premier 120-Acre Nursery.
          </h1>

          <p className="hero-subline">
            Cultivating over 500+ species of high-yield fruit grafts, indoor biophilic greenery, exotic ornamental flora, and bonsai in Kadiyapulanka, Andhra Pradesh for 75 years.
          </p>

          <div className="hero-cta-row">
            <a href="#catalogue" className="btn btn-primary">
              <span>Explore Plant Catalogue</span>
              <ArrowRight size={16} />
            </a>

            <a
              href={`https://wa.me/${NURSERY_DETAILS.whatsapp}?text=Hello%20Satyadeva%20Nursery,%20I%20am%20looking%20for%20plant%20recommendations.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Quick Trust Bar */}
          <div className="trust-grid">
            <div className="trust-item">
              <Sprout className="trust-icon" size={20} />
              <div>
                <strong>500+ Species</strong>
                <span>Fruit, Indoor & Exotic</span>
              </div>
            </div>

            <div className="trust-item">
              <Award className="trust-icon" size={20} />
              <div>
                <strong>75+ Yrs Legacy</strong>
                <span>Founded 1950</span>
              </div>
            </div>

            <div className="trust-item">
              <Truck className="trust-icon" size={20} />
              <div>
                <strong>Pan-India Shipping</strong>
                <span>Safe Freight Transport</span>
              </div>
            </div>

            <div className="trust-item">
              <ShieldCheck className="trust-icon" size={20} />
              <div>
                <strong>Healthy Arrival</strong>
                <span>100% Plant Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image Right */}
        <div className="hero-visual-block">
          <div className="hero-image-card">
            <img
              src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200"
              alt="Sri Satyadeva Nursery Orchards"
              className="hero-main-img"
            />
            <div className="image-overlay-badge">
              <span className="badge-title font-serif">Kadiyam Mother Orchards</span>
              <span className="badge-sub">120 Acres of Cultivation</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding: 8.5rem 1.5rem 4rem;
          background: linear-gradient(180deg, #F0F4F1 0%, #FAFAF7 100%);
        }

        .hero-container {
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-text-block {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .hero-headline {
          font-size: clamp(2.5rem, 5vw, 4.2rem);
          line-height: 1.1;
          color: var(--color-primary);
        }

        .hero-subline {
          font-size: clamp(1.05rem, 1.3vw, 1.25rem);
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 0.5rem;
        }

        .trust-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-medium);
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .trust-icon {
          color: var(--color-primary);
          flex-shrink: 0;
        }

        .trust-item strong {
          display: block;
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .trust-item span {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .hero-visual-block {
          position: relative;
        }

        .hero-image-card {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          height: 540px;
        }

        .hero-main-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .image-overlay-badge {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          background: rgba(15, 56, 44, 0.9);
          backdrop-filter: blur(10px);
          color: #FFFFFF;
          padding: 0.85rem 1.4rem;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
        }

        .badge-title {
          font-size: 1.15rem;
        }

        .badge-sub {
          font-size: 0.75rem;
          opacity: 0.85;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        @media (max-width: 1024px) {
          .hero-container { grid-template-columns: 1fr; gap: 3rem; }
          .hero-image-card { height: 380px; }
        }

        @media (max-width: 640px) {
          .trust-grid { grid-template-columns: 1fr; gap: 1rem; }
          .hero-section { padding-top: 6.5rem; }
        }
      `}</style>
    </section>
  );
};
