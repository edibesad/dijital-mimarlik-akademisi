import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkButtons from "./navigation_buttons/navigaiton_buttons";
import SocialMediaButtons from "./social_media_buttons/social_media_buttons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Buttons() {
  return (
    <div className="relative w-full z-50">
      <FontAwesomeIcon icon={faFacebook} className="w-[2vw]" />

      <LinkButtons />
    </div>
  );
}
