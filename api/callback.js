export default async function handler(req, res) {
  const code = req.query.code || null;
  const state = req.query.state || null;

  if (!code) {
    return res.status(400).json({ error: 'Missing authorization code.' });
  }

  const client_id = 'ba8105e9eca94c089a6922df46ad2ad5';
  const client_secret = '889624cb869245b39f75476d5cae5600';
  const redirect_uri = 'https://warren-portfolio-eu71.vercel.app/api/callback';

  const params = new URLSearchParams();
  params.append('grant_type', 'authorization_code');
  params.append('code', code);
  params.append('redirect_uri', redirect_uri);

  const token = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params,
    });

    const data = await response.json();

    if (data.error) {
      return res.status(400).json({ error: data.error });
    }

    // Optional: Redirect user back to the homepage
    return res.redirect('/');
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
