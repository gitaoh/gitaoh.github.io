import { Cloud, Code2, Server, Smartphone } from "lucide-react";
import { Article } from "@/lib/types";

export function GET() {
  return Response.json({
    message: "Success",
    data: articlesData,
  });
}
