"use client";
import Link from 'next/link';
import { Calculator, Menu, X, ChevronDown, PieChart, Moon, Wallet } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const pathname = usePathname();

  const tools = [
    { name: 'SIP Calculator', href: '/sip', icon: <PieChart size={18} />, desc: 'Monthly investment' },
    { name: 'Zakat Calculator', href: '/zakat', icon: <Moon size={18} />, desc: 'Religious charity' },
    { name: 'Time is Money', href: '/time', icon: <Wallet size={18} />, desc: 'Time is Money' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Calculator className="text-blue-600 w-8 h-8" />
            <span className="text-xl font-black text-gray-800 tracking-tight">MTsTools</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 font-medium text-gray-600">
            <Link href="/" className={`hover:text-blue-600 transition ${pathname === '/' ? 'text-blue-600 font-bold' : ''}`}>Home</Link>
            
            {/* Tools Dropdown Trigger */}
            <div className="relative group">
              <button 
                onMouseEnter={() => setIsToolsOpen(true)}
                className="flex items-center gap-1 hover:text-blue-600 transition py-4"
              >
                Calculators <ChevronDown size={16} className={`transition-transform ${isToolsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isToolsOpen && (
                <div 
                  onMouseLeave={() => setIsToolsOpen(false)}
                  className="absolute top-full -left-4 w-64 bg-white border border-gray-100 shadow-xl rounded-2xl p-2 animate-in fade-in slide-in-from-top-2"
                >
                  {tools.map((tool) => (
                    <Link 
                      key={tool.href}
                      href={tool.href} 
                      className="flex items-center gap-3 p-3 hover:bg-blue-50 rounded-xl transition group/item"
                    >
                      <div className="p-2 bg-gray-50 group-hover/item:bg-blue-100 text-blue-600 rounded-lg">
                        {tool.icon}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-800">{tool.name}</div>
                        <div className="text-[10px] text-gray-400">{tool.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="hover:text-blue-600 transition">About</Link>
            <Link href="/blog" className="hover:text-blue-600 transition">Insights</Link>
            <Link href="/privacy-policy" className="hover:text-blue-600 transition">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-blue-600 transition">Contact Us</Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b p-4 space-y-2">
          <Link href="/" className="block p-2 font-bold text-blue-600">Home</Link>
          <div className="p-2 font-bold text-gray-400 text-xs uppercase">Calculators</div>
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="flex items-center gap-2 p-2 text-gray-600 hover:text-blue-600">
              {tool.icon} {tool.name}
            </Link>
          ))}
          <hr className="my-2" />
          <Link href="/about" className="block p-2 text-gray-600">About SIP</Link>
          <Link href="/privacy-policy" className="block p-2 text-gray-600">Privacy Policy</Link>
        </div>
      )}
    </nav>
  );
}