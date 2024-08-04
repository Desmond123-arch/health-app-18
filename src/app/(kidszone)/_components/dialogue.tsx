import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

interface DialogItem {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  benefits: string;
  color: string;
  funFact: string;
}

interface Props {
  selectedItem: DialogItem | null;
  setSelectedItem: (item: DialogItem | null) => void;
}

const CongratulationsModal: React.FC<{ onClose: () => void }> = ({
  onClose,
}) => {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[90vw] sm:max-h-[90vh] w-full h-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-yellow-300 via-red-500 to-pink-500 rounded-3xl shadow-2xl">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 text-shadow-lg">
            Congratulations!
          </h1>
          <p className="text-3xl md:text-4xl text-white mb-8">
            You've learned a new health tip!
          </p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button
              onClick={onClose}
              className="text-2xl md:text-3xl py-4 px-8 bg-white text-pink-600 rounded-full shadow-lg hover:bg-pink-100 transition-all duration-300"
            >
              Keep Learning!
            </Button>
          </motion.div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

const KidFriendlyDialog: React.FC<Props> = ({
  selectedItem,
  setSelectedItem,
}) => {
  const [hasRead, setHasRead] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);

  useEffect(() => {
    if (selectedItem) {
      setIsOpen(true);
      setHasRead(false);
    } else {
      setIsOpen(false);
    }
  }, [selectedItem]);

  const handleButtonClick = () => {
    if (!hasRead) {
      setHasRead(true);
    } else {
      setShowCongrats(true);
    }
  };

  const handleDialogClose = (open: boolean) => {
    if (!open) {
      setSelectedItem(null);
      setHasRead(false);
    }
  };

  const handleCongratsClose = () => {
    setShowCongrats(false);
    setSelectedItem(null);
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, -5, 5, 0],
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleDialogClose}>
        <DialogContent className="sm:max-w-[90vw] sm:max-h-[90vh] w-full h-full flex flex-col justify-between p-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl shadow-2xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={contentVariants}
          >
            <DialogHeader>
              <DialogTitle className="text-4xl md:text-6xl text-white flex items-center justify-center mb-8">
                {selectedItem && (
                  <AnimatePresence>
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center"
                    >
                      <selectedItem.icon
                        className="w-16 h-16 md:w-24 md:h-24 mr-4"
                        style={{ color: selectedItem.color }}
                      />
                      <span className="font-bold">{selectedItem.name}</span>
                    </motion.div>
                  </AnimatePresence>
                )}
              </DialogTitle>
              <DialogDescription className="text-2xl md:text-3xl text-white text-center">
                {selectedItem?.benefits}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4 text-xl md:text-2xl text-white text-center">
              <h4 className="font-semibold mb-2">Fun Fact:</h4>
              <p>{selectedItem?.funFact}</p>
            </div>
          </motion.div>
          <div className="mt-8 flex flex-col items-center">
            <motion.div
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                onClick={handleButtonClick}
                className="text-xl md:text-2xl py-3 px-6 rounded-full shadow-lg transition-all duration-300"
                style={{
                  backgroundColor: hasRead ? "#4CAF50" : "#FFC107",
                  color: hasRead ? "white" : "#6A1B9A",
                }}
              >
                {hasRead ? "Close and celebrate!" : "I've read it!"}
              </Button>
            </motion.div>
          </div>
        </DialogContent>
      </Dialog>
      {showCongrats && <CongratulationsModal onClose={handleCongratsClose} />}
    </>
  );
};

export default KidFriendlyDialog;
