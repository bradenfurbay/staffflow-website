import { Star } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

const testimonials = [
  {
    quote:
      "Onboarding used to take me two full shifts per new hire. Now I add them to StaffFlow and they show up on day one already knowing our menu and procedures.",
    name: "Sample Testimonial",
    role: "General Manager, Family Restaurant",
    initials: "GM",
  },
  {
    quote:
      "The quizzes are my favorite part. I finally know my staff actually read the food safety material instead of just signing a paper that says they did.",
    name: "Sample Testimonial",
    role: "Owner, Fast-Casual Concept",
    initials: "OW",
  },
  {
    quote:
      "New servers ask the AI assistant questions they'd be embarrassed to ask me twice. They ramp up faster and I spend less time repeating myself.",
    name: "Sample Testimonial",
    role: "Front-of-House Manager, Bistro",
    initials: "FM",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What restaurant teams are saying"
          subtitle="Illustrative examples of the problems StaffFlow is built to solve."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={i} delay={i * 100}>
              <figure className="relative flex h-full flex-col rounded-3xl bg-white p-8 shadow-soft ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_2px_4px_rgb(37_99_235_/_0.06),0_16px_40px_rgb(37_99_235_/_0.12)] hover:ring-brand-200 dark:bg-[#1c1c1e] dark:ring-white/10 dark:hover:ring-brand-500/40">
                <span className="absolute right-5 top-5 rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-semibold text-amber-700 ring-1 ring-inset ring-amber-200 dark:bg-amber-400/10 dark:text-amber-300 dark:ring-amber-400/25">
                  Sample
                </span>
                <div className="flex gap-1" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">
                  "{testimonial.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5 dark:border-white/10">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-600 dark:bg-brand-500/15 dark:text-brand-400">
                    {testimonial.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-8 text-center text-sm text-gray-400 dark:text-gray-500">
            These are sample testimonials for illustration—not real customer
            reviews. Real reviews will appear here as restaurants adopt StaffFlow.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
