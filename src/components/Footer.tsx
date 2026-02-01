"use client";
import Link from 'next/link';
import { 
  Calculator, Shield, Mail, Info, 
  ArrowUpRight, Github, Twitter, Linkedin, 
  ChevronRight, Heart 
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-20 mt-32 relative overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Identity */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-blue-600 p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                <Calculator className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white tracking-tighter">
                MTsTools <span className="text-blue-500 text-[10px] uppercase">Pro</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed font-medium">
              Empowering global investors with real-time financial tools. Built with 
              precision and privacy in KPK, Pakistan for the world.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Twitter size={18} />} href="#" />
              <SocialIcon icon={<Github size={18} />} href="#" />
              <SocialIcon icon={<Linkedin size={18} />} href="#" />
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white text-sm font-black uppercase tracking-[0.2em] mb-8">Calculators</h3>
            <ul className="space-y-4">
              <FooterLink href="/sip" label="SIP Planner" />
              <FooterLink href="/zakat" label="Zakat Portal" />
              <FooterLink href="/time" label="Time Value" />
              <FooterLink href="/blog" label="Market Insights" />
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-white text-sm font-black uppercase tracking-[0.2em] mb-8">Trust Center</h3>
            <ul className="space-y-4">
              <FooterLink href="/about" label="Our Story" icon={<Info size={14} />} />
              <FooterLink href="/privacy-policy" label="Privacy & Terms" icon={<Shield size={14} />} />
              <FooterLink href="/contact" label="Help Desk" icon={<Mail size={14} />} />
            </ul>
          </div>

          {/* Legal Disclaimer Box */}
          <div className="lg:pl-8 border-l border-slate-800/50">
            <h3 className="text-white text-sm font-black uppercase tracking-[0.2em] mb-8">Disclaimer</h3>
            <div className="bg-slate-900/50 p-6 rounded-[2rem] border border-white/5">
              <p className="text-[11px] leading-relaxed text-slate-500 font-medium">
                Mutual fund investments are subject to market risks. Calculations provided are 
                estimates based on input parameters and historical trends. Always consult 
                a certified financial advisor before making investment decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-600">
            © {currentYear} MTsTools Suite • v1.0.26
          </p>
          
          <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500">
            Made with <Heart size={12} className="text-rose-500 fill-rose-500" /> by 
            <span className="text-slate-300">Saeed Khan</span>
          </div>

          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-600">
            <Link href="/privacy-policy" className="hover:text-blue-500 transition-colors">Cookies</Link>
            <Link href="/contact" className="hover:text-blue-500 transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper Components
function FooterLink({ href, label, icon }: { href: string; label: string; icon?: React.ReactNode }) {
  return (
    <li>
      <Link 
        href={href} 
        className="text-sm font-bold flex items-center gap-2 hover:text-blue-500 transition-all hover:translate-x-1 w-fit group"
      >
        {icon && <span className="opacity-50">{icon}</span>}
        {label}
        <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
      </Link>
    </li>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a 
      href={href} 
      className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
    >
      {icon}
    </a>
  );
}