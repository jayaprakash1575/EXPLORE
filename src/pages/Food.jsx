import React, { useState } from 'react';
import { FoodCard } from '../components/FoodCard';
import { BENGALURU_FOOD_PLACES, INDIA_FOOD_BY_STATE } from '../data/food';
import { Utensils, Coffee, MapPin, Sparkles, Heart } from 'lucide-react';

export const Food = ({ onOpenDetails }) => {
  const [mainTab, setMainTab] = useState('bengaluru'); // 'bengaluru' | 'india'
  const [blrCategory, setBlrCategory] = useState('All');
  const [selectedStateIndex, setSelectedStateIndex] = useState(0);

  const blrCategories = ['All', 'Breakfast', 'Street Food', 'Non-Veg', 'Cafés'];

  const filteredBlrFood = blrCategory === 'All'
    ? BENGALURU_FOOD_PLACES
    : BENGALURU_FOOD_PLACES.filter((f) => f.category === blrCategory);

  const activeStateFood = INDIA_FOOD_BY_STATE[selectedStateIndex];

  return (
    <div className="food-page animate-fade-in">
      {/* Header */}
      <section className="food-hero-header">
        <div className="container">
          <div className="food-header-content">
            <span className="section-tag">
              <Utensils size={14} color="#234d35" />
              Flavours Of Love & Travel
            </span>
            <h1 className="food-main-title">"Because Every Journey Needs Good Food"</h1>
            <p className="food-subtitle">From Gandhi Bazaar's benne dosa to Lucknow's kebabs and Kerala's appam.</p>
          </div>

          {/* Main Toggle */}
          <div className="main-food-toggle">
            <button
              className={`food-toggle-btn ${mainTab === 'bengaluru' ? 'active' : ''}`}
              onClick={() => setMainTab('bengaluru')}
            >
              <span>🌹 Bengaluru Food Gems</span>
            </button>
            <button
              className={`food-toggle-btn ${mainTab === 'india' ? 'active' : ''}`}
              onClick={() => setMainTab('india')}
            >
              <span>🇮🇳 India Through Food (By State)</span>
            </button>
          </div>
        </div>
      </section>

      <div className="container section-padding">
        {mainTab === 'bengaluru' ? (
          /* BENGALURU FOOD VIEW */
          <div>
            <div className="filter-tabs">
              {blrCategories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-tab ${blrCategory === cat ? 'active' : ''}`}
                  onClick={() => setBlrCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid-3">
              {filteredBlrFood.map((food) => (
                <FoodCard key={food.id} food={food} onOpenDetails={onOpenDetails} />
              ))}
            </div>
          </div>
        ) : (
          /* INDIA THROUGH FOOD VIEW */
          <div className="india-food-view">
            {/* State Picker Buttons */}
            <div className="state-food-picker">
              {INDIA_FOOD_BY_STATE.map((st, idx) => (
                <button
                  key={st.state}
                  className={`state-food-chip ${selectedStateIndex === idx ? 'active' : ''}`}
                  onClick={() => setSelectedStateIndex(idx)}
                >
                  {st.state}
                </button>
              ))}
            </div>

            {/* Active State Showcase */}
            {activeStateFood && (
              <div className="state-food-card glass-panel animate-fade-in">
                <div className="state-food-header">
                  <div>
                    <span className="state-capital-tag">Capital: {activeStateFood.capital}</span>
                    <h2 className="state-food-title">The Flavours of {activeStateFood.state}</h2>
                  </div>
                  <span className="state-dish-count">{activeStateFood.dishes.length} Signature Dishes</span>
                </div>

                <div className="dishes-list-grid">
                  {activeStateFood.dishes.map((dish, i) => (
                    <div key={i} className="dish-card">
                      <div className="dish-card-top">
                        <h4 className="dish-name">{dish.name}</h4>
                        <span className={`dish-type-badge ${dish.type.toLowerCase().includes('non') ? 'badge-nonveg' : 'badge-veg'}`}>
                          {dish.type}
                        </span>
                      </div>
                      <p className="dish-desc">{dish.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        .food-hero-header {
          padding: 5rem 0 2.5rem 0;
          background: linear-gradient(180deg, rgba(254, 246, 238, 0.9) 0%, rgba(254, 236, 226, 0.95) 60%, rgba(250, 228, 218, 0.85) 100%);
          border-bottom: 1px solid rgba(200, 109, 109, 0.18);
          text-align: center;
        }
        .food-header-content {
          max-width: 820px;
          margin: 0 auto 2.5rem auto;
        }
        .food-main-title {
          font-size: clamp(2rem, 4vw, 3.2rem);
          color: var(--color-green-deep);
          margin-bottom: 0.5rem;
        }
        .food-subtitle {
          font-family: var(--font-quote);
          font-size: 1.45rem;
          color: var(--color-rose-deep);
          font-style: italic;
        }
        .main-food-toggle {
          display: inline-flex;
          background: #ffffff;
          padding: 0.4rem;
          border-radius: var(--radius-pill);
          border: 1px solid var(--color-cream-darker);
          box-shadow: var(--shadow-sm);
          gap: 0.35rem;
        }
        .food-toggle-btn {
          padding: 0.75rem 1.6rem;
          border-radius: var(--radius-pill);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-brown-mid);
          transition: all 0.2s ease;
        }
        .food-toggle-btn.active {
          background: var(--color-green-deep);
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(26, 56, 38, 0.25);
        }
        .state-food-picker {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
          justify-content: center;
          margin-bottom: 2.5rem;
        }
        .state-food-chip {
          padding: 0.55rem 1.25rem;
          border-radius: var(--radius-pill);
          font-size: 0.88rem;
          font-weight: 500;
          background: #ffffff;
          border: 1px solid var(--color-cream-darker);
          color: var(--color-brown-mid);
          transition: all 0.2s ease;
        }
        .state-food-chip:hover {
          border-color: var(--color-rose-primary);
          color: var(--color-rose-deep);
        }
        .state-food-chip.active {
          background: var(--color-rose-soft);
          color: var(--color-rose-deep);
          border-color: var(--color-rose-primary);
          font-weight: 700;
        }
        .state-food-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          padding: 2.5rem;
          border: 1px solid var(--color-rose-border);
          box-shadow: var(--shadow-md);
        }
        .state-food-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid var(--color-cream-darker);
          padding-bottom: 1.5rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .state-capital-tag {
          font-size: 0.85rem;
          color: var(--color-rose-deep);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .state-food-title {
          font-size: 2.2rem;
          color: var(--color-green-deep);
        }
        .state-dish-count {
          background: var(--color-cream-subtle);
          color: var(--color-brown-deep);
          font-size: 0.85rem;
          font-weight: 700;
          padding: 0.35rem 0.95rem;
          border-radius: var(--radius-pill);
        }
        .dishes-list-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
          gap: 1.5rem;
        }
        .dish-card {
          background: var(--color-cream-subtle);
          border-radius: var(--radius-md);
          padding: 1.35rem;
          border: 1px solid var(--color-cream-darker);
          transition: transform 0.2s ease;
        }
        .dish-card:hover {
          transform: translateY(-3px);
          background: #ffffff;
          border-color: var(--color-rose-border);
        }
        .dish-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .dish-name {
          font-size: 1.15rem;
          color: var(--color-green-deep);
        }
        .dish-type-badge {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-pill);
          white-space: nowrap;
        }
        .badge-veg {
          background: #e8efe9;
          color: #234d35;
        }
        .badge-nonveg {
          background: #fbeeed;
          color: #a85252;
        }
        .dish-desc {
          font-size: 0.88rem;
          color: var(--color-brown-mid);
          line-height: 1.55;
          margin: 0;
        }

        @media (max-width: 768px) {
          .food-hero-header {
            padding: 3.5rem 0 2rem 0;
          }
          .food-main-title {
            font-size: 2.2rem;
          }
          .food-subtitle {
            font-size: 1.25rem;
          }
          .main-food-toggle {
            width: 100%;
            max-width: 360px;
          }
          .food-toggle-btn {
            flex: 1;
            padding: 0.65rem 0.75rem;
            font-size: 0.85rem;
            text-align: center;
          }
          .state-food-card {
            padding: 1.35rem;
          }
          .state-food-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
            margin-bottom: 1.25rem;
          }
          .state-food-title {
            font-size: 1.75rem;
          }
          .dishes-list-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .food-hero-header {
            padding: 2.75rem 0 1.5rem 0;
          }
          .food-main-title {
            font-size: 1.85rem;
          }
          .food-subtitle {
            font-size: 1.15rem;
          }
          .state-food-chip {
            padding: 0.45rem 0.95rem;
            font-size: 0.8rem;
          }
          .state-food-card {
            padding: 1rem;
          }
          .dish-card {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
};
