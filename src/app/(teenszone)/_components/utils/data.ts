import { Apple, Banana, Carrot, Grape } from "lucide-react";

export interface ProduceItem {
  id: string;
  name: string;
  icon: React.ElementType;
  benefits: string[];
  details: string;
  color: string;
}

export const produceItems: ProduceItem[] = [
  {
    id: "apple",
    name: "Apple",
    icon: Apple,
    benefits: [
      "Boosts brain power 🧠",
      "Keeps your heart happy ❤️",
      "Helps you stay fit 💪",
    ],
    details:
      "Apples are packed with fiber and antioxidants. They're great for a quick energy boost and can help improve your memory. Plus, they're super convenient for snacking!",
    color: "#FF6B6B", // Soft red
  },
  {
    id: "banana",
    name: "Banana",
    icon: Banana,
    benefits: [
      "Instant energy kick ⚡",
      "Mood booster 😊",
      "Helps muscle recovery 🏋️‍♂️",
    ],
    details:
      "Bananas are nature's energy bars! They're full of potassium which is great for your muscles after a workout. They can also help you feel happier and more focused.",
    color: "#FFD93D", // Bright yellow
  },
  {
    id: "carrot",
    name: "Carrot",
    icon: Carrot,
    benefits: [
      "Super vision power 👀",
      "Glowing skin ✨",
      "Boosts immunity 🛡️",
    ],
    details:
      "Carrots are loaded with beta-carotene, which is great for your eyes and skin. They can help boost your immune system, keeping you healthy and ready for anything!",
    color: "#FF9A3C", // Vibrant orange
  },
  {
    id: "grape",
    name: "Grape",
    icon: Grape,
    benefits: ["Brain boost 🧠", "Heart helper ❤️", "Skin glow-up ✨"],
    details:
      "Grapes are tiny powerhouses of antioxidants. They're great for your brain, heart, and can even help your skin look amazing. Plus, they're nature's candy!",
    color: "#6A0DAD", // Deep purple
  },
  {
    id: "orange",
    name: "Orange",
    icon: Grape,
    benefits: [
      "Immune system supercharger 💪",
      "Skin brightener 🌟",
      "Mood lifter 😊",
    ],
    details:
      "Oranges are vitamin C bombs! They're great for keeping your immune system strong, making your skin glow, and even helping you feel more upbeat and energetic.",
    color: "#FFA500", // Classic orange
  },
  {
    id: "tomato",
    name: "Tomato",
    icon: Grape,
    benefits: ["Heart helper ❤️", "Skin protector 🛡️", "Bone strengthener 🦴"],
    details:
      "Tomatoes are packed with lycopene, which is great for your heart and can help protect your skin from sun damage. They're also good for keeping your bones strong!",
    color: "#E74C3C", // Tomato red
  },
];
