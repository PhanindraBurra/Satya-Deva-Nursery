import React, { useState } from 'react';
import { Sparkles, ArrowRight, RotateCcw, MessageCircle, CheckCircle2 } from 'lucide-react';
import { PLANTS_DATA, NURSERY_DETAILS, type Plant } from '../data/nurseryData';

export const PlantDoctorQuiz: React.FC = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [recommendedPlant, setRecommendedPlant] = useState<Plant | null>(null);

  const questions = [
    {
      title: "Where will your plant live?",
      subtitle: "Select the primary location environment.",
      options: [
        { label: "Indoor Living Room / Office", icon: "🏠", value: "Indoor" },
        { label: "Balcony / Terrace Garden", icon: "🪴", value: "Outdoor" },
        { label: "Open Orchard / Yard", icon: "🌳", value: "Fruit Trees" },
        { label: "Sculptural Desk", icon: "🎋", value: "Bonsai" },
      ],
    },
    {
      title: "How much direct sunlight does it get?",
      subtitle: "Light access determines optimal species.",
      options: [
        { label: "Full Sun (6+ Hours)", icon: "☀️", value: "Full Sun" },
        { label: "Filtered Bright Light", icon: "🌤️", value: "Bright Indirect" },
        { label: "Partial Shade", icon: "🌥️", value: "Partial Shade" },
        { label: "Low Indoor Light", icon: "💡", value: "Low Light" },
      ],
    },
    {
      title: "What is your watering routine?",
      subtitle: "We have species for every schedule.",
      options: [
        { label: "Water Daily", icon: "💧", value: "High" },
        { label: "2-3 Times a Week", icon: "🚰", value: "Moderate" },
        { label: "Forgetful / Low Maintenance", icon: "🌵", value: "Low" },
      ],
    },
  ];

  const handleSelect = (val: string) => {
    const updated = { ...answers, [step]: val };
    setAnswers(updated);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      const matchCategory = updated[0] || 'Indoor';
      const found = PLANTS_DATA.find((p) => p.category === matchCategory) || PLANTS_DATA[0];
      setRecommendedPlant(found);
    }
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
    setRecommendedPlant(null);
  };

  return (
    <section id="plant-doctor" className="quiz-section">
      <div className="quiz-container">
        <div className="quiz-card">
          <div className="eyebrow">PLANT DOCTOR RECOMMENDATION</div>

          {!recommendedPlant ? (
            <>
              <div className="quiz-progress-bar">
                <div className="progress-fill" style={{ width: `${((step + 1) / questions.length) * 100}%` }} />
              </div>

              <div className="quiz-header">
                <span className="step-count">STEP 0{step + 1} OF 0{questions.length}</span>
                <h2 className="section-heading">{questions[step].title}</h2>
                <p className="quiz-sub">{questions[step].subtitle}</p>
              </div>

              <div className="quiz-options-grid">
                {questions[step].options.map((opt) => (
                  <button key={opt.label} className="quiz-opt-btn" onClick={() => handleSelect(opt.value)}>
                    <span className="opt-icon">{opt.icon}</span>
                    <span className="opt-label">{opt.label}</span>
                    <ArrowRight size={18} className="opt-arrow" />
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="result-card">
              <div className="result-badge font-serif">
                <Sparkles size={16} /> PERFECT MATCH RECOMMENDED
              </div>

              <div className="result-grid">
                <div className="result-img">
                  <img src={recommendedPlant.image} alt={recommendedPlant.name} />
                </div>

                <div className="result-info">
                  <h3 className="result-title font-serif">{recommendedPlant.name}</h3>
                  <em className="result-botanical">{recommendedPlant.botanicalName}</em>
                  <div className="result-price">{recommendedPlant.price}</div>

                  <p className="result-desc">{recommendedPlant.description}</p>

                  <div className="result-match-reason">
                    <CheckCircle2 size={18} color="#0F382C" />
                    <span>Matches your <strong>{recommendedPlant.sunlight}</strong> environment with <strong>{recommendedPlant.waterNeed}</strong> water needs.</span>
                  </div>

                  <div className="result-actions">
                    <a
                      href={`https://wa.me/${NURSERY_DETAILS.whatsapp}?text=Hello%20Satyadeva%20Nursery,%20Plant%20Doctor%20recommended%20${encodeURIComponent(recommendedPlant.name)}.%20I%20want%20to%20order.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                    >
                      <MessageCircle size={18} />
                      <span>Order Matched Plant ({recommendedPlant.price})</span>
                    </a>

                    <button className="btn btn-outline" onClick={resetQuiz}>
                      <RotateCcw size={16} />
                      <span>Retake Quiz</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .quiz-section {
          padding: 6rem 1.5rem;
          background: var(--bg-main);
        }

        .quiz-container {
          max-width: 980px;
          margin: 0 auto;
        }

        .quiz-card {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          padding: 3.5rem 3rem;
          box-shadow: var(--shadow-md);
        }

        .quiz-progress-bar {
          background: var(--bg-surface);
          height: 5px;
          border-radius: 3px;
          margin: 1.5rem 0 2rem;
          overflow: hidden;
        }

        .progress-fill {
          background: var(--color-primary);
          height: 100%;
          transition: width 0.3s ease;
        }

        .step-count {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-accent);
          letter-spacing: 0.1em;
        }

        .quiz-sub {
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .quiz-options-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .quiz-opt-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
          background: var(--bg-surface);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          cursor: pointer;
          text-align: left;
          color: var(--text-primary);
          transition: var(--transition-fast);
        }

        .quiz-opt-btn:hover {
          border-color: var(--color-primary);
          background: #FFFFFF;
          box-shadow: var(--shadow-sm);
        }

        .opt-icon { font-size: 1.6rem; }
        .opt-label { font-size: 1rem; font-weight: 600; flex-grow: 1; }
        .opt-arrow { color: var(--color-primary); }

        /* Result */
        .result-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-accent);
          font-weight: 700;
          font-size: 0.9rem;
          margin-bottom: 2rem;
        }

        .result-grid {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 2.5rem;
          align-items: center;
        }

        .result-img img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          border-radius: var(--radius-md);
        }

        .result-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .result-title { font-size: 2.2rem; color: var(--color-primary); }
        .result-botanical { color: var(--text-muted); }
        .result-price { font-size: 1.8rem; font-weight: 700; color: var(--color-accent); }

        .result-match-reason {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: var(--bg-surface);
          padding: 1rem;
          border-radius: var(--radius-md);
          font-size: 0.9rem;
        }

        .result-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .quiz-card { padding: 2rem 1.5rem; }
          .quiz-options-grid { grid-template-columns: 1fr; }
          .result-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};
