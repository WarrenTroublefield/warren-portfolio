
import { useEffect, useState } from 'react';

const YOUTUBE_API_KEY = "AIzaSyAU-dDw5TzeGtAmFW8YomrKf47XufyVKtc";
const CHANNEL_ID = "UC7RuUXnZC2MY0eoD_C_ey6w";

export default function YouTubeWidget() {
  const [videoId, setVideoId] = useState(null);
  const [subscriberCount, setSubscriberCount] = useState(null);
  const [viewCount, setViewCount] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Get channel stats
        const statsRes = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
        );
        const statsData = await statsRes.json();
        const stats = statsData?.items?.[0]?.statistics;
        setSubscriberCount(stats?.subscriberCount);
        setViewCount(stats?.viewCount);

        // Get latest video
        const videoRes = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=1`
        );
        const videoData = await videoRes.json();
        const videoId = videoData?.items?.[0]?.id?.videoId;
        setVideoId(videoId);
      } catch (error) {
        console.error("YouTube widget failed to load:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <section className="mb-20">
      <h3 className="text-2xl font-semibold mb-4">Latest Video</h3>
      {!videoId && <p>🔄 Loading YouTube data...</p>}
      {videoId && (
        <div className="rounded-lg overflow-hidden shadow-md mb-2">
          <iframe
            className="w-full aspect-video"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {subscriberCount && viewCount && (
        <div className="text-gray-600 dark:text-gray-300 text-sm">
          👤 {parseInt(subscriberCount).toLocaleString()} subscribers<br />
          👁️ {parseInt(viewCount).toLocaleString()} total views
        </div>
      )}
    </section>
  );
}
