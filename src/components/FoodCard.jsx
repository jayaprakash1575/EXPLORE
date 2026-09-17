import React from 'react';
import { useBucketList } from '../context/BucketListContext';
import { MapPin, Utensils, Tag, ExternalLink, Heart, Sparkles } from 'lucide-react';

export const FoodCard = ({ food, onOpenDetails }) => {
  const { getItemStatus, setItemStatus } = useBucketList();

  const currentStatus = getItemStatus(food.id);
  const title = food.name;
  const mapsSearchQuery = food.mapsQuery || `${title} ${food.area} Bengaluru`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsSearchQuery)}`;

  const handleToggleBucket = (e) => {
    e.stopPropagation();
    if (!currentStatus) {
      setItemStatus({ ...food, type: 'food' }, 'want_to_visit');
    } else {
      setItemStatus(food, null);
    }
  };

  return (
    <div className="card food-card" onClick={() => onOpenDetails(food)}>
      <div className="food-img-wrapper">
        <img
          src={food.image}
          alt={title}
          loading="lazy"
          className="food-img"
          onError={(e) => {
            e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Vidyarthi_Bhavan_Masala_Dosa.jpg/1280px-Vidyarthi_Bhavan_Masala_Dosa.jpg';
          }}
        />
        <span className="food-badge">{food.type || food.category}</span>

        <button
          className={`food-bucket-btn ${currentStatus ? 'active' : ''}`}
          onClick={handleToggleBucket}
          title={currentStatus ? 'Saved to Food Dreams' : 'Save to Food Bucket List'}
          aria-label="Toggle food bucket list"
        >
          <Heart size={16} fill={currentStatus ? '#c86d6d' : 'none'} color={currentStatus ? '#c86d6d' : '#ffffff'} />
        </button>
      </div>

      <div className="food-card-body">
        <div className="food-header">
          <h3 className="food-name">{title}</h3>
          <div className="food-area">
            <MapPin size={13} className="text-rose" />
            <span>{food.area}</span>
          </div>
        </div>

        {/* Food to Try Box */}
        <div className="food-to-try-box">
          <div className="food-label">
            <Utensils size={13} color="#234d35" />
            <span>Signature Bites To Try:</span>
          </div>
          <p className="food-dishes">{food.foodToTry}</p>
        </div>

        {/* Pricing and Romantic Note */}
        <div className="food-meta-row">
          <div className="food-price">
            <Tag size={12} color="#cfa144" />
            <span>{food.priceRange}</span>
          </div>
        </div>

        {food.romanticTip && (
          <div className="food-romantic-tip">
            <Sparkles size={13} color="#c86d6d" />
            <span>"{food.romanticTip}"</span>
          </div>
        )}

        <div className="food-action-row">
          <button
            className="btn btn-outline btn-sm food-detail-btn"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(food);
            }}
          >
            <span>Story & Details</span>
          </button>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            onClick={(e) => e.stopPropagation()}
            title="Open in Google Maps"
          >
            <ExternalLink size={14} />
            <span>Directions</span>
          </a>
        </div>
      </div>

      <style>{`
        .food-card {
          cursor: pointer;
          background: #ffffff;
        }
        .food-img-wrapper {
          position: relative;
          height: 190px;
          overflow: hidden;
          background: var(--color-green-deep);
        }
        .food-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .food-card:hover .food-img {
          transform: scale(1.05);
        }
        .food-badge {
          position: absolute;
          top: 0.8rem;
          left: 0.8rem;
          background: rgba(35, 77, 53, 0.9);
          color: #ffffff;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-pill);
          font-size: 0.75rem;
          font-weight: 600;
          backdrop-filter: blur(4px);
        }
        .food-bucket-btn {
          position: absolute;
          top: 0.8rem;
          right: 0.8rem;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.2s ease;
        }
        .food-bucket-btn.active {
          background: #ffffff;
        }
        .food-card-body {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .food-header {
          margin-bottom: 0.75rem;
        }
        .food-name {
          font-size: 1.2rem;
          color: var(--color-green-deep);
          margin-bottom: 0.2rem;
        }
        .food-area {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.82rem;
          color: var(--color-brown-muted);
        }
        .food-to-try-box {
          background: var(--color-cream-subtle);
          padding: 0.75rem 0.85rem;
          border-radius: var(--radius-sm);
          margin-bottom: 0.85rem;
          border-left: 2px solid var(--color-green-forest);
        }
        .food-label {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--color-green-deep);
          margin-bottom: 0.25rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .food-dishes {
          font-size: 0.85rem;
          color: var(--color-brown-mid);
          line-height: 1.45;
          margin: 0;
        }
        .food-meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.65rem;
        }
        .food-price {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          color: var(--color-brown-muted);
          font-weight: 600;
        }
        .food-romantic-tip {
          font-family: var(--font-quote);
          font-style: italic;
          font-size: 0.95rem;
          color: var(--color-rose-deep);
          line-height: 1.35;
          margin-bottom: 1rem;
          display: flex;
          align-items: flex-start;
          gap: 0.35rem;
        }
        .food-action-row {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-top: auto;
        }
        .food-detail-btn {
          flex: 1;
        }
      `}</style>
    </div>
  );
};
