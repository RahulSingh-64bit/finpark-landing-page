
import { 
  Building2, 
  CreditCard, 
  Bitcoin, 
  ShieldCheck,
  TrendingUp,
  Briefcase,
  Globe,
  Send
} from "lucide-react";

export default function IndustrySection() {
  const industries = [
    {
      name: "Banking & NBFCs",
      icon: <Building2 className="w-8 h-8" />,
      color: "bg-blue-500",
      cardBg: "bg-blue-50",
    },
    {
      name: "Fintech & Payments",
      icon: <CreditCard className="w-8 h-8" />,
      color: "bg-purple-500",
      cardBg: "bg-purple-50",
    },
    {
      name: "Crypto & Digital Assets",
      icon: <Bitcoin className="w-8 h-8" />,
      color: "bg-orange-500",
      cardBg: "bg-orange-50",
    },
    {
      name: "Insurance & Insurtech",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "bg-emerald-500",
      cardBg: "bg-emerald-50",
    },
    {
      name: "Capital Markets & Wealth",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "bg-green-500",
      cardBg: "bg-green-50",
    },
    {
      name: "Corporate Treasury",
      icon: <Briefcase className="w-8 h-8" />,
      color: "bg-pink-500",
      cardBg: "bg-pink-50",
    },
    {
      name: "Cross-Border Trade",
      icon: <Globe className="w-8 h-8" />,
      color: "bg-indigo-500",
      cardBg: "bg-indigo-50",
    },
    {
      name: "Remittance",
      icon: <Send className="w-8 h-8" />,
      color: "bg-amber-500",
      cardBg: "bg-amber-50",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-linear-to-b from-white to-cyan-50/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-8">
          <span className="inline-block rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            Industry Coverage
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Expertise Across <span className="bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Multiple Sectors</span>
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          Deep regulatory knowledge spanning the entire financial services ecosystem
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto w-full">
  {industries.map((industry, index) => (
    <div
      key={index}
      className={`${industry.cardBg} rounded-3xl p-6 flex items-center gap-5 shadow-lg hover:shadow-xl hover:-translate-y-3 transition-all duration-300 border border-white/60 w-full`}
      style={{
        transform: index >= 4 ? 'translateY(40px)' : 'translateY(0)',
      }}
    >
      {/* Icon on the left */}
      <div className={`w-12 h-12 ${industry.color} rounded-2xl flex items-center justify-center shadow-lg shrink-0`}>
        <div className="text-white">
          {industry.icon}
        </div>
      </div>

      {/* Text */}
      <div className="text-left">
        <h3 className="font-semibold text-gray-800 leading-snug">
          {industry.name}
        </h3>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}