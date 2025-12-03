export interface ArticleSection {
  type: "heading" | "subheading" | "paragraph" | "code" | "list" | "blockquote";
  content: string;
  language?: string;
  filename?: string;
  items?: string[];
}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  icon: never;
  tags: string[];
  content: ArticleSection[];
}