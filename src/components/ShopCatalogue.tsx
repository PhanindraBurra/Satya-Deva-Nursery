import React, { useState } from 'react';
import { Search, Star, Sun, Droplets, MessageCircle, X, ShoppingBag } from 'lucide-react';
import { PLANTS_DATA, PLANT_CATEGORIES, NURSERY_DETAILS, type Plant } from '../data/nurseryData';

export const ShopCatalogue: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);

  const filteredPlants = PLANTS_DATA.filter((plant) => {
    const matchesCategory = selectedCategory === 'All' || plant.category === selectedCategory;
    const matchesSearch =
      plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.botanicalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="catalogue" className="catalogue-section">
      <div className="catalogue-container">
        <div className="section-header">
          <div className="eyebrow">NURSERY CATALOGUE</div>
          <h2 className="section-heading">Featured Plant Store</h2>
          <p className="section-subtext">
            Hand-cultivated varieties ready for home gardens, farms, balconies, and commercial landscape projects.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="catalogue-toolbar">
          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search plant name, botanical species, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="category-pills">
            {PLANT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`pill-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Plants Grid */}
        <div className="plants-grid">
          {filteredPlants.map((plant) => (
            <div key={plant.id} className="plant-card" onClick={() => setSelectedPlant(plant)}>
              <div className="plant-img-wrapper">
                <img src={plant.image} alt={plant.name} className="plant-img" />
                <span className="plant-price">{plant.price}</span>
              </div>

              <div className="plant-body">
                <div className="plant-meta">
                  <span className="category-tag">{plant.category}</span>
                  <span className="rating-tag">
                    <Star size={13} fill="#D99B26" color="#D99B26" />
                    {plant.rating}
                  </span>
                </div>

                <h3 className="plant-title font-serif">{plant.name}</h3>
                <em className="plant-botanical">{plant.botanicalName}</em>

                <div className="plant-chips">
                  <span className="chip"><Sun size={12} /> {plant.sunlight}</span>
                  <span className="chip"><Droplets size={12} /> {plant.waterNeed}</span>
                </div>

                <button
                  className="btn btn-whatsapp card-order-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(
                      `https://wa.me/${NURSERY_DETAILS.whatsapp}?text=Hello%20Satyadeva%20Nursery,%20I%20want%20to%20buy%20${encodeURIComponent(plant.name)}%20(${plant.price}).`,
                      '_blank'
                    );
                  }}
                >
                  <MessageCircle size={15} />
                  <span>Order on WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPlants.length === 0 && (
          <div className="no-results">
            <h3>No matching plants found</h3>
            <p>Try searching for 'Mango', 'Bonsai', 'Adenium', or reset filters.</p>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedPlant && (
        <div className="modal-backdrop" onClick={() => setSelectedPlant(null)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedPlant(null)}>
              <X size={20} />
            </button>

            <div className="modal-content-grid">
              <div className="modal-img-wrapper">
                <img src={selectedPlant.image} alt={selectedPlant.name} />
              </div>

              <div className="modal-body font-sans">
                <span className="eyebrow">{selectedPlant.category}</span>
                <h2 className="modal-title font-serif">{selectedPlant.name}</h2>
                <em className="modal-botanical">{selectedPlant.botanicalName}</em>
                <div className="modal-price">{selectedPlant.price}</div>

                <p className="modal-desc">{selectedPlant.description}</p>

                <div className="care-tip-box">
                  <strong>💡 Horticulturist Care Tip:</strong>
                  <p>{selectedPlant.careTip}</p>
                </div>

                <a
                  href={`https://wa.me/${NURSERY_DETAILS.whatsapp}?text=Hello%20Satyadeva%20Nursery,%20I%20want%20to%20order%20${encodeURIComponent(selectedPlant.name)}%20(${selectedPlant.price}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp modal-buy-btn"
                >
                  <ShoppingBag size={18} />
                  <span>Order Matched Plant ({selectedPlant.price})</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .catalogue-section {
          padding: 6rem 1.5rem;
          background: var(--bg-surface);
        }

        .catalogue-container {
          max-width: 1240px;
          margin: 0 auto;
        }

        .catalogue-toolbar {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: 2.5rem;
          margin-bottom: 3rem;
        }

        .search-box {
          position: relative;
          max-width: 550px;
        }

        .search-icon {
          position: absolute;
          left: 1.25rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .search-input {
          width: 100%;
          padding: 0.9rem 1.25rem 0.9rem 3.25rem;
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-full);
          font-size: 0.95rem;
          color: var(--text-primary);
          outline: none;
          transition: var(--transition-fast);
        }

        .search-input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(15, 56, 44, 0.1);
        }

        .category-pills {
          display: flex;
          gap: 0.6rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
        }

        .pill-btn {
          padding: 0.55rem 1.25rem;
          border-radius: var(--radius-full);
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          color: var(--text-secondary);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: var(--transition-fast);
        }

        .pill-btn:hover, .pill-btn.active {
          background: var(--color-primary);
          color: #FFFFFF;
          border-color: var(--color-primary);
        }

        .plants-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }

        .plant-card {
          background: #FFFFFF;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          cursor: pointer;
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
        }

        .plant-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: var(--color-primary);
        }

        .plant-img-wrapper {
          position: relative;
          height: 240px;
          overflow: hidden;
        }

        .plant-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .plant-card:hover .plant-img {
          transform: scale(1.08);
        }

        .plant-price {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          background: var(--color-primary);
          color: #FFFFFF;
          padding: 0.35rem 0.9rem;
          border-radius: var(--radius-full);
          font-weight: 700;
          font-size: 0.85rem;
        }

        .plant-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          flex-grow: 1;
        }

        .plant-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .category-tag {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-accent);
          text-transform: uppercase;
        }

        .rating-tag {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .plant-title {
          font-size: 1.4rem;
          color: var(--color-primary);
        }

        .plant-botanical {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .plant-chips {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.25rem;
        }

        .chip {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: var(--bg-surface);
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .card-order-btn {
          margin-top: 1rem;
          width: 100%;
          justify-content: center;
          padding: 0.75rem;
          font-size: 0.85rem;
        }

        /* Modal */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(10, 30, 23, 0.75);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .modal-container {
          position: relative;
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          max-width: 850px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: var(--shadow-lg);
        }

        .modal-close-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: rgba(0,0,0,0.1);
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
        }

        .modal-content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .modal-img-wrapper img {
          width: 100%;
          height: 100%;
          min-height: 400px;
          object-fit: cover;
        }

        .modal-body {
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .modal-title { font-size: 2.2rem; color: var(--color-primary); }
        .modal-botanical { color: var(--text-muted); }
        .modal-price { font-size: 1.8rem; font-weight: 700; color: var(--color-accent); }

        .care-tip-box {
          background: var(--bg-surface);
          padding: 1rem;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          border-left: 4px solid var(--color-gold);
        }

        .modal-buy-btn {
          margin-top: 1rem;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .modal-content-grid { grid-template-columns: 1fr; }
          .modal-img-wrapper img { min-height: 240px; }
        }
      `}</style>
    </section>
  );
};
