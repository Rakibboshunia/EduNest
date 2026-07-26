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

// Nav groups with role-based visibility
// roles: admin | teacher | student | parent
const allNavGroups = [
  {
    label: "Overview",
    items: [
      { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard, roles: ["admin","teacher","student","parent"] },
    ]
  },
  {
    label: "People",
    items: [
      { title: "Students", href: "/students", icon: GraduationCap, roles: ["admin","teacher"] },
      { title: "Teachers", href: "/teachers", icon: Users, roles: ["admin"] },
    ]
  },
  {
    label: "Academics",
    items: [
      { title: "Attendance", href: "/attendance", icon: CalendarCheck, roles: ["admin","teacher","student","parent"] },
      { title: "Exams & Results", href: "/exams", icon: FileText, roles: ["admin","teacher","student","parent"] },
    ]
  },
  {
    label: "Administration",
    items: [
      { title: "Fees", href: "/fees", icon: CreditCard, roles: ["admin","parent"] },
      { title: "Notices", href: "/notices", icon: Bell, roles: ["admin","teacher","student","parent"] },
      { title: "Analytics", href: "/analytics", icon: BarChart, roles: ["admin"] },
    ]
  },
  {
    label: "System",
    items: [
      { title: "Settings", href: "/settings", icon: Settings, roles: ["admin","teacher","student","parent"] },
    ]
  }
];

export function Sidebar({ className, onClose }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const role = user?.role || "student";

  // Filter nav groups based on current user role
  const navGroups = allNavGroups
    .map(group => ({
      ...group,
      items: group.items.filter(item => item.roles.includes(role))
    }))
    .filter(group => group.items.length > 0);

  const isActive = (href) => 
    location.pathname === href || location.pathname.startsWith(`${href}/`);

  const roleLabel = {
    admin: "Administrator",
    teacher: "Teacher",
    student: "Student",
    parent: "Parent / Guardian"
  }[role] || role;

  const roleColor = {
    admin: "from-[var(--brand-primary)] to-[#1e5fa8]",
    teacher: "from-emerald-600 to-teal-600",
    student: "from-violet-600 to-purple-700",
    parent: "from-amber-500 to-orange-600"
  }[role] || "from-[var(--brand-primary)] to-[#1e5fa8]";

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
          <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg,#2f584f,#3d7066)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '18px' }}>
            <i className="fas fa-graduation-cap"></i>
          </div>
          <div>
            <h2 className="text-lg font-extrabold tracking-tight leading-none text-[#2f584f] dark:text-white">
              Edu<span className="text-[#8ab58a]">Nest</span>
            </h2>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 leading-none mt-0.5 tracking-wide capitalize">{roleLabel}</p>
          </div>
        </Link>
      </div>

      {/* Role Badge */}
      <div className="px-4 py-3">
        <div className={`bg-gradient-to-r ${roleColor} rounded-xl px-3 py-2 flex items-center gap-2`}>
          <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center text-white text-xs">
            {role === 'admin' && <i className="fas fa-crown"></i>}
            {role === 'teacher' && <i className="fas fa-chalkboard-teacher"></i>}
            {role === 'student' && <i className="fas fa-user-graduate"></i>}
            {role === 'parent' && <i className="fas fa-user-friends"></i>}
          </div>
          <div>
            <p className="text-white text-xs font-semibold leading-tight">{user?.name || roleLabel}</p>
            <p className="text-white/60 text-[10px] leading-tight capitalize">{roleLabel} Portal</p>
          </div>
        </div>
      </div>

      {/* Nav Groups */}
      <div className="flex-1 px-3 py-2 space-y-5 overflow-y-auto">
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
                        ? "bg-gradient-to-r from-[#2f584f] to-[#3d7066] text-white shadow-md shadow-[#2f584f]/25"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                    )}
                  >
                    {active && (
                      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#2f584f]/20 to-transparent blur-sm -z-10" />
                    )}
                    <item.icon className={cn(
                      "shrink-0 transition-transform duration-200",
                      active ? "text-white" : "text-slate-400 dark:text-slate-500 group-hover:text-[#2f584f] dark:group-hover:text-white group-hover:scale-110"
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
          <Avatar className="h-9 w-9 ring-2 ring-[#2f584f]/20 dark:ring-white/10">
            <AvatarImage src={user?.avatar || `https://i.pravatar.cc/150?u=${user?.email}`} alt={user?.name || "User"} />
            <AvatarFallback className="bg-gradient-to-br from-[#2f584f] to-[#8ab58a] text-white text-xs font-bold">
              {user?.name ? user.name.substring(0, 2).toUpperCase() : "EN"}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">{user?.name || "User"}</p>
            <p className="text-xs text-slate-400 dark:text-slate-500 capitalize truncate">{roleLabel}</p>
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
