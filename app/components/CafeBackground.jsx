"use client";
import Particles from "react-tsparticles";
import { useCallback, useRef } from "react";
import { loadSlim } from "tsparticles-slim";

export default function SmoothCafeParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particleRef = useRef(null);
  if (!particleRef.current) {
    particleRef.current = (
      <Particles
        id="smooth-cafe-particles"
        init={particlesInit}
        className="absolute inset-0 z-0 pointer-events-none"
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          detectRetina: true,
          particles: {
            number: {
              value: 40,
              density: { enable: true, area: 900 },
              // هنا راح نوزع الجزيئات على نوعين بنفس العدد
            },
            shape: {
              type: "image",
              image: [
                { src: "/coffee-bean.svg", width: 24, height: 24 },
                { src: "/coffee-cup.svg", width: 28, height: 28 },
              ],
            },
            opacity: {
              value: 0.6,
              random: { enable: true, minimumValue: 0.35 },
              anim: {
                enable: true,
                speed: 0.25,
                opacity_min: 0.3,
                sync: false,
              },
            },
            size: {
              value: 18,
              random: { enable: true, minimumValue: 12 },
              anim: {
                enable: true,
                speed: 2,
                size_min: 12,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 0.3,          // حركة بطيئة وناعمة جداً
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" },
              bounce: false,
              attract: { enable: false },
            },
            links: {
              enable: true,
              distance: 110,
              color: "#A67B5B",
              opacity: 0.15,
              width: 1,
              triangles: { enable: false },
            },
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "grab",
                parallax: { enable: true, force: 10, smooth: 20 },
              },
              onClick: { enable: false },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                links: { opacity: 0.5 },
              },
              repulse: { distance: 0 },
            },
          },
          detectRetina: true,
          smooth: true,
        }}
      />
    );
  }

  return particleRef.current;
}
