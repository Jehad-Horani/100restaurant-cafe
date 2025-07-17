"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-content", {
        opacity: 0,
        x: -50,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 80%",
        },
      });

      gsap.from(".about-image", {
        opacity: 0,
        x: 50,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-image",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#fdfdfd] py-10 overflow-hidden text-gray-900">
          <h2 className="text-4xl md:text-5xl font-bold pb-20 text-center font-serif ">حكايتنا </h2>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-around gap-12">
        <div className="about-content md:w-1/2 text-center md:text-right">
          <h3 className="text-3xl md:text-4xl font-bold mb-6"> 100 Restaurant & Cafe</h3>
          <p className="text-lg leading-relaxed text-gray-700">
             هو أكثر من مجرد مكان للأكل – إنه مساحة تجمع
            بين النكهات الفريدة، الأجواء الراقية، وجلسات الأرجيلة المريحة.
            تأسس المطعم ليقدم تجربة متكاملة للذوق والراحة في قلب المدينة.
          </p>
        </div>

        <div className="about-image md:w-1/4">
          <img
            src="/about-image.jpg"
            alt="عن المطعم"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
