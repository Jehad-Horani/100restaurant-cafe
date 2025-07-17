import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PopularItems from "./components/PopularItems";
import GallerySection from "./components/GallerySection";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div>
        <HeroSection/>
        <PopularItems/>
        <AboutSection/>
        <Testimonials/>
        <ContactSection/>
        <GallerySection/>
    </div>
  );
}
