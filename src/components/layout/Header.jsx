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
<<<<<<< HEAD
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
=======

        {/* Page links */}
        {[
          { label: 'About Us', to: '/about-us' },
          { label: 'Blog', to: '/blog' },
          { label: 'Careers', to: '/careers' },
          { label: 'Contact', to: '/contact' },
        ].map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* CTA Buttons */}
      <div className="ml-auto flex items-center gap-3">
        <Link to="/login" className="hidden lg:block text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5">
          Log in
        </Link>
        <Button asChild className="hidden sm:flex rounded-full px-5 h-9 bg-slate-900 text-white hover:bg-slate-700 dark:bg-white dark:text-black dark:hover:bg-slate-200 shadow-md transition-all">
          <Link to="/dashboard">Dashboard</Link>
        </Button>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white dark:bg-[#0a0a0a] border-l border-slate-200 dark:border-white/10 p-0 w-[300px]">
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center gap-2 p-6 border-b border-slate-200 dark:border-white/10">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-bold text-lg text-slate-900 dark:text-white">EduNest</span>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-1">
                  {/* Section label */}
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3 mb-2">Home</p>
                  {[
                    { label: 'Features', id: '#features' },
                    { label: 'Testimonials', id: '#testimonials' },
                    { label: 'Pricing', id: '#pricing' },
                    { label: 'FAQ', id: '#faq' },
                  ].map((item) => (
                    <SheetClose asChild key={item.label}>
                      <a
                        href={isHome ? item.id : `/${item.id}`}
                        onClick={(e) => handleScroll(e, item.id)}
                        className="flex items-center gap-3 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 px-3 py-2.5 rounded-xl transition-colors"
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  ))}

                  <div className="pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3 mb-2">Company</p>
                    {[
                      { label: 'About Us', to: '/about-us' },
                      { label: 'Blog', to: '/blog' },
                      { label: 'Careers', to: '/careers' },
                      { label: 'Contact', to: '/contact' },
                    ].map((item) => (
                      <SheetClose asChild key={item.label}>
                        <Link
                          to={item.to}
                          className="flex items-center gap-3 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 px-3 py-2.5 rounded-xl transition-colors"
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className="p-6 border-t border-slate-200 dark:border-white/10 space-y-3">
                  <SheetClose asChild>
                    <Link to="/login" className="flex items-center justify-center h-11 w-full rounded-xl border border-slate-200 dark:border-white/10 text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
                      Log in
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/dashboard" className="flex items-center justify-center h-11 w-full rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black text-sm font-semibold hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors">
                      Dashboard
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
>>>>>>> 1fff430974318f37260db10adf0917f936e7202d
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