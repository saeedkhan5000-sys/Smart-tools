"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { TrendingUp, Wallet, PieChart as ChartIcon, ArrowUpRight } from 'lucide-react';

const currencies = [
  { label: 'India', value: 'INR', symbol: '₹', locale: 'en-IN' },
  { label: 'USA', value: 'USD', symbol: '$', locale: 'en-US' },
  { label: 'Pakistan', value: 'PKR', symbol: 'Rs', locale: 'en-PK' },
];

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function ProfessionalSipCalculator() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [amount, setAmount] = useState<number>(5000);
  const [rate, setRate] = useState<number>(12);
  const [years, setYears] = useState<number>(10);
  const [result, setResult] = useState({ invested: 0, gain: 0, total: 0 });

  useEffect(() => {
    const i = rate / 12 / 100;
    const n = years * 12;
    const totalValue = amount * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const invested = amount * n;
    
    setResult({
      invested: Math.round(invested),
      gain: Math.round(totalValue - invested),
      total: Math.round(totalValue)
    });
  }, [amount, rate, years]);

  const formatValue = (val: number) => {
    return new Intl.NumberFormat(currency.locale, {
      style: 'currency',
      currency: currency.value,
      maximumFractionDigits: 0,
    }).format(val);
  };

  const chartData = [
    { name: 'Invested', value: result.invested },
    { name: 'Returns', value: result.gain },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-12 font-sans">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-5xl mx-auto"
      >
        {/* Main Card */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white overflow-hidden backdrop-blur-sm">
          
          {/* Header */}
          <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6 bg-gradient-to-r from-white to-slate-50">
            <motion.div variants={fadeInUp} initial="initial" animate="animate">
              <div className="flex items-center gap-3 mb-1">
                <div className="bg-indigo-600 p-2 rounded-lg">
                  <TrendingUp className="text-white" size={20} />
                </div>
                <h1 className="text-2xl font-black text-slate-900 tracking-tight">WealthGen SIP</h1>
              </div>
              <p className="text-slate-500 text-sm font-medium">Smart investment planning for your future.</p>
            </motion.div>

            <div className="flex bg-slate-200/50 p-1.5 rounded-2xl border border-slate-100">
              {currencies.map((curr) => (
                <motion.button
                  key={curr.value}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrency(curr)}
                  className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                    currency.value === curr.value 
                    ? 'bg-white text-indigo-600 shadow-md' 
                    : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {curr.value}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Column: Interactive Inputs */}
            <div className="p-8 md:p-12 space-y-12 border-r border-slate-50">
              
              {[
                { label: 'Monthly Deposit', val: amount, set: setAmount, min: 500, max: 100000, step: 500, color: 'accent-indigo-600', sym: currency.symbol },
                { label: 'Expected Return (p.a)', val: rate, set: setRate, min: 1, max: 30, step: 0.5, color: 'accent-emerald-500', sym: '%' },
                { label: 'Time Horizon (Years)', val: years, set: setYears, min: 1, max: 40, step: 1, color: 'accent-orange-500', sym: 'Yrs' }
              ].map((item, idx) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="flex justify-between items-center mb-6">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest group-hover:text-indigo-600 transition-colors">
                      {item.label}
                    </label>
                    <motion.div 
                      key={item.val}
                      initial={{ scale: 1.1, color: '#4f46e5' }}
                      animate={{ scale: 1, color: '#1e293b' }}
                      className="text-2xl font-black"
                    >
                      {item.label.includes('Deposit') ? formatValue(item.val) : `${item.val}${item.sym}`}
                    </motion.div>
                  </div>
                  <input 
                    type="range" 
                    min={item.min} max={item.max} step={item.step}
                    value={item.val} 
                    onChange={(e) => item.set(Number(e.target.value))}
                    className={`w-full h-2.5 bg-slate-100 rounded-lg appearance-none cursor-pointer ${item.color} hover:bg-slate-200 transition-all`}
                  />
                </motion.div>
              ))}
            </div>

            {/* Right Column: Visual Rewards */}
            <div className="bg-[#fcfdfe] p-8 md:p-12 flex flex-col justify-between">
              <div className="relative h-64 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie 
                      data={chartData} 
                      innerRadius="75%" outerRadius="95%" 
                      paddingAngle={10} dataKey="value" stroke="none"
                      animationBegin={0} animationDuration={1200}
                    >
                      <Cell fill="#6366f1" />
                      <Cell fill="#10b981" />
                    </Pie>
                    <Tooltip cursor={{fill: 'transparent'}} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute flex flex-col items-center">
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-tighter">Net Wealth</span>
                  <motion.span 
                    key={result.total}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-black text-slate-900"
                  >
                    {formatValue(result.total)}
                  </motion.span>
                </div>
              </div>

              <div className="space-y-4 mt-8">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-5 rounded-[2rem] bg-white border border-slate-100 shadow-sm flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl"><Wallet size={20}/></div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">You Invested</p>
                      <p className="text-lg font-bold text-slate-800">{formatValue(result.invested)}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="text-slate-300" size={20} />
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-5 rounded-[2rem] bg-white border border-slate-100 shadow-sm flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl"><ChartIcon size={20}/></div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Profit Earned</p>
                      <p className="text-lg font-bold text-emerald-600">{formatValue(result.gain)}</p>
                    </div>
                  </div>
                  <div className="bg-emerald-100 px-3 py-1 rounded-full text-[10px] font-black text-emerald-700">
                    +{Math.round((result.gain/result.invested)*100)}%
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button/CTA */}
        <motion.button
          whileHover={{ scale: 1.02, translateY: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-8 bg-slate-900 text-white py-6 rounded-[2rem] font-bold text-lg shadow-2xl shadow-slate-200 flex items-center justify-center gap-3 group"
        >
          Start Investing Now
          <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowUpRight className="group-hover:text-indigo-400 transition-colors" />
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
}