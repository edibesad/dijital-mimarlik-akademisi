import Image from "next/image";
import Logo from "./components/logo";
import Texts from "./components/texts";

export default function Page() {
  return (
    <>
      <div className="absolute h-screen w-full -z-10">
        <Image
          alt="bg"
          src={"/images/about/background.jpg"}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          <Texts />
          <div className="hidden lg:block">
            <Logo />
          </div>
          <div className="lg:hidden absolute top-4 right-4 z-20">
            <Logo />
          </div>
        </div>
      </div>
    </>
  );
}
