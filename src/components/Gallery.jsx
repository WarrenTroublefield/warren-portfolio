import React from "react";
import GalleryCards from "./GalleryCards";

const Gallery = () => {
  return (
    <section className="mb-16" id="gallery">
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
        Gallery
      </h2>
      <p className="text-zinc-700 dark:text-zinc-300 mb-4">
        Here are a few snapshots from things I’ve worked on or certifications I’ve earned.
      </p>
      <GalleryCards />
    </section>
  );
};

export default Gallery;
