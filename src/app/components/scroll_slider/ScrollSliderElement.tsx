import ScrollSliderElementModel from "./ScrollSliderElementModel";
import Image from "next/image";

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
      className="absolute inset-0 w-full h-screen"
      style={{
        opacity: opacity || 0,
        pointerEvents: opacity > 0 ? "auto" : "none",
      }}
    >
      {/* Background Image Container with Dimming Overlay */}
      <div className="absolute inset-0 w-full h-full ">
        {/* Image */}
        <Image
          src={element.backgroundImgPath}
          alt={element.title}
          layout="fill"
          objectFit="cover"
          className="h-full w-full object-cover filter grayscale contrast-100 opacity-50"
          priority
        />
      </div>

      {/* Content Container */}
      <div
        className="relative h-full w-full flex items-center"
        style={{
          opacity: opacity ? opacity : 0,
          transform: opacity
            ? `translateY(${50 - opacity * 50}vh)`
            : `translateY(0vh)`,
        }}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-16 flex justify-center items-center text-black">
          <div className="grid grid-rows-8 grid-cols-9 grid-flow-col max-h-[80vh] w-full">
            <div className="row-span-2 row-start-2 col-span-3 col-start-2">
              <h1 className="font-bold text-2xl md:text-4xl  mb-4">
                {element.title}
              </h1>
            </div>
            <div className="row-span-3 row-start-5 col-span-3 col-start-2">
              <p className="text-base lg:text-3xl leading-relaxed">
                {element.text}
              </p>
            </div>
            <div className="row-span-6 row-start-2 col-span-3 col-start-6">
              <div className="h-full w-full relative">
                <Image
                  src={element.imgPath}
                  alt={element.title}
                  objectFit="cover"
                  fill
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ScrollSliderElement;
