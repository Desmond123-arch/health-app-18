"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Leaf {
  x: number;
  y: number;
  rotation: number;
  scale: number;
}

const leafVariants: Variants = {
  animate: (custom: number) => ({
    y: [0, custom, 0],
    rotate: [0, 360],
    transition: {
      duration: 3 + Math.random() * 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

const textVariants: Variants = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const buttonVariants: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

const monkeyVariants: Variants = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
  hover: { y: [0, -10, 0], transition: { duration: 0.5 } },
};

const JungleNavigation404: React.FC = () => {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const generateLeaves = (): Leaf[] =>
      Array.from({ length: 20 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        rotation: Math.random() * 360,
        scale: 0.5 + Math.random() * 0.5,
      }));

    setLeaves(generateLeaves());
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-green-400 to-green-800 overflow-hidden flex flex-col items-center justify-center">
      {leaves.map((leaf, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl"
          style={{
            left: leaf.x,
            top: leaf.y,
            rotate: leaf.rotation,
            scale: leaf.scale,
          }}
          variants={leafVariants}
          animate="animate"
          custom={20 + Math.random() * 40}
        >
          🍃
        </motion.div>
      ))}

      <motion.div
        className="text-center z-10"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <h1 className="text-9xl font-bold text-yellow-300 mb-4 shadow-lg">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-white mb-8 shadow-md">
          Oops! You're Lost in the Jungle
        </h2>
      </motion.div>

      <motion.div
        className="z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link href="/">
          <motion.button
            className="px-6 py-3 bg-yellow-400 text-green-800 rounded-full font-semibold shadow-lg"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
          >
            Follow the Monkey Back Home
          </motion.button>
        </Link>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-10 text-8xl"
        variants={monkeyVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        🐒
      </motion.div>
    </div>
  );
};

export default JungleNavigation404;
