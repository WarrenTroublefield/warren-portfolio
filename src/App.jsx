
import { useState, useEffect } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-gray-900 dark:text-white transition-colors duration-300 font-inter">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="flex justify-between items-start mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">Warren Troublefield</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              Aspiring Software Engineer and Information Security Analyst passionate about ethical hacking, secure systems, and solving complex problems with code.
            </p>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-sm text-blue-500 underline mt-2 hover:text-blue-400 transition"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>

        <nav className="flex gap-8 text-blue-600 dark:text-blue-400 mb-12 text-lg font-medium">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">Resume</a>
        </nav>

        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <p className="text-gray-600 dark:text-gray-400">More coming soon...</p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li className="text-gray-700 dark:text-gray-300">Project 1: Coming Soon</li>
            <li className="text-gray-700 dark:text-gray-300">Project 2: Coming Soon</li>
          </ul>
        </section>

        <section id="contact">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p className="mb-2"><a href="mailto:swegmoneylife@gmail.com" className="text-blue-500 hover:underline">Email</a></p>
          <p><a href="https://www.linkedin.com/in/warren-troublefield-jr-51b124270/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a></p>
        </section>
      </div>
    </div>
  );
}
