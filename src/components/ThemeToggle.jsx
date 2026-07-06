import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-gray-700 shadow-lift ring-1 ring-gray-200 backdrop-blur-xl transition-all duration-300 hover:scale-110 dark:bg-[#1c1c1e]/80 dark:text-gray-100 dark:ring-white/15"
    >
      {dark ? (
        <Sun className="h-5 w-5" strokeWidth={2} />
      ) : (
        <Moon className="h-5 w-5" strokeWidth={2} />
      )}
    </button>
  );
}
