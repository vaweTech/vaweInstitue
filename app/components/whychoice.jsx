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
      gradient: "from-orange-50 via-orange-100 to-orange-200",
      shadow: "rgba(251, 146, 60, 0.35)",
    },
    {
      value: "24/7 Support Access",
      icon: <MdSupportAgent className="text-5xl text-sky-500" />,
      gradient: "from-sky-50 via-sky-100 to-sky-200",
      shadow: "rgba(56, 189, 248, 0.3)",
    },
    {
      value: "5000+ Alumni Network",
      icon: <GiNetworkBars className="text-5xl text-green-500" />,
      gradient: "from-green-50 via-green-100 to-green-200",
      shadow: "rgba(74, 222, 128, 0.35)",
    },
    {
      value: "95% Job Placement",
      icon: <IoMdBriefcase className="text-5xl text-rose-500" />,
      gradient: "from-rose-50 via-rose-100 to-rose-200",
      shadow: "rgba(244, 114, 182, 0.35)",
    },
  ];

  return (
    <main className="flex flex-col items-center mb-[-64px] justify-center lg:mt-[-450px] md:mt-[-350px] mt-[-250px] px-4 py-12 sm:px-8 sm:py-16 bg-[#edfcfc]">
      {/* HEADER SECTION */}
      <div className="w-full max-w-[650px] flex flex-col justify-center text-center mb-12">
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold leading-tight mb-4 text-gray-800">
          Why Choose Our Courses
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl text-gray-700 mb-6 leading-relaxed">
          Discover the advantages of learning with us — flexible options, expert
          instructors, certifications, and proven career success.
        </p>
        
      </div>

      {/* FEATURE CARDS */}
      <div className="w-full lg:w-[90%] grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 mb-12 sm:mb-16 justify-items-center">
        {features.map((item, index) => (
          <div
            key={index}
            className="relative flex w-full max-w-[460px] min-h-[200px] md:h-[220px] bg-white shadow-md rounded-md overflow-hidden transition-all duration-300 hover:shadow-xl group"
          >
            {/* Text content */}
            <div className="w-full flex flex-col justify-between p-5 sm:p-6 md:p-7 z-10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 sm:p-3 bg-gray-100 rounded-full">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-600 text-xs sm:text-sm mt-3 sm:mt-4 leading-relaxed">
                {item.description}
              </p>

              <a
                href="#"
                className="text-orange-500 font-medium mt-3 sm:mt-4 text-xs sm:text-sm hover:underline"
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

      {/* STATS DIAMONDS */}
      <div className="w-full lg:w-[80%] mt-[-5px] grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-10 place-items-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center text-center"
          >
            <div className="relative w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] md:w-[140px] md:h-[140px] flex items-center justify-center">
              <div
                className="absolute inset-0 rotate-45 rounded-xl bg-slate-900/5 translate-y-3 scale-95 blur-[1px] transition-transform duration-300 group-hover:translate-y-4 group-hover:scale-100"
                aria-hidden="true"
              ></div>
              <div
                style={{ boxShadow: `0 22px 38px ${stat.shadow}` }}
                className={`relative w-full h-full flex items-center justify-center origin-center rotate-45 bg-gradient-to-br ${stat.gradient} border border-white/40 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-105`}
              >
                <div className="flex flex-col items-center justify-center -rotate-45">
                  {stat.icon}
                </div>
              </div>
            </div>
            <p className="text-gray-800 font-semibold mt-6 sm:mt-8 leading-tight text-xs sm:text-sm max-w-[120px]">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
