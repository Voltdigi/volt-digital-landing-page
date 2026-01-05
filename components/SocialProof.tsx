"use client";

export default function SocialProof() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Local Bakery Co.",
      text: "Volt Digital helped us increase our online orders by 150% in just 3 months. Their team was responsive and truly understood our business.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      company: "Tech Consulting",
      text: "Best investment we made for our digital presence. The ROI has been incredible and they continue to support us every step of the way.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      company: "Fitness Studio",
      text: "From social media to website redesign, Volt Digital handled everything professionally. Our community has grown significantly.",
      rating: 5,
    },
  ];

  const clientStats = [
    { label: "Satisfied Clients", value: "98%" },
    { label: "Projects Completed", value: "500+" },
    { label: "Years Experience", value: "50+" },
    { label: "Avg ROI Increase", value: "3x" },
  ];

  return (
    <section className="section">
      <div className="container">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {clientStats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-neutral-50 border border-neutral-100 animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-sm text-neutral-600 mb-2">{stat.label}</p>
              <p className="text-4xl md:text-5xl font-heading font-bold text-primary-600">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
            Loved by Small Business Owners
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. See what our clients have to say about
            working with Volt Digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card p-8 flex flex-col animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-lg">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-neutral-700 mb-6 flex-grow leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author */}
              <div className="border-t border-neutral-100 pt-4">
                <p className="font-semibold text-neutral-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-neutral-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <p className="text-neutral-600 mb-4">Trusted by businesses like:</p>
          <div className="flex justify-center items-center gap-8 flex-wrap opacity-60">
            {["TechCorp", "GrowthCo", "MarketPro", "DigitalHub"].map(
              (company, i) => (
                <p key={i} className="font-semibold text-neutral-400">
                  {company}
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
