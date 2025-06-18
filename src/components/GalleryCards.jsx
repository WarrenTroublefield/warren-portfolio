import React from "react";

const GalleryCards = () => {
  const items = [
    {
      src: "https://opengraph.githubassets.com/1/WarrenTroublefield/network-scanner-tool",
      alt: "Network Scanner Tool GitHub Card",
      caption: "My custom-built Network Scanner that identifies active devices on a local network."
    },
    {
      src: "https://opengraph.githubassets.com/1/WarrenTroublefield/secure-file-transfer",
      alt: "Secure File Transfer GitHub Card",
      caption: "A secure file transfer app for safely sending files over the network."
    },
    {
      src: "https://via.placeholder.com/400x250.png?text=Cybersecurity+Certificate",
      alt: "Cybersecurity Certificate",
      caption: "Cybersecurity coursework and certifications earned during my studies."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-zinc-200 dark:border-zinc-700 rounded-md overflow-hidden shadow-sm"
        >
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-48 object-cover"
          />
          <div className="p-3 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300">
            {item.caption}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryCards;
