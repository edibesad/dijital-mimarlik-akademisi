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

  return (
    <div
      style={{
        transformOrigin: !atRight ? "left" : "right",
        transform: onHover ? "scaleX(2)" : "scaleX(1)",
        zIndex: onHover ? 10 : 0,
      }}
      className={`relative h-full w-full row-span-4 transform transition-all duration-300 ease-in-out cursor-pointer`}
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
      <Image
        alt="bg"
        src={image}
        fill
        className="transition-all duration-300 ease-in-out"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
