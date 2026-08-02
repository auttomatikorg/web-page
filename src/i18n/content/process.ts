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
      "Un método en tres fases para implementar IA con criterio: auditoría, implementación del sistema y documentación con mantenimiento.",
  },
  hero: {
    eyebrow: "Cómo trabajamos",
    title: "Tres fases para implementar IA sin riesgos innecesarios",
    intro:
      "Primero entendemos qué necesita tu empresa, después implementamos el sistema y finalmente te dejamos documentación, soporte y mantenimiento para que funcione en el día a día.",
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
      duration: "2-3 días",
      result: "Hoja de ruta clara y priorizada.",
    },
    {
      title: "Implementación del sistema",
      objective:
        "Construir e integrar la solución de IA o automatización que mejor encaja con lo que tu empresa necesita.",
      activities: [
        "Diseño del sistema según la hoja de ruta",
        "Construcción de agentes, automatizaciones e integraciones",
        "Pruebas con datos y casos reales de tu empresa",
        "Ajustes técnicos para asegurar rendimiento y fiabilidad",
      ],
      duration: "2-4 semanas",
      result: "Sistema implementado y listo para operar.",
    },
    {
      title: "Documentación y mantenimiento",
      objective:
        "Transferir el conocimiento, acompañar al equipo y mantener el sistema para que siga funcionando bien.",
      activities: [
        "Documentación clara del sistema y sus procesos",
        "Formación práctica para el equipo",
        "Monitorización, soporte y resolución de incidencias",
        "Mantenimiento y mejoras según el uso real",
      ],
      duration: "Continuo",
      result: "Sistema documentado, mantenido y transferible.",
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
        text: "Trazabilidad y transferencia de conocimiento.",
      },
    ],
  },
};

const ca: ProcessContent = {
  meta: {
    title: "Com treballem · Mètode IA per fases",
    description:
      "Un mètode en tres fases per implementar IA amb criteri: auditoria, implementació del sistema i documentació amb manteniment.",
  },
  hero: {
    eyebrow: "Com treballem",
    title: "Tres fases per implementar IA sense riscos innecessaris",
    intro:
      "Primer entenem què necessita la teva empresa, després implementem el sistema i finalment et deixem documentació, suport i manteniment perquè funcioni en el dia a dia.",
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
      duration: "2-3 dies",
      result: "Full de ruta clar i prioritzat.",
    },
    {
      title: "Implementació del sistema",
      objective:
        "Construir i integrar la solució d'IA o automatització que millor encaixa amb el que necessita la teva empresa.",
      activities: [
        "Disseny del sistema segons el full de ruta",
        "Construcció d'agents, automatitzacions i integracions",
        "Proves amb dades i casos reals de la teva empresa",
        "Ajustos tècnics per assegurar rendiment i fiabilitat",
      ],
      duration: "2-4 setmanes",
      result: "Sistema implementat i llest per operar.",
    },
    {
      title: "Documentació i manteniment",
      objective:
        "Transferir el coneixement, acompanyar l'equip i mantenir el sistema perquè continuï funcionant bé.",
      activities: [
        "Documentació clara del sistema i els seus processos",
        "Formació pràctica per a l'equip",
        "Monitoratge, suport i resolució d'incidències",
        "Manteniment i millores segons l'ús real",
      ],
      duration: "Continu",
      result: "Sistema documentat, mantingut i transferible.",
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
      "A three-phase method to implement AI with judgement: audit, system implementation, and documentation with maintenance.",
  },
  hero: {
    eyebrow: "How we work",
    title: "Three phases to implement AI without unnecessary risk",
    intro:
      "First we understand what your company needs, then we implement the system, and finally we leave documentation, support and maintenance so it works day to day.",
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
      duration: "2-3 days",
      result: "A clear, prioritised roadmap.",
    },
    {
      title: "System implementation",
      objective:
        "Build and integrate the AI or automation solution that best fits what your company needs.",
      activities: [
        "System design based on the roadmap",
        "Build of agents, automations and integrations",
        "Testing with real company data and use cases",
        "Technical tuning for performance and reliability",
      ],
      duration: "2-4 weeks",
      result: "System implemented and ready to operate.",
    },
    {
      title: "Documentation & maintenance",
      objective:
        "Transfer knowledge, support the team and maintain the system so it keeps working well.",
      activities: [
        "Clear documentation of the system and its processes",
        "Hands-on training for the team",
        "Monitoring, support and issue resolution",
        "Maintenance and improvements based on real usage",
      ],
      duration: "Ongoing",
      result: "Documented, maintained and transferable system.",
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
