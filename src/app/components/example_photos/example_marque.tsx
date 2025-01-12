import MarqueeElement from "./marquee_element";

interface ExampleMarqueeProps {
  images: string[];
  isSecond: boolean;
}

export default function ExampleMarquee({
  images,
  isSecond,
}: ExampleMarqueeProps) {
  return (
    <div
      className={`absolute bg-black inset-0 flex justify-center items-center py-12 whitespace-nowrap ${
        isSecond ? "animate-marquee2" : "animate-marquee"
      }`}
    >
      {images.map((img, index) => (
        <MarqueeElement key={index} img={img} />
      ))}
    </div>
  );
}
