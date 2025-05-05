import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 flex justify-between items-center px-6 py-4 bg-gradient-to-b from-amber-500 to-transparent">
      <Link to="/" className="flex items-center space-x-2">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://i.gyazo.com/7fe34311942fdda53e9b0155c16d26e3.png"
            alt="Ashsail Honey Logo"
            className="h-8 w-8 object-contain"
          />
        </motion.div>
        <motion.span 
          className="text-2xl font-bold text-white"
          whileHover={{ scale: 1.05 }}
        >
          Ashsail Honey Imports
        </motion.span>
      </Link>
      <div className="hidden md:flex space-x-8 text-white">
        <Link to="/about" className="hover:text-amber-400 transition">About</Link>
        <Link to="/products" className="hover:text-amber-400 transition">Products</Link>
        <Link to="/contact" className="hover:text-amber-400 transition">Contact</Link>
      </div>
    </nav>
  );
}
