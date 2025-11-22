// "use client";

// import { useEffect, useState,useRef  } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import PartnerMarquee from "./PartnerMarquee";

// export default function HeroSection() {
//   const [showSplash, setShowSplash] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setShowSplash(false), 3000); // 3 seconds
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section className="w-full min-h-screen bg-[#5E4BFF] flex items-center justify-center">
//       <AnimatePresence mode="wait">
//         {showSplash ? (
//           <motion.div
//             key="splash"
//             initial={{ opacity: 0, scale: 0.96 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.96 }}
//             transition={{ duration: 0.5 }}
//             className="bg-white w-[90%] md:w-[80%] rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden"
//           >
//             {/* Splash Hero (NO NAVBAR) */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//               {/* Left Text */}
//               <div>
//                 <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E2A78] mb-4 leading-snug">
//                   Access 1400+ <br />
//                   Online Course From <br />
//                   Top Instructor
//                 </h2>

//                 <p className="text-gray-600 mb-6">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   diam nonummy nibh euismod tincidunt ut laoreet dolore magna
//                   aliquam erat volutpat.
//                 </p>

//                 <button className="bg-[#0A1A76] text-white px-7 py-3 rounded-lg shadow font-medium">
//                   Our All Course
//                 </button>
//               </div>

//               {/* Right Image */}
//               <div className="relative flex justify-center">
//                 <Image
//                   src="/hero/traning.png" // keep your file here
//                   alt="Student"
//                   width={500}
//                   height={500}
//                   className="z-20"
//                 />

//                 {/* Decorative Blue Shape */}
//                 <div className="absolute w-[280px] h-[260px] bg-[#0A1A76] rounded-tl-full bottom-0 right-0 z-0" />
//               </div>
//             </div>
//           </motion.div>
//         ) : (
//           <FeelGoodSlides key="slides" />
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

// ---------------- FEEL GOOD SLIDES ---------------- //
//-----------------------------------------------------//

//-----------------------------------------------------//
//-----------------------------------------------------//


// function FeelGoodSlides() {
//   const slides = [
//     {
//       titleHighlight: "Online",
//       title: "College",
//       text:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
//       // using uploaded file path from conversation history
//       img: "/mnt/data/51fd1db2-13a5-4667-b612-bc2b6a71484c.png",
//     },
//     {
//       titleHighlight: "Smart",
//       title: "Learning",
//       text:
//         "Upgrade your skills with interactive, structured and engaging online learning programs designed for real-world success.",
//       img: "/hero/crthero.png",
//     },
//     {
//       titleHighlight: "Future",
//       title: "Education",
//       text:
//         "Build practical knowledge through expert-led sessions, hands-on tools, and real mentorship anytime, anywhere.",
//       img: "/hero/projectshero.png",
//     },
//   ];

//   const [active, setActive] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const timerRef = useRef(null);

//   const slideVariants = {
//     initial: (dir) => ({ opacity: 0, x: dir > 0 ? 100 : -100 }),
//     animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
//     exit: (dir) => ({ opacity: 0, x: dir > 0 ? -100 : 100, transition: { duration: 0.6 } }),
//   };

//   const resetAutoplay = () => {
//     if (timerRef.current) clearInterval(timerRef.current);
//     timerRef.current = setInterval(() => {
//       setDirection(1);
//       setActive((p) => (p + 1) % slides.length);
//     }, 3000);
//   };

//   useEffect(() => {
//     resetAutoplay();
//     return () => clearInterval(timerRef.current);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   useEffect(() => {
//     // restart autoplay after manual change so user gets full interval
//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//       resetAutoplay();
//     }
//   }, [active]);

//   const handleNext = () => {
//     setDirection(1);
//     setActive((p) => (p + 1) % slides.length);
//   };

//   return (
//     <div className="relative w-full bg-white rounded-3xl shadow-xl overflow-hidden flex items-stretch p-0">
//       {/* -------------------------
//           Animated slide (image + text)
//          ------------------------- */}
//       <div className="flex-1 w-full">
//         <AnimatePresence custom={direction} mode="wait">
//           <motion.div
//             key={active}
//             custom={direction}
//             variants={slideVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             className="flex flex-col md:flex-row w-full"
//           >
//             {/* LEFT IMAGE */}
//             <div className="relative w-full md:w-1/2 h-[550px] md:h-[800px] overflow-hidden">
//               <Image
//                 src={slides[active].img}
//                 alt={`${slides[active].title} image`}
//                 fill
//                 className="object-cover"
//                 priority
//               />

//               {/* Optional diagonal/overlay or shapes can be placed here (still inside image box) */}
//             </div>

//             {/* RIGHT TEXT */}
//             <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
//               <h1 className="text-5xl font-bold">
//                 <span className="text-[#FFB200]">{slides[active].titleHighlight} </span>
//                 <span className="text-[#5E35B1]">{slides[active].title}</span>
//               </h1>

//               <p className="text-gray-600 mt-5 leading-relaxed">
//                 {slides[active].text}
//               </p>

//               <div className="flex gap-4 mt-8">
//                 <button className="px-6 py-3 bg-[#5E35B1] text-white rounded-full shadow-md hover:opacity-90">
//                   Read More
//                 </button>

//                 <button className="px-6 py-3 border-2 border-[#5E35B1] text-[#5E35B1] rounded-full hover:bg-[#5E35B1] hover:text-white transition">
//                   Log In
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* -------------------------------------------------------
//          RIGHT-BOTTOM CONTROLS (DO NOT MOVE) - anchored inside parent
//          - placed after animated content so they are outside animation
//          - positioned at bottom-right visually but not part of motion
//          -------------------------------------------------------- */}
//       <div
//         className="absolute right-2 bottom-6 flex flex-col items-end gap-4 z-30"
//         aria-hidden={false}
//       >
//         {/* >>> buttons (static) */}
//         <button
//           onClick={handleNext}
//           aria-label="Next slide"
//           className="flex items-center gap-1 text-[#5E35B1] text-2xl font-bold bg-white/0 focus:outline-none"
//           title="Next"
//         >
//           <span>&gt;</span>
//           <span>&gt;</span>
//           <span>&gt;</span>
//         </button>

//         {/* PartnerMarquee stays static at bottom-right */}
//         <div className="w-[320px] md:w-[380px]">
//           <PartnerMarquee />
//         </div>
//       </div>
//     </div>
//   );
// }



// function FeelGoodSlides() {
//   const slides = [
//     {
//       titleHighlight: "Online",
//       title: "College",
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
//       img: "/hero/cirtificateimg.png",
//     },
//     {
//       titleHighlight: "Smart",
//       title: "Learning",
//       text: "Upgrade your skills with interactive, structured and engaging online learning programs designed for real-world success.",
//       img: "/hero/crthero.png",
//     },
//     {
//       titleHighlight: "Future",
//       title: "Education",
//       text: "Build practical knowledge through expert-led sessions, hands-on tools, and real mentorship anytime, anywhere.",
//       img: "/hero/projectshero.png",
//     },
//   ];

//   const [active, setActive] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActive((prev) => (prev + 1) % slides.length);
//     }, 3000); // auto slide every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center p-0">
      
//       {/* LEFT IMAGE */}
//       <motion.div
//         key={slides[active].img}
//         initial={{ opacity: 0, x: -30 }}
//         animate={{ opacity: 1, x: 0 }}
//         exit={{ opacity: 0, x: 30 }}
//         transition={{ duration: 0.6 }}
//         className="relative w-full md:w-1/2 h-[550px] md:h-[700px] overflow-hidden"
//       >
//         {/* Image */}
//         <Image
//           src={slides[active].img}
//           alt="slide"
//           fill
//           className="object-cover"
//         />
//       </motion.div>

//       {/* RIGHT TEXT CONTENT */}
//       <motion.div
//         key={slides[active].title}
//         initial={{ opacity: 0, x: 40 }}
//         animate={{ opacity: 1, x: 0 }}
//         exit={{ opacity: 0, x: -40 }}
//         transition={{ duration: 0.6 }}
//         className="w-full md:w-1/2 p-10"
//       >
//         <h1 className="text-5xl font-bold">
//           <span className="text-[#FFB200]">{slides[active].titleHighlight} </span>
//           <span className="text-[#5E35B1]">{slides[active].title}</span>
//         </h1>

//         <p className="text-gray-600 mt-5 leading-relaxed">
//           {slides[active].text}
//         </p>

//         <div className="flex gap-4 mt-8">
//           <button className="px-6 py-3 bg-[#5E35B1] text-white rounded-full shadow-md hover:opacity-90">
//             Read More
//           </button>

//           <button className="px-6 py-3 border-2 border-[#5E35B1] text-[#5E35B1] rounded-full hover:bg-[#5E35B1] hover:text-white transition">
//             Log In
//           </button>
//         </div>

//         {/* ARROWS */}
//         <div className="mt-10 flex items-center gap-2">
//           <motion.span
//             animate={{ x: [0, 5, 0] }}
//             transition={{ repeat: Infinity, duration: 1.2 }}
//             className="text-[#5E35B1] font-bold text-2xl"
//           >
//             &gt;
//           </motion.span>
//           <motion.span
//             animate={{ x: [0, 5, 0] }}
//             transition={{ repeat: Infinity, duration: 1.2, delay: 0.1 }}
//             className="text-[#5E35B1] font-bold text-2xl"
//           >
//             &gt;
//           </motion.span>
//           <motion.span
//             animate={{ x: [0, 5, 0] }}
//             transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }}
//             className="text-[#5E35B1] font-bold text-2xl"
//           >
//             &gt;
//           </motion.span>
//         </div>
//       </motion.div>
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full py-10 mt-[-40px] flex items-center justify-center">
      <div className="bg-white w-[90%] md:w-[80%] rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">

        {/* Main Hero Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Text */}
          <div>
            <h2 className="text-3xl mt-[-35px] md:text-4xl font-extrabold text-[#1E2A78] mb-4">
              <Image
                src="/logo.png"
                alt="Hero Icon"
                width={220}
                height={120}
                className="w-[220px] h-[120px] lg:ml-[100px]"
                priority
              />
             <span className="lg:ml-[80px] text-orange-600 font-bold fornt-family-sans-serif"> VAWE INSTITUTE</span>
              <br />
              Empowering You Through Value-Driven Skill Advancement
            </h2>

            <p className="text-gray-800 mb-6">
            Learn in-demand technical skills through real-world workshops, guided training, and industry-aligned certifications.
            </p>

            <button className="bg-[#0A1A76] lg:ml-[100px] text-white px-7 py-3 rounded-lg shadow font-medium">
              Our All Course
            </button>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <Image
              src="/hero/traning.png"  // <-- replace with file below
              alt="Student"
              width={500}
              height={500}
              className="z-20"
            />

            {/* Decorative Blue Shapes */}
            <div className="absolute w-[280px] h-[260px] bg-[#0A1A76] rounded-tl-full bottom-0 right-0 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}