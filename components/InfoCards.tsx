"use client";

import { motion } from "motion/react";
import { BookOpen, Briefcase, Code2 } from "lucide-react";
import React from "react";
import ImageWithFallback from "@/components/ImageWithFallBack";

export default function InfoCards() {
  const experiences = [
    {
      title: "Full-Stack Developer at Tech Co",
      period: "Product • Oct 23 — Feb 24",
    },
    {
      title: "Backend Engineer at StartupXYZ",
      period: "Product • Jan 22 — Sep 23",
    },
    {
      title: "Frontend Developer at WebAgency",
      period: "Design • Mar 20 — Dec 21",
    },
  ];

  const techStack = [
    {
      skills: [
        "React",
        "NextJS",
        "Expo",
        "React Native",
        "HTML",
        "CSS",
        "TailwindCSS",
      ],
      color: "from-blue-400 to-blue-600",
    },
    {
      skills: ["Node.js", "ExpressJS", "NestJS", "MongoDB", "Postgresql"],
      color: "from-green-400 to-green-600",
    },
    {
      skills: ["Git", "Webstorm", "Docker", "Kubernetes", "Ubuntu", "Bash"],
      color: "from-red-400 to-red-600",
    },
    {
      skills: ["Vercel", "Digital Ocean", "Google Cloud", "AWS Cloud"],
      color: "from-orange-400 to-orange-600",
    },
  ];

  const resources = [
    { title: "Clean Architecture", author: "Robert C. Martin" },
    { title: "Designing Data-Intensive Apps", author: "Martin Kleppmann" },
  ];

  return (
    <section className="py-8">
      <div className="grid gap-6 md:grid-cols-3">
        {/* My Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5 }}
          className="cursor-pointer rounded-2xl border border-gray-100 bg-gray-50 p-6 dark:border-neutral-500 dark:bg-neutral-600"
        >
          <div className="mb-6 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-gray-600 dark:text-neutral-200" />
            <h3 className="text-black dark:text-neutral-300">My Experience</h3>
          </div>

          <p className="mb-4 text-xs text-gray-400 dark:text-neutral-50">
            Latest projects at:
          </p>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-3"
              >
                <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-black dark:bg-neutral-400"></div>
                <div>
                  <p className="mb-1 text-sm text-black dark:text-neutral-100">
                    {exp.title}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-neutral-300">
                    {exp.period}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* My Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -5 }}
          className="cursor-pointer rounded-2xl border border-gray-100 bg-gray-50 p-6 dark:border-neutral-500 dark:bg-neutral-600"
        >
          <div className="mb-6 flex items-center gap-2">
            <Code2 className="h-5 w-5 text-gray-600 dark:text-neutral-200" />
            <h3 className="text-black dark:text-neutral-200">My tech stack</h3>
          </div>

          <div className="mb-4 md:space-y-3 sm:grid sm:grid-cols-2 sm:gap-3 flex space-y-4 flex-col w-full md:w-auto md:gap-0 md:block md:flex-nowrap">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`md:aspect-video aspect-auto rounded-xl bg-gradient-to-br ${tech.color} flex flex-wrap items-start justify-start gap-1 p-4 text-white dark:text-neutral-100`}
              >
                {tech.skills.map((skill, index) => {
                  return (
                    <div
                      className="rounded-lg border-2 border-gray-200 px-4 py-1 text-center text-sm"
                      key={index}
                    >
                      {skill}
                    </div>
                  );
                })}
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="mb-1 text-sm text-black dark:text-neutral-300">
              Core Technologies
            </p>
            <p className="flex items-center justify-center gap-1 text-xs text-gray-400 dark:text-neutral-100">
              <span className="h-1 w-1 rounded-full bg-green-500"></span>
              Full-Stack
            </p>
          </div>
        </motion.div>

        {/* What I'm reading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -5 }}
          className="cursor-pointer rounded-2xl border border-gray-100 bg-gray-50 p-6 dark:border-neutral-500 dark:bg-neutral-600"
        >
          <div className="mb-6 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-gray-600 dark:text-neutral-200" />
            <h3 className="text-black dark:text-neutral-200">
              What I&#39;m reading
            </h3>
          </div>

          <div className="mb-4 space-y-2">
            {resources.map((book, index) => (
              <div key={index}>
                <p className="text-sm text-black dark:text-neutral-100">
                  {book.title}
                </p>
                <p className="text-xs text-gray-400 dark:text-neutral-300">
                  {book.author}
                </p>
              </div>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex h-80 aspect-auto md:aspect-[3/4] items-center justify-center overflow-hidden  rounded-xl bg-gradient-to-br from-orange-400 to-red-500"
          >
            <ImageWithFallback
              src="/books.png"
              alt="Book cover"
              className="h-full w-full md:object-cover object-center bg-cover bg-no-repeat bg-center"
              loading={"eager"}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
