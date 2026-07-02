import { useState } from "react";
import {
  LayoutDashboard,
  User,
  ClipboardList,
  ListChecks,
  Sparkles,
  Users,
  TrendingUp,
  Clock,
  CheckCircle2,
  Circle,
  GraduationCap,
} from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

const tabs = [
  { id: "admin", label: "Admin Dashboard", icon: LayoutDashboard },
  { id: "employee", label: "Employee Dashboard", icon: User },
  { id: "onboarding", label: "Onboarding Flow", icon: ClipboardList },
  { id: "quiz", label: "Quiz System", icon: ListChecks },
  { id: "ai", label: "AI Assistant", icon: Sparkles },
];

function BrowserFrame({ children, url }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lift ring-1 ring-gray-200">
      <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <div className="mx-auto flex h-6 w-full max-w-xs items-center justify-center rounded-md bg-white px-3 text-[11px] font-medium text-gray-400 ring-1 ring-gray-200">
          {url}
        </div>
        <div className="w-12" />
      </div>
      <div className="h-[380px] overflow-hidden sm:h-[420px]">{children}</div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, trend, color }) {
  return (
    <div className="rounded-xl bg-white p-4 shadow-soft ring-1 ring-gray-100">
      <div className="flex items-center justify-between">
        <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${color}`}>
          <Icon className="h-4 w-4" />
        </span>
        {trend && (
          <span className="text-[11px] font-semibold text-emerald-600">{trend}</span>
        )}
      </div>
      <p className="mt-3 text-xl font-bold text-gray-900">{value}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}

function ProgressRow({ name, role, pct, color = "bg-brand-500" }) {
  return (
    <div className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-gray-50">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-600">
        {name.split(" ").map((n) => n[0]).join("")}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-gray-900">{name}</p>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
      <div className="hidden w-28 sm:block">
        <div className="h-1.5 rounded-full bg-gray-100">
          <div className={`h-1.5 rounded-full ${color}`} style={{ width: `${pct}%` }} />
        </div>
      </div>
      <span className="w-9 text-right text-xs font-semibold text-gray-600">{pct}%</span>
    </div>
  );
}

function AdminMockup() {
  return (
    <div className="flex h-full bg-gray-50/80">
      <div className="hidden w-44 shrink-0 flex-col gap-1 border-r border-gray-100 bg-white p-3 sm:flex">
        {["Overview", "Employees", "Training", "Quizzes", "Compliance", "Settings"].map(
          (item, i) => (
            <span
              key={item}
              className={`rounded-lg px-3 py-2 text-xs font-medium ${
                i === 0 ? "bg-brand-50 text-brand-700" : "text-gray-500"
              }`}
            >
              {item}
            </span>
          )
        )}
      </div>
      <div className="flex-1 overflow-hidden p-4 sm:p-5">
        <p className="text-sm font-semibold text-gray-900">Good morning, Manager</p>
        <p className="text-xs text-gray-500">Here's what's happening with your team.</p>
        <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <StatCard icon={Users} label="Active employees" value="24" trend="+3" color="bg-brand-50 text-brand-600" />
          <StatCard icon={Clock} label="Onboarding now" value="5" color="bg-amber-50 text-amber-600" />
          <StatCard icon={GraduationCap} label="Quizzes passed" value="87%" trend="+6%" color="bg-emerald-50 text-emerald-600" />
          <StatCard icon={TrendingUp} label="Hours saved / wk" value="12" color="bg-violet-50 text-violet-600" />
        </div>
        <div className="mt-4 rounded-xl bg-white shadow-soft ring-1 ring-gray-100">
          <p className="border-b border-gray-100 px-4 py-2.5 text-xs font-semibold text-gray-700">
            Onboarding progress
          </p>
          <div className="p-1.5">
            <ProgressRow name="Maria Lopez" role="Server · Day 2" pct={80} />
            <ProgressRow name="James Kim" role="Line Cook · Day 1" pct={35} color="bg-amber-500" />
            <ProgressRow name="Ava Brooks" role="Host · Day 3" pct={100} color="bg-emerald-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

function EmployeeMockup() {
  const tasks = [
    { label: "Watch welcome video", done: true },
    { label: "Sign employee handbook", done: true },
    { label: "Food safety basics", done: true },
    { label: "POS system training", done: false },
    { label: "Menu knowledge quiz", done: false },
  ];
  return (
    <div className="h-full bg-gray-50/80 p-4 sm:p-6">
      <div className="mx-auto max-w-md">
        <div className="rounded-xl bg-gradient-to-br from-brand-600 to-brand-500 p-5 text-white shadow-soft">
          <p className="text-xs font-medium text-brand-100">Welcome back</p>
          <p className="mt-0.5 text-lg font-bold">Hi Maria! 👋</p>
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs font-medium">
              <span>Onboarding progress</span>
              <span>60%</span>
            </div>
            <div className="mt-1.5 h-2 rounded-full bg-white/25">
              <div className="h-2 w-[60%] rounded-full bg-white" />
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-xl bg-white p-2 shadow-soft ring-1 ring-gray-100">
          <p className="px-3 pt-2 pb-1 text-xs font-semibold text-gray-700">Today's tasks</p>
          {tasks.map((task) => (
            <div key={task.label} className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-gray-50">
              {task.done ? (
                <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-emerald-500" />
              ) : (
                <Circle className="h-4.5 w-4.5 shrink-0 text-gray-300" />
              )}
              <span
                className={`text-sm ${
                  task.done ? "text-gray-400 line-through" : "font-medium text-gray-800"
                }`}
              >
                {task.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OnboardingMockup() {
  const steps = ["Profile", "Documents", "Training", "Quiz"];
  return (
    <div className="flex h-full items-center justify-center bg-gray-50/80 p-4 sm:p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-soft ring-1 ring-gray-100">
        <div className="flex items-center justify-between">
          {steps.map((step, i) => (
            <div key={step} className="flex flex-1 items-center last:flex-none">
              <div className="flex flex-col items-center gap-1.5">
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                    i < 2
                      ? "bg-brand-600 text-white"
                      : i === 2
                      ? "bg-brand-50 text-brand-600 ring-2 ring-brand-600"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {i < 2 ? "✓" : i + 1}
                </span>
                <span className="text-[10px] font-medium text-gray-500">{step}</span>
              </div>
              {i < steps.length - 1 && (
                <div className={`mx-1 mb-5 h-0.5 flex-1 rounded ${i < 2 ? "bg-brand-600" : "bg-gray-200"}`} />
              )}
            </div>
          ))}
        </div>
        <div className="mt-6">
          <p className="text-base font-bold text-gray-900">Food Safety Training</p>
          <p className="mt-1 text-sm text-gray-500">
            Watch the short video below, then continue to the quiz.
          </p>
          <div className="mt-4 flex aspect-video items-center justify-center rounded-xl bg-gray-900">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur">
              <span className="ml-0.5 h-0 w-0 border-y-8 border-l-[14px] border-y-transparent border-l-white" />
            </span>
          </div>
          <button
            type="button"
            className="mt-4 w-full rounded-lg bg-brand-600 py-2.5 text-sm font-semibold text-white"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

function QuizMockup() {
  const answers = [
    { label: "165°F (74°C)", correct: true },
    { label: "125°F (52°C)" },
    { label: "145°F (63°C)" },
    { label: "185°F (85°C)" },
  ];
  return (
    <div className="flex h-full items-center justify-center bg-gray-50/80 p-4 sm:p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-soft ring-1 ring-gray-100">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
            Question 4 of 10
          </span>
          <span className="text-xs font-medium text-gray-400">Food Safety Quiz</span>
        </div>
        <div className="mt-3 h-1.5 rounded-full bg-gray-100">
          <div className="h-1.5 w-[40%] rounded-full bg-brand-500" />
        </div>
        <p className="mt-5 text-base font-bold text-gray-900">
          What is the minimum safe internal temperature for cooked chicken?
        </p>
        <div className="mt-4 space-y-2.5">
          {answers.map((answer) => (
            <div
              key={answer.label}
              className={`flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-medium ${
                answer.correct
                  ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                  : "border-gray-200 text-gray-700"
              }`}
            >
              {answer.label}
              {answer.correct && <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AiMockup() {
  return (
    <div className="flex h-full items-center justify-center bg-gray-50/80 p-4 sm:p-6">
      <div className="flex w-full max-w-md flex-col rounded-2xl bg-white shadow-soft ring-1 ring-gray-100">
        <div className="flex items-center gap-2.5 border-b border-gray-100 px-5 py-3.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-brand-500 text-white">
            <Sparkles className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-bold text-gray-900">StaffFlow Assistant</p>
            <p className="text-[11px] text-emerald-600">● Online</p>
          </div>
        </div>
        <div className="space-y-3 p-5">
          <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-brand-600 px-4 py-2.5 text-sm text-white">
            What do I do if a customer has a gluten allergy?
          </div>
          <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-gray-100 px-4 py-2.5 text-sm text-gray-800">
            Great question! Let the kitchen know immediately and check the
            allergen guide. Our gluten-free menu items are marked with a{" "}
            <span className="font-semibold">GF</span> badge. Always confirm with
            the chef before serving.
          </div>
          <div className="flex max-w-[60%] items-center gap-1.5 rounded-2xl rounded-bl-md bg-gray-100 px-4 py-3">
            <span className="typing-dot h-2 w-2 rounded-full bg-gray-400" />
            <span className="typing-dot h-2 w-2 rounded-full bg-gray-400" />
            <span className="typing-dot h-2 w-2 rounded-full bg-gray-400" />
          </div>
        </div>
        <div className="border-t border-gray-100 p-3">
          <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-2.5 ring-1 ring-gray-200">
            <span className="text-sm text-gray-400">Ask anything about your job...</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-600 text-white">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const mockups = {
  admin: <AdminMockup />,
  employee: <EmployeeMockup />,
  onboarding: <OnboardingMockup />,
  quiz: <QuizMockup />,
  ai: <AiMockup />,
};

const urls = {
  admin: "app.staffflow.com/dashboard",
  employee: "app.staffflow.com/my-training",
  onboarding: "app.staffflow.com/onboarding",
  quiz: "app.staffflow.com/quiz/food-safety",
  ai: "app.staffflow.com/assistant",
};

export default function ProductPreview() {
  const [active, setActive] = useState("admin");

  return (
    <section id="product" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Product"
          title="One platform for your entire team"
          subtitle="From the manager's overview to each employee's personal training path—everything lives in one clean, simple interface."
        />

        <Reveal delay={100} className="mt-12">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActive(tab.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-gray-900 text-white shadow-soft"
                      : "bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={200} className="mx-auto mt-8 max-w-4xl">
          <BrowserFrame url={urls[active]}>{mockups[active]}</BrowserFrame>
        </Reveal>
      </div>
    </section>
  );
}
