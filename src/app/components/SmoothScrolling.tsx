"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

import { ReactNode } from "react";

function SmoothScrolling({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ duration: 2, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
