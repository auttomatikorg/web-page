import type { Locale } from "@/config/site";

/**
 * Legal templates (RGPD / LOPDGDD / LSSI-CE basics). Tokens {company} {taxId}
 * {address} {email} {url} are replaced at render time from SITE config.
 *
 * ⚠️ These are practical, typical templates. Have them reviewed by a legal
 *    professional and complete the company data in `src/config/site.ts` before
 *    publishing. Adapt every section to your real data processing and tooling.
 */
export interface LegalDoc {
  title: string;
  updatedLabel: string;
  reviewNote: string;
  sections: { heading: string; body: string[] }[];
}

export interface LegalBundle {
  legal: LegalDoc;
  privacy: LegalDoc;
  cookies: LegalDoc;
}

const es: LegalBundle = {
  legal: {
    title: "Aviso legal",
    updatedLabel: "Última actualización",
    reviewNote:
      "Plantilla orientativa conforme a la LSSI-CE. Revísala con un profesional y completa los datos de la empresa antes de publicar.",
    sections: [
      {
        heading: "1. Información general y titularidad",
        body: [
          "En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de que el titular de este sitio web es:",
          "Titular: {company}. NIF: {taxId}. Domicilio: {address}. Correo electrónico: {email}. Sitio web: {url}.",
          "El acceso y la utilización del sitio web atribuyen la condición de usuario e implican la aceptación plena de todas las cláusulas incluidas en este aviso legal.",
        ],
      },
      {
        heading: "2. Objeto",
        body: [
          "El presente aviso legal regula el acceso, la navegación y el uso del sitio web, así como las responsabilidades derivadas de la utilización de sus contenidos. A través del sitio, {company} ofrece información sobre sus servicios de consultoría e implementación de inteligencia artificial y automatización para empresas.",
          "{company} se reserva el derecho a modificar la presentación, configuración y contenidos del sitio web, así como las condiciones requeridas para su acceso y uso, en cualquier momento y sin previo aviso.",
        ],
      },
      {
        heading: "3. Condiciones de acceso y uso",
        body: [
          "El acceso al sitio web es gratuito, salvo en lo relativo al coste de la conexión a través de la red de telecomunicaciones suministrada por el proveedor de acceso contratado por el usuario.",
          "El usuario se compromete a hacer un uso adecuado y lícito del sitio web y de sus contenidos, conforme a la legislación aplicable, la buena fe y el orden público.",
        ],
      },
      {
        heading: "4. Obligaciones del usuario",
        body: [
          "El usuario se obliga a no utilizar el sitio web ni sus contenidos con fines o efectos ilícitos, lesivos de los derechos e intereses de terceros, o que de cualquier forma puedan dañar, inutilizar, sobrecargar o impedir la normal utilización del sitio.",
          "Asimismo, el usuario se compromete a no introducir o difundir programas, virus o cualquier elemento susceptible de provocar daños en los sistemas, equipos o documentos del titular o de terceros.",
        ],
      },
      {
        heading: "5. Propiedad intelectual e industrial",
        body: [
          "Todos los contenidos del sitio web (textos, fotografías, gráficos, imágenes, iconos, tecnología, software, enlaces, marcas, logotipos, nombres comerciales y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente) son propiedad de {company} o de terceros que han autorizado su uso, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre ellos.",
          "Queda expresamente prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra forma de explotación, total o parcial, de los contenidos sin la autorización expresa y por escrito de {company}.",
        ],
      },
      {
        heading: "6. Política de enlaces",
        body: [
          "El sitio web puede contener enlaces a sitios de terceros. {company} no asume ninguna responsabilidad sobre los contenidos, informaciones o servicios que pudieran aparecer en dichos sitios, que tendrán carácter exclusivamente informativo y no implican relación alguna entre {company} y las personas o entidades titulares de tales contenidos.",
          "Quien desee establecer un enlace hacia este sitio web deberá abstenerse de realizar manifestaciones falsas o inexactas sobre {company} y no incluirá contenidos ilícitos o contrarios a la buena fe.",
        ],
      },
      {
        heading: "7. Exclusión de garantías y responsabilidad",
        body: [
          "{company} no garantiza la disponibilidad y continuidad permanente del funcionamiento del sitio web. En consecuencia, no será responsable, dentro de los límites establecidos por la ley, de los daños y perjuicios causados al usuario como consecuencia de la indisponibilidad, fallos de acceso o falta de continuidad del sitio.",
          "{company} no se hace responsable de los posibles errores de seguridad que se puedan producir ni de los posibles daños que puedan causarse al sistema informático del usuario, a los ficheros o documentos almacenados en el mismo, como consecuencia de la presencia de virus o de un uso indebido del sitio.",
        ],
      },
      {
        heading: "8. Modificaciones",
        body: [
          "{company} se reserva el derecho a efectuar, sin previo aviso, las modificaciones que considere oportunas en el sitio web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través del mismo como la forma en la que estos aparezcan presentados o localizados.",
        ],
      },
      {
        heading: "9. Protección de datos",
        body: [
          "El tratamiento de los datos personales que se recaben a través del sitio web se rige por lo dispuesto en nuestra Política de privacidad y nuestra Política de cookies, que forman parte de este aviso legal.",
        ],
      },
      {
        heading: "10. Legislación aplicable y jurisdicción",
        body: [
          "La relación entre {company} y el usuario se regirá por la normativa española vigente. Para la resolución de cualquier controversia, las partes se someterán a los juzgados y tribunales que resulten competentes conforme a derecho.",
        ],
      },
    ],
  },
  privacy: {
    title: "Política de privacidad",
    updatedLabel: "Última actualización",
    reviewNote:
      "Plantilla orientativa conforme al RGPD (UE 2016/679) y a la LOPDGDD. Revísala con un profesional y adáptala a tu tratamiento real de datos.",
    sections: [
      {
        heading: "1. Responsable del tratamiento",
        body: [
          "El responsable del tratamiento de tus datos personales es {company}, con NIF {taxId}, domicilio en {address} y correo electrónico de contacto {email}.",
          "En {company} nos comprometemos a proteger tu privacidad y a tratar tus datos personales de forma lícita, leal y transparente, conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).",
        ],
      },
      {
        heading: "2. Datos personales que tratamos",
        body: [
          "Tratamos los datos que nos facilitas voluntariamente al contactarnos o reservar una llamada, que pueden incluir: datos identificativos y de contacto (nombre, apellidos, correo electrónico, teléfono), datos profesionales (empresa, cargo, sector) y cualquier información que decidas incluir en tu mensaje.",
          "También podemos tratar datos de navegación obtenidos mediante cookies y tecnologías similares, conforme a nuestra Política de cookies.",
          "No tratamos categorías especiales de datos. Te rogamos que no nos facilites datos sensibles a través de los formularios o canales de contacto.",
        ],
      },
      {
        heading: "3. Finalidad del tratamiento",
        body: [
          "Tratamos tus datos con las siguientes finalidades: (i) atender tus solicitudes, consultas y peticiones de información; (ii) gestionar la reserva de llamadas y la relación comercial o precontractual; (iii) elaborar y enviarte propuestas de servicios; y (iv) en su caso, y con tu consentimiento, remitirte comunicaciones sobre nuestros servicios.",
          "No se tomarán decisiones automatizadas que produzcan efectos jurídicos sobre ti basadas únicamente en el tratamiento automatizado de tus datos.",
        ],
      },
      {
        heading: "4. Base jurídica del tratamiento",
        body: [
          "La base jurídica para el tratamiento de tus datos es: (i) tu consentimiento, prestado al contactarnos o reservar una llamada; (ii) la aplicación de medidas precontractuales adoptadas a petición tuya; y (iii) el interés legítimo de {company} en responder a tus consultas y gestionar la relación comercial.",
          "El consentimiento prestado podrá ser retirado en cualquier momento, sin que ello afecte a la licitud del tratamiento previo a su retirada.",
        ],
      },
      {
        heading: "5. Plazo de conservación",
        body: [
          "Conservaremos tus datos personales mientras se mantenga la relación con {company} y, una vez finalizada, durante los plazos legalmente exigibles para atender posibles responsabilidades. Cuando los datos dejen de ser necesarios para las finalidades indicadas, se suprimirán mediante medidas de seguridad adecuadas.",
        ],
      },
      {
        heading: "6. Destinatarios y encargados del tratamiento",
        body: [
          "No cederemos tus datos a terceros, salvo obligación legal o cuando sea necesario para la prestación del servicio.",
          "Para el funcionamiento del sitio y la gestión de las solicitudes podemos recurrir a proveedores de servicios (por ejemplo, alojamiento web, herramienta de reserva de citas, mensajería y correo electrónico) que actúan como encargados del tratamiento y con los que se han suscrito los correspondientes contratos conforme al artículo 28 del RGPD.",
        ],
      },
      {
        heading: "7. Transferencias internacionales de datos",
        body: [
          "Algunos de nuestros proveedores pueden estar ubicados fuera del Espacio Económico Europeo (EEE). En tales casos, las transferencias internacionales se realizarán con las garantías adecuadas previstas en el RGPD, como las cláusulas contractuales tipo aprobadas por la Comisión Europea o decisiones de adecuación.",
        ],
      },
      {
        heading: "8. Tus derechos",
        body: [
          "Como titular de los datos, tienes derecho a: acceder a tus datos personales; solicitar su rectificación o supresión; solicitar la limitación de su tratamiento; oponerte al tratamiento; solicitar la portabilidad de tus datos; y a no ser objeto de decisiones individuales automatizadas.",
          "Asimismo, tienes derecho a retirar el consentimiento prestado en cualquier momento.",
        ],
      },
      {
        heading: "9. Cómo ejercer tus derechos y reclamaciones",
        body: [
          "Puedes ejercer tus derechos dirigiéndote por escrito a {company}, en la dirección {address} o mediante correo electrónico a {email}, indicando el derecho que deseas ejercer y adjuntando, en su caso, documento que acredite tu identidad.",
          "Si consideras que el tratamiento de tus datos no se ajusta a la normativa, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD), con domicilio en C/ Jorge Juan, 6, 28001 Madrid, o a través de su sede electrónica (www.aepd.es).",
        ],
      },
      {
        heading: "10. Medidas de seguridad",
        body: [
          "{company} ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad, integridad y confidencialidad de los datos personales, evitando su alteración, pérdida, tratamiento o acceso no autorizado, conforme al estado de la técnica.",
        ],
      },
      {
        heading: "11. Veracidad de los datos",
        body: [
          "El usuario garantiza que los datos facilitados son veraces, exactos y actualizados, y se responsabiliza de comunicar cualquier modificación de los mismos. Será responsable de las informaciones falsas o inexactas que proporcione y de los perjuicios que ello cause a {company} o a terceros.",
        ],
      },
      {
        heading: "12. Cambios en la política de privacidad",
        body: [
          "{company} se reserva el derecho a modificar la presente política de privacidad para adaptarla a novedades legislativas o jurisprudenciales, así como a prácticas del sector. Cualquier cambio se publicará en esta misma página, indicando la fecha de la última actualización.",
        ],
      },
    ],
  },
  cookies: {
    title: "Política de cookies",
    updatedLabel: "Última actualización",
    reviewNote:
      "Plantilla orientativa conforme a la guía de la AEPD. Ajusta el listado de cookies a las que realmente utilice tu sitio y tus proveedores.",
    sections: [
      {
        heading: "1. ¿Qué son las cookies?",
        body: [
          "Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del usuario (ordenador, tablet o móvil) cuando los visita. Permiten, entre otras cosas, recordar información sobre la visita, mejorar la experiencia de navegación y obtener información estadística sobre el uso del sitio.",
        ],
      },
      {
        heading: "2. Tipos de cookies",
        body: [
          "Según quién las gestione: cookies propias (gestionadas por el titular del sitio) y cookies de terceros (gestionadas por entidades ajenas).",
          "Según su finalidad: cookies técnicas o necesarias (imprescindibles para el funcionamiento del sitio), cookies de preferencias o personalización, cookies de análisis o medición (estadísticas de uso) y cookies de publicidad.",
          "Según su duración: cookies de sesión (se eliminan al cerrar el navegador) y cookies persistentes (permanecen durante un periodo determinado).",
        ],
      },
      {
        heading: "3. Cookies que utiliza este sitio",
        body: [
          "Cookies técnicas y necesarias: imprescindibles para el correcto funcionamiento del sitio y para recordar tu preferencia respecto al consentimiento de cookies. Están exentas de consentimiento.",
          "Contenido de terceros: al utilizar la herramienta de reserva de citas se puede cargar contenido del proveedor correspondiente, que puede instalar sus propias cookies. Te recomendamos consultar la política de cookies de dicho proveedor para conocer el detalle.",
          "Este sitio no instala cookies de publicidad. Si en el futuro se incorporan cookies de análisis o de terceros adicionales, se actualizará esta política y, en su caso, el sistema de consentimiento.",
        ],
      },
      {
        heading: "4. Consentimiento",
        body: [
          "Al acceder por primera vez al sitio web se muestra un aviso que te permite aceptar o rechazar las cookies no esenciales. Las cookies técnicas o necesarias se instalan en todo caso por ser imprescindibles. Puedes modificar tu elección en cualquier momento eliminando las cookies desde tu navegador.",
        ],
      },
      {
        heading: "5. Cómo configurar o desactivar las cookies",
        body: [
          "Puedes permitir, bloquear o eliminar las cookies instaladas en tu dispositivo a través de la configuración de las opciones de tu navegador. A continuación encontrarás los enlaces de ayuda de los navegadores más habituales:",
          "Google Chrome: support.google.com/chrome/answer/95647 · Mozilla Firefox: support.mozilla.org/kb/cookies · Safari: support.apple.com/es-es/guide/safari · Microsoft Edge: support.microsoft.com/microsoft-edge.",
          "Ten en cuenta que la desactivación de determinadas cookies puede afectar al correcto funcionamiento de algunas secciones del sitio.",
        ],
      },
      {
        heading: "6. Cookies de terceros",
        body: [
          "Los servicios de terceros utilizados en este sitio (como la herramienta de reserva de citas) son ajenos a {company} y disponen de sus propias políticas de privacidad y de cookies. {company} no controla ni se responsabiliza del contenido y veracidad de dichas políticas.",
        ],
      },
      {
        heading: "7. Actualizaciones de la política de cookies",
        body: [
          "{company} puede modificar esta política de cookies en función de nuevas exigencias legales o por cambios en las cookies utilizadas. Por ello, te recomendamos revisarla cada vez que accedas al sitio. La fecha de la última actualización figura al inicio de este documento.",
        ],
      },
    ],
  },
};

const ca: LegalBundle = {
  legal: {
    title: "Avís legal",
    updatedLabel: "Última actualització",
    reviewNote:
      "Plantilla orientativa conforme a la LSSI-CE. Revisa-la amb un professional i completa les dades de l'empresa abans de publicar.",
    sections: [
      {
        heading: "1. Informació general i titularitat",
        body: [
          "En compliment de l'article 10 de la Llei 34/2002, d'11 de juliol, de Serveis de la Societat de la Informació i de Comerç Electrònic (LSSI-CE), s'informa que el titular d'aquest lloc web és:",
          "Titular: {company}. NIF: {taxId}. Domicili: {address}. Correu electrònic: {email}. Lloc web: {url}.",
          "L'accés i la utilització del lloc web atribueixen la condició d'usuari i impliquen l'acceptació plena de totes les clàusules incloses en aquest avís legal.",
        ],
      },
      {
        heading: "2. Objecte",
        body: [
          "Aquest avís legal regula l'accés, la navegació i l'ús del lloc web, així com les responsabilitats derivades de la utilització dels seus continguts. A través del lloc, {company} ofereix informació sobre els seus serveis de consultoria i implementació d'intel·ligència artificial i automatització per a empreses.",
          "{company} es reserva el dret a modificar la presentació, configuració i continguts del lloc web, així com les condicions requerides per al seu accés i ús, en qualsevol moment i sense avís previ.",
        ],
      },
      {
        heading: "3. Condicions d'accés i ús",
        body: [
          "L'accés al lloc web és gratuït, llevat del cost de la connexió a través de la xarxa de telecomunicacions subministrada pel proveïdor d'accés contractat per l'usuari.",
          "L'usuari es compromet a fer un ús adequat i lícit del lloc web i dels seus continguts, conforme a la legislació aplicable, la bona fe i l'ordre públic.",
        ],
      },
      {
        heading: "4. Obligacions de l'usuari",
        body: [
          "L'usuari s'obliga a no utilitzar el lloc web ni els seus continguts amb finalitats o efectes il·lícits, lesius dels drets i interessos de tercers, o que de qualsevol manera puguin danyar, inutilitzar, sobrecarregar o impedir la utilització normal del lloc.",
          "Així mateix, l'usuari es compromet a no introduir ni difondre programes, virus o qualsevol element susceptible de provocar danys en els sistemes, equips o documents del titular o de tercers.",
        ],
      },
      {
        heading: "5. Propietat intel·lectual i industrial",
        body: [
          "Tots els continguts del lloc web (textos, fotografies, gràfics, imatges, icones, tecnologia, programari, enllaços, marques, logotips, noms comercials i altres continguts audiovisuals o sonors, així com el seu disseny gràfic i codis font) són propietat de {company} o de tercers que n'han autoritzat l'ús, sense que es puguin entendre cedits a l'usuari cap dels drets d'explotació sobre aquests.",
          "Queda expressament prohibida la reproducció, distribució, comunicació pública, transformació o qualsevol altra forma d'explotació, total o parcial, dels continguts sense l'autorització expressa i per escrit de {company}.",
        ],
      },
      {
        heading: "6. Política d'enllaços",
        body: [
          "El lloc web pot contenir enllaços a llocs de tercers. {company} no assumeix cap responsabilitat sobre els continguts, informacions o serveis que puguin aparèixer en aquests llocs, que tindran caràcter exclusivament informatiu i no impliquen cap relació entre {company} i les persones o entitats titulars d'aquests continguts.",
          "Qui vulgui establir un enllaç cap a aquest lloc web s'haurà d'abstenir de fer manifestacions falses o inexactes sobre {company} i no inclourà continguts il·lícits o contraris a la bona fe.",
        ],
      },
      {
        heading: "7. Exclusió de garanties i responsabilitat",
        body: [
          "{company} no garanteix la disponibilitat i continuïtat permanent del funcionament del lloc web. En conseqüència, no serà responsable, dins dels límits establerts per la llei, dels danys i perjudicis causats a l'usuari com a conseqüència de la indisponibilitat, errors d'accés o manca de continuïtat del lloc.",
          "{company} no es fa responsable dels possibles errors de seguretat que es puguin produir ni dels possibles danys que es puguin causar al sistema informàtic de l'usuari, als fitxers o documents emmagatzemats en aquest, com a conseqüència de la presència de virus o d'un ús indegut del lloc.",
        ],
      },
      {
        heading: "8. Modificacions",
        body: [
          "{company} es reserva el dret a efectuar, sense avís previ, les modificacions que consideri oportunes al lloc web, podent canviar, suprimir o afegir tant els continguts i serveis que es prestin a través d'aquest com la forma en què apareguin presentats o localitzats.",
        ],
      },
      {
        heading: "9. Protecció de dades",
        body: [
          "El tractament de les dades personals que es recullin a través del lloc web es regeix pel que disposen la nostra Política de privacitat i la nostra Política de cookies, que formen part d'aquest avís legal.",
        ],
      },
      {
        heading: "10. Legislació aplicable i jurisdicció",
        body: [
          "La relació entre {company} i l'usuari es regirà per la normativa espanyola vigent. Per a la resolució de qualsevol controvèrsia, les parts se sotmetran als jutjats i tribunals que resultin competents conforme a dret.",
        ],
      },
    ],
  },
  privacy: {
    title: "Política de privacitat",
    updatedLabel: "Última actualització",
    reviewNote:
      "Plantilla orientativa conforme al RGPD (UE 2016/679) i a la LOPDGDD. Revisa-la amb un professional i adapta-la al teu tractament real de dades.",
    sections: [
      {
        heading: "1. Responsable del tractament",
        body: [
          "El responsable del tractament de les teves dades personals és {company}, amb NIF {taxId}, domicili a {address} i correu electrònic de contacte {email}.",
          "A {company} ens comprometem a protegir la teva privacitat i a tractar les teves dades personals de manera lícita, lleial i transparent, conforme al Reglament (UE) 2016/679 (RGPD) i a la Llei Orgànica 3/2018 de Protecció de Dades Personals i garantia dels drets digitals (LOPDGDD).",
        ],
      },
      {
        heading: "2. Dades personals que tractem",
        body: [
          "Tractem les dades que ens facilites voluntàriament en contactar-nos o reservar una trucada, que poden incloure: dades identificatives i de contacte (nom, cognoms, correu electrònic, telèfon), dades professionals (empresa, càrrec, sector) i qualsevol informació que decideixis incloure en el teu missatge.",
          "També podem tractar dades de navegació obtingudes mitjançant cookies i tecnologies similars, conforme a la nostra Política de cookies.",
          "No tractem categories especials de dades. Et preguem que no ens facilitis dades sensibles a través dels formularis o canals de contacte.",
        ],
      },
      {
        heading: "3. Finalitat del tractament",
        body: [
          "Tractem les teves dades amb les finalitats següents: (i) atendre les teves sol·licituds, consultes i peticions d'informació; (ii) gestionar la reserva de trucades i la relació comercial o precontractual; (iii) elaborar i enviar-te propostes de serveis; i (iv) si escau, i amb el teu consentiment, remetre't comunicacions sobre els nostres serveis.",
          "No es prendran decisions automatitzades que produeixin efectes jurídics sobre tu basades únicament en el tractament automatitzat de les teves dades.",
        ],
      },
      {
        heading: "4. Base jurídica del tractament",
        body: [
          "La base jurídica per al tractament de les teves dades és: (i) el teu consentiment, prestat en contactar-nos o reservar una trucada; (ii) l'aplicació de mesures precontractuals adoptades a petició teva; i (iii) l'interès legítim de {company} a respondre les teves consultes i gestionar la relació comercial.",
          "El consentiment prestat es podrà retirar en qualsevol moment, sense que això afecti la licitud del tractament previ a la seva retirada.",
        ],
      },
      {
        heading: "5. Termini de conservació",
        body: [
          "Conservarem les teves dades personals mentre es mantingui la relació amb {company} i, un cop finalitzada, durant els terminis legalment exigibles per atendre possibles responsabilitats. Quan les dades deixin de ser necessàries per a les finalitats indicades, se suprimiran mitjançant mesures de seguretat adequades.",
        ],
      },
      {
        heading: "6. Destinataris i encarregats del tractament",
        body: [
          "No cedirem les teves dades a tercers, llevat d'obligació legal o quan sigui necessari per a la prestació del servei.",
          "Per al funcionament del lloc i la gestió de les sol·licituds podem recórrer a proveïdors de serveis (per exemple, allotjament web, eina de reserva de cites, missatgeria i correu electrònic) que actuen com a encarregats del tractament i amb els quals s'han subscrit els contractes corresponents conforme a l'article 28 del RGPD.",
        ],
      },
      {
        heading: "7. Transferències internacionals de dades",
        body: [
          "Alguns dels nostres proveïdors poden estar ubicats fora de l'Espai Econòmic Europeu (EEE). En aquests casos, les transferències internacionals es realitzaran amb les garanties adequades previstes al RGPD, com les clàusules contractuals tipus aprovades per la Comissió Europea o decisions d'adequació.",
        ],
      },
      {
        heading: "8. Els teus drets",
        body: [
          "Com a titular de les dades, tens dret a: accedir a les teves dades personals; sol·licitar-ne la rectificació o supressió; sol·licitar la limitació del seu tractament; oposar-te al tractament; sol·licitar la portabilitat de les teves dades; i a no ser objecte de decisions individuals automatitzades.",
          "Així mateix, tens dret a retirar el consentiment prestat en qualsevol moment.",
        ],
      },
      {
        heading: "9. Com exercir els teus drets i reclamacions",
        body: [
          "Pots exercir els teus drets adreçant-te per escrit a {company}, a l'adreça {address} o mitjançant correu electrònic a {email}, indicant el dret que vols exercir i adjuntant, si escau, document que acrediti la teva identitat.",
          "Si consideres que el tractament de les teves dades no s'ajusta a la normativa, tens dret a presentar una reclamació davant l'Agència Espanyola de Protecció de Dades (AEPD), amb domicili a C/ Jorge Juan, 6, 28001 Madrid, o a través de la seva seu electrònica (www.aepd.es).",
        ],
      },
      {
        heading: "10. Mesures de seguretat",
        body: [
          "{company} ha adoptat les mesures tècniques i organitzatives necessàries per garantir la seguretat, integritat i confidencialitat de les dades personals, evitant-ne l'alteració, pèrdua, tractament o accés no autoritzat, conforme a l'estat de la tècnica.",
        ],
      },
      {
        heading: "11. Veracitat de les dades",
        body: [
          "L'usuari garanteix que les dades facilitades són veraces, exactes i actualitzades, i es responsabilitza de comunicar qualsevol modificació d'aquestes. Serà responsable de les informacions falses o inexactes que proporcioni i dels perjudicis que això causi a {company} o a tercers.",
        ],
      },
      {
        heading: "12. Canvis en la política de privacitat",
        body: [
          "{company} es reserva el dret a modificar aquesta política de privacitat per adaptar-la a novetats legislatives o jurisprudencials, així com a pràctiques del sector. Qualsevol canvi es publicarà en aquesta mateixa pàgina, indicant la data de l'última actualització.",
        ],
      },
    ],
  },
  cookies: {
    title: "Política de cookies",
    updatedLabel: "Última actualització",
    reviewNote:
      "Plantilla orientativa conforme a la guia de l'AEPD. Ajusta el llistat de cookies a les que realment faci servir el teu lloc i els teus proveïdors.",
    sections: [
      {
        heading: "1. Què són les cookies?",
        body: [
          "Les cookies són petits arxius de text que els llocs web emmagatzemen al dispositiu de l'usuari (ordinador, tauleta o mòbil) quan els visita. Permeten, entre altres coses, recordar informació sobre la visita, millorar l'experiència de navegació i obtenir informació estadística sobre l'ús del lloc.",
        ],
      },
      {
        heading: "2. Tipus de cookies",
        body: [
          "Segons qui les gestioni: cookies pròpies (gestionades pel titular del lloc) i cookies de tercers (gestionades per entitats alienes).",
          "Segons la seva finalitat: cookies tècniques o necessàries (imprescindibles per al funcionament del lloc), cookies de preferències o personalització, cookies d'anàlisi o mesura (estadístiques d'ús) i cookies de publicitat.",
          "Segons la seva durada: cookies de sessió (s'eliminen en tancar el navegador) i cookies persistents (romanen durant un període determinat).",
        ],
      },
      {
        heading: "3. Cookies que utilitza aquest lloc",
        body: [
          "Cookies tècniques i necessàries: imprescindibles per al funcionament correcte del lloc i per recordar la teva preferència respecte al consentiment de cookies. Estan exemptes de consentiment.",
          "Contingut de tercers: en utilitzar l'eina de reserva de cites es pot carregar contingut del proveïdor corresponent, que pot instal·lar les seves pròpies cookies. Et recomanem consultar la política de cookies d'aquest proveïdor per conèixer-ne el detall.",
          "Aquest lloc no instal·la cookies de publicitat. Si en el futur s'incorporen cookies d'anàlisi o de tercers addicionals, s'actualitzarà aquesta política i, si escau, el sistema de consentiment.",
        ],
      },
      {
        heading: "4. Consentiment",
        body: [
          "En accedir per primera vegada al lloc web es mostra un avís que et permet acceptar o rebutjar les cookies no essencials. Les cookies tècniques o necessàries s'instal·len en tot cas per ser imprescindibles. Pots modificar la teva elecció en qualsevol moment eliminant les cookies des del teu navegador.",
        ],
      },
      {
        heading: "5. Com configurar o desactivar les cookies",
        body: [
          "Pots permetre, bloquejar o eliminar les cookies instal·lades al teu dispositiu a través de la configuració de les opcions del teu navegador. Tot seguit trobaràs els enllaços d'ajuda dels navegadors més habituals:",
          "Google Chrome: support.google.com/chrome/answer/95647 · Mozilla Firefox: support.mozilla.org/kb/cookies · Safari: support.apple.com/es-es/guide/safari · Microsoft Edge: support.microsoft.com/microsoft-edge.",
          "Tingues en compte que la desactivació de determinades cookies pot afectar el funcionament correcte d'algunes seccions del lloc.",
        ],
      },
      {
        heading: "6. Cookies de tercers",
        body: [
          "Els serveis de tercers utilitzats en aquest lloc (com l'eina de reserva de cites) són aliens a {company} i disposen de les seves pròpies polítiques de privacitat i de cookies. {company} no controla ni es responsabilitza del contingut i veracitat d'aquestes polítiques.",
        ],
      },
      {
        heading: "7. Actualitzacions de la política de cookies",
        body: [
          "{company} pot modificar aquesta política de cookies en funció de noves exigències legals o per canvis en les cookies utilitzades. Per això, et recomanem revisar-la cada vegada que accedeixis al lloc. La data de l'última actualització figura a l'inici d'aquest document.",
        ],
      },
    ],
  },
};

const en: LegalBundle = {
  legal: {
    title: "Legal notice",
    updatedLabel: "Last updated",
    reviewNote:
      "Indicative template based on Spanish LSSI-CE. Have it reviewed by a professional and complete the company data before publishing.",
    sections: [
      {
        heading: "1. General information and ownership",
        body: [
          "In compliance with Article 10 of Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), the owner of this website is:",
          "Owner: {company}. Tax ID: {taxId}. Registered address: {address}. Email: {email}. Website: {url}.",
          "Accessing and using the website confers user status and implies full acceptance of all clauses set out in this legal notice.",
        ],
      },
      {
        heading: "2. Purpose",
        body: [
          "This legal notice governs access to, browsing of and use of the website, as well as the liabilities arising from the use of its content. Through the site, {company} provides information about its AI and automation consulting and implementation services for companies.",
          "{company} reserves the right to modify the presentation, configuration and content of the website, as well as the conditions required to access and use it, at any time and without prior notice.",
        ],
      },
      {
        heading: "3. Conditions of access and use",
        body: [
          "Access to the website is free of charge, except for the cost of connecting via the telecommunications network provided by the user's access provider.",
          "The user undertakes to make appropriate and lawful use of the website and its content, in accordance with applicable law, good faith and public order.",
        ],
      },
      {
        heading: "4. User obligations",
        body: [
          "The user agrees not to use the website or its content for unlawful purposes or effects, harmful to the rights and interests of third parties, or that may in any way damage, disable, overload or impair the normal use of the site.",
          "The user also agrees not to introduce or spread programs, viruses or any element likely to cause damage to the systems, equipment or documents of the owner or third parties.",
        ],
      },
      {
        heading: "5. Intellectual and industrial property",
        body: [
          "All website content (texts, photographs, graphics, images, icons, technology, software, links, trademarks, logos, trade names and other audiovisual or audio content, as well as its graphic design and source code) is owned by {company} or by third parties who have authorised its use, and none of the exploitation rights over it shall be deemed assigned to the user.",
          "Reproduction, distribution, public communication, transformation or any other form of exploitation, in whole or in part, of the content without the express written authorisation of {company} is strictly prohibited.",
        ],
      },
      {
        heading: "6. Links policy",
        body: [
          "The website may contain links to third-party sites. {company} accepts no responsibility for the content, information or services that may appear on such sites, which are purely informational and do not imply any relationship between {company} and the owners of such content.",
          "Anyone wishing to set up a link to this website must refrain from making false or inaccurate statements about {company} and must not include unlawful content or content contrary to good faith.",
        ],
      },
      {
        heading: "7. Disclaimer of warranties and liability",
        body: [
          "{company} does not guarantee the permanent availability and continuity of the website's operation. Accordingly, within the limits established by law, it shall not be liable for any damages caused to the user as a result of unavailability, access failures or lack of continuity of the site.",
          "{company} is not responsible for any security errors that may occur or for any damage that may be caused to the user's computer system, files or documents stored therein as a result of the presence of viruses or improper use of the site.",
        ],
      },
      {
        heading: "8. Changes",
        body: [
          "{company} reserves the right to make, without prior notice, any changes it deems appropriate to the website, and may change, remove or add both the content and services provided through it and the way in which they are presented or located.",
        ],
      },
      {
        heading: "9. Data protection",
        body: [
          "The processing of personal data collected through the website is governed by our Privacy policy and our Cookie policy, which form part of this legal notice.",
        ],
      },
      {
        heading: "10. Applicable law and jurisdiction",
        body: [
          "The relationship between {company} and the user shall be governed by applicable Spanish law. For the resolution of any dispute, the parties shall submit to the courts with competent jurisdiction under the law.",
        ],
      },
    ],
  },
  privacy: {
    title: "Privacy policy",
    updatedLabel: "Last updated",
    reviewNote:
      "Indicative template based on the GDPR (EU 2016/679) and Spanish LOPDGDD. Have it reviewed by a professional and adapt it to your actual data processing.",
    sections: [
      {
        heading: "1. Data controller",
        body: [
          "The controller of your personal data is {company}, tax ID {taxId}, registered address {address} and contact email {email}.",
          "At {company} we are committed to protecting your privacy and processing your personal data lawfully, fairly and transparently, in accordance with Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018 on the Protection of Personal Data and guarantee of digital rights (LOPDGDD).",
        ],
      },
      {
        heading: "2. Personal data we process",
        body: [
          "We process the data you voluntarily provide when contacting us or booking a call, which may include: identification and contact data (first name, surname, email, phone), professional data (company, role, sector) and any information you choose to include in your message.",
          "We may also process browsing data obtained through cookies and similar technologies, in accordance with our Cookie policy.",
          "We do not process special categories of data. Please do not provide sensitive data through our forms or contact channels.",
        ],
      },
      {
        heading: "3. Purpose of processing",
        body: [
          "We process your data for the following purposes: (i) to handle your requests, enquiries and information requests; (ii) to manage call bookings and the commercial or pre-contractual relationship; (iii) to prepare and send you service proposals; and (iv) where applicable, and with your consent, to send you communications about our services.",
          "No automated decisions producing legal effects on you will be taken based solely on the automated processing of your data.",
        ],
      },
      {
        heading: "4. Legal basis for processing",
        body: [
          "The legal basis for processing your data is: (i) your consent, given when contacting us or booking a call; (ii) the application of pre-contractual measures taken at your request; and (iii) the legitimate interest of {company} in responding to your enquiries and managing the commercial relationship.",
          "The consent given may be withdrawn at any time, without affecting the lawfulness of processing carried out prior to its withdrawal.",
        ],
      },
      {
        heading: "5. Retention period",
        body: [
          "We will keep your personal data for as long as the relationship with {company} is maintained and, once it ends, for the periods legally required to address possible liabilities. When the data is no longer needed for the stated purposes, it will be deleted using appropriate security measures.",
        ],
      },
      {
        heading: "6. Recipients and processors",
        body: [
          "We will not share your data with third parties, except by legal obligation or where necessary to provide the service.",
          "To operate the site and manage requests, we may use service providers (for example, web hosting, the appointment booking tool, messaging and email) that act as data processors and with whom the corresponding contracts have been signed under Article 28 of the GDPR.",
        ],
      },
      {
        heading: "7. International data transfers",
        body: [
          "Some of our providers may be located outside the European Economic Area (EEA). In such cases, international transfers will be carried out with the appropriate safeguards provided for in the GDPR, such as the standard contractual clauses approved by the European Commission or adequacy decisions.",
        ],
      },
      {
        heading: "8. Your rights",
        body: [
          "As the data subject, you have the right to: access your personal data; request its rectification or erasure; request the restriction of its processing; object to the processing; request the portability of your data; and not to be subject to automated individual decisions.",
          "You also have the right to withdraw the consent given at any time.",
        ],
      },
      {
        heading: "9. How to exercise your rights and complaints",
        body: [
          "You can exercise your rights by writing to {company}, at the address {address} or by email to {email}, indicating the right you wish to exercise and attaching, where applicable, a document proving your identity.",
          "If you believe the processing of your data does not comply with the regulations, you have the right to file a complaint with the Spanish Data Protection Agency (AEPD), located at C/ Jorge Juan, 6, 28001 Madrid, or through its electronic office (www.aepd.es).",
        ],
      },
      {
        heading: "10. Security measures",
        body: [
          "{company} has adopted the technical and organisational measures necessary to ensure the security, integrity and confidentiality of personal data, preventing its alteration, loss, unauthorised processing or access, in accordance with the state of the art.",
        ],
      },
      {
        heading: "11. Accuracy of the data",
        body: [
          "The user warrants that the data provided is truthful, accurate and up to date, and is responsible for notifying any changes to it. The user shall be responsible for any false or inaccurate information provided and for any damage this causes to {company} or third parties.",
        ],
      },
      {
        heading: "12. Changes to the privacy policy",
        body: [
          "{company} reserves the right to amend this privacy policy to adapt it to legislative or case-law developments, as well as industry practices. Any change will be published on this same page, indicating the date of the last update.",
        ],
      },
    ],
  },
  cookies: {
    title: "Cookie policy",
    updatedLabel: "Last updated",
    reviewNote:
      "Indicative template based on AEPD guidance. Adjust the list of cookies to those your site and providers actually use.",
    sections: [
      {
        heading: "1. What are cookies?",
        body: [
          "Cookies are small text files that websites store on the user's device (computer, tablet or mobile) when they visit. Among other things, they allow the site to remember information about the visit, improve the browsing experience and obtain statistical information about site usage.",
        ],
      },
      {
        heading: "2. Types of cookies",
        body: [
          "By who manages them: first-party cookies (managed by the site owner) and third-party cookies (managed by external entities).",
          "By purpose: technical or necessary cookies (essential for the site to work), preference or personalisation cookies, analytics or measurement cookies (usage statistics) and advertising cookies.",
          "By duration: session cookies (deleted when the browser is closed) and persistent cookies (remain for a set period).",
        ],
      },
      {
        heading: "3. Cookies used by this site",
        body: [
          "Technical and necessary cookies: essential for the correct operation of the site and to remember your cookie consent preference. They are exempt from consent.",
          "Third-party content: using the appointment booking tool may load content from the relevant provider, which can set its own cookies. We recommend reviewing that provider's cookie policy for details.",
          "This site does not set advertising cookies. If analytics or additional third-party cookies are added in the future, this policy and, where applicable, the consent system will be updated.",
        ],
      },
      {
        heading: "4. Consent",
        body: [
          "On first accessing the website, a notice is shown allowing you to accept or reject non-essential cookies. Technical or necessary cookies are set in any case as they are essential. You can change your choice at any time by deleting cookies from your browser.",
        ],
      },
      {
        heading: "5. How to configure or disable cookies",
        body: [
          "You can allow, block or delete the cookies installed on your device through your browser's settings. Below are help links for the most common browsers:",
          "Google Chrome: support.google.com/chrome/answer/95647 · Mozilla Firefox: support.mozilla.org/kb/cookies · Safari: support.apple.com/guide/safari · Microsoft Edge: support.microsoft.com/microsoft-edge.",
          "Please note that disabling certain cookies may affect the proper functioning of some sections of the site.",
        ],
      },
      {
        heading: "6. Third-party cookies",
        body: [
          "The third-party services used on this site (such as the appointment booking tool) are external to {company} and have their own privacy and cookie policies. {company} does not control or take responsibility for the content and accuracy of those policies.",
        ],
      },
      {
        heading: "7. Updates to the cookie policy",
        body: [
          "{company} may amend this cookie policy in light of new legal requirements or changes to the cookies used. We therefore recommend reviewing it each time you access the site. The date of the last update appears at the top of this document.",
        ],
      },
    ],
  },
};

const bundles: Record<Locale, LegalBundle> = { es, ca, en };

export function getLegal(lang: Locale): LegalBundle {
  return bundles[lang];
}
