import React from "react";

const images = [
  {
    src: "https://placehold.co/400x250/png?text=Project+Preview",
    alt: "Preview of a project or tech snapshot",
  },
  {
    src: "https://placehold.co/400x250/png?text=Lab+Result",
    alt: "Lab screenshot or walkthrough result",
  },
  {
    src: "https://placehold.co/400x250/png?text=Terminal+Session",
    alt: "Security tool or terminal session",
  },
];

const GalleryCards = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {images.map((image, index) => (
        <div key={index} className="rounded overflow-hidden shadow-md">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryCards;
