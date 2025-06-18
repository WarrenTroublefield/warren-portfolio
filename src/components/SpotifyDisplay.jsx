// src/components/SpotifyDisplay.jsx
import React, { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";

export default function SpotifyDisplay() {
  const [track, setTrack] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/spotify")
      .then((res) => {
        if (!res.ok) throw new Error("Spotify fetch failed");
        return res.json();
      })
      .then((data) => {
        setTrack(data);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error)
    return <p className="text-red-500">Error loading Spotify: {error}</p>;

  if (!track)
    return <p>🎧 Fetching Spotify data...</p>;

  if (!track.isPlaying)
    return <p>🎧 Not playing anything right now.</p>;

  return (
    <div className="flex items-center space-x-4">
      <FaSpotify className="text-green-500 text-2xl" />
      <div>
        <p className="font-semibold">{track.title}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {track.artists.join(", ")}
        </p>
      </div>
    </div>
  );
}
