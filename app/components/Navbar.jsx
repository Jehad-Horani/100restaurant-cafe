"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-100 rounded-b-4xl w-1/2 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[#0f0f0f]/70 shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-xl mx-auto flex items-center justify-center gap-30 px-6 py-4">
        {/* Logo */}
        <Link href="/">
            <Image
            src="/logo1.png"
            width={"50"}
            height={"50"}
            alt="logo.png"
            >

            </Image>
          
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-white text-lg">
          <Link href="/" className="hover:text-pink-400 transition">
            الرئيسية
          </Link>
          <Link href="/menu" className="hover:text-pink-400 transition">
            المنيو
          </Link>
          <Link href="/resrvation" className="hover:text-pink-400 transition">
            الحجز
          </Link>
          <a href="#contact" className="hover:text-pink-400 transition">
            تواصل معنا
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
