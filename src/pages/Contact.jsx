import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <div className="w-full">
{/* Main Content */}
      <main className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white">Get in touch</h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-12">
              Have questions about pricing, features, or integration? Our team is ready to help you transform your institution.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-slate-200 dark:bg-white/5 flex items-center justify-center text-slate-700 dark:text-white flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Email Us</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-1">Our friendly team is here to help.</p>
                  <a href="mailto:hello@edunest.com" className="text-[var(--brand-primary)] font-medium hover:underline">hello@edunest.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-slate-200 dark:bg-white/5 flex items-center justify-center text-slate-700 dark:text-white flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Visit Us</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-1">Come say hello at our office HQ.</p>
                  <p className="text-slate-700 dark:text-slate-300">123 Education Lane, Tech District<br/>San Francisco, CA 94105</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-slate-200 dark:bg-white/5 flex items-center justify-center text-slate-700 dark:text-white flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Call Us</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-1">Mon-Fri from 8am to 5pm.</p>
                  <a href="tel:+15551234567" className="text-[var(--brand-primary)] font-medium hover:underline">+1 (555) 123-4567</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Send us a message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
                  <input type="text" className="w-full bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/10 rounded-lg h-12 px-4 outline-none focus:border-[var(--brand-primary)] transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
                  <input type="text" className="w-full bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/10 rounded-lg h-12 px-4 outline-none focus:border-[var(--brand-primary)] transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                <input type="email" className="w-full bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/10 rounded-lg h-12 px-4 outline-none focus:border-[var(--brand-primary)] transition-colors" placeholder="john@school.edu" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea className="w-full bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/10 rounded-lg p-4 outline-none focus:border-[var(--brand-primary)] transition-colors h-32 resize-none" placeholder="How can we help?"></textarea>
              </div>
              <Button className="w-full h-12 rounded-lg bg-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/90 text-white font-semibold mt-4">Send Message</Button>
            </form>
          </div>
        </div>
      </main>
</div>
  );
}
