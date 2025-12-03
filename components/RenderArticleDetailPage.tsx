import Link from "next/link";
import { articlesData } from "@/data/articlesData";
import RenderArticle from "@/components/RenderArticle";

export default async function RenderArticleDetailPage({
  params,
}: {
  params: Promise<{id: string}>;
}) {
  const { id } = await params;
  console.log({id})
  const article = articlesData.find((a) => a.id === parseInt(id));

  if (!article) {
    return (
      <Link
        href="/blog"
        replace
      />
    );
  }

  return <RenderArticle article={article} />;
}
