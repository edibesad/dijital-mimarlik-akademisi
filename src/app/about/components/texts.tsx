// Texts.tsx
import Background from "./background";
import { Noto_Sans } from "next/font/google";

const noto = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function Texts() {
  return (
    <div className={noto.className}>
      <div className="relative h-full w-full">
        <Background />
        <div className="h-full w-full bg-black/50">
          <div className="h-full w-full flex flex-col gap-4 md:gap-5 p-4 md:p-6 lg:p-8">
            {/* Header */}
            <h1 className="flex flex-col items-center w-full pt-4 md:pt-6 lg:pt-10">
              <span className="text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl text-white text-center">
                EĞİTMEN HAKKINDA
              </span>
              <div className="w-full md:w-3/4 flex px-4 md:px-0">
                <div className="w-full h-0.5 md:h-1 bg-white opacity-50 mt-2" />
              </div>
            </h1>

            {/* Content */}
            <div
              className="flex flex-col lg:grid lg:grid-cols-2 h-full text-white font-thin 
              px-4 md:px-6 lg:px-8 mt-4 md:mt-6 lg:mt-8"
            >
              <div className="hidden lg:block" /> {/* Spacer for desktop */}
              <div className="h-full w-full lg:text-right lg:pr-4 xl:pr-8 2xl:pr-10">
                <h2 className="text-lg md:text-xl lg:text-2xl 2xl:text-4xl">
                  Muhammed Musab Ersan
                </h2>
                <span className="text-sm md:text-base lg:text-lg 2xl:text-xl opacity-50">
                  İç Mimar ve Görselleştirme Uzmanı
                </span>

                <div
                  className="mt-4 md:mt-6 lg:mt-8 space-y-4 md:space-y-6 lg:space-y-8
                  text-sm md:text-base lg:text-lg 2xl:text-xl font-thin"
                >
                  <p className="lg:pl-10">
                    İç mimarlık & görselleştirme alanlarında 8 yıldan falza
                    süredir bir çok projede görev aldım ve alnmaktayım.
                  </p>

                  <p className="lg:pl-16 xl:pl-20">
                    3ds Max&apos;in tüm yönlerini kapsamlı bir şekjilde
                    öğretiyorum.
                  </p>

                  <p className="lg:pl-24 xl:pl-32">
                    Temel bilgilerden ileri düzey tekniklere kadar,
                    öğrencilerime güçlü bir 3D modelleme ve görselleştirme
                    becerisi kazandırıyorum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
