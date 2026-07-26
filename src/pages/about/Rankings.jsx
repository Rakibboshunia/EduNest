import React, { useEffect } from 'react';

const rankings = [
  { rank: '#48', category: 'QS World University Rankings 2025', detail: 'Climbed 12 positions from #60 in 2024', icon: 'fa-globe' },
  { rank: '#3', category: 'Environmental Research – US News', detail: 'Recognized for groundbreaking sustainability research', icon: 'fa-leaf' },
  { rank: '#12', category: 'Best Graduate Business Schools', detail: 'MBA program ranked among the top 15 globally', icon: 'fa-chart-line' },
  { rank: '#7', category: 'Computer Science – Times Higher Ed', detail: 'AI and cybersecurity programs lead the rankings', icon: 'fa-laptop-code' },
  { rank: '#5', category: 'Best Student Experience – Princeton Review', detail: 'Students rate EduNest top for campus life and support', icon: 'fa-star' },
  { rank: '#20', category: 'Global Research Output – Leiden Ranking', detail: '$500M+ in annual research funding driving output', icon: 'fa-microscope' },
];

const awards = [
  { year: '2025', title: 'University of the Year – Global Education Awards', org: 'GEA International' },
  { year: '2024', title: 'Excellence in Sustainability – Green Campus Award', org: 'US Green Building Council' },
  { year: '2023', title: 'Best Online Learning Platform – EdTech Digest', org: 'EdTech Digest Magazine' },
  { year: '2022', title: 'Top Employer Award – Chronicle of Higher Education', org: 'Chronicle of Higher Education' },
  { year: '2021', title: 'Innovation in Research – National Science Foundation', org: 'NSF' },
  { year: '2020', title: 'Community Impact Award', org: 'Higher Education Excellence in Diversity' },
];

export default function Rankings() {
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
          <div className="hero-badge reveal"><i className="fas fa-trophy"></i><span>Recognition</span></div>
          <h1 className="reveal" style={{ fontSize: '48px', marginTop: '20px' }}>Rankings & <em>Awards</em></h1>
          <p className="reveal" style={{ maxWidth: '650px', margin: '20px auto 0' }}>EduNest University is consistently recognized among the world's top institutions for academic excellence, research, and student experience.</p>
        </div>
      </section>

      <section className="section-py">
        <div className="container">
          <div className="section-badge reveal" style={{ justifyContent: 'center' }}>Global Rankings</div>
          <h2 className="section-title reveal" style={{ textAlign: 'center' }}>Where We <em>Stand</em></h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginTop: '40px', marginBottom: '80px' }}>
            {rankings.map((r, i) => (
              <div key={i} className="reveal" style={{ background: 'var(--surface)', borderRadius: '20px', padding: '32px', border: '1px solid var(--border)', display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ textAlign: 'center', flexShrink: 0 }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', fontWeight: 700, color: 'var(--primary)', lineHeight: 1 }}>{r.rank}</div>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '18px', margin: '10px auto 0' }}>
                    <i className={`fas ${r.icon}`}></i>
                  </div>
                </div>
                <div>
                  <h4 style={{ color: 'var(--text)', fontSize: '16px', fontWeight: 600, marginBottom: '6px' }}>{r.category}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: 1.5 }}>{r.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="section-badge reveal" style={{ justifyContent: 'center' }}>Awards</div>
          <h2 className="section-title reveal" style={{ textAlign: 'center' }}>Recent <em>Achievements</em></h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '40px', maxWidth: '800px', margin: '40px auto 0' }}>
            {awards.map((a, i) => (
              <div key={i} className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '24px', background: 'var(--surface)', padding: '24px 32px', borderRadius: '16px', border: '1px solid var(--border)' }}>
                <div style={{ flexShrink: 0, width: '64px', height: '64px', borderRadius: '16px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                  <i className="fas fa-award" style={{ color: 'var(--accent)', fontSize: '22px' }}></i>
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ color: 'var(--text)', fontSize: '17px', fontWeight: 600, marginBottom: '4px' }}>{a.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{a.org}</p>
                </div>
                <span style={{ flexShrink: 0, fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 700, color: 'var(--primary)' }}>{a.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
