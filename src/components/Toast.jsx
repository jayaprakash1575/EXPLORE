import React from 'react';
import { useBucketList } from '../context/BucketListContext';
import { Heart, Star, CheckCircle, Sparkles, X } from 'lucide-react';

export const Toast = () => {
  const { toastMessage, setToastMessage } = useBucketList();

  if (!toastMessage) return null;

  const renderIcon = () => {
    switch (toastMessage.type) {
      case 'star':
        return <Star size={18} className="toast-icon text-gold" fill="#dfb15b" color="#dfb15b" />;
      case 'check':
        return <CheckCircle size={18} className="toast-icon text-green" color="#234d35" />;
      case 'note':
        return <Sparkles size={18} className="toast-icon text-rose" color="#c86d6d" />;
      default:
        return <Heart size={18} className="toast-icon text-rose" fill="#c86d6d" color="#c86d6d" />;
    }
  };

  return (
    <div className="toast-container" role="alert" aria-live="polite">
      <div className="toast-card animate-fade-in">
        <div className="toast-icon-wrapper">
          {renderIcon()}
        </div>
        <p className="toast-text">{toastMessage.message}</p>
        <button
          onClick={() => setToastMessage(null)}
          className="toast-close-btn"
          aria-label="Close notification"
        >
          <X size={14} />
        </button>
      </div>

      <style>{`
        .toast-container {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 9999;
          pointer-events: none;
        }
        .toast-card {
          pointer-events: auto;
          background: #ffffff;
          border: 1px solid rgba(200, 109, 109, 0.35);
          box-shadow: 0 10px 30px rgba(50, 37, 30, 0.15);
          border-radius: var(--radius-pill);
          padding: 0.75rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          max-width: 420px;
        }
        .toast-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-rose-soft);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .toast-text {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-brown-deep);
          margin: 0;
          line-height: 1.35;
        }
        .toast-close-btn {
          color: var(--color-brown-muted);
          padding: 4px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .toast-close-btn:hover {
          color: var(--color-brown-deep);
          background: var(--color-cream-subtle);
        }
        @media (max-width: 600px) {
          .toast-container {
            bottom: 1.5rem;
            right: 1rem;
            left: 1rem;
          }
          .toast-card {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};
