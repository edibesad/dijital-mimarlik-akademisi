import UsingProductsElementModel from "./UsingProductsElementModel";

interface UsingProductsElementProps {
    element: UsingProductsElementModel;
}


export default function UsingProductsElement({ element }: UsingProductsElementProps) {
    return (
        <div className="grid grid-cols-3 gap-4 rounded-lg" style={
            { backgroundColor: element.color }
        }>
            <div className="bg-lime-400">
                {element.imgPath}
            </div>
            <div className="col-span-2">
                {element.name}
            </div>
        </div>
    );
}