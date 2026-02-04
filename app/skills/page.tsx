"use client";

import { useState, useEffect } from "react";

export default function Skills() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const initialDark = savedTheme ? savedTheme === "dark" : true;
    setIsDark(initialDark);
    if (initialDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <main className="w-full min-h-screen bg-gray-50 dark:bg-linear-to-br dark:from-gray-900 dark:via-black dark:to-gray-900 pt-20">
      {/* Skills Section */}
      <section className="w-full py-20 px-6 lg:px-20 bg-gray-50 dark:bg-linear-to-br dark:from-gray-900 dark:via-black dark:to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6 text-black dark:text-white">
            Skills & Technologies
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "React",
              "Next.js",
              "Tailwind CSS",
              "TypeScript",
              "JavaScript",
              "Web Design",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-orange-100 dark:bg-orange-600 dark:bg-opacity-30 text-orange-800 dark:text-orange-200 rounded-full text-sm border border-orange-300 dark:border-orange-500 cursor-pointer hover:bg-orange-200 dark:hover:bg-orange-600 dark:hover:bg-opacity-50 hover:text-orange-900 dark:hover:text-white hover:border-orange-400 dark:hover:border-yellow-400 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50 dark:hover:shadow-orange-500/50 transition duration-300 transform"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed bottom-4 right-4 p-3 bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white rounded-full shadow-lg hover:shadow-xl transition duration-300 z-50"
        aria-label="Toggle theme"
      >
        {isDark ? "☀️" : "🌙"}
      </button>
    </main>
  );
}