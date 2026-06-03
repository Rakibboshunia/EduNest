import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, ArrowLeft, MailCheck } from "lucide-react";

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
import { motion } from "framer-motion";

const schema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (values) => {
    setIsLoading(true);
    // Mock API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0f172a] p-4 relative overflow-hidden selection:bg-[#1d4ed8]/30">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--brand-primary)]/20 rounded-full blur-[120px] z-0 pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative z-10"
      >
        {!isSent ? (
          <>
            <div className="flex flex-col items-center justify-center mb-8 text-center">
              <img src="/logo.png" alt="EduNest Logo" className="h-10 w-auto bg-white p-1 rounded mb-4" onError={(e) => e.target.style.display = 'none'} />
              <h2 className="text-2xl font-bold text-white mb-2">Forgot password?</h2>
              <p className="text-slate-400 text-sm">
                Enter your email address and we'll send you a link to reset your password.
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                
                <Button 
                  type="submit" 
                  className="w-full bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] text-white rounded-xl h-11 transition-all mt-6" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    "Send reset link"
                  )}
                </Button>
              </form>
            </Form>
          </>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center space-y-4 text-center py-6"
          >
            <div className="h-20 w-20 rounded-full bg-[var(--brand-secondary)]/20 flex items-center justify-center text-[#4ade80] mb-4 border border-[var(--brand-secondary)]/30">
              <MailCheck className="h-10 w-10" />
            </div>
            <h2 className="text-2xl font-bold text-white">Check your email</h2>
            <p className="text-slate-400 text-sm">
              We've sent a password reset link to <br />
              <span className="font-medium text-white mt-1 block">{form.getValues().email}</span>
            </p>
          </motion.div>
        )}

        <div className="mt-8 text-center">
          <Link to="/login" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to login
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
