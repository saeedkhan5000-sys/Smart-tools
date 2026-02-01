"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, ShieldCheck, Zap, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-24 px-6">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full -mr-48 -mt-48" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full text-xs font-black tracking-widest text-blue-400 uppercase mb-8"
          >
            <Sparkles size={14} /> Our Story
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tighter leading-[0.95]"
          >
            Empowering Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Financial Future
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium"
          >
            MTsTools Pro is more than just a calculator. We are building the next generation of 
            financial clarity tools for the 2026 digital economy.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Our Mission</h2>
            <div className="space-y-6">
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                Humara maqsad hai ke hum har investor ko wo tools provide karein jo unhein 
                sahi financial decisions lene mein madad dein. Wealth creation koi raaz nahi hai, 
                balki ye discipline aur sahi planning ka natija hai.
              </p>
              <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm border-l-4 border-l-blue-600">
                <p className="text-slate-600 italic font-medium">
                  "MTsTools Pro par hum modern technology (Next.js & TypeScript) ka use karte hain 
                  taaki aapko fast aur real-time calculations mil sakein, bina kisi data privacy risk ke."
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            <FeatureCard icon={<Target size={28}/>} title="Precision" sub="Accurate Math" color="bg-blue-50" text="text-blue-600" delay={0.1} />
            <FeatureCard icon={<Users size={28}/>} title="User Centric" sub="Clean UX" color="bg-emerald-50" text="text-emerald-600" delay={0.2} />
            <FeatureCard icon={<ShieldCheck size={28}/>} title="Privacy" sub="Safe Local Processing" color="bg-violet-50" text="text-violet-600" delay={0.3} />
            <FeatureCard icon={<Zap size={28}/>} title="Speed" sub="Instant Results" color="bg-amber-50" text="text-amber-600" delay={0.4} />
          </div>
        </div>

        {/* Why Us Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[4rem] p-12 md:p-20 shadow-[0_40px_100px_rgba(0,0,0,0.03)] border border-slate-50 overflow-hidden relative"
        >
          <div className="max-w-3xl mx-auto relative z-10 text-center">
            <h2 className="text-4xl font-black text-slate-900 mb-12 tracking-tight">Why Choose MTsTools Pro?</h2>
            <div className="space-y-8 text-left">
              <BenefitItem title="Absolute Transparency" desc="Humara calculator open logic par chalta hai, koi hidden charges ya bias nahi hai." />
              <BenefitItem title="Educational Depth" desc="Hum sirf numbers nahi dikhate, balki compounding aur finance ki knowledge bhi share karte hain." />
              <BenefitItem title="Ad-Lite Experience" desc="Humne ads ko is tarah optimize kiya hai ke aapka calculation experience kabhi disturb na ho." />
            </div>
          </div>
          <Heart className="absolute -bottom-10 -right-10 text-slate-50 w-64 h-64 pointer-events-none" />
        </motion.div>
      </section>
    </main>
  );
}

// Helper Components
function FeatureCard({ icon, title, sub, color, text, delay }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      className={`${color} p-8 rounded-[2.5rem] flex flex-col items-center text-center group transition-transform hover:scale-105`}
    >
      <div className={`${text} mb-4 transition-transform group-hover:scale-110`}>{icon}</div>
      <h3 className="font-black text-slate-800 tracking-tight">{title}</h3>
      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1 italic opacity-70">{sub}</p>
    </motion.div>
  );
}

function BenefitItem({ title, desc }: any) {
  return (
    <div className="flex gap-6 group">
      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-blue-600 group-hover:text-white text-blue-600">
        <CheckCircle2 size={24} />
      </div>
      <div>
        <h4 className="text-xl font-black text-slate-800 tracking-tight mb-1">{title}</h4>
        <p className="text-slate-500 font-medium leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}