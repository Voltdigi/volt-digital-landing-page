"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-pulse"></div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-slideUp">
          {/* Left content */}
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-neutral-900 leading-tight">
              <span className="gradient-text">Drive Business Growth</span> with Digital Solutions
            </h1>

            <p className="text-lg text-neutral-600 leading-relaxed max-w-lg">
              Expert marketing, web design, and automation services tailored to
              help your business thrive. Simple. Affordable. Results-driven.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary group"
              >
                Get Started - Free Consultation
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>

          </div>

          {/* Right illustration */}
          <div className="relative hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Main card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10 border border-neutral-100">
                <div className="space-y-4">
                  <div className="h-3 bg-primary-500 rounded-full w-3/4"></div>
                  <div className="h-2 bg-neutral-200 rounded-full w-full"></div>
                  <div className="h-2 bg-neutral-200 rounded-full w-5/6"></div>

                  <div className="pt-4 space-y-2">
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary-100"></div>
                      <div className="w-8 h-8 rounded-full bg-secondary-100"></div>
                      <div className="w-8 h-8 rounded-full bg-accent bg-opacity-20"></div>
                    </div>
                  </div>

                  <div className="pt-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="h-2 bg-success bg-opacity-30 rounded-full w-1/3"></div>
                      <span className="text-xs font-semibold text-success">
                        +150%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="h-2 bg-primary-200 rounded-full w-1/2"></div>
                      <span className="text-xs font-semibold text-primary-500">
                        +8 weeks
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card 1 */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-neutral-100 w-40 z-20">
                <p className="text-xs text-neutral-600 mb-2">ROI Increase</p>
                <p className="text-2xl font-bold text-primary-600">3x</p>
              </div>

              {/* Floating card 2 */}
              <div className="absolute -top-4 -left-8 bg-white rounded-xl shadow-lg p-4 border border-neutral-100 w-40 z-20">
                <p className="text-xs text-neutral-600 mb-2">Avg. Client</p>
                <p className="text-2xl font-bold text-secondary-600">98%</p>
                <p className="text-xs text-neutral-600">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
