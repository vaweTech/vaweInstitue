'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef, useMemo } from 'react';
import {
  Home, BookOpen, UserPlus, LogIn, Menu, X, ChevronDown,
  GraduationCap, Award, Briefcase, Users, Building2, Grid3x3, MoreVertical,
  ChevronRight, Clock, TrendingUp, Star, Search
} from 'lucide-react';
import { courses } from '../courses/data';

const MORE_MENU_CLOSE_DELAY = 300;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false);

  const servicesRef = useRef(null);
  const moreRef = useRef(null);
  const coursesRef = useRef(null);
  const searchRef = useRef(null);
  const searchInputRef = useRef(null);
  const moreHoverTimeout = useRef(null);

  // responsive icon size helper (use with className)
  // we use tailwind responsive classes inline in JSX instead of function

  const categories = useMemo(
    () => Array.from(new Set(courses.map(course => course.category))),
    []
  );

  const searchResults = useMemo(() => {
    const trimmedQuery = searchQuery.trim().toLowerCase();
    if (!trimmedQuery) {
      return [];
    }

    const searchTerms = ['internship', 'program', 'training', 'course', 'certification', 'placement'];
    const isSearchingForProgram =
      trimmedQuery.includes('internship') ||
      trimmedQuery.includes('program') ||
      trimmedQuery.includes('training');

    return courses
      .filter(course => {
        const titleMatch = course.title.toLowerCase().includes(trimmedQuery);
        const categoryMatch = course.category.toLowerCase().includes(trimmedQuery);
        const descriptionMatch = course.description?.toLowerCase().includes(trimmedQuery);
        const levelMatch = course.level?.toLowerCase().includes(trimmedQuery);
        const hasRelatedTerm = searchTerms.some(term =>
          course.title.toLowerCase().includes(term) ||
          course.description?.toLowerCase().includes(term) ||
          course.category.toLowerCase().includes(term)
        );

        return titleMatch || categoryMatch || descriptionMatch || levelMatch || (isSearchingForProgram && hasRelatedTerm);
      })
      .slice(0, 10);
  }, [searchQuery]);

  const getCoursesByCategory = (category) => courses.filter(c => c.category === category).slice(0, 6);
  const activeCategory = selectedCategory ?? (isCoursesOpen && categories.length > 0 ? categories[0] : null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsCoursesOpen(false);
        setIsMoreOpen(false);
        setIsSearchOpen(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        // keep servicesRef pattern for future use
      }
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setIsMoreOpen(false);
      }
      if (coursesRef.current && !coursesRef.current.contains(event.target)) {
        setIsCoursesOpen(false);
        setSelectedCategory(null);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const clearMoreHoverTimeout = () => {
    if (moreHoverTimeout.current) {
      clearTimeout(moreHoverTimeout.current);
      moreHoverTimeout.current = null;
    }
  };

  const handleMoreMouseEnter = () => {
    clearMoreHoverTimeout();
    setIsMoreOpen(true);
  };

  const handleMoreMouseLeave = () => {
    clearMoreHoverTimeout();
    moreHoverTimeout.current = setTimeout(() => {
      setIsMoreOpen(false);
    }, MORE_MENU_CLOSE_DELAY);
  };

  const handleMoreToggleClick = () => {
    clearMoreHoverTimeout();
    setIsMoreOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const next = !prev;
      if (!next) {
        setIsMobileCoursesOpen(false);
      }
      return next;
    });
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsMobileCoursesOpen(false);
  };

  useEffect(() => {
    return () => {
      if (moreHoverTimeout.current) {
        clearTimeout(moreHoverTimeout.current);
        moreHoverTimeout.current = null;
      }
    };
  }, []);

  const services = [
    { name: 'Trainings', href: '/services#trainings', icon: GraduationCap },
    { name: 'Internships', href: '/internship', icon: Building2 },
    { name: 'Certifications', href: '/certifications', icon: Award },
    { name: 'Projects', href: '/services#projects', icon: Briefcase },
    { name: 'Workshops', href: '/services#workshops', icon: Users },
    { name: 'CRT & Placements', href: '/services', icon: Building2 },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const moreLinks = [];

  return (
    <header
      className={`w-full bg-white relative z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      style={{ position: 'fixed', top: 0, left: 0, right: 0 }}
    >
      <nav className="w-full bg-[#221d55] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-[70px] ">
          {/* Left: Logo + All Courses */}
          <div className="flex items-center space-x-5">
            <Link href="/" className="flex items-center space-x-1">
              <div
                className=" overflow-hidden flex items-center justify-center"
                style={{ width: 300, height: 65 }}
              >
                {/* Responsive logo by size via tailwind classes on parent wrapper */}
                <Image
                  src="/image.png"
                  alt="VAWE Institute"
                  width={100}
                  height={100}
                  className="object-cover w-full px-[45px] h-full"
                  priority
                  unoptimized
                />
              </div>

            </Link>

            {/* All Courses button - hidden on small devices (mobile gets link in menu) */}
            <div
              ref={coursesRef}
              className="hidden lg:block relative"
              onMouseEnter={() => setIsCoursesOpen(true)}
              onMouseLeave={() => setIsCoursesOpen(false)}
            >
              <button
                aria-haspopup="menu"
                aria-expanded={isCoursesOpen}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold text-white shadow-sm transition-all duration-200 bg-gradient-to-r from-[#F57124] to-[#FBA426] ${
                  isCoursesOpen ? 'scale-[1.02] shadow-lg ring-2 ring-white/30' : 'hover:opacity-90'
                }`}
              >
                <Grid3x3 className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm">All Courses</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCoursesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[900px] bg-white border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden">
                  <div className="flex h-[520px]">
                    <div className="w-64 bg-gray-50 border-r border-gray-200 overflow-y-auto">
                      <div className="p-4 border-b border-gray-200 bg-white">
                        <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">CATEGORIES</h3>
                      </div>
                      <div className="py-2">
                        {categories.map((category) => (
                          <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`w-full flex items-center justify-between px-4 py-3 text-left transition-all duration-200 ${
                              activeCategory === category ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            <span className={`text-sm ${activeCategory === category ? 'font-semibold' : ''}`}>
                              {category}
                            </span>
                            {activeCategory === category && <ChevronRight className="w-4 h-4 text-white" />}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 bg-white">
                      <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">Career Aligned Learning Paths</h2>
                        <p className="text-sm text-gray-600">Master essential skills for your dream career</p>
                      </div>

                      {activeCategory ? (
                        <div className="grid grid-cols-2 gap-4">
                          {getCoursesByCategory(activeCategory).map((course, index) => (
                            <Link
                              key={course.id}
                              href={`/courses/${course.id}`}
                              className="group block p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-lg transition-all duration-200"
                              onClick={() => setIsCoursesOpen(false)}
                            >
                              <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2 group-hover:text-blue-600">
                                {course.title}
                              </h3>
                              <div className="flex items-center gap-3 text-xs text-gray-500">
                                <div className="flex items-center gap-1.5">
                                  <Clock className="w-3.5 h-3.5" />
                                  <span className="font-medium">{course.duration}</span>
                                </div>
                                {index === 0 && <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">Trending Now</span>}
                                {index === 2 && <span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded text-xs font-medium">Most Popular</span>}
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-64">
                          <div className="text-center">
                            <Grid3x3 className="w-16 h-16 text-gray-300 mx-auto mb-3" />
                            <p className="text-gray-600 font-medium">Select a category to view courses</p>
                          </div>
                        </div>
                      )}

                      {activeCategory && (
                        <div className="mt-6 flex justify-end border-t border-gray-200 pt-4">
                          <Link href="/courses" className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm shadow-sm" onClick={() => setIsCoursesOpen(false)}>
                            Explore All Programs
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Center: Search (collapses on smaller screens) */}
          <div ref={searchRef} className="flex-1 max-w-2xl mx-4 hidden md:block relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search courses, programs, internships..."
                value={searchQuery}
                onChange={(e) => {
                  const value = e.target.value;
                  setSearchQuery(value);
                  setIsSearchOpen(value.trim().length > 0);
                }}
                onFocus={() => searchQuery && setIsSearchOpen(true)}
                className="w-full pl-12 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400 bg-white shadow-sm"
              />
            </div>

            {isSearchOpen && searchQuery.trim().length > 0 && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-2xl z-50 overflow-hidden">
                <div className="max-h-72 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    <>
                      <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
                        <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                          {searchResults.length} {searchResults.length === 1 ? 'Result' : 'Results'} Found
                        </div>
                      </div>
                      {searchResults.map((course) => (
                        <Link
                          key={course.id}
                          href={`/courses/${course.id}`}
                          onClick={() => { setSearchQuery(''); setIsSearchOpen(false); }}
                          className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors group"
                        >
                          <div className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-blue-600">
                            {course.title}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>{course.category}</span>
                            {course.duration && (<><span>•</span><span>{course.duration}</span></>)}
                            {course.level && (<><span>•</span><span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded">{course.level}</span></>)}
                          </div>
                          {course.description && <div className="text-xs text-gray-600 mt-1 line-clamp-1">{course.description}</div>}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <div className="px-4 py-12 text-center">
                      <div className="text-sm text-gray-500 mb-2">No courses or programs found</div>
                    <div className="text-xs text-gray-400">Try searching for &quot;internship&quot;, &quot;program&quot;, or course names</div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right: Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-4">
            {navLinks.map(link => (
              <Link key={link.name} href={link.href} className="text-white hover:text-blue-600 transition-colors font-medium">
                {link.name}
              </Link>
            ))}

            {/* More dropdown */}
            <div ref={moreRef} className="relative" onMouseEnter={handleMoreMouseEnter} onMouseLeave={handleMoreMouseLeave}>
              <button
                type="button"
                className="flex items-center space-x-1 text-white hover:text-blue-600 transition-colors font-medium"
                aria-haspopup="menu"
                aria-expanded={isMoreOpen}
                onClick={handleMoreToggleClick}
              >
                <span>More</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`absolute top-full right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-2 transition-all duration-200 ${isMoreOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}>
                {moreLinks.map(link => {
                  const Icon = link.icon;
                  return (
                    <Link key={link.name} href={link.href} className="flex items-center space-x-3 px-4 py-2.5 hover:bg-gray-50 transition-colors" onClick={() => setIsMoreOpen(false)}>
                      <Icon className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-700 text-sm font-medium">{link.name}</span>
                    </Link>
                  );
                })}

                <div className="border-t border-gray-200 mt-2 pt-2">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">Services</div>
                  {services.map(service => {
                    const Icon = service.icon;
                    return (
                      <Link key={service.name} href={service.href} className="flex items-center space-x-3 px-4 py-2.5 hover:bg-gray-50 transition-colors" onClick={() => setIsMoreOpen(false)}>
                        <Icon className="w-4 h-4 text-gray-600" />
                        <span className="text-gray-700 text-sm font-medium">{service.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <Link href="https://www.skillwins.in" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-white rounded-lg transition-all font-medium bg-gradient-to-r from-[#F57124] to-[#FBA426] shadow-lg hover:opacity-90">
              LMS Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-1.5 rounded-xl hover:bg-gray-100 transition-all duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-gray-200 animate-fade-in">
            <div className="flex flex-col gap-3 px-4 pt-4">
              <button
                type="button"
                className="flex items-center justify-between gap-2 px-4 py-2 text-white rounded-lg transition-colors font-medium bg-gradient-to-r from-[#F57124] to-[#FBA426] hover:opacity-90"
                onClick={() => setIsMobileCoursesOpen((prev) => !prev)}
                aria-expanded={isMobileCoursesOpen}
              >
                <span className="flex items-center gap-2">
                  <Grid3x3 className="w-5 h-5" />
                  <span>All Courses</span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isMobileCoursesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isMobileCoursesOpen && (
                <div className="mt-3 rounded-lg border border-blue-100 bg-white shadow-sm p-4 space-y-3">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Categories
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((category) => (
                      <Link
                        key={category}
                        href={`/courses?category=${encodeURIComponent(category)}`}
                        className="block px-3 py-2 rounded-lg bg-gray-50 text-center text-sm font-medium text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsMobileCoursesOpen(false);
                        }}
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/courses"
                    className="flex items-center justify-center gap-2 px-4 py-2 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 text-sm font-semibold"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsMobileCoursesOpen(false);
                    }}
                  >
                    Explore Full Catalog
                  </Link>
                </div>
              )}

              {/* Mobile Search */}
              <div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search courses, programs, internships..."
                    value={searchQuery}
                    onChange={(e) => {
                      const value = e.target.value;
                      setSearchQuery(value);
                      setIsSearchOpen(value.trim().length > 0);
                    }}
                    onFocus={() => searchQuery && setIsSearchOpen(true)}
                    className="w-full pl-11 pr-4 py-3 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>

                {isSearchOpen && searchQuery.trim().length > 0 && (
                  <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                    <div className="max-h-64 overflow-y-auto">
                      {searchResults.length > 0 ? (
                        <>
                          <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
                            <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                              {searchResults.length} {searchResults.length === 1 ? 'Result' : 'Results'} Found
                            </div>
                          </div>
                          {searchResults.map(course => (
                            <Link key={course.id} href={`/courses/${course.id}`} onClick={() => { setSearchQuery(''); setIsSearchOpen(false); closeMobileMenu(); }} className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100">
                              <div className="font-semibold text-gray-900 text-sm mb-1">{course.title}</div>
                              <div className="flex items-center gap-2 text-xs text-gray-500">
                                <span>{course.category}</span>
                                {course.duration && (<><span>•</span><span>{course.duration}</span></>)}
                              </div>
                              {course.description && <div className="text-xs text-gray-600 mt-1 line-clamp-1">{course.description}</div>}
                            </Link>
                          ))}
                        </>
                      ) : (
                        <div className="px-4 py-8 text-center">
                          <div className="text-sm text-gray-500 mb-2">No courses or programs found</div>
                          <div className="text-xs text-gray-400">Try &quot;internship&quot; or &quot;program&quot;</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Primary Links */}
              <div className="flex flex-col">
                {navLinks.map(link => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-4 py-2.5 text-white bg-[#221d55] hover:bg-[#2f2a70] rounded-lg transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Services */}
              <div>
                <div className="text-sm font-semibold text-gray-500 mb-2">Services</div>
                <div className="grid grid-cols-2 gap-2">
                  {services.map(service => {
                    const Icon = service.icon;
                    return (
                      <Link key={service.name} href={service.href} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100" onClick={closeMobileMenu}>
                        <Icon className="w-4 h-4" />
                        <span className="text-sm">{service.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <Link href="https://www.skillwins.in" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-6 py-3 text-white rounded-lg bg-gradient-to-r from-[#F57124] to-[#FBA426] shadow-lg hover:opacity-90 transition-all font-medium" onClick={closeMobileMenu}>
                LMS Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
