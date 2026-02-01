"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TrendingUp, Moon, Timer, ArrowUpRight, BarChart3, ShieldCheck } from 'lucide-react';

interface ToolCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  color: string;
  iconColor: string;
}

const ToolCard = ({ title, description, icon, href, color, iconColor }: ToolCardProps) => (
  <motion.div 
    whileHover={{ y: -10 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Link href={href} className="group block h-full">
      <div className="h-full bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-300 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] group-hover:border-blue-100 relative overflow-hidden">
        {/* Decorative Background Blur */}
        <div className={`absolute -right-4 -top-4 w-24 h-24 ${color} opacity-20 blur-3xl rounded-full group-hover:opacity-40 transition-opacity`} />
        
        <div className={`w-16 h-16 ${color} ${iconColor} rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-inner transition-transform group-hover:scale-110 duration-500`}>
          {icon}
        </div>
        
        <h3 className="text-2xl font-black text-slate-800 mb-4 tracking-tight">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-8">{description}</p>
        
        <div className="flex items-center text-slate-900 font-bold text-xs uppercase tracking-widest group-hover:text-blue-600 transition-colors">
          Explore Tool 
          <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>
    </Link>
  </motion.div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] overflow-x-hidden">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <header className="text-center mb-24 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white border border-slate-200 px-5 py-2 rounded-full text-xs font-black tracking-[0.15em] text-slate-500 uppercase shadow-sm mb-8"
          >
            <ShieldCheck size={14} className="text-emerald-500" /> Financial Suite 2026
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.95]"
          >
            Control Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500">
              Economic Future
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed font-medium"
          >
            High-precision financial calculators optimized for the 2026 market. 
            Built for clarity, speed, and absolute accuracy.
          </motion.p>
        </header>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          <ToolCard 
            title="SIP Planner"
            description="Visualize the compound growth of your monthly mutual fund investments with precision."
            icon={<TrendingUp size={28} />}
            href="/sip"
            color="bg-blue-50"
            iconColor="text-blue-600"
          />
          <ToolCard 
            title="Zakat Portal"
            description="Calculate your divine obligation using real-time global gold and silver market rates."
            icon={<Moon size={28} />}
            href="/zakat"
            color="bg-emerald-50"
            iconColor="text-emerald-600"
          />
          <ToolCard 
            title="Time Is Money"
            description="Analyze the true cost of your purchases by converting price into hours of your life."
            icon={<Timer size={28} />}
            href="/time"
            color="bg-violet-50"
            iconColor="text-violet-600"
          />
        </div>

        {/* SEO/AdSense Content Area */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-[0_40px_100px_rgba(0,0,0,0.03)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] rotate-12 pointer-events-none">
            <BarChart3 size={200} />
          </div>
          
          <div className="max-w-3xl relative z-10">
            <h2 className="text-3xl font-black mb-8 text-slate-900 tracking-tight">
              Why Professionals Trust <br/> Our 2026 Financial Suite
            </h2>
            <div className="space-y-6 text-slate-500 leading-relaxed font-medium">
              <p>
                In an era of rapid economic shifts, static tools are no longer enough. Our platform integrates **live market data** directly into your planning, ensuring that whether you are calculating Zakat or planning a SIP, you are using today's numbers—not last year's.
              </p>
              <p>
                Every tool is designed with a **privacy-first approach**. All your sensitive financial inputs remain in your browser, processed locally with zero data logging, giving you total peace of mind while you plan your growth.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}