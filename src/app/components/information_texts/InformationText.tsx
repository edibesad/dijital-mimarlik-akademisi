"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface InfoProps {
  child: string;
}

export default function InformationText({ child }: InfoProps) {
  return (
    <div className="w-full h-[120vh] sticky top-0">
      <div className="absolute -z-10 h-screen w-full">
        <motion.div
          initial={{ color: "white" }}
          whileInView={{ color: "#404040" }}
          className="will-change-transform duration-300"
          viewport={{
            amount: 1,
          }}
        >
          <div className="h-screen w-full relative">
            <div className="absolute inset-0 bg-white/50 z-10"></div>
            <Image
              src={"/images/example_photos/1.jpg"}
              width={1920}
              height={1080}
              alt="img"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </motion.div>
      </div>
      <div className="container mx-auto h-screen flex items-center justify-center lg:text-4xl text-4xl ">
        <p>{child}</p>
      </div>
    </div>
  );
}
