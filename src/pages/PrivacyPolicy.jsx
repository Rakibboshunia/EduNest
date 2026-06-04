import { Link } from 'react-router-dom';
import { } from 'lucide-react';
export default function PrivacyPolicy() {
  return (
    <div className="w-full">
{/* Content */}
      <main className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white">Privacy Policy</h1>
          <p className="text-slate-500 dark:text-slate-400">Last updated: June 3, 2026</p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[var(--brand-primary)] hover:prose-a:text-[var(--brand-secondary)]">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">1. Introduction</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              At EduNest Inc. ("EduNest", "we", "us", or "our"), we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our student management software and services (collectively, the "Services"). 
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">2. Information We Collect</h2>
            <h3 className="text-lg font-medium mb-2 text-slate-800 dark:text-slate-200">Personal Data</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, subscribe to the newsletter, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300 space-y-2">
              <li>Name and job title</li>
              <li>Contact information including email address and phone number</li>
              <li>Demographic information such as postcode, preferences and interests</li>
              <li>Student records and academic data (only as inputted by authorized institutional users)</li>
            </ul>
            
            <h3 className="text-lg font-medium mb-2 text-slate-800 dark:text-slate-200">Usage Data</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We automatically collect certain information when you visit, use or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services and other technical information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">3. How We Use Your Information</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Services to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
              <li>Create and manage your account.</li>
              <li>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Services to you.</li>
              <li>Email you regarding your account or order.</li>
              <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Services.</li>
              <li>Generate a personal profile about you to make future visits to the Services more personalized.</li>
              <li>Increase the efficiency and operation of the Services.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Services.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">4. Data Security</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">5. Contact Us</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              If you have questions or comments about this Privacy Policy, please contact us at:
              <br />
              <strong>Email:</strong> privacy@edunest.com
              <br />
              <strong>Address:</strong> 123 Education Lane, Tech District, San Francisco, CA 94105
            </p>
          </section>
        </div>
      </main>
</div>
  );
}
