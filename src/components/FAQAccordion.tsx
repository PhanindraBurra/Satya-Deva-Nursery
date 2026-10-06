import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS_DATA } from '../data/nurseryData';

export const FAQAccordion: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="section-header text-center">
          <div className="eyebrow">FREQUENT QUESTIONS</div>
          <h2 className="section-heading">Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button className="faq-question-btn" onClick={() => toggle(idx)}>
                  <span className="faq-question font-serif">{faq.question}</span>
                  <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'rotate' : ''}`} />
                </button>

                {isOpen && (
                  <div className="faq-answer-box">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .faq-section {
          padding: 6rem 1.5rem;
          background: var(--bg-surface);
        }

        .faq-container {
          max-width: 860px;
          margin: 0 auto;
        }

        .text-center { text-align: center; }

        .faq-list {
          margin-top: 3rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }

        .faq-item.open {
          border-color: var(--color-primary);
        }

        .faq-question-btn {
          width: 100%;
          padding: 1.5rem 1.75rem;
          background: none;
          border: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          color: var(--color-primary);
          text-align: left;
          cursor: pointer;
        }

        .faq-question {
          font-size: 1.25rem;
        }

        .faq-chevron {
          color: var(--text-muted);
          transition: transform 0.3s ease;
        }

        .faq-chevron.rotate {
          transform: rotate(180deg);
          color: var(--color-primary);
        }

        .faq-answer-box {
          padding: 0 1.75rem 1.5rem 1.75rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
          border-top: 1px solid var(--border-light);
        }

        .faq-answer-box p {
          padding-top: 1rem;
        }
      `}</style>
    </section>
  );
};
