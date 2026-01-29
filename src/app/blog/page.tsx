import React from 'react';
import { TrendingUp, PieChart, ArrowUpRight, BookOpen } from 'lucide-react';
import Link from 'next/link';

// Mock data: Real project mein aap ise Contentful ya Sanity CMS se connect kar sakte hain
const insights = [
  {
    id: 1,
    title: "Why Nifty 50 is hitting record highs in 2026?",
    category: "Market Analysis",
    date: "Jan 24, 2026",
    excerpt: "Understanding the global factors driving the Indian bull run and what it means for SIP investors.",
    icon: <TrendingUp className="text-blue-600" />
  },
  {
    id: 2,
    title: "Small Cap vs Large Cap: Where to invest now?",
    category: "Investment Tips",
    date: "Jan 20, 2026",
    excerpt: "Risk analysis of small-cap funds in the current market valuation and historical data trends.",
    icon: <PieChart className="text-green-600" />
  },
  {
    id: 3,
    title: "How Inflation impacts your long-term SIP returns?",
    category: "Education",
    date: "Jan 15, 2026",
    excerpt: "Learn why adjusting your SIP amount with your salary (Step-up) is crucial to beat inflation.",
    icon: <ArrowUpRight className="text-purple-600" />
  }
];

export default function MarketInsights() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 border-b pb-8">
          <h1 className="text-4xl font-black text-gray-900 flex items-center gap-3">
            <BookOpen className="text-blue-600" /> Market Insights 2026
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Stay updated with the latest trends in mutual funds, stock markets, and financial planning.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition cursor-pointer">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                {post.icon}
              </div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                {post.category}
              </span>
              <h2 className="text-xl font-bold text-gray-800 mt-2 mb-3 leading-tight hover:text-blue-600 transition">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {post.excerpt}
              </p>
              <div className="flex justify-between items-center text-xs text-gray-400 font-medium">
                <span>{post.date}</span>
                <span className="text-blue-600 font-bold">Read More →</span>
              </div>
            </article>
          ))}
        </div>

        {/* AdSense Placement Suggestion */}
        <div className="mt-16 p-8 bg-blue-600 rounded-3xl text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Want personalized financial advice?</h3>
          <p className="mb-6 opacity-90">Join our newsletter and get weekly insights directly in your inbox.</p>
          <div className="flex max-w-md mx-auto gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 rounded-lg text-gray-900 outline-none"
            />
            <button className="bg-gray-900 px-6 py-2 rounded-lg font-bold hover:bg-black transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}