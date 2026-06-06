import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  Plus, 
  Search,
  Calendar,
  Clock,
  MoreVertical,
  Download,
  Printer
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import toast from "react-hot-toast";
import { useLanguage } from "@/context/LanguageContext";

import { useData } from "@/context/DataContext";

export default function Exams() {
  const { t } = useLanguage();
  const { exams } = useData();
  const [showPreview, setShowPreview] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6 pb-8"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-[#0f172a] p-6 rounded-2xl border shadow-sm">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[var(--brand-primary)] dark:text-white">{t("examManagement")}</h1>
          <p className="text-muted-foreground mt-1">{t("examSchedule")}</p>
        </div>
        <div className="flex gap-3">
          <Button onClick={() => toast.success("Exam scheduled successfully!")} className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] hover:opacity-90 text-white border-0 shadow-md shadow-[var(--brand-primary)]/20">
            <Plus className="mr-2 h-4 w-4" /> {t("addExam")}
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-[var(--brand-primary)] dark:text-white">{t("examSchedule")}</h2>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search exams..." className="pl-9 dark:bg-[#1e293b] border-white/10" />
            </div>
          </div>
          
          <div className="grid gap-4">
            {exams.map((exam, i) => (
              <Card key={i} className="border shadow-sm dark:bg-[#1e293b] group hover:shadow-md transition-shadow">
                <CardContent className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[var(--brand-primary)]/10 dark:bg-[var(--brand-primary)]/30 flex items-center justify-center text-[var(--brand-primary)] dark:text-[#60a5fa]">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--brand-primary)] dark:text-white text-lg">{exam.title}</h3>
                      <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {exam.date}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {exam.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{exam.grade}</span>
                      <span className="text-xs text-muted-foreground">{exam.type}</span>
                    </div>
                    <Button onClick={() => toast("Exam details opened.")} variant="ghost" size="icon" className="text-slate-400 hover:text-[var(--brand-primary)] dark:hover:text-white">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold text-[var(--brand-primary)] dark:text-white">{t("quickActions")}</h2>
          <Card className="border shadow-sm dark:bg-[#1e293b]">
            <CardContent className="p-4 flex flex-col gap-2">
              <Button onClick={() => toast.promise(new Promise(r => setTimeout(r, 1000)), { loading: 'Publishing...', success: 'Results Published!', error: 'Error' })} variant="outline" className="justify-start border-white/10 dark:text-white dark:bg-[#0f172a]">Publish Results</Button>
              <Button onClick={() => setShowPreview(true)} variant="outline" className="justify-start border-white/10 dark:text-white dark:bg-[#0f172a]">Print Report Cards</Button>
              <Button onClick={() => toast.promise(new Promise(r => setTimeout(r, 1000)), { loading: 'Calculating...', success: 'List Generated!', error: 'Error' })} variant="outline" className="justify-start border-white/10 dark:text-white dark:bg-[#0f172a]">Generate Topper List</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent className="sm:max-w-[700px] p-0 dark:bg-[#1e293b] border-none overflow-hidden h-[80vh] flex flex-col">
          <div className="p-4 bg-slate-50 dark:bg-black/20 border-b border-slate-100 dark:border-white/5 flex justify-between items-center shrink-0">
            <h2 className="text-lg font-bold text-[var(--brand-primary)] dark:text-white">Report Card Preview</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => setShowPreview(false)}>{t("cancel")}</Button>
              <Button size="sm" onClick={() => { setShowPreview(false); toast.success("Batch print started!"); }} className="bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] text-white">
                <Printer className="mr-2 h-4 w-4" /> Print All (124)
              </Button>
            </div>
          </div>
          
          <div className="p-8 overflow-y-auto bg-slate-100 dark:bg-[#0f172a] flex-1 flex flex-col items-center gap-6">
            {/* Dummy Report 1 */}
            <div className="bg-white dark:bg-[#1e293b] w-full max-w-xl p-8 shadow-sm rounded border border-slate-200 dark:border-white/10 relative">
              <div className="text-center mb-6">
                <img src="/logo.png" alt="EduNest" className="h-16 w-auto mx-auto mb-2 drop-shadow-sm" />
                <h1 className="text-2xl font-bold text-[var(--brand-primary)] dark:text-white uppercase tracking-widest mt-2">EduNest Academy</h1>
                <p className="text-sm text-muted-foreground mt-1">End of Term Progress Report</p>
                <div className="h-1 w-20 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] mx-auto mt-4"></div>
              </div>
              
              <div className="flex justify-between items-end mb-6 pb-4 border-b border-slate-100 dark:border-white/10">
                <div>
                  <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">Alex Johnson</h3>
                  <p className="text-sm text-slate-500">Grade 10 • ID: STU-1102</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Overall GPA</p>
                  <p className="text-3xl font-bold text-[var(--brand-primary)] dark:text-white">3.92</p>
                </div>
              </div>
              
              <table className="w-full text-sm mb-6">
                <thead className="bg-slate-50 dark:bg-white/5">
                  <tr>
                    <th className="px-3 py-2 text-left font-medium text-muted-foreground">Subject</th>
                    <th className="px-3 py-2 text-center font-medium text-muted-foreground">Score</th>
                    <th className="px-3 py-2 text-right font-medium text-muted-foreground">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                  <tr><td className="px-3 py-2 font-medium">Mathematics</td><td className="px-3 py-2 text-center">98</td><td className="px-3 py-2 text-right font-bold text-[var(--brand-secondary)]">A+</td></tr>
                  <tr><td className="px-3 py-2 font-medium">Physics</td><td className="px-3 py-2 text-center">92</td><td className="px-3 py-2 text-right font-bold text-[var(--brand-secondary)]">A</td></tr>
                  <tr><td className="px-3 py-2 font-medium">Literature</td><td className="px-3 py-2 text-center">89</td><td className="px-3 py-2 text-right font-bold text-[var(--brand-secondary)]">B+</td></tr>
                </tbody>
              </table>

              <div className="mt-8 text-xs text-center text-slate-400">
                Page 1 of 124
              </div>
            </div>
            
            {/* Dummy Report 2 (Faded/Cutoff) */}
            <div className="bg-white/50 dark:bg-[#1e293b]/50 w-full max-w-xl p-8 shadow-sm rounded border border-slate-200/50 dark:border-white/5 relative opacity-50">
              <div className="text-center mb-6">
                <img src="/logo.png" alt="EduNest" className="h-16 w-auto mx-auto mb-2 drop-shadow-sm opacity-70" />
                <h1 className="text-2xl font-bold text-[var(--brand-primary)] dark:text-white uppercase tracking-widest mt-2">EduNest Academy</h1>
              </div>
            </div>

          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
