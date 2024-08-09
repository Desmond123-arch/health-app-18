"use client";

import {
  ProduceItem,
  produceItems,
} from "@/app/(kidszone)/_components/utils/data";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import ProduceCard from "./card";
import FunFactModal from "./modal";

const KidsZoneFruitsVeggies: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ProduceItem | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-8">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-5xl font-bold text-center mb-12 text-purple-600"
      >
        Fruit & Veggie Adventure! 🍎🥕
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {produceItems.map((item) => (
          <ProduceCard key={item.name} item={item} onSelect={setSelectedItem} />
        ))}
      </div>
      <AnimatePresence>
        {selectedItem && (
          <FunFactModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default KidsZoneFruitsVeggies;
