import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Demo() {
  return (
    <section id="demo" className="bg-[#0a0a0c] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            Demo
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            See StaffFlow in action
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-400">
            A quick walkthrough of onboarding, training, quizzes, and the
            manager dashboard—everything your team touches day to day.
          </p>
        </Reveal>

        <Reveal delay={150} className="mx-auto mt-12 max-w-4xl">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-8 -z-0 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_center,rgb(59_130_246_/_0.25),transparent_70%)] blur-2xl"
            />
            <div className="relative overflow-hidden rounded-2xl bg-gray-950 shadow-lift ring-1 ring-white/15">
            <video
              className="aspect-video w-full"
              src="/staffflow-demo.mp4"
              poster="/demo-poster.jpg"
              controls
              playsInline
              preload="metadata"
            >
              Your browser does not support embedded videos.
            </video>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
