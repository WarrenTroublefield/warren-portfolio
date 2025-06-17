// src/Callback.jsx
import { useEffect } from 'react';

function Callback() {
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const accessToken = params.get('access_token');

    if (accessToken) {
      localStorage.setItem('spotify_access_token', accessToken);
      window.location.replace('/');
    } else {
      console.error('Spotify token missing.');
    }
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Redirecting...</h1>
    </div>
  );
}

export default Callback;
