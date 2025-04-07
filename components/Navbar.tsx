"use client";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400 tracking-tight"
        >
          PeerHire
        </Link>
        <nav className="flex items-center gap-6 text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
          <Link
            href="/"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Home
          </Link>
          <Link
            href="/profile"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Profile
          </Link>
          <Link
            href="/dashboard"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Dashboard
          </Link>
          <DarkModeToggle />
        </nav>
      </div>
    </header>
  );
}
