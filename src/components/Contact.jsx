import { useState } from 'react';
import './Contact.css';

const contactMethods = [
  {
    id: 'contact-email',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email',
    value: 'zainhaseeb474@gmail.com',
    link: 'mailto:zainhaseeb474@gmail.com',
    color: '#7c3aed',
  },
  {
    id: 'contact-linkedin',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/muhammad-zain-haseeb',
    link: 'https://www.linkedin.com/in/muhammad-zain-haseeb-aa76381bb',
    color: '#0077b5',
  },
  {
    id: 'contact-github',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/maverick474',
    link: 'https://github.com/maverick474',
    color: '#f0f0f0',
  },
  {
    id: 'contact-location',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Location',
    value: 'Lahore, Pakistan 🇵🇰',
    link: null,
    color: '#10b981',
  },
];

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setStatus('sending');
    // Simulate async send
    setTimeout(() => {
      setStatus('sent');
      setForm(initialForm);
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">✦ Get In Touch</span>
          <h2 className="section-title">Let's Build Something Together</h2>
          <p className="section-subtitle">
            Have a project in mind, a job opportunity, or just want to say hello?
            My inbox is always open — I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left – info */}
          <div className="contact-info">
            <div className="contact-availability glass-card">
              <div className="avail-dot" />
              <div>
                <p className="avail-title">Currently Available</p>
                <p className="avail-sub">Open to full-time & freelance opportunities</p>
              </div>
            </div>

            <div className="contact-methods">
              {contactMethods.map(m => (
                <div key={m.id} id={m.id} className="contact-method glass-card">
                  <div className="method-icon" style={{ color: m.color, background: `${m.color}18` }}>
                    {m.icon}
                  </div>
                  <div className="method-body">
                    <p className="method-label">{m.label}</p>
                    {m.link ? (
                      <a href={m.link} className="method-value" target="_blank" rel="noreferrer">
                        {m.value}
                      </a>
                    ) : (
                      <p className="method-value no-link">{m.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – form */}
          <form className="contact-form glass-card" onSubmit={handleSubmit} id="contact-form" noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">Your Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">Email Address</label>
                <input
                  id="contact-email-input"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject" className="form-label">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                className="form-input"
                placeholder="Project Inquiry / Job Opportunity / Hello"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">Message</label>
              <textarea
                id="contact-message"
                name="message"
                className="form-input form-textarea"
                placeholder="Tell me about your project, idea, or anything you'd like to discuss..."
                rows={6}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className={`btn-primary form-submit ${status === 'sending' ? 'sending' : ''}`}
              id="contact-submit"
              disabled={status === 'sending' || status === 'sent'}
            >
              {status === 'idle' && (
                <>
                  Send Message
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </>
              )}
              {status === 'sending' && '⏳ Sending...'}
              {status === 'sent' && (
                <>
                  ✅ Message Sent! I'll reply soon.
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
