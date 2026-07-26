import React, { useEffect } from 'react';

export default function MissionVision() {
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

  const values = [
    { icon: 'fa-lightbulb', title: 'Innovation', desc: 'We foster an environment of curiosity and experimentation, encouraging bold ideas that challenge conventional wisdom.' },
    { icon: 'fa-users', title: 'Community', desc: 'We believe in the power of diverse perspectives and build an inclusive campus where every voice matters.' },
    { icon: 'fa-star', title: 'Excellence', desc: 'We hold ourselves to the highest academic and ethical standards in teaching, research, and service.' },
    { icon: 'fa-globe', title: 'Global Impact', desc: 'We are committed to addressing the world\'s most pressing challenges through education and research.' },
    { icon: 'fa-hands-helping', title: 'Integrity', desc: 'Honesty, respect, and accountability guide every decision we make as an institution.' },
    { icon: 'fa-seedling', title: 'Sustainability', desc: 'We are stewards of the planet, embedding sustainability into our operations, research, and curriculum.' },
  ];

  return (
    <>
      <section className="hero" style={{ height: '45vh', minHeight: '350px' }}>
        <div className="hero-bg"></div>
        <div className="hero-overlay" style={{ opacity: 0.85 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 3, textAlign: 'center', paddingTop: '70px' }}>
          <div className="hero-badge reveal"><i className="fas fa-bullseye"></i><span>Our Purpose</span></div>
          <h1 className="reveal" style={{ fontSize: '48px', marginTop: '20px' }}>Mission & <em>Vision</em></h1>
          <p className="reveal" style={{ maxWidth: '650px', margin: '20px auto 0' }}>The principles and aspirations that guide every decision we make at EduNest University.</p>
        </div>
      </section>

      <section className="section-py">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '40px', marginBottom: '80px' }}>
            <div className="reveal" style={{ background: 'var(--primary)', padding: '48px', borderRadius: '24px', color: 'var(--white)' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '28px' }}>
                <i className="fas fa-bullseye"></i>
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', marginBottom: '20px', color: 'white' }}>Our Mission</h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, fontSize: '16px' }}>
                To advance knowledge and educate students in science, technology, humanities, and other areas of scholarship that will best serve the nation and the world in the 21st century — and to do this in a way that is collaborative, open, and committed to solving real problems that matter.
              </p>
            </div>
            <div className="reveal" style={{ background: 'var(--surface)', padding: '48px', borderRadius: '24px', border: '1px solid var(--border)' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: 'var(--primary)', marginBottom: '28px' }}>
                <i className="fas fa-eye"></i>
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', marginBottom: '20px', color: 'var(--text)' }}>Our Vision</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '16px' }}>
                To be the premier destination for ambitious minds seeking to create sustainable solutions for global challenges — a university where interdisciplinary inquiry, creative experimentation, and a deep sense of social responsibility converge to shape a better future for all humanity.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-badge reveal" style={{ justifyContent: 'center' }}>Core Values</div>
            <h2 className="section-title reveal">What We <em>Stand For</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {values.map((v, i) => (
              <div key={i} className="reveal" style={{ background: 'var(--surface)', padding: '32px', borderRadius: '16px', border: '1px solid var(--border)', textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--primary-light)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '24px' }}>
                  <i className={`fas ${v.icon}`}></i>
                </div>
                <h4 style={{ fontSize: '18px', color: 'var(--text)', marginBottom: '10px' }}>{v.title}</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '14px' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
