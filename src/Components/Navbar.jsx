import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // ✅ Correct usage of navigation

  return (
    <nav className="bg-Primary text-highlight p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side - Logo with animation */}
        <motion.div
          onClick={() => navigate("/")} // ✅ Correct navigation
          className="text-3xl font-extrabold bg-gradient-to-r from-highlight to-yellow-500 text-transparent bg-clip-text drop-shadow-md cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Yatra
        </motion.div>

        {/* Middle - Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-lg">
          {["Home", "Virtual Tour", "Dashboard", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={
                  item === "Home"
                    ? "/"
                    : `/${item.replace(" ", "").toLowerCase()}`
                }
                className="hover:text-hoverEffect transition-all duration-300 ease-in-out"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side - Ministry Text */}
        <motion.div
          className="hidden md:block text-sm font-bold bg-highlight text-black px-3 py-1 rounded-lg shadow-md hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ministry of Tours and Travel
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          className="md:hidden flex flex-col items-center space-y-3 mt-3 bg-secondary text-white py-4 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {["home", "virtualtour", "dashboard", "contact"].map((item) => (
            <li key={item}>
              <Link
                to={
                  item === "home"
                    ? "/"
                    : `/${item.replace(" ", "").toLowerCase()}`
                }
                className="hover:text-hoverEffect transition-all duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}
