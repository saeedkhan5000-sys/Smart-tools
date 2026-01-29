"use client";
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Globe, IndianRupee, DollarSign, Wallet } from 'lucide-react';

// Currency Configuration
const currencies = [
  { label: 'INR (₹)', value: 'INR', symbol: '₹', locale: 'en-IN' },
  { label: 'USD ($)', value: 'USD', symbol: '$', locale: 'en-US' },
  { label: 'PKR (Rs)', value: 'PKR', symbol: 'Rs', locale: 'en-PK' },
];

export default function SipCalculator() {
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

  // Currency Formatter Function
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
    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
      {/* Top Bar: Currency Switcher */}
      <div className="bg-gray-50 p-4 border-b flex justify-between items-center">
        <span className="text-sm font-bold text-gray-500 flex items-center gap-2">
          <Globe size={16} /> SELECT CURRENCY
        </span>
        <div className="flex gap-2">
          {currencies.map((curr) => (
            <button
              key={curr.value}
              onClick={() => setCurrency(curr)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
                currency.value === curr.value 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-600 border hover:border-blue-400'
              }`}
            >
              {curr.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-0">
        {/* Left: Controls */}
        <div className="p-8 space-y-8">
          <div>
            <div className="flex justify-between mb-4">
              <label className="font-bold text-gray-700">Monthly Investment</label>
              <span className="text-blue-600 font-black text-xl">{formatValue(amount)}</span>
            </div>
            <input type="range" min={currency.value === 'USD' ? 10 : 500} max={currency.value === 'USD' ? 5000 : 100000} step={currency.value === 'USD' ? 10 : 500} 
              value={amount} onChange={(e) => setAmount(Number(e.target.value))} 
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
          </div>

          <div>
            <div className="flex justify-between mb-4">
              <label className="font-bold text-gray-700">Expected Returns (p.a)</label>
              <span className="text-green-600 font-black text-xl">{rate}%</span>
            </div>
            <input type="range" min="1" max="30" step="0.5" value={rate} 
              onChange={(e) => setRate(Number(e.target.value))} 
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600" />
          </div>

          <div>
            <div className="flex justify-between mb-4">
              <label className="font-bold text-gray-700">Tenure (Years)</label>
              <span className="text-purple-600 font-black text-xl">{years} Years</span>
            </div>
            <input type="range" min="1" max="40" value={years} 
              onChange={(e) => setYears(Number(e.target.value))} 
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600" />
          </div>
        </div>

        {/* Right: Visualization */}
        <div className="bg-slate-50 p-8 flex flex-col items-center justify-center border-l">
          <div className="h-60 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={chartData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  <Cell fill="#3b82f6" />
                  <Cell fill="#10b981" />
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-8 text-center space-y-2">
            <p className="text-gray-500 font-medium">Estimated Total Wealth</p>
            <h2 className="text-4xl font-black text-gray-900">{formatValue(result.total)}</h2>
            <div className="pt-4 flex gap-4 text-sm">
              <div className="flex items-center gap-1 text-blue-600 font-bold">● Invested</div>
              <div className="flex items-center gap-1 text-green-600 font-bold">● Returns</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}