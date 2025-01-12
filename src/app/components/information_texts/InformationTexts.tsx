import InformationText from "./InformationText";

const elements = [
  "Estetik ve teknik detayları bir araya getiren mimari görselleştirme kursu.Hazır video eğitimlerle desteklenen ve haftalık canlı yayınlarla pekiştirilen bu hibrit kursla profesyonel mimari tasarımlar oluşturmayı adım adım öğrenin",
  "Ezberleri kenara bırakın, kapsamlı eğitim programımızla gerçek yeteneklerinizi keşfedin. 30 saatten fazla süren yoğun ve pratik odaklı eğitimimizle, gerçek bir görselleştirme uzmanı olun. Hemen yerinizi ayırtın ve görselleştirme uzmanlığını pratiklerle öğrenmeye başlayın!",
];

export default function InformationTexts() {
  return (
    <div className="w-full relative">
      <div className="w-full z-10">
        {elements.map((element, index) => {
          return <InformationText key={index} child={element} />;
        })}
      </div>
    </div>
  );
}
