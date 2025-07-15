"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const AboutSection = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".about-text", {
        opacity: 0,
        x: -50,
        delay: 0.3,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".about-img", {
        opacity: 0,
        x: 50,
        delay: 0.5,
        duration: 1,
        ease: "power3.out",
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={aboutRef}
      className="py-20 px-6 md:px-16 bg-[#f9f4ef] pt-30 text-[#1c1c1c]"
    >
        
      <h2 className="about-title text-4xl md:text-5xl font-bold text-center mb-12">
        عن المطعم
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* النص */}
        <div className="about-text md:w-1/2 text-lg leading-relaxed">
          <p>
            في قلب عمان، يجمع 100 Restaurant & Cafe بين فخامة المكان، وسحر النكهات.
            سواء كنت جاي تشرب قهوتك، أو تقضي وقت مع أصدقائك، 100 هو عنوانك الجديد.
          </p>
        </div>

        {/* الصورة */}
        <div className="about-img md:w-1/2">
          <img
            src="/about-image.jpg" // حط صورة مناسبة لمكان المطعم
            alt="Inside the cafe"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
