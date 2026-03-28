"use client";

import { useState } from "react";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-9xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center md:grid md:grid-cols-3 md:items-center">
          {/* Logo - Larger and bolder */}
          <a href="#" className="text-2xl font-black text-gray-900 flex items-center gap-1 hover:text-cyan-600 transition-colors md:justify-self-start">
            IL<span className="text-cyan-600">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center gap-1 md:justify-self-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block md:justify-self-end">
            <Button href="#contact" variant="primary">
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1.5 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-900 transition-all ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-900 transition-all ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-900 transition-all ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 border-t border-gray-200 pt-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-gray-700 hover:text-cyan-600 transition-colors font-medium py-2 px-2 hover:bg-gray-100 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button href="#contact" variant="primary" className="w-full">
              Get In Touch
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
