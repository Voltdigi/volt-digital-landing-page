"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">V</span>
          </div>
          <span className="text-xl font-bold text-neutral-900">Volt Digital</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("services")}
            className="text-neutral-700 hover:text-primary-500 transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-neutral-700 hover:text-primary-500 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-neutral-700 hover:text-primary-500 transition-colors"
          >
            FAQ
          </button>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <button
            onClick={() => scrollToSection("signup")}
            className="btn-primary"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-neutral-900 transition-all ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-neutral-900 transition-all ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-neutral-900 transition-all ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100">
          <div className="container py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("services")}
              className="text-left text-neutral-700 hover:text-primary-500 py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-neutral-700 hover:text-primary-500 py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-left text-neutral-700 hover:text-primary-500 py-2"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("signup")}
              className="btn-primary w-full"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
