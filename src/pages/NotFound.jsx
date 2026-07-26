import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '70vh', textAlign: 'center', padding: '40px 20px' }}>
      <div style={{ fontSize: '120px', fontWeight: 'bold', color: 'var(--primary)', lineHeight: 1, margin: '20px 0' }}>404</div>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', color: 'var(--text)', marginBottom: '16px' }}>Page Not Found</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '500px', marginBottom: '32px' }}>
        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/" className="btn btn-primary"><i className="fas fa-home"></i> Back to Home</Link>
        <Link to="/contact" className="btn btn-outline">Contact Support</Link>
      </div>
    </div>
  );
};

export default NotFound;
