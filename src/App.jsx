
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 font-inter">
      <header className="flex justify-between items-center px-6 py-6 max-w-5xl mx-auto">
        <h1 className="text-xl font-bold">Warren Troublefield</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-1 rounded transition hover:bg-neutral-200 dark:hover:bg-neutral-800"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </header>

      <main className="px-6 max-w-3xl mx-auto">
        <section className="mt-12 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">Hi, I'm Warren</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
            I'm an aspiring Software Engineer and Information Security Analyst based in the US.
            I enjoy solving real-world problems with code, learning about secure systems,
            and building tools that help protect people and data.
          </p>
        </section>

        <section className="mb-16" id="projects">
          <h3 className="text-2xl font-bold mb-4">Projects</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Project 1 — Coming Soon</li>
            <li>Project 2 — Coming Soon</li>
          </ul>
        </section>

        <section id="contact" className="mb-20">
          <h3 className="text-2xl font-bold mb-4">Contact</h3>
          <p className="mb-1">
            <a href="mailto:swegmoneylife@gmail.com" className="text-blue-500 hover:underline">Email</a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/warren-troublefield-jr-51b124270/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
          </p>
        </section>
      </main>
    </div>
  );
}
