import React, { useEffect, useState } from "react";

export default function SpotifyNowPlaying() {
  const [track, setTrack] = useState(null);

  useEffect(() => {
    async function fetchNowPlaying() {
      try {
        const res = await fetch("/api/spotify");
        const data = await res.json();
        setTrack(data);
      } catch (err) {
        console.error("Spotify fetch error", err);
      }
    }
    fetchNowPlaying();
  }, []);

  if (!track || !track.isPlaying) {
    return <p className="text-sm text-zinc-600 dark:text-zinc-400">🔴 Not playing anything right now.</p>;
  }

  return (
    <div className="flex items-center space-x-4">
      <img src={track.albumImageUrl} alt="Album cover" className="w-12 h-12 rounded-md" />
      <div>
        <p className="font-semibold">{track.title}</p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{track.artist}</p>
      </div>
    </div>
  );
}