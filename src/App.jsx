import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Gallery from "./components/Gallery";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import SpotifyDisplay from "./components/SpotifyDisplay";
import YouTubeWidget from "./components/YouTubeWidget";

function Home() {
  return (
    <div className="font-sans max-w-3xl mx-auto px-6">
      <Intro
        name="Warren Troublefield"
        description="I'm a Software Engineer and Information Security Analyst who’s passionate about ethical hacking, full-stack development, and building secure systems that solve real-world problems. I enjoy understanding how technology works under the hood — and how to defend it."
      />

      <About />
      <Experience />
      <Gallery />

      <Projects
        projects={[
          {
            title: "Secure File Transfer App",
            description: "A tool designed to securely send and receive files over encrypted connections.",
            url: "https://github.com/WarrenTroublefield/secure-file-transfer",
          },
          {
            title: "Network Scanner Tool",
            description: "A command-line utility to scan local networks and detect connected devices.",
            url: "https://github.com/WarrenTroublefield/network-scanner-tool",
          },
        ]}
      />

      <section className="my-10">
        <h2 className="text-2xl font-semibold mb-4">🎧 Now Playing on Spotify</h2>
        <SpotifyDisplay />
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold mb-4">📺 Latest YouTube Video</h2>
        <YouTubeWidget />
      </section>

      <Footer
        email="swegmoneylife@gmail.com"
        linkedin="https://www.linkedin.com/in/warren-troublefield"
        resume="/Warren Troublefield Resume.pdf"
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
