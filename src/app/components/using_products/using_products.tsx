"use client";

import UsingProductsElement from "./using_products_element";
import UsingProductsElementModel from "./using_products_element_model";

const elements: UsingProductsElementModel[] = [
  new UsingProductsElementModel("3ds Max", "/images/3ds-max.png", "#7fc4dd"),
  new UsingProductsElementModel(
    "Corona Render",
    "/images/corona-render.png",
    "#da763f"
  ),
  new UsingProductsElementModel("AutoCAD", "/images/autocad.png", "#e51050"),
  new UsingProductsElementModel(
    "Photoshop",
    "/images/adobe-photoshop.png",
    "#36687f"
  ),
  new UsingProductsElementModel(
    "Midjorney",
    "/images/midjourney.png",
    "#a6a6a6"
  ),
  new UsingProductsElementModel("ChatGPT Sora", "/images/gpt-4.png", "#7fc4dd"),
];

export default function UsingProducts() {
  return (
    <div className="md:h-screen w-full bg-gradient-to-r from-black to-neutral-800">
      <div className="container mx-auto h-full flex flex-col items-center justify-center ">
        <h1 className="text-white text-5xl mb-8">Kullanılan Yazılımlar</h1>
        <br /> <br />
        <br />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6">
          {elements.map((element, index) => (
            <UsingProductsElement element={element} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
