"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./Navbar"), {
  ssr: false,
  loading: () => (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-[70px] bg-[#221d55]"
      aria-hidden="true"
    />
  ),
});

export default function NavbarLoader() {
  return <Navbar />;
}
