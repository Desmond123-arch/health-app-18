import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { ProduceItem } from "./utils/data";

interface ProduceCardProps {
  item: ProduceItem;
  onClick: () => void;
}

const ProduceCard: React.FC<ProduceCardProps> = ({ item, onClick }) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <motion.div
      className="flex flex-col gap-3 pb-3 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <div className="relative w-full aspect-video bg-gray-200 rounded-xl overflow-hidden">
        {imageLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <Image
          src={item.imageUrl}
          alt={item.name}
          layout="fill"
          objectFit="cover"
          onLoadingComplete={() => setImageLoading(false)}
        />
      </div>
      <div>
        <p className="text-[#151c0d] text-base font-medium leading-normal">
          {item.name}
        </p>
        <p className="text-[#769c49] text-sm font-normal leading-normal">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProduceCard;
