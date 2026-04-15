"use client";

import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const isEnglish = language === "en";
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl shadow-[0_10px_30px_-20px_rgba(0,0,0,0.8)]">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <div className="flex items-center gap-3 text-white">
          <span className="text-xs font-semibold tracking-[0.45em] sm:text-sm">
            {t.navbar.brand}
          </span>
        </div>

        <div className="hidden items-center gap-7 text-[0.95rem] text-slate-300 md:flex">
          {[
            { key: "home", href: "/" },
            { key: "about", href: "/about" },
            { key: "projects", href: "/projects" },
            {
              key: "resume",
              href: "/resume/PHAM%20HONG%20KHOI%20SOFTWARE%20ENGINEER%20Backend%20developer.pdf",
            },
          ].map((item) => {

            const content = (
              <span
                key={item.key}
                className="relative cursor-pointer transition-colors duration-200 hover:text-white"
              >
                {t.navbar.links[item.key as keyof typeof t.navbar.links]}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-white/70 transition-all duration-300 group-hover:w-full" />
              </span>
            );

            const href = item.href;

            if (href) {
              if (item.key === "resume") {
                return (
                  <a key={item.key} href={href} target="_blank" rel="noreferrer">
                    {content}
                  </a>
                );
              }

              return (
                <Link key={item.key} href={href}>
                  {content}
                </Link>
              );
            }

            return content;
          })}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center rounded-xl border border-white/15 bg-white/5 p-1 shadow-[0_10px_25px_-20px_rgba(0,0,0,0.9)]">
            <button
              onClick={() => setLanguage("en")}
              className={`rounded-lg px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                isEnglish
                  ? "bg-white/15 text-white shadow-[0_8px_20px_-15px_rgba(255,255,255,0.8)] hover:bg-white/20"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {t.navbar.actions.languageEnglish}
            </button>
            <button
              onClick={() => setLanguage("vi")}
              className={`rounded-lg px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                !isEnglish
                  ? "bg-white/15 text-white shadow-[0_8px_20px_-15px_rgba(255,255,255,0.8)] hover:bg-white/20"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {t.navbar.actions.languageVietnamese}
            </button>
          </div>
          <button className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/20">
            {t.navbar.actions.contact}
          </button>
        </div>
      </nav>
    </header>
  );
}