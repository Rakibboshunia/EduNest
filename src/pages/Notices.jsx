import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Plus, Megaphone, Calendar, MoreHorizontal, Trash2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useData } from "@/context/DataContext";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import toast from "react-hot-toast";
import { useLanguage } from "@/context/LanguageContext";

const formSchema = z.object({
  title: z.string().min(2, "Title is required"),
  target: z.string().min(2, "Target audience is required"),
  type: z.string().min(1, "Type is required"),
  priority: z.enum(["High", "Normal", "Low"]),
});

const typeIcons = {
  Event: Megaphone,
  Academic: Bell,
  General: Bell,
  Meeting: Bell,
};

const priorityConfig = {
  High: { pill: "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400", bar: "bg-red-500" },
  Normal: { pill: "bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] dark:bg-[var(--brand-primary)]/25 dark:text-[#60a5fa]", bar: "bg-[var(--brand-primary)]" },
  Low: { pill: "bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-400", bar: "bg-slate-400" },
};

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.07 } } };
const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.3 } } };

export default function Notices() {
  const { notices, addNotice } = useData();
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { title: "", target: "", type: "General", priority: "Normal" },
  });

  const onSubmit = (values) => {
    addNotice(values);
    form.reset({ title: "", target: "", type: "General", priority: "Normal" });
    setOpen(false);
    toast.success("Notice broadcasted!");
  };

  const highCount = notices.filter(n => n.priority === "High").length;
  const eventCount = notices.filter(n => n.type === "Event").length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-6 pb-10"
    >
      {/* ── Hero Header ── */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-700 via-[var(--brand-primary)] to-[var(--brand-secondary)] p-6 md:p-8 shadow-xl shadow-indigo-900/20">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="relative flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Bell className="h-5 w-5 text-white/70" />
              <span className="text-white/70 text-sm font-medium">{t("noticeBoard")}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{t("noticeBoard")}</h1>
            <p className="text-white/60 mt-1 text-sm">{t("noticeBoard")}</p>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="bg-white text-indigo-700 hover:bg-white/90 font-semibold rounded-xl shadow-lg shrink-0">
                <Plus className="mr-2 h-3.5 w-3.5" /> {t("addNotice")}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[440px] dark:bg-[#1e293b] border-none shadow-2xl rounded-2xl p-0 overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-700 to-[var(--brand-primary)] p-6">
                <DialogTitle className="text-white text-xl font-bold">{t("addNotice")}</DialogTitle>
                <DialogDescription className="text-white/60 text-sm mt-1">{t("noticeBoard")}</DialogDescription>
              </div>
              <div className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField control={form.control} name="title" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">Notice Title</FormLabel>
                        <FormControl><Input placeholder="Annual Sports Day" {...field} className="dark:bg-[#0f172a] border-slate-200 dark:border-white/10 rounded-xl h-10" /></FormControl>
                        <FormMessage className="text-red-400 text-xs" />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="target" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">Target Audience</FormLabel>
                        <FormControl><Input placeholder="All Students" {...field} className="dark:bg-[#0f172a] border-slate-200 dark:border-white/10 rounded-xl h-10" /></FormControl>
                        <FormMessage className="text-red-400 text-xs" />
                      </FormItem>
                    )} />
                    <div className="grid grid-cols-2 gap-4">
                      <FormField control={form.control} name="type" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl><SelectTrigger className="dark:bg-[#0f172a] dark:border-white/10 rounded-xl h-10"><SelectValue /></SelectTrigger></FormControl>
                            <SelectContent><SelectItem value="Event">Event</SelectItem><SelectItem value="Academic">Academic</SelectItem><SelectItem value="General">General</SelectItem><SelectItem value="Meeting">Meeting</SelectItem></SelectContent>
                          </Select>
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="priority" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">Priority</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl><SelectTrigger className="dark:bg-[#0f172a] dark:border-white/10 rounded-xl h-10"><SelectValue /></SelectTrigger></FormControl>
                            <SelectContent><SelectItem value="High">High</SelectItem><SelectItem value="Normal">Normal</SelectItem><SelectItem value="Low">Low</SelectItem></SelectContent>
                          </Select>
                        </FormItem>
                      )} />
                    </div>
                    <div className="flex justify-end gap-2 pt-2">
                      <Button type="button" variant="outline" onClick={() => setOpen(false)} className="rounded-xl">{t("cancel")}</Button>
                      <Button type="submit" className="bg-gradient-to-r from-indigo-700 to-[var(--brand-primary)] text-white rounded-xl font-semibold shadow-md">
                        <Send className="mr-2 h-3.5 w-3.5" /> Broadcast
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        {/* Quick stats */}
        <div className="relative mt-6 flex flex-wrap gap-3">
          {[
            { label: t("noticeBoard"), value: notices.length },
            { label: t("feeOverdue"), value: highCount },
            { label: t("upcomingEvents"), value: eventCount },
          ].map((s, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-white/10">
              <p className="text-white/60 text-[10px] leading-none mb-0.5">{s.label}</p>
              <p className="text-white font-bold text-lg leading-none">{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Notices List ── */}
      {notices.length === 0 ? (
        <div className="text-center py-16 text-slate-400 dark:text-slate-500">
          <Bell className="h-12 w-12 mx-auto mb-3 opacity-30" />
          <p className="font-medium">No notices yet</p>
          <p className="text-sm mt-1">Create your first announcement above.</p>
        </div>
      ) : (
        <motion.div variants={container} initial="hidden" animate="show" className="grid gap-4">
          {notices.map((notice, i) => {
            const pCfg = priorityConfig[notice.priority] || priorityConfig.Normal;
            const Icon = typeIcons[notice.type] || Bell;
            return (
              <motion.div key={i} variants={item}>
                <Card className="group border-none shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 dark:bg-[#1e293b] overflow-hidden relative">
                  {/* Priority side bar */}
                  <div className={`absolute top-0 left-0 w-1 h-full ${pCfg.bar}`} />
                  <CardContent className="pl-6 pr-5 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 ${
                        notice.type === "Event"
                          ? "bg-[var(--brand-secondary)]/10 text-[var(--brand-secondary)] dark:bg-[var(--brand-secondary)]/20"
                          : "bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] dark:bg-[var(--brand-primary)]/20 dark:text-[#60a5fa]"
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="font-bold text-slate-800 dark:text-white text-base">{notice.title}</h3>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${pCfg.pill}`}>
                            {notice.priority}
                          </span>
                          <Badge variant="outline" className="text-[10px] border-slate-200 dark:border-white/10 text-slate-500">
                            {notice.type}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-slate-400">
                          <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {notice.date}</span>
                          <span>To: <span className="font-semibold text-slate-600 dark:text-slate-300">{notice.target}</span></span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <Button onClick={() => toast.success("Notice resent!")} variant="ghost" size="icon" className="h-8 w-8 text-slate-300 hover:text-[var(--brand-primary)] dark:hover:text-white rounded-full">
                        <Send className="h-3.5 w-3.5" />
                      </Button>
                      <Button onClick={() => toast.error("Notice deleted.")} variant="ghost" size="icon" className="h-8 w-8 text-slate-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-full">
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                      <Button onClick={() => toast("Notice options.")} variant="ghost" size="icon" className="h-8 w-8 text-slate-300 hover:text-slate-600 dark:hover:text-white rounded-full">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </motion.div>
  );
}
