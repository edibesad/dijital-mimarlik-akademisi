import { Dispatch, SetStateAction } from "react";
import ImageElement from "./image_element";

interface ImageElementProps {
  path: string;
  title: string;
  length: number;
  setSelectedImage: Dispatch<SetStateAction<string | null>>;
}

export default function Images({
  path,
  title,
  setSelectedImage,
  length,
}: ImageElementProps) {
  const images = Array.from(
    { length: length },
    (_, i) => `${path}/${i + 1}.jpg`
  );
  return (
    <div className="h-full w-full">
      <div
        className={`grid grid-rows-5 grid-cols-${length} h-full w-full overflow-visible gap-1`}
      >
        <div className="col-span-12 row-span-1 bg-neutral-900 text-center text-4xl text-neutral-300 rounded-md shadow-md">
          <span>{title}</span>
        </div>
        {images.map((image, index) => (
          <ImageElement
            key={index}
            image={image}
            atRight={index > images.length / 2 - 1}
            setSelectedImage={setSelectedImage}
          />
        ))}
      </div>
    </div>
  );
}
