import { useState, useEffect } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors px-6 py-10">
      <header className="flex justify-between items-start mb-10">
        <div>
          <h1 className="text-5xl font-bold">Warren Troublefield</h1>
          <p className="mt-2 text-lg text-gray-700 dark:text-gray-300 max-w-xl">
            Aspiring Software Engineer and Information Security Analyst passionate about ethical hacking, secure systems, and solving complex problems with code.
          </p>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-sm text-blue-500 underline mt-2"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      <nav className="flex gap-6 mb-12 text-blue-500 font-medium underline">
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </nav>

      <section id="projects" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><span className="text-gray-600 dark:text-gray-400">Project 1: Coming Soon</span></li>
          <li><span className="text-gray-600 dark:text-gray-400">Project 2: Coming Soon</span></li>
        </ul>
      </section>

      <section id="contact">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p className="mb-1"><a href="mailto:swegmoneylife@gmail.com" className="text-blue-500 underline">Email</a></p>
        <p><a href="https://www.linkedin.com/in/warren-troublefield-jr-51b124270/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">LinkedIn</a></p>
      </section>
    </div>
  );
}
