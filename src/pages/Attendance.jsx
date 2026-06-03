import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarCheck, Search, Filter, CheckCircle2, XCircle, Clock, Download, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import toast from "react-hot-toast";

const attendanceData = [
  { id: "STU-001", name: "Olivia Martin", grade: "Grade 10", status: "Present", timeIn: "07:45 AM" },
  { id: "STU-002", name: "Jackson Lee", grade: "Grade 9", status: "Late", timeIn: "08:15 AM" },
  { id: "STU-003", name: "Isabella Nguyen", grade: "Grade 11", status: "Present", timeIn: "07:50 AM" },
  { id: "STU-004", name: "William Kim", grade: "Grade 11", status: "Absent", timeIn: "-" },
  { id: "STU-005", name: "Sofia Davis", grade: "Grade 8", status: "Present", timeIn: "07:42 AM" },
];

const statusStyles = {
  Present: { pill: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400", icon: CheckCircle2, row: "" },
  Late: { pill: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400", icon: Clock, row: "bg-amber-50/50 dark:bg-amber-500/5" },
  Absent: { pill: "bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400", icon: XCircle, row: "bg-red-50/50 dark:bg-red-500/5" },
};

export default function Attendance() {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [search, setSearch] = useState("");

  const presentCount = attendanceData.filter(s => s.status === "Present").length;
  const lateCount = attendanceData.filter(s => s.status === "Late").length;
  const absentCount = attendanceData.filter(s => s.status === "Absent").length;

  const filtered = attendanceData.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) || s.id.includes(search)
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-6 pb-10"
    >
      {/* ── Hero Header ── */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0f3b73] via-[#1a4f96] to-[#36833b] p-6 md:p-8 shadow-xl shadow-[#0f3b73]/20">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="relative flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <CalendarCheck className="h-5 w-5 text-white/70" />
              <span className="text-white/70 text-sm font-medium">Daily Tracking</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Attendance</h1>
            <p className="text-white/60 mt-1 text-sm">Track daily student attendance and punctuality.</p>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="h-9 bg-white/10 border-white/20 text-white rounded-xl backdrop-blur-sm text-sm [color-scheme:dark]"
            />
            <Button
              size="sm"
              onClick={() => toast.promise(new Promise(r => setTimeout(r, 1000)), { loading: "Exporting...", success: "Exported!", error: "Error" })}
              className="bg-white text-[#0f3b73] hover:bg-white/90 font-semibold rounded-xl shadow-md"
            >
              <Download className="mr-2 h-3.5 w-3.5" /> Export
            </Button>
          </div>
        </div>
        {/* Stats bar */}
        <div className="relative mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Total", value: attendanceData.length, color: "text-white" },
            { label: "Present", value: presentCount, color: "text-emerald-300" },
            { label: "Late", value: lateCount, color: "text-amber-300" },
            { label: "Absent", value: absentCount, color: "text-red-300" },
          ].map((s, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
              <p className="text-white/60 text-xs mb-1">{s.label}</p>
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Table Card ── */}
      <Card className="border-none shadow-lg dark:bg-[#1e293b] dark:border dark:border-white/5 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-100 dark:border-white/5 flex flex-col sm:flex-row gap-3 justify-between items-center">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search by name or ID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 h-9 bg-white dark:bg-[#0f172a] border-slate-200 dark:border-white/10 rounded-xl text-sm"
            />
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => toast("Filter panel coming soon.")}
              className="rounded-xl border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 h-9"
            >
              <Filter className="mr-2 h-3.5 w-3.5" /> Filter
            </Button>
            <Button
              size="sm"
              onClick={() => toast.success("Attendance marked!")}
              className="bg-gradient-to-r from-[#0f3b73] to-[#36833b] text-white rounded-xl shadow-md h-9 font-semibold"
            >
              <CheckCircle2 className="mr-2 h-3.5 w-3.5" /> Mark Attendance
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-white/5">
                <th className="px-6 py-3.5 text-left">Student</th>
                <th className="px-6 py-3.5 text-left">ID</th>
                <th className="px-6 py-3.5 text-left">Grade</th>
                <th className="px-6 py-3.5 text-left">Time In</th>
                <th className="px-6 py-3.5 text-left">Status</th>
                <th className="px-6 py-3.5 text-right">Update</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-white/5">
              {filtered.map((student, idx) => {
                const st = statusStyles[student.status] || statusStyles.Present;
                const Icon = st.icon;
                return (
                  <tr key={idx} className={`hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors ${st.row}`}>
                    <td className="px-6 py-3.5">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9 ring-1 ring-slate-100 dark:ring-white/10">
                          <AvatarImage src={`https://i.pravatar.cc/150?u=${student.name}`} />
                          <AvatarFallback className="bg-gradient-to-br from-[#0f3b73] to-[#1e40af] text-white text-xs font-bold">{student.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{student.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-3.5">
                      <span className="font-mono text-xs font-semibold text-slate-400 bg-slate-100 dark:bg-white/5 px-2 py-1 rounded-md">{student.id}</span>
                    </td>
                    <td className="px-6 py-3.5 text-slate-500 dark:text-slate-400 text-sm">{student.grade}</td>
                    <td className="px-6 py-3.5 font-semibold text-slate-700 dark:text-slate-300">{student.timeIn}</td>
                    <td className="px-6 py-3.5">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${st.pill}`}>
                        <Icon className="h-3 w-3" /> {student.status}
                      </span>
                    </td>
                    <td className="px-6 py-3.5 text-right">
                      <div className="flex justify-end gap-1">
                        <Button onClick={() => toast.success(`${student.name} → Present`)} variant="ghost" size="icon" className="h-8 w-8 text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 rounded-full"><CheckCircle2 className="h-4 w-4" /></Button>
                        <Button onClick={() => toast(`${student.name} → Late`, { icon: "⏱️" })} variant="ghost" size="icon" className="h-8 w-8 text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-500/10 rounded-full"><Clock className="h-4 w-4" /></Button>
                        <Button onClick={() => toast.error(`${student.name} → Absent`)} variant="ghost" size="icon" className="h-8 w-8 text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-full"><XCircle className="h-4 w-4" /></Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </motion.div>
  );
}
