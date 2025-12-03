"use client"

import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from "next/link";
import { use, useState } from "react";
import { Article } from "@/lib/types";

async function getArticles() {
  const data = await fetch("/api/blog")
  if(!data.ok) return new Error("Something went wrong")
  return await data.json()
}

export default function ArticlesPage() {
  const articles = []
  const categories = ['All', 'Backend', 'Frontend', 'Cloud', 'Mobile'];
  const [activeCategory, setActiveCategory] = useState('All');

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
          <h1 className="text-5xl md:text-6xl text-black mb-4">Articles</h1>
          <p className="text-gray-600 text-lg">
            Insights, solutions, and learnings from building modern web and mobile applications.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm transition-all ${
                activeCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredArticles.map((article: Article, index: number) => (
            <Link key={article.id} href={`/blog/${article.id}`}>
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 cursor-pointer group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0"
                  >
                    <article.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-gray-500">{article.category}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>{article.date}</span>
                      </div>
                    </div>

                    <h2 className="text-xl text-black mb-2 group-hover:text-gray-700 transition-colors">
                      {article.title}
                    </h2>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.slice(0, 3).map((tag: string) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-white text-gray-600 rounded-full text-xs border border-gray-200"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-1 text-black group-hover:gap-2 transition-all"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-4 h-4" />
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
          className="mt-12 bg-black rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl mb-4">Problem-Solving Spotlight</h3>
          <p className="text-gray-300 mb-6">
            Real-world challenges I&#39;ve tackled and the solutions that made the difference.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                problem: 'Reduced API response time by 70%',
                solution: 'Implemented Redis caching and database query optimization'
              },
              {
                problem: 'Scaled app to handle 10K concurrent users',
                solution: 'Migrated to microservices architecture with load balancing'
              },
              {
                problem: 'Cut AWS costs by 40%',
                solution: 'Optimized Lambda functions and implemented auto-scaling'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20"
              >
                <p className="text-sm text-gray-300 mb-2">Problem</p>
                <p className="text-white mb-4">{item.problem}</p>
                <p className="text-sm text-gray-300 mb-2">Solution</p>
                <p className="text-gray-400 text-sm">{item.solution}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
