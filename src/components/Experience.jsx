import React from "react";

const Experience = () => {
  const experienceList = [
    {
      company: "Personal Projects",
      title: "Cybersecurity & Full-Stack Developer",
      dates: "2024–Present",
      responsibilities: [
        "Developed and deployed full-stack applications using React and Vite.",
        "Built a secure file transfer app with encryption and basic authentication.",
        "Created a Python-based network scanner for identifying live hosts and open ports.",
      ],
    },
    {
      company: "Education & Training",
      title: "Cybersecurity Student",
      dates: "2023–Present",
      responsibilities: [
        "Studying ethical hacking, network security, and secure coding practices.",
        "Completed hands-on labs in penetration testing and malware analysis.",
        "Learning to integrate APIs and deploy secure cloud-based apps.",
      ],
    },
  ];

  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <ul className="space-y-8">
        {experienceList.map((job, index) => (
          <li key={index}>
            <h3 className="text-lg font-bold">
              {job.title} @ {job.company}
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
              {job.dates}
            </p>
            <ul className="list-disc ml-6 text-zinc-700 dark:text-zinc-300 space-y-1">
              {job.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
