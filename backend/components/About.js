"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About({ darkMode }) {
  return (
    <motion.section
      id="about"
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
          About Me
        </motion.h2>

        {/* Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Foto Profil dengan Card Design */}
          <motion.div
            className="relative w-full max-w-xs md:max-w-sm bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-gray-700 hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
          >
            <Image
              src="/profile.jpeg"
              alt="Profile Picture"
              width={400}
              height={500}
              className="object-cover w-full h-full"
            />
            {/* Overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
            {/* Text overlay */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-2xl font-bold">Bentar</h3>
              <p className="text-sm text-gray-300">Freelance Web Developer</p>
            </div>
          </motion.div>

          {/* Text Section */}
          <div>
            <p className="text-lg text-gray-400 leading-relaxed">
              Hello! I'm <span className="text-blue-400 font-semibold">Bentar</span>, a passionate 
              <span className="text-blue-400 font-semibold"> Freelance Web Developer</span> who loves crafting elegant 
              and functional websites. My expertise lies in frontend & backend development, ensuring smooth user 
              experiences with modern technologies.
            </p>
            <p className="text-lg text-gray-400 mt-4 leading-relaxed">
              I specialize in React.js, Next.js, and Tailwind CSS for modern UI/UX development, 
              along with Node.js & MongoDB for powerful backends.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
