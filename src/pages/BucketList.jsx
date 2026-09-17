import React, { useState } from 'react';
import { useBucketList } from '../context/BucketListContext';
import { Heart, Star, CheckCircle, MapPin, Trash2, ExternalLink, Sparkles, MessageCircle, Edit3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BucketList = ({ onOpenDetails }) => {
  const { bucketList, stats, setItemStatus, getItemNote, setItemNote } = useBucketList();
  const [filterStatus, setFilterStatus] = useState('All');
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [noteDraft, setNoteDraft] = useState('');

  const items = Object.values(bucketList);

  const filteredItems = filterStatus === 'All'
    ? items
    : items.filter((item) => item.status === filterStatus);

  const handleStartEditNote = (item) => {
    setEditingNoteId(item.id);
    setNoteDraft(getItemNote(item.id));
  };

  const handleSaveNote = (id) => {
    setItemNote(id, noteDraft);
    setEditingNoteId(null);
  };

  return (
    <div className="bucket-page animate-fade-in">
      {/* Header */}
      <section className="bucket-hero-header">
        <div className="container">
          <div className="bucket-header-content">
            <span className="section-tag">
              <Heart size={14} fill="#c86d6d" color="#c86d6d" />
              Our Personal Travel Dreams
            </span>
            <h1 className="bucket-main-title">Our Bucket List</h1>
            <p className="bucket-subtitle">"Every place we dream of, every road we take together."</p>
          </div>

          {/* Live Journey Dashboard */}
          <div className="bucket-stats-dashboard glass-panel">
            <div className="bucket-stat-col">
              <span className="stat-symbol">🧭</span>
              <span className="stat-number">{stats.placesPlanned}</span>
              <span className="stat-title">Places Planned</span>
            </div>
            <div className="bucket-stat-col highlight-visited">
              <span className="stat-symbol">✅</span>
              <span className="stat-number">{stats.placesVisited}</span>
              <span className="stat-title">Places Visited</span>
            </div>
            <div className="bucket-stat-col">
              <span className="stat-symbol">🇮🇳</span>
              <span className="stat-number">{stats.statesExplored}</span>
              <span className="stat-title">States Explored</span>
            </div>
            <div className="bucket-stat-col">
              <span className="stat-symbol">🛕</span>
              <span className="stat-number">{stats.templesVisited}</span>
              <span className="stat-title">Temples Visited</span>
            </div>
          </div>

          {/* Status Filter Tabs */}
          <div className="bucket-filter-tabs">
            <button
              className={`filter-tab ${filterStatus === 'All' ? 'active' : ''}`}
              onClick={() => setFilterStatus('All')}
            >
              All Dreams ({items.length})
            </button>
            <button
              className={`filter-tab ${filterStatus === 'must_visit' ? 'active' : ''}`}
              onClick={() => setFilterStatus('must_visit')}
            >
              ⭐ Must Visit ({items.filter((i) => i.status === 'must_visit').length})
            </button>
            <button
              className={`filter-tab ${filterStatus === 'want_to_visit' ? 'active' : ''}`}
              onClick={() => setFilterStatus('want_to_visit')}
            >
              ❤️ Want to Visit ({items.filter((i) => i.status === 'want_to_visit').length})
            </button>
            <button
              className={`filter-tab ${filterStatus === 'visited' ? 'active' : ''}`}
              onClick={() => setFilterStatus('visited')}
            >
              ✅ Visited ({items.filter((i) => i.status === 'visited').length})
            </button>
          </div>
        </div>
      </section>

      {/* Bucket List Items */}
      <div className="container section-padding">
        {filteredItems.length === 0 ? (
          <div className="bucket-empty-box glass-panel">
            <Sparkles size={36} color="#dfb15b" />
            <h3 className="empty-heading">No places in this category yet!</h3>
            <p className="empty-text">
              Browse through Bengaluru, India, Temples or Food sections and click the ❤️ icon to add your favorite places to our little journey.
            </p>
            <div className="empty-actions">
              <Link to="/bengaluru" className="btn btn-primary">Explore Bengaluru</Link>
              <Link to="/india" className="btn btn-rose">Explore India</Link>
            </div>
          </div>
        ) : (
          <div className="bucket-cards-grid">
            {filteredItems.map((item) => {
              const currentNote = getItemNote(item.id);
              const isEditing = editingNoteId === item.id;
              const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.title + ' ' + item.state)}`;

              return (
                <div key={item.id} className="card bucket-item-card">
                  <div className="bucket-card-header">
                    <div className="bucket-item-title-group">
                      <span className="bucket-item-state">{item.state}</span>
                      <h3 className="bucket-item-title">{item.title}</h3>
                      {item.location && (
                        <div className="bucket-item-location">
                          <MapPin size={12} className="text-rose" />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>

                    <button
                      className="bucket-delete-btn"
                      onClick={() => setItemStatus(item, null)}
                      title="Remove from bucket list"
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  {/* Status Toggle Buttons */}
                  <div className="bucket-status-selector">
                    <button
                      className={`status-btn ${item.status === 'want_to_visit' ? 'active-want' : ''}`}
                      onClick={() => setItemStatus(item, 'want_to_visit')}
                    >
                      <Heart size={14} fill={item.status === 'want_to_visit' ? '#c86d6d' : 'none'} color="#c86d6d" />
                      <span>Want</span>
                    </button>
                    <button
                      className={`status-btn ${item.status === 'must_visit' ? 'active-must' : ''}`}
                      onClick={() => setItemStatus(item, 'must_visit')}
                    >
                      <Star size={14} fill={item.status === 'must_visit' ? '#dfb15b' : 'none'} color="#dfb15b" />
                      <span>Must</span>
                    </button>
                    <button
                      className={`status-btn ${item.status === 'visited' ? 'active-visited' : ''}`}
                      onClick={() => setItemStatus(item, 'visited')}
                    >
                      <CheckCircle size={14} fill={item.status === 'visited' ? '#234d35' : 'none'} color={item.status === 'visited' ? '#ffffff' : '#234d35'} />
                      <span>Visited</span>
                    </button>
                  </div>

                  {/* Personal Love Note */}
                  <div className="bucket-card-note-box">
                    {isEditing ? (
                      <div className="note-editor">
                        <textarea
                          value={noteDraft}
                          onChange={(e) => setNoteDraft(e.target.value)}
                          placeholder="Write a sweet memory or plan..."
                          rows={2}
                          className="note-input"
                        />
                        <div className="note-btn-row">
                          <button className="btn btn-sm btn-secondary" onClick={() => setEditingNoteId(null)}>
                            Cancel
                          </button>
                          <button className="btn btn-sm btn-rose" onClick={() => handleSaveNote(item.id)}>
                            Save
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="note-display-row" onClick={() => handleStartEditNote(item)}>
                        <div className="note-text-area">
                          <MessageCircle size={14} color="#c86d6d" />
                          <span className="note-body">
                            {currentNote ? `"${currentNote}"` : 'Add our personal memory note...'}
                          </span>
                        </div>
                        <Edit3 size={13} className="note-edit-icon" />
                      </div>
                    )}
                  </div>

                  {/* Footer Action Links */}
                  <div className="bucket-card-footer">
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bucket-link"
                    >
                      <ExternalLink size={13} />
                      <span>Google Maps</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <style>{`
        .bucket-hero-header {
          padding: 5rem 0 2.5rem 0;
          background: linear-gradient(180deg, rgba(254, 246, 238, 0.9) 0%, rgba(254, 236, 226, 0.95) 60%, rgba(250, 228, 218, 0.85) 100%);
          border-bottom: 1px solid rgba(200, 109, 109, 0.2);
          text-align: center;
        }
        .bucket-header-content {
          max-width: 750px;
          margin: 0 auto 2.5rem auto;
        }
        .bucket-main-title {
          font-size: clamp(2.4rem, 4.5vw, 3.6rem);
          color: var(--color-green-deep);
          margin-bottom: 0.5rem;
        }
        .bucket-subtitle {
          font-family: var(--font-quote);
          font-size: 1.5rem;
          color: var(--color-rose-deep);
          font-style: italic;
        }
        .bucket-stats-dashboard {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 248, 242, 0.9) 100%);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1.5px solid rgba(200, 109, 109, 0.3);
          border-radius: var(--radius-lg);
          padding: 2.2rem 1rem;
          margin-bottom: 2.8rem;
          box-shadow: 0 16px 45px rgba(184, 85, 85, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.8) inset;
        }
        .bucket-stat-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 1rem;
          border-right: 1px solid var(--color-cream-darker);
        }
        .bucket-stat-col:last-child {
          border-right: none;
        }
        .highlight-visited .stat-number {
          color: var(--color-green-deep);
        }
        .stat-symbol {
          font-size: 1.75rem;
          margin-bottom: 0.35rem;
        }
        .stat-number {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--color-rose-deep);
          line-height: 1;
          margin-bottom: 0.25rem;
        }
        .stat-title {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-brown-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .bucket-filter-tabs {
          display: flex;
          justify-content: center;
          gap: 0.6rem;
          flex-wrap: wrap;
        }
        .bucket-empty-box {
          text-align: center;
          background: #ffffff;
          border: 1px solid var(--color-rose-border);
          border-radius: var(--radius-lg);
          padding: 4rem 2rem;
          max-width: 600px;
          margin: 0 auto;
        }
        .empty-heading {
          font-size: 1.6rem;
          color: var(--color-green-deep);
          margin-top: 1rem;
          margin-bottom: 0.75rem;
        }
        .empty-text {
          font-size: 0.95rem;
          color: var(--color-brown-mid);
          line-height: 1.65;
          margin-bottom: 2rem;
        }
        .empty-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .bucket-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
          gap: 1.75rem;
        }
        .bucket-item-card {
          background: #ffffff;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
        }
        .bucket-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.25rem;
        }
        .bucket-item-state {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-rose-deep);
          letter-spacing: 0.05em;
        }
        .bucket-item-title {
          font-size: 1.3rem;
          color: var(--color-green-deep);
          margin-bottom: 0.2rem;
        }
        .bucket-item-location {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.8rem;
          color: var(--color-brown-muted);
        }
        .bucket-delete-btn {
          color: var(--color-brown-muted);
          padding: 6px;
          border-radius: 50%;
          transition: all 0.2s ease;
        }
        .bucket-delete-btn:hover {
          color: var(--color-rose-deep);
          background: var(--color-rose-soft);
        }
        .bucket-status-selector {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }
        .status-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          padding: 0.5rem;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid var(--color-cream-darker);
          background: var(--color-cream-subtle);
          color: var(--color-brown-mid);
          transition: all 0.2s ease;
        }
        .status-btn.active-want {
          background: var(--color-rose-soft);
          border-color: var(--color-rose-primary);
          color: var(--color-rose-deep);
        }
        .status-btn.active-must {
          background: var(--color-gold-light);
          border-color: var(--color-gold-accent);
          color: #936f16;
        }
        .status-btn.active-visited {
          background: var(--color-green-deep);
          border-color: var(--color-green-deep);
          color: #ffffff;
        }
        .bucket-card-note-box {
          background: #faf7f2;
          border: 1px dashed var(--color-cream-darker);
          border-radius: var(--radius-sm);
          padding: 0.75rem 0.85rem;
          margin-bottom: 1rem;
          cursor: pointer;
        }
        .note-display-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.5rem;
        }
        .note-text-area {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          min-width: 0;
        }
        .note-body {
          font-family: var(--font-quote);
          font-size: 0.98rem;
          font-style: italic;
          color: var(--color-brown-deep);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .note-edit-icon {
          color: var(--color-brown-muted);
          flex-shrink: 0;
        }
        .note-editor textarea {
          width: 100%;
          border: 1px solid var(--color-rose-border);
          border-radius: 4px;
          padding: 0.5rem;
          font-family: var(--font-body);
          font-size: 0.85rem;
          resize: vertical;
          margin-bottom: 0.5rem;
        }
        .note-btn-row {
          display: flex;
          justify-content: flex-end;
          gap: 0.4rem;
        }
        .bucket-card-footer {
          margin-top: auto;
          display: flex;
          justify-content: flex-end;
          border-top: 1px solid var(--color-cream-subtle);
          padding-top: 0.75rem;
        }
        .bucket-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-brown-muted);
        }
        .bucket-link:hover {
          color: var(--color-green-deep);
        }

        @media (max-width: 768px) {
          .bucket-hero-header {
            padding: 3.5rem 0 2rem 0;
          }
          .bucket-main-title {
            font-size: 2.2rem;
          }
          .bucket-subtitle {
            font-size: 1.25rem;
          }
          .bucket-stats-dashboard {
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
            padding: 1.5rem 1rem;
          }
          .bucket-stat-col:nth-child(2) {
            border-right: none;
          }
          .bucket-cards-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .bucket-item-card {
            padding: 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .bucket-hero-header {
            padding: 2.75rem 0 1.5rem 0;
          }
          .bucket-main-title {
            font-size: 1.85rem;
          }
          .bucket-stats-dashboard {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .bucket-stat-col {
            border-right: none !important;
            border-bottom: 1px solid var(--color-cream-darker);
            padding-bottom: 0.85rem;
          }
          .bucket-stat-col:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
          .bucket-item-card {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
};
