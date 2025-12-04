"use client";

import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Licensing Support", href: "#licensing" },
  { label: "Resources", href: "#resources" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const contactButtonClasses =
    "inline-block rounded-md px-10 py-4 text-center font-semibold text-white shadow-lg transition-all duration-300";
  const contactButtonStyle = {
    background: "linear-gradient(to right, #155DFC, #9810FA)",
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <Image src="svgviewer-output.svg" alt="logo" width={150} height={150} />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className={contactButtonClasses}
              style={contactButtonStyle}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200 mt-4">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-gray-700 hover:text-purple-600 transition"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className={contactButtonClasses + " w-full text-center"}
                style={contactButtonStyle}
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
