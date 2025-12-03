import Image from "next/image";
import { Menu } from "lucide-react";
import React from "react";
import { ModeToggle } from "@/components/ModeToggle";

export default function NavHeader() {
  return (
    <header className="border-b border-gray-100 px-8 py-4 dark:border-neutral-600">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg">
            <Image
              src={"img.png"}
              alt={"Logo"}
              width={32}
              height={32}
              className={"rounded-lg shadow-none outline-none"}
            />
          </div>
          <span className="text-sm text-gray-600 dark:text-neutral-100">
            code.gitaoh@gmail.com
          </span>
        </div>

        <div className={"flex items-center gap-3"}>
          <button className="cursor-pointer rounded-lg p-2 transition-colors hover:bg-neutral-600">
            <Menu className="h-5 w-5 text-gray-600 dark:text-white" />
          </button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
