"use client";

import FreelancerProfile from "@/components/FreelancerProfile";
import { motion } from "framer-motion";

export default function ProfilePage() {
  return (
    <motion.main
      className="pt-28 px-4 sm:px-6 lg:px-8 min-h-screen bg-gray-100 dark:bg-[#0f172a] transition-colors"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <FreelancerProfile />
    </motion.main>
  );
}
