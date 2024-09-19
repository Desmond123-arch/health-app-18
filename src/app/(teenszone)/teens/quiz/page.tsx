"use client";
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
  const numQuestions = data["quiz"].questions.length;

  while (randomValues.length < 5) {
    const value = Math.floor(Math.random() * numQuestions);
    if (!randomValues.includes(value)) {
      randomValues.push(value);
    }
  }

  for (const index of randomValues) {
    questions.push(data["quiz"].questions[index]);
  }

  return questions;
}

const TeensZone: React.FC = () => {
  const [currentQuiz, setCurrentQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [dailyProgress, setDailyProgress] = useState(0);
  const [questions, setQuestions] = useState(getRandomQuestions());
  const [questionNumber, setQuestionNumber] = useState(1);
  const [answerSelected, setAnswerSelected] = useState<string>("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [incorrect, setIncorrect] = useState<string | undefined>();

  useEffect(() => {
    // Simulating daily progress update
    const interval = setInterval(() => {
      setDailyProgress((prev) => (prev < 100 ? prev + 10 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const startQuiz = () => {
    setScore(0);
    setStreak(0);
    setCurrentQuiz(true);
    setQuestions(getRandomQuestions());
    setQuestionNumber(1);
  };

  const handleAnswer = (id: string, correctAnswer: string) => {
    const isCorrect = id === correctAnswer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
      setStreak((prev) => prev + 1);
      setShowAnswer(false); // Automatically proceed to the next question
      setAnswerSelected("");
      setIncorrect(undefined);

      // Move to the next question if the answer is correct
      if (questionNumber < questions.length) {
        setTimeout(() => {
          setQuestionNumber((prev) => prev + 1);
        }, 500); // Add a slight delay before moving to the next question
      } else {
        // Quiz is finished
        setCurrentQuiz(false);
      }
    } else {
      setStreak(0);
      setIncorrect(id);
      setShowAnswer(true);
    }
  };

  const startAgain = () => {
    setShowAnswer(false);
    setQuestionNumber(1);
    setQuestions(getRandomQuestions());
    setScore(0);
    setStreak(0);
    setCurrentQuiz(true);
  };

  return (
    <div className="container mx-auto py-8 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-lg">
        <h1 className="text-4xl font-bold text-center mb-8">Teens Nutritional Zone</h1>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Nutrition Quiz</CardTitle>
          </CardHeader>
          <CardContent>
            {!currentQuiz ? (
              <div className="flex justify-center">
                <Button onClick={startQuiz}>Start Quiz</Button>
              </div>
            ) : (
              <div>
                {questions.length > 0 && questionNumber <= questions.length ? (
                  <>
                    <p className="mb-4">{questions[questionNumber - 1].question}</p>
                    <div className="flex justify-center mb-4">
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}></motion.div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {questions[questionNumber - 1].options.map((option) => (
                        <Button
                          key={option.id}
                          onClick={() => handleAnswer(option.id, questions[questionNumber - 1].correctAnswer)}
                          className={clsx(
                            "w-full border border-black my-2 bg-black text-white rounded-md",
                            { "bg-red-800": option.id === incorrect && showAnswer },
                            {
                              "bg-green-700 text-white":
                                option.id === questions[questionNumber - 1].correctAnswer && showAnswer,
                            }
                          )}
                        >
                          {option.answer}
                        </Button>
                      ))}
                    </div>
                    <p className="mt-4">Score: {score} | Streak: {streak}</p>
                  </>
                ) : (
                  <div className="text-center">
                    <h1 className="text-primary">{`Your streak was ${streak}`}</h1>
                    <Button onClick={startAgain}>Start Again</Button>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeensZone;
