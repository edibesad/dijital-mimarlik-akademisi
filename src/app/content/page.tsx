"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesRef = useRef([]);

  const images = [
    "/images/content/1.jpg",
    "/images/content/2.jpg",
    "/images/content/3.jpg",
    "/images/content/4.jpg",
  ];

  useEffect(() => {
    imagesRef.current = imagesRef.current.slice(0, images.length);
  }, [images.length]);

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    console.log("nextIndex", nextIndex);
    gsap.to(imagesRef.current[currentIndex], {
      opacity: 0,
      x: -100,
      duration: 0.5,
      ease: "power2.inOut",
    });

    gsap.fromTo(
      imagesRef.current[nextIndex],
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power2.inOut",
      }
    );

    setCurrentIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;

    gsap.to(imagesRef.current[currentIndex], {
      opacity: 0,
      x: 100,
      duration: 0.5,
      ease: "power2.inOut",
    });

    gsap.fromTo(
      imagesRef.current[prevIndex],
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power2.inOut",
      }
    );

    setCurrentIndex(prevIndex);
  };

  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 2000);
  //   return () => clearInterval(interval);
  // });

  return (
    <div className="h-screen w-full bg-black/50 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="absolute w-full h-full object-cover"
            width={1920}
            height={1080}
            style={{
              objectFit: "contain",
              opacity: index === currentIndex ? 1 : 0,
              transition: "opacity 0.5s",
            }}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-black/70 p-4 backdrop-blur-sm transition-all hover:bg-black/90 hover:scale-110 active:scale-95 group shadow-lg"
        aria-label="Previous slide"
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="h-6 w-6 text-white transition-transform group-hover:-translate-x-0.5"
        />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-black/70 p-4 backdrop-blur-sm transition-all hover:bg-black/90 hover:scale-110 active:scale-95 group shadow-lg"
        aria-label="Next slide"
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className="h-6 w-6 text-white transition-transform group-hover:translate-x-0.5"
        />
      </button>
    </div>
  );
}
