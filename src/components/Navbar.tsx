import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, MessageCircle } from 'lucide-react';
import { NURSERY_DETAILS } from '../data/nurseryData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Categories', href: '#categories' },
    { name: 'Catalogue', href: '#catalogue' },
    { name: 'Plant Doctor', href: '#plant-doctor' },
    { name: 'Services', href: '#services' },
    { name: 'Care Guide', href: '#care-guide' },
    { name: 'About Us', href: '#story' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo */}
          <a href="#" className="nav-brand">
            <span className="brand-leaf font-serif">🌿</span>
            <div className="brand-text">
              <span className="brand-name font-serif">SRI SATYADEVA NURSERY</span>
              <span className="brand-tagline">EST. 1950 • KADIYAM, AP</span>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Call & WhatsApp CTAs */}
          <div className="nav-cta-group">
            <a href={`tel:${NURSERY_DETAILS.phone}`} className="btn btn-outline nav-call-btn">
              <PhoneCall size={15} />
              <span>{NURSERY_DETAILS.phone}</span>
            </a>

            <a
              href={`https://wa.me/${NURSERY_DETAILS.whatsapp}?text=Hello%20Satyadeva%20Nursery,%20I%20would%20like%20to%20enquire%20about%20plants.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp nav-wa-btn"
            >
              <MessageCircle size={15} />
              <span>WhatsApp</span>
            </a>

            <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <span className="font-serif drawer-logo">SRI SATYADEVA NURSERY</span>
          <button className="drawer-close" onClick={() => setIsMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="drawer-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="drawer-link-item"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="drawer-footer">
          <p><strong>Call Desk:</strong> {NURSERY_DETAILS.phone}</p>
          <p><strong>Hours:</strong> {NURSERY_DETAILS.timings}</p>
        </div>
      </div>

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(250, 250, 247, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-light);
          padding: 0.85rem 1.5rem;
          transition: var(--transition-smooth);
        }

        .navbar-header.scrolled {
          box-shadow: var(--shadow-sm);
          padding: 0.65rem 1.5rem;
        }

        .navbar-container {
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: var(--color-primary);
        }

        .brand-leaf {
          font-size: 1.6rem;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-size: 1.15rem;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: 0.02em;
        }

        .brand-tagline {
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .nav-link:hover {
          color: var(--color-primary);
        }

        .nav-cta-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .nav-call-btn, .nav-wa-btn {
          padding: 0.6rem 1.25rem;
          font-size: 0.8rem;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--color-primary);
          cursor: pointer;
        }

        /* Mobile Drawer */
        .mobile-drawer {
          position: fixed;
          inset: 0;
          background: var(--bg-main);
          z-index: 1100;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          padding: 2rem;
        }

        .mobile-drawer.open {
          transform: translateX(0);
        }

        .drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-medium);
        }

        .drawer-logo {
          font-size: 1.2rem;
          color: var(--color-primary);
        }

        .drawer-close {
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }

        .drawer-links {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: 2rem;
        }

        .drawer-link-item {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          color: var(--color-primary);
          text-decoration: none;
        }

        .drawer-footer {
          margin-top: auto;
          padding-top: 2rem;
          border-top: 1px solid var(--border-light);
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        @media (max-width: 1024px) {
          .desktop-nav { display: none; }
          .nav-call-btn { display: none; }
          .mobile-toggle { display: block; }
        }
      `}</style>
    </>
  );
};
