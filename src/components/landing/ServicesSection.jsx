
import { 
  Scale, 
  Shield, 
  FileText, 
  Lock, 
  Bitcoin, 
  Cpu, 
  GraduationCap,
  ChevronDown
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Regulatory Strategy & Licensing Advisory",
      count: "6 key services",
      icon: <Scale className="w-7 h-7" />,
      color: "from-blue-500 to-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "AML/KYC & Financial Crime Compliance",
      count: "6 key services",
      icon: <Shield className="w-7 h-7" />,
      color: "from-purple-500 to-purple-600",
      bg: "bg-purple-50",
    },
    {
      title: "Compliance Program Development",
      count: "5 key services",
      icon: <FileText className="w-7 h-7" />,
      color: "from-emerald-500 to-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      title: "Cybersecurity, Data Privacy & GDPR Compliance",
      count: "5 key services",
      icon: <Lock className="w-7 h-7" />,
      color: "from-green-500 to-green-600",
      bg: "bg-green-50",
    },
    {
      title: "Fintech & Virtual Asset Advisory",
      count: "5 key services",
      icon: <Bitcoin className="w-7 h-7" />,
      color: "from-orange-500 to-orange-600",
      bg: "bg-orange-50",
    },
    {
      title: "RegTech Implementation",
      count: "4 key services",
      icon: <Cpu className="w-7 h-7" />,
      color: "from-pink-500 to-pink-600",
      bg: "bg-pink-50",
    },
    {
      title: "Training & Culture",
      count: "3 key services",
      icon: <GraduationCap className="w-7 h-7" />,
      color: "from-indigo-500 to-indigo-600",
      bg: "bg-indigo-50",
    },
  ];

  
    return (
    <section className="py-20 lg:py-28 bg-gray-50/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-8">
          <span className="inline-block rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold text-pink-700">
            Core Services
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Comprehensive Regulatory Solutions
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          From licensing to implementation, we cover every aspect of regulatory compliance
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
  {services.map((service, index) => (
    <div
      key={index}
      className={`${service.bg} rounded-3xl p-8 border border-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          {/* Gradient Icon */}
          <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${service.color} p-3 flex items-center justify-center shadow-lg`}>
            <div className="text-white">
              {service.icon}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 text-lg leading-tight">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {service.count}
            </p>
          </div>
        </div>

        {/* Chevron */}
        <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-gray-700 transition-transform group-hover:rotate-180 duration-300" />
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}