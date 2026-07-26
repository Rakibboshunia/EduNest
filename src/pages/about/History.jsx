import React, { useEffect } from 'react';

const milestones = [
  { year: '1950', title: 'University Founded', desc: 'EduNest was established as a small college of sciences by Dr. Harold Green with 120 founding students.' },
  { year: '1963', title: 'First Graduate School', desc: 'Launched our first graduate programs in science and engineering, attracting students from across the country.' },
  { year: '1978', title: 'International Recognition', desc: 'EduNest became internationally accredited and welcomed its first cohort of international students.' },
  { year: '1992', title: 'Research Excellence', desc: 'Established the Center for Advanced Research, now producing over $100M in annual research output.' },
  { year: '2005', title: 'Digital Transformation', desc: 'Launched our first fully online degree programs, expanding access to students worldwide.' },
  { year: '2015', title: 'Global Partnerships', desc: 'Signed landmark agreements with MIT, Oxford, and 40+ universities for joint research and student exchange.' },
  { year: '2025', title: '75th Anniversary', desc: 'Celebrating 75 years of excellence with 35,000+ students, 200+ programs, and a global alumni network.' },
];

export default function History() {
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
          <div className="hero-badge reveal"><i className="fas fa-history"></i><span>Since 1950</span></div>
          <h1 className="reveal" style={{ fontSize: '48px', marginTop: '20px' }}>Our <em>History</em></h1>
          <p className="reveal" style={{ maxWidth: '650px', margin: '20px auto 0' }}>Over 75 years of academic excellence, innovation, and transforming the lives of students from every corner of the world.</p>
        </div>
      </section>

      <section className="section-py">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ position: 'relative' }}>
            {/* Timeline line */}
            <div style={{ position: 'absolute', left: '75px', top: 0, bottom: 0, width: '2px', background: 'var(--primary-light)' }}></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {milestones.map((m, i) => (
                <div key={i} className="reveal" style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
                  {/* Year bubble */}
                  <div style={{ flexShrink: 0, width: '72px', textAlign: 'center' }}>
                    <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: i === milestones.length - 1 ? 'var(--primary)' : 'var(--bg)', border: '2px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', zIndex: 1, position: 'relative' }}>
                      <span style={{ color: i === milestones.length - 1 ? 'white' : 'var(--primary)', fontWeight: 700, fontSize: '13px', lineHeight: 1.2 }}>{m.year}</span>
                    </div>
                  </div>
                  <div style={{ flex: 1, paddingTop: '16px' }}>
                    <h3 style={{ fontSize: '20px', color: 'var(--text)', marginBottom: '8px', fontWeight: 600 }}>{m.title}</h3>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
