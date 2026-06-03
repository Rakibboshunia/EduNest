import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";

export function StatCard({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  positive, 
  color, 
  trendText 
}) {
  return (
    <Card className="relative overflow-hidden border-none shadow-lg group hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 dark:bg-[#1e293b] cursor-default">
      {/* Gradient glow blob */}
      <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${color} opacity-10 rounded-full blur-3xl -mr-12 -mt-12 transition-all group-hover:opacity-20 group-hover:scale-125 duration-700`} />
      
      {/* Subtle top border accent */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${color} opacity-60`} />

      <CardContent className="p-5 relative z-10">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{title}</p>
          <div className={`p-2.5 rounded-xl bg-gradient-to-br ${color} text-white shadow-md`}>
            <Icon className="h-4 w-4" />
          </div>
        </div>

        <div className="text-3xl font-bold tracking-tight text-slate-800 dark:text-white mb-3">{value}</div>

        {trend && (
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-0.5 text-xs font-semibold px-2 py-0.5 rounded-full ${
              positive === true
                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400'
                : positive === false
                  ? 'bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400'
                  : 'bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-400'
            }`}>
              {positive === true && <ArrowUpRight className="h-3 w-3" />}
              {positive === false && <ArrowDownRight className="h-3 w-3" />}
              {trend}
            </span>
            {trendText && <span className="text-xs text-slate-400 dark:text-slate-500">{trendText}</span>}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
