"use client";

import { useEffect, useRef, useState } from "react";
import MarqueeElement from "./marquee_element";

const images = Array.from(
  { length: 8 },
  (_, i) => `/images/example_photos/${i + 1}.jpg`
);

export default function ExamplePhotos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [xTranslate, setXTranslate] = useState(0);
  const [direction, setDirection] = useState(-1);

  useEffect(() => {
    if (!marqueeRef.current) return;

    let animationFrameId: number;
    let lastTimestamp: number;
    const speed = 0.05;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      
      setXTranslate((prev) => {
        const rect = marqueeRef.current!.getBoundingClientRect();
        const maxTranslate = Math.ceil(rect.width / 2);

        if (prev <= -maxTranslate) {
          setDirection(1);
        }
        if (prev >= 0) {
          setDirection(-1);
        }

        return prev + direction * speed * deltaTime;
      });

      lastTimestamp = timestamp;
      animationFrameId = requestAnimationFrame(animate);
    };

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [direction]);

  return (
    <div className="overflow-x-clip bg-gradient-to-r from-black to-[#737373]">
      <div className="relative h-[110vh]">
        <div className="sticky top-0 h-screen" ref={containerRef}>
          {/* Heading Container */}
          <div className="absolute z-20 w-full top-[10%] px-4 sm:px-6 md:px-8">
            <h1 className="text-white text-center font-bold
              text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
              max-w-4xl mx-auto
              leading-tight sm:leading-tight md:leading-tight
              tracking-tight"
            >
              HAYALİNİZİ ESTETİK VE TEKNİKLE HARMANLAYARAK PROJELERİNİZE HAYAT
              VERİN
            </h1>
          </div>

          {/* Images Container */}
          <div
            ref={marqueeRef}
            style={{
              transform: `translateX(${xTranslate}px)`,
              transition: 'transform 0.3s ease-out'
            }}
            className="flex items-center h-screen"
          >
            {/* Double the images for smooth infinite scroll */}
            {[...images, ...images].map((img, index) => (
              <MarqueeElement 
                key={`${img}-${index}`} 
                img={img}
              />
            ))}
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#737373] to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </div>
  );
}