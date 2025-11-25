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
      color: '#00C4CC',
      variant: 'blue'
    },
    {
      Icon: Heart,
      title: 'Accessibility',
      description: 'Making quality education accessible to everyone, regardless of background or location',
      color: '#FF5C8A',
      variant: 'pink'
    },
    {
      Icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly evolving our methods and curriculum to stay ahead of industry trends',
      color: '#FFD447',
      variant: 'yellow'
    },
    {
      Icon: Users,
      title: 'Student Success',
      description: 'Your success is our success. We measure our impact by your achievements',
      color: '#00D97E',
      variant: 'green'
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
        'Trainings are designed and delivered with the aim of developing skilled professionals and increasing employment by keeping learners abreast of technology and necessary skills.',
      color: '#00C4CC'
    },
    {
      Icon: Award,
      title: 'Certifications',
      description:
        'We offer professional certifications that cover major domains through Pearson VUE. These certifications are recognized worldwide as a standard for IT quality professionals.',
      color: '#FF5C8A'
    },
    {
      Icon: Lightbulb,
      title: 'Projects',
      description:
        'We encourage and support students who come up with innovative ideas, helping them analyze, design, code, test, and implement in different technologies.',
      color: '#FFD447'
    },
    {
      Icon: Calendar,
      title: 'Workshops',
      description:
        'We provide workshops on various technologies led by industry experts, with a strong focus on hands-on experience.',
      color: '#00D97E'
    },
    {
      Icon: Rocket,
      title: 'CRT',
      description:
        'Our Campus Recruitment Training (CRT) is value-added through associations like AMCAT and Pearson, enabling our students to kick-start their careers.',
      color: '#7C4DFF'
    },
    {
      Icon: Target,
      title: 'Placements',
      description:
        'Placement assistance is a major edge of our services; we provide employability testing and skill certification platforms to increase job opportunities for our students.',
      color: '#FF8C42'
    },
    {
      Icon: Globe,
      title: 'Internships',
      description:
        'We also provide internships that give students real-world exposure and practical experience on industry projects.',
      color: '#2D98DA'
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
          className="py-20 md:py-28 mt-[-15px] lg:mt-[-90px] relative overflow-hidden"
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
                  <Card
                    key={index}
                    variant={value.variant}
                    hoverable
                    accentColor={value.color}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <div
                        className="w-10 h-10 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
                        style={{ backgroundColor: value.color }}
                      >
                        <Icon className="w-8 h-8 " />
                      </div>
                      <h3 className="text-sm md:text-xl font-bold mb-2 text-black">
                        {value.title}
                      </h3>
                    </CardHeader>
                    <CardBody>
                      <p className="leading-relaxed text-black" >{value.description}</p>
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
                    accentColor={service.color}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <CardHeader>
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
                        style={{ backgroundColor: service.color }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-black" >
                        {service.title}
                      </h3>
                    </CardHeader>
                    <CardBody>
                      <p className="leading-relaxed text-black" >
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
        <section className="relative w-full py-20 px-6 overflow-hidden">

{/* Gradient Aura Background */}
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-white"></div>
<div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-blue-300 opacity-20 blur-[120px]"></div>
<div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-purple-300 opacity-20 blur-[120px]"></div>

<div className="max-w-3xl mx-auto">

  {/* Glass Card */}
  <div className="backdrop-blur-md bg-white/40 border border-white/30 shadow-xl rounded-2xl p-10 space-y-8">

    {/* Heading */}
    <h2 className="text-center text-4xl font-bold text-gray-900 tracking-tight">
      Founder&rsquo;s Message
    </h2>

    {/* Quotation */}
    <p className="text-xl text-gray-800 italic text-center font-medium leading-relaxed">
      “Every skill you master becomes a stairway to a future you once dreamed of.
      Grow daily — your potential is limitless.”
    </p>

    {/* Founder Info */}
    <div className="pt-4 text-center space-y-2">
      <h3 className="text-2xl font-semibold text-gray-900">
        Bala Balaji N
      </h3>
      <p className="text-gray-700 text-sm">
        Founder & Chief Mentor
      </p>
    </div>

    {/* Divider Line */}
    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>

    {/* Description */}
    <p className="text-gray-700 text-center leading-relaxed">
      Bala Balaji N created this institute with a mission to make skill development accessible,
      practical, and inspiring. His belief is simple — when students learn with passion
      and consistency, their growth becomes unstoppable.
    </p>
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


