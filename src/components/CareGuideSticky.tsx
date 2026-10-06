import React from 'react';
import { Droplets, Sun, Sparkles, Scissors } from 'lucide-react';

export const CareGuideSticky: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Mastering Watering Balance",
      icon: <Droplets size={24} />,
      summary: "Always test soil moisture 2 inches below the surface before soaking. Deep watering twice weekly promotes strong tap roots.",
    },
    {
      num: "02",
      title: "Soil Micro-Nutrients & Feed",
      icon: <Sparkles size={24} />,
      summary: "Feed organic vermicompost and neem cake every 60 days to enrich soil microbe activity and boost blooming capacity.",
    },
    {
      num: "03",
      title: "Strategic Seasonal Pruning",
      icon: <Scissors size={24} />,
      summary: "Prune dead stems at a 45-degree angle to direct plant energy toward dense foliage and heavy fruit yield.",
    },
    {
      num: "04",
      title: "Sunlight & Micro-Climates",
      icon: <Sun size={24} />,
      summary: "Position plants according to light needs. Rotate potted indoor plants fortnightly for uniform leaf growth.",
    },
  ];

  return (
    <section id="care-guide" className="care-section">
      <div className="care-container">
        <div className="section-header">
          <div className="eyebrow">HORTICULTURAL WISDOM</div>
          <h2 className="section-heading">Essential Plant Care Guide</h2>
          <p className="section-subtext">
            Simple, time-tested advice honed over 75 years of commercial nursery cultivation in Andhra Pradesh.
          </p>
        </div>

        <div className="care-grid">
          {steps.map((step) => (
            <div key={step.num} className="care-card">
              <div className="card-header">
                <span className="step-num">{step.num}</span>
                <div className="card-icon">{step.icon}</div>
              </div>
              <h3 className="card-title font-serif">{step.title}</h3>
              <p className="card-summary">{step.summary}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .care-section {
          padding: 6rem 1.5rem;
          background: var(--bg-main);
        }

        .care-container {
          max-width: 1240px;
          margin: 0 auto;
        }

        .care-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .care-card {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          box-shadow: var(--shadow-sm);
          transition: var(--transition-smooth);
        }

        .care-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--color-primary);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .step-num {
          font-family: var(--font-mono);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-accent);
        }

        .card-icon {
          color: var(--color-primary);
        }

        .card-title {
          font-size: 1.4rem;
          color: var(--color-primary);
        }

        .card-summary {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};
