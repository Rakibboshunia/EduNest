import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  BookOpen, 
  Calendar,
  MapPin,
  Award,
  GraduationCap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useData } from "@/context/DataContext";
import { StatCard } from "@/components/charts/StatCard";
import toast from "react-hot-toast";

export default function TeacherProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { teachers } = useData();
  
  const teacher = teachers.find(t => t.id === id);

  if (!teacher) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-300">Teacher not found</h2>
        <Button variant="outline" className="mt-4" onClick={() => navigate("/teachers")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Directory
        </Button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6 pb-8"
    >
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate("/teachers")} className="text-slate-500 hover:text-[var(--brand-primary)] dark:hover:text-white">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold tracking-tight text-[var(--brand-primary)] dark:text-white">Teacher Profile</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column - Main Profile Info */}
        <Card className="col-span-1 border-none shadow-lg dark:bg-[#1e293b] overflow-hidden relative">
          <div className="h-32 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] w-full absolute top-0 left-0"></div>
          <CardContent className="pt-16 pb-6 px-6 relative z-10 flex flex-col items-center text-center">
            <Avatar className="h-32 w-32 border-4 border-white dark:border-[#1e293b] shadow-xl mb-4">
              <AvatarImage src={`https://i.pravatar.cc/150?u=${teacher.name}`} />
              <AvatarFallback className="bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-primary-light)] text-white text-4xl">
                {teacher.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold text-[var(--brand-primary)] dark:text-white">{teacher.name}</h2>
            <p className="text-[var(--brand-secondary)] dark:text-[#4ade80] font-semibold text-sm mt-1 flex items-center justify-center gap-1.5">
              <BookOpen className="h-4 w-4" /> {teacher.subject} Department
            </p>
            
            <div className="flex gap-2 mt-6 w-full">
              <Button onClick={() => toast.success("Message sent!")} className="flex-1 bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] text-white"><Mail className="mr-2 h-4 w-4" /> Message</Button>
              <Button onClick={() => toast.success("Meeting request sent!")} variant="outline" className="flex-1 border-[var(--brand-primary)]/20 text-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/5 dark:text-white dark:border-white/20"><Calendar className="mr-2 h-4 w-4" /> Meeting</Button>
            </div>

            <div className="w-full mt-8 space-y-4 text-left">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2 border-b border-slate-100 dark:border-white/10 pb-2">Contact Info</h3>
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <Mail className="h-4 w-4 text-slate-400" /> <span>{teacher.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <Phone className="h-4 w-4 text-slate-400" /> <span>{teacher.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <MapPin className="h-4 w-4 text-slate-400" /> <span>Staff Room 3B, North Wing</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right Column - Stats and Details */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <StatCard 
              title="Active Classes" 
              value={teacher.classes || "4"} 
              icon={BookOpen} 
              color="from-[var(--brand-primary)] to-[var(--brand-primary-light)]" 
            />
            <StatCard 
              title="Total Students" 
              value="128" 
              icon={GraduationCap} 
              color="from-[var(--brand-secondary)] to-[#4ade80]" 
            />
          </div>

          <Card className="border shadow-sm dark:bg-[#1e293b]">
            <CardHeader>
              <CardTitle className="text-lg">About & Qualifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <p>
                {teacher.name} is a dedicated educator specializing in {teacher.subject}. With a strong commitment to student success and innovative teaching methodologies, they have consistently maintained high academic standards.
              </p>
              
              <div className="pt-4 space-y-3">
                <div className="flex gap-3">
                  <Award className="h-5 w-5 text-[var(--brand-secondary)] shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200">Ph.D. in {teacher.subject}</h4>
                    <p className="text-xs text-muted-foreground">University of Education, 2015</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Award className="h-5 w-5 text-[var(--brand-primary)] shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200">Master's Degree</h4>
                    <p className="text-xs text-muted-foreground">State University, 2011</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border shadow-sm dark:bg-[#1e293b]">
            <CardHeader>
              <CardTitle className="text-lg">Current Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { time: "09:00 AM - 10:30 AM", class: "Grade 10", room: "Room 102" },
                  { time: "11:00 AM - 12:30 PM", class: "Grade 12", room: "Room 205" },
                  { time: "02:00 PM - 03:30 PM", class: "Grade 11", room: "Lab A" },
                ].map((schedule, i) => (
                  <div key={i} className="flex justify-between items-center p-3 rounded-lg border border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-slate-200">{schedule.class}</h4>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <Calendar className="h-3 w-3" /> {schedule.time}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-black/20 text-slate-600 dark:text-slate-400">
                        {schedule.room}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
