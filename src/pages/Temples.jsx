import React, { useState } from 'react';
import { TempleCard } from '../components/TempleCard';
import { JYOTIRLINGAS, MAJOR_INDIA_TEMPLES } from '../data/temples';
import { Sparkles, Compass, Heart } from 'lucide-react';

export const Temples = ({ onOpenDetails }) => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', '12 Jyotirlingas', 'Major Sacred Shrines'];

  return (
    <div className="temples-page animate-fade-in">
      {/* Header Banner */}
      <section className="temples-hero-header">
        <div className="container">
          <div className="temples-header-content">
            <span className="section-tag">
              <Sparkles size={14} color="#dfb15b" />
              Sacred Sanctuaries & Devotion
            </span>
            <h1 className="temples-main-title">Sacred Temples of India</h1>
            <p className="temples-subtitle">"Where silence speaks and prayers linger."</p>
            <p className="temples-intro">
              Journey together to the 12 sacred Jyotirlingas scattered from the cliffs of Kedarnath to the sea bridge of Rameshwaram, and the immortal pilgrimage hubs that have anchored human devotion for millennia.
            </p>
          </div>

          <div className="filter-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`filter-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="container section-padding">
        {/* 12 JYOTIRLINGAS SECTION */}
        {(activeTab === 'All' || activeTab === '12 Jyotirlingas') && (
          <div className="temple-block">
            <div className="temple-block-header">
              <div>
                <span className="section-tag">The Supreme Shiva Circuit</span>
                <h2 className="section-title">The 12 Sacred Jyotirlingas</h2>
                <p className="section-subtitle">
                  The twelve divine manifestations of Lord Shiva across India.
                </p>
              </div>
              <span className="temple-count-tag">12 Shrines</span>
            </div>

            <div className="grid-3">
              {JYOTIRLINGAS.map((item) => (
                <TempleCard
                  key={item.id}
                  temple={item}
                  onOpenDetails={onOpenDetails}
                  isJyotirlinga={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* MAJOR SACRED SHRINES SECTION */}
        {(activeTab === 'All' || activeTab === 'Major Sacred Shrines') && (
          <div className="temple-block" style={{ marginTop: activeTab === 'All' ? '5rem' : '0' }}>
            <div className="temple-block-header">
              <div>
                <span className="section-tag">Pan-India Pilgrimage</span>
                <h2 className="section-title">Major Spiritual Destinations</h2>
                <p className="section-subtitle">
                  Tirupati, Varanasi, Ayodhya, Puri Jagannath, and Golden Temple.
                </p>
              </div>
              <span className="temple-count-tag">{MAJOR_INDIA_TEMPLES.length} Destinations</span>
            </div>

            <div className="grid-3">
              {MAJOR_INDIA_TEMPLES.map((item) => (
                <TempleCard
                  key={item.id}
                  temple={item}
                  onOpenDetails={onOpenDetails}
                  isJyotirlinga={false}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .temples-hero-header {
          padding: 5rem 0 2.5rem 0;
          background: linear-gradient(180deg, rgba(254, 248, 238, 0.95) 0%, rgba(255, 242, 225, 0.95) 60%, rgba(250, 232, 215, 0.85) 100%);
          border-bottom: 1px solid rgba(207, 161, 68, 0.3);
          text-align: center;
        }
        .temples-header-content {
          max-width: 800px;
          margin: 0 auto 2.5rem auto;
        }
        .temples-main-title {
          font-size: clamp(2.4rem, 4.5vw, 3.6rem);
          color: var(--color-green-deep);
          margin-bottom: 0.5rem;
        }
        .temples-subtitle {
          font-family: var(--font-quote);
          font-size: 1.5rem;
          color: var(--color-gold-accent);
          font-style: italic;
          margin-bottom: 1rem;
        }
        .temples-intro {
          font-size: 1rem;
          color: var(--color-brown-mid);
          line-height: 1.7;
        }
        .temple-block-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 2.5rem;
          border-bottom: 1.5px solid var(--color-cream-darker);
          padding-bottom: 1.2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .temple-count-tag {
          background: var(--color-gold-light);
          color: #936f16;
          border: 1px solid var(--color-gold-border);
          font-size: 0.85rem;
          font-weight: 700;
          padding: 0.35rem 0.95rem;
          border-radius: var(--radius-pill);
        }

        @media (max-width: 768px) {
          .temples-hero-header {
            padding: 3.5rem 0 2rem 0;
          }
          .temple-block-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
            margin-bottom: 1.75rem;
          }
          .temples-main-title {
            font-size: 2.2rem;
          }
          .temples-subtitle {
            font-size: 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .temples-hero-header {
            padding: 2.75rem 0 1.5rem 0;
          }
          .temples-main-title {
            font-size: 1.85rem;
          }
          .temples-intro {
            font-size: 0.92rem;
          }
        }
      `}</style>
    </div>
  );
};
