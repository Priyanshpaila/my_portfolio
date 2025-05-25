"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const parallax = (offset: number, strength: number) => ({
  transform: `translateY(${offset * strength}px)`
});

export default function ComingSoon() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center overflow-hidden px-4">
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-center bg-cover pointer-events-none opacity-30 dark:opacity-50"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')",
          ...parallax(offsetY, 0.2),
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-10 max-w-xl text-center z-10"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          🚧 Coming Soon
        </motion.h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
          We&apos;re still working on this feature. Please check back soon!
        </p>
        <motion.div whileHover={{ scale: 1.05 }}>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition duration-300"
          >
            Go Back
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full bg-indigo-500 opacity-30 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </div>
  );
}
