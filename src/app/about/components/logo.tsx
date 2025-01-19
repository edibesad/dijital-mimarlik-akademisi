import Image from "next/image";

export default function Logo() {
  return (
    <div className="backdrop-blur-sm bg-black/50">
      <Image
        className="p-24"
        alt="logo"
        src={"/images/about/logo.png"}
        style={{ objectFit: "contain" }}
        width={1920}
        height={1080}
      />
    </div>
  );
}
