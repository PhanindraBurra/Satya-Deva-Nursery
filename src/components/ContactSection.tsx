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
      const msg = `Name: ${formData.name}%0APhone: ${formData.phone}%0AInterest: ${formData.plantInterest}%0AMessage: ${formData.message}`;
      window.open(`https://wa.me/${NURSERY_DETAILS.whatsapp}?text=${msg}`, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">
          {/* Info Block */}
          <div className="contact-info">
            <div className="eyebrow">VISIT & CONTACT DESK</div>
            <h2 className="section-heading">Get in Touch with Kadiyam</h2>
            <p className="contact-desc">
              Visit our 120-acre mother plant orchards or contact our horticulturists for plant orders and nationwide freight quotes.
            </p>

            <div className="info-cards-list">
              <div className="info-item">
                <MapPin size={20} className="info-icon" />
                <div>
                  <strong>Nursery Address:</strong>
                  <p>{NURSERY_DETAILS.address}</p>
                </div>
              </div>

              <div className="info-item">
                <Phone size={20} className="info-icon" />
                <div>
                  <strong>Phone / WhatsApp:</strong>
                  <p>
                    <a href={`tel:${NURSERY_DETAILS.phone}`}>{NURSERY_DETAILS.phone}</a> /{' '}
                    <a href={`tel:${NURSERY_DETAILS.phoneSecondary}`}>{NURSERY_DETAILS.phoneSecondary}</a>
                  </p>
                </div>
              </div>

              <div className="info-item">
                <Mail size={20} className="info-icon" />
                <div>
                  <strong>Email:</strong>
                  <p><a href={`mailto:${NURSERY_DETAILS.email}`}>{NURSERY_DETAILS.email}</a></p>
                </div>
              </div>

              <div className="info-item">
                <Clock size={20} className="info-icon" />
                <div>
                  <strong>Visiting Hours:</strong>
                  <p>{NURSERY_DETAILS.timings}</p>
                </div>
              </div>
            </div>

            {/* Google Map Link Card */}
            <div className="map-card">
              <div>
                <strong>📍 Kadiyapulanka Google Maps</strong>
                <p>Veeravaram Road, Kadiyam, AP 533126</p>
              </div>
              <a
                href="https://maps.google.com/?q=Satyadeva+Nursery+Kadiyapulanka"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline map-link-btn"
              >
                Open Google Maps ↗
              </a>
            </div>
          </div>

          {/* Form Block */}
          <div className="contact-form-wrapper">
            <div className="form-card">
              <h3 className="form-title font-serif">Send Direct Enquiry</h3>
              <p className="form-sub">Our horticulturists will get back to you promptly.</p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="form-grid">
                  <div className="field-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Varma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="field-group">
                    <label>Phone / WhatsApp Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="field-group">
                    <label>Plant Category Interest</label>
                    <select
                      value={formData.plantInterest}
                      onChange={(e) => setFormData({ ...formData, plantInterest: e.target.value })}
                    >
                      <option value="Fruit Trees">Fruit Graft Trees</option>
                      <option value="Indoor & Office">Indoor & Office Plants</option>
                      <option value="Landscaping">Landscaping Project</option>
                      <option value="Wholesale">Wholesale Commercial Supply</option>
                      <option value="Bonsai">Bonsai Specimen</option>
                    </select>
                  </div>

                  <div className="field-group">
                    <label>Message / Quantity Needed</label>
                    <textarea
                      rows={4}
                      placeholder="Describe species or garden requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    <Send size={16} />
                    <span>Submit & Open WhatsApp</span>
                  </button>
                </form>
              ) : (
                <div className="form-success font-serif">
                  <CheckCircle2 size={48} color="#0F382C" />
                  <h4>Enquiry Sent!</h4>
                  <p>Opening WhatsApp to complete your message with our team...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Action Button */}
      <a
        href={`https://wa.me/${NURSERY_DETAILS.whatsapp}?text=Hello%20Satyadeva%20Nursery,%20I%20have%20an%20enquiry.`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa-btn"
        title="Chat on WhatsApp"
        aria-label="Floating WhatsApp support button"
      >
        <MessageCircle size={28} />
      </a>

      <style>{`
        .contact-section {
          padding: 6rem 1.5rem;
          background: var(--bg-main);
          position: relative;
        }

        .contact-container {
          max-width: 1240px;
          margin: 0 auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .contact-desc {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .info-cards-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1rem;
        }

        .info-item {
          display: flex;
          gap: 1rem;
          background: #FFFFFF;
          padding: 1.25rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-sm);
        }

        .info-icon {
          color: var(--color-primary);
          flex-shrink: 0;
        }

        .info-item strong {
          display: block;
          color: var(--text-primary);
          font-size: 0.9rem;
          margin-bottom: 0.2rem;
        }

        .info-item p, .info-item a {
          font-size: 0.9rem;
          color: var(--text-secondary);
          text-decoration: none;
        }

        .map-card {
          margin-top: 1.5rem;
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          box-shadow: var(--shadow-sm);
        }

        .map-card p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .map-link-btn {
          font-size: 0.8rem;
          padding: 0.55rem 1rem;
        }

        /* Form */
        .form-card {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          padding: 3rem;
          box-shadow: var(--shadow-md);
        }

        .form-title { font-size: 2rem; color: var(--color-primary); }
        .form-sub { color: var(--text-secondary); margin-bottom: 1.5rem; }

        .form-grid {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .field-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .field-group label {
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
        }

        .field-group input, .field-group select, .field-group textarea {
          width: 100%;
          padding: 0.85rem 1.15rem;
          background: var(--bg-main);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-sm);
          font-size: 0.95rem;
          color: var(--text-primary);
          outline: none;
          font-family: inherit;
        }

        .field-group input:focus, .field-group select:focus, .field-group textarea:focus {
          border-color: var(--color-primary);
        }

        .submit-btn {
          margin-top: 0.5rem;
          width: 100%;
        }

        .form-success {
          text-align: center;
          padding: 3rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        /* Floating WA */
        .floating-wa-btn {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 900;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #25D366;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4);
          text-decoration: none;
          transition: transform 0.3s ease;
        }

        .floating-wa-btn:hover {
          transform: scale(1.1);
        }

        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
          .form-card { padding: 2rem 1.5rem; }
        }
      `}</style>
    </section>
  );
};
