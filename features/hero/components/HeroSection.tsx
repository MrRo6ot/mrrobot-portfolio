"use client";

import { motion } from "framer-motion";
import CyberBackground from "./CyberBackground";
import Terminal from "@/components/terminal/Terminal";
import HeroPortrait from "./HeroPortrait";

import {
  fadeUp,
} from "../animations";


export default function HeroSection() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden px-6 py-24">

      <CyberBackground />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

        {/* Text Side */}

        <motion.div {...fadeUp}>

          <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">

            I&apos;m{" "}

            <span className="text-green-400">
              Mr.Robot
            </span>

          </h1>

          <div className="mb-8 mt-6">
            <Terminal />
          </div>

          <div className="mt-10 flex gap-4">

            <a
              href="#projects"
              className="
              rounded-lg
              bg-green-400
              px-6
              py-3
              font-semibold
              text-black
              transition
              hover:bg-green-300
              "
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="
              rounded-lg
              border
              border-white/20
              px-6
              py-3
              text-white
              transition
              hover:bg-white/10
              "
            >
              Contact Me
            </a>

          </div>

        </motion.div>

        {/* Image Side */}

        <div>
          <HeroPortrait />
        </div>
      </div>
    </section>
  );
}