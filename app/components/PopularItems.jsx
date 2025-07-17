"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import AOS from "aos";


gsap.registerPlugin(ScrollTrigger);

const items = [
    {
        id: 1,
        name: "Creamy Zinger",
        description: "ساندويش زنجر مشبع بالكريمة",
        price: "3.00 JD",
        image: "/creamy zinger.jpg",
    },
    {
        id: 2,
        name: "Salad 100",
        description: "السلطة الخاصة في المطعم",
        price: "3.50 JD",
        image: "/food1.jpg",
    },
    {
        id: 3,
        name: "Fettuccine",
        description: "الفوتشيني بمكوناتنا الخاصة",
        price: "3.00 JD",
        image: "/Fettuccine.jpg",
    },
    {
        id: 4,
        name: "Fettuccine",
        description: "الفوتشيني بمكوناتنا الخاصة",
        price: "3.00 JD",
        image: "/Fettuccine.jpg",
    },
];

const PopularItems = () => {
    const sectionRef = useRef(null);

      useEffect(() => {
        AOS.init({
          duration: 1000, // مدة الأنيميشن
          once: true,     // يشغل الأنيميشن مرة واحدة فقط
        });
      }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-[#f8f8f8] text-gray-900">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
                   
                    <Link
                        href="/menu"
                        className="text-lg md:text-xl px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 hover:text-black transition duration-300 font-semibold"
                    >
                        المنيو كامل
                    </Link>
                     <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
                        الأكثر مبيعًا
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-10">
                    {items.map((item) => (
                        <div
                            key={item.id}
                           data-aos="fade-up"
                            className="item-card w-[300px] bg-[#f9f9f9] rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-52 object-cover"
                            />
                            <div className="p-5">
                                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                                <p className="text-base text-gray-600 mb-3">{item.description}</p>
                                <span className="text-yellow-500 font-bold text-lg">
                                    {item.price}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularItems;
