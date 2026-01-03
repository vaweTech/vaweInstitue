import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-gray-200/50 relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(135deg, #0ba8d9 0%, #064ea6 45%, #012a62 100%)',
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00448a] via-[#003a76] to-[#001f3f] text-white"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 ring-2 ring-white/30">
                <Image
                  src="/favicon.ico"
                  alt="VAWE Institute Logo"
                  width={48}
                  height={48}
                  className="w-[40px] h-[40px]"
                  priority
                  unoptimized
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">VAWE Institute</span>
                <span className="text-xs text-white">Learn. Grow. Succeed.</span>
              </div>
            </div>
            <p className="text-white max-w-md mb-6 leading-relaxed">
              Empowering learners with quality education and professional training. 
              Join us to unlock your potential and achieve your career goals.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
              >
                <Facebook className="w-5 h-5 text-[#39bffa]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
              >
                <Twitter className="w-5 h-5 text-[#1da1f2]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-[#0a66c2]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
              >
                <Instagram className="w-5 h-5 text-[#f77737]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-6 text-lg text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-white hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-white hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/enrollment" className="text-white hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Enrollment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-6 text-lg text-white">Contact Us</h3>
            <ul className="space-y-4 text-white">
              <li className="flex items-start group">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-[var(--button-hover)] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">Vijayawada, Andhra Pradesh, India</span>
              </li>
              <li className="flex items-center group">
                <Mail className="w-5 h-5 mr-3 text-[var(--button)] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:vawe.info@gmail.com" className="text-sm hover:text-[var(--text)] transition-colors">
                vawe.info@gmail.com
                </a>
              </li>
              <li className="flex items-center group">
                <Phone className="w-5 h-5 mr-3 text-[var(--background-alt)] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+918885103333" className="text-sm hover:text-[var(--text)] transition-colors">
                  8885103333
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white text-sm">
              &copy; {currentYear} VAWE Institute. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
                  <Link href="#" className="text-white hover:text-white transition-colors">
                Privacy Policy
              </Link>
                <Link href="#" className="text-white hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-white hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

