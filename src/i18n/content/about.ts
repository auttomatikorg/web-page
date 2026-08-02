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
const LINKEDIN_MARC = "https://www.linkedin.com/in/marc-font-olle-";
const LINKEDIN_JULIAN =
  "https://www.linkedin.com/in/julian-ciprian-65b447179?utm_source=share_via&utm_content=profile&utm_medium=member_ios";

const es: AboutContent = {
  meta: {
    title: "Sobre nosotros · IA operativa con criterio",
    description:
      "Somos una consultoría de implementación de IA para pymes en crecimiento. Implementamos IA con criterio, no tecnología por moda: procesos, ROI y adopción real.",
  },
  hero: {
    eyebrow: "Nosotros",
    title: "Un equipo humano a la altura.",
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
        role: "Asesor financiero · Estrategia de negocio",
        bio: "Liderazgo fundador y expertise en financiación pública: combina conocimiento financiero y capacidad formativa para dar estabilidad y trazabilidad al proyecto.",
        highlights: [
          {
            stat: "+10M€ captados",
            text: "en financiación para clientes, aportando criterio financiero para priorizar proyectos de IA con retorno real.",
          },
          {
            stat: "Estrategia financiera",
            text: "mentor de startups en Logistics 4.0 Incubator, especializado en convertir subvenciones y financiación en planes ejecutables.",
          },
        ],
        linkedin: LINKEDIN_JORDI,
      },
      {
        name: "Carla López",
        role: "Business Developer · IA & Automation",
        bio: "Especialista en IA aplicada, automatización y desarrollo de negocio. Combina visión comercial, criterio técnico y capacidad de divulgación.",
        highlights: [
          {
            stat: "RPA avanzada",
            text: "certificada en UiPath Advanced RPA Developer, Robocorp Level III Python y Make Advanced para automatizaciones de nivel profesional.",
          },
          {
            stat: "IA aplicada",
            text: "formada en Model Context Protocol avanzado y Prompt Engineering for Developers para diseñar agentes, flujos y sistemas con criterio técnico.",
          },
        ],
        linkedin: LINKEDIN_CARLA,
      },
      {
        name: "Marc Font",
        role: "Developer · DevOps & Automation",
        bio: "Perfil técnico orientado a construir automatizaciones estables, integrar sistemas y convertir procesos operativos en flujos fiables y mantenibles.",
        highlights: [
          {
            stat: "SaaS Automation",
            text: "especialista en automatización SaaS y desarrollo UiPath, preparado para conectar herramientas y eliminar trabajo manual.",
          },
          {
            stat: "DevOps Engineer",
            text: "perfil developer con foco DevOps para crear automatizaciones conectadas, mantenibles y preparadas para el día a día.",
          },
        ],
        linkedin: LINKEDIN_MARC,
      },
      {
        name: "Julian Ciprian",
        role: "Developer · IA & Automation",
        bio: "Desarrollador especializado en IA aplicada y automatización, enfocado en crear soluciones prácticas que reduzcan trabajo manual y mejoren la eficiencia.",
        highlights: [
          {
            stat: "Experto en IA",
            text: "especialista en inteligencia artificial aplicada, capaz de diseñar soluciones inteligentes para automatizar procesos.",
          },
          {
            stat: "Big Data + BI",
            text: "máster en Big Data y Business Intelligence, con formación en Power BI, bases de datos relacionales y ciencia de datos aplicada.",
          },
        ],
        linkedin: LINKEDIN_JULIAN,
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
    title: "Un equip humà a l'altura.",
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
        role: "Assessor financer · Estratègia de negoci",
        bio: "Lideratge fundador i expertise en finançament públic: combina coneixement financer i capacitat formativa per donar estabilitat i traçabilitat al projecte.",
        highlights: [
          {
            stat: "+10M€ captats",
            text: "en finançament per a clients, aportant criteri financer per prioritzar projectes d'IA amb retorn real.",
          },
          {
            stat: "Estratègia financera",
            text: "mentor de startups al Logistics 4.0 Incubator, especialitzat a convertir subvencions i finançament en plans executables.",
          },
        ],
        linkedin: LINKEDIN_JORDI,
      },
      {
        name: "Carla López",
        role: "Business Developer · IA & Automation",
        bio: "Especialista en IA aplicada, automatització i desenvolupament de negoci. Combina visió comercial, criteri tècnic i capacitat de divulgació.",
        highlights: [
          {
            stat: "RPA avançada",
            text: "certificada en UiPath Advanced RPA Developer, Robocorp Level III Python i Make Advanced per a automatitzacions de nivell professional.",
          },
          {
            stat: "IA aplicada",
            text: "formada en Model Context Protocol avançat i Prompt Engineering for Developers per dissenyar agents, fluxos i sistemes amb criteri tècnic.",
          },
        ],
        linkedin: LINKEDIN_CARLA,
      },
      {
        name: "Marc Font",
        role: "Developer · DevOps & Automation",
        bio: "Perfil tècnic orientat a construir automatitzacions estables, integrar sistemes i convertir processos operatius en fluxos fiables i mantenibles.",
        highlights: [
          {
            stat: "SaaS Automation",
            text: "especialista en automatització SaaS i desenvolupament UiPath, preparat per connectar eines i eliminar feina manual.",
          },
          {
            stat: "DevOps Engineer",
            text: "perfil developer amb focus DevOps per crear automatitzacions connectades, mantenibles i preparades per al dia a dia.",
          },
        ],
        linkedin: LINKEDIN_MARC,
      },
      {
        name: "Julian Ciprian",
        role: "Developer · IA & Automation",
        bio: "Desenvolupador especialitzat en IA aplicada i automatització, enfocat a crear solucions pràctiques que redueixin feina manual i millorin l'eficiència.",
        highlights: [
          {
            stat: "Expert en IA",
            text: "especialista en intel·ligència artificial aplicada, capaç de dissenyar solucions intel·ligents per automatitzar processos.",
          },
          {
            stat: "Big Data + BI",
            text: "màster en Big Data i Business Intelligence, amb formació en Power BI, bases de dades relacionals i ciència de dades aplicada.",
          },
        ],
        linkedin: LINKEDIN_JULIAN,
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
    title: "A human team up to the task.",
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
        role: "Finance Advisor · Business Strategy",
        bio: "Founder leadership and public-funding expertise: combines financial knowledge with training ability to give the project stability and traceability.",
        highlights: [
          {
            stat: "€10M+ secured",
            text: "in funding for clients, bringing financial judgement to prioritise AI projects with real return.",
          },
          {
            stat: "Financial strategy",
            text: "startup mentor at Logistics 4.0 Incubator, specialised in turning grants and funding into executable plans.",
          },
        ],
        linkedin: LINKEDIN_JORDI,
      },
      {
        name: "Carla López",
        role: "Business Developer · AI & Automation",
        bio: "Specialist in applied AI, automation and business development. Combines commercial vision, technical judgement and communication skills.",
        highlights: [
          {
            stat: "Advanced RPA",
            text: "certified in UiPath Advanced RPA Developer, Robocorp Level III Python and Make Advanced for professional-grade automations.",
          },
          {
            stat: "Applied AI",
            text: "trained in advanced Model Context Protocol and Prompt Engineering for Developers to design agents, workflows and systems with technical judgement.",
          },
        ],
        linkedin: LINKEDIN_CARLA,
      },
      {
        name: "Marc Font",
        role: "Developer · DevOps & Automation",
        bio: "Technical profile focused on building stable automations, integrating systems and turning operational processes into reliable, maintainable workflows.",
        highlights: [
          {
            stat: "SaaS Automation",
            text: "specialist in SaaS automation and UiPath development, ready to connect tools and remove manual work.",
          },
          {
            stat: "DevOps Engineer",
            text: "developer profile with a DevOps mindset for connected, maintainable automations built for day-to-day work.",
          },
        ],
        linkedin: LINKEDIN_MARC,
      },
      {
        name: "Julian Ciprian",
        role: "Developer · AI & Automation",
        bio: "Developer specialised in applied AI and automation, focused on creating practical solutions that reduce manual work and improve efficiency.",
        highlights: [
          {
            stat: "AI Expert",
            text: "specialist in applied artificial intelligence, able to design intelligent solutions that automate processes.",
          },
          {
            stat: "Big Data + BI",
            text: "master's degree in Big Data and Business Intelligence, with training in Power BI, relational databases and applied data science.",
          },
        ],
        linkedin: LINKEDIN_JULIAN,
      },
    ],
  },
};

const content: Record<Locale, AboutContent> = { es, ca, en };
export function getAbout(lang: Locale): AboutContent {
  return content[lang];
}
