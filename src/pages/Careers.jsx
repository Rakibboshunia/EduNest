import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, MapPin } from 'lucide-react';
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
    <div className="w-full">
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
</div>
  );
}
