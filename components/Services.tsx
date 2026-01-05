"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function Services() {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      id: 0,
      title: "SEO & Content Marketing",
      description:
        "Get found by your customers with our proven SEO strategies and compelling content that drives organic traffic and qualified leads.",
      benefits: [
        "Keyword research & optimization",
        "Content strategy & creation",
        "Technical SEO audits",
        "Link building & backlink strategy",
        "Monthly performance reporting",
      ],
    },
    {
      id: 1,
      title: "Social Media Management",
      description:
        "Build a powerful social presence that engages your audience and drives sales across all major platforms.",
      benefits: [
        "Content planning & creation",
        "Community management",
        "Paid social advertising",
        "Analytics & insights",
        "Monthly strategy reviews",
      ],
    },
    {
      id: 2,
      title: "Website Development",
      description:
        "Professional websites that look great, load fast, and convert visitors into customers.",
      benefits: [
        "Responsive design",
        "Fast load times & optimization",
        "SEO-friendly architecture",
        "CMS integration",
        "Mobile-first approach",
      ],
    },
    {
      id: 3,
      title: "E-Commerce Solutions",
      description:
        "Complete e-commerce setup and optimization to maximize your online sales and customer experience.",
      benefits: [
        "Platform selection & setup",
        "Product catalog management",
        "Payment processing",
        "Inventory management",
        "Conversion optimization",
      ],
    },
    {
      id: 4,
      title: "Marketing Automation",
      description:
        "Automate your marketing workflows to save time and nurture leads more effectively.",
      benefits: [
        "Email automation sequences",
        "Lead scoring & segmentation",
        "CRM setup & integration",
        "Workflow automation",
        "Performance dashboards",
      ],
    },
    {
      id: 5,
      title: "Brand Development",
      description:
        "Create a memorable brand identity that resonates with your target audience and stands out from competitors.",
      benefits: [
        "Logo & visual identity design",
        "Brand strategy & positioning",
        "Brand guidelines",
        "Messaging framework",
        "Launch support",
      ],
    },
  ];

  return (
    <section id="services" className="section bg-neutral-50">
      <div className="container">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
            Our Digital Solutions
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Comprehensive services designed to help your small business grow online.
            Choose the solutions that fit your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Service List */}
          <div className="lg:col-span-1 space-y-2">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`w-full text-left px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  selectedService === service.id
                    ? "bg-primary-500 text-white shadow-lg"
                    : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Service Details */}
          <div className="lg:col-span-2 card p-8 md:p-10">
            {(() => {
              const service = services[selectedService];
              return (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Benefits List */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-neutral-900 mb-4">
                      What&apos;s Included:
                    </h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <button className="btn-primary w-full">
                    Learn More About This Service
                  </button>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}
