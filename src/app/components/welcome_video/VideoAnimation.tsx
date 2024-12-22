import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { ReactNode } from "react";

interface InfoProps {
  children: ReactNode;
}

export default function Info({ children }: InfoProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);

    const handleScroll = () => {
      if (isBrowser) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isBrowser]);

  const opacity = isBrowser ? Math.max(1 - scrollY / window.innerHeight, 0) : 1;

  return (
    <div className="fixed top-0 w-screen object-fill z-[-10]">
      <motion.div style={{ opacity }}>{children}</motion.div>
    </div>
  );
}
