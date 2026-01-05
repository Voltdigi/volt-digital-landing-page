"use client";

import { useState, FormEvent } from "react";
import { Mail, CheckCircle } from "lucide-react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    try {
      // Send email to your email service
      // For now, we'll simulate the submission
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      setSubmitted(true);
      setEmail("");
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="signup" className="section bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="card p-8 md:p-12 bg-white shadow-xl">
            {!submitted ? (
              <div>
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-6">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>

                <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
                  Ready to Accelerate Your Growth?
                </h2>

                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  Join 500+ small business owners getting expert digital marketing
                  tips, case studies, and exclusive offers. Delivered to your inbox
                  every week.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isLoading}
                      className="w-full px-6 py-4 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                      required
                    />
                    {error && (
                      <p className="mt-2 text-sm text-accent">{error}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Subscribing..." : "Get Free Consultation"}
                  </button>

                  <p className="text-xs text-neutral-600 text-center">
                    We&apos;ll never spam you. Unsubscribe anytime. See our{" "}
                    <a href="#" className="text-primary-600 hover:underline">
                      privacy policy
                    </a>
                    .
                  </p>
                </form>

                {/* Trust indicators */}
                <div className="mt-8 pt-8 border-t border-neutral-200">
                  <p className="text-sm text-neutral-600 text-center mb-4">
                    What happens next:
                  </p>
                  <div className="space-y-3">
                    {[
                      "Check your email for a welcome message",
                      "Get a free digital marketing audit",
                      "Schedule your consultation within 24 hours",
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                        <span className="text-sm text-neutral-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="flex items-center justify-center w-16 h-16 bg-success bg-opacity-10 rounded-full mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>

                <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-3">
                  Check Your Email!
                </h3>

                <p className="text-neutral-600 mb-6 max-w-sm">
                  We&apos;ve sent you a confirmation email with next steps and your free
                  digital marketing audit.
                </p>

                <p className="text-sm text-neutral-600">
                  Don&apos;t see it? Check your spam folder or{" "}
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-primary-600 hover:underline font-semibold"
                  >
                    try again
                  </button>
                  .
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
