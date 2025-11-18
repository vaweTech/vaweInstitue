'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card, { CardHeader, CardBody, CardFooter } from '../components/Card';
import {
  Award,
  CheckCircle2,
  Clock,
  Users,
  BookOpen,
  FileText,
  GraduationCap,
  Briefcase,
  Target,
  ArrowRight,
  Star,
  Shield,
  Globe,
  Calendar,
  TrendingUp,
  Sparkles,
  DollarSign,
} from 'lucide-react';

export default function CertificationsClient() {
  const [selectedType, setSelectedType] = useState('All');

  const certificateTypes = [
    {
      id: 'internship',
      name: 'Internship Certificates',
      icon: Briefcase,
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      description: 'Certificates awarded upon successful completion of internship programs',
      duration: '1-6 months',
      requirements: [
        'Complete assigned projects',
        'Attend all internship sessions',
        'Submit final project report',
        'Maintain minimum 70% attendance',
      ],
      benefits: [
        'Real-world industry experience',
        'Portfolio development',
        'Mentorship from experts',
        'Job placement assistance',
      ],
    },
    {
      id: 'short-term',
      name: 'Short-Term Course Certificates',
      icon: Clock,
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      description: 'Certificates for courses completed in 1-3 months',
      duration: '1-3 months',
      requirements: [
        'Complete all course modules',
        'Pass final assessment (minimum 60%)',
        'Submit required assignments',
        'Attend minimum 75% of classes',
      ],
      benefits: [
        'Quick skill acquisition',
        'Industry-relevant knowledge',
        'Certificate of completion',
        'Lifetime access to course materials',
      ],
    },
    {
      id: 'long-term',
      name: 'Long-Term Course Certificates',
      icon: GraduationCap,
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      description: 'Comprehensive certificates for extended training programs',
      duration: '3-12 months',
      requirements: [
        'Complete all course modules',
        'Pass all assessments (minimum 70%)',
        'Complete capstone project',
        'Maintain minimum 80% attendance',
        'Participate in peer reviews',
      ],
      benefits: [
        'In-depth expertise',
        'Pearson VUE certification eligibility',
        'Industry-recognized credential',
        'Career counseling support',
        'Placement assistance',
      ],
    },
    {
      id: 'professional',
      name: 'Professional Certifications',
      icon: Award,
      color: 'from-orange-500 to-orange-700',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      description: 'Globally recognized certifications through Pearson VUE',
      duration: 'Varies by certification',
      requirements: [
        'Complete prerequisite training',
        'Pass Pearson VUE examination',
        'Meet industry standards',
        'Maintain certification through continuing education',
      ],
      benefits: [
        'Global recognition',
        'Industry validation',
        'Career advancement',
        'Higher earning potential',
        'Professional credibility',
      ],
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Enroll in a Course',
      description: 'Choose and enroll in any of our training programs, internships, or certification courses.',
      icon: BookOpen,
    },
    {
      step: 2,
      title: 'Complete Training',
      description: 'Attend classes, complete assignments, and participate in all required activities.',
      icon: Target,
    },
    {
      step: 3,
      title: 'Pass Assessments',
      description: 'Successfully complete all quizzes, projects, and final examinations.',
      icon: CheckCircle2,
    },
    {
      step: 4,
      title: 'Submit Requirements',
      description: 'Submit all required documents, projects, and reports for evaluation.',
      icon: FileText,
    },
    {
      step: 5,
      title: 'Receive Certificate',
      description: 'Get your certificate digitally and physically (for eligible programs).',
      icon: Award,
    },
  ];

  const filteredTypes = selectedType === 'All' 
    ? certificateTypes 
    : certificateTypes.filter(type => type.id === selectedType.toLowerCase().replace(' ', '-'));

  return (
    <>
      <main className="min-h-screen mt-[-100px] lg:mt-[-70px] bg-gradient-to-br from-[#f9fafb] via-[#eef2ff] to-[#ffffff] text-[var(--text)] overflow-x-hidden">
        
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 border-b border-gray-100 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.9)_0%,_rgba(255,255,255,0)_100%)]"></div>
          <div className="relative z-10 text-center max-w-[1600px] mx-auto px-6">
            <div className="inline-flex items-center bg-white/30 backdrop-blur-lg px-6 py-2.5 rounded-full mb-6 border border-white/50 shadow-lg">
              <Award className="w-5 h-5 text-black mr-2" />
              <span className="text-black font-semibold tracking-wide">
                Globally Recognized Certifications
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-gray-500">
              Get Certified. Get Recognized.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Earn industry-validated credentials through Pearson VUE and stand out as a certified professional.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-semibold">Pearson VUE Partner</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200">
                <Globe className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold">Globally Recognized</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200">
                <Star className="w-5 h-5 text-yellow-600" />
                <span className="text-sm font-semibold">Industry Validated</span>
              </div>
            </div>
          </div>
        </section>

        {/* How to Get Certificates Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                How to Get Your Certificate
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Follow our simple 5-step process to earn your certification and validate your expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                if (!IconComponent) {
                  console.error(`Icon not found for step ${step.step}: ${step.title}`);
                  return null;
                }
                return (
                  <div
                    key={step.step}
                    className="relative"
                  >
                    {/* Connection Line */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 z-0" style={{ width: 'calc(100% - 2rem)' }}></div>
                    )}
                    
                    <Card className="h-full bg-white border-2 border-gray-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
                      <CardBody className="text-center p-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 mt-[10px] text-white mb-2 shadow-lg">
                          {IconComponent && <IconComponent className=" w-8 h-8" />}
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </CardBody>
                    </Card>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <Button
                href="/enrollment"
                variant="primary"
                size="lg"
                className="px-8 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Start Your Certification Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Certificate Types Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Types of Certificates We Offer
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose from various certification programs designed to meet your career goals and learning pace.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['All', 'Internship', 'Short-Term', 'Long-Term', 'Professional'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-md border shadow-md ${
                    selectedType === type
                      ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white border-blue-700 shadow-xl scale-105'
                      : 'bg-white/60 text-gray-800 border-gray-300 hover:scale-105 hover:bg-white/80'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Certificate Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredTypes.map((type) => {
                const IconComponent = type.icon;
                return (
                  <Card
                    key={type.id}
                    className={`h-full border-2 ${type.borderColor} hover:shadow-2xl transition-all duration-300 overflow-hidden`}
                  >
                    <CardHeader className={`bg-gradient-to-r ${type.color} text-white p-6`}>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-1">{type.name}</h3>
                          <p className="text-white/90 text-sm">{type.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardBody className={`${type.bgColor} p-6`}>
                      <div className="space-y-6">
                        {/* Duration */}
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-gray-600" />
                          <div>
                            <p className="font-semibold text-gray-900">Duration</p>
                            <p className="text-gray-600">{type.duration}</p>
                          </div>
                        </div>

                        {/* Requirements */}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                            Requirements
                          </h4>
                          <ul className="space-y-2">
                            {type.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-700">
                                <span className="text-blue-600 mt-1">•</span>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-yellow-600" />
                            Benefits
                          </h4>
                          <ul className="space-y-2">
                            {type.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-700">
                                <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardBody>
                    <CardFooter className={`${type.bgColor} p-6 pt-0`}>
                      <Button
                        href="/enrollment"
                        variant="primary"
                        className="w-full justify-center py-3 font-bold rounded-xl"
                      >
                        Enroll Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Get Certified Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Why Get Certified?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Certifications validate your skills and open doors to better career opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: 'Career Advancement',
                  description: 'Boost your career prospects with industry-recognized credentials.',
                  color: 'from-blue-500 to-blue-700',
                },
                {
                  icon: DollarSign,
                  title: 'Higher Earnings',
                  description: 'Certified professionals earn significantly more than non-certified peers.',
                  color: 'from-green-500 to-green-700',
                },
                {
                  icon: Shield,
                  title: 'Credibility',
                  description: 'Build trust and credibility with employers and clients.',
                  color: 'from-purple-500 to-purple-700',
                },
                {
                  icon: Users,
                  title: 'Networking',
                  description: 'Join a community of certified professionals and expand your network.',
                  color: 'from-orange-500 to-orange-700',
                },
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <Card key={idx} className="text-center border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                    <CardBody className="p-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${item.color} text-white mb-4 shadow-lg`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardBody>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-[1600px] mx-auto px-6 text-center">
            <Award className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Ready to Get Certified?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Start your journey towards professional certification today. Enroll in any of our programs and earn credentials that matter.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                href="/enrollment"
                variant="secondary"
                size="lg"
                className="px-8 py-4 text-lg font-bold rounded-xl bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/courses"
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-bold rounded-xl border-2 border-white text-white hover:bg-white/10"
              >
                Browse Courses
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

