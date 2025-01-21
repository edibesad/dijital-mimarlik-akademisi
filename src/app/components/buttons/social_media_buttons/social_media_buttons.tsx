"use client";

import {
  faTelegram,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import SocailMediaButtonElement from "./social_media_button_element";
import SocialMediaButtonElementModel from "./social_media_button_element_model";

const elements = [
  new SocialMediaButtonElementModel(
    faTelegram,
    "https://t.me/+AzEU7wFf9chkYjg0"
  ),
  new SocialMediaButtonElementModel(faWhatsapp, "https://wa.me/+905444942916"),
  new SocialMediaButtonElementModel(
    faInstagram,
    "https://www.instagram.com/dijitalmimarlikakademisi"
  ),
  new SocialMediaButtonElementModel(
    faYoutube,
    "https://www.youtube.com/@muhammedmusabersan"
  ),
  new SocialMediaButtonElementModel(
    faEnvelope,
    "mailto:dijitalmimarlikakademisi@gmail.com"
  ),
];

export default function SocialMediaButtons() {
  return (
    <div className="fixed bottom-0 right-0 z-50 p-4">
      <div className="flex flex-col items-end space-y-4 bg-transparent">
        {elements.map((element, index) => (
          <SocailMediaButtonElement element={element} key={index} />
        ))}
      </div>
    </div>
  );
}
