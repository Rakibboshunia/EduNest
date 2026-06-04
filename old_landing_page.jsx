import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  ArrowRight, 
  BarChart, 
  Users, 
  Calendar, 
  ShieldCheck,
  CheckCircle2,
  Star,
  Zap,
  LayoutDashboard,
  Quote,
  ChevronDown,
  Menu,
  CreditCard,
  Mail,
  Video,
  MessageSquare,
  Database,
  Cloud
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose
} from "@/components/ui/sheet";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-50 selection:bg-[var(--brand-primary)]/50 overflow-x-hidden">
      {/* Navigation */}
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
          {/* Product scroll links */}
          {[
            { label: 'Features', id: '#features' },
            { label: 'Testimonials', id: '#testimonials' },
            { label: 'Pricing', id: '#pricing' },
            { label: 'FAQ', id: '#faq' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.id}
              onClick={(e) => { e.preventDefault(); document.querySelector(item.id)?.scrollIntoView({ behavior: 'smooth' }); }}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
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
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3 mb-2">On this page</p>
                    {[
                      { label: 'Features', id: '#features' },
                      { label: 'Testimonials', id: '#testimonials' },
                      { label: 'Pricing', id: '#pricing' },
                      { label: 'FAQ', id: '#faq' },
                    ].map((item) => (
                      <SheetClose asChild key={item.label}>
                        <a
                          href={item.id}
                          onClick={(e) => { e.preventDefault(); document.querySelector(item.id)?.scrollIntoView({ behavior: 'smooth' }); }}
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

      <main className="flex-1 pt-16 md:pt-24">
        {/* Hero Section */}
        <section className="w-full py-14 md:py-24 lg:py-32 relative flex items-center justify-center overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          
          {/* Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[var(--brand-primary)]/20 via-[var(--brand-secondary)]/10 to-transparent blur-[100px] rounded-full -z-10 pointer-events-none"></div>
          
          {/* Floating UI Elements (Desktop Only) */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 1 }}
            className="absolute left-10 lg:left-20 top-40 hidden lg:flex flex-col gap-3 p-4 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md rounded-2xl shadow-2xl z-0"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-full bg-[var(--brand-primary)]/20 flex items-center justify-center border border-[var(--brand-primary)]/30">
                <Users className="h-5 w-5 text-[var(--brand-primary)]" />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Total Students</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">2,842</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#4ade80] bg-[#4ade80]/10 px-2 py-1 rounded-md w-fit">
              <ArrowRight className="h-3 w-3 -rotate-45" /> +12% this month
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 1 }}
            className="absolute right-10 lg:right-20 bottom-40 hidden lg:flex flex-col gap-4 p-5 bg-white dark:bg-[#0a0a0a]/80 border border-slate-200 dark:border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl shadow-[var(--brand-secondary)]/20 z-0 w-64"
          >
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-medium text-slate-900 dark:text-white">Fee Collection</p>
              <div className="h-2 w-2 rounded-full bg-[var(--brand-secondary)] animate-pulse"></div>
            </div>
            <div className="h-2 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] w-[85%] rounded-full"></div>
            </div>
            <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>$85k collected</span>
              <span>$100k target</span>
            </div>
          </motion.div>

          <div className="container px-4 md:px-6 flex flex-col items-center text-center z-10">
            <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 max-w-4xl relative">
              
              {/* Top Badge */}
              <motion.div variants={fadeIn} className="mx-auto inline-flex items-center rounded-full border border-[var(--brand-primary)]/30 px-5 py-2 text-sm font-medium bg-[var(--brand-primary)]/10 backdrop-blur-md mb-2 shadow-[0_0_20px_rgba(var(--brand-primary),0.3)] cursor-default">
                <span className="flex h-2 w-2 rounded-full bg-[var(--brand-primary)] mr-3 animate-pulse shadow-[0_0_10px_var(--brand-primary)]"></span>
                <span className="text-slate-900 dark:text-white/90 font-semibold tracking-wide">EduNest OS 2.0 is now live</span>
              </motion.div>
              
              {/* Main Headline */}
              <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tighter leading-[1.1] drop-shadow-2xl">
                The Modern OS for <br className="hidden md:block" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--brand-primary)] via-slate-800 dark:via-white to-[var(--brand-secondary)] animate-gradient-x">
                  Educational Excellence
                </span>
              </motion.h1>
              
              {/* Sub Headline */}
              <motion.p variants={fadeIn} className="mx-auto max-w-[700px] text-slate-600 dark:text-slate-400 md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed mt-6">
                Streamline operations, boost student engagement, and gain powerful insights with a premium platform designed exclusively for forward-thinking institutions.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-5 justify-center pt-8">
                <Button size="lg" className="rounded-full h-14 px-8 text-base font-semibold bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200 shadow-xl dark:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all hover:scale-105" asChild>
                  <Link to="/dashboard">
                    Start for free <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base font-medium border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-900 dark:text-white backdrop-blur-md transition-all hover:border-slate-400 dark:hover:border-white/40">
                  Book a Demo
                </Button>
              </motion.div>
              
              <motion.div variants={fadeIn} className="pt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[var(--brand-secondary)]" /> No credit card required</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[var(--brand-secondary)]" /> 14-day free trial</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[var(--brand-secondary)]" /> Cancel anytime</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="pt-12 md:pt-16 pb-8 border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#030712] relative z-10">
          <div className="container px-4 text-center">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-10">Trusted by innovative institutions worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 lg:gap-16 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-700">
              {['Stanford', 'Harvard', 'MIT', 'Oxford', 'Cambridge'].map((uni, i) => (
                <div key={i} className="text-xl sm:text-2xl font-black tracking-tighter text-slate-900 dark:text-white/80">{uni}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Showcase Section */}
        <section className="py-16 md:py-20 bg-slate-50 dark:bg-[#030712] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-r from-[var(--brand-primary)]/30 to-[var(--brand-secondary)]/30 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
          
          <div className="container px-4 mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-[var(--brand-primary)] font-semibold tracking-wide uppercase text-sm mb-3">Dashboard Overview</h2>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">A bird's eye view of your entire school</h3>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto max-w-6xl rounded-2xl md:rounded-[2rem] border border-slate-200/50 dark:border-white/10 bg-white/50 dark:bg-[#0a0a0a]/80 backdrop-blur-xl p-2 md:p-4 shadow-[0_0_50px_rgba(var(--brand-primary),0.15)] overflow-hidden"
            >
              {/* Fake Browser Window */}
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-[#111] shadow-inner">
                <div className="h-12 bg-white dark:bg-[#050505] flex items-center px-4 gap-4 border-b border-slate-200 dark:border-white/5">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-amber-400"></div>
                    <div className="h-3 w-3 rounded-full bg-emerald-400"></div>
                  </div>
                  <div className="mx-auto h-7 w-1/2 md:w-1/3 bg-slate-100 dark:bg-white/5 rounded-md flex items-center justify-center text-xs text-slate-400 font-medium">app.edunest.com/dashboard</div>
                </div>
                
                {/* Mockup Body */}
                <div className="p-4 md:p-8 flex flex-col md:flex-row gap-6 min-h-[400px]">
                  {/* Sidebar Mock */}
                  <div className="hidden md:flex flex-col w-48 space-y-4 border-r border-slate-200 dark:border-white/5 pr-6">
                    <div className="h-8 w-32 bg-slate-200 dark:bg-white/10 rounded-lg mb-8"></div>
                    {[true, false, false, false, false].map((active, i) => (
                      <div key={i} className={`h-10 rounded-xl ${active ? 'bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/20' : 'bg-transparent'} flex items-center px-3 gap-3`}>
                        <div className={`h-4 w-4 rounded ${active ? 'bg-[var(--brand-primary)]/60' : 'bg-slate-300 dark:bg-white/10'}`}></div>
                        <div className={`h-2 ${active ? 'w-24 bg-[var(--brand-primary)]/60' : 'w-20 bg-slate-300 dark:bg-white/10'} rounded-full`}></div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Main Content Mock */}
                  <div className="flex-1 space-y-6">
                    <div className="flex justify-between items-center">
                      <div className="h-8 w-48 bg-slate-200 dark:bg-white/10 rounded-lg"></div>
                      <div className="h-10 w-32 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] rounded-full opacity-90"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { color: "from-blue-500/20 to-transparent" },
                        { color: "from-emerald-500/20 to-transparent" },
                        { color: "from-purple-500/20 to-transparent" },
                        { color: "from-amber-500/20 to-transparent" }
                      ].map((stat, i) => (
                        <div key={i} className={`h-28 bg-white dark:bg-[#151515] rounded-xl border border-slate-200 dark:border-white/5 p-4 flex flex-col justify-between relative overflow-hidden`}>
                          <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${stat.color} blur-xl rounded-full`}></div>
                          <div className="h-3 w-16 bg-slate-200 dark:bg-white/10 rounded-full relative z-10"></div>
                          <div className="h-6 w-24 bg-slate-300 dark:bg-white/20 rounded-lg relative z-10"></div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1 h-64 bg-white dark:bg-[#151515] rounded-xl border border-slate-200 dark:border-white/5 p-6 flex flex-col relative overflow-hidden">
                        <div className="h-4 w-32 bg-slate-200 dark:bg-white/10 rounded-full mb-6"></div>
                        <div className="flex-1 flex items-end gap-2 relative z-10">
                           {[40, 70, 45, 90, 65, 80, 50, 85].map((h, i) => (
                             <div key={i} className="flex-1 bg-[var(--brand-primary)]/40 rounded-t-sm hover:bg-[var(--brand-primary)] transition-colors cursor-pointer" style={{ height: `${h}%` }}></div>
                           ))}
                        </div>
                      </div>
                      <div className="w-full md:w-1/3 h-64 bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] rounded-xl opacity-90 p-6 flex flex-col justify-between shadow-lg shadow-[var(--brand-primary)]/20">
                         <div className="h-4 w-24 bg-white/30 rounded-full"></div>
                         <div className="space-y-3">
                           <div className="h-8 w-3/4 bg-white/20 rounded-lg"></div>
                           <div className="h-3 w-full bg-white/10 rounded-full"></div>
                           <div className="h-3 w-2/3 bg-white/10 rounded-full"></div>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-16 md:py-24 bg-white dark:bg-[#050505] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-secondary)]/10 blur-[120px] rounded-full -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--brand-primary)]/10 blur-[120px] rounded-full -z-10"></div>
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-[var(--brand-primary)] font-semibold tracking-wide uppercase text-sm mb-3">Core Features</h2>
              <h3 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-slate-900 dark:text-white">Everything you need to <span className="text-slate-500 dark:text-slate-400">scale your institution</span></h3>
              <p className="text-slate-500 dark:text-slate-400 text-lg">Powerful tools wrapped in a beautiful, intuitive interface designed for modern educators and administrators.</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Users, title: "Student Management", desc: "Centralized database for student records, enrollment history, and academic progress.", color: "from-blue-500 to-cyan-500" },
                { icon: Calendar, title: "Smart Attendance", desc: "Automated tracking with biometric integration and instant parent notifications.", color: "from-emerald-500 to-teal-500" },
                { icon: BarChart, title: "Advanced Analytics", desc: "Customizable dashboards showing real-time metrics on performance and revenue.", color: "from-purple-500 to-pink-500" },
                { icon: Zap, title: "Automated Workflows", desc: "Save hundreds of hours by automating fee reminders, report cards, and notices.", color: "from-amber-500 to-orange-500" },
                { icon: ShieldCheck, title: "Bank-Grade Security", desc: "Role-based access control with end-to-end encryption for all sensitive data.", color: "from-red-500 to-rose-500" },
                { icon: LayoutDashboard, title: "Parent Portal", desc: "Dedicated mobile-friendly portal for parents to track fees, grades, and events.", color: "from-indigo-500 to-blue-500" },
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group relative p-8 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:bg-white dark:hover:bg-white/[0.04] transition-all duration-300 hover:shadow-xl dark:hover:shadow-none hover:-translate-y-1"
                >
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${feature.color} p-[1px] mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="h-full w-full rounded-2xl bg-white dark:bg-[#0a0a0a] flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-slate-700 dark:text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">{feature.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comprehensive A-Z Modules Section */}
        <section className="py-16 md:py-24 bg-slate-50 dark:bg-[#030712] relative overflow-hidden border-t border-slate-200 dark:border-white/5">
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-[var(--brand-primary)] font-semibold tracking-wide uppercase text-sm mb-3">A-Z Capabilities</h2>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">Explore the full platform</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">Every module your school needs to operate efficiently, completely connected in one unified platform.</p>
            </div>
            
            <Tabs defaultValue="academics" className="w-full max-w-5xl mx-auto">
              <div className="flex justify-center overflow-x-auto pb-4 mb-8">
                <TabsList className="bg-white dark:bg-[#111] border border-slate-200 dark:border-white/10 p-1 h-auto rounded-full flex-shrink-0">
                  <TabsTrigger value="academics" className="rounded-full px-3 sm:px-6 py-2 text-xs sm:text-sm data-[state=active]:bg-[var(--brand-primary)] data-[state=active]:text-white">Academics</TabsTrigger>
                  <TabsTrigger value="admin" className="rounded-full px-3 sm:px-6 py-2 text-xs sm:text-sm data-[state=active]:bg-[var(--brand-primary)] data-[state=active]:text-white">Admin</TabsTrigger>
                  <TabsTrigger value="finance" className="rounded-full px-3 sm:px-6 py-2 text-xs sm:text-sm data-[state=active]:bg-[var(--brand-primary)] data-[state=active]:text-white">Finance</TabsTrigger>
                  <TabsTrigger value="communication" className="rounded-full px-3 sm:px-6 py-2 text-xs sm:text-sm data-[state=active]:bg-[var(--brand-primary)] data-[state=active]:text-white">Comms</TabsTrigger>
                </TabsList>
              </div>

              {[
                {
                  value: "academics",
                  features: [
                    { name: "Attendance Tracking", desc: "Daily, subject-wise, and biometric integration." },
                    { name: "Gradebooks & Exams", desc: "Custom report cards and automated grading scales." },
                    { name: "Syllabus Planning", desc: "Track curriculum completion across all subjects." },
                    { name: "Timetable Generation", desc: "Conflict-free automatic schedule generation." },
                    { name: "Homework & Assignments", desc: "Digital submission and teacher feedback." },
                    { name: "Online Classes", desc: "Direct integration with Zoom & Google Meet." },
                  ]
                },
                {
                  value: "admin",
                  features: [
                    { name: "Student Profiles", desc: "Complete 360-degree view of every student." },
                    { name: "Staff Management", desc: "HR, payroll, and employee document tracking." },
                    { name: "Library Management", desc: "Barcode scanning and automated due date reminders." },
                    { name: "Transport System", desc: "Bus route tracking and student transport allocation." },
                    { name: "ID Card Generation", desc: "Bulk print custom ID cards for students and staff." },
                    { name: "Asset Management", desc: "Track school inventory and physical assets." },
                  ]
                },
                {
                  value: "finance",
                  features: [
                    { name: "Fee Collection", desc: "Online payments, receipt generation, and invoices." },
                    { name: "Expense Tracking", desc: "Monitor daily school expenses and budgets." },
                    { name: "Payroll Processing", desc: "Automated salary slips and tax calculations." },
                    { name: "Scholarships", desc: "Manage fee concessions and student scholarships." },
                    { name: "Financial Reports", desc: "Export balance sheets and revenue analytics." },
                    { name: "Inventory Sales", desc: "Sell uniforms and books directly from the portal." },
                  ]
                },
                {
                  value: "communication",
                  features: [
                    { name: "Parent Portal", desc: "Dedicated mobile app view for parents." },
                    { name: "Notice Board", desc: "Digital announcements and event scheduling." },
                    { name: "SMS & Email Alerts", desc: "Instant notifications for attendance and fees." },
                    { name: "Teacher-Parent Chat", desc: "Secure messaging channel for instant communication." },
                    { name: "Grievance Redressal", desc: "Ticketing system for parent and student issues." },
                    { name: "Alumni Network", desc: "Keep track of graduated students and events." },
                  ]
                }
              ].map((tab, i) => (
                <TabsContent key={i} value={tab.value} className="mt-0">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                    className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  >
                    {tab.features.map((feature, j) => (
                      <div key={j} className="p-6 bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/5 rounded-2xl hover:border-[var(--brand-primary)]/40 transition-colors shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-[var(--brand-primary)] shadow-[0_0_8px_var(--brand-primary)]"></div>
                          <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-1">{feature.name}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-16 md:py-24 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#030712] relative overflow-hidden">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[var(--brand-primary)]/10 to-transparent blur-[100px] rounded-full -z-10 pointer-events-none"></div>
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 space-y-6 md:pr-10 text-center md:text-left">
                <h2 className="text-[var(--brand-primary)] font-semibold tracking-wide uppercase text-sm">Seamless Integrations</h2>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">Works with the tools you already love.</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                  EduNest doesn't force you to change your workflow. Connect instantly with Google Workspace, Stripe, Zoom, and your favorite email providers with one-click integrations.
                </p>
                <div className="pt-4 flex justify-center md:justify-start">
                  <Button variant="link" className="text-[var(--brand-primary)] p-0 h-auto font-semibold hover:no-underline hover:opacity-80 transition-opacity">
                    View all 50+ integrations <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex-1 w-full max-w-lg mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--brand-primary)]/20 to-[var(--brand-secondary)]/20 blur-3xl rounded-full z-0"></div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 relative z-10">
                  {[
                    { icon: Video, name: "Zoom", color: "text-blue-500", bg: "bg-blue-500/10 border-blue-500/20" },
                    { icon: Mail, name: "Workspace", color: "text-red-500", bg: "bg-red-500/10 border-red-500/20" },
                    { icon: CreditCard, name: "Stripe", color: "text-indigo-500", bg: "bg-indigo-500/10 border-indigo-500/20" },
                    { icon: MessageSquare, name: "Slack", color: "text-amber-500", bg: "bg-amber-500/10 border-amber-500/20" },
                    { icon: Cloud, name: "AWS", color: "text-orange-500", bg: "bg-orange-500/10 border-orange-500/20" },
                    { icon: Database, name: "Legacy DBs", color: "text-emerald-500", bg: "bg-emerald-500/10 border-emerald-500/20" },
                  ].map((integration, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/5 hover:border-[var(--brand-primary)]/50 transition-colors shadow-lg hover:shadow-xl dark:shadow-none cursor-pointer group`}
                    >
                      <div className={`h-12 w-12 rounded-xl flex items-center justify-center border transition-transform group-hover:scale-110 ${integration.bg}`}>
                        <integration.icon className={`h-6 w-6 ${integration.color}`} />
                      </div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{integration.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-16 border-y border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#030712] relative overflow-hidden">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--brand-primary)]/10 blur-[100px] rounded-full"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
              {[
                { value: "500+", label: "Schools Hosted" },
                { value: "2M+", label: "Students Managed" },
                { value: "99.9%", label: "Uptime SLA" },
                { value: "24/7", label: "Expert Support" },
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-white/50">{stat.value}</h4>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 md:py-32 bg-white dark:bg-black relative overflow-hidden">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-3xl h-full bg-[radial-gradient(ellipse_at_top,rgba(var(--brand-primary),0.08)_0%,transparent_70%)] pointer-events-none"></div>
          
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
              <h2 className="text-[var(--brand-primary)] font-semibold tracking-wide uppercase text-sm mb-3">Onboarding</h2>
              <h3 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-slate-900 dark:text-white">Up and running in days, not months.</h3>
              <p className="text-slate-500 dark:text-slate-400 text-lg">We've eliminated the traditional headaches of software migration. Our white-glove onboarding gets your institution online at lightning speed.</p>
            </div>
            
            <div className="relative max-w-5xl mx-auto">
              {/* Connecting Line for Desktop */}
              <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[var(--brand-primary)]/30 to-transparent"></div>
              
              <div className="grid md:grid-cols-3 gap-12 md:gap-8">
                {[
                  { step: "01", icon: Database, title: "Import Data", desc: "Upload your existing student and staff spreadsheets. Our AI automatically maps and cleans your legacy data.", color: "text-blue-500", bg: "bg-blue-500/10" },
                  { step: "02", icon: LayoutDashboard, title: "Configure Rules", desc: "Set up your fee structures, grading systems, and access roles exactly how your institution operates.", color: "text-[var(--brand-primary)]", bg: "bg-[var(--brand-primary)]/10" },
                  { step: "03", icon: Zap, title: "Go Live", desc: "Invite your staff and parents. Watch as your administrative overhead drops and engagement skyrockets.", color: "text-amber-500", bg: "bg-amber-500/10" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.5 }}
                    className="relative flex flex-col items-center text-center"
                  >
                    <div className={`w-24 h-24 rounded-full flex items-center justify-center border-4 border-white dark:border-black bg-slate-50 dark:bg-[#111] shadow-xl relative z-10 mb-6 group hover:scale-110 transition-transform duration-300`}>
                      <div className={`absolute inset-0 rounded-full ${item.bg} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                      <item.icon className={`h-8 w-8 ${item.color} relative z-10`} />
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[var(--brand-secondary)] text-white text-xs font-bold flex items-center justify-center shadow-lg">
                        {item.step}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-16 md:py-24 bg-white dark:bg-[#0a0a0a] relative">
          <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-[#030712] to-transparent pointer-events-none z-10 hidden md:block"></div>
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#030712] to-transparent pointer-events-none z-10 hidden md:block"></div>
          <div className="container px-4 md:px-6 mx-auto relative">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-[var(--brand-secondary)] font-semibold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
              <h3 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Loved by educators worldwide</h3>
              <p className="text-slate-500 dark:text-slate-400 text-lg">Don't just take our word for it. Here is what leading principals and administrators have to say about EduNest.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
              {[
                { quote: "EduNest has completely transformed how our school operates. The automated fee management alone saved us countless hours every month.", author: "Sarah Jenkins", role: "Principal, Lincoln High", avatar: "https://i.pravatar.cc/150?img=1" },
                { quote: "The parent portal is a game-changer. Our parent engagement has skyrocketed since we implemented EduNest's real-time grading and attendance tracking.", author: "David Chen", role: "Administrator, Oakridge Academy", avatar: "https://i.pravatar.cc/150?img=11" },
                { quote: "Migrating to EduNest was seamless. Their support team was phenomenal, and the interface is so intuitive that our staff required almost no training.", author: "Emily Rodriguez", role: "Director, Summit Prep", avatar: "https://i.pravatar.cc/150?img=5" },
              ].map((testimonial, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  className="bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/5 p-8 rounded-3xl relative"
                >
                  <Quote className="h-10 w-10 text-white/5 absolute top-6 right-6" />
                  <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(star => <Star key={star} className="h-4 w-4 fill-[#facc15] text-[#facc15]" />)}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-8 italic relative z-10">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <img src={testimonial.avatar} alt={testimonial.author} className="h-12 w-12 rounded-full border border-slate-200 dark:border-white/10" />
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">{testimonial.author}</h4>
                      <p className="text-xs text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-16 md:py-24 bg-slate-50 dark:bg-[#030712] relative overflow-hidden">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-to-b from-[var(--brand-primary)]/5 to-[var(--brand-secondary)]/5 blur-[120px] rounded-full z-0"></div>
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-[var(--brand-primary)] font-semibold tracking-wide uppercase text-sm mb-3">Simple Pricing</h2>
              <h3 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Pricing that scales with you</h3>
              <p className="text-slate-500 dark:text-slate-400 text-lg">No hidden fees. No surprise charges. Choose the plan that perfectly fits your institution's size.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {/* Starter Plan */}
              <div className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 flex flex-col relative overflow-hidden backdrop-blur-sm">
                <div className="mb-8">
                  <h4 className="text-xl font-medium text-slate-900 dark:text-white mb-2">Starter</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Perfect for small preschools and academies.</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-slate-900 dark:text-white">$199</span>
                    <span className="text-slate-500">/mo</span>
                  </div>
                </div>
                <div className="space-y-4 mb-8 flex-1">
                  {['Up to 500 Students', 'Basic Attendance', 'Standard Reporting', 'Email Support'].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-[var(--brand-secondary)]" /> {feature}
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full rounded-full border-slate-300 dark:border-white/20 hover:bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white bg-transparent">Get Started</Button>
              </div>

              {/* Professional Plan */}
              <div className="bg-[#0f172a] border border-[var(--brand-primary)] rounded-3xl p-8 flex flex-col relative overflow-hidden shadow-2xl shadow-[var(--brand-primary)]/30 transform md:-translate-y-4">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)]"></div>
                <div className="absolute top-4 right-4 bg-[var(--brand-primary)]/30 text-slate-900 dark:text-white text-xs font-semibold px-3 py-1 rounded-full border border-[var(--brand-primary)]">Most Popular</div>
                
                <div className="mb-8 mt-2">
                  <h4 className="text-xl font-medium text-slate-900 dark:text-white mb-2">Professional</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Ideal for growing K-12 schools.</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-slate-900 dark:text-white">$499</span>
                    <span className="text-slate-500">/mo</span>
                  </div>
                </div>
                <div className="space-y-4 mb-8 flex-1">
                  {['Up to 2,000 Students', 'Biometric Attendance', 'Advanced Analytics', 'Parent Portal App', 'SMS Notifications', 'Priority Support'].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-[var(--brand-primary)]" /> {feature}
                    </div>
                  ))}
                </div>
                <Button className="w-full rounded-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] hover:opacity-90 text-slate-900 dark:text-white border-0 shadow-lg shadow-[var(--brand-primary)]/20">Start 14-Day Trial</Button>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 flex flex-col relative overflow-hidden backdrop-blur-sm">
                <div className="mb-8">
                  <h4 className="text-xl font-medium text-slate-900 dark:text-white mb-2">Enterprise</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">For universities and multi-campus schools.</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-slate-900 dark:text-white">Custom</span>
                  </div>
                </div>
                <div className="space-y-4 mb-8 flex-1">
                  {['Unlimited Students', 'Multi-Branch Support', 'Custom Integrations', 'Dedicated Account Manager', 'White-labeling Options', 'On-premise deployment'].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-[var(--brand-secondary)]" /> {feature}
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full rounded-full border-slate-300 dark:border-white/20 hover:bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white bg-transparent">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-16 md:py-24 bg-white dark:bg-[#0a0a0a]">
          <div className="container px-4 md:px-6 mx-auto max-w-4xl">
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-slate-900 dark:text-white">Frequently Asked Questions</h2>
              <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg">Got questions? We've got answers. If you don't see your question here, reach out to our support team.</p>
            </div>
            
            <Accordion type="single" collapsible className="w-full text-slate-600 dark:text-slate-300 space-y-4">
              {[
                { q: "How long does it take to migrate to EduNest?", a: "Our dedicated onboarding team ensures that most schools can fully migrate their data and go live within 7 to 14 days, depending on the size of the institution and the quality of legacy data." },
                { q: "Is EduNest compliant with data privacy laws?", a: "Yes. EduNest is fully compliant with GDPR, COPPA, and FERPA. We utilize end-to-end encryption and strict role-based access control to ensure student data is always protected." },
                { q: "Can parents track their child's progress?", a: "Absolutely! EduNest includes a dedicated Parent Portal (accessible via web and mobile apps) where parents can view real-time attendance, grades, fee dues, and teacher feedback." },
                { q: "Does EduNest integrate with other software?", a: "We offer API access and native integrations with popular tools like Google Workspace, Microsoft Teams, Zoom, and leading payment gateways (Stripe, PayPal) for fee collection." },
                { q: "What happens after the 14-day free trial?", a: "After the 14-day trial, you can choose to subscribe to one of our paid plans. If you decide not to continue, your account will be paused, and you can export your data securely." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#111] px-6 rounded-2xl data-[state=open]:border-[var(--brand-primary)]/50 data-[state=open]:shadow-md transition-all hover:bg-slate-100 dark:hover:bg-white/5">
                  <AccordionTrigger className="hover:no-underline hover:text-[var(--brand-primary)] text-left py-6 text-lg font-medium transition-colors">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-slate-600 dark:text-slate-400 text-base leading-relaxed pb-6 pt-2 border-t border-slate-200/50 dark:border-white/5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 relative flex items-center justify-center bg-slate-50 dark:bg-[#030712] overflow-hidden">
          {/* Animated Background Mesh */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(var(--brand-primary),0.15)_0%,transparent_70%)] blur-[100px] pointer-events-none"></div>
          
          <div className="container px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="max-w-5xl mx-auto rounded-[2.5rem] p-[1px] md:p-[2px] relative group overflow-hidden shadow-2xl shadow-[var(--brand-primary)]/10"
            >
              {/* Spinning Gradient Border */}
              <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--brand-primary)_0%,var(--brand-secondary)_50%,var(--brand-primary)_100%)] opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-white dark:bg-[#050505] rounded-[2.5rem] p-10 md:p-20 text-center flex flex-col items-center backdrop-blur-3xl overflow-hidden h-full">
                {/* Inner Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[var(--brand-primary)]/20 blur-[60px] rounded-full pointer-events-none"></div>
                
                <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight relative z-10">Ready to transform your school?</h2>
                <p className="text-slate-500 dark:text-slate-400 text-xl mb-10 max-w-2xl mx-auto relative z-10">Join hundreds of institutions that have already upgraded to EduNest. Start your 14-day free trial today. No credit card required.</p>
                <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full sm:w-auto">
                  <Button size="lg" className="rounded-full h-14 px-10 text-base font-semibold bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200 shadow-xl dark:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all hover:scale-105 w-full sm:w-auto" asChild>
                    <Link to="/dashboard">Get Started Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full h-14 px-10 text-base font-semibold border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-transparent hover:bg-slate-200 dark:hover:bg-white/5 text-slate-900 dark:text-white transition-all w-full sm:w-auto">
                    Talk to Sales
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

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
                <a href="#" className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 hover:text-[var(--brand-primary)] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  Twitter
                </a>
                <a href="#" className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 hover:text-[#0077b5] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  LinkedIn
                </a>
                <a href="#" className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 hover:text-[#E1306C] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  Instagram
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
    </div>
  );
}
