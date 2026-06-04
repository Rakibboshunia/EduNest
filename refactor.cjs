const fs = require('fs');
const path = require('path');

const pages = [
  'LandingPage.jsx',
  'AboutUs.jsx',
  'Contact.jsx',
  'Careers.jsx',
  'Blog.jsx',
  'PrivacyPolicy.jsx',
  'TermsOfService.jsx',
  'CookiePolicy.jsx'
];

pages.forEach(page => {
  const filePath = path.join('src', 'pages', page);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove header
  content = content.replace(/<header[\s\S]*?<\/header>/, '');
  
  // Remove footer
  content = content.replace(/<footer[\s\S]*?<\/footer>/, '');
  
  // If LandingPage, remove Cta
  if (page === 'LandingPage.jsx') {
     content = content.replace(/<section className="py-24 md:py-32 relative flex items-center justify-center[\s\S]*?<\/section>/, '');
  }

  // Remove wrapper divs that were just for the min-h-screen
  if (page !== 'LandingPage.jsx') {
     content = content.replace(/<div className="min-h-screen[^>]*>/, '<div className="w-full">');
  }

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${page}`);
});

// Update App.jsx
let appContent = fs.readFileSync('src/App.jsx', 'utf8');
const importStr = "import { PublicLayout } from './layouts/PublicLayout';\n";
if (!appContent.includes('PublicLayout')) {
  appContent = appContent.replace("import LandingPage from", importStr + "import LandingPage from");
}

const regex = /\{\/\* Public Routes \*\/\}\s*<Route path="\/" element=\{<LandingPage \/>\} \/>\s*<Route path="\/login" element=\{<Login \/>\} \/>\s*<Route path="\/register" element=\{<Register \/>\} \/>\s*<Route path="\/forgot-password" element=\{<ForgotPassword \/>\} \/>\s*<Route path="\/reset-password" element=\{<ResetPassword \/>\} \/>\s*<Route path="\/privacy-policy" element=\{<PrivacyPolicy \/>\} \/>\s*<Route path="\/terms-of-service" element=\{<TermsOfService \/>\} \/>\s*<Route path="\/cookie-policy" element=\{<CookiePolicy \/>\} \/>\s*<Route path="\/about-us" element=\{<AboutUs \/>\} \/>\s*<Route path="\/contact" element=\{<Contact \/>\} \/>\s*<Route path="\/careers" element=\{<Careers \/>\} \/>\s*<Route path="\/blog" element=\{<Blog \/>\} \/>/;

appContent = appContent.replace(regex, 
`{/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />`);

fs.writeFileSync('src/App.jsx', appContent);
console.log('Updated App.jsx');

// Fix Footer.jsx
let footerContent = fs.readFileSync('src/components/layout/Footer.jsx', 'utf8');
if (!footerContent.includes('Globe')) {
    footerContent = footerContent.replace('import { GraduationCap, Mail } from "lucide-react";', 'import { GraduationCap, Mail, Globe } from "lucide-react";');
    fs.writeFileSync('src/components/layout/Footer.jsx', footerContent);
}
