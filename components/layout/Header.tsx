"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

const SunIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-5 w-5 text-amber-200 transition-transform duration-300 group-hover:rotate-12"
  >
    <path
      fill="currentColor"
      d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm0-14.5a1 1 0 0 1 1 1v1.2a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Zm0 16.8a1 1 0 0 1 1 1V22a1 1 0 1 1-2 0v-1.2a1 1 0 0 1 1-1Zm8-7.8a1 1 0 0 1-1 1h-1.2a1 1 0 1 1 0-2H19a1 1 0 0 1 1 1Zm-16.8 0a1 1 0 0 1-1 1H1a1 1 0 1 1 0-2h1.2a1 1 0 0 1 1 1Zm13.46-5.46a1 1 0 0 1 0 1.42l-.85.85a1 1 0 1 1-1.42-1.42l.85-.85a1 1 0 0 1 1.42 0Zm-11.31 11.3a1 1 0 0 1 0 1.42l-.85.85a1 1 0 0 1-1.42-1.42l.85-.85a1 1 0 0 1 1.42 0Zm11.31 1.42a1 1 0 0 1-1.42 0l-.85-.85a1 1 0 1 1 1.42-1.42l.85.85a1 1 0 0 1 0 1.42Zm-11.31-11.3a1 1 0 0 1-1.42 0l-.85-.85a1 1 0 0 1 1.42-1.42l.85.85a1 1 0 0 1 0 1.42Z"
    />
  </svg>
);

const MoonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-5 w-5 text-slate-100 transition-transform duration-300 group-hover:-rotate-12"
  >
    <path
      fill="currentColor"
      d="M21.5 14.5c-1.2.7-2.6 1.1-4.1 1.1-4.4 0-8-3.6-8-8 0-1.5.4-2.9 1.1-4.1a.75.75 0 0 0-.9-1.05C5.3 3.6 2.5 7.5 2.5 12c0 5.8 4.7 10.5 10.5 10.5 4.5 0 8.4-2.8 9.6-6.8a.75.75 0 0 0-1.05-.9Z"
    />
  </svg>
);

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const isEnglish = language === "en";
  const isDark = theme === "dark";
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false
  );
  return (
    <header className="theme-surface sticky top-0 z-50 w-full border-b backdrop-blur-xl shadow-[0_10px_30px_-20px_rgba(0,0,0,0.8)]">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <div className="theme-text flex items-center gap-3">
          <span className="text-xs font-semibold tracking-[0.45em] sm:text-sm">
            {t.navbar.brand}
          </span>
        </div>

        <div className="theme-muted hidden items-center gap-7 text-[0.95rem] md:flex">
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
                className="relative cursor-pointer transition-colors duration-200 hover:text-slate-900 dark:hover:text-white"
              >
                {t.navbar.links[item.key as keyof typeof t.navbar.links]}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
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
          <div className="theme-surface flex items-center rounded-xl p-1 shadow-[0_10px_25px_-20px_rgba(0,0,0,0.9)]">
            <button
              onClick={() => setLanguage("en")}
              className={`rounded-lg px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                isEnglish
                  ? "theme-surface-strong theme-text shadow-[0_8px_20px_-15px_rgba(15,23,42,0.45)]"
                  : "theme-muted hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {t.navbar.actions.languageEnglish}
            </button>
            <button
              onClick={() => setLanguage("vi")}
              className={`rounded-lg px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                !isEnglish
                  ? "theme-surface-strong theme-text shadow-[0_8px_20px_-15px_rgba(15,23,42,0.45)]"
                  : "theme-muted hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {t.navbar.actions.languageVietnamese}
            </button>
          </div>
          <button className="theme-surface theme-text rounded-full px-5 py-2 text-sm shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 dark:hover:border-blue-400/40 hover:border-slate-300 dark:hover:bg-slate-900/80 hover:bg-white">
            {t.navbar.actions.contact}
          </button>
          {mounted ? (
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`group flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 hover:-translate-y-0.5 ${
                isDark
                  ? "border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-white/0 shadow-[0_12px_30px_-20px_rgba(15,23,42,0.9)] hover:border-white/35 hover:bg-white/10"
                  : "border-slate-300/40 bg-white shadow-[0_12px_30px_-20px_rgba(148,163,184,0.7)] hover:border-slate-400/60 hover:bg-slate-50"
              }`}
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-300 ${
                  isDark
                    ? "bg-slate-950/70 text-amber-200 shadow-[0_8px_20px_-15px_rgba(0,0,0,0.9)] group-hover:bg-slate-900/80"
                    : "bg-[#0f172a] text-slate-100 shadow-[0_8px_20px_-15px_rgba(15,23,42,0.6)] group-hover:bg-[#1e293b]"
                }`}
              >
                {isDark ? <SunIcon /> : <MoonIcon />}
              </span>
            </button>
          ) : (
            <div className="h-10 w-10 rounded-xl border border-slate-200/40 bg-white/80 dark:border-white/10 dark:bg-slate-900/80" />
          )}
        </div>
      </nav>
    </header>
  );
}