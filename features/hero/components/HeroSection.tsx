"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScanLine from "./ScanLine";
import TypingText from "./TypingText";
import CyberBackground from "./CyberBackground";

import Terminal from "@/components/terminal/Terminal";

import {
  fadeUp,
  imageReveal,
  imageFloat,
} from "../animations";


export default function HeroSection() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden px-6 pt-24">

      <CyberBackground />


      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">


        {/* Text Side */}

        <motion.div {...fadeUp}>

          <div className="mb-8">
            <Terminal />
          </div>


          <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">

            I am{" "}

            <span className="text-green-400">
              MR.ROBOT
            </span>

          </h1>


          <TypingText />


          <div className="mt-10 flex gap-4">

            <button
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
              Explore
            </button>


            <button
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
              Contact
            </button>

          </div>


        </motion.div>



        {/* Image Side */}


        <motion.div
          {...imageReveal}
          className="flex justify-center"
        >


          <div
            className="
            relative
            h-[600px]
            w-[500px]
            "
          >


            {/* Glow */}

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
              absolute
              inset-0
              rounded-full
              bg-green-400/20
              blur-3xl
              "
            />

            {/* Character */}

            <div
              className="
              absolute
              inset-0
            "
            >

              <Image
                src="/images/hero.png"
                alt="MR.ROBOT"
                fill
                priority
                sizes="(max-width:768px) 90vw, 500px"
                className="object-contain"
              />


              <ScanLine />

            </div>

          </div>


        </motion.div>


      </div>


    </section>
  );
}