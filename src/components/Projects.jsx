import React from "react";

const Projects = () => {
  return (
    <section className="mb-16" id="projects">
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
        Projects
      </h2>
      <div className="space-y-6">
        <div className="border border-zinc-200 dark:border-zinc-700 p-4 rounded-md">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
            Network Scanner Tool
          </h3>
          <p className="text-zinc-700 dark:text-zinc-300 mb-2">
            A command-line tool that scans local networks to discover active devices.
            Ideal for network mapping and basic enumeration tasks.
          </p>
          <a
            href="https://github.com/WarrenTroublefield/network-scanner-tool"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View on GitHub
          </a>
        </div>

        <div className="border border-zinc-200 dark:border-zinc-700 p-4 rounded-md">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
            Secure File Transfer
          </h3>
          <p className="text-zinc-700 dark:text-zinc-300 mb-2">
            A secure file transfer utility that encrypts files during transit and
            uses hashed authentication to validate users.
          </p>
          <a
            href="https://github.com/WarrenTroublefield/secure-file-transfer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
