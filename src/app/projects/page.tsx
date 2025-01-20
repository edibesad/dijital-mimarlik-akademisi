"use client";

import { useState } from "react";
import Image from "next/image";
import Row from "./components/row";

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-screen overflow-hidden bg-gradient-to-br from-black to-neutral-800">
      <div className="h-full px-6 py-4 bg-grid-white/[0.02]">
        <div className="flex flex-col items-center mb-6 relative">
          <div className="absolute inset-x-0 -top-4 h-24 bg-gradient-to-b from-neutral-700/20 via-neutral-600/10 to-transparent blur-2xl" />
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 bg-clip-text text-transparent">
            Öğrenci Çalışmaları
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-neutral-500/60 via-neutral-400 to-neutral-500/60 rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-5 gap-4 h-[calc(100vh-120px)]">
          <div className="col-span-3 rounded-xl border border-white/10 p-4 overflow-hidden backdrop-blur-md bg-gradient-to-br from-white/[0.075] to-white/[0.025]">
            <div className="grid grid-rows-6 gap-4 h-full overflow-hidden">
              <Row
                title={"Bungalov"}
                setSelectedImage={setSelectedImage}
                length={4}
                path={"/bungalov"}
              />
              <Row
                title={"Bungalov"}
                setSelectedImage={setSelectedImage}
                length={5}
                path={"/bungalov"}
              />
              <Row
                title={"Bungalov"}
                setSelectedImage={setSelectedImage}
                length={5}
                path={"/bungalov"}
              />
              <Row
                title={"Bungalov"}
                setSelectedImage={setSelectedImage}
                length={5}
                path={"/bungalov"}
              />
              <Row
                title={"Bungalov"}
                setSelectedImage={setSelectedImage}
                length={5}
                path={"/bungalov"}
              />
              <Row
                title={"Bungalov"}
                setSelectedImage={setSelectedImage}
                length={5}
                path={"/bungalov"}
              />
            </div>
          </div>

          <div className="col-span-2 rounded-xl border border-white/10 p-4 backdrop-blur-md bg-gradient-to-br from-white/[0.075] to-white/[0.025]">
            {selectedImage ? (
              <div className="relative w-full h-full rounded-lg overflow-hidden ring-1 ring-white/10">
                <Image
                  alt={selectedImage}
                  src={selectedImage}
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                  className="transition-all duration-300"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-neutral-200/60 text-lg">
                  Görüntülemek için bir resim seçin
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
