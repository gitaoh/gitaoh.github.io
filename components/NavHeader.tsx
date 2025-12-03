import Image from "next/image";
import React from "react";
import { ModeToggle } from "@/components/ModeToggle";
import RouteDropDownMenu from "@/components/Navigation/RouteDropDownMenu";
import Link from "next/link";

export default function NavHeader() {
  return (
    <header className="border-b border-gray-100 py-4 dark:border-neutral-600">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
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
        </Link>

        <div className={"flex items-center gap-3"}>
          <RouteDropDownMenu />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
