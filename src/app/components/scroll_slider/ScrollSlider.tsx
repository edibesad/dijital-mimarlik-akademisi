"use client";

import { useEffect, useState, useCallback } from "react";
import ScrollSliderElement from "./ScrollSliderElement";
import ScrollSliderElementModel from "./ScrollSliderElementModel";
const elements = [
  new ScrollSliderElementModel(
    "İç Mimar Bakış Açısıyla Profesyonel 3D Sanatçısından İpuçları",
    "Fotogerçekçi renderlar için malzeme, ışık ve kamera tekninklerini farklı projelerde pratik yaparak en etkili tekniklerini öğretiyoruz.",
    "/images/example_photos/8.jpg",
    "/images/example_photos/5.jpg"
  ),
  new ScrollSliderElementModel(
    "Sürekli Destek ve Etkileşim İçin Canlı Yayınlar ve Platform Erişimi",
    "Haftalık canlı yayınlar ve özel platformumuz üzerinde, eğitimle ilgili sorularınıza yanıt alabilir, meslektaşlarınızla iletişim kurarak deneyimlerinizi paylaşabilirsiniz.",
    "/images/example_photos/1.jpg",
    "/images/example_photos/12.jpg"
  ),
  new ScrollSliderElementModel(
    "Bilgiyi Özelleştirerek Verimli Öğrenme",
    "Pratik, akılda kalıcı uygulamaları, iç mimarlık disipliniyle harmanlayarak proje süreçlerinde gereken en kritik bilgileri, bilgi karmaşasından uzak bir şekilde sunarak öğrenmenizi sağlıyoruz.",
    "/images/example_photos/2.jpg",
    "/images/example_photos/16.jpg"
  ),
  new ScrollSliderElementModel(
    "Gelişiminiz İçin Hata Analizi ve Kapsamlı Geri Bildirim",
    "Ödevlerinizi analiz ederek, her bir hata üzerine detaylı geri bildirim sağlıyor ve yorumları özel platformda paylaşarak gelişim sürecinizi destekliyoruz.",
    "/images/example_photos/3.jpg",
    "/images/example_photos/10.jpg"
  ),
  new ScrollSliderElementModel(
    "Yapay Zeka ile Tasarımın Gücü: Mekanlardan Hayallerinizin Ötesine!",
    "Yapay zeka, tasarımda hayal gücünü sınırsız bir yaratıcılıkla buluştururken, süreçleri hızlandırıp benzersiz mekanların kapılarını aralıyor ve ben de size yapay zekayı mimaride nasıl kullanacağınızı öğretmek için buradayım.",
    "/images/example_photos/4.jpg",
    "/images/example_photos/18.jpg"
  ),
];

export default function ScrollSlider() {
  const [opacity, setOpacity] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollSliderElement = document.getElementById("scrollSlider");
    const windowPosition = scrollSliderElement?.offsetTop;
    if (windowPosition) {
      const scrollFromTop = window.scrollY;
      const windowHeight = scrollSliderElement.clientHeight;
      if (
        scrollFromTop > windowPosition &&
        scrollFromTop < windowPosition + windowHeight
      ) {
        const scrollFromWindow = scrollFromTop - windowPosition;
        const elementHeight = windowHeight / elements.length;
        const scrollFromElement = scrollFromWindow % elementHeight;
        const opacity =
          1 -
          Math.round(
            Math.abs(2 * (scrollFromElement / elementHeight) - 1) * 100
          ) /
            100;
        setActiveIndex(Math.floor(scrollFromWindow / elementHeight));
        setOpacity(opacity);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      id="scrollSlider"
      className="relative w-full -z-10 "
      style={{ height: `${elements.length * 4 * 100}vh` }}
    >
      <div className="absolute h-full w-full">
        <div className="sticky top-0">
          <div className="absolute z-0 w-full">
            <div className="relative h-full w-full">
              {elements.map((element, index) => {
                return (
                  <ScrollSliderElement
                    element={element}
                    key={index}
                    opacity={activeIndex == index ? opacity : 0}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
