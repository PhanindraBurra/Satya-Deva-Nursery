import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS_DATA } from '../data/nurseryData';

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="eyebrow">10 // FREQUENT INQUIRIES</div>
        <h2 className="text-display-lg">Frequently Asked Questions</h2>

        <div className="faq-list">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button className="faq-question-btn" onClick={() => toggleAccordion(idx)}>
                  <span className="faq-question font-serif">{faq.question}</span>
                  <ChevronDown size={20} className={`faq-icon ${isOpen ? 'rotate' : ''}`} />
                </button>

                {isOpen && (
                  <div className="faq-answer-wrapper">
                    <p className="faq-answer">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .faq-section {
          padding: 8rem 2rem;
          background: var(--bg-deep);
        }

        .faq-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .faq-list {
          margin-top: 3rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .faq-item {
          background: var(--bg-card);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: var(--transition-fast);
        }

        .faq-item.open {
          border-color: var(--accent-terracotta);
        }

        .faq-question-btn {
          width: 100%;
          padding: 1.75rem 2rem;
          background: none;
          border: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
          color: var(--text-primary);
          text-align: left;
          cursor: pointer;
        }

        .faq-question {
          font-size: 1.35rem;
        }

        .faq-icon {
          color: var(--accent-sage);
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .faq-icon.rotate {
          transform: rotate(180deg);
          color: var(--accent-terracotta);
        }

        .faq-answer-wrapper {
          padding: 0 2rem 2rem 2rem;
        }

        .faq-answer {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
          border-top: 1px solid var(--border-light);
          padding-top: 1.25rem;
        }
      `}</style>
    </section>
  );
};
