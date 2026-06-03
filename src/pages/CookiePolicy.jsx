import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CookiePolicy() {
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

      {/* Content */}
      <main className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white">Cookie Policy</h1>
          <p className="text-slate-500 dark:text-slate-400">Last updated: June 3, 2026</p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[var(--brand-primary)] hover:prose-a:text-[var(--brand-secondary)]">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">1. What Are Cookies</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">2. How We Use Cookies</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              We use cookies for a variety of reasons detailed below. Unfortunately, in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
            </p>
            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
              <li><strong>Account related cookies:</strong> If you create an account with us then we will use cookies for the management of the signup process and general administration.</li>
              <li><strong>Login related cookies:</strong> We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page.</li>
              <li><strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it (like dark mode vs light mode).</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">3. Third Party Cookies</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              In some special cases we also use cookies provided by trusted third parties. For example, this site uses Google Analytics which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">4. Disabling Cookies</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore it is recommended that you do not disable cookies.
            </p>
          </section>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-slate-200 dark:border-white/10 py-8 text-center text-slate-500 dark:text-slate-400 text-sm">
        <p>© 2026 EduNest Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
