'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Footer from '../components/Footer';
import Card, { CardHeader, CardBody, CardFooter } from '../components/Card';

import {
  CodeBracketIcon,
  BriefcaseIcon,
  MegaphoneIcon,
  WifiIcon,
  CircleStackIcon,
  GlobeAltIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  CpuChipIcon,
  Cog6ToothIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
  PresentationChartBarIcon,
} from '@heroicons/react/24/outline';

import {
  Code,
  BarChart3,
  Megaphone,
  Briefcase,
  Palette,
  Smartphone,
  Cloud,
  Shield,
  Sparkles,
  ListChecks,
  Brain,
  DollarSign,
  Timer,
  Layers,
  Gauge,
  Users,
  BookOpen,
  ChevronRight,
} from 'lucide-react';

import { courses as sharedCourses } from './data';

export default function CoursesClient() {
  const [selectedCategory, setSelectedCategory] = useState('All Courses');

  // Map icon name (string from course data) → actual Lucide icon component
  const iconMap = {
    Code,
    BarChart3,
    Megaphone,
    Briefcase,
    Palette,
    Smartphone,
    Cloud,
    Shield,
    Sparkles,
    ListChecks,
    Brain,
    DollarSign,
  };

  const courses = sharedCourses.map((c) => ({
    ...c,
    Icon: iconMap[c.icon] || Code,
  }));

  const categories = [
    {
      id: 'programming',
      label: 'Programming',
      category: 'Programming',
      icon: CodeBracketIcon,
    },
    {
      id: 'career-skills',
      label: 'Career Skills',
      category: 'Career Skills',
      icon: BriefcaseIcon,
    },
    {
      id: 'digital-marketing',
      label: 'Digital Marketing',
      category: 'Digital Marketing',
      icon: MegaphoneIcon,
    },
    {
      id: 'telecom-networking',
      label: 'Telecom & Networking',
      category: 'Telecom & Networking',
      icon: WifiIcon,
    },
    {
      id: 'databases',
      label: 'Databases',
      category: 'Databases',
      icon: CircleStackIcon,
    },
    {
      id: 'web-development',
      label: 'Web Development',
      category: 'Web Development',
      icon: GlobeAltIcon,
    },
    {
      id: 'productivity',
      label: 'Productivity',
      category: 'Productivity',
      icon: ClipboardDocumentCheckIcon,
    },
    {
      id: 'data-analytics',
      label: 'Data & Analytics',
      category: 'Data & Analytics',
      icon: ChartBarIcon,
    },
    {
      id: 'ai-ml',
      label: 'AI & ML',
      category: 'AI & ML',
      icon: CpuChipIcon,
    },
    {
      id: 'hardware-iot',
      label: 'Hardware & IoT',
      category: 'Hardware & IoT',
      icon: Cog6ToothIcon,
    },
    {
      id: 'customer-service',
      label: 'Customer Service',
      category: 'Customer Service',
      icon: ChatBubbleLeftRightIcon,
    },
    {
      id: 'healthcare',
      label: 'Healthcare',
      category: 'Healthcare',
      icon: HeartIcon,
    },
    {
      id: 'business-intelligence',
      label: 'Business Intelligence',
      category: 'Business Intelligence',
      icon: PresentationChartBarIcon,
    },
  ];

  const filteredCourses =
    selectedCategory === 'All Courses'
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <>
      <main className="min-h-screen mt-[-60px] sm:mt-[-90px] lg:mt-[-70px] bg-gradient-to-br from-[#f9fafb] via-[#eef2ff] to-[#ffffff] text-[var(--text)] overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 md:py-32 border-b border-gray-100 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.9)_0%,_rgba(255,255,255,0)_100%)]" />
          <div className="relative mb-[-50px] z-10 text-center max-w-[1600px] mx-auto px-4 sm:px-6">
            <div className="inline-flex items-center bg-white/30 backdrop-blur-lg px-4 sm:px-6 py-2 sm:py-2.5 rounded-full mb-5 border border-white/50 shadow-lg text-sm sm:text-base">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-black mr-2" />
              <span className="text-black font-semibold tracking-wide">
                100+ Premium Courses Available
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-gray-500 leading-tight">
              Explore Our Courses
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-2">
              Learn from expert mentors and transform your skills today.
            </p>
          </div>
        </section>

        {/* Category Filter - hidden on mobile */}
        <section className="hidden sm:block sticky top-20 z-40 bg-white/40 backdrop-blur-md border-b border-gray-200 py-5 shadow-md mt-[-100px] lg:mt-[-70px]">
          <div className="max-w-[1600px] mx-auto px-6 flex flex-wrap justify-center gap-4">
            {/* All Courses button */}
            <button
              onClick={() => setSelectedCategory('All Courses')}
              className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-md border shadow-md flex items-center justify-center gap-2
                ${
                  selectedCategory === 'All Courses'
                    ? 'bg-gradient-to-r from-[#ffd700] to-[#ffa500] text-black border-black shadow-xl scale-105'
                    : 'bg-white/40 text-gray-800 border-gray-300 hover:scale-105 hover:bg-white/60'
                }`}
            >
              <span>All Courses</span>
            </button>

            {/* Category buttons */}
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.category)}
                  className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-md border shadow-md
                    ${
                      selectedCategory === cat.category
                        ? 'bg-gradient-to-r from-[#ffd700] to-[#ffa500] text-black border-black shadow-xl scale-105'
                        : 'bg-white/40 text-gray-800 border-gray-300 hover:scale-105 hover:bg-white/60'
                    }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Icon className="w-4 h-4" />
                    <span>{cat.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-20">
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="hidden sm:block text-center text-gray-600 mb-10 text-base sm:text-lg">
              Showing{' '}
              <span className="font-bold text-[var(--button-hover)]">
                {filteredCourses.length}
              </span>{' '}
              course{filteredCourses.length !== 1 && 's'}{' '}
              {selectedCategory !== 'All Courses' && (
                <>
                  in{' '}
                  <span className="font-bold text-[var(--button)]">
                    {selectedCategory}
                  </span>
                </>
              )}
            </p>

            {/* Mobile list view */}
            <div className="sm:hidden mt-[-50px] space-y-4">
              {filteredCourses.map((course) => {
                const Icon = course.Icon;
                return (
                  <Link
                    key={`${course.id}-mobile`}
                    href={`/courses/${course.id}`}
                    className="flex items-center gap-3 p-3 bg-white/70 border border-white/80 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center border border-gray-100 overflow-hidden">
                      <Image
                        src={course.image}
                        alt={course.title}
                        width={56}
                        height={56}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-sm font-semibold text-gray-900">{course.title}</p>
                      <p className="text-xs text-gray-500 flex flex-wrap gap-1 items-center">
                        <span className="flex items-center gap-1">
                          <Timer className="w-3.5 h-3.5" />
                          {course.duration}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Gauge className="w-3.5 h-3.5" />
                          {course.level}
                        </span>
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                );
              })}
            </div>

            {/* Desktop/tablet card grid */}
            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10">
              {filteredCourses.map((course) => {
                const Icon = course.Icon;
                return (
                  <Card
                    key={course.id}
                    className="group flex flex-col bg-white/40 backdrop-blur-lg border border-white/60 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.03]"
                  >
                    <CardHeader className="relative rounded-t-3xl overflow-hidden">
                      <div className="relative w-full aspect-[4/3] bg-white flex items-center justify-center">
                        <Link href={`/courses/${course.id}`} className="block w-full h-full">
                          <Image
                            src={course.image}
                            alt={course.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                            className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                          />
                        </Link>
                      </div>
                      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm rounded-full p-2 shadow-lg">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </CardHeader>

                    <CardBody className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        <Link href={`/courses/${course.id}`}>{course.title}</Link>
                      </h3>
                      <p className="text-gray-700 text-sm sm:text-base mb-4 flex-1">
                        {course.description}
                      </p>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-sm bg-white/50 rounded-lg p-2 backdrop-blur-sm">
                          <span className="flex items-center gap-1 text-gray-700">
                            <Timer className="w-4 h-4" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-1 text-gray-700">
                            <Layers className="w-4 h-4" />
                            {course.modules} modules
                          </span>
                        </div>

                        <div className="flex justify-between items-center text-sm bg-white/50 rounded-lg p-2 backdrop-blur-sm">
                          <span className="flex items-center gap-1 text-gray-700">
                            <Gauge className="w-4 h-4" />
                            {course.level}
                          </span>
                          <span className="flex items-center gap-1 text-gray-700">
                            <Users className="w-4 h-4" />
                            {course.students}+
                          </span>
                        </div>
                      </div>
                    </CardBody>

                    <CardFooter className="p-6 pt-0 flex flex-col sm:flex-row gap-4">
                      <Link
                        href={`/courses/${course.id}`}
                        className="flex-1 text-center font-semibold py-3 rounded-xl border border-black bg-white/60 hover:bg-white/80 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] shadow-md"
                      >
                        View Details
                      </Link>
                      <Link
                        href={`/enrollment?courseId=${course.id}`}
                        className="flex-1 text-center font-semibold py-3 rounded-xl border-2 border-black bg-gradient-to-r from-[#ffd700] to-[#ffa500] hover:shadow-xl hover:scale-[1.05] transition-all duration-300"
                      >
                        Enroll Now →
                      </Link>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-28 bg-gradient-to-b from-white via-[#eef2ff] to-white text-center">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
              Can&apos;t find what you&apos;re looking for?
            </h2>
            <p className="text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto mb-10">
              We create tailored training programs designed around your team&apos;s
              goals, skill level, and learning style.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link
                href="/contact"
                className="px-8 py-3 font-semibold text-black border-2 border-black rounded-full bg-gradient-to-r from-[#ffd700] to-[#ffa500] hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get in Touch ✨
              </Link>
              <Link
                href="tel:+15551234567"
                className="px-8 py-3 font-semibold text-white border-2 border-black rounded-full bg-black hover:bg-neutral-800 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                📞 Call Us Now
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
