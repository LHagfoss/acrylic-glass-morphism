"use client"

import React, { useEffect } from "react";
import Lenis from "lenis";

interface LenisContainerProps {
  children: React.ReactNode;
}

const LenisContainer: React.FC<LenisContainerProps> = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return children;
};

export default LenisContainer;