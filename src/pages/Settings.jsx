import { motion } from "framer-motion";
import {
  User, Bell, Shield, Palette, Globe, Save, CheckCircle2,
  Camera, Key, Moon, Sun, Languages, LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";

const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().optional(),
});

const securitySchema = z.object({
  currentPassword: z.string().min(6, "Current password must be at least 6 characters."),
  newPassword: z.string().min(6, "New password must be at least 6 characters."),
  confirmPassword: z.string().min(6, "Please confirm your password."),
}).refine((d) => d.newPassword === d.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Shield },
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "language", label: "Language & Region", icon: Globe },
];

const notifSettings = [
  { label: "New Student Enrollment", desc: "Get notified when a new student registers.", enabled: true },
  { label: "Fee Overdue Alerts", desc: "Alerts for students with overdue payments.", enabled: true },
  { label: "Exam Results Published", desc: "Notify when exam results are available.", enabled: false },
  { label: "Weekly Summary Report", desc: "Receive a weekly performance digest.", enabled: true },
];

export default function Settings() {
  const { user, updateUser, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState("profile");
  const [notifs, setNotifs] = useState(notifSettings);

  const profileForm = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: { name: user?.name || "", email: user?.email || "", phone: user?.phone || "" },
  });

  const securityForm = useForm({
    resolver: zodResolver(securitySchema),
    defaultValues: { currentPassword: "", newPassword: "", confirmPassword: "" },
  });

  const onProfileSubmit = (values) => {
    updateUser(values);
    toast.success("Profile updated successfully!");
  };

  const onSecuritySubmit = () => {
    securityForm.reset();
    toast.success("Password updated successfully!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-6 pb-10"
    >
      {/* ── Hero Header ── */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 via-slate-700 to-[#0f3b73] p-6 md:p-8 shadow-xl">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="relative flex items-center gap-5">
          <div className="relative">
            <Avatar className="h-16 w-16 ring-4 ring-white/20 shadow-xl">
              <AvatarImage src={`https://i.pravatar.cc/150?u=${user?.email}`} />
              <AvatarFallback className="bg-gradient-to-br from-[#0f3b73] to-[#36833b] text-white text-2xl font-bold">
                {user?.name?.charAt(0) || "A"}
              </AvatarFallback>
            </Avatar>
            <button className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-white shadow-md flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
              <Camera className="h-3 w-3" />
            </button>
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">{user?.name || "Admin User"}</h1>
            <p className="text-white/60 text-sm mt-0.5">{user?.email}</p>
            <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/15 text-white/80">
              <CheckCircle2 className="h-3 w-3 text-emerald-400" /> {user?.role || "Administrator"}
            </span>
          </div>
        </div>
      </div>

      {/* ── Layout ── */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Tabs */}
        <div className="w-full md:w-56 shrink-0">
          <Card className="border-none shadow-lg dark:bg-[#1e293b] dark:border dark:border-white/5 p-2">
            <div className="space-y-0.5">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-[#0f3b73] to-[#1a5296] text-white shadow-md shadow-[#0f3b73]/25"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <tab.icon className="h-4 w-4 shrink-0" />
                  {tab.label}
                </button>
              ))}
              <div className="pt-2 mt-2 border-t border-slate-100 dark:border-white/5">
                <button
                  onClick={logout}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all"
                >
                  <LogOut className="h-4 w-4" /> Sign Out
                </button>
              </div>
            </div>
          </Card>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {activeTab === "profile" && (
            <Card className="border-none shadow-lg dark:bg-[#1e293b] dark:border dark:border-white/5">
              <CardHeader className="border-b border-slate-100 dark:border-white/5 pb-5">
                <CardTitle className="text-lg text-slate-800 dark:text-white">Profile Information</CardTitle>
                <CardDescription>Update your account's profile information and email address.</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <Form {...profileForm}>
                  <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-5">
                    <div className="grid gap-4 md:grid-cols-2">
                      <FormField control={profileForm.control} name="name" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name</FormLabel>
                          <FormControl><Input placeholder="John Doe" {...field} className="dark:bg-[#0f172a] border-slate-200 dark:border-white/10 rounded-xl h-10" /></FormControl>
                          <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                      )} />
                      <FormField control={profileForm.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</FormLabel>
                          <FormControl><Input placeholder="john@edunest.com" {...field} className="dark:bg-[#0f172a] border-slate-200 dark:border-white/10 rounded-xl h-10" /></FormControl>
                          <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                      )} />
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Role</label>
                        <div className="flex items-center gap-2 h-10 px-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20">
                          <CheckCircle2 className="h-4 w-4 text-[#36833b]" />
                          <span className="text-sm text-slate-500 capitalize">{user?.role || "Administrator"}</span>
                        </div>
                      </div>
                      <FormField control={profileForm.control} name="phone" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">Phone Number</FormLabel>
                          <FormControl><Input placeholder="+1 (555) 000-0000" {...field} className="dark:bg-[#0f172a] border-slate-200 dark:border-white/10 rounded-xl h-10" /></FormControl>
                          <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                      )} />
                    </div>
                    <Button type="submit" className="bg-gradient-to-r from-[#0f3b73] to-[#36833b] text-white rounded-xl shadow-md font-semibold">
                      <Save className="mr-2 h-4 w-4" /> Save Changes
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}

          {activeTab === "notifications" && (
            <Card className="border-none shadow-lg dark:bg-[#1e293b] dark:border dark:border-white/5">
              <CardHeader className="border-b border-slate-100 dark:border-white/5 pb-5">
                <CardTitle className="text-lg text-slate-800 dark:text-white">Notification Preferences</CardTitle>
                <CardDescription>Choose which alerts and updates you want to receive.</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 divide-y divide-slate-100 dark:divide-white/5">
                {notifs.map((n, i) => (
                  <div key={i} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                    <div className="pr-4">
                      <p className="font-semibold text-sm text-slate-800 dark:text-slate-200">{n.label}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{n.desc}</p>
                    </div>
                    <button
                      onClick={() => {
                        setNotifs(prev => prev.map((item, j) => j === i ? { ...item, enabled: !item.enabled } : item));
                        toast.success(`${n.label} ${!n.enabled ? "enabled" : "disabled"}`);
                      }}
                      className={`relative inline-flex h-6 w-11 shrink-0 rounded-full border-2 border-transparent transition-colors ${
                        n.enabled ? "bg-[#0f3b73]" : "bg-slate-200 dark:bg-white/10"
                      }`}
                    >
                      <span className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-md transform transition-transform ${n.enabled ? "translate-x-5" : "translate-x-0"}`} />
                    </button>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {activeTab === "security" && (
            <Card className="border-none shadow-lg dark:bg-[#1e293b] dark:border dark:border-white/5">
              <CardHeader className="border-b border-slate-100 dark:border-white/5 pb-5">
                <CardTitle className="text-lg text-slate-800 dark:text-white flex items-center gap-2">
                  <Key className="h-5 w-5 text-[#0f3b73]" /> Security Settings
                </CardTitle>
                <CardDescription>Update your password to keep your account secure.</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <Form {...securityForm}>
                  <form onSubmit={securityForm.handleSubmit(onSecuritySubmit)} className="space-y-4 max-w-md">
                    {[
                      { name: "currentPassword", label: "Current Password" },
                      { name: "newPassword", label: "New Password" },
                      { name: "confirmPassword", label: "Confirm New Password" },
                    ].map(f => (
                      <FormField key={f.name} control={securityForm.control} name={f.name} render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">{f.label}</FormLabel>
                          <FormControl><Input type="password" placeholder="••••••••" {...field} className="dark:bg-[#0f172a] border-slate-200 dark:border-white/10 rounded-xl h-10" /></FormControl>
                          <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                      )} />
                    ))}
                    <Button type="submit" className="bg-gradient-to-r from-[#0f3b73] to-[#1a5296] text-white rounded-xl shadow-md font-semibold mt-2">
                      <Shield className="mr-2 h-4 w-4" /> Update Password
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}

          {activeTab === "appearance" && (
            <Card className="border-none shadow-lg dark:bg-[#1e293b] dark:border dark:border-white/5">
              <CardHeader className="border-b border-slate-100 dark:border-white/5 pb-5">
                <CardTitle className="text-lg text-slate-800 dark:text-white">Appearance</CardTitle>
                <CardDescription>Customize how EduNest looks on your device.</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm text-slate-800 dark:text-slate-200">Dark Mode</p>
                    <p className="text-xs text-slate-400 mt-0.5">Switch between light and dark theme.</p>
                  </div>
                  <button
                    onClick={() => { toggleTheme(); toast.success(`Switched to ${!isDark ? "dark" : "light"} mode`); }}
                    className={`relative inline-flex h-6 w-11 rounded-full border-2 border-transparent transition-colors ${isDark ? "bg-[#0f3b73]" : "bg-slate-200 dark:bg-white/10"}`}
                  >
                    <span className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-md transform transition-transform ${isDark ? "translate-x-5" : "translate-x-0"}`} />
                  </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { name: "Default Blue", from: "#0f3b73", to: "#1e40af" },
                    { name: "Forest Green", from: "#36833b", to: "#4ade80" },
                    { name: "Purple", from: "#7c3aed", to: "#a855f7" },
                    { name: "Rose", from: "#e11d48", to: "#fb7185" },
                    { name: "Amber", from: "#d97706", to: "#fbbf24" },
                    { name: "Cyan", from: "#0891b2", to: "#22d3ee" },
                  ].map((theme, i) => (
                    <button
                      key={i}
                      onClick={() => toast.success(`${theme.name} theme applied!`)}
                      className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-colors group"
                    >
                      <div className={`h-5 w-5 rounded-full bg-gradient-to-br from-[${theme.from}] to-[${theme.to}]`}
                        style={{ background: `linear-gradient(135deg, ${theme.from}, ${theme.to})` }}
                      />
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-300">{theme.name}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "language" && (
            <Card className="border-none shadow-lg dark:bg-[#1e293b] dark:border dark:border-white/5">
              <CardHeader className="border-b border-slate-100 dark:border-white/5 pb-5">
                <CardTitle className="text-lg text-slate-800 dark:text-white flex items-center gap-2">
                  <Languages className="h-5 w-5 text-[#0f3b73]" /> Language & Region
                </CardTitle>
                <CardDescription>Set your preferred language and regional settings.</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                {[
                  { label: "Display Language", options: ["English (US)", "Bengali", "Arabic", "Spanish", "French"] },
                  { label: "Timezone", options: ["UTC+6:00 Dhaka", "UTC+0:00 London", "UTC-5:00 New York", "UTC+5:30 Mumbai"] },
                  { label: "Date Format", options: ["DD/MM/YYYY", "MM/DD/YYYY", "YYYY-MM-DD"] },
                ].map((setting, i) => (
                  <div key={i} className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-sm text-slate-800 dark:text-slate-200">{setting.label}</p>
                    </div>
                    <select
                      onChange={() => toast.success(`${setting.label} updated!`)}
                      className="h-9 px-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0f172a] text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f3b73]/30"
                    >
                      {setting.options.map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                ))}
                <Button onClick={() => toast.success("Regional settings saved!")} className="mt-4 bg-gradient-to-r from-[#0f3b73] to-[#36833b] text-white rounded-xl shadow-md font-semibold">
                  <Save className="mr-2 h-4 w-4" /> Save Preferences
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </motion.div>
  );
}
