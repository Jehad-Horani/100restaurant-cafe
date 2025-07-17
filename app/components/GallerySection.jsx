"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GallerySection = () => {
  const [shuffledItems, setShuffledItems] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const images = Array.from({ length: 21 }, (_, i) => ({
      type: "image",
      src: `/gallery/${i + 1}.jpg`,
    }));

    const videos = [1, 2, 3].map((i) => ({
      type: "video",
      src: `/gallery/vid${i}.mp4`,
    }));

    const allItems = [...images, ...videos];

    // shuffle فقط في المتصفح
    for (let i = allItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allItems[i], allItems[j]] = [allItems[j], allItems[i]];
    }

    setShuffledItems(allItems);
  }, []);

  return (
    <section className="bg-[#f8f8f8] md:px-15 px-5 py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="md:text-6xl text-4xl font-bold mb-5 text-gray-900">
        صور وأجواء 
        </h2>
        <h1 className="md:text-6xl text-4xl font-bold mb-10 text-gray-900"> 100 Restaurant & Cafe</h1>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {shuffledItems.map((item, index) => (
            <div key={index} data-aos="fade-up">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`Gallery ${index + 1}`}
                  className="rounded-xl shadow-md object-cover h-48 md:h-64 w-full transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <video
                  src={item.src}
                  className="rounded-xl shadow-md object-cover h-48 md:h-64 w-full"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
