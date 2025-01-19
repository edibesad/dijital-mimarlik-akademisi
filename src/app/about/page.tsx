import Image from "next/image";
import Logo from "./components/logo";
import Texts from "./components/texts";
import CourseDetails from "./components/course_details";

export default function About() {
  return (
    <>
      <div className="absolute h-screen w-screen -z-10">
        <Image alt="bg" src={"/images/about/background.jpg"} fill />
      </div>

      <div className="w-screen h-screen">
        <div className="grid grid-cols-2 h-full">
          <Texts />
          <Logo />
        </div>
      </div>
      <CourseDetails />
    </>
  );
}
