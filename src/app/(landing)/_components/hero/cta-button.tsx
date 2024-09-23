"use client";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CtaButton() {
  const images = [
    "https://cdn.usegalileo.ai/sdxl10/95a24ce4-ae13-42d8-b22d-b517a3d864b9.png",
    "https://cdn.usegalileo.ai/sdxl10/f41dd70c-d439-41b2-96af-b9b19902de41.png",
    "https://cdn.usegalileo.ai/sdxl10/dd7cc0d4-9664-404b-ba7d-f6c1b1383ad9.png",
    "https://cdn.usegalileo.ai/sdxl10/793c5225-04ea-44c4-8b66-01268b9e7751.png",
    "https://cdn.usegalileo.ai/sdxl10/9bd2997e-8c93-46b7-a746-d899c2c45d63.png",
  ];
  return (
    <Modal>
      <ModalTrigger className="flex justify-center group/modal-btn">
        <Button
          variant="secondary"
          size="lg"
          className="inline-flex gap-2 rounded-full text-sm
            hover:scale-110 transition duration-700 ease-in-out -ml-4"
        >
          Start Your Journey
          <Rocket />
        </Button>
      </ModalTrigger>
      <ModalBody className="mx-auto">
        <ModalContent className="px-4 sm:px-6 md:px-8">
          <h4 className="mt-8 text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
            Discover the health benefits of{" "}
            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
              fruits & veggies
            </span>
            now! 🚀
          </h4>
          <div className="flex justify-center items-center">
            {images.map((image, idx) => (
              <motion.div
                key={"images" + idx}
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
                className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
              >
                <Image
                  src={image}
                  alt="bali images"
                  width="500"
                  height="500"
                  className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                />
              </motion.div>
            ))}
          </div>
          <div className="py-10 flex flex-row gap-x-6 items-center justify-center max-w-sm mx-auto">
            <div className="text-center">
              <h5 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                Kids Zone
              </h5>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                For adventurers under 12 years old
              </p>
            </div>
            <div className="text-center">
              <h5 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                Teens Zone
              </h5>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                For explorers 12 years and older
              </p>
            </div>
          </div>
        </ModalContent>
        <ModalFooter className="gap-4">
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="rounded-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold"
          >
            <Link href={"/kids"}>Kids Zone</Link>
          </Button>
          <Button
            asChild
            variant="default"
            size="lg"
            className="rounded-full text-gray-900 font-semibold"
          >
            <Link href={"/teens"}>Teens Zone</Link>
          </Button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
}
