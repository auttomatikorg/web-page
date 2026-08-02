import type { Locale } from "@/config/site";

export interface ContactContent {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; intro: string };
  bookingTitle: string;
  expect: { title: string; items: string[] };
  channels: {
    whatsappTitle: string;
    whatsappText: string;
    emailTitle: string;
    emailText: string;
  };
}

const es: ContactContent = {
  meta: {
    title: "Contacto · Reserva tu auditoría gratuita",
    description:
      "Reserva una auditoría gratuita o escríbenos por WhatsApp. Te decimos, con criterio, qué tiene sentido automatizar primero en tu empresa.",
  },
  hero: {
    eyebrow: "Contacto",
    title: "Hablemos de tu operativa, no de tecnología",
    intro:
      "Reserva una auditoría gratuita y sin compromiso. En una conversación entendemos tus procesos y te decimos por dónde empezar.",
  },
  bookingTitle: "Reserva tu auditoría gratuita",
  expect: {
    title: "¿Qué pasará en la llamada?",
    items: [
      "Entenderemos tu empresa, tus procesos y tus cuellos de botella.",
      "Identificaremos las primeras oportunidades de automatización.",
      "Te daremos una orientación honesta de impacto y siguientes pasos.",
      "Sin presión comercial: si no tiene sentido, te lo diremos.",
    ],
  },
  channels: {
    whatsappTitle: "WhatsApp",
    whatsappText: "¿Prefieres un mensaje rápido? Escríbenos.",
    emailTitle: "Email",
    emailText: "Cuéntanos tu caso y te respondemos.",
  },
};

const ca: ContactContent = {
  meta: {
    title: "Contacte · Reserva la teva auditoria gratuïta",
    description:
      "Reserva una auditoria gratuïta o escriu-nos per WhatsApp. Et diem, amb criteri, què té sentit automatitzar primer a la teva empresa.",
  },
  hero: {
    eyebrow: "Contacte",
    title: "Parlem de la teva operativa, no de tecnologia",
    intro:
      "Reserva una auditoria gratuïta i sense compromís. En una conversa entenem els teus processos i et diem per on començar.",
  },
  bookingTitle: "Reserva la teva auditoria gratuïta",
  expect: {
    title: "Què passa a la trucada",
    items: [
      "Entenem la teva empresa, els teus processos i els teus colls d'ampolla.",
      "Identifiquem les primeres oportunitats d'automatització.",
      "Et donem una orientació honesta d'impacte i propers passos.",
      "Sense pressió comercial: si no té sentit, t'ho diem.",
    ],
  },
  channels: {
    whatsappTitle: "WhatsApp",
    whatsappText: "Prefereixes un missatge ràpid? Escriu-nos.",
    emailTitle: "Email",
    emailText: "Explica'ns el teu cas i et responem.",
  },
};

const en: ContactContent = {
  meta: {
    title: "Contact · Book your free audit",
    description:
      "Book a free audit or message us on WhatsApp. We'll tell you, with judgement, what makes sense to automate first in your company.",
  },
  hero: {
    eyebrow: "Contact",
    title: "Let's talk about your operations, not technology",
    intro:
      "Book a free, no-commitment audit. In one conversation we understand your processes and tell you where to start.",
  },
  bookingTitle: "Book your free audit",
  expect: {
    title: "What happens on the call",
    items: [
      "We understand your company, your processes and your bottlenecks.",
      "We identify the first automation opportunities.",
      "We give you an honest read on impact and next steps.",
      "No sales pressure: if it doesn't make sense, we'll say so.",
    ],
  },
  channels: {
    whatsappTitle: "WhatsApp",
    whatsappText: "Prefer a quick message? Write to us.",
    emailTitle: "Email",
    emailText: "Tell us your case and we'll reply.",
  },
};

const content: Record<Locale, ContactContent> = { es, ca, en };
export function getContact(lang: Locale): ContactContent {
  return content[lang];
}
