import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PopularItems from "./components/PopularItems";
import GallerySection from "./components/GallerySection";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import BreakfastBuffet from "./components/BreakfastBuffet";

export default function Home() {
  return (
    <div>
        <HeroSection/>
        <PopularItems/>
        <AboutSection/>
        <BreakfastBuffet/>
        <ContactSection/>
        <GallerySection/>
    </div>
  );
}
