"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Merriweather } from "next/font/google";
import InformationTextModel from "./InformationTextModel";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

interface InformationTextProps {
  element: InformationTextModel;
  index: number;
}

const InformationText = ({ element, index }: InformationTextProps) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const image = imageRef.current;
    const textElement = textRef.current;
    const overlay = overlayRef.current;

    // Image parallax and fade effect
    gsap.to(image, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Overlay opacity animation
    gsap.fromTo(
      overlay,
      { opacity: 0 },
      {
        opacity: 0.5,
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "center center",
          scrub: true,
        },
      }
    );

    // Text fade-in and scale animation
    gsap.fromTo(
      textElement,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "center center",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full h-screen sticky top-0">
      <div className="absolute inset-0 w-full h-screen overflow-hidden -z-10">
        <div ref={imageRef} className="relative w-full h-full transform-gpu">
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-black opacity-30 transition-opacity z-10"
          />
          <Image
            src={element.imageSrc}
            alt={`Parallax Image ${index}`}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      </div>

      {/* Blur effect overlay - Responsive width */}
      <div className="absolute left-0 top-0 h-screen backdrop-blur-xl z-10
        w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        {/* Right border white line */}
        <div className="absolute right-0 top-0 h-full w-[1px] bg-white/50"></div>
      </div>

      {/* Text container - Independent from blur area */}
      <div className="h-screen flex items-center">
        <div ref={textRef} className="relative z-20 w-full px-4 sm:px-6 md:px-8">
          <p
            className={`${
              merriweather.className
            } text-white leading-tight tracking-wide
            text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold
            max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%]
            mx-auto sm:mx-0 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-24`}
          >
            {element.text}
          </p>
          <div
            className="absolute inset-0 blur-sm bg-black/20 -z-10"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export default InformationText;