"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialMediaButtonElementModel from "./social_media_button_element_model";
import Link from "next/link";

interface SocialMediaButtonElementProps {
  element: SocialMediaButtonElementModel;
}

export default function SocialMediaButtonElement({
  element,
}: SocialMediaButtonElementProps) {
  return (
    <Link
      href={element.href}
      className="group relative inline-flex items-center justify-center p-2"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit our ${element.icon.iconName} page`}
    >
      <span
        className="absolute inset-0 rounded-full bg-white/0 transition-all duration-300 ease-out 
        group-hover:bg-white/10 group-hover:scale-110
        group-active:scale-95"
      />

      <span
        className="relative transform transition-all duration-300 ease-out
        group-hover:scale-125 group-hover:rotate-6
        group-active:scale-90"
      >
        <FontAwesomeIcon
          icon={element.icon}
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
          color="white"
        />
      </span>

      <span
        className="absolute inset-0 rounded-full ring-2 ring-white/0 transition-all duration-300 ease-out
        group-focus-visible:ring-white/20"
      />
    </Link>
  );
}
