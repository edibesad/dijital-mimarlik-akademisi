import InformationText from "./InformationText";

export default function InformationTexts() {
  return (
    <div className="bg-slate-900 opacity-100 px-96">
      <div className="container mx-auto p-4 items-center justify-center h-full text-center">
        <InformationText child="Estetik ve teknik detayları bir araya getiren mimari görselleştirme kursu" />
        <InformationText
          child="Hazır video eğitimlerle desteklenen ve haftalık canlı yayınlarla pekiştirilen 
bu hibrit kursla profesyonel mimari tasarımlar oluşturmayı adım adım öğrenin"
        />
        <InformationText child="Ezberleri kenara bırakın, kapsamlı eğitim programımızla gerçek yeteneklerinizi keşfedin." />
        <InformationText child="30 saatten fazla süren yoğun ve pratik odaklı eğitimimizle, gerçek bir görselleştirme uzmanı olun." />
        <InformationText child="Hemen yerinizi ayırtın ve görselleştirme uzmanlığını pratiklerle öğrenmeye başlayın!" />
      </div>
    </div>
  );
}
