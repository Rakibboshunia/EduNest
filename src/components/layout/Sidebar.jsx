import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  CalendarCheck, 
  FileText, 
  BarChart, 
  CreditCard, 
  Bell, 
  Settings,
  ChevronRight,
  LogOut
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navGroups = [
  {
    label: "Overview",
    items: [
      { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    ]
  },
  {
    label: "People",
    items: [
      { title: "Students", href: "/students", icon: GraduationCap },
      { title: "Teachers", href: "/teachers", icon: Users },
    ]
  },
  {
    label: "Academics",
    items: [
      { title: "Attendance", href: "/attendance", icon: CalendarCheck },
      { title: "Exams & Results", href: "/exams", icon: FileText },
    ]
  },
  {
    label: "Administration",
    items: [
      { title: "Fees", href: "/fees", icon: CreditCard },
      { title: "Notices", href: "/notices", icon: Bell },
      { title: "Analytics", href: "/analytics", icon: BarChart },
    ]
  },
  {
    label: "System",
    items: [
      { title: "Settings", href: "/settings", icon: Settings },
    ]
  }
];

export function Sidebar({ className, onClose }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const isActive = (href) => 
    location.pathname === href || location.pathname.startsWith(`${href}/`);

  return (
    <nav className={cn(
      "flex flex-col h-full border-r overflow-y-auto",
      "bg-white dark:bg-[#0a0f1e]",
      "border-slate-100 dark:border-white/5",
      className
    )}>
      {/* Logo Area */}
      <div className="px-4 pt-5 pb-4 flex items-center gap-3 border-b border-slate-100 dark:border-white/5 shrink-0">
        <Link to="/" onClick={onClose} className="flex items-center gap-2.5 hover:opacity-85 transition-opacity">
          <img src="/logo.png" alt="EduNest" className="h-11 w-auto drop-shadow-sm shrink-0" />
          <div>
            <h2 className="text-lg font-extrabold tracking-tight leading-none text-[#0f3b73] dark:text-white">
              Edu<span className="text-[#36833b]">Nest</span>
            </h2>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 leading-none mt-0.5 tracking-wide">Admin Portal</p>
          </div>
        </Link>
      </div>

      {/* Nav Groups */}
      <div className="flex-1 px-3 py-4 space-y-6 overflow-y-auto">
        {navGroups.map((group) => (
          <div key={group.label}>
            <p className="px-3 mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-600">
              {group.label}
            </p>
            <div className="space-y-0.5">
              {group.items.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={onClose}
                    className={cn(
                      "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                      active
                        ? "bg-gradient-to-r from-[#0f3b73] to-[#1e5fa8] text-white shadow-md shadow-[#0f3b73]/25"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                    )}
                  >
                    {/* Active glow */}
                    {active && (
                      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0f3b73]/20 to-transparent blur-sm -z-10" />
                    )}
                    <item.icon className={cn(
                      "h-4.5 w-4.5 shrink-0 transition-transform duration-200",
                      active ? "text-white" : "text-slate-400 dark:text-slate-500 group-hover:text-[#0f3b73] dark:group-hover:text-white group-hover:scale-110"
                    )} style={{ height: '1.05rem', width: '1.05rem' }} />
                    <span className="flex-1">{item.title}</span>
                    {active && <ChevronRight className="h-3.5 w-3.5 text-white/60" />}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* User Footer */}
      <div className="px-3 py-4 border-t border-slate-100 dark:border-white/5 shrink-0">
        <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-colors group cursor-pointer"
          onClick={() => navigate("/settings")}
        >
          <Avatar className="h-9 w-9 ring-2 ring-[#0f3b73]/20 dark:ring-white/10">
            <AvatarImage src={user?.avatar || `https://i.pravatar.cc/150?u=${user?.email}`} alt={user?.name || "User"} />
            <AvatarFallback className="bg-gradient-to-br from-[#0f3b73] to-[#36833b] text-white text-xs font-bold">
              {user?.name ? user.name.substring(0, 2).toUpperCase() : "EN"}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">{user?.name || "Admin User"}</p>
            <p className="text-xs text-slate-400 dark:text-slate-500 capitalize truncate">{user?.role || "Administrator"}</p>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); logout(); }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors opacity-0 group-hover:opacity-100"
          >
            <LogOut className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
