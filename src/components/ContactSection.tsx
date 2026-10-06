import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { NURSERY_DETAILS } from '../data/nurseryData';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    plantInterest: 'Fruit Trees',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Pre-fill WhatsApp message option
      const messageText = `Name: ${formData.name}%0APhone: ${formData.phone}%0AInterest: ${formData.plantInterest}%0AMessage: ${formData.message}`;
      window.open(`https://wa.me/${NURSERY_DETAILS.whatsapp}?text=${messageText}`, '_blank');
    }, 1000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">
          {/* Info & Styled Map */}
          <div className="contact-info-col">
            <div className="eyebrow">11 // CONNECT WITH KADIYAM</div>
            <h2 className="text-display-lg">Visit & Contact Us</h2>
            <p>Experience our 120-acre mother plant orchards or request nationwide plant freight shipping.</p>

            <div className="info-cards-list">
              <div className="info-card">
                <MapPin size={22} className="info-icon" />
                <div>
                  <strong>Nursery Location:</strong>
                  <p>{NURSERY_DETAILS.address}</p>
                </div>
              </div>

              <div className="info-card">
                <Phone size={22} className="info-icon" />
                <div>
                  <strong>Phone / WhatsApp:</strong>
                  <p>
                    <a href={`tel:${NURSERY_DETAILS.phone}`}>{NURSERY_DETAILS.phone}</a> /{' '}
                    <a href={`tel:${NURSERY_DETAILS.phoneSecondary}`}>{NURSERY_DETAILS.phoneSecondary}</a>
                  </p>
                </div>
              </div>

              <div className="info-card">
                <Mail size={22} className="info-icon" />
                <div>
                  <strong>Email Desk:</strong>
                  <p><a href={`mailto:${NURSERY_DETAILS.email}`}>{NURSERY_DETAILS.email}</a></p>
                </div>
              </div>

              <div className="info-card">
                <Clock size={22} className="info-icon" />
                <div>
                  <strong>Visiting Timings:</strong>
                  <p>{NURSERY_DETAILS.timings}</p>
                </div>
              </div>
            </div>

            {/* Dark Styled Map Card */}
            <div className="dark-map-card">
              <div className="map-badge font-mono">📍 KADIYAPULANKA GOOGLE MAPS</div>
              <div className="map-placeholder">
                <div className="pin-pulse" />
                <span>Sri Satyadeva Nursery Headquarters</span>
                <a
                  href="https://maps.google.com/?q=Satyadeva+Nursery+Kadiyapulanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial map-btn"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-col">
            <div className="form-card">
              <h3 className="text-display-md font-serif">Send an Enquiry</h3>
              <p>Our senior horticulturists respond within 2 business hours.</p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Varma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone / WhatsApp Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Plant Category Interest</label>
                    <select
                      value={formData.plantInterest}
                      onChange={(e) => setFormData({ ...formData, plantInterest: e.target.value })}
                    >
                      <option value="Fruit Trees">Fruit Graft Trees</option>
                      <option value="Indoor & Office">Indoor & Biophilic Setup</option>
                      <option value="Landscaping">Landscaping Master Project</option>
                      <option value="Wholesale">Wholesale Commercial Freight</option>
                      <option value="Bonsai">Bonsai Master Collection</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Message / Quantity Requirements</label>
                    <textarea
                      rows={4}
                      placeholder="Specify requirements, species, or land acreage..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-editorial btn-primary submit-btn">
                    <Send size={16} />
                    <span>Submit & Open WhatsApp</span>
                  </button>
                </form>
              ) : (
                <div className="form-success">
                  <CheckCircle2 size={48} color="#D86A38" />
                  <h4>Enquiry Received!</h4>
                  <p>Opening WhatsApp to complete your message with our team...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Action Button */}
      <a
        href={`https://wa.me/${NURSERY_DETAILS.whatsapp}?text=Hello%20Satyadeva%20Nursery,%20I%20want%20to%20chat.`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        title="Chat on WhatsApp"
        aria-label="Floating WhatsApp support button"
      >
        <MessageCircle size={28} />
        <span className="wa-pulse" />
      </a>

      <style>{`
        .contact-section {
          padding: 8rem 2rem;
          background: var(--bg-surface);
          position: relative;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
        }

        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-cards-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: 1rem;
        }

        .info-card {
          display: flex;
          gap: 1rem;
          background: var(--bg-card);
          padding: 1.25rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-medium);
        }

        .info-icon {
          color: var(--accent-terracotta);
          flex-shrink: 0;
        }

        .info-card strong {
          display: block;
          color: var(--text-primary);
          font-size: 0.9rem;
          margin-bottom: 0.2rem;
        }

        .info-card p, .info-card a {
          font-size: 0.9rem;
          color: var(--text-secondary);
          text-decoration: none;
        }

        .info-card a:hover {
          color: var(--accent-terracotta);
        }

        /* Dark Map Placeholder */
        .dark-map-card {
          margin-top: 1rem;
          background: #08120C;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          height: 220px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .map-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          font-size: 0.7rem;
          color: var(--accent-sage);
        }

        .map-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          text-align: center;
        }

        .pin-pulse {
          width: 14px;
          height: 14px;
          background: var(--accent-terracotta);
          border-radius: 50%;
          box-shadow: 0 0 0 8px rgba(216, 106, 56, 0.3);
          animation: pulsePin 2s infinite;
        }

        @keyframes pulsePin {
          0% { box-shadow: 0 0 0 0 rgba(216, 106, 56, 0.6); }
          70% { box-shadow: 0 0 0 16px rgba(216, 106, 56, 0); }
          100% { box-shadow: 0 0 0 0 rgba(216, 106, 56, 0); }
        }

        .map-btn {
          font-size: 0.75rem;
          padding: 0.5rem 1rem;
        }

        /* Form Column */
        .contact-form-col {
          display: flex;
          flex-direction: column;
        }

        .form-card {
          background: var(--bg-card);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          padding: 3rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent-sage);
        }

        .form-group input, .form-group select, .form-group textarea {
          width: 100%;
          padding: 0.9rem 1.25rem;
          background: var(--bg-surface);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-family: inherit;
          outline: none;
        }

        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          border-color: var(--accent-terracotta);
        }

        .submit-btn {
          margin-top: 1rem;
          justify-content: center;
        }

        .form-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 4rem 2rem;
          text-align: center;
        }

        /* Floating WhatsApp Button */
        .floating-whatsapp-btn {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 800;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #25D366;
          color: #FFF;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4);
          text-decoration: none;
          transition: transform 0.3s ease;
        }

        .floating-whatsapp-btn:hover {
          transform: scale(1.1);
        }

        .wa-pulse {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid #25D366;
          animation: pulseWA 2s infinite;
        }

        @keyframes pulseWA {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.4); opacity: 0; }
        }

        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
          .form-card { padding: 2rem 1.5rem; }
        }
      `}</style>
    </section>
  );
};
