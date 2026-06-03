import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, ArrowRight, Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
  role: z.enum(["admin", "teacher", "student", "parent"]).default("admin"),
});

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [activeRole, setActiveRole] = useState("admin");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/dashboard";

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "admin",
    },
  });

  const onSubmit = async (values) => {
    try {
      setIsLoading(true);
      await login(values.email, values.password, activeRole);
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const roles = [
    { id: "admin", label: "Admin" },
    { id: "teacher", label: "Teacher" },
    { id: "student", label: "Student" },
    { id: "parent", label: "Parent" },
  ];

  return (
    <div className="min-h-screen w-full flex bg-[#0f172a] overflow-hidden selection:bg-[#1d4ed8]/30">
      {/* Left side - Branding (Hidden on mobile) */}
      <div className="relative hidden w-1/2 lg:flex flex-col justify-between p-12 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[var(--brand-primary)]/80 to-[#0f172a] z-0"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[var(--brand-secondary)]/20 rounded-full blur-[100px] z-0"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--brand-primary)]/40 rounded-full blur-[120px] z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay z-0"></div>
        
        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3 mb-10">
          <img src="/logo.png" alt="EduNest Logo" className="h-24 w-auto drop-shadow-2xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
              Transform your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#4ade80]">
                educational ecosystem
              </span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              A comprehensive, intelligent platform designed to streamline operations, enhance communication, and foster academic excellence.
            </p>
          </motion.div>
          
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <img 
                key={i}
                className="w-12 h-12 border-2 border-[#0f172a] rounded-full object-cover" 
                src={`https://i.pravatar.cc/150?img=${i+10}`} 
                alt="User avatar" 
              />
            ))}
            <div className="w-12 h-12 border-2 border-[#0f172a] rounded-full bg-[#1e293b] flex items-center justify-center text-xs font-medium text-white">
              5k+
            </div>
          </div>
          <p className="text-sm text-slate-400 mt-4">Trusted by over 5,000+ educators worldwide</p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 relative">
        {/* Mobile branding */}
        <div className="absolute top-6 left-6 flex items-center gap-2 lg:hidden">
           <img src="/logo.png" alt="EduNest" className="h-12 w-auto drop-shadow-md" />
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Welcome back</h2>
            <p className="text-slate-400 text-sm">Please enter your details to sign in.</p>
          </div>

          <div className="flex justify-between gap-1 mb-8 bg-[#0f172a] p-1 rounded-xl">
            {roles.map((role) => (
              <button
                key={role.id}
                type="button"
                onClick={() => {
                  setActiveRole(role.id);
                  form.setValue("role", role.id);
                }}
                className={`flex-1 text-xs font-medium py-2 px-1 rounded-lg transition-all ${
                  activeRole === role.id 
                    ? "bg-[var(--brand-secondary)] shadow-sm text-white" 
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {role.label}
              </button>
            ))}
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-300">Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="name@example.com" 
                        {...field} 
                        className="bg-[#0f172a] border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-[var(--brand-secondary)]"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel className="text-slate-300">Password</FormLabel>
                      <Link 
                        to="/forgot-password" 
                        className="text-xs font-medium text-[#60a5fa] hover:text-[#93c5fd] transition-colors"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <FormControl>
                      <div className="relative">
                        <Input 
                          type={showPassword ? "text" : "password"} 
                          placeholder="••••••••" 
                          {...field} 
                          className="bg-[#0f172a] border-white/10 text-white focus-visible:ring-[var(--brand-secondary)] pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors"
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] text-white rounded-xl h-11 transition-all mt-4" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
          </Form>

          <p className="text-center text-sm text-slate-400 mt-8">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-[#60a5fa] hover:text-[#93c5fd] transition-colors"
            >
              Contact Admin
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
