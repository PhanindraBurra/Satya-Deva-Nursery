import React, { useRef, useState } from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { NURSERY_DETAILS } from '../data/nurseryData';

export const BotanicalFooter: React.FC = () => {
  const [isSprouting, setIsSprouting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleBackToTop = () => {
    setIsSprouting(true);

    // Canvas sprout animation on click
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        let frame = 0;
        const animateSprout = () => {
          frame++;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          const cx = canvas.width / 2;
          const cy = canvas.height - 10;

          // Stem
          const stemH = Math.min(60, frame * 2);
          ctx.strokeStyle = '#2D5A3F';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(cx, cy - stemH);
          ctx.stroke();

          // Leaves
          if (frame > 15) {
            ctx.fillStyle = '#D86A38';
            ctx.beginPath();
            ctx.ellipse(cx - 10, cy - stemH, 8, 4, -Math.PI / 4, 0, Math.PI * 2);
            ctx.ellipse(cx + 10, cy - stemH, 8, 4, Math.PI / 4, 0, Math.PI * 2);
            ctx.fill();
          }

          if (frame < 35) {
            requestAnimationFrame(animateSprout);
          }
        };
        animateSprout();
      }
    }

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => setIsSprouting(false), 1000);
    }, 400);
  };

  return (
    <footer className="footer-container">
      {/* Oversized Outlined Brand Text Marquee */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          <span className="text-stroke font-serif">SRI SATYADEVA NURSERY • KADIYAM • </span>
          <span className="text-stroke font-serif">ESTABLISHED 1950 • BOTANICAL SANCTUARY • </span>
          <span className="text-stroke font-serif">SRI SATYADEVA NURSERY • KADIYAM • </span>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <h3 className="footer-logo font-serif">SRI SATYADEVA NURSERY</h3>
            <p className="footer-desc">
              Pioneering commercial plant cultivation, exotic fruit grafting, and master landscape design since 1950.
            </p>
            <div className="footer-badge font-mono">120 ACRES • KADIYAPULANKA, AP</div>
          </div>

          <div className="footer-links-col">
            <h4>Navigation</h4>
            <a href="#manifesto">01 Manifesto</a>
            <a href="#watch-it-grow">02 Watch It Grow</a>
            <a href="#collections">03 Collections</a>
            <a href="#catalogue">04 Shop Catalogue</a>
            <a href="#plant-doctor">05 Plant Doctor Quiz</a>
          </div>

          <div className="footer-links-col">
            <h4>Capabilities</h4>
            <a href="#services">Landscape Architecture</a>
            <a href="#services">Wholesale Supply Logistics</a>
            <a href="#services">Indoor Biophilic Styling</a>
            <a href="#care-guide">Plant Care Wisdom</a>
          </div>

          <div className="footer-contact-col">
            <h4>Direct Desk</h4>
            <p><strong>Call:</strong> {NURSERY_DETAILS.phone}</p>
            <p><strong>WhatsApp:</strong> {NURSERY_DETAILS.whatsapp}</p>
            <p><strong>Email:</strong> {NURSERY_DETAILS.email}</p>
            <p><strong>Hours:</strong> {NURSERY_DETAILS.timings}</p>
          </div>
        </div>

        {/* Back to Top Sprouting Button */}
        <div className="back-to-top-wrapper">
          <canvas ref={canvasRef} width={100} height={100} className={`footer-sprout-canvas ${isSprouting ? 'active' : ''}`} />
          <button className="back-to-top-btn btn-editorial" onClick={handleBackToTop}>
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>

        <div className="footer-bottom font-mono">
          <span>© {new Date().getFullYear()} Sri Satyadeva Nursery. All Rights Reserved.</span>
          <span>Crafted with <Heart size={12} fill="#D86A38" color="#D86A38" /> in Kadiyam, India.</span>
        </div>
      </div>

      <style>{`
        .footer-container {
          background: #060E0A;
          color: var(--text-primary);
          padding-top: 4rem;
          border-top: 1px solid var(--border-medium);
          position: relative;
          overflow: hidden;
        }

        .marquee-wrapper {
          overflow: hidden;
          padding: 2rem 0;
          border-bottom: 1px solid var(--border-light);
        }

        .marquee-track {
          display: flex;
          white-space: nowrap;
          animation: marquee 25s linear infinite;
        }

        .marquee-track span {
          font-size: clamp(3rem, 7vw, 7rem);
          padding-right: 2rem;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 6rem 2rem 3rem;
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 3rem;
        }

        .footer-brand-col {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-logo {
          font-size: 1.8rem;
          letter-spacing: 0.05em;
        }

        .footer-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .footer-badge {
          font-size: 0.75rem;
          color: var(--accent-terracotta);
          margin-top: 0.5rem;
        }

        .footer-links-col {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links-col h4, .footer-contact-col h4 {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--accent-sage);
          margin-bottom: 0.5rem;
        }

        .footer-links-col a {
          font-size: 0.9rem;
          color: var(--text-secondary);
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .footer-links-col a:hover {
          color: var(--accent-terracotta);
          transform: translateX(4px);
        }

        .footer-contact-col p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .footer-contact-col strong {
          color: var(--text-primary);
        }

        .back-to-top-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          position: relative;
        }

        .footer-sprout-canvas {
          width: 80px;
          height: 80px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .footer-sprout-canvas.active {
          opacity: 1;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          padding-top: 2rem;
          border-top: 1px solid var(--border-light);
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
          .footer-bottom { flex-direction: column; gap: 1rem; text-align: center; }
        }
      `}</style>
    </footer>
  );
};
