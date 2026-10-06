import React, { useEffect, useState, useRef } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Progress Counter
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Seed sprouting canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const drawSeed = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2 + 20;

      const p = progress / 100; // 0 to 1

      // Soil line
      ctx.strokeStyle = '#2D5A3F';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx - 80, cy);
      ctx.lineTo(cx + 80, cy);
      ctx.stroke();

      // Seed
      ctx.fillStyle = '#D86A38';
      ctx.beginPath();
      ctx.ellipse(cx, cy - 2, 8, 5, 0, 0, Math.PI * 2);
      ctx.fill();

      // Stem sprouting upwards based on p
      if (p > 0.15) {
        const stemHeight = (p - 0.15) * 80;
        ctx.strokeStyle = '#8FA89B';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.quadraticCurveTo(cx - 10, cy - stemHeight / 2, cx, cy - stemHeight);
        ctx.stroke();

        // Leaves sprouting at top
        if (p > 0.5) {
          const leafScale = (p - 0.5) * 2;
          ctx.fillStyle = '#2D5A3F';

          // Left leaf
          ctx.beginPath();
          ctx.ellipse(cx - 12 * leafScale, cy - stemHeight - 5, 12 * leafScale, 6 * leafScale, -Math.PI / 4, 0, Math.PI * 2);
          ctx.fill();

          // Right leaf
          ctx.beginPath();
          ctx.ellipse(cx + 12 * leafScale, cy - stemHeight - 5, 12 * leafScale, 6 * leafScale, Math.PI / 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(drawSeed);
    };

    drawSeed();
    return () => cancelAnimationFrame(animId);
  }, [progress]);

  return (
    <div className={`preloader-overlay ${isDone ? 'done' : ''}`}>
      <div className="curtain curtain-left" />
      <div className="curtain curtain-right" />

      <div className="preloader-content">
        <canvas ref={canvasRef} width={200} height={200} className="sprout-canvas" />
        <div className="progress-value">{progress}%</div>
        <div className="preloader-tagline">Sri Satyadeva Nursery — Est. 1950</div>
      </div>

      <style>{`
        .preloader-overlay {
          position: fixed;
          inset: 0;
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0B1A12;
          overflow: hidden;
          transition: visibility 0.8s ease;
        }

        .curtain {
          position: absolute;
          top: 0;
          width: 50%;
          height: 100%;
          background: #0B1A12;
          z-index: 1;
          transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);
        }
        .curtain-left { left: 0; transform-origin: left; }
        .curtain-right { right: 0; transform-origin: right; }

        .preloader-overlay.done .curtain-left {
          transform: translateX(-100%);
        }
        .preloader-overlay.done .curtain-right {
          transform: translateX(100%);
        }
        .preloader-overlay.done .preloader-content {
          opacity: 0;
          transform: scale(0.9);
        }

        .preloader-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          color: #F4F1EA;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .sprout-canvas {
          width: 140px;
          height: 140px;
        }

        .progress-value {
          font-family: 'Fraunces', serif;
          font-size: 3rem;
          font-weight: 300;
          color: #D86A38;
          letter-spacing: -0.05em;
        }

        .preloader-tagline {
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: #8FA89B;
        }
      `}</style>
    </div>
  );
};
