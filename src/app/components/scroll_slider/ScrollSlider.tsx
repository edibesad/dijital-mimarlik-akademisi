import { useEffect, useState } from "react";
import ScrollSliderElement from "./ScrollSliderElement";
import ScrollSliderElementModel from "./ScrollSliderElementModel";
const elements = [
  new ScrollSliderElementModel("text", "imgPath"),
  new ScrollSliderElementModel("text1", "imgPath1"),
  new ScrollSliderElementModel("text1", "imgPath1"),
];

export default function ScrollSlider() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      //   const scrollTop = window.scrollY;
      //   console.log("scrollTop", scrollTop);
      //   console.log("window.innerHeight", window.innerHeight);
      //   console.log(
      //     "document.documentElement.scrollHeight",
      //     document.documentElement.scrollHeight
      //   );
      //   const maxScrollTop =
      //     document.documentElement.scrollHeight - window.innerHeight;
      //   const scrollRatio = scrollTop / maxScrollTop / 3;
      //   setOpacity(1 - scrollRatio);

      const scrollSliderElement = document.getElementById("scrollSlider");
      const windowPosition = scrollSliderElement?.offsetTop;
      if (windowPosition) {
        const scrollFromTop = window.scrollY;
        const windowHeight = scrollSliderElement.clientHeight;
        if (
          scrollFromTop > windowPosition &&
          scrollFromTop < windowPosition + windowHeight
        ) {
          const scrollFromWindow = scrollFromTop - windowPosition;
          const opacity =
            1 - (Math.abs(2 * ((scrollFromWindow * 3) / windowHeight) - 1) % 1);
          console.log("opacity", opacity);
          setOpacity(opacity);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="scrollSlider"
      className={`relative `}
      style={{ height: `${elements.length * 1.5 * 100}vh` }}
    >
      <div className="absolute h-full w-full bg-blue-500">
        <div className="sticky top-0">
          <div style={{ opacity: opacity }}>
            <div className="grid grid-cols-2 h-screen">
              {elements.map((element, index) => {
                return <ScrollSliderElement element={element} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
