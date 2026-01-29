import Link from 'next/link';
import { Shield, Mail, Info } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">MTsTools Pro</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Helping you make smarter financial decisions with high-precision calculators since 2026.
          </p>
        </div>
        
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/about" className="hover:text-white">About SIP</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-bold mb-4">Disclaimer</h3>
          <p className="text-xs text-gray-500">
            Mutual fund investments are subject to market risks. Our calculator provides estimates based on historical data.
          </p>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © 2026 MTsTools. All rights reserved.
      </div>
    </footer>
  );
}