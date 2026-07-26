import React from 'react';
import { Link } from 'react-router-dom';

export function Cta() {
  return (
    <section className="cta-banner" id="admissions">
      <div className="container">
        <div className="cta-inner reveal visible">
          <div className="section-badge" style={{ color: 'var(--accent-2)', justifyContent: 'center' }}>
            <span style={{ background: 'var(--accent-2)' }}></span>
            Apply for Fall 2025
          </div>
          <h2 className="section-title">Ready to Begin Your <em style={{ color: 'var(--accent)' }}>Journey?</em></h2>
          <p>Applications for Fall 2025 are now open. Join a community where your potential is nurtured and your ambitions are realized. Early applications receive scholarship priority.</p>
          <div className="cta-actions">
            <Link to="/login" className="btn btn-gold"><i className="fas fa-file-alt"></i> Start Application</Link>
            <Link to="/contact" className="btn btn-white"><i className="fas fa-calendar-check"></i> Schedule a Visit</Link>
            <Link to="/contact" className="btn" style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--white)', border: '1px solid rgba(255,255,255,0.3)' }}><i className="fas fa-phone"></i> Talk to Advisor</Link>
          </div>
          <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 700, color: 'var(--white)' }}>Aug 1</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>Early Action Deadline</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 700, color: 'var(--white)' }}>Dec 1</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>Regular Decision Deadline</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 700, color: 'var(--white)' }}>Mar 15</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>Notification Date</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 700, color: 'var(--white)' }}>May 1</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>Enrollment Deadline</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}