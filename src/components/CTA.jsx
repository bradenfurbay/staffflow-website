import { ArrowRight, Play } from "lucide-react";
import Reveal from "./Reveal.jsx";

export default function CTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 py-16 shadow-lift sm:px-16 sm:py-20">
            {/* Background glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse 60% 80% at 20% 0%, rgb(37 99 235 / 0.45), transparent 60%), radial-gradient(ellipse 50% 70% at 85% 100%, rgb(56 189 248 / 0.25), transparent 60%)",
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgb(255 255 255 / 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.5) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
                maskImage:
                  "radial-gradient(ellipse 60% 90% at 50% 0%, black 20%, transparent 75%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 60% 90% at 50% 0%, black 20%, transparent 75%)",
              }}
            />

            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to simplify onboarding at your restaurant?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-300">
                Get a personal walkthrough and see how much time StaffFlow can
                save your managers every single week.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-gray-900 shadow-lift transition-all hover:-translate-y-0.5 hover:bg-gray-100 sm:w-auto"
                >
                  Request a Demo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#demo"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 px-7 py-3.5 text-base font-semibold text-white ring-1 ring-white/25 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15 sm:w-auto"
                >
                  <Play className="h-4 w-4 fill-current" />
                  Watch the Video
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
