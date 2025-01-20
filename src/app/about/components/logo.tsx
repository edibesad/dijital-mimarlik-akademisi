import Image from "next/image";

export default function Logo() {
  return (
    <div className="backdrop-blur-sm h-screen bg-black/50">
      <Image
        className="p-24 h-screen"
        alt="logo"
        src={"/images/about/logo.png"}
        style={{ objectFit: "contain" }}
        width={1920}
        height={1080}
      />
    </div>
  );
}
