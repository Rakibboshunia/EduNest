
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Blog() {
  const posts = [
    { title: "Announcing EduNest 2.0: The Future of School Management", category: "Product", date: "June 1, 2026", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop" },
    { title: "5 Ways to Improve Parent-Teacher Communication", category: "Best Practices", date: "May 24, 2026", img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop" },
    { title: "How Lincoln High Saved 200 Hours a Month on Fee Collection", category: "Case Study", date: "May 15, 2026", img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop" },
    { title: "Data Security in Education: What You Need to Know", category: "Security", date: "May 2, 2026", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" },
    { title: "The Rise of Biometric Attendance in K-12 Schools", category: "Trends", date: "April 18, 2026", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop" },
    { title: "EduNest Raises $15M Series A to Expand Globally", category: "Company", date: "April 5, 2026", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <div className="w-full">
{/* Hero */}
      <section className="pt-20 pb-12 px-4 container mx-auto">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white">EduNest Blog</h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">Insights, updates, and stories from the intersection of education and technology.</p>
        </div>
        
        {/* Featured Post */}
        <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px] flex items-end group cursor-pointer mb-16 shadow-2xl">
          <img src={posts[0].img} alt="Featured" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          <div className="relative z-10 p-8 md:p-12 w-full md:w-2/3 text-white">
            <span className="bg-[var(--brand-primary)] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">{posts[0].category}</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{posts[0].title}</h2>
            <div className="flex items-center gap-4 text-white/70 text-sm">
              <span>{posts[0].date}</span>
              <span className="w-1 h-1 rounded-full bg-white/50"></span>
              <span>5 min read</span>
            </div>
          </div>
        </div>
        
        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="rounded-2xl overflow-hidden mb-4 h-60 relative shadow-md">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-slate-900 dark:text-white">
                  {post.category}
                </div>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{post.date}</p>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[var(--brand-primary)] transition-colors leading-snug">{post.title}</h3>
              <div className="mt-auto flex items-center text-[var(--brand-primary)] text-sm font-semibold group-hover:underline">
                Read Article <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
</div>
  );
}
