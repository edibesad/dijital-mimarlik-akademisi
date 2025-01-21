"use client";

import { useEffect, useRef, useState } from "react";
import MarqueeElement from "./marquee_element";

const images = Array.from(
  { length: 8 },
  (_, i) => `/images/example_photos/${i + 1}.jpg`
);

export default function ExamplePhotos() {
  const ref = useRef<HTMLDivElement>(null);
  const [xTranslate, setXTranslate] = useState(0);
  const [direction, setDirection] = useState(-1);

  useEffect(() => {
    if (!ref.current) return;

    const interval = setInterval(() => {
      setXTranslate((prev) => {
        const rect = ref.current!.getBoundingClientRect();

        if (prev <= -Math.ceil(rect.width / 2)) {
          setDirection(1);
        }
        if (prev >= 0) {
          setDirection(-1);
        }

        return prev + direction * 1;
      });
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [direction]);

  return (
    <div className="overflow-x-clip bg-gradient-to-r from-black to-[#737373]">
      <div className="relative h-[110vh] ">
        <div className="sticky top-0 h-screen">
          <h1
            className="text-2xl md:text-4xl absolute z-20 text-center text-white"
            style={{
              top: "20%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            HAYALİNİZİ ESTETİK VE TEKNİKLE HARMANLAYARAK PROJELERİNİZE HAYAT
            VERİN
          </h1>
          <div
            ref={ref}
            style={{ transform: `translateX(${xTranslate}px)` }}
            className="flex items-center h-screen"
          >
            {images.map((img, index) => (
              <MarqueeElement key={index} img={img} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
