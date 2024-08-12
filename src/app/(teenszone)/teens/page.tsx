// pages/NutritionInfoPage.tsx
"use client";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import ProduceCard from "../_components/card";
import { ProduceItem, produceItems } from "../_components/utils/data";

const NutritionInfoPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ProduceItem | null>(null);

  const openModal = (item: ProduceItem) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-gray-800"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Nutrition for Your Changing Body
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {produceItems.map((item) => (
          <ProduceCard key={item.id} item={item} onSelect={openModal} />
        ))}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white rounded-lg p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                {selectedItem.name}
              </h2>
              <p className="text-gray-600 text-base mb-6">
                {selectedItem.details}
              </p>
              <Button
                onClick={closeModal}
                className="w-full bg-blue-500 text-white hover:bg-blue-600"
              >
                Got it
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Link href="/teens/quiz">
          <Button
            size="lg"
            className="rounded-full text-lg px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white"
          >
            Test Your Knowledge
          </Button>
        </Link>
      </motion.div>

      <motion.p
        className="mt-6 text-center text-base text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        Understanding nutrition can help you navigate the ups and downs of
        teenage life.
      </motion.p>
    </div>
  );
};

export default NutritionInfoPage;
