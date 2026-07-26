import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const certs = [
  { icon: 'fa-code', name: 'Full-Stack Web Development', weeks: '16 Weeks', level: 'Beginner–Intermediate', desc: 'From HTML to React and Node.js. Build production-ready web applications with modern toolchains.' },
  { icon: 'fa-shield-alt', name: 'Cybersecurity Fundamentals', weeks: '12 Weeks', level: 'Beginner', desc: 'Protect systems, networks, and programs from digital attacks. Industry-recognized certification prep.' },
  { icon: 'fa-robot', name: 'Intro to Artificial Intelligence', weeks: '10 Weeks', level: 'Intermediate', desc: 'Hands-on Python, machine learning, and neural networks. No prior AI experience required.' },
  { icon: 'fa-chart-pie', name: 'Data Analytics & Visualization', weeks: '8 Weeks', level: 'Beginner', desc: 'Use Excel, Tableau, and Python to turn raw data into compelling business stories.' },
  { icon: 'fa-stethoscope', name: 'Healthcare Management', weeks: '14 Weeks', level: 'Intermediate', desc: 'Leadership in clinical operations, hospital management, and health policy implementation.' },
  { icon: 'fa-seedling', name: 'Sustainability & Green Business', weeks: '8 Weeks', level: 'Beginner', desc: 'Learn ESG frameworks, carbon accounting, and how to lead sustainable corporate transformation.' },
];

export default function Certificates() {
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
          <div className="hero-badge reveal"><i className="fas fa-certificate"></i><span>Short Courses</span></div>
          <h1 className="reveal" style={{ fontSize: '48px', marginTop: '20px' }}>Certificate <em>Courses</em></h1>
          <p className="reveal" style={{ maxWidth: '650px', margin: '20px auto 0' }}>Upskill in weeks, not years. Our industry-recognized certificates are designed in partnership with top employers for immediate career impact.</p>
        </div>
      </section>

      <section className="section-py">
        <div className="container">
          <div className="programs-grid">
            {certs.map((c, i) => (
              <div className="program-card reveal" key={i}>
                <div className="program-icon"><i className={`fas ${c.icon}`}></i></div>
                <div className="program-name">{c.name}</div>
                <div className="program-desc">{c.desc}</div>
                <div className="program-meta">
                  <span><i className="fas fa-clock"></i> {c.weeks}</span>
                  <span><i className="fas fa-signal"></i> {c.level}</span>
                </div>
                <Link to="/login" className="program-link">Enroll Now <i className="fas fa-arrow-right"></i></Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
