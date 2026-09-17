import React, { useState, useEffect } from 'react';
import { Heart, Volume2, VolumeX, Sparkles, MapPin, Compass, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ForYou = () => {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [audioContext, setAudioContext] = useState(null);

  // Soft gentle harmonic romantic chord progression using Web Audio API (100% reliable, zero network dependency)
  useEffect(() => {
    let ctx = null;
    let interval = null;

    if (isPlayingMusic) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      ctx = new AudioCtx();
      setAudioContext(ctx);

      // Romantic gentle notes in Pentatonic Major (F, G, A, C, D)
      const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25]; // C4, D4, E4, G4, A4, C5
      let noteIndex = 0;

      const playGentleTone = () => {
        if (!ctx || ctx.state === 'closed') return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        const freq = notes[noteIndex % notes.length];
        noteIndex = (noteIndex + 1) % notes.length;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Soft envelope: swell gently then fade
        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 1.2);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 4.0);
      };

      playGentleTone();
      interval = setInterval(playGentleTone, 2800);
    } else {
      if (audioContext) {
        audioContext.close();
      }
    }

    return () => {
      if (interval) clearInterval(interval);
      if (ctx && ctx.state !== 'closed') ctx.close();
    };
  }, [isPlayingMusic]);

  return (
    <div className="for-you-page animate-fade-in">
      <div className="container-narrow section-padding">
        {/* Audio Ambient Player Toggle */}
        <div className="audio-toggle-bar">
          <button
            className={`music-btn ${isPlayingMusic ? 'playing' : ''}`}
            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          >
            {isPlayingMusic ? <Volume2 size={16} color="#c86d6d" /> : <VolumeX size={16} />}
            <span>{isPlayingMusic ? 'Playing Soft Romantic Chimes' : 'Play Gentle Ambient Music 🎵'}</span>
          </button>
        </div>

        {/* The Love Letter */}
        <div className="letter-envelope glass-panel">
          <div className="letter-heart-seal animate-pulse-heart">🌹</div>

          <span className="letter-super-heading">To My Favorite Travel Partner</span>
          <h1 className="letter-heading">For You, My Love ❤️</h1>

          <div className="letter-body">
            <p className="letter-paragraph opening-line">
              "This website is my personal gift to you.
            </p>

            <p className="letter-paragraph">
              When I look at a map of India, I don't just see mountains, rivers, ancient temples, or busy streets.
              I see all the places where I want to see you smile.
            </p>

            <p className="letter-paragraph">
              I picture us drinking hot filter coffee on a cool rainy morning in Malleshwaram.
              I picture us holding hands on the cliffs of Varkala watching the Arabian Sea turn into gold.
              I picture us gliding across Lake Pichola in Udaipur, wrapped up warm against the chill of a hill station, and looking up at the millions of stars above Nandi Hills.
            </p>

            <p className="letter-paragraph highlight-quote">
              "This isn't just a list of places.<br />
              It's a collection of places I'd love to see someday...<br />
              and memories I'd love to make with you."
            </p>

            <p className="letter-paragraph">
              So let's start somewhere close. Let's start right here in Bengaluru.
              And when we're ready, the entire beauty of India is waiting for us.
            </p>

            <p className="letter-paragraph final-words">
              Wherever this journey takes us... every road is perfect as long as it's with you.
            </p>
          </div>

          <div className="letter-signature-block">
            <span className="sign-label">With all my love,</span>
            <span className="sign-name">Yours Always ❤️</span>
          </div>

          {/* Romantic Quick Navigator */}
          <div className="letter-actions">
            <Link to="/bengaluru" className="btn btn-primary">
              <span>Start in Bengaluru</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/bucket-list" className="btn btn-rose">
              <span>Our Bucket List</span>
              <Heart size={16} />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .for-you-page {
          padding: 4rem 0 6rem 0;
          background: 
            radial-gradient(ellipse 70% 60% at 50% 25%, rgba(254, 218, 215, 0.65) 0%, rgba(255, 238, 230, 0.45) 50%, transparent 80%),
            linear-gradient(180deg, #fdf8f4 0%, #fbece3 40%, #f8e5db 100%);
          min-height: 85vh;
          position: relative;
        }
        .audio-toggle-bar {
          display: flex;
          justify-content: center;
          margin-bottom: 2.5rem;
        }
        .music-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(8px);
          padding: 0.7rem 1.45rem;
          border-radius: var(--radius-pill);
          border: 1.5px solid var(--color-rose-border);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-brown-deep);
          box-shadow: var(--shadow-sm);
          transition: all 0.2s ease;
        }
        .music-btn:hover {
          background: #ffffff;
          border-color: var(--color-rose-primary);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        .music-btn.playing {
          background: var(--color-rose-soft);
          border-color: var(--color-rose-primary);
          color: var(--color-rose-deep);
          box-shadow: 0 4px 15px rgba(200, 109, 109, 0.2);
        }
        .letter-envelope {
          background: linear-gradient(155deg, #ffffff 0%, #fffcf8 40%, #fdf5ef 100%);
          border-radius: var(--radius-lg);
          padding: 4.8rem 3.8rem;
          border: 1.5px solid rgba(200, 109, 109, 0.4);
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.9) inset,
            0 0 0 6px rgba(207, 161, 68, 0.18),
            0 30px 75px rgba(184, 85, 85, 0.18),
            0 8px 25px rgba(78, 52, 46, 0.08);
          text-align: center;
          position: relative;
        }
        .letter-envelope::after {
          content: '';
          position: absolute;
          inset: 16px;
          border: 1.5px dashed rgba(207, 161, 68, 0.4);
          border-radius: calc(var(--radius-lg) - 8px);
          pointer-events: none;
        }
        .letter-heart-seal {
          font-size: 3rem;
          margin-bottom: 1.25rem;
        }
        .letter-super-heading {
          display: inline-block;
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-rose-deep);
          margin-bottom: 0.5rem;
        }
        .letter-heading {
          font-size: clamp(2.4rem, 4vw, 3.4rem);
          color: var(--color-green-deep);
          margin-bottom: 2.5rem;
        }
        .letter-body {
          text-align: left;
          max-width: 640px;
          margin: 0 auto 3rem auto;
        }
        .letter-paragraph {
          font-family: var(--font-quote);
          font-size: 1.45rem;
          line-height: 1.85;
          color: var(--color-brown-deep);
          margin-bottom: 1.75rem;
        }
        .opening-line {
          font-size: 1.6rem;
          color: var(--color-green-deep);
          font-weight: 600;
        }
        .highlight-quote {
          background: var(--color-rose-soft);
          border-left: 3px solid var(--color-rose-primary);
          padding: 1.5rem 1.85rem;
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          font-style: italic;
          color: var(--color-rose-deep);
          margin: 2rem 0;
          line-height: 1.7;
        }
        .final-words {
          font-size: 1.55rem;
          color: var(--color-green-deep);
          font-style: italic;
          font-weight: 600;
        }
        .letter-signature-block {
          margin-bottom: 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .sign-label {
          font-family: var(--font-quote);
          font-size: 1.25rem;
          font-style: italic;
          color: var(--color-brown-muted);
        }
        .sign-name {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--color-rose-deep);
        }
        .letter-actions {
          display: flex;
          justify-content: center;
          gap: 1.25rem;
          border-top: 1px solid var(--color-cream-darker);
          padding-top: 2.5rem;
          flex-wrap: wrap;
        }

        @media (max-width: 600px) {
          .letter-envelope {
            padding: 3rem 1.5rem;
          }
          .letter-paragraph {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};
