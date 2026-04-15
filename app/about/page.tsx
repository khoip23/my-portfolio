"use client";

import Link from "next/link";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import { useLanguage } from "../../context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-[#0b1120] text-white">
      <Header />
      <main className="px-6 py-24 sm:py-32">
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-14">
          <div className="flex flex-col gap-6">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
              {t.about.eyebrow}
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.about.headline}
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-300/90 sm:text-xl">
              {t.about.intro}
            </p>
          </div>

          <div className="grid auto-rows-fr items-stretch gap-8 md:grid-cols-2">
            {t.about.pillars.map((item) => (
              <div
                key={item.title}
                className="group flex h-full flex-col rounded-[20px] border border-blue-500/20 bg-slate-950/70 p-7 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.9)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_25px_45px_-24px_rgba(30,64,175,0.45)] sm:p-8"
              >
                <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-300/90">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-[20px] border border-blue-500/20 bg-slate-950/70 p-8 shadow-[0_25px_50px_-30px_rgba(15,23,42,0.95)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_30px_55px_-30px_rgba(30,64,175,0.45)] sm:p-12">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {t.about.contributionTitle}
              </h2>
              <div className="flex flex-col gap-6 text-base leading-relaxed text-slate-300/90 sm:text-lg">
                {t.about.contributionItems.map((item) => (
                  <div key={item.title}>
                    <p className="text-white">{item.title}</p>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-[20px] border border-blue-500/20 bg-slate-950/70 p-8 text-slate-300/90 shadow-[0_25px_50px_-30px_rgba(15,23,42,0.95)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_30px_55px_-30px_rgba(30,64,175,0.45)] sm:p-12">
            <p className="text-lg text-white">{t.about.exploreTitle}</p>
            <p>{t.about.exploreDescription}</p>
            <Link
              href="/projects"
              className="w-fit rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/20"
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