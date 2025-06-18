import { useEffect } from "react";

function Callback() {
  useEffect(() => {
    window.close();
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <p className="text-lg font-medium">Processing login...</p>
    </div>
  );
}

export default Callback;
