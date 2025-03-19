"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import CareerSuggestionResult from "./CareerSuggestionResult";

const questions = [
  {
    question: "Kamu lebih suka ngerjain?",
    options: [
      { text: "Frontend / UI Design", value: "frontend" },
      { text: "Backend / Logic", value: "backend" },
    ],
  },
  {
    question: "Lebih suka kerjaan yang...",
    options: [
      { text: "Visual & kreatif", value: "frontend" },
      { text: "Analytical & problem solving", value: "backend" },
    ],
  },
  {
    question: "Lebih nyaman kerja di...",
    options: [
      { text: "Tim besar & kolaborasi", value: "frontend" },
      { text: "Individu / Tim kecil", value: "backend" },
    ],
  },
  {
    question: "Lebih senang ngulik...",
    options: [
      { text: "Animasi & Interaksi", value: "frontend" },
      { text: "Database & Performance", value: "backend" },
    ],
  },
];

export default function CareerSuggestionForm() {
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState("");

  const handleOptionClick = (value, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const frontendPoints = answers.filter((ans) => ans === "frontend").length;
    const backendPoints = answers.filter((ans) => ans === "backend").length;
    let suggestion = "";

    if (frontendPoints > backendPoints) {
      suggestion = "Kamu cocok menjadi Frontend Developer! 🎨✨";
    } else if (backendPoints > frontendPoints) {
      suggestion = "Kamu cocok menjadi Backend Developer! ⚙️💻";
    } else {
      suggestion = "Kamu cocok menjadi Fullstack Developer! 🚀🔥";
    }

    setResult(suggestion);
    setShowResult(true);
  };

  if (showResult) {
    return <CareerSuggestionResult result={result} />;
  }

  return (
    <motion.div
      className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-3xl mx-auto my-12 transition-colors duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800 dark:text-white">
        Temukan Jalur Karirmu 🚀
      </h2>
      {questions.map((q, index) => (
        <div key={index} className="mb-8">
          <p className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
            {q.question}
          </p>
          <div className="flex gap-4 flex-wrap">
            {q.options.map((option, i) => (
              <motion.button
                key={i}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className={`px-5 py-2 rounded-full border font-medium transition-colors duration-300
                ${
                  answers[index] === option.value
                    ? "bg-blue-500 text-white border-blue-500 shadow-md"
                    : "bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
                onClick={() => handleOptionClick(option.value, index)}
              >
                {option.text}
              </motion.button>
            ))}
          </div>
        </div>
      ))}
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="mt-8 w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-xl shadow-lg transition"
        onClick={handleSubmit}
        disabled={answers.length < questions.length}
      >
        Lihat Hasil 🎯
      </motion.button>
    </motion.div>
  );
}
