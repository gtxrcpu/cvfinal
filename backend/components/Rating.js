"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import axios from "axios";

export default function Rating({ darkMode }) {
  const [rating, setRating] = useState(0);
  const [votes, setVotes] = useState(0);
  const [averageRating, setAverageRating] = useState(0);

  const fetchRating = async () => {
    try {
      const response = await axios.get("http://localhost:5000/rating");
      const ratings = response.data;
      const totalVotes = ratings.length;
      const totalRating = ratings.reduce((acc, curr) => acc + curr.rating, 0);
      const average = totalVotes > 0 ? totalRating / totalVotes : 0;
      setVotes(totalVotes);
      setAverageRating(average);
    } catch (error) {
      console.error("Error fetching rating:", error);
    }
  };

  useEffect(() => {
    fetchRating();
  }, []);

  const handleRating = async (newRating) => {
    setRating(newRating);
    try {
      await axios.post("http://localhost:5000/rating", { rating: newRating });
      fetchRating(); // Refresh data setelah rating diberikan
    } catch (error) {
      console.error("Error submitting rating:", error);
    }
  };

  return (
    <motion.section
      id="rating"
      className={`py-20 px-6 md:px-12 lg:px-24 text-center transition-colors ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.h2 className="text-4xl font-extrabold mb-6 transition-colors">
        Rate My Work
      </motion.h2>

      <div className="flex justify-center space-x-2 text-3xl mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            className={`cursor-pointer transition ${
              star <= rating ? "text-yellow-400" : darkMode ? "text-gray-500" : "text-gray-300"
            }`}
            onClick={() => handleRating(star)}
          />
        ))}
      </div>

      <p className="mt-4 text-lg font-semibold transition-colors">
        Rating: <span className="text-yellow-400">{averageRating.toFixed(1)} ⭐</span> (from {votes} voters)
      </p>
    </motion.section>
  );
}
