"use client"
import { 
  FileText, 
  CheckSquare, 
  TrendingUp, 
  BookOpen, 
  FileSearch, 
  LayoutTemplate,
  Download 
} from "lucide-react";
import { useState } from "react";

export default function ResourceHubSection() {
  const [email, setEmail] = useState("");

  const resources = [
    {
      type: "PDF Guide",
      title: "Global Fintech Licensing Guide",
      desc: "Comprehensive guide to licensing requirements across 20+ jurisdictions",
      icon: <FileText className="w-8 h-8" />,
      color: "bg-blue-500",
      button: "bg-blue-500 hover:bg-blue-600",
      badge: "bg-blue-100 text-blue-700",
    },
    {
      type: "Checklist",
      title: "AML Checklist 2025",
      desc: "Updated checklist covering latest FATF recommendations and best practices",
      icon: <CheckSquare className="w-8 h-8" />,
      color: "bg-purple-500",
      button: "bg-purple-500 hover:bg-purple-600",
      badge: "bg-purple-100 text-purple-700",
    },
    {
      type: "Interactive Tool",
      title: "Crypto Regulation Tracker",
      desc: "Live tracker of digital asset regulations worldwide",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "bg-emerald-500",
      button: "bg-emerald-500 hover:bg-emerald-600",
      badge: "bg-emerald-100 text-emerald-700",
    },
    {
      type: "Whitepaper",
      title: "PSD2 vs PSD3 Guide",
      desc: "Understanding the changes and what they mean for your business",
      icon: <BookOpen className="w-8 h-8" />,
      color: "bg-orange-500",
      button: "bg-orange-500 hover:bg-orange-600",
      badge: "bg-orange-100 text-orange-700",
    },
    {
      type: "Regulatory Brief",
      title: "India Digital Lending Norms",
      desc: "Complete breakdown of RBI digital lending guidelines",
      icon: <FileSearch className="w-8 h-8" />,
      color: "bg-green-500",
      button: "bg-green-500 hover:bg-green-600",
      badge: "bg-green-100 text-green-700",
    },
    {
      type: "Framework",
      title: "VASP Compliance Framework",
      desc: "Step-by-step guide to virtual asset service provider compliance",
      icon: <LayoutTemplate className="w-8 h-8" />,
      color: "bg-pink-500",
      button: "bg-pink-500 hover:bg-pink-600",
      badge: "bg-pink-100 text-pink-700",
    },
  ];

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with email: ${email}`);
      setEmail("");
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-linear-to-b from-white to-amber-50/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-8">
          <span className="inline-block rounded-full bg-amber-100 px-6 py-2.5 text-sm font-semibold text-amber-700">
            Resource Hub
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Knowledge & Insights
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          Free resources to help you navigate the regulatory landscape
        </p>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 ${resource.color} rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0`}>
                  {resource.icon}
                </div>
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${resource.badge}`}>
                  {resource.type}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {resource.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed grow">
                {resource.desc}
              </p>

              <button
                className={`w-full inline-flex items-center justify-center gap-3 rounded-xl ${resource.button} text-white font-semibold py-3.5 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
              >
                <Download className="w-5 h-5" />
                Download Now
              </button>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 bg-linear-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Want More Resources?
          </h3>
          <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly regulatory updates and insights
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl ring-1 text-white placeholder-white focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg"
            />
            <button
              onClick={handleSubscribe}
              className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition shadow-lg hover:shadow-xl hover:scale-105 duration-300"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}