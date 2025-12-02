import {useTheme} from "next-themes";
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
      className="cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-2 transition-colors hover:bg-gray-100"
    >
      <Activity mode={theme === "system" ? "visible" : "hidden"}>
        <Monitor className="h-5 w-5 text-gray-600" />
      </Activity>

      <Activity mode={theme === "light" ? "visible" : "hidden"}>
        <Sun className="h-5 w-5 text-gray-600" />
      </Activity>

      <Activity mode={theme === "dark" ? "visible" : "hidden"}>
        <Moon className="h-5 w-5 text-gray-600" />
      </Activity>
    </button>
  );
}