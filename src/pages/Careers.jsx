import React, { useEffect } from 'react';

export default function Careers() {
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

  const jobs = [
    { title: "Senior Lecturer in Computer Science", dept: "Faculty", location: "Main Campus", type: "Full-time", icon: "fa-laptop-code" },
    { title: "Research Associate – Renewable Energy", dept: "Research", location: "Science Center", type: "Full-time", icon: "fa-flask" },
    { title: "Assistant Professor of Economics", dept: "Faculty", location: "Main Campus", type: "Full-time", icon: "fa-chart-line" },
    { title: "Student Affairs Coordinator", dept: "Administration", location: "Main Campus", type: "Full-time", icon: "fa-users" },
    { title: "Digital Marketing Specialist", dept: "Communications", location: "Remote", type: "Full-time", icon: "fa-bullhorn" },
    { title: "Library Information Specialist", dept: "Library", location: "Main Campus", type: "Part-time", icon: "fa-book" },
  ];

  return (
    <>
      <section className="hero" style={{ height: '45vh', minHeight: '350px' }}>
        <div className="hero-bg" style={{ backgroundPosition: 'center 70%' }}></div>
        <div className="hero-overlay" style={{ opacity: 0.85 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 3, textAlign: 'center', paddingTop: '70px' }}>
          <div className="hero-badge reveal"><i className="fas fa-briefcase"></i><span>Join Our Team</span></div>
          <h1 className="reveal" style={{ fontSize: '48px', marginTop: '20px' }}>Careers at <em>EduNest</em></h1>
          <p className="reveal" style={{ maxWidth: '600px', margin: '20px auto 0' }}>Be part of a world-class institution dedicated to academic excellence, research, and community impact.</p>
          <div className="reveal" style={{ marginTop: '30px' }}>
            <a href="#open-roles" className="btn btn-gold">View Open Positions <i className="fas fa-arrow-down"></i></a>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-py" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="section-badge reveal" style={{ justifyContent: 'center' }}>Benefits</div>
          <h2 className="section-title reveal" style={{ textAlign: 'center' }}>Why Work at <em>EduNest</em>?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginTop: '40px' }}>
            {[
              { icon: 'fa-graduation-cap', title: 'Free Tuition Benefits', desc: 'Staff and their families receive significant tuition discounts for all university programs.' },
              { icon: 'fa-heartbeat', title: 'Comprehensive Healthcare', desc: 'Full medical, dental, and vision coverage for you and your dependents.' },
              { icon: 'fa-plane', title: 'Research Travel Grants', desc: 'Funding available for faculty and researchers to attend global conferences.' },
              { icon: 'fa-balance-scale', title: 'Work-Life Balance', desc: 'Flexible scheduling, generous vacation, and a supportive campus community.' },
            ].map((item, i) => (
              <div key={i} className="reveal" style={{ background: 'var(--bg)', padding: '32px', borderRadius: '16px', border: '1px solid var(--border)', textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--primary-light)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '24px' }}>
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h4 style={{ color: 'var(--text)', fontSize: '18px', marginBottom: '10px' }}>{item.title}</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-py" id="open-roles">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div className="section-badge reveal">Open Positions</div>
              <h2 className="section-title reveal" style={{ marginTop: '8px' }}>Current <em>Opportunities</em></h2>
            </div>
            <span className="reveal" style={{ background: 'var(--primary-light)', color: 'var(--primary)', padding: '6px 18px', borderRadius: '50px', fontWeight: 600, fontSize: '14px' }}>{jobs.length} Positions</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {jobs.map((job, i) => (
              <div key={i} className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 32px', background: 'var(--surface)', borderRadius: '16px', border: '1px solid var(--border)', flexWrap: 'wrap', gap: '16px', cursor: 'pointer', transition: 'box-shadow 0.3s' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '20px', flexShrink: 0 }}>
                    <i className={`fas ${job.icon}`}></i>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text)', fontSize: '18px', marginBottom: '6px' }}>{job.title}</h4>
                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                      <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}><i className="fas fa-building" style={{ marginRight: '5px' }}></i>{job.dept}</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}><i className="fas fa-map-marker-alt" style={{ marginRight: '5px' }}></i>{job.location}</span>
                      <span style={{ background: 'var(--primary-light)', color: 'var(--primary)', fontSize: '12px', padding: '2px 12px', borderRadius: '50px', fontWeight: '600' }}>{job.type}</span>
                    </div>
                  </div>
                </div>
                <button className="btn btn-outline" style={{ flexShrink: 0 }}>Apply Now <i className="fas fa-arrow-right"></i></button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
