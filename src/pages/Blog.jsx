<<<<<<< HEAD
import React, { useEffect } from 'react';
import { useData } from '../context/DataContext';
=======

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
>>>>>>> 1fff430974318f37260db10adf0917f936e7202d

export default function Blog() {
  const { notices } = useData();

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

  const staticPosts = [
    { title: "EduNest University Launches New AI-Powered Learning Platform", category: "Innovation", date: "Jul 20, 2026", icon: "fa-robot", color: 'linear-gradient(135deg,#2f584f,#3d7066)' },
    { title: "5 Tips for a Successful University Application", category: "Admissions", date: "Jul 15, 2026", icon: "fa-file-alt", color: 'linear-gradient(135deg,#3d7066,#8ab58a)' },
    { title: "How Our Research Center is Tackling Climate Change", category: "Research", date: "Jul 10, 2026", icon: "fa-leaf", color: 'linear-gradient(135deg,#2f584f,#8ab58a)' },
    { title: "EduNest Ranked Top 50 Universities Globally in 2025", category: "Achievement", date: "Jul 5, 2026", icon: "fa-trophy", color: 'linear-gradient(135deg,#8ab58a,#3d7066)' },
    { title: "New Partnership with MIT and Oxford Announced", category: "Partnership", date: "Jun 28, 2026", icon: "fa-handshake", color: 'linear-gradient(135deg,#3d7066,#2f584f)' },
  ];

  const allPosts = [
    ...notices.map((n, i) => ({
      title: n.title,
      category: n.type,
      date: n.date,
      icon: "fa-bullhorn",
      color: ['linear-gradient(135deg,#2f584f,#3d7066)', 'linear-gradient(135deg,#3d7066,#8ab58a)'][i % 2]
    })),
    ...staticPosts
  ];

  const [featured, ...rest] = allPosts;

  return (
    <>
      <section className="hero" style={{ height: '45vh', minHeight: '350px' }}>
        <div className="hero-bg" style={{ backgroundPosition: 'center 60%' }}></div>
        <div className="hero-overlay" style={{ opacity: 0.85 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 3, textAlign: 'center', paddingTop: '70px' }}>
          <div className="hero-badge reveal"><i className="fas fa-newspaper"></i><span>Campus Media</span></div>
          <h1 className="reveal" style={{ fontSize: '48px', marginTop: '20px' }}>University <em>News</em> & Stories</h1>
          <p className="reveal" style={{ maxWidth: '600px', margin: '20px auto 0' }}>Stay up to date with the latest research, events, and achievements from the EduNest community.</p>
        </div>
      </section>

      <section className="section-py">
        <div className="container">
          {/* Featured Post */}
          <div className="reveal" style={{ borderRadius: '24px', overflow: 'hidden', marginBottom: '60px', position: 'relative', height: '420px', display: 'flex', alignItems: 'flex-end', cursor: 'pointer' }}>
            <div style={{ position: 'absolute', inset: 0, background: featured.color }}></div>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '140px', color: 'rgba(255,255,255,0.08)' }}>
              <i className={`fas ${featured.icon}`}></i>
            </div>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)' }}></div>
            <div style={{ position: 'relative', zIndex: 2, padding: '40px', maxWidth: '700px' }}>
              <span className="tag" style={{ marginBottom: '16px', display: 'inline-block' }}>{featured.category}</span>
              <h2 style={{ fontSize: '32px', fontFamily: 'var(--font-serif)', color: 'white', marginBottom: '12px', lineHeight: 1.3 }}>{featured.title}</h2>
              <div style={{ display: 'flex', gap: '16px', color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
                <span><i className="fas fa-calendar" style={{ marginRight: '6px' }}></i>{featured.date}</span>
                <span><i className="fas fa-clock" style={{ marginRight: '6px' }}></i>5 min read</span>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="news-grid">
            {rest.slice(0, 6).map((post, i) => (
              <div className="news-card reveal" key={i}>
                <div className="news-img">
                  <div style={{ height: '220px', background: post.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '72px', color: 'rgba(255,255,255,0.2)' }}>
                    <i className={`fas ${post.icon}`}></i>
                  </div>
                </div>
                <div className="news-body">
                  <span className="news-cat">{post.category}</span>
                  <h3 className="news-title">{post.title}</h3>
                  <p className="news-excerpt">Published on {post.date}. Click to read the full story.</p>
                  <div className="news-footer">
                    <div className="news-author">
                      <div className="news-author-avatar"><i className="fas fa-pen" style={{ fontSize: '12px' }}></i></div>
                      <span>EduNest Press</span>
                    </div>
                    <a href="#" className="news-read">Read More <i className="fas fa-arrow-right"></i></a>
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
