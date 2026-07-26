import React, { useEffect } from 'react';

export default function Leadership() {
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

  const executives = [
    { name: 'Dr. Robert Chen', role: 'President', dept: 'Office of the President', icon: 'fa-user-tie', bio: 'Dr. Chen has led EduNest since 2015, overseeing a period of record enrollment growth, research investment, and global partnerships.' },
    { name: 'Dr. Amanda Lewis', role: 'Provost & VP Academic', dept: 'Academic Affairs', icon: 'fa-user-graduate', bio: 'Dr. Lewis oversees all academic programs and faculty, championing interdisciplinary research and curriculum innovation.' },
    { name: 'James Wilson', role: 'VP Operations', dept: 'Operations & Finance', icon: 'fa-user-shield', bio: 'James manages the university\'s $1.2B annual budget, campus infrastructure, and digital transformation initiatives.' },
    { name: 'Dr. Priya Sharma', role: 'VP Research', dept: 'Research & Innovation', icon: 'fa-flask', bio: 'Dr. Sharma directs $500M+ in annual research funding across 12 research centers and 6 institutes.' },
  ];

  const deans = [
    { name: 'Dr. Eleanor Hartman', role: 'Dean of Sciences', icon: 'fa-microscope' },
    { name: 'Prof. Marcus Okafor', role: 'Dean of Business', icon: 'fa-chart-line' },
    { name: 'Dr. Sophia Chen', role: 'Dean of Health Sciences', icon: 'fa-heartbeat' },
    { name: 'Prof. James Rivera', role: 'Dean of Computer Science', icon: 'fa-laptop-code' },
    { name: 'Dr. Lena Müller', role: 'Dean of Arts & Humanities', icon: 'fa-palette' },
    { name: 'Prof. Kwame Asante', role: 'Dean of Law', icon: 'fa-balance-scale' },
  ];

  return (
    <>
      <section className="hero" style={{ height: '45vh', minHeight: '350px' }}>
        <div className="hero-bg"></div>
        <div className="hero-overlay" style={{ opacity: 0.85 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 3, textAlign: 'center', paddingTop: '70px' }}>
          <div className="hero-badge reveal"><i className="fas fa-chess-king"></i><span>Administration</span></div>
          <h1 className="reveal" style={{ fontSize: '48px', marginTop: '20px' }}>University <em>Leadership</em></h1>
          <p className="reveal" style={{ maxWidth: '650px', margin: '20px auto 0' }}>Meet the dedicated visionaries steering EduNest toward a future of academic excellence and global impact.</p>
        </div>
      </section>

      <section className="section-py">
        <div className="container">
          <div className="section-badge reveal" style={{ justifyContent: 'center' }}>Executive Team</div>
          <h2 className="section-title reveal" style={{ textAlign: 'center' }}>Senior <em>Administration</em></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '24px', marginTop: '40px', marginBottom: '80px' }}>
            {executives.map((e, i) => (
              <div key={i} className="reveal" style={{ display: 'flex', gap: '24px', background: 'var(--surface)', padding: '32px', borderRadius: '20px', border: '1px solid var(--border)' }}>
                <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '28px', flexShrink: 0 }}>
                  <i className={`fas ${e.icon}`}></i>
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', color: 'var(--text)', fontWeight: 600, marginBottom: '4px' }}>{e.name}</h3>
                  <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '13px', marginBottom: '8px' }}>{e.role} · {e.dept}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: 1.6 }}>{e.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="section-badge reveal" style={{ justifyContent: 'center' }}>Academic Deans</div>
          <h2 className="section-title reveal" style={{ textAlign: 'center' }}>Faculty <em>Leadership</em></h2>
          <div className="faculty-grid" style={{ marginTop: '40px' }}>
            {deans.map((d, i) => (
              <div key={i} className="faculty-card reveal">
                <div className="faculty-img">
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--primary-light)', fontSize: '64px', color: 'var(--primary)' }}>
                    <i className={`fas ${d.icon}`}></i>
                  </div>
                </div>
                <div className="faculty-info">
                  <div className="faculty-name">{d.name}</div>
                  <div className="faculty-role">{d.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
