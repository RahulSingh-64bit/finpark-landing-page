
import { CheckCircle2 } from "lucide-react";

export default function SuccessStoriesSection() {
  const cases = [
    {
      title: "Digital Bank License",
      country: "Singapore",
      countryColor: "bg-blue-100 text-blue-700",
      problem: "Fintech startup needed MAS digital banking license to operate",
      approach: "Comprehensive regulatory strategy, documentation, and regulator engagement",
      outcome: "Successfully obtained license and launched operations",
      metrics: [
        { label: "Time to Approval", value: "90 days", color: "text-blue-600" },
        { label: "Success Rate", value: "100%", color: "text-blue-600" },
        { label: "Documentation", value: "500+ pages", color: "text-gray-700" },
      ],
      buttonColor: "from-blue-500 to-blue-600",
    },
    {
      title: "Crypto Exchange AML Fix",
      country: "European Union",
      countryColor: "bg-purple-100 text-purple-700",
      problem: "Regulatory audit identified critical AML/KYC gaps",
      approach: "Complete AML framework redesign, RegTech implementation, staff training",
      outcome: "Passed follow-up audit with zero findings",
      metrics: [
        { label: "Compliance Errors", value: "-60%", color: "text-purple-600" },
        { label: "Processing Time", value: "-40%", color: "text-purple-600" },
        { label: "Regulator Rating", value: "Excellent", color: "text-gray-700" },
      ],
      buttonColor: "from-purple-500 to-purple-600",
    },
    {
      title: "India NBFC Licensing",
      country: "India",
      countryColor: "bg-emerald-100 text-emerald-700",
      problem: "Payment company expanding into lending needed NBFC license",
      approach: "RBI application support, compliance framework setup, capital structure advisory",
      outcome: "Received NBFC-Account Aggregator license and launched services",
      metrics: [
        { label: "Application Success", value: "First Try", color: "text-emerald-600" },
        { label: "Time Saved", value: "6 months", color: "text-emerald-600" },
        { label: "Compliance Score", value: "95%", color: "text-gray-700" },
      ],
      buttonColor: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-linear-to-b from-white to-green-50/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-8">
          <span className="inline-block rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            Success Stories
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Proven Track Record
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          Real results from real regulatory challenges
        </p>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
  {cases.map((c, i) => (
    <div
      key={i}
      className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
    >
      {/* Title + Country Badge */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{c.title}</h3>
        <span className={`inline-block rounded-full px-4 py-1.5 text-sm font-medium ${c.countryColor}`}>
          {c.country}
        </span>
      </div>

      {/* Problem */}
      <div className="mb-5">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Problem</p>
        <p className="text-gray-700 mt-2 leading-relaxed">{c.problem}</p>
      </div>

      {/* Approach */}
      <div className="mb-5">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Approach</p>
        <p className="text-gray-700 mt-2 leading-relaxed">{c.approach}</p>
      </div>

      {/* Outcome */}
      <div className="flex items-center gap-3 mb-8">
        <CheckCircle2 className="w-7 h-7 shrink-0 text-green-500" />
        <p className="font-semibold text-gray-800">{c.outcome}</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 gap-4 mb-8 mt-auto">
        {c.metrics.map((m, idx) => (
          <div key={idx} className="flex justify-between">
            <span className="text-sm text-gray-600">{m.label}</span>
            <span className={`text-lg font-bold ${m.color}`}>{m.value}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <a
        href="#"
        className={`w-full inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r ${c.buttonColor} px-6 py-3.5 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 mt-auto`}
      >
        Read Full Case Study
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
