import { useState } from "react";
import { Send, CheckCircle2, Mail, MessageSquare } from "lucide-react";
import Reveal from "./Reveal.jsx";

const inputClasses =
  "w-full rounded-xl border-0 bg-white px-4 py-3 text-sm text-gray-900 shadow-soft ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 transition-shadow focus:outline-none focus:ring-2 focus:ring-brand-500";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire this up to a form backend (e.g. Formspree, Resend, or your own API)
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600 ring-1 ring-inset ring-brand-100">
              Contact
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Let's talk about your restaurant
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Interested in a demo, early access, or just have a question? Send
              a message and I'll get back to you personally.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Direct response</p>
                  <p className="text-sm text-gray-600">
                    Every message goes straight to the founder—no sales team.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <MessageSquare className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Personalized demo</p>
                  <p className="text-sm text-gray-600">
                    See exactly how StaffFlow would work for your restaurant.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-2xl bg-gray-50 p-6 shadow-soft ring-1 ring-gray-100 sm:p-8">
              {submitted ? (
                <div className="flex h-full min-h-[380px] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                    <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-gray-900">
                    Message sent!
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-600">
                    Thanks for reaching out. I'll get back to you as soon as
                    possible—usually within a day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label htmlFor="restaurant" className="mb-1.5 block text-sm font-medium text-gray-700">
                        Restaurant
                      </label>
                      <input
                        id="restaurant"
                        name="restaurant"
                        type="text"
                        required
                        placeholder="Restaurant name"
                        className={inputClasses}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@restaurant.com"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell me about your restaurant and what you're looking for..."
                      className={`${inputClasses} resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-soft transition-all hover:bg-brand-700 hover:shadow-lift"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
