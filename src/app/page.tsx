import ExamplePhotos from "./components/example_photos/example_photos";
import InformationTexts from "./components/information_texts/InformationTexts";
import LinkButtons from "./components/buttons/navigation_buttons/navigaiton_buttons";
import ScrollSlider from "./components/scroll_slider/ScrollSlider";
import SmoothScrolling from "./components/SmoothScrolling";
import UsingProducts from "./components/using_products/UsingProducts";
import WelcomeVideo from "./components/welcome_video/WelcomeVideo";
import SocialMediaButtons from "./components/buttons/social_media_buttons/social_media_buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <SmoothScrolling>
        <div className="relative">
          <LinkButtons />
          <WelcomeVideo />
          <InformationTexts />
          <ScrollSlider />
        </div>
        <ExamplePhotos />
        <UsingProducts />
      </SmoothScrolling>
    </>
  );
}
