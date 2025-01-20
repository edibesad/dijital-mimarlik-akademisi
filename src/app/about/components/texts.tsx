import Background from "./background";
import { Noto_Sans } from "next/font/google";

const noto = Noto_Sans();

export default function Texts() {
  return (
    <div className={noto.className}>
      <div className="relative h-full w-full">
        <Background />
        <div className="h-full w-full bg-black/50">
          <div className="h-full w-full flex flex-col gap-5">
            <h1 className="flex flex-col items-center w-full pt-10">
              <span className="text-4xl 2xl:text-6xl text-white">
                EĞİTMEN HAKKINDA
              </span>
              <div className="w-3/4 flex">
                <div className="w-full h-1 bg-white opacity-50 mt-2" />
              </div>
            </h1>
            <br />
            <div className="grid grid-cols-2 h-full text-right pr-10 text-white  font-thin">
              <div />
              <div className="h-full w-full">
                <h2 className="text-xl 2xl:text-4xl">Muhammed Musab Ersan</h2>
                <span className="text-md 2xl:text-xl opacity-50">
                  İç Mimar ve Görselleştirme Uzmanı
                </span>
                <br />
                <br />
                <div className="mt-5 pl-10 font-thin 2xl:text-2xl">
                  <p>
                    İç mimarlık & görselleştirme alanlarında 8 yıldan falza
                    süredir bir çok projede görev aldım ve alnmaktayım.
                  </p>
                  <br />
                  <br />
                  <p className="pl-10">
                    3ds Max&apos;in tüm yönlerini kapsamlı bir şekjilde
                    öğretiyorum.
                  </p>
                  <br />
                  <br />
                  <p className="ml-24">
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
