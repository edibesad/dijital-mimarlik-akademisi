import ExamplePhotos from "./components/example_photos/example_photos";
import InformationTexts from "./components/information_texts/InformationTexts";
import ScrollSlider from "./components/scroll_slider/ScrollSlider";
import SmoothScrolling from "./components/SmoothScrolling";
import UsingProducts from "./components/using_products/UsingProducts";
import WelcomeVideo from "./components/welcome_video/WelcomeVideo";

export default function Home() {
  return (
    <>
      <SmoothScrolling>
        <WelcomeVideo />
        <InformationTexts />
        <ScrollSlider />
        <ExamplePhotos />
        <UsingProducts />
      </SmoothScrolling>
    </>
  );
}
