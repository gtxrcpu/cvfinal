"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact({ darkMode }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      id="contact"
      className={`py-20 px-6 md:px-12 lg:px-24 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>

        <form
          className={`p-8 rounded-xl shadow-lg space-y-6 transition-colors ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg focus:ring-2 outline-none transition-colors ${
              darkMode ? "bg-gray-700 text-white focus:ring-blue-400" : "bg-gray-100 text-gray-900 focus:ring-blue-500"
            }`}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg focus:ring-2 outline-none transition-colors ${
              darkMode ? "bg-gray-700 text-white focus:ring-blue-400" : "bg-gray-100 text-gray-900 focus:ring-blue-500"
            }`}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg h-32 focus:ring-2 outline-none transition-colors ${
              darkMode ? "bg-gray-700 text-white focus:ring-blue-400" : "bg-gray-100 text-gray-900 focus:ring-blue-500"
            }`}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
}
