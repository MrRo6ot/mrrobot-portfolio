"use client";

import { motion } from "framer-motion";

export default function ScanLine() {
  return (
    <motion.div
      initial={{
        top: "0%",
      }}
      animate={{
        top: "100%",
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      }}
      className="
      pointer-events-none
      absolute
      left-[10%]
      right-[10%]
      z-20
      h-1
      bg-green-400/70
      blur-sm
      "
    />
  );
}