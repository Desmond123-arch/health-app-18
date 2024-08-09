"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Apple, Banana, Carrot } from "lucide-react";

const produceItems = [
  {
    name: "Apple",
    icon: Apple,
    fact: "Apples are rich in antioxidants that may lower the risk of diabetes.",
  },
  {
    name: "Banana",
    icon: Banana,
    fact: "Bananas are high in potassium, which is essential for heart health.",
  },
  {
    name: "Carrot",
    icon: Carrot,
    fact: "Carrots are packed with beta-carotene, promoting good eye health.",
  },
  // Add more items as needed
];

const TeensZone: React.FC = () => {
  const [currentQuiz, setCurrentQuiz] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [dailyProgress, setDailyProgress] = useState(0);

  useEffect(() => {
    // Simulating daily progress update
    const interval = setInterval(() => {
      setDailyProgress((prev) => (prev < 100 ? prev + 10 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const startQuiz = () => {
    setCurrentQuiz(Math.floor(Math.random() * produceItems.length));
    setScore(0);
    setStreak(0);
  };

  const handleAnswer = (correct: boolean) => {
    if (correct) {
      setScore((prev) => prev + 1);
      setStreak((prev) => prev + 1);
    } else {
      setStreak(0);
    }
    setCurrentQuiz(Math.floor(Math.random() * produceItems.length));
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Teens Nutritional Zone
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Daily Nutrition Goal</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={dailyProgress} className="w-full" />
            <p className="mt-2 text-center">
              {dailyProgress}% of daily goal reached
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Nutrition Quiz</CardTitle>
          </CardHeader>
          <CardContent>
            {currentQuiz === null ? (
              <Button onClick={startQuiz}>Start Quiz</Button>
            ) : (
              <div>
                <p className="mb-4">Which produce is this?</p>
                <div className="flex justify-center mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {React.createElement(produceItems[currentQuiz].icon, {
                      size: 64,
                    })}
                  </motion.div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {produceItems.map((item, index) => (
                    <Button
                      key={item.name}
                      onClick={() => handleAnswer(index === currentQuiz)}
                    >
                      {item.name}
                    </Button>
                  ))}
                </div>
                <p className="mt-4">
                  Score: {score} | Streak: {streak}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Nutritional Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {produceItems.map((item) => (
            <Card key={item.name}>
              <CardContent className="flex items-center p-4">
                <item.icon className="mr-4" size={32} />
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-sm">{item.fact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeensZone;
