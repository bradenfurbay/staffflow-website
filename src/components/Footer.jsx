import { UtensilsCrossed } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
  { href: "#demo", label: "Demo" },
  { href: "#", label: "Privacy Policy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50/70">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <a href="#top" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white shadow-soft">
              <UtensilsCrossed className="h-4.5 w-4.5" strokeWidth={2.25} />
            </span>
            <span className="text-lg font-bold tracking-tight text-gray-900">
              StaffFlow
            </span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} StaffFlow. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Employee onboarding made simple for restaurants.
          </p>
        </div>
      </div>
    </footer>
  );
}
