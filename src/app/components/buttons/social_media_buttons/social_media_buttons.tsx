import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function SocialMediaButtons() {
  return (
    <div className="sticky top-[1vh]">
      <div className="flex justify-center space-x-4 bg-transparent">
        <FontAwesomeIcon icon={faFacebook} />
      </div>
    </div>
  );
}
