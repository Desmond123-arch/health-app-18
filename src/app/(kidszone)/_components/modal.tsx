import { ProduceItem } from "@/app/(kidszone)/_components/utils/data";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import React, { useState } from "react";

interface FunFactModalProps {
  item: ProduceItem;
  onClose: () => void;
}

const FunFactModal: React.FC<FunFactModalProps> = ({ item, onClose }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleLearnedClick = () => {
    setShowConfetti(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    setTimeout(onClose, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-3xl p-8 max-w-md w-full text-center relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-25"
          style={{ backgroundColor: item.color }}
        />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">{item.name} Facts</h2>
          <item.icon
            className="w-16 h-16 mx-auto mb-4"
            style={{ color: item.color }}
          />
          <p className="text-xl mb-6">{item.benefits}</p>
          <p className="text-lg mb-8">Fun Fact: {item.funFact}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 text-white py-3 px-6 rounded-full text-xl font-semibold"
            onClick={handleLearnedClick}
          >
            I learned something new!
          </motion.button>
          {showConfetti && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-2xl font-bold text-green-600"
            >
              Great job! Keep learning!
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FunFactModal;
