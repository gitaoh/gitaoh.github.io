"use client";

import { motion } from "motion/react";
import React from "react";
import ImageWithFallback from "@/components/ImageWithFallBack";
import Calendly from "@/components/Calendly";

export default function Hero() {
  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <h1 className="mb-4 flex flex-wrap items-center gap-4 text-5xl md:text-6xl">
            <span className="text-black dark:text-white">Hi, I&#39;m</span>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className="hidden h-16 w-16 overflow-hidden rounded-full bg-gradient-to-br from-gray-300 to-gray-400 sm:inline-block dark:from-neutral-400 dark:to-neutral-300"
            >
              <ImageWithFallback
                src="img.png"
                alt="Profile"
                className="h-full w-full object-cover"
                loading={"eager"}
              />
            </motion.div>
            <span className="text-black dark:text-white">Joseph Gitau!</span>
          </h1>

          <div className="mb-2 text-4xl md:text-5xl">
            <span className="text-gray-400 dark:text-neutral-300">
              I&#39;m a{" "}
            </span>
            <span className="font-medium text-black dark:text-white">
              Full-Stack Developer
            </span>
            <span className="text-gray-400 dark:text-neutral-300"> at</span>
          </div>

          <div className="mb-8 flex flex-col items-start gap-4 sm:items-center md:flex-row">
            <h2 className="text-4xl text-orange-400 md:text-5xl dark:text-orange-400">
              Tech Innovations.
            </h2>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm text-green-700"
            >
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Open to work
            </motion.span>
          </div>
        </div>

        <p className="mb-8 max-w-xl text-lg text-gray-600 dark:text-gray-200">
          Feel free to explore my portfolio and reach out
          <br />
          —I&apos;d love to connect!
        </p>
        <Calendly />
      </motion.div>
    </section>
  );
}
