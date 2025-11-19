import Footer from '../components/Footer';
import Button from '../components/Button';
import Timeline from '../components/Timeline';
import Card, { CardHeader, CardBody } from '../components/Card';
import TeamSection from '../components/TeamSection';
import Script from 'next/script';
import Image from 'next/image';
import { Target, Globe, TrendingUp, Award, Users, Lightbulb, Heart, Rocket, Calendar, Trophy, Sparkles, ArrowRight, Quote } from 'lucide-react';
import BulkTrainingUploader from '../components/bulktraindata';

export const metadata = {
  title: "About Us | VAWE Institute - Empowering Learners Since 2015",
  description:
    "Learn about VAWE Institute's mission to democratize quality education. Discover our core values, services, achievements, and experienced leadership team dedicated to transforming lives through education.",
  keywords: [
    "VAWE Institute about",
    "education institute Vijayawada",
    "software training institute",
    "IT training center",
    "professional training",
    "educational services",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | VAWE Institute - Empowering Learners Since 2015",
    description:
      "Learn about VAWE Institute's mission to democratize quality education. Discover our core values, services, achievements, and experienced leadership team.",
    type: "website",
    url: "https://vaweinstitute.com/about",
    images: [
      {
        url: "https://vaweinstitute.com/assets/codingimage.jpg",
        width: 1200,
        height: 630,
        alt: "VAWE Institute - About Us - Empowering Learners Since 2015",
      },
    ],
    siteName: "VAWE Institute",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | VAWE Institute",
    description:
      "Learn about VAWE Institute's mission to democratize quality education. Discover our core values, services, and achievements.",
    images: ["https://vaweinstitute.com/assets/codingimage.jpg"],
  },
};

export default function About() {
  const values = [
    {
      Icon: Trophy,
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality education and training experiences',
      color: 'from-[#A8DADC] to-[#8fc9cc]'
    },
    {
      Icon: Heart,
      title: 'Accessibility',
      description: 'Making quality education accessible to everyone, regardless of background or location',
      color: 'from-[#F4A7B9] to-[#f298ad]'
    },
    {
      Icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly evolving our methods and curriculum to stay ahead of industry trends',
      color: 'from-[#FFF3B0] to-[#ffe89a]'
    },
    {
      Icon: Users,
      title: 'Student Success',
      description: 'Your success is our success. We measure our impact by your achievements',
      color: 'from-[#C1E1C1] to-[#a8d1a8]'
    }
  ];

  const achievements = [
    { Icon: Users, number: '2500+', label: 'Happy Students' },
    { Icon: Globe, number: '50+', label: 'Countries Reached' },
    { Icon: Award, number: '100+', label: 'Courses Offered' },
    { Icon: Trophy, number: '15+', label: 'Industry Awards' }
  ];

  const services = [
    {
      Icon: TrendingUp,
      title: 'Trainings',
      description:
        'Trainings are designed and delivered with the aim of developing skilled professionals and increasing employment by keeping learners abreast of technology and necessary skills.'
    },
    {
      Icon: Award,
      title: 'Certifications',
      description:
        'We offer professional certifications that cover major domains through Pearson VUE. These certifications are recognized worldwide as a standard for IT quality professionals.'
    },
    {
      Icon: Lightbulb,
      title: 'Projects',
      description:
        'We encourage and support students who come up with innovative ideas, helping them analyze, design, code, test, and implement in different technologies.'
    },
    {
      Icon: Calendar,
      title: 'Workshops',
      description:
        'We provide workshops on various technologies led by industry experts, with a strong focus on hands-on experience.'
    },
    {
      Icon: Rocket,
      title: 'CRT',
      description:
        'Our Campus Recruitment Training (CRT) is value-added through associations like AMCAT and Pearson, enabling our students to kick-start their careers.'
    },
    {
      Icon: Target,
      title: 'Placements',
      description:
        'Placement assistance is a major edge of our services; we provide employability testing and skill certification platforms to increase job opportunities for our students.'
    },
    {
      Icon: Globe,
      title: 'Internships',
      description:
        'We also provide internships that give students real-world exposure and practical experience on industry projects.'
    }
  ];

  // Dolby-like layered falling spheres (more depth/variety)
  const fallingBalls = Array.from({ length: 28 }).map((_, index) => {
    const leftPercent = (index * 7.3) % 100; // spread across width
    const tier = index % 3; // 0 far, 1 mid, 2 near
    const sizePx = tier === 2 ? 16 + (index % 3) * 4 : tier === 1 ? 10 + (index % 3) * 3 : 6 + (index % 3) * 2;
    const delaySec = (index % 8) * 0.35; // staggered delays
    const durationSec = 9 + (tier * 1.7) + ((index % 5) * 0.6); // varied durations by depth
    const driftPx = (index % 2 === 0 ? -1 : 1) * (12 + (index % 4) * 7); // base horizontal drift
    const swayDurationSec = 5 + (tier * 1.5) + (index % 3); // slower for larger balls
    const opacity = tier === 2 ? 0.85 : tier === 1 ? 0.6 : 0.45;
    const blurPx = tier === 2 ? 0 : tier === 1 ? 0.5 : 1; // slight atmospheric blur
    return { leftPercent, sizePx, delaySec, durationSec, driftPx, swayDurationSec, opacity, blurPx };
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "VAWE Institute",
    description:
      "VAWE Institute is an educational organization dedicated to democratizing quality education and making professional training accessible to everyone since 2015.",
    url: "https://vaweinstitute.com",
    logo: "https://vaweinstitute.com/favicon.ico",
    image: "https://vaweinstitute.com/assets/codingimage.jpg",
    foundingDate: "2015",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Andhra Pradesh",
      addressLocality: "Vijayawada",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      url: "https://vaweinstitute.com/contact",
    },
    sameAs: [
      "https://vaweinstitute.com",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "2500",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "50+",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    offers: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Course",
        name: "Software Training Courses",
        description: "Professional software and IT training courses",
      },
    },
  };

  return (
    <>
      <Script
        id="jsonld-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">
        {/* Page Header */}
        <section
          className="py-20 md:py-28 relative overflow-hidden"
          style={{ backgroundColor: 'var(--navbar-hero)' }}
        >
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-20 w-32 h-32 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(0,0,0,0.06)' }}></div>
            <div className="absolute bottom-10 left-20 w-40 h-40 rounded-full blur-3xl animate-pulse delay-75" style={{ backgroundColor: 'rgba(0,0,0,0.06)' }}></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full blur-2xl" style={{ backgroundColor: 'rgba(0,0,0,0.04)' }}></div>
            {/* Falling Dolby-style spheres (layered, glowing) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
              {fallingBalls.map((ball, i) => (
                <span
                  key={i}
                  className="absolute top-[-10%] animate-sway"
                  style={{
                    left: `${ball.leftPercent}%`,
                    animationDelay: `${ball.delaySec}s`,
                    ['--sway-duration']: `${ball.swayDurationSec}s`,
                  }}
                >
                  <span
                    className="block rounded-full dolby-ball animate-fall gpu-accelerated"
                    style={{
                      width: `${ball.sizePx}px`,
                      height: `${ball.sizePx}px`,
                      opacity: ball.opacity,
                      filter: `blur(${ball.blurPx}px) drop-shadow(0 2px 6px rgba(0,0,0,0.2))`,
                      animationDelay: `${ball.delaySec}s`,
                      ['--duration']: `${ball.durationSec}s`,
                      ['--drift']: `${ball.driftPx}px`,
                    }}
                  />
                </span>
              ))}
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-slide-up">
              <div className="inline-flex items-center space-x-2 bg-[#dc9454] backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-white/90"  />
                <span className="text-sm font-medium text-white/90">Since 2015</span>
              </div>
              <h1 className="text-5xl  md:text-6xl font-bold mb-6 text-black/30">
                About VAWE Institute
              </h1>
              <h1 className=" text-5xl md:mt-[-79px] mt-[-119px] mr-[-12px] md:text-6xl font-bold mb-6 text-white/90">
                About VAWE Institute
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed text-white/90">
                Empowering learners worldwide with quality education since 2015
              </p>
            </div>
          </div>
        </section>
        {/* <BulkTrainingUploader /> */}

        {/* Mission Section */}
        <section
          className="py-24"
          style={{
            backgroundColor: 'var(--background)',
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.94), rgba(255,255,255,0.94)), url(/favicon.ico)',
            backgroundRepeat: 'repeat',
            backgroundSize: '64px 64px',
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16 animate-slide-up">
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}>
                  <Target className="w-4 h-4" style={{ color: 'var(--text)' }} />
                  <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>Our Mission</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text)' }}>
                  Transforming Lives Through Education
                </h2>
                <p className="text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: 'color-mix(in oklab, var(--text) 70%, transparent)' }}>
                  At VAWE Institute, our mission is to democratize quality education and make 
                  professional training accessible to everyone. We believe that learning should 
                  be engaging, practical, and relevant to real-world challenges.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.Icon;
                  return (
                    <div key={index} className="text-center group animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#A8DADC] to-[#F4A7B9] flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#A8DADC] to-[#F4A7B9] bg-clip-text text-transparent mb-2">
                        {achievement.number}
                      </div>
                      <div className="font-medium text-lg" style={{ color: 'color-mix(in oklab, var(--text) 70%, transparent)' }}>{achievement.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section
          className="py-24"
          style={{
            backgroundColor: 'var(--background)',
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.94), rgba(255,255,255,0.94)), url(/favicon.ico)',
            backgroundRepeat: 'repeat',
            backgroundSize: '64px 64px',
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                Our Core Values
              </h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: 'color-mix(in oklab, var(--text) 70%, transparent)' }}>
                The principles that guide everything we do at VAWE Institute
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.Icon;
                return (
                  <Card key={index} variant={value.color.includes('A8DADC') ? 'blue' : value.color.includes('F4A7B9') ? 'pink' : value.color.includes('FFF3B0') ? 'yellow' : 'green'} hoverable className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardHeader>
                      <div className={`w-10 h-10 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-sm md:text-xl font-bold mb-2" style={{ color: 'var(--text)' }}>
                        {value.title}
                      </h3>
                    </CardHeader>
                    <CardBody>
                      <p className="leading-relaxed" style={{ color: 'color-mix(in oklab, var(--text) 70%, transparent)' }}>{value.description}</p>
                    </CardBody>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          className="py-24"
          style={{
            backgroundColor: 'var(--background)',
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.94), rgba(255,255,255,0.94)), url(/favicon.ico)',
            backgroundRepeat: 'repeat',
            backgroundSize: '64px 64px',
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                Our Services
              </h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: 'color-mix(in oklab, var(--text) 70%, transparent)' }}>
                What we offer to support your learning and career journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.Icon;
                const variant = index % 4 === 0 ? 'blue' : index % 4 === 1 ? 'pink' : index % 4 === 2 ? 'yellow' : 'green';
                return (
                  <Card
                    key={index}
                    variant={variant}
                    hoverable
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/60 to-white/30 flex items-center justify-center mb-4 shadow-lg">
                        <Icon className="w-8 h-8" style={{ color: 'var(--text)' }} />
                      </div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text)' }}>
                        {service.title}
                      </h3>
                    </CardHeader>
                    <CardBody>
                      <p className="leading-relaxed" style={{ color: 'color-mix(in oklab, var(--text) 70%, transparent)' }}>
                        {service.description}
                      </p>
                    </CardBody>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section
          className="py-24"
          style={{
            backgroundColor: 'var(--background)',
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.96), rgba(255,255,255,0.96)), url(/favicon.ico)',
            backgroundRepeat: 'repeat',
            backgroundSize: '64px 64px',
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute -top-6 -left-6 w-20 h-20 rounded-3xl bg-gradient-to-br from-[#A8DADC] to-[#F4A7B9] blur-3xl opacity-70"></div>
                <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-white/40">
                  <Image
                    src="/assets/BB.png"
                    alt="Bala Balaji N - Founder & Director, VAWE Institute"
                    width={720}
                    height={840}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/70 shadow-sm border border-gray-100">
                  <Quote className="w-4 h-4 text-[#dc9454]" />
                  <span className="text-sm font-semibold tracking-wide text-gray-700">Founder’s Note</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--text)' }}>
                  Bala Balaji N
                </h2>
                <p className="text-lg font-semibold text-blue-700">Founder & Director, VAWE Institute</p>
                <p className="text-lg leading-relaxed" style={{ color: 'color-mix(in oklab, var(--text) 75%, transparent)' }}>
                  “Education is a promise we renew every day — a promise to uplift minds, create opportunities, 
                  and build a future where talent meets purpose. VAWE began with a single classroom and a bold dream: 
                  to make world-class learning reachable to every learner, everywhere.”
                </p>
                <p className="text-lg leading-relaxed" style={{ color: 'color-mix(in oklab, var(--text) 75%, transparent)' }}>
                  Bala Balaji has spent the last decade architecting transformative learning journeys, collaborating 
                  with global partners, and mentoring thousands of students into confident professionals. His vision 
                  continues to shape VAWE’s culture of warmth, excellence, and relentless innovation.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-2xl bg-white shadow-lg border border-gray-100">
                    <p className="text-sm text-gray-500 mb-1">Guiding Principle</p>
                    <p className="font-semibold text-gray-900">“Every learner deserves a launchpad.”</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white shadow-lg border border-gray-100">
                    <p className="text-sm text-gray-500 mb-1">Focus Areas</p>
                    <p className="font-semibold text-gray-900">Future skills · Mentorship · Industry bridges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section
          className="py-24"
          style={{
            backgroundColor: 'var(--background)',
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.94), rgba(255,255,255,0.94)), url(/favicon.ico)',
            backgroundRepeat: 'repeat',
            backgroundSize: '64px 64px',
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}>
                <Users className="w-4 h-4" style={{ color: 'var(--text)' }} />
                <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>Our Team</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                Meet Our Leadership Team
              </h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: 'color-mix(in oklab, var(--text) 70%, transparent)' }}>
                Experienced professionals dedicated to your success
              </p>
            </div>
            <TeamSection />
          </div>
        </section>

        {/* Timeline Section */}
        <section
          className="py-0"
          style={{
            backgroundColor: 'var(--background)',
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.94), rgba(255,255,255,0.94)), url(/favicon.ico)',
            backgroundRepeat: 'repeat',
            backgroundSize: '64px 64px',
          }}
        >
          <Timeline scrollHeight={3000} />
        </section>

        {/* CTA Section */}
        <section
          className="py-24 relative overflow-hidden"
          style={{
            backgroundColor: 'var(--navbar-hero)',
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.94), rgba(255,255,255,0.94)), url(/favicon.ico)',
            backgroundRepeat: 'repeat',
            backgroundSize: '64px 64px',
          }}
        >
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-32 h-32 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(0,0,0,0.06)' }}></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(0,0,0,0.06)' }}></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <Users className="w-12 h-12 mx-auto mb-6 animate-pulse" style={{ color: 'var(--text)' }} />
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text)' }}>
              Join Our Community of Learners
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed" style={{ color: 'color-mix(in oklab, var(--text) 80%, transparent)' }}>
              Be part of a growing community that&apos;s transforming the future through education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/enrollment" variant="secondary" size="lg" className="bg-white text-[#2C3E50] hover:bg-gray-50">
                <span className="flex items-center space-x-2">
                  <span>Enroll Today</span>
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-2" style={{ borderColor: 'var(--text)', color: 'var(--text)' }}>
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


