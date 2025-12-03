"use client";

import { useTheme } from "next-themes";
import React, { Activity } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => {
        // dark->light->system->dark
        setTheme(
          theme === "dark"
            ? "light"
            : theme === "light"
              ? "system"
              : theme === "system"
                ? "dark"
                : "light",
        );
      }}
      className="cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-2 transition-colors hover:bg-gray-100 dark:border-neutral-700 dark:bg-neutral-700 dark:text-neutral-600 dark:hover:bg-neutral-600 dark:hover:text-white"
    >
      <Activity mode={theme === "system" ? "visible" : "hidden"}>
        <Monitor className="h-5 w-5 text-gray-600 dark:text-white" />
      </Activity>

      <Activity mode={theme === "light" ? "visible" : "hidden"}>
        <Sun className="h-5 w-5 text-gray-600 dark:text-white" />
      </Activity>

      <Activity mode={theme === "dark" ? "visible" : "hidden"}>
        <Moon className="h-5 w-5 text-gray-600 dark:text-white" />
      </Activity>
    </button>
  );
}
