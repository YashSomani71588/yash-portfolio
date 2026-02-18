"use client";

import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative w-14 h-7 rounded-full bg-white/10 backdrop-blur-md border border-white/20 
                 hover:bg-white/15 transition-all duration-300 group"
            aria-label="Toggle theme"
        >
            <div
                className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-gradient-to-br 
                    transition-all duration-300 flex items-center justify-center
                    ${theme === "dark"
                        ? "translate-x-0 from-purple-600 to-blue-600"
                        : "translate-x-7 from-yellow-400 to-orange-400"
                    }`}
            >
                {theme === "dark" ? (
                    <Moon className="w-4 h-4 text-white" />
                ) : (
                    <Sun className="w-4 h-4 text-white" />
                )}
            </div>
        </button>
    );
}
