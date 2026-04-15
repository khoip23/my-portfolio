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
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.18em] text-slate-300 sm:text-[0.7rem]">
            {t.hero.badge}
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {t.hero.headline}
          </h1>
          <p className="max-w-2xl text-base text-slate-300 sm:text-lg lg:text-xl">
            {t.hero.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20">
              {t.hero.primaryCta}
            </button>
            <button className="rounded-full border border-white/20 px-7 py-3 text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/5">
              {t.hero.secondaryCta}
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-sky-500/30 via-purple-500/10 to-transparent blur-2xl" />
          <div className="relative flex flex-col gap-6 rounded-3xl border border-white/15 bg-slate-950/70 p-8 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="flex items-center gap-4">
              <div>
                <p className="text-sm font-semibold text-white">{t.hero.profileName}</p>
                <p className="text-xs text-slate-400">{t.hero.profileRole}</p>
              </div>
            </div>
            <div className="grid gap-4 text-sm text-slate-300">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  {t.hero.currentFocusLabel}
                </p>
                <p className="mt-2 text-white">
                  {t.hero.currentFocusValue}
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    {t.hero.locationLabel}
                  </p>
                  <p className="mt-2 text-white">{t.hero.locationValue}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    {t.hero.emailLabel}
                  </p>
                  <p className="mt-2 text-white">{t.hero.emailValue}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}