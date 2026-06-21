import type { Locale } from "@/config/site";

export const DEFAULT_LANG: Locale = "es";

export const LANGUAGES: Record<Locale, { label: string; htmlLang: string }> = {
  es: { label: "Español", htmlLang: "es-ES" },
  ca: { label: "Català", htmlLang: "ca-ES" },
  en: { label: "English", htmlLang: "en" },
};

export const LOCALES = Object.keys(LANGUAGES) as Locale[];

/**
 * Page keys -> localized paths. Used by the language switcher (to jump to the
 * equivalent page in another language) and by hreflang alternates.
 */
export type PageKey =
  | "home"
  | "process"
  | "about"
  | "contact"
  | "legal"
  | "privacy"
  | "cookies";

export const ROUTES: Record<PageKey, Record<Locale, string>> = {
  home: { es: "/", ca: "/ca/", en: "/en/" },
  process: { es: "/proceso/", ca: "/ca/proces/", en: "/en/process/" },
  about: { es: "/sobre-nosotros/", ca: "/ca/sobre-nosaltres/", en: "/en/about/" },
  contact: { es: "/contacto/", ca: "/ca/contacte/", en: "/en/contact/" },
  legal: { es: "/aviso-legal/", ca: "/ca/avis-legal/", en: "/en/legal-notice/" },
  privacy: { es: "/privacidad/", ca: "/ca/privacitat/", en: "/en/privacy/" },
  cookies: { es: "/cookies/", ca: "/ca/cookies/", en: "/en/cookies/" },
};

/** Detect the active locale from the URL pathname. */
export function getLangFromUrl(url: URL): Locale {
  const [, seg] = url.pathname.split("/");
  if (seg === "ca" || seg === "en") return seg;
  return DEFAULT_LANG;
}

/** Localized path for a page key. */
export function route(key: PageKey, lang: Locale): string {
  return ROUTES[key][lang];
}

/** All alternates for a given page (for hreflang). */
export function alternates(key: PageKey): { lang: Locale; path: string }[] {
  return LOCALES.map((lang) => ({ lang, path: ROUTES[key][lang] }));
}
