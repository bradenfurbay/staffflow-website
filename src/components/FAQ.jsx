import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

const faqs = [
  {
    question: "How long does it take to set up StaffFlow for my restaurant?",
    answer:
      "Most restaurants are up and running the same day. You add your training materials, documents, and quizzes once, and every new hire after that follows the same consistent flow automatically.",
  },
  {
    question: "Do my employees need any technical skills to use it?",
    answer:
      "No. If your staff can use a smartphone, they can use StaffFlow. The employee experience is a simple checklist: watch, read, sign, and answer quiz questions—one step at a time.",
  },
  {
    question: "Can I customize onboarding for different roles?",
    answer:
      "Yes. Servers, cooks, hosts, and managers can each have their own onboarding path with role-specific training, documents, and quizzes—so no one wastes time on material that doesn't apply to them.",
  },
  {
    question: "What does the AI assistant actually do?",
    answer:
      "It answers employee questions instantly using your restaurant's own materials—menu details, policies, procedures. New hires get accurate answers without pulling a manager away during a rush.",
  },
  {
    question: "How do I know if my employees actually completed their training?",
    answer:
      "The manager dashboard shows every employee's progress in real time: which steps are done, quiz scores, and what's overdue. No more guessing or asking around.",
  },
  {
    question: "Does StaffFlow work for restaurants with multiple locations?",
    answer:
      "StaffFlow is built to scale with you. Reach out through the contact form and we'll talk through your setup and what would work best for your locations.",
  },
  {
    question: "How much does StaffFlow cost?",
    answer:
      "Pricing is being finalized during early access. Contact me for a demo and we'll discuss a plan that fits your restaurant's size and needs.",
  },
];

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="rounded-2xl bg-white shadow-soft ring-1 ring-gray-100 transition-shadow hover:shadow-lift">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base font-semibold text-gray-900">
          {faq.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-[15px] leading-relaxed text-gray-600">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-gray-50/70 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          subtitle="Everything restaurant owners usually want to know before booking a demo."
        />

        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 60}>
              <FaqItem
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
