import React from 'react';
import { MapPin, Calendar, Clock, DollarSign, ArrowRight } from 'lucide-react';

export const StateCard = ({ stateData, onSelectState }) => {
  return (
    <div className="card state-card" onClick={() => onSelectState(stateData)}>
      <div className="state-card-image-wrap">
        <img
          src={stateData.image}
          alt={stateData.name}
          loading="lazy"
          className="state-card-img"
          onError={(e) => {
            e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Complex_of_Virupaksha_Temple%2C_Hampi_%2804%29.jpg/1280px-Complex_of_Virupaksha_Temple%2C_Hampi_%2804%29.jpg';
          }}
        />
        <span className="state-region-badge">{stateData.region}</span>
      </div>

      <div className="state-card-content">
        <div className="state-title-row">
          <h3 className="state-name">{stateData.name}</h3>
          <span className="state-capital">
            <MapPin size={12} className="text-rose" />
            {stateData.capital}
          </span>
        </div>

        <p className="state-short-desc">
          {stateData.description}
        </p>

        {/* Highlights Section */}
        <div className="state-highlights-grid">
          <div className="highlight-item">
            <span className="highlight-tag">Places:</span>
            <span className="highlight-text">{stateData.famousPlaces?.slice(0, 3).join(', ')}...</span>
          </div>

          <div className="highlight-item">
            <span className="highlight-tag">Food:</span>
            <span className="highlight-text">{stateData.famousFood?.slice(0, 3).join(', ')}...</span>
          </div>
        </div>

        {/* Meta Pills */}
        <div className="state-meta-row">
          <div className="state-meta-pill">
            <Calendar size={12} color="#cfa144" />
            <span>{stateData.bestSeason.split('(')[0]}</span>
          </div>
          <div className="state-meta-pill">
            <Clock size={12} color="#234d35" />
            <span>{stateData.suggestedDays}</span>
          </div>
          <div className="state-meta-pill">
            <DollarSign size={12} color="#c86d6d" />
            <span>{stateData.budgetCategory.split(' ')[0]}</span>
          </div>
        </div>

        <button className="btn btn-outline btn-sm state-explore-btn">
          <span>Explore {stateData.name}</span>
          <ArrowRight size={14} />
        </button>
      </div>

      <style>{`
        .state-card {
          cursor: pointer;
          background: #ffffff;
          transition: all 0.3s ease;
        }
        .state-card-image-wrap {
          position: relative;
          height: 180px;
          overflow: hidden;
          background: var(--color-green-deep);
        }
        .state-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .state-card:hover .state-card-img {
          transform: scale(1.06);
        }
        .state-region-badge {
          position: absolute;
          top: 0.8rem;
          left: 0.8rem;
          background: rgba(26, 56, 38, 0.88);
          color: #ffffff;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-pill);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          backdrop-filter: blur(4px);
        }
        .state-card-content {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .state-title-row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 0.4rem;
        }
        .state-name {
          font-size: 1.35rem;
          color: var(--color-green-deep);
        }
        .state-capital {
          font-size: 0.8rem;
          color: var(--color-brown-muted);
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .state-short-desc {
          font-size: 0.85rem;
          color: var(--color-brown-mid);
          line-height: 1.5;
          margin-bottom: 0.85rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .state-highlights-grid {
          background: var(--color-cream-subtle);
          padding: 0.65rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          margin-bottom: 0.85rem;
        }
        .highlight-item {
          display: flex;
          gap: 0.4rem;
          line-height: 1.35;
        }
        .highlight-tag {
          font-weight: 700;
          color: var(--color-green-deep);
          min-width: 48px;
        }
        .highlight-text {
          color: var(--color-brown-mid);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .state-meta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.1rem;
          margin-top: auto;
        }
        .state-meta-pill {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          background: var(--color-cream-bg);
          border: 1px solid var(--color-cream-darker);
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-pill);
          font-size: 0.75rem;
          color: var(--color-brown-mid);
        }
        .state-explore-btn {
          width: 100%;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};
