import { useEffect, useState } from "react";
import { Menu, X, UtensilsCrossed } from "lucide-react";

const links = [
  { href: "#product", label: "Product" },
  { href: "#benefits", label: "Benefits" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#demo", label: "Demo" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-200/60 bg-white/70 backdrop-blur-2xl dark:border-white/10 dark:bg-black/70"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-white">
            <UtensilsCrossed className="h-4 w-4" strokeWidth={2.25} />
          </span>
          <span className="text-base font-semibold tracking-tight text-gray-900 dark:text-white">
            StaffFlow
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            className="rounded-full bg-brand-600 px-5 py-1.5 text-sm font-medium text-white transition-all hover:bg-brand-500"
          >
            Contact Me
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 md:hidden dark:text-gray-300 dark:hover:bg-white/10"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-gray-200/60 bg-white/95 px-6 py-4 backdrop-blur-2xl md:hidden dark:border-white/10 dark:bg-black/95">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brand-600 px-3 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-brand-500"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
