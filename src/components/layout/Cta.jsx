import { Link } from "react-router-dom";
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
    </>
  );
}