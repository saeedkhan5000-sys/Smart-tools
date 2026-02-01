"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  Menu,
  X,
  ChevronDown,
  TrendingUp,
  Moon,
  Timer,
  Info,
  ShieldCheck,
  Mail,
  BookOpen,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // 1. Fix: Pathname ko humesha string mein default karein
  const rawPathname = usePathname();
  const pathname = rawPathname || "";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsToolsOpen(false);
  }, [pathname]);

  const tools = [
    { name: "SIP Planner", href: "/sip", icon: <TrendingUp size={18} />, desc: "Investment growth" },
    { name: "Zakat Portal", href: "/zakat", icon: <Moon size={18} />, desc: "Wealth purification" },
    { name: "Time vs Money", href: "/time", icon: <Timer size={18} />, desc: "Life cost analysis" },
  ];

  return (
    <nav className={`sticky top-0 z-[100] transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-xl border-b border-slate-200 py-2" : "bg-[#F8FAFC] border-b border-transparent py-4"
      }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
              <Calculator className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-black text-slate-900 tracking-tighter">
              MTs<span className="text-blue-600 text-[10px] uppercase align-top ml-1">Tools Pro</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2">
            <NavLink href="/" active={pathname === "/"} label="Home" />

            {/* Tools Dropdown */}
            <div className="relative" onMouseLeave={() => setIsToolsOpen(false)}>
              <button
                onMouseEnter={() => setIsToolsOpen(true)}
                className={`flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-bold tracking-tight transition-all hover:bg-slate-100 ${
                  pathname.includes("/sip") || pathname.includes("/zakat") || pathname.includes("/time")
                    ? "text-blue-600" : "text-slate-600"
                }`}
              >
                Calculators <ChevronDown size={14} className={`transition-transform duration-300 ${isToolsOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isToolsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full -left-10 w-72 bg-white border border-slate-100 shadow-[0_20px_40px_rgba(0,0,0,0.1)] rounded-3xl p-3 mt-2 overflow-hidden"
                  >
                    <div className="p-3 mb-2 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50">
                      Smart Financial Tools
                    </div>
                    {tools.map((tool) => (
                      <Link key={tool.href} href={tool.href} className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-2xl transition group">
                        <div className="w-10 h-10 bg-slate-50 group-hover:bg-blue-600 group-hover:text-white text-blue-600 rounded-xl flex items-center justify-center transition-colors">
                          {tool.icon}
                        </div>
                        <div>
                          <div className="text-sm font-black text-slate-800 tracking-tight">{tool.name}</div>
                          <div className="text-[10px] text-slate-400 font-medium">{tool.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink href="/blog" active={pathname === "/blog"} label="Market Insights" />
            <NavLink href="/about" active={pathname === "/about"} label="About" />
            <NavLink href="/contact" active={pathname === "/contact"} label="Support" />

            <div className="h-6 w-[1px] bg-slate-200 mx-2" />

            <Link href="/privacy-policy" className="p-2 text-slate-400 hover:text-blue-600 transition-colors tooltip" title="Privacy Policy">
              <ShieldCheck size={20} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-slate-600 bg-slate-100 rounded-xl active:scale-90 transition-transform" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }} className="fixed inset-0 top-[72px] bg-white z-[90] lg:hidden overflow-y-auto">
            <div className="p-6 space-y-6">
              <div className="space-y-2">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Navigation</p>
                <MobileNavLink href="/" label="Dashboard" icon={<Calculator size={18} />} />
                <MobileNavLink href="/blog" label="Insights" icon={<BookOpen size={18} />} />
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Tools</p>
                {tools.map((tool) => (
                  <MobileNavLink key={tool.href} href={tool.href} label={tool.name} icon={tool.icon} />
                ))}
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Company</p>
                <MobileNavLink href="/about" label="Our Mission" icon={<Info size={18} />} />
                <MobileNavLink href="/contact" label="Contact Us" icon={<Mail size={18} />} />
                <MobileNavLink href="/privacy-policy" label="Privacy & Security" icon={<ShieldCheck size={18} />} />
              </div>

              <div className="p-6 bg-blue-600 rounded-3xl text-white text-center">
                <p className="text-xs font-bold opacity-80 mb-1">Financial Suite</p>
                <h4 className="font-black text-lg tracking-tight">Version 2026.1</h4>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// Sub-components
function NavLink({ href, active, label }: { href: string; active: boolean; label: string }) {
  return (
    <Link href={href} className={`px-4 py-2 rounded-xl text-sm font-bold tracking-tight transition-all hover:bg-slate-100 ${
        active ? "text-blue-600 bg-blue-50/50" : "text-slate-600"
      }`}>
      {label}
    </Link>
  );
}

function MobileNavLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <Link href={href} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl text-slate-700 font-bold hover:bg-blue-50 hover:text-blue-600 transition-all">
      <div className="text-blue-600">{icon}</div>
      {label}
    </Link>
  );
}