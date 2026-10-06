import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const WatchItGrow: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0); // 0 to 1

  useEffect(() => {
    if (!sectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: '+=800',
      pin: true,
      scrub: 0.3,
      onUpdate: (self) => {
        setScrollProgress(self.progress);
      },
    });

    return () => trigger.kill();
  }, []);

  // Simplified Procedural Canvas Renderer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      if (canvas.width !== rect.width || canvas.height !== rect.height) {
        canvas.width = rect.width;
        canvas.height = rect.height;
      }

      const w = canvas.width;
      const h = canvas.height;
      const horizonY = h * 0.62; // Soil line
      const cx = w > 768 ? w * 0.62 : w * 0.5;
      const p = Math.min(1, Math.max(0, scrollProgress));

      // 1. Clean Atmospheric Sky
      const skyGrad = ctx.createLinearGradient(0, 0, 0, horizonY);
      if (p < 0.5) {
        skyGrad.addColorStop(0, '#1E3A2B');
        skyGrad.addColorStop(1, '#0B1A12');
      } else {
        skyGrad.addColorStop(0, '#3A5A46');
        skyGrad.addColorStop(1, '#12281C');
      }
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, w, horizonY);

      // Sun trajectory
      const sunX = w * 0.2 + p * (w * 0.6);
      const sunY = horizonY - 40 - Math.sin(p * Math.PI) * (horizonY * 0.45);
      ctx.fillStyle = '#E5A93C';
      ctx.shadowColor = '#E5A93C';
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.arc(sunX, sunY, 18, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // 2. Soil Horizon Base
      const soilGrad = ctx.createLinearGradient(0, horizonY, 0, h);
      soilGrad.addColorStop(0, '#1C130E');
      soilGrad.addColorStop(1, '#0A0605');
      ctx.fillStyle = soilGrad;
      ctx.fillRect(0, horizonY, w, h - horizonY);

      ctx.strokeStyle = '#2D5A3F';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, horizonY);
      ctx.lineTo(w, horizonY);
      ctx.stroke();

      // 3. Simplified Seed & Roots
      ctx.fillStyle = '#D86A38';
      ctx.beginPath();
      ctx.ellipse(cx, horizonY + 10, 8, 5, 0, 0, Math.PI * 2);
      ctx.fill();

      // Underground roots
      if (p > 0.05) {
        const rootLen = (h - horizonY) * p * 0.6;
        ctx.strokeStyle = '#8FA89B';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cx, horizonY + 12);
        ctx.lineTo(cx - 20, horizonY + 12 + rootLen);
        ctx.moveTo(cx, horizonY + 12);
        ctx.lineTo(cx + 25, horizonY + 12 + rootLen * 0.85);
        ctx.stroke();
      }

      // 4. Swift Stem & Foliage Growth
      if (p > 0.1) {
        const stemProgress = (p - 0.1) / 0.9;
        const stemHeight = horizonY * 0.6 * stemProgress;

        // Main trunk
        ctx.strokeStyle = '#4A3525';
        ctx.lineWidth = 10 * (1 - stemProgress * 0.3);
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(cx, horizonY);
        ctx.lineTo(cx, horizonY - stemHeight);
        ctx.stroke();

        // Branches & Leaves when stem reaches 40% height
        if (stemProgress > 0.3) {
          const bLen = stemHeight * 0.45;
          const topY = horizonY - stemHeight;

          ctx.strokeStyle = '#2D5A3F';
          ctx.lineWidth = 4;
          // Left Branch
          ctx.beginPath();
          ctx.moveTo(cx, topY + bLen * 0.5);
          ctx.lineTo(cx - bLen, topY);
          ctx.stroke();

          // Right Branch
          ctx.beginPath();
          ctx.moveTo(cx, topY + bLen * 0.5);
          ctx.lineTo(cx + bLen, topY - bLen * 0.2);
          ctx.stroke();

          // Foliage Clusters
          const leafScale = Math.min(1, (stemProgress - 0.3) * 1.4);
          ctx.fillStyle = '#2D5A3F';
          ctx.beginPath();
          ctx.arc(cx - bLen, topY, 22 * leafScale, 0, Math.PI * 2);
          ctx.arc(cx + bLen, topY - bLen * 0.2, 26 * leafScale, 0, Math.PI * 2);
          ctx.arc(cx, topY - 10, 32 * leafScale, 0, Math.PI * 2);
          ctx.fill();

          // Flowers blooming at full growth
          if (stemProgress > 0.75) {
            ctx.fillStyle = '#D86A38';
            ctx.beginPath();
            ctx.arc(cx - bLen + 8, topY - 5, 6, 0, Math.PI * 2);
            ctx.arc(cx + bLen - 6, topY - bLen * 0.2 - 8, 7, 0, Math.PI * 2);
            ctx.arc(cx + 10, topY - 25, 8, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [scrollProgress]);

  const currentStage = scrollProgress < 0.5 ? 'Stage 1: Germination & Sprout' : 'Stage 2: Full Foliage & Bloom';

  return (
    <section ref={sectionRef} id="watch-it-grow" className="grow-section">
      <canvas ref={canvasRef} className="grow-canvas" />

      {/* Simplified Compact UI Overlay */}
      <div className="grow-ui-overlay">
        <div className="grow-header">
          <div className="eyebrow">02 // PROCEDURAL PLANT GROWTH</div>
          <h2 className="text-display-md">Watch It Grow.</h2>
          <p>Scrub down to observe natural plant growth from Kadiyam soil.</p>
        </div>

        <div className="grow-stage-badge font-mono">
          <Sparkles size={14} className="badge-icon" />
          <span>{currentStage}</span>
        </div>
      </div>

      <style>{`
        .grow-section {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          background: #0B1A12;
        }

        .grow-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .grow-ui-overlay {
          position: relative;
          z-index: 20;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 6rem 2.5rem 3rem;
          pointer-events: none;
        }

        .grow-header {
          pointer-events: auto;
          max-width: 360px;
          background: rgba(18, 40, 28, 0.45);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          padding: 1.25rem 1.5rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
        }

        .grow-header h2 {
          margin: 0.25rem 0;
        }

        .grow-header p {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .grow-stage-badge {
          pointer-events: auto;
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--accent-terracotta);
          color: #FFF;
          padding: 0.5rem 1.25rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          box-shadow: 0 4px 15px rgba(216, 106, 56, 0.3);
        }

        .badge-icon {
          color: var(--accent-marigold);
        }

        @media (max-width: 768px) {
          .grow-ui-overlay { padding: 5rem 1.25rem 2rem; }
          .grow-header { max-width: 100%; }
        }
      `}</style>
    </section>
  );
};
