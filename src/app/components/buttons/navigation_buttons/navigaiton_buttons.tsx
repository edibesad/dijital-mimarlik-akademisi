import NavigationButtonElement from "./navigation_button_element";
import NavigationButtonElementModel from "./link_button_element_model";

const elements = [
  new NavigationButtonElementModel("/works", "Çalışmalarımız"),
  new NavigationButtonElementModel("/about", "Hakkımızda"),
  new NavigationButtonElementModel("/", "Ders İçeriği"),
];

export default function LinkButtons() {
  return (
    <div className="sticky top-[1vh]">
      <div className="flex justify-center space-x-4 bg-transparent">
        {elements.map((element, index) => (
          <NavigationButtonElement model={element} key={index} />
        ))}
      </div>
    </div>
  );
}
