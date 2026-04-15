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
    <div className="min-h-screen bg-[#080d1a] text-white">
      <Header />
      <main className="px-6 py-24 sm:py-32">
        <section className="mx-auto flex w-full max-w-[1200px] flex-col gap-16">
          <div className="flex flex-col gap-6">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
              {t.projects.eyebrow}
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.projects.headline}
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-300/90 sm:text-xl">
              {t.projects.intro}
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {t.projects.cards.map((card, index) => (
              <div
                key={card.title}
                className="flex w-full flex-col gap-6 rounded-[28px] border border-blue-500/15 bg-[#0b1222] p-8 shadow-[0_40px_80px_-50px_rgba(5,12,26,0.9)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-[0_45px_90px_-55px_rgba(56,96,255,0.45)] sm:p-10 lg:p-12"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-200/80">
                  {card.category}
                </p>
                <div className="flex flex-col gap-3">
                  <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
                    {card.title}
                  </h2>
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                    {card.subtitle}
                  </p>
                  <p className="text-base leading-relaxed text-slate-300/85 sm:text-lg">
                    {card.summary}
                  </p>
                </div>

                <div className="grid gap-6 text-sm text-slate-200/85 sm:text-base lg:grid-cols-3">
                  <div className="flex flex-col gap-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200/80">
                      {card.contextTitle}
                    </p>
                    <p className="leading-relaxed">{card.context}</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200/80">
                      {card.contributionsTitle}
                    </p>
                    <ul className="flex flex-col gap-2 text-slate-200/85">
                      {card.contributions.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400/80" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200/80">
                      {card.impactTitle}
                    </p>
                    <ul className="flex flex-col gap-2 text-slate-200/85">
                      {card.impacts.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400/80" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col gap-4 border-t border-blue-500/15 pt-6 text-sm text-slate-300/85 sm:text-base">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-200/80">
                      {card.techStackLabel}
                    </p>
                    <p className="mt-2">{card.techStack}</p>
                  </div>
                  <a
                    href={sourceLinks[index] ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="w-fit text-sm font-semibold uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:text-blue-200"
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