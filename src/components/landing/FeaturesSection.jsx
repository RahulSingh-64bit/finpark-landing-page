
import { Globe2, FileClock, ShieldCheck, Zap } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Multi-Jurisdiction Expertise",
      subtitle: "India • UK • EU • Singapore • UAE • US",
      iconColor: "bg-blue-500",
      cardBg: "bg-blue-50/70",
      glow: "shadow-blue-300/20",
    },
    {
      title: "Licensing & Regulatory Strategy",
      subtitle: "Payments, NBFC, VASP, EMI, Digital Lending, Remittance",
      iconColor: "bg-purple-500",
      cardBg: "bg-purple-50/70",
      glow: "shadow-purple-300/20",
    },
    {
      title: "Compliance Programs",
      subtitle: "AML/KYC, Transaction Monitoring, Policies, Audits",
      iconColor: "bg-teal-500",
      cardBg: "bg-teal-50/70",
      glow: "shadow-teal-300/20",
    },
    {
      title: "RegTech + Automation",
      subtitle: "Tech implementation, rule configuration, dashboards",
      iconColor: "bg-orange-500",
      cardBg: "bg-orange-50/70",
      glow: "shadow-orange-300/20",
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.cardBg} rounded-3xl p-8 border border-white/60 backdrop-blur-sm shadow-lg ${feature.glow} transition-all duration-300 hover:-translate-y-2`}
            >
              <div
                className={`w-14 h-14 ${feature.iconColor} rounded-2xl flex items-center justify-center text-white shadow-lg mb-6`}
              >
                {index === 0 && <Globe2 className="w-8 h-8" />}
                {index === 1 && <FileClock className="w-8 h-8" />}
                {index === 2 && <ShieldCheck className="w-8 h-8" />}
                {index === 3 && <Zap className="w-8 h-8" />}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
