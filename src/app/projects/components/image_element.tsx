"use client";

import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

interface ImageElementProps {
  image: string;
  atRight: boolean;
  setSelectedImage: Dispatch<SetStateAction<string | null>>;
}

export default function ImageElement({
  image,
  atRight,
  setSelectedImage,
}: ImageElementProps) {
  const [onHover, setOnHover] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      style={{
        transformOrigin: !atRight ? "left" : "right",
        transform: onHover ? "scaleX(1.5)" : "scaleX(1)",
        zIndex: onHover ? 10 : 0,
      }}
      className={`relative h-48 w-full row-span-4 transform transition-all duration-300 ease-in-out cursor-pointer`}
      onMouseEnter={() => {
        setOnHover(true);
      }}
      onMouseLeave={() => {
        setOnHover(false);
      }}
      onClick={() => {
        setSelectedImage(image);
      }}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-10">
          <div className="w-8 h-8 border-4 border-neutral-300 border-t-white rounded-full animate-spin" />
        </div>
      )}
      <Image
        alt="bg"
        src={image}
        fill
        className="transition-all duration-300 ease-in-out"
        style={{ objectFit: "cover" }}
        onLoadingComplete={() => setIsLoading(false)}
        priority={false}
      />
    </div>
  );
}
