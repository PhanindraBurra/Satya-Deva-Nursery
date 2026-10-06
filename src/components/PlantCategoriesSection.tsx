import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PLANT_CATEGORIES, PLANTS_DATA } from '../data/nurseryData';

export const PlantCategoriesSection: React.FC = () => {
  return (
    <section id="categories" className="categories-section">
      <div className="categories-container">
        <div className="section-header">
          <div className="eyebrow">BOTANICAL SPECTRUM</div>
          <h2 className="section-heading">Explore Plant Categories</h2>
          <p className="section-subtext">
            From high-yielding graft fruit trees to air-purifying indoor flora, choose from over 500 varieties cultivated in Kadiyam soil.
          </p>
        </div>

        <div className="categories-grid">
          {PLANT_CATEGORIES.filter((c) => c !== 'All').map((category, idx) => {
            const categoryPlants = PLANTS_DATA.filter((p) => p.category === category);
            const samplePlant = categoryPlants[0] || PLANTS_DATA[idx % PLANTS_DATA.length];

            return (
              <a href="#catalogue" key={category} className="category-card">
                <div className="category-img-wrapper">
                  <img src={samplePlant.image} alt={category} />
                </div>
                <div className="category-content">
                  <span className="category-count">{categoryPlants.length} Species</span>
                  <h3 className="category-title font-serif">{category}</h3>
                  <div className="category-link">
                    <span>Browse</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <style>{`
        .categories-section {
          padding: 6rem 1.5rem;
          background: var(--bg-main);
        }

        .categories-container {
          max-width: 1240px;
          margin: 0 auto;
        }

        .section-header {
          margin-bottom: 3.5rem;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }

        .category-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          overflow: hidden;
          text-decoration: none;
          color: var(--text-primary);
          box-shadow: var(--shadow-sm);
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
        }

        .category-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: var(--color-primary);
        }

        .category-img-wrapper {
          height: 200px;
          overflow: hidden;
        }

        .category-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .category-card:hover .category-img-wrapper img {
          transform: scale(1.08);
        }

        .category-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex-grow: 1;
        }

        .category-count {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--text-muted);
          font-weight: 600;
        }

        .category-title {
          font-size: 1.5rem;
          color: var(--color-primary);
        }

        .category-link {
          margin-top: auto;
          padding-top: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--color-accent);
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
      `}</style>
    </section>
  );
};
