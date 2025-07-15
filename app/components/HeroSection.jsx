"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

import CafeParticleBackground from "./CafeBackground";
import CafeSVGParticleBackground from "./CafeBackground";

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
    <>
    <section
      ref={heroRef}
      className="relative p-0 pt-10 bg-[#495e57] overflow-visible"
      >
        <CafeSVGParticleBackground/>

      <div className="relative mx-auto my-0 max-w-[1200px] flex flex-wrap items-center justify-around p-[2rem] gap-[100px] max-md:gap-0 max-md:pl-[100px]">

        <div className="text-white  pr-[2rem] font-serif max-w-[650px]">
          <h1 className="text-5xl mb-[0.5rem] font-bold tracking-[2px] text-center"><span className="text-[#e2262c] text-6xl">100</span> Restaurant <span className="text-[#e2262c]" >&</span> Cafe</h1>
          <h3 className="hero-subtitle text-[1.75rem] mb-[1rem] text-right text-gray-200 ">عمان , اشارة مستشفى الامير حمزة</h3>

          <p className="hero-subtitle    text-right text-[1.25rem] leading-relaxed mb-[1.5rem] text-gray-200 ">
            مش بس نكهة الاكل، هون بتلقى الذكريات، الدفء، والريحة اللي بتخليك تبتسم <br />
            أهلاً في المكان اللي رح يصير روتينك المفضل
          </p>

          <div className="hero-buttons flex flex-col justify-center items-center md:flex-row gap-6 mt-10 z-10">
            <Link href="/resrvation">
              <button className="bg-[#e2262c] cursor-pointer hover:bg-[#e2262cd7] text-white px-8 py-4 rounded-full text-xl transition-all duration-300">
                احجز الآن
              </button>
            </Link>

            <Link href="/menu">
              <button className="border cursor-pointer border-white text-white px-8 py-4 rounded-full text-xl bg-[#43524d] hover:bg-white hover:text-black transition-all duration-300">
                تصفح المنيو
              </button>
            </Link>
          </div>
        </div>





        <img
          src="/hero pic.jpg"
          alt="100 Restaurant & Cafe Logo"
          className="w-[385px] h-[452px] object-cover rounded-[1rem] relative right-[1.75rem] bottom-[-80px] drop-shadow-[10px_4px_20px_rgba(0,0,0,0.5)]"
        />


      </div>
    </section>
    </>
  );
};

export default HeroSection;
