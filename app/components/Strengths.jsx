// "use client";
// // Strengths.jsx
// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import {
//   UserGroupIcon,
//   AcademicCapIcon,
//   BookOpenIcon,
//   CheckBadgeIcon,
//   StarIcon,
// } from "@heroicons/react/24/solid";


// export default function Strengths() {
//   // Left side: trophy/award style (the "strengths" values: all 100%)
//   const awardStrengths = [
//     { title: "Professional Trainers", subtitle: "100% Quality" },
//     { title: "Certification Content", subtitle: "100% Aligned" },
//     { title: "Various Job Platforms", subtitle: "100% Coverage" },
//     { title: "Training Infrastructure", subtitle: "100% Ready" },
//   ];

//   // Right side: metric cards
//   const strengthsList = [
//     {
//       title: "Students Enrolled",
//       value: 300000,
//       suffix: "+",
//       icon: <UserGroupIcon className="w-9 h-9 text-indigo-700" />,
//     },
//     {
//       title: "Expert Instructors",
//       value: 500,
//       suffix: "+",
//       icon: <AcademicCapIcon className="w-9 h-9 text-sky-600" />,
//     },
//     {
//       title: "Courses Available",
//       value: 50,
//       suffix: "+",
//       icon: <BookOpenIcon className="w-9 h-9 text-violet-600" />,
//     },
//     {
//       title: "Success Rate",
//       value: 98,
//       suffix: "%",
//       icon: <CheckBadgeIcon className="w-9 h-9 text-emerald-600" />,
//     },
//   ];

//   // simple counter hook — animates numbers from 0 -> target when visible
//   function useCountTo(target, duration = 1400, startAt = 0) {
//     const [count, setCount] = useState(startAt);
//     const rafRef = useRef(null);

//     useEffect(() => {
//       let start = null;
//       const step = (timestamp) => {
//         if (!start) start = timestamp;
//         const progress = Math.min((timestamp - start) / duration, 1);
//         const current = Math.floor(startAt + (target - startAt) * progress);
//         setCount(current);
//         if (progress < 1) {
//           rafRef.current = requestAnimationFrame(step);
//         }
//       };
//       rafRef.current = requestAnimationFrame(step);
//       return () => cancelAnimationFrame(rafRef.current);
//     }, [target, duration, startAt]);

//     return count;
//   }

//   // We'll control counters only when the section is in view
//   const containerRef = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const el = containerRef.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setVisible(true);
//             obs.disconnect();
//           }
//         });
//       },
//       { threshold: 0.25 }
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <section className="w-full bg-white py-20">
//       <div className="max-w-7xl mx-auto px-6" ref={containerRef}>
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
//             Our Strengths
//           </h2>
//           <p className="text-gray-600 mt-3 text-lg italic max-w-2xl mx-auto">
//             “Only those who attempt the absurd can achieve the impossible.”
//             <br />
//             — Albert Einstein
//           </p>
//         </div>

//         {/* Main Content: two columns */}
//         <div className="grid gap-10 lg:grid-cols-2">
//           {/* LEFT — Trophy / Award Cards (premium) */}
//           <div className="space-y-6">
//             {awardStrengths.map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 18 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.08 * idx, duration: 0.45 }}
//                 className="relative overflow-hidden rounded-2xl p-6 border border-gray-100 bg-gradient-to-b from-white via-gray-50 to-white shadow-lg"
//               >
//                 {/* watermark decorative emblem (low-opacity) */}
//                 <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-6 pointer-events-none select-none">
//                   <div className="w-36 h-36 opacity-10">
//                     <Image
//                       src="/mnt/data/7e43b97b-2b65-42ee-9128-6eb3debb9e12.png"
//                       alt="emblem"
//                       width={144}
//                       height={144}
//                       className="object-contain"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   {/* trophy emblem */}
//                   <div className="flex-shrink-0">
//                     <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-500 shadow-md flex items-center justify-center ring-1 ring-amber-200">
//                       {/* simple trophy / star SVG */}
//                       <StarIcon className="w-7 h-7 text-white" />
//                     </div>
//                   </div>

//                   {/* text */}
//                   <div className="flex-1">
//                     <h3 className="text-lg font-semibold text-gray-900">
//                       {item.title}
//                     </h3>
//                     <p className="mt-2 text-sm text-gray-600">{item.subtitle}</p>

//                     {/* small footer showing an award label */}
//                     <div className="mt-4 inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-medium ring-1 ring-amber-100">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-4 w-4"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l.7 2.15a1 1 0 00.95.69h2.257c.969 0 1.371 1.24.588 1.81l-1.83 1.33a1 1 0 00-.364 1.118l.7 2.15c.3.92-.755 1.688-1.54 1.118l-1.83-1.33a1 1 0 00-1.176 0l-1.83 1.33c-.784.57-1.84-.197-1.54-1.118l.7-2.15a1 1 0 00-.364-1.118L2.304 7.577c-.783-.57-.38-1.81.588-1.81h2.257a1 1 0 00.95-.69l.7-2.15z" />
//                       </svg>
//                       Awarded Excellence
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* RIGHT — Achievement Metric Cards (icons + counter) */}
//           <div className="grid sm:grid-cols-2 gap-6">
//             {strengthsList.map((item, idx) => {
//               const animatedValue = useCountTo(visible ? item.value : 0, 1300);
//               return (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.06 * idx, duration: 0.45 }}
//                   className="flex items-center gap-4 p-5 bg-white border rounded-xl shadow-sm"
//                 >
//                   {/* icon */}
//                   <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-white to-gray-50 flex items-center justify-center ring-1 ring-gray-100">
//                     {item.icon}
//                   </div>

//                   {/* text */}
//                   <div>
//                     <div className="flex items-baseline gap-2">
//                       <span className="text-2xl md:text-3xl font-extrabold text-indigo-700">
//                         {/* show suffix for big numbers */}
//                         {item.suffix === "+" || item.suffix === "%" ? (
//                           <>
//                             {item.suffix === "+" && animatedValue >= 1000
//                               ? formatNumber(animatedValue) + item.suffix
//                               : animatedValue + item.suffix}
//                           </>
//                         ) : (
//                           animatedValue
//                         )}
//                       </span>
//                     </div>
//                     <p className="text-sm text-gray-600 mt-1 font-medium">
//                       {item.title}
//                     </p>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Footer small note */}
//         <div className="mt-10 text-center text-sm text-gray-500">
//           Trusted by learners — certified content — industry-ready skills
//         </div>
//       </div>
//     </section>
//   );

//   // helper: format 300000 -> 300k
//   function formatNumber(n) {
//     if (n >= 1000000) return Math.round(n / 1000000) + "M";
//     if (n >= 1000) return Math.round(n / 1000) + "k";
//     return n.toString();
//   }

//   // Count hook defined inside file — moved here for closure access (works fine)
//   function useCountTo(target, duration = 1200, startAt = 0) {
//     const [count, setCount] = useState(startAt);
//     const rafRef = useRef(null);

//     useEffect(() => {
//       let start = null;
//       const step = (timestamp) => {
//         if (!start) start = timestamp;
//         const progress = Math.min((timestamp - start) / duration, 1);
//         const current = Math.floor(startAt + (target - startAt) * progress);
//         setCount(current);
//         if (progress < 1) {
//           rafRef.current = requestAnimationFrame(step);
//         }
//       };
//       // only start if target > startAt
//       if (target > startAt) rafRef.current = requestAnimationFrame(step);
//       else setCount(target);

//       return () => cancelAnimationFrame(rafRef.current);
//     }, [target, duration, startAt]);

//     return count;
//   }
// }

"use client";
// Strengths.jsx
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  TrophyIcon,
  ShieldCheckIcon,
  BoltIcon,
  BuildingLibraryIcon,
  UserGroupIcon,
  AcademicCapIcon,
  BookOpenIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";

function useCountTo(target, duration = 1400, startAt = 0) {
  const [count, setCount] = useState(startAt);
  const rafRef = useRef(null);

  useEffect(() => {
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = Math.floor(startAt + (target - startAt) * progress);
      setCount(current);
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration, startAt]);

  return count;
}

const MetricCard = ({ item, visible, index }) => {
  const animatedValue = useCountTo(visible ? item.value : 0, 1200);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.06 * index }}
      className="flex flex-col items-center text-center p-4 sm:p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition"
    >
      <div className="mb-2 sm:mb-3 [&>*]:w-12 [&>*]:h-12 sm:[&>*]:w-14 sm:[&>*]:h-14">{item.icon}</div>
      <span className="text-2xl sm:text-3xl font-extrabold text-indigo-700">
        {animatedValue}
        {item.suffix}
      </span>
      <p className="mt-1 text-sm sm:text-base text-gray-600 font-medium">{item.title}</p>
    </motion.div>
  );
};

export default function Strengths() {
  const awardStrengths = [
    {
      title: "Professional Trainers",
      subtitle: "100% Quality",
      icon: <TrophyIcon className="w-10 h-10 text-amber-500" />,
    },
    {
      title: "Certification Content",
      subtitle: "100% Aligned",
      icon: <ShieldCheckIcon className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Various Job Platforms",
      subtitle: "100% Coverage",
      icon: <BoltIcon className="w-10 h-10 text-indigo-600" />,
    },
    {
      title: "Training Infrastructure",
      subtitle: "100% Ready",
      icon: <BuildingLibraryIcon className="w-10 h-10 text-purple-600" />,
    },
  ];

  const strengthsList = [
    {
      title: "Students Enrolled",
      value: 5000,
      suffix: "+",
      icon: <UserGroupIcon className="w-14 h-14 text-indigo-700" />,
    },
    {
      title: "Expert Instructors",
      value: 14,
      suffix: "+",
      icon: <AcademicCapIcon className="w-14 h-14 text-sky-600" />,
    },
    {
      title: "Courses Available",
      value: 25,
      suffix: "+",
      icon: <BookOpenIcon className="w-14 h-14 text-purple-600" />,
    },
    {
      title: "Success Rate",
      value: 98,
      suffix: "%",
      icon: <CheckBadgeIcon className="w-14 h-14 text-green-600" />,
    },
  ];

  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={containerRef}>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-extrabold text-gray-900">
            Our Strengths
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl italic max-w-2xl mx-auto px-2">
            “Only those who attempt the absurd can achieve the impossible.” — Albert Einstein
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-2">
          {/* LEFT — Award Cards */}
          <div className="space-y-4 sm:space-y-5">
            {awardStrengths.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * idx }}
                className="relative rounded-2xl p-4 sm:p-5 border border-gray-200 bg-gradient-to-br from-white to-gray-50 shadow-md flex flex-col sm:flex-row gap-4 sm:gap-5 items-start sm:items-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl bg-amber-100 flex items-center justify-center shadow ring-1 ring-amber-200">
                  {item.icon}
                </div>

                <div className="text-center sm:text-left">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-gray-600">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT — Metrics Cards with big icon at top */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {strengthsList.map((item, idx) => (
              <MetricCard key={item.title} item={item} visible={visible} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}