"use client";

import { ProduceItem } from "@/app/(kidszone)/_components/utils/data";
import { motion } from "framer-motion";
import React from "react";

interface ProduceCardProps {
  item: ProduceItem;
  onSelect: (item: ProduceItem) => void;
}

const ProduceCard: React.FC<ProduceCardProps> = ({ item, onSelect }) => {
  if (!item) {
    return null; // or return a placeholder/loading state
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden"
      onClick={() => onSelect(item)}
    >
      <div
        className="p-6 flex flex-col items-center"
        style={{ backgroundColor: item.color || "#cccccc" }} // Fallback color
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        >
          {item.icon && <item.icon className="w-20 h-20 text-white" />}
        </motion.div>
        <h3 className="mt-4 text-2xl font-bold text-white">
          {item.name || "Unknown Item"}
        </h3>
      </div>
      <div className="p-4 text-center">
        <p className="text-lg font-semibold">Click to learn more!</p>
      </div>
    </motion.div>
  );
};

export default ProduceCard;
