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
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/30 z-10" />
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
          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col w-full max-w-2xl gap-6 mt-8">
            {/* Title Section - Mobile */}
            <div
              style={{
                opacity: opacity || 0,
                transform: `translateY(${50 - opacity * 50}vh)`,
                transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
              }}
            >
              <h1 className="font-bold text-l text-white mb-4 tracking-tight">
                {element.title}
              </h1>
            </div>

            {/* Image Section - Mobile */}
            <div
              className="w-full aspect-[4/3] relative overflow-hidden rounded-lg shadow-2xl"
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
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                  priority
                />
              </div>
            </div>

            {/* Text Section - Mobile */}
            <div
              style={{
                opacity: opacity || 0,
                transform: `translateY(${50 - opacity * 50}vh)`,
                transition: "transform 0.8s ease-out, opacity 0.8s ease-out",
              }}
            >
              <p className="text-base md:text-lg text-gray-100 leading-relaxed font-light">
                {element.text}
              </p>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-rows-8 grid-cols-9 grid-flow-col max-h-[80vh] w-full gap-8">
            {/* Title Section - Desktop */}
            <div
              className="row-span-2 row-start-2 col-span-3 col-start-2"
              style={{
                opacity: opacity || 0,
                transform: `translateY(${50 - opacity * 50}vh)`,
                transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
              }}
            >
              <h1 className="font-bold text-4xl xl:text-5xl 2xl:text-6xl text-white mb-4 tracking-tight">
                {element.title}
              </h1>
            </div>

            {/* Text Section - Desktop */}
            <div
              className="row-span-3 row-start-5 col-span-3 col-start-2"
              style={{
                opacity: opacity || 0,
                transform: `translateY(${50 - opacity * 50}vh)`,
                transition: "transform 0.8s ease-out, opacity 0.8s ease-out",
              }}
            >
              <p className="text-lg xl:text-xl 2xl:text-2xl text-gray-100 leading-relaxed font-light">
                {element.text}
              </p>
            </div>

            {/* Image Section - Desktop */}
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
                  fill
                  style={{ objectFit: "cover" }}
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
