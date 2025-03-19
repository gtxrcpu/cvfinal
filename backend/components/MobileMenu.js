import Link from "next/link";
import { motion } from "framer-motion";

export default function MobileMenu({ isOpen, toggleMenu, darkMode }) {
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          className={`
            fixed top-0 left-0 w-full h-screen z-50 
            backdrop-blur-md 
            ${darkMode ? "bg-gray-900/90 text-white" : "bg-white/90 text-gray-900"}
          `}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
            <h2 className="text-xl font-semibold">Menu</h2>
            <button
              onClick={toggleMenu}
              className="text-3xl hover:text-red-500 transition"
            >
              &times;
            </button>
          </div>

          <nav className="flex flex-col gap-6 p-8 text-xl font-medium">
            <Link href="/">
              <span onClick={toggleMenu} className="hover:text-blue-500 cursor-pointer">
                Home
              </span>
            </Link>
            <Link href="/about">
              <span onClick={toggleMenu} className="hover:text-blue-500 cursor-pointer">
                About
              </span>
            </Link>
            <Link href="/skills">
              <span onClick={toggleMenu} className="hover:text-blue-500 cursor-pointer">
                Skills
              </span>
            </Link>
            <Link href="/projects">
              <span onClick={toggleMenu} className="hover:text-blue-500 cursor-pointer">
                Projects
              </span>
            </Link>
            <Link href="/contact">
              <span onClick={toggleMenu} className="hover:text-blue-500 cursor-pointer">
                Contact
              </span>
            </Link>
          </nav>
        </motion.div>
      )}
    </>
  );
}
