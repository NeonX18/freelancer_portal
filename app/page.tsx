"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.main
      className="min-h-screen flex flex-col items-center justify-center text-center bg-white dark:bg-[#0f172a] text-black dark:text-white px-6 pt-28 transition-colors"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-4"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Welcome to PeerHire 🚀
      </motion.h1>

      <motion.p
        className="max-w-md text-gray-600 dark:text-gray-300 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Build your freelance profile, bid on exciting projects, and grow your
        career.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link href="/profile">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            View Profile
          </motion.button>
        </Link>
        <Link href="/dashboard">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition"
          >
            Open Dashboard
          </motion.button>
        </Link>
      </motion.div>
    </motion.main>
  );
}
