import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, ChevronDown } from "lucide-react";
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
    <header className="px-6 lg:px-8 h-16 md:h-20 flex items-center border border-slate-200/50 dark:border-white/10 backdrop-blur-xl fixed top-0 md:top-4 left-0 right-0 md:left-4 md:right-4 lg:left-1/2 lg:-translate-x-1/2 lg:w-[95%] max-w-7xl z-50 bg-white/70 dark:bg-[#030712]/60 md:rounded-2xl shadow-lg shadow-slate-200/20 dark:shadow-black/40 transition-all">
      <Link to="/" className="flex items-center justify-center gap-2 group flex-shrink-0">
        <img src="/logo.png" alt="EduNest Logo" className="h-10 w-auto bg-white p-1 rounded-lg" onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }} />
        <div className="hidden h-10 w-10 rounded-xl bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] items-center justify-center shadow-lg group-hover:shadow-[var(--brand-primary)]/40 transition-all duration-300">
          <GraduationCap className="h-6 w-6 text-white" />
        </div>
        <span className="font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-white/70">
          EduNest
        </span>
      </Link>

      {/* Desktop Nav */}
      <nav className="ml-8 hidden lg:flex gap-1 items-center">
        {/* Home Dropdown (Section links) */}
        <div className="relative group">
          <button className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5">
            Home <ChevronDown className="h-4 w-4 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
          </button>
          <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col p-2 z-50 pointer-events-none group-hover:pointer-events-auto">
            {[
              { label: 'Features', id: '#features' },
              { label: 'Testimonials', id: '#testimonials' },
              { label: 'Pricing', id: '#pricing' },
              { label: 'FAQ', id: '#faq' },
            ].map((item) => (
              <a
                key={item.label}
                href={isHome ? item.id : `/${item.id}`}
                onClick={(e) => handleScroll(e, item.id)}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 block"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

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
          <Link to="/dashboard">Get Started</Link>
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
                      Get Started
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}