import React, { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <section className="hero" style={{ height: '40vh', minHeight: '300px' }}>
        <div className="hero-bg" style={{ backgroundPosition: 'center 40%' }}></div>
        <div className="hero-overlay" style={{ opacity: 0.85 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 3, textAlign: 'center', paddingTop: '60px' }}>
          <div className="hero-badge reveal">
            <i className="fas fa-headset"></i>
            <span>Get In Touch</span>
          </div>
          <h1 className="reveal" style={{ fontSize: '48px', marginTop: '20px' }}>Contact <em>EduNest</em></h1>
          <p className="reveal" style={{ maxWidth: '700px', margin: '20px auto 0' }}>We're here to answer any questions you have about admissions, academics, or campus life.</p>
        </div>
      </section>

      <section className="section-py">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
            
            {/* Contact Info */}
            <div className="reveal">
              <div className="section-badge"><i className="fas fa-envelope-open" style={{ marginLeft: '8px' }}></i> Reach Out</div>
              <h2 className="section-title" style={{ fontSize: '32px' }}>We'd love to <em>hear</em> from you</h2>
              <p className="section-desc" style={{ marginBottom: '40px' }}>Whether you're a prospective student, a proud alumni, or looking to partner with our research centers, our team is ready to assist.</p>
              
              <div className="about-features">
                <div className="about-feature">
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '20px' }}>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '18px', marginBottom: '4px', color: 'var(--text)' }}>Visit Us</h4>
                    <p style={{ color: 'var(--text-muted)' }}>100 Campus Drive, Edu City<br/>EC 10001, United States</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '20px' }}>
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '18px', marginBottom: '4px', color: 'var(--text)' }}>Call Us</h4>
                    <p style={{ color: 'var(--text-muted)' }}>+1 (800) 555-EDUNEST<br/>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '20px' }}>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '18px', marginBottom: '4px', color: 'var(--text)' }}>Email Us</h4>
                    <p style={{ color: 'var(--text-muted)' }}>admissions@edunest.edu<br/>info@edunest.edu</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="reveal">
              <div style={{ background: 'var(--surface)', padding: '40px', borderRadius: '24px', border: '1px solid var(--border)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '24px', color: 'var(--text)', marginBottom: '24px' }}>Send a Message</h3>
                <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text)' }}>First Name</label>
                      <input type="text" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)', outline: 'none' }} placeholder="John" />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text)' }}>Last Name</label>
                      <input type="text" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)', outline: 'none' }} placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text)' }}>Email Address</label>
                    <input type="email" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)', outline: 'none' }} placeholder="john@example.com" />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text)' }}>Department</label>
                    <select style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)', outline: 'none' }}>
                      <option>Admissions</option>
                      <option>Financial Aid</option>
                      <option>Alumni Relations</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text)' }}>Message</label>
                    <textarea rows="4" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)', outline: 'none', resize: 'vertical' }} placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}>
                    Send Message <i className="fas fa-paper-plane" style={{ marginLeft: '8px' }}></i>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
