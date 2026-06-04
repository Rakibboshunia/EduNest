const fs = require('fs');

const content = fs.readFileSync('src/pages/LandingPage.jsx', 'utf8');
const lines = content.split('\n');

const hStart = lines.findIndex(l => l.includes('{/* Navigation */}'));
const hEnd = lines.findIndex(l => l.includes('</header>'));
const headerCode = lines.slice(hStart, hEnd + 1).join('\n');

fs.writeFileSync('src/components/layout/Header.jsx', `import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, ChevronDown, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";

export function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  
  // Update section links to handle cross-page navigation properly
  const handleScroll = (e, id) => {
    if (!isHome) return; // Let default anchor behavior handle navigation to home page with hash
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
${headerCode.replace(/href="#/g, 'href="/#')}
    </>
  );
}`);

const cStart = lines.findIndex(l => l.includes('{/* CTA Section */}'));
const cEnd = lines.findIndex((l, i) => i > cStart && l.includes('</section>'));
const ctaCode = lines.slice(cStart, cEnd + 1).join('\n');

fs.writeFileSync('src/components/layout/Cta.jsx', `import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Re-defining fadeIn since it's used in CTA
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export function Cta() {
  return (
    <>
${ctaCode}
    </>
  );
}`);

const fStart = lines.findIndex(l => l.includes('<footer'));
const fEnd = lines.findIndex(l => l.includes('</footer>'));
const footerCode = lines.slice(fStart, fEnd + 1).join('\n');

fs.writeFileSync('src/components/layout/Footer.jsx', `import { Link } from "react-router-dom";
import { GraduationCap, Mail } from "lucide-react";

export function Footer() {
  return (
    <>
${footerCode}
    </>
  );
}`);

fs.writeFileSync('src/layouts/PublicLayout.jsx', `import { Outlet, useLocation } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Cta } from "@/components/layout/Cta";
import { useEffect } from "react";

export function PublicLayout() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-50 selection:bg-[var(--brand-primary)]/50 overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      {pathname !== "/login" && pathname !== "/register" && <Cta />}
      <Footer />
    </div>
  );
}`);

// Remove Header, Footer, CTA from LandingPage
lines.splice(fStart, fEnd - fStart + 1);
lines.splice(cStart, cEnd - cStart + 1);
lines.splice(hStart, hEnd - hStart + 1);

// We must also remove the outer wrapper div from LandingPage since PublicLayout has it.
// The wrapper is <div className="flex flex-col min-h-screen..."> on line 63 and </div> at the end.
// Let's just write the modified content back.
fs.writeFileSync('src/pages/LandingPage.jsx', lines.join('\n'));
