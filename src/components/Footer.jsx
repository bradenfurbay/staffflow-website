import { UtensilsCrossed } from "lucide-react";

const productLinks = [
  { href: "#product", label: "Product" },
  { href: "#benefits", label: "Benefits" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#roadmap", label: "Roadmap" },
];

const companyLinks = [
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
  { href: "#demo", label: "Demo" },
  { href: "#", label: "Privacy Policy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50/70">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft">
                <UtensilsCrossed className="h-4.5 w-4.5" strokeWidth={2.25} />
              </span>
              <span className="text-lg font-bold tracking-tight text-gray-900">
                StaffFlow
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-600">
              Digital onboarding, training, quizzes, AI assistance, and manager
              dashboards—built specifically for restaurant teams.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">Product</p>
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-brand-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">Company</p>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-brand-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row">
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
