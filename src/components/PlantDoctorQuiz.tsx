import React, { useState } from 'react';
import { Sparkles, ArrowRight, RotateCcw, CheckCircle2, MessageCircle } from 'lucide-react';
import { PLANTS_DATA, NURSERY_DETAILS, type Plant } from '../data/nurseryData';

interface Question {
  id: number;
  title: string;
  subtitle: string;
  options: { label: string; icon: string; value: string }[];
}

export const PlantDoctorQuiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [recommendedPlant, setRecommendedPlant] = useState<Plant | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      title: "Where will your new plant reside?",
      subtitle: "Help us match the environmental micro-climate of your space.",
      options: [
        { label: "Indoor Living Room / Office", icon: "🏠", value: "Indoor" },
        { label: "Balcony / Terrace Garden", icon: "🪴", value: "Outdoor" },
        { label: "Open Orchard / Backyard", icon: "🌳", value: "Fruit Trees" },
        { label: "Sculptural Desk / Studio", icon: "🎋", value: "Bonsai" },
      ],
    },
    {
      id: 2,
      title: "What is the daily direct sunlight access?",
      subtitle: "Light is the lifeblood of plant growth.",
      options: [
        { label: "6+ Hours Direct Sun", icon: "☀️", value: "Full Sun" },
        { label: "Filtered Morning Light", icon: "🌤️", value: "Bright Indirect" },
        { label: "Partial Shade / Canopy", icon: "🌥️", value: "Partial Shade" },
        { label: "Low Artificial Light", icon: "💡", value: "Low Light" },
      ],
    },
    {
      id: 3,
      title: "How often can you water your plants?",
      subtitle: "Be honest! We have options for every routine.",
      options: [
        { label: "Daily Ritual Waterer", icon: "💧", value: "High" },
        { label: "2-3 Times a Week", icon: "🚰", value: "Moderate" },
        { label: "Forgetful / Frequent Traveler", icon: "🌵", value: "Low" },
      ],
    },
  ];

  const handleOptionSelect = (val: string) => {
    const updatedAnswers = { ...answers, [currentStep]: val };
    setAnswers(updatedAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate recommendation match
      const categoryPref = updatedAnswers[0] || 'Indoor';
      const match =
        PLANTS_DATA.find((p) => p.category === categoryPref) ||
        PLANTS_DATA[Math.floor(Math.random() * PLANTS_DATA.length)];
      setRecommendedPlant(match);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setRecommendedPlant(null);
  };

  return (
    <section id="plant-doctor" className="quiz-section">
      <div className="quiz-container">
        <div className="quiz-card">
          <div className="eyebrow">05 // INTERACTIVE DIAGNOSTIC</div>

          {!recommendedPlant ? (
            <>
              <div className="quiz-progress-bar">
                <div
                  className="progress-fill"
                  style={{ height: '4px', width: `${((currentStep + 1) / questions.length) * 100}%` }}
                />
              </div>

              <div className="quiz-question-header">
                <span className="step-indicator font-mono">
                  QUESTION 0{currentStep + 1} OF 0{questions.length}
                </span>
                <h2 className="text-display-md">{questions[currentStep].title}</h2>
                <p>{questions[currentStep].subtitle}</p>
              </div>

              <div className="quiz-options-grid">
                {questions[currentStep].options.map((opt) => (
                  <button
                    key={opt.label}
                    className="quiz-opt-btn"
                    onClick={() => handleOptionSelect(opt.value)}
                  >
                    <span className="opt-icon">{opt.icon}</span>
                    <span className="opt-label">{opt.label}</span>
                    <ArrowRight size={18} className="opt-arrow" />
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="result-container">
              <div className="result-badge">
                <Sparkles size={16} />
                <span>YOUR PERFECT BOTANICAL MATCH</span>
              </div>

              <div className="result-content-grid">
                <div className="result-img-wrapper">
                  <img src={recommendedPlant.image} alt={recommendedPlant.name} />
                </div>

                <div className="result-info">
                  <h2 className="text-display-md font-serif">{recommendedPlant.name}</h2>
                  <em className="font-mono">{recommendedPlant.botanicalName}</em>

                  <p className="result-desc">{recommendedPlant.description}</p>

                  <div className="result-care-highlight">
                    <CheckCircle2 color="#8FA89B" size={18} />
                    <span><strong>Why it matches:</strong> Thrives in {recommendedPlant.sunlight} with {recommendedPlant.waterNeed} watering needs.</span>
                  </div>

                  <div className="result-actions">
                    <a
                      href={`https://wa.me/${NURSERY_DETAILS.whatsapp}?text=Hello%20Satyadeva%20Nursery,%20my%20Plant%20Doctor%20quiz%20recommended%20${encodeURIComponent(recommendedPlant.name)}.%20I%20would%20like%20to%20order.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-editorial btn-primary"
                    >
                      <MessageCircle size={18} />
                      <span>Order Matched Plant ({recommendedPlant.price})</span>
                    </a>

                    <button className="btn-editorial" onClick={resetQuiz}>
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
          padding: 8rem 2rem;
          background: var(--bg-surface);
        }

        .quiz-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .quiz-card {
          background: var(--bg-card);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          padding: 4rem 3rem;
          position: relative;
          box-shadow: var(--shadow-lg);
        }

        .quiz-progress-bar {
          background: var(--border-light);
          height: 4px;
          border-radius: 2px;
          margin: 2rem 0;
          overflow: hidden;
        }

        .progress-fill {
          background: var(--accent-terracotta);
          transition: width 0.4s ease;
        }

        .quiz-question-header {
          margin-bottom: 3rem;
        }

        .step-indicator {
          font-size: 0.8rem;
          color: var(--accent-terracotta);
        }

        .quiz-question-header h2 {
          margin: 0.75rem 0;
        }

        .quiz-options-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .quiz-opt-btn {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.5rem;
          background: var(--bg-surface);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          cursor: pointer;
          text-align: left;
          transition: var(--transition-fast);
        }

        .quiz-opt-btn:hover {
          border-color: var(--accent-terracotta);
          background: var(--bg-elevated);
          transform: translateX(4px);
        }

        .opt-icon { font-size: 1.8rem; }
        .opt-label { font-size: 1.05rem; font-weight: 500; flex-grow: 1; }
        .opt-arrow { color: var(--accent-sage); transition: transform 0.3s ease; }
        .quiz-opt-btn:hover .opt-arrow { transform: translateX(4px); color: var(--accent-terracotta); }

        /* Result View */
        .result-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--accent-marigold);
          font-size: 0.8rem;
          letter-spacing: 0.15em;
          margin-bottom: 2rem;
        }

        .result-content-grid {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 3rem;
          align-items: center;
        }

        .result-img-wrapper {
          border-radius: var(--radius-md);
          overflow: hidden;
          height: 380px;
        }

        .result-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .result-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .result-desc {
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .result-care-highlight {
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
          .result-content-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};
