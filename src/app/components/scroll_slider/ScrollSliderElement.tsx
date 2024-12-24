import ScrollSliderElementModel from "./ScrollSliderElementModel";

interface ScrollSliderElementProps {
    element: ScrollSliderElementModel;
}


export default function ScrollSliderElement({ element }: ScrollSliderElementProps) {
    return (<>
        <div className="h-full w-full bg-red-500">
            asd
        </div>
        <div className="h-full w-full bg-green-500">
            asd
        </div>
    </>
    );
}