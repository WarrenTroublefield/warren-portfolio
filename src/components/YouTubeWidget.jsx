
import { useEffect, useState } from 'react';

const YOUTUBE_API_KEY = "AIzaSyAU-dDw5TzeGtAmFW8YomrKf47XufyVKtc";
const CHANNEL_ID = "UC7RuUXnZC2MY0eoD_C_ey6w";

export default function YouTubeWidget() {
  const [video, setVideo] = useState(null);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function fetchYouTubeData() {
      try {
        const videosRes = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=1`
        );
        const videoData = await videosRes.json();
        const latestVideo = videoData.items[0];

        const statsRes = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
        );
        const statsData = await statsRes.json();
        const channelStats = statsData.items[0].statistics;

        setVideo(latestVideo);
        setStats(channelStats);
      } catch (err) {
        console.error("Failed to load YouTube data", err);
      }
    }

    fetchYouTubeData();
  }, []);

  return (
    <section className="mb-20">
      <h3 className="text-2xl font-semibold mb-4">Latest Video</h3>
      <p>✅ YouTube widget is loading...</p>
      {video && stats && (
        <>
          <div className="rounded-lg overflow-hidden shadow-md mb-2">
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="text-gray-600 dark:text-gray-300 text-sm">
            👤 {parseInt(stats.subscriberCount).toLocaleString()} subscribers<br />
            👁️ {parseInt(stats.viewCount).toLocaleString()} total views
          </div>
        </>
      )}
    </section>
  );
}
