"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FreelancerProfile() {
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    const stored = localStorage.getItem("freelancer-rating");
    if (stored) setRating(Number(stored));
  }, []);

  const handleRating = (value: number) => {
    setRating(value);
    localStorage.setItem("freelancer-rating", value.toString());
  };

  const skills = ["React", "Next.js", "Tailwind CSS", "Framer Motion"];

  return (
    <motion.div
      className="relative max-w-4xl mx-auto px-6 py-8 bg-white dark:bg-[#111827] rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-600"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-br before:from-green-300/10 before:to-blue-400/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity" />

      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Ishan Raj
      </h2>

      <p className="text-gray-700 dark:text-gray-300 mb-4">
        🎯 Frontend Engineer with a passion for building beautiful, performant
        UIs.
      </p>

      <div className="mb-6">
        <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">
          Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700/50 text-sm text-gray-800 dark:text-gray-100 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">
          Portfolio
        </h3>
        <div className="flex flex-wrap gap-4 text-blue-600 dark:text-blue-400">
          <a href="https://github.com/your-profile" target="_blank">
            GitHub
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank">
            LinkedIn
          </a>
          <a href="https://yourportfolio.com" target="_blank">
            Portfolio
          </a>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">
          Completed Projects
        </h3>
        <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
          <li>
            <strong>CryptoWeather Nexus</strong> – Full-stack dashboard (Mar
            2025)
          </li>
          <li>
            <strong>Time Tracker App</strong> – Flask + JS-based time manager
            (Feb 2025)
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">
          Your Rating
        </h3>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.button
              key={star}
              onClick={() => handleRating(star)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`text-3xl transition-all ${
                star <= rating ? "text-yellow-400" : "text-gray-400"
              }`}
            >
              ★
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
