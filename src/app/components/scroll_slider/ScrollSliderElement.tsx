import ScrollSliderElementModel from "./ScrollSliderElementModel";

interface ScrollSliderElementProps {
  element: ScrollSliderElementModel;
  opacity: number;
}

export default function ScrollSliderElement({
  element,
  opacity,
}: ScrollSliderElementProps) {
  return (
    <>
      <div className="grid grid-cols-2 absolute h-full w-full">
        <div className="w-full h-full place-content-center text-center text-4xl ">
          <div
            style={{
              opacity: opacity ? opacity : 0,
              transform: opacity
                ? `translateY(${50 - opacity * 50}vh)`
                : `translateY(0vh)`,
            }}
          >
            <div className="border-2 border-solid rounded-lg border-slate-900 py-24 h-full">
              <h1 className="font-bold">{element.title}</h1>
              <br />
              <p>{element.text}</p>
            </div>
          </div>
        </div>

        <div
          className="place-content-center text-center "
          style={{
            opacity: opacity ? opacity : 0,
            transform: opacity
              ? `translateY(${-(50 - opacity * 50)}vh)`
              : `translateY(0vh)`,
          }}
        >
          <div className="rounded-lg  h-full place-content-center">
            {element.imgPath}
          </div>
        </div>
      </div>
    </>
  );
}
