// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';
// import { Sparkles, Check } from 'lucide-react';

// import Button from './Button';
// import PartnerMarquee from './PartnerMarquee';

// // Create static component outside render to satisfy lint rule
// const MotionImage = motion(Image);

// export default function Hero() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const resumeTimeout = useRef(null);
//   const isMountedRef = useRef(false);

//   // Image array - 6 images transitioning one by one
//   const images = [
//     '/assets/1.jpg',
//     '/assets/2.jpg',
//     '/assets/3.jpg',
//     '/assets/4.jpg',
//     '/assets/5.jpg',
//     '/assets/6.jpg',
//   ];

//   // Content for each slide
//   const slideContent = [
//     {
//       title: 'Trainings',
//       quotation: 'Skills that shape futures.',
//       bullets: [
//         'Industry-aligned training crafted to boost employability.',
//         'Hands-on learning to stay updated with the latest technologies.',
//       ],
//     },
//     {
//       title: 'Certifications',
//       quotation: 'Get certified. Get recognized.',
//       bullets: [
//         'Globally accepted certifications through Pearson VUE.',
//         'Validates your expertise as an industry-ready IT professional.',
//       ],
//     },
//     {
//       title: 'Projects',
//       quotation: 'Turning ideas into innovation.',
//       bullets: [
//         'Mentorship for students to design, develop, and deploy real-time projects.',
//         'Strengthens analytical, coding, and problem-solving abilities.',
//       ],
//     },
//     {
//       title: 'Workshops',
//       quotation: 'Learn it today. Apply it tomorrow.',
//       bullets: [
//         'Expert-led workshops focused on practical, hands-on sessions.',
//         'Covers trending technologies across multiple skill levels.',
//       ],
//     },
//     {
//       title: 'CRT',
//       quotation: 'Prepare. Perform. Get placed.',
//       bullets: [
//         'Comprehensive aptitude, communication, and interview training.',
//         'Supported by Amcat & Pearson to improve hiring readiness.',
//       ],
//     },
//     {
//       title: 'Placements',
//       quotation: 'Your career begins here.',
//       bullets: [
//         'Strong placement support through employability tests & skill platforms.',
//         'Enhances job opportunities with industry-recognized credentials.',
//       ],
//     },
//   ];

//   useEffect(() => {
//     isMountedRef.current = true;
//     return () => {
//       if (resumeTimeout.current) {
//         clearTimeout(resumeTimeout.current);
//       }
//       isMountedRef.current = false;
//     };
//   }, []);

//   // Auto-transition images every 5 seconds
//   useEffect(() => {
//     if (!isMountedRef.current) return;
//     if (isPaused) return;
    
//     const timer = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % images.length);
//     }, 5000);
    
//     return () => clearInterval(timer);
//   }, [isPaused, images.length]);

//   const handleMouseEnter = () => {
//     setIsPaused(true);
//     if (resumeTimeout.current) {
//       clearTimeout(resumeTimeout.current);
//       resumeTimeout.current = null;
//     }
//   };

//   const handleMouseLeave = () => {
//     if (resumeTimeout.current) {
//       clearTimeout(resumeTimeout.current);
//     }
//     resumeTimeout.current = setTimeout(() => {
//       if (!isMountedRef.current) return;
//       setIsPaused(false);
//     }, 200);
//   };

//   return (
//     <section 
//       className="relative mt-12 flex flex-col min-h-[85vh] overflow-hidden bg-white"
//     >
//       <div className="w-full z-10">
//         {/* Split Layout Container - Smooth merge */}
//         <div className="relative w-full min-h-[85vh] flex flex-col lg:flex-row">
//           {/* Left Section - Text Content */}
//           <div className="w-full lg:w-1/2 bg-white flex items-center justify-center px-6 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-0 min-h-[85vh] relative z-10">
//             <div className="max-w-xl w-full relative z-20">
//               <AnimatePresence mode="wait" initial={false}>
//                 <motion.div
//                   key={currentImageIndex}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.8, ease: 'easeInOut' }}
//                 >
//                   {/* Title */}
//                   <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-4">
//                     {slideContent[currentImageIndex].title}
//                   </h2>

//                   {/* Quotation */}
//                   <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-8 italic">
//                     "{slideContent[currentImageIndex].quotation}"
//                   </p>

//                   {/* Bullet Points */}
//                   <ul className="space-y-4 mb-10">
//                     {slideContent[currentImageIndex].bullets.map((bullet, index) => (
//                       <li
//                         key={index}
//                         className="flex items-start gap-3 text-base sm:text-lg text-gray-700"
//                       >
//                         <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-0.5">
//                           <Check className="w-4 h-4 text-white" />
//                         </div>
//                         <span>{bullet}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   {/* CTA Button */}
//                   <Button
//                     href="/enrollment"
//                     variant="primary"
//                     size="lg"
//                     className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
//                   >
//                     Get Started Today
//                   </Button>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* Right Section - Image Carousel */}
//           <div
//             className="w-full lg:w-1/2 relative min-h-[85vh] overflow-hidden z-10"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             {/* Images with smooth fade transition */}
//             <div className="relative w-full h-full min-h-[85vh]">
//               <AnimatePresence mode="wait" initial={false}>
//                 <motion.div
//                   key={currentImageIndex}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ 
//                     duration: 0.8, 
//                     ease: 'easeInOut'
//                   }}
//                   className="absolute inset-0 w-full h-full"
//                 >
//                   <MotionImage
//                     src={images[currentImageIndex]}
//                     alt={`${slideContent[currentImageIndex].title} - ${slideContent[currentImageIndex].quotation}`}
//                     fill
//                     className="object-cover"
//                     style={{ objectPosition: 'center center' }}
//                     sizes="(max-width: 1024px) 100vw, 50vw"
//                     priority={currentImageIndex === 0}
//                     loading={currentImageIndex === 0 ? "eager" : "lazy"}
//                     quality={90}
//                   />
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* Pagination dots at bottom center of entire hero section */}
//           <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
//             {images.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrentImageIndex(i)}
//                 aria-label={`Go to slide ${i + 1}`}
//                 className={`h-2 rounded-full transition-all duration-300 ${
//                   i === currentImageIndex
//                     ? 'w-8 bg-blue-600 scale-110 shadow-lg'
//                     : 'w-2 bg-gray-400 hover:bg-gray-500'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Partner Marquee - Integrated within Hero section */}
//         <div className="w-full relative z-10 px-4 sm:px-6 lg:px-8">
//           <PartnerMarquee />
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Check, ChevronRight } from "lucide-react";
import Button from "./Button";
import PartnerMarquee from "./PartnerMarquee";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showLandingSlide, setShowLandingSlide] = useState(true);
  const resumeTimeout = useRef(null);
  const isMountedRef = useRef(false);
  const landingSlideTimeout = useRef(null);

  // Landing slide image - you can replace this with your image path
  const landingImage = "/assets/refresh.png"; // Replace with your image path

  const images = [
    "/assets/trainings.png",  // Trainings
    "/assets/222.png",  // Certifications
    "/assets/15.png",  // Projects
    "/assets/4.jpg",  // Workshops
    "/assets/5.jpg",  // CRT
    "/assets/6.jpg",  // Placements
  ];

  const slideContent = [
    {
      title: "Trainings",
      quotation: "Learn. Build. Grow.",
      subTagline: "Where every step strengthens your skills.",
      bullets: [
        "Industry-driven programs to boost employability.",
      ],
      style: "futuristic",
      buttons: [
        { text: "Explore Trainings", href: "/courses", primary: true },
        { text: "View Syllabus", href: "/syllabus", primary: false },
      ],
    },
    {
      title: "Certifications",
      quotation: "Empowering You Through Value-Driven Skill Advancement",
      subTagline: "Earn credentials that elevate your career.",
      bullets: [
        "Stand out as a validated professional.",
      ],
      style: "corporate",
      buttons: [
        { text: "Get Certified", href: "/certifications", primary: true },
      ],
    },
    {
      title: "Projects",
      quotation: "Turn Your Skills Into Success",
      subTagline: "Apply, innovate, and achieve real-world impact.",
      bullets: [
        "End-to-end project development.",
      ],
      style: "dark",
      buttons: [
        { text: "Start a Project", href: "/projects", primary: true },
        { text: "View Student Projects", href: "/student-projects", primary: false },
      ],
    },
    {
      title: "Workshops",
      quotation: "Learn Faster. Work Smarter. Grow Stronger.",
      subTagline: "Experience hands-on learning that accelerates mastery.",
      bullets: [
        "Master trending technologies.",
      ],
      style: "colorful",
      buttons: [
        { text: "Join Workshop", href: "/workshops", primary: true },
      ],
    },
    {
      title: "Campus Recruitment Training (CRT)",
      quotation: "Your Journey to Skill Excellence Starts Here",
      subTagline: "Prepare with confidence. Perform with excellence.",
      bullets: [
        "Boost job opportunities.",
      ],
      style: "premium",
      buttons: [
        { text: "Start CRT Training", href: "/crt", primary: true },
      ],
    },
    {
      title: "Placements",
      quotation: "Unlock Opportunities. Shape Your Future.",
      subTagline: "Connecting your talent to the right career path.",
      bullets: [
        "Increases job opportunities with industry partnerships.",
      ],
      style: "premium",
      buttons: [
        { text: "Placement Support", href: "/placements", primary: true },
      ],
    },
  ];

  useEffect(() => {
    isMountedRef.current = true;
    
    // Check if landing slide was already shown in this session
    const hasSeenLanding = sessionStorage.getItem('vawe-landing-seen');
    if (hasSeenLanding === 'true') {
      setShowLandingSlide(false);
    } else {
      // Show landing slide for 5 seconds, then transition to carousel
      landingSlideTimeout.current = setTimeout(() => {
        if (isMountedRef.current) {
          setShowLandingSlide(false);
          sessionStorage.setItem('vawe-landing-seen', 'true');
        }
      }, 5000); // Show for 5 seconds
    }
    
    return () => {
      if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
      if (landingSlideTimeout.current) clearTimeout(landingSlideTimeout.current);
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    // Don't auto-rotate if landing slide is showing
    if (!isMountedRef.current || isPaused || showLandingSlide) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Changed to 3 seconds

    return () => clearInterval(timer);
  }, [isPaused, images.length, showLandingSlide]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
  };

  const handleMouseLeave = () => {
    resumeTimeout.current = setTimeout(() => {
      if (isMountedRef.current) setIsPaused(false);
    }, 200);
  };

  // Function to skip landing slide and go to carousel
  const skipLandingSlide = () => {
    if (landingSlideTimeout.current) {
      clearTimeout(landingSlideTimeout.current);
      landingSlideTimeout.current = null;
    }
    setShowLandingSlide(false);
    sessionStorage.setItem('vawe-landing-seen', 'true');
  };

  // Professional, clean styles for institute learning website
  const getSlideStyles = (style) => {
    // All slides use consistent professional styling with Times New Roman for headings
    return {
      headlineFont: "", // Will use Times New Roman via inline style
      headlineColor: "black",
      headlineWeight: "700",
      subTaglineFont: "", // Will use system font stack
      subTaglineColor: "black",
      bulletColor: "#1F2937", // Dark gray/black
      bulletFont: "", // Will use system font stack
      bulletIconBg: "#2563EB", // Blue for consistency
      primaryBtnBg: "#2563EB", // Blue
      primaryBtnColor: "#fff",
      primaryBtnShadow: "0 2px 4px rgba(37, 99, 235, 0.2)",
      secondaryBtnBorder: "#2563EB", // Blue
      secondaryBtnColor: "#2563EB", // Blue
    };
  };

  const currentStyles = getSlideStyles(slideContent[currentImageIndex]?.style || "corporate");

  const SlideContentBlock = ({ variant }) => {
    const currentSlide = slideContent[currentImageIndex];
    if (!currentSlide) return null;

    const isMobile = variant === "mobile";
    // Fixed sizes - won't change based on content
    const headingClasses = isMobile
      ? `font-bold leading-snug`
      : `font-bold leading-tight`;

    const subTaglineClasses = isMobile
      ? `leading-relaxed`
      : `leading-relaxed`;

    const listSpacing = isMobile ? "space-y-3" : "space-y-4";
    const listTextSize = isMobile ? "text-base leading-relaxed" : "text-base sm:text-lg leading-relaxed";
    const buttonsWrapperClasses = isMobile ? "flex flex-col gap-4 pt-3" : "flex flex-wrap gap-4 pt-2";

    const primaryButtonClasses = isMobile
      ? "!w-full !justify-center px-10 py-5 text-base font-bold !rounded-2xl transition-all duration-500 ease-out relative overflow-hidden group !shadow-2xl hover:!shadow-[0_20px_50px_rgba(37,99,235,0.5)] hover:scale-[1.02] active:scale-[0.98] transform-gpu !border-0"
      : "px-12 py-5 text-base font-bold !rounded-2xl transition-all duration-500 ease-out relative overflow-hidden group !shadow-2xl hover:!shadow-[0_20px_50px_rgba(37,99,235,0.5)] hover:scale-[1.02] active:scale-[0.98] transform-gpu !border-0";

    const secondaryButtonClasses = isMobile
      ? "!w-full !justify-center px-10 py-5 text-base font-bold !rounded-2xl transition-all duration-500 ease-out relative overflow-hidden group !border-2 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transform-gpu backdrop-blur-sm"
      : "px-12 py-5 text-base font-bold !rounded-2xl transition-all duration-500 ease-out relative overflow-hidden group !border-2 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transform-gpu backdrop-blur-sm";

    return (
      <motion.div
        key={`${variant}-${currentImageIndex}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ 
          duration: 0, 
          ease: "easeInOut"
        }}
        className={isMobile ? "space-y-6" : "space-y-8"}
        style={{
          maxHeight: isMobile ? 'auto' : '600px',
          overflow: 'hidden',
        }}
      >
        <div className="inline-block">
          <span 
            className="text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-lg shadow-sm"
            style={{
              backgroundColor: "#EFF6FF",
              color: "#2563EB",
              fontFamily: '"Times New Roman", Times, serif',
            }}
          >
            {currentSlide.title}
          </span>
        </div>

        <h1 
          className={`${headingClasses} line-clamp-3`}
          style={{
            color: currentStyles.headlineColor,
            fontWeight: currentStyles.headlineWeight,
            lineHeight: "1.2",
            fontFamily: '"Times New Roman", Times, serif',
            fontSize: isMobile ? '2rem' : '3.5rem', // Fixed large heading size
            maxHeight: isMobile ? '6rem' : '8.4rem', // Fixed max height (3 lines)
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {currentSlide.quotation}
        </h1>

        {currentSlide.subTagline && (
          <p 
            className={`${subTaglineClasses} line-clamp-2`}
            style={{
              color: currentStyles.subTaglineColor,
              lineHeight: "1.6",
              fontFamily: '"Times New Roman", Times, serif',
              fontSize: isMobile ? '1rem' : '1.25rem', // Fixed small heading size
              maxHeight: isMobile ? '3.2rem' : '4rem', // Fixed max height (2 lines)
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {currentSlide.subTagline}
          </p>
        )}

        <ul className={listSpacing}>
          {currentSlide.bullets.map((b, i) => (
            <li 
              key={i} 
              className="flex items-start gap-4 group/bullet"
              style={{
                color: currentStyles.bulletColor,
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              {/* Elegant square checkmark with modern design */}
              <div className="relative flex-shrink-0 mt-1.5">
                <div 
                  className="w-5 h-5 flex items-center justify-center transition-all duration-300 group-hover/bullet:scale-110 group-hover/bullet:shadow-md"
                  style={{
                    backgroundColor: currentStyles.bulletIconBg,
                    borderRadius: '4px',
                    boxShadow: '0 2px 4px rgba(37, 99, 235, 0.2)',
                  }}
                >
                  <Check 
                    className="w-3 h-3 transition-all duration-300" 
                    strokeWidth={4}
                    style={{
                      color: '#ffffff',
                    }}
                  />
                </div>
                {/* Subtle glow effect on hover */}
                <div 
                  className="absolute inset-0 w-5 h-5 opacity-0 group-hover/bullet:opacity-50 transition-opacity duration-300 rounded"
                  style={{
                    backgroundColor: currentStyles.bulletIconBg,
                    filter: 'blur(4px)',
                    transform: 'scale(1.3)',
                    zIndex: -1,
                  }}
                ></div>
              </div>
              <span className={`${listTextSize} group-hover/bullet:text-blue-700 transition-colors duration-300 leading-relaxed`}>{b}</span>
            </li>
          ))}
        </ul>

        <div className={buttonsWrapperClasses}>
          {currentSlide.buttons?.map((btn, i) =>
            btn.primary ? (
              <motion.div
                key={i}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  href={btn.href}
                  variant="primary"
                  size="lg"
                  className={primaryButtonClasses}
                  style={{
                    background: `linear-gradient(135deg, #2563EB 0%, #1e40af 50%, #1e3a8a 100%)`,
                    color: '#ffffff',
                    fontFamily: '"Times New Roman", Times, serif',
                    border: 'none',
                    position: 'relative',
                    boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
                  }}
                >
                  {/* Animated gradient overlay on hover */}
                  <span 
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{ zIndex: 1 }}
                  ></span>
                  
                  {/* Shimmer effect */}
                  <span 
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-2xl"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                      zIndex: 2,
                    }}
                  ></span>
                  
                  {/* Glow effect */}
                  <span 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"
                    style={{
                      background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)',
                      transform: 'scale(1.2)',
                    }}
                  ></span>
                  
                  {/* Subtle pulse animation */}
                  <span 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 animate-pulse"
                    style={{
                      background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
                      zIndex: 0,
                    }}
                  ></span>
                  
                  {/* Content with icon */}
                  <span className="relative z-10 flex items-center gap-2">
                    {btn.text}
                    <ChevronRight 
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                      strokeWidth={3}
                    />
                  </span>
                  
                  {/* Ripple effect container */}
                  <span className="absolute inset-0 rounded-2xl overflow-hidden" style={{ zIndex: 3 }}>
                    <span className="absolute inset-0 bg-white opacity-0 group-active:opacity-20 group-active:animate-ping rounded-full"></span>
                  </span>
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key={i}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  href={btn.href}
                  variant="outline"
                  size="lg"
                  className={secondaryButtonClasses}
                  style={{
                    border: `2px solid ${currentStyles.secondaryBtnBorder}`,
                    color: currentStyles.secondaryBtnColor,
                    background: "rgba(255, 255, 255, 0.9)",
                    fontFamily: '"Times New Roman", Times, serif',
                    position: 'relative',
                  }}
                >
                  {/* Hover fill effect */}
                  <span 
                    className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{ zIndex: 1 }}
                  ></span>
                  
                  {/* Border glow on hover */}
                  <span 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      boxShadow: '0 0 20px rgba(37, 99, 235, 0.4), inset 0 0 20px rgba(37, 99, 235, 0.1)',
                      zIndex: 0,
                    }}
                  ></span>
                  
                  {/* Shimmer effect */}
                  <span 
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-2xl"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.1), transparent)',
                      zIndex: 2,
                    }}
                  ></span>
                  
                  {/* Content with icon */}
                  <span className="relative z-10 flex items-center gap-2">
                    {btn.text}
                    <ChevronRight 
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                      strokeWidth={3}
                    />
                  </span>
                  
                  {/* Ripple effect container */}
                  <span className="absolute inset-0 rounded-2xl overflow-hidden" style={{ zIndex: 3 }}>
                    <span className="absolute inset-0 bg-blue-600 opacity-0 group-active:opacity-10 group-active:animate-ping rounded-full"></span>
                  </span>
                </Button>
              </motion.div>
            )
          )}
        </div>
      </motion.div>
    );
  };

  // Landing slide content with logo colors
  const landingSlideContent = {
    title: "VAWE Institute",
    quotation: "Empowering You Through Value-Driven Skill Advancement",
    subTagline: "Learn in-demand technical skills through real-world workshops, guided training, and industry-aligned certifications.",
    bullets: [
      "Industry-aligned training crafted to boost employability.",
      "Hands-on learning to stay updated with the latest technologies.",
      "Globally accepted certifications through Pearson VUE.",
    ],
    buttons: [
      { text: "Discover Programs", href: "/courses", primary: true },
      { text: "Speak to Mentor", href: "/contact", primary: false },
    ],
  };

  // Landing slide styles matching logo colors
  const landingSlideStyles = {
    headlineColor: "#FFFFFF", // White text
    headlineWeight: "700",
    subTaglineColor: "#FFFFFF", // White text
    bulletColor: "#FFFFFF", // White text
    bulletIconBg: "#FFA500", // Gold/orange accent
    primaryBtnBg: "#FFA500", // Gold/orange
    primaryBtnColor: "#1e3a5f", // Dark blue text on gold
    secondaryBtnBorder: "#FFFFFF", // White border
    secondaryBtnColor: "#FFFFFF", // White text
  };

  const LandingSlideContent = ({ variant }) => {
    const isMobile = variant === "mobile";
    const headingClasses = isMobile
      ? `font-bold leading-snug`
      : `font-bold leading-tight`;

    const subTaglineClasses = isMobile
      ? `leading-relaxed`
      : `leading-relaxed`;

    const listSpacing = isMobile ? "space-y-3" : "space-y-4";
    const listTextSize = isMobile ? "text-base leading-relaxed" : "text-base sm:text-lg leading-relaxed";
    const buttonsWrapperClasses = isMobile ? "flex flex-col gap-4 pt-3" : "flex flex-wrap gap-4 pt-2";

    const primaryButtonClasses = isMobile
      ? "!w-full !justify-center px-10 py-5 text-base font-bold !rounded-2xl transition-all duration-500 ease-out relative overflow-hidden group !shadow-2xl hover:!shadow-[0_20px_50px_rgba(255,165,0,0.5)] hover:scale-[1.02] active:scale-[0.98] transform-gpu !border-0"
      : "px-12 py-5 text-base font-bold !rounded-2xl transition-all duration-500 ease-out relative overflow-hidden group !shadow-2xl hover:!shadow-[0_20px_50px_rgba(255,165,0,0.5)] hover:scale-[1.02] active:scale-[0.98] transform-gpu !border-0";

    const secondaryButtonClasses = isMobile
      ? "!w-full !justify-center px-10 py-5 text-base font-bold !rounded-2xl transition-all duration-500 ease-out relative overflow-hidden group !border-2 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transform-gpu backdrop-blur-sm"
      : "px-12 py-5 text-base font-bold !rounded-2xl transition-all duration-500 ease-out relative overflow-hidden group !border-2 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transform-gpu backdrop-blur-sm";

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={isMobile ? "space-y-6" : "space-y-8"}
      >
        <div className="inline-block">
          <span 
            className="text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-lg shadow-sm"
            style={{
              backgroundColor: "rgba(255, 165, 0, 0.2)",
              color: "#FFA500",
              fontFamily: '"Times New Roman", Times, serif',
            }}
          >
            {landingSlideContent.title}
          </span>
        </div>

        <h1 
          className={`${headingClasses} line-clamp-3`}
          style={{
            color: landingSlideStyles.headlineColor,
            fontWeight: landingSlideStyles.headlineWeight,
            lineHeight: "1.2",
            fontFamily: '"Times New Roman", Times, serif',
            fontSize: isMobile ? '2rem' : '3.5rem',
            maxHeight: isMobile ? '6rem' : '8.4rem',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {landingSlideContent.quotation}
        </h1>

        {landingSlideContent.subTagline && (
          <p 
            className={`${subTaglineClasses} line-clamp-2`}
            style={{
              color: landingSlideStyles.subTaglineColor,
              lineHeight: "1.6",
              fontFamily: '"Times New Roman", Times, serif',
              fontSize: isMobile ? '1rem' : '1.25rem',
              maxHeight: isMobile ? '3.2rem' : '4rem',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {landingSlideContent.subTagline}
          </p>
        )}

        <ul className={listSpacing}>
          {landingSlideContent.bullets.map((b, i) => (
            <li 
              key={i} 
              className="flex items-start gap-4 group/bullet"
              style={{
                color: landingSlideStyles.bulletColor,
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              <div className="relative flex-shrink-0 mt-1.5">
                <div 
                  className="w-5 h-5 flex items-center justify-center transition-all duration-300 group-hover/bullet:scale-110 group-hover/bullet:shadow-md"
                  style={{
                    backgroundColor: landingSlideStyles.bulletIconBg,
                    borderRadius: '4px',
                    boxShadow: '0 2px 4px rgba(255, 165, 0, 0.3)',
                  }}
                >
                  <Check 
                    className="w-3 h-3 transition-all duration-300" 
                    strokeWidth={4}
                    style={{ color: '#1e3a5f' }}
                  />
                </div>
              </div>
              <span className={`${listTextSize} group-hover/bullet:text-yellow-300 transition-colors duration-300 leading-relaxed`}>{b}</span>
            </li>
          ))}
        </ul>

        <div className={buttonsWrapperClasses}>
          {landingSlideContent.buttons?.map((btn, i) =>
            btn.primary ? (
              <motion.div
                key={i}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  href={btn.href}
                  variant="primary"
                  size="lg"
                  className={primaryButtonClasses}
                  style={{
                    background: `linear-gradient(135deg, #FFA500 0%, #FF8C00 50%, #FF7F00 100%)`,
                    color: '#1e3a5f',
                    fontFamily: '"Times New Roman", Times, serif',
                    border: 'none',
                    position: 'relative',
                    boxShadow: '0 10px 30px rgba(255, 165, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
                  }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" style={{ zIndex: 1 }}></span>
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-2xl" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)', zIndex: 2 }}></span>
                  <span className="relative z-10 flex items-center gap-2">
                    {btn.text}
                    <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={3} />
                  </span>
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key={i}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  href={btn.href}
                  variant="outline"
                  size="lg"
                  className={secondaryButtonClasses}
                  style={{
                    border: `2px solid ${landingSlideStyles.secondaryBtnBorder}`,
                    color: landingSlideStyles.secondaryBtnColor,
                    background: "rgba(255, 255, 255, 0.1)",
                    fontFamily: '"Times New Roman", Times, serif',
                    position: 'relative',
                  }}
                >
                  <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" style={{ zIndex: 1 }}></span>
                  <span className="relative z-10 flex items-center gap-2">
                    {btn.text}
                    <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={3} />
                  </span>
                </Button>
              </motion.div>
            )
          )}
        </div>
      </motion.div>
    );
  };

  const renderSlideContent = (variant) => (
    <AnimatePresence mode="wait" initial={false}>
      {showLandingSlide ? (
        <LandingSlideContent variant={variant} />
      ) : (
        <SlideContentBlock variant={variant} />
      )}
    </AnimatePresence>
  );

  return (
    <section className="w-full min-h-screen bg-white flex flex-col">
      {/* Main Slides Section */}
      <div className="relative w-full flex flex-col lg:flex-row flex-[3] min-h-0">
        
        {/* Close button for landing slide - Custom decorative cross design */}
        {showLandingSlide && (
          <button
            onClick={skipLandingSlide}
            className="absolute top-4 right-4 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/40 transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl hover:shadow-2xl group"
            aria-label="Close landing slide"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              borderColor: 'rgba(255, 255, 255, 0.4)',
            }}
          >
            {/* Custom decorative cross with styled appearance */}
            <div className="relative w-6 h-6 flex items-center justify-center">
              {/* Text-style cross using styled characters */}
              <span 
                className="absolute text-white font-bold leading-none select-none"
                style={{
                  fontSize: '28px',
                  fontFamily: 'Arial, sans-serif',
                  transform: 'rotate(45deg)',
                  textShadow: '0 0 8px rgba(255,165,0,0.6), 0 2px 4px rgba(0,0,0,0.4)',
                  transition: 'all 0.3s ease',
                }}
              >
                ✕
              </span>
              {/* Alternative: Using plus rotated */}
              <span 
                className="absolute text-white font-extrabold leading-none select-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  fontSize: '24px',
                  fontFamily: 'Arial, sans-serif',
                  transform: 'rotate(45deg)',
                  textShadow: '0 0 8px rgba(255,165,0,0.8), 0 2px 4px rgba(0,0,0,0.5)',
                }}
              >
                +
              </span>
            </div>
          </button>
        )}
        
        {/* LEFT TEXT PANEL - Landing slide has dark blue background, others white */}
        <div 
          className="hidden lg:flex w-full lg:w-1/2 items-center justify-center px-6 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-12 z-10 transition-colors duration-500"
          style={{
            backgroundColor: showLandingSlide ? '#1e3a5f' : '#ffffff',
          }}
        >
          <div className="max-w-xl w-full h-full flex flex-col justify-center">
            {renderSlideContent("desktop")}
          </div>
        </div>

        {/* Floating navigation between text and image - Hidden during landing slide */}
        {!showLandingSlide && (
          <div className="hidden lg:flex absolute left-1/2 bottom-12 -translate-x-1/2 z-50">
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl border border-white/70">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImageIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    i === currentImageIndex ? 'w-12 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* RIGHT IMAGE PANEL - 50% width */}
        <div
          className="w-full lg:w-1/2 relative overflow-hidden min-h-[420px] lg:min-h-[700px] bg-white flex items-center justify-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <AnimatePresence mode="wait" initial={false}>
            {showLandingSlide ? (
              // Landing slide image
              <motion.div
                key="landing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 0.8,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 w-full h-full bg-white flex items-center justify-center p-6 lg:p-8"
              >
                <div 
                  className="relative flex items-center justify-center"
                  style={{
                    width: '650px',
                    height: '650px',
                    maxWidth: '98%',
                    maxHeight: '98%',
                  }}
                >
                  <Image
                    src={landingImage}
                    alt="VAWE Institute - Empowering You Through Value-Driven Skill Advancement"
                    fill
                    className="object-contain"
                    style={{ 
                      objectFit: 'contain', 
                      objectPosition: 'center center', 
                      backgroundColor: '#ffffff',
                    }}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={90}
                    priority={true}
                  />
                </div>
                
                {/* Subtle gradient overlay for clean edge merging */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to left, rgba(30,58,95,0.3) 0%, rgba(30,58,95,0.2) 15%, rgba(30,58,95,0.1) 25%, transparent 35%)'
                  }}
                />
              </motion.div>
            ) : (
              // Regular carousel images
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 0,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 w-full h-full bg-white flex items-center justify-center p-6 lg:p-8"
              >
                {/* Consistent container - increased size so all images appear same size while maintaining aspect ratio */}
                <div 
                  className="relative flex items-center justify-center"
                  style={{
                    width: '650px',
                    height: '650px',
                    maxWidth: '98%',
                    maxHeight: '98%',
                  }}
                >
                  <Image
                    src={images[currentImageIndex]}
                    alt={`${slideContent[currentImageIndex]?.title || 'slide'} image`}
                    fill
                    className="object-contain"
                    style={{ 
                      objectFit: 'contain', 
                      objectPosition: 'center center', 
                      backgroundColor: '#ffffff',
                    }}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={75}
                    priority={currentImageIndex === 0}
                  />
                </div>
                
                {/* Subtle gradient overlay for clean edge merging */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to right, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 15%, rgba(255,255,255,0.1) 25%, transparent 35%)'
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
          
        </div>

        {/* Mobile-only content section below the image */}
        <div 
          className="lg:hidden w-full px-4 pt-6 pb-10 transition-colors duration-500"
          style={{
            background: showLandingSlide 
              ? 'linear-gradient(to bottom, #1e3a5f 0%, #1e3a5f 100%)' 
              : 'linear-gradient(to bottom, white 0%, white 50%, rgba(59, 130, 246, 0.1) 100%)'
          }}
        >
          <div 
            className="max-w-md mx-auto rounded-3xl border px-5 py-7 shadow-lg"
            style={{
              backgroundColor: showLandingSlide ? 'rgba(255, 255, 255, 0.05)' : '#ffffff',
              borderColor: showLandingSlide ? 'rgba(255, 165, 0, 0.3)' : 'rgba(59, 130, 246, 0.3)',
              boxShadow: showLandingSlide 
                ? '0 15px 40px rgba(0, 0, 0, 0.3)' 
                : '0 15px 40px rgba(37, 99, 235, 0.15)'
            }}
          >
            {renderSlideContent("mobile")}
          </div>
        </div>
      </div>

      {/* Partner Marquee Section */}
      <div className="w-full relative z-10 px-4 sm:px-6 lg:px-8 pt-2 pb-6 flex-[2] flex flex-col justify-center bg-gray-50 border-t border-gray-100">
        <h2 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold mb-4 mt-1" style={{ color: '#2563EB' }}>
          Our Partnering Companies & Organizations
        </h2>
        <PartnerMarquee />
      </div>
    </section>
  );
}
