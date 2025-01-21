import Image from "next/image";

export default function Logo() {
  return (
    <div className="relative backdrop-blur-sm h-full w-full bg-black/50">
      <div
        className="absolute inset-0 flex items-center justify-center
        p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-24"
      >
        <div className="relative w-full h-full">
          <Image
            alt="logo"
            src="/images/about/logo.png"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   33vw"
          />
        </div>
      </div>
    </div>
  );
}
