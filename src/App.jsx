import YouTubeWidget from './components/YouTubeWidget';
import SpotifyNowPlaying from './components/SpotifyNowPlaying';

function App() {
  return (
    <main className="px-4 py-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Warren</h1>
      <p className="mb-10 text-gray-700 dark:text-gray-300">
        I’m an aspiring Software Engineer and Information Security Analyst who’s passionate
        about ethical hacking, full-stack development, and building secure systems that
        solve real-world problems. I enjoy learning how technology works under the hood —
        and how to protect it.
      </p>

      <YouTubeWidget />
      <SpotifyNowPlaying />

      <section className="mb-20">
        <h3 className="text-2xl font-semibold mb-4">Projects</h3>
        <ul className="space-y-4">
          <li>
            <a
              href="https://github.com/WarrenTroublefield/secure-file-transfer"
              className="text-blue-500 font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
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
              className="text-blue-500 font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              🧠 Network Scanner Tool
            </a>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              A Python-based scanner that detects open ports and services on local or remote networks.
            </p>
          </li>
        </ul>
      </section>

      <section className="mb-20">
        <h3 className="text-2xl font-semibold mb-4">Contact</h3>
        <ul className="space-y-2">
          <li>
            <a href="mailto:swegmoneylife@gmail.com" className="text-blue-500 hover:underline">
              Email
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/warren-troublefield" className="text-blue-500 hover:underline">
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default App;
