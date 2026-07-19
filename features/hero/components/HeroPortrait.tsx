"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScanEffect from "./ScanEffect";
import VerifiedBadge from "./VerifiedBadge";

export default function HeroPortrait() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="
      relative
      mx-auto
      flex
      items-center
      justify-center
      "
    >

      {/* Glow */}
      <div
        className="
        absolute
        inset-0
        -z-10
        rounded-full
        bg-green-400/20
        blur-[120px]
        "
      />

      {/* Floating Image */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
      >
        
        <div className="relative pb-6">

          <div
            className="
            relative
            rounded-2xl
            "
          >

            <Image
              src="/images/hero-portrait.webp"
              alt="MR.ROBOT portrait"
              width={550}
              height={550}
              priority
              className="
              rounded-2xl
              object-cover
              shadow-2xl
              "
            />

            <ScanEffect />

          </div>

          <VerifiedBadge />

        </div>
      </motion.div>
    </motion.div>
  );
}