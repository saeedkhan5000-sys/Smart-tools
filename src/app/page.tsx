import Link from 'next/link';

interface ToolCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  color: string;
}

const ToolCard = ({ title, description, icon, href, color }: ToolCardProps) => (
  <Link href={href} className="group">
    <div className="h-full bg-white p-8 rounded-3xl border border-gray-100 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 group-hover:border-blue-100">
      <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-inner`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      <div className="mt-6 flex items-center text-blue-600 font-semibold text-sm">
        Open Tool 
        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
      </div>
    </div>
  </Link>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      
      <div className="max-w-6xl mx-auto px-4 py-20">
        <header className="text-center mb-20">
          <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">
            Financial Suite 2026
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mt-6 mb-6 tracking-tight">
            Smart Tools for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
              Your Financial Growth
            </span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Professional calculators for modern investors. Accurate, fast, and optimized for your financial planning needs.
          </p>
        </header>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <ToolCard 
            title="SIP Calculator"
            description="Visualize the power of compounding. Calculate returns on your monthly mutual fund investments."
            icon="📈"
            href="/sip"
            color="bg-blue-50"
          />
          <ToolCard 
            title="Zakat Calculator"
            description="Accurately calculate your Zakat with live gold and silver rates according to Shariah rules."
            icon="🌙"
            href="/zakat"
            color="bg-emerald-50"
          />
          <ToolCard 
            title="Time is Money"
            description="Predict future wealth for one-time investments. Compare different market scenarios easily."
            icon="💰"
            href="/time"
            color="bg-amber-50"
          />
        </div>

        {/* SEO content section remains below for AdSense */}
        <section className="bg-white rounded-[40px] p-12 border border-gray-100 shadow-sm">
           <h2 className="text-3xl font-bold mb-8 text-gray-900">Why use SmartCalc in 2026?</h2>
           <div className="prose prose-slate max-w-none text-gray-600">
              {/* Aapka purana SEO article content yahan ayega */}
              <p>In 2026, financial planning has become more digital and precise...</p>
           </div>
        </section>
      </div>
    </main>
  );
}