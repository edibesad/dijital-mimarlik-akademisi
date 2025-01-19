import React from "react";
import Image from "next/image";

interface ScrollSliderElementModel {
  title: string;
  text: string;
  imgPath: string;
  backgroundImgPath: string;
}

interface ScrollSliderElementProps {
  element: ScrollSliderElementModel;
  opacity: number;
}

const ScrollSliderElement = ({
  element,
  opacity,
}: ScrollSliderElementProps) => {
  return (
    <div
      className="absolute inset-0 w-full h-screen overflow-hidden"
      style={{
        visibility: opacity > 0 ? "visible" : "hidden",
        opacity: opacity || 0,
        pointerEvents: opacity > 0 ? "auto" : "none",
      }}
    >
      {/* Background Image Container with Enhanced Dimming Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/30 z-10" />{" "}
        {/* Darkening overlay */}
        <Image
          src={element.backgroundImgPath}
          alt={element.title}
          fill
          style={{ objectFit: "cover" }}
          className="h-full w-full object-cover filter brightness-75 contrast-125"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative h-full w-full flex items-center z-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 flex justify-center items-center">
          <div className="grid grid-rows-8 grid-cols-9 grid-flow-col max-h-[80vh] w-full gap-8">
            {/* Title Section */}
            <div
              className="row-span-2 row-start-2 col-span-3 col-start-2"
              style={{
                opacity: opacity || 0,
                transform: `translateY(${50 - opacity * 50}vh)`,
                transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
              }}
            >
              <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl text-white mb-4 tracking-tight">
                {element.title}
              </h1>
            </div>

            {/* Text Section */}
            <div
              className="row-span-3 row-start-5 col-span-3 col-start-2"
              style={{
                opacity: opacity || 0,
                transform: `translateY(${50 - opacity * 50}vh)`,
                transition: "transform 0.8s ease-out, opacity 0.8s ease-out",
              }}
            >
              <p className="text-base lg:text-2xl text-gray-100 leading-relaxed font-light">
                {element.text}
              </p>
            </div>

            {/* Image Section */}
            <div
              className="row-span-6 row-start-2 col-span-3 col-start-6 overflow-hidden rounded-lg shadow-2xl"
              style={{
                opacity: opacity || 0,
                transform: `translateY(${-50 + opacity * 50}vh)`,
                transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
              }}
            >
              <div className="h-full w-full relative hover:scale-105 transition-transform duration-500">
                <Image
                  src={element.imgPath}
                  alt={element.title}
                  style={{ objectFit: "cover" }}
                  fill
                  className="rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollSliderElement;
