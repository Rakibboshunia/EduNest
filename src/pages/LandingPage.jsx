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
  ChevronDown
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <div className="flex flex-col min-h-screen bg-[#030712] text-slate-50 selection:bg-[#0f3b73]/50 overflow-x-hidden">
      {/* Navigation */}
      <header className="px-6 lg:px-14 h-20 flex items-center border-b border-white/10 backdrop-blur-md fixed w-full z-50 bg-[#030712]/80">
        <Link to="/" className="flex items-center justify-center gap-2 group">
          <img src="/logo.png" alt="EduNest Logo" className="h-10 w-auto bg-white p-1 rounded-lg" onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }} />
          <div className="hidden h-10 w-10 rounded-xl bg-gradient-to-br from-[#0f3b73] to-[#36833b] items-center justify-center shadow-lg group-hover:shadow-[#0f3b73]/40 transition-all duration-300">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <span className="font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            EduNest
          </span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-8 items-center">
          <a href="#features" onClick={(e) => { e.preventDefault(); document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Features</a>
          <a href="#testimonials" onClick={(e) => { e.preventDefault(); document.querySelector('#testimonials')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Testimonials</a>
          <a href="#pricing" onClick={(e) => { e.preventDefault(); document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Pricing</a>
          <a href="#faq" onClick={(e) => { e.preventDefault(); document.querySelector('#faq')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">FAQ</a>
        </nav>
        <div className="ml-auto md:ml-8 flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors hidden sm:block">Log in</Link>
          <Button asChild className="rounded-full px-6 bg-white text-black hover:bg-slate-200">
            <Link to="/dashboard">Get Started</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="w-full py-24 md:py-32 lg:py-48 relative flex items-center justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0f3b73]/20 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#36833b]/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
          
          <div className="container px-4 md:px-6 flex flex-col items-center text-center z-10">
            <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 max-w-5xl">
              <motion.div variants={fadeIn} className="inline-flex items-center rounded-full border border-white/10 px-4 py-1.5 text-sm font-medium bg-white/5 backdrop-blur-md mb-4 shadow-2xl">
                <span className="flex h-2 w-2 rounded-full bg-[#36833b] mr-2 animate-pulse"></span>
                <span className="text-slate-300">EduNest v2.0 is now live</span>
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1]">
                The Modern OS for <br className="hidden md:block" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60a5fa] via-[#4ade80] to-[#60a5fa] animate-gradient-x">
                  Educational Excellence
                </span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="mx-auto max-w-[750px] text-slate-400 md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed">
                Streamline operations, boost student engagement, and gain powerful insights with our all-in-one platform designed specifically for forward-thinking institutions.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="rounded-full h-14 px-8 text-base bg-gradient-to-r from-[#0f3b73] to-[#36833b] hover:from-[#1e40af] hover:to-[#2e6e32] text-white shadow-lg shadow-[#0f3b73]/25 border-0" asChild>
                  <Link to="/dashboard">
                    Start for free <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-md">
                  Book a Demo
                </Button>
              </motion.div>
              
              <motion.div variants={fadeIn} className="pt-12 flex items-center justify-center gap-8 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#36833b]" /> No credit card required</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#36833b]" /> 14-day free trial</div>
                <div className="flex items-center gap-2 hidden sm:flex"><CheckCircle2 className="h-4 w-4 text-[#36833b]" /> Cancel anytime</div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, type: "spring" }}
            className="absolute -bottom-32 md:-bottom-48 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-2 shadow-2xl hidden md:block"
          >
            <div className="rounded-xl overflow-hidden border border-white/5 bg-[#0a0a0a]">
              <div className="h-10 bg-[#111] flex items-center px-4 gap-2 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="mx-auto h-6 w-64 bg-white/5 rounded-md flex items-center justify-center text-xs text-slate-500">edunest.app/dashboard</div>
              </div>
              <div className="h-[400px] bg-gradient-to-br from-[#0a0a0a] to-[#111] p-8 flex gap-6 relative overflow-hidden">
                <div className="w-48 space-y-4">
                  <div className="h-8 w-32 bg-white/5 rounded-md"></div>
                  <div className="space-y-2 pt-4">
                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-6 w-full bg-white/5 rounded-md"></div>)}
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <div className="flex gap-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex-1 h-24 bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-between">
                        <div className="h-4 w-20 bg-white/10 rounded-sm"></div>
                        <div className="h-8 w-16 bg-white/20 rounded-md"></div>
                      </div>
                    ))}
                  </div>
                  <div className="h-48 w-full bg-white/5 rounded-xl border border-white/5"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-24 md:py-40 bg-black relative">
          <div className="container px-4 md:px-6 mx-auto relative z-10 pt-20 md:pt-0">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-[#60a5fa] font-semibold tracking-wide uppercase text-sm mb-3">Core Features</h2>
              <h3 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Everything you need to <span className="text-slate-400">scale your institution</span></h3>
              <p className="text-slate-400 text-lg">Powerful tools wrapped in a beautiful, intuitive interface designed for modern educators and administrators.</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Users, title: "Student Management", desc: "Centralized database for student records, enrollment history, and academic progress." },
                { icon: Calendar, title: "Smart Attendance", desc: "Automated tracking with biometric integration and instant parent notifications." },
                { icon: BarChart, title: "Advanced Analytics", desc: "Customizable dashboards showing real-time metrics on performance and revenue." },
                { icon: Zap, title: "Automated Workflows", desc: "Save hundreds of hours by automating fee reminders, report cards, and notices." },
                { icon: ShieldCheck, title: "Bank-Grade Security", desc: "Role-based access control with end-to-end encryption for all sensitive data." },
                { icon: LayoutDashboard, title: "Parent Portal", desc: "Dedicated mobile-friendly portal for parents to track fees, grades, and events." },
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0f3b73]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#60a5fa] group-hover:scale-110 group-hover:text-white transition-all">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-white">{feature.title}</h4>
                  <p className="text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 border-y border-white/10 bg-[#030712] relative overflow-hidden">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#0f3b73]/10 blur-[100px] rounded-full"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
              {[
                { value: "500+", label: "Schools Hosted" },
                { value: "2M+", label: "Students Managed" },
                { value: "99.9%", label: "Uptime SLA" },
                { value: "24/7", label: "Expert Support" },
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">{stat.value}</h4>
                  <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-24 md:py-40 bg-[#0a0a0a] relative">
          <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-[#030712] to-transparent pointer-events-none z-10 hidden md:block"></div>
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#030712] to-transparent pointer-events-none z-10 hidden md:block"></div>
          <div className="container px-4 md:px-6 mx-auto relative">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-[#36833b] font-semibold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
              <h3 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Loved by educators worldwide</h3>
              <p className="text-slate-400 text-lg">Don't just take our word for it. Here is what leading principals and administrators have to say about EduNest.</p>
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
                  className="bg-[#111] border border-white/5 p-8 rounded-3xl relative"
                >
                  <Quote className="h-10 w-10 text-white/5 absolute top-6 right-6" />
                  <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(star => <Star key={star} className="h-4 w-4 fill-[#facc15] text-[#facc15]" />)}
                  </div>
                  <p className="text-slate-300 mb-8 italic relative z-10">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <img src={testimonial.avatar} alt={testimonial.author} className="h-12 w-12 rounded-full border border-white/10" />
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.author}</h4>
                      <p className="text-xs text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-24 md:py-32 bg-[#030712] relative overflow-hidden">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-to-b from-[#0f3b73]/5 to-[#36833b]/5 blur-[120px] rounded-full z-0"></div>
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-[#60a5fa] font-semibold tracking-wide uppercase text-sm mb-3">Simple Pricing</h2>
              <h3 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Pricing that scales with you</h3>
              <p className="text-slate-400 text-lg">No hidden fees. No surprise charges. Choose the plan that perfectly fits your institution's size.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {/* Starter Plan */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col relative overflow-hidden backdrop-blur-sm">
                <div className="mb-8">
                  <h4 className="text-xl font-medium text-white mb-2">Starter</h4>
                  <p className="text-slate-400 text-sm mb-6">Perfect for small preschools and academies.</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">$199</span>
                    <span className="text-slate-500">/mo</span>
                  </div>
                </div>
                <div className="space-y-4 mb-8 flex-1">
                  {['Up to 500 Students', 'Basic Attendance', 'Standard Reporting', 'Email Support'].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-[#36833b]" /> {feature}
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full rounded-full border-white/20 hover:bg-white/10 text-white bg-transparent">Get Started</Button>
              </div>

              {/* Professional Plan */}
              <div className="bg-[#0f172a] border border-[#0f3b73] rounded-3xl p-8 flex flex-col relative overflow-hidden shadow-[0_0_40px_rgba(15,59,115,0.3)] transform md:-translate-y-4">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0f3b73] to-[#36833b]"></div>
                <div className="absolute top-4 right-4 bg-[#0f3b73]/30 text-[#60a5fa] text-xs font-semibold px-3 py-1 rounded-full border border-[#0f3b73]">Most Popular</div>
                
                <div className="mb-8 mt-2">
                  <h4 className="text-xl font-medium text-white mb-2">Professional</h4>
                  <p className="text-slate-400 text-sm mb-6">Ideal for growing K-12 schools.</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">$499</span>
                    <span className="text-slate-500">/mo</span>
                  </div>
                </div>
                <div className="space-y-4 mb-8 flex-1">
                  {['Up to 2,000 Students', 'Biometric Attendance', 'Advanced Analytics', 'Parent Portal App', 'SMS Notifications', 'Priority Support'].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-[#60a5fa]" /> {feature}
                    </div>
                  ))}
                </div>
                <Button className="w-full rounded-full bg-gradient-to-r from-[#0f3b73] to-[#36833b] hover:opacity-90 text-white border-0 shadow-lg shadow-[#0f3b73]/20">Start 14-Day Trial</Button>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col relative overflow-hidden backdrop-blur-sm">
                <div className="mb-8">
                  <h4 className="text-xl font-medium text-white mb-2">Enterprise</h4>
                  <p className="text-slate-400 text-sm mb-6">For universities and multi-campus schools.</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">Custom</span>
                  </div>
                </div>
                <div className="space-y-4 mb-8 flex-1">
                  {['Unlimited Students', 'Multi-Branch Support', 'Custom Integrations', 'Dedicated Account Manager', 'White-labeling Options', 'On-premise deployment'].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-[#36833b]" /> {feature}
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full rounded-full border-white/20 hover:bg-white/10 text-white bg-transparent">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-24 md:py-32 bg-[#0a0a0a]">
          <div className="container px-4 md:px-6 mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">Frequently Asked Questions</h2>
              <p className="text-slate-400 text-lg">Got questions? We've got answers. If you don't see your question here, reach out to our support team.</p>
            </div>
            
            <Accordion type="single" collapsible className="w-full text-slate-300 space-y-4">
              {[
                { q: "How long does it take to migrate to EduNest?", a: "Our dedicated onboarding team ensures that most schools can fully migrate their data and go live within 7 to 14 days, depending on the size of the institution and the quality of legacy data." },
                { q: "Is EduNest compliant with data privacy laws?", a: "Yes. EduNest is fully compliant with GDPR, COPPA, and FERPA. We utilize end-to-end encryption and strict role-based access control to ensure student data is always protected." },
                { q: "Can parents track their child's progress?", a: "Absolutely! EduNest includes a dedicated Parent Portal (accessible via web and mobile apps) where parents can view real-time attendance, grades, fee dues, and teacher feedback." },
                { q: "Does EduNest integrate with other software?", a: "We offer API access and native integrations with popular tools like Google Workspace, Microsoft Teams, Zoom, and leading payment gateways (Stripe, PayPal) for fee collection." },
                { q: "What happens after the 14-day free trial?", a: "After the 14-day trial, you can choose to subscribe to one of our paid plans. If you decide not to continue, your account will be paused, and you can export your data securely." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-white/10 bg-[#111] px-6 rounded-2xl">
                  <AccordionTrigger className="hover:no-underline hover:text-white text-left py-6 text-lg font-medium">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-slate-400 text-base leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative flex items-center justify-center bg-[#030712]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#030712]"></div>
          <div className="container px-4 relative z-10">
            <div className="max-w-4xl mx-auto rounded-3xl p-1 md:p-1 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0f3b73] via-[#36833b] to-[#0f3b73] opacity-30 group-hover:opacity-50 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-[#0a0a0a] rounded-[22px] p-10 md:p-16 border border-white/10 text-center flex flex-col items-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to transform your school?</h2>
                <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">Join hundreds of institutions that have already upgraded to EduNest. Start your 14-day free trial today.</p>
                <Button size="lg" className="rounded-full h-14 px-10 text-base bg-white text-black hover:bg-slate-200" asChild>
                  <Link to="/dashboard">Get Started Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-12 bg-[#050505] border-t border-white/10">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <img src="/logo.png" alt="EduNest" className="h-8 w-auto bg-white p-1 rounded" onError={(e) => e.target.style.display = 'none'} />
                <span className="font-bold text-xl text-white">EduNest</span>
              </Link>
              <p className="text-slate-400 text-sm max-w-xs mb-6">The modern operating system for educational institutions aiming for excellence.</p>
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors"></div>
                <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors"></div>
                <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors"></div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#features" onClick={(e) => { e.preventDefault(); document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors cursor-pointer">Features</a></li>
                <li><a href="#pricing" onClick={(e) => { e.preventDefault(); document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors cursor-pointer">Pricing</a></li>
                <li><Link to="#" className="hover:text-white transition-colors">Security</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Changelog</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link to="#" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>© 2026 EduNest Inc. All rights reserved.</p>
            <p>Designed with precision.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
