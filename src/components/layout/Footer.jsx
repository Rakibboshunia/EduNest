import React from 'react';
import { Link } from 'react-router-dom';

export function Footer({ showStickyApply }) {
  return (
    <>
      {/* FOOTER */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" className="logo">
                <div className="logo-icon"><i className="fas fa-graduation-cap"></i></div>
                <div className="logo-text">EduNest<span>University</span></div>
              </Link>
              <p>Dedicated to academic excellence, innovative research, and developing global leaders who make a positive difference. Founded 1950.</p>
              <div className="footer-socials">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <div className="footer-links">
                <Link to="/about/history">About Us</Link>
                <Link to="/programs/undergraduate">Academics</Link>
                <Link to="/#admissions">Admissions</Link>
                <Link to="/#research">Research</Link>
                <Link to="/#campus">Campus Life</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
            <div className="footer-col">
              <h4>Programs</h4>
              <div className="footer-links">
                <Link to="/programs/undergraduate">Undergraduate</Link>
                <Link to="/programs/graduate">Graduate</Link>
                <Link to="/programs/doctoral">Doctoral</Link>
                <Link to="/programs/online">Online Learning</Link>
                <Link to="/programs/certificates">Certificates</Link>
                <Link to="/programs/certificates">Executive Ed.</Link>
              </div>
            </div>
            <div className="footer-col">
              <h4>Contact Us</h4>
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <p>100 Campus Drive, Edu City, EC 10001, United States</p>
                </div>
                <div className="footer-contact-item">
                  <i className="fas fa-phone"></i>
                  <p>+1 (800) 555-EDUNEST</p>
                </div>
                <div className="footer-contact-item">
                  <i className="fas fa-envelope"></i>
                  <p>admissions@edunest.edu</p>
                </div>
                <div className="footer-contact-item">
                  <i className="fas fa-clock"></i>
                  <p>Mon – Fri: 8:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 EduNest University. All rights reserved.</span>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-of-service">Terms of Use</Link>
              <Link to="/cookie-policy">Cookie Policy</Link>
              <Link to="/">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* STICKY APPLY BUTTON */}
      <div className={`sticky-apply ${showStickyApply ? 'visible' : ''}`} id="stickyApply">
        <Link to="/login" className="sticky-apply-btn">
          <div className="sticky-apply-pulse"></div>
          Apply Now
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </>
  );
}