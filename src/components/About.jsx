import { ChefHat, Quote } from "lucide-react";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600 ring-1 ring-inset ring-brand-100">
              About
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Built from behind the counter
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              StaffFlow was built by <strong className="font-semibold text-gray-900">Braden</strong>,
              a restaurant employee who experienced firsthand how difficult
              onboarding and training can be—inconsistent handbooks, verbal
              walkthroughs repeated for every hire, and managers stretched thin.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              StaffFlow was created to simplify that process and save restaurant
              owners valuable time—so managers can focus on running great
              restaurants, not paperwork.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative rounded-2xl bg-gray-50 p-8 shadow-soft ring-1 ring-gray-100 sm:p-10">
              <Quote className="h-8 w-8 text-brand-200" aria-hidden="true" />
              <blockquote className="mt-4 text-xl font-medium leading-relaxed text-gray-800">
                "I watched managers spend entire shifts re-explaining the same
                things to every new hire. There had to be a better way—so I
                built one."
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-white shadow-soft">
                  <ChefHat className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Braden</p>
                  <p className="text-sm text-gray-500">Founder, StaffFlow</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
