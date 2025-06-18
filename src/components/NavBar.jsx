import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = localStorage.getItem("theme") || "light";
    root.classList.toggle("dark", initialTheme === "dark");
    setIsDark(initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    const newTheme = isDark ? "light" : "dark";
    root.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setIsDark(!isDark);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", anchor: "#about" },
    { label: "Projects", anchor: "#projects" },
    { label: "Contact", anchor: "#contact" },
  ];

  return (
    <nav className="flex justify-between items-center py-4 mb-8 border-b border-zinc-200 dark:border-zinc-700">
      <Link to="/" className="text-lg font-semibold text-zinc-900 dark:text-white">
        Warren Troublefield
      </Link>
      <div className="flex items-center space-x-4">
        {navItems.map((item) =>
          item.path ? (
            <Link
              key={item.label}
              to={item.path}
              className={`text-sm text-zinc-600 dark:text-zinc-300 hover:underline ${
                location.pathname === item.path ? "font-bold" : ""
              }`}
            >
              {item.label}
            </Link>
          ) : (
            <a
              key={item.label}
              href={item.anchor}
              className="text-sm text-zinc-600 dark:text-zinc-300 hover:underline"
            >
              {item.label}
            </a>
          )
        )}
        <button
          onClick={toggleTheme}
          className="rounded px-2 py-1 border border-zinc-300 dark:border-zinc-600 text-sm text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
          {isDark ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
