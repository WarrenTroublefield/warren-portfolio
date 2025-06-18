import React from "react";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-zinc-200 dark:border-zinc-700 pt-6 text-sm text-zinc-500 dark:text-zinc-400">
      <p>
        © {new Date().getFullYear()} Warren Troublefield. All rights reserved.
      </p>
      <p className="mt-2">
        View the source on{" "}
        <a
          href="https://github.com/WarrenTroublefield/warren-portfolio"
          className="underline hover:text-zinc-700 dark:hover:text-zinc-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
