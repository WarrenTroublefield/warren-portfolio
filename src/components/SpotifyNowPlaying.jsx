
import { useEffect, useState } from 'react';

const CLIENT_ID = "ba8105e9eca94c089a6922df46ad2ad5";
const CLIENT_SECRET = "889624cb869245b39f75476d5cae5600";
const REFRESH_TOKEN = null;

async function getAccessToken() {
  const result = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET),
    },
    body: 'grant_type=client_credentials',
  });

  const data = await result.json();
  return data.access_token;
}

export default function SpotifyNowPlaying() {
  const [track, setTrack] = useState(null);

  useEffect(() => {
    async function fetchTrack() {
      try {
        const token = await getAccessToken();

        const res = await fetch(
          'https://api.spotify.com/v1/me/player/currently-playing',
          {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          }
        );

        if (res.status === 204 || res.status > 400) {
          setTrack(null);
          return;
        }

        const data = await res.json();
        setTrack(data);
      } catch (err) {
        console.error("Failed to fetch now playing:", err);
      }
    }

    fetchTrack();
  }, []);

  return (
    <section className="mb-20">
      <h3 className="text-2xl font-semibold mb-4">Now Playing</h3>
      {!track && <p>🎧 Not playing anything right now.</p>}
      {track && (
        <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <img
            src={track.item.album.images[0].url}
            alt="album art"
            className="w-16 h-16 rounded-md"
          />
          <div>
            <p className="font-medium">{track.item.name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {track.item.artists.map((a) => a.name).join(', ')}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
