'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/10">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg overflow-hidden transform group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/FavIcon.svg"
                  alt="YYIT logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">YYIT</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#pricing" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium">
              Pakketten
            </a>
            <a href="#solutions" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium">
              Oplossingen
            </a>
            <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium">
              Over ons
            </a>
            <a href="#partners" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium">
              Partners
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
            <a
              href="#cta"
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-sm font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
            >
              Start nu
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-4 animate-fadeIn">
            <a href="#pricing" className="block text-slate-300 hover:text-cyan-400 transition-colors py-2">
              Pakketten
            </a>
            <a href="#solutions" className="block text-slate-300 hover:text-cyan-400 transition-colors py-2">
              Oplossingen
            </a>
            <a href="#about" className="block text-slate-300 hover:text-cyan-400 transition-colors py-2">
              Over ons
            </a>
            <a href="#partners" className="block text-slate-300 hover:text-cyan-400 transition-colors py-2">
              Partners
            </a>
            <a href="#contact" className="block text-slate-300 hover:text-cyan-400 transition-colors py-2">
              Contact
            </a>
            <a
              href="#cta"
              className="block text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold"
            >
              Start nu
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
