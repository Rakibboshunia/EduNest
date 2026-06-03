import { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, Download, DollarSign, TrendingUp, AlertCircle, Printer, Plus } from "lucide-react";
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  student: z.string().min(2, "Student name required"),
  amount: z.string().min(1, "Amount required"),
  status: z.enum(["Paid", "Pending", "Overdue"]),
});

export default function Fees() {
  const { fees, addFee } = useData();
  const [open, setOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { student: "", amount: "$", status: "Paid" },
  });

  const onSubmit = (values) => {
    addFee(values);
    form.reset({ student: "", amount: "$", status: "Paid" });
    setOpen(false);
    toast.success("Payment recorded successfully!");
  };

  const columns = [
    {
      accessorKey: "id",
      header: "Invoice ID",
      cell: ({ row }) => <span className="font-mono text-xs font-semibold text-[var(--brand-primary)] dark:text-[#60a5fa] bg-[var(--brand-primary)]/10 dark:bg-[#60a5fa]/10 px-2 py-1 rounded-md">{row.getValue("id")}</span>
    },
    {
      accessorKey: "student",
      header: "Student",
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8 ring-1 ring-slate-200 dark:ring-white/10">
            <AvatarImage src={`https://i.pravatar.cc/150?u=${row.getValue("student")}`} />
            <AvatarFallback className="bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-primary-light)] text-white text-xs font-bold">
              {row.getValue("student").charAt(0)}
            </AvatarFallback>
          </Avatar>
          <span className="font-semibold text-slate-800 dark:text-slate-200">{row.getValue("student")}</span>
        </div>
      )
    },
    {
      accessorKey: "date",
      header: "Date",
      cell: ({ row }) => <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{row.getValue("date")}</span>
    },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: ({ row }) => <span className="font-bold text-slate-800 dark:text-slate-200">{row.getValue("amount")}</span>
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status");
        return (
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
            status === 'Paid' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400' :
            status === 'Pending' ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400' :
            'bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400'
          }`}>
            <span className={`h-1.5 w-1.5 rounded-full ${
              status === 'Paid' ? 'bg-emerald-500' :
              status === 'Pending' ? 'bg-amber-500' : 'bg-red-500'
            }`} />
            {status}
          </span>
        );
      }
    },
    {
      id: "actions",
      header: () => <div className="text-right">Action</div>,
      cell: ({ row }) => (
        <div className="text-right">
          <Button onClick={() => setSelectedInvoice(row.original)} variant="outline" size="sm" className="border-[var(--brand-primary)]/20 text-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/5 dark:text-[#60a5fa] dark:hover:bg-[var(--brand-primary)]/20 rounded-full px-4 text-xs font-semibold h-8">
            View Invoice
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
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--brand-primary)] via-[#1a4f96] to-[var(--brand-primary)] p-6 md:p-8 shadow-xl shadow-[var(--brand-primary)]/20">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-[var(--brand-secondary)]/20 rounded-full blur-3xl translate-y-1/2 pointer-events-none" />
        <div className="relative flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <DollarSign className="h-5 w-5 text-white/70" />
              <span className="text-white/70 text-sm font-medium">Financial Operations</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Fee Management</h1>
            <p className="text-white/60 mt-1 text-sm">Track revenue, collect payments, and manage invoices.</p>
          </div>
          <div className="flex flex-wrap gap-2.5 shrink-0">
            <Button
              size="sm"
              onClick={() => toast.promise(new Promise(r => setTimeout(r, 1000)), { loading: 'Generating...', success: 'Report Downloaded!', error: 'Error' })}
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm rounded-xl"
            >
              <Download className="mr-2 h-3.5 w-3.5" /> Report
            </Button>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button size="sm" className="bg-white text-[var(--brand-primary)] hover:bg-white/90 font-semibold rounded-xl shadow-lg">
                  <Plus className="mr-2 h-3.5 w-3.5" /> Collect Fee
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[440px] dark:bg-[#1e293b] border-none shadow-2xl rounded-2xl p-0 overflow-hidden">
                <div className="bg-gradient-to-r from-[var(--brand-primary)] to-[#1a5296] p-6">
                  <DialogTitle className="text-white text-xl font-bold">Collect Payment</DialogTitle>
                  <DialogDescription className="text-white/60 text-sm mt-1">Record a new fee payment.</DialogDescription>
                </div>
                <div className="p-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField control={form.control} name="student" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">Student Name</FormLabel>
                          <FormControl><Input placeholder="John Doe" {...field} className="dark:bg-[#0f172a] border-slate-200 dark:border-white/10 rounded-xl h-10" /></FormControl>
                          <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="amount" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">Amount</FormLabel>
                          <FormControl><Input placeholder="$0.00" {...field} className="dark:bg-[#0f172a] border-slate-200 dark:border-white/10 rounded-xl h-10" /></FormControl>
                          <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="status" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">Status</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl><SelectTrigger className="dark:bg-[#0f172a] dark:border-white/10 rounded-xl h-10"><SelectValue /></SelectTrigger></FormControl>
                            <SelectContent>
                              <SelectItem value="Paid">Paid</SelectItem>
                              <SelectItem value="Pending">Pending</SelectItem>
                              <SelectItem value="Overdue">Overdue</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                      )} />
                      <div className="flex justify-end gap-2 pt-2">
                        <Button type="button" variant="outline" onClick={() => setOpen(false)} className="rounded-xl">Cancel</Button>
                        <Button type="submit" className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] text-white rounded-xl shadow-md font-semibold">Record Payment</Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Quick stats */}
        <div className="relative mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { label: "Total Revenue (YTD)", value: "$452,310", sub: "+12% growth", icon: TrendingUp },
            { label: "Expected This Month", value: "$85,400", sub: "On track", icon: DollarSign },
            { label: "Overdue Payments", value: "$12,500", sub: "Requires action", icon: AlertCircle, alert: true },
          ].map((s, i) => (
            <div key={i} className={`backdrop-blur-sm rounded-xl px-4 py-3 border ${s.alert ? 'bg-red-500/10 border-red-500/20' : 'bg-white/10 border-white/10'}`}>
              <div className="flex items-center justify-between mb-1">
                <p className={`text-xs ${s.alert ? 'text-red-200' : 'text-white/60'}`}>{s.label}</p>
                <s.icon className={`h-3.5 w-3.5 ${s.alert ? 'text-red-300' : 'text-white/40'}`} />
              </div>
              <p className={`font-bold text-xl leading-none ${s.alert ? 'text-red-100' : 'text-white'}`}>{s.value}</p>
              <p className={`text-[10px] mt-1 ${s.alert ? 'text-red-300' : 'text-white/40'}`}>{s.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Table ── */}
      <div className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-lg border border-slate-100 dark:border-white/5 overflow-hidden">
        <div className="p-5 border-b border-slate-100 dark:border-white/5">
          <h2 className="text-lg font-bold text-[var(--brand-primary)] dark:text-white">Recent Transactions</h2>
        </div>
        <DataTable
          columns={columns}
          data={fees}
          searchKey="student"
          searchPlaceholder="Search invoices by student name..."
        />
      </div>

      {/* ── Invoice Modal ── */}
      <Dialog open={!!selectedInvoice} onOpenChange={() => setSelectedInvoice(null)}>
        <DialogContent className="sm:max-w-[540px] p-0 dark:bg-[#1e293b] border-none overflow-hidden shadow-2xl rounded-2xl">
          <div className="bg-slate-50 dark:bg-black/20 p-6 border-b border-slate-100 dark:border-white/5 flex flex-col sm:flex-row justify-between items-start gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="EduNest" className="h-8 w-auto object-contain" />
                <span className="font-extrabold text-[var(--brand-primary)] dark:text-white">Edu<span className="text-[var(--brand-secondary)]">Nest</span></span>
              </div>
              <h2 className="text-2xl font-black tracking-tight text-slate-800 dark:text-white mt-1">INVOICE</h2>
              <p className="text-xs text-slate-500 font-mono bg-white dark:bg-black/20 px-2 py-0.5 rounded self-start border border-slate-200 dark:border-white/10">{selectedInvoice?.id}</p>
            </div>
            <div className="sm:text-right flex flex-col sm:items-end">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                selectedInvoice?.status === 'Paid' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400' :
                selectedInvoice?.status === 'Pending' ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400' :
                'bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400'
              }`}>
                <span className={`h-1.5 w-1.5 rounded-full ${
                  selectedInvoice?.status === 'Paid' ? 'bg-emerald-500' :
                  selectedInvoice?.status === 'Pending' ? 'bg-amber-500' : 'bg-red-500'
                }`} />
                {selectedInvoice?.status}
              </span>
              <p className="text-xs text-slate-500 mt-3 font-semibold uppercase tracking-wider">Date Issued</p>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{selectedInvoice?.date}</p>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-100 dark:border-white/5">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Billed To</p>
              <h3 className="text-lg font-bold text-[var(--brand-primary)] dark:text-white">{selectedInvoice?.student}</h3>
              <div className="flex gap-4 mt-2">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase">Student ID</p>
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 font-mono">STU-8821</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase">Class</p>
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Grade 10</p>
                </div>
              </div>
            </div>

            <div className="border border-slate-100 dark:border-white/10 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 dark:bg-white/5 border-b border-slate-100 dark:border-white/5">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Description</th>
                    <th className="px-4 py-3 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                  <tr>
                    <td className="px-4 py-3.5 text-slate-800 dark:text-slate-200 font-medium">Tuition Fee - Fall Semester</td>
                    <td className="px-4 py-3.5 text-right font-bold text-slate-800 dark:text-slate-200">{selectedInvoice?.amount}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3.5 text-slate-800 dark:text-slate-200 font-medium">Library & Lab Fee</td>
                    <td className="px-4 py-3.5 text-right font-bold text-slate-800 dark:text-slate-200">$150.00</td>
                  </tr>
                </tbody>
                <tfoot className="bg-slate-50 dark:bg-white/5">
                  <tr>
                    <td className="px-4 py-4 font-bold text-slate-500 text-right uppercase tracking-wider text-xs">Total Amount</td>
                    <td className="px-4 py-4 font-black text-[var(--brand-primary)] dark:text-white text-right text-xl">{selectedInvoice?.amount}</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Button variant="outline" className="rounded-xl border-slate-200 dark:border-white/10 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 font-semibold" onClick={() => setSelectedInvoice(null)}>Close</Button>
              <Button onClick={() => toast.promise(new Promise(r => setTimeout(r, 1000)), { loading: 'Printing...', success: 'Sent to Printer!', error: 'Error' })} className="rounded-xl bg-gradient-to-r from-[var(--brand-primary)] to-[#1a5296] hover:opacity-90 text-white font-semibold shadow-md">
                <Printer className="mr-2 h-4 w-4" /> Print Invoice
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
