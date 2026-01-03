"use client";

import { memo } from "react";
import Image from "next/image";
import {
  Clock,
  TrendingUp,
  CheckCircle2,
  Zap,
  Code,
  BarChart3,
  Megaphone,
  Briefcase,
} from "lucide-react";

const ICON_MAP = { Code, BarChart3, Megaphone, Briefcase };
const SINGLE_BORDER_STYLE =
  "border-t-[5px] border-[#221d55] hover:border-t-[7px] hover:shadow-[#f89e2b]/30";
const VARIANTS = {
  default: SINGLE_BORDER_STYLE,
};

function FlipCard({ course, className = "", variant = "default" }) {
  const Icon = ICON_MAP[course.iconName] || Code;
  const cardVariant = VARIANTS[variant] || VARIANTS.default;
  const features = course.features ?? [];

  return (
    <div
      className={`group relative w-full h-[500px] sm:h-96 md:h-[460px] lg:h-[28rem] perspective-1000 cursor-pointer focus-visible:outline-none ${className}`}
      aria-label={`${course.title} course card`}
      tabIndex={0}
    >
      {/* Card Inner (3D rotation container) */}
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d [transform:rotateY(0deg)] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]`}
      >
        {/* Front Side */}
        <div
          className={`absolute inset-0 w-full h-full backface-hidden ${cardVariant} rounded-2xl overflow-hidden bg-white shadow-lg`}
        >
          <div className="relative z-10 p-6 h-full flex flex-col text-left">
            <div className="relative w-full h-48 sm:h-52 rounded-3xl overflow-hidden mb-6 shadow-2xl border border-white/40">
              {course.image ? (
                <Image
                  src={course.image}
                  alt={`${course.title} illustration`}
                  fill
                  sizes="320px"
                  className="object-cover scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="w-full h-full bg-[#f89e2b] flex items-center justify-center">
                  <Icon className="w-16 h-16 text-white" />
                </div>
              )}
            </div>

            <h3 className="text-2xl font-bold text-[var(--text)] mb-3">{course.title}</h3>
            <p className="text-gray-600 text-base sm:text-lg mb-5 flex-1">{course.description}</p>

            <div className="space-y-2 text-gray-500 text-sm">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-[#A8DADC]" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-2 text-[#F4A7B9]" />
                <span>{course.level}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 ${cardVariant} rounded-2xl overflow-hidden bg-white shadow-lg`}
        >
          <div className="relative z-10 p-6 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-[var(--navbar-hero)] flex items-center justify-center mr-3 shadow-lg">
                  {course.image ? (
                    <Image
                      src={course.image}
                      alt={`${course.title} thumbnail`}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  ) : (
                    <Icon className="w-6 h-6 text-white" />
                  )}
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
                    {features.map((feature, index) => (
                      <li key={feature + index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-[var(--success)] mr-2" />
                        {feature}
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

export default memo(FlipCard);
