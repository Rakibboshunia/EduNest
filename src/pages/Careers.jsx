import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, GraduationCap, ArrowRight, Briefcase, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Careers() {
  const jobs = [
    { title: "Senior Frontend Engineer", dept: "Engineering", location: "Remote (US/Canada)", type: "Full-time" },
    { title: "Backend Developer (Node.js)", dept: "Engineering", location: "San Francisco, CA", type: "Full-time" },
    { title: "Product Designer", dept: "Design", location: "Remote", type: "Full-time" },
    { title: "Customer Success Manager", dept: "Support", location: "London, UK", type: "Full-time" },
    { title: "Enterprise Sales Executive", dept: "Sales", location: "New York, NY", type: "Full-time" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-50 selection:bg-[var(--brand-primary)]/50">
      {/* Header */}
      <header className="px-6 lg:px-8 h-16 md:h-20 flex items-center border-b border-slate-200 dark:border-white/10 bg-white/70 dark:bg-[#030712]/60 backdrop-blur-xl sticky top-0 z-50">
        <Link to="/" className="flex items-center justify-center gap-2 group">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] flex items-center justify-center shadow-lg">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">EduNest</span>
        </Link>
        <div className="ml-auto">
          <Button variant="ghost" asChild className="hover:bg-slate-200 dark:hover:bg-white/10">
            <Link to="/"><ChevronLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 bg-white dark:bg-black border-b border-slate-200 dark:border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-secondary)]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container px-4 mx-auto text-center max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white">Build the future of education with us.</h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
            Join a passionate team of creators, engineers, and educators working to eliminate administrative burden in schools worldwide.
          </p>
          <Button size="lg" className="rounded-full px-8 bg-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/90 text-white" asChild>
            <a href="#open-roles">View Open Roles <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
      </section>

      {/* Jobs List */}
      <section id="open-roles" className="py-24">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="mb-12 flex justify-between items-end border-b border-slate-200 dark:border-white/10 pb-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Open Roles</h2>
              <p className="text-slate-500 dark:text-slate-400 mt-2">Come do the best work of your life.</p>
            </div>
            <div className="text-sm font-medium bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-white px-3 py-1 rounded-full">
              {jobs.length} Positions
            </div>
          </div>
          
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/5 rounded-2xl hover:border-[var(--brand-primary)]/50 hover:shadow-lg transition-all cursor-pointer"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[var(--brand-primary)] transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" /> {job.dept}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {job.location}</span>
                    <span className="bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded text-xs">{job.type}</span>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0">
                  <Button variant="ghost" className="rounded-full group-hover:bg-[var(--brand-primary)]/10 group-hover:text-[var(--brand-primary)]">Apply Now</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="border-t border-slate-200 dark:border-white/10 py-8 text-center text-slate-500 dark:text-slate-400 text-sm">
        <p>© 2026 EduNest Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
