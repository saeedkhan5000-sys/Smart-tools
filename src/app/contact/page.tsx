"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageSquare, Send, MapPin, Globe, CheckCircle2, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setStatus("success");
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] py-20 px-6 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-6xl w-full mx-auto"
      >
        <div className="grid lg:grid-cols-5 gap-0 bg-white rounded-[3.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden">
          
          {/* Left Side: Contact Info (Takes 2 columns) */}
          <div className="lg:col-span-2 bg-slate-900 p-10 md:p-16 text-white relative overflow-hidden flex flex-col justify-between">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full -mr-32 -mt-32" />
            
            <div className="relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest text-blue-400 uppercase mb-8"
              >
                <Sparkles size={14} /> Let's Connect
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter leading-tight">
                Get in <span className="text-blue-400">Touch</span>
              </h1>
              
              <p className="text-slate-400 mb-12 text-lg font-medium leading-relaxed">
                Have a question about our calculators or want to suggest a new tool? 
                Our team usually responds within 24 hours.
              </p>

              <div className="space-y-8">
                <ContactDetail 
                  icon={<Mail size={20} />} 
                  label="Email our support" 
                  value="saeedkhan5000@gmail.com" 
                />
                <ContactDetail 
                  icon={<MapPin size={20} />} 
                  label="Headquarters" 
                  value="Ghazi, KPK, Pakistan" 
                />
                <ContactDetail 
                  icon={<Globe size={20} />} 
                  label="Available" 
                  value="Worldwide (24/7)" 
                />
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm"
            >
              <p className="text-xs italic text-slate-300 font-medium leading-relaxed">
                "Financial freedom starts with a single step and the right tools. We are here to help you take that step."
              </p>
            </motion.div>
          </div>

          {/* Right Side: Contact Form (Takes 3 columns) */}
          <div className="lg:col-span-3 p-10 md:p-20 bg-white flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-center space-y-6 py-10"
                >
                  <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-[2rem] flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 size={48} />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight">Message Sent!</h2>
                    <p className="text-slate-500 font-medium">Thank you for reaching out. We've received your inquiry.</p>
                  </div>
                  <button 
                    onClick={() => setStatus(null)} 
                    className="text-blue-600 font-black text-xs uppercase tracking-widest hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-8"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase ml-1 tracking-widest">Full Name</label>
                      <input required type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase ml-1 tracking-widest">Email Address</label>
                      <input required type="email" placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase ml-1 tracking-widest">Your Message</label>
                    <textarea required rows={5} placeholder="Tell us how we can help..." className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all resize-none"></textarea>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-slate-900 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-[0.2em]"
                  >
                    <Send size={18} /> Send Inquiry
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </motion.div>
    </main>
  );
}

// Helper Component
function ContactDetail({ icon, label, value }: any) {
  return (
    <div className="flex items-center gap-5 group">
      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 border border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-0.5">{label}</p>
        <p className="font-bold text-slate-200 tracking-tight">{value}</p>
      </div>
    </div>
  );
}