"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function ContactCta() {
  const { t } = useLanguage();
  return (
    <section className="relative py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-sky-500/30 via-indigo-500/20 to-transparent blur-3xl" />
      </div>

      <div className="theme-card relative mx-auto flex w-full max-w-6xl flex-col items-center gap-8 rounded-3xl px-6 py-16 text-center shadow-2xl shadow-black/30 sm:px-8 sm:py-20">
        <span className="theme-subtle text-xs uppercase tracking-[0.4em]">
          {t.contact.eyebrow}
        </span>
        <h2 className="theme-text max-w-3xl text-3xl font-semibold sm:text-4xl lg:text-5xl">
          {t.contact.headline}
        </h2>
        <button className="theme-surface theme-text rounded-full px-8 py-3 text-sm shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 dark:hover:border-blue-400/40 hover:border-slate-300 dark:hover:bg-slate-900/80 hover:bg-white">
          {t.contact.cta}
        </button>
      </div>
    </section>
  );
}