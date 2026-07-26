import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const programs = [
  { icon: 'fa-brain', name: 'MBA – Business Administration', duration: '2 Years', students: '1,200+', badge: 'Most Popular', desc: 'A globally recognized MBA program with specializations in finance, marketing, entrepreneurship, and strategy.' },
  { icon: 'fa-atom', name: 'M.Sc. Computer Science', duration: '2 Years', students: '950+', badge: 'Top Ranked', desc: 'Advanced study in AI, machine learning, distributed systems, and software architecture.' },
  { icon: 'fa-flask', name: 'M.Sc. Biotechnology', duration: '2 Years', students: '600+', badge: '', desc: 'Cutting-edge research in genetic engineering, pharmaceutical sciences, and biomedical applications.' },
  { icon: 'fa-balance-scale', name: 'LLM – International Law', duration: '1.5 Years', students: '400+', badge: '', desc: 'Specialize in international human rights, trade law, and global governance frameworks.' },
  { icon: 'fa-chart-bar', name: 'M.Sc. Data Science', duration: '2 Years', students: '800+', badge: 'New', desc: 'Master big data analytics, statistical modeling, and business intelligence tools.' },
  { icon: 'fa-heartbeat', name: 'MPH – Public Health', duration: '2 Years', students: '500+', badge: '', desc: 'Leadership in epidemiology, health policy, global health, and community medicine.' },
];

export default function GraduatePrograms() {
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
          <div className="hero-badge reveal"><i className="fas fa-user-graduate"></i><span>Master's Degrees</span></div>
          <h1 className="reveal" style={{ fontSize: '48px', marginTop: '20px' }}>Graduate <em>Programs</em></h1>
          <p className="reveal" style={{ maxWidth: '650px', margin: '20px auto 0' }}>Advance your career with a prestigious graduate degree. Our master's programs combine rigorous academics with real-world research and industry exposure.</p>
        </div>
      </section>

      <section className="section-py">
        <div className="container">
          <div className="programs-grid">
            {programs.map((p, i) => (
              <div className="program-card reveal" key={i} style={{ position: 'relative' }}>
                {p.badge && <span style={{ position: 'absolute', top: '16px', right: '16px', background: 'var(--accent)', color: 'var(--white)', fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '50px', textTransform: 'uppercase' }}>{p.badge}</span>}
                <div className="program-icon"><i className={`fas ${p.icon}`}></i></div>
                <div className="program-name">{p.name}</div>
                <div className="program-desc">{p.desc}</div>
                <div className="program-meta">
                  <span><i className="fas fa-clock"></i> {p.duration}</span>
                  <span><i className="fas fa-users"></i> {p.students}</span>
                </div>
                <Link to="/login" className="program-link">Apply Now <i className="fas fa-arrow-right"></i></Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
