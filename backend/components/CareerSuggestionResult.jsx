"use client";
import { motion } from "framer-motion";
import { FaSmileWink } from "react-icons/fa";

export default function CareerSuggestionResult({ result }) {
  return (
    <motion.div
      className="bg-gradient-to-br from-blue-500 to-purple-600 p-10 rounded-xl text-white text-center shadow-2xl mx-auto max-w-xl mt-12"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <FaSmileWink size={60} className="mx-auto mb-4" />
      <h2 className="text-4xl font-extrabold mb-4">Hasil Kamu 🎉</h2>
      <p className="text-2xl mb-6">{result}</p>
      <a
        href="#projects"
        className="bg-white text-blue-600 font-bold px-6 py-3 rounded-full hover:bg-gray-200 transition inline-block"
      >
        Lihat Project Inspirasi 💡
      </a>
    </motion.div>
  );
}
