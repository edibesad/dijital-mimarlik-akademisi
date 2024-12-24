import { motion } from "framer-motion";

interface InfoProps {
  child: string;
}

export default function InformationText({ child }: InfoProps) {
  return (
    <>
      <div className="pt-24">
        <motion.div
          initial={{ color: "#6b6b6b" }}
          whileInView={{ color: "white" }}
          className="text-8xl will-change-transform duration-300"
          viewport={{
            amount: 0.75,
          }}
        >
          <p>{child}</p>
          <br />
        </motion.div>
      </div>
    </>
  );
}
