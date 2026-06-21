"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X, Cross, MessageCircle } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#map", label: "Location" },
  { href: "#prescription", label: "Order Rx" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-white shadow-lg shadow-blue-900/10 dark:shadow-blue-900/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/40 transition-shadow">
              <Cross className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-gray-900 animate-pulse" />
          </div>
          <div>
            <p className={`font-black text-base leading-tight tracking-tight transition-colors ${
              scrolled ? "text-gray-900 dark:text-white" : "text-white"
            }`}>
              Shri Bala Ji
            </p>
            <p className="text-xs font-bold text-cyan-400 tracking-widest uppercase">
              Medical Store
            </p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-all hover:text-blue-400 ${
                scrolled
                  ? "text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                  : "text-white/80 hover:bg-white/10"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right — toggle + CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Dark/Light toggle */}
          <ThemeToggle scrolled={scrolled} />

          <a
            href="https://wa.me/918934848480"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-sm font-bold transition-colors ${
              scrolled ? "text-green-600 dark:text-green-400 hover:text-green-500" : "text-green-400 hover:text-green-300"
            }`}
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>

          <a
            href="tel:09807160890"
            className="relative flex items-center gap-2 btn-premium text-white text-sm font-black px-5 py-2.5 rounded-full shadow-lg hover:shadow-blue-500/30 transition-all"
          >
            <Phone className="w-4 h-4" />
            <span className="relative z-10">Call Now</span>
          </a>
        </div>

        {/* Mobile right */}
        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle scrolled={scrolled} />
          <button
            className={`p-2 rounded-xl transition-all ${
              scrolled
                ? "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass-white border-t border-gray-100/50 dark:border-white/5 px-4 pb-6 pt-3">
          <div className="flex flex-col gap-1 mb-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 dark:text-gray-200 font-medium py-3 px-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 transition-all"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex gap-3">
            <a
              href="tel:09807160890"
              className="flex-1 flex items-center justify-center gap-2 btn-premium text-white font-black py-3 rounded-xl"
            >
              <Phone className="w-4 h-4" />
              <span className="relative z-10">Call Now</span>
            </a>
            <a
              href="https://wa.me/918934848480"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-black py-3 rounded-xl transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
