
import Image from "next/image";

const stats = [
  { value: "100+", label: "Global Projects", color: "#155DFC" },
  { value: "30+", label: "Years Experience", color: "#9810FA" },
  { value: "5", label: "Global Markets", color: "#009689" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-white pt-10 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 rounded-full bg-green-50 border border-green-200 px-5 py-3 text-sm font-medium text-green-800">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Trusted by 100+ Global Enterprises
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Navigate Global<br />
              Regulations with<br />
              <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Confidence
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed">
              Comprehensive compliance, cross-border advisory, licensing, and regulatory strategy for financial institutions, fintechs, payment companies, NBFCs, and crypto enterprises.
            </p>

            
            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white/80 backdrop-blur-sm border border-purple-100 px-8 py-6 shadow-lg min-w-40 text-center"
                >
                  <div
                    className="text-4xl font-light"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 pt-6">
  {/* Gradient Button */}
  <a
    href="#"
    className="inline-flex items-center justify-center gap-3 rounded-md px-8 py-3 text-lg font-semibold text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
    style={{ background: "linear-gradient(to right, #155DFC, #9810FA)" }}
  >
    Book a Consultation
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </a>

  {/* Outline Button */}
  <a
    href="#"
    className="inline-flex items-center justify-center gap-3 rounded-md border-2 border-gray-300 bg-white/90 backdrop-blur px-8 py-3 text-lg font-normal text-gray-700 hover:bg-gray-50 transition"
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
    Download Capability Deck
  </a>
</div>

          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow background */}
              <div className="absolute -inset-4 bg-linear-to-br from-purple-400/30 to-pink-400/30 rounded-3xl blur-3xl -z-10" />
              
              <Image
                src="/GlobalComplianceNetwork.png" // Make sure this file is in /public folder
                alt="Global Compliance Network"
                width={600}
                height={900}
                className="rounded-3xl shadow-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating linear orbs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
    </section>
  );
}