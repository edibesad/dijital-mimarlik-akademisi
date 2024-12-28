import UsingProductsElement from "./UsingProductsElement";
import UsingProductsElementModel from "./UsingProductsElementModel";

const elements: UsingProductsElementModel[] = [
    new UsingProductsElementModel("3ds Max Modelleme", "imgPath", "#7fc4dd"),
    new UsingProductsElementModel("Corona Render", "imgPath", "#da763f"),
    new UsingProductsElementModel("AutoCAD", "imgPath", "#e51050"),
    new UsingProductsElementModel("Photoshop", "imgPath", "#36687f"),
    new UsingProductsElementModel("Midjorney", "imgPath", "#a6a6a6"),
    new UsingProductsElementModel("ChatGPT Sora", "imgPath", "#7fc4dd"),
];

export default function UsingProducts() {
    return (
        <div className="w-screen h-screen">
            <div className="container mx-auto bg-green-500 h-full flex flex-col items-center justify-center">
                <h1>Kullanılan Yazılımlar</h1>

                <div className="grid grid-cols-4 gap-4 place-items-center">
                    {elements.map((element, index) => (
                        <UsingProductsElement element={element} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}


