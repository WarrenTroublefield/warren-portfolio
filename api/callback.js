export default async function handler(req, res) {
  const code = req.query.code || null;

  if (!code) {
    return res.status(400).json({ error: 'No code provided in callback' });
  }

  const client_id = 'ba8105e9eca94c089a6922df46ad2ad5';
  const client_secret = '889624cb869245b39f75476d5cae5600';
  const redirect_uri = 'https://warren-portfolio-eu71.vercel.app/api/callback';

  const authBuffer = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

  try {
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${authBuffer}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri,
      }),
    });

    const data = await tokenResponse.json();

    if (data.error) {
      return res.status(400).json({ error: data.error_description });
    }

    console.log('REFRESH TOKEN:', data.refresh_token);
    return res.status(200).json({
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      expires_in: data.expires_in,
    });
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error', details: err });
  }
}
