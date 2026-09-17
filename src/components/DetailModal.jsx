import React from 'react';
import { useBucketList } from '../context/BucketListContext';
import { X, MapPin, Clock, Calendar, Compass, Heart, Star, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';

export const DetailModal = ({ item, onClose }) => {
  const { getItemStatus, setItemStatus, getItemNote, setItemNote } = useBucketList();

  if (!item) return null;

  const currentStatus = getItemStatus(item.id);
  const currentNote = getItemNote(item.id);
  const [noteInput, setNoteInput] = React.useState(currentNote);
  const [isEditingNote, setIsEditingNote] = React.useState(false);

  const title = item.name || item.title;
  const mapsSearchQuery = item.mapsQuery || `${title} ${item.location || item.city || item.state || 'India'}`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsSearchQuery)}`;

  const handleSaveNote = () => {
    setItemNote(item.id, noteInput);
    setIsEditingNote(false);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animate-fade-in" onClick={(e) => e.stopPropagation()}>
        {/* Header Image */}
        <div className="modal-image-wrapper">
          <img src={item.image} alt={title} className="modal-img" />
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
          <div className="modal-tag-overlay">
            {item.category || item.tag || item.region || item.state || 'Destination'}
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <div className="modal-header-row">
            <div>
              <h2 className="modal-title">{title}</h2>
              {(item.location || item.city || item.state) && (
                <div className="modal-location">
                  <MapPin size={16} className="text-rose" />
                  <span>{item.location || `${item.city}, ${item.state}`}</span>
                </div>
              )}
            </div>

            {/* Quick Map Link */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              title="Open Google Maps"
            >
              <ExternalLink size={15} />
              <span>Google Maps</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="modal-metrics-grid">
            {item.distanceFromCentre && (
              <div className="metric-pill">
                <Compass size={14} className="text-green" />
                <span>{item.distanceFromCentre}</span>
              </div>
            )}
            {item.distanceFromBengaluru && (
              <div className="metric-pill">
                <Compass size={14} className="text-green" />
                <span>{item.distanceFromBengaluru} from Bengaluru</span>
              </div>
            )}
            {item.distanceFromBlr && (
              <div className="metric-pill">
                <Compass size={14} className="text-green" />
                <span>{item.distanceFromBlr}</span>
              </div>
            )}
            {item.estimatedDuration && (
              <div className="metric-pill">
                <Clock size={14} className="text-rose" />
                <span>Visit Duration: {item.estimatedDuration}</span>
              </div>
            )}
            {item.idealDuration && (
              <div className="metric-pill">
                <Clock size={14} className="text-rose" />
                <span>Ideal Trip: {item.idealDuration}</span>
              </div>
            )}
            {item.bestTime && (
              <div className="metric-pill">
                <Calendar size={14} className="text-gold" />
                <span>Best Time: {item.bestTime}</span>
              </div>
            )}
          </div>

          {/* Descriptions */}
          <div className="modal-text-block">
            <p className="modal-description">
              {item.description || item.shortDescription || item.whyRomantic || item.caption}
            </p>
          </div>

          {/* History / Why Famous */}
          {item.history && (
            <div className="modal-info-box">
              <h4 className="info-box-title">Heritage & History</h4>
              <p>{item.history}</p>
            </div>
          )}

          {item.whyFamous && (
            <div className="modal-info-box">
              <h4 className="info-box-title">Why It Is Famous</h4>
              <p>{item.whyFamous}</p>
            </div>
          )}

          {/* Romantic Tip Box */}
          {(item.romanticTip || item.loveNote) && (
            <div className="romantic-quote-box">
              <div className="romantic-quote-header">
                <Heart size={16} fill="#c86d6d" color="#c86d6d" />
                <span>A Romantic Moment For Us</span>
              </div>
              <p className="romantic-quote-text">
                "{item.romanticTip || item.loveNote}"
              </p>
            </div>
          )}

          {/* Bucket List Action Bar */}
          <div className="modal-bucket-section">
            <h4 className="bucket-section-title">
              <Sparkles size={16} color="#cfa144" />
              <span>Add to Our Journey Bucket List</span>
            </h4>
            <div className="bucket-btn-group">
              <button
                className={`bucket-btn ${currentStatus === 'want_to_visit' ? 'active-want' : ''}`}
                onClick={() => setItemStatus(item, currentStatus === 'want_to_visit' ? null : 'want_to_visit')}
              >
                <Heart size={16} fill={currentStatus === 'want_to_visit' ? '#c86d6d' : 'none'} color="#c86d6d" />
                <span>Want to Visit</span>
              </button>

              <button
                className={`bucket-btn ${currentStatus === 'must_visit' ? 'active-must' : ''}`}
                onClick={() => setItemStatus(item, currentStatus === 'must_visit' ? null : 'must_visit')}
              >
                <Star size={16} fill={currentStatus === 'must_visit' ? '#dfb15b' : 'none'} color="#dfb15b" />
                <span>Must Visit</span>
              </button>

              <button
                className={`bucket-btn ${currentStatus === 'visited' ? 'active-visited' : ''}`}
                onClick={() => setItemStatus(item, currentStatus === 'visited' ? null : 'visited')}
              >
                <CheckCircle size={16} fill={currentStatus === 'visited' ? '#234d35' : 'none'} color={currentStatus === 'visited' ? '#ffffff' : '#234d35'} />
                <span>Visited!</span>
              </button>
            </div>
          </div>

          {/* Personal Love Note */}
          <div className="modal-note-section">
            <div className="note-header">
              <span className="note-title">💌 Our Personal Memory / Dream Note</span>
              {!isEditingNote && (
                <button className="note-edit-btn" onClick={() => setIsEditingNote(true)}>
                  {currentNote ? 'Edit Note' : '+ Add a Note'}
                </button>
              )}
            </div>

            {isEditingNote ? (
              <div className="note-edit-box">
                <textarea
                  value={noteInput}
                  onChange={(e) => setNoteInput(e.target.value)}
                  placeholder="Write a sweet memory or plan for when we visit together..."
                  rows={3}
                  className="note-textarea"
                />
                <div className="note-action-row">
                  <button className="btn btn-sm btn-secondary" onClick={() => setIsEditingNote(false)}>
                    Cancel
                  </button>
                  <button className="btn btn-sm btn-rose" onClick={handleSaveNote}>
                    Save Note
                  </button>
                </div>
              </div>
            ) : currentNote ? (
              <p className="note-display">"{currentNote}"</p>
            ) : (
              <p className="note-empty">No note added yet. Click above to leave a memory or plan for us!</p>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .modal-image-wrapper {
          position: relative;
          height: 280px;
          overflow: hidden;
          background: var(--color-green-deep);
        }
        .modal-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .modal-close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          color: var(--color-brown-deep);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .modal-close-btn:hover {
          background: #ffffff;
          transform: scale(1.1);
        }
        .modal-tag-overlay {
          position: absolute;
          bottom: 1rem;
          left: 1.5rem;
          background: rgba(26, 56, 38, 0.85);
          color: #ffffff;
          padding: 0.35rem 0.95rem;
          border-radius: var(--radius-pill);
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          backdrop-filter: blur(6px);
        }
        .modal-body {
          padding: 1.85rem;
        }
        .modal-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
        }
        .modal-title {
          font-size: 1.75rem;
          color: var(--color-green-deep);
          margin-bottom: 0.25rem;
        }
        .modal-location {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.92rem;
          color: var(--color-brown-muted);
        }
        .modal-metrics-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 1.5rem;
        }
        .metric-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.35rem 0.85rem;
          background: var(--color-cream-subtle);
          border: 1px solid var(--color-cream-darker);
          border-radius: var(--radius-pill);
          font-size: 0.82rem;
          color: var(--color-brown-mid);
          font-weight: 500;
        }
        .modal-text-block {
          margin-bottom: 1.5rem;
        }
        .modal-description {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--color-brown-deep);
        }
        .modal-info-box {
          background: #faf7f2;
          border-left: 3px solid var(--color-green-forest);
          padding: 1rem 1.25rem;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          margin-bottom: 1.25rem;
        }
        .info-box-title {
          font-size: 0.95rem;
          color: var(--color-green-deep);
          margin-bottom: 0.35rem;
        }
        .modal-info-box p {
          font-size: 0.9rem;
          color: var(--color-brown-mid);
        }
        .romantic-quote-box {
          background: var(--color-rose-soft);
          border: 1px dashed var(--color-rose-border);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          margin-bottom: 1.85rem;
        }
        .romantic-quote-header {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-rose-deep);
          margin-bottom: 0.4rem;
        }
        .romantic-quote-text {
          font-family: var(--font-quote);
          font-size: 1.15rem;
          font-style: italic;
          color: var(--color-brown-deep);
          line-height: 1.5;
        }
        .modal-bucket-section {
          border-top: 1px solid var(--color-cream-darker);
          padding-top: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .bucket-section-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1rem;
          color: var(--color-green-deep);
          margin-bottom: 1rem;
        }
        .bucket-btn-group {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }
        .bucket-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          padding: 0.7rem 0.9rem;
          border-radius: var(--radius-md);
          border: 1.5px solid var(--color-cream-darker);
          background: #ffffff;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-brown-mid);
          transition: all 0.2s ease;
        }
        .bucket-btn:hover {
          border-color: var(--color-rose-primary);
          transform: translateY(-2px);
        }
        .bucket-btn.active-want {
          background: var(--color-rose-soft);
          border-color: var(--color-rose-primary);
          color: var(--color-rose-deep);
        }
        .bucket-btn.active-must {
          background: var(--color-gold-light);
          border-color: var(--color-gold-accent);
          color: #8c6812;
        }
        .bucket-btn.active-visited {
          background: var(--color-green-deep);
          border-color: var(--color-green-deep);
          color: #ffffff;
        }
        .modal-note-section {
          background: #faf7f2;
          border-radius: var(--radius-md);
          padding: 1.25rem;
          border: 1px solid var(--color-cream-darker);
        }
        .note-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.65rem;
        }
        .note-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-green-deep);
        }
        .note-edit-btn {
          font-size: 0.82rem;
          color: var(--color-rose-deep);
          font-weight: 600;
        }
        .note-edit-btn:hover {
          text-decoration: underline;
        }
        .note-textarea {
          width: 100%;
          padding: 0.75rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-rose-border);
          font-family: var(--font-body);
          font-size: 0.9rem;
          background: #ffffff;
          resize: vertical;
          margin-bottom: 0.65rem;
        }
        .note-action-row {
          display: flex;
          justify-content: flex-end;
          gap: 0.5rem;
        }
        .note-display {
          font-family: var(--font-quote);
          font-size: 1.15rem;
          font-style: italic;
          color: var(--color-brown-deep);
        }
        .note-empty {
          font-size: 0.85rem;
          color: var(--color-brown-muted);
          font-style: italic;
        }
        @media (max-width: 600px) {
          .bucket-btn-group {
            grid-template-columns: 1fr;
          }
          .modal-image-wrapper {
            height: 200px;
          }
          .modal-body {
            padding: 1.25rem;
          }
          .modal-title {
            font-size: 1.45rem;
          }
        }
      `}</style>
    </div>
  );
};
