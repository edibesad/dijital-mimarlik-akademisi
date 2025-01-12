import NavigationButtonElementModel from "./link_button_element_model";

interface NavigationButtonElementProps {
  model: NavigationButtonElementModel;
}

export default function NavigationButtonElement({
  model,
}: NavigationButtonElementProps) {
  return (
    <a
      href={model.href}
      className="bg-transparent hover:bg-black text-black hover:text-white font-bold py-2 px-4 border rounded-full border-black transition-colors duration-300 ease-in-out"
    >
      {model.text}
    </a>
  );
}
