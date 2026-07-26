import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { ProtectedRoute } from './routes/ProtectedRoute';
import { Toaster } from 'react-hot-toast';

// Public Layouts & Pages
import { PublicLayout } from './layouts/PublicLayout';
import LandingPage from './pages/LandingPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';

import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';

// Programs sub-pages
import Undergraduate from './pages/programs/Undergraduate';
import Graduate from './pages/programs/Graduate';
import Doctoral from './pages/programs/Doctoral';
import OnlinePrograms from './pages/programs/Online';
import Certificates from './pages/programs/Certificates';

// About sub-pages
import History from './pages/about/History';
import MissionVision from './pages/about/MissionVision';
import Leadership from './pages/about/Leadership';
import Rankings from './pages/about/Rankings';

// Auth Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';

// Dashboard
import { DashboardLayout } from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import StudentProfile from './pages/StudentProfile';
import Teachers from './pages/Teachers';
import TeacherProfile from './pages/TeacherProfile';
import Fees from './pages/Fees';
import Settings from './pages/Settings';
import Attendance from './pages/Attendance';
import Analytics from './pages/Analytics';
import Exams from './pages/Exams';
import Notices from './pages/Notices';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
        <AuthProvider>
          <DataProvider>
<<<<<<< HEAD
            <Routes>
              {/* ── Public Routes (with new landing layout) ── */}
              <Route element={<PublicLayout />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />

                <Route path="/contact" element={<Contact />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/blog" element={<Blog />} />

                {/* Programs sub-pages */}
                <Route path="/programs/undergraduate" element={<Undergraduate />} />
                <Route path="/programs/graduate" element={<Graduate />} />
                <Route path="/programs/doctoral" element={<Doctoral />} />
                <Route path="/programs/online" element={<OnlinePrograms />} />
                <Route path="/programs/certificates" element={<Certificates />} />

                {/* About sub-pages */}
                <Route path="/about/history" element={<History />} />
                <Route path="/about/mission-vision" element={<MissionVision />} />
                <Route path="/about/leadership" element={<Leadership />} />
                <Route path="/about/rankings" element={<Rankings />} />
              </Route>

              {/* ── Auth Routes ── */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />

              {/* ── Protected Dashboard Routes ── */}
              <Route
                path="/"
                element={
                  <ProtectedRoute allowedRoles={["admin", "teacher", "student", "parent"]}>
                    <DashboardLayout />
                  </ProtectedRoute>
                }
              >
                {/* All roles */}
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="attendance" element={<Attendance />} />
                <Route path="exams" element={<Exams />} />
                <Route path="notices" element={<Notices />} />
                <Route path="settings" element={<Settings />} />

                {/* Admin + Teacher only */}
                <Route path="students" element={
                  <ProtectedRoute allowedRoles={["admin", "teacher"]}>
                    <Students />
                  </ProtectedRoute>
                } />
                <Route path="students/:id" element={
                  <ProtectedRoute allowedRoles={["admin", "teacher"]}>
                    <StudentProfile />
                  </ProtectedRoute>
                } />

                {/* Admin only */}
                <Route path="teachers" element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                    <Teachers />
                  </ProtectedRoute>
                } />
                <Route path="teachers/:id" element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                    <TeacherProfile />
                  </ProtectedRoute>
                } />
                <Route path="analytics" element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                    <Analytics />
                  </ProtectedRoute>
                } />

                {/* Admin + Parent */}
                <Route path="fees" element={
                  <ProtectedRoute allowedRoles={["admin", "parent"]}>
                    <Fees />
                  </ProtectedRoute>
                } />
              </Route>

              {/* Fallback wrapped in PublicLayout */}
              <Route element={<PublicLayout />}>
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </DataProvider>
        </AuthProvider>
=======
          <Routes>
          {/* Public Routes */}
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
          <Route path="/reset-password" element={<ResetPassword />} />
          
          {/* Protected Dashboard Routes */}
          <Route 
            path="/" 
            element={
              <ProtectedRoute allowedRoles={["admin", "teacher", "student", "parent"]}>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="students" element={<Students />} />
            <Route path="students/:id" element={<StudentProfile />} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="teachers/:id" element={<TeacherProfile />} />
            <Route path="fees" element={<Fees />} />
            <Route path="settings" element={<Settings />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="exams" element={<Exams />} />
            <Route path="notices" element={<Notices />} />
            <Route path="analytics" element={<Analytics />} />
          </Route>
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </DataProvider>
      </AuthProvider>
        </LanguageProvider>
>>>>>>> 1fff430974318f37260db10adf0917f936e7202d
      </ThemeProvider>
      <Toaster position="top-right" />
    </BrowserRouter>
  );
}

export default App;
