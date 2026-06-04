import { Outlet, useLocation } from "react-router-dom";
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
      <main className="flex-1 pt-20 md:pt-28">
        <Outlet />
      </main>
      {pathname !== "/login" && pathname !== "/register" && <Cta />}
      <Footer />
    </div>
  );
}