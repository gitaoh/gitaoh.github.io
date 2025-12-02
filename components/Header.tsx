import Image from "next/image";
import { Menu } from "lucide-react";
import ToggleTheme from "@/components/toggleTheme";
import React from "react";

export default function Header() {
    return (
        <header className="border-b border-gray-100 px-8 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black">
                        <Image
                            src={"img.png"}
                            alt={"Logo"}
                            width={32}
                            height={32}
                        />
                    </div>
                    <span className="text-sm text-gray-600">code.gitaoh@gmail.com</span>
                </div>

                <div className={"flex items-center gap-3"}>
                    <button className="cursor-pointer rounded-lg p-2 transition-colors hover:bg-gray-50">
                        <Menu className="h-5 w-5 text-gray-600" />
                    </button>
                    <ToggleTheme />
                </div>
            </div>
        </header>
    );
}