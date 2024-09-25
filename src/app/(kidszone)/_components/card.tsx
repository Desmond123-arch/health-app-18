import { Button } from "@/components/ui/button";
import { CardBody, CardContainer, CardItem } from "@/components/ui/fancy-card";
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
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto  h-auto rounded-xl p-6 border">
        {/* Title */}
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {item.name}
        </CardItem>

        {/* Image */}
        <CardItem translateZ="100" className="w-full mt-4">
          {imageLoading && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
          <Image
            src={item.imageUrl}
            alt={item.name}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            onLoadingComplete={() => setImageLoading(false)}
          />
        </CardItem>

        {/* Description */}
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-lg max-w-sm mt-5 dark:text-neutral-300"
        >
          Click on the me or the button to learn about {item.name}s
        </CardItem>

        {/* Button and Link */}
        <div className="flex justify-between items-center mt-20">
          <Button className="rounded-full" onClick={onClick}>
            Click to learn
          </Button>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProduceCard;
