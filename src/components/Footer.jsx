import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Compass, MapPin, ArrowUp, Phone, MessageCircle } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Top Love Note Banner */}
        <div className="footer-love-banner">
          <div className="banner-heart-icon animate-pulse-heart">❤️</div>
          <h3 className="footer-headline">Made with ❤️ for someone special.</h3>
          <div className="footer-journey-quote">
            <p className="quote-part-1">"Our journey starts in Bengaluru..."</p>
            <p className="quote-part-2">"...but there's an entire India waiting for us."</p>
          </div>
        </div>

        <div className="footer-divider" />

        {/* Footer Navigation Columns */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <span className="footer-rose">🌹</span>
              <span className="footer-brand-title">Our Little Journey</span>
            </div>
            <p className="footer-brand-desc">
              From the morning filter coffee of Malleshwaram to the snows of Kashmir and the shores of Kanyakumari. A personal dream map made just for you.
            </p>
          </div>

          {/* Quick Chapters */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Chapters</h4>
            <ul className="footer-links">
              <li><Link to="/bengaluru">🌹 Chapter 01: Bengaluru</Link></li>
              <li><Link to="/india">🇮🇳 Chapter 02: Explore India</Link></li>
              <li><Link to="/temples">🛕 Sacred 12 Jyotirlingas</Link></li>
              <li><Link to="/food">🍛 India Through Food</Link></li>
            </ul>
          </div>

          {/* Couple Features */}
          <div className="footer-col">
            <h4 className="footer-col-title">Personal Features</h4>
            <ul className="footer-links">
              <li><Link to="/bucket-list">❤️ Our Bucket List</Link></li>
              <li><Link to="/trip-planner">🧭 Weekend & India Trip Planner</Link></li>
              <li><Link to="/gallery">📸 Places We Haven't Seen Yet</Link></li>
              <li><Link to="/for-you">💌 Love Letter For You</Link></li>
            </ul>
          </div>

          {/* Back to Top */}
          <div className="footer-col action-col">
            <h4 className="footer-col-title">To The Beginning</h4>
            <p className="action-col-desc">Ready to plan our next weekend getaway?</p>
            <button className="btn btn-secondary btn-sm back-to-top-btn" onClick={scrollToTop}>
              <ArrowUp size={15} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Website Developer & Contact Card */}
        <div className="footer-developer-card">
          <div className="dev-card-left">
            <a 
              href="https://www.instagram.com/jayaprakash__yadav" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="dev-avatar-wrap"
              title="Y Jayaprakash Yadav - Instagram @jayaprakash__yadav"
            >
              <img 
                src="/developer.png" 
                alt="Y Jayaprakash Yadav" 
                className="dev-avatar-img"
              />
              <span className="dev-status-indicator" title="Creator & Developer"></span>
            </a>
            <div className="dev-info-text">
              <span className="dev-badge">Website Developer & Creator</span>
              <h4 className="dev-name">Y JAYAPRAKASH YADAV</h4>
              <p className="dev-desc">Crafted this romantic travel exploration website with love, passion & modern design.</p>
            </div>
          </div>

          <div className="dev-contact-actions">
            {/* Direct Call / Mobile */}
            <a href="tel:9353281575" className="dev-contact-btn phone-btn" title="Call Y Jayaprakash Yadav: 9353281575">
              <Phone size={15} />
              <span>9353281575</span>
            </a>

            {/* WhatsApp Direct Chat */}
            <a 
              href="https://wa.me/919353281575?text=Hi%20Jayaprakash%2C%20loved%20the%20website%20Our%20Little%20Journey!" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="dev-contact-btn whatsapp-btn"
              title="Chat on WhatsApp: 9353281575"
            >
              <MessageCircle size={15} />
              <span>WhatsApp</span>
            </a>

            {/* Instagram Profile */}
            <a 
              href="https://www.instagram.com/jayaprakash__yadav" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="dev-contact-btn insta-btn"
              title="Follow Instagram: @jayaprakash__yadav"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>jayaprakash__yadav</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Our Little Journey. Crafted with ❤️ by <strong className="dev-credit-link">Y Jayaprakash Yadav</strong>.</p>
          <p className="footer-subtext">"Every road is better with you by my side."</p>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: #1e392a;
          color: #e8efe9;
          padding: 5rem 0 2rem 0;
          margin-top: 5rem;
          position: relative;
          overflow: hidden;
        }
        .site-footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: linear-gradient(90deg, #dfb15b, #c86d6d, #dfb15b);
        }
        .footer-love-banner {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .banner-heart-icon {
          font-size: 2.2rem;
          margin-bottom: 0.75rem;
        }
        .footer-headline {
          font-family: var(--font-heading);
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          color: #ffffff;
          margin-bottom: 0.75rem;
        }
        .footer-journey-quote {
          font-family: var(--font-quote);
          font-size: 1.35rem;
          color: #d2e4d7;
          font-style: italic;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .quote-part-1 {
          color: #ffffff;
        }
        .quote-part-2 {
          color: #dfb15b;
          font-weight: 600;
        }
        .footer-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.12);
          margin-bottom: 3rem;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 2.5rem;
          margin-bottom: 3.5rem;
        }
        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 0.85rem;
        }
        .footer-rose {
          font-size: 1.5rem;
        }
        .footer-brand-title {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          color: #ffffff;
          font-weight: 700;
        }
        .footer-brand-desc {
          font-size: 0.9rem;
          color: #b7cebe;
          line-height: 1.65;
          max-width: 340px;
        }
        .footer-col-title {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.25rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-links a {
          font-size: 0.88rem;
          color: #b7cebe;
          transition: all 0.2s ease;
        }
        .footer-links a:hover {
          color: #ffffff;
          transform: translateX(4px);
          display: inline-block;
        }
        .action-col-desc {
          font-size: 0.88rem;
          color: #b7cebe;
          margin-bottom: 1rem;
        }
        .back-to-top-btn {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.25);
        }
        .back-to-top-btn:hover {
          background: #ffffff;
          color: var(--color-green-deep);
        }
        /* Developer & Contact Card */
        .footer-developer-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%);
          border: 1.5px solid rgba(207, 161, 68, 0.35);
          border-radius: var(--radius-lg);
          padding: 1.8rem 2.2rem;
          margin-bottom: 2.8rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        .dev-card-left {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .dev-avatar-wrap {
          width: 74px;
          height: 74px;
          border-radius: 50%;
          padding: 3px;
          background: linear-gradient(135deg, #cfa144 0%, #c86565 50%, #dfb15b 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 20px rgba(207, 161, 68, 0.45), 0 0 0 2px rgba(255, 255, 255, 0.25);
          flex-shrink: 0;
          position: relative;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .dev-avatar-wrap:hover {
          transform: scale(1.08);
          box-shadow: 0 8px 25px rgba(207, 161, 68, 0.65), 0 0 0 3px rgba(255, 255, 255, 0.4);
        }
        .dev-avatar-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          object-position: 50% 18%;
          display: block;
        }
        .dev-status-indicator {
          position: absolute;
          bottom: 2px;
          right: 2px;
          width: 15px;
          height: 15px;
          background: #25d366;
          border: 2.5px solid #163321;
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(37, 211, 102, 0.85);
        }
        .dev-info-text {
          display: flex;
          flex-direction: column;
        }
        .dev-badge {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #dfb15b;
          margin-bottom: 0.2rem;
        }
        .dev-name {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          color: #ffffff;
          font-weight: 700;
          letter-spacing: 0.02em;
          margin-bottom: 0.25rem;
        }
        .dev-desc {
          font-size: 0.85rem;
          color: #b7cebe;
          line-height: 1.4;
        }
        .dev-contact-actions {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          flex-wrap: wrap;
        }
        .dev-contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 1.25rem;
          border-radius: var(--radius-pill);
          font-size: 0.88rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.25s ease;
          border: 1px solid transparent;
        }
        .dev-contact-btn.phone-btn {
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.25);
        }
        .dev-contact-btn.phone-btn:hover {
          background: #ffffff;
          color: #1e392a;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
        }
        .dev-contact-btn.whatsapp-btn {
          background: #25d366;
          color: #ffffff;
        }
        .dev-contact-btn.whatsapp-btn:hover {
          background: #20bd5a;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.35);
        }
        .dev-contact-btn.insta-btn {
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          color: #ffffff;
        }
        .dev-contact-btn.insta-btn:hover {
          opacity: 0.95;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(220, 39, 67, 0.4);
        }
        .dev-credit-link {
          color: #dfb15b;
          font-weight: 700;
        }
        @media (max-width: 768px) {
          .footer-developer-card {
            flex-direction: column;
            align-items: flex-start;
            padding: 1.5rem;
          }
          .dev-contact-actions {
            width: 100%;
          }
          .dev-contact-btn {
            flex: 1 1 auto;
            justify-content: center;
          }
        }
        .footer-bottom-bar {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
          color: #8fa996;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer-subtext {
          font-family: var(--font-quote);
          font-style: italic;
          color: #dfb15b;
          font-size: 1.05rem;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom-bar {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};
