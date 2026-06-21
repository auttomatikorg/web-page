import type { Locale } from "@/config/site";

export interface ProcessContent {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; intro: string };
  labels: { objective: string; activities: string; duration: string; result: string };
  phases: {
    title: string;
    objective: string;
    activities: string[];
    duration: string;
    result: string;
  }[];
  principles: {
    title: string;
    intro: string;
    items: { icon: string; title: string; text: string }[];
  };
}

const es: ProcessContent = {
  meta: {
    title: "Cómo trabajamos · Método IA por fases",
    description:
      "Un método por fases para implementar IA con criterio: auditoría, quick wins, sistema interno y escalado. Cada fase con un resultado tangible y medible.",
  },
  hero: {
    eyebrow: "Cómo trabajamos",
    title: "Un método por fases para implementar IA sin riesgos innecesarios",
    intro:
      "Avanzamos paso a paso, midiendo el impacto en cada fase. Así pruebas el valor antes de invertir más y nunca avanzas a ciegas.",
  },
  labels: {
    objective: "Objetivo",
    activities: "Qué hacemos",
    duration: "Duración orientativa",
    result: "Resultado",
  },
  phases: [
    {
      title: "Auditoría IA operativa",
      objective:
        "Entender tu operativa y detectar dónde la IA genera más impacto con menos riesgo.",
      activities: [
        "Entrevistas con responsables y mapeo de procesos",
        "Detección de tareas repetitivas y cuellos de botella",
        "Evaluación de las herramientas que ya usas",
        "Estimación de ahorro y priorización por ROI",
      ],
      duration: "1-3 semanas",
      result: "Hoja de ruta clara y priorizada.",
    },
    {
      title: "Implementación de quick wins",
      objective:
        "Generar valor rápido con automatizaciones y agentes en procesos de alto impacto.",
      activities: [
        "Selección de los casos de mayor retorno",
        "Construcción e integración con tus sistemas",
        "Pruebas con datos reales y ajustes",
        "Medición de horas ahorradas",
      ],
      duration: "2-6 semanas",
      result: "Primeras horas ahorradas y prueba de valor.",
    },
    {
      title: "Sistema IA interno",
      objective:
        "Convertir las piezas sueltas en un sistema integrado y adoptado por el equipo.",
      activities: [
        "Integración profunda con tus procesos",
        "Formación práctica del equipo",
        "Documentación y buenas prácticas",
        "Optimización de modelos y costes",
      ],
      duration: "1-3 meses",
      result: "Adopción real en el día a día.",
    },
    {
      title: "Escalado y mejora continua",
      objective:
        "Hacer que la IA evolucione contigo y siga generando retorno en el tiempo.",
      activities: [
        "Nuevos agentes y automatizaciones",
        "Monitorización y control de costes",
        "Mantenimiento y mejoras continuas",
        "Reporting de impacto periódico",
      ],
      duration: "Continuo",
      result: "La IA como ventaja operativa continua.",
    },
  ],
  principles: {
    title: "Cómo medimos que funciona",
    intro:
      "No trabajamos por intuición. Cada proyecto se mide y se documenta para que tengas control real.",
    items: [
      {
        icon: "lucide:gauge",
        title: "Métricas desde el día uno",
        text: "Definimos qué horas, costes o errores vamos a reducir antes de empezar.",
      },
      {
        icon: "lucide:wallet",
        title: "Coste bajo control",
        text: "Optimizamos modelos y uso para que el retorno sea claro y la factura previsible.",
      },
      {
        icon: "lucide:file-text",
        title: "Todo documentado",
        text: "Trazabilidad y transferencia de conocimiento: el sistema es tuyo.",
      },
    ],
  },
};

const ca: ProcessContent = {
  meta: {
    title: "Com treballem · Mètode IA per fases",
    description:
      "Un mètode per fases per implementar IA amb criteri: auditoria, quick wins, sistema intern i escalat. Cada fase amb un resultat tangible i mesurable.",
  },
  hero: {
    eyebrow: "Com treballem",
    title: "Un mètode per fases per implementar IA sense riscos innecessaris",
    intro:
      "Avancem pas a pas, mesurant l'impacte a cada fase. Així proves el valor abans d'invertir més i mai avances a cegues.",
  },
  labels: {
    objective: "Objectiu",
    activities: "Què fem",
    duration: "Durada orientativa",
    result: "Resultat",
  },
  phases: [
    {
      title: "Auditoria IA operativa",
      objective:
        "Entendre la teva operativa i detectar on la IA genera més impacte amb menys risc.",
      activities: [
        "Entrevistes amb responsables i mapeig de processos",
        "Detecció de tasques repetitives i colls d'ampolla",
        "Avaluació de les eines que ja fas servir",
        "Estimació d'estalvi i priorització per ROI",
      ],
      duration: "1-3 setmanes",
      result: "Full de ruta clar i prioritzat.",
    },
    {
      title: "Implementació de quick wins",
      objective:
        "Generar valor ràpid amb automatitzacions i agents en processos d'alt impacte.",
      activities: [
        "Selecció dels casos de més retorn",
        "Construcció i integració amb els teus sistemes",
        "Proves amb dades reals i ajustos",
        "Mesura d'hores estalviades",
      ],
      duration: "2-6 setmanes",
      result: "Primeres hores estalviades i prova de valor.",
    },
    {
      title: "Sistema IA intern",
      objective:
        "Convertir les peces soltes en un sistema integrat i adoptat per l'equip.",
      activities: [
        "Integració profunda amb els teus processos",
        "Formació pràctica de l'equip",
        "Documentació i bones pràctiques",
        "Optimització de models i costos",
      ],
      duration: "1-3 mesos",
      result: "Adopció real en el dia a dia.",
    },
    {
      title: "Escalat i millora contínua",
      objective:
        "Fer que la IA evolucioni amb tu i continuï generant retorn en el temps.",
      activities: [
        "Nous agents i automatitzacions",
        "Monitoratge i control de costos",
        "Manteniment i millores contínues",
        "Reporting d'impacte periòdic",
      ],
      duration: "Continu",
      result: "La IA com a avantatge operatiu continu.",
    },
  ],
  principles: {
    title: "Com mesurem que funciona",
    intro:
      "No treballem per intuïció. Cada projecte es mesura i es documenta perquè tinguis control real.",
    items: [
      {
        icon: "lucide:gauge",
        title: "Mètriques des del dia u",
        text: "Definim quines hores, costos o errors reduirem abans de començar.",
      },
      {
        icon: "lucide:wallet",
        title: "Cost sota control",
        text: "Optimitzem models i ús perquè el retorn sigui clar i la factura previsible.",
      },
      {
        icon: "lucide:file-text",
        title: "Tot documentat",
        text: "Traçabilitat i transferència de coneixement: el sistema és teu.",
      },
    ],
  },
};

const en: ProcessContent = {
  meta: {
    title: "How we work · Phased AI method",
    description:
      "A phased method to implement AI with judgement: audit, quick wins, internal system and scaling. Each phase with a tangible, measurable result.",
  },
  hero: {
    eyebrow: "How we work",
    title: "A phased method to implement AI without unnecessary risk",
    intro:
      "We move step by step, measuring impact at each phase. You prove value before investing more and never move blindly.",
  },
  labels: {
    objective: "Objective",
    activities: "What we do",
    duration: "Typical duration",
    result: "Outcome",
  },
  phases: [
    {
      title: "Operational AI audit",
      objective:
        "Understand your operations and find where AI delivers the most impact with the least risk.",
      activities: [
        "Interviews with leads and process mapping",
        "Detection of repetitive tasks and bottlenecks",
        "Assessment of the tools you already use",
        "Savings estimate and ROI prioritisation",
      ],
      duration: "1-3 weeks",
      result: "A clear, prioritised roadmap.",
    },
    {
      title: "Quick-win implementation",
      objective:
        "Deliver value fast with automations and agents on high-impact processes.",
      activities: [
        "Selection of the highest-return cases",
        "Build and integration with your systems",
        "Testing with real data and tuning",
        "Measurement of hours saved",
      ],
      duration: "2-6 weeks",
      result: "First hours saved and proof of value.",
    },
    {
      title: "Internal AI system",
      objective:
        "Turn scattered pieces into an integrated system adopted by the team.",
      activities: [
        "Deep integration with your processes",
        "Hands-on team training",
        "Documentation and best practices",
        "Model and cost optimisation",
      ],
      duration: "1-3 months",
      result: "Real day-to-day adoption.",
    },
    {
      title: "Scaling & continuous improvement",
      objective:
        "Make AI evolve with you and keep delivering return over time.",
      activities: [
        "New agents and automations",
        "Monitoring and cost control",
        "Maintenance and continuous improvements",
        "Periodic impact reporting",
      ],
      duration: "Ongoing",
      result: "AI as an ongoing operational advantage.",
    },
  ],
  principles: {
    title: "How we measure that it works",
    intro:
      "We don't work on intuition. Every project is measured and documented so you stay in control.",
    items: [
      {
        icon: "lucide:gauge",
        title: "Metrics from day one",
        text: "We define which hours, costs or errors we'll reduce before we start.",
      },
      {
        icon: "lucide:wallet",
        title: "Cost under control",
        text: "We optimise models and usage so the return is clear and the bill predictable.",
      },
      {
        icon: "lucide:file-text",
        title: "Everything documented",
        text: "Traceability and knowledge transfer: the system is yours.",
      },
    ],
  },
};

const content: Record<Locale, ProcessContent> = { es, ca, en };
export function getProcess(lang: Locale): ProcessContent {
  return content[lang];
}
