import Footer from './components/Footer';
import Hero from './components/Hero';
import Strengths from './components/Strengths';
import ServicesDisplay from './components/ServicesSection';
import Button from './components/Button';
import FlipCard from './components/FlipCard';
import PartnerMarquee from './components/PartnerMarquee';
import { TrendingUp, BookOpen, Award, Users, Target, Sparkles, ArrowRight, CheckCircle2, Star, Quote } from 'lucide-react';
import HoverCards from './components/whychoice';
import Script from 'next/script';

const siteUrl = 'https://vaweinstitute.com';
const homepageOgImage = `${siteUrl}/assets/codingimage.jpg`;
const homepageDescription =
  "Discover VAWE Institute, Vijayawada's best software training institute for full-stack, AI, data science, cloud, and digital marketing programs with dedicated placement mentoring.";
const homepageKeywords = [
  'Vijayawada software training institute',
  'best IT institute in Vijayawada',
  'VAWE Institute',
  'Wave Institute',
  'software courses Vijayawada',
  'data science training Vijayawada',
  'digital marketing Vijayawada',
  'AI training Vijayawada',
  'full stack developer course Vijayawada',
  'software training with placement support',
];

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness'],
  name: 'VAWE Institute',
  alternateName: 'Wave Institute',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: homepageOgImage,
  description: homepageDescription,
  foundingDate: '2015',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vijayawada',
    addressRegion: 'Andhra Pradesh',
    addressCountry: 'IN',
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Vijayawada Metropolitan Region',
  },
  sameAs: [siteUrl],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '2500',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'Admissions',
      url: `${siteUrl}/contact`,
    },
  ],
};

const faqContent = [
  {
    question: 'What makes VAWE Institute the best software training institute in Vijayawada?',
    answer:
      'We deliver mentor-led training, government-recognized certifications, and real internships that align with Vijayawada hiring needs, making us the top choice for job-ready software careers.',
  },
  {
    question: 'Which software courses are popular at VAWE Institute?',
    answer:
      'Learners choose our full-stack development, data science, AI & ML, cloud computing, and digital marketing programs to master end-to-end IT skills within Vijayawada.',
  },
  {
    question: 'Do you offer placement or internship assistance in Vijayawada?',
    answer:
      'Yes. We provide interview preparation, company connects, mock drives, and internship opportunities with partners across Vijayawada, Hyderabad, and Bangalore.',
  },
  {
    question: 'Can working professionals or college students join flexible batches?',
    answer:
      'Absolutely. We run weekday, weekend, bootcamp, and fast-track batches so students, graduates, and professionals can learn without leaving Vijayawada.',
  },
  {
    question: 'How do I enroll at VAWE Institute?',
    answer:
      'You can apply online, visit our Vijayawada campus, or speak with our counselors via the contact page to pick the right course and schedule.',
  },
];

export const metadata = {
  title: "Best Software Training Institute in Vijayawada | VAWE Institute",
  description: homepageDescription,
  keywords: homepageKeywords,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Best Software Training Institute in Vijayawada | VAWE Institute",
    description: homepageDescription,
    url: siteUrl,
    siteName: 'VAWE Institute',
    images: [
      {
        url: homepageOgImage,
        width: 1200,
        height: 630,
        alt: 'VAWE Institute - Best Software Training Institute in Vijayawada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Best Software Training Institute in Vijayawada | VAWE Institute",
    description: homepageDescription,
    images: [homepageOgImage],
  },
};

export default function Home() {

  const featuredCourses = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Master modern web development with HTML, CSS, JavaScript, React, and Node.js',
      duration: '12 weeks',
      level: 'Beginner to Advanced',
      color: 'blue',
      iconName: 'Code',
      image: '/webDevelop.png',
      enrolled: '1,200+',
      rating: '4.9',
      features: [
        'HTML5 & CSS3 Fundamentals',
        'JavaScript ES6+ & DOM Manipulation',
        'React.js & Component Architecture',
        'Node.js & Express Backend',
        'Database Design & MongoDB',
        'RESTful APIs & Authentication',
        'Deployment & DevOps Basics',
        'Portfolio Project Development'
      ]
    },
    {
      id: 2,
      title: 'Data Science & Analytics',
      description: 'Learn data analysis, visualization, and machine learning with Python',
      duration: '10 weeks',
      level: 'Intermediate',
      color: 'pink',
      iconName: 'BarChart3',
      image: '/Datascience.png',
      enrolled: '850+',
      rating: '4.8',
      features: [
        'Python Programming for Data Science',
        'Pandas & NumPy Data Manipulation',
        'Data Visualization with Matplotlib & Seaborn',
        'Statistical Analysis & Hypothesis Testing',
        'Machine Learning with Scikit-learn',
        'Deep Learning Fundamentals',
        'Data Cleaning & Preprocessing',
        'Real-world Data Science Projects'
      ]
    },
    {
      id: 3,
      title: 'Digital Marketing',
      description: 'Complete digital marketing strategy including SEO, social media, and content marketing',
      duration: '8 weeks',
      level: 'Beginner',
      color: 'yellow',
      iconName: 'Megaphone',
      image: '/digitalmarketing.png',
      enrolled: '1,500+',
      rating: '4.7',
      features: [
        'SEO & Search Engine Optimization',
        'Social Media Marketing Strategy',
        'Content Marketing & Blogging',
        'Google Ads & PPC Campaigns',
        'Email Marketing & Automation',
        'Analytics & Performance Tracking',
        'Brand Building & Positioning',
        'Marketing Campaign Management'
      ]
    },
    {
      id: 4,
      title: 'Business Management',
      description: 'Essential business skills including leadership, finance, and strategic planning',
      duration: '14 weeks',
      level: 'All Levels',
      color: 'green',
      iconName: 'Briefcase',
      image: '/digitalB.png',
      enrolled: '900+',
      rating: '4.9',
      features: [
        'Leadership & Team Management',
        'Financial Planning & Budgeting',
        'Strategic Planning & Analysis',
        'Project Management Methodologies',
        'Communication & Negotiation',
        'Operations & Supply Chain',
        'Marketing & Sales Strategy',
        'Entrepreneurship & Innovation'
      ]
    }
  ];

  const stats = [
    { number: '2500+', label: 'Students Enrolled', Icon: Users },
    { number: '20+', label: 'Expert Instructors', Icon: Award },
    { number: '50+', label: 'Courses Available', Icon: BookOpen },
    { number: '95%', label: 'Success Rate', Icon: TrendingUp }
  ];

  const benefits = [
    {
      Icon: BookOpen,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of real-world experience',
      color: 'from-[#6366F1] to-[#8B5CF6]',
      colorLight: 'from-[#818CF8] to-[#A78BFA]',
      colorDark: '#4F46E5',
      theme: 'indigo-purple'
    },
    {
      Icon: CheckCircle2,
      title: 'Flexible Learning',
      description: 'Study at your own pace with 24/7 access to course materials',
      color: 'from-[#EC4899] to-[#F43F5E]',
      colorLight: 'from-[#F472B6] to-[#FB7185]',
      colorDark: '#DB2777',
      theme: 'pink-rose'
    },
    {
      Icon: Award,
      title: 'Certification',
      description: 'Earn recognized certificates to boost your career prospects',
      color: 'from-[#10B981] to-[#059669]',
      colorLight: 'from-[#34D399] to-[#10B981]',
      colorDark: '#047857',
      theme: 'emerald-green'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      course: "Full Stack Development",
      rating: 5,
      text: "VAWE Institute transformed my career completely. The instructors are amazing and the curriculum is industry-relevant. I got my dream job within 3 months!",
      avatar: "PS"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      course: "Data Science",
      rating: 5,
      text: "The best investment I made in my education. The hands-on approach and real-world projects helped me understand concepts deeply.",
      avatar: "RK"
    },
    {
      id: 3,
      name: "Anita Patel",
      course: "Digital Marketing",
      rating: 5,
      text: "Excellent faculty and practical learning approach. The course structure is well-designed and the support system is outstanding.",
      avatar: "AP"
    },
    {
      id: 4,
      name: "Vikram Singh",
      course: "Cloud Computing",
      rating: 5,
      text: "VAWE Institute provided me with all the skills needed for cloud architecture. The mentors are industry experts and very supportive.",
      avatar: "VS"
    },
    {
      id: 5,
      name: "Sneha Reddy",
      course: "UI/UX Design",
      rating: 5,
      text: "Creative learning environment with modern tools. The portfolio projects helped me build a strong foundation in design principles.",
      avatar: "SR"
    },
    {
      id: 6,
      name: "Arjun Mehta",
      course: "Cybersecurity",
      rating: 5,
      text: "Comprehensive curriculum covering all aspects of cybersecurity. The lab sessions and real-world scenarios were incredibly valuable.",
      avatar: "AM"
    }
  ];

  const vijayawadaHighlights = [
    {
      title: 'Placement-first mentoring',
      description:
        'Get interview coaching, mock drives, and referrals that match Vijayawada and Amaravati job requirements.',
    },
    {
      title: 'Industry labs in the city',
      description:
        'Hands-on labs for full-stack, AI, cloud, and digital marketing help you practise without leaving Vijayawada.',
    },
    {
      title: 'Corporate & university alliances',
      description:
        'Strategic partnerships with tech companies and colleges across Andhra Pradesh keep our curriculum industry-ready.',
    },
  ];

  const courseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Popular VAWE Institute Courses',
    itemListElement: featuredCourses.map((course, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Course',
        name: `${course.title} Training in Vijayawada`,
        description: course.description,
        provider: {
          '@type': 'EducationalOrganization',
          name: 'VAWE Institute',
          url: siteUrl,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Vijayawada',
            addressRegion: 'Andhra Pradesh',
            addressCountry: 'IN',
          },
        },
      },
    })),
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqContent.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Script
        id="homepage-organization-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Script
        id="homepage-course-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <Script
        id="homepage-faq-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="min-h-screen">
        <div className="lg:mt-[-40px]">
        <Hero />  
        </div>
        <div className="lg:mt-[30px]">
        <PartnerMarquee />
        </div>
        <div className="lg:mt-[50px]">
        <ServicesDisplay />
        </div>
        {/* Featured Courses Section (Top Courses) */}
        <section className=" py-8 sm:py-12 md:py-20 lg:py-24 lg:mt-[-150px] xl:py-32 2xl:py-40" style={{ backgroundColor: 'var(--background)' }}>
          <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 animate-slide-up">
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold text-[var(--text)] mb-3 sm:mb-4 md:mb-6 leading-tight">
              Popular Courses
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl text-gray-600 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-2">
                Explore our most popular courses designed to help you succeed in your career
              </p>
            </div>

            <div className="flex gap-3 overflow-x-auto overflow-y-hidden sm:overflow-hidden snap-x snap-mandatory -mx-2 px-2 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 md:gap-8 lg:gap-10">
              {featuredCourses.map((course, index) => (
                <div
                  key={course.id}
                  className="animate-slide-up relative shrink-0 w-[85%] sm:w-auto sm:shrink md:py-4 snap-center transition-transform duration-300 ease-out hover:-translate-y-3 hover:z-10 will-change-transform transform-gpu"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <FlipCard course={course} variant={course.color} />
                </div>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-12 md:mt-16 lg:mt-12">
              <Button href="/courses" variant="primary" size="lg" className="w-full sm:w-auto shadow-xl hover:shadow-2xl text-sm sm:text-base md:text-lg lg:text-xl py-3 sm:py-4 md:py-5 px-6 sm:px-8 md:px-10">
                <span className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  <span>View All Courses</span>
                </span>
              </Button>
            </div>
          </div>
        </section>


        {/* why choose us Section */}

        <section className="py-8 mt-[150px] sm:py-12 md:py-20 lg:py-24 xl:py-32 2xl:py-40" style={{ backgroundColor: 'var(--background)' }}>
                <HoverCards />
              </section>
<hr/>
  
        <Strengths />

        <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: 'var(--background)' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 uppercase tracking-wide mb-3">
                  Vijayawada&apos;s trusted software finishing school since 2015
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text)] mb-6 leading-tight">
                  Why VAWE Institute leads Vijayawada&apos;s software training space
                </h2>
                <p className="text-base sm:text-lg text-gray-600">
                  Our Vijayawada campus powers Andhra Pradesh with career-focused programs in full-stack development,
                  cloud, AI, data science, and digital marketing. Every cohort is mentored by industry experts who understand
                  Vijayawada hiring challenges and align projects to regional opportunities.
                </p>
                <div className="mt-8 space-y-6">
                  {vijayawadaHighlights.map((item, index) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div
                        className="mt-1 w-3 h-3 rounded-full"
                        style={{ backgroundColor: index === 0 ? '#0A1A76' : index === 1 ? '#F97316' : '#0EA5E9' }}
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-[var(--text)]">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-8 border border-gray-100">
                <div className="inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-full bg-blue-50 text-blue-600">
                  Vijayawada Rankings
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mt-4">
                  Best Software Training Institute in Vijayawada
                </h3>
                <p className="text-gray-600 mt-3">
                  2500+ aspirants chose VAWE Institute for project-based learning, government-aligned certifications, and
                  job placement assistance across Vijayawada, Hyderabad, and Bangalore.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-gray-100 p-4 text-center shadow-sm">
                      <span className="text-3xl font-bold text-[#0A1A76]">{stat.number}</span>
                      <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-8  sm:py-12 md:py-20 lg:mb-[-100px] lg:py-24  xl:py-32 2xl:py-40 relative overflow-hidden" style={{ backgroundColor: 'var(--background-alt)' }}>
          {/* Background Elements */}
          <div className="absolute inset-0" style={{ backgroundColor: 'transparent' }}></div>
          
          <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
            <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl lg:mt-[-85px] md:text-4xl font-bold text-black mb-3 sm:mb-4 md:mb-6 leading-tight">
                What Our Students Say
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl text-gray-600 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-2">
                Hear from our successful graduates who transformed their careers with VAWE Institute
              </p>
            </div>

            {/* Hanging Rope Container */}
            <div className="relative">
              {/* Rope */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 sm:w-1 h-full bg-gradient-to-b from-[#8B4513] to-[#A0522D] rounded-full shadow-lg"></div>
              
              {/* Wall Hooks */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 h-3 sm:h-4 bg-[#696969] rounded-t-full shadow-lg"></div>

              {/* Testimonial Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 pt-6 sm:pt-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`relative ${
                      index % 2 === 0 ? 'animate-float-left' : 'animate-float-right'
                    }`}
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      animationDuration: '4s'
                    }}
                  >
                    {/* Clothes Pin */}
                    <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 w-4 sm:w-6 h-6 sm:h-8 bg-gradient-to-b from-[#8B4513] to-[#A0522D] rounded-t-full shadow-md z-20">
                      <div className="absolute top-0.5 sm:top-1 left-1/2 transform -translate-x-1/2 w-3 sm:w-4 h-4 sm:h-6 bg-gradient-to-b from-[#8B4513] to-[#A0522D] rounded-t-full"></div>
                    </div>

                    {/* Testimonial Card */}
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-5 md:p-6 mt-3 sm:mt-4 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                      {/* Quote Icon */}
                      <div className="absolute -top-1.5 sm:-top-2 -left-1.5 sm:-left-2 w-6 sm:w-8 h-6 sm:h-8 bg-[#C4B4E3] rounded-full flex items-center justify-center shadow-lg">
                        <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mb-3 sm:mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm md:text-base">
                        &quot;{testimonial.text}&quot;
                      </p>

                      {/* Student Info */}
                      <div className="flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#C4B4E3] to-[#B3E5FC] rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm mr-2 sm:mr-3">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <h4 className="font-bold text-[var(--text)] text-xs sm:text-sm md:text-base">{testimonial.name}</h4>
                          <p className="text-gray-500 text-xs sm:text-sm">{testimonial.course}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: 'var(--background)' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#0A1A76]">
                FAQs for Vijayawada learners
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text)] mt-2">
                Everything about VAWE Institute&apos;s software training
              </h2>
              <p className="text-gray-600 mt-4">
                Clear answers to the most common questions we hear from students, graduates, and working professionals in
                and around Vijayawada who want to upskill with job-ready software courses.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqContent.map((faq) => (
                <details
                  key={faq.question}
                  className="group border border-gray-200 rounded-2xl bg-white/90 shadow-sm p-5 open:shadow-md transition-shadow"
                >
                  <summary className="flex items-center justify-between cursor-pointer text-left">
                    <span className="text-lg font-semibold text-[var(--text)]">{faq.question}</span>
                    <span className="ml-4 text-2xl font-bold text-[#0A1A76] transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-600 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 md:py-10 lg:py-8 relative overflow-hidden bg-[#b3deff] text-white">

  {/* subtle background glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-10 right-10 w-32 h-32 bg-white/15 rounded-full blur-3xl"></div>
    <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
  </div>

  <div className="container mx-auto px-6 text-center relative z-10">
    <Sparkles className="w-10 h-10 mx-auto mb-4 text-[#0d46a8] animate-pulse" />

    <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold mb-3 leading-tight text-black">
      Ready to Start Your Learning Journey?
    </h2>

    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl text-black max-w-2xl mx-auto mb-8 leading-relaxed">
      Join thousands of successful students and take the first step towards achieving your goals
    </p>

    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
      <Button
        href="/enrollment"
        variant="secondary"
        size="lg"
        className="w-full sm:w-auto bg-white text-[#2C3E50] hover:bg-gray-50 
        shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300
        text-sm md:text-base px-8 py-3 rounded-lg"
      >
        <span className="flex items-center justify-center gap-2">
          Get Started Today
          <ArrowRight className="w-4 h-4" />
        </span>
      </Button>

      <Button
        href="https://www.skillwins.in/"
        variant="outline"
        size="lg"
        className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/70 
        text-black hover:bg-white hover:text-[#7ca9f7]
        shadow-lg text-sm md:text-base px-8 py-3 rounded-lg"
      >
        Login to LMS
      </Button>
    </div>
  </div>
</section>

        {/* <ChatBot /> */}
      </main>
      <Footer />
    </>
  );
}
