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
            className="theme-card rounded-2xl p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 dark:hover:border-blue-400/40 hover:border-slate-300"
          >
            <p className="theme-text text-3xl font-semibold sm:text-4xl">
              {stat.title}
            </p>
            <p className="theme-subtle mt-3 text-sm sm:text-base">
              {stat.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}