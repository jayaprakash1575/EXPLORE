import React, { useState, useEffect, useRef } from 'react';
import { Search, X, MapPin, Utensils, Sparkles, ExternalLink, ArrowRight, Heart } from 'lucide-react';
import { BENGALURU_PLACES, BENGALURU_TEMPLES, BENGALURU_WEEKEND_TRIPS } from '../data/bengaluru';
import { JYOTIRLINGAS, MAJOR_INDIA_TEMPLES } from '../data/temples';
import { BENGALURU_FOOD_PLACES, INDIA_FOOD_BY_STATE } from '../data/food';
import { INDIAN_STATES } from '../data/states';
import { ROMANTIC_PLACES } from '../data/romanticPlaces';

export const GlobalSearchModal = ({ isOpen, onClose, onSelectResult }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onSelectResult(null, 'open_search');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onSelectResult]);

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  // Search Results Gathering
  const results = [];

  if (cleanQuery.length >= 2) {
    // 1. Bengaluru Places & Weekend Trips
    [...BENGALURU_PLACES, ...BENGALURU_WEEKEND_TRIPS].forEach((p) => {
      if (
        p.name.toLowerCase().includes(cleanQuery) ||
        p.location?.toLowerCase().includes(cleanQuery) ||
        p.shortDescription?.toLowerCase().includes(cleanQuery) ||
        p.thingsToDo?.toLowerCase().includes(cleanQuery)
      ) {
        results.push({ ...p, searchCategory: 'Bengaluru Place & Weekend Escapes' });
      }
    });

    // 2. Temples & Jyotirlingas
    [...BENGALURU_TEMPLES, ...JYOTIRLINGAS, ...MAJOR_INDIA_TEMPLES].forEach((t) => {
      if (
        t.name.toLowerCase().includes(cleanQuery) ||
        t.city?.toLowerCase().includes(cleanQuery) ||
        t.location?.toLowerCase().includes(cleanQuery) ||
        t.state?.toLowerCase().includes(cleanQuery) ||
        t.deity?.toLowerCase().includes(cleanQuery) ||
        t.whyFamous?.toLowerCase().includes(cleanQuery)
      ) {
        results.push({ ...t, searchCategory: 'Temples & Spiritual Destinations' });
      }
    });

    // 3. Food
    BENGALURU_FOOD_PLACES.forEach((f) => {
      if (
        f.name.toLowerCase().includes(cleanQuery) ||
        f.foodToTry.toLowerCase().includes(cleanQuery) ||
        f.area.toLowerCase().includes(cleanQuery) ||
        f.type.toLowerCase().includes(cleanQuery)
      ) {
        results.push({ ...f, searchCategory: 'Food Spots & Cuisines' });
      }
    });

    INDIA_FOOD_BY_STATE.forEach((s) => {
      s.dishes.forEach((d) => {
        if (
          d.name.toLowerCase().includes(cleanQuery) ||
          d.description.toLowerCase().includes(cleanQuery) ||
          s.state.toLowerCase().includes(cleanQuery)
        ) {
          const stateMatch = INDIAN_STATES.find(st => st.name.toLowerCase() === s.state.toLowerCase() || s.state.toLowerCase().includes(st.name.toLowerCase()));
          results.push({
            id: `food-state-${s.state}-${d.name}`,
            name: `${d.name} (${s.state})`,
            foodToTry: d.description,
            area: s.state,
            type: d.type,
            image: stateMatch ? stateMatch.image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Filter_kaapi.JPG/1280px-Filter_kaapi.JPG',
            searchCategory: 'India Food Specialties'
          });
        }
      });
    });

    // 4. Romantic couple escapes
    ROMANTIC_PLACES.forEach((r) => {
      if (
        r.name.toLowerCase().includes(cleanQuery) ||
        r.subtitle.toLowerCase().includes(cleanQuery) ||
        r.state.toLowerCase().includes(cleanQuery) ||
        r.whyRomantic.toLowerCase().includes(cleanQuery)
      ) {
        results.push({ ...r, searchCategory: 'Romantic Places' });
      }
    });

    // 5. States
    INDIAN_STATES.forEach((st) => {
      if (
        st.name.toLowerCase().includes(cleanQuery) ||
        st.capital.toLowerCase().includes(cleanQuery) ||
        st.famousPlaces.some((fp) => fp.toLowerCase().includes(cleanQuery)) ||
        st.famousFood.some((ff) => ff.toLowerCase().includes(cleanQuery))
      ) {
        results.push({
          id: st.id,
          name: `${st.name} (State)`,
          location: `Capital: ${st.capital}`,
          description: st.description,
          image: st.image,
          searchCategory: 'Indian States & Regions'
        });
      }
    });
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="search-modal-box animate-fade-in" onClick={(e) => e.stopPropagation()}>
        {/* Search Header Bar */}
        <div className="search-input-wrapper">
          <Search size={20} className="search-input-icon text-rose" />
          <input
            ref={inputRef}
            type="text"
            className="search-main-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a place, temple, food or city... (e.g. Kedarnath, Biryani, Munnar)"
          />
          {query && (
            <button className="search-clear-btn" onClick={() => setQuery('')}>
              <X size={16} />
            </button>
          )}
          <button className="search-esc-badge" onClick={onClose}>
            ESC
          </button>
        </div>

        {/* Search Results / Suggestions */}
        <div className="search-results-list">
          {cleanQuery.length < 2 ? (
            <div className="search-prompt-state">
              <Sparkles size={28} className="text-gold" />
              <p className="search-prompt-heading">What should we explore together today?</p>
              <div className="search-quick-tags">
                <span className="quick-tag" onClick={() => setQuery('Bengaluru Palace')}>Bengaluru Palace</span>
                <span className="quick-tag" onClick={() => setQuery('Kedarnath')}>Kedarnath</span>
                <span className="quick-tag" onClick={() => setQuery('Biryani')}>Biryani</span>
                <span className="quick-tag" onClick={() => setQuery('Udaipur')}>Udaipur</span>
                <span className="quick-tag" onClick={() => setQuery('Nandi Hills')}>Nandi Hills</span>
                <span className="quick-tag" onClick={() => setQuery('Munnar')}>Munnar</span>
                <span className="quick-tag" onClick={() => setQuery('Dosa')}>Dosa</span>
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="search-empty-state">
              <p>No places found for "{query}".</p>
              <span>Try searching for cities like "Goa", foods like "Kebab", or temples like "Somnath".</span>
            </div>
          ) : (
            <div className="search-results-container">
              <div className="search-results-count">
                Found {results.length} wonderful places for "{query}"
              </div>
              {results.slice(0, 15).map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="search-result-row"
                  onClick={() => {
                    onClose();
                    onSelectResult(item);
                  }}
                >
                  <img
                    src={item.image || 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Bangalore_Mysore_Maharaja_Palace.jpg'}
                    alt={item.name}
                    className="search-result-thumb"
                  />
                  <div className="search-result-info">
                    <div className="search-result-meta-tag">{item.searchCategory}</div>
                    <h4 className="search-result-title">{item.name}</h4>
                    <p className="search-result-snippet">
                      {item.foodToTry || item.location || item.city || item.shortDescription || item.description}
                    </p>
                  </div>
                  <div className="search-result-action">
                    <ArrowRight size={16} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        .search-modal-box {
          background: #ffffff;
          border-radius: var(--radius-lg);
          max-width: 680px;
          width: 100%;
          max-height: 80vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 50px rgba(26, 56, 38, 0.25);
          overflow: hidden;
          border: 1px solid var(--color-rose-border);
        }
        .search-input-wrapper {
          display: flex;
          align-items: center;
          padding: 1.1rem 1.4rem;
          border-bottom: 1px solid var(--color-cream-darker);
          gap: 0.75rem;
          background: #faf7f2;
        }
        .search-input-icon {
          flex-shrink: 0;
        }
        .search-main-input {
          flex-grow: 1;
          border: none;
          outline: none;
          background: transparent;
          font-family: var(--font-body);
          font-size: 1.05rem;
          color: var(--color-brown-deep);
        }
        .search-main-input::placeholder {
          color: var(--color-brown-muted);
          font-size: 0.95rem;
        }
        .search-clear-btn {
          color: var(--color-brown-muted);
          padding: 4px;
        }
        .search-esc-badge {
          background: var(--color-cream-subtle);
          border: 1px solid var(--color-cream-darker);
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--color-brown-muted);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }
        .search-results-list {
          overflow-y: auto;
          padding: 1.25rem;
          max-height: 58vh;
        }
        .search-prompt-state, .search-empty-state {
          text-align: center;
          padding: 2.5rem 1rem;
        }
        .search-prompt-heading {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          color: var(--color-green-deep);
          margin-top: 0.5rem;
          margin-bottom: 1.25rem;
        }
        .search-quick-tags {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
        }
        .quick-tag {
          background: #faf7f2;
          border: 1px solid var(--color-cream-darker);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-pill);
          font-size: 0.82rem;
          color: var(--color-brown-mid);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .quick-tag:hover {
          border-color: var(--color-rose-primary);
          color: var(--color-rose-deep);
          background: var(--color-rose-soft);
        }
        .search-results-count {
          font-size: 0.82rem;
          color: var(--color-brown-muted);
          margin-bottom: 0.85rem;
          padding-left: 0.5rem;
        }
        .search-result-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.2s ease;
          border: 1px solid transparent;
        }
        .search-result-row:hover {
          background: #faf7f2;
          border-color: var(--color-rose-border);
          transform: translateX(4px);
        }
        .search-result-thumb {
          width: 54px;
          height: 54px;
          border-radius: var(--radius-sm);
          object-fit: cover;
          flex-shrink: 0;
        }
        .search-result-info {
          flex-grow: 1;
          min-width: 0;
        }
        .search-result-meta-tag {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--color-rose-deep);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .search-result-title {
          font-size: 1rem;
          color: var(--color-green-deep);
          margin-bottom: 0.15rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .search-result-snippet {
          font-size: 0.82rem;
          color: var(--color-brown-mid);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin: 0;
        }
        .search-result-action {
          color: var(--color-brown-muted);
          padding: 0.5rem;
        }

        @media (max-width: 768px) {
          .search-modal-box {
            width: 94%;
            max-height: 85vh;
            border-radius: var(--radius-lg);
          }
          .search-input-wrapper {
            padding: 0.85rem 1rem;
          }
          .search-esc-badge {
            display: none;
          }
          .search-results-list {
            padding: 0.85rem;
          }
          .search-result-row {
            padding: 0.65rem 0.5rem;
            gap: 0.75rem;
          }
          .search-result-thumb {
            width: 46px;
            height: 46px;
          }
        }

        @media (max-width: 480px) {
          .search-modal-box {
            width: 96%;
          }
          .search-main-input {
            font-size: 0.95rem;
          }
          .quick-tag {
            font-size: 0.75rem;
            padding: 0.28rem 0.65rem;
          }
        }
      `}</style>
    </div>
  );
};
