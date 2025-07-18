"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function BreakfastBuffetSection() {
  const sectionRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState(null);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const open = new Date();
      const close = new Date();
      open.setHours(9, 0, 0, 0);
      close.setHours(13, 0, 0, 0);

      if (now < open) {
        // قبل الساعة 9
        const diff = open - now;
        setLabel("الوقت المتبقي لفتح البوفيه:");
        updateTimer(diff);
      } else if (now >= open && now < close) {
        // بين 9 و 1
        const diff = close - now;
        setLabel("الوقت المتبقي لانتهاء البوفيه:");
        updateTimer(diff);
      } else {
        // بعد 1
        setTimeLeft("انتهى البوفيه ");
        setLabel("");
      }
    };

    const updateTimer = (diff) => {
      const hours = Math.floor(diff / 1000 / 60 / 60);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(
        `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

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

      gsap.from(".buffet-countdown", {
        opacity: 0,
        y: 10,
        delay: 1,
        duration: 1,
        ease: "power1.out",
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

        {/* العداد التفاعلي */}
        {timeLeft && (
          <div className="mt-4 buffet-countdown">
            {label && (
              <p className="text-sm text-gray-600 mb-1">{label}</p>
            )}
            <div className="text-2xl md:text-3xl font-mono font-bold text-emerald-800 bg-white px-4 py-2 rounded-xl inline-block shadow-md">
              {timeLeft}
            </div>
          </div>
        )}

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
