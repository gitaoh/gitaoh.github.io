
"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RenderArticle() {
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

        {/* Article Content */}

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
  );
}
