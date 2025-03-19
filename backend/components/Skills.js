"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaHtml5, FaJs, FaGitAlt } from "react-icons/fa";

export default function Skills({ darkMode }) {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-blue-400" />, bg: "bg-blue-900" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-400" />, bg: "bg-green-900" },
    { name: "MongoDB", icon: <FaDatabase className="text-yellow-400" />, bg: "bg-yellow-900" },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-300" />, bg: "bg-blue-800" },
    { name: "HTML", icon: <FaHtml5 className="text-orange-400" />, bg: "bg-orange-800" },
    { name: "JavaScript", icon: <FaJs className="text-yellow-300" />, bg: "bg-yellow-700" },
    { name: "Git", icon: <FaGitAlt className="text-red-400" />, bg: "bg-red-800" },
  ];

  return (
    <motion.section
      id="skills"
      className={`py-20 px-6 md:px-12 lg:px-24 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl font-extrabold mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My Skills
        </motion.h2>

        {/* Skill Cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`p-6 ${skill.bg} text-white rounded-lg shadow-lg flex flex-col items-center justify-center transform hover:scale-105 transition duration-300`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-5xl">{skill.icon}</div>
              <p className="text-lg font-semibold mt-3">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
