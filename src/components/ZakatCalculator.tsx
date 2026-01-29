"use client";
import { useEffect, useState } from "react";

interface MetalData {
  price: number; // price per ounce
  currency: string;
}

export default function ZakatCalculator() {
  const [rates, setRates] = useState<{ gold: number; silver: number } | null>(null);
  const [currency, setCurrency] = useState("USD");
  
  // Input States
  const [goldGrams, setGoldGrams] = useState(0);
  const [silverGrams, setSilverGrams] = useState(0);
  const [cash, setCash] = useState({ usd: 0, pkr: 0, inr: 0 });
  const [receivable, setReceivable] = useState(0); // Paisay jo lene hain
  const [debts, setDebts] = useState(0); // Karza jo dena hai
  
  const [totalZakat, setTotalZakat] = useState<number | null>(null);

  // Exchange Rates (Mock rates - ideally fetch these from an API)
  const exchangeRates: Record<string, number> = { USD: 1, PKR: 278, INR: 83 };

  useEffect(() => {
    const fetchRates = async () => {
      // Logic to fetch live gold/silver prices
      // For demo, using static values: Gold $2000/oz, Silver $23/oz
      setRates({ gold: 2000, silver: 23 });
    };
    fetchRates();
  }, []);

  const calculateZakat = () => {
    if (!rates) return;

    const ozToGram = 31.1035;
    const goldPricePerGram = (rates.gold / ozToGram) * exchangeRates[currency];
    const silverPricePerGram = (rates.silver / ozToGram) * exchangeRates[currency];

    // Asset Calculations
    const goldValue = goldGrams * goldPricePerGram;
    const silverValue = silverGrams * silverPricePerGram;
    const cashValue = (cash.usd * exchangeRates[currency]) + 
                      (cash.pkr * (exchangeRates[currency] / exchangeRates["PKR"])) + 
                      (cash.inr * (exchangeRates[currency] / exchangeRates["INR"]));

    const totalAssets = goldValue + silverValue + cashValue + receivable;
    const netWealth = totalAssets - debts;

    // Nisab Threshold (Silver basis: 612.36 grams)
    const nisabThreshold = 612.36 * silverPricePerGram;

    if (netWealth >= nisabThreshold) {
      setTotalZakat(netWealth * 0.025);
    } else {
      setTotalZakat(0);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-emerald-100">
      <h2 className="text-3xl font-bold mb-6 text-emerald-800 text-center">🕌 Advance Zakat Calculator</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Currency Selection */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Calculation Currency</label>
          <select 
            className="w-full p-2 border rounded-md"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD ($)</option>
            <option value="PKR">PKR (Rs)</option>
            <option value="INR">INR (₹)</option>
          </select>
        </div>

        {/* Metals */}
        <div>
          <label className="block text-sm font-medium">Gold (Grams)</label>
          <input type="number" className="w-full p-2 border rounded" onChange={(e) => setGoldGrams(+e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium">Silver (Grams)</label>
          <input type="number" className="w-full p-2 border rounded" onChange={(e) => setSilverGrams(+e.target.value)} />
        </div>

        {/* Cash in different currencies */}
        <div>
          <label className="block text-sm font-medium">Cash (USD)</label>
          <input type="number" className="w-full p-2 border rounded" onChange={(e) => setCash({...cash, usd: +e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-medium">Cash (PKR)</label>
          <input type="number" className="w-full p-2 border rounded" onChange={(e) => setCash({...cash, pkr: +e.target.value})} />
        </div>

        {/* Debts & Receivables */}
        <div>
          <label className="block text-sm font-medium text-blue-600">Money Owed to You (Receivables)</label>
          <input type="number" className="w-full p-2 border rounded" onChange={(e) => setReceivable(+e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-red-600">Your Debts (Payables)</label>
          <input type="number" className="w-full p-2 border rounded" onChange={(e) => setDebts(+e.target.value)} />
        </div>
      </div>

      <button
        onClick={calculateZakat}
        className="w-full bg-emerald-600 text-white font-bold py-3 rounded-lg hover:bg-emerald-700 transition"
      >
        Calculate My Zakat
      </button>

      {totalZakat !== null && (
        <div className="mt-6 p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded">
          <p className="text-emerald-700 font-medium">Total Zakat Due:</p>
          <h3 className="text-2xl font-bold text-emerald-900">
            {totalZakat > 0 ? `${totalZakat.toLocaleString()} ${currency}` : "You don't meet Nisab criteria."}
          </h3>
          <p className="text-xs text-emerald-600 mt-2">*Calculation based on Silver Nisab (612.36g)</p>
        </div>
      )}
    </div>
  );
}