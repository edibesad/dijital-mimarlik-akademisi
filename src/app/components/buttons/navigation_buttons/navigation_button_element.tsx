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
      className="text-zinc-400 hover:text-white font-medium py-2 px-4 rounded-md 
      transition-all duration-300 ease-in-out hover:bg-zinc-800/50 
      border border-transparent hover:border-zinc-700/50"
    >
      {model.text}
    </a>
  );
}
