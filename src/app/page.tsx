"use client";

import InformationTexts from "./components/information_texts/InformationTexts";
import SmoothScrolling from "./components/SmoothScrolling";
import WelcomeVideo from "./components/welcome_video/WelcomeVideo";

export default function Home() {
  return (
    <>
      <SmoothScrolling>
        <div className="h-screen"></div>
        <WelcomeVideo />
        <InformationTexts />
        <div className="h-screen bg-slate-800">
          <div className="flex items-center justify-center h-full">
            <span>
              Estetik ve teknik detayları bir araya getiren mimari
              görselleştirme kursu Hazır video eğitimlerle desteklenen ve
              haftalık canlı yayınlarla pekiştirilen bu hibrit kursla
              profesyonel mimari tasarımlar oluşturmayı adım adım öğrenin
            </span>
          </div>
        </div>
      </SmoothScrolling>
    </>
  );
}
