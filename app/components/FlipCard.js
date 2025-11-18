"use client";

import { useState } from "react";
import {
  Clock,
  TrendingUp,
  Users,
  Star,
  ArrowRight,
  CheckCircle2,
  Zap,
  Code,
  BarChart3,
  Megaphone,
  Briefcase,
} from "lucide-react";

export default function FlipCard({ course, className = "", variant = "default" }) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Icon mapping
  const iconMap = { Code, BarChart3, Megaphone, Briefcase };
  const Icon = iconMap[course.iconName] || Code;

  const variants = {
    default: "border-t-[5px] border-[var(--navbar-hero)]/60 hover:border-t-[7px] hover:shadow-[var(--navbar-hero)]/30",
    blue: "border-t-[5px] border-blue-400/60 hover:border-t-[7px] hover:shadow-blue-400/30",
    pink: "border-t-[5px] border-pink-400/60 hover:border-t-[7px] hover:shadow-pink-400/30",
    yellow: "border-t-[5px] border-yellow-400/60 hover:border-t-[7px] hover:shadow-yellow-400/30",
    green: "border-t-[5px] border-green-400/60 hover:border-t-[7px] hover:shadow-green-400/30",
  };

  return (
    <div
      className={`relative w-full h-[500px] sm:h-96  md:h-[460px] lg:h-[28rem] perspective-1000 cursor-pointer ${className}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* Card Inner (3D rotation container) */}
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div
          className={`absolute inset-0 w-full h-full backface-hidden ${variants[variant]} rounded-2xl overflow-hidden bg-white shadow-lg`}
        >
          <div className="relative z-10 p-6 h-full flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#A8DADC] to-[#F4A7B9] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
              <Icon className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-[var(--text)] mb-2">{course.title}</h3>
            <p className="text-gray-600 text-base mb-4">{course.description}</p>

            <div className="space-y-2 text-gray-500 text-sm">
              <div className="flex items-center justify-center">
                <Clock className="w-4 h-4 mr-2 text-[#A8DADC]" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center justify-center">
                <TrendingUp className="w-4 h-4 mr-2 text-[#F4A7B9]" />
                <span>{course.level}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 ${variants[variant]} rounded-2xl overflow-hidden bg-white shadow-lg`}
        >
          <div className="relative z-10 p-6 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--navbar-hero)] to-[var(--button)] flex items-center justify-center mr-3 shadow-lg">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text)]">{course.title}</h3>
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[color-mix(in_oklab,var(--navbar-hero)_15%,white)] rounded-lg p-2 text-center">
                    <Clock className="w-5 h-5 text-[var(--navbar-hero)] mx-auto mb-1" />
                    <div className="text-sm font-semibold text-[var(--text)]">{course.duration}</div>
                    <div className="text-xs text-gray-600">Duration</div>
                  </div>
                  <div className="bg-[color-mix(in_oklab,var(--button)_15%,white)] rounded-lg p-2 text-center">
                    <TrendingUp className="w-5 h-5 text-[var(--button)] mx-auto mb-1" />
                    <div className="text-sm font-semibold text-[var(--text)]">{course.level}</div>
                    <div className="text-xs text-gray-600">Level</div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[var(--text)] flex items-center mb-2">
                    <Zap className="w-4 h-4 text-[var(--navbar-hero)] mr-2" />
                    What You&apos;ll Learn
                  </h4>
                  <ul className="space-y-1">
                    {course.features?.map((f, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-[var(--success)] mr-2" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
