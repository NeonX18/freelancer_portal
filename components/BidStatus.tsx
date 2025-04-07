"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Bid = {
  projectId: number;
  amount: number;
  timeline: number;
  proposal: string;
  status: "Pending" | "Accepted" | "Rejected";
};

export default function BidStatus() {
  const [bids, setBids] = useState<Bid[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("bids");
    if (stored) setBids(JSON.parse(stored));
  }, []);

  const statusStyles = {
    Pending: "border-yellow-400 text-yellow-700 dark:text-yellow-300",
    Accepted: "border-green-400 text-green-700 dark:text-green-300",
    Rejected: "border-red-400 text-red-700 dark:text-red-300",
  };

  return (
    <div className="max-w-6xl mx-auto mt-12 px-4 sm:px-6">
      <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">
        Your Bids
      </h2>

      {bids.length === 0 ? (
        <div className="text-center text-gray-500 dark:text-gray-400 border dark:border-gray-700 p-10 rounded-xl">
          You haven’t submitted any bids yet.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {bids.map((bid, idx) => (
            <motion.div
              key={idx}
              className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-xl hover:border-green-400 transition-all duration-300 hover:scale-[1.02] before:absolute before:inset-0 before:opacity-0 before:bg-gradient-to-br before:from-green-400/10 before:to-green-400/5 before:transition-opacity group-hover:before:opacity-100"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07 }}
            >
              <div className="relative z-10 flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition">
                  Project #{bid.projectId}
                </h3>
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full border ${
                    statusStyles[bid.status]
                  }`}
                >
                  {bid.status}
                </span>
              </div>

              <div className="relative z-10 text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <p>
                  💰{" "}
                  <span className="font-medium text-gray-800 dark:text-gray-100">
                    ₹{bid.amount}
                  </span>
                </p>
                <p>
                  ⏳{" "}
                  <span className="font-medium text-gray-800 dark:text-gray-100">
                    {bid.timeline} days
                  </span>
                </p>
                <p className="pt-2">📝 {bid.proposal}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
