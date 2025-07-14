"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-logo", {
        opacity: 0,
        y: -20,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 30,
        delay: 0.6,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".hero-buttons", {
        opacity: 0,
        y: 20,
        delay: 0.9,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
      });

      gsap.to(".smoke", {
        y: -120,
        opacity: 0,
        repeat: -1,
        duration: 6,
        ease: "power1.out",
        stagger: {
          amount: 3,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-row-reverse items-stretch text-white overflow-hidden"
    >
      <div className="w-1/2 bg-[#fdfaf6] relative flex flex-col items-center justify-center px-8">
      

        <div className="hero-logo relative z-10 mb-6">
          <img
            src="/logo.png"
            alt="100 Restaurant & Cafe Logo"
            className="w-96 md:w-[28rem] drop-shadow-[10px_4px_20px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>

      {/* ✅ القسم الأيسر - نص + أزرار */}
      <div className="w-1/2 bg-[#1c1c1c] flex flex-col items-center justify-center px-8 py-16 text-center">
        <p className="hero-subtitle text-2xl md:text-4xl text-gray-200 font-semibold leading-relaxed z-10 max-w-xl">
          مش بس نكهة القهوة، هون تلقى الذكريات، الدفء، والريحة اللي بتخليك تبتسم…
          أهلاً في المكان اللي رح يصير روتينك المفضل
        </p>

        <div className="hero-buttons flex flex-col md:flex-row gap-6 mt-10 z-10">
          <Link href="/resrvation">
            <button className="bg-[#e2262c] cursor-pointer hover:bg-[#e2262cd7] text-white px-8 py-4 rounded-full text-xl transition-all duration-300">
              احجز الآن
            </button>
          </Link>

          <Link href="/menu">
            <button className="border cursor-pointer border-white text-white px-8 py-4 rounded-full text-xl hover:bg-white hover:text-black transition-all duration-300">
              تصفح المنيو
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
