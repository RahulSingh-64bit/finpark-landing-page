"use client"
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Paperclip } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    jurisdiction: "",
    service: "",
    message: ""
  });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const offices = [
    {
      city: "Mumbai",
      region: "Headquarters",
      regionColor: "bg-emerald-100 text-emerald-700",
      address: "Financial District, Mumbai 400001, India"
    },
    {
      city: "Singapore",
      region: "Asia Pacific",
      regionColor: "bg-cyan-100 text-cyan-700",
      address: "Marina Bay Financial Centre, Singapore"
    },
    {
      city: "London",
      region: "Europe",
      regionColor: "bg-blue-100 text-blue-700",
      address: "Canary Wharf, London, United Kingdom"
    },
    {
      city: "Dubai",
      region: "Middle East",
      regionColor: "bg-orange-100 text-orange-700",
      address: "DIFC, Dubai, United Arab Emirates"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-linear-to-b from-blue-50/30 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-8">
          <span className="inline-block rounded-full bg-blue-100 px-6 py-2.5 text-sm font-semibold text-blue-700">
            Get In Touch
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Start Your <span className="text-blue-600">Compliance Journey</span>
        </h2>
        <p className="text-center text-lg text-gray-600 mb-16">
          Connect with our regulatory experts to discuss your specific needs
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 lg:p-10 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Send us a message
            </h3>

            <div className="space-y-6">
              {/* Row 1: Full Name & Company Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => handleChange("companyName", e.target.value)}
                    placeholder="Your Company"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+1 234 567 8900"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Row 3: Jurisdiction & Service */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Jurisdiction(s) of Interest
                  </label>
                  <select
                    value={formData.jurisdiction}
                    onChange={(e) => handleChange("jurisdiction", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                  >
                    <option value="">Select...</option>
                    <option value="india">India</option>
                    <option value="singapore">Singapore</option>
                    <option value="uk">United Kingdom</option>
                    <option value="uae">UAE</option>
                    <option value="eu">European Union</option>
                    <option value="us">United States</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Required Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => handleChange("service", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                  >
                    <option value="">Select...</option>
                    <option value="licensing">Licensing</option>
                    <option value="compliance">Compliance Advisory</option>
                    <option value="aml">AML/CFT</option>
                    <option value="audit">Audit Support</option>
                    <option value="regtech">RegTech Implementation</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message / Requirements *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Tell us about your compliance needs..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Attach Documents */}
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                <Paperclip className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">
                  Attach Documents (Optional)
                </p>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </div>
          </div>

          {/* Right Column: Direct Contact & Office Locations */}
          <div className="space-y-8">
            {/* Direct Contact Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Direct Contact
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email</p>
                    <a href="mailto:info@finparkglobal.com" className="text-gray-900 font-medium hover:text-blue-600 transition">
                      info@finparkglobal.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Phone</p>
                    <a href="tel:+91XXXXXXXXXX" className="text-gray-900 font-medium hover:text-blue-600 transition">
                      +91-XXXXXXXXXX
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Office Locations
              </h3>
              
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-bold text-gray-900">{office.city}</p>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${office.regionColor}`}>
                          {office.region}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{office.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}