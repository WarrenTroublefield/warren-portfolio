import React from "react";
import YouTubeWidget from "./components/YouTubeWidget";
import SpotifyNowPlaying from "./components/SpotifyNowPlaying";

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors">
      <div className="max-w-3xl mx-auto p-6">
        <header className="flex items-center justify-between mb-8">
          <h1 className="font-bold text-lg">Warren Troublefield</h1>
          <button
            onClick={() => {
              document.documentElement.classList.toggle("dark");
            }}
            className="text-2xl"
            aria-label="Toggle Dark Mode"
          >
            🌓
          </button>
        </header>

        <main>
          <h2 className="text-4xl font-bold mb-4">Hi, I'm Warren</h2>
          <p className="mb-10 text-gray-700 dark:text-gray-300">
            I’m an aspiring Software Engineer and Information Security Analyst who’s passionate about ethical hacking, full-stack development, and building secure systems that solve real-world problems. I enjoy learning how technology works under the hood — and how to protect it.
          </p>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">Latest Video</h3>
            <YouTubeWidget />
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">Now Playing</h3>
            <SpotifyNowPlaying />
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">Projects</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://github.com/WarrenTroublefield/secure-file-transfer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  🔐 Secure File Transfer App
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  A tool to safely send encrypted files over a network using basic cryptography techniques.
                </p>
              </li>
              <li>
                <a
                  href="https://github.com/WarrenTroublefield/network-scanner-tool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  🕵️ Network Scanner Tool
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  A Python-based scanner that detects open ports and services on local or remote networks.
                </p>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-2">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:swegmoneylife@gmail.com" className="text-blue-500 hover:underline">
                  Email
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="text-blue-500 hover:underline">
                  LinkedIn
                </a>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
