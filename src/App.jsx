import React from "react";
import YouTubeWidget from "./components/YouTubeWidget";
import SpotifyNowPlaying from "./components/SpotifyNowPlaying";

function App() {
  return (
    <div className="min-h-screen p-6 text-zinc-900 dark:text-white bg-white dark:bg-black font-sans max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Hi, I'm Warren</h1>
      <p className="mb-8">
        I'm an aspiring Software Engineer and Information Security Analyst who’s passionate about ethical hacking, full-stack development, and building secure systems that solve real-world problems. I enjoy learning how technology works under the hood — and how to protect it.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">📺 Latest Video</h2>
        <YouTubeWidget />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎧 Now Playing</h2>
        <SpotifyNowPlaying />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Contact</h2>
        <p>
          <a href="mailto:swegmoneylife@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">Email</a> · 
          <a href="https://www.linkedin.com/in/warren-troublefield" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">LinkedIn</a>
        </p>
      </section>
    </div>
  );
}

export default App;