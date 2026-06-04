import { Link } from "react-router-dom";
import { GraduationCap, Mail } from "lucide-react";

export function Footer() {
  return (
    <>
      <footer className="w-full py-16 bg-white dark:bg-[#050505] border-t border-slate-200 dark:border-white/10 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(var(--brand-primary),0.1)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] flex items-center justify-center shadow-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-2xl tracking-tight text-slate-900 dark:text-white">EduNest</span>
              </Link>
              <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm mb-8 leading-relaxed">The modern operating system for educational institutions. Built with precision to automate, scale, and inspire.</p>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">Subscribe to our newsletter</h4>
                <div className="flex items-center gap-2 max-w-sm">
                  <input type="email" placeholder="Enter your email" className="h-11 w-full bg-slate-100 dark:bg-[#111] border border-slate-200 dark:border-white/10 rounded-full px-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[var(--brand-primary)] transition-colors" />
                  <Button className="rounded-full h-11 px-6 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200">Subscribe</Button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-6">Product</h4>
              <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                <li><a href="#features" onClick={(e) => { e.preventDefault(); document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[var(--brand-primary)] transition-colors cursor-pointer">Features</a></li>
                <li><a href="#pricing" onClick={(e) => { e.preventDefault(); document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[var(--brand-primary)] transition-colors cursor-pointer">Pricing</a></li>
                <li><Link to="#" className="hover:text-[var(--brand-primary)] transition-colors">Integrations</Link></li>
                <li><Link to="#" className="hover:text-[var(--brand-primary)] transition-colors">Changelog</Link></li>
                <li><Link to="#" className="hover:text-[var(--brand-primary)] transition-colors">Security</Link></li>
              </ul>
            </div>
            
            <div className="lg:col-span-1">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                <li><Link to="/about-us" className="hover:text-[var(--brand-primary)] transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-[var(--brand-primary)] transition-colors">Careers</Link></li>
                <li><Link to="/blog" className="hover:text-[var(--brand-primary)] transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-[var(--brand-primary)] transition-colors">Contact</Link></li>
                <li><Link to="#" className="hover:text-[var(--brand-primary)] transition-colors">Partners</Link></li>
              </ul>
            </div>
            
            <div className="lg:col-span-1">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                <li><Link to="/privacy-policy" className="hover:text-[var(--brand-primary)] transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="hover:text-[var(--brand-primary)] transition-colors">Terms of Service</Link></li>
                <li><Link to="/cookie-policy" className="hover:text-[var(--brand-primary)] transition-colors">Cookie Policy</Link></li>
                <li><Link to="#" className="hover:text-[var(--brand-primary)] transition-colors">DPA</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-6">Social</h4>
              <div className="flex flex-col gap-4">
                <a href="https://al-rakeb-boshunia.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 hover:text-[var(--brand-primary)] transition-colors">
                  <Globe className="h-4 w-4" />
                  Portfolio
                </a>
                <a href="https://github.com/Rakibboshunia/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/md-al-rakeb-rasel-boshunia/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 hover:text-[#0077b5] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  LinkedIn
                </a>
                <a href="#" className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 hover:text-[#1877F2] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  Facebook
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>© 2026 EduNest Inc. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              All systems operational
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}