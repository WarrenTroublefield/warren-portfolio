import React from "react";

const Footer = ({ email, linkedin, resume }) => {
  return (
    <footer className="py-10 text-center text-sm text-zinc-600 dark:text-zinc-400">
      <div className="space-x-4">
        <a
          href={`mailto:${email}`}
          className="hover:underline text-blue-600 dark:text-blue-400"
        >
          Email
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-blue-600 dark:text-blue-400"
        >
          LinkedIn
        </a>
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-blue-600 dark:text-blue-400"
        >
          Resume
        </a>
      </div>
      <p className="mt-4">&copy; {new Date().getFullYear()} Warren Troublefield</p>
    </footer>
  );
};

export default Footer;
