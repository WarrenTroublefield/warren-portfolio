import React, { useEffect, useState } from "react";

export default function SpotifyDisplay() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch("/api/spotify");
        const result = await res.json();

        if (res.ok && result.isPlaying) {
          setData(result);
        } else {
          setData(null);
        }
      } catch (err) {
        setError(true);
        setData(null);
      }
    };

    fetchNowPlaying();
  }, []);

  if (error) {
    return <p className="text-red-500">⚠️ Error loading Spotify data.</p>;
  }

  if (!data) {
    return <p className="text-gray-500">🎧 Not playing anything right now.</p>;
  }

  return (
    <div className="flex items-center space-x-4">
      <img src={data.albumImageUrl} alt="Album cover" className="w-16 h-16 rounded" />
      <div>
        <p className="font-semibold text-lg">{data.title}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{data.artist}</p>
        <a
          href={data.songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 text-sm underline"
        >
          Open in Spotify
        </a>
      </div>
    </div>
  );
}
