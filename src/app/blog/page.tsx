"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PieChart, ArrowUpRight, BookOpen, Calendar, ChevronRight, Mail } from 'lucide-react';

const insights = [
  {
    id: 1,
    title: "Why Nifty 50 is hitting record highs in 2026?",
    category: "Market Analysis",
    date: "Jan 24, 2026",
    excerpt: "Understanding the global factors driving the Indian bull run and what it means for SIP investors.",
    icon: <TrendingUp size={24} />,
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: 2,
    title: "Small Cap vs Large Cap: Where to invest now?",
    category: "Investment Tips",
    date: "Jan 20, 2026",
    excerpt: "Risk analysis of small-cap funds in the current market valuation and historical data trends.",
    icon: <PieChart size={24} />,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    id: 3,
    title: "How Inflation impacts your long-term SIP returns?",
    category: "Education",
    date: "Jan 15, 2026",
    excerpt: "Learn why adjusting your SIP amount with your salary (Step-up) is crucial to beat inflation.",
    icon: <ArrowUpRight size={24} />,
    color: "bg-violet-50 text-violet-600",
  }
];

export default function MarketInsights() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4"
            >
              <BookOpen size={16} /> Knowledge Hub
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter"
            >
              Market <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Insights 2026</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 mt-4 text-lg font-medium leading-relaxed"
            >
              Professional analysis and financial education to help you navigate the 2026 economy.
            </motion.p>
          </div>
        </header>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {insights.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col h-full group transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] cursor-pointer"
            >
              <div className={`w-14 h-14 ${post.color} rounded-2xl flex items-center justify-center mb-6 shadow-inner transition-transform group-hover:scale-110`}>
                {post.icon}
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  <Calendar size={12} /> {post.date}
                </span>
              </div>

              <h2 className="text-2xl font-black text-slate-800 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              
              <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-grow">
                {post.excerpt}
              </p>

              <div className="flex items-center text-slate-900 font-black text-[10px] uppercase tracking-widest pt-6 border-t border-slate-50 group-hover:text-blue-600 transition-all">
                Read Full Insight <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-slate-900 rounded-[3.5rem] p-10 md:p-16 overflow-hidden shadow-[0_40px_100px_rgba(30,41,59,0.2)]"
        >
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full -mr-32 -mt-32" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-md text-center lg:text-left">
              <div className="inline-flex p-3 bg-white/10 rounded-2xl mb-6 text-blue-400">
                <Mail size={32} />
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Stay Ahead of the Curve.</h3>
              <p className="text-slate-400 font-medium">Get exclusive 2026 market strategies delivered straight to your inbox every Sunday.</p>
            </div>

            <div className="w-full max-w-md">
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your professional email" 
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-medium"
                />
                <button className="bg-blue-600 hover:bg-blue-500 text-white font-black px-8 py-4 rounded-2xl shadow-lg shadow-blue-900/20 transition-all active:scale-95 uppercase text-xs tracking-widest">
                  Join Now
                </button>
              </form>
              <p className="text-center text-slate-500 text-[10px] mt-4 font-medium italic">
                No spam. Just high-value financial data.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}