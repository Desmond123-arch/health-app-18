"use client";
import { motion } from "framer-motion";
import React from "react";
import { AnimatedModalDemo } from "../_components/info-card";

const NutritionInfoPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen lg:py-20 flex flex-col items-center justify-center">
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-gray-800"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      ></motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className=" mx-auto"
      >
        <AnimatedModalDemo />
      </motion.div>
    </div>
  );
};

export default NutritionInfoPage;
