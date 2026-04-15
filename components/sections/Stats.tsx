"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function Stats() {
  const { t } = useLanguage();

  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 sm:px-8 lg:grid-cols-3">
        {t.stats.map((stat) => (
          <div
            key={stat.subtitle}
            className="rounded-2xl border border-white/10 bg-slate-950/70 p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-white/25"
          >
            <p className="text-3xl font-semibold text-white sm:text-4xl">
              {stat.title}
            </p>
            <p className="mt-3 text-sm text-slate-400 sm:text-base">
              {stat.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}