import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Plus, Download, Mail, Trash2, GraduationCap, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DataTable } from "@/components/tables/DataTable";
import { useData } from "@/context/DataContext";
import toast from "react-hot-toast";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  grade: z.string().min(1, "Grade is required."),
});

export default function Students() {
  const { students, addStudent, removeStudent } = useData();
  const [open, setOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", grade: "" },
  });

  const onSubmit = (values) => {
    addStudent(values);
    form.reset();
    setOpen(false);
    toast.success(`${values.name} enrolled successfully!`);
  };

  const activeCount = students.filter(s => s.status === "Active").length;

  const columns = [
    {
      accessorKey: "name",
      header: "Student Info",
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 ring-2 ring-slate-100 dark:ring-white/10 shadow-sm">
            <AvatarImage src={`https://i.pravatar.cc/150?u=${row.original.name}`} />
            <AvatarFallback className="bg-gradient-to-br from-[#0f3b73] to-[#1e40af] text-white text-sm font-bold">
              {row.original.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-slate-800 dark:text-slate-200">{row.original.name}</p>
            <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
              <Mail className="h-3 w-3" /> {row.original.email}
            </p>
          </div>
        </div>
      )
    },
    {
      accessorKey: "id",
      header: "Student ID",
      cell: ({ row }) => (
        <span className="font-mono text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2 py-1 rounded-md">
          {row.getValue("id")}
        </span>
      )
    },
    {
      accessorKey: "grade",
      header: "Grade",
      cell: ({ row }) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#0f3b73]/10 text-[#0f3b73] dark:bg-[#0f3b73]/25 dark:text-[#60a5fa] border border-[#0f3b73]/15">
          {row.getValue("grade")}
        </span>
      )
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status");
        return (
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
            status === 'Active'
              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400'
              : 'bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-400'
          }`}>
            <span className={`h-1.5 w-1.5 rounded-full ${status === 'Active' ? 'bg-emerald-500' : 'bg-slate-400'}`} />
            {status}
          </span>
        );
      }
    },
    {
      id: "actions",
      header: () => <div className="text-right">Actions</div>,
      cell: ({ row }) => (
        <div className="flex items-center justify-end gap-2">
          <Link to={`/students/${row.original.id}`}>
            <Button variant="outline" size="sm" className="border-[#0f3b73]/20 text-[#0f3b73] dark:text-[#60a5fa] hover:bg-[#0f3b73]/5 dark:hover:bg-[#0f3b73]/10 rounded-full px-4 text-xs font-semibold h-8">
              View Profile
            </Button>
          </Link>
          <Button
            variant="ghost" size="icon"
            onClick={() => { removeStudent(row.original.id); toast.success("Student removed."); }}
            className="h-8 w-8 text-slate-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-full"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </Button>
        </div>
      )
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-6 pb-10"
    >
      {/* ── Hero Header ── */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0f3b73] via-[#1a4f96] to-[#0f3b73] p-6 md:p-8 shadow-xl shadow-[#0f3b73]/20">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-[#36833b]/20 rounded-full blur-3xl translate-y-1/2 pointer-events-none" />
        <div className="relative flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <GraduationCap className="h-5 w-5 text-white/70" />
              <span className="text-white/70 text-sm font-medium">Student Management</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Students Directory</h1>
            <p className="text-white/60 mt-1 text-sm">Manage all enrolled students and their records.</p>
          </div>
          <div className="flex gap-2.5 shrink-0">
            <Button
              size="sm"
              onClick={() => toast.promise(new Promise(r => setTimeout(r, 1000)), { loading: 'Exporting...', success: 'Exported!', error: 'Error' })}
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm rounded-xl"
            >
              <Download className="mr-2 h-3.5 w-3.5" /> Export
            </Button>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button size="sm" className="bg-white text-[#0f3b73] hover:bg-white/90 font-semibold rounded-xl shadow-lg">
                  <Plus className="mr-2 h-3.5 w-3.5" /> Add Student
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[440px] dark:bg-[#1e293b] border-none shadow-2xl rounded-2xl p-0 overflow-hidden">
                <div className="bg-gradient-to-r from-[#0f3b73] to-[#1a5296] p-6">
                  <DialogTitle className="text-white text-xl font-bold">Enroll New Student</DialogTitle>
                  <DialogDescription className="text-white/60 text-sm mt-1">Fill in the student's details below.</DialogDescription>
                </div>
                <div className="p-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name</FormLabel>
                          <FormControl><Input placeholder="e.g. John Doe" {...field} className="dark:bg-[#0f172a] border-slate-200 dark:border-white/10 rounded-xl h-10" /></FormControl>
                          <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</FormLabel>
                          <FormControl><Input placeholder="john@example.com" {...field} className="dark:bg-[#0f172a] border-slate-200 dark:border-white/10 rounded-xl h-10" /></FormControl>
                          <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="grade" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">Grade / Class</FormLabel>
                          <FormControl><Input placeholder="e.g. Grade 10" {...field} className="dark:bg-[#0f172a] border-slate-200 dark:border-white/10 rounded-xl h-10" /></FormControl>
                          <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                      )} />
                      <div className="flex justify-end gap-2 pt-2">
                        <Button type="button" variant="outline" onClick={() => setOpen(false)} className="rounded-xl">Cancel</Button>
                        <Button type="submit" className="bg-gradient-to-r from-[#0f3b73] to-[#36833b] text-white rounded-xl font-semibold shadow-md">Enroll Student</Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        {/* Quick stats */}
        <div className="relative mt-6 flex flex-wrap gap-3">
          {[
            { label: "Total Students", value: students.length, icon: Users },
            { label: "Active", value: activeCount, icon: TrendingUp },
            { label: "Inactive", value: students.length - activeCount, icon: GraduationCap },
          ].map((s, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-white/10 flex items-center gap-2.5">
              <s.icon className="h-4 w-4 text-white/60" />
              <div>
                <p className="text-white/60 text-[10px] leading-none mb-0.5">{s.label}</p>
                <p className="text-white font-bold text-lg leading-none">{s.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Table ── */}
      <div className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-lg border border-slate-100 dark:border-white/5 overflow-hidden">
        <DataTable
          columns={columns}
          data={students}
          searchKey="name"
          searchPlaceholder="Search students by name or email..."
        />
      </div>
    </motion.div>
  );
}
