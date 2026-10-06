import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { NURSERY_DETAILS } from '../data/nurseryData';

export const BotanicalFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-title font-serif">SRI SATYADEVA NURSERY</h3>
            <p className="footer-desc">
              Pioneering commercial plant cultivation, exotic fruit grafting, and master landscape design in Kadiyam since 1950.
            </p>
            <span className="footer-badge font-mono">120 ACRES • KADIYAPULANKA, AP</span>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <a href="#categories">Categories</a>
            <a href="#catalogue">Plant Catalogue</a>
            <a href="#plant-doctor">Plant Doctor Quiz</a>
            <a href="#services">Services</a>
            <a href="#care-guide">Care Guide</a>
          </div>

          <div className="footer-col">
            <h4>Capabilities</h4>
            <a href="#services">Landscape Architecture</a>
            <a href="#services">Wholesale Supply Freight</a>
            <a href="#services">Indoor & Terrace Setup</a>
            <a href="#story">75-Year Heritage</a>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <p><strong>Call:</strong> {NURSERY_DETAILS.phone}</p>
            <p><strong>WhatsApp:</strong> {NURSERY_DETAILS.whatsapp}</p>
            <p><strong>Email:</strong> {NURSERY_DETAILS.email}</p>
            <p><strong>Hours:</strong> {NURSERY_DETAILS.timings}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Sri Satyadeva Nursery. All Rights Reserved.</span>

          <button className="back-top-btn" onClick={scrollToTop}>
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>

          <span>Made with <Heart size={13} fill="#C85A32" color="#C85A32" /> in Kadiyam, India</span>
        </div>
      </div>

      <style>{`
        .footer {
          background: #0A1E17;
          color: #F4F8F5;
          padding: 5rem 1.5rem 2.5rem;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .footer-container {
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 3rem;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-title {
          font-size: 1.6rem;
          letter-spacing: 0.04em;
        }

        .footer-desc {
          font-size: 0.9rem;
          color: #B0C4B6;
          line-height: 1.6;
        }

        .footer-badge {
          font-size: 0.75rem;
          color: var(--color-gold);
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-col h4 {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--color-gold);
          margin-bottom: 0.5rem;
        }

        .footer-col a {
          font-size: 0.9rem;
          color: #B0C4B6;
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .footer-col a:hover {
          color: #FFFFFF;
        }

        .footer-col p {
          font-size: 0.85rem;
          color: #B0C4B6;
          line-height: 1.6;
        }

        .footer-col strong {
          color: #FFFFFF;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          font-size: 0.85rem;
          color: #8FA89B;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .back-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.15);
          color: #FFFFFF;
          padding: 0.5rem 1.25rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .back-top-btn:hover {
          background: var(--color-primary-hover);
        }

        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
          .footer-bottom { flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  );
};
