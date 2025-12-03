import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function RouteDropDownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="lg"
          className={"cursor-pointer"}
        >
          <Menu className="h-5 w-5 text-gray-600 dark:text-white" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={"end"}>
        <DropdownMenuItem
          asChild={true}
          className={"cursor-pointer"}
        >
          <Link href={"/blog"}>Articles</Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          asChild={true}
          className={"cursor-pointer"}
        >
          <Link href={"/notes"}>Notes</Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          asChild={true}
          className={"cursor-pointer"}
        >
          <Link href={"/projects"}>Projects</Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          asChild={true}
          className={"cursor-pointer"}
        >
          <Link href={"/about"}>About</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
