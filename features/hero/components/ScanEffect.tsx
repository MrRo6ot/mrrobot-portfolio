"use client";

import { motion } from "framer-motion";

export default function ScanEffect() {
  return (
    <motion.div
      initial={{
        top: "-10%",
        opacity: 0,
      }}
      animate={{
        top: "110%",
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 6,
        ease: "easeInOut",
      }}
      className="
      pointer-events-none
      absolute
      left-0
      right-0
      z-20
      h-1
      bg-green-400
      shadow-[0_0_20px_#22c55e]
      "
    />
  );
}