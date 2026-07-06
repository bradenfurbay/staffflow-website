import { UserPlus, ClipboardCheck, GraduationCap, BarChart3 } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

const steps = [
  {
    icon: UserPlus,
    title: "Add Employee",
    description:
      "Create a profile in seconds and assign the right role-based onboarding path—server, cook, host, and more.",
  },
  {
    icon: ClipboardCheck,
    title: "Employee Completes Onboarding",
    description:
      "New hires work through digital paperwork, welcome materials, and role-specific steps at their own pace.",
  },
  {
    icon: GraduationCap,
    title: "Complete Training & Quizzes",
    description:
      "Interactive lessons and quizzes confirm every employee actually understands the material before day one on the floor.",
  },
  {
    icon: BarChart3,
    title: "Manager Tracks Progress",
    description:
      "Watch completion, quiz scores, and compliance status from one dashboard—no check-ins or spreadsheets required.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="Up and running in four simple steps"
          subtitle="No IT department needed. Add your first employee today and let StaffFlow handle the rest."
        />

        <div className="relative mt-16">
          {/* Connecting line (desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent lg:block dark:via-brand-500/30"
          />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={i * 120}>
                  <div className="relative flex flex-col items-center text-center">
                    <div className="relative">
                      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-soft ring-1 ring-gray-200 dark:bg-[#1c1c1e] dark:text-brand-400 dark:ring-white/10">
                        <Icon className="h-7 w-7" strokeWidth={1.75} />
                      </span>
                      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white shadow-soft">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="mt-5 text-base font-semibold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
