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
  Cloud,
  Lock,
  Globe
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

      <main className="flex-1 pt-16 md:pt-24">
        {/* Hero Section */}
        <section className="w-full min-h-[90vh] pt-24 pb-14 md:pt-32 md:pb-24 lg:py-32 relative flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#030712]">
          {/* Animated Background Gradients */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-[var(--brand-primary)]/30 to-purple-500/30 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse"></div>
            <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tl from-[var(--brand-secondary)]/30 to-blue-500/30 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-emerald-500/20 to-teal-400/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse" style={{ animationDelay: '4s' }}></div>
          </div>
          
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 dark:opacity-30"></div>
          
          {/* Floating UI Elements (Desktop Only) */}
          <motion.div 
            initial={{ opacity: 0, x: -100, y: 20 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.8, duration: 1, type: "spring" }}
            className="absolute left-4 lg:left-12 top-1/3 hidden lg:flex flex-col gap-3 p-4 bg-white/60 dark:bg-black/40 border border-white/40 dark:border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl shadow-[var(--brand-primary)]/10 z-0 hover:scale-105 transition-transform"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Students</p>
                <p className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">4,921</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1.5 rounded-lg w-fit border border-emerald-100 dark:border-emerald-500/20">
              <ArrowRight className="h-4 w-4 -rotate-45" /> +24% growth
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100, y: -20 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 1, duration: 1, type: "spring" }}
            className="absolute right-4 lg:right-12 bottom-1/3 hidden lg:flex flex-col gap-4 p-5 bg-white/60 dark:bg-black/40 border border-white/40 dark:border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl shadow-[var(--brand-secondary)]/10 z-0 w-72 hover:scale-105 transition-transform"
          >
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-600 dark:text-amber-400"><Zap className="h-4 w-4" /></span>
                System Performance
              </p>
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs font-medium mb-1">
                  <span className="text-slate-600 dark:text-slate-300">Server Load</span>
                  <span className="text-emerald-600 dark:text-emerald-400">Normal</span>
                </div>
                <div className="h-2 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 w-[35%] rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-medium mb-1">
                  <span className="text-slate-600 dark:text-slate-300">Uptime</span>
                  <span className="text-[var(--brand-primary)]">99.99%</span>
                </div>
                <div className="h-2 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] w-[100%] rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="container px-4 md:px-6 flex flex-col items-center text-center z-10 relative">
            <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-10 max-w-5xl relative">
              
              {/* Top Badge */}
              <motion.div variants={fadeIn} className="mx-auto inline-flex items-center gap-3 rounded-full border border-[var(--brand-primary)]/20 p-1.5 pr-5 bg-white/50 dark:bg-black/30 backdrop-blur-xl mb-4 shadow-[0_8px_16px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_16px_rgba(0,0,0,0.4)] transition-all hover:scale-105 cursor-default">
                <span className="flex items-center justify-center px-3 py-1 rounded-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] text-white text-xs font-bold uppercase tracking-wider">New</span>
                <span className="text-slate-800 dark:text-white/90 text-sm font-semibold tracking-wide flex items-center gap-2">
                  EduNest OS 2.0 is now available <ArrowRight className="h-4 w-4 text-[var(--brand-primary)]" />
                </span>
              </motion.div>
              
              {/* Main Headline */}
              <motion.div variants={fadeIn} className="space-y-4">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-black tracking-tight leading-[1.05] drop-shadow-sm">
                  The Modern OS for <br className="hidden md:block" />
                  <span className="relative inline-block pb-2">
                    <span className="absolute inset-0 bg-gradient-to-r from-[var(--brand-primary)] via-purple-500 to-[var(--brand-secondary)] blur-xl opacity-30 animate-pulse"></span>
                    <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-[var(--brand-primary)] via-purple-500 to-[var(--brand-secondary)] animate-gradient-x">
                      Educational Excellence
                    </span>
                  </span>
                </h1>
              </motion.div>
              
              {/* Sub Headline */}
              <motion.p variants={fadeIn} className="mx-auto max-w-[800px] text-slate-600 dark:text-slate-300 md:text-xl lg:text-2xl leading-relaxed font-medium">
                Streamline operations, boost student engagement, and gain powerful insights with a <span className="text-slate-900 dark:text-white font-bold">premium platform</span> designed exclusively for forward-thinking institutions.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-6">
                <Button size="lg" className="group rounded-full h-16 px-10 text-lg font-bold bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] text-white hover:opacity-90 shadow-xl shadow-[var(--brand-primary)]/30 transition-all hover:scale-105 border border-white/20" asChild>
                  <Link to="/dashboard">
                    Get Started Free 
                    <div className="ml-3 h-8 w-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-16 px-10 text-lg font-bold border-2 border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 text-slate-900 dark:text-white backdrop-blur-xl transition-all hover:scale-105 hover:border-slate-300 dark:hover:border-white/20 shadow-lg">
                  <Video className="mr-3 h-5 w-5 text-slate-500 dark:text-slate-400" />
                  Watch Demo
                </Button>
              </motion.div>
              
              {/* Trust Indicators */}
              <motion.div variants={fadeIn} className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
                <div className="flex -space-x-4">
                  {[
                    "https://i.pravatar.cc/100?img=1",
                    "https://i.pravatar.cc/100?img=2",
                    "https://i.pravatar.cc/100?img=3",
                    "https://i.pravatar.cc/100?img=4",
                    "https://i.pravatar.cc/100?img=5"
                  ].map((img, i) => (
                    <img key={i} src={img} alt="User avatar" className="w-10 h-10 rounded-full border-2 border-white dark:border-[#030712] shadow-sm" />
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-[#030712] bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300 shadow-sm z-10">
                    +2k
                  </div>
                </div>
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    <span className="text-slate-900 dark:text-white font-bold">4.9/5</span> from over 2,000+ educators
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Bottom Gradient Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 dark:from-[#030712] to-transparent z-10 pointer-events-none"></div>
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
        <section id="dashboard" className="py-12 md:py-16 bg-slate-50 dark:bg-[#030712] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[600px] bg-gradient-to-r from-[var(--brand-primary)]/20 via-purple-500/20 to-[var(--brand-secondary)]/20 blur-[120px] rounded-full -z-10 pointer-events-none animate-pulse"></div>
          
          <div className="container px-4 mx-auto relative z-10">
            <div className="text-center mb-16 md:mb-24">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] text-sm font-semibold tracking-wide uppercase mb-4 border border-[var(--brand-primary)]/20">
                <LayoutDashboard className="h-4 w-4" /> Dashboard Overview
              </motion.div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6">A bird's eye view of your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-purple-500">entire school</span></h3>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto max-w-6xl rounded-2xl md:rounded-[2rem] border border-slate-200/50 dark:border-white/10 bg-white/40 dark:bg-white/[0.02] backdrop-blur-2xl p-2 md:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden group hover:border-[var(--brand-primary)]/30 transition-colors duration-500"
            >
              {/* Fake Browser Window */}
              <div className="rounded-xl overflow-hidden border border-slate-200/80 dark:border-white/10 bg-slate-50 dark:bg-[#0a0a0a] shadow-inner relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 dark:to-transparent pointer-events-none"></div>
                <div className="h-14 bg-white/80 dark:bg-[#111]/80 backdrop-blur-md flex items-center px-4 gap-4 border-b border-slate-200/80 dark:border-white/5 relative z-10">
                  <div className="flex gap-2">
                    <div className="h-3.5 w-3.5 rounded-full bg-[#ff5f56] border border-[#e0443e]"></div>
                    <div className="h-3.5 w-3.5 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
                    <div className="h-3.5 w-3.5 rounded-full bg-[#27c93f] border border-[#1aab29]"></div>
                  </div>
                  <div className="mx-auto h-8 w-1/2 md:w-1/3 bg-slate-100/80 dark:bg-black/50 border border-slate-200 dark:border-white/5 rounded-md flex items-center justify-center text-xs text-slate-500 font-medium shadow-sm">
                    <Lock className="h-3 w-3 mr-2 text-emerald-500" /> app.edunest.com/dashboard
                  </div>
                </div>
                
                {/* Mockup Body */}
                <div className="p-4 md:p-8 flex flex-col md:flex-row gap-6 min-h-[400px] relative z-10">
                  {/* Sidebar Mock */}
                  <div className="hidden md:flex flex-col w-56 space-y-4 border-r border-slate-200/80 dark:border-white/5 pr-6">
                    <div className="h-8 w-32 bg-slate-200 dark:bg-white/10 rounded-lg mb-8"></div>
                    {[true, false, false, false, false, false].map((active, i) => (
                      <div key={i} className={`h-11 rounded-xl ${active ? 'bg-gradient-to-r from-[var(--brand-primary)]/10 to-transparent border-l-2 border-[var(--brand-primary)]' : 'bg-transparent hover:bg-slate-100 dark:hover:bg-white/5'} flex items-center px-3 gap-4 transition-colors`}>
                        <div className={`h-5 w-5 rounded-md ${active ? 'bg-[var(--brand-primary)]/80 shadow-[0_0_10px_var(--brand-primary)]' : 'bg-slate-300 dark:bg-white/10'}`}></div>
                        <div className={`h-2.5 ${active ? 'w-24 bg-[var(--brand-primary)]/80' : 'w-20 bg-slate-300 dark:bg-white/10'} rounded-full`}></div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Main Content Mock */}
                  <div className="flex-1 space-y-6">
                    <div className="flex justify-between items-center">
                      <div className="h-8 w-48 bg-slate-200 dark:bg-white/10 rounded-lg"></div>
                      <div className="h-10 w-32 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] rounded-full opacity-90 shadow-lg shadow-[var(--brand-primary)]/20"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { color: "from-blue-500/20 to-transparent", border: "border-blue-500/20" },
                        { color: "from-emerald-500/20 to-transparent", border: "border-emerald-500/20" },
                        { color: "from-purple-500/20 to-transparent", border: "border-purple-500/20" },
                        { color: "from-amber-500/20 to-transparent", border: "border-amber-500/20" }
                      ].map((stat, i) => (
                         <div key={i} className={`h-32 bg-white/80 dark:bg-[#151515]/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-white/5 hover:${stat.border} p-5 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300 delay-${i*100}`}>
                          <div className={`absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br ${stat.color} blur-2xl rounded-full`}></div>
                          <div className="h-10 w-10 bg-slate-100 dark:bg-white/5 rounded-xl mb-4 relative z-10 flex items-center justify-center">
                            <div className="h-5 w-5 bg-slate-300 dark:bg-white/20 rounded-md"></div>
                          </div>
                          <div className="space-y-2 relative z-10">
                            <div className="h-3 w-16 bg-slate-200 dark:bg-white/10 rounded-full"></div>
                            <div className="h-6 w-24 bg-slate-800 dark:bg-white/80 rounded-lg"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1 h-72 bg-white/80 dark:bg-[#151515]/80 backdrop-blur-sm rounded-2xl border border-slate-200/80 dark:border-white/5 p-6 flex flex-col relative overflow-hidden">
                        <div className="flex justify-between items-center mb-8">
                          <div className="h-5 w-32 bg-slate-200 dark:bg-white/10 rounded-full"></div>
                          <div className="flex gap-2">
                            <div className="h-6 w-16 bg-slate-100 dark:bg-white/5 rounded-md"></div>
                            <div className="h-6 w-16 bg-slate-100 dark:bg-white/5 rounded-md"></div>
                          </div>
                        </div>
                        <div className="flex-1 flex items-end gap-3 relative z-10 border-b border-slate-100 dark:border-white/5 pb-2">
                           {[40, 70, 45, 90, 65, 80, 50, 85, 60, 75].map((h, i) => (
                             <div key={i} className="group/bar flex-1 relative flex justify-center">
                               <div className="w-full bg-gradient-to-t from-[var(--brand-primary)]/40 to-[var(--brand-primary)]/80 rounded-t-md hover:from-[var(--brand-primary)] hover:to-purple-500 transition-all cursor-pointer" style={{ height: `${h}%` }}></div>
                             </div>
                           ))}
                        </div>
                      </div>
                      <div className="w-full md:w-1/3 h-72 bg-gradient-to-br from-[var(--brand-primary)] via-purple-600 to-[var(--brand-secondary)] rounded-2xl p-6 flex flex-col justify-between shadow-xl shadow-[var(--brand-primary)]/30 relative overflow-hidden">
                         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
                         <div className="relative z-10 flex justify-between items-center">
                           <div className="h-10 w-10 bg-white/20 backdrop-blur-md rounded-xl"></div>
                           <div className="h-6 w-20 bg-white/20 backdrop-blur-md rounded-full"></div>
                         </div>
                         <div className="space-y-4 relative z-10">
                           <div className="h-10 w-3/4 bg-white rounded-lg opacity-90"></div>
                           <div className="space-y-2">
                             <div className="h-3 w-full bg-white/30 rounded-full"></div>
                             <div className="h-3 w-2/3 bg-white/30 rounded-full"></div>
                           </div>
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
        <section id="features" className="w-full py-12 md:py-16 bg-white dark:bg-[#050505] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[var(--brand-secondary)]/10 to-transparent blur-[120px] rounded-full -z-10"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[var(--brand-primary)]/10 to-transparent blur-[120px] rounded-full -z-10"></div>
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand-secondary)]/10 text-[var(--brand-secondary)] text-sm font-semibold tracking-wide uppercase mb-4 border border-[var(--brand-secondary)]/20">
                <Star className="h-4 w-4" /> Core Features
              </motion.div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 text-slate-900 dark:text-white">Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600 dark:from-slate-300 dark:to-slate-500">scale your institution</span></h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium">Powerful tools wrapped in a beautiful, intuitive interface designed for modern educators and administrators.</p>
            </div>
            
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Users, title: "Student Management", desc: "Centralized database for student records, enrollment history, and academic progress.", color: "from-blue-500 to-cyan-400", shadow: "shadow-blue-500/20" },
                { icon: Calendar, title: "Smart Attendance", desc: "Automated tracking with biometric integration and instant parent notifications.", color: "from-emerald-500 to-teal-400", shadow: "shadow-emerald-500/20" },
                { icon: BarChart, title: "Advanced Analytics", desc: "Customizable dashboards showing real-time metrics on performance and revenue.", color: "from-purple-500 to-pink-400", shadow: "shadow-purple-500/20" },
                { icon: Zap, title: "Automated Workflows", desc: "Save hundreds of hours by automating fee reminders, report cards, and notices.", color: "from-amber-500 to-orange-400", shadow: "shadow-amber-500/20" },
                { icon: ShieldCheck, title: "Bank-Grade Security", desc: "Role-based access control with end-to-end encryption for all sensitive data.", color: "from-rose-500 to-red-400", shadow: "shadow-rose-500/20" },
                { icon: LayoutDashboard, title: "Parent Portal", desc: "Dedicated mobile-friendly portal for parents to track fees, grades, and events.", color: "from-indigo-500 to-blue-400", shadow: "shadow-indigo-500/20" },
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.6, type: "spring" }}
                  className="group relative p-8 rounded-[2rem] bg-white dark:bg-[#0a0a0a] border border-slate-200/80 dark:border-white/5 hover:border-transparent dark:hover:border-transparent transition-all duration-500 hover:-translate-y-2 z-10"
                >
                  <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl ${feature.shadow}`}></div>
                  <div className="absolute inset-[1px] rounded-[2rem] bg-white dark:bg-[#0a0a0a] -z-10"></div>
                  
                  <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.color} p-[1px] mb-8 transform group-hover:scale-110 transition-transform duration-500 shadow-lg ${feature.shadow}`}>
                    <div className="h-full w-full rounded-2xl bg-white dark:bg-[#111] flex items-center justify-center">
                      <feature.icon className="h-8 w-8 text-slate-800 dark:text-white" />
                    </div>
                  </div>
                  <h4 className={`text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${feature.color} transition-all duration-300`}>{feature.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comprehensive A-Z Modules Section */}
        <section id="modules" className="py-12 md:py-16 bg-slate-50 dark:bg-[#030712] relative overflow-hidden border-t border-slate-200 dark:border-white/5">
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
                      <div key={j} className="group relative p-[1px] rounded-[2rem] overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-[var(--brand-primary)]/20 transition-all duration-500 hover:-translate-y-2">
                        {/* Animated Gradient Border Layer */}
                        <div className="absolute inset-0 bg-slate-200/80 dark:bg-white/10 group-hover:bg-gradient-to-br group-hover:from-[var(--brand-primary)] group-hover:via-purple-500 group-hover:to-[var(--brand-secondary)] transition-all duration-700 opacity-70 group-hover:opacity-100"></div>
                        
                        {/* Card Content Layer */}
                        <div className="relative h-full p-6 sm:p-7 bg-white dark:bg-[#0a0a0a] rounded-[calc(2rem-1px)] transition-all duration-500 group-hover:bg-slate-50/50 dark:group-hover:bg-[#111]/80 backdrop-blur-2xl overflow-hidden flex flex-col justify-center">
                          {/* Hover Background Pattern */}
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[var(--brand-primary)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                          
                          <div className="relative z-20 flex items-start gap-5">
                            <div className="mt-0.5 flex-shrink-0 h-12 w-12 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[var(--brand-primary)] group-hover:to-[var(--brand-secondary)] group-hover:border-transparent transition-all duration-500 shadow-sm group-hover:shadow-[0_0_20px_rgba(var(--brand-primary),0.5)]">
                              <div className="h-3 w-3 rounded-full bg-slate-400 dark:bg-slate-500 group-hover:bg-white group-hover:shadow-[0_0_10px_white] transition-all duration-500"></div>
                            </div>
                            <div>
                              <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-1.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--brand-primary)] group-hover:to-purple-500 transition-all duration-500">{feature.name}</h4>
                              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-500">{feature.desc}</p>
                            </div>
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
        <section id="integrations" className="py-12 md:py-16 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#030712] relative overflow-hidden">
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
        <section id="testimonials" className="w-full py-12 md:py-16 bg-white dark:bg-[#0a0a0a] relative">
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
        <section id="pricing" className="w-full py-12 md:py-16 bg-slate-50 dark:bg-[#030712] relative overflow-hidden">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-to-b from-[var(--brand-primary)]/10 to-[var(--brand-secondary)]/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] text-sm font-semibold tracking-wide uppercase mb-4 border border-[var(--brand-primary)]/20">
                <CreditCard className="h-4 w-4" /> Simple Pricing
              </motion.div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">Pricing that <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)]">scales with you</span></h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium">No hidden fees. No surprise charges. Choose the plan that perfectly fits your institution's size.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto items-center">
              {/* Starter Plan */}
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/80 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-10 flex flex-col relative overflow-hidden hover:border-[var(--brand-primary)]/30 transition-colors">
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Starter</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 h-10">Perfect for small preschools and academies.</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-slate-900 dark:text-white">$199</span>
                    <span className="text-slate-500 font-medium">/mo</span>
                  </div>
                </div>
                <div className="space-y-5 mb-10 flex-1">
                  {['Up to 500 Students', 'Basic Attendance', 'Standard Reporting', 'Email Support'].map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 text-sm font-medium text-slate-700 dark:text-slate-300">
                      <div className="h-6 w-6 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-[var(--brand-secondary)]" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full rounded-full h-14 border-2 border-slate-200 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-900 dark:text-white bg-transparent font-bold text-base">Get Started</Button>
              </motion.div>

              {/* Professional Plan */}
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#0f172a] border-2 border-[var(--brand-primary)] rounded-[2.5rem] p-10 flex flex-col relative overflow-hidden shadow-2xl shadow-[var(--brand-primary)]/40 transform md:-translate-y-8 z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/10 to-[var(--brand-secondary)]/10"></div>
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--brand-primary)] via-purple-500 to-[var(--brand-secondary)]"></div>
                <div className="absolute top-6 right-6 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">Most Popular</div>
                
                <div className="mb-8 mt-2 relative z-10">
                  <h4 className="text-2xl font-bold text-white mb-2">Professional</h4>
                  <p className="text-slate-400 text-sm mb-6 h-10">Ideal for growing K-12 schools.</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-white">$499</span>
                    <span className="text-slate-400 font-medium">/mo</span>
                  </div>
                </div>
                <div className="space-y-5 mb-10 flex-1 relative z-10">
                  {['Up to 2,000 Students', 'Biometric Attendance', 'Advanced Analytics', 'Parent Portal App', 'SMS Notifications', 'Priority Support'].map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 text-sm font-medium text-slate-200">
                      <div className="h-6 w-6 rounded-full bg-[var(--brand-primary)]/20 flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-[var(--brand-primary)]" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button className="w-full rounded-full h-14 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] hover:opacity-90 text-white font-bold text-base border-0 shadow-lg shadow-[var(--brand-primary)]/30 relative z-10 hover:scale-105 transition-transform">Start 14-Day Trial</Button>
              </motion.div>

              {/* Enterprise Plan */}
              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/80 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-10 flex flex-col relative overflow-hidden hover:border-[var(--brand-secondary)]/30 transition-colors">
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Enterprise</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 h-10">For universities and multi-campus schools.</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-slate-900 dark:text-white">Custom</span>
                  </div>
                </div>
                <div className="space-y-5 mb-10 flex-1">
                  {['Unlimited Students', 'Multi-Branch Support', 'Custom Integrations', 'Dedicated Account Manager', 'White-labeling Options', 'On-premise deployment'].map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 text-sm font-medium text-slate-700 dark:text-slate-300">
                      <div className="h-6 w-6 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-[var(--brand-secondary)]" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full rounded-full h-14 border-2 border-slate-200 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-900 dark:text-white bg-transparent font-bold text-base">Contact Sales</Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-16 bg-white dark:bg-[#0a0a0a]">
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

      </main>

    </div>
  );
}
