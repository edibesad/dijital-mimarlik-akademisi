import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface InfoProps {
  child: string;
}

export default function InformationText({ child }: InfoProps) {
  const [isInView, setIsInView] = useState(false);

  // Ekran boyutunu ve component'ın pozisyonunu takip et
  const handleScroll = () => {
    const component = document.getElementById("scrollComponent");
    if (component) {
      const rect = component.getBoundingClientRect();
      const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
      setIsInView(isInView);
    }
  };

  useEffect(() => {
    // Sayfa yüklendiğinde ve her kaydırma işleminde handleScroll fonksiyonunu çalıştır
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // İlk başta da kontrol et
    console.log("useEffect", useEffect);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="">
        <motion.div
          initial={{ color: "#6b6b6b" }}
          whileInView={{ color: "white" }}
          className="text-8xl text-justify will-change-transform duration-300"
          viewport={{
            amount: 0.9,
          }}
        >
          <p>{child}</p>
          <br />
        </motion.div>
      </div>
    </>
  );
}
