import type { Locale } from "@/config/site";

export interface AboutContent {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; intro: string };
  manifesto: { title: string; paragraphs: string[] };
  team: {
    title: string;
    intro: string;
    members: {
      name: string;
      role: string;
      bio: string;
      highlights: { stat: string; text: string }[];
      linkedin: string;
    }[];
  };
}

const LINKEDIN_JORDI = "https://www.linkedin.com/in/jordigarciaiserra/";
const LINKEDIN_CARLA = "https://www.linkedin.com/in/carlalopezzz/";

const es: AboutContent = {
  meta: {
    title: "Sobre nosotros · IA operativa con criterio",
    description:
      "Somos una consultoría de implementación de IA para pymes en crecimiento. Implementamos IA con criterio, no tecnología por moda: procesos, ROI y adopción real.",
  },
  hero: {
    eyebrow: "Nosotros",
    title: "IA operativa con criterio, no tecnología por moda",
    intro:
      "Nacimos para resolver un problema concreto: las pymes saben que la IA importa, pero el mercado está lleno de demos, chatbots y promesas que no se traducen en resultados.",
  },
  manifesto: {
    title: "Nuestro manifiesto",
    paragraphs: [
      "No creemos en la IA como espectáculo. Creemos en la IA que ahorra horas, reduce errores y deja a tu equipo libre para lo que de verdad importa.",
      "Empezamos siempre por tus procesos y tu retorno, nunca por la herramienta de moda. Si algo no compensa, te lo decimos. Preferimos un proyecto menos a un proyecto que no se use.",
      "Construimos sistemas robustos, documentados y transferibles. Nuestro objetivo no es que dependas de nosotros para siempre, sino que la IA se convierta en una capacidad de tu propia empresa.",
      "Trabajamos con seriedad: métricas, control de costes y acompañamiento. Sin humo, sin cajas negras y sin proyectos eternos.",
    ],
  },
  team: {
    title: "Sobre nosotros",
    intro: "El equipo que está detrás de Auttomatik.",
    members: [
      {
        name: "Jordi Garcia",
        role: "Cofundador · Asesor financiero · Gestor de subvenciones",
        bio: "Liderazgo fundador y expertise en financiación pública: combina conocimiento financiero y capacidad formativa para dar estabilidad y trazabilidad al proyecto.",
        highlights: [
          {
            stat: "Desde 2018",
            text: "fundador y administrador único de Innovalaus y responsable legal de la compañía.",
          },
          {
            stat: "Mentor",
            text: "de startups del Logistics 4.0 Incubator (Consorci de la Zona Franca de Barcelona y Fundación INCYDE) en estrategia de subvenciones.",
          },
        ],
        linkedin: LINKEDIN_JORDI,
      },
      {
        name: "Carla López",
        role: "Cofundadora · Business Developer · IA y Automatización",
        bio: "Experiencia práctica en IA aplicada y automatización, con capacidad de divulgación y de generar comunidad en torno a la IA.",
        highlights: [
          {
            stat: "+3 años",
            text: "diseñando e implementando soluciones de IA y automatización orientadas a la eficiencia operativa.",
          },
          {
            stat: "2.200+ seguidores",
            text: "en LinkedIn divulgando sobre automatización, agentes IA y productividad.",
          },
        ],
        linkedin: LINKEDIN_CARLA,
      },
    ],
  },
};

const ca: AboutContent = {
  meta: {
    title: "Sobre nosaltres · IA operativa amb criteri",
    description:
      "Som una consultoria d'implementació d'IA per a pimes en creixement. Implementem IA amb criteri, no tecnologia per moda: processos, ROI i adopció real.",
  },
  hero: {
    eyebrow: "Nosaltres",
    title: "IA operativa amb criteri, no tecnologia per moda",
    intro:
      "Vam néixer per resoldre un problema concret: les pimes saben que la IA importa, però el mercat és ple de demos, chatbots i promeses que no es tradueixen en resultats.",
  },
  manifesto: {
    title: "El nostre manifest",
    paragraphs: [
      "No creiem en la IA com a espectacle. Creiem en la IA que estalvia hores, redueix errors i deixa el teu equip lliure per al que de debò importa.",
      "Comencem sempre pels teus processos i el teu retorn, mai per l'eina de moda. Si una cosa no compensa, t'ho diem. Preferim un projecte menys que un projecte que no es faci servir.",
      "Construïm sistemes robustos, documentats i transferibles. El nostre objectiu no és que depenguis de nosaltres per sempre, sinó que la IA es converteixi en una capacitat de la teva pròpia empresa.",
      "Treballem amb serietat: mètriques, control de costos i acompanyament. Sense fum, sense caixes negres i sense projectes eterns.",
    ],
  },
  team: {
    title: "Sobre nosaltres",
    intro: "L'equip que hi ha darrere d'Auttomatik.",
    members: [
      {
        name: "Jordi Garcia",
        role: "Cofundador · Assessor financer · Gestor de subvencions",
        bio: "Lideratge fundador i expertise en finançament públic: combina coneixement financer i capacitat formativa per donar estabilitat i traçabilitat al projecte.",
        highlights: [
          {
            stat: "Des del 2018",
            text: "fundador i administrador únic d'Innovalaus i responsable legal de la companyia.",
          },
          {
            stat: "Mentor",
            text: "de startups del Logistics 4.0 Incubator (Consorci de la Zona Franca de Barcelona i Fundació INCYDE) en estratègia de subvencions.",
          },
        ],
        linkedin: LINKEDIN_JORDI,
      },
      {
        name: "Carla López",
        role: "Cofundadora · Business Developer · IA i Automatització",
        bio: "Experiència pràctica en IA aplicada i automatització, amb capacitat de divulgació i de generar comunitat al voltant de la IA.",
        highlights: [
          {
            stat: "+3 anys",
            text: "dissenyant i implementant solucions d'IA i automatització orientades a l'eficiència operativa.",
          },
          {
            stat: "2.200+ seguidors",
            text: "a LinkedIn divulgant sobre automatització, agents IA i productivitat.",
          },
        ],
        linkedin: LINKEDIN_CARLA,
      },
    ],
  },
};

const en: AboutContent = {
  meta: {
    title: "About us · Operational AI with judgement",
    description:
      "We are an AI implementation consultancy for growing SMEs. We implement AI with judgement, not technology for fashion: processes, ROI and real adoption.",
  },
  hero: {
    eyebrow: "About",
    title: "Operational AI with judgement, not technology for fashion",
    intro:
      "We were born to solve a concrete problem: SMEs know AI matters, but the market is full of demos, chatbots and promises that don't turn into results.",
  },
  manifesto: {
    title: "Our manifesto",
    paragraphs: [
      "We don't believe in AI as spectacle. We believe in AI that saves hours, reduces errors and frees your team for what truly matters.",
      "We always start with your processes and your return, never with the trendy tool. If something doesn't pay off, we'll tell you. We'd rather do one project less than one nobody uses.",
      "We build robust, documented and transferable systems. Our goal isn't for you to depend on us forever, but for AI to become a capability of your own company.",
      "We work seriously: metrics, cost control and support. No hype, no black boxes and no endless projects.",
    ],
  },
  team: {
    title: "About us",
    intro: "The team behind Auttomatik.",
    members: [
      {
        name: "Jordi Garcia",
        role: "Co-founder · Finance Advisor · Grant Manager",
        bio: "Founder leadership and public-funding expertise: combines financial knowledge with training ability to give the project stability and traceability.",
        highlights: [
          {
            stat: "Since 2018",
            text: "founder and sole director of Innovalaus and the company's legal lead.",
          },
          {
            stat: "Mentor",
            text: "to startups at the Logistics 4.0 Incubator (Consorci de la Zona Franca de Barcelona and Fundación INCYDE) on grant strategy.",
          },
        ],
        linkedin: LINKEDIN_JORDI,
      },
      {
        name: "Carla López",
        role: "Co-founder · Business Developer · AI & Automation",
        bio: "Hands-on experience in applied AI and automation, with the ability to share knowledge and build community around AI.",
        highlights: [
          {
            stat: "3+ years",
            text: "designing and implementing AI and automation solutions focused on operational efficiency.",
          },
          {
            stat: "2,200+ followers",
            text: "on LinkedIn sharing about automation, AI agents and productivity.",
          },
        ],
        linkedin: LINKEDIN_CARLA,
      },
    ],
  },
};

const content: Record<Locale, AboutContent> = { es, ca, en };
export function getAbout(lang: Locale): AboutContent {
  return content[lang];
}
