// // "use client";
// // import { useEffect } from "react";
// // import AOS from "aos";
// // import "aos/dist/aos.css";

// // import { FaUserTie, FaClock, FaCertificate } from "react-icons/fa";

// // export default function CircularFeatures() {
// //   useEffect(() => {
// //     AOS.init({
// //       duration: 800, // Animation duration
// //       once: true, // Run animation once
// //       easing: "ease-in-out", // Smooth animation
// //     });
// //   }, []);

// //   const features = [
// //     {
// //       title: "Expert Instructors",
// //       description:
// //         "Learn from industry professionals with years of real-world experience.",
// //       icon: <FaUserTie className="text-5xl text-white" />,
// //       color: "bg-orange-500",
// //       delay: "0",
// //     },
// //     {
// //       title: "Flexible Learning",
// //       description:
// //         "Study at your own pace with 24/7 access to course materials.",
// //       icon: <FaClock className="text-5xl text-white" />,
// //       color: "bg-sky-500",
// //       delay: "200",
// //     },
// //     {
// //       title: "Certification",
// //       description:
// //         "Earn recognized certificates to boost your career prospects.",
// //       icon: <FaCertificate className="text-5xl text-white" />,
// //       color: "bg-green-500",
// //       delay: "400",
// //     },
// //   ];

// //   return (
// //     <section className="flex flex-col justify-center items-center py-20 px-6 bg-gray-50">
// //       {/* Section Title */}
// //       <div data-aos="fade-up">
// //         <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">
// //           Why Learn With Us
// //         </h2>
// //         <p className="text-gray-600 text-lg max-w-xl text-center mb-12">
// //           Explore the key benefits of joining our learning platform — designed to
// //           empower your career growth.
// //         </p>
// //       </div>

// //       {/* Circular Feature Grid */}
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
// //         {features.map((item, index) => (
// //           <div
// //             key={index}
// //             data-aos="fade-up"
// //             data-aos-delay={item.delay}
// //             className="flex flex-col items-center justify-start text-center group"
// //           >
// //             {/* Circular Icon */}
// //             <div
// //               className={`w-40 h-40 ${item.color} rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl`}
// //             >
// //               {item.icon}
// //             </div>

// //             {/* Text Content */}
// //             <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
// //               {item.title}
// //             </h3>
// //             <p className="text-gray-600 text-sm max-w-[220px] mb-4">
// //               {item.description}
// //             </p>
// //             <a
// //               href="#"
// //               className="text-orange-500 text-sm font-medium hover:underline"
// //             >
// //               Read More →
// //             </a>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }



// "use client";
// import { FaUserTie, FaClock, FaCertificate } from "react-icons/fa";

// export default function FeaturesSection() {
//   const features = [
//     {
//       title: "Expert Instructors",
//       description:
//         "Learn from industry professionals with years of real-world experience.",
//       icon: <FaUserTie className="text-4xl text-orange-500" />,
//       color: "bg-orange-400",
//     },
//     {
//       title: "Flexible Learning",
//       description:
//         "Study at your own pace with 24/7 access to course materials.",
//       icon: <FaClock className="text-4xl text-sky-500" />,
//       color: "bg-sky-500",
//     },
//     {
//       title: "Certification",
//       description:
//         "Earn recognized certificates to boost your career prospects.",
//       icon: <FaCertificate className="text-4xl text-green-500" />,
//       color: "bg-green-500",
//     },
//   ];

//   return (
//     <main className="flex flex-col lg:flex-row justify-center items-center gap-10 px-8 py-16">
//       {/* LEFT SECTION */}
//       <div className="w-full lg:w-[40%] max-w-[650px] flex flex-col justify-center text-center lg:text-left">
//         <h2 className="text-4xl font-bold leading-tight mb-6 text-gray-800">
//           Why Choose Our Courses
//         </h2>
//         <p className="text-lg text-gray-700 mb-6 leading-relaxed">
//           Discover the advantages of learning with us — flexible options, expert
//           instructors, and certifications that truly make an impact.
//         </p>
//         <a
//           href="#"
//           className="inline-block border border-orange-500 text-orange-500 px-6 py-2 rounded-full text-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
//         >
//           Learn More
//         </a>
//       </div>

//       {/* RIGHT SIDE - FEATURE CARDS */}
//       <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
//         {features.map((item, index) => (
//           <div
//             key={index}
//             className="relative flex w-[340px] h-[180px] bg-white shadow-md rounded-md overflow-hidden transition-all duration-300 hover:shadow-xl group"
//           >
//             {/* Text content */}
//             <div className="w-full flex flex-col justify-between p-6 z-10">
//               <div className="flex items-center gap-3">
//                 <div className="p-3 bg-gray-100 rounded-full">{item.icon}</div>
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   {item.title}
//                 </h3>
//               </div>

//               <p className="text-gray-600 text-sm mt-4 leading-relaxed">
//                 {item.description}
//               </p>

//               <a
//                 href="#"
//                 className="text-orange-500 font-medium mt-4 text-sm hover:underline"
//               >
//                 Read More →
//               </a>
//             </div>

//             {/* Decorative color background */}
//             <div
//               className={`absolute right-[-40px] w-[160px] h-[160px] rounded-full ${item.color} transition-all duration-300 ease-in-out group-hover:w-[400px] group-hover:h-[250px] group-hover:rounded-none z-0`}
//             ></div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }


"use client";
import { FaUserTie, FaClock, FaCertificate } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { GiNetworkBars, GiSkills } from "react-icons/gi";
import { IoMdBriefcase } from "react-icons/io";

export default function FeaturesSection() {
  const features = [
    {
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with years of real-world experience.",
      icon: <FaUserTie className="text-4xl text-orange-500" />,
      color: "bg-orange-400",
    },
    {
      title: "Flexible Learning",
      description:
        "Study at your own pace with 24/7 access to course materials.",
      icon: <FaClock className="text-4xl text-sky-500" />,
      color: "bg-sky-500",
    },
    {
      title: "Certification",
      description:
        "Earn recognized certificates to boost your career prospects.",
      icon: <FaCertificate className="text-4xl text-green-500" />,
      color: "bg-green-500",
    },
  ];

  const stats = [
    {
      value: "Practical Learning",
      icon: <GiSkills className="text-5xl text-orange-500" />,
      color: "bg-orange-100",
    },
    {
      value: "24/7 Support Access",
      icon: <MdSupportAgent className="text-5xl text-sky-500" />,
      color: "bg-sky-100",
    },
    {
      value: "5000+ Alumni Network",
      icon: <GiNetworkBars className="text-5xl text-green-500" />,
      color: "bg-green-100",
    },
    {
      value: "95% Job Placement",
      icon: <IoMdBriefcase className="text-5xl text-rose-500" />,
      color: "bg-rose-100",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center md:mt-[-350px] mt-[-250px] px-8 py-16 bg-gray-50">
      {/* HEADER SECTION */}
      <div className="w-full max-w-[650px] flex flex-col justify-center text-center mb-12">
        <h2 className="text-2xl sm:text-2xl md:text-2xl  2xl:text-5xl font-bold leading-tight mb-4 text-gray-800">
          Why Choose Our Courses
        </h2>
        <p className="text-sm sm:text-base md:text-lg  2xl:text-xl text-gray-700 mb-6 leading-relaxed">
          Discover the advantages of learning with us — flexible options, expert
          instructors, certifications, and proven career success.
        </p>
        <a
          href="#"
          className="inline-block border border-orange-500 text-orange-500 px-6 py-2 rounded-full text-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
        >
          Learn More
        </a>
      </div>

      {/* FEATURE CARDS */}
      <div className="w-full lg:w-[90%] grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 justify-items-center">
        {features.map((item, index) => (
          <div
            key={index}
            className="relative flex w-full max-w-[460px] h-[220px] bg-white shadow-md rounded-md overflow-hidden transition-all duration-300 hover:shadow-xl group"
          >
            {/* Text content */}
            <div className="w-full flex flex-col justify-between p-7 z-10">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gray-100 rounded-full">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                {item.description}
              </p>

              <a
                href="#"
                className="text-orange-500 font-medium mt-4 text-sm hover:underline"
              >
                Read More →
              </a>
            </div>

            {/* Decorative color background */}
            <div
              className={`absolute right-[-40px] w-[220px] h-[220px] rounded-full ${item.color} transition-all duration-300 ease-in-out group-hover:w-[520px] group-hover:h-[300px] group-hover:rounded-none z-0`}
            ></div>
          </div>
        ))}
      </div>

      {/* STATS CIRCLES */}
      <div className="w-full lg:w-[80%] mt-[-5px] grid grid-cols-2 sm:grid-cols-4 gap-10 place-items-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center"
          >
            <div
              className={`w-[130px] h-[130px] rounded-full flex flex-col items-center justify-center ${stat.color} shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              {stat.icon}
            </div>
            <p className="text-gray-800 font-semibold mt-4 leading-tight text-sm sm:text-base max-w-[120px]">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
