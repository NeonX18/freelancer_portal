"use client";

import { useState } from "react";
import toast from "react-hot-toast";

type Props = { projectId: number };

export default function BidForm({ projectId }: Props) {
  const [amount, setAmount] = useState("");
  const [timeline, setTimeline] = useState("");
  const [proposal, setProposal] = useState("");
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!amount.trim() || !timeline.trim() || !proposal.trim()) {
      toast.error("All fields are required.");
      return false;
    }
    if (Number(amount) <= 0 || Number(timeline) <= 0) {
      toast.error("Amount and timeline must be greater than 0.");
      return false;
    }
    return true;
  };

  const handleBid = () => {
    if (!validateForm()) return;

    setLoading(true);

    const newBid = {
      projectId,
      amount: Number(amount),
      timeline: Number(timeline),
      proposal,
      status: "Pending",
    };

    const existing = JSON.parse(localStorage.getItem("bids") || "[]");
    localStorage.setItem("bids", JSON.stringify([...existing, newBid]));

    setAmount("");
    setTimeline("");
    setProposal("");

    setLoading(false);
    toast.success("Bid submitted successfully!");
  };

  return (
    <div className="space-y-2 mt-2">
      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="number"
        min={1}
        placeholder="Bid Amount (₹)"
        className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-400"
      />
      <input
        value={timeline}
        onChange={(e) => setTimeline(e.target.value)}
        type="number"
        min={1}
        placeholder="Timeline (days)"
        className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-400"
      />
      <textarea
        value={proposal}
        onChange={(e) => setProposal(e.target.value)}
        placeholder="Short proposal"
        className="w-full p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleBid}
        disabled={loading}
        className={`w-full px-4 py-2 rounded text-white transition ${
          loading
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Submitting..." : "Submit Bid"}
      </button>
    </div>
  );
}
