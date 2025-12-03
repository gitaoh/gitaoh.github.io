"use client";

import { motion } from "motion/react";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { articlesData } from "@/data/articlesData";
import Link from "next/link";
import RenderArticleDetailPage from "@/components/RenderArticleDetailPage";

export async function generateStaticParams() {
  return articlesData.map((post) => ({
    id: post.id,
  }));
}

export default function ArticleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = articlesData.find((a) => a.id === parseInt(id));

  if (!article) {
    return (
      <Link
        href="/blog"
        replace
      />
    );
  }

  return <RenderArticleDetailPage article={article} />;
}
