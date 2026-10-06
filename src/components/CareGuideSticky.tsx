import React from 'react';
import { Droplets, Sun, Sparkles, Scissors } from 'lucide-react';

export const CareGuideSticky: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Mastering Watering Balance",
      icon: <Droplets size={24} />,
      summary: "Underwatering stresses plants; overwatering suffocates roots. Always test soil moisture 2 inches below the surface before soaking.",
      details: "For Kadiyam fruit trees and outdoor grafts, deep soaking twice weekly encourages deep tap roots rather than shallow surface roots.",
    },
    {
      num: "02",
      title: "Soil Micro-Nutrients & Organic Feed",
      icon: <Sparkles size={24} />,
      summary: "Rich alluvial soil forms the backbone of Satyadeva nursery specimens. Feed organic vermicompost and neem cake every 60 days.",
      details: "Avoid synthetic chemical spikes which burn tender feeder roots. Use organic liquid seaweed extract during bloom cycles.",
    },
    {
      num: "03",
      title: "Strategic Seasonal Pruning",
      icon: <Scissors size={24} />,
      summary: "Pruning removes dead wood, stimulates lateral branching, and directs plant energy toward heavy flowering and fruit yield.",
      details: "Always use sterilized bypass shears. Make clean 45-degree angle cuts just above outward-facing leaf nodes.",
    },
    {
      num: "04",
      title: "Micro-Climate Placement & Light",
      icon: <Sun size={24} />,
      summary: "Match species to sunlight exposure. Rotate potted indoor plants 90 degrees every fortnight for uniform foliage distribution.",
      details: "Protect delicate shade plants like Monstera and Ferns from harsh 2 PM afternoon tropical sun to prevent leaf scorch.",
    },
  ];

  return (
    <section id="care-guide" className="care-section">
      <div className="care-container">
        <div className="care-sticky-col">
          <div className="eyebrow">07 // HORTICULTURAL WISDOM</div>
          <h2 className="text-display-lg">The Plant Care Master Guide.</h2>
          <p>Simple, timeless guidelines honed over 75 years of commercial nursery cultivation in Andhra Pradesh.</p>
        </div>

        <div className="care-steps-col">
          {steps.map((step) => (
            <div key={step.num} className="care-step-card">
              <div className="step-header font-mono">
                <span className="step-num">{step.num}</span>
                <div className="step-icon">{step.icon}</div>
              </div>

              <h3 className="step-title font-serif">{step.title}</h3>
              <p className="step-summary">{step.summary}</p>
              <div className="step-details">{step.details}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .care-section {
          padding: 8rem 2rem;
          background: var(--bg-surface);
        }

        .care-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 450px 1fr;
          gap: 5rem;
          align-items: start;
        }

        .care-sticky-col {
          position: sticky;
          top: 8rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .care-steps-col {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .care-step-card {
          background: var(--bg-card);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          padding: 3rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          transition: var(--transition-fast);
        }

        .care-step-card:hover {
          border-color: var(--accent-terracotta);
          transform: translateX(6px);
        }

        .step-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .step-num {
          font-size: 1.25rem;
          color: var(--accent-terracotta);
        }

        .step-icon {
          color: var(--accent-sage);
        }

        .step-title {
          font-size: 2rem;
          color: var(--text-primary);
        }

        .step-summary {
          font-size: 1.05rem;
          color: var(--text-primary);
          line-height: 1.6;
        }

        .step-details {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
          border-top: 1px solid var(--border-light);
          padding-top: 1rem;
        }

        @media (max-width: 900px) {
          .care-container { grid-template-columns: 1fr; gap: 3rem; }
          .care-sticky-col { position: relative; top: 0; }
        }
      `}</style>
    </section>
  );
};
