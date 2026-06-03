import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, GraduationCap, Users, Target, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function AboutUs() {
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
      <section className="py-24 relative overflow-hidden bg-white dark:bg-black border-b border-slate-200 dark:border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--brand-primary)]/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container px-4 mx-auto text-center relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white">Empowering the next generation of educators.</h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
            EduNest was founded on a simple belief: administrative burdens shouldn't get in the way of great teaching. We build software that gets out of your way.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50 dark:bg-[#030712]">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Community First", desc: "We build for the students, parents, teachers, and admins that make up the school ecosystem." },
              { icon: Target, title: "Relentless Simplicity", desc: "Complex problems demand simple, elegant solutions. We strip away the unnecessary." },
              { icon: Heart, title: "Built with Empathy", desc: "We listen closely to the struggles of educators and build tools that genuinely help." }
            ].map((value, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="p-8 rounded-3xl bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/5 text-center shadow-sm">
                <div className="h-16 w-16 mx-auto rounded-2xl bg-[var(--brand-primary)]/10 flex items-center justify-center mb-6 text-[var(--brand-primary)]">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">{value.title}</h3>
                <p className="text-slate-500 dark:text-slate-400">{value.desc}</p>
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
