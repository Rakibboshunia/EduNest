import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Plus, Search, Mail, Phone, BookOpen, MoreHorizontal, Users, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { useData } from "@/context/DataContext";
import toast from "react-hot-toast";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name is required."),
  subject: z.string().min(2, "Subject is required."),
  email: z.string().email("Invalid email."),
  phone: z.string().min(5, "Phone number is required."),
});

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.07 } } };
const cardVariant = { hidden: { opacity: 0, y: 16, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } } };

export default function Teachers() {
  const { teachers, addTeacher, removeTeacher } = useData();
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", subject: "", email: "", phone: "" },
  });

  const onSubmit = (values) => {
    addTeacher(values);
    form.reset();
    setOpen(false);
    toast.success(`${values.name} added to staff!`);
  };

  const filtered = teachers.filter(t =>
    t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.subject?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-6 pb-10"
    >
      {/* ── Hero Header ── */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--brand-secondary)] via-[#2d7a34] to-[var(--brand-primary)] p-6 md:p-8 shadow-xl shadow-[var(--brand-secondary)]/20">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-[var(--brand-primary)]/30 rounded-full blur-3xl translate-y-1/2 pointer-events-none" />
        <div className="relative flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Users className="h-5 w-5 text-white/70" />
              <span className="text-white/70 text-sm font-medium">Staff Management</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Teachers Directory</h1>
            <p className="text-white/60 mt-1 text-sm">Manage teaching staff, assignments and schedules.</p>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="bg-white text-[var(--brand-secondary)] hover:bg-white/90 font-semibold rounded-xl shadow-lg shrink-0">
                <Plus className="mr-2 h-3.5 w-3.5" /> Add Teacher
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[440px] dark:bg-[#1e293b] border-none shadow-2xl rounded-2xl p-0 overflow-hidden">
              <div className="bg-gradient-to-r from-[var(--brand-secondary)] to-[#2d7a34] p-6">
                <DialogTitle className="text-white text-xl font-bold">Add New Teacher</DialogTitle>
                <DialogDescription className="text-white/60 text-sm mt-1">Enter the staff member's details.</DialogDescription>
              </div>
              <div className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    {[
                      { name: "name", label: "Full Name", placeholder: "Dr. Sarah Jenkins" },
                      { name: "subject", label: "Subject", placeholder: "Mathematics" },
                      { name: "email", label: "Email", placeholder: "teacher@edunest.com" },
                      { name: "phone", label: "Phone", placeholder: "+1 555-0000" },
                    ].map(f => (
                      <FormField key={f.name} control={form.control} name={f.name} render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">{f.label}</FormLabel>
                          <FormControl><Input placeholder={f.placeholder} {...field} className="dark:bg-[#0f172a] border-slate-200 dark:border-white/10 rounded-xl h-10" /></FormControl>
                          <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                      )} />
                    ))}
                    <div className="flex justify-end gap-2 pt-2">
                      <Button type="button" variant="outline" onClick={() => setOpen(false)} className="rounded-xl">Cancel</Button>
                      <Button type="submit" className="bg-gradient-to-r from-[var(--brand-secondary)] to-[var(--brand-primary)] text-white rounded-xl font-semibold shadow-md">Save Teacher</Button>
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
            { label: "Total Staff", value: teachers.length },
            { label: "Departments", value: [...new Set(teachers.map(t => t.subject?.split(' ')[0]))].length },
            { label: "Active Classes", value: teachers.reduce((a, t) => a + (t.classes || 0), 0) },
          ].map((s, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-white/10">
              <p className="text-white/60 text-[10px] leading-none mb-0.5">{s.label}</p>
              <p className="text-white font-bold text-lg leading-none">{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <Input
          placeholder="Search by name or subject..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-9 h-10 bg-white dark:bg-[#1e293b] border-slate-200 dark:border-white/10 rounded-xl shadow-sm"
        />
      </div>

      {/* Cards Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-slate-400 dark:text-slate-500">
          <Users className="h-12 w-12 mx-auto mb-3 opacity-30" />
          <p className="font-medium">No teachers found</p>
          <p className="text-sm mt-1">Try a different search term</p>
        </div>
      ) : (
        <motion.div variants={container} initial="hidden" animate="show" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((teacher) => (
            <motion.div key={teacher.id} variants={cardVariant}>
              <Card className="group overflow-hidden border-none shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 dark:bg-[#1e293b] relative">
                {/* Color accent top bar */}
                <div className="h-1 w-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)]" />
                {/* Glow blob */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--brand-primary)]/15 to-[var(--brand-secondary)]/15 blur-2xl rounded-full -mr-8 -mt-8 pointer-events-none group-hover:opacity-70 transition-opacity" />

                <CardContent className="p-5 relative">
                  <div className="flex items-start justify-between mb-4">
                    <Avatar className="h-14 w-14 ring-2 ring-white dark:ring-[#1e293b] shadow-lg">
                      <AvatarImage src={`https://i.pravatar.cc/150?u=${teacher.name}`} />
                      <AvatarFallback className="bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-primary-light)] text-white text-lg font-bold">
                        {teacher.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  <div className="flex gap-1">
                    <Button
                      variant="ghost" size="icon"
                      onClick={() => { removeTeacher(teacher.id); toast.success(`${teacher.name} removed.`); }}
                      className="h-8 w-8 text-slate-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-full"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-300 hover:text-slate-600 dark:hover:text-white rounded-full">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-800 dark:text-white mb-0.5 truncate">{teacher.name}</h3>
                  <p className="text-sm font-semibold text-[var(--brand-secondary)] dark:text-[#4ade80] flex items-center gap-1.5 mb-4">
                    <BookOpen className="h-3.5 w-3.5" /> {teacher.subject}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-white/5">
                    <div className="flex items-center gap-2.5 text-sm text-slate-500 dark:text-slate-400">
                      <Mail className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                      <span className="truncate text-xs">{teacher.email}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-slate-500 dark:text-slate-400">
                      <Phone className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                      <span className="text-xs">{teacher.phone}</span>
                    </div>
                  </div>
                </CardContent>

                <div className="px-5 py-3.5 bg-slate-50 dark:bg-black/20 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-[var(--brand-primary)] dark:text-white">{teacher.classes}</span>
                    <span className="text-xs text-slate-400 ml-1.5">Active Classes</span>
                  </div>
                  <Link to={`/teachers/${teacher.id}`}>
                    <Button variant="outline" size="sm" className="border-[var(--brand-primary)]/20 text-[var(--brand-primary)] dark:text-[#60a5fa] hover:bg-[var(--brand-primary)]/5 rounded-full px-4 text-xs font-semibold h-8">
                      View Profile
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
