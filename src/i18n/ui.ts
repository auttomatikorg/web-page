import type { Locale } from "@/config/site";

/**
 * Shared UI strings (navigation, buttons, footer). Page body copy lives in the
 * per-page content modules under `src/i18n/content/`.
 */
export const ui = {
  es: {
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.process": "Cómo trabajamos",
    "nav.cases": "Casos",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",

    "cta.book": "Reserva tu auditoría",
    "cta.bookFree": "Reserva tu auditoría IA gratuita",
    "cta.bookShort": "Reservar auditoría",
    "cta.whatsapp": "Escríbenos por WhatsApp",
    "cta.seeProcess": "Cómo trabajamos",
    "cta.seeServices": "Ver servicios",

    "common.menu": "Menú",
    "common.close": "Cerrar",
    "common.langLabel": "Idioma",
    "common.skip": "Saltar al contenido",
    "common.phase": "Fase",
    "common.result": "Resultado",

    "wa.default":
      "Hola, me gustaría saber cómo la IA puede ayudar a mi empresa.",

    "footer.tagline":
      "IA operativa para pymes que quieren escalar sin disparar costes.",
    "footer.nav": "Navegación",
    "footer.legalTitle": "Legal",
    "footer.contactTitle": "Contacto",
    "footer.legal": "Aviso legal",
    "footer.privacy": "Privacidad",
    "footer.cookies": "Cookies",
    "footer.rights": "Todos los derechos reservados.",
    "footer.builtWith": "IA operativa, implementada con criterio.",
  },

  ca: {
    "nav.home": "Inici",
    "nav.services": "Serveis",
    "nav.process": "Com treballem",
    "nav.cases": "Casos",
    "nav.about": "Nosaltres",
    "nav.contact": "Contacte",

    "cta.book": "Reserva la teva auditoria",
    "cta.bookFree": "Reserva la teva auditoria d'IA gratuïta",
    "cta.bookShort": "Reservar auditoria",
    "cta.whatsapp": "Escriu-nos per WhatsApp",
    "cta.seeProcess": "Com treballem",
    "cta.seeServices": "Veure serveis",

    "common.menu": "Menú",
    "common.close": "Tancar",
    "common.langLabel": "Idioma",
    "common.skip": "Salta al contingut",
    "common.phase": "Fase",
    "common.result": "Resultat",

    "wa.default":
      "Hola, m'agradaria saber com la IA pot ajudar la meva empresa.",

    "footer.tagline":
      "IA operativa per a pimes que volen escalar sense disparar costos.",
    "footer.nav": "Navegació",
    "footer.legalTitle": "Legal",
    "footer.contactTitle": "Contacte",
    "footer.legal": "Avís legal",
    "footer.privacy": "Privacitat",
    "footer.cookies": "Cookies",
    "footer.rights": "Tots els drets reservats.",
    "footer.builtWith": "IA operativa, implementada amb criteri.",
  },

  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.process": "How we work",
    "nav.cases": "Cases",
    "nav.about": "About",
    "nav.contact": "Contact",

    "cta.book": "Book your audit",
    "cta.bookFree": "Book your free AI audit",
    "cta.bookShort": "Book an audit",
    "cta.whatsapp": "Message us on WhatsApp",
    "cta.seeProcess": "How we work",
    "cta.seeServices": "See services",

    "common.menu": "Menu",
    "common.close": "Close",
    "common.langLabel": "Language",
    "common.skip": "Skip to content",
    "common.phase": "Phase",
    "common.result": "Outcome",

    "wa.default": "Hi, I'd like to know how AI can help my company.",

    "footer.tagline":
      "Operational AI for SMEs that want to scale without ballooning costs.",
    "footer.nav": "Navigation",
    "footer.legalTitle": "Legal",
    "footer.contactTitle": "Contact",
    "footer.legal": "Legal notice",
    "footer.privacy": "Privacy",
    "footer.cookies": "Cookies",
    "footer.rights": "All rights reserved.",
    "footer.builtWith": "Operational AI, implemented with judgement.",
  },
} as const;

export type UIKey = keyof (typeof ui)["es"];

export function useTranslations(lang: Locale) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui.es[key];
  };
}
