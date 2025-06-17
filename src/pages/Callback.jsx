// src/pages/callback.jsx
import React, { useEffect } from "react";

function Callback() {
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const accessToken = params.get("access_token");

    if (accessToken) {
      localStorage.setItem("spotify_access_token", accessToken);
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="text-center mt-10 text-lg">
      Redirecting...
    </div>
  );
}

export default Callback;
