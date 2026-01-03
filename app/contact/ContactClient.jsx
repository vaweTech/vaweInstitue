'use client';

import { useState, useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card, { CardBody } from '../components/Card';
import Script from 'next/script';

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const resetTimeoutRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }
    resetTimeoutRef.current = setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.13 2 5 5.13 5 9c0 7.73 7 13 7 13s7-5.27 7-13c0-3.87-3.13-7-7-7z" />
          <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Visit Us',
      details: 'Vijayawada, Andhra Pradesh, India',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Us',
      details: 'vawe.info@gmail.com',
      link: 'mailto:vawe.info@gmail.com',
      color: 'from-pink-400 to-rose-500'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 16.92V19a2 2 0 01-2.18 2A19.88 19.88 0 013 5.18 2 2 0 015 3h2.09a1 1 0 01.95.68l1.18 3.27a1 1 0 01-.27 1.06L7.91 9.91a16 16 0 006.18 6.18l1.9-1.04a1 1 0 011.06-.27l3.27 1.18a1 1 0 01.68.96z" />
        </svg>
      ),
      title: 'Call Us',
      details: '+91 8885103333',
      link: 'tel:+918885103333',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Office Hours',
      details: 'Mon–Fri: 9:00 AM – 6:00 PM',
      color: 'from-emerald-400 to-green-500'
    }
  ];

  const faqs = [
    { question: 'How do I enroll in a course?', answer: 'Visit our enrollment page, fill the form, and we will contact you within 24 hours.' },
    { question: 'Do you offer certifications?', answer: 'Yes, upon course completion, you receive an industry-recognized certificate.' },
    { question: 'Can I access courses after completion?', answer: 'Yes, all students get lifetime access to materials.' },
    { question: 'Do you offer group discounts?', answer: 'Yes, we provide special corporate & group pricing.' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact VAWE Institute",
    description:
      "Contact VAWE Institute for course inquiries, enrollment, and support. Located in Vijayawada, Andhra Pradesh, India.",
    url: "https://vaweinstitute.com/contact",
    mainEntity: {
      "@type": "Organization",
      name: "VAWE Institute",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Vijayawada",
        addressLocality: "Vijayawada",
        addressRegion: "Andhra Pradesh",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-8885103333",
          contactType: "Customer Service",
          email: "vawe.info@gmail.com",
          availableLanguage: ["English", "Telugu", "Hindi"],
          areaServed: "IN",
        },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    },
  };

  return (
    <>
      <Script
        id="jsonld-contactpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen mt-[-15px] bg-gradient-to-b from-gray-50 via-white to-gray-100">
        {/* Page Header */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-br from-[#4facfe] to-[#00f2fe] text-white text-center px-4">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
          <div className="relative z-10 max-w-3xl mx-auto px-2 sm:px-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Contact Us</h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
              We&apos;d love to hear from you! Reach out with any questions or feedback.
            </p>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-16 sm:py-20 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="bg-white/90 backdrop-blur-lg border border-gray-100 shadow-lg rounded-3xl p-5 sm:p-6 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`mx-auto mb-4 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${info.color} flex items-center justify-center text-white shadow-md`}>
                  {info.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-blue-500 hover:underline break-words">
                    {info.details}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.details}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 sm:py-20 bg-white/70 backdrop-blur-lg px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold tracking-[0.4em] text-blue-500 uppercase mb-3">Get in touch</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">Send a Message</h2>
              <p className="text-gray-600 text-base sm:text-lg mt-3">We&apos;ll get back to you within 24 hours</p>
            </div>

            <Card className="p-6 sm:p-8 lg:p-10 shadow-2xl rounded-3xl bg-white/90 backdrop-blur-md">
              {isSubmitted ? (
                <div className="text-center py-10 sm:py-12">
                  <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-green-500 text-white rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">Thank you!</h3>
                  <p className="text-gray-600">Your message has been sent successfully.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Full Name"
                      className="p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none placeholder:text-gray-400"
                    />
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email Address"
                      className="p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none placeholder:text-gray-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none placeholder:text-gray-400"
                    />
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none text-gray-600"
                    >
                      <option value="">Select Subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="courses">Courses</option>
                      <option value="technical">Technical Support</option>
                      <option value="enrollment">Enrollment</option>
                    </select>
                  </div>

                  <textarea
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write your message..."
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none placeholder:text-gray-400"
                  />

                  <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto sm:self-start">
                    Send Message
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 sm:py-20 bg-gray-50 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-white rounded-xl shadow-md p-5 sm:p-6 group">
                  <summary className="cursor-pointer font-semibold text-gray-800 flex justify-between items-center text-base sm:text-lg">
                    {faq.question}
                    <span className="text-blue-500 group-open:rotate-180 transition-transform">⌄</span>
                  </summary>
                  <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-16 sm:py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-8">
              Visit Us
            </h2>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15301.979810670267!2d80.63064783526396!3d16.501091678777218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35faba842a60c9%3A0x2d5a839dfcea2ef8!2sVAWE%20INSTITUTES!5e0!3m2!1sen!2sin!4v1761214831650!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="w-full h-[280px] sm:h-[360px] lg:h-[420px]"
                title="VAWE Institute Location Map"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

