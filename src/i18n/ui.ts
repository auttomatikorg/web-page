import type { Locale } from "@/config/site";

/**
 * Shared chrome strings: navigation, the skip link, the footer's legal links
 * and the prefilled WhatsApp message. Everything a slide actually says lives
 * in `src/i18n/content/slides.ts`.
 */
export const ui = {
  es: {
    "nav.home": "Inicio",
    "nav.process": "Cómo trabajamos",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",
    "nav.label": "Principal",

    "common.skip": "Saltar al contenido",
    "common.cta": "Hablemos",

    "wa.default":
      "Hola, me gustaría saber cómo la IA puede ayudar a mi empresa.",

    "footer.legal": "Aviso legal",
    "footer.terms": "Términos y condiciones",
    "footer.privacy": "Privacidad",
    "footer.cookies": "Cookies",
  },

  ca: {
    "nav.home": "Inici",
    "nav.process": "Com treballem",
    "nav.about": "Nosaltres",
    "nav.contact": "Contacte",
    "nav.label": "Principal",

    "common.skip": "Salta al contingut",
    "common.cta": "Parlem",

    "wa.default":
      "Hola, m'agradaria saber com la IA pot ajudar la meva empresa.",

    "footer.legal": "Avís legal",
    "footer.terms": "Termes i condicions",
    "footer.privacy": "Privacitat",
    "footer.cookies": "Cookies",
  },

  en: {
    "nav.home": "Home",
    "nav.process": "How we work",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.label": "Main",

    "common.skip": "Skip to content",
    "common.cta": "Let's talk",

    "wa.default": "Hi, I'd like to know how AI can help my company.",

    "footer.legal": "Legal notice",
    "footer.terms": "Terms and conditions",
    "footer.privacy": "Privacy",
    "footer.cookies": "Cookies",
  },
} as const;

export type UIKey = keyof (typeof ui)["es"];

export function useTranslations(lang: Locale) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui.es[key];
  };
}
