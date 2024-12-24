import { useEffect, useState } from "react";
import ScrollSliderElement from "./ScrollSliderElement";
import ScrollSliderElementModel from "./ScrollSliderElementModel";

export default function ScrollSlider() {
    const [opacity, setOpacity] = useState(1);
    const elements = [
        new ScrollSliderElementModel("text", "imgPath"),
        new ScrollSliderElementModel("text1", "imgPath1"),
        new ScrollSliderElementModel("text1", "imgPath1")
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
            const scrollRatio = scrollTop / maxScrollTop;
            setOpacity(1 - scrollRatio);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [elements]);


    return (
        <div className={`relative h-[${elements.length * 100}vh]`}>
            <div className="absolute h-full w-full bg-blue-500">
                <div className="sticky top-0">
                    <div style={{ opacity: opacity }}>
                        <div className="grid grid-cols-2 h-screen">
                            {
                                elements.map((element, index) => {
                                    return (<ScrollSliderElement element={element} key={index} />)
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
