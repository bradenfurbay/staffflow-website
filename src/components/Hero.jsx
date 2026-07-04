import { Play, ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal.jsx";

const highlights = [
  "Built for restaurants",
  "Set up in minutes",
  "No training required",
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#f8fafc,white)]" />
        {/* Aurora orbs */}
        <div className="animate-float absolute top-0 left-1/2 h-[550px] w-[850px] -translate-x-[70%] rounded-full bg-[radial-gradient(ellipse_at_center,rgb(37_99_235_/_0.35),transparent_60%)] blur-2xl" />
        <div
          className="animate-float absolute top-10 left-1/2 h-[500px] w-[750px] -translate-x-[20%] rounded-full bg-[radial-gradient(ellipse_at_center,rgb(56_189_248_/_0.3),transparent_60%)] blur-2xl"
          style={{ animationDelay: "-3s" }}
        />
        <div className="absolute top-52 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgb(99_102_241_/_0.22),transparent_60%)] blur-2xl" />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 70% 55% at 50% 0%, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 55% at 50% 0%, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-soft ring-1 ring-gray-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
              </span>
              Purpose-built for restaurant teams
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl sm:leading-[1.08]">
              Employee Onboarding{" "}
              <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                Made Simple
              </span>{" "}
              for Restaurants
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
              Digital onboarding, employee training, quizzes, AI assistance,
              compliance tracking, and manager dashboards—all in one platform.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#demo"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-brand-500 to-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-[inset_0_1px_0_rgb(255_255_255_/_0.2),0_2px_4px_rgb(37_99_235_/_0.2),0_12px_32px_rgb(37_99_235_/_0.35)] ring-1 ring-brand-700/50 transition-all hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgb(255_255_255_/_0.2),0_4px_8px_rgb(37_99_235_/_0.25),0_20px_48px_rgb(37_99_235_/_0.45)] sm:w-auto"
              >
                <Play className="h-4 w-4 fill-current" />
                Watch Demo
              </a>
              <a
                href="#contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-gray-900 shadow-soft ring-1 ring-gray-200 transition-all hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-lift sm:w-auto"
              >
                Contact Me
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-600"
                >
                  <CheckCircle2 className="h-4 w-4 text-brand-600" />
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
