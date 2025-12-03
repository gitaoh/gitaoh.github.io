"use client";

import React from "react";
import { motion } from "motion/react";

export default function Calendly() {
  return (
    <motion.div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="cursor-pointer rounded-lg bg-black px-8 py-3 text-white transition-colors hover:bg-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-600/90"
        onClick={() => {
          window.open("https://calendly.com/gitaoh/30min");
        }}
      >
        Book a call
      </motion.button>
    </motion.div>
  );
}
