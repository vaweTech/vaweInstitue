"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const logos = [
  { src: "/logos/microsoft.png", alt: "Microsoft" },
  { src: "/logos/bosch.png", alt: "Bosch" },
  { src: "/logos/cisco.png", alt: "Cisco" },
  { src: "/logos/hp.png", alt: "HP" },
  { src: "/logos/aicte.png", alt: "AICTE" },
  { src: "/logos/ibm.png", alt: "IBM" },
  { src: "/logos/apsche.png", alt: "APSCHE" },
  { src: "/logos/postal.png", alt: "Postal Department" }
];

export default function PartnerMarquee({ edge = "both" }) {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    let scroll = 0;
    const speed = 0.5;

    let rafId;
    const loop = () => {
      scroll -= speed;
      if (Math.abs(scroll) >= el.scrollWidth / 2) scroll = 0;
      el.style.transform = `translateX(${scroll}px)`;
      rafId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const maskForEdge = () => {
    switch (edge) {
      case "left":
        return {
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 100%)",
        };
      case "right":
        return {
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, black 88%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, black 0%, black 88%, transparent 100%)",
        };
      case "none":
        return {
          WebkitMaskImage: "none",
          maskImage: "none",
        };
      case "both":
      default:
        return {
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 25%, black 85%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 25%, black 85%, transparent 100%)",
        };
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden py-4 border-y border-gray-200" style={{ backgroundColor: 'var(--background)' }}>
      <div
        className="relative w-full overflow-hidden"
        style={maskForEdge()}
      >
        <div ref={marqueeRef} className="flex gap-6 sm:gap-8 md:gap-10 will-change-transform">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex-shrink-0 lg:h-[100px] w-24 h-12 sm:w-28 sm:h-14 md:w-32 md:h-16 relative">
              <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}








