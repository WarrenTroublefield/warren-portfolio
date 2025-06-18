import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className="flex justify-end py-4 px-6 bg-white dark:bg-black">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="border border-gray-300 dark:border-white text-sm px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
        aria-label="Toggle dark mode"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </nav>
  );
};

export default NavBar;
