"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BidForm from "./BidForm";

type Project = {
  id: number;
  name: string;
  budget: number;
  timeline: number;
  skills: string[];
};

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data: Project[]) => setProjects(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
        Available Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative group overflow-hidden rounded-xl border border-transparent dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-lg transition duration-300 hover:border-blue-500 group-hover:ring-2 group-hover:ring-blue-400 group-hover:ring-offset-2 before:absolute before:inset-0 before:opacity-0 before:bg-gradient-to-br before:from-blue-400/10 before:to-blue-400/5 before:transition-opacity group-hover:before:opacity-100"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: project.id * 0.05 }}
          >
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {project.name}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                  #{project.id}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                💰 Budget: ₹{project.budget}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                ⏳ Timeline: {project.timeline} days
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                🛠 Skills: {project.skills.join(", ")}
              </p>
              <BidForm projectId={project.id} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
