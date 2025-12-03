"use client"

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export default function RenderArticleDetailPage({article}: {article: any}) {
  const IconComponent = article.icon;
  return (
    <div className="px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Back Button */}
        <Link href="/blog">
          <motion.button
            whileHover={{ x: -5 }}
            className="mb-8 flex items-center gap-2 text-gray-600 transition-colors hover:text-black"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to Articles</span>
          </motion.button>
        </Link>

        {/* Article Header */}
        <div className="mb-12">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-black">
              <IconComponent className="h-7 w-7 text-white" />
            </div>
            <div>
              <span className="text-sm text-gray-500">{article.category}</span>
              <div className="mt-1 flex items-center gap-3">
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Calendar className="h-3 w-3" />
                  <span>{article.date}</span>
                </div>
                <span className="h-1 w-1 rounded-full bg-gray-300"></span>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock className="h-3 w-3" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          </div>

          <h1 className="mb-6 text-4xl text-black md:text-5xl">
            {article.title}
          </h1>

          <p className="mb-6 text-xl leading-relaxed text-gray-600">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          {article.content.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8"
            >
              {section.type === "heading" && (
                <h2 className="mt-8 mb-4 text-2xl text-black">
                  {section.content}
                </h2>
              )}

              {section.type === "paragraph" && (
                <p className="mb-4 leading-relaxed text-gray-700">
                  {section.content}
                </p>
              )}

              {section.type === "subheading" && (
                <h3 className="mt-6 mb-3 text-xl text-black">
                  {section.content}
                </h3>
              )}

              {section.type === "list" && (
                <ul className="mb-4 list-inside list-disc space-y-2 text-gray-700">
                  {section.items?.map((item, i) => (
                    <li
                      key={i}
                      className="leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.type === "code" && (
                <div className="my-6 overflow-hidden rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
                    <span className="text-sm text-gray-300">
                      {section.language}
                    </span>
                    <span className="text-xs text-gray-500">
                      {section.filename}
                    </span>
                  </div>
                  <pre className="overflow-x-auto bg-gray-900 p-6">
                    <code className="font-mono text-sm leading-relaxed text-gray-100">
                      {section.content}
                    </code>
                  </pre>
                </div>
              )}

              {section.type === "blockquote" && (
                <blockquote className="my-6 rounded-r-lg border-l-4 border-black bg-gray-50 py-2 pl-6">
                  <p className="text-gray-700 italic">{section.content}</p>
                </blockquote>
              )}
            </motion.div>
          ))}
        </article>

        {/* Article Footer */}
        <div className="mt-16 border-t border-gray-200 pt-8">
          <div className="rounded-2xl bg-gray-50 p-8">
            <h3 className="mb-4 text-2xl text-black">About the Author</h3>
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-2xl text-white">
                JD
              </div>
              <div>
                <p className="mb-1 text-black">John Doe</p>
                <p className="mb-3 text-sm text-gray-600">
                  Full-Stack Developer specializing in modern web technologies,
                  cloud architecture, and DevOps practices. Passionate about
                  sharing knowledge and solving complex problems.
                </p>
                <div className="flex gap-2">
                  <span className="rounded-lg border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600">
                    15+ years experience
                  </span>
                  <span className="rounded-lg border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600">
                    50+ projects delivered
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>

}