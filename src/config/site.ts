/**
 * Central site configuration.
 *
 * ⚠️  PLACEHOLDERS — replace these with the real values before going live.
 *     Search for "TODO" to find everything that needs the client's data.
 */

export type Locale = "es" | "ca" | "en";

export const SITE = {
  name: "Auttomatik",
  /** Production domain — keep in sync with `site` in astro.config.mjs */
  url: "https://www.auttomatik.com",

  /** TODO: contact email */
  email: "hola@auttomatik.com",

  /**
   * TODO: WhatsApp Business number in INTERNATIONAL format, digits only.
   * Example for Spain: "34600000000"
   */
  whatsapp: "34600000000",

  /**
   * TODO: Booking URL for the free audit call.
   * - Cal.com namespace, e.g. "auttomatik/auditoria" (used by the embed), or
   * - A full Calendly/Cal.com link in `bookingUrl`.
   */
  booking: {
    /** Set provider to "cal" (default) or "calendly" or "link" */
    provider: "cal" as "cal" | "calendly" | "link",
    /** Cal.com link path, e.g. "auttomatik/auditoria-ia" */
    calLink: "auttomatik/auditoria-ia",
    /** Full URL used as fallback / for provider "link" or "calendly" */
    bookingUrl: "https://cal.com/auttomatik/auditoria-ia",
  },

  /** TODO: social profiles (leave empty string to hide) */
  social: {
    linkedin: "https://www.linkedin.com/company/auttomatik",
    instagram: "",
  },

  /** TODO: legal entity data (required for Aviso legal / RGPD) */
  legal: {
    companyName: "Auttomatik S.L.",
    taxId: "B-00000000",
    address: "Calle Ejemplo 1, 00000 Ciudad, España",
  },
} as const;

/**
 * Builds a wa.me link with a prefilled message.
 */
export function whatsappLink(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}
