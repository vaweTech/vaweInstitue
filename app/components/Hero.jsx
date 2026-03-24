"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full py-10 md:py-14 px-4 flex items-center justify-center">
      <div className="bg-white w-full max-w-[1100px] rounded-3xl shadow-xl p-6 md:p-10 lg:p-12 relative overflow-hidden lg:min-h-[520px]">

        {/* Main Hero Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left Text */}
          <div className="text-center md:text-left">
            <div className="mb-4 flex flex-col items-center md:items-start">
              <Image
                src="/logo.png"
                alt="VAWE"
                width={220}
                height={120}
                className="w-[200px] h-auto md:w-[220px]"
                priority
              />
              <span className="mt-1 text-orange-600 font-bold font-sans tracking-wide">
                VAWE INSTITUTE
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E2A78] mb-4 leading-tight">
              Empowering You Through Value-Driven Skill Advancement
            </h2>

            <p className="text-gray-800 mb-6">
              Learn in-demand technical skills through real-world workshops, guided
              training, and industry-aligned certifications.
            </p>

            <button className="bg-[#0A1A76] text-white px-7 py-3 rounded-lg shadow font-medium">
              Our All Course
            </button>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center md:justify-end">
            <Image
              src="/hero/traning.png"
              alt="Student"
              width={500}
              height={500}
              sizes="(min-width: 1024px) 500px, (min-width: 768px) 420px, 90vw"
              className="z-20 w-full h-auto max-w-[520px]"
            />

            {/* Decorative Blue Shapes */}
            <div className="absolute w-[280px] h-[260px] bg-[#0A1A76] rounded-tl-full bottom-0 right-0 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}