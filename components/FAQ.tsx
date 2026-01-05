"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How much do your services cost?",
      answer:
        "Our pricing is transparent and customized based on your specific needs. We offer services ranging from $500/month for basic services to custom packages for larger initiatives. We&apos;ll provide a detailed quote after understanding your goals and current situation.",
    },
    {
      question: "What&apos;s the typical timeline to see results?",
      answer:
        "Most clients see initial improvements within 4-8 weeks, with significant results becoming evident within 3-6 months. The timeline depends on your specific goals and which services you choose. We&apos;ll set realistic expectations during your consultation.",
    },
    {
      question: "Do you work with businesses in my industry?",
      answer:
        "We work with small businesses across various industries—from e-commerce and professional services to local businesses and startups. Our strategies are customized to fit your industry&apos;s unique challenges and opportunities.",
    },
    {
      question: "What if I&apos;m not tech-savvy?",
      answer:
        "You don&apos;t need to be! That&apos;s exactly why we&apos;re here. We handle all the technical details and keep you updated in plain English. We also provide training and education so you understand what we&apos;re doing with your business.",
    },
    {
      question: "How do you measure success?",
      answer:
        "We measure success based on your business goals—whether that&apos;s leads, sales, website traffic, or brand awareness. We provide monthly reports with clear metrics, and we adjust our strategy based on what&apos;s working.",
    },
    {
      question: "What makes Volt Digital different?",
      answer:
        "We focus on small businesses specifically, with transparent pricing, dedicated account managers, and proven results. We&apos;re not just a vendor—we&apos;re a partner in your growth. Our success is measured by your success.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Most of our services have flexible monthly agreements with 30 days notice to cancel. We're confident in our work and believe you'll want to stay, but we understand that circumstances change.",
    },
    {
      question: "Do you offer support after project completion?",
      answer:
        "Absolutely! We offer ongoing maintenance, optimization, and support packages for all our projects. Many clients keep us on a monthly retainer for continuous improvement and updates.",
    },
  ];

  return (
    <section id="faq" className="section bg-neutral-50">
      <div className="container">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Have questions? We&apos;ve got answers. Check out our FAQ section.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card overflow-hidden animate-slideUp"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-8 py-6 text-left font-semibold text-neutral-900 hover:bg-neutral-50 transition-colors duration-200 flex items-center justify-between"
              >
                <span className="text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary-500 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-8 py-6 border-t border-neutral-100 bg-neutral-50 animate-slideUp">
                  <p className="text-neutral-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-16 text-center">
          <p className="text-neutral-700 mb-4">
            Still have questions? We&apos;re happy to help.
          </p>
          <a href="#signup" className="btn-primary">
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
