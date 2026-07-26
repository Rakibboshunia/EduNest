import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const programs = [
  { icon: 'fa-flask', name: 'Sciences & Technology', duration: '4 Years', students: '2,400+', desc: 'Cutting-edge programs in biology, chemistry, physics, and engineering with world-class laboratory facilities.', categories: ['Science', 'Technology'] },
  { icon: 'fa-chart-line', name: 'Business & Economics', duration: '2–4 Years', students: '3,100+', desc: 'MBA, finance, marketing, and entrepreneurship programs with strong industry partnerships and internship opportunities.', categories: ['Business'] },
  { icon: 'fa-palette', name: 'Arts & Humanities', duration: '3–4 Years', students: '1,800+', desc: 'Immerse yourself in literature, philosophy, history, and fine arts in our vibrant creative community.', categories: ['Arts'] },
  { icon: 'fa-heartbeat', name: 'Health Sciences', duration: '4–6 Years', students: '2,900+', desc: 'Medicine, nursing, public health, and biomedical sciences with state-of-the-art simulation labs and clinical training.', categories: ['Health', 'Science'] },
  { icon: 'fa-laptop-code', name: 'Computer Science', duration: '4 Years', students: '3,500+', desc: 'AI, machine learning, cybersecurity, and software engineering with industry-leading curriculum and projects.', categories: ['Technology', 'Science'] },
  { icon: 'fa-balance-scale', name: 'Law & Social Science', duration: '3–5 Years', students: '1,600+', desc: 'Internationally recognized law degree and social science programs preparing graduates for global leadership roles.', categories: ['Arts', 'Business'] },
  { icon: 'fa-drafting-compass', name: 'Architecture & Design', duration: '5 Years', students: '980+', desc: 'Creative and technical programs combining aesthetics, sustainability, and innovation in built environments.', categories: ['Arts', 'Technology'] },
  { icon: 'fa-leaf', name: 'Environmental Studies', duration: '4 Years', students: '1,200+', desc: 'Address climate challenges through interdisciplinary research, policy, and sustainability-focused programs.', categories: ['Science'] },
];

export default function UndergraduatePrograms() {
  const [activeFilter, setActiveFilter] = useState('All Faculties');
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
          <div className="hero-badge reveal"><i className="fas fa-book-open"></i><span>4-Year Degrees</span></div>
          <h1 className="reveal" style={{ fontSize: '48px', marginTop: '20px' }}>Undergraduate <em>Programs</em></h1>
          <p className="reveal" style={{ maxWidth: '650px', margin: '20px auto 0' }}>Begin your academic journey with a world-class undergraduate degree from EduNest University. Choose from 80+ majors across 8 faculties.</p>
        </div>
      </section>

      <section className="section-py" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '48px' }} className="reveal">
            {['All Faculties', 'Science', 'Business', 'Arts', 'Health', 'Technology'].map((f, i) => (
              <button 
                key={i} 
                onClick={() => setActiveFilter(f)}
                style={{ padding: '8px 20px', borderRadius: '50px', border: `1px solid ${activeFilter === f ? 'var(--primary)' : 'var(--border)'}`, background: activeFilter === f ? 'var(--primary)' : 'transparent', color: activeFilter === f ? 'white' : 'var(--text-muted)', cursor: 'pointer', fontWeight: 500 }}>
                {f}
              </button>
            ))}
          </div>
          <div className="programs-grid">
            {(activeFilter === 'All Faculties' ? programs : programs.filter(p => p.categories.includes(activeFilter))).map((p, i) => (
              <div className="program-card reveal visible" key={p.name}>
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
