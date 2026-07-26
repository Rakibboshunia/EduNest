import React from 'react';
import { Link } from 'react-router-dom';

export function Header({ isMobileMenuOpen, isScrolled, openMobile, closeMobile }) {
  return (
    <>
      {/* MOBILE MENU */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`} id="mobileMenu">
        <div className="mobile-menu-header">
          <div className="logo">
            <div className="logo-icon"><i className="fas fa-graduation-cap"></i></div>
            <div className="logo-text">EduNest<span>University</span></div>
          </div>
          <button className="mobile-close" onClick={closeMobile}><i className="fas fa-times"></i></button>
        </div>
        <div className="mobile-nav-links">
          <Link to="/programs/undergraduate" onClick={closeMobile}>Programs</Link>
          <Link to="/about/history" onClick={closeMobile}>About</Link>
          <Link to="/#admissions" onClick={closeMobile}>Admissions</Link>
          <Link to="/#campus" onClick={closeMobile}>Campus Life</Link>
          <Link to="/#research" onClick={closeMobile}>Research</Link>
          <Link to="/#events" onClick={closeMobile}>Events</Link>
          <Link to="/about/leadership" onClick={closeMobile}>Faculty</Link>
          <Link to="/blog" onClick={closeMobile}>News</Link>
          <Link to="/contact" onClick={closeMobile}>Contact</Link>
        </div>
        <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Link to="/login" className="btn btn-outline" style={{ justifyContent: 'center' }} onClick={closeMobile}>Apply Now</Link>
          <Link to="/login" className="btn btn-primary" style={{ justifyContent: 'center' }}>Login</Link>
        </div>
      </div>

      {/* TOP BAR */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-inner">
            <div className="topbar-left">
              <span><i className="fas fa-phone"></i> +1 (800) 555-EDUNEST</span>
              <span><i className="fas fa-envelope"></i> admissions@edunest.edu</span>
              <span><i className="fas fa-map-marker-alt"></i> 100 Campus Drive, Edu City</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <nav className="topbar-nav">
                <Link to="/#admissions">Tuition & Fees</Link>
                <Link to="/#admissions">How to Apply</Link>
                <Link to="/#admissions">Requirements</Link>
                <Link to="/contact">Contact</Link>
              </nav>
              <div className="topbar-social">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
        <div className="container">
          <div className="header-inner">
            <Link to="/" className="logo">
              <div className="logo-icon"><i className="fas fa-graduation-cap"></i></div>
              <div className="logo-text">EduNest<span>University</span></div>
            </Link>

            <nav className="nav-menu" id="navMenu">
              <div className="nav-item">
                <Link to="/programs/undergraduate" className="nav-link">Programs <i className="fas fa-chevron-down"></i></Link>
                <div className="dropdown">
                  <Link to="/programs/undergraduate">Undergraduate Programs</Link>
                  <Link to="/programs/graduate">Graduate Programs</Link>
                  <Link to="/programs/doctoral">Doctoral Programs</Link>
                  <Link to="/programs/online">Online Programs</Link>
                  <Link to="/programs/certificates">Certificate Courses</Link>
                </div>
              </div>
              <div className="nav-item">
                <Link to="/about-us" className="nav-link">About <i className="fas fa-chevron-down"></i></Link>
                <div className="dropdown">
                  <Link to="/about/history">Our History</Link>
                  <Link to="/about/mission-vision">Mission &amp; Vision</Link>
                  <Link to="/about/leadership">Leadership</Link>
                  <Link to="/about/rankings">Rankings &amp; Awards</Link>
                </div>
              </div>
              <Link to="/#admissions" className="nav-link">Admissions</Link>
              <Link to="/#campus" className="nav-link">Campus Life</Link>
              <Link to="/#research" className="nav-link">Research</Link>
              <Link to="/blog" className="nav-link">News</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </nav>

            <div className="header-actions">
              <button className="btn-search"><i className="fas fa-search"></i></button>
              <Link to="/login" className="btn btn-outline">Apply Now</Link>
              <Link to="/login" className="btn btn-primary">Login</Link>
              <button className="mobile-toggle" onClick={openMobile}><i className="fas fa-bars"></i></button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}