import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/nurseryData';

export const TestimonialsCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[activeIndex];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="eyebrow">09 // CLIENT ENDORSEMENTS</div>
        <h2 className="text-display-lg">Trusted by Estates & Architects</h2>

        <div className="carousel-card">
          <Quote size={48} className="quote-icon" />

          <p className="testimonial-quote font-serif">"{current.quote}"</p>

          <div className="rating-stars">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} size={18} fill="#E5A93C" color="#E5A93C" />
            ))}
          </div>

          <div className="author-meta">
            <img src={current.avatar} alt={current.name} className="author-avatar" />
            <div className="author-info">
              <strong>{current.name}</strong>
              <span>{current.role} • {current.location}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="carousel-controls">
            <button className="control-btn" onClick={handlePrev} aria-label="Previous review">
              <ChevronLeft size={20} />
            </button>
            <span className="font-mono counter-text">0{activeIndex + 1} / 0{TESTIMONIALS_DATA.length}</span>
            <button className="control-btn" onClick={handleNext} aria-label="Next review">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .testimonials-section {
          padding: 8rem 2rem;
          background: var(--bg-surface);
        }

        .testimonials-container {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .carousel-card {
          margin-top: 3rem;
          background: var(--bg-card);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          padding: 4rem 3rem;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .quote-icon {
          color: var(--accent-terracotta);
          opacity: 0.4;
        }

        .testimonial-quote {
          font-size: clamp(1.4rem, 2.5vw, 2.2rem);
          line-height: 1.4;
          color: var(--text-primary);
        }

        .rating-stars {
          display: flex;
          gap: 0.3rem;
        }

        .author-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .author-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--accent-moss);
        }

        .author-info {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .author-info strong {
          color: var(--text-primary);
          font-size: 1.1rem;
        }

        .author-info span {
          color: var(--accent-sage);
          font-size: 0.85rem;
        }

        .carousel-controls {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .control-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--bg-surface);
          border: 1px solid var(--border-medium);
          color: var(--text-primary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
        }

        .control-btn:hover {
          background: var(--accent-moss);
          color: #FFF;
        }

        .counter-text {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
      `}</style>
    </section>
  );
};
