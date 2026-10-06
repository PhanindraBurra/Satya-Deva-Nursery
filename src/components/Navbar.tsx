import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, PhoneCall, Sparkles } from 'lucide-react';
import { NURSERY_DETAILS } from '../data/nurseryData';

interface NavbarProps {
  theme: 'dark' | 'daylight';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Manifesto', href: '#manifesto' },
    { name: 'Watch It Grow', href: '#watch-it-grow' },
    { name: 'Collections', href: '#collections' },
    { name: 'Catalogue', href: '#catalogue' },
    { name: 'Plant Doctor', href: '#plant-doctor' },
    { name: 'Services', href: '#services' },
    { name: 'Care Guide', href: '#care-guide' },
    { name: 'Our Story', href: '#story' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-pill">
          {/* Logo */}
          <a href="#" className="nav-brand">
            <span className="brand-icon">🌿</span>
            <div className="brand-text">
              <span className="brand-title">SATYADEVA</span>
              <span className="brand-sub">EST. 1950 • KADIYAM</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav">
            {navLinks.slice(0, 6).map((link) => (
              <a key={link.name} href={link.href} className="nav-item">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="nav-actions">
            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="theme-toggle-btn"
              title={`Switch to ${theme === 'dark' ? 'Daylight' : 'Dark Forest'} Mode`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* WhatsApp Contact Callout */}
            <a
              href={`https://wa.me/${NURSERY_DETAILS.whatsapp}?text=Hello%20Satyadeva%20Nursery,%20I%20would%20like%20to%20enquire%20about%20plants.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial nav-whatsapp-btn"
            >
              <PhoneCall size={14} />
              <span>Enquire</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-container">
          <div className="menu-header">
            <span className="eyebrow">SRI SATYADEVA NURSERY</span>
            <button className="close-btn" onClick={() => setIsMenuOpen(false)}>
              <X size={32} />
            </button>
          </div>

          <div className="menu-grid">
            <div className="menu-links">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="menu-link-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="link-num">0{idx + 1}</span>
                  <span className="link-text">{link.name}</span>
                </a>
              ))}
            </div>

            <div className="menu-sidebar">
              <div className="menu-widget">
                <Sparkles className="widget-icon" />
                <h3>Botanical Consultation</h3>
                <p>Visit our 120-acre mother plant orchards in Kadiyapulanka, AP or request nationwide freight delivery.</p>
                <div className="widget-info">
                  <strong>Call / WhatsApp:</strong> {NURSERY_DETAILS.phone}<br />
                  <strong>Hours:</strong> {NURSERY_DETAILS.timings}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .navbar-header {
          position: fixed;
          top: 1.5rem;
          left: 0;
          right: 0;
          z-index: 900;
          display: flex;
          justify-content: center;
          padding: 0 1rem;
          pointer-events: none;
        }

        .navbar-pill {
          pointer-events: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          width: 100%;
          max-width: 1200px;
          padding: 0.6rem 1.25rem;
          background: rgba(18, 40, 28, 0.75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-full);
          box-shadow: var(--shadow-lg);
          transition: var(--transition-smooth);
        }

        [data-theme="daylight"] .navbar-pill {
          background: rgba(245, 243, 237, 0.85);
          border-color: rgba(12, 30, 20, 0.15);
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: var(--text-primary);
        }

        .brand-icon {
          font-size: 1.5rem;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-title {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          line-height: 1;
        }

        .brand-sub {
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: var(--accent-sage);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-item {
          font-size: var(--font-body-sm);
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .nav-item:hover {
          color: var(--accent-terracotta);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .theme-toggle-btn {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid var(--border-light);
          color: var(--text-primary);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .theme-toggle-btn:hover {
          background: var(--accent-moss);
          color: #FFF;
        }

        .nav-whatsapp-btn {
          padding: 0.5rem 1.25rem;
          font-size: 0.75rem;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }

        /* Menu Overlay */
        .menu-overlay {
          position: fixed;
          inset: 0;
          background: var(--bg-deep);
          z-index: 990;
          opacity: 0;
          pointer-events: none;
          transform: translateY(-100%);
          transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
          padding: 2rem;
        }

        .menu-overlay.open {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }

        .menu-container {
          max-width: 1200px;
          margin: 0 auto;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border-light);
        }

        .close-btn {
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }

        .menu-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 4rem;
          margin-top: 3rem;
          height: calc(100% - 100px);
          align-items: center;
        }

        .menu-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .menu-link-item {
          display: flex;
          align-items: baseline;
          gap: 1.5rem;
          text-decoration: none;
          color: var(--text-primary);
          transition: var(--transition-fast);
        }

        .link-num {
          font-family: var(--font-mono);
          font-size: 1rem;
          color: var(--accent-terracotta);
        }

        .link-text {
          font-family: var(--font-serif);
          font-size: clamp(2rem, 3.5vw, 3.5rem);
          font-weight: 300;
        }

        .menu-link-item:hover .link-text {
          color: var(--accent-terracotta);
          transform: translateX(10px);
        }

        .menu-widget {
          background: var(--bg-card);
          padding: 2rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-medium);
        }

        .widget-icon {
          color: var(--accent-marigold);
          margin-bottom: 1rem;
        }

        .menu-widget h3 {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
        }

        .menu-widget p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .widget-info {
          font-size: 0.85rem;
          color: var(--text-muted);
          border-top: 1px solid var(--border-light);
          padding-top: 1rem;
        }

        @media (max-width: 900px) {
          .desktop-nav { display: none; }
          .mobile-toggle { display: block; }
          .menu-grid { grid-template-columns: 1fr; }
          .menu-sidebar { display: none; }
        }
      `}</style>
    </>
  );
};
