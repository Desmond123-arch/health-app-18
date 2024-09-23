"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import Link from "next/link";
import React from "react";
import { AnimatedModalDemo } from "../_components/info-card";

const NutritionInfoPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto min-h-screen px-5 py-10 lg:py-20 ">
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-gray-800"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      ></motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg p-8 mb-12 container mx-auto"
      >
        <h2 className="text-3xl font-bold text-white mb-4">
          Test Your Nutrition Knowledge!
        </h2>
        <p className="text-white text-lg mb-6">
          Think you know your fruits and veggies? Take our fun quiz and discover
          how much you really know about nutrition!
        </p>
        <Link href="/teens/quiz" passHref>
          <Button
            variant="default"
            className="inline-flex gap-2 rounded-full text-sm bg-gradient-to-r from-green-400 to-blue-500 
            hover:scale-110 transition duration-700 ease-in-out"
          >
            <Brain />
            Start a quiz
          </Button>
        </Link>
      </motion.div>

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
