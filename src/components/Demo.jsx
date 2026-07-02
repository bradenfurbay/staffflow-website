import { Play } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Demo() {
  return (
    <section id="demo" className="bg-gray-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200 ring-1 ring-inset ring-white/15">
            Demo
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            See StaffFlow in action
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-400">
            A quick walkthrough of onboarding, training, quizzes, and the
            manager dashboard—everything your team touches day to day.
          </p>
        </Reveal>

        <Reveal delay={150} className="mx-auto mt-12 max-w-4xl">
          {/*
            Replace this placeholder with your demo video embed, e.g.:
            <iframe
              className="aspect-video w-full rounded-2xl"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="StaffFlow Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          */}
          <div className="group relative aspect-video cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lift ring-1 ring-white/10">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 20%, rgb(37 99 235 / 0.4), transparent 50%), radial-gradient(circle at 75% 80%, rgb(59 130 246 / 0.25), transparent 50%)",
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-600">
                <Play className="ml-1 h-8 w-8 fill-white text-white" />
              </span>
              <p className="text-sm font-medium text-gray-300">
                Demo video coming soon
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
