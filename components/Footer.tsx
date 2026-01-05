import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-lg font-bold text-white">Volt Digital</span>
            </div>
            <p className="text-sm text-neutral-400 mb-6">
              Digital solutions built for small business growth.
            </p>
            {/* Social Media */}
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, i) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors duration-200"
                    aria-label="Social media link"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                "Digital Marketing",
                "Web Design",
                "E-Commerce",
                "Automation",
                "Brand Development",
              ].map((service, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Blog", "Case Studies", "Careers", "Contact"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {[
                "Marketing Guide",
                "SEO Checklist",
                "Free Audit",
                "Blog",
                "Webinars",
              ].map((resource, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:hello@voltdigital.com"
                  className="text-neutral-400 hover:text-primary-400 transition-colors"
                >
                  hello@voltdigital.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-neutral-400 hover:text-primary-400 transition-colors"
                >
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="text-neutral-400">
                123 Business Ave<br />
                Suite 100<br />
                City, State 12345
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 pt-8 md:pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Copyright */}
            <p className="text-sm text-neutral-400">
              &copy; {currentYear} Volt Digital. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex gap-6 md:justify-end">
              <a
                href="#"
                className="text-sm text-neutral-400 hover:text-primary-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-neutral-400 hover:text-primary-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-neutral-400 hover:text-primary-400 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
