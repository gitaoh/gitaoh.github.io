"use client";

import {
  BookOpen,
  Briefcase,
  Code2,
  MapPin,
  Menu,
  Monitor,
  Moon,
  Sun,
  Target,
} from "lucide-react";
import React, { Activity, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { useTheme } from "next-themes";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-gray-700">
      <div className="mx-auto max-w-[50%]">
        <Header />
        <Hero />
        <InfoCards />
        <Location />
        <WorkProcess />
      </div>
    </div>
  );
}

function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false);

  const handleError = () => {
    setDidError(true);
  };

  const { src, alt, style, className, ...rest } = props;

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ""}`}
      style={style}
    >
      <div className="flex h-full w-full items-center justify-center">
        <Image
          src={ERROR_IMG_SRC}
          alt="Error loading image"
          {...rest}
          data-original-url={src}
          width={100}
          height={100}
        />
      </div>
    </div>
  ) : (
    <Image
      src={String(src)}
      alt={String(alt)}
      className={className}
      style={style}
      {...rest}
      onError={handleError}
      width={100}
      height={100}
    />
  );
}

function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => {
        // dark->light->system->dark
        setTheme(
          theme === "dark"
            ? "light"
            : theme === "light"
              ? "system"
              : theme === "system"
                ? "dark"
                : "light",
        );
      }}
      className="cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-2 transition-colors hover:bg-gray-100"
    >
      <Activity mode={theme === "system" ? "visible" : "hidden"}>
        <Monitor className="h-5 w-5 text-gray-600" />
      </Activity>

      <Activity mode={theme === "light" ? "visible" : "hidden"}>
        <Sun className="h-5 w-5 text-gray-600" />
      </Activity>

      <Activity mode={theme === "dark" ? "visible" : "hidden"}>
        <Moon className="h-5 w-5 text-gray-600" />
      </Activity>
    </button>
  );
}

function Header() {
  return (
    <header className="border-b border-gray-100 px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black">
            <Image
              src={"img.png"}
              alt={"Logo"}
              width={32}
              height={32}
            />
          </div>
          <span className="text-sm text-gray-600">code.gitaoh@gmail.com</span>
        </div>

        <div className={"flex items-center gap-3"}>
          <button className="cursor-pointer rounded-lg p-2 transition-colors hover:bg-gray-50">
            <Menu className="h-5 w-5 text-gray-600" />
          </button>
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <h1 className="mb-4 flex flex-wrap items-center gap-4 text-5xl md:text-6xl">
            <span className="text-black">Hi, I&#39;m</span>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className="inline-block h-16 w-16 overflow-hidden rounded-full bg-gradient-to-br from-gray-300 to-gray-400"
            >
              <ImageWithFallback
                src="img.png"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <span className="text-black">Joseph Gitau!</span>
          </h1>

          <div className="mb-2 text-4xl md:text-5xl">
            <span className="text-gray-400">I&#39;m a </span>
            <span className="font-medium text-black">Full-Stack Developer</span>
            <span className="text-gray-400"> at</span>
          </div>

          <div className="mb-8 flex items-center gap-4">
            <h2
              className="text-4xl md:text-5xl"
              style={{ color: "#FF6B35" }}
            >
              Tech Innovations.
            </h2>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm text-green-700"
            >
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Open to work
            </motion.span>
          </div>
        </div>

        <p className="mb-8 max-w-xl text-lg text-gray-600">
          Feel free to explore my portfolio and reach out
          <br />
          —I&apos;d love to connect!
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-black px-8 py-3 text-white transition-colors hover:bg-gray-800"
        >
          Book a call
        </motion.button>
      </motion.div>
    </section>
  );
}

function InfoCards() {
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
    <section className="px-8 py-8">
      <div className="grid gap-6 md:grid-cols-3">
        {/* My Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5 }}
          className="cursor-pointer rounded-2xl border border-gray-100 bg-gray-50 p-6"
        >
          <div className="mb-6 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-gray-600" />
            <h3 className="text-black">My Experience</h3>
          </div>

          <p className="mb-4 text-xs text-gray-400">Latest projects at:</p>

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
                <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-black"></div>
                <div>
                  <p className="mb-1 text-sm text-black">{exp.title}</p>
                  <p className="text-xs text-gray-400">{exp.period}</p>
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
          className="cursor-pointer rounded-2xl border border-gray-100 bg-gray-50 p-6"
        >
          <div className="mb-6 flex items-center gap-2">
            <Code2 className="h-5 w-5 text-gray-600" />
            <h3 className="text-black">My tech stack</h3>
          </div>

          <div className="mb-4 space-y-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`aspect-video rounded-xl bg-gradient-to-br ${tech.color} flex flex-wrap items-start justify-start gap-1 p-4 text-white`}
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
            <p className="mb-1 text-sm text-black">Core Technologies</p>
            <p className="flex items-center justify-center gap-1 text-xs text-gray-400">
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
          className="cursor-pointer rounded-2xl border border-gray-100 bg-gray-50 p-6"
        >
          <div className="mb-6 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-gray-600" />
            <h3 className="text-black">What I&#39;m reading</h3>
          </div>

          <div className="mb-4 space-y-2">
            {resources.map((book, index) => (
              <div key={index}>
                <p className="text-sm text-black">{book.title}</p>
                <p className="text-xs text-gray-400">{book.author}</p>
              </div>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex aspect-[3/4] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-orange-400 to-red-500"
          >
            <ImageWithFallback
              src="/books.png"
              alt="Book cover"
              className="h-full w-full object-cover"
              loading={"eager"}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section className="px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5 }}
        className="cursor-pointer rounded-2xl border border-gray-100 bg-gray-50 p-6"
      >
        <div className="mb-4 flex items-center gap-2">
          <MapPin className="h-5 w-5 text-gray-600" />
          <h3 className="text-black">Location</h3>
        </div>

        <div className="grid items-center gap-6 md:grid-cols-2">
          <div className="aspect-video overflow-hidden rounded-xl bg-gray-200">
            <svg
              viewBox="0 0 400 300"
              className="h-full w-full"
            >
              {/* Simple map illustration */}
              <rect
                width="400"
                height="300"
                fill="#f3f4f6"
              />

              {/* Streets */}
              <line
                x1="0"
                y1="100"
                x2="400"
                y2="100"
                stroke="#d1d5db"
                strokeWidth="2"
              />
              <line
                x1="0"
                y1="200"
                x2="400"
                y2="200"
                stroke="#d1d5db"
                strokeWidth="2"
              />
              <line
                x1="100"
                y1="0"
                x2="100"
                y2="300"
                stroke="#d1d5db"
                strokeWidth="2"
              />
              <line
                x1="200"
                y1="0"
                x2="200"
                y2="300"
                stroke="#d1d5db"
                strokeWidth="2"
              />
              <line
                x1="300"
                y1="0"
                x2="300"
                y2="300"
                stroke="#d1d5db"
                strokeWidth="2"
              />

              {/* Diagonal roads */}
              <line
                x1="50"
                y1="0"
                x2="350"
                y2="300"
                stroke="#d1d5db"
                strokeWidth="1.5"
              />
              <line
                x1="150"
                y1="0"
                x2="400"
                y2="200"
                stroke="#d1d5db"
                strokeWidth="1.5"
              />

              {/* Blocks */}
              <rect
                x="120"
                y="120"
                width="60"
                height="60"
                fill="#e5e7eb"
                rx="4"
              />
              <rect
                x="220"
                y="220"
                width="60"
                height="60"
                fill="#e5e7eb"
                rx="4"
              />
              <rect
                x="20"
                y="220"
                width="60"
                height="60"
                fill="#e5e7eb"
                rx="4"
              />

              {/* Location marker */}
              <motion.circle
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                cx="200"
                cy="150"
                r="8"
                fill="#ef4444"
              />
              <motion.circle
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ delay: 0.5, duration: 1.5, repeat: Infinity }}
                cx="200"
                cy="150"
                r="8"
                fill="#ef4444"
              />
            </svg>
          </div>

          <div>
            <h4 className="mb-2 text-2xl text-black">Nairobi</h4>
            <p className="mb-4 text-sm text-gray-400">Kenya</p>
            <p className="text-sm text-gray-600">
              Based in Nairobi, working with clients globally. Available for
              remote opportunities and on-site consultations.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function WorkProcess() {
  const [step, setStep] = React.useState(0);
  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description:
        "We start with a Discovery Call to discuss your goals, needs, and project requirements. This helps us align our vision and set the foundation for a successful collaboration.",
      active: true,
    },
    {
      number: "02",
      title: "Planning & Architecture",
      description:
        "Define the technical architecture, choose the right tech stack, and create detailed wireframes and user flows.",
      active: false,
    },
    {
      number: "03",
      title: "Development & Testing",
      description:
        "Build the application with clean, scalable code. Implement features iteratively with continuous testing.",
      active: false,
    },
    {
      number: "04",
      title: "Deployment & Launch",
      description:
        "Deploy to production on AWS (or your csp of choice) with proper monitoring, optimization, and post-launch support.",
      active: false,
    },
    {
      number: "05",
      title: "Maintenance & Growth",
      description:
        "Ongoing support, performance monitoring, feature updates, and scaling as your business grows.",
      active: false,
    },
  ];

  const getStep = (index: number) => {
    return steps[index];
  };

  const handleStep = (index: number) => {
    // Set all steps to inactive
    steps.map((currentStep) => {
      if (currentStep.active) currentStep.active = false;
    });

    // Set the current step index
    setStep(index);

    // Set the current step to active
    steps[index].active = true;
    return;
  };

  return (
    <section className="px-8 py-8 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6 flex items-center gap-2">
          <Target className="h-5 w-5 text-gray-600" />
          <h3 className="text-black">How I work</h3>
        </div>

        <div className="mb-8">
          <h4 className="mb-4 text-2xl text-black">{getStep(step).title}</h4>
          <p className="max-w-2xl text-sm leading-relaxed text-gray-600">
            {getStep(step).description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {steps.map((current, index) => (
            <motion.button
              key={current.number}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleStep(index)}
              className={`cursor-pointer rounded-full px-6 py-2 text-sm transition-all ${
                index === step
                  ? "bg-black text-white"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-gray-300"
              }`}
            >
              Step {current.number}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
