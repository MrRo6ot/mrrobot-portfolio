"use client";

import { motion } from "framer-motion";

export default function VerifiedBadge() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay: 6,
        duration: 0.5,
      }}
      className="
      absolute
      -bottom-12
      left-1/2
      -translate-x-1/2
      whitespace-nowrap
      rounded-full
      border
      border-green-400/40
      bg-black/60
      px-5
      py-2
      font-mono
      text-sm
      text-green-400
      shadow-[0_0_20px_#22c55e]
      "
    >
      ✓ IDENTITY VERIFIED
    </motion.div>
  );
}