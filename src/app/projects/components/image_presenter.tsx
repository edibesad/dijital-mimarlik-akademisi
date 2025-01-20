import Image from "next/image";

interface ImagePresenterProps {
  image: string | null;
}

export default function ImagePresenter({ image }: ImagePresenterProps) {
  return (
    <div className="w-full rounded-xl border relative border-white/10 p-4 backdrop-blur-md bg-gradient-to-br from-white/[0.075] to-white/[0.025]">
      <div className="sticky top-0">
        {image ? (
          <div className="relative w-full h-screen rounded-lg overflow-hidden ring-1 ring-white/10">
            <Image
              alt={image}
              src={image}
              fill
              style={{ objectFit: "contain" }}
              priority
              className="transition-all duration-300"
            />
          </div>
        ) : (
          <div className="flex items-center justify-center h-screen">
            <p className="text-neutral-200/60 text-lg">
              Görüntülemek için bir resim seçin
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
