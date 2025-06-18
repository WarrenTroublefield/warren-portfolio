import React, { useEffect, useState } from "react";

function SpotifyDisplay() {
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch("https://warren-portfolio-eu71.vercel.app/api/spotify");
        const data = await res.json();
        setTrack(data);
      } catch (err) {
        console.error("Spotify fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNowPlaying();
  }, []);

  if (loading) {
    return <p>🔄 Loading Spotify data...</p>;
  }

  if (!track || !track.isPlaying) {
    return <p>🔴 Not playing anything right now.</p>;
  }

  return (
    <div className="flex items-center space-x-4">
      <img
        src={track.albumImageUrl}
        alt="Album Cover"
        className="w-16 h-16 rounded shadow-md"
      />
      <div>
        <p className="font-medium">{track.title}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{track.artist}</p>
      </div>
    </div>
  );
}

export default SpotifyDisplay;
