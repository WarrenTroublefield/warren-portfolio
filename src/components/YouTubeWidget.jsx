import React, { useEffect, useState } from "react";

const YOUTUBE_API_KEY = "AIzaSyAU-dDw5TzeGtAmFW8YomrKf47XufyVKtc";
const CHANNEL_ID = "UCRzwEMxXuwLCJH_Va3QCNUA";

export default function YouTubeWidget() {
  const [video, setVideo] = useState(null);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function fetchVideoData() {
      try {
        const videosRes = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=1`
        );
        const videoData = await videosRes.json();
        const videoId = videoData.items[0].id.videoId;
        setVideo(videoId);

        const statsRes = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?key=${YOUTUBE_API_KEY}&id=${CHANNEL_ID}&part=statistics`
        );
        const statsData = await statsRes.json();
        setStats(statsData.items[0].statistics);
      } catch (err) {
        console.error("Failed to load YouTube data", err);
      }
    }

    fetchVideoData();
  }, []);

  if (!video || !stats) return <p className="text-pink-500">🧠 Loading YouTube data...</p>;

  return (
    <div>
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${video}`}
        title="Latest YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p className="mt-2 text-sm">👥 {stats.subscriberCount} subscribers</p>
      <p className="text-sm">📺 {stats.viewCount} total views</p>
    </div>
  );
}