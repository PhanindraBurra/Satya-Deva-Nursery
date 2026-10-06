import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CloudRain, Sun, Zap, RefreshCw } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const WatchItGrow: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0); // 0 to 1
  const [activeWeather, setActiveWeather] = useState<'rain' | 'sun' | 'fertilizer' | null>(null);
  const [manualBoost, setManualBoost] = useState(0);

  // Weather particle systems
  const rainDropsRef = useRef<{ x: number; y: number; speed: number }[]>([]);
  const sparkParticlesRef = useRef<{ x: number; y: number; vx: number; vy: number; life: number }[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: '+=2500',
      pin: true,
      scrub: 0.5,
      onUpdate: (self) => {
        setScrollProgress(self.progress);
      },
    });

    return () => trigger.kill();
  }, []);

  // Procedural Canvas Renderer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let windAngle = 0;

    const render = () => {
      // Resize canvas to match display size
      const rect = canvas.getBoundingClientRect();
      if (canvas.width !== rect.width || canvas.height !== rect.height) {
        canvas.width = rect.width;
        canvas.height = rect.height;
      }

      const w = canvas.width;
      const h = canvas.height;
      const horizonY = h * 0.6; // Soil boundary at 60% height
      // Offset plant to center-right (62% width) to leave left side clear for header text & sun arc
      const cx = w > 768 ? w * 0.62 : w * 0.5;

      // Calculate effective growth progress (combining scroll + manual boost)
      const p = Math.min(1, Math.max(0, scrollProgress + manualBoost));

      // Wind sway factor
      windAngle += 0.03;
      const windSway = Math.sin(windAngle) * 0.05 * p;

      // 1. Draw Day-to-Night Sky Background
      const skyGrad = ctx.createLinearGradient(0, 0, 0, horizonY);
      if (p < 0.4) {
        skyGrad.addColorStop(0, '#1E3A2B');
        skyGrad.addColorStop(1, '#0B1A12');
      } else if (p < 0.7) {
        skyGrad.addColorStop(0, '#7A3B18');
        skyGrad.addColorStop(1, '#1A0E08');
      } else {
        skyGrad.addColorStop(0, '#050D09');
        skyGrad.addColorStop(1, '#09150E');
      }
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, w, horizonY);

      // Stars at night (if p > 0.6)
      if (p > 0.6) {
        ctx.fillStyle = `rgba(244, 241, 234, ${(p - 0.6) * 2})`;
        for (let i = 0; i < 40; i++) {
          const sx = (Math.sin(i * 99) * 0.5 + 0.5) * w;
          const sy = (Math.cos(i * 33) * 0.5 + 0.5) * (horizonY - 20);
          ctx.beginPath();
          ctx.arc(sx, sy, (i % 3 === 0 ? 2 : 1), 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Wide Sun / Moon Arc Trajectory across the sky (from 15% width to 85% width)
      const celestialX = (w * 0.15) + p * (w * 0.7);
      const celestialY = (horizonY - 40) - Math.sin(p * Math.PI) * (horizonY * 0.55);

      if (p < 0.75) {
        // Sun
        ctx.fillStyle = '#E5A93C';
        ctx.shadowColor = '#E5A93C';
        ctx.shadowBlur = 25;
        ctx.beginPath();
        ctx.arc(celestialX, celestialY, 20, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      } else {
        // Moon
        ctx.fillStyle = '#F4F1EA';
        ctx.shadowColor = '#F4F1EA';
        ctx.shadowBlur = 18;
        ctx.beginPath();
        ctx.arc(celestialX, celestialY, 16, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 2. Underground Soil Cross-Section (Bottom Half)
      const soilGrad = ctx.createLinearGradient(0, horizonY, 0, h);
      soilGrad.addColorStop(0, '#1F1510');
      soilGrad.addColorStop(0.3, '#140D0A');
      soilGrad.addColorStop(1, '#0A0605');
      ctx.fillStyle = soilGrad;
      ctx.fillRect(0, horizonY, w, h - horizonY);

      // Soil horizon line accent
      ctx.strokeStyle = '#2D5A3F';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, horizonY);
      ctx.lineTo(w, horizonY);
      ctx.stroke();

      ctx.fillStyle = '#8FA89B';
      ctx.font = '11px Courier New';
      ctx.fillText('ROOT ZONE • SOIL HORIZON', 20, horizonY + 20);

      // 3. Stage 1: Seed in Soil (p: 0 - 0.15)
      ctx.fillStyle = '#D86A38';
      ctx.beginPath();
      ctx.ellipse(cx, horizonY + 12, 10, 6, 0, 0, Math.PI * 2);
      ctx.fill();

      // 4. Stage 2: Roots Spreading Underground (p: 0.10 - 0.9)
      if (p > 0.08) {
        const rootProgress = Math.min(1, (p - 0.08) / 0.85);
        drawRoots(ctx, cx, horizonY + 14, rootProgress, h - horizonY);
      }

      // 5. Stage 3, 4, 5: Plant Stem, Branching, Leaves & Flowers (p: 0.15 - 1.0)
      if (p > 0.15) {
        const stemProgress = Math.min(1, (p - 0.15) / 0.85);
        const maxStemHeight = horizonY * 0.75;
        drawTreeBranch(ctx, cx, horizonY, -Math.PI / 2 + windSway, maxStemHeight * stemProgress, stemProgress, 14, windSway);
      }

      // 6. Active Weather Particles (Rain / Sunlight / Fertilizer Sparks)
      if (activeWeather === 'rain') {
        if (rainDropsRef.current.length < 50) {
          rainDropsRef.current.push({ x: Math.random() * w, y: 0, speed: 8 + Math.random() * 8 });
        }
        ctx.strokeStyle = 'rgba(143, 168, 155, 0.6)';
        ctx.lineWidth = 1.5;
        rainDropsRef.current.forEach((drop) => {
          drop.y += drop.speed;
          if (drop.y > h) drop.y = 0;
          ctx.beginPath();
          ctx.moveTo(drop.x, drop.y);
          ctx.lineTo(drop.x - 2, drop.y + 12);
          ctx.stroke();
        });
      }

      if (activeWeather === 'fertilizer') {
        if (sparkParticlesRef.current.length < 40) {
          sparkParticlesRef.current.push({
            x: cx + (Math.random() - 0.5) * 200,
            y: horizonY + Math.random() * 100,
            vx: (Math.random() - 0.5) * 2,
            vy: -1 - Math.random() * 2,
            life: 1,
          });
        }
        sparkParticlesRef.current.forEach((spark) => {
          spark.x += spark.vx;
          spark.y += spark.vy;
          spark.life -= 0.02;
          ctx.fillStyle = `rgba(229, 169, 60, ${Math.max(0, spark.life)})`;
          ctx.beginPath();
          ctx.arc(spark.x, spark.y, 3, 0, Math.PI * 2);
          ctx.fill();
        });
        sparkParticlesRef.current = sparkParticlesRef.current.filter((s) => s.life > 0);
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [scrollProgress, manualBoost, activeWeather]);

  // Recursive Root Engine
  const drawRoots = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    progress: number,
    maxDepth: number
  ) => {
    const depth = maxDepth * progress * 0.8;
    ctx.strokeStyle = '#8FA89B';
    ctx.lineWidth = 2.5;

    // Central tap root
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.quadraticCurveTo(x - 15, y + depth * 0.5, x, y + depth);
    ctx.stroke();

    // Side lateral roots
    if (progress > 0.3) {
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(x, y + 20);
      ctx.lineTo(x - 60 * progress, y + depth * 0.6);
      ctx.moveTo(x, y + 35);
      ctx.lineTo(x + 70 * progress, y + depth * 0.7);
      ctx.stroke();
    }
  };

  // Recursive Tree / Branching Engine
  const drawTreeBranch = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    angle: number,
    length: number,
    overallProgress: number,
    thickness: number,
    sway: number
  ) => {
    if (length < 10 || thickness < 1) return;

    const x2 = x + Math.cos(angle) * length;
    const y2 = y + Math.sin(angle) * length;

    ctx.strokeStyle = thickness > 6 ? '#4A3525' : '#2D5A3F';
    ctx.lineWidth = thickness;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    // Sub-branches if growth progress permits
    if (overallProgress > 0.3 && thickness > 3) {
      drawTreeBranch(
        ctx,
        x2,
        y2,
        angle - 0.45 + sway,
        length * 0.68,
        overallProgress,
        thickness * 0.65,
        sway
      );
      drawTreeBranch(
        ctx,
        x2,
        y2,
        angle + 0.45 + sway,
        length * 0.68,
        overallProgress,
        thickness * 0.65,
        sway
      );
    }

    // Unfold Leaves & Flowers at terminal branches
    if (thickness <= 4 && overallProgress > 0.5) {
      const leafScale = Math.min(1, (overallProgress - 0.5) * 2);
      ctx.fillStyle = '#2D5A3F';
      ctx.beginPath();
      ctx.ellipse(x2, y2, 10 * leafScale, 5 * leafScale, angle, 0, Math.PI * 2);
      ctx.fill();

      // Flower / Fruit blooming at full maturity
      if (overallProgress > 0.85) {
        ctx.fillStyle = '#D86A38';
        ctx.beginPath();
        ctx.arc(x2 + 4, y2 - 4, 6 * leafScale, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  };

  const currentTimelineStage =
    scrollProgress < 0.25
      ? 'Day 1: Seed & Germination'
      : scrollProgress < 0.5
      ? 'Week 2: Underground Roots & Sprout'
      : scrollProgress < 0.75
      ? 'Month 3: Stem Branching & Foliage'
      : 'Year 1: Full Bloom & Fruit Harvest';

  return (
    <section ref={sectionRef} id="watch-it-grow" className="grow-section">
      <canvas ref={canvasRef} className="grow-canvas" />

      {/* Pinned UI Overlay */}
      <div className="grow-ui-overlay">
        <div className="grow-header">
          <div className="eyebrow">02 // SIGNATURE PROCEDURAL SIMULATION</div>
          <h2 className="text-display-md">Watch It Grow.</h2>
          <p>Scroll down to scrub through the 365-day lifecycle of a Kadiyam fruit tree.</p>
        </div>

        {/* Vertical Timeline Indicator */}
        <div className="grow-timeline font-mono">
          <div className="timeline-badge">{currentTimelineStage}</div>
          <div className="timeline-track">
            <div className="timeline-fill" style={{ height: `${scrollProgress * 100}%` }} />
          </div>
        </div>

        {/* Interactive Weather Controls */}
        <div className="weather-toolbar">
          <span>Speed up growth:</span>
          <button
            className={`weather-btn ${activeWeather === 'rain' ? 'active' : ''}`}
            onClick={() => {
              setActiveWeather('rain');
              setManualBoost((prev) => Math.min(0.4, prev + 0.1));
            }}
          >
            <CloudRain size={16} />
            <span>Water</span>
          </button>

          <button
            className={`weather-btn ${activeWeather === 'sun' ? 'active' : ''}`}
            onClick={() => {
              setActiveWeather('sun');
              setManualBoost((prev) => Math.min(0.4, prev + 0.1));
            }}
          >
            <Sun size={16} />
            <span>Sunlight</span>
          </button>

          <button
            className={`weather-btn ${activeWeather === 'fertilizer' ? 'active' : ''}`}
            onClick={() => {
              setActiveWeather('fertilizer');
              setManualBoost((prev) => Math.min(0.4, prev + 0.1));
            }}
          >
            <Zap size={16} />
            <span>Fertilizer</span>
          </button>

          {manualBoost > 0 && (
            <button className="weather-btn reset" onClick={() => { setManualBoost(0); setActiveWeather(null); }}>
              <RefreshCw size={14} />
            </button>
          )}
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
          padding: 6rem 3rem 3rem;
          pointer-events: none;
        }

        .grow-header {
          pointer-events: auto;
          max-width: 380px;
          background: rgba(18, 40, 28, 0.45);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          padding: 1.25rem 1.75rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
          box-shadow: 0 10px 30px rgba(0,0,0,0.25);
        }

        .grow-header h2 {
          margin: 0.35rem 0;
        }

        .grow-header p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .grow-timeline {
          position: absolute;
          right: 3rem;
          top: 30%;
          bottom: 30%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          pointer-events: auto;
        }

        .timeline-badge {
          background: var(--accent-terracotta);
          color: #FFF;
          padding: 0.4rem 1rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          white-space: nowrap;
        }

        .timeline-track {
          width: 3px;
          height: 100%;
          background: var(--border-medium);
          position: relative;
          border-radius: 2px;
        }

        .timeline-fill {
          position: absolute;
          top: 0;
          width: 100%;
          background: var(--accent-terracotta);
          border-radius: 2px;
          transition: height 0.1s linear;
        }

        .weather-toolbar {
          pointer-events: auto;
          align-self: center;
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1.5rem;
          background: rgba(18, 40, 28, 0.85);
          backdrop-filter: blur(16px);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-full);
          color: var(--text-secondary);
          font-size: 0.85rem;
        }

        .weather-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-full);
          background: var(--bg-card);
          border: 1px solid var(--border-medium);
          color: var(--text-primary);
          cursor: pointer;
          font-size: 0.8rem;
          transition: var(--transition-fast);
        }

        .weather-btn:hover, .weather-btn.active {
          background: var(--accent-moss);
          border-color: var(--accent-sage);
        }

        .weather-btn.reset {
          padding: 0.5rem;
        }

        @media (max-width: 768px) {
          .grow-ui-overlay { padding: 5rem 1.5rem 2rem; }
          .grow-timeline { display: none; }
          .weather-toolbar { flex-wrap: wrap; justify-content: center; }
          .grow-header { max-width: 100%; }
        }
      `}</style>
    </section>
  );
};
