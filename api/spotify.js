export default async function handler(req, res) {
  const client_id = 'ba8105e9eca94c089a6922df46ad2ad5';
  const client_secret = '889624cb869245b39f75476d5cae5600';
  const refresh_token = 'AQBK998zjMk2AI5MujHPXQFL_Kqcx0R7nfaAeTGJuyGGeDnXgSkOpfh2QQyyVSyGza-TL0JLj_luyp0UbBHo_WzP0Jyx6Uudg2WLmE86hJIvnRpatY0Ozz-GoUtj-OuKaGI';

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

  try {
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token,
      }),
    });

    const { access_token } = await tokenResponse.json();

    const playingResponse = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (playingResponse.status === 204 || playingResponse.status > 400) {
      return res.status(200).json({ isPlaying: false });
    }

    const song = await playingResponse.json();

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist) => _artist.name).join(', ');
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    return res.status(200).json({
      isPlaying,
      title,
      artist,
      album,
      albumImageUrl,
      songUrl,
    });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to fetch now playing', details: err.message });
  }
}
