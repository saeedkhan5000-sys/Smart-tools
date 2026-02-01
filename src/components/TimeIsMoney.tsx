"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ShoppingCart, Wallet, Timer, ArrowRight, Zap, Coffee } from 'lucide-react';

export default function TimeIsMoney() {
  const [salary, setSalary] = useState<number>(0);
  const [workHours, setWorkHours] = useState<number>(8);
  const [itemPrice, setItemPrice] = useState<number>(0);

  // Logic: 22 working days per month
  const hourlyRate = salary > 0 ? salary / (22 * workHours) : 0;
  const lifeHoursNeeded = hourlyRate > 0 ? itemPrice / hourlyRate : 0;
  const daysNeeded = (lifeHoursNeeded / workHours).toFixed(1);

  return (
    <div className="min-h-screen bg-[#f5f3ff] p-4 md:p-10 font-sans">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(79,70,229,0.1)] border border-indigo-50 overflow-hidden">
          
          {/* Header Section */}
          <div className="p-8 border-b border-indigo-50 bg-gradient-to-r from-indigo-600 to-violet-700 text-white flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
                <Timer className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-black tracking-tight">Time is Money</h1>
                <p className="text-indigo-100 text-[10px] font-bold uppercase tracking-[0.2em]">Zindagi ki asli qeemat</p>
              </div>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/20 text-xs font-medium">
              Standard 22-Day Work Month
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Input Side */}
            <div className="p-8 md:p-12 space-y-8 border-r border-indigo-50">
              <div className="space-y-6">
                <InputField 
                  label="Monthly Net Salary" 
                  icon={<Wallet size={16}/>} 
                  placeholder="e.g. 150000" 
                  onChange={(v: number) => setSalary(v)} 
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <InputField 
                    label="Daily Work Hours" 
                    icon={<Clock size={16}/>} 
                    placeholder="8" 
                    onChange={(v: number) => setWorkHours(v)} 
                  />
                  <InputField 
                    label="Item Price" 
                    icon={<ShoppingCart size={16}/>} 
                    placeholder="e.g. 300000" 
                    onChange={(v: number) => setItemPrice(v)} 
                  />
                </div>
              </div>

              <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100 flex items-start gap-3">
                <Coffee className="text-indigo-600 mt-1" size={18} />
                <p className="text-xs text-indigo-800 leading-relaxed font-medium">
                  Ye tool aapko batayega ke aap jo cheez kharid rahe hain, uske liye aapko apni zindagi ke kitne ghante kaam karna parega.
                </p>
              </div>
            </div>

            {/* Results Side */}
            <div className="bg-indigo-50/30 p-8 md:p-12 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {salary > 0 && itemPrice > 0 ? (
                  <motion.div 
                    key="result"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-indigo-100 text-center relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-6 opacity-5">
                        <Zap size={100} className="text-indigo-600" />
                      </div>
                      <p className="text-indigo-600 font-bold text-[10px] uppercase tracking-widest mb-2">Life Cost Required</p>
                      <h2 className="text-5xl font-black text-slate-800 tracking-tighter mb-2">
                        {lifeHoursNeeded.toFixed(1)} <span className="text-2xl">Hrs</span>
                      </h2>
                      <div className="inline-block px-4 py-1 bg-indigo-600 text-white rounded-full text-[10px] font-black uppercase tracking-tighter">
                        ≈ {daysNeeded} Work Days
                      </div>
                    </div>

                    {/* Hourly Rate Card */}
                    <div className="bg-indigo-900 text-white p-6 rounded-3xl flex justify-between items-center shadow-lg shadow-indigo-200">
                      <div>
                        <p className="text-indigo-300 text-[10px] font-bold uppercase tracking-widest">Your Hourly Worth</p>
                        <p className="text-xl font-bold font-mono">
                          {hourlyRate.toFixed(2)} <span className="text-xs text-indigo-400">/hr</span>
                        </p>
                      </div>
                      <div className="bg-white/10 p-2 rounded-xl">
                        <ArrowRight size={20} className="text-indigo-300" />
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-slate-400 text-[10px] font-medium italic">
                        "Zindagi ka waqt sab se mehnga sarmaya hai."
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center space-y-4"
                  >
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto text-indigo-300 shadow-inner">
                      <Zap size={32} />
                    </div>
                    <p className="text-slate-400 font-medium text-sm">Apni details enter karein taake <br/> calculation shuru ho sakay.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Sub-component for Inputs
function InputField({ label, icon, placeholder, onChange }: any) {
  return (
    <div className="space-y-1.5">
      <label className="text-[10px] font-black text-slate-400 uppercase ml-1 flex items-center gap-2">
        {icon} {label}
      </label>
      <input 
        type="number" 
        placeholder={placeholder}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
      />
    </div>
  );
}