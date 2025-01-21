import ExamplePhotos from "./components/example_photos/example_photos";
import InformationTexts from "./components/information_texts/information_texts";
import ScrollSlider from "./components/scroll_slider/scroll_slider";
import UsingProducts from "./components/using_products/using_products";
import WelcomeVideo from "./components/welcome_video/welcome_video";

export default function Home() {
  return (
    <>
      <WelcomeVideo />
      <InformationTexts />
      <ScrollSlider />
      <ExamplePhotos />
      <UsingProducts />
    </>
  );
}
