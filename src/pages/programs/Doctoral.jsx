import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const programs = [
  { icon: 'fa-microscope', name: 'Ph.D. in Biomedical Sciences', dept: 'Health Sciences', years: '4–6 Years', desc: 'Conduct groundbreaking research in genomics, molecular biology, and clinical medicine under world-class faculty mentors.' },
  { icon: 'fa-robot', name: 'Ph.D. in Artificial Intelligence', dept: 'Computer Science', years: '4–5 Years', desc: 'Push the boundaries of machine learning, neural networks, and autonomous systems in our state-of-the-art AI labs.' },
  { icon: 'fa-building', name: 'Ph.D. in Environmental Engineering', dept: 'Engineering', years: '4–5 Years', desc: 'Research sustainable infrastructure, climate resilience, and environmental remediation technologies.' },
  { icon: 'fa-chart-line', name: 'Ph.D. in Economics', dept: 'Business School', years: '4–5 Years', desc: 'Explore macroeconomic policy, behavioral economics, and global financial systems with leading economists.' },
  { icon: 'fa-dna', name: 'Ph.D. in Genetics', dept: 'Sciences', years: '5–6 Years', desc: 'Unravel the complexities of the human genome and its role in disease, with $2M+ in research funding available.' },
];

export default function DoctoralPrograms() {
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
          <div className="hero-badge reveal"><i className="fas fa-microscope"></i><span>Ph.D. Programs</span></div>
          <h1 className="reveal" style={{ fontSize: '48px', marginTop: '20px' }}>Doctoral <em>Programs</em></h1>
          <p className="reveal" style={{ maxWidth: '650px', margin: '20px auto 0' }}>Join our research community and contribute to humanity's knowledge. $500M+ in annual research funding available to doctoral candidates.</p>
        </div>
      </section>

      <section className="section-py" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
            {programs.map((p, i) => (
              <div key={i} className="reveal" style={{ display: 'flex', gap: '24px', background: 'var(--bg)', borderRadius: '20px', padding: '32px', border: '1px solid var(--border)', alignItems: 'flex-start' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '26px', flexShrink: 0 }}>
                  <i className={`fas ${p.icon}`}></i>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: '20px', color: 'var(--text)', fontWeight: 600 }}>{p.name}</h3>
                    <span style={{ fontSize: '12px', background: 'var(--primary-light)', color: 'var(--primary)', padding: '3px 12px', borderRadius: '50px', fontWeight: 600 }}>{p.dept}</span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '16px' }}>{p.desc}</p>
                  <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}><i className="fas fa-clock" style={{ color: 'var(--primary)', marginRight: '6px' }}></i>{p.years}</span>
                    <Link to="/login" className="program-link" style={{ margin: 0 }}>Apply for Ph.D. <i className="fas fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
