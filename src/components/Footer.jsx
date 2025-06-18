import React from "react";

const Footer = () => {
  return (
    <footer className="mt-12 text-sm text-center text-zinc-500 dark:text-zinc-400">
      <p>
        Built by Warren Troublefield —{' '}
        <a
          href="https://github.com/WarrenTroublefield"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-blue-600 dark:text-blue-400"
        >
          @WarrenTroublefield
        </a>
      </p>
    </footer>
  );
};

export default Footer;
