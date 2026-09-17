import React, { useState } from 'react';
import { DestinationCard } from '../components/DestinationCard';
import { TempleCard } from '../components/TempleCard';
import { FoodCard } from '../components/FoodCard';
import { BENGALURU_PLACES, BENGALURU_TEMPLES, BENGALURU_WEEKEND_TRIPS } from '../data/bengaluru';
import { BENGALURU_FOOD_PLACES } from '../data/food';
import { Heart, Compass, MapPin, Coffee, Sparkles } from 'lucide-react';

export const Bengaluru = ({ onOpenDetails }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterCategories = [
    'All',
    'Famous Places',
    'Temples',
    'Nature',
    'Museums',
    'Food',
    'Cafés',
    'Shopping',
    'Weekend Trips'
  ];

  // Helper to test if item matches filter
  const matchesFilter = (item, filter) => {
    if (filter === 'All') return true;
    if (filter === 'Famous Places') return item.categorySlug === 'famous-places' || item.category?.includes('Heritage') || item.category?.includes('Palaces');
    if (filter === 'Temples') return item.type === 'temple' || item.category?.includes('Temple') || item.deity;
    if (filter === 'Nature') return item.category?.includes('Nature') || item.category?.includes('Parks') || item.category?.includes('Lakes');
    if (filter === 'Museums') return item.category?.includes('Museum') || item.category?.includes('Heritage');
    if (filter === 'Food') return item.category === 'Breakfast' || item.category === 'Street Food' || item.category === 'Non-Veg';
    if (filter === 'Cafés') return item.category === 'Cafés';
    if (filter === 'Shopping') return item.categorySlug === 'shopping' || item.category?.includes('Shopping');
    if (filter === 'Weekend Trips') return item.distanceFromBengaluru !== undefined;
    return true;
  };

  return (
    <div className="bengaluru-page animate-fade-in">
      {/* Header Banner */}
      <section className="bengaluru-hero-header">
        <div className="container">
          <div className="bengaluru-header-content">
            <span className="section-tag">
              <span className="tag-rose-icon">🌹</span>
              Chapter 01
            </span>
            <h1 className="bengaluru-main-title">Let's Explore Bengaluru</h1>
            <p className="bengaluru-subtitle">"The first chapter of our journey."</p>
            <p className="bengaluru-intro">
              Where our story together took root. From crisp benne dosas in Gandhi Bazaar and lavender sunsets over Sankey Tank, to 4:00 AM drives up Nandi Hills to watch the clouds rise.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="filter-tabs">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                className={`filter-tab ${selectedFilter === cat ? 'active' : ''}`}
                onClick={() => setSelectedFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Filtered or Categorized View */}
      <div className="container section-padding">
        {selectedFilter === 'All' ? (
          <>
            {/* 1. FAMOUS PLACES */}
            <div className="category-section-block">
              <div className="category-title-bar">
                <div>
                  <h2 className="cat-title">Famous Heritage & City Landmarks</h2>
                  <p className="cat-subtitle">Iconic Bangalore sights to walk hand-in-hand through.</p>
                </div>
                <span className="cat-count-badge">{BENGALURU_PLACES.length} Places</span>
              </div>
              <div className="grid-3">
                {BENGALURU_PLACES.map((place) => (
                  <DestinationCard key={place.id} item={place} onOpenDetails={onOpenDetails} />
                ))}
              </div>
            </div>

            {/* 2. PEACEFUL PLACES (TEMPLES) */}
            <div className="category-section-block">
              <div className="category-title-bar">
                <div>
                  <span className="section-tag">
                    <Sparkles size={14} color="#dfb15b" />
                    Spiritual Sanctuaries
                  </span>
                  <h2 className="cat-title">Peaceful Places</h2>
                  <p className="cat-subtitle">Ancient stone sanctums, bell chimes, and sacred peaceful moments.</p>
                </div>
                <span className="cat-count-badge">{BENGALURU_TEMPLES.length} Temples</span>
              </div>
              <div className="grid-3">
                {BENGALURU_TEMPLES.map((temple) => (
                  <TempleCard key={temple.id} temple={temple} onOpenDetails={onOpenDetails} />
                ))}
              </div>
            </div>

            {/* 3. BENGALURU FOOD SECTION */}
            <div className="category-section-block">
              <div className="category-title-bar">
                <div>
                  <span className="section-tag">
                    <Coffee size={14} color="#c86d6d" />
                    Culinary Soul
                  </span>
                  <h2 className="cat-title">Because Every Journey Needs Good Food</h2>
                  <p className="cat-subtitle">Iconic heritage breakfast joints, lively food streets, and cozy neighborhood cafés.</p>
                </div>
                <span className="cat-count-badge">{BENGALURU_FOOD_PLACES.length} Food Spots</span>
              </div>
              <div className="grid-3">
                {BENGALURU_FOOD_PLACES.map((food) => (
                  <FoodCard key={food.id} food={food} onOpenDetails={onOpenDetails} />
                ))}
              </div>
            </div>

            {/* 4. WEEKEND TRIPS */}
            <div className="category-section-block">
              <div className="category-title-bar">
                <div>
                  <span className="section-tag">
                    <Compass size={14} color="#234d35" />
                    Short Road Trips
                  </span>
                  <h2 className="cat-title">"Let's Escape the City"</h2>
                  <p className="cat-subtitle">Misty hills, granite monolithic climbs, and quiet riverside drives.</p>
                </div>
                <span className="cat-count-badge">{BENGALURU_WEEKEND_TRIPS.length} Trips</span>
              </div>
              <div className="grid-3">
                {BENGALURU_WEEKEND_TRIPS.map((trip) => (
                  <DestinationCard key={trip.id} item={trip} onOpenDetails={onOpenDetails} />
                ))}
              </div>
            </div>
          </>
        ) : (
          /* Filtered View */
          <div className="filtered-results-block">
            <div className="filtered-header">
              <h2 className="filtered-title">Bengaluru: {selectedFilter}</h2>
              <p className="filtered-desc">Curated spots matching our {selectedFilter} exploration.</p>
            </div>

            <div className="grid-3">
              {/* Combine and filter items */}
              {[
                ...BENGALURU_PLACES,
                ...BENGALURU_TEMPLES.map((t) => ({ ...t, type: 'temple' })),
                ...BENGALURU_FOOD_PLACES,
                ...BENGALURU_WEEKEND_TRIPS
              ]
                .filter((item) => matchesFilter(item, selectedFilter))
                .map((item) => {
                  if (item.foodToTry) {
                    return <FoodCard key={item.id} food={item} onOpenDetails={onOpenDetails} />;
                  }
                  if (item.type === 'temple' || item.deity) {
                    return <TempleCard key={item.id} temple={item} onOpenDetails={onOpenDetails} />;
                  }
                  return <DestinationCard key={item.id} item={item} onOpenDetails={onOpenDetails} />;
                })}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .bengaluru-hero-header {
          padding: 5rem 0 2.5rem 0;
          background: linear-gradient(180deg, rgba(254, 246, 238, 0.9) 0%, rgba(254, 236, 226, 0.95) 60%, rgba(250, 228, 218, 0.85) 100%);
          border-bottom: 1px solid rgba(200, 109, 109, 0.18);
          text-align: center;
        }
        .bengaluru-header-content {
          max-width: 780px;
          margin: 0 auto 2.5rem auto;
        }
        .tag-rose-icon {
          font-size: 1rem;
        }
        .bengaluru-main-title {
          font-size: clamp(2.4rem, 4.5vw, 3.5rem);
          color: var(--color-green-deep);
          margin-bottom: 0.5rem;
        }
        .bengaluru-subtitle {
          font-family: var(--font-quote);
          font-size: 1.5rem;
          color: var(--color-rose-deep);
          font-style: italic;
          margin-bottom: 1rem;
        }
        .bengaluru-intro {
          font-size: 1rem;
          color: var(--color-brown-mid);
          line-height: 1.7;
        }
        .category-section-block {
          margin-bottom: 5.5rem;
        }
        .category-title-bar {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 2rem;
          border-bottom: 2px solid var(--color-cream-darker);
          padding-bottom: 1rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .cat-title {
          font-size: 1.85rem;
          color: var(--color-green-deep);
          margin-bottom: 0.25rem;
        }
        .cat-subtitle {
          font-family: var(--font-quote);
          font-size: 1.15rem;
          color: var(--color-brown-muted);
          font-style: italic;
        }
        .cat-count-badge {
          background: var(--color-green-light);
          color: var(--color-green-deep);
          font-size: 0.85rem;
          font-weight: 700;
          padding: 0.35rem 0.95rem;
          border-radius: var(--radius-pill);
        }
        .filtered-header {
          margin-bottom: 2.5rem;
          text-align: center;
        }
        .filtered-title {
          font-size: 2.2rem;
          color: var(--color-green-deep);
          margin-bottom: 0.35rem;
        }
        .filtered-desc {
          font-family: var(--font-quote);
          font-size: 1.2rem;
          color: var(--color-brown-muted);
          font-style: italic;
        }

        @media (max-width: 768px) {
          .bengaluru-hero-header {
            padding: 3.5rem 0 2rem 0;
          }
          .category-section-block {
            margin-bottom: 3.5rem;
          }
          .category-title-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
            margin-bottom: 1.25rem;
          }
          .cat-title {
            font-size: 1.55rem;
          }
          .cat-subtitle {
            font-size: 1.05rem;
          }
        }

        @media (max-width: 480px) {
          .bengaluru-hero-header {
            padding: 2.75rem 0 1.5rem 0;
          }
          .bengaluru-main-title {
            font-size: 1.85rem;
          }
          .bengaluru-subtitle {
            font-size: 1.2rem;
          }
          .bengaluru-intro {
            font-size: 0.92rem;
          }
        }
      `}</style>
    </div>
  );
};
