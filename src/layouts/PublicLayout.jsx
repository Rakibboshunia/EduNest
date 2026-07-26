import { Outlet, useLocation } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Cta } from "@/components/layout/Cta";
import { useEffect, useState } from "react";
import './PublicDesign.css';

export function PublicLayout() {
  const { pathname, hash } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showStickyApply, setShowStickyApply] = useState(false);

  useEffect(() => {
    // Header scroll logic
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowStickyApply(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);

    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, hash]);

  const openMobile = () => {
    setIsMobileMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMobile = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <div className="edunest-landing">
      <Header 
        isMobileMenuOpen={isMobileMenuOpen} 
        isScrolled={isScrolled} 
        openMobile={openMobile} 
        closeMobile={closeMobile} 
      />
      <main>
        <Outlet />
      </main>
      {pathname !== "/login" && pathname !== "/register" && <Cta />}
      <Footer showStickyApply={showStickyApply} />
    </div>
  );
}