import Image from "next/image";

interface MarqueeElementProps {
  img: string;
}

export default function MarqueeElement({ img }: MarqueeElementProps) {
  return (
    <div className="relative flex justify-center items-center h-full mx-1 hover:scale-150 hover:z-20 transition-transform duration-700">
      <div className="absolute top-0 bottom-0 left-0 right-0 opacity-25">
        <Image src={img} alt="example photo" layout="fill" />
      </div>
      <div className="relative  ">
        <div className="w-[25vw] h-[30vh]">
          <Image src={img} alt="example photo" layout="fill" />
        </div>
      </div>
    </div>
  );
}
