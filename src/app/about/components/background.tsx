import Image from "next/image";

export default function Background() {
  return (
    <div className="absolute h-full w-full -z-10">
      <Image
        alt="bg"
        src={"/images/about/insturctor.jpg"}
        style={{ objectFit: "contain" }}
        width={1920}
        height={1080}
        className="opacity-80"
      />
    </div>
  );
}
