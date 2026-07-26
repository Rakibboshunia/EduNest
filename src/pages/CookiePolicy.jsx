import React from 'react';

export default function CookiePolicy() {
  return (
    <>
      <section style={{ background: 'var(--primary)', padding: '80px 0 60px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-badge" style={{ justifyContent: 'center', color: 'rgba(255,255,255,0.8)' }}>
            <span style={{ background: 'rgba(255,255,255,0.3)' }}></span>Legal Documents
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'var(--white)', marginTop: '16px' }}>Cookie Policy</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '12px' }}>Last updated: June 3, 2026</p>
        </div>
      </section>

      <section className="section-py">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {[
              {
                num: '01', title: 'What Are Cookies',
                content: 'As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored, however this may downgrade or break certain elements of the site\'s functionality.'
              },
              {
                num: '02', title: 'How We Use Cookies',
                content: 'We use cookies for a variety of reasons detailed below. It is recommended that you leave on all cookies if you are not sure whether you need them or not. We use: Account related cookies to manage the signup and login process; Login related cookies so we can remember your session; Site preference cookies to remember settings like dark mode and language preferences.'
              },
              {
                num: '03', title: 'Third Party Cookies',
                content: 'In some special cases we also use cookies provided by trusted third parties. For example, this site may use Google Analytics to help us understand how you use the site and how we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.'
              },
              {
                num: '04', title: 'Disabling Cookies',
                content: 'You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the EduNest portal. Therefore it is recommended that you do not disable cookies.'
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
