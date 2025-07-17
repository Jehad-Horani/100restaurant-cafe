"use client";

import { useState,useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import AOS from "aos";

  
  const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الأنيميشن
      once: true,     // يشغل الأنيميشن مرة واحدة فقط
    });
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header
      className={`fixed top-0 left-1/2 -translate-x-1/2 w-11/12 md:w-1/2 rounded-b-4xl z-50 transition-all duration-300 bg-gray-100 shadow-lg`}
    >
      <nav className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 text-black">
        {/* Logo */}
        <Link href="/"  data-aos="fade-down">
          <Image src="/logo1.png" width={50} height={50} alt="logo" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-lg text-black">
          <Link href="/"  data-aos="fade-down"  className="hover:text-red-400 transition">
            الرئيسية
          </Link>
          <Link href="/menu"  data-aos="fade-down" className="hover:text-red-400 transition">
            المنيو
          </Link>
          <Link href="tel:+962 7 9292 8000"  data-aos="fade-down" className="hover:text-red-400 transition">
            الحجز
          </Link>
          <a href="/#contact"  data-aos="fade-down" className="hover:text-red-400 transition">
            تواصل معنا
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black transition"
          onClick={toggleMenu}
          aria-label="Toggle menu"  data-aos="fade-down"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
        }`}
      >
        <div className="flex flex-col items-center gap-4 pt-2 pb-4 text-lg text-black">
          <Link href="/" onClick={toggleMenu} className="hover:text-pink-400">
            الرئيسية
          </Link>
          <Link href="/menu" onClick={toggleMenu} className="hover:text-pink-400">
            المنيو
          </Link>
          <Link href="/resrvation" onClick={toggleMenu} className="hover:text-pink-400">
            الحجز
          </Link>
          <a href="#contact" onClick={toggleMenu} className="hover:text-pink-400">
            تواصل معنا
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
