import type { Locale } from "@/config/site";

export interface HomeContent {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    trustNote: string;
  };
  problem: {
    eyebrow: string;
    title: string;
    intro: string;
    thoughts: string[];
    closing: string;
  };
  differentiators: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { icon: string; title: string; text: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { icon: string; title: string; text: string }[];
    cta: string;
  };
  process: {
    eyebrow: string;
    title: string;
    intro: string;
    phases: { title: string; text: string; result: string }[];
    cta: string;
  };
  why: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { icon: string; title: string; text: string }[];
  };
  stats: {
    title: string;
    items: { value: string; label: string }[];
    note: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { q: string; a: string }[];
  };
  finalCta: {
    title: string;
    text: string;
    primaryCta: string;
    secondaryCta: string;
  };
}

const es: HomeContent = {
  meta: {
    title: "Auttomatik · IA operativa para pymes que quieren escalar",
    description:
      "Consultoría e implementación de IA y automatización para pymes. Auditamos tus procesos, construimos agentes y automatizaciones útiles y formamos a tu equipo para que escales sin disparar costes.",
  },
  hero: {
    eyebrow: "Consultoría e implementación de IA para pymes",
    title: "Deja de probar IA. Empieza a implementarla.",
    subtitle:
      "Ayudamos a pymes con procesos repetitivos a automatizar operaciones, crear agentes IA y formar a sus equipos para crecer sin disparar costes ni caer en experimentos que no generan retorno.",
    primaryCta: "Reserva tu auditoría IA gratuita",
    secondaryCta: "Cómo trabajamos",
    trustNote:
      "Sin compromiso · Empezamos por tus procesos y tu ROI, no por el software.",
  },
  problem: {
    eyebrow: "Te suena, ¿verdad?",
    title: "Sabes que la IA importa, pero no sabes cómo aterrizarla sin perder dinero",
    intro:
      "No te falta trabajo. Te sobran tareas repetitivas. Y entre el ruido de herramientas, demos y proveedores, es difícil saber qué tiene sentido de verdad.",
    thoughts: [
      "Sé que tenemos que hacer algo con IA, pero no sé por dónde empezar.",
      "No quiero quedarme atrás, pero tampoco quiero tirar el dinero.",
      "Ya hemos probado herramientas, pero nadie las usa de verdad.",
      "Tenemos demasiadas tareas manuales para seguir creciendo así.",
      "No necesito que me vendan humo, necesito saber qué automatizar.",
      "Tengo miedo de invertir tarde, pero también de invertir mal.",
    ],
    closing:
      "Ese conflicto entre urgencia y prudencia es normal. Nuestro trabajo es resolverlo con criterio.",
  },
  differentiators: {
    eyebrow: "Nuestro enfoque",
    title: "No vendemos chatbots. Rediseñamos cómo opera tu empresa.",
    intro:
      "La tecnología es lo último. Primero entendemos tu operativa, dónde se pierde el tiempo y qué cambios tienen impacto real en negocio.",
    items: [
      {
        icon: "lucide:target",
        title: "Empezamos por procesos y ROI",
        text: "Priorizamos según impacto y ahorro real, no según la herramienta de moda. Si no compensa, no se hace.",
      },
      {
        icon: "lucide:users",
        title: "Adopción real del equipo",
        text: "Una automatización que nadie usa no sirve. Formamos a tu gente para que la IA sea una capacidad interna, no un experimento externo.",
      },
      {
        icon: "lucide:piggy-bank",
        title: "Control de costes",
        text: "Diseñamos para optimizar modelos, frecuencia de uso y licencias. Sin sorpresas en la factura de tokens.",
      },
      {
        icon: "lucide:eye",
        title: "Sin cajas negras",
        text: "Documentación, trazabilidad y transferencia de conocimiento. El sistema es tuyo y entiendes cómo funciona.",
      },
    ],
  },
  services: {
    eyebrow: "Servicios",
    title: "De la idea suelta al sistema que trabaja por ti",
    intro:
      "Cubrimos todo el recorrido: detectar oportunidades, construir, formar y mantener. Puedes empezar por donde más te duele.",
    items: [
      {
        icon: "lucide:search",
        title: "Auditoría IA operativa",
        text: "Mapeamos procesos, detectamos tareas repetitivas y priorizamos por impacto. Sales con una hoja de ruta clara.",
      },
      {
        icon: "lucide:bot",
        title: "Agentes IA a medida",
        text: "Agentes conectados a tus procesos reales (CRM, email, documentos) que ejecutan, no solo conversan.",
      },
      {
        icon: "lucide:workflow",
        title: "Automatización de procesos",
        text: "Flujos que eliminan el copiar-pegar: leads, presupuestos, incidencias, pedidos y tareas administrativas.",
      },
      {
        icon: "lucide:graduation-cap",
        title: "Formación y adopción",
        text: "Tu equipo aprende a usar IA con criterio y metodología, no por su cuenta y sin control.",
      },
      {
        icon: "lucide:trending-up",
        title: "Soporte y escalado",
        text: "Mantenimiento, nuevos agentes, control de costes y reporting para que la IA evolucione contigo.",
      },
    ],
    cta: "Descubre cómo trabajamos",
  },
  process: {
    eyebrow: "Cómo trabajamos",
    title: "Un método por fases para reducir el riesgo",
    intro:
      "Avanzamos paso a paso. Cada fase tiene un resultado tangible, así pruebas el valor antes de invertir más.",
    phases: [
      {
        title: "Auditoría IA operativa",
        text: "Mapeo de procesos, detección de tareas repetitivas, evaluación de herramientas actuales y estimación de ahorro.",
        result: "Hoja de ruta clara y priorizada.",
      },
      {
        title: "Implementación de quick wins",
        text: "Automatizaciones y agentes concretos en los procesos de mayor impacto, en semanas, no en meses.",
        result: "Primeras horas ahorradas y prueba de valor.",
      },
      {
        title: "Sistema IA interno",
        text: "Integración más profunda con tus procesos, formación del equipo, documentación y optimización.",
        result: "Adopción real en el día a día.",
      },
      {
        title: "Escalado y mejora continua",
        text: "Nuevos agentes, control de costes, mantenimiento, reporting y evolución del sistema.",
        result: "La IA como ventaja operativa continua.",
      },
    ],
    cta: "Ver el método en detalle",
  },
  why: {
    eyebrow: "Por qué Auttomatik",
    title: "Implementación seria, no demos bonitas",
    intro:
      "Lo que de verdad compras: criterio, una hoja de ruta y ejecución que se nota en horas, costes y capacidad.",
    items: [
      {
        icon: "lucide:gauge",
        title: "Foco en impacto medible",
        text: "Medimos horas ahorradas, errores reducidos y capacidad ganada. Sin métricas, no hay proyecto.",
      },
      {
        icon: "lucide:shield-check",
        title: "Robusto, no frágil",
        text: "Construimos sistemas que aguantan el día a día, no automatizaciones que se rompen a la primera.",
      },
      {
        icon: "lucide:route",
        title: "Adaptado a tu sector",
        text: "Auditamos procesos concretos. Nada de soluciones genéricas que no encajan en tu realidad.",
      },
      {
        icon: "lucide:file-text",
        title: "Conocimiento que se queda",
        text: "Documentamos y formamos para que no dependas eternamente de un proveedor externo.",
      },
    ],
  },
  stats: {
    title: "Pensado para el negocio, no para la foto",
    items: [
      { value: "20-250", label: "empleados: nuestro foco son las pymes en crecimiento" },
      { value: "4 fases", label: "un camino claro, de la auditoría al escalado" },
      { value: "Semanas", label: "para los primeros quick wins, no meses" },
      { value: "100%", label: "documentado y transferible a tu equipo" },
    ],
    note: "Las métricas de cada proyecto las fijamos en la auditoría inicial.",
  },
  faq: {
    eyebrow: "Objeciones frecuentes",
    title: "Lo que probablemente estás pensando",
    intro: "Las dudas legítimas que escuchamos en cada primera conversación.",
    items: [
      {
        q: "Ya nos han ofrecido chatbots.",
        a: "Y por eso existimos. No vendemos chatbots: rediseñamos operaciones con agentes y automatización conectados a tus procesos reales. El chatbot, si tiene sentido, es solo una pieza.",
      },
      {
        q: "Ya tenemos a alguien interno mirando esto.",
        a: "Perfecto. No sustituimos a esa persona: la ayudamos a priorizar según impacto de negocio, implementar más rápido y escalar sin saturarse.",
      },
      {
        q: "No queremos gastar en herramientas que luego nadie usa.",
        a: "Empezamos por procesos, ROI y adopción interna, no por software. Si una herramienta no se va a usar y rentabilizar, no entra.",
      },
      {
        q: "Nos preocupa el coste de tokens y licencias.",
        a: "El diseño técnico optimiza modelos, frecuencia de uso y herramientas para controlar el coste. Lo dejamos claro y medido desde el principio.",
      },
      {
        q: "No sabemos si funcionará en nuestro sector.",
        a: "Por eso auditamos procesos concretos antes de prometer nada. No hay solución genérica: hay tu operativa y dónde tiene sentido aplicar IA.",
      },
      {
        q: "No queremos depender de una caja negra.",
        a: "Entregamos documentación, trazabilidad y formación. El conocimiento se queda en tu empresa.",
      },
    ],
  },
  finalCta: {
    title: "Empieza por una auditoría, no por una factura",
    text: "Una conversación para entender tu operativa y decirte, con criterio, qué tiene sentido automatizar primero. Sin humo y sin compromiso.",
    primaryCta: "Reserva tu auditoría IA gratuita",
    secondaryCta: "Escríbenos por WhatsApp",
  },
};

const ca: HomeContent = {
  meta: {
    title: "Auttomatik · IA operativa per a pimes que volen escalar",
    description:
      "Consultoria i implementació d'IA i automatització per a pimes. Auditem els teus processos, construïm agents i automatitzacions útils i formem el teu equip perquè escalis sense disparar costos.",
  },
  hero: {
    eyebrow: "Consultoria i implementació d'IA per a pimes",
    title: "Deixa de provar IA. Comença a implementar-la.",
    subtitle:
      "Ajudem pimes amb processos repetitius a automatitzar operacions, crear agents IA i formar els seus equips per créixer sense disparar costos ni caure en experiments que no generen retorn.",
    primaryCta: "Reserva la teva auditoria d'IA gratuïta",
    secondaryCta: "Com treballem",
    trustNote:
      "Sense compromís · Comencem pels teus processos i el teu ROI, no pel programari.",
  },
  problem: {
    eyebrow: "Et sona, oi?",
    title: "Saps que la IA importa, però no saps com aterrar-la sense perdre diners",
    intro:
      "No et falta feina. Et sobren tasques repetitives. I enmig del soroll d'eines, demos i proveïdors, és difícil saber què té sentit de debò.",
    thoughts: [
      "Sé que hem de fer alguna cosa amb IA, però no sé per on començar.",
      "No vull quedar-me enrere, però tampoc vull llençar els diners.",
      "Ja hem provat eines, però ningú no les fa servir de debò.",
      "Tenim massa tasques manuals per continuar creixent així.",
      "No necessito que em venguin fum, necessito saber què automatitzar.",
      "Tinc por d'invertir tard, però també d'invertir malament.",
    ],
    closing:
      "Aquest conflicte entre urgència i prudència és normal. La nostra feina és resoldre'l amb criteri.",
  },
  differentiators: {
    eyebrow: "El nostre enfocament",
    title: "No venem chatbots. Redissenyem com opera la teva empresa.",
    intro:
      "La tecnologia és l'últim. Primer entenem la teva operativa, on es perd el temps i quins canvis tenen impacte real en el negoci.",
    items: [
      {
        icon: "lucide:target",
        title: "Comencem per processos i ROI",
        text: "Prioritzem segons impacte i estalvi real, no segons l'eina de moda. Si no compensa, no es fa.",
      },
      {
        icon: "lucide:users",
        title: "Adopció real de l'equip",
        text: "Una automatització que ningú fa servir no serveix. Formem la teva gent perquè la IA sigui una capacitat interna, no un experiment extern.",
      },
      {
        icon: "lucide:piggy-bank",
        title: "Control de costos",
        text: "Dissenyem per optimitzar models, freqüència d'ús i llicències. Sense sorpreses a la factura de tokens.",
      },
      {
        icon: "lucide:eye",
        title: "Sense caixes negres",
        text: "Documentació, traçabilitat i transferència de coneixement. El sistema és teu i entens com funciona.",
      },
    ],
  },
  services: {
    eyebrow: "Serveis",
    title: "De la idea solta al sistema que treballa per tu",
    intro:
      "Cobrim tot el recorregut: detectar oportunitats, construir, formar i mantenir. Pots començar per on més et fa mal.",
    items: [
      {
        icon: "lucide:search",
        title: "Auditoria IA operativa",
        text: "Mapem processos, detectem tasques repetitives i prioritzem per impacte. En surts amb un full de ruta clar.",
      },
      {
        icon: "lucide:bot",
        title: "Agents IA a mida",
        text: "Agents connectats als teus processos reals (CRM, correu, documents) que executen, no només conversen.",
      },
      {
        icon: "lucide:workflow",
        title: "Automatització de processos",
        text: "Fluxos que eliminen el copiar-enganxar: leads, pressupostos, incidències, comandes i tasques administratives.",
      },
      {
        icon: "lucide:graduation-cap",
        title: "Formació i adopció",
        text: "El teu equip aprèn a fer servir IA amb criteri i metodologia, no pel seu compte i sense control.",
      },
      {
        icon: "lucide:trending-up",
        title: "Suport i escalat",
        text: "Manteniment, nous agents, control de costos i reporting perquè la IA evolucioni amb tu.",
      },
    ],
    cta: "Descobreix com treballem",
  },
  process: {
    eyebrow: "Com treballem",
    title: "Un mètode per fases per reduir el risc",
    intro:
      "Avancem pas a pas. Cada fase té un resultat tangible, així proves el valor abans d'invertir més.",
    phases: [
      {
        title: "Auditoria IA operativa",
        text: "Mapeig de processos, detecció de tasques repetitives, avaluació d'eines actuals i estimació d'estalvi.",
        result: "Full de ruta clar i prioritzat.",
      },
      {
        title: "Implementació de quick wins",
        text: "Automatitzacions i agents concrets en els processos de més impacte, en setmanes, no en mesos.",
        result: "Primeres hores estalviades i prova de valor.",
      },
      {
        title: "Sistema IA intern",
        text: "Integració més profunda amb els teus processos, formació de l'equip, documentació i optimització.",
        result: "Adopció real en el dia a dia.",
      },
      {
        title: "Escalat i millora contínua",
        text: "Nous agents, control de costos, manteniment, reporting i evolució del sistema.",
        result: "La IA com a avantatge operatiu continu.",
      },
    ],
    cta: "Veure el mètode en detall",
  },
  why: {
    eyebrow: "Per què Auttomatik",
    title: "Implementació seriosa, no demos boniques",
    intro:
      "El que de debò compres: criteri, un full de ruta i execució que es nota en hores, costos i capacitat.",
    items: [
      {
        icon: "lucide:gauge",
        title: "Focus en impacte mesurable",
        text: "Mesurem hores estalviades, errors reduïts i capacitat guanyada. Sense mètriques, no hi ha projecte.",
      },
      {
        icon: "lucide:shield-check",
        title: "Robust, no fràgil",
        text: "Construïm sistemes que aguanten el dia a dia, no automatitzacions que es trenquen a la primera.",
      },
      {
        icon: "lucide:route",
        title: "Adaptat al teu sector",
        text: "Auditem processos concrets. Res de solucions genèriques que no encaixen en la teva realitat.",
      },
      {
        icon: "lucide:file-text",
        title: "Coneixement que es queda",
        text: "Documentem i formem perquè no depenguis eternament d'un proveïdor extern.",
      },
    ],
  },
  stats: {
    title: "Pensat per al negoci, no per a la foto",
    items: [
      { value: "20-250", label: "empleats: el nostre focus són les pimes en creixement" },
      { value: "4 fases", label: "un camí clar, de l'auditoria a l'escalat" },
      { value: "Setmanes", label: "per als primers quick wins, no mesos" },
      { value: "100%", label: "documentat i transferible al teu equip" },
    ],
    note: "Les mètriques de cada projecte les fixem a l'auditoria inicial.",
  },
  faq: {
    eyebrow: "Objeccions freqüents",
    title: "El que probablement estàs pensant",
    intro: "Els dubtes legítims que escoltem en cada primera conversa.",
    items: [
      {
        q: "Ja ens han ofert chatbots.",
        a: "I per això existim. No venem chatbots: redissenyem operacions amb agents i automatització connectats als teus processos reals. El chatbot, si té sentit, és només una peça.",
      },
      {
        q: "Ja tenim algú intern mirant-ho.",
        a: "Perfecte. No substituïm aquesta persona: l'ajudem a prioritzar segons impacte de negoci, implementar més ràpid i escalar sense saturar-se.",
      },
      {
        q: "No volem gastar en eines que després ningú fa servir.",
        a: "Comencem per processos, ROI i adopció interna, no per programari. Si una eina no s'ha de fer servir i rendibilitzar, no entra.",
      },
      {
        q: "Ens preocupa el cost de tokens i llicències.",
        a: "El disseny tècnic optimitza models, freqüència d'ús i eines per controlar el cost. Ho deixem clar i mesurat des del principi.",
      },
      {
        q: "No sabem si funcionarà en el nostre sector.",
        a: "Per això auditem processos concrets abans de prometre res. No hi ha solució genèrica: hi ha la teva operativa i on té sentit aplicar IA.",
      },
      {
        q: "No volem dependre d'una caixa negra.",
        a: "Lliurem documentació, traçabilitat i formació. El coneixement es queda a la teva empresa.",
      },
    ],
  },
  finalCta: {
    title: "Comença per una auditoria, no per una factura",
    text: "Una conversa per entendre la teva operativa i dir-te, amb criteri, què té sentit automatitzar primer. Sense fum i sense compromís.",
    primaryCta: "Reserva la teva auditoria d'IA gratuïta",
    secondaryCta: "Escriu-nos per WhatsApp",
  },
};

const en: HomeContent = {
  meta: {
    title: "Auttomatik · Operational AI for SMEs ready to scale",
    description:
      "AI and automation consulting and implementation for SMEs. We audit your processes, build useful agents and automations, and train your team so you scale without ballooning costs.",
  },
  hero: {
    eyebrow: "AI consulting & implementation for SMEs",
    title: "Stop testing AI. Start implementing it.",
    subtitle:
      "We help SMEs with repetitive processes automate operations, build AI agents and train their teams to grow without ballooning costs or falling into experiments that deliver no return.",
    primaryCta: "Book your free AI audit",
    secondaryCta: "How we work",
    trustNote:
      "No commitment · We start with your processes and your ROI, not the software.",
  },
  problem: {
    eyebrow: "Sound familiar?",
    title: "You know AI matters, but not how to land it without wasting money",
    intro:
      "You're not short of work. You're drowning in repetitive tasks. And amid the noise of tools, demos and vendors, it's hard to know what actually makes sense.",
    thoughts: [
      "I know we need to do something with AI, but I don't know where to start.",
      "I don't want to fall behind, but I don't want to waste money either.",
      "We've tried tools, but nobody really uses them.",
      "We have too many manual tasks to keep growing like this.",
      "I don't need to be sold hype, I need to know what to automate.",
      "I'm afraid of investing too late, but also of investing badly.",
    ],
    closing:
      "That tension between urgency and caution is normal. Our job is to resolve it with judgement.",
  },
  differentiators: {
    eyebrow: "Our approach",
    title: "We don't sell chatbots. We redesign how your company operates.",
    intro:
      "Technology comes last. First we understand your operations, where time is lost and which changes have real business impact.",
    items: [
      {
        icon: "lucide:target",
        title: "We start with processes and ROI",
        text: "We prioritise by impact and real savings, not by the trendy tool. If it doesn't pay off, we don't build it.",
      },
      {
        icon: "lucide:users",
        title: "Real team adoption",
        text: "An automation nobody uses is worthless. We train your people so AI becomes an internal capability, not an external experiment.",
      },
      {
        icon: "lucide:piggy-bank",
        title: "Cost control",
        text: "We design to optimise models, usage frequency and licences. No surprises on your token bill.",
      },
      {
        icon: "lucide:eye",
        title: "No black boxes",
        text: "Documentation, traceability and knowledge transfer. The system is yours and you understand how it works.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "From scattered ideas to a system that works for you",
    intro:
      "We cover the whole journey: spot opportunities, build, train and maintain. Start wherever it hurts most.",
    items: [
      {
        icon: "lucide:search",
        title: "Operational AI audit",
        text: "We map processes, detect repetitive tasks and prioritise by impact. You leave with a clear roadmap.",
      },
      {
        icon: "lucide:bot",
        title: "Custom AI agents",
        text: "Agents connected to your real processes (CRM, email, documents) that execute, not just chat.",
      },
      {
        icon: "lucide:workflow",
        title: "Process automation",
        text: "Flows that kill copy-paste: leads, quotes, tickets, orders and admin tasks.",
      },
      {
        icon: "lucide:graduation-cap",
        title: "Training & adoption",
        text: "Your team learns to use AI with judgement and method, not on their own without control.",
      },
      {
        icon: "lucide:trending-up",
        title: "Support & scaling",
        text: "Maintenance, new agents, cost control and reporting so AI evolves with you.",
      },
    ],
    cta: "See how we work",
  },
  process: {
    eyebrow: "How we work",
    title: "A phased method to reduce risk",
    intro:
      "We move step by step. Each phase delivers a tangible result, so you prove value before investing more.",
    phases: [
      {
        title: "Operational AI audit",
        text: "Process mapping, repetitive-task detection, assessment of current tools and savings estimate.",
        result: "A clear, prioritised roadmap.",
      },
      {
        title: "Quick-win implementation",
        text: "Concrete automations and agents on the highest-impact processes, in weeks, not months.",
        result: "First hours saved and proof of value.",
      },
      {
        title: "Internal AI system",
        text: "Deeper integration with your processes, team training, documentation and optimisation.",
        result: "Real day-to-day adoption.",
      },
      {
        title: "Scaling & continuous improvement",
        text: "New agents, cost control, maintenance, reporting and system evolution.",
        result: "AI as an ongoing operational advantage.",
      },
    ],
    cta: "See the method in detail",
  },
  why: {
    eyebrow: "Why Auttomatik",
    title: "Serious implementation, not pretty demos",
    intro:
      "What you really buy: judgement, a roadmap and execution you can measure in hours, costs and capacity.",
    items: [
      {
        icon: "lucide:gauge",
        title: "Focus on measurable impact",
        text: "We measure hours saved, errors reduced and capacity gained. No metrics, no project.",
      },
      {
        icon: "lucide:shield-check",
        title: "Robust, not fragile",
        text: "We build systems that survive daily use, not automations that break at the first hurdle.",
      },
      {
        icon: "lucide:route",
        title: "Tailored to your sector",
        text: "We audit concrete processes. No generic solutions that don't fit your reality.",
      },
      {
        icon: "lucide:file-text",
        title: "Knowledge that stays",
        text: "We document and train so you don't depend forever on an external vendor.",
      },
    ],
  },
  stats: {
    title: "Built for the business, not for the photo",
    items: [
      { value: "20-250", label: "employees: our focus is growing SMEs" },
      { value: "4 phases", label: "a clear path, from audit to scaling" },
      { value: "Weeks", label: "for the first quick wins, not months" },
      { value: "100%", label: "documented and transferable to your team" },
    ],
    note: "We set each project's metrics during the initial audit.",
  },
  faq: {
    eyebrow: "Common objections",
    title: "What you're probably thinking",
    intro: "The legitimate doubts we hear in every first conversation.",
    items: [
      {
        q: "We've already been offered chatbots.",
        a: "That's exactly why we exist. We don't sell chatbots: we redesign operations with agents and automation connected to your real processes. A chatbot, if it makes sense, is just one piece.",
      },
      {
        q: "We already have someone internal looking into this.",
        a: "Great. We don't replace that person: we help them prioritise by business impact, implement faster and scale without burning out.",
      },
      {
        q: "We don't want to spend on tools nobody ends up using.",
        a: "We start with processes, ROI and internal adoption, not software. If a tool won't be used and pay off, it doesn't make the cut.",
      },
      {
        q: "We're worried about token and licence costs.",
        a: "The technical design optimises models, usage frequency and tools to control cost. We make it clear and measured from the start.",
      },
      {
        q: "We're not sure it'll work in our sector.",
        a: "That's why we audit concrete processes before promising anything. There's no generic solution: there's your operation and where AI makes sense.",
      },
      {
        q: "We don't want to depend on a black box.",
        a: "We deliver documentation, traceability and training. The knowledge stays in your company.",
      },
    ],
  },
  finalCta: {
    title: "Start with an audit, not an invoice",
    text: "A conversation to understand your operations and tell you, with judgement, what makes sense to automate first. No hype, no commitment.",
    primaryCta: "Book your free AI audit",
    secondaryCta: "Message us on WhatsApp",
  },
};

const content: Record<Locale, HomeContent> = { es, ca, en };

export function getHome(lang: Locale): HomeContent {
  return content[lang];
}
