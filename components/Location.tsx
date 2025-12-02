"use client"

import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import React from "react";

export default function Location() {
    return (
        <section className="px-8 py-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="cursor-pointer rounded-2xl border border-gray-100 bg-gray-50 p-6 dark:bg-neutral-600 dark:border-neutral-500"
            >
                <div className="mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-gray-600 dark:text-gray-50" />
                    <h3 className="text-black dark:text-gray-200">Location</h3>
                </div>

                <div className="grid items-center gap-6 md:grid-cols-2">
                    <div className="aspect-video overflow-hidden dark:bg-gray-800 rounded-xl bg-gray-400">
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
                        <h4 className="mb-2 text-2xl text-black dark:text-white">Nairobi</h4>
                        <p className="mb-4 text-sm text-gray-400 dark:text-gray-50">Kenya</p>
                        <p className="text-sm dark:text-gray-50 text-gray-600">
                            Based in Nairobi, working with clients globally. Available for
                            remote opportunities and on-site consultations.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}