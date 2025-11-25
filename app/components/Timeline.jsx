// "use client";
// import { useEffect, useState } from "react";

// const timelineData = [
//   { year: "1687", discovery: "Laws of motion", scientist: "Newton" },
//   { year: "1785", discovery: "Law of electrostatic attraction", scientist: "Coulomb" },
//   { year: "1827", discovery: "Law of Electric Resistance", scientist: "G.S Ohm" },
//   { year: "1831", discovery: "Electromagnetic Induction", scientist: "Michael Faraday" },
//   { year: "1867", discovery: "Dynamite", scientist: "Alfred Nobel" },
//   { year: "1895", discovery: "X Rays", scientist: "Roentgen" },
//   { year: "1897", discovery: "Electron", scientist: "J.J.Thomson" },
//   { year: "1898", discovery: "Radium", scientist: "Madam Curie" },
//   { year: "1900", discovery: "Quantum Theory", scientist: "Max Plank" },
//   { year: "1905", discovery: "Principle of Relativity", scientist: "Albert Einstein" },
//   { year: "1905b", discovery: "Photo electric effect", scientist: "Albert Einstein" },
//   { year: "1942", discovery: "Nuclear Reactor", scientist: "Anrico Fermi" },
// ];

// export default function Timeline() {
//   const [visibleItems, setVisibleItems] = useState([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const elements = document.querySelectorAll(".timeline-item");
//       const newVisible = [];
//       elements.forEach((el, index) => {
//         const rect = el.getBoundingClientRect();
//         if (rect.top < window.innerHeight * 0.85 && rect.bottom >= 0) {
//           newVisible.push(index);
//         }
//       });
//       setVisibleItems(newVisible);
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleScroll);
//     };
//   }, []);

//   return (
//     <section className="relative bg-gradient-to-tr from-purple-500 to-cyan-300 text-gray-800 py-20 overflow-x-hidden">
//       <ul className="relative w-[6px] bg-white mx-auto">
//         {timelineData.map((item, i) => {
//           const isEven = i % 2 === 0;
//           const inView = visibleItems.includes(i);
//           return (
//             <li
//               key={item.year + i}
//               className={`timeline-item relative w-[6px] mx-auto py-12 before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:bottom-0 before:w-5 before:h-5 before:bg-gray-200 before:rotate-45 before:z-10`}
//             >
//               <div
//                 className={`absolute w-[90vw] max-w-md p-5 bg-white rounded-md shadow-xl flex flex-col sm:flex-row items-center transition-all duration-700 ease-in-out
//                 ${isEven ? "sm:left-[50px]" : "sm:left-[-420px]"} 
//                 ${inView ? "opacity-100 translate-x-0 rotate-0 visible" : `opacity-0 invisible ${isEven ? "translate-x-20 rotate-6" : "-translate-x-20 rotate-6"}`}
//                 sm:w-[400px]
//               `}
//               >
//                 <time className="absolute -top-4 bg-amber-400 text-white font-semibold px-4 py-1 rounded-md text-sm shadow">
//                   {item.year.replace("b", "")}
//                 </time>

//                 <div className="flex-1 flex flex-col items-center justify-center text-center mb-3 sm:mb-0 sm:mr-3">
//                   <h1 className="text-lg font-bold">Discovery</h1>
//                   <p className="text-sm text-gray-600">{item.discovery}</p>
//                 </div>

//                 <div className="flex-1 flex flex-col items-center justify-center text-center">
//                   <h1 className="text-lg font-bold">Scientist</h1>
//                   <span className="text-sm text-gray-600">{item.scientist}</span>
//                 </div>
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//     </section>
//   );
// }



"use client";
import { useEffect, useRef, useState } from "react";

const milestones = [
  { title: 'Establishment of VAWE Institute of Technical Training', year: '2016' },
  { title: 'Part of ESDM Project in AP and Telangana States, receiving an order for 1950 Candidates', year: '2016' },
  { title: 'Associated with TSSC as Channel Partners for PAN INDIA', year: '2017' },
  { title: 'Provided Microsoft Suit Office Training for the Dept of Pay and Account, AP', year: '2017' },
  { title: 'Provided Microsoft Office Training for the Dept of Economics and Statistics, AP', year: '2018' },
  { title: 'Associated With APSCHE for Implementation of Long term and Short Term Programs', year: '2018' },
  { title: 'AICTE Approved VAWE Internship Program for Implementation of Long term and Short Term Internship Programs', year: '2019' },
  { title: 'Associated with Postal Department to provide Networking and Hardware Trainings to their working professionals', year: '2020' },
  { title: 'Supported Sarva Shiksha Abhiyan district team by providing Data Entry operators for Aadhar Linking and updating', year: '2021' },
  { title: 'Associated with BOSCH India for implementation of CSR activities in the Andhra Region through its Programs, BRIDGE and Paramedics Training', year: '2022' },
  { title: 'Associated with CERTIPORT and ETRAIN to provide Corporate Certification Trainings', year: '2023' },
  { title: 'Conducted a TESTING TOOLS 3 Days workshop in P B Siddhartha College of Arts and Science', year: '2023' },
  { title: 'Associated with NOVA Engineering College to support for academic projects, training and placements', year: '2024' },
  { title: 'Completely handled Final year academic projects of GVR&S Engineering College for CSE', year: '2024' },
  { title: 'Completely handled Final year academic projects of RK Engineering College for CSE, IT, ECE, EEE, & Mech and supported for training and placements', year: '2025' },
  { title: 'Completely handled Final year academic projects of NVR Engineering College for CSE, IT, ECE, EEE, Mech & Civil and supported for training and placements', year: '2025' }
];

export default function MilestoneTimeline() {
  const [visibleItems, setVisibleItems] = useState([]);
  const [spineProgress, setSpineProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".timeline-item");
      const visible = [];
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && rect.bottom >= 0) {
          visible.push(index);
        }
      });
      setVisibleItems(visible);

      // Spine progress based on section visibility
      const sec = sectionRef.current;
      if (sec) {
        const r = sec.getBoundingClientRect();
        const total = r.height;
        const entered = Math.max(0, Math.min(r.height, window.innerHeight - r.top));
        const p = total > 0 ? Math.max(0, Math.min(1, entered / total)) : 0;
        setSpineProgress(p);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-tr from-[#EEF2FF] via-[#F0FDFA] to-[#E0F2FE] text-gray-800 py-12 sm:py-16 md:py-20 overflow-x-hidden">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-black">
        VAWE Milestone Timeline
      </h2>

      <ul className="relative w-[6px] bg-gray-200 ml-3 sm:mx-auto">
        <div className="absolute left-0 top-0 w-[6px] bg-indigo-400 rounded" style={{ height: `${Math.round(spineProgress * 100)}%` }} />
        {milestones.map((item, i) => {
          const isEven = i % 2 === 0;
          const inView = visibleItems.includes(i);

          return (
            <li
              key={i}
              className="timeline-item relative w-[6px] mx-auto py-14 sm:py-16 md:py-20 before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:bottom-0 before:w-5 before:h-5 before:bg-gray-200 before:rotate-45 before:z-10"
            >
              <div
                className={`absolute left-6 w-[90vw] max-w-[300px] sm:max-w-[320px] md:max-w-md p-4 sm:p-5 md:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl transition-all duration-700 ease-in-out 
                ${isEven ? "sm:left-[70px] md:left-[90px]" : "sm:left-[-390px] md:left-[-470px]"}
                ${inView ? "opacity-100 translate-x-0 rotate-0 visible" : `opacity-0 invisible ${isEven ? "translate-x-20 rotate-6" : "-translate-x-20 rotate-6"}`}
                sm:w-[320px] md:w-[380px]
              `}
              >
                {/* Year badge: circular marker on the edge nearest the spine */}
                <div
                  style={{ marginLeft: '10px' }}
                  className={`absolute top-1/2 -translate-y-1/2 -left-6 ${isEven ? "sm:-left-6 sm:right-auto" : "sm:-right-6 sm:left-auto"} w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-md border-4 border-white`}
                  aria-label={`Year ${item.year}`}
                >
                  <span className="ml-[5px] text-xs sm:text-sm font-bold">{item.year}</span>
                </div>

                <div
                 style={{ marginLeft: '10px' }}
                 className={`${isEven ? "pl-7 md:pl-12" : "pr-7 md:pr-12"} flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-2`}>
                  <p className="text-gray-700 font-semibold leading-relaxed text-xs sm:text-sm md:text-base">{item.title}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
