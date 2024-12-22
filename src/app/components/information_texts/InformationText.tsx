import { motion } from "framer-motion";

interface InfoProps {
  child: string;
}

export default function InformationText({ child }: InfoProps) {
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
