import { Link } from 'react-router-dom';
import { } from 'lucide-react';
export default function TermsOfService() {
  return (
    <div className="w-full">
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
</div>
  );
}
