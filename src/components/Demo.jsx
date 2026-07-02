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
          <div className="overflow-hidden rounded-2xl bg-gray-950 shadow-lift ring-1 ring-white/10">
            <video
              className="aspect-video w-full"
              src="/staffflow-demo.mp4"
              controls
              playsInline
              preload="metadata"
            >
              Your browser does not support embedded videos.
            </video>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
