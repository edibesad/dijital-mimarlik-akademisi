"use client";

import InformationTexts from "./components/information_texts/InformationTexts";
import ScrollSlider from "./components/scroll_slider/ScrollSlider";
import SmoothScrolling from "./components/SmoothScrolling";
import WelcomeVideo from "./components/welcome_video/WelcomeVideo";

export default function Home() {
  return (
    <>
      <SmoothScrolling>
        <div className="h-screen"></div>
        <WelcomeVideo />
        <InformationTexts />
        <ScrollSlider />
        <div className="bg-pink-700 h-screen">
          <div className="container"></div>
      </div>
      </SmoothScrolling>
    </>
  );
}
