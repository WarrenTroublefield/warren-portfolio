import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './Home';

function Callback() {
  useEffect(() => {
    const hash = window.location.hash;
    const token = new URLSearchParams(hash.substring(1)).get('access_token');

    if (token) {
      localStorage.setItem('spotify_token', token);
    }

    window.location.href = '/';
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <p>Authorizing with Spotify...</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </Router>
  );
}