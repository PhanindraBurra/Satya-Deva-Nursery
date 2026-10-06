import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react';
import { ThreePlantCanvas } from './ThreePlantCanvas';
import { NURSERY_DETAILS } from '../data/nurseryData';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // 1. Split Text animation for "Rooted in Care."
    if (titleRef.current) {
      const letters = titleRef.current.querySelectorAll('.char');
      gsap.fromTo(
        letters,
        { y: 100, opacity: 0, rotateX: -60 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.04,
          ease: 'power4.out',
          delay: 0.2,
        }
      );
    }

    // 2. Scroll Scrubbed Mask Expansion (Leaf/Arch clip-path expands to full screen)
    if (maskRef.current && heroRef.current) {
      gsap.fromTo(
        maskRef.current,
        {
          clipPath: 'polygon(25% 10%, 75% 10%, 90% 70%, 50% 98%, 10% 70%)',
          borderRadius: '40px',
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)',
          borderRadius: '0px',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            pin: false,
          },
        }
      );
    }
  }, []);

  const headlineText = "Rooted in Care.";

  return (
    <section ref={heroRef} className="hero-container">
      {/* Background Mask Video Container */}
      <div ref={maskRef} className="hero-video-mask">
        {/* Looping botanical nature video canvas/video element */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-bg-video"
          poster="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1600"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-sun-shining-through-the-leaves-of-a-tree-42524-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-video-overlay" />
      </div>

      {/* Hero Content Overlay */}
      <div className="hero-content">
        <div className="hero-eyebrow">
          <Sparkles size={16} />
          <span>SRI SATYADEVA NURSERY • EST. 1950</span>
        </div>

        {/* Rising Split Text Headline */}
        <h1 ref={titleRef} className="hero-title text-display-xl">
          {headlineText.split("").map((char, index) => (
            <span key={index} className="char" style={{ display: 'inline-block' }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p className="hero-subtitle">
          India's pioneer 120-acre botanical sanctuary in Kadiyam. Cultivating over 500+ rare species, exotic fruit grafts, and award-winning landscape masterworks for 75 years.
        </p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <a
            href="#catalogue"
            className="btn-editorial btn-primary"
            data-cursor-text="EXPLORE"
          >
            <span>Explore Nursery</span>
            <ArrowUpRight size={18} />
          </a>

          <a
            href={`https://wa.me/${NURSERY_DETAILS.whatsapp}?text=Hello%20Satyadeva%20Nursery,%20I%20would%20like%20to%20consult%20with%20your%20landscape%20expert.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-editorial"
            data-cursor-text="WHATSAPP"
          >
            <MessageCircle size={18} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* 3D Potted Plant Floating Badge */}
        <div className="hero-3d-badge" data-cursor-text="ORBIT 3D">
          <div className="badge-canvas-wrapper">
            <ThreePlantCanvas />
          </div>
          <div className="badge-text">
            <strong>Interactive 3D Specimen</strong>
            <span>Drag to rotate • Ficus Bonsai</span>
          </div>
        </div>
      </div>

      <style>{`
        .hero-container {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8rem 2rem 4rem;
          overflow: hidden;
        }

        .hero-video-mask {
          position: absolute;
          inset: 2rem;
          z-index: 1;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
          transition: clip-path 0.1s linear;
        }

        .hero-bg-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.05);
        }

        .hero-video-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(11, 26, 18, 0.75) 0%,
            rgba(11, 26, 18, 0.85) 50%,
            rgba(11, 26, 18, 0.95) 100%
          );
        }

        [data-theme="daylight"] .hero-video-overlay {
          background: linear-gradient(
            180deg,
            rgba(245, 243, 237, 0.75) 0%,
            rgba(245, 243, 237, 0.85) 50%,
            rgba(245, 243, 237, 0.95) 100%
          );
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.25rem;
          border-radius: var(--radius-full);
          background: rgba(45, 90, 63, 0.3);
          border: 1px solid var(--border-accent);
          color: var(--accent-sage);
          font-size: 0.85rem;
          letter-spacing: 0.2em;
          margin-bottom: 2rem;
        }

        .hero-title {
          font-size: clamp(3.5rem, 9vw, 8.5rem);
          font-weight: 300;
          color: var(--text-primary);
          line-height: 0.95;
          letter-spacing: -0.04em;
          margin-bottom: 2rem;
          perspective: 1000px;
        }

        .hero-subtitle {
          font-size: var(--font-body-lg);
          color: var(--text-secondary);
          max-width: 720px;
          line-height: 1.7;
          margin-bottom: 3rem;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 3rem;
        }

        .hero-3d-badge {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1.5rem 0.75rem 0.75rem;
          background: var(--bg-card);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-full);
          box-shadow: var(--shadow-lg);
        }

        .badge-canvas-wrapper {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          overflow: hidden;
          background: var(--bg-surface);
        }

        .badge-text {
          display: flex;
          flex-direction: column;
          text-align: left;
          font-size: 0.8rem;
        }

        .badge-text strong {
          color: var(--text-primary);
        }

        .badge-text span {
          color: var(--text-muted);
          font-size: 0.7rem;
        }

        @media (max-width: 768px) {
          .hero-container { padding-top: 6rem; }
          .hero-video-mask { inset: 0.5rem; }
        }
      `}</style>
    </section>
  );
};
