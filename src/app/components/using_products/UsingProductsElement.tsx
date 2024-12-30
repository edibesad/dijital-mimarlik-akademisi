import UsingProductsElementAnimation from "./UsingProductsElemenAnimation";
import UsingProductsElementModel from "./UsingProductsElementModel";
import Image from "next/image";

interface UsingProductsElementProps {
  element: UsingProductsElementModel;
}

export default function UsingProductsElement({
  element,
}: UsingProductsElementProps) {
  return (
    <UsingProductsElementAnimation>
      <div
        className="grid grid-cols-3 gap-4 rounded-3xl h-full"
        style={{ backgroundColor: element.color }}
      >
        <Image
          className="rounded-3xl h-full object-fill"
          alt={element.imgPath}
          src={element.imgPath}
          width={2048}
          height={2048}
        />
        <div className="col-span-2 text-center text-4xl place-content-center px-4">
          {element.name}
        </div>
      </div>
    </UsingProductsElementAnimation>
  );
}
