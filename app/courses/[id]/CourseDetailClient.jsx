'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Timer, Layers, Gauge, Users, BookOpen, CheckCircle2, Star } from 'lucide-react';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import { courses } from '../data';

export default function CourseDetailClient({ courseId }) {
  const course = courses.find(c => c.id === courseId);

  if (!course) return notFound();

  const imageUrl = course.image
    ? `https://vaweinstitute.com${course.image}`
    : `https://vaweinstitute.com/assets/codingimage.jpg`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "EducationalOrganization",
      name: "VAWE Institute",
      url: "https://vaweinstitute.com",
    },
    courseCode: `VAWE-${course.id}`,
    educationalLevel: course.level,
    timeRequired: course.duration,
    numberOfCredits: course.modules,
    image: imageUrl,
    inLanguage: "en-US",
    teaches: course.syllabus?.map((s) => s.title) || [],
    coursePrerequisites: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: course.level,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: course.students.toString(),
    },
    offers: {
      "@type": "Offer",
      price: course.price || "Contact for pricing",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `https://vaweinstitute.com/courses/${course.id}`,
    },
    instructor: course.instructor
      ? {
          "@type": "Person",
          name: course.instructor.name,
          description: course.instructor.bio,
        }
      : undefined,
  };

  return (
    <>
      <Script
        id="jsonld-course-detail"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-gradient-to-br from-[#f9fafb] via-[#eef2ff] to-[#ffffff] text-gray-900 overflow-x-hidden">
        
        {/* Hero Section */}
        <section className="relative py-14 sm:py-20 lg:py-24 border-b border-gray-200 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.85)_0%,_rgba(255,255,255,0)_100%)]" />

          <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl bg-white/30 backdrop-blur-lg border border-white/50">
              <Image
                src={course.image}
                alt={course.title}
                width={800}
                height={500}
                className="object-cover w-full h-[220px] sm:h-[320px] lg:h-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-gray-500 leading-tight">
                {course.title}
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-5 sm:mb-6 leading-relaxed">
                {course.description}
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm lg:text-base bg-white/60 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/60 shadow-md">
                <span className="flex items-center gap-2"><Timer className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" /> {course.duration}</span>
                <span className="flex items-center gap-2"><Layers className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" /> {course.modules} modules</span>
                <span className="flex items-center gap-2"><Gauge className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" /> {course.level}</span>
                <span className="flex items-center gap-2"><Users className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" /> {course.students}+ Students</span>
              </div>

              <div className="mt-6 sm:mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <Button
                  href={`/enrollment?courseId=${course.id}`}
                  className="w-full bg-gradient-to-r from-[#ffd700] to-[#ffa500] text-black font-semibold py-3 rounded-xl border-2 border-black hover:shadow-lg hover:scale-[1.02] transition-all"
                >
                  Enroll Now →
                </Button>
                <Button
                  href="/contact"
                  className="w-full bg-white/60 text-black font-semibold py-3 rounded-xl border-2 border-black backdrop-blur-md hover:bg-white/80 hover:scale-[1.02] transition-all"
                >
                  Contact Instructor
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Syllabus Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white/60 backdrop-blur-md border-t border-b border-gray-200">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-4xl font-bold mb-5 sm:mb-8 text-center">Course Syllabus</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {course.syllabus?.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-md hover:shadow-lg transition-all"
                >
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instructor Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#eef2ff] to-[#ffffff] text-center">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-4xl font-bold mb-6">Meet Your Instructor</h2>
            <div className="bg-white/60 backdrop-blur-lg border border-white/60 rounded-3xl p-6 sm:p-8 shadow-xl inline-block w-full sm:w-auto">
              <Image
                src={course.instructor?.image || '/instructor-placeholder.jpg'}
                alt={course.instructor?.name || 'Instructor'}
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4 object-cover"
                sizes="120px"
              />
              <h3 className="text-lg sm:text-xl font-semibold">{course.instructor?.name}</h3>
              <p className="text-gray-700 text-sm sm:text-base px-2">{course.instructor?.bio}</p>
              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-[#eef2ff] to-white text-center">
          <div className="max-w-[1200px] mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Start Your Journey Today</h2>
            <p className="text-gray-700 mb-8 text-base sm:text-lg">
              Enroll now and get lifetime access to all modules, updates, and mentor support.
            </p>
            <Button
              href="/enrollment"
              className="bg-gradient-to-r from-[#ffd700] to-[#ffa500] border-2 border-black rounded-full px-10 py-3 text-lg font-semibold text-black hover:scale-105 transition-transform"
            >
              Enroll Now 🚀
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

