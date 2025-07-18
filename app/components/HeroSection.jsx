"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import CafeSVGParticleBackground from "./CafeBackground";
import AOS from "aos";


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
  className="relative pt-10 overflow-visible bg-[length:100%_100%] bg-[#495e57]"

>

      <CafeSVGParticleBackground />

      <div className="relative mx-auto max-w-[1200px] flex flex-col md:flex-row items-center justify-between max-md:gap-1 p-6 gap-10">
        {/* Left Text Content */}
        <div className="text-white font-serif w-full md:w-1/2 md:pr-8 max-md:pt-10 max-md:pb-[-10px] text-center md:text-right">
          <h1 className="hero-logo text-4xl md:text-5xl font-bold text-center tracking-wide mb-3">
            <span className="text-[#e2262c] text-5xl md:text-6xl">100</span>{" "}
            Restaurant <span className="text-[#e2262c]">&</span> Cafe
          </h1>

          <h3 className="hero-subtitle text-2xl font-bold md:text-3xl text-gray-200 mb-2">
            عمان , اشارة مستشفى الامير حمزة
          </h3>

          <p className="hero-subtitle text-base md:text-lg text-gray-200 leading-relaxed mb-6 px-2 md:px-0">
            مش بس نكهة الأكل، هون بتلقى الذكريات، الدفء، والريحة اللي بتخليك تبتسم.
            <br className="hidden md:block" />
            أهلاً في المكان اللي رح يصير روتينك المفضل.
          </p>

          <div className="hero-buttons font-bold flex flex-col md:flex-row justify-center  items-center gap-4 mt-4 z-10">
            <Link href="tel:+962 7 9292 8000">
              <button className="bg-red-600 cursor-pointer hover:bg-red-700 text-white hover:text-black px-8 py-3 rounded-full text-lg md:text-xl transition-all duration-300 w-[220px]">
                احجز الآن
              </button>
            </Link>

            <Link href="/menu">
              <button className="border cursor-pointer border-white text-white px-8 py-3 rounded-full text-lg md:text-xl bg-[#43524d] hover:bg-white hover:text-black transition-all duration-300 w-[220px]">
                تصفح المنيو
              </button>
            </Link> 
          </div>
        </div>

        {/* Right Image stays last on all devices */}
        <div className="hero-logo relative w-full md:w-auto flex justify-center mt-8 md:mt-0">
          <img
            src="/vipes.jpg"
            alt="100 Restaurant & Cafe Logo"
            className=" w-[280px] h-[360px] md:w-[365px] md:h-[452px] relative bottom-[-80px] object-cover rounded-[1rem] drop-shadow-[10px_4px_20px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
