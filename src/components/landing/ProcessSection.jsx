import { 
  Search, 
  ScrollText, 
  Settings, 
  Eye 
} from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Assessment & Diagnosis",
      desc: "Risk mapping, regulatory review, industry benchmarks",
      icon: <Search className="w-8 h-8" />,
      circleBg: "bg-blue-500",
      cardBg: "bg-blue-50",
      badgeBg: "bg-blue-600",
    },
    {
      number: "02",
      title: "Strategy & Roadmap",
      desc: "Strategic plan, licensing flow, compliance blueprint",
      icon: <ScrollText className="w-8 h-8" />,
      circleBg: "bg-purple-500",
      cardBg: "bg-purple-50",
      badgeBg: "bg-purple-600",
    },
    {
      number: "03",
      title: "Implementation & Integration",
      desc: "Policies, technology setup, regulatory submissions",
      icon: <Settings className="w-8 h-8" />,
      circleBg: "bg-emerald-500",
      cardBg: "bg-emerald-50",
      badgeBg: "bg-emerald-600",
    },
    {
      number: "04",
      title: "Monitoring & Continuous Support",
      desc: "Ongoing advisory, audits, reporting automation",
      icon: <Eye className="w-8 h-8" />,
      circleBg: "bg-orange-500",
      cardBg: "bg-orange-50",
      badgeBg: "bg-orange-600",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-8">
          <span className="inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-700">
            Our Process
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          How We Work
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          A proven 4-step framework to ensure regulatory success
        </p>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${step.cardBg} rounded-3xl p-8 shadow-lg border border-white/60 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 relative`}
            >
              {/* Number Badge - Circular, overlay */}
              <div className={`absolute -top-5 -left-5 ${step.badgeBg} text-white font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-lg text-lg`}>
                {step.number}
              </div>

              {/* Icon */}
              <div className="flex justify-end mb-6">
                <div className={`w-16 h-16 ${step.circleBg} rounded-2xl flex items-center justify-center shadow-xl`}>
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-red-500 to-pink-600 px-8 py-4 text-white font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            View Our Framework
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
