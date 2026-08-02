/**
 * Contenido bilingüe del sitio GARABS.
 * `es` define la forma; `en` debe respetarla (tipado con `typeof es`).
 */

export const es = {
  htmlLang: "es",
  brand: {
    name: "GARABS",
    legal: "GARABS LLC",
    tagline: "Tecnología que impulsa tu negocio",
  },
  nav: {
    home: "Inicio",
    services: "Servicios",
    process: "Cómo trabajamos",
    about: "Sobre GARABS",
    faq: "Preguntas frecuentes",
    contact: "Contacto",
  },
  cta: {
    consult: "Solicita una consulta",
    services: "Conoce nuestros servicios",
    talk: "Hablemos de tu proyecto",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    langLabel: "Cambiar idioma",
  },
  hero: {
    eyebrow: "Presencia digital, sin complicaciones",
    title: "Tu negocio merece una presencia digital profesional.",
    body: "GARABS ayuda a pequeños negocios y emprendedores a crear, organizar y administrar su presencia digital. Nos encargamos de la parte técnica y explicamos cada paso de manera clara y fácil de entender.",
  },
  approach: {
    eyebrow: "Nuestro enfoque",
    title: "Lo que puedes esperar de GARABS",
    body: "Trabajamos con calma, con orden y con explicaciones claras. Sin tecnicismos innecesarios y sin decisiones tomadas a tus espaldas.",
    items: [
      {
        title: "Comunicación clara",
        body: "Explicamos cada paso en lenguaje sencillo, para que entiendas qué se hace y por qué.",
      },
      {
        title: "Atención personalizada",
        body: "Escuchamos tu negocio antes de proponer nada. Cada proyecto se plantea a tu medida.",
      },
      {
        title: "Soluciones prácticas",
        body: "Elegimos lo que realmente necesitas, sin agregar complejidad que no aporta.",
      },
      {
        title: "Acompañamiento real",
        body: "Seguimos disponibles después de publicar, para dudas, ajustes y mantenimiento.",
      },
    ],
  },
  services: {
    eyebrow: "Servicios principales",
    title: "Todo lo necesario para estar presente en línea",
    body: "Desde el sitio web hasta el correo profesional y el mantenimiento posterior.",
    all: "Ver todos los servicios",
    items: [
      {
        slug: "sitios-web",
        icon: "monitor",
        title: "Sitios web profesionales",
        short:
          "Sitios claros, rápidos y adaptados a teléfonos, tablets y computadoras.",
        detail:
          "Diseñamos y construimos un sitio web que representa tu negocio con claridad: información ordenada, textos fáciles de leer y una experiencia cuidada en cualquier pantalla.",
        problems: [
          "No tienes sitio web o el actual está desactualizado.",
          "Tu sitio no se ve bien en teléfonos.",
          "Los clientes no encuentran la información básica de tu negocio.",
        ],
        includes: [
          "Estructura y páginas definidas contigo",
          "Diseño responsive para todas las pantallas",
          "Textos organizados y fáciles de escanear",
          "Publicación y revisión final contigo",
        ],
      },
      {
        slug: "dominios",
        icon: "globe",
        title: "Dominios y configuración técnica",
        short:
          "Registro del dominio, DNS y toda la configuración detrás del sitio.",
        detail:
          "Nos encargamos de registrar o conectar tu dominio y de dejar la configuración técnica funcionando: DNS, certificados y redirecciones, sin que tengas que entender los detalles.",
        problems: [
          "No sabes cómo registrar o renovar un dominio.",
          "Tu dominio está en un lugar y tu sitio en otro.",
          "La configuración técnica quedó a medias.",
        ],
        includes: [
          "Registro o traslado del dominio",
          "Configuración de DNS y certificado seguro",
          "Redirecciones y verificación de funcionamiento",
          "Documentación simple de tus accesos",
        ],
      },
      {
        slug: "correos",
        icon: "mail",
        title: "Correos profesionales",
        short:
          "Direcciones con el nombre de tu negocio, configuradas y listas para usar.",
        detail:
          "Configuramos correos con tu propio dominio y los dejamos funcionando en tu teléfono y tu computadora, con las reglas necesarias para que tus mensajes lleguen bien.",
        problems: [
          "Usas un correo personal para atender clientes.",
          "Tus mensajes llegan a la carpeta de spam.",
          "No sabes cómo configurar el correo en tus dispositivos.",
        ],
        includes: [
          "Creación de buzones con tu dominio",
          "Configuración de registros de envío",
          "Instalación en teléfono y computadora",
          "Explicación de uso paso a paso",
        ],
      },
      {
        slug: "mantenimiento",
        icon: "shield",
        title: "Mantenimiento y soporte",
        short:
          "Actualizaciones, cambios de contenido y ayuda cuando la necesitas.",
        detail:
          "Tu presencia digital necesita cuidado continuo. Nos ocupamos de las actualizaciones, los cambios de contenido y las dudas que aparezcan con el tiempo.",
        problems: [
          "Nadie actualiza tu sitio desde hace tiempo.",
          "Necesitas cambios pequeños y no sabes a quién pedirlos.",
          "Quieres tener a quién preguntar cuando algo falla.",
        ],
        includes: [
          "Revisiones y actualizaciones periódicas",
          "Cambios de contenido e imágenes",
          "Renovaciones de dominio y servicios",
          "Soporte en español e inglés",
        ],
      },
    ],
  },
  flexibility: {
    eyebrow: "Flexibilidad",
    title: "Nos adaptamos a tu forma de trabajar",
    body: "Algunos clientes quieren participar en cada decisión. Otros prefieren delegar y recibir el resultado terminado. Las dos formas están bien y ajustamos el proceso a lo que te resulte cómodo.",
    modes: [
      {
        title: "Quiero participar",
        body: "Revisamos contigo cada etapa, presentamos opciones y decidimos en conjunto.",
      },
      {
        title: "Prefiero delegar",
        body: "Nos ocupamos de todo y te presentamos el resultado listo para revisar.",
      },
    ],
  },
  why: {
    eyebrow: "Razones para elegirnos",
    title: "Un acompañamiento cercano y honesto",
    items: [
      {
        title: "Explicaciones sin tecnicismos",
        body: "Traducimos lo técnico a un lenguaje que puedes entender y decidir con confianza.",
      },
      {
        title: "Atención en español e inglés",
        body: "Te atendemos en el idioma con el que te sientas más cómodo.",
      },
      {
        title: "Trabajo ordenado",
        body: "Sabes en qué etapa está tu proyecto y qué sigue en cada momento.",
      },
      {
        title: "Pensado para negocios pequeños",
        body: "Propuestas prácticas, del tamaño adecuado para lo que tu negocio necesita hoy.",
      },
    ],
  },
  finalCta: {
    title: "¿Conversamos sobre tu presencia digital?",
    body: "Cuéntanos qué necesita tu negocio. Revisamos tu situación y te explicamos las opciones con claridad, sin compromiso.",
  },
  servicesPage: {
    eyebrow: "Servicios",
    title: "Servicios pensados para negocios reales",
    body: "Cada servicio se puede contratar por separado o combinarse según lo que tu negocio necesite.",
    problemsLabel: "Problemas que resuelve",
    includesLabel: "Qué incluye",
  },
  processPage: {
    eyebrow: "Cómo trabajamos",
    title: "Un proceso claro, de principio a fin",
    body: "Así avanzamos en cada proyecto. Cada etapa tiene un objetivo concreto y siempre sabes en cuál estamos.",
    steps: [
      {
        title: "Conocemos tu negocio",
        body: "Conversamos sobre lo que haces, a quién atiendes y qué esperas lograr en línea.",
      },
      {
        title: "Definimos lo necesario",
        body: "Acordamos el alcance: páginas, dominio, correos y servicios que realmente hacen falta.",
      },
      {
        title: "Diseñamos y configuramos",
        body: "Construimos el sitio y dejamos lista la parte técnica detrás de él.",
      },
      {
        title: "Revisamos contigo",
        body: "Te mostramos el resultado, escuchamos comentarios y hacemos los ajustes acordados.",
      },
      {
        title: "Publicamos",
        body: "Ponemos todo en línea y verificamos que funcione correctamente en distintos dispositivos.",
      },
      {
        title: "Seguimos disponibles",
        body: "Continuamos acompañándote con mantenimiento, cambios y soporte cuando lo necesites.",
      },
    ],
  },
  aboutPage: {
    eyebrow: "Sobre GARABS",
    title: "Tecnología explicada con claridad",
    intro:
      "GARABS LLC nació para acompañar a pequeños negocios y emprendedores en algo que suele generar dudas: crear, organizar y administrar su presencia digital.",
    blocks: [
      {
        title: "Nuestro propósito",
        body: "Que cualquier negocio pequeño pueda tener una presencia digital ordenada y profesional, sin tener que aprender de tecnología para lograrlo.",
      },
      {
        title: "Nuestra filosofía",
        body: "Preferimos lo simple y lo bien hecho. Recomendamos solo lo que aporta valor y evitamos complicar decisiones que pueden ser sencillas.",
      },
      {
        title: "Atención personalizada",
        body: "Cada negocio es distinto. Escuchamos primero y ajustamos el proceso al ritmo y al estilo de cada cliente.",
      },
      {
        title: "Adaptación a tu nivel técnico",
        body: "Si sabes de tecnología, hablamos con detalle. Si no, explicamos con ejemplos claros y sin dar nada por supuesto.",
      },
    ],
    commitment: {
      title: "Compromiso con los negocios pequeños",
      body: "Sabemos lo que significa administrar un negocio con recursos ajustados. Por eso proponemos soluciones prácticas y sostenibles, y nos quedamos disponibles después de entregar.",
    },
  },
  faqPage: {
    eyebrow: "Preguntas frecuentes",
    title: "Respuestas a las dudas más comunes",
    body: "Si tu pregunta no aparece aquí, escríbenos y te respondemos con gusto.",
    items: [
      {
        q: "¿Necesito conocimientos técnicos para trabajar con GARABS?",
        a: "No. Nos encargamos de la parte técnica y te explicamos cada paso en lenguaje sencillo. Solo necesitas contarnos cómo funciona tu negocio.",
      },
      {
        q: "¿Cuánto tarda un proyecto?",
        a: "Depende del alcance acordado y de la rapidez con la que recibamos tus contenidos. Al definir el proyecto te damos un tiempo estimado antes de comenzar.",
      },
      {
        q: "¿Ustedes registran el dominio por mí?",
        a: "Sí. Podemos registrar un dominio nuevo o conectar uno que ya tengas, y dejar la configuración funcionando. El dominio queda siempre a nombre de tu negocio.",
      },
      {
        q: "¿Pueden configurar correos con mi propio dominio?",
        a: "Sí. Creamos las direcciones, configuramos los registros necesarios y dejamos el correo listo en tu teléfono y tu computadora.",
      },
      {
        q: "¿Pueden trabajar sobre un sitio que ya existe?",
        a: "Sí. Revisamos lo que tienes y te decimos con honestidad si conviene mejorarlo o rehacerlo, explicando las ventajas de cada opción.",
      },
      {
        q: "¿Ofrecen mantenimiento después de publicar?",
        a: "Sí. Puedes contratar mantenimiento para actualizaciones, cambios de contenido, renovaciones y soporte continuo.",
      },
      {
        q: "¿Cómo funcionan los pagos?",
        a: "Acordamos las condiciones por escrito antes de comenzar, según el alcance del proyecto. No publicamos precios fijos porque cada caso es distinto.",
      },
      {
        q: "¿Atienden en español y en inglés?",
        a: "Sí. Puedes comunicarte con nosotros en el idioma que prefieras durante todo el proyecto.",
      },
    ],
  },
  contactPage: {
    eyebrow: "Contacto",
    title: "Cuéntanos qué necesita tu negocio",
    body: "Completa el formulario y te responderemos para conversar sobre tu proyecto.",
    demoNotice:
      "Este formulario está en modo demostración: todavía no está conectado a un servicio de envío, por lo que los datos no se envían ni se guardan.",
    demoResult:
      "Modo demostración: no se envió ningún mensaje. Conecta un servicio de envío para activar el formulario.",
    fields: {
      name: "Nombre",
      business: "Nombre del negocio",
      email: "Correo electrónico",
      phone: "Teléfono",
      language: "Idioma preferido",
      helpType: "Tipo de ayuda",
      description: "Cuéntanos brevemente qué necesitas",
      hasSite: "¿Ya tienes sitio web?",
      siteUrl: "URL actual",
      preferredContact: "Método preferido de contacto",
      optional: "opcional",
    },
    options: {
      languages: ["Español", "Inglés"],
      help: [
        "Sitio web profesional",
        "Dominio y configuración técnica",
        "Correos profesionales",
        "Mantenimiento y soporte",
        "Aún no lo tengo claro",
      ],
      yes: "Sí",
      no: "No",
      contact: ["Correo electrónico", "Teléfono", "Mensaje de texto"],
      choose: "Selecciona una opción",
    },
    submit: "Enviar solicitud",
  },
  legal: {
    privacy: {
      title: "Política de privacidad",
      body: "Esta política explica cómo GARABS LLC trata la información que recibe a través de este sitio.",
      sections: [
        {
          title: "Información que recibimos",
          body: "Recibimos únicamente la información que decides compartir con nosotros al contactarnos: nombre, nombre del negocio, correo, teléfono y la descripción de tu consulta. Actualmente el formulario de contacto está en modo demostración y no envía ni almacena datos.",
        },
        {
          title: "Uso de la información",
          body: "Usamos tus datos exclusivamente para responder tu consulta y dar seguimiento al servicio solicitado. No vendemos ni compartimos tu información con terceros con fines comerciales.",
        },
        {
          title: "Conservación y acceso",
          body: "Conservamos la información el tiempo necesario para atender tu solicitud. Puedes pedirnos en cualquier momento que actualicemos o eliminemos tus datos.",
        },
        {
          title: "Contacto",
          body: "Si tienes dudas sobre esta política, escríbenos a través de la página de contacto.",
        },
      ],
    },
    terms: {
      title: "Términos de servicio",
      body: "Estos términos describen las condiciones generales de uso de este sitio y de los servicios de GARABS LLC.",
      sections: [
        {
          title: "Uso del sitio",
          body: "El contenido de este sitio es informativo. Puede actualizarse en cualquier momento sin aviso previo.",
        },
        {
          title: "Servicios",
          body: "El alcance, los plazos y las condiciones de cada servicio se acuerdan por escrito con cada cliente antes de comenzar el trabajo.",
        },
        {
          title: "Responsabilidades del cliente",
          body: "El cliente es responsable de proporcionar la información y los materiales necesarios, así como de mantener sus accesos y renovaciones al día cuando estén a su cargo.",
        },
        {
          title: "Propiedad",
          body: "Los dominios y las cuentas contratadas quedan a nombre del cliente. Las marcas y logotipos mostrados en este sitio pertenecen a sus titulares.",
        },
      ],
    },
  },
  footer: {
    description:
      "GARABS LLC acompaña a pequeños negocios y emprendedores a crear, organizar y administrar su presencia digital.",
    navTitle: "Navegación",
    legalTitle: "Legal",
    languages: "Atención en español e inglés",
    rights: "Todos los derechos reservados.",
  },
  meta: {
    home: {
      title: "GARABS LLC — Presencia digital para negocios pequeños",
      description:
        "GARABS ayuda a pequeños negocios y emprendedores a crear, organizar y administrar su presencia digital: sitios web, dominios, correos y soporte.",
    },
    services: {
      title: "Servicios — GARABS LLC",
      description:
        "Sitios web profesionales, dominios y configuración técnica, correos profesionales, mantenimiento y soporte para negocios pequeños.",
    },
    process: {
      title: "Cómo trabajamos — GARABS LLC",
      description:
        "Un proceso claro en seis etapas: conocemos tu negocio, definimos lo necesario, diseñamos, revisamos contigo, publicamos y seguimos disponibles.",
    },
    about: {
      title: "Sobre GARABS — GARABS LLC",
      description:
        "Nuestro propósito, nuestra filosofía y nuestra forma de acompañar a pequeños negocios con claridad y atención personalizada.",
    },
    faq: {
      title: "Preguntas frecuentes — GARABS LLC",
      description:
        "Respuestas sobre dominios, correos profesionales, tiempos, mantenimiento, pagos y atención en español e inglés.",
    },
    contact: {
      title: "Contacto — GARABS LLC",
      description:
        "Cuéntanos qué necesita tu negocio y conversemos sobre tu presencia digital. Atención en español e inglés.",
    },
    privacy: {
      title: "Política de privacidad — GARABS LLC",
      description:
        "Cómo GARABS LLC trata la información recibida a través de este sitio.",
    },
    terms: {
      title: "Términos de servicio — GARABS LLC",
      description:
        "Condiciones generales de uso del sitio y de los servicios de GARABS LLC.",
    },
  },
};

export type Content = typeof es;

export const en: Content = {
  htmlLang: "en",
  brand: {
    name: "GARABS",
    legal: "GARABS LLC",
    tagline: "Technology that moves your business forward",
  },
  nav: {
    home: "Home",
    services: "Services",
    process: "How we work",
    about: "About GARABS",
    faq: "FAQ",
    contact: "Contact",
  },
  cta: {
    consult: "Request a consultation",
    services: "See our services",
    talk: "Let's talk about your project",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    langLabel: "Change language",
  },
  hero: {
    eyebrow: "Digital presence, made simple",
    title: "Your business deserves a professional digital presence.",
    body: "GARABS helps small businesses and entrepreneurs create, organize, and manage their digital presence. We handle the technical side and explain every step clearly, in plain language.",
  },
  approach: {
    eyebrow: "Our approach",
    title: "What you can expect from GARABS",
    body: "We work calmly, in an orderly way, and with clear explanations. No unnecessary jargon and no decisions made behind your back.",
    items: [
      {
        title: "Clear communication",
        body: "We explain every step in plain language, so you know what is being done and why.",
      },
      {
        title: "Personal attention",
        body: "We listen to your business before proposing anything. Every project is shaped around you.",
      },
      {
        title: "Practical solutions",
        body: "We choose what you actually need, without adding complexity that brings nothing.",
      },
      {
        title: "Real support",
        body: "We stay available after launch for questions, adjustments, and maintenance.",
      },
    ],
  },
  services: {
    eyebrow: "Core services",
    title: "Everything you need to be present online",
    body: "From the website itself to professional email and ongoing maintenance.",
    all: "See all services",
    items: [
      {
        slug: "sitios-web",
        icon: "monitor",
        title: "Professional websites",
        short:
          "Clear, fast sites that work well on phones, tablets, and computers.",
        detail:
          "We design and build a website that represents your business clearly: organized information, readable text, and a careful experience on any screen.",
        problems: [
          "You have no website, or the current one is outdated.",
          "Your site does not look good on phones.",
          "Customers cannot find basic information about your business.",
        ],
        includes: [
          "Structure and pages defined with you",
          "Responsive design for every screen",
          "Organized, easy-to-scan copy",
          "Launch and a final review together",
        ],
      },
      {
        slug: "dominios",
        icon: "globe",
        title: "Domains and technical setup",
        short: "Domain registration, DNS, and all the setup behind the site.",
        detail:
          "We register or connect your domain and get the technical setup working: DNS, certificates, and redirects, without you needing to know the details.",
        problems: [
          "You do not know how to register or renew a domain.",
          "Your domain is in one place and your site in another.",
          "The technical setup was left half finished.",
        ],
        includes: [
          "Domain registration or transfer",
          "DNS and secure certificate setup",
          "Redirects and verification",
          "Simple documentation of your accounts",
        ],
      },
      {
        slug: "correos",
        icon: "mail",
        title: "Professional email",
        short:
          "Addresses with your business name, configured and ready to use.",
        detail:
          "We set up email on your own domain and get it working on your phone and computer, with the rules needed so your messages arrive properly.",
        problems: [
          "You use a personal email address with customers.",
          "Your messages land in the spam folder.",
          "You do not know how to set up email on your devices.",
        ],
        includes: [
          "Mailboxes on your own domain",
          "Sending records configured",
          "Setup on phone and computer",
          "Step-by-step guidance on how to use it",
        ],
      },
      {
        slug: "mantenimiento",
        icon: "shield",
        title: "Maintenance and support",
        short: "Updates, content changes, and help whenever you need it.",
        detail:
          "Your digital presence needs ongoing care. We handle updates, content changes, and the questions that come up over time.",
        problems: [
          "Nobody has updated your site in a long time.",
          "You need small changes and do not know who to ask.",
          "You want someone to turn to when something breaks.",
        ],
        includes: [
          "Regular reviews and updates",
          "Content and image changes",
          "Domain and service renewals",
          "Support in Spanish and English",
        ],
      },
    ],
  },
  flexibility: {
    eyebrow: "Flexibility",
    title: "We adapt to the way you work",
    body: "Some clients want to take part in every decision. Others prefer to delegate and receive the finished result. Both are fine, and we shape the process around what feels comfortable to you.",
    modes: [
      {
        title: "I want to be involved",
        body: "We review each stage with you, present options, and decide together.",
      },
      {
        title: "I prefer to delegate",
        body: "We take care of everything and present the result ready for your review.",
      },
    ],
  },
  why: {
    eyebrow: "Why choose us",
    title: "Close, honest support",
    items: [
      {
        title: "Explanations without jargon",
        body: "We translate the technical side into language you can understand and decide on with confidence.",
      },
      {
        title: "Service in Spanish and English",
        body: "We work with you in the language you feel most comfortable in.",
      },
      {
        title: "Organized work",
        body: "You always know which stage your project is in and what comes next.",
      },
      {
        title: "Built for small businesses",
        body: "Practical proposals, sized for what your business needs today.",
      },
    ],
  },
  finalCta: {
    title: "Shall we talk about your digital presence?",
    body: "Tell us what your business needs. We review your situation and explain the options clearly, with no obligation.",
  },
  servicesPage: {
    eyebrow: "Services",
    title: "Services designed for real businesses",
    body: "Each service can be hired on its own or combined, depending on what your business needs.",
    problemsLabel: "Problems it solves",
    includesLabel: "What it includes",
  },
  processPage: {
    eyebrow: "How we work",
    title: "A clear process, from start to finish",
    body: "This is how every project moves forward. Each stage has a concrete goal and you always know where we are.",
    steps: [
      {
        title: "We get to know your business",
        body: "We talk about what you do, who you serve, and what you want to achieve online.",
      },
      {
        title: "We define what is needed",
        body: "We agree on the scope: pages, domain, email, and the services that are actually required.",
      },
      {
        title: "We design and configure",
        body: "We build the site and get the technical side behind it ready.",
      },
      {
        title: "We review it with you",
        body: "We show you the result, listen to your feedback, and make the agreed adjustments.",
      },
      {
        title: "We launch",
        body: "We put everything online and verify that it works correctly across devices.",
      },
      {
        title: "We stay available",
        body: "We keep supporting you with maintenance, changes, and help whenever you need it.",
      },
    ],
  },
  aboutPage: {
    eyebrow: "About GARABS",
    title: "Technology explained clearly",
    intro:
      "GARABS LLC exists to support small businesses and entrepreneurs with something that often raises questions: creating, organizing, and managing their digital presence.",
    blocks: [
      {
        title: "Our purpose",
        body: "That any small business can have an organized, professional digital presence without having to learn technology to get there.",
      },
      {
        title: "Our philosophy",
        body: "We prefer things simple and well made. We recommend only what adds value and avoid complicating decisions that can stay simple.",
      },
      {
        title: "Personal attention",
        body: "Every business is different. We listen first and adjust the process to each client's pace and style.",
      },
      {
        title: "Matching your technical level",
        body: "If you know technology, we go into detail. If not, we explain with clear examples and take nothing for granted.",
      },
    ],
    commitment: {
      title: "Commitment to small businesses",
      body: "We know what it means to run a business with tight resources. That is why we propose practical, sustainable solutions and stay available after delivery.",
    },
  },
  faqPage: {
    eyebrow: "FAQ",
    title: "Answers to the most common questions",
    body: "If your question is not here, write to us and we will gladly answer it.",
    items: [
      {
        q: "Do I need technical knowledge to work with GARABS?",
        a: "No. We handle the technical side and explain every step in plain language. You only need to tell us how your business works.",
      },
      {
        q: "How long does a project take?",
        a: "It depends on the agreed scope and how quickly we receive your content. We give you an estimated timeline before starting.",
      },
      {
        q: "Do you register the domain for me?",
        a: "Yes. We can register a new domain or connect one you already have, and get the setup working. The domain always stays in your business's name.",
      },
      {
        q: "Can you set up email on my own domain?",
        a: "Yes. We create the addresses, configure the required records, and get email working on your phone and computer.",
      },
      {
        q: "Can you work on an existing site?",
        a: "Yes. We review what you have and tell you honestly whether it is better to improve it or rebuild it, explaining the trade-offs.",
      },
      {
        q: "Do you offer maintenance after launch?",
        a: "Yes. You can add maintenance for updates, content changes, renewals, and ongoing support.",
      },
      {
        q: "How do payments work?",
        a: "We agree on the terms in writing before starting, based on the scope of the project. We do not publish fixed prices because every case is different.",
      },
      {
        q: "Do you work in Spanish and English?",
        a: "Yes. You can communicate with us in whichever language you prefer throughout the project.",
      },
    ],
  },
  contactPage: {
    eyebrow: "Contact",
    title: "Tell us what your business needs",
    body: "Fill in the form and we will get back to you to talk about your project.",
    demoNotice:
      "This form is in demonstration mode: it is not connected to a sending service yet, so no data is sent or stored.",
    demoResult:
      "Demonstration mode: no message was sent. Connect a sending service to activate the form.",
    fields: {
      name: "Name",
      business: "Business name",
      email: "Email address",
      phone: "Phone",
      language: "Preferred language",
      helpType: "Type of help",
      description: "Briefly tell us what you need",
      hasSite: "Do you already have a website?",
      siteUrl: "Current URL",
      preferredContact: "Preferred contact method",
      optional: "optional",
    },
    options: {
      languages: ["Spanish", "English"],
      help: [
        "Professional website",
        "Domain and technical setup",
        "Professional email",
        "Maintenance and support",
        "I am not sure yet",
      ],
      yes: "Yes",
      no: "No",
      contact: ["Email", "Phone", "Text message"],
      choose: "Select an option",
    },
    submit: "Send request",
  },
  legal: {
    privacy: {
      title: "Privacy policy",
      body: "This policy explains how GARABS LLC handles the information it receives through this site.",
      sections: [
        {
          title: "Information we receive",
          body: "We only receive the information you choose to share when contacting us: name, business name, email, phone, and your description. The contact form is currently in demonstration mode and does not send or store data.",
        },
        {
          title: "Use of information",
          body: "We use your data solely to answer your enquiry and follow up on the requested service. We do not sell or share your information with third parties for commercial purposes.",
        },
        {
          title: "Retention and access",
          body: "We keep the information as long as needed to handle your request. You can ask us at any time to update or delete your data.",
        },
        {
          title: "Contact",
          body: "If you have questions about this policy, write to us through the contact page.",
        },
      ],
    },
    terms: {
      title: "Terms of service",
      body: "These terms describe the general conditions for using this site and the services of GARABS LLC.",
      sections: [
        {
          title: "Use of the site",
          body: "The content of this site is informational. It may be updated at any time without prior notice.",
        },
        {
          title: "Services",
          body: "The scope, timelines, and conditions of each service are agreed in writing with each client before work begins.",
        },
        {
          title: "Client responsibilities",
          body: "The client is responsible for providing the required information and materials, and for keeping their own accounts and renewals up to date when those are under their control.",
        },
        {
          title: "Ownership",
          body: "Domains and accounts are registered in the client's name. Brands and logos shown on this site belong to their respective owners.",
        },
      ],
    },
  },
  footer: {
    description:
      "GARABS LLC helps small businesses and entrepreneurs create, organize, and manage their digital presence.",
    navTitle: "Navigation",
    legalTitle: "Legal",
    languages: "Service in Spanish and English",
    rights: "All rights reserved.",
  },
  meta: {
    home: {
      title: "GARABS LLC — Digital presence for small businesses",
      description:
        "GARABS helps small businesses and entrepreneurs create, organize, and manage their digital presence: websites, domains, email, and support.",
    },
    services: {
      title: "Services — GARABS LLC",
      description:
        "Professional websites, domains and technical setup, professional email, maintenance and support for small businesses.",
    },
    process: {
      title: "How we work — GARABS LLC",
      description:
        "A clear six-stage process: we learn your business, define the scope, design, review with you, launch, and stay available.",
    },
    about: {
      title: "About GARABS — GARABS LLC",
      description:
        "Our purpose, our philosophy, and how we support small businesses with clarity and personal attention.",
    },
    faq: {
      title: "FAQ — GARABS LLC",
      description:
        "Answers about domains, professional email, timelines, maintenance, payments, and service in Spanish and English.",
    },
    contact: {
      title: "Contact — GARABS LLC",
      description:
        "Tell us what your business needs and let's talk about your digital presence. Service in Spanish and English.",
    },
    privacy: {
      title: "Privacy policy — GARABS LLC",
      description:
        "How GARABS LLC handles information received through this site.",
    },
    terms: {
      title: "Terms of service — GARABS LLC",
      description:
        "General conditions for using the site and the services of GARABS LLC.",
    },
  },
};

export const dictionaries = { es, en };
export type Lang = keyof typeof dictionaries;
