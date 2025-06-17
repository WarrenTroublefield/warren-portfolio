
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-black dark:text-white transition-colors duration-300 font-inter">
      <header className="flex justify-between items-center px-6 py-6 max-w-5xl mx-auto">
        <h1 className="text-lg font-semibold tracking-tight">Warren Troublefield</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-1 rounded transition hover:bg-neutral-200 dark:hover:bg-neutral-800"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </header>

      <main className="px-6 max-w-3xl mx-auto">
        <section className="mt-16 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Warren</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m an aspiring Software Engineer and Information Security Analyst who’s passionate about ethical hacking, full-stack development, and building secure systems that solve real-world problems. 
            I enjoy learning how technology works under the hood — and how to protect it.
          </p>
        </section>

        <section id="projects" className="mb-20">
          <h3 className="text-2xl font-semibold mb-4">Projects</h3>
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="text-blue-500 hover:underline block text-lg"
              >
                🔐 Secure File Transfer App
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                A tool to safely send encrypted files over a network using basic cryptography techniques.
              </p>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-500 hover:underline block text-lg"
              >
                🕵️ Network Scanner Tool
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                A Python-based scanner that detects open ports and services on local or remote networks.
              </p>
            </li>
          </ul>
        </section>

        <section id="contact" className="mb-24">
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
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
