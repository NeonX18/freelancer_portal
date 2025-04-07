"use client";

import ProjectList from "@/components/ProjectList";
import BidStatus from "@/components/BidStatus";
import { motion } from "framer-motion";

export default function DashboardPage() {
  return (
    <motion.main
      className="pt-28 px-4 sm:px-6 lg:px-8 min-h-screen bg-gray-100 dark:bg-[#0f172a] transition-colors"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <ProjectList />
      <BidStatus />
    </motion.main>
  );
}
