import React from 'react';
import { Link } from 'react-router-dom';
import { useBucketList } from '../context/BucketListContext';
import { Heart, Compass, ArrowRight, Sparkles, MapPin, Calendar, Camera } from 'lucide-react';
import { ROMANTIC_PLACES } from '../data/romanticPlaces';
import { GALLERY_ITEMS } from '../data/galleryData';

export const Home = ({ onOpenDetails }) => {
  const { stats } = useBucketList();

  return (
    <div className="home-page animate-fade-in">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-backdrop-glow" />
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-pill-tag">
              <span className="hero-pill-heart">🌹</span>
              <span>Our Little Journey</span>
            </div>

            <h1 className="hero-heading">
              A Journey Waiting <br />
              <span className="text-highlight">For Us ❤️</span>
            </h1>

            <p className="hero-lead-text">
              "Maybe we don't know where every road will take us yet...<br />
              But we can start with one city.<br />
              <strong>Bengaluru today.</strong><br />
              <strong>India tomorrow.</strong><br />
              And maybe someday, all the places we've dreamed about."
            </p>

            <div className="hero-cta-group">
              <Link to="/bengaluru" className="btn btn-primary hero-btn">
                <span>Explore Bengaluru</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/india" className="btn btn-rose hero-btn">
                <span>Explore India</span>
                <Compass size={18} />
              </Link>
            </div>
          </div>

          <div className="hero-visual-card">
            <div className="hero-card-inner">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Bangalore_Mysore_Maharaja_Palace.jpg"
                alt="Bengaluru Palace & India Romance"
                className="hero-main-img"
              />
              <div className="hero-card-badge">
                <Heart size={14} fill="#c86d6d" color="#c86d6d" />
                <span>Chapter 01: Bengaluru</span>
              </div>
              <div className="hero-floating-quote">
                "From our first coffee in Malleshwaram to every sunset in India."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PERSONAL MESSAGE SECTION: "FOR YOU" */}
      <section className="for-you-section">
        <div className="container-narrow">
          <div className="for-you-card glass-panel">
            <div className="for-you-heart-wrap">
              <div className="floating-heart animate-pulse-heart">❤️</div>
            </div>

            <span className="for-you-tag">A Letter To You</span>
            <h2 className="for-you-title">"For You"</h2>

            <div className="for-you-text-content">
              <p>
                "This isn't just a list of places.
              </p>
              <p>
                It's a collection of places I'd love to see someday...
              </p>
              <p className="highlighted-line">
                and memories I'd love to make with you.
              </p>
              <p>
                So let's start somewhere close.
              </p>
              <p className="closing-line">
                Let's start with Bengaluru."
              </p>
            </div>

            <div className="for-you-signature">
              <span>Always yours ❤️</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LIVE JOURNEY STATS DASHBOARD */}
      <section className="stats-dashboard-section">
        <div className="container">
          <div className="stats-panel glass-panel">
            <div className="stat-card">
              <span className="stat-icon">🧭</span>
              <span className="stat-num">{stats.placesPlanned}</span>
              <span className="stat-label">Places Planned</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">❤️</span>
              <span className="stat-num">{stats.placesVisited}</span>
              <span className="stat-label">Places Visited</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">🇮🇳</span>
              <span className="stat-num">{stats.statesExplored}</span>
              <span className="stat-label">States Explored</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">🛕</span>
              <span className="stat-num">{stats.templesVisited}</span>
              <span className="stat-label">Temples Visited</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CHAPTER JOURNEY TIMELINE */}
      <section className="timeline-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Story In Chapters</span>
            <h2 className="section-title">The Journey Timeline</h2>
            <p className="section-subtitle">
              How our adventure unfolds — step by step, city by city, memory by memory.
            </p>
          </div>

          <div className="timeline-cards-row">
            <div className="timeline-card active-chapter">
              <div className="chapter-badge">Chapter 01</div>
              <div className="chapter-icon">🌹</div>
              <h3 className="chapter-title">Bengaluru</h3>
              <p className="chapter-desc">Our starting point. Lush parks, heritage palaces, filter coffee corners, and misty sunrise hill drives.</p>
              <Link to="/bengaluru" className="chapter-link">Explore Chapter 1 →</Link>
            </div>

            <div className="timeline-card">
              <div className="chapter-badge">Chapter 02</div>
              <div className="chapter-icon">🌴</div>
              <h3 className="chapter-title">South India</h3>
              <p className="chapter-desc">Munnar's mist, Coorg's coffee blossoms, Alleppey houseboats, and Meenakshi Amman's towers.</p>
              <Link to="/india" className="chapter-link">Explore South India →</Link>
            </div>

            <div className="timeline-card">
              <div className="chapter-badge">Chapter 03</div>
              <div className="chapter-icon">🏰</div>
              <h3 className="chapter-title">West India</h3>
              <p className="chapter-desc">South Goa's quiet shores, Ellora's rock-cut caves, White Desert of Kutch, and Marine Drive lights.</p>
              <Link to="/india" className="chapter-link">Explore West India →</Link>
            </div>

            <div className="timeline-card">
              <div className="chapter-badge">Chapter 04</div>
              <div className="chapter-icon">🏔️</div>
              <h3 className="chapter-title">North India</h3>
              <p className="chapter-desc">Udaipur's lake palaces, Kashmir's Dal Lake, holy Ganga ghats in Varanasi, and Himalayan snows.</p>
              <Link to="/india" className="chapter-link">Explore North India →</Link>
            </div>

            <div className="timeline-card">
              <div className="chapter-badge">Chapter 05</div>
              <div className="chapter-icon">🌅</div>
              <h3 className="chapter-title">East India</h3>
              <p className="chapter-desc">Darjeeling's Kanchenjunga sunrise, Puri's Jagannath shrine, and dolphin lagoons in Chilika.</p>
              <Link to="/india" className="chapter-link">Explore East India →</Link>
            </div>

            <div className="timeline-card">
              <div className="chapter-badge">Chapter 06</div>
              <div className="chapter-icon">🌿</div>
              <h3 className="chapter-title">Northeast India</h3>
              <p className="chapter-desc">Crystal rivers in Dawki, living root bridges in Cherrapunji, and monasteries in Sikkim.</p>
              <Link to="/india" className="chapter-link">Explore Northeast →</Link>
            </div>

            <div className="timeline-card final-chapter-card">
              <div className="chapter-badge gold-badge">Final Chapter</div>
              <div className="chapter-icon">❤️</div>
              <h3 className="chapter-title">Wherever...</h3>
              <p className="chapter-desc">Wherever we haven't been yet, as long as we're going together hand-in-hand.</p>
              <Link to="/bucket-list" className="chapter-link">Our Dream List →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ROMANTIC PLACES: "PLACES I'D LOVE TO SEE WITH YOU" */}
      <section className="romantic-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Heart size={14} fill="#c86d6d" color="#c86d6d" />
              Special Couple Escapes
            </span>
            <h2 className="section-title">Places I'd Love To See With You</h2>
            <p className="section-subtitle">
              Destinations meant for quiet hand-holding, unforgettable sunsets, and whispering dreams.
            </p>
          </div>

          <div className="grid-3">
            {ROMANTIC_PLACES.slice(0, 6).map((place) => (
              <div
                key={place.id}
                className="card romantic-card"
                onClick={() => onOpenDetails(place)}
              >
                <div className="romantic-img-wrap">
                  <img src={place.image} alt={place.name} className="romantic-img" loading="lazy" />
                  <span className="romantic-state-tag">{place.state}</span>
                </div>

                <div className="romantic-body">
                  <h3 className="romantic-name">{place.name}</h3>
                  <p className="romantic-sub">{place.subtitle}</p>
                  <p className="romantic-reason">{place.whyRomantic}</p>

                  <div className="romantic-love-bubble">
                    <p>"{place.loveNote}"</p>
                  </div>

                  <div className="romantic-footer">
                    <span className="romantic-dist">{place.distanceFromBlr}</span>
                    <button className="btn btn-rose btn-sm">
                      <span>View Romance</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="romantic-view-all-row">
            <Link to="/trip-planner" className="btn btn-outline">
              <span>Plan Our Couple Itinerary</span>
              <Compass size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. PHOTO GALLERY PREVIEW */}
      <section className="gallery-preview-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Camera size={14} />
              Visual Dreams
            </span>
            <h2 className="section-title">Places We Haven't Seen Yet</h2>
            <p className="section-subtitle">
              Every photo is a promise of a tomorrow we will share together.
            </p>
          </div>

          <div className="masonry-preview-grid">
            {GALLERY_ITEMS.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="gallery-preview-item"
                onClick={() => onOpenDetails(item)}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="gallery-hover-overlay">
                  <span className="gallery-hover-tag">{item.tag}</span>
                  <h4 className="gallery-hover-title">{item.title}</h4>
                  <p className="gallery-hover-loc">{item.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-cta-row">
            <Link to="/gallery" className="btn btn-secondary">
              <span>Open Full Photo Gallery ({GALLERY_ITEMS.length} Photos)</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FINAL PAGE SECTION: "THE MAP IS HUGE..." */}
      <section className="final-section">
        <div className="container-narrow">
          <div className="final-card glass-panel">
            <div className="final-rose-icon">🌹</div>
            <h2 className="final-title">"The Map Is Huge..."</h2>

            <div className="final-text-body">
              <p>There are thousands of places waiting for us.</p>
              <p>Mountains we haven't climbed.</p>
              <p>Temples we haven't visited.</p>
              <p>Foods we haven't tasted.</p>
              <p>Cities we haven't explored.</p>
              <p>And memories we haven't made.</p>
              <p className="final-bold-line">
                So this isn't the end of our journey.<br />
                It's only the beginning.
              </p>
            </div>

            <div className="final-question-box">
              <h3 className="final-question-text">Where should we go next? ❤️</h3>
              <div className="final-btn-group">
                <Link to="/bengaluru" className="btn btn-primary">
                  <span>Explore Bengaluru Again</span>
                </Link>
                <Link to="/india" className="btn btn-rose">
                  <span>Explore India</span>
                  <Compass size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .hero-section {
          position: relative;
          padding: 6.5rem 0 5.5rem 0;
          overflow: hidden;
          background: linear-gradient(180deg, rgba(254, 246, 238, 0.85) 0%, rgba(254, 235, 225, 0.9) 50%, rgba(250, 226, 216, 0.75) 100%);
          border-bottom: 1px solid rgba(200, 109, 109, 0.16);
        }
        .hero-backdrop-glow {
          position: absolute;
          top: -160px;
          right: -100px;
          width: 750px;
          height: 750px;
          background: radial-gradient(circle, rgba(254, 205, 205, 0.5) 0%, rgba(255, 225, 170, 0.35) 45%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          filter: blur(40px);
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: center;
          gap: 3.5rem;
        }
        .hero-pill-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: var(--color-rose-soft);
          border: 1px solid var(--color-rose-border);
          color: var(--color-rose-deep);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 0.4rem 1rem;
          border-radius: var(--radius-pill);
          margin-bottom: 1.25rem;
        }
        .hero-heading {
          font-size: clamp(2.6rem, 5vw, 4.2rem);
          color: var(--color-green-deep);
          line-height: 1.15;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }
        .text-highlight {
          color: var(--color-rose-primary);
          font-style: italic;
        }
        .hero-lead-text {
          font-family: var(--font-quote);
          font-size: 1.45rem;
          color: var(--color-brown-mid);
          line-height: 1.7;
          margin-bottom: 2.25rem;
          font-style: italic;
        }
        .hero-lead-text strong {
          color: var(--color-green-deep);
          font-family: var(--font-heading);
          font-style: normal;
          font-size: 1.2rem;
        }
        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .hero-btn {
          padding: 1rem 2.2rem;
          font-size: 1.05rem;
        }
        .hero-visual-card {
          position: relative;
        }
        .hero-card-inner {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(26, 56, 38, 0.2);
          border: 4px solid #ffffff;
        }
        .hero-main-img {
          width: 100%;
          height: 480px;
          object-fit: cover;
          display: block;
        }
        .hero-card-badge {
          position: absolute;
          top: 1.25rem;
          left: 1.25rem;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(8px);
          padding: 0.4rem 0.95rem;
          border-radius: var(--radius-pill);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-green-deep);
          display: flex;
          align-items: center;
          gap: 0.45rem;
          box-shadow: var(--shadow-sm);
        }
        .hero-floating-quote {
          position: absolute;
          bottom: 1.25rem;
          left: 1.25rem;
          right: 1.25rem;
          background: rgba(26, 56, 38, 0.88);
          color: #ffffff;
          padding: 1rem 1.25rem;
          border-radius: var(--radius-md);
          font-family: var(--font-quote);
          font-size: 1.15rem;
          font-style: italic;
          backdrop-filter: blur(8px);
          text-align: center;
          line-height: 1.4;
        }

        /* For You Section */
        .for-you-section {
          padding: 5rem 0 4rem 0;
          position: relative;
        }
        .for-you-section::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90%;
          max-width: 960px;
          height: 110%;
          background: radial-gradient(ellipse at center, rgba(254, 218, 215, 0.6) 0%, rgba(255, 238, 230, 0.4) 50%, transparent 75%);
          filter: blur(40px);
          z-index: 0;
          pointer-events: none;
        }
        .for-you-card {
          background: linear-gradient(155deg, #ffffff 0%, #fffcf8 40%, #fdf4ec 100%);
          border: 1.5px solid rgba(200, 109, 109, 0.38);
          border-radius: var(--radius-lg);
          padding: 4.2rem 3rem;
          text-align: center;
          position: relative;
          z-index: 1;
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.9) inset,
            0 0 0 6px rgba(207, 161, 68, 0.16),
            0 25px 65px rgba(184, 85, 85, 0.16),
            0 6px 20px rgba(78, 52, 46, 0.06);
          transition: all 0.35s ease;
          overflow: hidden;
        }
        .for-you-card::after {
          content: '';
          position: absolute;
          inset: 14px;
          border: 1.5px dashed rgba(207, 161, 68, 0.38);
          border-radius: calc(var(--radius-lg) - 8px);
          pointer-events: none;
        }
        .for-you-heart-wrap {
          margin-bottom: 1rem;
        }
        .floating-heart {
          font-size: 2.5rem;
        }
        .for-you-tag {
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-rose-deep);
          margin-bottom: 0.5rem;
          display: inline-block;
        }
        .for-you-title {
          font-size: 2.4rem;
          color: var(--color-green-deep);
          margin-bottom: 2rem;
        }
        .for-you-text-content {
          font-family: var(--font-quote);
          font-size: 1.45rem;
          line-height: 1.9;
          color: var(--color-brown-deep);
          font-style: italic;
          margin-bottom: 2.2rem;
        }
        .highlighted-line {
          color: var(--color-rose-deep);
          font-weight: 600;
        }
        .closing-line {
          color: var(--color-green-deep);
          font-weight: 700;
          font-size: 1.6rem;
        }
        .for-you-signature {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          color: var(--color-gold-accent);
          font-weight: 600;
        }

        /* Stats Panel */
        .stats-dashboard-section {
          padding: 1rem 0 4rem 0;
          position: relative;
          z-index: 1;
        }
        .stats-panel {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          padding: 2.2rem 2rem;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 249, 242, 0.9) 100%);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid rgba(207, 161, 68, 0.32);
          border-radius: var(--radius-lg);
          box-shadow: 
            0 18px 48px rgba(78, 52, 46, 0.1),
            0 0 0 1px rgba(255, 255, 255, 0.8) inset;
        }
        .stat-card {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.25rem 1rem;
          background: rgba(255, 255, 255, 0.75);
          border: 1px solid rgba(200, 109, 109, 0.12);
          border-radius: var(--radius-md);
          transition: all 0.3s ease;
        }
        .stat-card:hover {
          background: #ffffff;
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(200, 109, 109, 0.15);
          border-color: var(--color-rose-primary);
        }
        .stat-icon {
          font-size: 1.85rem;
          margin-bottom: 0.4rem;
        }
        .stat-num {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--color-green-deep);
          line-height: 1;
          margin-bottom: 0.35rem;
        }
        .stat-label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-brown-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        /* Timeline Cards Row */
        .timeline-cards-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
        }
        .timeline-card {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 250, 245, 0.9) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1.5px solid rgba(214, 185, 170, 0.38);
          border-radius: var(--radius-md);
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          position: relative;
          box-shadow: 0 8px 25px rgba(78, 52, 46, 0.06);
        }
        .timeline-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 22px 50px rgba(184, 85, 85, 0.18);
          border-color: var(--color-rose-primary);
          background: #ffffff;
        }
        .active-chapter {
          border-color: var(--color-rose-border);
          background: linear-gradient(180deg, #ffffff 0%, var(--color-rose-soft) 100%);
        }
        .chapter-badge {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-rose-deep);
          margin-bottom: 0.75rem;
        }
        .gold-badge {
          color: var(--color-gold-accent);
        }
        .chapter-icon {
          font-size: 2rem;
          margin-bottom: 0.65rem;
        }
        .chapter-title {
          font-size: 1.25rem;
          color: var(--color-green-deep);
          margin-bottom: 0.6rem;
        }
        .chapter-desc {
          font-size: 0.85rem;
          color: var(--color-brown-mid);
          line-height: 1.55;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }
        .chapter-link {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-rose-deep);
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
        }
        .chapter-link:hover {
          text-decoration: underline;
        }

        /* Romantic Cards */
        .romantic-card {
          background: #ffffff;
          border: 1px solid var(--color-rose-border);
        }
        .romantic-img-wrap {
          position: relative;
          height: 220px;
          overflow: hidden;
        }
        .romantic-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .romantic-card:hover .romantic-img {
          transform: scale(1.06);
        }
        .romantic-state-tag {
          position: absolute;
          top: 0.85rem;
          left: 0.85rem;
          background: rgba(200, 109, 109, 0.9);
          color: #ffffff;
          padding: 0.3rem 0.85rem;
          border-radius: var(--radius-pill);
          font-size: 0.75rem;
          font-weight: 600;
        }
        .romantic-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .romantic-name {
          font-size: 1.4rem;
          color: var(--color-green-deep);
          margin-bottom: 0.2rem;
        }
        .romantic-sub {
          font-family: var(--font-quote);
          font-style: italic;
          font-size: 0.98rem;
          color: var(--color-rose-deep);
          margin-bottom: 0.75rem;
        }
        .romantic-reason {
          font-size: 0.88rem;
          color: var(--color-brown-mid);
          line-height: 1.55;
          margin-bottom: 1.1rem;
        }
        .romantic-love-bubble {
          background: var(--color-rose-soft);
          border-left: 2px solid var(--color-rose-primary);
          padding: 0.85rem;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          font-family: var(--font-quote);
          font-style: italic;
          font-size: 0.95rem;
          color: var(--color-brown-deep);
          margin-bottom: 1.25rem;
          line-height: 1.45;
        }
        .romantic-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          border-top: 1px solid var(--color-cream-subtle);
          padding-top: 1rem;
        }
        .romantic-dist {
          font-size: 0.78rem;
          color: var(--color-brown-muted);
        }
        .romantic-view-all-row {
          text-align: center;
          margin-top: 3rem;
        }

        /* Masonry Gallery Preview */
        .masonry-preview-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .gallery-preview-item {
          position: relative;
          height: 260px;
          border-radius: var(--radius-md);
          overflow: hidden;
          cursor: pointer;
          box-shadow: var(--shadow-sm);
        }
        .gallery-preview-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .gallery-preview-item:hover img {
          transform: scale(1.08);
        }
        .gallery-hover-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(26, 56, 38, 0.9) 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.25rem;
          color: #ffffff;
        }
        .gallery-hover-tag {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-gold-accent);
          letter-spacing: 0.05em;
        }
        .gallery-hover-title {
          font-size: 1.2rem;
          color: #ffffff;
          margin-bottom: 0.15rem;
        }
        .gallery-hover-loc {
          font-size: 0.82rem;
          color: #d2e4d7;
        }
        .gallery-cta-row {
          text-align: center;
          margin-top: 2.5rem;
        }

        /* Final Section */
        .final-section {
          padding: 4rem 0 2rem 0;
        }
        .final-card {
          background: #ffffff;
          border: 1.5px solid var(--color-gold-border);
          border-radius: var(--radius-lg);
          padding: 4rem 2.5rem;
          text-align: center;
          box-shadow: var(--shadow-lg);
        }
        .final-rose-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .final-title {
          font-size: 2.5rem;
          color: var(--color-green-deep);
          margin-bottom: 1.8rem;
        }
        .final-text-body {
          font-family: var(--font-quote);
          font-size: 1.35rem;
          line-height: 1.95;
          color: var(--color-brown-deep);
          font-style: italic;
          margin-bottom: 2.5rem;
        }
        .final-bold-line {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          color: var(--color-green-deep);
          font-style: normal;
          margin-top: 1rem;
        }
        .final-question-box {
          border-top: 1px solid var(--color-cream-darker);
          padding-top: 2rem;
        }
        .final-question-text {
          font-size: 1.8rem;
          color: var(--color-rose-deep);
          margin-bottom: 1.5rem;
        }
        .final-btn-group {
          display: flex;
          justify-content: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        @media (max-width: 900px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-lead-text {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-cta-group {
            justify-content: center;
          }
          .hero-visual-card {
            max-width: 500px;
            margin: 0 auto;
          }
          .stats-panel {
            grid-template-columns: 1fr 1fr;
          }
          .masonry-preview-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 600px) {
          .stats-panel {
            grid-template-columns: 1fr;
          }
          .masonry-preview-grid {
            grid-template-columns: 1fr;
          }
          .for-you-card, .final-card {
            padding: 2.5rem 1.25rem;
          }
          .final-question-text {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </div>
  );
};
