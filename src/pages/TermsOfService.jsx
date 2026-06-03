import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TermsOfService() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white">Terms of Service</h1>
          <p className="text-slate-500 dark:text-slate-400">Last updated: June 3, 2026</p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[var(--brand-primary)] hover:prose-a:text-[var(--brand-secondary)]">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">1. Agreement to Terms</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and EduNest Inc. ("we," "us" or "our"), concerning your access to and use of the EduNest platform, website, and any related services (collectively, the "Services"). You agree that by accessing the Services, you have read, understood, and agree to be bound by all of these Terms of Service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">2. User Accounts</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service. You agree not to disclose your password to any third party.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">3. Intellectual Property</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              The Service and its original content, features and functionality are and will remain the exclusive property of EduNest Inc. and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of EduNest Inc.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">4. Acceptable Use Policy</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              You agree not to use the Service:
            </p>
            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
              <li>In any way that violates any applicable national or international law or regulation.</li>
              <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
              <li>To impersonate or attempt to impersonate EduNest, an EduNest employee, another user, or any other person or entity.</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm EduNest or users of the Service.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">5. Termination</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
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
