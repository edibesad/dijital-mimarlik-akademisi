import {
  faTelegram,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import SocailMediaButtonElement from "./social_media_button_element";

const elements = [
  { icon: faTelegram, href: "https://t.me/serif" },
  { icon: faInstagram, href: "https://instagram.com/serif" },
  { icon: faYoutube, href: "https://youtube.com/serif" },
  { icon: faEnvelope, href: "mailto:" },
];

export default function SocialMediaButtons() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 ">
      <div className="flex justify-center space-x-4 bg-transparent p-4  ">
        {elements.map((element, index) => (
          <SocailMediaButtonElement element={element} key={index} />
        ))}
      </div>
    </div>
  );
}
