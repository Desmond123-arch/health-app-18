import React from "react";

const fruitEmojis = ["🍎", "🍌", "🥕", "🍇", "🍊", "🍍", "🥬", "🍓", "🥒"];

interface FruitProps {
  fruit: string;
  top: string;
  left: string;
  size: string;
  rotation: string;
}

const Fruit: React.FC<FruitProps> = ({ fruit, top, left, size, rotation }) => (
  <div
    className={`absolute ${size} `}
    style={{
      top,
      left,
      transform: `rotate(${rotation})`,
    }}
  >
    {fruit}
  </div>
);

const fruitPositions = [
  { top: "10%", left: "5%", size: "text-8xl", rotation: "15deg" },
  { top: "15%", left: "25%", size: "text-7xl", rotation: "45deg" },
  { top: "15%", left: "60%", size: "text-6xl", rotation: "30deg" },
  { top: "5%", left: "85%", size: "text-8xl", rotation: "0deg" },
  { top: "40%", left: "10%", size: "text-4xl", rotation: "60deg" },
  { top: "50%", left: "40%", size: "text-3xl", rotation: "20deg" },
  { top: "45%", left: "75%", size: "text-4xl", rotation: "10deg" },
  { top: "70%", left: "5%", size: "text-3xl", rotation: "40deg" },
  { top: "80%", left: "30%", size: "text-4xl", rotation: "25deg" },
  { top: "75%", left: "60%", size: "text-3xl", rotation: "55deg" },
  { top: "85%", left: "85%", size: "text-4xl", rotation: "35deg" },
  // Add more positions as needed
];

const FruitBackground: React.FC = () => {
  const fruits = fruitPositions.map((position, index) => (
    <Fruit
      key={index}
      fruit={fruitEmojis[index % fruitEmojis.length]}
      {...position}
    />
  ));

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
      {fruits}
    </div>
  );
};

export default FruitBackground;
