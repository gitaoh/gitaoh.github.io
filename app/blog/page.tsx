"use client";

import { motion } from "motion/react";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { articlesData } from "@/data/articlesData";
import { useState } from "react";

export default function ArticlesPage() {
  const articles = [...articlesData];
  const categories = ["All", "Backend", "Frontend", "Cloud", "Mobile"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter(
          (article: { category: string }) =>
            article.category === activeCategory,
        );

  return (
    <div className="px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-12">
          <h1 className="mb-4 text-5xl text-black md:text-6xl">Articles</h1>
          <p className="text-lg text-gray-600">
            Insights, solutions, and learnings from building modern web and
            mobile applications.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-2 text-sm transition-all ${
                activeCategory === category
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredArticles.map((article, index: number) => (
            <Link
              key={article.id}
              href={`/blog/${article.id}`}
            >
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer rounded-2xl border border-gray-100 bg-gray-50 p-6"
              >
                <div className="mb-4 flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-black"
                  >
                    <article.icon className="h-6 w-6 text-white" />
                  </motion.div>

                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-xs text-gray-500">
                        {article.category}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-gray-300"></span>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="h-3 w-3" />
                        <span>{article.date}</span>
                      </div>
                    </div>

                    <h2 className="mb-2 text-xl text-black transition-colors group-hover:text-gray-700">
                      {article.title}
                    </h2>
                  </div>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag: string) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.1 }}
                        className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-1 text-black transition-all group-hover:gap-2"
                    >
                      <span>Read</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>

        {/* Featured Problem-Solving Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-2xl bg-black p-8 text-white"
        >
          <h3 className="mb-4 text-2xl">Problem-Solving Spotlight</h3>
          <p className="mb-6 text-gray-300">
            Real-world challenges I&#39;ve tackled and the solutions that made
            the difference.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                problem: "Reduced API response time by 70%",
                solution:
                  "Implemented Redis caching and database query optimization",
              },
              {
                problem: "Scaled app to handle 10K concurrent users",
                solution:
                  "Migrated to microservices architecture with load balancing",
              },
              {
                problem: "Cut AWS costs by 40%",
                solution:
                  "Optimized Lambda functions and implemented auto-scaling",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
              >
                <p className="mb-2 text-sm text-gray-300">Problem</p>
                <p className="mb-4 text-white">{item.problem}</p>
                <p className="mb-2 text-sm text-gray-300">Solution</p>
                <p className="text-sm text-gray-400">{item.solution}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
