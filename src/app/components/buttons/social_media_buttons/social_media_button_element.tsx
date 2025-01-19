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
      className="self-center hover:scale-150 transition-transform duration-700"
    >
      <FontAwesomeIcon
        icon={element.icon}
        className="w-[3vw] h-[3vw]"
        color="white"
      />
    </Link>
  );
}
