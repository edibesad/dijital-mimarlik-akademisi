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

    // Image parallax ve fade efekti
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

    // Overlay opacity animasyonu
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

    // Text fade-in ve scale animasyonu
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
        <div ref={imageRef} className="relative w-full h-[100%] transform-gpu">
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

      {/* Blur efekti için overlay */}
      <div className="absolute left-0 top-0 h-screen w-1/4 backdrop-blur-xl z-10">
        {/* Sağ border için beyaz çizgi */}
        <div className="absolute right-0 top-0 h-full w-[1px] bg-white/50"></div>
      </div>

      {/* Text container - Blur alanından bağımsız */}
      <div className="h-screen w-1/2 flex items-center">
        <div ref={textRef} className="relative z-20 pl-4 md:pl-8">
          <p
            className={`${merriweather.className} text-2xl lg:text-4xl font-bold text-white leading-tight tracking-wide`}
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

// <div className="w-full h-[120vh] sticky top-0">
//   <div className="absolute -z-10 h-screen w-full">
//     <motion.div
//       initial={{ color: "white" }}
//       whileInView={{ color: "#404040" }}
//       className="will-change-transform duration-300"
//       viewport={{
//         amount: 1,
//       }}
//     >
//       <div className="h-screen w-full relative">
//         <div className="absolute inset-0 bg-white/50 z-10"></div>
//         <Image
//           src={"/images/example_photos/1.jpg"}
//           width={1920}
//           height={1080}
//           alt="img"
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//           }}
//         />
//       </div>
//     </motion.div>
//   </div>
//   <div className="container mx-auto h-screen flex items-center justify-center lg:text-4xl text-4xl ">
//     <p>{child}</p>
//   </div>
// </div>
