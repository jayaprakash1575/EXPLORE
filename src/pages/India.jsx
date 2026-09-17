import React, { useState } from 'react';
import { StateCard } from '../components/StateCard';
import { INDIAN_STATES } from '../data/states';
import { REGIONS_DATA } from '../data/india';
import { MapPin, Compass, Calendar, Clock, DollarSign, X, ExternalLink, Heart, Sparkles } from 'lucide-react';

export const India = () => {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [activeStateModal, setActiveStateModal] = useState(null);

  const regions = ['All', 'South India', 'North India', 'West India', 'East India', 'Northeast India'];

  const filteredStates = selectedRegion === 'All'
    ? INDIAN_STATES
    : INDIAN_STATES.filter((s) => s.region === selectedRegion);

  const regionInfoKey = selectedRegion.toLowerCase().replace(' ', '-');
  const activeRegionData = REGIONS_DATA[regionInfoKey];

  return (
    <div className="india-page animate-fade-in">
      {/* Hero Header */}
      <section className="india-hero-header">
        <div className="container">
          <div className="india-header-content">
            <span className="section-tag">
              <span className="flag-icon">🇮🇳</span>
              The Great Adventure
            </span>
            <h1 className="india-main-title">Now... Let's Explore India 🇮🇳</h1>
            <p className="india-subtitle">"One city was only the beginning."</p>
            <p className="india-intro">
              From the coral atolls of the Andaman Sea and backwaters of Kerala to the frozen passes of Ladakh and the floating root bridges of Meghalaya. An entire subcontinent of wonder waiting for us.
            </p>
          </div>

          {/* Region Tabs */}
          <div className="filter-tabs">
            {regions.map((reg) => (
              <button
                key={reg}
                className={`filter-tab ${selectedRegion === reg ? 'active' : ''}`}
                onClick={() => setSelectedRegion(reg)}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Region Banner if specific region selected */}
      {activeRegionData && (
        <section className="region-spotlight-section">
          <div className="container">
            <div className="region-spotlight-card">
              <img src={activeRegionData.bannerImage} alt={activeRegionData.name} className="region-banner-img" />
              <div className="region-banner-overlay">
                <span className="region-spotlight-tag">Regional Highlight</span>
                <h2 className="region-spotlight-title">{activeRegionData.name}</h2>
                <p className="region-spotlight-tagline">"{activeRegionData.tagline}"</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* States Grid */}
      <div className="container section-padding">
        <div className="states-header-bar">
          <div>
            <h2 className="section-title">
              {selectedRegion === 'All' ? 'Indian States & Union Territories' : `${selectedRegion} States`}
            </h2>
            <p className="section-subtitle">
              Click any state card to uncover famous cities, royal temples, and culinary icons.
            </p>
          </div>
          <span className="states-count-badge">{filteredStates.length} States</span>
        </div>

        <div className="grid-3">
          {filteredStates.map((state) => (
            <StateCard
              key={state.id}
              stateData={state}
              onSelectState={(st) => setActiveStateModal(st)}
            />
          ))}
        </div>
      </div>

      {/* State Detail Modal */}
      {activeStateModal && (
        <div className="modal-overlay" onClick={() => setActiveStateModal(null)}>
          <div className="modal-content state-detail-modal animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <div className="modal-image-wrapper">
              <img src={activeStateModal.image} alt={activeStateModal.name} className="modal-img" />
              <button className="modal-close-btn" onClick={() => setActiveStateModal(null)}>
                <X size={20} />
              </button>
              <div className="modal-tag-overlay">{activeStateModal.region}</div>
            </div>

            <div className="modal-body">
              <div className="state-modal-header">
                <div>
                  <h2 className="modal-title">{activeStateModal.name}</h2>
                  <div className="modal-location">
                    <MapPin size={16} className="text-rose" />
                    <span>Capital: {activeStateModal.capital}</span>
                  </div>
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeStateModal.name + ' India')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <ExternalLink size={14} />
                  <span>Google Maps</span>
                </a>
              </div>

              {/* Metrics */}
              <div className="modal-metrics-grid">
                <div className="metric-pill">
                  <Calendar size={14} className="text-gold" />
                  <span>Best Season: {activeStateModal.bestSeason}</span>
                </div>
                <div className="metric-pill">
                  <Clock size={14} className="text-green" />
                  <span>Suggested Days: {activeStateModal.suggestedDays}</span>
                </div>
                <div className="metric-pill">
                  <DollarSign size={14} className="text-rose" />
                  <span>Budget: {activeStateModal.budgetCategory}</span>
                </div>
              </div>

              <p className="modal-description">{activeStateModal.description}</p>

              {/* Romantic Highlight */}
              {activeStateModal.romanticHighlight && (
                <div className="romantic-quote-box">
                  <div className="romantic-quote-header">
                    <Heart size={15} fill="#c86d6d" color="#c86d6d" />
                    <span>A Romantic Moment in {activeStateModal.name}</span>
                  </div>
                  <p className="romantic-quote-text">"{activeStateModal.romanticHighlight}"</p>
                </div>
              )}

              {/* Three Detail Columns */}
              <div className="state-details-columns">
                <div className="state-detail-box">
                  <h4 className="detail-box-title">🏛️ Famous Places</h4>
                  <ul className="detail-pill-list">
                    {activeStateModal.famousPlaces.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>

                <div className="state-detail-box">
                  <h4 className="detail-box-title">🛕 Famous Temples</h4>
                  <ul className="detail-pill-list">
                    {activeStateModal.famousTemples.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>

                <div className="state-detail-box">
                  <h4 className="detail-box-title">🍛 Signature Food</h4>
                  <ul className="detail-pill-list">
                    {activeStateModal.famousFood.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .india-hero-header {
          padding: 5rem 0 2.5rem 0;
          background: linear-gradient(180deg, rgba(254, 246, 238, 0.9) 0%, rgba(254, 236, 226, 0.95) 60%, rgba(250, 228, 218, 0.85) 100%);
          border-bottom: 1px solid rgba(200, 109, 109, 0.18);
          text-align: center;
        }
        .india-header-content {
          max-width: 820px;
          margin: 0 auto 2.5rem auto;
        }
        .india-main-title {
          font-size: clamp(2.4rem, 4.5vw, 3.6rem);
          color: var(--color-green-deep);
          margin-bottom: 0.5rem;
        }
        .india-subtitle {
          font-family: var(--font-quote);
          font-size: 1.5rem;
          color: var(--color-rose-deep);
          font-style: italic;
          margin-bottom: 1rem;
        }
        .india-intro {
          font-size: 1rem;
          color: var(--color-brown-mid);
          line-height: 1.7;
        }
        .region-spotlight-section {
          padding: 2.5rem 0 0 0;
        }
        .region-spotlight-card {
          position: relative;
          height: 280px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }
        .region-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .region-banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(26, 56, 38, 0.4) 0%, rgba(26, 56, 38, 0.9) 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2.5rem;
          color: #ffffff;
        }
        .region-spotlight-tag {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-gold-accent);
          margin-bottom: 0.35rem;
        }
        .region-spotlight-title {
          font-size: 2.2rem;
          color: #ffffff;
          margin-bottom: 0.35rem;
        }
        .region-spotlight-tagline {
          font-family: var(--font-quote);
          font-style: italic;
          font-size: 1.25rem;
          color: #d2e4d7;
        }
        .states-header-bar {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 2.5rem;
          border-bottom: 1px solid var(--color-cream-darker);
          padding-bottom: 1rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .states-count-badge {
          background: var(--color-green-light);
          color: var(--color-green-deep);
          font-size: 0.85rem;
          font-weight: 700;
          padding: 0.35rem 0.95rem;
          border-radius: var(--radius-pill);
        }
        .state-details-columns {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-top: 1.5rem;
        }
        .state-detail-box {
          background: var(--color-cream-subtle);
          padding: 1rem;
          border-radius: var(--radius-sm);
        }
        .detail-box-title {
          font-size: 0.9rem;
          color: var(--color-green-deep);
          margin-bottom: 0.65rem;
        }
        .detail-pill-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .detail-pill-list li {
          font-size: 0.82rem;
          color: var(--color-brown-mid);
          background: #ffffff;
          padding: 0.35rem 0.65rem;
          border-radius: 4px;
          border: 1px solid var(--color-cream-darker);
        }
        @media (max-width: 900px) {
          .state-details-columns {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 768px) {
          .india-hero-header {
            padding: 3.5rem 0 2rem 0;
          }
          .region-spotlight-banner {
            padding: 1.5rem 1.25rem;
          }
          .region-spotlight-title {
            font-size: 1.7rem;
          }
          .region-spotlight-tagline {
            font-size: 1.05rem;
          }
          .states-header-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
          .state-modal-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.85rem;
          }
        }
        @media (max-width: 480px) {
          .india-hero-header {
            padding: 2.75rem 0 1.5rem 0;
          }
          .india-main-title {
            font-size: 1.85rem;
          }
          .india-subtitle {
            font-size: 1.2rem;
          }
          .india-intro {
            font-size: 0.92rem;
          }
        }
      `}</style>
    </div>
  );
};
