import { SITE, type Locale } from "@/config/site";

/**
 * Copy for the four slide pages.
 *
 * Every page is one viewport, so the constraint is hard: a headline of at most
 * ~6 words, one supporting sentence, three items, one action. Anything that
 * does not survive that cut does not belong on the page.
 */
export interface SlideContent {
  home: {
    meta: { title: string; description: string };
    eyebrow: string[];
    title: string;
    subtitle: string;
    cta: string;
    stats: { value: string; label: string; note: string }[];
    card: {
      chip: string;
      role: string;
      text: string;
      cta: string;
    };
  };
  process: {
    meta: { title: string; description: string };
    eyebrow: string[];
    title: string;
    intro: string;
    phases: {
      n: string;
      title: string;
      objective: string;
      duration: string;
      result: string;
      checklist: string[];
    }[];
  };
  about: {
    meta: { title: string; description: string };
    eyebrow: string[];
    title: string;
    intro: string;
    philosophyLabel: string;
    philosophy: string;
    kpis: string[];
    team: { name: string; role: string; experience: string; linkedin: string }[];
    cta: string;
  };
  contact: {
    meta: { title: string; description: string };
    eyebrow: string[];
    title: string;
    intro: string;
    chip: string;
    channels: { label: string; note: string }[];
    cta: string;
  };
}

const es: SlideContent = {
  home: {
    meta: {
      title: "Auttomatik · IA y automatización para pymes",
      description:
        "Agencia de inteligencia artificial y automatización para pymes. Auditamos tus procesos, construimos el sistema y formamos a tu equipo.",
    },
    eyebrow: ["Agencia", "de IA"],
    title: "Empieza a implementar procesos escalables",
    subtitle:
      "Auditamos tus procesos, construimos el sistema y formamos a tu equipo para que crezcas sin crecer en costes.",
    cta: "Reserva tu auditoría",
    stats: [
      {
        value: "3 fases",
        label: "De la auditoría al sistema en marcha",
        note: "Un camino claro, sin proyectos eternos",
      },
      {
        value: "Semanas",
        label: "Hasta el primer proceso automatizado",
        note: "Empezamos por donde más te duele",
      },
    ],
    card: {
      chip: "Disponibles para nuevos proyectos",
      role: "Equipo Auttomatik",
      text: "Te decimos qué automatizar primero y qué no compensa.",
      cta: "Empezar",
    },
  },
  process: {
    meta: {
      title: "Cómo trabajamos",
      description:
        "Tres fases para implementar IA con criterio: auditoría, implementación y autonomía.",
    },
    eyebrow: ["Nuestro", "método"],
    title: "Trabajamos en tres grandes fases",
    intro:
      "Primero entendemos qué necesita tu empresa, después implementamos el sistema y finalmente te dejamos documentación, soporte y mantenimiento para que funcione en el día a día.",
    phases: [
      {
        n: "01",
        title: "Auditoría IA operativa",
        objective:
          "Entender la operativa de la empresa y detectar dónde la inteligencia artificial puede generar mayor impacto con el menor riesgo.",
        duration: "2-3 días.",
        result: "Hoja de ruta clara y priorizada.",
        checklist: [
          "Entrevistas con responsables y mapeo de procesos.",
          "Detección de tareas repetitivas y cuellos de botella.",
          "Evaluación de las herramientas que ya utiliza la empresa.",
          "Estimación del ahorro y priorización de soluciones según su retorno de inversión.",
        ],
      },
      {
        n: "02",
        title: "Implementación del sistema",
        objective:
          "Construir e integrar la solución de inteligencia artificial o automatización que mejor se adapte a las necesidades de la empresa.",
        duration: "2-4 semanas.",
        result: "Sistema implementado y preparado para operar.",
        checklist: [
          "Diseño del sistema de acuerdo con la hoja de ruta.",
          "Construcción de agentes, automatizaciones e integraciones.",
          "Pruebas con datos y casos reales de la empresa.",
          "Ajustes técnicos para garantizar el rendimiento y la fiabilidad.",
        ],
      },
      {
        n: "03",
        title: "Documentación y mantenimiento",
        objective:
          "Transferir el conocimiento, acompañar al equipo y mantener el sistema para asegurar su correcto funcionamiento.",
        duration: "Servicio continuo.",
        result: "Sistema documentado, mantenido y transferible.",
        checklist: [
          "Documentación clara del sistema y sus procesos.",
          "Formación práctica para el equipo.",
          "Monitorización, soporte y resolución de incidencias.",
          "Mantenimiento y mejoras basadas en el uso real.",
        ],
      },
    ],
  },
  about: {
    meta: {
      title: "Nosotros",
      description:
        "Un equipo humano de Auttomatik que implementa IA con criterio, métricas claras, control de costes y acompañamiento real.",
    },
    eyebrow: ["Sobre Nosotros"],
    title: "Un equipo humano a la altura",
    intro:
      "Somos un equipo pequeño y senior que trabaja muy cerca de la operativa real de cada empresa. Aplicamos sistemas solo donde reducen tiempo, errores y costes de forma medible.",
    philosophyLabel: "Nuestra filosofía",
    philosophy:
      "No automatizamos por automatizar ni aplicamos IA porque esté de moda. Queremos que cada solución sea útil, sostenible y que termine formando parte de la propia capacidad de la empresa.",
    kpis: [
      "Procesos priorizados por impacto y retorno",
      "Implementaciones documentadas",
      "Acompañamiento real hasta que el sistema funciona",
    ],
    team: [
      {
        name: "Jordi García",
        role: "Estrategia y operaciones",
        experience: "Toda una vida liderando operaciones, administración y control de negocio.",
        linkedin: "https://www.linkedin.com/in/jordigarciaiserra/",
      },
      {
        name: "Julian Ciprian",
        role: "IA y automatización",
        experience: "Experto en IA aplicada, con formación en Big Data y Business Intelligence.",
        linkedin: "https://www.linkedin.com/in/julian-ciprian-65b447179",
      },
      {
        name: "Marc Font",
        role: "DevOps y automatización",
        experience: "Especialista con foco DevOps para crear automatizaciones mantenibles y estables.",
        linkedin: "https://www.linkedin.com/in/marc-font-olle-",
      },
      {
        name: "Carla Muñoz",
        role: "Business Developer",
        experience: "Más de 4 años conectando estrategia comercial, IA aplicada y automatización.",
        linkedin: "https://www.linkedin.com/in/carlalopezzz/",
      },
    ],
    cta: "Hablemos de tu operativa",
  },
  contact: {
    meta: {
      title: "Contacto",
      description:
        "Reserva una auditoría gratuita de 15 minutos o escríbenos por WhatsApp o email.",
    },
    eyebrow: ["Contáctanos"],
    title: "Hablemos de tu operativa",
    intro:
      "Reserva una auditoría gratuita y sin compromiso. En una conversación entendemos tus procesos y te decimos por dónde empezar.",
    chip: "Respuesta el mismo día",
    channels: [
      { label: "Reserva tu auditoría", note: "15 min · videollamada" },
      { label: "WhatsApp", note: "Respuesta el mismo día" },
      { label: "Email", note: "" },
    ],
    cta: "Reserva tu auditoría",
  },
};

const ca: SlideContent = {
  home: {
    meta: {
      title: "Auttomatik · IA i automatització per a pimes",
      description:
        "Agència d'intel·ligència artificial i automatització per a pimes. Auditem els teus processos, construïm el sistema i formem el teu equip.",
    },
    eyebrow: ["Agència", "d'IA"],
    title: "Comença a implementar processos escalables",
    subtitle:
      "Auditem els teus processos, construïm el sistema i formem el teu equip perquè creixis sense créixer en costos.",
    cta: "Reserva la teva auditoria",
    stats: [
      {
        value: "3 fases",
        label: "De l'auditoria al sistema en marxa",
        note: "Un camí clar, sense projectes eterns",
      },
      {
        value: "Setmanes",
        label: "Fins al primer procés automatitzat",
        note: "Comencem per on més et fa mal",
      },
    ],
    card: {
      chip: "Disponibles per a nous projectes",
      role: "Equip Auttomatik",
      text: "Et diem què automatitzar primer i què no compensa.",
      cta: "Comença",
    },
  },
  process: {
    meta: {
      title: "Com treballem",
      description:
        "Tres fases per implementar IA amb criteri: auditoria, implementació i autonomia.",
    },
    eyebrow: ["El nostre", "mètode"],
    title: "Treballem en tres grans fases",
    intro:
      "Primer entenem què necessita la teva empresa, després implementem el sistema i finalment et deixem documentació, suport i manteniment perquè funcioni en el dia a dia.",
    phases: [
      {
        n: "01",
        title: "Auditoria IA operativa",
        objective:
          "Entendre l'operativa de l'empresa i detectar on la intel·ligència artificial pot generar més impacte amb el menor risc.",
        duration: "2-3 dies.",
        result: "Full de ruta clara i prioritzada.",
        checklist: [
          "Entrevistes amb responsables i mapeig de processos.",
          "Detecció de tasques repetitives i colls d'ampolla.",
          "Avaluació de les eines que ja utilitza l'empresa.",
          "Estimació de l'estalvi i priorització de solucions segons el retorn de la inversió.",
        ],
      },
      {
        n: "02",
        title: "Implementació del sistema",
        objective:
          "Construir i integrar la solució d'intel·ligència artificial o automatització que millor s'adapti a les necessitats de l'empresa.",
        duration: "2-4 setmanes.",
        result: "Sistema implementat i preparat per operar.",
        checklist: [
          "Disseny del sistema d'acord amb el full de ruta.",
          "Construcció d'agents, automatitzacions i integracions.",
          "Proves amb dades i casos reals de l'empresa.",
          "Ajustos tècnics per garantir el rendiment i la fiabilitat.",
        ],
      },
      {
        n: "03",
        title: "Documentació i manteniment",
        objective:
          "Transferir el coneixement, acompanyar l'equip i mantenir el sistema per assegurar el seu correcte funcionament.",
        duration: "Servei continu.",
        result: "Sistema documentat, mantingut i transferible.",
        checklist: [
          "Documentació clara del sistema i els seus processos.",
          "Formació pràctica per a l'equip.",
          "Monitoratge, suport i resolució d'incidències.",
          "Manteniment i millores basades en l'ús real.",
        ],
      },
    ],
  },
  about: {
    meta: {
      title: "Nosaltres",
      description:
        "Un equip humà d'Auttomatik que implementa IA amb criteri, mètriques clares, control de costos i acompanyament real.",
    },
    eyebrow: ["Equip Auttomatik"],
    title: "Un equip humà a l'alçada",
    intro:
      "Som un equip petit i sènior que treballa molt a prop de l'operativa real de cada empresa. Apliquem IA i automatització només quan redueixen temps, errors i costos de manera mesurable.",
    philosophyLabel: "La nostra filosofia",
    philosophy:
      "Comencem pel procés i el retorn, no per la tecnologia de moda. Mesurem impacte, controlem el cost i deixem sistemes útils que l'equip pot sostenir sense dependre de nosaltres.",
    kpis: [
      "2 socis sènior al capdavant.",
      "Processos mesurats amb retorn clar.",
      "Implementacions documentades i transferibles.",
      "Acompanyament fins a una operativa estable.",
    ],
    team: [
      {
        name: "Jordi García",
        role: "Estratègia i operacions",
        experience: "Tota una vida liderant operacions, administració i control de negoci.",
        linkedin: "https://www.linkedin.com/in/jordigarciaiserra/",
      },
      {
        name: "Julian Ciprian",
        role: "IA i automatització",
        experience: "Expert en IA aplicada, amb formació en Big Data i Business Intelligence.",
        linkedin: "https://www.linkedin.com/in/julian-ciprian-65b447179",
      },
      {
        name: "Marc Font",
        role: "DevOps i automatització",
        experience: "Especialista amb focus DevOps per crear automatitzacions mantenibles i estables.",
        linkedin: "https://www.linkedin.com/in/marc-font-olle-",
      },
      {
        name: "Carla Muñoz",
        role: "Business Developer",
        experience: "Més de 4 anys connectant estratègia comercial, IA aplicada i automatització.",
        linkedin: "https://www.linkedin.com/in/carlalopezzz/",
      },
    ],
    cta: "Parlem de la teva operativa",
  },
  contact: {
    meta: {
      title: "Contacte",
      description:
        "Reserva una auditoria gratuïta de 15 minuts o escriu-nos per WhatsApp o correu.",
    },
    eyebrow: ["Contacta'ns"],
    title: "Parlem de la teva operativa",
    intro:
      "Reserva una auditoria gratuïta i sense compromís. En una conversa entenem els teus processos i et diem per on començar.",
    chip: "Resposta el mateix dia",
    channels: [
      { label: "Reserva la teva auditoria", note: "15 min · videotrucada" },
      { label: "WhatsApp", note: "Resposta el mateix dia" },
      { label: "Correu", note: "" },
    ],
    cta: "Reserva la teva auditoria",
  },
};

const en: SlideContent = {
  home: {
    meta: {
      title: "Auttomatik · AI and automation for SMEs",
      description:
        "AI and automation agency for SMEs. We audit your processes, build the system and train your team.",
    },
    eyebrow: ["AI", "agency"],
    title: "Start implementing scalable processes",
    subtitle:
      "We audit your processes, build the system and train your team, so you grow without growing your costs.",
    cta: "Book your audit",
    stats: [
      {
        value: "3 phases",
        label: "From audit to a running system",
        note: "A clear path, no endless projects",
      },
      {
        value: "Weeks",
        label: "To your first automated process",
        note: "We start where it hurts most",
      },
    ],
    card: {
      chip: "Available for new projects",
      role: "The Auttomatik team",
      text: "We tell you what to automate first, and what isn't worth it.",
      cta: "Get started",
    },
  },
  process: {
    meta: {
      title: "How we work",
      description:
        "Three phases to implement AI with judgement: audit, implementation and autonomy.",
    },
    eyebrow: ["Our", "method"],
    title: "We work in three big phases",
    intro:
      "First we understand what your company needs, then we implement the system and finally we leave you with documentation, support and maintenance so it works in day-to-day use.",
    phases: [
      {
        n: "01",
        title: "Operational AI audit",
        objective:
          "Understand the company's operations and detect where artificial intelligence can create the most impact with the least risk.",
        duration: "2-3 days.",
        result: "A clear, prioritised roadmap.",
        checklist: [
          "Interviews with stakeholders and process mapping.",
          "Detection of repetitive tasks and bottlenecks.",
          "Review of the tools the company already uses.",
          "Savings estimate and solution prioritisation by ROI.",
        ],
      },
      {
        n: "02",
        title: "System implementation",
        objective:
          "Build and integrate the AI or automation solution that best fits the company's needs.",
        duration: "2-4 weeks.",
        result: "System implemented and ready to operate.",
        checklist: [
          "System design based on the roadmap.",
          "Build of agents, automations and integrations.",
          "Testing with company data and real cases.",
          "Technical adjustments for performance and reliability.",
        ],
      },
      {
        n: "03",
        title: "Documentation and maintenance",
        objective:
          "Transfer knowledge, support the team and maintain the system to ensure it works correctly.",
        duration: "Ongoing service.",
        result: "Documented, maintained and transferable system.",
        checklist: [
          "Clear documentation of the system and its processes.",
          "Hands-on training for the team.",
          "Monitoring, support and incident resolution.",
          "Maintenance and improvements based on real usage.",
        ],
      },
    ],
  },
  about: {
    meta: {
      title: "About",
      description:
        "A human Auttomatik team implementing AI with judgement, clear metrics, cost control and real support.",
    },
    eyebrow: ["Auttomatik team"],
    title: "A human team to match",
    intro:
      "We are a small, senior team that stays close to each company's real operations. We only apply AI and automation where they reduce time, errors and cost in a measurable way.",
    philosophyLabel: "Our philosophy",
    philosophy:
      "We start with the process and the return, not the latest tool. We measure impact, control cost and leave useful systems the team can sustain without depending on us.",
    kpis: [
      "2 senior partners at the helm.",
      "Processes measured with clear return.",
      "Documented, transferable implementations.",
      "Support until the operation is stable.",
    ],
    team: [
      {
        name: "Jordi Garcia",
        role: "Strategy and operations",
        experience: "A lifetime leading operations, administration and business control.",
        linkedin: "https://www.linkedin.com/in/jordigarciaiserra/",
      },
      {
        name: "Julian Ciprian",
        role: "AI & Automation",
        experience: "Applied AI expert with training in Big Data and Business Intelligence.",
        linkedin: "https://www.linkedin.com/in/julian-ciprian-65b447179",
      },
      {
        name: "Marc Font",
        role: "DevOps & Automation",
        experience: "DevOps-focused specialist building maintainable, stable automations.",
        linkedin: "https://www.linkedin.com/in/marc-font-olle-",
      },
      {
        name: "Carla Muñoz",
        role: "Business Developer",
        experience: "More than 4 years connecting commercial strategy, applied AI and automation.",
        linkedin: "https://www.linkedin.com/in/carlalopezzz/",
      },
    ],
    cta: "Let's talk about your operations",
  },
  contact: {
    meta: {
      title: "Contact",
      description:
        "Book a free 15-minute audit, or reach us on WhatsApp or email.",
    },
    eyebrow: ["Contact us"],
    title: "Let's talk about your operations",
    intro:
      "Book a free audit with no commitment. In one conversation we understand your processes and tell you where to start.",
    chip: "Same-day reply",
    channels: [
      { label: "Book your audit", note: "15 min · video call" },
      { label: "WhatsApp", note: "Same-day reply" },
      { label: "Email", note: "" },
    ],
    cta: "Book your audit",
  },
};

const content: Record<Locale, SlideContent> = { es, ca, en };

export function getSlides(lang: Locale): SlideContent {
  return content[lang];
}
