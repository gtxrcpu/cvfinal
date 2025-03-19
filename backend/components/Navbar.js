"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolling ? "bg-opacity-80 shadow-xl" : "bg-opacity-100"
      } ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-900"
      } border-b border-gray-300 dark:border-gray-700 backdrop-blur-lg`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          MY CV
        </h1>

        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {["Home", "About", "Skills", "Projects", "Contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase()}`}
                className="hover:underline hover:underline-offset-8 hover:text-blue-500 transition"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full shadow-md hover:scale-110 transition"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400" size={20} />
            ) : (
              <FaMoon className="text-gray-800" size={20} />
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu - FIXED COLOR TOGGLE */}
      {isOpen && (
        <motion.div
          className={`absolute top-16 left-0 w-full py-6 shadow-xl rounded-b-xl text-center ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
          }`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="space-y-4 text-lg font-medium">
            {["Home", "About", "Skills", "Projects", "Contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section.toLowerCase()}`}
                  className="block hover:text-blue-500 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
