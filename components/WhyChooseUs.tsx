"use client";

import { DollarSign, Users, TrendingUp, Zap, BookOpen, Shield } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: DollarSign,
      title: "Affordable & Transparent Pricing",
      description:
        "No hidden fees, no surprises. You know exactly what you're paying for and why.",
    },
    {
      icon: Users,
      title: "Dedicated Account Manager",
      description:
        "Get a personal point of contact who understands your business and goals.",
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description:
        "Real results for small businesses. We measure success by your growth, not vanity metrics.",
    },
    {
      icon: Zap,
      title: "Quick Implementation",
      description:
        "Get started in days, not months. We move fast without sacrificing quality.",
    },
    {
      icon: BookOpen,
      title: "Education & Training",
      description:
        "We teach you alongside execution so you understand and own your digital presence.",
    },
    {
      icon: Shield,
      title: "Ongoing Support",
      description:
        "Your partnership with us doesn't end at launch. We're here for continuous improvement.",
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
            Why Choose Volt Digital
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We&apos;re not just another agency. We&apos;re partners in your growth, focused
            on delivering real value for small business owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                className="card p-8 group hover:shadow-xl transition-all duration-300 animate-slideUp"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-heading font-bold text-neutral-900 mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Ready to Transform Your Digital Presence?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Start with a free consultation. Let&apos;s discuss your goals and how we can
            help you grow.
          </p>
          <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-neutral-50 transition-colors duration-200">
            Get Your Free Consultation
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
