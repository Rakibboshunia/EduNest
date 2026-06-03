import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3, TrendingUp, Users, CreditCard,
  Download, Calendar as CalendarIcon, ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, BarChart, Bar, Cell,
  PieChart as RechartsPie, Pie, Legend
} from "recharts";
import toast from "react-hot-toast";

const enrollmentData = [
  { name: "2019", students: 1200 },
  { name: "2020", students: 1350 },
  { name: "2021", students: 1600 },
  { name: "2022", students: 1900 },
  { name: "2023", students: 2200 },
  { name: "2024", students: 2543 },
];

const monthlyRevenue = [
  { name: "Jan", revenue: 38000 },
  { name: "Feb", revenue: 42000 },
  { name: "Mar", revenue: 40000 },
  { name: "Apr", revenue: 45000 },
  { name: "May", revenue: 43000 },
  { name: "Jun", revenue: 47000 },
  { name: "Jul", revenue: 50000 },
  { name: "Aug", revenue: 48000 },
];

const revenueByGrade = [
  { name: "Primary", value: 120000 },
  { name: "Middle", value: 180000 },
  { name: "High", value: 250000 },
];

const COLORS = ["#0f3b73", "#36833b", "#60a5fa"];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.35 } } };

const periods = ["This Week", "This Month", "This Quarter", "This Year"];

export default function Analytics() {
  const [period, setPeriod] = useState("This Year");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-6 pb-10"
    >
      {/* ── Hero Header ── */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900 via-[#0f3b73] to-[#36833b] p-6 md:p-8 shadow-xl shadow-purple-900/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 pointer-events-none" />
        <div className="relative flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <BarChart3 className="h-5 w-5 text-white/70" />
              <span className="text-white/70 text-sm font-medium">Intelligence & Reporting</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Advanced Analytics</h1>
            <p className="text-white/60 mt-1 text-sm">Deep dive into institutional performance and growth.</p>
          </div>
          <div className="flex items-center gap-2 shrink-0 flex-wrap">
            <div className="flex bg-white/10 border border-white/15 rounded-xl overflow-hidden backdrop-blur-sm">
              {periods.map((p) => (
                <button
                  key={p}
                  onClick={() => { setPeriod(p); toast(`Period: ${p}`); }}
                  className={`px-3 py-1.5 text-xs font-semibold transition-colors ${
                    period === p ? "bg-white text-[#0f3b73]" : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {p.replace("This ", "")}
                </button>
              ))}
            </div>
            <Button
              size="sm"
              onClick={() => toast.promise(new Promise(r => setTimeout(r, 1000)), { loading: "Generating PDF...", success: "PDF Exported!", error: "Error" })}
              className="bg-white text-purple-900 hover:bg-white/90 font-semibold rounded-xl shadow-lg"
            >
              <Download className="mr-2 h-3.5 w-3.5" /> Export
            </Button>
          </div>
        </div>

        {/* KPI pills */}
        <div className="relative mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Growth Rate", value: "+15.2%", sub: "Year over year", icon: TrendingUp },
            { label: "Avg. Class Size", value: "24.5", sub: "Optimal: 25", icon: Users },
            { label: "Retention Rate", value: "96.8%", sub: "Top 5% regionally", icon: BarChart3 },
            { label: "Revenue YTD", value: "$353K", sub: "vs $298K last year", icon: CreditCard },
          ].map((s, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
              <div className="flex items-center justify-between mb-1">
                <p className="text-white/60 text-xs">{s.label}</p>
                <s.icon className="h-3.5 w-3.5 text-white/40" />
              </div>
              <p className="text-white font-bold text-xl leading-none">{s.value}</p>
              <p className="text-white/40 text-[10px] mt-1">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Charts ── */}
      <motion.div variants={container} initial="hidden" animate="show" className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {/* Enrollment Growth — wide */}
        <motion.div variants={item} className="col-span-1 lg:col-span-2">
          <Card className="border-none shadow-lg dark:bg-[#1e293b] dark:border dark:border-white/5 h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <div>
                <CardTitle className="text-base font-semibold text-slate-800 dark:text-white">Enrollment Growth</CardTitle>
                <CardDescription className="text-xs mt-0.5">5-year historical trend of student enrollments.</CardDescription>
              </div>
              <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/15 px-2.5 py-1 rounded-full">
                <ArrowUpRight className="h-3 w-3" /> +15.6%
              </span>
            </CardHeader>
            <CardContent className="px-2 sm:px-6 pb-4">
              <div className="h-[270px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={enrollmentData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="gradEnroll" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0f3b73" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#0f3b73" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.4} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} dx={-10} />
                    <Tooltip contentStyle={{ backgroundColor: "hsl(var(--background))", borderColor: "hsl(var(--border))", borderRadius: "12px", fontSize: "12px" }} />
                    <Area type="monotone" dataKey="students" name="Students" stroke="#0f3b73" strokeWidth={2.5} fillOpacity={1} fill="url(#gradEnroll)" dot={false} activeDot={{ r: 5, fill: "#0f3b73" }} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Pie Chart */}
        <motion.div variants={item} className="col-span-1">
          <Card className="border-none shadow-lg dark:bg-[#1e293b] dark:border dark:border-white/5 h-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-semibold text-slate-800 dark:text-white">Revenue by Section</CardTitle>
              <CardDescription className="text-xs mt-0.5">Distribution of collected fees per division.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center pt-2">
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPie>
                    <Pie data={revenueByGrade} innerRadius={55} outerRadius={80} paddingAngle={5} dataKey="value" strokeWidth={0}>
                      {revenueByGrade.map((_, i) => (
                        <Cell key={i} fill={COLORS[i % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: "hsl(var(--background))", borderColor: "hsl(var(--border))", borderRadius: "12px", fontSize: "12px" }} />
                  </RechartsPie>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-col gap-2 w-full mt-2">
                {revenueByGrade.map((entry, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                      <span className="text-slate-600 dark:text-slate-400 text-xs">{entry.name}</span>
                    </div>
                    <span className="font-semibold text-xs text-slate-700 dark:text-slate-300">
                      ${(entry.value / 1000).toFixed(0)}K
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Monthly Revenue Bar — full width */}
        <motion.div variants={item} className="col-span-1 md:col-span-2 lg:col-span-3">
          <Card className="border-none shadow-lg dark:bg-[#1e293b] dark:border dark:border-white/5">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <div>
                <CardTitle className="text-base font-semibold text-slate-800 dark:text-white">Monthly Revenue Collection</CardTitle>
                <CardDescription className="text-xs mt-0.5">Total fees collected per month — current academic year.</CardDescription>
              </div>
              <span className="text-xs text-slate-400">{period}</span>
            </CardHeader>
            <CardContent className="px-2 sm:px-6 pb-4">
              <div className="h-[220px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyRevenue} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.4} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} dx={-10} tickFormatter={v => `$${v / 1000}K`} />
                    <Tooltip
                      cursor={{ fill: "hsl(var(--muted))", opacity: 0.3, radius: 6 }}
                      contentStyle={{ backgroundColor: "hsl(var(--background))", borderColor: "hsl(var(--border))", borderRadius: "12px", fontSize: "12px" }}
                      formatter={(v) => [`$${v.toLocaleString()}`, "Revenue"]}
                    />
                    <Bar dataKey="revenue" radius={[6, 6, 0, 0]}>
                      {monthlyRevenue.map((_, i) => (
                        <Cell key={i} fill={i === monthlyRevenue.length - 1 ? "#36833b" : "#0f3b73"} opacity={i === monthlyRevenue.length - 1 ? 1 : 0.75} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
