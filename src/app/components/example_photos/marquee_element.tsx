// marque_element.tsx
import Image from "next/image";

interface MarqueeElementProps {
  img: string;
}

export default function MarqueeElement({ img }: MarqueeElementProps) {
  return (
    <div className="relative flex justify-center items-center h-full mx-1">
      <div className="absolute top-0 bottom-0 left-0 right-0 opacity-25">
        <Image src={img} alt="example photo" layout="fill" />
      </div>
      <div className="relative">
        <div style={{ width: "500px", height: "300px" }}>
          <Image src={img} alt="example photo" layout="fill" />
        </div>
      </div>
    </div>
  );
}
