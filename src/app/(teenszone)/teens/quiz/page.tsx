"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Apple, Banana, Carrot } from "lucide-react";
import { data } from "./data";
import clsx from "clsx";

function getRandomQuestions() {
  const randomValues: number[] = [];
  const questions = [];
  const numQuestions = data['quiz'].questions.length;

  while (randomValues.length < 5) {
    const value = Math.floor(Math.random() * numQuestions);
    if (!randomValues.includes(value)) {
      randomValues.push(value);
    }
  }

  for (const index of randomValues) {
    questions.push(data['quiz'].questions[index]);
  }

  return questions;
}

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
  const [currentQuiz, setCurrentQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [dailyProgress, setDailyProgress] = useState(0);
  const [questions, setQuestions] = useState(getRandomQuestions());
  let [questionNumber, setQuestionNumber] = useState(1);
  const [answerSelected, setAnswerSelected] = useState<Record<number, number>>({});
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    // Simulating daily progress update
    const fetchedQuestions = getRandomQuestions();
    setQuestions(fetchedQuestions);
    const interval = setInterval(() => {
      setDailyProgress((prev) => (prev < 100 ? prev + 10 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const startQuiz = () => {
    setScore(0);
    setStreak(0);
    setCurrentQuiz(true);
  };

  const handleAnswer = (id: String, answer:String) => {
    const isCorrect = id === answer
    if (isCorrect) {
      setScore((prev) => prev + 1);
      setStreak((prev) => prev + 1);
      setQuestionNumber(questionNumber=questionNumber+1)
      setShowAnswer(false);
    } else {
      setStreak(0);
      setShowAnswer(true);
    }
  };
  const startAgain = () => {
    setShowAnswer(false);
    setQuestionNumber(1);
    const fetchedQuestions = getRandomQuestions();
    setQuestions(fetchedQuestions);
    setScore(0);
    setStreak(0);
  }

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
            {currentQuiz === false ? (
              <Button onClick={startQuiz}>Start Quiz</Button>
            ) : (
              <div>
                {(questions.length > 0 && questionNumber < 5)  ? (
                  <>
                    <p className="mb-4">{questions[questionNumber - 1].question}</p>
                    <div className="flex justify-center mb-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                      </motion.div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {questions[questionNumber - 1].options.map((option) => (
                        <Button
                          key={option.id}
                          onClick={() => handleAnswer(option.id, questions[questionNumber - 1].correctAnswer)}
                          className={clsx(
                            "w-full border border-black my-2 rounded-md",
                            { "bg-white text-black": answerSelected[questionNumber] === parseInt(option.id) },
                            { "bg-green-700 text-white": option.id === questions[questionNumber - 1].correctAnswer && showAnswer }
                          )}
                        >
                          {option.answer}
                        </Button>
                      ))}
                    </div>
                    <p className="mt-4">
                      Score: {score} | Streak: {streak}
                    </p>
                  </>
                ) : (
                  <div>
                    <h1 className="text-center text-primary">
                    {` You streak was ${streak}`}
                  </h1>
                  <Button onClick={startAgain}>Start Again</Button>
                  </div>
                )}
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