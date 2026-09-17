import React from 'react';
import { useBucketList } from '../context/BucketListContext';
import { MapPin, Clock, Calendar, ExternalLink, Heart, Star, CheckCircle, ArrowRight } from 'lucide-react';

export const DestinationCard = ({ item, onOpenDetails }) => {
  const { getItemStatus, setItemStatus } = useBucketList();

  const currentStatus = getItemStatus(item.id);
  const title = item.name || item.title;
  const mapsSearchQuery = item.mapsQuery || `${title} ${item.location || item.city || item.state || 'Bengaluru'}`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsSearchQuery)}`;

  const toggleBucketList = (e) => {
    e.stopPropagation();
    if (!currentStatus) {
      setItemStatus(item, 'want_to_visit');
    } else if (currentStatus === 'want_to_visit') {
      setItemStatus(item, 'must_visit');
    } else if (currentStatus === 'must_visit') {
      setItemStatus(item, 'visited');
    } else {
      setItemStatus(item, null);
    }
  };

  return (
    <div className="card destination-card" onClick={() => onOpenDetails(item)}>
      {/* Image Container */}
      <div className="card-image-wrap">
        <img
          src={item.image}
          alt={title}
          loading="lazy"
          className="card-img"
          onError={(e) => {
            e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Bangalore_Mysore_Maharaja_Palace.jpg';
          }}
        />

        {/* Category Tag */}
        <span className="card-badge">
          {item.category || item.tag || 'Explore'}
        </span>

        {/* Quick Bucket List Status Icon Button */}
        <button
          className={`card-heart-btn ${currentStatus ? `active-${currentStatus}` : ''}`}
          onClick={toggleBucketList}
          title={
            currentStatus === 'visited'
              ? 'Visited together! Click to reset'
              : currentStatus === 'must_visit'
              ? '⭐ Must Visit! Click to mark Visited'
              : currentStatus === 'want_to_visit'
              ? '❤️ Want to Visit! Click for Must Visit'
              : 'Add to Our Bucket List'
          }
          aria-label="Toggle bucket list status"
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

      {/* Card Content */}
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          {(item.location || item.city) && (
            <div className="card-location">
              <MapPin size={14} className="text-rose" />
              <span>{item.location || `${item.city}, ${item.state}`}</span>
            </div>
          )}
        </div>

        <p className="card-description">
          {item.shortDescription || item.description?.substring(0, 130) + '...'}
        </p>

        {/* Metadata Badges */}
        <div className="card-meta-list">
          {(item.distanceFromCentre || item.distanceFromBengaluru || item.distanceFromBlr) && (
            <div className="card-meta-item">
              <span className="meta-label">Distance:</span>
              <span className="meta-val">{item.distanceFromCentre || item.distanceFromBengaluru || item.distanceFromBlr}</span>
            </div>
          )}
          {(item.estimatedDuration || item.idealDuration) && (
            <div className="card-meta-item">
              <Clock size={13} className="text-rose" />
              <span>{item.estimatedDuration || item.idealDuration}</span>
            </div>
          )}
          {item.bestTime && (
            <div className="card-meta-item">
              <Calendar size={13} className="text-gold" />
              <span>{item.bestTime.split('(')[0]}</span>
            </div>
          )}
        </div>

        {/* Action Buttons Row */}
        <div className="card-actions-row">
          <button
            className="btn btn-outline btn-sm card-action-btn"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(item);
            }}
          >
            <span>View Details</span>
            <ArrowRight size={14} />
          </button>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm card-map-btn"
            onClick={(e) => e.stopPropagation()}
            title="Open in Google Maps"
          >
            <ExternalLink size={14} />
            <span>Map</span>
          </a>
        </div>
      </div>

      <style>{`
        .destination-card {
          cursor: pointer;
          height: 100%;
          border: 1px solid rgba(50, 37, 30, 0.08);
          background: #ffffff;
        }
        .card-image-wrap {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: var(--color-green-deep);
        }
        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .destination-card:hover .card-img {
          transform: scale(1.06);
        }
        .card-badge {
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
        .card-heart-btn {
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
          transition: all 0.2s ease;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .card-heart-btn:hover {
          transform: scale(1.15);
          background: rgba(0, 0, 0, 0.7);
        }
        .card-heart-btn.active-want_to_visit {
          background: #ffffff;
        }
        .card-heart-btn.active-must_visit {
          background: #ffffff;
          border-color: var(--color-gold-accent);
        }
        .card-heart-btn.active-visited {
          background: var(--color-green-deep);
          border-color: var(--color-green-deep);
        }
        .card-content {
          padding: 1.4rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .card-header {
          margin-bottom: 0.65rem;
        }
        .card-title {
          font-size: 1.25rem;
          color: var(--color-green-deep);
          margin-bottom: 0.25rem;
        }
        .card-location {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.82rem;
          color: var(--color-brown-muted);
        }
        .card-description {
          font-size: 0.9rem;
          color: var(--color-brown-mid);
          line-height: 1.55;
          margin-bottom: 1.1rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .card-meta-list {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          padding: 0.75rem 0.85rem;
          background: var(--color-cream-bg);
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          color: var(--color-brown-mid);
          margin-bottom: 1.25rem;
          margin-top: auto;
        }
        .card-meta-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .meta-label {
          font-weight: 600;
          color: var(--color-brown-deep);
        }
        .meta-val {
          color: var(--color-brown-muted);
        }
        .card-actions-row {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }
        .card-action-btn {
          flex: 1;
        }
        .card-map-btn {
          padding: 0.5rem 0.85rem;
        }
      `}</style>
    </div>
  );
};
