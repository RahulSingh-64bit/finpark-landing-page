
import { 
  Users, 
  FileCheck, 
  Zap, 
  Handshake, 
  GlobeLock, 
  Cpu 
} from "lucide-react";

export default function WhyChooseUsSection() {
  const advantages = [
    {
      title: "Ex-regulators and compliance experts",
      desc: "Team with direct regulatory authority experience",
      icon: <Users className="w-8 h-8" />,
      color: "bg-blue-500 text-white",
    },
    {
      title: "Regulator-ready documentation",
      desc: "Templates and frameworks that meet regulatory standards",
      icon: <FileCheck className="w-8 h-8" />,
      color: "bg-purple-500 text-white",
    },
    {
      title: "Fast, efficient licensing support",
      desc: "Streamlined processes to accelerate approvals",
      icon: <Zap className="w-8 h-8" />,
      color: "bg-emerald-500 text-white",
    },
    {
      title: "Practical, hands-on operational delivery",
      desc: "Not just advice—we implement and execute",
      icon: <Handshake className="w-8 h-8" />,
      color: "bg-orange-500 text-white",
    },
    {
      title: "Global network of legal & regulatory partners",
      desc: "Local expertise across all major jurisdictions",
      icon: <GlobeLock className="w-8 h-8" />,
      color: "bg-green-500 text-white",
    },
    {
      title: "Tech-enabled compliance implementation",
      desc: "RegTech integration and automation capabilities",
      icon: <Cpu className="w-8 h-8" />,
      color: "bg-pink-500 text-white",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-linear-to-b from-white to-blue-50/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-8">
          <span className="inline-block rounded-full bg-cyan-100 px-6 py-2.5 text-sm font-semibold text-cyan-700">
            Why Choose FinPark
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          What Sets Us Apart
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          Unique advantages that drive regulatory success
        </p>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/60 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >
              <div className="flex items-start gap-5">
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center shadow-xl shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-20 bg-linear-to-r from-purple-50 via-pink-50 to-cyan-50 rounded-3xl py-10 px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-gray-700 font-medium">Industry Awards</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Partner Network</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Certified Experts</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Global Presence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}