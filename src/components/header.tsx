"use client";

import React, { useState, useEffect } from "react";

// Import Component
import Nav from "@/components/nav";
import Socials from "@/components/socials";
import NavMobile from "@/components/navMobile";

const Header: React.FC = () => {
  const [bg, setBg] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setBg(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Bersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        bg ? "bg-tertiary h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <h1 className="text-4xl">Farhan</h1>
        </a>
        {/* Nav untuk desktop */}
        <div className="lg:block hidden">
          <Nav />
        </div>
        {/* Socials */}
        <div className="lg:block hidden">
          <Socials />
        </div>
        {/* NavMobile untuk perangkat mobile */}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
