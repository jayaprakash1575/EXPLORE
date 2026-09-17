import React, { useEffect, useRef } from 'react';

export const RomanticParticles = ({ enabled = true }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Create floating gentle rose petals and hearts
    const particleCount = 32;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 9 + 6,
      speedX: (Math.random() - 0.5) * 0.9,
      speedY: Math.random() * 0.7 + 0.35,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.025,
      opacity: Math.random() * 0.4 + 0.2,
      type: Math.random() > 0.35 ? 'petal' : 'heart',
      shade: Math.floor(Math.random() * 3) // 0: rich rose, 1: soft blush, 2: warm coral
    }));

    const drawHeart = (x, y, size, opacity, rotation, shade) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      const topCurveHeight = size * 0.3;
      ctx.moveTo(0, topCurveHeight);
      ctx.bezierCurveTo(
        -size / 2, -topCurveHeight,
        -size, topCurveHeight / 3,
        0, size
      );
      ctx.bezierCurveTo(
        size, topCurveHeight / 3,
        size / 2, -topCurveHeight,
        0, topCurveHeight
      );
      const colors = [
        `rgba(215, 85, 85, ${opacity})`,
        `rgba(235, 115, 115, ${opacity * 0.9})`,
        `rgba(207, 161, 68, ${opacity * 0.85})`
      ];
      ctx.fillStyle = colors[shade] || colors[0];
      ctx.shadowColor = 'rgba(215, 85, 85, 0.3)';
      ctx.shadowBlur = 4;
      ctx.fill();
      ctx.restore();
    };

    const drawPetal = (x, y, size, opacity, rotation, shade) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      ctx.ellipse(0, 0, size * 0.65, size * 1.25, 0, 0, Math.PI * 2);
      const colors = [
        `rgba(225, 105, 105, ${opacity})`,
        `rgba(240, 140, 135, ${opacity * 0.95})`,
        `rgba(245, 165, 150, ${opacity * 0.85})`
      ];
      ctx.fillStyle = colors[shade] || colors[0];
      ctx.shadowColor = 'rgba(200, 100, 100, 0.25)';
      ctx.shadowBlur = 3;
      ctx.fill();
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        if (p.type === 'heart') {
          drawHeart(p.x, p.y, p.size, p.opacity, p.rotation, p.shade);
        } else {
          drawPetal(p.x, p.y, p.size, p.opacity, p.rotation, p.shade);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="romantic-particles-canvas"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 50
      }}
    />
  );
};

