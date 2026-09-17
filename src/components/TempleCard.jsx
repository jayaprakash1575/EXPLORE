import React from 'react';
import { useBucketList } from '../context/BucketListContext';
import { MapPin, Calendar, Compass, ExternalLink, Heart, Star, CheckCircle, Sparkles } from 'lucide-react';

export const TempleCard = ({ temple, onOpenDetails, isJyotirlinga = false }) => {
  const { getItemStatus, setItemStatus } = useBucketList();

  const currentStatus = getItemStatus(temple.id);
  const title = temple.name;
  const mapsSearchQuery = temple.mapsQuery || `${title} ${temple.city || temple.location || temple.state}`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsSearchQuery)}`;

  const handleToggleBucket = (e) => {
    e.stopPropagation();
    if (!currentStatus) {
      setItemStatus({ ...temple, type: 'temple' }, 'want_to_visit');
    } else if (currentStatus === 'want_to_visit') {
      setItemStatus({ ...temple, type: 'temple' }, 'must_visit');
    } else if (currentStatus === 'must_visit') {
      setItemStatus({ ...temple, type: 'temple' }, 'visited');
    } else {
      setItemStatus(temple, null);
    }
  };

  return (
    <div className="card temple-card" onClick={() => onOpenDetails(temple)}>
      <div className="temple-img-wrapper">
        <img
          src={temple.image}
          alt={title}
          loading="lazy"
          className="temple-img"
          onError={(e) => {
            e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Somanath_mandir_%28cropped%29.jpg/1280px-Somanath_mandir_%28cropped%29.jpg';
          }}
        />
        {isJyotirlinga ? (
          <span className="temple-sacred-badge">
            <Sparkles size={13} color="#dfb15b" />
            <span>Sacred Jyotirlinga</span>
          </span>
        ) : (
          <span className="temple-badge">Spiritual Sanctuary</span>
        )}

        <button
          className={`temple-bucket-icon-btn ${currentStatus ? `active-${currentStatus}` : ''}`}
          onClick={handleToggleBucket}
          title={
            currentStatus === 'visited'
              ? 'Visited together!'
              : currentStatus === 'must_visit'
              ? '⭐ Must Visit!'
              : currentStatus === 'want_to_visit'
              ? '❤️ Want to Visit'
              : 'Add to Sacred Journey'
          }
          aria-label="Add temple to bucket list"
        >
          {currentStatus === 'visited' ? (
            <CheckCircle size={18} color="#ffffff" />
          ) : currentStatus === 'must_visit' ? (
            <Star size={18} fill="#dfb15b" color="#dfb15b" />
          ) : (
            <Heart
              size={18}
              fill={currentStatus === 'want_to_visit' ? '#c86d6d' : 'none'}
              color={currentStatus === 'want_to_visit' ? '#c86d6d' : '#ffffff'}
            />
          )}
        </button>
      </div>

      <div className="temple-card-body">
        <div className="temple-title-row">
          <h3 className="temple-name">{title}</h3>
          {temple.deity && <span className="temple-deity">{temple.deity}</span>}
        </div>

        <div className="temple-location-row">
          <MapPin size={14} className="text-rose" />
          <span>{temple.location || `${temple.city}, ${temple.state}`}</span>
        </div>

        <p className="temple-description">
          {temple.whyFamous || temple.significance || temple.history || temple.description}
        </p>

        <div className="temple-info-pills">
          {temple.bestTime && (
            <div className="temple-pill">
              <Calendar size={13} className="text-gold" />
              <span>{temple.bestTime.split('(')[0]}</span>
            </div>
          )}
          {temple.nearbyAttractions && (
            <div className="temple-pill">
              <Compass size={13} className="text-green" />
              <span>Near: {temple.nearbyAttractions.split(',')[0]}</span>
            </div>
          )}
          {temple.nearbyPlaces && (
            <div className="temple-pill">
              <Compass size={13} className="text-green" />
              <span>Near: {temple.nearbyPlaces.split(',')[0]}</span>
            </div>
          )}
        </div>

        <div className="temple-action-row">
          <button
            className={`btn btn-sm ${currentStatus ? 'btn-secondary' : 'btn-outline'} temple-add-btn`}
            onClick={handleToggleBucket}
          >
            <Heart size={14} fill={currentStatus ? '#c86d6d' : 'none'} color="#c86d6d" />
            <span>
              {currentStatus === 'visited'
                ? 'Visited ✅'
                : currentStatus === 'must_visit'
                ? 'Must Visit ⭐'
                : currentStatus === 'want_to_visit'
                ? 'Saved ❤️'
                : 'Add to My Journey'}
            </span>
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
            <span>Map</span>
          </a>
        </div>
      </div>

      <style>{`
        .temple-card {
          cursor: pointer;
          border: 1px solid rgba(223, 177, 91, 0.2);
          background: #ffffff;
        }
        .temple-img-wrapper {
          position: relative;
          height: 200px;
          overflow: hidden;
          background: var(--color-green-deep);
        }
        .temple-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .temple-card:hover .temple-img {
          transform: scale(1.05);
        }
        .temple-sacred-badge {
          position: absolute;
          top: 0.85rem;
          left: 0.85rem;
          background: rgba(30, 25, 18, 0.85);
          color: #dfb15b;
          border: 1px solid rgba(223, 177, 91, 0.5);
          padding: 0.3rem 0.8rem;
          border-radius: var(--radius-pill);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          backdrop-filter: blur(6px);
        }
        .temple-badge {
          position: absolute;
          top: 0.85rem;
          left: 0.85rem;
          background: rgba(26, 56, 38, 0.88);
          color: #ffffff;
          padding: 0.3rem 0.8rem;
          border-radius: var(--radius-pill);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          backdrop-filter: blur(6px);
        }
        .temple-bucket-icon-btn {
          position: absolute;
          top: 0.85rem;
          right: 0.85rem;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.2s ease;
        }
        .temple-bucket-icon-btn:hover {
          transform: scale(1.12);
        }
        .temple-bucket-icon-btn.active-want_to_visit {
          background: #ffffff;
        }
        .temple-bucket-icon-btn.active-must_visit {
          background: #ffffff;
          border-color: var(--color-gold-accent);
        }
        .temple-bucket-icon-btn.active-visited {
          background: var(--color-green-deep);
          border-color: var(--color-green-deep);
        }
        .temple-card-body {
          padding: 1.4rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .temple-title-row {
          margin-bottom: 0.3rem;
        }
        .temple-name {
          font-size: 1.25rem;
          color: var(--color-green-deep);
          line-height: 1.3;
        }
        .temple-deity {
          font-size: 0.82rem;
          color: var(--color-rose-deep);
          font-weight: 600;
        }
        .temple-location-row {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.82rem;
          color: var(--color-brown-muted);
          margin-bottom: 0.75rem;
        }
        .temple-description {
          font-size: 0.88rem;
          color: var(--color-brown-mid);
          line-height: 1.55;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .temple-info-pills {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          margin-bottom: 1.25rem;
          margin-top: auto;
        }
        .temple-pill {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.78rem;
          color: var(--color-brown-mid);
          background: var(--color-cream-subtle);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-sm);
        }
        .temple-action-row {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }
        .temple-add-btn {
          flex: 1;
        }
      `}</style>
    </div>
  );
};
