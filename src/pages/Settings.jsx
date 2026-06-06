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
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";
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

const getTabs = (t) => [
  { id: "profile", label: t("profileSettings"), icon: User },
  { id: "notifications", label: t("notificationSettings"), icon: Bell },
  { id: "security", label: t("securitySettings"), icon: Shield },
  { id: "appearance", label: t("appearanceSettings"), icon: Palette },
  { id: "language", label: t("languageSettings"), icon: Globe },
];

const getNotifSettings = (t) => [
  { id: "newStudent", label: t("notifNewStudent"), desc: t("notifNewStudentDesc"), enabled: true },
  { id: "feeOverdue", label: t("notifFeeOverdue"), desc: t("notifFeeOverdueDesc"), enabled: true },
  { id: "examResults", label: t("notifExamResults"), desc: t("notifExamResultsDesc"), enabled: false },
  { id: "weeklySummary", label: t("notifWeeklySummary"), desc: t("notifWeeklySummaryDesc"), enabled: true },
];

export default function Settings() {
  const { user, updateUser, logout } = useAuth();
  const { isDark, toggleTheme, colorTheme, setColorTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [activeTab, setActiveTab] = useState("profile");
  const [notifs, setNotifs] = useState(getNotifSettings(t));
  const tabs = getTabs(t);

  useEffect(() => {
    setNotifs(prev => prev.map(p => {
      const updated = getNotifSettings(t).find(x => x.id === p.id);
      return { ...p, label: updated.label, desc: updated.desc };
    }));
  }, [t]);

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
    toast.success(t("profileUpdated"));
  };

  const onSecuritySubmit = () => {
    securityForm.reset();
    toast.success(t("passwordUpdated"));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-6 pb-10"
    >
      {/* ── Hero Header ── */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 via-slate-700 to-[var(--brand-primary)] p-6 md:p-8 shadow-xl">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="relative flex items-center gap-5">
          <div className="relative">
            <Avatar className="h-16 w-16 ring-4 ring-white/20 shadow-xl">
              <AvatarImage src={`https://i.pravatar.cc/150?u=${user?.email}`} />
              <AvatarFallback className="bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] text-white text-2xl font-bold">
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
              <CheckCircle2 className="h-3 w-3 text-emerald-400" /> {t("role")}: {user?.role || "Administrator"}
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
                      ? "bg-gradient-to-r from-[var(--brand-primary)] to-[#1a5296] text-white shadow-md shadow-[var(--brand-primary)]/25"
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
                  <LogOut className="h-4 w-4" /> {t("logout")}
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
                <CardTitle className="text-lg text-slate-800 dark:text-white">{t("profileSettings")}</CardTitle>
                <CardDescription>{t("profileSettings")}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <Form {...profileForm}>
                  <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-5">
                    <div className="grid gap-4 md:grid-cols-2">
                      <FormField control={profileForm.control} name="name" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">{t("fullName")}</FormLabel>
                          <FormControl><Input placeholder="John Doe" {...field} className="dark:bg-[#0f172a] border-slate-200 dark:border-white/10 rounded-xl h-10" /></FormControl>
                          <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                      )} />
                      <FormField control={profileForm.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">{t("email")}</FormLabel>
                          <FormControl><Input placeholder="john@edunest.com" {...field} className="dark:bg-[#0f172a] border-slate-200 dark:border-white/10 rounded-xl h-10" /></FormControl>
                          <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                      )} />
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">{t("role")}</label>
                        <div className="flex items-center gap-2 h-10 px-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20">
                          <CheckCircle2 className="h-4 w-4 text-[var(--brand-secondary)]" />
                          <span className="text-sm text-slate-500 capitalize">{user?.role || "Administrator"}</span>
                        </div>
                      </div>
                      <FormField control={profileForm.control} name="phone" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">{t("phone")}</FormLabel>
                          <FormControl><Input placeholder="+1 (555) 000-0000" {...field} className="dark:bg-[#0f172a] border-slate-200 dark:border-white/10 rounded-xl h-10" /></FormControl>
                          <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                      )} />
                    </div>
                    <Button type="submit" className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] text-white rounded-xl shadow-md font-semibold">
                      <Save className="mr-2 h-4 w-4" /> {t("save")}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}

          {activeTab === "notifications" && (
            <Card className="border-none shadow-lg dark:bg-[#1e293b] dark:border dark:border-white/5">
              <CardHeader className="border-b border-slate-100 dark:border-white/5 pb-5">
                <CardTitle className="text-lg text-slate-800 dark:text-white">{t("notificationSettings")}</CardTitle>
                <CardDescription>{t("notificationSettings")}</CardDescription>
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
                        n.enabled ? "bg-[var(--brand-primary)]" : "bg-slate-200 dark:bg-white/10"
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
                  <Key className="h-5 w-5 text-[var(--brand-primary)]" /> {t("securitySettings")}
                </CardTitle>
                <CardDescription>{t("securityDesc")}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <Form {...securityForm}>
                  <form onSubmit={securityForm.handleSubmit(onSecuritySubmit)} className="space-y-4 max-w-md">
                    {[
                      { name: "currentPassword", label: t("currentPassword") },
                      { name: "newPassword", label: t("newPassword") },
                      { name: "confirmPassword", label: t("confirmPassword") },
                    ].map(f => (
                      <FormField key={f.name} control={securityForm.control} name={f.name} render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">{f.label}</FormLabel>
                          <FormControl><Input type="password" placeholder="••••••••" {...field} className="dark:bg-[#0f172a] border-slate-200 dark:border-white/10 rounded-xl h-10" /></FormControl>
                          <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                      )} />
                    ))}
                    <Button type="submit" className="bg-gradient-to-r from-[var(--brand-primary)] to-[#1a5296] text-white rounded-xl shadow-md font-semibold mt-2">
                      <Shield className="mr-2 h-4 w-4" /> {t("updatePassword")}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}

          {activeTab === "appearance" && (
            <Card className="border-none shadow-lg dark:bg-[#1e293b] dark:border dark:border-white/5">
              <CardHeader className="border-b border-slate-100 dark:border-white/5 pb-5">
                <CardTitle className="text-lg text-slate-800 dark:text-white">{t("appearanceSettings")}</CardTitle>
                <CardDescription>{t("appearanceSettings")}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm text-slate-800 dark:text-slate-200">{t("darkMode")}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{t("darkMode")}</p>
                  </div>
                  <button
                    onClick={() => { toggleTheme(); toast.success(`${!isDark ? (language === 'bn' ? 'ডার্ক' : 'dark') : (language === 'bn' ? 'লাইট' : 'light')} ${language === 'bn' ? 'মোডে পরিবর্তিত হয়েছে' : 'mode activated'}`); }}
                    className={`relative inline-flex h-6 w-11 rounded-full border-2 border-transparent transition-colors ${isDark ? "bg-[var(--brand-primary)]" : "bg-slate-200 dark:bg-white/10"}`}
                  >
                    <span className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-md transform transition-transform ${isDark ? "translate-x-5" : "translate-x-0"}`} />
                  </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { name: "Default Blue", from: "#0f3b73", to: "#1e40af", secondary: "#36833b" },
                    { name: "Forest Green", from: "#166534", to: "#22c55e", secondary: "#14532d" },
                    { name: "Purple", from: "#6b21a8", to: "#a855f7", secondary: "#581c87" },
                    { name: "Rose", from: "#be123c", to: "#fb7185", secondary: "#9f1239" },
                    { name: "Amber", from: "#b45309", to: "#fbbf24", secondary: "#92400e" },
                    { name: "Cyan", from: "#0e7490", to: "#22d3ee", secondary: "#164e63" },
                  ].map((theme, i) => (
                    <button
                      key={i}
                      onClick={() => { setColorTheme(theme); toast.success(`${theme.name} theme applied!`); }}
                      className={`flex items-center gap-2.5 p-3 rounded-xl border ${colorTheme?.name === theme.name ? 'border-[var(--brand-primary)] bg-[var(--brand-primary)]/5 dark:bg-[var(--brand-primary)]/20' : 'border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'} transition-colors group`}
                    >
                      <div className="h-5 w-5 rounded-full"
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
                  <Languages className="h-5 w-5 text-[var(--brand-primary)]" /> {t("languageSettings")}
                </CardTitle>
                <CardDescription>{t("languageSettings")}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                {[
                  {
                    label: t("displayLanguage"),
                    key: "lang",
                    options: [
                      { value: "en", label: "English (US)" },
                      { value: "bn", label: "বাংলা (Bengali)" },
                    ],
                    value: language,
                    onChange: (val) => {
                      setLanguage(val);
                      toast.success(val === "bn" ? "ভাষা বাংলায় পরিবর্তিত হয়েছে! 🇧🇩" : "Language switched to English! 🇺🇸");
                    },
                  },
                  {
                    label: t("timezone"),
                    key: "tz",
                    options: [
                      { value: "utc6", label: "UTC+6:00 Dhaka" },
                      { value: "utc0", label: "UTC+0:00 London" },
                      { value: "utc-5", label: "UTC-5:00 New York" },
                      { value: "utc530", label: "UTC+5:30 Mumbai" },
                    ],
                    value: "",
                    onChange: () => toast.success(t("timezone") + " updated!"),
                  },
                  {
                    label: t("dateFormat"),
                    key: "df",
                    options: [
                      { value: "dmy", label: "DD/MM/YYYY" },
                      { value: "mdy", label: "MM/DD/YYYY" },
                      { value: "ymd", label: "YYYY-MM-DD" },
                    ],
                    value: "",
                    onChange: () => toast.success(t("dateFormat") + " updated!"),
                  },
                ].map((setting) => (
                  <div key={setting.key} className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-sm text-slate-800 dark:text-slate-200">{setting.label}</p>
                    </div>
                    <select
                      value={setting.value}
                      onChange={(e) => setting.onChange(e.target.value)}
                      className="h-9 px-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0f172a] text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]/30"
                    >
                      {setting.options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                  </div>
                ))}
                <Button onClick={() => toast.success(language === 'bn' ? 'আঞ্চলিক সেটিংস সংরক্ষিত হয়েছে!' : 'Regional settings saved!')} className="mt-4 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] text-white rounded-xl shadow-md font-semibold">
                  <Save className="mr-2 h-4 w-4" /> {t("savePreferences")}
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </motion.div>
  );
}
