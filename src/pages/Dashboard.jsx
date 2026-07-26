import { useNavigate } from "react-router-dom";
import { 
  Users, 
  GraduationCap, 
  CreditCard, 
  TrendingUp,
  MoreHorizontal,
  BookOpen,
  Calendar,
  ArrowRight,
  Sparkles,
  Bell,
  CheckCircle2
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from "recharts";
import { StatCard } from "@/components/charts/StatCard";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import toast from "react-hot-toast";

const performanceData = [
  { name: "Jan", attendance: 92, performance: 85 },
  { name: "Feb", attendance: 90, performance: 88 },
  { name: "Mar", attendance: 95, performance: 86 },
  { name: "Apr", attendance: 96, performance: 90 },
  { name: "May", attendance: 94, performance: 92 },
  { name: "Jun", attendance: 98, performance: 94 },
];

const revenueData = [
  { name: "Mon", amount: 1200 },
  { name: "Tue", amount: 2100 },
  { name: "Wed", amount: 1800 },
  { name: "Thu", amount: 2400 },
  { name: "Fri", amount: 2900 },
  { name: "Sat", amount: 900 },
  { name: "Sun", amount: 400 },
];

import { useData } from "@/context/DataContext";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

function getGreeting(lang) {
  const h = new Date().getHours();
  if (lang === 'bn') {
    if (h < 12) return "শুভ সকাল";
    if (h < 17) return "শুভ বিকেল";
    return "শুভ সন্ধ্যা";
  }
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

export default function Dashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { t, language } = useLanguage();
  const { students, teachers, fees, exams, attendance } = useData();

  const pendingFeesCount = fees.filter(f => f.status === 'Pending' || f.status === 'Overdue').length;
  const recentStudentsList = students.slice(0, 5).map(s => {
    const studentFee = fees.find(f => f.student === s.name);
    return {
      name: s.name,
      email: s.email,
      grade: s.grade,
      amount: studentFee ? studentFee.amount : "$0.00",
      status: studentFee ? studentFee.status : "Paid"
    };
  });

  return (
    <motion.div 
      className="space-y-6 pb-10"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* ── Hero Header ── */}
      <motion.div variants={item}>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--brand-primary)] via-[#1a4f96] to-[var(--brand-secondary)] p-6 md:p-8 shadow-xl shadow-[var(--brand-primary)]/20">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-[var(--brand-secondary)]/30 rounded-full blur-3xl translate-y-1/2 pointer-events-none" />
          
          <div className="relative flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-4 w-4 text-amber-400" />
                <span className="text-white/70 text-sm font-medium">{getGreeting(language)}, {user?.name?.split(' ')[0] || "Admin"}!</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{t("dashboard")}</h1>
              <p className="text-white/60 mt-1 text-sm">{t("overviewTitle")}</p>
            </div>
            <div className="flex gap-2.5 shrink-0">
              <Button 
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm rounded-xl"
              >
                <Calendar className="mr-2 h-3.5 w-3.5" /> This Week
              </Button>
              <Button 
                size="sm"
                onClick={() => toast.promise(new Promise(r => setTimeout(r, 1500)), { loading: 'Generating...', success: 'Report Generated!', error: 'Failed' })}
                className="bg-white text-[var(--brand-primary)] hover:bg-white/90 font-semibold rounded-xl shadow-lg"
              >
                Generate Report
              </Button>
            </div>
          </div>

          {/* Quick stats bar */}
          <div className="relative mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: t("fees") + " " + t("due"), value: pendingFeesCount, color: "text-amber-300" },
              { label: t("todayAttendance"), value: attendance.filter(a=>a.status==='Present').length + "/" + attendance.length, color: "text-emerald-300" },
              { label: t("newEnrollment"), value: students.filter(s=>s.status==='Active').length, color: "text-blue-300" },
              { label: t("examScheduled"), value: exams.length, color: "text-purple-300" },
            ].map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
                <p className="text-white/60 text-xs mb-1">{s.label}</p>
                <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Stat Cards ── */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: t("totalStudents"), value: students.length, icon: GraduationCap, trend: "+12.5%", positive: true, color: "from-[var(--brand-primary)] to-[var(--brand-primary-light)]", trendText: t("thisMonth") },
          { title: t("totalTeachers"), value: teachers.length, icon: Users, trend: "+2.1%", positive: true, color: "from-[var(--brand-secondary)] to-[#4ade80]", trendText: t("thisMonth") },
          { title: t("feeCollection"), value: "$" + fees.filter(f=>f.status==='Paid').reduce((acc, f)=>acc+parseFloat(f.amount.replace(/[^0-9.-]+/g,"")), 0).toLocaleString(), icon: CreditCard, trend: "+15.3%", positive: true, color: "from-purple-600 to-indigo-500", trendText: t("thisMonth") },
          { title: t("attendanceRate"), value: Math.round((attendance.filter(a=>a.status==='Present').length / (attendance.length||1))*100) + "%", icon: TrendingUp, trend: "+1.2%", positive: true, color: "from-amber-500 to-orange-500", trendText: t("thisMonth") },
        ].map((stat, i) => (
          <motion.div key={i} variants={item}>
            <StatCard {...stat} />
          </motion.div>
        ))}
      </div>

      {/* ── Charts Row ── */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-7">
        {/* Area Chart */}
        <motion.div variants={item} className="col-span-1 lg:col-span-4">
          <Card className="h-full border-none shadow-lg dark:bg-[#1e293b] dark:border dark:border-white/5">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <div>
                <CardTitle className="text-base font-semibold text-slate-800 dark:text-white">{t("attendanceRate")} & {t("performanceReport")}</CardTitle>
                <CardDescription className="text-xs mt-0.5">{t("thisMonth")}</CardDescription>
              </div>
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[var(--brand-primary)] inline-block" />Attendance</span>
                <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[var(--brand-secondary)] inline-block" />Performance</span>
              </div>
            </CardHeader>
            <CardContent className="px-2 sm:px-6 pb-4">
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorAttendance" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--brand-primary)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="var(--brand-primary)" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorPerformance" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--brand-secondary)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="var(--brand-secondary)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.4} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} dx={-10} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))', borderRadius: '12px', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', fontSize: '12px' }}
                    />
                    <Area type="monotone" dataKey="attendance" name="Attendance %" stroke="var(--brand-primary)" strokeWidth={2.5} fillOpacity={1} fill="url(#colorAttendance)" dot={false} activeDot={{ r: 5, fill: "var(--brand-primary)" }} />
                    <Area type="monotone" dataKey="performance" name="Avg Score %" stroke="var(--brand-secondary)" strokeWidth={2.5} fillOpacity={1} fill="url(#colorPerformance)" dot={false} activeDot={{ r: 5, fill: "var(--brand-secondary)" }} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Enrollments */}
        <motion.div variants={item} className="col-span-1 lg:col-span-3">
          <Card className="h-full border-none shadow-lg dark:bg-[#1e293b] dark:border dark:border-white/5">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-base font-semibold text-slate-800 dark:text-white">{t("newEnrollment")}</CardTitle>
                <CardDescription className="text-xs mt-0.5">{t("thisMonth")}</CardDescription>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-600">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <div className="space-y-1 mt-2">
                {recentStudentsList.map((student, i) => (
                  <div key={i} className="flex items-center gap-3 p-2.5 -mx-1 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-pointer group">
                    <Avatar className="h-9 w-9 ring-1 ring-slate-200 dark:ring-white/10 shrink-0">
                      <AvatarImage src={`https://i.pravatar.cc/150?u=${student.name}`} />
                      <AvatarFallback className="bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-primary-light)] text-white text-xs font-bold">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 truncate group-hover:text-[var(--brand-primary)] dark:group-hover:text-white transition-colors">{student.name}</p>
                      <p className="text-xs text-slate-400 truncate">{student.grade}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{student.amount}</p>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        student.status === 'Paid' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400' :
                        student.status === 'Pending' ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400' :
                        'bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400'
                      }`}>{student.status}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button onClick={() => navigate("/students")} variant="outline" className="w-full mt-4 text-[var(--brand-primary)] border-[var(--brand-primary)]/20 hover:bg-[var(--brand-primary)]/5 dark:text-white dark:border-white/10 rounded-xl text-xs font-semibold">
                {t("viewAll")} {t("students")} <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* ── Bottom Row ── */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {/* Bar Chart */}
        <motion.div variants={item} className="col-span-1 lg:col-span-2">
          <Card className="border-none shadow-lg dark:bg-[#1e293b] dark:border dark:border-white/5">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-base font-semibold text-slate-800 dark:text-white">{t("feeCollection")}</CardTitle>
                <CardDescription className="text-xs mt-0.5">{t("thisMonth")}</CardDescription>
              </div>
              <Badge variant="outline" className="text-xs border-[var(--brand-secondary)]/30 text-[var(--brand-secondary)] dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10">This Week</Badge>
            </CardHeader>
            <CardContent className="px-2 sm:px-6 pb-4">
              <div className="h-[220px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.4} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} dx={-10} />
                    <Tooltip 
                      cursor={{ fill: 'hsl(var(--muted))', opacity: 0.3, radius: 6 }}
                      contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))', borderRadius: '12px', fontSize: '12px' }}
                    />
                    <Bar dataKey="amount" name="Revenue ($)" radius={[6, 6, 0, 0]}>
                      {revenueData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 4 ? 'var(--brand-secondary)' : 'var(--brand-primary)'} opacity={index === 4 ? 1 : 0.7} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div variants={item} className="col-span-1 flex flex-col gap-5">
          <Card className="border-none shadow-lg dark:bg-[#1e293b] dark:border dark:border-white/5">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold text-slate-800 dark:text-white">{t("quickActions")}</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3 pb-4">
              {[
                { icon: Users, label: t("addStudent"), color: "text-[var(--brand-primary)]", bg: "bg-[var(--brand-primary)]/10 group-hover:bg-[var(--brand-primary)]/20", link: "/students" },
                { icon: BookOpen, label: t("exams"), color: "text-[var(--brand-secondary)]", bg: "bg-[var(--brand-secondary)]/10 group-hover:bg-[var(--brand-secondary)]/20", link: "/exams" },
                { icon: CreditCard, label: t("collectFee"), color: "text-purple-600", bg: "bg-purple-600/10 group-hover:bg-purple-600/20", link: "/fees" },
                { icon: Bell, label: t("notices"), color: "text-orange-600", bg: "bg-orange-600/10 group-hover:bg-orange-600/20", link: "/notices" },
              ].map((action, i) => (
                <div
                  key={i}
                  onClick={() => navigate(action.link)}
                  className="flex flex-col items-center justify-center p-4 border border-slate-100 dark:border-white/10 rounded-2xl hover:border-transparent hover:shadow-md transition-all duration-200 cursor-pointer group bg-white dark:bg-white/3"
                >
                  <div className={`p-3 rounded-xl ${action.bg} ${action.color} group-hover:scale-110 transition-all duration-200 mb-2.5`}>
                    <action.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{action.label}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Activity Feed */}
          <Card className="border-none shadow-lg dark:bg-[#1e293b] dark:border dark:border-white/5 flex-1">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold text-slate-800 dark:text-white">{t("recentActivity")}</CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="space-y-3">
                {[
                  { label: "Fee payment received", sub: "Olivia Martin · $1,999", icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-100 dark:bg-emerald-500/15" },
                  { label: "New student enrolled", sub: "Jackson Lee · Grade 9", icon: GraduationCap, color: "text-[var(--brand-primary)] dark:text-[#60a5fa]", bg: "bg-[var(--brand-primary)]/10 dark:bg-[var(--brand-primary)]/20" },
                  { label: "Exam scheduled", sub: "Mid-term · Oct 28", icon: BookOpen, color: "text-purple-600", bg: "bg-purple-100 dark:bg-purple-500/15" },
                ].map((act, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`h-8 w-8 rounded-xl ${act.bg} ${act.color} flex items-center justify-center shrink-0`}>
                      <act.icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">{act.label}</p>
                      <p className="text-[10px] text-slate-400 truncate">{act.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
