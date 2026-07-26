import React from 'react';

export default function TermsOfService() {
  return (
    <>
      <section style={{ background: 'var(--primary)', padding: '80px 0 60px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-badge" style={{ justifyContent: 'center', color: 'rgba(255,255,255,0.8)' }}>
            <span style={{ background: 'rgba(255,255,255,0.3)' }}></span>Legal Documents
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'var(--white)', marginTop: '16px' }}>Terms of Service</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '12px' }}>Last updated: June 3, 2026</p>
        </div>
      </section>

      <section className="section-py">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {[
              {
                num: '01', title: 'Agreement to Terms',
                content: 'These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity, and EduNest University ("we," "us" or "our"), concerning your access to and use of the EduNest platform, website, and any related services (collectively, the "Services"). You agree that by accessing the Services, you have read, understood, and agree to be bound by all of these Terms of Service.'
              },
              {
                num: '02', title: 'User Accounts',
                content: 'When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party.'
              },
              {
                num: '03', title: 'Intellectual Property',
                content: 'The Service and its original content, features and functionality are and will remain the exclusive property of EduNest University and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of EduNest University.'
              },
              {
                num: '04', title: 'Acceptable Use Policy',
                content: 'You agree not to use the Service: in any way that violates any applicable law or regulation; for the purpose of exploiting or harming minors; to transmit any advertising or promotional material without our prior written consent; to impersonate or attempt to impersonate EduNest, a staff member, another user, or any other person; or to engage in any conduct that restricts or inhibits anyone\'s use or enjoyment of the Service.'
              },
              {
                num: '05', title: 'Termination',
                content: 'We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service or contact student services.'
              }
            ].map((section, i) => (
              <div key={i} style={{ display: 'flex', gap: '30px' }}>
                <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '12px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontWeight: '700', fontSize: '14px' }}>
                  {section.num}
                </div>
                <div>
                  <h2 style={{ fontSize: '22px', color: 'var(--text)', marginBottom: '12px', fontWeight: '600' }}>{section.title}</h2>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
