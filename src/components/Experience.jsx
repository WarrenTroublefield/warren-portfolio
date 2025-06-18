import React from "react";

const Experience = () => {
  return (
    <section className="mb-16" id="experience">
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
        Experience
      </h2>
      <ul className="space-y-6">
        <li className="border border-zinc-200 dark:border-zinc-700 p-4 rounded-md">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
            Cybersecurity Coursework – ECPI University
          </h3>
          <p className="text-zinc-700 dark:text-zinc-300">
            Hands-on labs in network security, malware analysis, ethical hacking, and secure software development. Built foundational and advanced skills through project-based learning.
          </p>
        </li>
        <li className="border border-zinc-200 dark:border-zinc-700 p-4 rounded-md">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
            Personal Projects
          </h3>
          <p className="text-zinc-700 dark:text-zinc-300">
            Built and deployed multiple tools including a network scanner and secure file transfer application. These projects helped solidify knowledge in full-stack development and cybersecurity principles.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Experience;
