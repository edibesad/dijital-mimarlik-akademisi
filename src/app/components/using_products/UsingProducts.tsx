"use client";

import UsingProductsElement from "./UsingProductsElement";
import UsingProductsElementModel from "./UsingProductsElementModel";

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
    <div className="h-screen w-full bg-gradient-to-r from-black to-[#737373]">
      <div className="container mx-auto h-full flex flex-col items-center justify-center ">
        <h1 className="text-white text-5xl mb-8">Kullanılan Yazılımlar</h1>
        <br /> <br />
        <br />
        <div className="grid grid-cols-3 gap-6">
          {elements.map((element, index) => (
            <UsingProductsElement element={element} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
