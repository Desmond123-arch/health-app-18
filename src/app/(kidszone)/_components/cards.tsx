"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Apple, Banana, Carrot, LucideIcon } from "lucide-react";
import {
  TreePineIcon,
  AppleIcon,
  BananaIcon,
  GrapeIcon,
  CherryIcon,
  IconProps,
} from "@/components/ui/icons/i";

interface ProduceItem {
  name: string;
  icon: LucideIcon;
  color: string;
  benefits: string;
  funFact: string;
}

const produceItems: ProduceItem[] = [
  {
    name: "Apple",
    icon: Apple,
    color: "#ff5252",
    benefits:
      "Apples are rich in fiber and antioxidants. They may lower the risk of heart disease and aid in weight management.",
    funFact: "It takes about 36 apples to create one gallon of apple cider.",
  },
  {
    name: "Banana",
    icon: Banana,
    color: "#ffca28",
    benefits:
      "Bananas are high in potassium and vitamin B6. They support heart health and can help regulate blood sugar levels.",
    funFact: `Bananas are berries, but strawberries aren't!`,
  },
  {
    name: "Carrot",
    icon: Carrot,
    color: "#ff7043",
    benefits:
      "Carrots are packed with beta-carotene and fiber. They promote good vision and support a healthy immune system.",
    funFact:
      "Carrots were originally purple or white. Orange carrots were created in the 17th century!",
  },
  {
    name: "Broccoli",
    icon: Carrot, // Note: Still using Carrot icon as a placeholder for Broccoli
    color: "#66bb6a",
    benefits: `Broccoli is rich in vitamins C and K. It's known for its anti-inflammatory and cancer-fighting properties.`,
    funFact:
      "Broccoli is a man-made vegetable, developed from wild cabbage plants!",
  },
];

interface ProduceCardProps {
  item: ProduceItem;
  onClick: () => void;
}

const ProduceCard: React.FC<ProduceCardProps> = ({ item, onClick }) => (
  <Card
    className="overflow-hidden rounded-2xl cursor-pointer transition-transform hover:scale-105 bg-[#393937]"
    onClick={onClick}
  >
    <div
      className="p-6 flex flex-col items-center justify-center"
      style={{ backgroundColor: item.color }}
    >
      <item.icon className="w-16 h-16 mb-4 text-white" />
      <h3 className="text-xl font-bold text-white">{item.name}</h3>
    </div>
    <div className="p-4  text-white text-center">
      <h4 className="text-lg font-semibold mb-2">Did you know?</h4>
      <p className="mb-4 text-sm">{item.funFact}</p>
      <Button
        variant={"default"}
        onClick={(e) => {
          e.stopPropagation(); // Prevent card click when button is clicked
          onClick();
        }}
        className="rounded-full bg-white text-black w-fit hover:animate-none hover:bg-gray-200 px-10"
      >
        Click me!
      </Button>
    </div>
  </Card>
);

const KidsZoneFruitsVeggies: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ProduceItem | null>(null);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Fruits and Veggies Fun!
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {produceItems.map((item) => (
          <ProduceCard
            key={item.name}
            item={item}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </div>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center">
              {selectedItem && (
                <>
                  <selectedItem.icon
                    className="w-8 h-8 mr-2"
                    style={{ color: selectedItem.color }}
                  />
                  {selectedItem.name}
                </>
              )}
            </DialogTitle>
            <DialogDescription className="text-lg">
              {selectedItem?.benefits}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <Button onClick={() => setSelectedItem(null)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default KidsZoneFruitsVeggies;
