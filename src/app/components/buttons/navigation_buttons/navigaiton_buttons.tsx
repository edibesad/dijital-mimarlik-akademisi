import NavigationButtonElement from "./navigation_button_element";
import NavigationButtonElementModel from "./link_button_element_model";

const elements = [
  new NavigationButtonElementModel("/", "Anasayfa"),
  new NavigationButtonElementModel("/works", "Çalışmalarımız"),
  new NavigationButtonElementModel("/about", "Hakkımızda"),
  new NavigationButtonElementModel("/", "Ders İçeriği"),
];

export default function NavigationButtons() {
  return (
    <nav className="absolute w-full h-full">
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-b from-zinc-900/75 to-zinc-900/60 border-b border-zinc-800/50 transition-all duration-300 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 transition-all duration-300">
            <div className="flex justify-center items-center space-x-12 w-full">
              {elements.map((element, index) => (
                <NavigationButtonElement model={element} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
