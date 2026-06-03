import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";

export function DashboardLayout() {
  return (
    <div className="flex min-h-screen w-full bg-slate-50 dark:bg-[#060c1a] overflow-hidden">
      {/* Fixed Sidebar */}
      <div className="hidden md:block w-64 fixed inset-y-0 z-20">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 md:pl-64 flex flex-col min-h-screen max-w-full">
        <Navbar />
        <main className="flex-1 p-4 md:p-6 lg:p-8 w-full max-w-[1400px] mx-auto overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
