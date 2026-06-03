import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Mail, 
  MapPin,
  GraduationCap,
  Calendar,
  Phone,
  FileText,
  Activity,
  Award,
  Printer,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useData } from "@/context/DataContext";
import { StatCard } from "@/components/charts/StatCard";
import toast from "react-hot-toast";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

export default function StudentProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { students } = useData();
  const [showReport, setShowReport] = useState(false);
  
  const student = students.find(s => s.id === id);

  if (!student) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-300">Student not found</h2>
        <Button variant="outline" className="mt-4" onClick={() => navigate("/students")}>
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
        <Button variant="ghost" size="icon" onClick={() => navigate("/students")} className="text-slate-500 hover:text-[#0f3b73] dark:hover:text-white">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold tracking-tight text-[#0f3b73] dark:text-white">Student Profile</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column - Main Profile Info */}
        <Card className="col-span-1 border-none shadow-lg dark:bg-[#1e293b] overflow-hidden relative">
          <div className="h-32 bg-gradient-to-r from-[#0f3b73] to-[#36833b] w-full absolute top-0 left-0"></div>
          <CardContent className="pt-16 pb-6 px-6 relative z-10 flex flex-col items-center text-center">
            <Avatar className="h-32 w-32 border-4 border-white dark:border-[#1e293b] shadow-xl mb-4">
              <AvatarImage src={`https://i.pravatar.cc/150?u=${student.name}`} />
              <AvatarFallback className="bg-gradient-to-br from-[#0f3b73] to-[#1e40af] text-white text-4xl">
                {student.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold text-[#0f3b73] dark:text-white">{student.name}</h2>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#0f3b73]/10 text-[#0f3b73] dark:bg-[#0f3b73]/30 dark:text-[#60a5fa] border border-[#0f3b73]/20">
                {student.grade}
              </span>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                student.status === 'Active' ? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400'
              }`}>
                {student.status}
              </span>
            </div>
            
            <div className="flex gap-2 mt-6 w-full">
              <Button onClick={() => toast.success("Message sent!")} className="flex-1 bg-[#0f3b73] hover:bg-[#1e40af] text-white"><Mail className="mr-2 h-4 w-4" /> Message</Button>
              <Button onClick={() => setShowReport(true)} variant="outline" className="flex-1 border-[#0f3b73]/20 text-[#0f3b73] hover:bg-[#0f3b73]/5 dark:text-white dark:border-white/20"><FileText className="mr-2 h-4 w-4" /> Report</Button>
            </div>

            <div className="w-full mt-8 space-y-4 text-left">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2 border-b border-slate-100 dark:border-white/10 pb-2">Contact Info</h3>
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <Mail className="h-4 w-4 text-slate-400" /> <span>{student.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <Phone className="h-4 w-4 text-slate-400" /> <span>+1 (555) 098-7654 (Parent)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <MapPin className="h-4 w-4 text-slate-400" /> <span>123 Education Lane, NY</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right Column - Stats and Details */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <StatCard 
              title="Attendance" 
              value="96%" 
              icon={Calendar} 
              trend="+2%"
              positive={true}
              color="from-[#36833b] to-[#4ade80]" 
            />
            <StatCard 
              title="Avg. Score" 
              value="A-" 
              icon={Award} 
              trend="Top 10%"
              positive={true}
              color="from-[#0f3b73] to-[#1e40af]" 
            />
            <StatCard 
              title="Activities" 
              value="3" 
              icon={Activity} 
              color="from-purple-500 to-indigo-500" 
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border shadow-sm dark:bg-[#1e293b]">
              <CardHeader>
                <CardTitle className="text-lg">Recent Grades</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { subject: "Mathematics", grade: "94%", status: "Excellent" },
                    { subject: "Physics", grade: "88%", status: "Good" },
                    { subject: "Literature", grade: "92%", status: "Excellent" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-3 rounded-lg border border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded bg-[#0f3b73]/10 flex items-center justify-center text-[#0f3b73] dark:text-[#60a5fa] font-bold text-xs">
                          {item.subject.substring(0, 3).toUpperCase()}
                        </div>
                        <h4 className="font-semibold text-slate-800 dark:text-slate-200">{item.subject}</h4>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-[#36833b] dark:text-[#4ade80]">{item.grade}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-sm dark:bg-[#1e293b]">
              <CardHeader>
                <CardTitle className="text-lg">Fee Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-6 text-center">
                  <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-[#36833b]/20 flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-green-600 dark:text-[#4ade80]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">All Clear!</h3>
                  <p className="text-sm text-slate-500 mt-2 max-w-[200px]">
                    No pending dues for the current academic semester.
                  </p>
                  <Button onClick={() => navigate("/fees")} variant="outline" className="mt-6 border-[#0f3b73]/20 text-[#0f3b73] dark:text-white hover:bg-[#0f3b73]/5">
                    View Fee History
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Dialog open={showReport} onOpenChange={setShowReport}>
        <DialogContent className="sm:max-w-[600px] p-0 dark:bg-[#1e293b] border-none overflow-hidden">
          <div className="bg-[#0f3b73] p-6 text-center text-white relative flex flex-col items-center">
            <div className="bg-white p-2 rounded-xl shadow-lg mb-3">
              <img src="/logo.png" alt="EduNest" className="h-12 w-auto" />
            </div>
            <h2 className="text-2xl font-bold tracking-widest uppercase mt-2">Academic Report Card</h2>
            <p className="text-sm text-white/80 mt-1">Fall Semester 2026</p>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
              <Avatar className="h-20 w-20 border-4 border-white dark:border-[#1e293b] shadow-xl">
                <AvatarImage src={`https://i.pravatar.cc/150?u=${student.name}`} />
                <AvatarFallback className="bg-[#36833b]">{student.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </div>
          </div>
          
          <div className="p-6 pt-14 space-y-6">
            <div className="text-center">
              <h3 className="font-bold text-xl text-slate-800 dark:text-slate-200">{student.name}</h3>
              <p className="text-sm text-muted-foreground">ID: {student.id} • {student.grade}</p>
            </div>

            <div className="border border-slate-100 dark:border-white/10 rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 dark:bg-white/5">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Subject</th>
                    <th className="px-4 py-3 text-center font-medium text-muted-foreground">Marks</th>
                    <th className="px-4 py-3 text-right font-medium text-muted-foreground">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-200">Mathematics</td>
                    <td className="px-4 py-3 text-center text-slate-800 dark:text-slate-200">94/100</td>
                    <td className="px-4 py-3 text-right font-bold text-[#36833b] dark:text-[#4ade80]">A+</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-200">Physics</td>
                    <td className="px-4 py-3 text-center text-slate-800 dark:text-slate-200">88/100</td>
                    <td className="px-4 py-3 text-right font-bold text-[#36833b] dark:text-[#4ade80]">A</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-200">Literature</td>
                    <td className="px-4 py-3 text-center text-slate-800 dark:text-slate-200">92/100</td>
                    <td className="px-4 py-3 text-right font-bold text-[#36833b] dark:text-[#4ade80]">A</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-200">Computer Science</td>
                    <td className="px-4 py-3 text-center text-slate-800 dark:text-slate-200">98/100</td>
                    <td className="px-4 py-3 text-right font-bold text-[#36833b] dark:text-[#4ade80]">A+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center bg-slate-50 dark:bg-white/5 p-4 rounded-lg">
              <div>
                <p className="text-sm text-muted-foreground">Overall GPA</p>
                <p className="text-2xl font-bold text-[#0f3b73] dark:text-white">3.85<span className="text-sm text-muted-foreground font-normal">/4.0</span></p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Attendance</p>
                <p className="text-xl font-bold text-[#36833b] dark:text-[#4ade80]">96%</p>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Button variant="outline" className="border-white/10 dark:text-white" onClick={() => setShowReport(false)}>Close</Button>
              <Button onClick={() => toast.promise(new Promise(r => setTimeout(r, 1000)), { loading: 'Downloading...', success: 'Report Downloaded!', error: 'Error' })} className="bg-[#0f3b73] hover:bg-[#1e40af] text-white">
                <Download className="mr-2 h-4 w-4" /> Download PDF
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
