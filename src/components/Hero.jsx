import { Play, ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal.jsx";

const highlights = [
  "Built for restaurants",
  "Set up in minutes",
  "No training required",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-36 pb-16 sm:pt-48 sm:pb-24"
    >
      {/* Background wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="animate-float absolute top-0 left-1/2 h-[550px] w-[850px] -translate-x-[70%] rounded-full bg-[radial-gradient(ellipse_at_center,rgb(37_99_235_/_0.14),transparent_60%)] blur-2xl dark:bg-[radial-gradient(ellipse_at_center,rgb(37_99_235_/_0.22),transparent_60%)]" />
        <div
          className="animate-float absolute top-10 left-1/2 h-[500px] w-[750px] -translate-x-[20%] rounded-full bg-[radial-gradient(ellipse_at_center,rgb(56_189_248_/_0.12),transparent_60%)] blur-2xl dark:bg-[radial-gradient(ellipse_at_center,rgb(56_189_248_/_0.16),transparent_60%)]"
          style={{ animationDelay: "-3s" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
              Purpose-built for restaurant teams
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl sm:leading-[1.05] dark:text-white">
              Employee Onboarding.
              <br />
              <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-sky-400 bg-clip-text text-transparent">
                Made Simple.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl dark:text-gray-400">
              Digital onboarding, employee training, quizzes, AI assistance,
              compliance tracking, and manager dashboards—all in one platform
              built for restaurants.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#demo"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-3.5 text-base font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-brand-500 hover:shadow-[0_8px_32px_rgb(37_99_235_/_0.4)] sm:w-auto"
              >
                <Play className="h-4 w-4 fill-current" />
                Watch Demo
              </a>
              <a
                href="#contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gray-100 px-8 py-3.5 text-base font-medium text-gray-900 transition-all hover:-translate-y-0.5 hover:bg-gray-200 sm:w-auto dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              >
                Contact Me
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                >
                  <CheckCircle2 className="h-4 w-4 text-brand-600 dark:text-brand-400" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
