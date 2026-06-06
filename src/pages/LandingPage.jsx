import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
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
    <div>
      
        {/* ═══════════════════════════════════════════
            HERO — Ultra Premium Cinematic
        ═══════════════════════════════════════════ */}
        <section className="w-full min-h-screen relative flex items-center overflow-hidden bg-[#04050f]">
          {/* Layered Orb Backgrounds */}
          <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-[var(--brand-primary)]/10 blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-40 -right-20 w-[600px] h-[600px] rounded-full bg-[var(--brand-secondary)]/10 blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-indigo-400/5 blur-[80px] pointer-events-none" />
          {/* Subtle Dot Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#0000000a_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

          <div className="container px-4 md:px-8 mx-auto relative z-10 py-20 md:py-24 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* ── LEFT COLUMN ── */}
              <motion.div
                initial="initial" animate="animate" variants={staggerContainer}
                className="flex flex-col gap-7"
              >
                {/* Badge */}
                <motion.div variants={fadeIn} className="inline-flex w-fit items-center gap-2.5 rounded-full border border-[var(--brand-primary)]/25 bg-[var(--brand-primary)]/8 px-4 py-2 backdrop-blur-sm shadow-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand-primary)] opacity-60"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--brand-primary)]"></span>
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-white/80 tracking-wide">EduNest OS 2.0 — Now Live</span>
                </motion.div>

                {/* Headline */}
                <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold tracking-tight leading-[1.07] text-slate-900 dark:text-white">
                  Run your school<br />
                  <span className="relative inline-block">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--brand-primary)] via-indigo-500 to-[var(--brand-secondary)]">smarter</span>
                    <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 220 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 6C40 2 100 1 218 6" stroke="url(#ul)" strokeWidth="3" strokeLinecap="round"/>
                      <defs><linearGradient id="ul" x1="0" y1="0" x2="218" y2="0" gradientUnits="userSpaceOnUse"><stop stopColor="var(--brand-primary)"/><stop offset="1" stopColor="var(--brand-secondary)"/></linearGradient></defs>
                    </svg>
                  </span>
                  , not harder.
                </motion.h1>

                {/* Sub-copy */}
                <motion.p variants={fadeIn} className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                  One unified OS for student records, attendance, finance, and parent communication — built for forward-thinking institutions that refuse to settle for average.
                </motion.p>

                {/* CTAs */}
                <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="h-14 px-8 rounded-2xl text-base font-semibold bg-gradient-to-r from-[var(--brand-primary)] via-[#3b82f6] to-indigo-600 hover:opacity-100 text-white shadow-2xl shadow-[var(--brand-primary)]/40 transition-all hover:scale-[1.05] border-0 relative overflow-hidden group"
                    asChild
                  >
                    <Link to="/dashboard">
                      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-[-20deg]"></div>
                      <span className="relative z-10 flex items-center">Go to Dashboard <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" /></span>
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-13 px-8 rounded-2xl text-base font-medium border-slate-200 dark:border-white/15 bg-white/60 dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-800 dark:text-white backdrop-blur-md transition-all"
                  >
                    Book a Demo
                  </Button>
                </motion.div>

                {/* Trust micro-badges */}
                <motion.div variants={fadeIn} className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 font-medium">
                  {['No credit card required', '14-day free trial', 'Cancel anytime'].map((t) => (
                    <span key={t} className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />{t}
                    </span>
                  ))}
                </motion.div>

                {/* Social proof avatars */}
                <motion.div variants={fadeIn} className="flex items-center gap-3 pt-1">
                  <div className="flex -space-x-3">
                    {['?img=1','?img=11','?img=5','?img=3'].map((q, i) => (
                      <img key={i} src={`https://i.pravatar.cc/40${q}`} alt="" className="h-9 w-9 rounded-full border-2 border-white dark:border-[#030712] object-cover" />
                    ))}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    <span className="font-bold text-slate-900 dark:text-white">500+</span> schools trust EduNest
                  </div>
                </motion.div>
              </motion.div>

              {/* ── RIGHT COLUMN — 3D Dashboard Card ── */}
              <motion.div
                initial={{ opacity: 0, x: 100, y: 50, rotateX: 30, rotateY: -30, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, y: [0, -15, 0], rotateX: 15, rotateY: -25, rotateZ: 5, scale: 0.95 }}
                transition={{ 
                  opacity: { duration: 1.2, delay: 0.3, ease: "easeOut" },
                  x: { duration: 1.2, delay: 0.3, ease: "easeOut" },
                  rotateX: { duration: 1.2, delay: 0.3, ease: "easeOut" },
                  rotateY: { duration: 1.2, delay: 0.3, ease: "easeOut" },
                  scale: { duration: 1.2, delay: 0.3, ease: "easeOut" },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
                }}
                className="relative hidden lg:block"
                style={{ perspective: '2000px', transformStyle: 'preserve-3d' }}
              >
                {/* Massive 3D Glow */}
                <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-[var(--brand-primary)]/50 via-indigo-500/40 to-[var(--brand-secondary)]/40 blur-[80px] scale-110 translate-y-10 animate-pulse" style={{ animationDuration: '4s', transform: 'translateZ(-100px)' }} />

                {/* Main 3D Card */}
                <div 
                  className="relative rounded-[2rem] border-[1.5px] border-white/40 dark:border-white/10 bg-white/30 dark:bg-[#0c0c14]/40 backdrop-blur-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] p-6 overflow-hidden transition-all duration-700 hover:scale-100 hover:rotate-x-5 hover:rotate-y-[-10deg] group"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Inner subtle reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none group-hover:opacity-50 transition-opacity"></div>
                  {/* Fake window chrome */}
                  <div className="flex items-center gap-2 mb-5">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                    <div className="h-3 w-3 rounded-full bg-emerald-400" />
                    <div className="mx-auto h-6 w-48 bg-slate-100 dark:bg-white/8 rounded-lg flex items-center justify-center text-[10px] text-slate-400 font-mono">app.edunest.com/dashboard</div>
                    <div className="h-2 w-2 rounded-full bg-[var(--brand-secondary)] animate-pulse" />
                  </div>

                  {/* Stat row */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: 'Students', value: '2,842', delta: '+12%', color: 'from-blue-500/20 to-blue-500/5', dot: 'bg-blue-500' },
                      { label: 'Attendance', value: '94.2%', delta: '+2.1%', color: 'from-emerald-500/20 to-emerald-500/5', dot: 'bg-emerald-500' },
                      { label: 'Fee Collected', value: '$85k', delta: '85%', color: 'from-violet-500/20 to-violet-500/5', dot: 'bg-violet-500' },
                    ].map((s, i) => (
                      <div key={i} className={`relative rounded-xl p-3 bg-gradient-to-b ${s.color} border border-slate-200/50 dark:border-white/5 overflow-hidden`}>
                        <div className={`absolute top-2 right-2 h-1.5 w-1.5 rounded-full ${s.dot}`} />
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 mb-1">{s.label}</p>
                        <p className="text-lg font-bold text-slate-900 dark:text-white leading-none">{s.value}</p>
                        <p className="text-[10px] text-emerald-500 font-medium mt-1">{s.delta}</p>
                      </div>
                    ))}
                  </div>

                  {/* Chart area */}
                  <div className="rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/50 dark:border-white/5 p-4 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Weekly Attendance</p>
                      <span className="text-[10px] text-slate-400 bg-slate-200 dark:bg-white/10 px-2 py-0.5 rounded-full">This week</span>
                    </div>
                    <div className="flex items-end gap-1.5 h-20">
                      {[65,80,55,90,72,88,60].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                          <div
                            className="w-full rounded-t-md bg-gradient-to-t from-[var(--brand-primary)] to-[var(--brand-secondary)] opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                            style={{ height: `${h}%` }}
                          />
                          <span className="text-[9px] text-slate-400">{['M','T','W','T','F','S','S'][i]}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Progress rows */}
                  <div className="space-y-2.5">
                    {[
                      { label: 'Fee Collection Goal', pct: 85, color: 'from-[var(--brand-primary)] to-indigo-500' },
                      { label: 'Syllabus Completion', pct: 68, color: 'from-emerald-500 to-teal-400' },
                    ].map((bar, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-[10px] text-slate-500 dark:text-slate-400 mb-1">
                          <span>{bar.label}</span><span className="font-semibold text-slate-700 dark:text-slate-200">{bar.pct}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-200 dark:bg-white/8 rounded-full overflow-hidden">
                          <div className={`h-full bg-gradient-to-r ${bar.color} rounded-full`} style={{ width: `${bar.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Floating 3D notification badge */}
                  <motion.div
                    initial={{ opacity: 0, z: -50 }}
                    animate={{ opacity: 1, z: 80, y: [-5, 5, -5] }}
                    transition={{ delay: 1.4, duration: 0.8, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
                    className="absolute -top-6 -right-6 flex items-center gap-3 bg-white/90 dark:bg-[#1a1a2e]/90 backdrop-blur-md border border-white/50 dark:border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] rounded-2xl px-4 py-3"
                    style={{ transform: 'translateZ(80px)' }}
                  >
                    <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-slate-800 dark:text-white leading-none mb-1">Payment received</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">$4,200 — Class 10A</p>
                    </div>
                  </motion.div>
                  
                  {/* 3D Floating Analytics Badge */}
                  <motion.div
                    initial={{ opacity: 0, z: -50 }}
                    animate={{ opacity: 1, z: 60, y: [5, -5, 5] }}
                    transition={{ delay: 1.6, duration: 0.8, y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
                    className="absolute -bottom-8 -left-8 flex items-center gap-3 bg-white/90 dark:bg-[#1a1a2e]/90 backdrop-blur-md border border-white/50 dark:border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] rounded-2xl px-4 py-3"
                    style={{ transform: 'translateZ(60px)' }}
                  >
                    <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                      <BarChart className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-slate-800 dark:text-white leading-none mb-1">Weekly Growth</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400"><span className="text-emerald-500 font-bold">+18.2%</span> students</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

            </div>
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
        <section id="dashboard" className="py-16 md:py-20 bg-slate-50 dark:bg-[#030712] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-r from-[var(--brand-primary)]/30 to-[var(--brand-secondary)]/30 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
          
          <div className="container px-4 mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-[var(--brand-primary)] font-semibold tracking-wide uppercase text-sm mb-3">Dashboard Overview</h2>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">A bird's eye view of your entire school</h3>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 100, rotateX: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative mx-auto max-w-6xl perspective-[2000px]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--brand-primary)]/30 via-transparent to-[var(--brand-secondary)]/30 blur-[100px] -z-10 animate-pulse" style={{ animationDuration: '6s' }} />

              <motion.div 
                whileHover={{ rotateX: 5, rotateY: -5, rotateZ: 2, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="relative rounded-2xl md:rounded-[2rem] border-[1.5px] border-white/30 dark:border-white/10 bg-white/40 dark:bg-[#0c0c14]/60 backdrop-blur-3xl p-2 md:p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transform-gpu group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 bg-gradient-to-bl from-white/10 to-transparent pointer-events-none group-hover:opacity-50 transition-opacity"></div>
              {/* Fake Browser Window */}
              <div className="rounded-xl overflow-hidden border border-slate-200/50 dark:border-white/10 bg-slate-100/80 dark:bg-[#050505]/90 shadow-2xl relative" style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}>
                <div className="h-12 bg-white/80 dark:bg-[#020202] backdrop-blur-md flex items-center px-4 gap-4 border-b border-slate-200/50 dark:border-white/5">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400 shadow-sm"></div>
                    <div className="h-3 w-3 rounded-full bg-amber-400 shadow-sm"></div>
                    <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-sm"></div>
                  </div>
                  <div className="mx-auto h-7 w-1/2 md:w-1/3 bg-slate-200/50 dark:bg-white/5 rounded-md flex items-center justify-center text-xs text-slate-500 font-medium">app.edunest.com/dashboard</div>
                </div>
                
                {/* Mockup Body */}
                <div className="p-4 md:p-8 flex flex-col md:flex-row gap-6 min-h-[400px] relative">
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
                        { color: "from-blue-500/30 to-transparent" },
                        { color: "from-emerald-500/30 to-transparent" },
                        { color: "from-purple-500/30 to-transparent" },
                        { color: "from-amber-500/30 to-transparent" }
                      ].map((stat, i) => (
                        <div key={i} className={`h-28 bg-white/80 dark:bg-[#151515]/80 backdrop-blur-md rounded-xl border border-slate-200/50 dark:border-white/5 p-4 flex flex-col justify-between relative overflow-hidden group-hover:shadow-2xl transition-all duration-500`} style={{ transform: `translateZ(${40 + i*10}px)` }}>
                          <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${stat.color} blur-[30px] rounded-full`}></div>
                          <div className="h-3 w-16 bg-slate-200/80 dark:bg-white/10 rounded-full relative z-10"></div>
                          <div className="h-6 w-24 bg-slate-300/80 dark:bg-white/20 rounded-lg relative z-10"></div>
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
                      <div className="w-full md:w-1/3 h-64 bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] rounded-xl opacity-90 p-6 flex flex-col justify-between shadow-2xl shadow-[var(--brand-primary)]/30 group-hover:shadow-[var(--brand-primary)]/50 transition-all duration-500 relative overflow-hidden" style={{ transform: 'translateZ(70px)' }}>
                         <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-[40px] rounded-full"></div>
                         <div className="h-4 w-24 bg-white/30 rounded-full relative z-10"></div>
                         <div className="space-y-3 relative z-10">
                           <div className="h-8 w-3/4 bg-white/20 rounded-lg backdrop-blur-sm"></div>
                           <div className="h-3 w-full bg-white/10 rounded-full backdrop-blur-sm"></div>
                           <div className="h-3 w-2/3 bg-white/10 rounded-full backdrop-blur-sm"></div>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </motion.div>
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
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 perspective-[2000px]">
              {[
                { icon: Users, title: "Student Management", desc: "Centralized database for student records, enrollment history, and academic progress.", color: "from-blue-500 to-cyan-500", glow: "shadow-blue-500/20" },
                { icon: Calendar, title: "Smart Attendance", desc: "Automated tracking with biometric integration and instant parent notifications.", color: "from-emerald-500 to-teal-500", glow: "shadow-emerald-500/20" },
                { icon: BarChart, title: "Advanced Analytics", desc: "Customizable dashboards showing real-time metrics on performance and revenue.", color: "from-purple-500 to-pink-500", glow: "shadow-purple-500/20" },
                { icon: Zap, title: "Automated Workflows", desc: "Save hundreds of hours by automating fee reminders, report cards, and notices.", color: "from-amber-500 to-orange-500", glow: "shadow-amber-500/20" },
                { icon: ShieldCheck, title: "Bank-Grade Security", desc: "Role-based access control with end-to-end encryption for all sensitive data.", color: "from-red-500 to-rose-500", glow: "shadow-red-500/20" },
                { icon: LayoutDashboard, title: "Parent Portal", desc: "Dedicated mobile-friendly portal for parents to track fees, grades, and events.", color: "from-indigo-500 to-blue-500", glow: "shadow-indigo-500/20" },
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50, rotateX: 10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  whileHover={{ rotateX: 5, rotateY: -5, scale: 1.05, zIndex: 10 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
                  className={`group relative p-8 rounded-3xl bg-slate-50/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 hover:bg-white dark:hover:bg-[#111] transition-all duration-300 hover:shadow-2xl ${feature.glow} transform-gpu`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${feature.color} p-[1px] mb-6 transform group-hover:scale-110 group-hover:translate-z-[30px] transition-transform duration-300 shadow-lg`}>
                    <div className="h-full w-full rounded-2xl bg-white dark:bg-[#0a0a0a] flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-slate-700 dark:text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white transform group-hover:translate-z-[20px] transition-transform duration-300">{feature.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm transform group-hover:translate-z-[10px] transition-transform duration-300">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comprehensive A-Z Modules Section */}
        <section id="modules" className="py-16 md:py-24 bg-slate-50 dark:bg-[#030712] relative overflow-hidden border-t border-slate-200 dark:border-white/5">
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
        <section id="integrations" className="py-16 md:py-24 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#030712] relative overflow-hidden">
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center perspective-[1500px]">
              {[
                { value: "500+", label: "Schools Hosted", color: "from-blue-400 to-indigo-600" },
                { value: "2M+", label: "Students Managed", color: "from-emerald-400 to-teal-600" },
                { value: "99.9%", label: "Uptime SLA", color: "from-purple-400 to-pink-600" },
                { value: "24/7", label: "Expert Support", color: "from-amber-400 to-orange-600" },
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  whileHover={{ scale: 1.1, rotateY: 10, translateZ: 50 }}
                  transition={{ duration: 0.8, delay: i*0.1, type: "spring" }}
                  className="space-y-3 p-6 rounded-3xl bg-white/40 dark:bg-[#111]/40 backdrop-blur-md border border-slate-200/50 dark:border-white/5 shadow-xl hover:shadow-2xl transition-all"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <h4 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b ${stat.color} drop-shadow-sm transform translate-z-[20px]`}>{stat.value}</h4>
                  <p className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest transform translate-z-[10px]">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 md:py-32 bg-white dark:bg-black relative overflow-hidden">
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
              
              <div className="grid md:grid-cols-3 gap-12 md:gap-8 perspective-[1500px]">
                {[
                  { step: "01", icon: Database, title: "Import Data", desc: "Upload your existing student and staff spreadsheets. Our AI automatically maps and cleans your legacy data.", color: "text-blue-500", bg: "bg-blue-500/10", shadow: "shadow-blue-500/30" },
                  { step: "02", icon: LayoutDashboard, title: "Configure Rules", desc: "Set up your fee structures, grading systems, and access roles exactly how your institution operates.", color: "text-[var(--brand-primary)]", bg: "bg-[var(--brand-primary)]/10", shadow: "shadow-[var(--brand-primary)]/30" },
                  { step: "03", icon: Zap, title: "Go Live", desc: "Invite your staff and parents. Watch as your administrative overhead drops and engagement skyrockets.", color: "text-amber-500", bg: "bg-amber-500/10", shadow: "shadow-amber-500/30" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 50, rotateX: -20 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5, zIndex: 10 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.6, type: "spring" }}
                    className="relative flex flex-col items-center text-center p-8 rounded-[2rem] bg-slate-50/50 dark:bg-white/[0.02] border border-slate-200/50 dark:border-white/5 backdrop-blur-sm hover:bg-white dark:hover:bg-[#111] transition-all duration-500 group"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className={`w-24 h-24 rounded-[1.5rem] flex items-center justify-center border border-white/20 dark:border-white/10 bg-white dark:bg-[#0c0c14] shadow-2xl ${item.shadow} relative z-10 mb-8 transform group-hover:translate-z-[40px] group-hover:-translate-y-4 transition-transform duration-500`}>
                      <div className={`absolute inset-0 rounded-[1.5rem] ${item.bg} opacity-20`}></div>
                      <item.icon className={`h-10 w-10 ${item.color} relative z-10`} />
                      <div className="absolute -top-4 -right-4 w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] text-white text-sm font-black flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform">
                        {item.step}
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transform group-hover:translate-z-[20px] transition-transform duration-500">{item.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-base transform group-hover:translate-z-[10px] transition-transform duration-500">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-16 md:py-24 bg-white dark:bg-[#0a0a0a] relative">
          <div className="absolute left-0 top-0 w-1/4 h-full bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent pointer-events-none z-10 hidden md:block"></div>
          <div className="absolute right-0 top-0 w-1/4 h-full bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent pointer-events-none z-10 hidden md:block"></div>
          <div className="container px-4 md:px-6 mx-auto relative">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-[var(--brand-secondary)] font-semibold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
              <h3 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Loved by educators worldwide</h3>
              <p className="text-slate-500 dark:text-slate-400 text-lg">Don't just take our word for it. Here is what leading principals and administrators have to say about EduNest.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto perspective-[2000px]">
              {[
                { quote: "EduNest has completely transformed how our school operates. The automated fee management alone saved us countless hours every month.", author: "Sarah Jenkins", role: "Principal, Lincoln High", avatar: "https://i.pravatar.cc/150?img=1" },
                { quote: "The parent portal is a game-changer. Our parent engagement has skyrocketed since we implemented EduNest's real-time grading and attendance tracking.", author: "David Chen", role: "Administrator, Oakridge Academy", avatar: "https://i.pravatar.cc/150?img=11" },
                { quote: "Migrating to EduNest was seamless. Their support team was phenomenal, and the interface is so intuitive that our staff required almost no training.", author: "Emily Rodriguez", role: "Director, Summit Prep", avatar: "https://i.pravatar.cc/150?img=5" },
              ].map((testimonial, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50, rotateX: 10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  whileHover={{ rotateY: i === 0 ? 5 : i === 2 ? -5 : 0, scale: 1.05, translateZ: 30 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6, type: "spring" }}
                  className="bg-white/60 dark:bg-[#111]/80 backdrop-blur-xl border border-slate-200/60 dark:border-white/10 p-10 rounded-[2.5rem] relative shadow-xl hover:shadow-2xl transition-all group"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Quote className="h-16 w-16 text-slate-200 dark:text-white/5 absolute top-8 right-8 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />
                  <div className="flex gap-1 mb-6 transform group-hover:translate-z-[10px]">
                    {[1,2,3,4,5].map(star => <Star key={star} className="h-5 w-5 fill-[#facc15] text-[#facc15]" />)}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-10 italic relative z-10 text-lg leading-relaxed transform group-hover:translate-z-[20px] transition-transform duration-500">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4 transform group-hover:translate-z-[30px] transition-transform duration-500">
                    <img src={testimonial.avatar} alt={testimonial.author} className="h-14 w-14 rounded-full border-2 border-white dark:border-white/10 shadow-md" />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-lg">{testimonial.author}</h4>
                      <p className="text-sm font-medium text-[var(--brand-primary)]">{testimonial.role}</p>
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

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto items-center">
              {/* Starter Plan */}
              <div className="bg-slate-100/50 dark:bg-[#111827]/80 border border-slate-200/60 dark:border-white/10 rounded-[2.5rem] p-8 flex flex-col relative overflow-hidden backdrop-blur-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
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
                <Button onClick={() => window.location.href='/dashboard'} variant="outline" className="w-full rounded-full border-slate-300 dark:border-white/20 hover:bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white bg-transparent">Go to Dashboard</Button>
              </div>

              {/* Professional Plan */}
              <div className="bg-slate-900 dark:bg-[#0b1120] border-2 border-[var(--brand-primary)] rounded-[2.5rem] p-8 md:p-10 flex flex-col relative overflow-hidden shadow-2xl shadow-[var(--brand-primary)]/40 transform md:-translate-y-6 hover:shadow-[var(--brand-primary)]/60 hover:-translate-y-8 transition-all duration-300 z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-primary)]/10 to-transparent pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[var(--brand-primary)] via-indigo-400 to-[var(--brand-secondary)]"></div>
                <div className="absolute top-5 right-5 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">MOST POPULAR</div>
                
                <div className="mb-8 mt-2">
                  <h4 className="text-xl font-medium text-slate-900 dark:text-white mb-2">Professional</h4>
                  <p className="text-slate-400 dark:text-slate-400 text-sm mb-6">Ideal for growing K-12 schools.</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-extrabold text-white">$499</span>
                    <span className="text-slate-400 font-medium">/mo</span>
                  </div>
                </div>
                <div className="space-y-4 mb-8 flex-1">
                  {['Up to 2,000 Students', 'Biometric Attendance', 'Advanced Analytics', 'Parent Portal App', 'SMS Notifications', 'Priority Support'].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-[var(--brand-primary)] shrink-0 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" /> {feature}
                    </div>
                  ))}
                </div>
                <Button className="w-full h-14 rounded-2xl bg-gradient-to-r from-[var(--brand-primary)] to-indigo-600 hover:opacity-100 text-white font-bold text-base border-0 shadow-xl shadow-[var(--brand-primary)]/30 hover:scale-[1.03] transition-all relative overflow-hidden group">
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-[-20deg]"></div>
                  <span className="relative z-10">Start 14-Day Trial</span>
                </Button>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-slate-100/50 dark:bg-[#111827]/80 border border-slate-200/60 dark:border-white/10 rounded-[2.5rem] p-8 flex flex-col relative overflow-hidden backdrop-blur-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
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
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white">Frequently Asked Questions</h2>
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

        
      
    </div>
  );
}
