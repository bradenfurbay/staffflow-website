import Reveal from "./Reveal.jsx";

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600 ring-1 ring-inset ring-brand-100">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-gray-600">{subtitle}</p>
      )}
    </Reveal>
  );
}
