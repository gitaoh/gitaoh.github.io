import { articlesData } from "@/data/articlesData";
import RenderArticleDetailPage from "@/components/RenderArticleDetailPage";

export async function generateStaticParams() {
  return articlesData.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function ArticleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <RenderArticleDetailPage params={params} />;
}
