import { createContext, useContext, useEffect, useState } from "react";

// ─────────────────────────────────────────────────────────────
//  TRANSLATIONS
// ─────────────────────────────────────────────────────────────
export const translations = {
  en: {
    // ── Navigation ──
    dashboard: "Dashboard",
    students: "Students",
    teachers: "Teachers",
    attendance: "Attendance",
    exams: "Exams",
    fees: "Fees",
    notices: "Notices",
    analytics: "Analytics",
    settings: "Settings",
    logout: "Sign Out",

    // ── Common ──
    save: "Save Changes",
    cancel: "Cancel",
    edit: "Edit",
    delete: "Delete",
    add: "Add",
    search: "Search...",
    filter: "Filter",
    export: "Export",
    loading: "Loading...",
    noData: "No data found",
    actions: "Actions",
    status: "Status",
    name: "Name",
    email: "Email",
    phone: "Phone",
    address: "Address",
    date: "Date",
    total: "Total",
    active: "Active",
    inactive: "Inactive",
    viewAll: "View All",
    addNew: "Add New",
    confirm: "Confirm",
    close: "Close",
    submit: "Submit",
    back: "Back",
    next: "Next",
    previous: "Previous",
    noResultsFound: "No results found",
    showing: "Showing",
    of: "of",
    results: "results",

    // ── Dashboard ──
    welcomeBack: "Welcome back",
    overviewTitle: "Here's what's happening at your school today.",
    totalStudents: "Total Students",
    totalTeachers: "Total Teachers",
    feeCollection: "Fee Collection",
    attendanceRate: "Attendance Rate",
    recentActivity: "Recent Activity",
    quickActions: "Quick Actions",
    addStudent: "Add Student",
    addTeacher: "Add Teacher",
    collectFee: "Collect Fee",
    markAttendance: "Mark Attendance",
    upcomingEvents: "Upcoming Events",
    newEnrollment: "New Enrollment",
    feeOverdue: "Fee Overdue",
    examScheduled: "Exam Scheduled",

    // ── Students ──
    studentManagement: "Student Management",
    studentList: "Student List",
    studentProfile: "Student Profile",
    enrollStudent: "Enroll Student",
    studentId: "Student ID",
    class: "Class",
    section: "Section",
    rollNo: "Roll No.",
    guardian: "Guardian",
    admissionDate: "Admission Date",
    grade: "Grade",
    present: "Present",
    absent: "Absent",
    late: "Late",

    // ── Teachers ──
    teacherManagement: "Teacher Management",
    teacherList: "Teacher List",
    teacherProfile: "Teacher Profile",
    addTeacherBtn: "Add Teacher",
    subject: "Subject",
    qualification: "Qualification",
    experience: "Experience",
    salary: "Salary",
    joiningDate: "Joining Date",
    department: "Department",

    // ── Attendance ──
    attendanceManagement: "Attendance Management",
    markAttendanceBtn: "Mark Attendance",
    attendanceReport: "Attendance Report",
    attendanceSummary: "Attendance Summary",
    todayAttendance: "Today's Attendance",
    monthlyAttendance: "Monthly Attendance",

    // ── Fees ──
    feeManagement: "Fee Management",
    collectFeeBtn: "Collect Fee",
    feeHistory: "Fee History",
    feeReport: "Fee Report",
    amount: "Amount",
    paid: "Paid",
    unpaid: "Unpaid",
    due: "Due",
    paymentDate: "Payment Date",
    receiptNo: "Receipt No.",
    feeType: "Fee Type",

    // ── Exams ──
    examManagement: "Exam Management",
    examSchedule: "Exam Schedule",
    examResults: "Exam Results",
    addExam: "Add Exam",
    examName: "Exam Name",
    startDate: "Start Date",
    endDate: "End Date",
    totalMarks: "Total Marks",
    passingMarks: "Passing Marks",
    result: "Result",
    pass: "Pass",
    fail: "Fail",

    // ── Notices ──
    noticeBoard: "Notice Board",
    addNotice: "Add Notice",
    noticeTitle: "Title",
    noticeContent: "Content",
    publishedOn: "Published On",
    audience: "Audience",
    allUsers: "All Users",
    studentsOnly: "Students Only",
    teachersOnly: "Teachers Only",

    // ── Analytics ──
    analyticsOverview: "Analytics Overview",
    performanceReport: "Performance Report",
    revenueAnalytics: "Revenue Analytics",
    enrollmentTrends: "Enrollment Trends",
    thisMonth: "This Month",
    lastMonth: "Last Month",
    thisYear: "This Year",

    // ── Settings ──
    settingsTitle: "Settings",
    profileSettings: "Profile Information",
    notificationSettings: "Notification Preferences",
    securitySettings: "Security Settings",
    appearanceSettings: "Appearance",
    languageSettings: "Language & Region",
    darkMode: "Dark Mode",
    displayLanguage: "Display Language",
    timezone: "Timezone",
    dateFormat: "Date Format",
    savePreferences: "Save Preferences",
    currentPassword: "Current Password",
    newPassword: "New Password",
    confirmPassword: "Confirm New Password",
    updatePassword: "Update Password",
    fullName: "Full Name",
    role: "Role",
    profileUpdated: "Profile updated successfully!",
    passwordUpdated: "Password updated successfully!",
    notifNewStudent: "New Student Enrollment",
    notifNewStudentDesc: "Get notified when a new student registers.",
    notifFeeOverdue: "Fee Overdue Alerts",
    notifFeeOverdueDesc: "Alerts for students with overdue payments.",
    notifExamResults: "Exam Results Published",
    notifExamResultsDesc: "Notify when exam results are available.",
    notifWeeklySummary: "Weekly Summary Report",
    notifWeeklySummaryDesc: "Receive a weekly performance digest.",
    securityDesc: "Update your password to keep your account secure.",
  },

  bn: {
    // ── Navigation ──
    dashboard: "ড্যাশবোর্ড",
    students: "শিক্ষার্থী",
    teachers: "শিক্ষক",
    attendance: "উপস্থিতি",
    exams: "পরীক্ষা",
    fees: "ফি",
    notices: "নোটিশ",
    analytics: "বিশ্লেষণ",
    settings: "সেটিংস",
    logout: "সাইন আউট",

    // ── Common ──
    save: "পরিবর্তন সংরক্ষণ করুন",
    cancel: "বাতিল",
    edit: "সম্পাদনা",
    delete: "মুছুন",
    add: "যোগ করুন",
    search: "অনুসন্ধান করুন...",
    filter: "ফিল্টার",
    export: "রপ্তানি",
    loading: "লোড হচ্ছে...",
    noData: "কোনো তথ্য পাওয়া যায়নি",
    actions: "কার্যক্রম",
    status: "অবস্থা",
    name: "নাম",
    email: "ইমেইল",
    phone: "ফোন",
    address: "ঠিকানা",
    date: "তারিখ",
    total: "মোট",
    active: "সক্রিয়",
    inactive: "নিষ্ক্রিয়",
    viewAll: "সব দেখুন",
    addNew: "নতুন যোগ করুন",
    confirm: "নিশ্চিত করুন",
    close: "বন্ধ করুন",
    submit: "জমা দিন",
    back: "পিছনে",
    next: "পরবর্তী",
    previous: "পূর্ববর্তী",
    noResultsFound: "কোনো ফলাফল পাওয়া যায়নি",
    showing: "প্রদর্শন করা হচ্ছে",
    of: "এর মধ্যে",
    results: "ফলাফল",

    // ── Dashboard ──
    welcomeBack: "স্বাগতম",
    overviewTitle: "আজ আপনার স্কুলে কী ঘটছে তার একটি সংক্ষিপ্ত বিবরণ।",
    totalStudents: "মোট শিক্ষার্থী",
    totalTeachers: "মোট শিক্ষক",
    feeCollection: "ফি সংগ্রহ",
    attendanceRate: "উপস্থিতির হার",
    recentActivity: "সাম্প্রতিক কার্যক্রম",
    quickActions: "দ্রুত কার্যক্রম",
    addStudent: "শিক্ষার্থী যোগ করুন",
    addTeacher: "শিক্ষক যোগ করুন",
    collectFee: "ফি সংগ্রহ",
    markAttendance: "উপস্থিতি চিহ্নিত করুন",
    upcomingEvents: "আসন্ন ঘটনাবলি",
    newEnrollment: "নতুন ভর্তি",
    feeOverdue: "ফি বকেয়া",
    examScheduled: "পরীক্ষার সময়সূচি",

    // ── Students ──
    studentManagement: "শিক্ষার্থী ব্যবস্থাপনা",
    studentList: "শিক্ষার্থীর তালিকা",
    studentProfile: "শিক্ষার্থীর প্রোফাইল",
    enrollStudent: "শিক্ষার্থী ভর্তি করুন",
    studentId: "শিক্ষার্থী আইডি",
    class: "শ্রেণি",
    section: "বিভাগ",
    rollNo: "রোল নম্বর",
    guardian: "অভিভাবক",
    admissionDate: "ভর্তির তারিখ",
    grade: "গ্রেড",
    present: "উপস্থিত",
    absent: "অনুপস্থিত",
    late: "দেরিতে",

    // ── Teachers ──
    teacherManagement: "শিক্ষক ব্যবস্থাপনা",
    teacherList: "শিক্ষকের তালিকা",
    teacherProfile: "শিক্ষকের প্রোফাইল",
    addTeacherBtn: "শিক্ষক যোগ করুন",
    subject: "বিষয়",
    qualification: "যোগ্যতা",
    experience: "অভিজ্ঞতা",
    salary: "বেতন",
    joiningDate: "যোগদানের তারিখ",
    department: "বিভাগ",

    // ── Attendance ──
    attendanceManagement: "উপস্থিতি ব্যবস্থাপনা",
    markAttendanceBtn: "উপস্থিতি চিহ্নিত করুন",
    attendanceReport: "উপস্থিতির প্রতিবেদন",
    attendanceSummary: "উপস্থিতির সারসংক্ষেপ",
    todayAttendance: "আজকের উপস্থিতি",
    monthlyAttendance: "মাসিক উপস্থিতি",

    // ── Fees ──
    feeManagement: "ফি ব্যবস্থাপনা",
    collectFeeBtn: "ফি সংগ্রহ করুন",
    feeHistory: "ফি ইতিহাস",
    feeReport: "ফি প্রতিবেদন",
    amount: "পরিমাণ",
    paid: "পরিশোধিত",
    unpaid: "অপরিশোধিত",
    due: "বকেয়া",
    paymentDate: "পরিশোধের তারিখ",
    receiptNo: "রসিদ নং",
    feeType: "ফির ধরন",

    // ── Exams ──
    examManagement: "পরীক্ষা ব্যবস্থাপনা",
    examSchedule: "পরীক্ষার সময়সূচি",
    examResults: "পরীক্ষার ফলাফল",
    addExam: "পরীক্ষা যোগ করুন",
    examName: "পরীক্ষার নাম",
    startDate: "শুরুর তারিখ",
    endDate: "শেষের তারিখ",
    totalMarks: "মোট নম্বর",
    passingMarks: "পাশের নম্বর",
    result: "ফলাফল",
    pass: "পাস",
    fail: "ফেল",

    // ── Notices ──
    noticeBoard: "নোটিশ বোর্ড",
    addNotice: "নোটিশ যোগ করুন",
    noticeTitle: "শিরোনাম",
    noticeContent: "বিষয়বস্তু",
    publishedOn: "প্রকাশিত",
    audience: "দর্শক",
    allUsers: "সকল ব্যবহারকারী",
    studentsOnly: "শুধু শিক্ষার্থী",
    teachersOnly: "শুধু শিক্ষক",

    // ── Analytics ──
    analyticsOverview: "বিশ্লেষণ সংক্ষিপ্তসার",
    performanceReport: "পারফরম্যান্স প্রতিবেদন",
    revenueAnalytics: "আয় বিশ্লেষণ",
    enrollmentTrends: "ভর্তির প্রবণতা",
    thisMonth: "এই মাস",
    lastMonth: "গত মাস",
    thisYear: "এই বছর",

    // ── Settings ──
    settingsTitle: "সেটিংস",
    profileSettings: "প্রোফাইল তথ্য",
    notificationSettings: "বিজ্ঞপ্তি পছন্দ",
    securitySettings: "নিরাপত্তা সেটিংস",
    appearanceSettings: "চেহারা",
    languageSettings: "ভাষা ও অঞ্চল",
    darkMode: "ডার্ক মোড",
    displayLanguage: "প্রদর্শন ভাষা",
    timezone: "সময় অঞ্চল",
    dateFormat: "তারিখ বিন্যাস",
    savePreferences: "পছন্দ সংরক্ষণ করুন",
    currentPassword: "বর্তমান পাসওয়ার্ড",
    newPassword: "নতুন পাসওয়ার্ড",
    confirmPassword: "পাসওয়ার্ড নিশ্চিত করুন",
    updatePassword: "পাসওয়ার্ড আপডেট করুন",
    fullName: "পুরো নাম",
    role: "ভূমিকা",
    profileUpdated: "প্রোফাইল সফলভাবে আপডেট হয়েছে!",
    passwordUpdated: "পাসওয়ার্ড সফলভাবে আপডেট হয়েছে!",
    notifNewStudent: "নতুন শিক্ষার্থী ভর্তি",
    notifNewStudentDesc: "নতুন শিক্ষার্থী নিবন্ধিত হলে বিজ্ঞপ্তি পান।",
    notifFeeOverdue: "ফি বকেয়া সতর্কতা",
    notifFeeOverdueDesc: "শিক্ষার্থীদের বকেয়া ফি এর জন্য সতর্কতা।",
    notifExamResults: "পরীক্ষার ফলাফল প্রকাশিত",
    notifExamResultsDesc: "পরীক্ষার ফলাফল পাওয়া গেলে বিজ্ঞপ্তি পান।",
    notifWeeklySummary: "সাপ্তাহিক সারসংক্ষেপ রিপোর্ট",
    notifWeeklySummaryDesc: "একটি সাপ্তাহিক পারফরম্যান্স ডাইজেস্ট গ্রহণ করুন।",
    securityDesc: "আপনার অ্যাকাউন্ট নিরাপদ রাখতে আপনার পাসওয়ার্ড আপডেট করুন।",
  },
};

// ─────────────────────────────────────────────────────────────
//  CONTEXT
// ─────────────────────────────────────────────────────────────
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("language") || "en";
    }
    return "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    // Set html lang attribute
    document.documentElement.lang = language === "bn" ? "bn" : "en";
    // Apply Hind Siliguri font for Bengali
    if (language === "bn") {
      document.documentElement.classList.add("lang-bn");
    } else {
      document.documentElement.classList.remove("lang-bn");
    }
  }, [language]);

  const t = (key) => {
    return translations[language]?.[key] || translations["en"]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isBengali: language === "bn" }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
