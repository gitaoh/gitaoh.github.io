"use client";

import { motion } from "motion/react";
import { Github, Heart, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export function NavFooter() {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Articles", path: "/blog" },
    { name: "Notes", path: "/notes" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/gitaoh" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/gitaoh/" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/codegitaoh" },
    { name: "Email", icon: Mail, href: "mailto:code.gitaoh@gmail.com" },
  ];

  const technologies = [
    "Figma",
    "React",
    "Next.js",
    "Node.js",
    "Bun",
    "Express.js",
    "NestJS",
    "React Native",
    "Expo",
    "Shadcn UI",
    "TailwindCSS",
    "DigitalOcean",
    "Vercel",
    "AWS",
  ];

  return (
    <footer className="mt-auto border-t border-gray-100 dark:border-neutral-600">
      <div className="py-12">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg">
                <Image
                  src={"img.png"}
                  alt={"Logo"}
                  width={32}
                  height={32}
                  className={"rounded-lg shadow-none outline-none"}
                />
              </div>
              <div>
                <p className="text-black dark:text-neutral-50">Joseph Gitau</p>
                <p className="text-sm text-gray-500 dark:text-neutral-300">Full-Stack Typescript Developer, DevOps, Cloud Engineer</p>
              </div>
            </div>
            <p className="mb-4 max-w-md text-sm text-gray-600 dark:text-neutral-100">
              Building modern web and mobile applications with passion and
              precision. Specializing in full-stack development using Typescript, Cloud
              engineering, and DevOps.
            </p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-gray-100 dark:bg-neutral-600 dark:text-neutral-50 px-2 py-1 text-xs text-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-black dark:text-neutral-100">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.path}>
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="inline-block text-sm text-gray-600 transition-colors hover:text-black dark:text-neutral-100 dark:hover:text-neutral-200"
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4 text-black dark:text-neutral-100">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="group flex items-center gap-3 dark:text-neutral-100 dark:hover:text-neutral-200 text-sm text-gray-600 transition-colors hover:text-black"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 dark:bg-neutral-600 transition-colors group-hover:bg-black dark:group-hover:bg-neutral-500">
                    <social.icon className="h-4 w-4 transition-colors group-hover:text-white dark:group-hover:text-neutral-50" />
                  </div>
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex w-full items-center justify-center border-t border-gray-100 pt-8 dark:border-neutral-600">
          <p className="flex items-center gap-2 text-sm text-gray-500 dark:text-neutral-50">
            © {currentYear} gitaoh. Made with{" "}
            <Heart
              className="h-4 w-4 text-red-500"
              fill="currentColor"
            />{" "}
            and NextJS
          </p>
        </div>
      </div>
    </footer>
  );
}
