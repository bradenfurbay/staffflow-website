import Reveal from "./Reveal.jsx";

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
