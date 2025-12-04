"use client"
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Which jurisdictions do you cover?",
      answer: "We provide comprehensive regulatory advisory across India, Singapore, UK, UAE, EU, and US. Our global network of legal and regulatory partners allows us to support clients in additional markets as needed."
    },
    {
      question: "How long does the licensing process take?",
    },
    {
      question: "Do you support cross-border expansion?",
    },
    {
      question: "What documents are required for licensing?",
    },
    {
      question: "Can you help during regulatory audits?",
    },
    {
      question: "Do you offer AML remediation services?",
    },
    {
      question: "What is your engagement model?",
    },
    {
      question: "Do you have experience with crypto/digital assets?",
      }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-linear-to-b from-white to-blue-50/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-8">
          <span className="inline-block rounded-full bg-emerald-100 px-6 py-2.5 text-sm font-semibold text-emerald-700">
            Frequently Asked Questions
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Got <span className="text-blue-600">Questions?</span>
        </h2>
        <p className="text-center text-lg text-gray-600 mb-16">
          We've got answers
        </p>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <div className="shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-gray-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-600" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="mt-16 bg-linear-to-r from-indigo-50 via-purple-50 to-blue-50 rounded-3xl p-10 text-center">
          <p className="text-xl text-gray-700 font-medium mb-6">
            Still have questions?
          </p>
         <button
  className="px-8 py-3 text-white font-bold rounded-md shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
  style={{ background: "linear-gradient(to right, #155DFC, #9810FA)" }}
>
  Contact Our Team
</button>

        </div>
      </div>
    </section>
  );
}