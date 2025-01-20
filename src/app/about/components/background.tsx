import Image from "next/image";

export default function Background() {
  return (
    <div className="absolute h-screen w-full -z-10">
      <Image
        alt="bg"
        src={"/images/about/insturctor.jpg"}
        style={{ objectFit: "cover" }}
        fill
        className="opacity-80"
      />
    </div>
  );
}
