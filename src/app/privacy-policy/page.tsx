"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, EyeOff, Cookie, Scale, Mail } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] py-20 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex p-4 bg-blue-50 text-blue-600 rounded-3xl mb-6 shadow-inner">
            <ShieldCheck size={40} />
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-4">Privacy Policy</h1>
          <p className="text-slate-500 font-medium tracking-tight uppercase text-xs tracking-[0.2em]">
            Last Updated: February 2026 • MTsTools Pro
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.02)] border border-slate-100">
          <div className="space-y-12">
            
            <PolicySection 
              number="01" 
              title="Information We Collect" 
              icon={<EyeOff className="text-blue-500" />}
            >
              At <strong className="text-slate-900 font-bold">MTsTools Pro</strong>, we do not require users to register or provide personal information to use our calculators. 
              All financial inputs (like Zakat assets or SIP amounts) are processed <span className="text-blue-600 font-bold underline decoration-blue-200">locally in your browser</span> and are never transmitted to or stored on our servers.
            </PolicySection>

            <PolicySection 
              number="02" 
              title="Log Files & Cookies" 
              icon={<Cookie className="text-emerald-500" />}
            >
              We follow a standard procedure of using log files to analyze traffic. These files log IP addresses, browser types, and time stamps. 
              We use cookies solely to improve your experience by remembering your currency preferences and site navigation settings.
            </PolicySection>

            {/* Specialized AdSense Highlight Box */}
            <motion.section 
              whileHover={{ scale: 1.01 }}
              className="bg-indigo-50/50 p-8 rounded-[2rem] border-l-8 border-indigo-600 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-600 text-white rounded-lg">
                  <Lock size={20} />
                </div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Google DoubleClick DART Cookie</h2>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium text-sm">
                Google is a third-party vendor on our site. It uses DART cookies to serve ads based on your visit to MTsTools Pro and other sites on the internet. 
                You may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy.
              </p>
            </motion.section>

            <PolicySection 
              number="04" 
              title="Advertising Partners" 
              icon={<Scale className="text-violet-500" />}
            >
              Some of our advertisers may use web beacons. Our primary advertising partner is <strong className="text-slate-900">Google AdSense</strong>. 
              Each partner has its own Privacy Policy regarding user data. We recommend reviewing their respective documentation for detailed information.
            </PolicySection>

            <div className="pt-8 border-t border-slate-50 grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-black text-slate-800 mb-3 tracking-tight">5. User Consent</h2>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  By using our website, you hereby consent to our Privacy Policy and agree to its terms and conditions.
                </p>
              </div>
              <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl">
                <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                  <Mail size={20} className="text-blue-400" /> Contact Support
                </h2>
                <p className="text-slate-400 text-xs mb-4 font-medium italic">
                  Additional questions about your privacy? Reach out anytime.
                </p>
                <a 
                  href="mailto:saeedkhan5000@gmail.com" 
                  className="text-blue-400 font-bold hover:text-white transition-colors text-lg break-all"
                >
                  saeedkhan5000@gmail.com
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Disclaimer */}
        <p className="mt-12 text-center text-slate-400 text-[10px] font-medium uppercase tracking-[0.2em]">
          Designed for Data Integrity & Financial Transparency 2026
        </p>
      </motion.div>
    </main>
  );
}

// Sub-component for clean layout
function PolicySection({ number, title, icon, children }: any) {
  return (
    <section className="relative pl-12">
      <div className="absolute left-0 top-0 text-slate-100 font-black text-4xl leading-none select-none">
        {number}
      </div>
      <div className="flex items-center gap-3 mb-4 relative z-10">
        <div className="opacity-80">{icon}</div>
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">{title}</h2>
      </div>
      <div className="text-slate-600 leading-relaxed font-medium relative z-10">
        {children}
      </div>
    </section>
  );
}