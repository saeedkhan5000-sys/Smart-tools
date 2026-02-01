"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coins, Landmark, ArrowRight, Info, RotateCcw, Wallet, Moon, ChevronDown } from 'lucide-react';

// --- Types Definition ---
interface Currency {
  label: string;
  value: string;
  symbol: string;
  locale: string;
}

const currencies: Currency[] = [
  { label: 'USD', value: 'USD', symbol: '$', locale: 'en-US' },
  { label: 'PKR', value: 'PKR', symbol: 'Rs', locale: 'en-PK' },
  { label: 'INR', value: 'INR', symbol: '₹', locale: 'en-IN' },
];

export default function ProfessionalZakatCalculator() {
  const [rates, setRates] = useState<{ gold: number; silver: number } | null>(null);
  const [currency, setCurrency] = useState<Currency>(currencies[0]);
  const [goldGrams, setGoldGrams] = useState(0);
  const [silverGrams, setSilverGrams] = useState(0);
  const [cash, setCash] = useState({ usd: 0, pkr: 0, inr: 0 });
  const [receivable, setReceivable] = useState(0);
  const [debts, setDebts] = useState(0);
  const [totalZakat, setTotalZakat] = useState<number | null>(null);
  const [isCalculated, setIsCalculated] = useState(false);

  const exchangeRates: Record<string, number> = { USD: 1, PKR: 278, INR: 83 };

  useEffect(() => {
    const fetchLiveRates = async () => {
      try {
        const [goldRes, silverRes] = await Promise.all([
          fetch('/pages/api/gold'),
          fetch('/pages/api/silver')
        ]);
        const goldData = await goldRes.json();
        const silverData = await silverRes.json();

        if (goldData.price && silverData.price) {
          setRates({ gold: goldData.price, silver: silverData.price });
        }
      } catch (err) {
        console.error("Rates fetch error, using fallback:", err);
        setRates({ gold: 2040, silver: 23.2 });
      }
    };
    fetchLiveRates();
  }, []);

  const calculateZakat = () => {
    if (!rates) return;
    const ozToGram = 31.1035;
    const goldPricePerGram = (rates.gold / ozToGram) * exchangeRates[currency.value];
    const silverPricePerGram = (rates.silver / ozToGram) * exchangeRates[currency.value];

    const goldValue = goldGrams * goldPricePerGram;
    const silverValue = silverGrams * silverPricePerGram;
    const cashValue = (cash.usd * exchangeRates[currency.value]) + 
                      (cash.pkr * (exchangeRates[currency.value] / (exchangeRates["PKR"] || 278))) + 
                      (cash.inr * (exchangeRates[currency.value] / (exchangeRates["INR"] || 83)));

    const totalAssets = goldValue + silverValue + cashValue + receivable;
    const netWealth = totalAssets - debts;
    const nisabThreshold = 612.36 * silverPricePerGram;

    setTotalZakat(netWealth >= nisabThreshold ? netWealth * 0.025 : 0);
    setIsCalculated(true);
  };

  const formatValue = (val: number) => {
    return new Intl.NumberFormat(currency.locale, {
      style: 'currency', currency: currency.value, maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-10 font-sans">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto">
        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(15,118,110,0.07)] border border-slate-100 overflow-hidden">
          
          <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6 bg-emerald-50/20">
            <div className="flex items-center gap-4">
              <div className="bg-emerald-600 p-3 rounded-2xl shadow-lg shadow-emerald-200">
                <Moon className="text-white fill-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-black text-slate-800 tracking-tight">Zakat Portal</h1>
                <p className="text-emerald-600 text-[10px] font-bold uppercase tracking-widest">Global Rates Integration</p>
              </div>
            </div>

            <div className="flex bg-slate-200/50 p-1.5 rounded-2xl">
              {currencies.map((curr) => (
                <button
                  key={curr.value}
                  onClick={() => { setCurrency(curr); setIsCalculated(false); }}
                  className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${
                    currency.value === curr.value ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500'
                  }`}
                >
                  {curr.value}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 space-y-8 border-r border-slate-50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <section className="space-y-4">
                  <h3 className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest"><Coins size={14} /> Metals</h3>
                  <InputField label="Gold (Grams)" onChange={(v: number) => setGoldGrams(v)} />
                  <InputField label="Silver (Grams)" onChange={(v: number) => setSilverGrams(v)} />
                </section>
                <section className="space-y-4">
                  <h3 className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest"><Wallet size={14} /> Cash</h3>
                  <InputField label="USD Savings" onChange={(v: number) => setCash({...cash, usd: v})} />
                  <InputField label="Local Savings" onChange={(v: number) => currency.value === 'PKR' ? setCash({...cash, pkr: v}) : setCash({...cash, inr: v})} />
                </section>
              </div>

              <section className="space-y-4 pt-4 border-t border-slate-50">
                <h3 className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest"><Landmark size={14} /> Adjustments</h3>
                <div className="grid grid-cols-2 gap-4">
                  <InputField label="Receivables" onChange={(v: number) => setReceivable(v)} />
                  <InputField label="Total Debts" onChange={(v: number) => setDebts(v)} />
                </div>
              </section>

              <motion.button
                whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
                onClick={calculateZakat}
                className="w-full bg-slate-900 hover:bg-emerald-700 text-white font-bold py-5 rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all"
              >
                Calculate Zakat Due <ArrowRight size={18} />
              </motion.button>
            </div>

            <div className="bg-slate-50/50 p-8 flex flex-col">
              <AnimatePresence mode="wait">
                {!isCalculated ? (
                  <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="m-auto text-center space-y-4 max-w-xs">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto text-emerald-600"><Info size={28} /></div>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">Please fill in your assets. Zakat is calculated at 2.5% of your net wealth if it exceeds Nisab.</p>
                  </motion.div>
                ) : (
                  <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-emerald-100 text-center">
                      <p className="text-emerald-600 font-bold text-xs uppercase tracking-widest mb-2">Net Zakat Payable</p>
                      <h2 className="text-5xl font-black text-slate-800 tracking-tighter">{formatValue(totalZakat!)}</h2>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                      <table className="w-full text-left text-xs">
                        <tbody className="divide-y divide-slate-100">
                          <AssetRow label="Metal Value" val={(goldGrams * (((rates?.gold || 0) / 31.1035)) + silverGrams * (((rates?.silver || 0) / 31.1035))) * exchangeRates[currency.value]} sym={currency.symbol} />
                          <AssetRow label="Cash Assets" val={(cash.usd * exchangeRates[currency.value]) + (cash.pkr * (exchangeRates[currency.value] / 278)) + (cash.inr * (exchangeRates[currency.value] / 83))} sym={currency.symbol} />
                          <AssetRow label="Receivables" val={receivable} sym={currency.symbol} />
                          <tr className="bg-red-50/30 text-red-500 italic">
                            <td className="px-4 py-3 font-medium">Total Liabilities</td>
                            <td className="px-4 py-3 text-right">-{currency.symbol}{debts.toLocaleString()}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <button onClick={() => setIsCalculated(false)} className="w-full flex items-center justify-center gap-2 text-slate-400 hover:text-emerald-600 font-bold text-xs py-2 transition-colors">
                      <RotateCcw size={14} /> Recalculate Assets
                    </button>
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

// --- Fixed Sub-components with Types ---
interface InputFieldProps {
  label: string;
  onChange: (value: number) => void;
}

function InputField({ label, onChange }: InputFieldProps) {
  return (
    <div className="space-y-1.5">
      <label className="text-[10px] font-black text-slate-400 uppercase ml-1 tracking-tight">{label}</label>
      <input 
        type="number" 
        onChange={(e) => onChange(Number(e.target.value))} 
        placeholder="0.00"
        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-emerald-500 transition-all" 
      />
    </div>
  );
}

interface AssetRowProps {
  label: string;
  val: number;
  sym: string;
}

function AssetRow({ label, val, sym }: AssetRowProps) {
  if (val <= 0) return null;
  return (
    <tr>
      <td className="px-4 py-3 font-medium text-slate-500">{label}</td>
      <td className="px-4 py-3 text-right font-bold text-slate-800">{sym}{Math.round(val).toLocaleString()}</td>
    </tr>
  );
}