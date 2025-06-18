import React from "react";

const Intro = ({ name, description }) => {
  return (
    <section className="py-10">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
        Hi, I'm {name}
      </h1>
      <p className="text-lg sm:text-xl leading-relaxed text-zinc-700 dark:text-zinc-300">
        {description}
      </p>
    </section>
  );
};

export default Intro;
