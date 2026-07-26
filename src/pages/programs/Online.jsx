import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const courses = [
  { icon: 'fa-laptop-code', name: 'Online B.Sc. in Computer Science', duration: '4 Years', mode: 'Fully Online', desc: 'Complete your CS degree entirely online, with live lectures, collaborative projects, and industry mentors.' },
  { icon: 'fa-chart-bar', name: 'Online MBA', duration: '2 Years', mode: 'Hybrid', desc: 'A flexible MBA designed for working professionals. Study on your own schedule with weekend intensives.' },
  { icon: 'fa-heartbeat', name: 'Online B.Sc. in Public Health', duration: '3 Years', mode: 'Fully Online', desc: 'Pursue your passion for community health with flexible online coursework and real-world practicums.' },
  { icon: 'fa-palette', name: 'Online Bachelor of Arts', duration: '3 Years', mode: 'Fully Online', desc: 'Study literature, history, philosophy, and social sciences from anywhere in the world.' },
  { icon: 'fa-seedling', name: 'Online M.Sc. Environmental Science', duration: '2 Years', mode: 'Fully Online', desc: 'Address global sustainability challenges through cutting-edge remote coursework and research.' },
  { icon: 'fa-balance-scale', name: 'Online Paralegal Certificate', duration: '1 Year', mode: 'Fully Online', desc: 'Kickstart your legal career with an online certificate recognized by top law firms worldwide.' },
];

export default function OnlinePrograms() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) { setTimeout(() => entry.target.classList.add('visible'), i * 80); io.unobserve(entry.target); }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <section className="hero" style={{ height: '45vh', minHeight: '350px' }}>
        <div className="hero-bg"></div>
        <div className="hero-overlay" style={{ opacity: 0.85 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 3, textAlign: 'center', paddingTop: '70px' }}>
          <div className="hero-badge reveal"><i className="fas fa-globe"></i><span>Learn Anywhere</span></div>
          <h1 className="reveal" style={{ fontSize: '48px', marginTop: '20px' }}>Online <em>Programs</em></h1>
          <p className="reveal" style={{ maxWidth: '650px', margin: '20px auto 0' }}>World-class EduNest education, delivered digitally. Study at your own pace, from anywhere in the world, without compromising quality.</p>
        </div>
      </section>

      <section className="section-py" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            {[
              { icon: 'fa-wifi', label: 'Fully Online Option', desc: 'Study entirely from home' },
              { icon: 'fa-clock', label: 'Flexible Schedule', desc: 'Async & sync learning options' },
              { icon: 'fa-certificate', label: 'Same Accreditation', desc: 'Identical degree as on-campus' },
              { icon: 'fa-headset', label: '24/7 Support', desc: 'Dedicated online student services' },
            ].map((item, i) => (
              <div key={i} className="reveal" style={{ textAlign: 'center', padding: '24px', background: 'var(--bg)', borderRadius: '16px', border: '1px solid var(--border)' }}>
                <i className={`fas ${item.icon}`} style={{ fontSize: '28px', color: 'var(--primary)', marginBottom: '12px', display: 'block' }}></i>
                <h4 style={{ color: 'var(--text)', marginBottom: '6px' }}>{item.label}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="programs-grid">
            {courses.map((p, i) => (
              <div className="program-card reveal" key={i}>
                <div className="program-icon"><i className={`fas ${p.icon}`}></i></div>
                <div className="program-name">{p.name}</div>
                <div className="program-desc">{p.desc}</div>
                <div className="program-meta">
                  <span><i className="fas fa-clock"></i> {p.duration}</span>
                  <span><i className="fas fa-wifi"></i> {p.mode}</span>
                </div>
                <Link to="/login" className="program-link">Enroll Online <i className="fas fa-arrow-right"></i></Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
