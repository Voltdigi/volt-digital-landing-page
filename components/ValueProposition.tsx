"use client";

import { Target, Globe, Zap } from "lucide-react";

export default function ValueProposition() {
  const services = [
    {
      icon: Target,
      title: "Grow Your Reach",
      description:
        "SEO, social media, content marketing, and paid advertising tailored to your budget and goals.",
      color: "from-primary-500 to-primary-600",
      lightColor: "bg-primary-50",
    },
    {
      icon: Globe,
      title: "Stand Out Online",
      description:
        "Professional websites, e-commerce solutions, and design that converts visitors to customers.",
      color: "from-secondary-500 to-secondary-600",
      lightColor: "bg-secondary-50",
    },
    {
      icon: Zap,
      title: "Streamline Your Operations",
      description:
        "Automation, CRM setup, customer management systems, and tech integrations that save you time.",
      color: "from-accent to-orange-600",
      lightColor: "bg-orange-50",
    },
  ];

  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
            How We Help Your Business Thrive
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Our core services are designed specifically for small business owners
            who want to grow online without the complexity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="card p-8 hover:shadow-xl transition-all duration-300 group animate-slideUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`${service.lightColor} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-8 h-8 text-primary-600" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-bold text-neutral-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Link */}
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 group/link"
                >
                  Learn More
                  <span className="group-hover/link:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
