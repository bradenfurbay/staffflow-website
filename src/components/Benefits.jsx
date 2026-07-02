import {
  Clock,
  FolderKanban,
  FileSignature,
  Sparkles,
  LineChart,
  LayoutDashboard,
  ShieldCheck,
  UserCog,
} from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

const benefits = [
  {
    icon: Clock,
    title: "Save hours every week",
    description:
      "Stop repeating the same onboarding walkthrough for every new hire. StaffFlow handles it so managers can run the floor.",
  },
  {
    icon: FolderKanban,
    title: "Organized onboarding",
    description:
      "Every step, document, and training lives in one structured flow—no more binders, sticky notes, or lost checklists.",
  },
  {
    icon: FileSignature,
    title: "Digital paperwork",
    description:
      "Handbooks, agreements, and forms are signed and stored digitally. No printing, scanning, or chasing signatures.",
  },
  {
    icon: Sparkles,
    title: "AI answers questions",
    description:
      "New employees get instant answers about menus, policies, and procedures—without pulling a manager off the line.",
  },
  {
    icon: LineChart,
    title: "Track employee progress",
    description:
      "See exactly where every new hire is in training, what they've completed, and where they're stuck.",
  },
  {
    icon: LayoutDashboard,
    title: "Manager dashboard",
    description:
      "A single, clean overview of your whole team's onboarding, training, and quiz results—updated in real time.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance tracking",
    description:
      "Keep food safety certifications and required trainings current, with clear visibility into what's expiring.",
  },
  {
    icon: UserCog,
    title: "Role-based onboarding",
    description:
      "Servers, cooks, and hosts each get a tailored path—so everyone learns exactly what their role requires.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-gray-50/70 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Benefits"
          title="Built to give restaurant managers their time back"
          subtitle="StaffFlow replaces scattered paperwork and repeated verbal training with one simple, consistent system."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <Reveal key={benefit.title} delay={(i % 4) * 80}>
                <div className="group h-full rounded-2xl bg-white p-6 shadow-soft ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
