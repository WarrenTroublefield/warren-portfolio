export default async function handler(req, res) {
  const code = req.query.code || null;

  const client_id = 'ba8105e9eca94c089a6922df46ad2ad5';
  const client_secret = '889624cb869245b39f75476d5cae5600';
  const redirect_uri = 'https://warren-portfolio-eu71.vercel.app/api/callback';

  const authOptions = {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri,
    }),
  };

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', authOptions);
    const data = await response.json();

    if (data.access_token) {
      return res.writeHead(302, {
        Location: `/success?access_token=${data.access_token}`,
      }).end();
    } else {
      return res.status(400).json({ error: 'Failed to get access token', details: data });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}
