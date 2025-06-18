import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Callback() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get('code');
    if (code) {
      console.log('Spotify Authorization Code:', code);
      alert('Authorization code received. Check console and copy it!');
    } else {
      alert('No code found in URL.');
    }
  }, [location]);

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold">Redirecting...</h1>
      <p className="mt-4">You can close this tab after copying your code.</p>
    </div>
  );
}

export default Callback;
