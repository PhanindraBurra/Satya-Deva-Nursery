import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/nurseryData';

export const TestimonialsCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? TESTIMONIALS_DATA.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === TESTIMONIALS_DATA.length - 1 ? 0 : i + 1));

  const item = TESTIMONIALS_DATA[index];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="section-header text-center">
          <div className="eyebrow">CLIENT REVIEWS</div>
          <h2 className="section-heading">Trusted by Farmers, Developers & Architects</h2>
        </div>

        <div className="testimonial-card">
          <Quote size={40} className="quote-icon" />
          <p className="quote-text font-serif">"{item.quote}"</p>

          <div className="stars-row">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} size={16} fill="#D99B26" color="#D99B26" />
            ))}
          </div>

          <div className="author-row">
            <img src={item.avatar} alt={item.name} className="avatar" />
            <div className="author-meta">
              <strong>{item.name}</strong>
              <span>{item.role} • {item.location}</span>
            </div>
          </div>

          <div className="controls font-mono">
            <button className="ctrl-btn" onClick={prev} aria-label="Previous">
              <ChevronLeft size={18} />
            </button>
            <span>0{index + 1} / 0{TESTIMONIALS_DATA.length}</span>
            <button className="ctrl-btn" onClick={next} aria-label="Next">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .testimonials-section {
          padding: 6rem 1.5rem;
          background: var(--bg-main);
        }

        .testimonials-container {
          max-width: 860px;
          margin: 0 auto;
        }

        .text-center {
          text-align: center;
        }

        .testimonial-card {
          margin-top: 3rem;
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          padding: 3.5rem 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          text-align: center;
          box-shadow: var(--shadow-md);
        }

        .quote-icon {
          color: var(--color-primary);
          opacity: 0.25;
        }

        .quote-text {
          font-size: clamp(1.2rem, 2vw, 1.8rem);
          color: var(--color-primary);
          line-height: 1.45;
        }

        .stars-row {
          display: flex;
          gap: 0.25rem;
        }

        .author-row {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
        }

        .author-meta {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .author-meta strong {
          color: var(--text-primary);
        }

        .author-meta span {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .controls {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 1rem;
        }

        .ctrl-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--bg-surface);
          border: 1px solid var(--border-medium);
          color: var(--color-primary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
        }

        .ctrl-btn:hover {
          background: var(--color-primary);
          color: #FFFFFF;
        }
      `}</style>
    </section>
  );
};
