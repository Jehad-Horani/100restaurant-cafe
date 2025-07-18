// components/BreakfastBuffetSection.jsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function BreakfastBuffetSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".buffet-title", {
        opacity: 0,
        y: -30,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.from(".buffet-price", {
        opacity: 0,
        scale: 0.8,
        delay: 0.3,
        duration: 1.2,
        ease: "back.out(1.7)",
      });

      gsap.from(".buffet-time", {
        opacity: 0,
        y: 20,
        delay: 0.6,
        duration: 1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-10 px-6 md:px-16 bg-[#f7f2ef] overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/gallery/2.jpg"
          alt="Buffet Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-red-100">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 buffet-title leading-snug">
          إسألنا عن<br />
          <span className="text-black">بوفيه الإفطار الصباحي</span>
        </h2>

        <p className="mt-4 text-lg md:text-xl text-gray-800 buffet-time">
          من الساعة <span className="font-bold">9:00 صباحاً</span> إلى{" "}
          <span className="font-bold">1:00 مساءً</span>
        </p>

        <div className="mt-6 buffet-price">
          <span className="text-4xl md:text-5xl font-extrabold text-red-600">
            فقط 5 دنانير
          </span>
          <p className="text-sm text-gray-600 mt-1">شامل الخدمة والضريبة</p>
        </div>

        <div className="mt-8 text-sm md:text-base text-gray-700">
          ✨ كل ما لذ وطاب بانتظاركم ✨
        </div>
      </div>
    </section>
  );
}
