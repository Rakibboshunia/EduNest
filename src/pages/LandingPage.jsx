import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';

const LandingPage = () => {
  const { teachers, notices } = useData();

  useEffect(() => {
    // Scroll reveal
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

    // Counter animation
    const animateCounter = (el, target, suffix = '') => {
      let start = 0;
      const duration = 2000;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counts = document.querySelectorAll('.stats-grid .count');
          const targets = [35, 1200, 200, 98];
          counts.forEach((el, i) => {
             animateCounter(el, targets[i]);
          });
          statsObserver.disconnect();
        }
      });
    }, { threshold: 0.3 });
    const statsSection = document.querySelector('.stats');
    if (statsSection) statsObserver.observe(statsSection);

    return () => {
      io.disconnect();
      statsObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>

        {/* Decorative elements */}
        <div style={{ position: 'absolute', top: '10%', right: '8%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(138,181,138,0.06)', pointerEvents: 'none', animation: 'pulse 6s ease infinite' }}></div>
        <div style={{ position: 'absolute', bottom: '20%', right: '15%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(198,217,160,0.04)', pointerEvents: 'none', animation: 'pulse 8s ease 2s infinite' }}></div>

        <div className="container" style={{ width: '100%' }}>
          <div className="hero-content">
            <div className="hero-badge">
              <i className="fas fa-star"></i>
              <span>Welcome to EduNest University</span>
              <span style={{ background: 'rgba(255,255,255,0.15)', padding: '2px 10px', borderRadius: '50px', marginLeft: '4px' }}>#1 Ranked 2025</span>
            </div>
            <h1>Shape Your Future<br />With <em>World-Class</em><br />Education</h1>
            <p>Join over 35,000 students from 120+ countries in a vibrant learning community committed to excellence, innovation, and meaningful impact across the globe.</p>
            <div className="hero-actions">
              <a href="#programs" className="btn btn-gold"><i className="fas fa-compass"></i> Explore Programs</a>
              <a href="#admissions" className="btn btn-white"><i className="fas fa-file-alt"></i> Apply Now</a>
              <a href="javascript:void(0)" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.8)', fontSize: '14px', cursor: 'pointer' }}>
                <span style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)' }}>
                  <i className="fas fa-play" style={{ marginLeft: '3px' }}></i>
                </span>
                Watch Campus Tour
              </a>
            </div>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-number">35<sup>K</sup><span style={{ color: 'var(--accent)' }}>+</span></div>
              <div className="hero-stat-label">Active Students</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">120<span style={{ color: 'var(--accent)' }}>+</span></div>
              <div className="hero-stat-label">Countries Represented</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">98<span style={{ color: 'var(--accent)' }}>%</span></div>
              <div className="hero-stat-label">Graduate Employment</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">200<span style={{ color: 'var(--accent)' }}>+</span></div>
              <div className="hero-stat-label">Programs Offered</div>
            </div>
          </div>
        </div>

        <div className="hero-dots">
          <div className="hero-dot active"></div>
          <div className="hero-dot"></div>
          <div className="hero-dot"></div>
        </div>

        <div className="scroll-down">
          <div className="scroll-down-line"></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="programs section-py" id="programs">
        <div className="container">
          <div className="programs-header reveal">
            <div className="section-badge"><i className="fas fa-book-open" style={{ marginLeft: '8px' }}></i> Academic Excellence</div>
            <h2 className="section-title">Explore Our <em>Programs</em></h2>
            <p className="section-desc">Discover a wide range of undergraduate, graduate, and doctoral programs designed to prepare you for a successful career.</p>
          </div>
          <div className="programs-grid">
            <div className="program-card reveal">
              <div className="program-icon"><i className="fas fa-flask"></i></div>
              <div className="program-name">Sciences & Technology</div>
              <div className="program-desc">Cutting-edge programs in biology, chemistry, physics, and engineering with world-class laboratory facilities.</div>
              <div className="program-meta">
                <span><i className="fas fa-clock"></i> 4 Years</span>
                <span><i className="fas fa-users"></i> 2,400+ Students</span>
              </div>
              <Link to="/programs/undergraduate" className="program-link">Explore Programs <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="program-card reveal">
              <div className="program-icon"><i className="fas fa-chart-line"></i></div>
              <div className="program-name">Business & Economics</div>
              <div className="program-desc">MBA, finance, marketing, and entrepreneurship programs with strong industry partnerships and internship opportunities.</div>
              <div className="program-meta">
                <span><i className="fas fa-clock"></i> 2–4 Years</span>
                <span><i className="fas fa-users"></i> 3,100+ Students</span>
              </div>
              <Link to="/programs/undergraduate" className="program-link">Explore Programs <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="program-card reveal">
              <div className="program-icon"><i className="fas fa-palette"></i></div>
              <div className="program-name">Arts & Humanities</div>
              <div className="program-desc">Immerse yourself in literature, philosophy, history, and fine arts in our vibrant creative community.</div>
              <div className="program-meta">
                <span><i className="fas fa-clock"></i> 3–4 Years</span>
                <span><i className="fas fa-users"></i> 1,800+ Students</span>
              </div>
              <Link to="/programs/undergraduate" className="program-link">Explore Programs <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="program-card reveal">
              <div className="program-icon"><i className="fas fa-heartbeat"></i></div>
              <div className="program-name">Health Sciences</div>
              <div className="program-desc">Medicine, nursing, public health, and biomedical sciences with state-of-the-art simulation labs and clinical training.</div>
              <div className="program-meta">
                <span><i className="fas fa-clock"></i> 4–6 Years</span>
                <span><i className="fas fa-users"></i> 2,900+ Students</span>
              </div>
              <Link to="/programs/undergraduate" className="program-link">Explore Programs <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="program-card reveal">
              <div className="program-icon"><i className="fas fa-laptop-code"></i></div>
              <div className="program-name">Computer Science</div>
              <div className="program-desc">AI, machine learning, cybersecurity, and software engineering with industry-leading curriculum and projects.</div>
              <div className="program-meta">
                <span><i className="fas fa-clock"></i> 4 Years</span>
                <span><i className="fas fa-users"></i> 3,500+ Students</span>
              </div>
              <Link to="/programs/undergraduate" className="program-link">Explore Programs <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="program-card reveal">
              <div className="program-icon"><i className="fas fa-balance-scale"></i></div>
              <div className="program-name">Law & Social Science</div>
              <div className="program-desc">Internationally recognized law degree and social science programs preparing graduates for global leadership roles.</div>
              <div className="program-meta">
                <span><i className="fas fa-clock"></i> 3–5 Years</span>
                <span><i className="fas fa-users"></i> 1,600+ Students</span>
              </div>
              <Link to="/programs/undergraduate" className="program-link">Explore Programs <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="program-card reveal">
              <div className="program-icon"><i className="fas fa-drafting-compass"></i></div>
              <div className="program-name">Architecture & Design</div>
              <div className="program-desc">Creative and technical programs combining aesthetics, sustainability, and innovation in built environments.</div>
              <div className="program-meta">
                <span><i className="fas fa-clock"></i> 5 Years</span>
                <span><i className="fas fa-users"></i> 980+ Students</span>
              </div>
              <Link to="/programs/undergraduate" className="program-link">Explore Programs <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="program-card reveal">
              <div className="program-icon"><i className="fas fa-leaf"></i></div>
              <div className="program-name">Environmental Studies</div>
              <div className="program-desc">Address climate challenges through interdisciplinary research, policy, and sustainability-focused programs.</div>
              <div className="program-meta">
                <span><i className="fas fa-clock"></i> 4 Years</span>
                <span><i className="fas fa-users"></i> 1,200+ Students</span>
              </div>
              <Link to="/programs/undergraduate" className="program-link">Explore Programs <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }} className="reveal">
            <Link to="/programs/undergraduate" className="btn btn-primary">View All 200+ Programs <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about section-py" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrap reveal">
              <div className="about-image">
                <img src="/brain/c72d05e5-4cf2-4b9f-94e2-5e0d9dd43f6e/university_about_1785003836200.png" alt="University Classroom" onError={(e) => { e.target.style.background = 'linear-gradient(135deg,#2f584f,#3d7066)'; e.target.style.height = '480px'; }} />
              </div>
              <div className="about-badge-float">
                <div className="num">75<span style={{ color: 'var(--accent)' }}>+</span></div>
                <div className="label">Years of Excellence</div>
              </div>
            </div>
            <div className="reveal">
              <div className="section-badge"><i className="fas fa-university" style={{ marginLeft: '8px' }}></i> About EduNest</div>
              <h2 className="section-title">A Legacy of <em>Excellence</em> & Innovation</h2>
              <p className="section-desc">Founded in 1950, EduNest University has been at the forefront of academic innovation, nurturing generations of leaders, thinkers, and change-makers who make a difference in the world.</p>
              <div className="about-features">
                <div className="about-feature">
                  <i className="fas fa-award"></i>
                  <div>
                    <h4>World-Class Faculty</h4>
                    <p>Over 1,200 distinguished professors, Nobel laureates, and industry experts dedicated to your growth.</p>
                  </div>
                </div>
                <div className="about-feature">
                  <i className="fas fa-microscope"></i>
                  <div>
                    <h4>Cutting-Edge Research</h4>
                    <p>$500M+ in annual research funding powering breakthroughs in science, technology, and society.</p>
                  </div>
                </div>
                <div className="about-feature">
                  <i className="fas fa-globe"></i>
                  <div>
                    <h4>Global Network</h4>
                    <p>200,000+ alumni across 150 countries and partnerships with top universities worldwide.</p>
                  </div>
                </div>
              </div>
              <div className="about-actions">
                <Link to="/about/history" className="btn btn-primary">Learn Our Story <i className="fas fa-arrow-right"></i></Link>
                <Link to="/#campus" className="btn btn-outline">Virtual Tour</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPUS LIFE SECTION */}
      <section className="campus section-py" id="campus" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="section-badge reveal"><i className="fas fa-building" style={{ marginLeft: '8px' }}></i> Campus Life</div>
          <h2 className="section-title reveal">A Vibrant <em>Community</em></h2>
          <p className="section-desc reveal">Experience a campus designed for collaboration, creativity, and personal growth with world-class facilities and over 150 student clubs.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '48px' }}>
            {[{icon: 'fa-book-reader', title: 'Central Library', desc: 'Over 2 million volumes, digital archives, and 24/7 study spaces.'},
              {icon: 'fa-dumbbell', title: 'Sports Complex', desc: 'Olympic-sized pool, indoor tracks, and courts for 15+ sports.'},
              {icon: 'fa-home', title: 'Student Housing', desc: 'Modern, comfortable residence halls creating a home away from home.'},
              {icon: 'fa-utensils', title: 'Dining Halls', desc: 'Multiple dining options featuring global cuisines and healthy choices.'}].map((item, i) => (
                <div key={i} className="reveal" style={{ background: 'var(--bg)', padding: '32px', borderRadius: '16px', border: '1px solid var(--border)' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '24px', marginBottom: '20px' }}>
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <h4 style={{ fontSize: '20px', marginBottom: '12px', color: 'var(--text)' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH SECTION */}
      <section className="research section-py" id="research">
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center' }}>
            <div style={{ flex: '1 1 400px' }} className="reveal">
              <div className="section-badge"><i className="fas fa-flask" style={{ marginLeft: '8px' }}></i> Research & Innovation</div>
              <h2 className="section-title">Pushing the Boundaries of <em>Knowledge</em></h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>EduNest is a premier research institution where undergraduates, graduates, and faculty collaborate to solve the world's most pressing challenges. From renewable energy to AI, our labs are at the forefront of innovation.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text)' }}><i className="fas fa-check-circle" style={{ color: 'var(--primary)' }}></i> $500M+ Annual Research Funding</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text)' }}><i className="fas fa-check-circle" style={{ color: 'var(--primary)' }}></i> 12 Specialized Research Centers</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text)' }}><i className="fas fa-check-circle" style={{ color: 'var(--primary)' }}></i> 250+ Patents Filed Annually</li>
              </ul>
              <Link to="/programs/undergraduate" className="btn btn-outline">Explore Our Labs</Link>
            </div>
            <div style={{ flex: '1 1 400px' }} className="reveal">
              <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', height: '400px' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #2f584f, #1a362f)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <i className="fas fa-dna" style={{ fontSize: '120px', color: 'rgba(255,255,255,0.1)' }}></i>
                </div>
                <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '24px', borderRadius: '16px', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <h4 style={{ fontSize: '18px', marginBottom: '8px' }}>Breakthrough in Clean Energy</h4>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>Our engineering team recently published findings that could increase solar panel efficiency by 40%.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats" id="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item reveal">
              <div className="stat-number"><span className="count">35</span><span className="stat-plus">K</span><sup>+</sup></div>
              <div className="stat-label">Students Enrolled</div>
            </div>
            <div className="stat-item reveal">
              <div className="stat-number"><span className="count">1200</span><span className="stat-plus">+</span></div>
              <div className="stat-label">Expert Faculty</div>
            </div>
            <div className="stat-item reveal">
              <div className="stat-number"><span className="count">200</span><span className="stat-plus">+</span></div>
              <div className="stat-label">Academic Programs</div>
            </div>
            <div className="stat-item reveal">
              <div className="stat-number"><span className="count">98</span><span className="stat-plus">%</span></div>
              <div className="stat-label">Graduate Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS SECTION */}
      <section className="events section-py" id="events">
        <div className="container">
          <div className="events-layout">
            <div>
              <div className="section-badge reveal"><i className="fas fa-calendar-alt" style={{ marginLeft: '8px' }}></i> Upcoming Events</div>
              <h2 className="section-title reveal">What's <em>Happening</em> on Campus</h2>
              <div className="events-list">
                {notices.filter(n => n.type === 'Event').slice(0, 4).map((notice, idx) => {
                  const dateObj = new Date(notice.date);
                  const day = dateObj.getDate() || notice.date.split(' ')[1].replace(',', '');
                  const month = dateObj.toLocaleString('default', { month: 'short' }) || notice.date.split(' ')[0];
                  return (
                    <div className="event-item reveal" key={notice.id || idx}>
                      <div className="event-date"><div className="day">{day}</div><div className="month">{month}</div></div>
                      <div className="event-info">
                        <h4>{notice.title}</h4>
                        <p>Join us for this exciting upcoming event for {notice.target}.</p>
                        <div className="event-meta">
                          <span><i className="fas fa-map-marker-alt"></i> Campus Grounds</span>
                          <span><i className="fas fa-clock"></i> TBA</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {notices.filter(n => n.type === 'Event').length === 0 && (
                  <p>No upcoming events at the moment.</p>
                )}
              </div>
              <div style={{ marginTop: '32px' }} className="reveal">
                <Link to="/blog" className="btn btn-primary">View All Events <i className="fas fa-arrow-right"></i></Link>
              </div>
            </div>
            <div className="reveal">
              <div className="events-featured">
                <div className="events-featured-img">
                  <img src="/brain/c72d05e5-4cf2-4b9f-94e2-5e0d9dd43f6e/university_hero_bg_1785003701513.png" alt="Campus Event" onError={(e) => { e.target.style.background = 'linear-gradient(135deg,#2f584f,#3d7066)'; e.target.style.height = '260px'; }} />
                </div>
                <div className="events-featured-body">
                  <span className="tag">Featured Event</span>
                  <h3>75th Anniversary Gala & Awards Ceremony</h3>
                  <p>Celebrate seven decades of academic excellence with alumni, faculty, and distinguished guests from around the world. A night of recognition, inspiration, and legacy.</p>
                  <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>
                    <span><i className="fas fa-calendar" style={{ color: 'var(--primary)', marginRight: '4px' }}></i> September 15, 2025</span>
                    <span><i className="fas fa-ticket-alt" style={{ color: 'var(--primary)', marginRight: '4px' }}></i> By Invitation</span>
                  </div>
                  <Link to="/login" className="btn btn-primary">Register Now <i className="fas fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACULTY SECTION */}
      <section className="faculty section-py" id="faculty">
        <div className="container">
          <div className="faculty-header">
            <div>
              <div className="section-badge reveal"><i className="fas fa-chalkboard-teacher" style={{ marginLeft: '8px' }}></i> Our Experts</div>
              <h2 className="section-title reveal">Meet Our <em>Distinguished</em> Faculty</h2>
            </div>
            <Link to="/about/leadership" className="btn btn-outline reveal">View All Faculty</Link>
          </div>
          <div className="faculty-grid">
            {teachers.slice(0, 4).map((teacher, idx) => {
              const icons = ["fa-user-tie", "fa-user-graduate", "fa-user-md", "fa-user"];
              const bgColors = ["#2f584f20", "#2f584f20", "#c6d9a020", "#2f584f30"];
              const bgColors2 = ["#2f584f40", "#8ab58a40", "#2f584f40", "#c6d9a030"];
              return (
                <div className="faculty-card reveal" key={teacher.id || idx}>
                  <div className="faculty-img">
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `linear-gradient(135deg,${bgColors[idx % 4]},${bgColors2[idx % 4]})`, fontSize: '64px', color: '#2f584f' }}>
                      <i className={`fas ${icons[idx % 4]}`}></i>
                    </div>
                    <div className="faculty-socials">
                      <a href={`mailto:${teacher.email}`}><i className="fas fa-envelope"></i></a>
                    </div>
                  </div>
                  <div className="faculty-info">
                    <div className="faculty-name">{teacher.name}</div>
                    <div className="faculty-role">{teacher.subject} Department</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials section-py" id="testimonials">
        <div className="container">
          <div className="testimonials-header reveal">
            <div className="section-badge">Student Stories</div>
            <h2 className="section-title">What Our <em style={{ color: 'var(--accent)' }}>Alumni</em> Say</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card reveal">
              <div className="testimonial-quote">"</div>
              <div className="testimonial-stars">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <p className="testimonial-text">EduNest University transformed my perspective on science. The faculty are world-class and the research facilities are incredible. I landed my dream job at a Fortune 500 company right after graduation.</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">A</div>
                <div>
                  <div className="testimonial-name">Amara Johnson</div>
                  <div className="testimonial-meta">Class of 2023 · Biochemistry · Now at BioTech Corp.</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal">
              <div className="testimonial-quote">"</div>
              <div className="testimonial-stars">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <p className="testimonial-text">The MBA program here gave me the tools, network, and confidence to launch my own startup. The international exposure and mentorship from industry leaders was truly invaluable.</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">L</div>
                <div>
                  <div className="testimonial-name">Liam O'Brien</div>
                  <div className="testimonial-meta">Class of 2022 · MBA · Founder of GreenTech Ventures</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal">
              <div className="testimonial-quote">"</div>
              <div className="testimonial-stars">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>
              </div>
              <p className="testimonial-text">As an international student, I was worried about fitting in. But the campus community is so welcoming and diverse. I made lifelong friends from 40 different countries. My career trajectory changed completely.</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">Y</div>
                <div>
                  <div className="testimonial-name">Yuki Tanaka</div>
                  <div className="testimonial-meta">Class of 2024 · Computer Science · Now at Google</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section className="news section-py" id="news">
        <div className="container">
          <div className="news-header">
            <div>
              <div className="section-badge reveal"><i className="fas fa-newspaper" style={{ marginLeft: '8px' }}></i> Latest News</div>
              <h2 className="section-title reveal">University <em>News</em> & Stories</h2>
            </div>
            <Link to="/blog" className="btn btn-outline reveal">All News</Link>
          </div>
          <div className="news-grid">
            {notices.slice(0, 3).map((notice, idx) => {
              const bgColors = ['linear-gradient(135deg,#2f584f,#3d7066)', 'linear-gradient(135deg,#3d7066,#2f584f)', 'linear-gradient(135deg,#2f584f,#8ab58a)'];
              const icons = ["fa-newspaper", "fa-bullhorn", "fa-globe-americas"];
              return (
                <div className="news-card reveal" key={notice.id || idx}>
                  <div className="news-img">
                    <div style={{ height: '220px', background: bgColors[idx % 3], display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '80px', color: 'rgba(255,255,255,0.3)' }}>
                      <i className={`fas ${icons[idx % 3]}`}></i>
                    </div>
                  </div>
                  <div className="news-body">
                    <span className="news-cat">{notice.type}</span>
                    <h3 className="news-title">{notice.title}</h3>
                    <p className="news-excerpt">Priority: {notice.priority}. Target: {notice.target}. Date: {notice.date}.</p>
                    <div className="news-footer">
                      <div className="news-author">
                        <div className="news-author-avatar">A</div>
                        <span>Admin</span>
                      </div>
                      <Link to="/blog" className="news-read">Read More <i className="fas fa-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
              );
            })}
            {notices.length === 0 && (
              <p>No recent news.</p>
            )}
          </div>
        </div>
      </section>
      {/* ADMISSIONS CTA SECTION */}
      <section className="admissions section-py" id="admissions" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="reveal" style={{ background: 'var(--primary)', borderRadius: '24px', padding: '64px 32px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '200px', height: '200px', background: 'var(--accent)', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.5 }}></div>
            <div style={{ position: 'absolute', bottom: '-50px', right: '-50px', width: '200px', height: '200px', background: 'var(--accent)', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.5 }}></div>
            
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'white', marginBottom: '20px' }}>Ready to Begin Your Journey?</h2>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', maxWidth: '600px', margin: '0 auto 40px' }}>Take the first step towards a transformative education. Applications for the Fall 2026 semester are now open.</p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/login" className="btn btn-primary" style={{ fontSize: '16px', padding: '14px 32px', background: 'var(--accent)', color: 'var(--white)', borderColor: 'var(--accent)' }}>Apply Now</Link>
                <Link to="/contact" className="btn btn-white" style={{ fontSize: '16px', padding: '14px 32px', background: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>Request Info</Link>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', marginTop: '24px' }}>Early action deadline: November 1, 2025</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
