import React, { useEffect, useState } from 'react';

const NavBar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center text-sm text-gray-900 dark:text-white bg-white dark:bg-black shadow">
      <div className="font-semibold">Warren Troublefield</div>
      <div className="space-x-6 hidden sm:block">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
      <button
        onClick={() => setIsDark(!isDark)}
        className="ml-4 focus:outline-none text-lg"
        aria-label="Toggle Dark Mode"
      >
        {isDark ? '🌙' : '🌞'}
      </button>
    </nav>
  );
};

export default NavBar;
