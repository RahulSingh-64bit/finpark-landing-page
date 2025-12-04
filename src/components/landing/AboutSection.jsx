
import Image from "next/image";
import { 
  Clock, 
  FileCheck, 
  Globe, 
  Zap,
  Users,
  Shield,
  Building2
} from "lucide-react";

export default function AboutSection() {
  const points = [
    {
      icon: <Clock className="w-6 h-6" />,
      text: "30+ years combined regulatory experience",
      color: "text-blue-600 bg-blue-50",
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      text: "End-to-end compliance lifecycle delivery",
      color: "text-purple-600 bg-purple-50",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      text: "Global counsel network & local regulatory partnerships",
      color: "text-emerald-500 bg-emerald-50",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: "Deep domain expertise in fintech, payments, digital assets, banking",
      color: "text-orange-600 bg-orange-50",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-linear-to-b from-[#F9FAFB] to-[#EFF6FF]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-purple-100 px-6 py-2.5 text-sm font-semibold text-purple-700">
            About FinPark Global
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-center text-4xl lg:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
          Your Trusted Partner for{" "}
          <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Regulatory Excellence
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
          FinPark Global is a specialized regulatory & compliance consulting firm that helps institutions and innovators understand, navigate, and comply with evolving global financial regulations.
        </p>

        {/* Grid: Image + Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-6 bg-linear-to-br from-purple-300/30 to-blue-300/30 rounded-3xl blur-3xl -z-10" />
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/50">
              <Image
                src="/Financial_Strategy_Meeting.png"
                alt="FinPark Global team discussing regulatory strategy"
                width={800}
                height={600}
                className="w-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-10">
            <p className="text-lg text-gray-700 leading-relaxed">
              With <strong>ex-regulators, compliance officers, legal experts, and technology architects</strong> on board, we deliver advisory that is <strong>practical, operational, and future-ready</strong>.
            </p>

            {/* Feature Pills */}
            <div className="space-y-5">
              {points.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-xl hover:border-purple-100 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${point.color} flex items-center justify-center shrink-0 shadow-sm`}>
                    {point.icon}
                  </div>
                  <p className="text-gray-800 font-medium pt-2 leading-snug">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
  href="#about"
  className="inline-flex items-center gap-3 rounded-md px-8 py-3 text-white font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
  style={{ background: "linear-gradient(to right, #155DFC, #9810FA)" }}
>
  Learn More About Us
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</a>

          </div>
        </div>
      </div>
    </section>
  );
}
