import {
  FileText,
  ShieldCheck,
  Award,
  MessageSquare,
  AlertTriangle,
  Bot,
} from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

const features = [
  {
    icon: FileText,
    title: "Digital Paperwork",
    description:
      "Collect signatures on handbooks, tax forms, and agreements—stored securely and searchable anytime.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Tracking",
    description:
      "Automatic reminders before food handler cards and safety certifications expire, across your whole team.",
  },
  {
    icon: Award,
    title: "Employee Certifications",
    description:
      "Issue in-house certifications as employees master stations, menus, and responsibilities.",
  },
  {
    icon: MessageSquare,
    title: "SMS Notifications",
    description:
      "Text reminders for incomplete training, upcoming deadlines, and important announcements.",
  },
  {
    icon: AlertTriangle,
    title: "Incident Logging",
    description:
      "Document workplace incidents with a structured, time-stamped record managers can rely on.",
  },
  {
    icon: Bot,
    title: "AI Receptionist Integration",
    description:
      "Let AI handle routine calls and questions so your staff can stay focused on guests in the building.",
  },
];

export default function FutureFeatures() {
  return (
    <section id="roadmap" className="bg-gray-50/70 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Roadmap"
          title="Where StaffFlow is headed"
          subtitle="The platform is growing with the restaurants that use it. Here's what's coming next."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={(i % 3) * 100}>
                <div className="group relative h-full overflow-hidden rounded-2xl bg-white p-6 shadow-soft ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_2px_4px_rgb(37_99_235_/_0.06),0_16px_40px_rgb(37_99_235_/_0.12)] hover:ring-brand-200">
                  <span className="absolute right-4 top-4 rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-semibold text-gray-500">
                    Coming soon
                  </span>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-white transition-colors group-hover:bg-brand-600">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {feature.description}
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
