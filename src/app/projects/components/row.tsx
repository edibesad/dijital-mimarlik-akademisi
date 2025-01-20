import { Dispatch, SetStateAction } from "react";
import Images from "./images";

interface ImageElementProps {
  title: string;
  setSelectedImage: Dispatch<SetStateAction<string | null>>;
  length: number;
  path: string;
}

export default function Row({
  setSelectedImage,
  title,
  length,
  path,
}: ImageElementProps) {
  return (
    <div className="relative overflow-hidden group">
      <h2 className="text-xl font-semibold text-neutral-100/90 mb-2 group-hover:text-neutral-200 transition-colors">
        Bungalov
      </h2>
      <div className="h-[calc(100%-32px)] overflow-hidden rounded-lg ring-1 ring-white/10 group-hover:ring-neutral-500/30 transition-all">
        <Images
          length={length}
          path={"/images/projects" + path}
          title={title}
          setSelectedImage={setSelectedImage}
        />
      </div>
    </div>
  );
}
