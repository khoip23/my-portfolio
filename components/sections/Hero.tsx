"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-12 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/30 via-sky-400/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-[-10%] h-[26rem] w-[26rem] rounded-full bg-gradient-to-br from-fuchsia-500/20 via-transparent to-transparent blur-[140px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-16 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="flex flex-col gap-8">
          <span className="theme-surface theme-muted inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.18em] sm:text-[0.7rem]">
            {t.hero.badge}
          </span>
          <h1 className="theme-text text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {t.hero.headline}
          </h1>
          <p className="theme-muted max-w-2xl text-base sm:text-lg lg:text-xl">
            {t.hero.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="theme-surface theme-text rounded-full px-7 py-3 text-sm shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 dark:hover:border-blue-400/40 hover:border-slate-300 dark:hover:bg-slate-900/80 hover:bg-white">
              {t.hero.primaryCta}
            </button>
            <button className="theme-surface theme-text rounded-full px-7 py-3 text-sm transition-all duration-300 hover:-translate-y-0.5 dark:hover:border-blue-400/40 hover:border-slate-300 dark:hover:bg-slate-900/60 hover:bg-white">
              {t.hero.secondaryCta}
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-sky-500/30 via-purple-500/10 to-transparent blur-2xl" />
          <div className="theme-card relative flex flex-col gap-6 rounded-3xl p-8 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="flex items-center gap-4">
              <div>
                <p className="theme-text text-sm font-semibold">
                  {t.hero.profileName}
                </p>
                <p className="theme-subtle text-xs">
                  {t.hero.profileRole}
                </p>
              </div>
            </div>
            <div className="theme-muted grid gap-4 text-sm">
              <div>
                <p className="theme-subtle text-xs uppercase tracking-[0.3em]">
                  {t.hero.currentFocusLabel}
                </p>
                <p className="theme-text mt-2">
                  {t.hero.currentFocusValue}
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="theme-subtle text-xs uppercase tracking-[0.3em]">
                    {t.hero.locationLabel}
                  </p>
                  <p className="theme-text mt-2">
                    {t.hero.locationValue}
                  </p>
                </div>
                <div>
                  <p className="theme-subtle text-xs uppercase tracking-[0.3em]">
                    {t.hero.emailLabel}
                  </p>
                  <p className="theme-text mt-2">
                    {t.hero.emailValue}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}