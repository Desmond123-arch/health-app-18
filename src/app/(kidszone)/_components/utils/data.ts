import { Apple, Banana, Carrot, Grape, LucideIcon } from "lucide-react";

export interface ProduceItem {
  name: string;
  icon: LucideIcon;
  benefits: string;
  funFact: string;
  color: string;
}

export const produceItems: ProduceItem[] = [
  {
    name: "Apple",
    icon: Apple,
    color: "#ff5252",
    benefits: "Apples keep your heart happy and your tummy full!",
    funFact:
      "It takes about 36 apples to make one gallon of yummy apple cider!",
  },
  {
    name: "Banana",
    icon: Banana,
    color: "#ffca28",
    benefits: "Bananas give you energy and make your muscles strong!",
    funFact: "Bananas are berries, but strawberries aren't! Crazy, right?",
  },
  {
    name: "Carrot",
    icon: Carrot,
    color: "#ff7043",
    benefits: "Carrots help you see better, even at night!",
    funFact:
      "Carrots used to be purple or white. Orange carrots are like super carrots!",
  },
  {
    name: "Grape",
    icon: Grape,
    color: "#8e24aa",
    benefits:
      "Grapes are like tiny balls of health that make your brain smart!",
    funFact:
      "There are over 8,000 different types of grapes. That's a lot of grapes!",
  },
];
