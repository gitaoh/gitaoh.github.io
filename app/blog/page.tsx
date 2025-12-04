"use client";

import { motion } from "motion/react";
import { useState } from "react";

export default function ArticlesPage() {
  const categories = ["All", "Backend", "Frontend", "Cloud", "Mobile"];
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-12">
          <h1 className="mb-4 text-5xl text-black md:text-5xl dark:text-gray-100">
            Articles
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
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
                  ? "bg-black text-white dark:bg-neutral-600"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-500 dark:text-gray-50"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Articles Grid */}

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
