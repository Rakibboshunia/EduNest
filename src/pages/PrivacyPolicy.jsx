import React from 'react';

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--primary)', padding: '80px 0 60px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-badge" style={{ justifyContent: 'center', color: 'rgba(255,255,255,0.8)' }}>
            <span style={{ background: 'rgba(255,255,255,0.3)' }}></span>Legal Documents
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'var(--white)', marginTop: '16px' }}>Privacy Policy</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '12px' }}>Last updated: June 3, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-py">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {[
              {
                num: '01', title: 'Introduction',
                content: 'At EduNest University ("EduNest", "we", "us", or "our"), we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our student management software and services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.'
              },
              {
                num: '02', title: 'Information We Collect',
                content: 'We may collect personal identification information from users in a variety of ways, including when users visit our site, register on the site, or connect with activities, services, features, or resources we make available. This includes: name and job title, contact information including email address and phone number, demographic information, and student records and academic data (only as inputted by authorized institutional users).'
              },
              {
                num: '03', title: 'How We Use Your Information',
                content: 'We use collected information to create and manage your account, deliver relevant communications and newsletters, email you regarding your account or enrollment, fulfill and manage academic transactions, generate a personal academic profile, increase efficiency and operation of our services, and monitor and analyze usage and trends to improve your experience.'
              },
              {
                num: '04', title: 'Data Security',
                content: 'We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.'
              },
              {
                num: '05', title: 'Contact Us',
                content: 'If you have questions or comments about this Privacy Policy, please contact us at: privacy@edunest.edu or write to EduNest University Privacy Office, 100 Campus Drive, Edu City, EC 10001, United States.'
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
