import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useBucketList } from '../context/BucketListContext';
import { Search, Heart, Menu, X, Sparkles, MapPin, Compass } from 'lucide-react';

export const Navbar = ({ onOpenSearch, particlesEnabled, onToggleParticles }) => {
  const { stats } = useBucketList();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Scroll Progress Line */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Logo */}
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <span className="logo-icon animate-pulse-heart">🌹</span>
            <div className="logo-text-group">
              <span className="logo-title">Our Little Journey</span>
              <span className="logo-subtitle">Bengaluru to India</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav">
            <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>
            <NavLink to="/bengaluru" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Bengaluru
            </NavLink>
            <NavLink to="/india" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              India
            </NavLink>
            <NavLink to="/temples" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Temples
            </NavLink>
            <NavLink to="/food" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Food
            </NavLink>
            <NavLink to="/bucket-list" className={({ isActive }) => `nav-link nav-bucket-link ${isActive ? 'active' : ''}`}>
              <span>Bucket List</span>
              {stats.totalSaved > 0 && (
                <span className="nav-badge">{stats.totalSaved}</span>
              )}
            </NavLink>
            <NavLink to="/trip-planner" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Trip Planner
            </NavLink>
            <NavLink to="/for-you" className={({ isActive }) => `nav-link for-you-link ${isActive ? 'active' : ''}`}>
              <span>For You</span>
              <Heart size={13} fill="#c86d6d" color="#c86d6d" />
            </NavLink>
          </nav>

          {/* Right Action Icons */}
          <div className="nav-actions">
            {/* Search Trigger */}
            <button
              className="nav-action-btn search-trigger-btn"
              onClick={onOpenSearch}
              title="Search places, temples, food (Ctrl+K)"
              aria-label="Search"
            >
              <Search size={18} />
              <span className="search-key-hint">⌘K</span>
            </button>

            {/* Floating Petals Toggle */}
            <button
              className={`nav-action-btn particles-toggle-btn ${particlesEnabled ? 'active' : ''}`}
              onClick={onToggleParticles}
              title={particlesEnabled ? 'Pause floating petals' : 'Turn on romantic petals'}
              aria-label="Toggle romantic particles"
            >
              <Sparkles size={17} color={particlesEnabled ? '#cfa144' : 'currentColor'} />
            </button>

            {/* Mobile Hamburger Menu Button */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer animate-fade-in">
            <nav className="mobile-nav-links">
              <NavLink to="/" end onClick={closeMenu} className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}>
                Home
              </NavLink>
              <NavLink to="/bengaluru" onClick={closeMenu} className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}>
                Bengaluru (First Chapter)
              </NavLink>
              <NavLink to="/india" onClick={closeMenu} className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}>
                India (State Explorer)
              </NavLink>
              <NavLink to="/temples" onClick={closeMenu} className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}>
                Temples & 12 Jyotirlingas
              </NavLink>
              <NavLink to="/food" onClick={closeMenu} className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}>
                Food Explorer
              </NavLink>
              <NavLink to="/bucket-list" onClick={closeMenu} className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}>
                <span>Our Bucket List</span>
                {stats.totalSaved > 0 && <span className="nav-badge">{stats.totalSaved}</span>}
              </NavLink>
              <NavLink to="/trip-planner" onClick={closeMenu} className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}>
                Trip Planner
              </NavLink>
              <NavLink to="/gallery" onClick={closeMenu} className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}>
                Photo Gallery
              </NavLink>
              <NavLink to="/for-you" onClick={closeMenu} className={({ isActive }) => `mobile-link for-you-mobile ${isActive ? 'active' : ''}`}>
                <span>For You ❤️</span>
              </NavLink>
              <a href="tel:9353281575" onClick={closeMenu} className="mobile-link developer-mobile-link">
                <img src="/developer.png" alt="Y Jayaprakash Yadav" className="nav-dev-avatar" />
                <span>Developer: Y Jayaprakash Yadav</span>
              </a>
            </nav>
          </div>
        )}
      </header>

      <style>{`
        .navbar-header {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 999;
          background: rgba(254, 248, 242, 0.88);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(200, 109, 109, 0.16);
          transition: all 0.3s ease;
        }
        .navbar-header.scrolled {
          background: rgba(255, 252, 248, 0.96);
          box-shadow: 0 8px 25px rgba(100, 50, 40, 0.08);
          border-bottom-color: rgba(200, 109, 109, 0.25);
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          text-decoration: none;
        }
        .logo-icon {
          font-size: 1.55rem;
        }
        .logo-text-group {
          display: flex;
          flex-direction: column;
        }
        .logo-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-green-deep);
          line-height: 1.15;
          letter-spacing: -0.01em;
        }
        .logo-subtitle {
          font-family: var(--font-quote);
          font-size: 0.85rem;
          color: var(--color-rose-deep);
          font-style: italic;
          letter-spacing: 0.02em;
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1.35rem;
        }
        .nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-brown-mid);
          padding: 0.4rem 0.2rem;
          position: relative;
          transition: color 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }
        .nav-link:hover {
          color: var(--color-green-deep);
        }
        .nav-link.active {
          color: var(--color-green-deep);
          font-weight: 600;
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--color-rose-primary);
          border-radius: 2px;
        }
        .nav-badge {
          background: var(--color-rose-primary);
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.1rem 0.45rem;
          border-radius: var(--radius-pill);
        }
        .for-you-link {
          background: var(--color-rose-soft);
          color: var(--color-rose-deep) !important;
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-pill);
          border: 1px solid var(--color-rose-border);
        }
        .for-you-link:hover {
          background: var(--color-rose-primary);
          color: #ffffff !important;
        }
        .for-you-link:hover svg {
          fill: #ffffff !important;
          color: #ffffff !important;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }
        .nav-action-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--color-cream-subtle);
          border: 1px solid var(--color-cream-darker);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-brown-mid);
          transition: all 0.2s ease;
          position: relative;
        }
        .nav-action-btn:hover {
          background: #ffffff;
          color: var(--color-green-deep);
          border-color: var(--color-rose-primary);
          transform: translateY(-2px);
        }
        .search-trigger-btn {
          width: auto;
          border-radius: var(--radius-pill);
          padding: 0 0.85rem;
          gap: 0.5rem;
        }
        .search-key-hint {
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--color-brown-muted);
          background: #ffffff;
          padding: 0.15rem 0.35rem;
          border-radius: 4px;
          border: 1px solid var(--color-cream-darker);
        }
        .mobile-menu-toggle {
          display: none;
          color: var(--color-green-deep);
          padding: 6px;
        }
        .mobile-drawer {
          background: #ffffff;
          border-bottom: 1px solid var(--color-rose-border);
          padding: 1.25rem;
          box-shadow: var(--shadow-lg);
          max-height: calc(100vh - 70px);
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .mobile-link {
          font-size: 1.05rem;
          color: var(--color-brown-deep);
          padding: 0.6rem 0.5rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .mobile-link.active {
          color: var(--color-green-deep);
          font-weight: 700;
          background: var(--color-cream-subtle);
        }
        .for-you-mobile {
          background: var(--color-rose-soft);
          color: var(--color-rose-deep);
          font-weight: 600;
        }
        .developer-mobile-link {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          color: var(--color-green-deep);
          font-weight: 600;
          background: var(--color-gold-light);
          border: 1px solid var(--color-gold-border);
        }
        .nav-dev-avatar {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          object-fit: cover;
          object-position: 50% 18%;
          border: 1.5px solid var(--color-gold-accent);
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .desktop-nav {
            display: none;
          }
          .mobile-menu-toggle {
            display: flex;
          }
          .search-key-hint {
            display: none;
          }
        }
      `}</style>
    </>
  );
};
