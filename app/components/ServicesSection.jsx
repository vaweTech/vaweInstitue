// "use client";

// const slideContent = [
//   {
//     title: 'Trainings',
//     quotation: 'Learn. Build. Grow.',
//     subTagline: 'Where every step strengthens your skills.',
//     bullets: ['Industry-driven programs to boost employability.'],
//     image: '/hero/traning.png',
//     description:
//       'Hands-on trainings with mentors and real projects. Learn modern tools and workflows used by industry.',
//   },
//   {
//     title: 'Certifications',
//     quotation: 'Empowering You Through Value-Driven Skill Advancement',
//     subTagline: 'Get recognised for your skills.',
//     image: '/hero/cirtificateimg.png',
//     bullets: ['Vendor-aligned certificates to validate expertise.'],
//     description:
//       'Certification paths designed with industry partners to increase your credibility with employers.',
//   },
//   {
//     title: 'Projects',
//     quotation: 'Your Journey to Skill Excellence Starts Here',
//     subTagline: 'Portfolio-ready, employer-loved.',
//     image: '/hero/projectshero.png',
//     bullets: ['Real projects, team collaboration, code reviews.'],
//     description:
//       'Work on product-like projects to build a portfolio recruiters will notice.',
//   },
//   {
//     title: 'Workshops',
//     quotation: 'Learn Faster. Work Smarter. Grow Stronger.',
//     image: '/hero/workshopi.png',
//     subTagline: 'Practical micro-learning sessions.',
//     bullets: ['Weekend workshops led by industry experts.'],
//     description:
//       'Short, practical workshops focusing on one skill so you can iterate quickly.',
//   },
//   {
//     title: 'CRT & Placement',
//     quotation: 'Turn Your Skills Into Success',
//     image: '/hero/crthero.png',
//     subTagline: 'Interviews, resumes, and soft skills.',
//     bullets: ['Mock interviews and placement guidance.'],
//     description:
//       'Career coaching and mock interviews to boost confidence and result in offers.',
//   },
//   {
//     title: 'Special Demo',
//     quotation: 'Design-driven layout (Demo)',
//     subTagline: 'Example using uploaded image.',
//     bullets: ['Uses the uploaded image provided earlier.'],
//     image: '/hero/lodinghero.png',
//     description:
//       'This item shows how to use a specific `image` property per item. Useful when images are not the same length as content.',
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="bg-slate-50 py-14 md:py-20">
//       <div className="max-w-full mx-auto px-4 md:px-6">

//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
//             Programs & Offerings in VAWE Institutes
//           </h2>
//           <p className="text-sm md:text-base text-slate-600 mt-2">
//             Learning paths designed for growth and career readiness.
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
//           {slideContent.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 md:p-6 hover:shadow-md transition"
//             >
//               <div className="flex items-start justify-between gap-4">

//                 {/* TEXT LEFT */}
//                 <div className="flex-1 space-y-1">
//                   <h3 className="text-base md:text-3xl font-semibold text-slate-900">
//                     {item.title}
//                   </h3>

//                   <p className="text-xs md:text-lg text-indigo-600 italic">
//                     {item.quotation}
//                   </p>

//                   <p className="text-xs text-slate-500">
//                     {item.subTagline}
//                   </p>


//                   <p className="text-xs md:text-lg text-slate-500 pt-1">
//                     {item.description}
//                   </p>
//                 </div>

//                 {/* IMAGE RIGHT */}
//                 <div className="w-45 h-[100px] md:w-60 md:h-64 flex-shrink-0">
//                   <img
//                     src={item.image || "/placeholder/service-placeholder.png"}
//                     alt={item.title}
//                     className="w-full h-full "
//                   />
//                 </div>

//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";

const slideContent = [
  {
    title: 'Trainings',
    quotation: 'Learn. Build. Grow.',
    subTagline: 'Where every step strengthens your skills.',
    bullets: ['Industry-driven programs to boost employability.'],
    image: '/hero/traning.png',
    description:
      'Hands-on trainings with mentors and real projects. Learn modern tools and workflows used by industry.',
  },
  {
    title: 'Certifications',
    quotation: 'Empowering You Through Value-Driven Skill Advancement',
    subTagline: 'Get recognised for your skills.',
    image: '/hero/cirtificateimg.png',
    bullets: ['Vendor-aligned certificates to validate expertise.'],
    description:
      'Certification paths designed with industry partners to increase your credibility with employers.',
  },
  {
    title: 'Projects',
    quotation: 'Your Journey to Skill Excellence Starts Here',
    subTagline: 'Portfolio-ready, employer-loved.',
    image: '/hero/projectshero.png',
    bullets: ['Real projects, team collaboration, code reviews.'],
    description:
      'Work on product-like projects to build a portfolio recruiters will notice.',
  },
  {
    title: 'Workshops',
    quotation: 'Learn Faster. Work Smarter. Grow Stronger.',
    image: '/hero/workshopi.png',
    subTagline: 'Practical micro-learning sessions.',
    bullets: ['Weekend workshops led by industry experts.'],
    description:
      'Short, practical workshops focusing on one skill so you can iterate quickly.',
  },
  {
    title: 'CRT & Placement',
    quotation: 'Turn Your Skills Into Success',
    image: '/hero/crthero.png',
    subTagline: 'Interviews, resumes, and soft skills.',
    bullets: ['Mock interviews and placement guidance.'],
    description:
      'Career coaching and mock interviews to boost confidence and result in offers.',
  },
  {
    title: 'Special Demo',
    quotation: 'Design-driven layout (Demo)',
    subTagline: 'Example using uploaded image.',
    bullets: ['Uses the uploaded image provided earlier.'],
    image: '/hero/lodinghero.png',
    description:
      'This item shows how to use a specific `image` property per item. Useful when images are not the same length as content.',
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-slate-50 py-14 md:py-20">
      <div className="max-w-full mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold text-slate-900">
            Services at VAWE Institutes
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl text-slate-600 mt-2">
            Learning paths designed for growth and career readiness.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {slideContent.map((item, index) => (
            <div
              key={index}
              className="bg-[#b8e1ff]/50 rounded-2xl shadow-sm border border-amber-200/40 p-3 md:p-5 hover:shadow-md transition"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-6">

                {/* TEXT LEFT */}
                <div className="flex-1 space-y-1">
                  <h3 className="text-sm sm:text-base md:text-2xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs md:text-lg text-indigo-600 italic">
                    {item.quotation}
                  </p>

                  <p className="text-[10px] sm:text-xs text-slate-500">
                    {item.subTagline}
                  </p>

                  <p className="text-[11px] sm:text-xs md:text-lg text-slate-500 pt-1">
                    {item.description}
                  </p>
                </div>

                {/* IMAGE RIGHT */}
                <div className="w-full h-36 sm:h-44 md:h-48 lg:w-48 lg:h-48 xl:w-60 xl:h-60 flex items-center justify-center flex-shrink-0 mx-auto lg:mx-0">
                  <Image
                    src={item.image || "/placeholder/service-placeholder.png"}
                    alt={item.title}
                    width={240}
                    height={240}
                    className="w-full h-full object-contain"
                  />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
