import { useState } from "react";
import { Bell, Search, Menu, Settings, LogOut, User, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "./Sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mockNotifications = [
  { id: 1, title: "New student enrolled", desc: "Emma Watson joined Grade 10", time: "2m ago", unread: true },
  { id: 2, title: "Fee overdue", desc: "3 students have overdue fees", time: "1h ago", unread: true },
  { id: 3, title: "Exam scheduled", desc: "Mid-term Mathematics on Oct 28", time: "3h ago", unread: false },
];

export function Navbar() {
  const { user, logout } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [notifOpen, setNotifOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const unreadCount = mockNotifications.filter(n => n.unread).length;

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-slate-100 dark:border-white/5 bg-white/80 dark:bg-[#0a0f1e]/80 px-4 md:px-6 backdrop-blur-xl shadow-sm">
      {/* Mobile Hamburger + Logo */}
      <div className="flex items-center gap-2 md:hidden">
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="shrink-0 text-slate-500">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-72 border-0">
            <Sidebar onClose={() => setSheetOpen(false)} />
          </SheetContent>
        </Sheet>
        <Link to="/" className="ml-1">
          <img src="/logo.png" alt="EduNest" className="h-9 w-auto" />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="w-full flex-1">
        <form className="hidden md:flex relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            type="search"
            placeholder={t("search")}  
            className="w-full pl-9 h-9 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 rounded-full text-sm placeholder:text-slate-400 focus-visible:ring-[var(--brand-primary)]/30 focus-visible:border-[var(--brand-primary)]/50 transition-all"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex h-5 items-center gap-1 rounded border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-1.5 text-[10px] font-medium text-slate-400">
            ⌘K
          </kbd>
        </form>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2">
        {/* AI Assist Badge */}
        <Button variant="ghost" size="sm" className="hidden lg:flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-[var(--brand-primary)] dark:hover:text-white hover:bg-[var(--brand-primary)]/5 rounded-full px-3">
          <Sparkles className="h-3.5 w-3.5 text-amber-500" />
          AI Insights
        </Button>

        {/* Notifications */}
        <DropdownMenu open={notifOpen} onOpenChange={setNotifOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative h-9 w-9 rounded-full text-slate-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5">
              <Bell className="h-4.5 w-4.5" style={{ height: '1.1rem', width: '1.1rem' }} />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] text-[9px] font-bold text-white shadow-sm">
                  {unreadCount}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 p-0 rounded-2xl shadow-2xl border border-slate-100 dark:border-white/10 dark:bg-[#1e293b] overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-white/10">
              <p className="text-sm font-semibold text-slate-800 dark:text-white">{t("notices")}</p>
              <span className="text-xs text-[var(--brand-primary)] dark:text-[#60a5fa] font-medium cursor-pointer hover:underline">Mark all read</span>
            </div>
            <div className="divide-y divide-slate-50 dark:divide-white/5">
              {mockNotifications.map((notif) => (
                <div key={notif.id} className={`flex gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-white/5 cursor-pointer transition-colors ${notif.unread ? 'bg-[var(--brand-primary)]/3' : ''}`}>
                  <div className={`h-2 w-2 rounded-full mt-1.5 shrink-0 ${notif.unread ? 'bg-[var(--brand-primary)]' : 'bg-transparent'}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{notif.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5 truncate">{notif.desc}</p>
                    <p className="text-xs text-slate-400 mt-1">{notif.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-4 py-3 border-t border-slate-100 dark:border-white/10 text-center">
              <button className="text-xs text-[var(--brand-primary)] dark:text-[#60a5fa] font-medium hover:underline">View all notifications</button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 h-9 pl-2 pr-3 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
              <Avatar className="h-7 w-7 ring-2 ring-[var(--brand-primary)]/20">
                <AvatarImage src={user?.avatar || `https://i.pravatar.cc/150?u=${user?.email}`} alt={user?.name} />
                <AvatarFallback className="bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] text-white text-xs font-bold">
                  {user?.name ? user.name.substring(0, 2).toUpperCase() : "EN"}
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:block text-left">
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-tight">{user?.name || "Admin"}</p>
                <p className="text-[10px] text-slate-400 capitalize leading-tight">{user?.role || "admin"}</p>
              </div>
              <ChevronDown className="h-3 w-3 text-slate-400 hidden md:block" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 rounded-2xl shadow-2xl border border-slate-100 dark:border-white/10 dark:bg-[#1e293b] p-1.5 overflow-hidden">
            <DropdownMenuLabel className="px-3 py-2">
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={user?.avatar || `https://i.pravatar.cc/150?u=${user?.email}`} />
                  <AvatarFallback className="bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] text-white text-xs font-bold">
                    {user?.name ? user.name.substring(0, 2).toUpperCase() : "EN"}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-white">{user?.name || "Admin User"}</p>
                  <p className="text-xs text-slate-400 capitalize">{user?.role || "Administrator"}</p>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="my-1 bg-slate-100 dark:bg-white/5" />
            <DropdownMenuItem onClick={() => navigate("/settings")} className="rounded-xl gap-2 px-3 py-2 cursor-pointer">
              <User className="h-4 w-4 text-slate-400" /> My Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/settings")} className="rounded-xl gap-2 px-3 py-2 cursor-pointer">
              <Settings className="h-4 w-4 text-slate-400" /> {t("settings")}
            </DropdownMenuItem>
            <DropdownMenuSeparator className="my-1 bg-slate-100 dark:bg-white/5" />
            <DropdownMenuItem onClick={logout} className="rounded-xl gap-2 px-3 py-2 text-red-500 focus:text-red-500 focus:bg-red-50 dark:focus:bg-red-500/10 cursor-pointer">
              <LogOut className="h-4 w-4" /> {t("logout")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
