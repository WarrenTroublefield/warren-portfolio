import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: "Secure File Transfer App",
      description:
        "A simple and secure file transfer application that uses encryption and basic authentication to ensure safe delivery.",
      link: "https://github.com/WarrenTroublefield/secure-file-transfer",
    },
    {
      title: "Network Scanner Tool",
      description:
        "A basic network scanning utility written in Python that can identify active devices and open ports.",
      link: "https://github.com/WarrenTroublefield/network-scanner-tool",
    },
  ];

  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <ul className="space-y-6">
        {projectList.map((project, index) => (
          <li key={index} className="border-b pb-4">
            <h3 className="text-lg font-bold">{project.title}</h3>
            <p className="text-zinc-700 dark:text-zinc-300 mb-2">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              View on GitHub →
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
