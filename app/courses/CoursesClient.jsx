'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card, { CardHeader, CardBody, CardFooter } from '../components/Card';
import {
  Code, BarChart3, Megaphone, Briefcase, Palette, Smartphone, Cloud,
  Shield, Sparkles, ListChecks, Brain, DollarSign, Timer, Layers, Gauge,
  Users, BookOpen
} from 'lucide-react';
import { courses as sharedCourses } from './data';

export default function CoursesClient() {
  const [selectedCategory, setSelectedCategory] = useState('All Courses');

  const iconMap = { Code, BarChart3, Megaphone, Briefcase, Palette, Smartphone, Cloud, Shield, Sparkles, ListChecks, Brain, DollarSign };
  const courses = sharedCourses.map(c => ({ ...c, Icon: iconMap[c.icon] || Code }));

  const categories = [
    { name: 'All Courses', icon: '📚' },
    { name: 'Technology', icon: '💻' },
    { name: 'Business', icon: '💼' },
    { name: 'Design', icon: '🎨' },
    { name: 'Marketing', icon: '📢' }
  ];

  const filteredCourses =
    selectedCategory === 'All Courses'
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <>
      <main className="min-h-screen mt-[-100px] lg:mt-[-70px] bg-gradient-to-br from-[#f9fafb] via-[#eef2ff] to-[#ffffff] text-[var(--text)] overflow-x-hidden">
        
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 border-b border-gray-100 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.9)_0%,_rgba(255,255,255,0)_100%)]"></div>
          <div className="relative z-10 text-center max-w-[1600px] mx-auto px-6">
            <div className="inline-flex items-center bg-white/30 backdrop-blur-lg px-6 py-2.5 rounded-full mb-6 border border-white/50 shadow-lg">
              <BookOpen className="w-5 h-5 text-black mr-2" />
              <span className="text-black font-semibold tracking-wide">
                100+ Premium Courses Available
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-gray-500">
              Explore Our Courses
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Learn from expert mentors and transform your skills today.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="sticky top-20 z-40 bg-white/40 backdrop-blur-md border-b border-gray-200 py-5 shadow-md mt-[-100px] lg:mt-[-70px]">
          <div className="max-w-[1600px] mx-auto px-6 flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-md border shadow-md
                  ${
                    selectedCategory === cat.name
                      ? 'bg-gradient-to-r from-[#ffd700] to-[#ffa500] text-black border-black shadow-xl scale-105'
                      : 'bg-white/40 text-gray-800 border-gray-300 hover:scale-105 hover:bg-white/60'
                  }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-20">
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-600 mb-10 text-base sm:text-lg">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10">
              {filteredCourses.map((course) => {
                const Icon = course.Icon;
                return (
                  <Card
                    key={course.id}
                    className="group flex flex-col bg-white/40 backdrop-blur-lg border border-white/60 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.03]"
                  >
                    <CardHeader className="relative rounded-t-3xl overflow-hidden">
                      <div className="relative w-full h-48 sm:h-56 md:h-60">
                        <Link href={`/courses/${course.id}`} className="block w-full h-full">
                          <Image
                            src={course.image}
                            alt={course.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
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
                      {/* Glassy Buttons */}
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
              Can't find what you're looking for?
            </h2>
            <p className="text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto mb-10">
              We create tailored training programs designed around your team's
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

