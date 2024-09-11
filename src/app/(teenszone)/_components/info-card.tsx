"use client";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ProduceCard from "./card";
import { ProduceItem, produceItems } from "./utils/data";

export function AnimatedModalDemo() {
  const [selectedItem, setSelectedItem] = useState<ProduceItem | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
      {produceItems.map((item, index) => (
        <Modal key={index}>
          <ModalTrigger>
            <ProduceCard item={item} onClick={() => setSelectedItem(item)} />
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                Learn about{" "}
                <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                  {item.name}
                </span>
              </h4>
              <div className="flex justify-center items-center">
                <motion.div
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  {" "}
                  <div className="w-40 h-40 bg-gray-200 animate-pulse absolute inset-0 m-1 rounded-lg" />
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width="160"
                    height="160"
                    className="rounded-lg object-cover flex-shrink-0 relative z-10"
                    onLoadingComplete={(img) => {
                      img.classList.remove("opacity-0");
                    }}
                    loading="lazy"
                  />
                </motion.div>
              </div>
              <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                <div className="flex items-center justify-center">
                  <VitaminIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm text-center">
                    {item.detailedDescription}
                  </span>
                </div>
              </div>
            </ModalContent>
            <ModalFooter className="gap-4">
              <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                Close
              </button>
              <button className="bg-green-500 text-white dark:bg-green-600 dark:text-white text-sm px-2 py-1 rounded-md border border-green-600 w-28">
                Learn More
              </button>
            </ModalFooter>
          </ModalBody>
        </Modal>
      ))}
    </div>
  );
}

const VitaminIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2L7 7.5V12L12 22L17 12V7.5L12 2Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
};

// You can add more relevant icons here
