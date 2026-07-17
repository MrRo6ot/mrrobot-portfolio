"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TerminalCard from "./TerminalCard";
import TypingText from "./TypingText";
import { fadeUp, imageReveal } from "../animations";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-24">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-green-500/20 blur-[140px]" />
        <div className="absolute right-1/4 top-1/2 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>


      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">


        {/* Text Side */}
          <motion.div {...fadeUp}>

          <div className="mb-8">
            <TerminalCard />
          </div>


          <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
            I am{" "}
            <span className="text-green-400">
              MR.ROBOT
            </span>
          </h1>


          <TypingText />


          <div className="mt-10 flex gap-4">

            <button className="rounded-lg bg-green-400 px-6 py-3 font-semibold text-black transition hover:bg-green-300">
              Explore
            </button>


            <button className="rounded-lg border border-white/20 px-6 py-3 text-white transition hover:bg-white/10">
              Contact
            </button>

          </div>


        </motion.div>



        {/* Image Side */}
        <motion.div
          {...imageReveal}
          className="flex justify-center"
        >

        <div className="relative h-[600px] w-[500px]">

        <div className="absolute inset-0 rounded-full bg-green-400/20 blur-3xl" />

        <Image
            src="/images/hero.png"
            alt="MR.ROBOT"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 500px"
            className="relative z-10 object-contain"
        />

        </div>

        </motion.div>


      </div>

    </section>
  );
}