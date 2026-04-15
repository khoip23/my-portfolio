"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function ContactCta() {
  const { t } = useLanguage();
  return (
    <section className="relative py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-sky-500/30 via-indigo-500/20 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-8 rounded-3xl border border-white/10 bg-slate-950/70 px-6 py-16 text-center shadow-2xl shadow-black/30 sm:px-8 sm:py-20">
        <span className="text-xs uppercase tracking-[0.4em] text-slate-500">
          {t.contact.eyebrow}
        </span>
        <h2 className="max-w-3xl text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
          {t.contact.headline}
        </h2>
        <button className="rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20">
          {t.contact.cta}
        </button>
      </div>
    </section>
  );
}