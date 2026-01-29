"use client";
import { useState } from "react";
import { Clock, ShoppingCart, Wallet, Timer } from "lucide-react"; // Icons ke liye lucide-react install karlein

export default function TimeIsMoney() {
  const [salary, setSalary] = useState<number>(0);
  const [workHours, setWorkHours] = useState<number>(8);
  const [itemPrice, setItemPrice] = useState<number>(0);

  // Logic: 22 working days per month
  const hourlyRate = salary > 0 ? salary / (22 * workHours) : 0;
  const lifeHoursNeeded = hourlyRate > 0 ? itemPrice / hourlyRate : 0;

  const daysNeeded = (lifeHoursNeeded / workHours).toFixed(1);

  return (
    <div className="max-w-md mx-auto my-10 bg-slate-50 border border-slate-200 rounded-3xl shadow-xl overflow-hidden">
      <div className="bg-indigo-600 p-6 text-white text-center">
        <h2 className="text-2xl font-bold flex justify-center items-center gap-2">
          <Timer className="w-8 h-8" /> Time is Money
        </h2>
        <p className="text-indigo-100 text-sm mt-1">Apni mehnat ki asli qeemat janiye</p>
      </div>

      <div className="p-6 space-y-5">
        {/* Monthly Salary Input */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
            <Wallet className="w-4 h-4 text-indigo-500" /> Monthly Salary (Net)
          </label>
          <input
            type="number"
            className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
            placeholder="e.g. 100,000"
            onChange={(e) => setSalary(Number(e.target.value))}
          />
        </div>

        {/* Work Hours Input */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
            <Clock className="w-4 h-4 text-indigo-500" /> Daily Work Hours
          </label>
          <input
            type="number"
            className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
            placeholder="e.g. 8"
            value={workHours}
            onChange={(e) => setWorkHours(Number(e.target.value))}
          />
        </div>

        {/* Item Price Input */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
            <ShoppingCart className="w-4 h-4 text-indigo-500" /> Item Price (Jo kharidna hai)
          </label>
          <input
            type="number"
            className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
            placeholder="e.g. 250,000 for iPhone"
            onChange={(e) => setItemPrice(Number(e.target.value))}
          />
        </div>

        {/* Result Section */}
        {itemPrice > 0 && salary > 0 && (
          <div className="mt-8 p-6 bg-indigo-900 text-white rounded-2xl space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center">
              <p className="text-indigo-300 text-sm uppercase tracking-wider font-bold">Life Cost Analysis</p>
              <h3 className="text-3xl font-extrabold mt-2 text-yellow-400">
                {lifeHoursNeeded.toFixed(1)} Hours
              </h3>
              <p className="text-indigo-100 mt-1 italic text-sm">
                Aapko is cheez ke liye takreeban <strong>{daysNeeded} din</strong> kaam karna parega.
              </p>
            </div>
            
            <div className="pt-4 border-t border-indigo-800 flex justify-between text-sm">
              <span>Hourly Rate:</span>
              <span className="font-mono text-emerald-400 font-bold">{hourlyRate.toFixed(2)} / hr</span>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4 bg-slate-100 text-center text-xs text-slate-500">
        Calculated based on 22 working days per month.
      </div>
    </div>
  );
}