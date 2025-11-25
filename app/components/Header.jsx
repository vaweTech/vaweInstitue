'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Home, BookOpen, Info, Mail, UserPlus, LogIn, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Courses', href: '/courses', icon: BookOpen },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg shadow-lg border-b border-gray-200/50" style={{ backgroundColor: 'var(--navbar-hero)' }}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Favicon */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 ring-2 ring-white/20">
              <Image
                src="/favicon.ico"
                alt="VAWE Institute Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#C4B4E3]/20 via-[#FFD6BA]/20 to-[#B3E5FC]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight transition-colors duration-300" style={{ color: 'var(--text)', fontFamily: '"Times New Roman", Times, serif' }}>
                VAWE INSTITUTE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-2 px-4 py-2.5 rounded-xl transition-all duration-300 font-medium group relative overflow-hidden hover:bg-white/30"
                  style={{ color: 'var(--text)' }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
            <div className="ml-6 flex items-center space-x-3">
              <Link
                href="/enrollment"
                className="flex items-center space-x-2 px-6 py-2.5 rounded-full transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105 bg-[var(--button)] hover:bg-[var(--button-hover)] text-[var(--text)]"
              >
                <UserPlus className="w-4 h-4" />
                <span>Enroll Now</span>
              </Link>
              <a
                href="https://www.skillwins.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-2.5 rounded-full transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105 bg-[var(--navbar-hero)] text-[var(--text)] hover:brightness-95"
              >
                <LogIn className="w-4 h-4" />
                <span>LMS Login</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 rounded-xl hover:bg-gradient-to-r hover:from-[#C4B4E3]/10 hover:to-[#B3E5FC]/10 transition-all duration-300 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" style={{ color: 'var(--text)' }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: 'var(--text)' }} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200/50 animate-fade-in">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium group hover:bg-white/30"
                    style={{ color: 'var(--text)' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
              <div className="pt-4 space-y-3">
                <Link
                  href="/enrollment"
                  className="flex items-center justify-center space-x-2 px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-[var(--button)] hover:bg-[var(--button-hover)] text-[var(--text)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <UserPlus className="w-5 h-5" />
                  <span>Enroll Now</span>
                </Link>
                <a
                  href="https://www.skillwins.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-[var(--navbar-hero)] text-[var(--text)] hover:brightness-95"
                >
                  <LogIn className="w-5 h-5" />
                  <span>LMS Login</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
