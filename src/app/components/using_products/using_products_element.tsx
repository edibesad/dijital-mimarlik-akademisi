"use client";

import UsingProductsElementAnimation from "./using_products_element_animation";
import UsingProductsElementModel from "./using_products_element_model";
import Image from "next/image";

interface UsingProductsElementProps {
  element: UsingProductsElementModel;
}

export default function UsingProductsElement({
  element,
}: UsingProductsElementProps) {
  return (
    <UsingProductsElementAnimation>
      <div className="relative group">
        <div
          className="absolute h-full w-full rounded-3xl -z-10 opacity-20 group-hover:opacity-100 transition-all duration-300"
          style={{ backgroundColor: element.color }}
        />
        <div className="grid grid-cols-3 gap-4 rounded-3xl h-full transition-all duration-300">
          <Image
            className="rounded-3xl h-full object-fill"
            alt={element.imgPath}
            src={element.imgPath}
            width={2048}
            height={2048}
          />
          <div className="col-span-2 text-center lg:text-4xl place-content-center px-4 text-white">
            {element.name}
          </div>
        </div>
      </div>
    </UsingProductsElementAnimation>
  );
}
