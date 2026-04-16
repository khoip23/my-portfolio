"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="theme-divider border-t py-10 sm:py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="theme-text text-sm">{t.footer.name}</p>
          <p className="theme-subtle text-xs">{t.footer.role}</p>
        </div>

        <div className="theme-subtle flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em]">
          {[
            { label: t.footer.links.github, href: "https://github.com/khoip23" },
            {
              label: t.footer.links.resume,
              href: "/resume/PHAM%20HONG%20KHOI%20SOFTWARE%20ENGINEER%20Backend%20developer.pdf",
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer transition-colors duration-200 hover:text-slate-900 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}