import Image from "next/image";
import Logo from "./components/logo";
import Texts from "./components/texts";

export default function About() {
  return (
    <>
      <div className="absolute h-screen w-full -z-10">
        <Image alt="bg" src={"/images/about/background.jpg"} fill />
      </div>

      <div className="h-screen">
        <div className="grid grid-cols-2">
          <Texts />
          <Logo />
        </div>
      </div>
    </>
  );
}
