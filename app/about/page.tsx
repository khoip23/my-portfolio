"use client";

import Link from "next/link";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import { useLanguage } from "../../context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <div className="theme-shell theme-bg">
      <Header />
      <main className="px-6 py-24 sm:py-32">
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-14">
          <div className="flex flex-col gap-6">
            <p className="theme-subtle text-sm uppercase tracking-[0.35em]">
              {t.about.eyebrow}
            </p>
            <h1 className="theme-text text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {t.about.headline}
            </h1>
            <p className="theme-muted max-w-3xl text-lg leading-relaxed sm:text-xl">
              {t.about.intro}
            </p>
          </div>

          <div className="grid auto-rows-fr items-stretch gap-8 md:grid-cols-2">
            {t.about.pillars.map((item) => (
              <div
                key={item.title}
                className="theme-card group flex h-full flex-col rounded-[20px] p-7 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.9)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_45px_-24px_rgba(30,64,175,0.35)] sm:p-8 dark:hover:border-blue-400/40 hover:border-slate-300"
              >
                <h3 className="theme-text text-xl font-semibold tracking-tight sm:text-2xl">
                  {item.title}
                </h3>
                <p className="theme-muted mt-4 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="theme-card rounded-[20px] p-8 shadow-[0_25px_50px_-30px_rgba(15,23,42,0.95)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_55px_-30px_rgba(30,64,175,0.35)] sm:p-12 dark:hover:border-blue-400/40 hover:border-slate-300">
            <div className="flex flex-col gap-6">
              <h2 className="theme-text text-3xl font-semibold tracking-tight sm:text-4xl">
                {t.about.contributionTitle}
              </h2>
              <div className="theme-muted flex flex-col gap-6 text-base leading-relaxed sm:text-lg">
                {t.about.contributionItems.map((item) => (
                  <div key={item.title}>
                    <p className="theme-text">{item.title}</p>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="theme-card theme-muted flex flex-col gap-4 rounded-[20px] p-8 shadow-[0_25px_50px_-30px_rgba(15,23,42,0.95)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_55px_-30px_rgba(30,64,175,0.35)] sm:p-12 dark:hover:border-blue-400/40 hover:border-slate-300">
            <p className="theme-text text-lg">{t.about.exploreTitle}</p>
            <p>{t.about.exploreDescription}</p>
            <Link
              href="/projects"
              className="theme-surface theme-text w-fit rounded-full px-5 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 dark:hover:border-blue-400/40 hover:border-slate-300 dark:hover:bg-slate-900/80 hover:bg-white"
            >
              {t.about.exploreCta}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}