
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "FinPark Global's team guided us through the entire licensing process with expertise and professionalism. We received our payment license in record time.",
      name: "Sarah Chen",
      role: "CEO, PayTech Solutions",
      company: "Fintech Startup",
      avatarColor: "bg-blue-500",
      initials: "SC",
    },
    {
      quote: "Their AML remediation work was exceptional. They not only fixed our compliance gaps but also implemented systems that made our operations more efficient.",
      name: "Michael Roberts",
      role: "Chief Compliance Officer",
      company: "Digital Bank",
      avatarColor: "bg-purple-500",
      initials: "MR",
    },
    {
      quote: "As a crypto exchange, we needed specialized regulatory guidance. FinPark's expertise in digital assets and their regulator relationships were invaluable.",
      name: "Priya Sharma",
      role: "Co-Founder",
      company: "Crypto Exchange",
      avatarColor: "bg-emerald-500",
      initials: "PS",
    },
    {
      quote: "The team's ex-regulator background gave us confidence. They understood exactly what regulators were looking for and helped us deliver it perfectly.",
      name: "David Thompson",
      role: "CTO",
      company: "Banking Platform",
      avatarColor: "bg-orange-500",
      initials: "DT",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-linear-to-b from-white to-purple-50/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-8">
          <span className="inline-block rounded-full bg-pink-100 px-6 py-2.5 text-sm font-semibold text-pink-700">
            Client Testimonials
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Trusted by <span className="bg-linear-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Industry Leaders</span>
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          Hear from our clients about their regulatory success stories
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-gray-300 mb-6" />

              {/* Quote Text */}
              <p className="text-lg text-gray-700 italic leading-relaxed mb-8">
                "{t.quote}"
              </p>

              {/* Avatar + Info */}
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 ${t.avatarColor} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.role}</p>
                  <p className="text-sm text-gray-500">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}