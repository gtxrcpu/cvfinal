"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function Comments({ darkMode }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const res = await axios.get("http://localhost:5000/comments");
      setComments(res.data.reverse()); // Terbaru di atas
    } catch (err) {
      console.error("❌ Error fetching comments:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      const res = await axios.post("http://localhost:5000/comments/add", {
        text: newComment,
      });
      setComments([res.data, ...comments]);
      setNewComment("");
    } catch (err) {
      console.error("❌ Error adding comment:", err);
    }
  };

  return (
    <motion.section
      id="comments"
      className={`py-20 px-6 md:px-12 lg:px-24 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-4xl font-extrabold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        User Comments
      </motion.h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto space-y-4 mb-8"
      >
        <textarea
          className={`w-full p-3 rounded-lg h-32 transition-colors outline-none focus:ring-2 ${
            darkMode
              ? "bg-gray-700 text-white focus:ring-blue-400"
              : "bg-gray-100 text-gray-900 focus:ring-blue-500"
          }`}
          placeholder="Write your comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition"
        >
          Submit Comment
        </button>
      </form>

      <div className="space-y-4 max-w-3xl mx-auto">
        {comments
          .slice(0, showAll ? comments.length : 3)
          .map((comment, index) => (
            <motion.div
              key={index}
              className={`p-4 rounded-lg shadow transition-colors ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <p>{comment.text}</p>
              <p className="text-sm text-gray-400 mt-2">
                {new Date(comment.createdAt).toLocaleString()}
              </p>
            </motion.div>
          ))}
        {comments.length > 3 && (
          <div className="text-center mt-4">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-blue-500 hover:underline font-semibold"
            >
              {showAll ? "Show Less" : "View More Comments"}
            </button>
          </div>
        )}
      </div>
    </motion.section>
  );
}
