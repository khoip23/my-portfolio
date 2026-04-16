"use client";

import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import { useLanguage } from "../../context/LanguageContext";

const sourceLinks = [
  "https://github.com/khoip23/clinic",
  "https://github.com/khoip23/EbayProject",
];

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <div className="theme-shell theme-bg">
      <Header />
      <main className="px-6 py-24 sm:py-32">
        <section className="mx-auto flex w-full max-w-[1200px] flex-col gap-16">
          <div className="flex flex-col gap-6">
            <p className="theme-subtle text-sm uppercase tracking-[0.35em]">
              {t.projects.eyebrow}
            </p>
            <h1 className="theme-text text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {t.projects.headline}
            </h1>
            <p className="theme-muted max-w-3xl text-lg leading-relaxed sm:text-xl">
              {t.projects.intro}
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {t.projects.cards.map((card, index) => (
              <div
                key={card.title}
                className="theme-card-muted flex w-full flex-col gap-6 rounded-[28px] p-8 shadow-[0_40px_80px_-50px_rgba(5,12,26,0.9)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_45px_90px_-55px_rgba(56,96,255,0.35)] sm:p-10 lg:p-12 dark:hover:border-blue-400/40 hover:border-slate-300"
              >
                <p className="theme-accent text-xs font-semibold uppercase tracking-[0.35em]">
                  {card.category}
                </p>
                <div className="flex flex-col gap-3">
                  <h2 className="theme-text text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                    {card.title}
                  </h2>
                  <p className="theme-subtle text-sm uppercase tracking-[0.25em]">
                    {card.subtitle}
                  </p>
                  <p className="theme-muted text-base leading-relaxed sm:text-lg">
                    {card.summary}
                  </p>
                </div>

                <div className="theme-muted grid gap-6 text-sm sm:text-base lg:grid-cols-3">
                  <div className="flex flex-col gap-3">
                    <p className="theme-accent text-sm font-semibold uppercase tracking-[0.3em]">
                      {card.contextTitle}
                    </p>
                    <p className="leading-relaxed">{card.context}</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="theme-accent text-sm font-semibold uppercase tracking-[0.3em]">
                      {card.contributionsTitle}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {card.contributions.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="theme-accent-strong mt-2 h-1.5 w-1.5 rounded-full bg-current" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="theme-accent text-sm font-semibold uppercase tracking-[0.3em]">
                      {card.impactTitle}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {card.impacts.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="theme-accent-strong mt-2 h-1.5 w-1.5 rounded-full bg-current" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="theme-muted flex flex-col gap-4 border-t theme-divider pt-6 text-sm sm:text-base">
                  <div>
                    <p className="theme-accent text-xs font-semibold uppercase tracking-[0.35em]">
                      {card.techStackLabel}
                    </p>
                    <p className="mt-2">{card.techStack}</p>
                  </div>
                  <a
                    href={sourceLinks[index] ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="theme-text w-fit text-sm font-semibold uppercase tracking-[0.25em] transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-200"
                  >
                    {card.sourceCta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}