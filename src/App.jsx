import { useEffect, useState } from "react";

function App() {
  const [youtubeData, setYoutubeData] = useState(null);
  const [spotifyData, setSpotifyData] = useState(null);

  useEffect(() => {
    // Fetch YouTube data
    fetch("/yt-data.json")
      .then((res) => res.json())
      .then((data) => setYoutubeData(data))
      .catch((err) => console.error("YouTube fetch error:", err));

    // Fetch Spotify data
    fetch("/api/spotify")
      .then((res) => res.json())
      .then((data) => setSpotifyData(data))
      .catch((err) => console.error("Spotify fetch error:", err));
  }, []);

  return (
    <main className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Hi, I'm Warren</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-8">
        I’m an aspiring Software Engineer and Information Security Analyst
        who’s passionate about ethical hacking, full-stack development, and
        building secure systems that solve real-world problems. I enjoy
        learning how technology works under the hood — and how to protect it.
      </p>

      {/* YouTube Widget */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">📺 Latest Video</h2>
        {youtubeData ? (
          <div>
            <iframe
              className="w-full aspect-video rounded"
              src={`https://www.youtube.com/embed/${youtubeData.latestVideoId}`}
              title="Latest YouTube Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p className="mt-2 text-sm text-gray-600">
              👥 {youtubeData.subscriberCount} subscribers <br />
              👁️ {youtubeData.viewCount} total views
            </p>
          </div>
        ) : (
          <p className="text-sm text-gray-600">🧠 Loading YouTube data...</p>
        )}
      </section>

      {/* Spotify Widget */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎧 Now Playing</h2>
        {spotifyData && spotifyData.isPlaying ? (
          <div className="flex items-center space-x-4">
            <img
              src={spotifyData.albumImageUrl}
              alt="Album cover"
              className="w-16 h-16 rounded shadow"
            />
            <div>
              <p className="font-medium">{spotifyData.title}</p>
              <p className="text-sm text-gray-600">{spotifyData.artist}</p>
            </div>
          </div>
        ) : (
          <p className="text-sm text-gray-600">🛑 Not playing anything right now.</p>
        )}
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Contact</h2>
        <p className="text-sm text-blue-500">
          <a href="mailto:swegmoneylife@gmail.com">Email</a> ·{" "}
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
      </section>
    </main>
  );
}

export default App;
