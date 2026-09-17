import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/galleryData';
import { Camera, MapPin, X, Heart, Sparkles, ZoomIn } from 'lucide-react';

export const Gallery = ({ onOpenDetails }) => {
  const [selectedTag, setSelectedTag] = useState('All');
  const [lightboxItem, setLightboxItem] = useState(null);

  const tags = ['All', 'Romantic', 'Nature', 'Heritage', 'Temples', 'Sunsets'];

  const filteredItems = selectedTag === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.tag === selectedTag);

  return (
    <div className="gallery-page animate-fade-in">
      {/* Header */}
      <section className="gallery-hero-header">
        <div className="container">
          <div className="gallery-header-content">
            <span className="section-tag">
              <Camera size={14} color="#c86d6d" />
              Photo Memories Waiting For Us
            </span>
            <h1 className="gallery-main-title">"Places We Haven't Seen Yet"</h1>
            <p className="gallery-subtitle">
              A gallery of destinations we will one day stand in front of, together.
            </p>
          </div>

          <div className="filter-tabs">
            {tags.map((tag) => (
              <button
                key={tag}
                className={`filter-tab ${selectedTag === tag ? 'active' : ''}`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <div className="container section-padding">
        <div className="masonry-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`masonry-item ratio-${item.heightRatio}`}
              onClick={() => setLightboxItem(item)}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="masonry-overlay">
                <span className="masonry-tag">{item.tag}</span>
                <h3 className="masonry-title">{item.title}</h3>
                <p className="masonry-loc">
                  <MapPin size={12} className="text-rose" />
                  {item.location}
                </p>
                <div className="masonry-zoom-hint">
                  <ZoomIn size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="modal-overlay" onClick={() => setLightboxItem(null)}>
          <div className="lightbox-content animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={() => setLightboxItem(null)}>
              <X size={24} />
            </button>
            <img src={lightboxItem.image} alt={lightboxItem.title} className="lightbox-img" />
            <div className="lightbox-caption-box">
              <div className="lightbox-tag">{lightboxItem.tag}</div>
              <h2 className="lightbox-title">{lightboxItem.title}</h2>
              <p className="lightbox-loc">
                <MapPin size={14} className="text-rose" />
                {lightboxItem.location}
              </p>
              <p className="lightbox-caption">"{lightboxItem.caption}"</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-hero-header {
          padding: 5rem 0 2.5rem 0;
          background: linear-gradient(180deg, rgba(254, 246, 238, 0.9) 0%, rgba(254, 236, 226, 0.95) 60%, rgba(250, 228, 218, 0.85) 100%);
          border-bottom: 1px solid rgba(200, 109, 109, 0.18);
          text-align: center;
        }
        .gallery-header-content {
          max-width: 750px;
          margin: 0 auto 2.5rem auto;
        }
        .gallery-main-title {
          font-size: clamp(2.4rem, 4.5vw, 3.6rem);
          color: var(--color-green-deep);
          margin-bottom: 0.5rem;
        }
        .gallery-subtitle {
          font-family: var(--font-quote);
          font-size: 1.5rem;
          color: var(--color-rose-deep);
          font-style: italic;
        }
        .masonry-grid {
          columns: 3 320px;
          column-gap: 1.75rem;
        }
        .masonry-item {
          break-inside: avoid;
          margin-bottom: 1.75rem;
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          cursor: pointer;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--color-cream-darker);
          background: var(--color-green-deep);
        }
        .masonry-item img {
          width: 100%;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .masonry-item:hover img {
          transform: scale(1.06);
        }
        .masonry-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(26, 56, 38, 0.9) 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.5rem;
          color: #ffffff;
          opacity: 0.9;
          transition: opacity 0.3s ease;
        }
        .masonry-item:hover .masonry-overlay {
          opacity: 1;
        }
        .masonry-tag {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--color-gold-accent);
          margin-bottom: 0.25rem;
        }
        .masonry-title {
          font-size: 1.35rem;
          color: #ffffff;
          margin-bottom: 0.2rem;
        }
        .masonry-loc {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.82rem;
          color: #d2e4d7;
        }
        .masonry-zoom-hint {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(4px);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .masonry-item:hover .masonry-zoom-hint {
          opacity: 1;
        }

        /* Lightbox */
        .lightbox-content {
          position: relative;
          max-width: 900px;
          width: 100%;
          background: #ffffff;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
        }
        .lightbox-close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(0, 0, 0, 0.6);
          color: #ffffff;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }
        .lightbox-close-btn:hover {
          background: rgba(0, 0, 0, 0.9);
        }
        .lightbox-img {
          width: 100%;
          max-height: 65vh;
          object-fit: cover;
        }
        .lightbox-caption-box {
          padding: 1.75rem 2rem;
        }
        .lightbox-tag {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-rose-deep);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .lightbox-title {
          font-size: 1.85rem;
          color: var(--color-green-deep);
          margin-bottom: 0.25rem;
        }
        .lightbox-loc {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.88rem;
          color: var(--color-brown-muted);
          margin-bottom: 1rem;
        }
        .lightbox-caption {
          font-family: var(--font-quote);
          font-size: 1.35rem;
          font-style: italic;
          color: var(--color-brown-deep);
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};
