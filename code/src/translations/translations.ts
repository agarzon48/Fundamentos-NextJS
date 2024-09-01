import type { Translations } from "./translations.types";
import es from "./es.json";
import en from "./en.json";

export type AvailableLocales = "en" | "es";

export const availableLocales: AvailableLocales[] = ["es", "en"];

// const dictionary = {
//     en: () => import("./en.json").then((module) => module.default),
//     es: () => import("./es.json").then((module) => module.default),
//   };

const dictionary = {
  en,
  es,
};

export const getTranslations = async (lang: AvailableLocales) => {
  const translations: Translations = dictionary[lang];
  return translations;
};

export const useClientTranslations = (lang?: AvailableLocales) => {
  if (!globalThis?.window) {
    return dictionary.es;
  }
  if (lang) {
    return dictionary[lang];
  }
  if (globalThis?.window.location.pathname.startsWith("/en")) {
    return dictionary.en;
  }
  return dictionary.es;
};
