"use client";

import { useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function MetadataUpdater() {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = t.meta.title;
    document.documentElement.lang = language;

    const metaDescription = document.querySelector(
      "meta[name='description']"
    ) as HTMLMetaElement | null;

    if (metaDescription) {
      metaDescription.content = t.meta.description;
      return;
    }

    const newMeta = document.createElement("meta");
    newMeta.name = "description";
    newMeta.content = t.meta.description;
    document.head.appendChild(newMeta);
  }, [language, t.meta.description, t.meta.title]);

  return null;
}