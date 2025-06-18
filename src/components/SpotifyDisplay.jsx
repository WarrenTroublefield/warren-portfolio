
import React, { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";

const SpotifyDisplay = () => {
  const [track, setTrack] = useState(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch("/api/spotify");
        const data = await res.json();
        setTrack(data);
      } catch (error) {
        console.error("Failed to fetch Spotify data", error);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <FaSpotify className="text-green-500 text-2xl" />
        {track && track.isPlaying ? (
          <div>
            <div className="font-semibold">{track.title}</div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400">
              {track.artist}
            </div>
          </div>
        ) : (
          <div className="text-sm text-zinc-500 dark:text-zinc-400">
            Not playing anything right now.
          </div>
        )}
      </div>
    </div>
  );
};

export default SpotifyDisplay;
