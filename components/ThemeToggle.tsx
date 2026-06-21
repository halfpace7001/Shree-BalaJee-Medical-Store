"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle({ scrolled }: { scrolled?: boolean }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label="Toggle light/dark mode"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className={`relative w-14 h-7 rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        isDark
          ? "bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/30"
          : scrolled
          ? "bg-gray-200"
          : "bg-white/20"
      }`}
    >
      {/* Track icons */}
      <Sun
        className={`absolute left-1.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 transition-opacity ${
          isDark ? "opacity-30 text-white" : "opacity-100 text-amber-500"
        }`}
      />
      <Moon
        className={`absolute right-1.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 transition-opacity ${
          isDark ? "opacity-100 text-white" : "opacity-30 text-gray-400"
        }`}
      />

      {/* Thumb */}
      <span
        className={`absolute top-0.5 w-6 h-6 rounded-full shadow-md transition-all duration-500 flex items-center justify-center ${
          isDark
            ? "translate-x-[30px] bg-white"
            : "translate-x-0.5 bg-white"
        }`}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5 text-blue-600" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-amber-500" />
        )}
      </span>
    </button>
  );
}
