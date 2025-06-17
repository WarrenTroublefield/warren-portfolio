import { useEffect, useState } from "react";

function App() {
  const [youtubeData, setYoutubeData] = useState(null);
  const [spotifyData, setSpotifyData] = useState(null);

  useEffect(() => {
    // Fetch YouTube data
    fetch("/yt-data.json")
      .then((res) => res.json())
      .then((data) => setYoutubeData(data));

    // Fetch Spotify data
    fetch("/spotify-data.json")
      .then((res) => res.json())
      .then((data) => setSpotifyData(data));
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Hi, I'm Warren</h1>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        I’m an aspiring Software Engineer and Information Security Analyst who’s
        passionate about ethical hacking, full-stack development, and building
        secure systems that solve real-world problems. I enjoy learning how
        technology works under the hood — and how to protect it.
      </p>

      {/* --- YOUTUBE SECTION --- */}
      <h2 className="text-xl font-semibold mb-2">Latest Video</h2>
      {youtubeData ? (
        <div className="mb-6">
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${youtubeData.latestVideoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="text-sm text-gray-600 mt-2">
            🎥 {youtubeData.subscriberCount} subscribers •{" "}
            {youtubeData.viewCount} total views
          </p>
        </div>
      ) : (
        <p className="mb-6">📺 Loading YouTube data...</p>
      )}

      {/* --- SPOTIFY SECTION --- */}
      <h2 className="text-xl font-semibold mb-2">Now Playing</h2>
      {spotifyData && spotifyData.isPlaying ? (
        <div className="mb-6 flex items-center gap-4">
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
        <p className="mb-6">🎧 Not playing anything right now.</p>
      )}

      {/* --- CONTACT --- */}
      <h2 className="text-xl font-semibold mt-10 mb-2">Contact</h2>
      <p>
        <a
          href="mailto:swegmoneylife@gmail.com"
          className="text-blue-600 hover:underline"
        >
          Email
        </a>{" "}
        ·{" "}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
      </p>
    </div>
  );
}

export default App;
