"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Portofolio Website",
    description: "Website client mahasiswa yang ingin dibuatkan web portofolio industripro.",
    image: "/project1.jpeg",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
  },
  {
    title: "E-Commerce App",
    description: "Web Book Store dengan fitur CRUD, Admin Panel dan manajemen produk.",
    image: "/project2.jpeg",
    tech: ["PHP", "SQL", "CSS"],
  },
  {
    title: "Dashboard Analytics",
    description: "Dashboard interaktif untuk menganalisis data bisnis.",
    image: "/vue.jpeg",
    tech: ["Vue.js", "Firebase", "D3.js"],
  },
];

export default function Project({ darkMode }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.section
      id="projects"
      className={`py-20 px-6 md:px-12 lg:px-24 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-4xl font-extrabold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>

        {/* Timeline Layout */}
        <div className="relative border-l-4 border-gray-700 pl-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="mb-12 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-8 top-2 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-900"></div>

              {/* Project Content */}
              <div
                className="bg-gray-800 text-white p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedProject(project)}
              >
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <div className="mt-4 flex gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-700 px-3 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white text-gray-900 rounded-lg shadow-xl p-6 max-w-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              onClick={(e) => e.stopPropagation()} // Prevent close on click inside
            >
              <h3 className="text-3xl font-bold">{selectedProject.title}</h3>
              <p className="mt-2">{selectedProject.description}</p>
              <div className="mt-4 flex gap-2">
                {selectedProject.tech.map((tech, i) => (
                  <span key={i} className="bg-gray-300 px-3 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <button
                className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
