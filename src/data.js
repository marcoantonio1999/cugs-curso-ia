export const deckSections = [
  "Bienvenida",
  "Por Que Ahora",
  "Perfil Del Alumno",
  "Resultados",
  "Ruta Del Diplomado",
  "Sistema De Valor",
  "Casos De Negocio",
  "Hoja De Ruta",
];

export const audienceProfiles = [
  {
    key: "strategy",
    title: "Direccion y estrategia",
    body: "Personas que toman decisiones comerciales y necesitan criterio para integrar IA sin depender de terceros.",
    signal: "Decision comercial",
  },
  {
    key: "marketing",
    title: "Marketing y growth",
    body: "Equipos que quieren segmentar mejor, optimizar campanas y personalizar experiencias con mas precision.",
    signal: "Performance + creatividad",
  },
  {
    key: "data",
    title: "Analisis y BI",
    body: "Perfiles orientados a datos que buscan convertir informacion operativa en indicadores y modelos utiles.",
    signal: "Datos accionables",
  },
  {
    key: "founder",
    title: "Emprendimiento y ops",
    body: "Lideres que necesitan escalar procesos, automatizar tareas y detectar oportunidades de eficiencia.",
    signal: "Escala operativa",
  },
];

export const courseStats = [
  { label: "Duracion", value: "4 meses" },
  { label: "Formato", value: "100% online" },
  { label: "Horario", value: "Lunes y miercoles" },
  { label: "Carga", value: "120 horas" },
];

export const courseOutcomes = [
  "Aplicar IA en marketing, ventas y experiencia del cliente con criterio de negocio.",
  "Analizar datos, leer indicadores y estructurar dashboards ejecutivos.",
  "Diseñar modelos predictivos de demanda, scoring y comportamiento.",
  "Automatizar procesos comerciales repetitivos con foco en impacto.",
  "Optimizar campanas con evidencia y no solo con intuicion.",
  "Presentar recomendaciones estrategicas respaldadas por datos.",
];

export const courseModules = [
  {
    id: "01",
    title: "IA aplicada a negocios",
    summary: "Fundamentos para entender donde crea valor la IA en marketing, ventas y servicio.",
    topics: [
      "Aplicaciones reales en marketing, ventas y servicio al cliente.",
      "Automatizacion empresarial: bots, RPA y asistentes virtuales.",
      "Analisis del consumidor con segmentacion y deteccion de patrones.",
      "Etica, privacidad y responsabilidad empresarial.",
    ],
  },
  {
    id: "02",
    title: "Analisis de datos para decisiones",
    summary: "Del dato crudo al tablero ejecutivo para entender que esta pasando y que hacer.",
    topics: [
      "Recoleccion y limpieza de datos desde multiples fuentes.",
      "Visualizacion y analisis exploratorio con enfoque practico.",
      "KPIs clave: ROI, ROAS, customer journey y lectura de dashboards.",
      "Casos de negocio en retail, banca y e-commerce.",
    ],
  },
  {
    id: "03",
    title: "Modelos predictivos en marketing",
    summary: "Prediccion, scoring y series temporales para decidir mejor antes de ejecutar.",
    topics: [
      "Prediccion de demanda y comportamiento.",
      "Recomendadores, churn y propension de compra.",
      "Series temporales con tendencias y estacionalidad.",
      "Optimizacion de campanas y personalizacion automatizada.",
    ],
  },
];

export const valueChainStages = [
  {
    label: "Datos",
    title: "Capturar senales del negocio",
    body: "La IA empieza cuando la operacion deja rastro: ventas, trafico, consultas, abandonos, recompra o tiempos de respuesta.",
    metric: "Inputs confiables",
    bullets: ["CRM, e-commerce y pauta", "Tickets y servicio", "Inventario y demanda"],
    examples: ["audiencias", "journey", "friccion"],
  },
  {
    label: "Analisis",
    title: "Convertir datos en patrones",
    body: "Antes de predecir, hay que entender que se mueve, que correlaciona y donde esta el problema real.",
    metric: "Lectura del sistema",
    bullets: ["segmentacion", "embudos", "cohortes"],
    examples: ["caida de conversion", "clientes de alto valor", "puntos de fuga"],
  },
  {
    label: "Prediccion",
    title: "Estimar lo que puede pasar",
    body: "La IA ayuda a priorizar: quien tiene mayor propension, donde habra demanda y que cliente corre riesgo de churn.",
    metric: "Probabilidad util",
    bullets: ["forecast", "scoring", "churn"],
    examples: ["demanda", "compra", "retencion"],
  },
  {
    label: "Automatizacion",
    title: "Ejecutar acciones repetibles",
    body: "Con reglas y modelos, las decisiones pequenas pueden dispararse solas: mensajes, recomendaciones, alertas o priorizacion.",
    metric: "Velocidad operativa",
    bullets: ["bots", "RPA", "copilots"],
    examples: ["seguimiento", "personalizacion", "clasificacion"],
  },
  {
    label: "Decision",
    title: "Cerrar el circuito con criterio",
    body: "El valor no esta en tener IA, sino en decidir mejor: donde invertir, a quien atender primero y que cambiar en la estrategia.",
    metric: "Impacto medible",
    bullets: ["priorizacion", "presupuesto", "proxima accion"],
    examples: ["ROI", "ROAS", "margen"],
  },
];

export const kickoffCases = [
  {
    area: "Marketing",
    company: "Coca-Cola / FMCG",
    move: "Personalizacion de campanas y expansion digital.",
    impact: "Mejor lectura de audiencias y canales.",
  },
  {
    area: "Ventas",
    company: "Mercado Libre",
    move: "Modelos de retencion, fraude y priorizacion comercial.",
    impact: "Millones de decisiones escalables en LATAM.",
  },
  {
    area: "Servicio",
    company: "Banca y fintech",
    move: "Asistentes internos y clasificacion automatica de solicitudes.",
    impact: "Menor tiempo de respuesta y mejor experiencia.",
  },
  {
    area: "E-commerce",
    company: "Retail digital",
    move: "Pronostico de demanda y recomendadores.",
    impact: "Menos quiebres, mas conversion y mejor ticket.",
  },
];

export const classRoadmap = {
  today: [
    "Entender por que la IA ya es infraestructura de negocio.",
    "Alinear expectativas: que se estudiara y que resultado se busca.",
    "Ver el mapa completo del diplomado antes de entrar a herramientas.",
    "Instalar el marco mental: datos -> analisis -> prediccion -> automatizacion -> decision.",
  ],
  next: [
    "Profundizar en que es IA aplicada y donde si conviene usarla.",
    "Empezar a separar hype, moda y uso real dentro de una empresa.",
    "Abrir el primer analisis de casos por area: marketing, ventas y servicio.",
  ],
  deliverables: [
    "Mapa mental del programa completo.",
    "Lista inicial de oportunidades de IA en el contexto del alumno.",
    "Criterio comun para evaluar impacto antes de hablar de herramientas.",
  ],
};

export const modelCards = [
  {
    provider: "OpenAI",
    model: "GPT-5.5",
    context: "1M",
    input: "$5",
    output: "$30",
    currency: "USD",
    note: "API estándar. Precio bajo 270K tokens; contexto máximo de 1M.",
  },
  {
    provider: "Google",
    model: "Gemini 3 Pro Preview",
    context: "1,048,576",
    input: "$2",
    output: "$12",
    currency: "USD",
    note: "Gemini API. Tramo base <=200K tokens.",
  },
  {
    provider: "Anthropic",
    model: "Claude Opus 4.7",
    context: "1M",
    input: "$5",
    output: "$25",
    currency: "USD",
    note: "Precio inicial en Claude Platform.",
  },
  {
    provider: "DeepSeek",
    model: "DeepSeek-V4-Pro",
    context: "1M",
    input: "$1.74",
    output: "$3.48",
    currency: "USD",
    note: "DeepSeek API, cache miss.",
  },
  {
    provider: "Kimi",
    model: "K2.6",
    context: "256K*",
    input: "$0.95",
    output: "$4.00",
    currency: "USD",
    note: "Moonshot expone K2.6 como latest. El contexto 256K viene documentado en K2.5 y herramientas K2.*.",
  },
  {
    provider: "GLM",
    model: "GLM-5.1",
    context: "200K",
    input: "¥6",
    output: "¥24",
    currency: "CNY",
    note: "Precio extraído de la página oficial de pricing de Z.ai/BigModel; docs públicas muestran 200K.",
  },
];

export const aiGrowthData = [
  { year: "2019", investment: 103.27 },
  { year: "2020", investment: 221.87 },
  { year: "2021", investment: 360.73 },
  { year: "2022", investment: 253.25 },
  { year: "2023", investment: 201.0 },
  { year: "2024", investment: 253.02 },
  { year: "2025", investment: 581.69 },
];

export const laborExposureData = [
  { group: "Economías avanzadas", exposure: 60 },
  { group: "Mercados emergentes", exposure: 40 },
  { group: "Países de bajos ingresos", exposure: 26 },
];

export const businessUseData = [
  { label: "Organizaciones con IA", value: 88, source: "Stanford AI Index 2026" },
  { label: "Organizaciones con GenAI", value: 79, source: "Stanford AI Index 2026" },
  { label: "Adopción poblacional GenAI", value: 53, source: "Stanford AI Index 2026" },
  { label: "Estudiantes 16+ que ya usan GenAI", value: 75, source: "OECD 2026" },
];

export const companyExamples = [
  { name: "Microsoft", use: "copilots y productividad" },
  { name: "JPMorgan", use: "asistentes internos y análisis" },
  { name: "Walmart", use: "búsqueda, inventario y atención" },
  { name: "Duolingo", use: "tutoría y práctica guiada" },
  { name: "Pfizer", use: "ciencia y descubrimiento" },
  { name: "Siemens", use: "copilotos industriales" },
  { name: "Mercado Libre", use: "comercio y soporte" },
  { name: "Notion", use: "agentes de trabajo" },
];

export const learningSignals = [
  {
    title: "Velocidad",
    body: "La IA reduce fricción: investigar, resumir, prototipar y corregir es mucho más rápido.",
  },
  {
    title: "Riesgo",
    body: "Si reemplaza el esfuerzo cognitivo, baja la práctica real de leer, escribir, calcular y argumentar.",
  },
  {
    title: "Cambio",
    body: "La evaluación tradicional pierde señal: más ayuda externa y más dificultad para medir dominio genuino.",
  },
];

export const references = [
  {
    label: "Gottfredson (1997) - Mainstream Science on Intelligence",
    url: "https://www1.udel.edu/educ/gottfredson/reprints/1997mainstream.pdf",
    type: "Académico",
  },
  {
    label: "Sennrich, Haddow, Birch (2016) - Neural Machine Translation of Rare Words with Subword Units",
    url: "https://arxiv.org/abs/1508.07909",
    type: "Académico",
  },
  {
    label: "Rumelhart, Hinton, Williams (1986) - Learning representations by back-propagating errors",
    url: "https://www.nature.com/articles/323533a0",
    type: "Académico",
  },
  {
    label: "OECD - Generative AI topic page",
    url: "https://www.oecd.org/en/topics/generative-ai.html",
    type: "Reporte",
  },
  {
    label: "OECD Digital Education Outlook 2026",
    url: "https://www.oecd.org/en/publications/oecd-digital-education-outlook-2026_062a7394-en.html",
    type: "Reporte",
  },
  {
    label: "IMF (2024) - Gen-AI: Artificial Intelligence and the Future of Work",
    url: "https://www.imf.org/en/Publications/Staff-Discussion-Notes/Issues/2024/01/14/Gen-AI-Artificial-Intelligence-and-the-Future-of-Work-542379",
    type: "Reporte",
  },
  {
    label: "Stanford HAI - AI Index 2026 overview",
    url: "https://hai.stanford.edu/ai-index/2026-ai-index-report",
    type: "Reporte",
  },
  {
    label: "Stanford HAI - AI Index 2026 economy chapter",
    url: "https://hai.stanford.edu/ai-index/2026-ai-index-report/economy",
    type: "Reporte",
  },
  {
    label: "OpenAI API pricing",
    url: "https://openai.com/api/pricing/",
    type: "Oficial",
  },
  {
    label: "OpenAI - Introducing GPT-5.5",
    url: "https://openai.com/index/introducing-gpt-5-5/",
    type: "Oficial",
  },
  {
    label: "Google Gemini 3 developer guide",
    url: "https://ai.google.dev/gemini-api/docs/gemini-3",
    type: "Oficial",
  },
  {
    label: "Google Agent Platform pricing",
    url: "https://cloud.google.com/gemini-enterprise-agent-platform/generative-ai/pricing",
    type: "Oficial",
  },
  {
    label: "Anthropic - Claude Opus 4.7",
    url: "https://www.anthropic.com/claude/opus",
    type: "Oficial",
  },
  {
    label: "DeepSeek API - Models & Pricing",
    url: "https://api-docs.deepseek.com/quick_start/pricing",
    type: "Oficial",
  },
  {
    label: "Moonshot / Kimi platform",
    url: "https://platform.moonshot.ai/",
    type: "Oficial",
  },
  {
    label: "Moonshot - Kimi K2.5 quickstart",
    url: "https://platform.moonshot.ai/docs/guide/kimi-k2-5-quickstart",
    type: "Oficial",
  },
  {
    label: "Moonshot - Pricing",
    url: "https://platform.moonshot.ai/docs/pricing/chat",
    type: "Oficial",
  },
  {
    label: "Z.ai / BigModel platform",
    url: "https://bigmodel.cn/pricing",
    type: "Oficial",
  },
  {
    label: "Z.ai docs - GLM-5.1",
    url: "https://docs.bigmodel.cn/cn/guide/models/text/glm-5.1",
    type: "Oficial",
  },
];
