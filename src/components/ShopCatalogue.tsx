import React, { useState } from 'react';
import { Search, Grid, List, Star, Sun, Droplets, ShoppingBag, MessageCircle, X } from 'lucide-react';
import { PLANTS_DATA, PLANT_CATEGORIES, NURSERY_DETAILS, type Plant } from '../data/nurseryData';

export const ShopCatalogue: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
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
        <div className="catalogue-header">
          <div className="eyebrow">04 // NURSERY CATALOGUE</div>
          <h2 className="text-display-lg">The Botanical Store</h2>
          <p>Browse our hand-cultivated varieties available for immediate dispatch or garden installation.</p>
        </div>

        {/* Filter Controls Bar */}
        <div className="catalogue-toolbar">
          {/* Search Box */}
          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search plant, botanical name, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          {/* Grid/List View Toggle */}
          <div className="view-toggle">
            <button
              className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid View"
            >
              <Grid size={18} />
            </button>
            <button
              className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              aria-label="List View"
            >
              <List size={18} />
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs">
          {PLANT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Plant Cards Container */}
        <div className={`plants-grid ${viewMode === 'list' ? 'list-layout' : ''}`}>
          {filteredPlants.map((plant) => (
            <div
              key={plant.id}
              className="plant-card"
              data-cursor-text="DETAILS"
              onClick={() => setSelectedPlant(plant)}
            >
              <div className="plant-img-wrapper">
                <img src={plant.image} alt={plant.name} className="plant-img" />
                <span className="plant-price-badge font-mono">{plant.price}</span>
              </div>

              <div className="plant-info">
                <div className="plant-meta font-mono">
                  <span>{plant.category}</span>
                  <span className="rating-badge">
                    <Star size={12} fill="#E5A93C" color="#E5A93C" />
                    {plant.rating} ({plant.reviewsCount})
                  </span>
                </div>

                <h3 className="plant-name font-serif">{plant.name}</h3>
                <em className="plant-botanical">{plant.botanicalName}</em>

                <div className="plant-badges">
                  <span className="badge-chip">
                    <Sun size={12} /> {plant.sunlight}
                  </span>
                  <span className="badge-chip">
                    <Droplets size={12} /> {plant.waterNeed}
                  </span>
                </div>

                <div className="plant-card-footer">
                  <button
                    className="btn-editorial card-whatsapp-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(
                        `https://wa.me/${NURSERY_DETAILS.whatsapp}?text=Hello%20Satyadeva%20Nursery,%20I%20am%20interested%20in%20buying%20${encodeURIComponent(plant.name)}%20(${plant.price}).`,
                        '_blank'
                      );
                    }}
                  >
                    <MessageCircle size={14} />
                    <span>Enquire on WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPlants.length === 0 && (
          <div className="no-results">
            <h3>No plant varieties found</h3>
            <p>Try searching for a different keyword like 'Mango', 'Bonsai', or 'Adenium'.</p>
          </div>
        )}
      </div>

      {/* Plant Detail Modal */}
      {selectedPlant && (
        <div className="modal-overlay" onClick={() => setSelectedPlant(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedPlant(null)}>
              <X size={24} />
            </button>

            <div className="modal-grid">
              <div className="modal-img-col">
                <img src={selectedPlant.image} alt={selectedPlant.name} />
              </div>

              <div className="modal-details-col">
                <div className="eyebrow">{selectedPlant.category} // {selectedPlant.origin}</div>
                <h2 className="modal-title font-serif">{selectedPlant.name}</h2>
                <em className="modal-botanical font-mono">{selectedPlant.botanicalName}</em>

                <div className="modal-price font-serif">{selectedPlant.price}</div>

                <p className="modal-desc">{selectedPlant.description}</p>

                <div className="care-box">
                  <strong>💡 Horticulturist Care Tip:</strong>
                  <p>{selectedPlant.careTip}</p>
                </div>

                <div className="modal-specs">
                  <div><strong>Sunlight:</strong> {selectedPlant.sunlight}</div>
                  <div><strong>Water Need:</strong> {selectedPlant.waterNeed}</div>
                  <div><strong>Growth Speed:</strong> {selectedPlant.growthSpeed}</div>
                </div>

                <a
                  href={`https://wa.me/${NURSERY_DETAILS.whatsapp}?text=Hello%20Satyadeva%20Nursery,%20I%20want%20to%20order%20${encodeURIComponent(selectedPlant.name)}%20(${selectedPlant.price}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial btn-primary modal-action-btn"
                >
                  <ShoppingBag size={18} />
                  <span>Order via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .catalogue-section {
          padding: 8rem 2rem;
          background: var(--bg-deep);
        }

        .catalogue-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .catalogue-header {
          margin-bottom: 3rem;
        }

        .catalogue-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .search-box {
          position: relative;
          flex-grow: 1;
          max-width: 500px;
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
          padding: 1rem 1.25rem 1rem 3.25rem;
          background: var(--bg-card);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-full);
          color: var(--text-primary);
          font-size: 0.95rem;
          outline: none;
          transition: var(--transition-fast);
        }

        .search-input:focus {
          border-color: var(--accent-terracotta);
          box-shadow: 0 0 15px var(--accent-terracotta-glow);
        }

        .view-toggle {
          display: flex;
          gap: 0.5rem;
          background: var(--bg-card);
          padding: 0.4rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-medium);
        }

        .toggle-btn {
          background: none;
          border: none;
          padding: 0.5rem;
          color: var(--text-muted);
          border-radius: 50%;
          cursor: pointer;
        }

        .toggle-btn.active {
          background: var(--accent-moss);
          color: #FFF;
        }

        .category-tabs {
          display: flex;
          gap: 0.75rem;
          overflow-x: auto;
          padding-bottom: 1.5rem;
          margin-bottom: 3rem;
        }

        .tab-btn {
          padding: 0.6rem 1.4rem;
          border-radius: var(--radius-full);
          background: var(--bg-card);
          border: 1px solid var(--border-medium);
          color: var(--text-secondary);
          font-size: 0.85rem;
          cursor: pointer;
          white-space: nowrap;
          transition: var(--transition-fast);
        }

        .tab-btn:hover, .tab-btn.active {
          background: var(--accent-terracotta);
          color: #FFF;
          border-color: var(--accent-terracotta);
        }

        .plants-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }

        .plants-grid.list-layout {
          grid-template-columns: 1fr;
        }

        .plant-card {
          background: var(--bg-card);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          overflow: hidden;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .plant-card:hover {
          transform: translateY(-6px);
          border-color: var(--accent-terracotta);
          box-shadow: var(--shadow-lg);
        }

        .plant-img-wrapper {
          position: relative;
          height: 260px;
          overflow: hidden;
        }

        .plant-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .plant-card:hover .plant-img {
          transform: scale(1.08);
        }

        .plant-price-badge {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          background: var(--accent-terracotta);
          color: #FFF;
          padding: 0.4rem 1rem;
          border-radius: var(--radius-full);
          font-weight: 700;
          font-size: 0.9rem;
        }

        .plant-info {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .plant-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: var(--accent-sage);
          text-transform: uppercase;
        }

        .rating-badge {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          color: var(--text-primary);
        }

        .plant-name {
          font-size: 1.6rem;
          color: var(--text-primary);
        }

        .plant-botanical {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .plant-badges {
          display: flex;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        .badge-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--bg-surface);
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .plant-card-footer {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-light);
        }

        .card-whatsapp-btn {
          width: 100%;
          justify-content: center;
          padding: 0.75rem 1rem;
          font-size: 0.8rem;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .modal-card {
          position: relative;
          background: var(--bg-card);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: rgba(0,0,0,0.5);
          border: none;
          color: #FFF;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          z-index: 10;
        }

        .modal-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .modal-img-col img {
          width: 100%;
          height: 100%;
          min-height: 450px;
          object-fit: cover;
        }

        .modal-details-col {
          padding: 3rem 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .modal-title { font-size: 2.5rem; }
        .modal-botanical { color: var(--accent-sage); }
        .modal-price { font-size: 2rem; color: var(--accent-terracotta); }
        .modal-desc { color: var(--text-secondary); line-height: 1.7; }

        .care-box {
          background: var(--bg-surface);
          padding: 1.25rem;
          border-radius: var(--radius-md);
          border-left: 4px solid var(--accent-marigold);
          font-size: 0.9rem;
        }

        .modal-specs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          font-size: 0.8rem;
          padding: 1rem 0;
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }

        .modal-action-btn {
          margin-top: 1rem;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .modal-grid { grid-template-columns: 1fr; }
          .modal-img-col img { min-height: 250px; }
        }
      `}</style>
    </section>
  );
};
