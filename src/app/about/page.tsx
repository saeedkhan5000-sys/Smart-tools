import React from 'react';
import { Target, Users, ShieldCheck, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-600 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-black mb-6">Empowering Your Financial Future</h1>
          <p className="text-xl text-blue-100">
            MTsTools Pro is dedicated to making complex financial calculations simple, 
            accurate, and accessible for everyone.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Humara maqsad hai ke hum har investor ko wo tools provide karein jo unhein 
              sahi financial decisions lene mein madad dein. Wealth creation koi raaz nahi hai, 
              balki ye discipline aur sahi planning ka natija hai.
            </p>
            <p className="text-gray-600 leading-relaxed">
              MTsTools Pro par hum modern technology (Next.js & TypeScript) ka use karte hain 
              taaki aapko fast aur real-time calculations mil sakein, bina kisi data privacy risk ke.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-blue-50 rounded-2xl text-center">
              <Target className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800">Precision</h3>
              <p className="text-xs text-gray-500 italic">Accurate Math</p>
            </div>
            <div className="p-6 bg-green-50 rounded-2xl text-center">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800">User Centric</h3>
              <p className="text-xs text-gray-500 italic">Easy UI</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-2xl text-center">
              <ShieldCheck className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800">Privacy</h3>
              <p className="text-xs text-gray-500 italic">No Data Storage</p>
            </div>
            <div className="p-6 bg-orange-50 rounded-2xl text-center">
              <Zap className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800">Speed</h3>
              <p className="text-xs text-gray-500 italic">Fast Loading</p>
            </div>
          </div>
        </div>

        <hr className="my-16 border-gray-100" />

        {/* Why Us Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose MTsTools Pro?</h2>
          <div className="space-y-6 text-left">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">1</div>
              <p className="text-gray-600"><strong>Transparency:</strong> Humara calculator open logic par chalta hai, koi hidden charges ya bias nahi hai.</p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">2</div>
              <p className="text-gray-600"><strong>Educational:</strong> Hum sirf numbers nahi dikhate, balki compounding aur finance ki knowledge bhi share karte hain.</p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">3</div>
              <p className="text-gray-600"><strong>No Ads Intrusions:</strong> Hum AdSense use karte hain lekin humne koshish ki hai ke ads aapke user experience ko kharab na karein.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}