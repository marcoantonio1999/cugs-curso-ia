export const coursePlanPhases = [
  {
    title: "Fase 1 · Fundamentos y criterio",
    note: "Clases 1-8",
    sessions: [
      { number: 1, title: "Apertura del diplomado" },
      { number: 2, title: "Que es IA y que no es" },
      { number: 3, title: "Casos reales por area" },
      { number: 4, title: "Mapa de madurez de IA" },
      { number: 5, title: "Automatizacion empresarial" },
      { number: 6, title: "Diseno de procesos automatizables" },
      { number: 7, title: "Analisis del consumidor con IA" },
      { number: 8, title: "Fidelizacion y personalizacion" },
    ],
  },
  {
    title: "Fase 2 · Datos para decidir",
    note: "Clases 9-16",
    sessions: [
      { number: 9, title: "Etica, privacidad y gobernanza" },
      { number: 10, title: "Sesgos y riesgo reputacional" },
      { number: 11, title: "Datos de negocio y fuentes" },
      { number: 12, title: "Recoleccion de datos" },
      { number: 13, title: "Limpieza y consistencia" },
      { number: 14, title: "Calidad de datos" },
      { number: 15, title: "Visualizacion para decision" },
      { number: 16, title: "Analisis exploratorio" },
    ],
  },
  {
    title: "Fase 3 · Prediccion y optimizacion",
    note: "Clases 17-24",
    sessions: [
      { number: 17, title: "KPIs ejecutivos" },
      { number: 18, title: "Dashboards y storytelling" },
      { number: 19, title: "Casos retail" },
      { number: 20, title: "Casos banca y servicios" },
      { number: 21, title: "Casos e-commerce" },
      { number: 22, title: "Introduccion a modelos predictivos" },
      { number: 23, title: "Prediccion de demanda" },
      { number: 24, title: "Clasificacion y scoring" },
    ],
  },
  {
    title: "Fase 4 · Aplicacion y proyecto",
    note: "Clases 25-32",
    sessions: [
      { number: 25, title: "Recomendadores" },
      { number: 26, title: "Churn y propension de compra" },
      { number: 27, title: "Series temporales" },
      { number: 28, title: "ARIMA y Prophet" },
      { number: 29, title: "Optimizacion de campanas" },
      { number: 30, title: "A/B testing y personalizacion" },
      { number: 31, title: "Proyecto integrador: planteamiento" },
      { number: 32, title: "Proyecto integrador final" },
    ],
  },
];

export const classTwoFoundationCards = [
  {
    kicker: "Senales",
    title: "La IA empieza leyendo datos",
    body: "No opera sobre intuiciones. Opera sobre rastros del sistema: clics, ventas, tickets, demanda, texto o imagen.",
    tags: ["datos", "entradas", "contexto"],
  },
  {
    kicker: "Patrones",
    title: "Busca regularidades utiles",
    body: "Aprende relaciones repetidas para clasificar, anticipar o generar una salida consistente con el contexto.",
    tags: ["patrones", "relaciones", "senales"],
  },
  {
    kicker: "Prediccion",
    title: "Estima la mejor siguiente accion",
    body: "Puede predecir demanda, riesgo, propension, churn o la siguiente palabra mas probable segun el modelo usado.",
    tags: ["forecast", "score", "probabilidad"],
  },
  {
    kicker: "Impacto",
    title: "Tiene valor cuando mejora una decision",
    body: "El punto no es usar IA porque existe. El punto es decidir mejor, mas rapido o con menos friccion operativa.",
    tags: ["decision", "priorizacion", "ROI"],
  },
];

export const classTwoMyths = [
  {
    title: "No es magia",
    body: "No entiende el negocio por si sola. Si el problema esta mal definido, solo escala confusion.",
  },
  {
    title: "No reemplaza criterio",
    body: "Puede sugerir, ordenar o predecir, pero la responsabilidad estrategica sigue siendo humana.",
  },
  {
    title: "No todo problema necesita IA",
    body: "Si una regla fija resuelve bien, meter un modelo agrega costo y complejidad innecesaria.",
  },
  {
    title: "No corrige datos malos",
    body: "Si la entrada es incompleta o sesgada, la salida solo hereda ese problema.",
  },
];

export const classTwoRealities = [
  {
    title: "Si sirve para priorizar",
    body: "Ayuda a detectar donde enfocar ventas, presupuesto, atencion o esfuerzo operativo.",
  },
  {
    title: "Si sirve para automatizar decisiones pequenas",
    body: "Clasificar tickets, puntuar leads o sugerir productos son buenos candidatos.",
  },
  {
    title: "Si requiere objetivos claros",
    body: "Funciona mejor cuando el negocio sabe que variable quiere mover y como va a medirla.",
  },
  {
    title: "Si necesita adopcion real",
    body: "El modelo solo crea valor cuando entra en flujo de trabajo y alguien actua con la salida.",
  },
];

export const classTwoTypeCards = [
  {
    kicker: "Clasificacion",
    title: "Scoring y segmentacion",
    body: "Ordena clientes, leads o casos en categorias utiles para priorizar accion comercial.",
    tags: ["lead score", "fraude", "segmentos"],
  },
  {
    kicker: "Prediccion",
    title: "Forecast y comportamiento",
    body: "Estima demanda, rotacion, abandono o respuesta esperada antes de que pase.",
    tags: ["demanda", "churn", "propension"],
  },
  {
    kicker: "Recomendacion",
    title: "Personalizacion y siguiente mejor accion",
    body: "Sugiere contenido, productos, mensajes o tratamientos segun contexto y perfil.",
    tags: ["next best action", "upsell", "recomendador"],
  },
  {
    kicker: "Generativa",
    title: "Contenido y copilots",
    body: "Genera texto, resumenes, respuestas asistidas o piezas de trabajo para acelerar la ejecucion.",
    tags: ["contenido", "asistentes", "copilots"],
  },
];

export const classTwoOpportunityCards = [
  {
    kicker: "Marketing",
    title: "Cuando hay audiencias, pauta y conversion",
    body: "Conviene empezar donde ya hay historico de trafico, segmentos y gasto que permitan leer performance.",
    tags: ["campanas", "segmentacion", "ROAS"],
  },
  {
    kicker: "Ventas",
    title: "Cuando existe pipeline y prioridades difusas",
    body: "La IA ayuda a ordenar leads, estimar cierres y concentrar al equipo en donde hay mayor probabilidad.",
    tags: ["pipeline", "forecast", "prioridad"],
  },
  {
    kicker: "Servicio",
    title: "Cuando hay volumen y repeticion",
    body: "Tickets, FAQs y solicitudes similares son buenos puntos de entrada para clasificacion y asistencia.",
    tags: ["tickets", "SLAs", "autoservicio"],
  },
  {
    kicker: "Operaciones",
    title: "Cuando hay cuellos de botella medibles",
    body: "Si una tarea se repite, tarda y deja datos, probablemente puede ordenarse o automatizarse.",
    tags: ["tiempos", "backoffice", "friccion"],
  },
];

export const classTwoRiskCards = [
  {
    kicker: "Datos",
    title: "Sin datos confiables no hay criterio",
    body: "La primera barrera rara vez es el algoritmo. Suele ser la calidad, acceso o estructura de la informacion.",
    tags: ["faltantes", "sesgo", "consistencia"],
  },
  {
    kicker: "Proceso",
    title: "No automatizar un caos",
    body: "Si el flujo esta roto, la IA lo acelera roto. Primero se aclara la logica del proceso.",
    tags: ["reglas", "pasos", "ownership"],
  },
  {
    kicker: "Gobernanza",
    title: "Definir limites y responsabilidad",
    body: "Hay que decidir que se delega, que se supervisa y donde se exige aprobacion humana.",
    tags: ["riesgo", "compliance", "control"],
  },
  {
    kicker: "Adopcion",
    title: "Sin uso real no hay retorno",
    body: "El modelo puede estar bien hecho y aun asi no generar valor si nadie confia o actua con la salida.",
    tags: ["cambio", "confianza", "rutina"],
  },
];

export const classTwoTakeaways = [
  "Evaluar IA como una capacidad de decision, no como una moda tecnologica.",
  "Elegir primero el problema correcto y la variable de negocio que importa.",
  "Diferenciar entre clasificar, predecir, recomendar y generar.",
  "No lanzar modelos donde aun faltan datos, proceso o ownership.",
];

export const classThreeMarketingCards = [
  {
    kicker: "Segmentacion",
    title: "Audiencias con mayor precision",
    body: "Modelos que identifican grupos con patrones de compra, afinidad o respuesta distinta a la pauta.",
    tags: ["clusters", "RFM", "lookalikes"],
  },
  {
    kicker: "Contenido",
    title: "Creatividades asistidas",
    body: "La generativa acelera copys, variantes y mensajes, pero necesita direccion estrategica y criterio de marca.",
    tags: ["copys", "variantes", "marca"],
  },
  {
    kicker: "Budget",
    title: "Mejor asignacion de inversion",
    body: "La lectura de performance ayuda a mover presupuesto hacia campanas, segmentos o canales con mejor retorno.",
    tags: ["ROAS", "atribucion", "mix"],
  },
  {
    kicker: "Personalizacion",
    title: "Mensajes segun contexto",
    body: "Se puede ajustar el mensaje por segmento, comportamiento o momento del journey para elevar conversion.",
    tags: ["journey", "mensaje", "conversion"],
  },
];

export const classThreeSalesCards = [
  {
    kicker: "Lead scoring",
    title: "A quien llamar primero",
    body: "La IA ayuda a priorizar prospectos con mas probabilidad de cierre o mejor valor esperado.",
    tags: ["prioridad", "cierre", "pipeline"],
  },
  {
    kicker: "Forecast",
    title: "Prediccion de demanda y ventas",
    body: "Se usan historicos, estacionalidad y senales operativas para estimar volumen futuro.",
    tags: ["demanda", "estacionalidad", "planeacion"],
  },
  {
    kicker: "Retencion",
    title: "Clientes con riesgo de fuga",
    body: "Modelos de churn ayudan a detectar quien necesita seguimiento o una accion comercial antes de irse.",
    tags: ["churn", "alertas", "seguimiento"],
  },
  {
    kicker: "Upsell",
    title: "Siguiente mejor oferta",
    body: "Recomendadores y scores pueden sugerir productos o upgrades con mayor probabilidad de aceptacion.",
    tags: ["cross-sell", "upsell", "propension"],
  },
];

export const classThreeServiceCards = [
  {
    kicker: "Routing",
    title: "Clasificacion automatica de tickets",
    body: "Entradas repetidas pueden ordenarse por tema, urgencia o complejidad para acelerar atencion.",
    tags: ["tickets", "colas", "SLA"],
  },
  {
    kicker: "Autoservicio",
    title: "FAQ y asistentes",
    body: "Buenas bases de conocimiento permiten resolver consultas simples sin consumir tiempo humano.",
    tags: ["FAQ", "bots", "self-service"],
  },
  {
    kicker: "Copilots",
    title: "Soporte interno para agentes",
    body: "Resumir historial, sugerir respuestas o recuperar contexto reduce friccion en equipos de atencion.",
    tags: ["agentes", "resumen", "contexto"],
  },
  {
    kicker: "VOC",
    title: "Escuchar patrones del cliente",
    body: "El analisis de conversaciones permite detectar causas raiz, reclamos recurrentes y oportunidades de mejora.",
    tags: ["voz del cliente", "causas", "mejora"],
  },
];

export const classThreeCompanyCases = [
  {
    kicker: "Mercado Libre",
    title: "Modelos a escala para retencion y fraude",
    body: "El valor aparece cuando los modelos entran en operaciones reales y afectan millones de decisiones pequenas.",
    tags: ["LATAM", "escala", "decision automatizada"],
  },
  {
    kicker: "Coca-Cola",
    title: "Expansion digital y personalizacion",
    body: "La combinacion de estrategia comercial y analitica ayuda a leer mejor audiencias, canales y lanzamientos.",
    tags: ["FMCG", "canales", "personalizacion"],
  },
  {
    kicker: "Banca / fintech",
    title: "Asistentes internos y priorizacion",
    body: "Los casos mas comunes mezclan scoring, riesgo, clasificacion y soporte asistido por IA.",
    tags: ["riesgo", "tickets", "productividad"],
  },
  {
    kicker: "Retail digital",
    title: "Recomendacion y forecast",
    body: "Inventario, conversion y demanda mejoran cuando la empresa conecta datos de producto, trafico y compra.",
    tags: ["stock", "e-commerce", "recomendacion"],
  },
];

export const classThreeWorkshopCards = [
  {
    kicker: "Paso 1",
    title: "Elegir un area concreta",
    body: "No empezar por toda la empresa. Elegir un flujo: marketing, ventas, servicio o backoffice.",
    tags: ["scope", "enfoque"],
  },
  {
    kicker: "Paso 2",
    title: "Detectar la senal disponible",
    body: "Que datos ya deja hoy el proceso: tiempos, tickets, cierres, trafico, recompra o abandono.",
    tags: ["datos", "senales"],
  },
  {
    kicker: "Paso 3",
    title: "Definir la decision a mejorar",
    body: "La pregunta no es que modelo usar. La pregunta es que decision deberia volverse mejor o mas rapida.",
    tags: ["decision", "criterio"],
  },
  {
    kicker: "Paso 4",
    title: "Medir impacto esperado",
    body: "Ahorro de tiempo, mejor conversion, mejor retencion o menos errores. Sin impacto no hay caso.",
    tags: ["impacto", "ROI"],
  },
];

export const classThreeTakeaways = [
  "Traducir IA a casos de marketing, ventas y servicio la vuelve discutible y accionable.",
  "Los mejores casos tienen datos, repeticion y una decision clara que mejorar.",
  "No alcanza con admirar un caso real: hay que detectar la senal que lo hace viable.",
  "La siguiente clase se enfoca en priorizar por madurez y no por entusiasmo.",
];

export const classFourMaturityStages = [
  {
    id: "exploracion",
    label: "Exploracion",
    title: "Interes alto, sistema bajo",
    body: "La empresa ya habla de IA, pero todavia no definio un problema concreto, una fuente de datos confiable ni una forma de medir impacto.",
    signal: "Mucho entusiasmo, poca estructura",
    risks: ["pruebas aisladas", "expectativas infladas", "herramientas sin ownership"],
    nextStep: "Bajar a un proceso puntual y definir una sola decision a mejorar.",
    scores: [18, 22, 16, 14],
  },
  {
    id: "pilotos",
    label: "Pilotos",
    title: "Casos de uso aislados",
    body: "Ya existen intentos concretos, pero siguen desconectados del flujo real. Hay aprendizaje, aunque todavia no hay estandar ni repetibilidad.",
    signal: "Se prueba valor en pequeno",
    risks: ["pilotos eternos", "sin integracion", "sin adopcion de equipos"],
    nextStep: "Seleccionar un caso que pueda repetirse y documentar proceso, metricas y responsables.",
    scores: [36, 34, 28, 24],
  },
  {
    id: "repetible",
    label: "Repetible",
    title: "La empresa ya puede correr un caso de forma consistente",
    body: "Hay un proceso claro, datos suficientes y una lectura minima de retorno. Todavia no es un sistema transversal, pero ya no depende del impulso inicial.",
    signal: "Del experimento al playbook",
    risks: ["cuello en equipos clave", "escalado lento", "falta de gobernanza"],
    nextStep: "Establecer criterios comunes para replicar en otra area sin romper calidad.",
    scores: [58, 61, 48, 42],
  },
  {
    id: "integrado",
    label: "Integrado",
    title: "La IA ya entra en el flujo operativo",
    body: "Los casos dejaron de ser visibles como proyecto especial y se volvieron parte del trabajo diario: priorizan, recomiendan o automatizan con supervisión.",
    signal: "Valor operacional medible",
    risks: ["deuda de procesos", "riesgo de control", "dependencia de pocos champions"],
    nextStep: "Subir gobernanza y observabilidad para que el sistema escale sin perder criterio.",
    scores: [74, 78, 66, 59],
  },
  {
    id: "sistema",
    label: "Sistema",
    title: "La IA funciona como capacidad empresarial",
    body: "La empresa ya sabe donde usar IA, como evaluarla y como integrarla a decisiones comerciales, operativas y de experiencia. La conversacion cambia de 'usar IA' a 'donde conviene mas'.",
    signal: "Capacidad instalada",
    risks: ["sobreautomatizacion", "gobernanza compleja", "vigilar sesgo y drift"],
    nextStep: "Optimizar portafolio de casos y vigilar calidad, riesgo y retorno como una disciplina continua.",
    scores: [88, 90, 84, 78],
  },
];

export const classFourReadinessProfiles = [
  {
    id: "marketing",
    label: "Marketing",
    title: "Funnel con pauta, audiencias y conversion",
    body: "Suele ser un buen punto de entrada cuando ya existen plataformas, historicos y una lectura basica de ROAS o conversion.",
    recommendation: "Empezar por segmentacion, performance y personalizacion ligera.",
    dimensions: [
      { label: "Datos", score: 78 },
      { label: "Proceso", score: 61 },
      { label: "Adopcion", score: 72 },
      { label: "Gobernanza", score: 44 },
    ],
    quickWins: ["audiencias", "copys asistidos", "priorizacion de inversion"],
  },
  {
    id: "ventas",
    label: "Ventas",
    title: "Pipeline comercial con cierre incierto",
    body: "Tiene mucho valor cuando el equipo ya registra actividad, etapa, cierre y senales de priorizacion aunque el proceso todavia sea irregular.",
    recommendation: "Entrar por lead scoring, forecast y alertas de riesgo comercial.",
    dimensions: [
      { label: "Datos", score: 64 },
      { label: "Proceso", score: 58 },
      { label: "Adopcion", score: 69 },
      { label: "Gobernanza", score: 41 },
    ],
    quickWins: ["lead scoring", "forecast", "churn comercial"],
  },
  {
    id: "service",
    label: "Servicio",
    title: "Mesa de ayuda con volumen y repeticion",
    body: "Es una de las areas mas faciles para mostrar retorno porque combina volumen, clasificacion, tiempos y una experiencia perceptible por el cliente.",
    recommendation: "Priorizar routing, autoservicio y soporte interno para agentes.",
    dimensions: [
      { label: "Datos", score: 72 },
      { label: "Proceso", score: 76 },
      { label: "Adopcion", score: 66 },
      { label: "Gobernanza", score: 53 },
    ],
    quickWins: ["clasificacion", "FAQ", "resumen de tickets"],
  },
  {
    id: "ops",
    label: "Operaciones",
    title: "Backoffice con tareas repetitivas y cuellos de botella",
    body: "El retorno puede ser alto, pero suele depender mas de disciplina de proceso y orden de datos que de entusiasmo inicial.",
    recommendation: "Buscar tareas repetitivas con reglas claras antes de pensar en automatizacion compleja.",
    dimensions: [
      { label: "Datos", score: 51 },
      { label: "Proceso", score: 68 },
      { label: "Adopcion", score: 47 },
      { label: "Gobernanza", score: 58 },
    ],
    quickWins: ["clasificacion documental", "alertas", "priorizacion operativa"],
  },
];

export const classFourSignalCards = [
  {
    kicker: "Datos",
    title: "La senal ya existe",
    body: "El proceso deja historico suficiente para detectar patron, comparar resultados y medir mejora.",
    tags: ["historico", "calidad", "consistencia"],
  },
  {
    kicker: "Decision",
    title: "Alguien necesita priorizar mejor",
    body: "Hay una eleccion recurrente que hoy se toma lento, tarde o con poca senal.",
    tags: ["priorizar", "ordenar", "elegir"],
  },
  {
    kicker: "Proceso",
    title: "Existe repeticion suficiente",
    body: "La friccion no es un caso raro: se repite lo bastante como para justificar diseno, entrenamiento y adopcion.",
    tags: ["volumen", "rutina", "flujo"],
  },
  {
    kicker: "Uso",
    title: "La salida puede entrar al trabajo diario",
    body: "No alcanza con un dashboard lindo; la recomendacion debe afectar una accion real dentro del equipo.",
    tags: ["accion", "equipo", "adopcion"],
  },
];

export const classFourRoadmapCards = [
  {
    kicker: "0-30 dias",
    title: "Elegir un solo caso y ordenar la base",
    body: "Definir proceso, responsable, variable objetivo, fuente de datos y forma de medir impacto antes de hablar de tooling.",
    tags: ["alcance", "metricas", "ownership"],
  },
  {
    kicker: "30-60 dias",
    title: "Probar un caso con criterio de negocio",
    body: "Correr un piloto con condiciones reales, usuarios reales y una decision puntual donde la salida se pueda usar.",
    tags: ["piloto", "usuarios", "decision"],
  },
  {
    kicker: "60-90 dias",
    title: "Volverlo repetible o descartarlo rapido",
    body: "Si muestra valor, se documenta y se integra. Si no, se corta sin romantizar el experimento.",
    tags: ["playbook", "integracion", "disciplina"],
  },
  {
    kicker: "Despues",
    title: "Escalar con gobernanza minima",
    body: "La empresa define que se automatiza, que se supervisa y que criterios usa para abrir un segundo caso.",
    tags: ["gobernanza", "portafolio", "control"],
  },
];

export const classFourTakeaways = [
  "No conviene entrar donde hay mas entusiasmo, sino donde hay mejor senal y una decision clara.",
  "La madurez no se mide por cantidad de herramientas, sino por capacidad de repetir casos con criterio.",
  "Piloto que no entra en flujo real sigue siendo exploracion maquillada.",
  "La siguiente clase deberia bajar esto a automatizacion empresarial concreta.",
];

export const classFourAntiPatterns = [
  {
    title: "Elegir por moda",
    body: "Se prioriza el caso que suena mas moderno aunque no tenga datos ni proceso suficiente.",
  },
  {
    title: "Arrancar con demasiados frentes",
    body: "La empresa intenta marketing, ventas y operaciones al mismo tiempo y no aprende nada con profundidad.",
  },
  {
    title: "Pilotear sin usuarios reales",
    body: "Se prueba algo bonito en demo pero nadie lo incorpora a una rutina concreta.",
  },
  {
    title: "Medir solo percepcion",
    body: "Se celebra que la herramienta guste, pero no se mide tiempo, conversion, retencion o costo evitado.",
  },
];

export const classFourSelectionRules = [
  {
    title: "Elegir donde ya hay friccion medible",
    body: "El mejor caso inicial duele lo suficiente como para justificar foco y seguimiento.",
  },
  {
    title: "Pedir una sola decision clara",
    body: "Conviene entrar donde una recomendacion pueda traducirse rapido a accion o priorizacion.",
  },
  {
    title: "Empezar donde existe adopcion probable",
    body: "El equipo debe sentir que la salida le ahorra tiempo o mejora resultados, no que agrega trabajo.",
  },
  {
    title: "Escalar solo despues de repetir",
    body: "Primero se vuelve predecible el caso uno. Recién despues se abre el caso dos.",
  },
];

export const classFiveAutomationModes = [
  {
    id: "bot",
    label: "Bots",
    title: "Interacciones acotadas con reglas claras",
    body: "Funcionan bien cuando el usuario hace preguntas repetitivas, el contexto es corto y la respuesta puede resolverse con un conjunto limitado de opciones.",
    signal: "Entrada simple, salida predecible",
    scores: [82, 76, 18, 36],
    useCases: ["FAQ", "estado de pedido", "agenda basica"],
    risks: ["se rompen con excepciones", "parecen mas inteligentes de lo que son", "frustran si no escalan a humano"],
    nextStep: "Usarlos donde el desvio a humano este claro y la experiencia no dependa de juicio complejo.",
  },
  {
    id: "rpa",
    label: "RPA",
    title: "Automatizar pasos repetitivos entre sistemas",
    body: "Conviene cuando la tarea es rutinaria, de alto volumen y con pasos estables: copiar, validar, mover, reconciliar o registrar informacion.",
    signal: "Proceso estable, excepciones bajas",
    scores: [88, 84, 12, 52],
    useCases: ["carga de datos", "conciliacion", "actualizacion de estados"],
    risks: ["se rompe si cambia la interfaz", "automatiza caos si el proceso ya estaba roto", "oculta deuda operativa"],
    nextStep: "Primero documentar la tarea actual, luego automatizar solo el tramo mas estable.",
  },
  {
    id: "assistant",
    label: "Asistentes",
    title: "Copilots para acelerar trabajo humano",
    body: "Sirven cuando el equipo necesita recuperar contexto, resumir, clasificar o redactar mas rapido, pero todavia mantiene la decision final.",
    signal: "Mejora productividad sin quitar control",
    scores: [74, 58, 46, 68],
    useCases: ["resumen de tickets", "copys asistidos", "busqueda interna"],
    risks: ["pueden inventar", "si el equipo no confia no se usan", "requieren buena base de conocimiento"],
    nextStep: "Entrar donde el equipo sienta alivio inmediato y aun quiera mantener la aprobacion final.",
  },
  {
    id: "agent",
    label: "Agentes",
    title: "Orquestar secuencias con contexto y herramientas",
    body: "Tienen sentido cuando ya hay un proceso bien entendido y se quiere encadenar busqueda, evaluacion y accion con supervisiones claras.",
    signal: "Proceso maduro con handoffs definidos",
    scores: [68, 54, 62, 84],
    useCases: ["seguimiento comercial", "resolucion guiada", "operaciones multi paso"],
    risks: ["sobrepromesa", "comportamiento opaco", "necesitan guardrails fuertes"],
    nextStep: "Abrirlos solo cuando la empresa ya puede definir limites, herramientas y aprobaciones con claridad.",
  },
];

export const classFiveAutomationCases = [
  {
    id: "support",
    label: "Soporte",
    title: "Clasificacion de tickets y respuesta inicial",
    body: "Buen caso cuando hay volumen, categorias repetidas y necesidad de bajar tiempo de triage sin perder visibilidad de excepciones.",
    fit: "Asistente + routing",
    metrics: [
      { label: "Triage", value: "-35%" },
      { label: "Cobertura", value: "24/7" },
      { label: "Escalado", value: "claro" },
    ],
    prerequisites: ["categorias consistentes", "historial de tickets", "escalado a humano definido"],
    controls: ["casos ambiguos a agente humano", "log de clasificacion", "revision semanal de errores"],
  },
  {
    id: "leads",
    label: "Leads",
    title: "Calificacion y seguimiento inicial de inbound",
    body: "Sirve cuando entran muchos leads y el equipo comercial pierde tiempo filtrando, enriqueciendo y priorizando de forma manual.",
    fit: "Asistente + scoring",
    metrics: [
      { label: "Respuesta", value: "-50%" },
      { label: "Prioridad", value: "mejor" },
      { label: "Pipeline", value: "ordenado" },
    ],
    prerequisites: ["pipeline registrado", "campos minimos obligatorios", "criterio de score documentado"],
    controls: ["override comercial", "revision de falsos positivos", "thresholds visibles"],
  },
  {
    id: "finance",
    label: "Backoffice",
    title: "Registro y validacion documental",
    body: "Aporta valor cuando se repiten validaciones, carga de datos y conciliaciones con pasos muy parecidos entre sistemas.",
    fit: "RPA + validacion",
    metrics: [
      { label: "Tiempo", value: "-60%" },
      { label: "Errores", value: "-25%" },
      { label: "Trazabilidad", value: "alta" },
    ],
    prerequisites: ["reglas claras", "campos estructurados", "sistemas relativamente estables"],
    controls: ["muestra auditada", "alertas por excepcion", "rollback manual"],
  },
  {
    id: "knowledge",
    label: "Equipos",
    title: "Copilot interno para recuperar contexto",
    body: "Muy util cuando el equipo pierde tiempo buscando respuestas, documentos o politicas dispersas para poder avanzar una tarea.",
    fit: "Asistente interno",
    metrics: [
      { label: "Busqueda", value: "-40%" },
      { label: "Onboarding", value: "mejor" },
      { label: "Consistencia", value: "sube" },
    ],
    prerequisites: ["base documental minimamente curada", "fuentes autorizadas", "preguntas repetitivas"],
    controls: ["citar fuente", "feedback del equipo", "espacios restringidos"],
  },
];

export const classFiveSignalCards = [
  {
    kicker: "Volumen",
    title: "La tarea aparece lo suficiente como para justificar diseno",
    body: "Si la actividad ocurre de forma ocasional, el costo de automatizar puede ser mayor que el beneficio real.",
    tags: ["frecuencia", "cola", "repeticion"],
  },
  {
    kicker: "Regla",
    title: "Los pasos ya son relativamente estables",
    body: "Automatizar conviene cuando el flujo no cambia cada vez ni depende de criterio experto en todos sus tramos.",
    tags: ["estandar", "pasos", "SOP"],
  },
  {
    kicker: "Excepcion",
    title: "Se puede definir cuando salir a humano",
    body: "La automatizacion seria no oculta excepciones: las detecta y las manda al canal correcto.",
    tags: ["fallback", "escalado", "limites"],
  },
  {
    kicker: "Impacto",
    title: "La mejora se puede medir",
    body: "Tiempo, costo, error o capacidad liberada. Si no puede medirse, despues nadie sabra si valio la pena.",
    tags: ["ahorro", "SLA", "error"],
  },
];

export const classFiveAntiPatterns = [
  {
    title: "Automatizar tareas con juicio experto oculto",
    body: "Se ve repetitiva desde afuera, pero adentro depende de matices que nunca se documentaron.",
  },
  {
    title: "Elegir la demo mas vistosa",
    body: "Se prioriza lo que impresiona en presentacion aunque no resuelva una friccion pesada del negocio.",
  },
  {
    title: "Quitar al humano sin definir fallback",
    body: "El flujo se rompe apenas aparece una excepcion y nadie sabe donde retomar el caso.",
  },
  {
    title: "No medir tiempo ni error",
    body: "La automatizacion parece exitosa solo porque existe, no porque mejoro algo concreto.",
  },
];

export const classFiveRules = [
  {
    title: "Entrar donde el flujo ya tiene forma",
    body: "No hace falta perfeccion, pero si una secuencia reconocible que el equipo pueda describir de manera similar.",
  },
  {
    title: "Separar automatizacion de supervisiones",
    body: "Hay que definir que paso se automatiza, que paso queda asistido y donde aparece aprobacion humana.",
  },
  {
    title: "Diseñar observabilidad minima",
    body: "Logs, errores, tiempos y tasa de excepcion deben quedar visibles desde el dia uno.",
  },
  {
    title: "Hacer primero el caso mas repetible",
    body: "Conviene elegir el caso que mejor combina volumen, estabilidad y retorno defendible.",
  },
];

export const classFiveRoadmapCards = [
  {
    kicker: "Semana 1-2",
    title: "Mapear la tarea repetitiva real",
    body: "Documentar entradas, pasos, excepciones, sistemas y responsables antes de seleccionar tecnologia.",
    tags: ["flujo actual", "ownership", "SLA"],
  },
  {
    kicker: "Semana 3-4",
    title: "Elegir el tipo de automatizacion correcto",
    body: "Bot, RPA, asistente o agente segun nivel de estructura, juicio y supervision necesaria.",
    tags: ["fit", "riesgo", "control"],
  },
  {
    kicker: "Semana 5-8",
    title: "Pilotear en un entorno real acotado",
    body: "Usar volumen controlado, personas reales y una metrica clara de tiempo, error o capacidad liberada.",
    tags: ["piloto", "usuarios", "medicion"],
  },
  {
    kicker: "Semana 9+",
    title: "Integrar, observar y ajustar",
    body: "Si el caso muestra valor, se integran feedback, alertas y gobierno minimo para sostenerlo.",
    tags: ["observabilidad", "mejora", "escalado"],
  },
];

export const classFiveTakeaways = [
  "Automatizar no es quitar personas: es ordenar trabajo repetitivo con limites claros.",
  "La automatizacion correcta depende del tipo de tarea, no de la herramienta que esta de moda.",
  "Toda automatizacion seria necesita fallback humano, logs y una metrica de impacto.",
  "La siguiente clase baja esto a como se diseña un proceso realmente automatizable.",
];

export const classSixProcessProfiles = [
  {
    id: "leadflow",
    label: "Lead flow",
    title: "Calificacion de leads inbound",
    body: "Buen caso para disenar proceso porque mezcla captura, scoring, asignacion y seguimiento con distintos niveles de automatizacion.",
    kpis: ["tiempo de respuesta", "MQL a SQL", "tasa de contacto"],
    note: "No todo el flujo debe automatizarse igual: la asignacion y la aprobacion comercial suelen requerir override humano.",
    steps: [
      {
        key: "entrada",
        title: "Entrada y deduplicacion",
        detail: "Captura del lead, limpieza de campos y enriquecimiento inicial desde fuentes conocidas.",
        boundary: "Automatizar",
        automation: "Reglas + validaciones deterministicas.",
        guardrail: "No pasar al siguiente paso si faltan datos minimos.",
      },
      {
        key: "score",
        title: "Scoring inicial",
        detail: "Estimacion de prioridad segun fit, intencion y senales historicas del funnel.",
        boundary: "Asistir",
        automation: "Modelo o score con umbrales visibles.",
        guardrail: "Ventas puede corregir score cuando haya contexto que el modelo no vio.",
      },
      {
        key: "asignacion",
        title: "Asignacion comercial",
        detail: "Se reparte al ejecutivo o cola mas adecuada segun territorio, cuenta o prioridad.",
        boundary: "Aprobacion",
        automation: "Recomendacion de asignacion con override.",
        guardrail: "Todo cambio manual queda trazado para mejorar reglas.",
      },
      {
        key: "secuencia",
        title: "Seguimiento inicial",
        detail: "Se dispara la secuencia adecuada de contacto o nurturing sin esperar trabajo manual innecesario.",
        boundary: "Automatizar",
        automation: "Playbooks, timers y mensajes parametrizados.",
        guardrail: "Pausar automatismo cuando el lead entra en conversacion activa.",
      },
    ],
  },
  {
    id: "tickets",
    label: "Tickets",
    title: "Mesa de ayuda y escalado",
    body: "Proceso ideal para disenar porque tiene volumen, categorias repetidas y una necesidad clara de handoff a humano en casos complejos.",
    kpis: ["triage", "SLA", "resolucion al primer contacto"],
    note: "La clave es distinguir bien que puede clasificarse solo y que necesita lectura humana temprana.",
    steps: [
      {
        key: "captura",
        title: "Captura de solicitud",
        detail: "Ingreso por chat, mail o formulario con limpieza minima del texto y metadatos.",
        boundary: "Automatizar",
        automation: "Intake, normalizacion y tagging basico.",
        guardrail: "Etiquetar canal y urgencia sin perder texto original.",
      },
      {
        key: "clasificacion",
        title: "Clasificacion y routing",
        detail: "Predice categoria, urgencia y cola probable para reducir tiempo muerto.",
        boundary: "Asistir",
        automation: "Modelo de clasificacion con confianza visible.",
        guardrail: "Confianza baja o categorias sensibles se mandan directo a humano.",
      },
      {
        key: "respuesta",
        title: "Respuesta inicial",
        detail: "Se propone una salida rapida basada en conocimiento reutilizable o se abre un paso de verificacion.",
        boundary: "Aprobacion",
        automation: "Borrador de respuesta o FAQ guiado.",
        guardrail: "Agente valida antes de enviar cuando la consulta no sea totalmente estandar.",
      },
      {
        key: "cierre",
        title: "Cierre y aprendizaje",
        detail: "El caso alimenta base de conocimiento, categorias y feedback para mejorar precision futura.",
        boundary: "Automatizar",
        automation: "Resumen final, etiquetado y log de causa raiz.",
        guardrail: "Revision semanal de reclamos mal clasificados.",
      },
    ],
  },
  {
    id: "facturas",
    label: "Backoffice",
    title: "Registro y validacion documental",
    body: "Un caso clasico de automatizacion empresarial donde conviene separar captura, regla, excepcion y auditoria.",
    kpis: ["tiempo por documento", "error", "trazabilidad"],
    note: "Si el documento varia mucho o la politica cambia todo el tiempo, primero hay que estabilizar criterio de negocio.",
    steps: [
      {
        key: "recepcion",
        title: "Recepcion y lectura",
        detail: "Ingreso del documento, OCR y extracción de campos clave que se puedan validar.",
        boundary: "Automatizar",
        automation: "Lectura documental y parsing.",
        guardrail: "Marcar campos con baja confianza para revision obligatoria.",
      },
      {
        key: "regla",
        title: "Validacion de negocio",
        detail: "Se compara contra reglas: proveedor, monto, centro de costo, orden de compra o politica.",
        boundary: "Automatizar",
        automation: "Reglas deterministicas y alertas.",
        guardrail: "Toda regla rechazada debe quedar explicada.",
      },
      {
        key: "excepcion",
        title: "Excepcion y aprobacion",
        detail: "Cuando algo no cuadra, se define quien revisa y con que informacion para decidir rapido.",
        boundary: "Aprobacion",
        automation: "Workflow de aprobacion con contexto.",
        guardrail: "Escalado y SLA visibles.",
      },
      {
        key: "registro",
        title: "Registro final",
        detail: "Asentado en sistema, auditoria y cierre con trazabilidad completa del paso a paso.",
        boundary: "Automatizar",
        automation: "RPA o integracion sobre ERP.",
        guardrail: "Reconciliacion y muestreo posterior.",
      },
    ],
  },
];

export const classSixBoundaryProfiles = [
  {
    id: "rule",
    label: "Regla fija",
    title: "Automatizar directo",
    body: "Cuando el input es estable y la accion correcta puede explicarse con una regla clara, conviene automatizar sin cargar al humano innecesariamente.",
    signal: "Alta predictibilidad",
    scores: [92, 12, 18],
    examples: ["validacion de formato", "deduplicacion", "routing simple"],
    control: "Logs, alertas y muestreo alcanzan como control base.",
  },
  {
    id: "assist",
    label: "Asistido",
    title: "La maquina recomienda, la persona decide rapido",
    body: "Ideal cuando hay patron util pero aun conviene mantener contexto humano por impacto comercial o por ambiguedad moderada.",
    signal: "Senal fuerte, juicio medio",
    scores: [68, 44, 58],
    examples: ["lead scoring", "clasificacion con confianza", "borrador de respuesta"],
    control: "Thresholds visibles y posibilidad de override en el punto de uso.",
  },
  {
    id: "approval",
    label: "Aprobacion",
    title: "Automatizacion con gate humano",
    body: "Conviene cuando el sistema puede preparar, ordenar o proponer, pero la accion final tiene impacto financiero, legal o reputacional sensible.",
    signal: "Riesgo medio-alto",
    scores: [56, 58, 74],
    examples: ["aprobacion de gasto", "respuesta sensible", "asignacion de casos criticos"],
    control: "Aprobacion explicita, trazabilidad y escalado visible.",
  },
  {
    id: "human",
    label: "Juicio experto",
    title: "Mantener humano y solo asistir contexto",
    body: "Cuando la situacion cambia demasiado, el contexto es incompleto o el costo del error es alto, el sistema solo debe ordenar informacion y no decidir.",
    signal: "Alta ambiguedad",
    scores: [28, 86, 92],
    examples: ["negociacion compleja", "casos legales", "decisiones reputacionales"],
    control: "Resumir, recuperar antecedentes y dejar claro por que la ultima palabra sigue siendo humana.",
  },
];

export const classSixDesignCheckCards = [
  {
    kicker: "Salida",
    title: "El proceso tiene un resultado visible",
    body: "Debe quedar claro que significa terminar bien el flujo y con que variable se va a juzgar la mejora.",
    tags: ["objetivo", "SLA", "resultado"],
  },
  {
    kicker: "Input",
    title: "Las entradas pueden leerse o validarse",
    body: "Si todo entra incompleto o ambiguo, primero hay que ordenar captura y campos minimos.",
    tags: ["captura", "campos", "calidad"],
  },
  {
    kicker: "Decision",
    title: "Las reglas ya pueden nombrarse",
    body: "Si nadie puede explicar como decide hoy, todavia no hay base seria para automatizar esa parte.",
    tags: ["regla", "criterio", "umbral"],
  },
  {
    kicker: "Excepcion",
    title: "Los casos raros tienen tratamiento",
    body: "Proceso automatizable no significa proceso perfecto; significa saber donde cortar y a quien pasar el caso.",
    tags: ["fallback", "escalado", "limite"],
  },
  {
    kicker: "Control",
    title: "Hay trazabilidad suficiente",
    body: "Se necesita saber que paso, por que paso y donde revisar cuando el sistema se equivoca.",
    tags: ["logs", "auditoria", "observabilidad"],
  },
  {
    kicker: "Uso",
    title: "El equipo puede vivir con el flujo",
    body: "Si el diseno agrega mas friccion de la que quita, el proceso no sera adoptado aunque tecnicamente funcione.",
    tags: ["adopcion", "rutina", "equipo"],
  },
];

export const classSixAntiPatterns = [
  {
    title: "Diseñar sobre un proceso que nadie hace igual",
    body: "Si cada persona lo resuelve distinto, primero hay que encontrar el tronco comun antes de automatizar algo.",
  },
  {
    title: "Esconder excepciones dentro del flujo",
    body: "Las excepciones terminan explotando mas tarde si no se diseñan como parte explicita del proceso.",
  },
  {
    title: "No separar regla de juicio",
    body: "Se automatiza una parte que todavia depende de lectura experta y despues se culpa a la tecnologia.",
  },
  {
    title: "Olvidar logs y aprendizaje",
    body: "Sin retroalimentacion, el flujo nunca mejora y el equipo pierde confianza rapido.",
  },
];

export const classSixRules = [
  {
    title: "Mapear el estado actual con honestidad",
    body: "Antes de automatizar, hay que ver el proceso como realmente ocurre y no como se supone que ocurre.",
  },
  {
    title: "Diseñar por capas",
    body: "Captura, validacion, decision, handoff y control deben poder leerse por separado.",
  },
  {
    title: "Definir donde entra humano",
    body: "No todo se automatiza. Un buen proceso deja claras las zonas de aprobacion y override.",
  },
  {
    title: "Instrumentar feedback desde el primer dia",
    body: "Todo proceso automatizable necesita una forma de aprender de errores, excepciones y correcciones humanas.",
  },
];

export const classSixBlueprintCards = [
  {
    kicker: "Paso 1",
    title: "Mapear trigger, input y salida",
    body: "Se define que dispara el flujo, que datos entran y que resultado debe entregar el proceso bien hecho.",
    tags: ["trigger", "input", "output"],
  },
  {
    kicker: "Paso 2",
    title: "Separar regla, excepcion y juicio",
    body: "La regla fija se automatiza primero; la excepcion se escala; el juicio experto se protege.",
    tags: ["regla", "excepcion", "juicio"],
  },
  {
    kicker: "Paso 3",
    title: "Diseñar handoffs y controles",
    body: "Cada cambio de estado necesita responsable, contexto visible y criterio para seguir o detener el flujo.",
    tags: ["handoff", "control", "estado"],
  },
  {
    kicker: "Paso 4",
    title: "Lanzar con observabilidad",
    body: "El proceso sale cuando puede medirse, auditarse y mejorarse sin depender de intuicion posterior.",
    tags: ["logs", "metricas", "mejora"],
  },
];

export const classSixTakeaways = [
  "Proceso automatizable no es proceso totalmente automatico; es proceso con limites claros.",
  "La mejor automatizacion nace de separar regla, excepcion y juicio experto.",
  "Sin handoff humano y sin observabilidad, el flujo se rompe en silencio.",
  "La siguiente iteracion puede entrar a analisis del consumidor con IA o seguir profundizando operaciones, segun tu prioridad docente.",
];

export const classSevenSignalProfiles = [
  {
    id: "behavior",
    label: "Comportamiento",
    title: "Lo que la persona hace en el journey",
    body: "Clicks, navegacion, frecuencia, abandonos y secuencias de uso ayudan a leer intencion real mejor que una declaracion aislada.",
    signal: "Senal conductual viva",
    questions: [
      "Que patrones anteceden una compra o un abandono?",
      "Donde aparece friccion en el journey?",
      "Que secuencias diferencian a quien vuelve de quien se pierde?",
    ],
    outputs: ["journey reading", "microsegmentos", "alertas de abandono"],
    sources: ["web analytics", "app events", "tiempo entre acciones"],
    scores: [84, 78, 72],
    caution: "El volumen de eventos no siempre implica intencion. Sin contexto, la lectura puede confundir curiosidad con valor.",
  },
  {
    id: "transaction",
    label: "Transaccion",
    title: "Lo que compra y con que frecuencia",
    body: "Monto, recurrencia, ticket, mix de productos y recencia ayudan a distinguir valor, propension y riesgo de fuga.",
    signal: "Senal monetaria fuerte",
    questions: [
      "Que clientes concentran mayor valor actual y futuro?",
      "Que patrones anuncian caida de frecuencia?",
      "Que combinaciones anticipan expansion o churn?",
    ],
    outputs: ["RFM", "LTV", "propension de recompra"],
    sources: ["ventas", "ticket promedio", "historial de recompra"],
    scores: [78, 88, 82],
    caution: "Si solo se mira compra pasada, se ignoran cambios recientes de contexto o experiencia que todavia no pegaron en ventas.",
  },
  {
    id: "service",
    label: "Servicio",
    title: "Lo que el cliente pregunta, reclama o necesita",
    body: "Tickets, quejas, tiempos de respuesta y tono de interaccion muestran dolor operativo y senales tempranas de desgaste.",
    signal: "Senal de friccion",
    questions: [
      "Que causas raiz explican mas reclamos?",
      "Que tipo de experiencia aumenta riesgo de abandono?",
      "Que segmentos necesitan atencion distinta?",
    ],
    outputs: ["voz del cliente", "riesgo de churn", "priorizacion de soporte"],
    sources: ["tickets", "NPS/CSAT", "conversaciones"],
    scores: [66, 82, 76],
    caution: "No todo lo que se queja tiene el mismo valor ni el mismo riesgo; conviene cruzar servicio con valor de cliente y momento del journey.",
  },
  {
    id: "context",
    label: "Contexto",
    title: "Lo que rodea la decision del cliente",
    body: "Canal, dispositivo, horario, ubicacion, campana y momento del ciclo ayudan a interpretar por que una misma persona responde distinto segun situacion.",
    signal: "Senal situacional",
    questions: [
      "En que contexto aumenta o cae la conversion?",
      "Que canales piden mensajes distintos?",
      "Donde conviene intervenir y donde no?",
    ],
    outputs: ["orquestacion de canal", "timing", "personalizacion situacional"],
    sources: ["canal", "dispositivo", "hora", "campana"],
    scores: [58, 70, 68],
    caution: "El contexto solo sirve cuando se conecta con comportamiento y valor. Por si solo puede volverse ruido descriptivo.",
  },
];

export const classSevenSegmentationCards = [
  {
    kicker: "Segmentacion",
    title: "Clusters por patron de conducta",
    body: "Agrupa personas por similitud real de comportamiento, no solo por demografia o intuicion comercial.",
    tags: ["clusters", "similitud", "comportamiento"],
  },
  {
    kicker: "Valor",
    title: "RFM y valor de cliente",
    body: "Recencia, frecuencia y valor monetario sirven para distinguir a quien retener, activar o expandir primero.",
    tags: ["RFM", "valor", "prioridad"],
  },
  {
    kicker: "Journey",
    title: "Lectura por etapa del ciclo",
    body: "El consumidor no significa lo mismo en descubrimiento, compra, postventa o riesgo de fuga.",
    tags: ["etapa", "journey", "friccion"],
  },
  {
    kicker: "Intento",
    title: "Senales de intencion y propension",
    body: "La IA ayuda a estimar quien esta mas cerca de comprar, volver o abandonar segun sus senales recientes.",
    tags: ["propension", "intencion", "riesgo"],
  },
];

export const classSevenJourneyCards = [
  {
    kicker: "Descubrimiento",
    title: "Que lo trae por primera vez",
    body: "Fuente, mensaje, canal y primer comportamiento permiten leer si el trafico es curioso, calificado o accidental.",
    tags: ["fuente", "campana", "primer uso"],
  },
  {
    kicker: "Evaluacion",
    title: "Donde compara y duda",
    body: "Tiempo, secuencia de paginas, consultas y microabandonos muestran donde necesita mas claridad o confianza.",
    tags: ["comparacion", "friccion", "confianza"],
  },
  {
    kicker: "Compra",
    title: "Que senales anteceden conversion",
    body: "Acciones cercanas a la compra ayudan a distinguir patrones de alta intencion frente a trafico superficial.",
    tags: ["conversion", "ultimo tramo", "senal fuerte"],
  },
  {
    kicker: "Postventa",
    title: "Que anuncia repeticion o desgaste",
    body: "Uso, reclamos, silencio, frecuencia y recompra permiten leer expansion, habito o riesgo de fuga.",
    tags: ["retencion", "habito", "churn"],
  },
];

export const classSevenAntiPatterns = [
  {
    title: "Mirar solo demografia",
    body: "Se usan etiquetas comodas pero poco utiles para explicar conducta, valor o riesgo real.",
  },
  {
    title: "Analizar sin activar",
    body: "Se descubren segmentos interesantes, pero nunca se conectan con una decision o accion comercial concreta.",
  },
  {
    title: "Confundir volumen con valor",
    body: "Mucho trafico o mucha queja no siempre significa la oportunidad mas importante para el negocio.",
  },
  {
    title: "Quedarse en foto estatica",
    body: "El consumidor cambia. Si no se lee movimiento, el analisis envejece rapido.",
  },
];

export const classSevenRules = [
  {
    title: "Cruzar senal con valor y etapa",
    body: "La misma conducta significa cosas distintas segun el tipo de cliente y el momento del journey.",
  },
  {
    title: "Atar el analisis a una decision",
    body: "Todo segmento o patron deberia terminar en una accion: priorizar, intervenir, cambiar mensaje o rediseñar experiencia.",
  },
  {
    title: "Leer movimiento, no solo estado",
    body: "La IA sirve mas cuando capta cambio: mejora, desgaste, aceleracion o riesgo emergente.",
  },
  {
    title: "Cerrar el loop con feedback",
    body: "Si una activacion funciono o no, ese resultado tiene que volver al sistema para mejorar el analisis siguiente.",
  },
];

export const classSevenFrameworkCards = [
  {
    kicker: "Paso 1",
    title: "Capturar senales reales",
    body: "Definir que eventos, compras, reclamos y contextos valen para leer mejor al consumidor.",
    tags: ["eventos", "tickets", "ventas"],
  },
  {
    kicker: "Paso 2",
    title: "Unir identidad y timeline",
    body: "Sin una vista razonable del recorrido del cliente, la lectura queda fragmentada y pierde accionabilidad.",
    tags: ["identidad", "timeline", "journey"],
  },
  {
    kicker: "Paso 3",
    title: "Detectar patrones utiles",
    body: "Buscar segmentos, transiciones y puntos de friccion que expliquen valor, conversion o riesgo.",
    tags: ["segmentos", "patrones", "riesgo"],
  },
  {
    kicker: "Paso 4",
    title: "Activar sobre una decision",
    body: "La lectura sirve cuando mueve una priorizacion, una oferta, un mensaje o una intervencion de experiencia.",
    tags: ["accion", "prioridad", "intervencion"],
  },
];

export const classSevenTakeaways = [
  "Analizar al consumidor con IA no es etiquetar personas; es leer patrones que ayuden a decidir mejor.",
  "Las mejores senales aparecen cuando se cruzan comportamiento, valor, servicio y contexto.",
  "Todo analisis deberia terminar en una accion o decision concreta.",
  "La siguiente clase convierte esa lectura en fidelizacion y personalizacion accionable.",
];

export const classEightJourneyStages = [
  {
    id: "onboarding",
    label: "Onboarding",
    title: "Del primer uso al segundo uso",
    body: "El objetivo no es solo convertir, sino hacer que la persona entienda el valor rapido y repita una accion clave antes de enfriarse.",
    action: "Empujar la segunda accion valiosa",
    trigger: "Primer uso incompleto o primer uso exitoso sin repeticion en 48h.",
    channels: ["email", "in-app", "whatsapp"],
    metrics: [
      { label: "Objetivo", value: "2do uso" },
      { label: "Ventana", value: "48h" },
      { label: "Riesgo", value: "medio" },
    ],
    guardrail: "No saturar con mensajes. Primero identificar la minima accion que demuestra valor real.",
  },
  {
    id: "habit",
    label: "Habito",
    title: "De uso esporadico a uso recurrente",
    body: "La personalizacion en esta etapa busca reforzar frecuencia y pertinencia, no solo insistir con el mismo mensaje para todos.",
    action: "Crear cadencia y relevancia",
    trigger: "Uso irregular, sesiones cortas o interes concentrado en una sola funcion/producto.",
    channels: ["push", "email", "feed"],
    metrics: [
      { label: "Objetivo", value: "frecuencia" },
      { label: "Ventana", value: "semanal" },
      { label: "Riesgo", value: "medio-bajo" },
    ],
    guardrail: "La personalizacion pierde fuerza si solo repite historial y no incorpora contexto reciente.",
  },
  {
    id: "expand",
    label: "Expansion",
    title: "De valor actual a valor potencial",
    body: "Una buena estrategia de fidelizacion identifica a quien ofrecerle mas valor, cuando hacerlo y con que tipo de propuesta.",
    action: "Siguiente mejor oferta o contenido",
    trigger: "Patrones de afinidad, uso sostenido y senales de receptividad a una nueva categoria o upgrade.",
    channels: ["email", "asesor", "web personalizada"],
    metrics: [
      { label: "Objetivo", value: "upsell" },
      { label: "Ventana", value: "momento fit" },
      { label: "Riesgo", value: "bajo" },
    ],
    guardrail: "Expandir demasiado pronto erosiona confianza; conviene hacerlo cuando el valor base ya esta consolidado.",
  },
  {
    id: "risk",
    label: "Riesgo",
    title: "Detectar desgaste antes del churn",
    body: "La fidelizacion mas rentable suele ocurrir antes de la fuga, cuando todavia existe margen para intervenir con precision.",
    action: "Intervenir antes de perderlo",
    trigger: "Caida de uso, reclamos, baja de frecuencia o cambio de patron respecto a cohortes similares.",
    channels: ["email", "llamada", "mensaje contextual"],
    metrics: [
      { label: "Objetivo", value: "retencion" },
      { label: "Ventana", value: "temprana" },
      { label: "Riesgo", value: "alto" },
    ],
    guardrail: "No toda caida merece el mismo esfuerzo; hay que cruzar riesgo con valor y costo de recuperacion.",
  },
  {
    id: "winback",
    label: "Winback",
    title: "Reactivar con criterio y no por reflejo",
    body: "Recuperar clientes sirve cuando hay una razon plausible para volver. Si no, la reactivacion se convierte en ruido caro.",
    action: "Ofrecer una reentrada relevante",
    trigger: "Inactividad prolongada, pero con historico de valor o con una nueva propuesta realmente pertinente.",
    channels: ["email", "paid reactivation", "asesor"],
    metrics: [
      { label: "Objetivo", value: "recompra" },
      { label: "Ventana", value: "selectiva" },
      { label: "Riesgo", value: "alto" },
    ],
    guardrail: "No todo cliente merece winback. Conviene elegir segun valor pasado, costo futuro y probabilidad de retorno.",
  },
];

export const classEightLayerCards = [
  {
    kicker: "Mensaje",
    title: "Que se dice",
    body: "Cambiar contenido y argumento segun etapa, necesidad o valor del cliente mejora pertinencia mucho mas que aumentar volumen de envio.",
    tags: ["copy", "propuesta", "argumento"],
  },
  {
    kicker: "Oferta",
    title: "Que se ofrece",
    body: "La personalizacion tambien vive en producto, bundle, incentivo o experiencia, no solo en el texto del mensaje.",
    tags: ["oferta", "bundle", "incentivo"],
  },
  {
    kicker: "Timing",
    title: "Cuando intervenir",
    body: "Una misma accion cambia completamente de impacto segun momento del journey, frecuencia de uso o señal reciente.",
    tags: ["timing", "ventana", "cadencia"],
  },
  {
    kicker: "Canal",
    title: "Donde conviene aparecer",
    body: "Push, email, asesor, app, paid o onsite no cumplen el mismo rol. Elegir canal tambien es personalizar.",
    tags: ["canal", "orquestacion", "journey"],
  },
];

export const classEightEconomicsCards = [
  {
    kicker: "Retencion",
    title: "La fidelizacion protege ingreso futuro",
    body: "Mejorar retencion evita que todo el crecimiento dependa siempre de adquirir clientes nuevos.",
    tags: ["retencion", "recompra", "base"],
  },
  {
    kicker: "LTV",
    title: "Personalizar bien aumenta valor por cliente",
    body: "La lectura correcta del momento y la oferta puede expandir ticket, frecuencia o permanencia sin erosionar margen.",
    tags: ["LTV", "expansion", "margen"],
  },
  {
    kicker: "Costo",
    title: "No toda intervencion vale lo mismo",
    body: "Conviene elegir donde el costo del mensaje o del incentivo tenga sentido frente al valor esperado del cliente.",
    tags: ["CAC", "costo", "ROI"],
  },
  {
    kicker: "Prioridad",
    title: "La IA ayuda a decidir a quien intervenir primero",
    body: "No se personaliza a todos igual. Se prioriza segun riesgo, valor, propension y momento del journey.",
    tags: ["priorizacion", "riesgo", "valor"],
  },
];

export const classEightAntiPatterns = [
  {
    title: "Llamar personalizacion a poner el nombre",
    body: "Cambiar un token en un email no es una estrategia de fidelizacion basada en datos.",
  },
  {
    title: "Intervenir a todos con la misma cadencia",
    body: "La sobrecomunicacion desgasta y destruye valor cuando no respeta momento, canal ni necesidad real.",
  },
  {
    title: "Ofrecer descuentos como unica palanca",
    body: "Una mala personalizacion puede entrenar al cliente a esperar incentivo y erosionar margen sin construir habito.",
  },
  {
    title: "No distinguir retencion de winback",
    body: "Evitar fuga y recuperar clientes son juegos distintos con economics distintos.",
  },
];

export const classEightRules = [
  {
    title: "Personalizar sobre comportamiento y valor",
    body: "La decision mejora cuando cruza etapa del journey, valor, contexto y senal reciente del cliente.",
  },
  {
    title: "Definir siguiente mejor accion",
    body: "Cada segmento o etapa deberia tener una accion principal recomendada y una razon clara para activarla.",
  },
  {
    title: "Orquestar canal y cadencia",
    body: "No basta con decidir que decir; hay que elegir por donde, cuando y con que frecuencia conviene intervenir.",
  },
  {
    title: "Medir uplift y no solo aperturas",
    body: "Retencion, recompra, frecuencia o expansion importan mas que metrics de vanidad de comunicacion.",
  },
];

export const classEightRoadmapCards = [
  {
    kicker: "Etapa 1",
    title: "Elegir un punto del journey a mejorar",
    body: "Conviene empezar por onboarding, habito, riesgo o winback, no por todos a la vez.",
    tags: ["journey", "foco", "prioridad"],
  },
  {
    kicker: "Etapa 2",
    title: "Definir trigger y siguiente mejor accion",
    body: "La personalizacion se vuelve accionable cuando se puede nombrar que la dispara y que respuesta conviene dar.",
    tags: ["trigger", "NBA", "decision"],
  },
  {
    kicker: "Etapa 3",
    title: "Orquestar canal, mensaje y control",
    body: "Elegir canal, frecuencia, contenido y limites para no volver la experiencia invasiva o incoherente.",
    tags: ["canal", "mensaje", "cadencia"],
  },
  {
    kicker: "Etapa 4",
    title: "Medir impacto y reentrenar la lectura",
    body: "Las respuestas del cliente alimentan la siguiente decision: la fidelizacion mejora cuando aprende de su propia activacion.",
    tags: ["uplift", "feedback", "aprendizaje"],
  },
];

export const classEightTakeaways = [
  "Fidelizar con IA no es mandar mas mensajes: es intervenir mejor segun etapa, valor y contexto.",
  "La personalizacion real combina mensaje, oferta, timing y canal.",
  "No toda fuga debe recuperarse ni todo cliente debe recibir el mismo esfuerzo.",
  "La siguiente fase del curso puede entrar a etica y gobernanza o profundizar la capa de datos, segun tu secuencia docente.",
];

export const classNineGovernanceProfiles = [
  {
    id: "privacy",
    label: "Privacidad",
    title: "Uso de datos personales con impacto real en confianza",
    body: "Cuando una iniciativa usa identificadores, historiales o datos sensibles, la pregunta central no es solo si funciona: es si la empresa puede justificar finalidad, acceso y retencion.",
    signal: "Alta sensibilidad",
    examples: ["segmentacion sensible", "perfilado", "uso de historiales"],
    owners: ["legal", "data owner", "producto"],
    controls: ["finalidad declarada", "minimizacion", "retencion definida"],
    scores: [92, 90, 74],
    trigger: "Conviene abrir esta revision cuando se quiera usar dato personal para una decision nueva o para ampliar un uso ya existente.",
    caution: "Tener el dato no habilita cualquier uso. La empresa debe poder explicar para que lo usa y por que ese uso es proporcional.",
  },
  {
    id: "decision",
    label: "Decisiones",
    title: "Sistemas que recomiendan o influyen una decision sobre personas",
    body: "Cuando la IA clasifica, puntua o prioriza clientes, leads, candidatos o casos, entra una tension etica fuerte entre eficiencia, explicabilidad y trato justo.",
    signal: "Impacto humano directo",
    examples: ["lead scoring", "priorizacion de casos", "clasificacion automatica"],
    owners: ["negocio", "riesgo", "data"],
    controls: ["override humano", "explicacion basica", "revision por segmento"],
    scores: [88, 76, 68],
    trigger: "Se vuelve prioritario cuando la salida cambia trato, prioridad o acceso a una oportunidad.",
    caution: "Aunque la decision final quede en manos humanas, una recomendacion opaca puede sesgar el criterio igual si nadie la cuestiona.",
  },
  {
    id: "automation",
    label: "Procesos",
    title: "Automatizacion con riesgo operativo o regulatorio",
    body: "Al automatizar procesos no solo importa el ahorro. Tambien importa si el flujo deja trazabilidad, responsabilidades claras y salida segura ante excepciones.",
    signal: "Riesgo operacional",
    examples: ["aprobaciones", "validacion documental", "routing critico"],
    owners: ["operaciones", "riesgo", "auditoria"],
    controls: ["logs", "escalado", "muestreo auditado"],
    scores: [84, 72, 78],
    trigger: "Conviene abrir esta capa cuando la automatizacion toca dinero, compliance, reputacion o SLA criticos.",
    caution: "Automatizar bien no es esconder a la persona. Es dejar claro donde se automatiza, donde se aprueba y quien responde cuando algo falla.",
  },
  {
    id: "vendor",
    label: "Terceros",
    title: "Herramientas y modelos externos que amplian superficie de riesgo",
    body: "Cuando una empresa usa vendors, APIs o modelos externos, la gobernanza tambien tiene que cubrir que sale de la organizacion, bajo que terminos y con que limites.",
    signal: "Dependencia externa",
    examples: ["LLMs externos", "SaaS con IA", "proveedores de enrichment"],
    owners: ["IT", "seguridad", "compras"],
    controls: ["acuerdo de uso", "clasificacion de datos", "restricciones de envio"],
    scores: [80, 82, 62],
    trigger: "Esta revision aparece cada vez que se incorpora una herramienta externa o se conecta un nuevo proveedor al flujo.",
    caution: "El riesgo no vive solo en el modelo; tambien vive en contratos, retencion, ubicacion del dato y capacidad de salida si el proveedor cambia condiciones.",
  },
];

export const classNinePrincipleCards = [
  {
    kicker: "Principio",
    title: "Finalidad antes que tecnologia",
    body: "El uso de IA debe nacer de una necesidad legitima y entendible, no de la tentacion de usar datos o modelos porque ya existen.",
    tags: ["finalidad", "proporcionalidad", "justificacion"],
  },
  {
    kicker: "Principio",
    title: "Minimizar y acotar",
    body: "Se captura y usa solo lo necesario para la decision o proceso definido. Todo exceso crea friccion, complejidad y riesgo.",
    tags: ["minimizacion", "alcance", "limites"],
  },
  {
    kicker: "Principio",
    title: "Responsabilidad visible",
    body: "Todo flujo necesita dueños claros: quien aprueba, quien monitorea, quien responde y quien puede frenar el sistema.",
    tags: ["ownership", "accountability", "control"],
  },
  {
    kicker: "Principio",
    title: "Explicacion suficiente",
    body: "No siempre hace falta explicar todo el modelo, pero si dejar claro que hace, donde se usa y como se corrige cuando se equivoca.",
    tags: ["explicabilidad", "uso", "correccion"],
  },
];

export const classNinePrivacyCards = [
  {
    kicker: "Privacidad",
    title: "Consentimiento y contexto",
    body: "La forma en que se obtuvo un dato importa tanto como el dato mismo. Consentir una cosa no significa abrir la puerta a cualquier uso futuro.",
    tags: ["consentimiento", "contexto", "expectativa"],
  },
  {
    kicker: "Privacidad",
    title: "Acceso y retencion",
    body: "La gobernanza necesita definir quien accede, por cuanto tiempo y bajo que justificacion se conserva la informacion.",
    tags: ["acceso", "retencion", "roles"],
  },
  {
    kicker: "Privacidad",
    title: "Uso con terceros",
    body: "Cada integracion externa amplifica la superficie de riesgo. Sin criterio de clasificacion y contrato, el control se diluye rapido.",
    tags: ["vendor", "contrato", "salida"],
  },
  {
    kicker: "Privacidad",
    title: "Incidentes y trazabilidad",
    body: "La empresa madura no espera a que algo pase para pensar que revisar. Deja evidencia de uso, cambios y excepciones desde el arranque.",
    tags: ["incidentes", "trazabilidad", "evidencia"],
  },
];

export const classNineAntiPatterns = [
  {
    title: "Gobernanza como freno ornamental",
    body: "Se redactan politicas que nadie conecta con decisiones reales, vendors, prompts o procesos operativos.",
  },
  {
    title: "Pensar privacidad solo como checkbox",
    body: "Se cumple un paso formal, pero no se revisa si el uso concreto del dato sigue siendo razonable o proporcional.",
  },
  {
    title: "No nombrar dueños del sistema",
    body: "Cuando nadie responde por monitoreo, excepciones o cambio de alcance, el riesgo se vuelve difuso y crece en silencio.",
  },
  {
    title: "Confiar ciegamente en proveedores",
    body: "Externalizar tecnologia no externaliza responsabilidad. El riesgo reputacional igual vuelve a la marca.",
  },
];

export const classNineRules = [
  {
    title: "Definir uso permitido y uso prohibido",
    body: "La buena gobernanza deja clara la frontera entre lo que se puede hacer, lo que requiere aprobacion y lo que directamente no se hace.",
  },
  {
    title: "Diseñar controles proporcionados",
    body: "No todos los casos necesitan el mismo nivel de revision. El control sube con sensibilidad, impacto y dependencia externa.",
  },
  {
    title: "Instrumentar trazabilidad desde el inicio",
    body: "Logs, cambios, prompts, accesos y overrides son parte del sistema, no anexos opcionales para despues.",
  },
  {
    title: "Revisar gobernanza en contexto operativo",
    body: "La mejor prueba de una politica es si sirve para decidir sobre un caso real y no solo para quedar bien en un documento.",
  },
];

export const classNineRoadmapCards = [
  {
    kicker: "Paso 1",
    title: "Inventariar usos de IA activos y deseados",
    body: "Antes de gobernar, hay que ver donde ya se esta usando IA, con que datos, para que decision y con que proveedor o equipo.",
    tags: ["inventario", "casos", "alcance"],
  },
  {
    kicker: "Paso 2",
    title: "Clasificar sensibilidad e impacto",
    body: "No todos los flujos pesan igual. Conviene distinguir por dato personal, impacto humano, riesgo operativo y dependencia externa.",
    tags: ["sensibilidad", "impacto", "criticidad"],
  },
  {
    kicker: "Paso 3",
    title: "Asignar owners y controles minimos",
    body: "Se definen responsables, puntos de aprobacion, excepciones, restricciones de uso y evidencia esperada por cada tipo de caso.",
    tags: ["owners", "controles", "evidencia"],
  },
  {
    kicker: "Paso 4",
    title: "Revisar y ajustar en casos reales",
    body: "La gobernanza madura se prueba sobre decisiones y workflows concretos, no solo en un marco abstracto.",
    tags: ["revision", "operacion", "ajuste"],
  },
];

export const classNineTakeaways = [
  "Etica y gobernanza no frenan la IA; evitan que la empresa escale riesgo mas rapido que valor.",
  "Privacidad, decisiones sensibles, automatizacion y terceros piden controles distintos, no una unica regla para todo.",
  "Toda iniciativa seria necesita owners, limites y trazabilidad visible.",
  "La siguiente clase profundiza donde aparecen sesgos y como se vuelven riesgo reputacional real.",
];

export const classTenBiasCases = [
  {
    id: "lead",
    label: "Lead scoring",
    title: "El scoring puede repetir sesgos comerciales pasados",
    body: "Cuando el historico ya priorizaba ciertos territorios, perfiles o canales, el modelo aprende a reforzar esa distribucion como si fuera una verdad neutral.",
    riskLevel: "Riesgo comercial",
    metrics: [
      { label: "Exposicion", value: "alta" },
      { label: "Deteccion", value: "media" },
      { label: "Impacto", value: "funnel" },
    ],
    biasVectors: ["historico sesgado", "variables proxy", "feedback selectivo"],
    affectedGroups: ["leads nuevos", "territorios secundarios", "segmentos subatendidos"],
    controls: ["auditar variables", "comparar conversion por grupo", "override comercial"],
    publicRisk: "El sesgo no siempre explota en redes, pero puede erosionar pipeline y generar inequidad comercial dificil de ver si solo se mira volumen total.",
  },
  {
    id: "support",
    label: "Soporte",
    title: "Triage automatizado que baja prioridad a ciertos casos",
    body: "Si los datos historicos vienen de equipos saturados o con criterios inestables, el sistema puede aprender a normalizar malos tiempos de respuesta sobre ciertos perfiles.",
    riskLevel: "Riesgo de experiencia",
    metrics: [
      { label: "Exposicion", value: "alta" },
      { label: "Deteccion", value: "alta" },
      { label: "Impacto", value: "servicio" },
    ],
    biasVectors: ["etiquetado inconsistente", "colas historicas", "texto incompleto"],
    affectedGroups: ["casos complejos", "usuarios vulnerables", "clientes con menor claridad al escribir"],
    controls: ["baja confianza a humano", "auditoria por segmento", "revision de SLA diferenciado"],
    publicRisk: "Cuando el cliente percibe trato desigual en soporte, el riesgo reputacional aparece rapido porque la experiencia negativa es visible y compartible.",
  },
  {
    id: "pricing",
    label: "Ofertas",
    title: "Personalizacion de promociones que se vuelve exclusion opaca",
    body: "Segmentar precios, beneficios o incentivos sin criterios claros puede generar sensacion de arbitrariedad y trato injusto aun cuando la logica parezca rentable en el corto plazo.",
    riskLevel: "Riesgo reputacional",
    metrics: [
      { label: "Exposicion", value: "media" },
      { label: "Deteccion", value: "baja" },
      { label: "Impacto", value: "marca" },
    ],
    biasVectors: ["segmentacion por proxy", "objetivo solo de margen", "falta de explicacion"],
    affectedGroups: ["clientes de menor valor actual", "zonas subatendidas", "usuarios nuevos"],
    controls: ["politica de fairness", "limites a exclusion", "revision legal/comercial"],
    publicRisk: "La combinacion de trato desigual y poca explicacion pega directo en confianza de marca aunque el uplift inicial parezca positivo.",
  },
  {
    id: "hiring",
    label: "Talento",
    title: "Filtrar CVs o candidatos amplifica sesgos heredados",
    body: "Aunque no sea el foco principal del curso, este caso sirve para mostrar lo rapido que un modelo puede copiar patrones historicos de excluson si nadie revisa variables y labels.",
    riskLevel: "Riesgo etico alto",
    metrics: [
      { label: "Exposicion", value: "media" },
      { label: "Deteccion", value: "media" },
      { label: "Impacto", value: "humano" },
    ],
    biasVectors: ["historico de seleccion", "textos proxy", "criterios informales"],
    affectedGroups: ["candidatos no tradicionales", "perfiles junior", "grupos subrepresentados"],
    controls: ["remover proxies sensibles", "muestreo y test por grupo", "decision final humana"],
    publicRisk: "Este tipo de sesgo escala rapido a conflicto reputacional porque toca temas visibles de trato justo y discriminacion.",
  },
];

export const classTenBiasSourceCards = [
  {
    kicker: "Fuente",
    title: "Muestreo desbalanceado",
    body: "Si el dataset representa mejor a unos grupos o contextos que a otros, el sistema generaliza mal y penaliza diferencia como si fuera anomalia.",
    tags: ["muestra", "cobertura", "representacion"],
  },
  {
    kicker: "Fuente",
    title: "Etiquetas heredadas",
    body: "Cuando el pasado ya estaba sesgado, las labels no son una verdad neutral; son una memoria historica de decisiones humanas imperfectas.",
    tags: ["labels", "historial", "decisiones previas"],
  },
  {
    kicker: "Fuente",
    title: "Variables proxy",
    body: "Aun quitando atributos sensibles, otras variables pueden actuar como sustitutos y reconstruir diferencias que la empresa no queria usar.",
    tags: ["proxy", "indirecto", "correlacion"],
  },
  {
    kicker: "Fuente",
    title: "Feedback loops",
    body: "El sistema aprende del resultado de sus propias decisiones y puede endurecer el sesgo si no hay correccion externa.",
    tags: ["loop", "auto-refuerzo", "aprendizaje"],
  },
];

export const classTenReputationCards = [
  {
    kicker: "Impacto",
    title: "Exclusion visible",
    body: "Cuando ciertos grupos reciben menos acceso, peor servicio o peores ofertas, el problema deja de ser tecnico y se vuelve narrativo y publico.",
    tags: ["exclusion", "trato", "marca"],
  },
  {
    kicker: "Impacto",
    title: "Decision inexplicable",
    body: "Si nadie puede justificar por que el sistema tomo cierta salida, la confianza se erosiona incluso cuando el error puntual sea pequeno.",
    tags: ["opacidad", "confianza", "explicacion"],
  },
  {
    kicker: "Impacto",
    title: "Escalada social",
    body: "Los problemas de fairness son muy compartibles. Una experiencia percibida como injusta puede escalar mas rapido que cualquier beneficio del modelo.",
    tags: ["viralizacion", "crisis", "confianza"],
  },
  {
    kicker: "Impacto",
    title: "Daño interno",
    body: "Cuando el equipo pierde confianza en la salida del sistema, la adopcion cae y el proyecto se vuelve politicamente fragil.",
    tags: ["adopcion", "equipo", "credibilidad"],
  },
];

export const classTenAntiPatterns = [
  {
    title: "Tratar sesgo como problema solo tecnico",
    body: "Si el negocio no participa, nadie discute que trato considera aceptable o donde esta la linea reputacional.",
  },
  {
    title: "Medir promedio y no diferencias",
    body: "Una performance global buena puede esconder desempenos muy malos para ciertos segmentos o contextos.",
  },
  {
    title: "Auditar una sola vez",
    body: "El sesgo cambia con el tiempo, los datos y el uso real. La revision puntual no alcanza para sostener confianza.",
  },
  {
    title: "Esperar al escandalo para reaccionar",
    body: "Cuando la empresa solo revisa fairness despues de una crisis, ya esta actuando tarde y bajo presion reputacional.",
  },
];

export const classTenRules = [
  {
    title: "Evaluar por segmento y contexto",
    body: "No basta con mirar accuracy global. Hay que comparar errores, acceso y resultados entre grupos y momentos del flujo.",
  },
  {
    title: "Separar rendimiento de aceptabilidad",
    body: "Un modelo rentable puede seguir siendo inaceptable si produce trato desigual que la empresa no puede defender.",
  },
  {
    title: "Diseñar recursos de apelacion",
    body: "Cuando la salida afecta personas, conviene dejar camino para revisar, corregir y aprender del error.",
  },
  {
    title: "Revisar fairness como proceso vivo",
    body: "El control de sesgo necesita monitoreo, feedback humano y thresholds revisados segun cambian negocio y datos.",
  },
];

export const classTenResponseCards = [
  {
    kicker: "Respuesta",
    title: "Mapear donde aparece el riesgo",
    body: "Definir si el problema nace en muestra, labels, variables, reglas de negocio o feedback loop antes de corregir a ciegas.",
    tags: ["origen", "diagnostico", "causa"],
  },
  {
    kicker: "Respuesta",
    title: "Abrir metricas por grupo",
    body: "Comparar precision, acceso, falso positivo, falso negativo o tiempo de respuesta segun segmentos relevantes para el caso.",
    tags: ["metricas", "grupos", "comparacion"],
  },
  {
    kicker: "Respuesta",
    title: "Ajustar sistema y politica",
    body: "A veces el problema no se corrige solo con modelado; tambien cambia con reglas, thresholds, overrides o criterios de negocio.",
    tags: ["policy", "threshold", "override"],
  },
  {
    kicker: "Respuesta",
    title: "Monitorear y explicar",
    body: "La empresa madura deja evidencias de revision y puede explicar que controles puso para no repetir el problema.",
    tags: ["monitoreo", "evidencia", "explicacion"],
  },
];

export const classTenTakeaways = [
  "El sesgo no vive solo en el modelo; puede nacer en datos, labels, reglas y loops de decision.",
  "No alcanza con que un sistema funcione en promedio. Tambien debe ser defendible frente a diferencias por grupo o contexto.",
  "El riesgo reputacional aparece cuando trato desigual y opacidad se vuelven visibles para clientes, equipos o terceros.",
  "La siguiente clase baja la conversacion a la materia prima de todo esto: los datos de negocio y sus fuentes.",
];

export const classElevenSourceProfiles = [
  {
    id: "marketing",
    label: "Marketing",
    title: "Fuentes para acquisition, engagement y conversion",
    body: "Marketing suele concentrar muchas fuentes visibles, pero no todas explican valor real. La clave es distinguir senales de activacion de ruido de volumen.",
    kpis: ["CAC", "conversion", "engagement"],
    note: "La fuente mas vistosa no siempre es la que mueve la decision correcta. Hay que cruzar origen con calidad y accionabilidad.",
    steps: [
      {
        key: "sistemas",
        title: "Sistemas core",
        detail: "Ads managers, analytics, CRM, email platform o CDP concentran la primera capa del dato de marketing.",
        boundary: "Inventario",
        automation: "Listar sistema, ventana historica, granularidad y owner.",
        guardrail: "No asumir que todas las fuentes comparten identidad o definiciones.",
      },
      {
        key: "eventos",
        title: "Eventos utiles",
        detail: "Visita, click, scroll, formulario, apertura o respuesta solo importan si cambian una decision comercial o de journey.",
        boundary: "Senal",
        automation: "Elegir eventos que muevan segmentacion, mensaje o presupuesto.",
        guardrail: "Evitar telemetria ornamental que nadie usa despues.",
      },
      {
        key: "join",
        title: "Join e identidad",
        detail: "Se necesita una forma razonable de conectar sesiones, leads y clientes para no perder continuidad del journey.",
        boundary: "Cruce",
        automation: "Definir claves, reglas de reconciliacion y gaps conocidos.",
        guardrail: "Sin identidad comun, el analisis queda fragmentado.",
      },
      {
        key: "decision",
        title: "Decision habilitada",
        detail: "La salida final deberia permitir priorizar canales, piezas, segmentos o momentos de activacion.",
        boundary: "Accion",
        automation: "Nombrar la decision que el dato va a mejorar.",
        guardrail: "Dashboard sin accion no cuenta como fuente util.",
      },
    ],
  },
  {
    id: "sales",
    label: "Ventas",
    title: "Fuentes para pipeline, scoring y forecast",
    body: "En ventas el dato vive entre CRM, actividad comercial, cotizaciones y resultado de pipeline. El reto es ordenar calidad y consistencia antes de modelar.",
    kpis: ["pipeline", "win rate", "forecast"],
    note: "Ventas suele sufrir mas por definiciones inconsistentes que por ausencia total de datos. El primer valor esta en ordenar criterio.",
    steps: [
      {
        key: "sistemas",
        title: "Sistemas core",
        detail: "CRM, telefonia, agenda, propuestas, ERP o herramientas de outreach concentran las senales comerciales mas directas.",
        boundary: "Inventario",
        automation: "Ubicar donde vive cada definicion critica del funnel.",
        guardrail: "No mezclar etapas con significados distintos entre equipos.",
      },
      {
        key: "eventos",
        title: "Eventos utiles",
        detail: "Contacto, respuesta, reunion, avance, objecion, propuesta y cierre son eventos que ayudan a leer momentum real.",
        boundary: "Senal",
        automation: "Priorizar eventos con relacion clara a avance o perdida.",
        guardrail: "Evitar registrar actividad por cumplimiento y no por decision.",
      },
      {
        key: "join",
        title: "Cruce contextual",
        detail: "El dato comercial mejora cuando se cruza con marketing, soporte o contexto de cuenta para explicar mejor riesgo y potencial.",
        boundary: "Cruce",
        automation: "Definir que joins son utiles y sostenibles.",
        guardrail: "No sumar fuentes si no agregan decision clara.",
      },
      {
        key: "decision",
        title: "Decision habilitada",
        detail: "Las fuentes correctas deben servir para priorizar leads, revisar forecast o elegir siguiente mejor accion comercial.",
        boundary: "Accion",
        automation: "Conectar senal con prioridad real del equipo.",
        guardrail: "Si ventas no la usa en rutina, la fuente todavia no esta integrada al negocio.",
      },
    ],
  },
  {
    id: "service",
    label: "Servicio",
    title: "Fuentes para experiencia, friccion y riesgo",
    body: "Soporte y postventa concentran una lectura muy valiosa sobre dolor, desgaste y necesidades del cliente que muchas empresas subutilizan.",
    kpis: ["SLA", "resolucion", "churn risk"],
    note: "El dato de servicio vale mucho cuando se conecta con valor de cliente y journey; si queda aislado, se vuelve puramente operativo.",
    steps: [
      {
        key: "sistemas",
        title: "Sistemas core",
        detail: "Help desk, chat, telefono, encuestas y base de conocimiento concentran la voz operacional del cliente.",
        boundary: "Inventario",
        automation: "Mapear canal, estructura, owner y calidad del registro.",
        guardrail: "No perder el texto original al normalizar categorias.",
      },
      {
        key: "eventos",
        title: "Eventos utiles",
        detail: "Apertura, escalado, reclamo repetido, cierre, recontacto y tono son senales que anticipan friccion y desgaste.",
        boundary: "Senal",
        automation: "Elegir las senales que cambien priorizacion o intervencion.",
        guardrail: "No medir solo volumen; leer tambien severidad y recurrencia.",
      },
      {
        key: "join",
        title: "Cruce con negocio",
        detail: "Servicio gana fuerza cuando se une a valor de cliente, etapa del journey y compras para entender impacto real.",
        boundary: "Cruce",
        automation: "Unir experiencia con valor y retencion.",
        guardrail: "Sin este cruce, el insight queda encerrado en soporte.",
      },
      {
        key: "decision",
        title: "Decision habilitada",
        detail: "Las fuentes correctas deben permitir priorizar resolucion, prevenir churn o rediseñar puntos de friccion.",
        boundary: "Accion",
        automation: "Nombrar quien usa la salida y para que accion concreta.",
        guardrail: "Insight sin responsable de accion se enfria rapido.",
      },
    ],
  },
  {
    id: "operations",
    label: "Operaciones",
    title: "Fuentes para throughput, errores y cumplimiento",
    body: "En operaciones el dato vive en sistemas menos glamorosos, pero suele ser el mas util para automatizar, prevenir fallas y mejorar capacidad real.",
    kpis: ["throughput", "error", "cumplimiento"],
    note: "Aqui la clave no es sofisticacion analitica inmediata; es ubicar donde el dato ya explica cuellos, excepciones y repeticion.",
    steps: [
      {
        key: "sistemas",
        title: "Sistemas core",
        detail: "ERP, WMS, ticketing interno, planillas y logs operativos forman la base de lectura del flujo.",
        boundary: "Inventario",
        automation: "Identificar sistemas de registro y definiciones operativas criticas.",
        guardrail: "No subestimar planillas: a veces guardan el dato mas cercano al trabajo real.",
      },
      {
        key: "eventos",
        title: "Eventos utiles",
        detail: "Ingreso, espera, validacion, excepcion, correccion y cierre muestran donde se consume tiempo o se acumula error.",
        boundary: "Senal",
        automation: "Elegir eventos que expliquen capacidad y falla.",
        guardrail: "No capturar solo estado final; tambien importa la transicion.",
      },
      {
        key: "join",
        title: "Cruce con negocio",
        detail: "El dato operativo gana fuerza cuando se conecta con costo, cliente, SLA o riesgo regulatorio.",
        boundary: "Cruce",
        automation: "Unir proceso con impacto economico o reputacional.",
        guardrail: "Si no se conecta al negocio, queda en reporte interno.",
      },
      {
        key: "decision",
        title: "Decision habilitada",
        detail: "La fuente correcta debe ayudar a automatizar mejor, redisenar un tramo o anticipar saturacion y error.",
        boundary: "Accion",
        automation: "Traducir senal a throughput, control o ahorro.",
        guardrail: "Medir solo volumen operativo no alcanza si no mejora la gestion del flujo.",
      },
    ],
  },
];

export const classElevenLayerCards = [
  {
    kicker: "Capa",
    title: "Dato transaccional",
    body: "Ventas, pagos, pedidos, tickets o cierres muestran resultados y movimientos del negocio con mayor trazabilidad.",
    tags: ["resultado", "historial", "registro"],
  },
  {
    kicker: "Capa",
    title: "Dato conductual",
    body: "Clicks, navegacion, uso, secuencias y tiempos ayudan a leer intencion y friccion antes de que aparezca el resultado final.",
    tags: ["comportamiento", "journey", "intencion"],
  },
  {
    kicker: "Capa",
    title: "Dato operativo",
    body: "Estados, excepciones, tiempos y retrabajos muestran la salud del proceso y los puntos mas automatizables.",
    tags: ["flujo", "capacidad", "error"],
  },
  {
    kicker: "Capa",
    title: "Dato contextual",
    body: "Canal, momento, ubicacion, campana o condiciones externas ayudan a interpretar por que una misma senal cambia de significado.",
    tags: ["contexto", "canal", "timing"],
  },
];

export const classElevenSourceCards = [
  {
    kicker: "Fuente",
    title: "Systems of record",
    body: "ERP, CRM o ticketing suelen ser la base de confianza, aunque no siempre son la fuente mas rica en comportamiento.",
    tags: ["core", "confiable", "estructura"],
  },
  {
    kicker: "Fuente",
    title: "Systems of engagement",
    body: "Web, app, email o chat aportan senales muy utiles del journey, pero exigen mejor diseno de identidad y captura.",
    tags: ["engagement", "journey", "evento"],
  },
  {
    kicker: "Fuente",
    title: "Feedback humano",
    body: "Notas comerciales, etiquetas de soporte o correcciones manuales pueden mejorar mucho la lectura si se vuelven minimamente consistentes.",
    tags: ["feedback", "notas", "operacion"],
  },
  {
    kicker: "Fuente",
    title: "Contexto externo",
    body: "Clima, calendario, competencia o variables macro pueden sumar si realmente explican variacion de negocio y no solo adornan analisis.",
    tags: ["externo", "contexto", "explicacion"],
  },
];

export const classElevenAntiPatterns = [
  {
    title: "Arrancar por la fuente mas famosa",
    body: "No siempre conviene empezar por la fuente mas moderna; conviene empezar por la que mejor conecta con una decision y tiene calidad minima.",
  },
  {
    title: "No documentar definiciones",
    body: "Si negocio y datos usan palabras distintas para el mismo KPI o etapa, la fuente se vuelve politicamente inestable.",
  },
  {
    title: "Juntar datos sin caso de uso",
    body: "La empresa acumula tablas y eventos, pero nadie puede explicar para que decision concreta se los necesita.",
  },
  {
    title: "Olvidar owner y frecuencia",
    body: "Toda fuente necesita responsable, ritmo de actualizacion y lectura de calidad para ser sostenible.",
  },
];

export const classElevenRules = [
  {
    title: "Empezar por la decision que se quiere mejorar",
    body: "Esa claridad ordena que fuente importa, que granularidad hace falta y que uniones valen la pena.",
  },
  {
    title: "Mapear sistema, owner y definicion",
    body: "Antes de modelar o visualizar, conviene saber donde vive el dato, quien lo mantiene y que significa exactamente.",
  },
  {
    title: "Cruzar capas con criterio",
    body: "La fuerza aparece al combinar resultado, comportamiento, operacion y contexto sin abrir joins innecesarios.",
  },
  {
    title: "Evaluar accionabilidad antes que sofisticacion",
    body: "La mejor fuente es la que permite una decision util y sostenible, no la que se ve mas compleja en una demo.",
  },
];

export const classElevenBlueprintCards = [
  {
    kicker: "Paso 1",
    title: "Elegir una decision y un KPI",
    body: "Toda arquitectura de fuentes mejora cuando se define primero que decision se quiere mover y con que variable se va a medir.",
    tags: ["decision", "KPI", "foco"],
  },
  {
    kicker: "Paso 2",
    title: "Inventariar fuentes y owners",
    body: "Se listan sistemas, ventanas, calidad, granularidad y responsables para evitar descubrir tarde que el dato clave no existe o no coincide.",
    tags: ["inventario", "owner", "granularidad"],
  },
  {
    kicker: "Paso 3",
    title: "Definir joins y gaps aceptables",
    body: "No todo se puede unir perfecto. Conviene dejar claro que identidad existe, que falta y que decision igual se puede sostener.",
    tags: ["join", "gaps", "identidad"],
  },
  {
    kicker: "Paso 4",
    title: "Traducir fuente a rutina de negocio",
    body: "La fuente gana valor cuando entra en una priorizacion, una automatizacion o una visualizacion que el equipo realmente usa.",
    tags: ["rutina", "uso", "accion"],
  },
];

export const classElevenTakeaways = [
  "Los datos de negocio no valen por existir; valen por la decision que habilitan.",
  "Fuente util significa definicion clara, owner claro y calidad suficiente para una accion real.",
  "La fuerza analitica aparece al cruzar capas con criterio, no al acumular tablas sin foco.",
  "La siguiente clase convierte esta lectura en diseno concreto de recoleccion de datos.",
];

export const classTwelveCaptureProfiles = [
  {
    id: "webapp",
    label: "Web/App",
    title: "Captura orientada al journey y a la activacion",
    body: "La buena recoleccion digital no dispara eventos por ansiedad. Captura acciones y atributos que luego cambian lectura, segmentacion o decision sobre el usuario.",
    kpis: ["activacion", "drop-off", "salud de eventos"],
    note: "El diseno de captura tiene que responder preguntas futuras del negocio, no solo inflar analytics con eventos sin uso.",
    steps: [
      {
        key: "evento",
        title: "Evento",
        detail: "Definir que accion merece ser registrada, en que momento exacto y bajo que nombre comun.",
        boundary: "Taxonomia",
        automation: "Nombrar acciones clave con convencion consistente.",
        guardrail: "Sin taxonomia comun, despues no hay lectura comparable.",
      },
      {
        key: "atributos",
        title: "Atributos",
        detail: "Elegir propiedades minimas para volver el evento util: canal, pantalla, producto, version, estado o contexto.",
        boundary: "Campos",
        automation: "Capturar solo contexto que cambie una decision posterior.",
        guardrail: "No capturar datos por si acaso o sin finalidad clara.",
      },
      {
        key: "identidad",
        title: "Identidad y permiso",
        detail: "Definir como se relaciona el evento con sesion, cuenta o persona y bajo que consentimiento puede usarse.",
        boundary: "Consentimiento",
        automation: "Alinear ID, opt-in y usos permitidos.",
        guardrail: "Lo facil tecnicamente no siempre es aceptable desde privacidad.",
      },
      {
        key: "qa",
        title: "QA y monitoreo",
        detail: "La captura necesita validacion y observabilidad despues del lanzamiento para no romperse en silencio.",
        boundary: "Calidad",
        automation: "Checks, alertas y dashboards de salud de eventos.",
        guardrail: "Evento sin monitoreo envejece rapido.",
      },
    ],
  },
  {
    id: "crm",
    label: "CRM",
    title: "Captura comercial que sirva para priorizar de verdad",
    body: "En ventas la captura falla cuando se registra para cumplir y no para decidir. El diseno correcto baja friccion y mejora lectura del funnel.",
    kpis: ["completitud", "pipeline", "consistencia"],
    note: "La captura comercial buena pide pocos campos, pero muy claros y conectados con una accion del equipo.",
    steps: [
      {
        key: "evento",
        title: "Evento",
        detail: "Definir que hitos merecen registro: contacto, reunion, avance, objecion, propuesta, perdida o cierre.",
        boundary: "Taxonomia",
        automation: "Nombrar hitos que representen cambio real del funnel.",
        guardrail: "No convertir el CRM en diario personal de actividades irrelevantes.",
      },
      {
        key: "atributos",
        title: "Atributos",
        detail: "Capturar monto, motivo, canal, competidor, fuente, etapa y senales minimas de calidad del lead u oportunidad.",
        boundary: "Campos",
        automation: "Elegir campos que mejoren scoring o forecast.",
        guardrail: "Cada campo extra debe justificar su costo de carga.",
      },
      {
        key: "identidad",
        title: "Identidad y ownership",
        detail: "Relacionar cuenta, contacto, oportunidad y ejecutivo con definiciones consistentes entre equipos.",
        boundary: "Owner",
        automation: "Alinear entidad comercial y responsable de actualizacion.",
        guardrail: "Sin owner claro, la calidad cae por abandono gradual.",
      },
      {
        key: "qa",
        title: "QA y rutina",
        detail: "Revisar completitud, etapas incoherentes y tiempos muertos para que la captura siga viva en la rutina comercial.",
        boundary: "Calidad",
        automation: "Checks semanales y reglas basicas de coherencia.",
        guardrail: "Si el equipo no ve valor en el dato, deja de cargarlo bien.",
      },
    ],
  },
  {
    id: "service",
    label: "Servicio",
    title: "Captura de voz del cliente sin perder el contexto original",
    body: "En soporte conviene capturar estructura util sin destruir el texto, la severidad y el contexto que despues explican dolor o riesgo de fuga.",
    kpis: ["clasificacion", "recontacto", "severidad"],
    note: "El mejor sistema de captura en servicio combina estructura para priorizar y texto suficiente para aprender de verdad.",
    steps: [
      {
        key: "evento",
        title: "Evento",
        detail: "Apertura, escalado, cierre, reclamo repetido o recontacto son hitos utiles para leer experiencia y carga operativa.",
        boundary: "Taxonomia",
        automation: "Nombrar estados y transiciones importantes del caso.",
        guardrail: "No reducir todo a una categoria final si se pierde la historia del caso.",
      },
      {
        key: "atributos",
        title: "Atributos",
        detail: "Canal, severidad, categoria, tiempo, producto y causa raiz ayudan a volver accionable la captura.",
        boundary: "Campos",
        automation: "Elegir atributos que permitan priorizar y redisenar.",
        guardrail: "No crear categorias imposibles de sostener en operacion.",
      },
      {
        key: "identidad",
        title: "Identidad y contexto",
        detail: "Relacionar el ticket con cliente, cuenta, historial y etapa del journey mejora mucho la lectura posterior.",
        boundary: "Contexto",
        automation: "Unir caso con valor y antecedentes suficientes.",
        guardrail: "Sin contexto, el caso parece aislado aunque exprese un patron repetido.",
      },
      {
        key: "qa",
        title: "QA y aprendizaje",
        detail: "La captura necesita revisiones de categorias mal usadas, textos faltantes y feedback del equipo que atiende.",
        boundary: "Calidad",
        automation: "Cerrar loop entre operacion y analisis.",
        guardrail: "Si la taxonomia no se corrige, el sesgo operacional se congela en el dato.",
      },
    ],
  },
  {
    id: "operations",
    label: "Operaciones",
    title: "Captura de proceso para throughput, excepciones y control",
    body: "La recoleccion operativa mas valiosa documenta entradas, transiciones, tiempos y excepciones para despues automatizar o mejorar capacidad con criterio.",
    kpis: ["throughput", "excepciones", "SLA"],
    note: "Cuando operaciones registra solo cierre y no transiciones, desaparece la parte del proceso que despues mas ayuda a mejorar.",
    steps: [
      {
        key: "evento",
        title: "Evento",
        detail: "Entrada, espera, validacion, rechazo, reproceso y cierre son hitos que explican la salud del flujo.",
        boundary: "Taxonomia",
        automation: "Capturar cambios de estado y no solo resultado final.",
        guardrail: "Sin transiciones, no se ve donde nace el cuello o la falla.",
      },
      {
        key: "atributos",
        title: "Atributos",
        detail: "Equipo, causa, tipo de excepcion, monto, prioridad o centro de costo vuelven la captura accionable.",
        boundary: "Campos",
        automation: "Elegir atributos que expliquen costo, riesgo o demora.",
        guardrail: "No capturar campos que nadie pueda mantener con consistencia.",
      },
      {
        key: "identidad",
        title: "Entidad y ownership",
        detail: "Toda captura necesita saber a que pedido, caso o documento corresponde y quien responde por su registro.",
        boundary: "Owner",
        automation: "Alinear entidad operativa, responsables y origen del dato.",
        guardrail: "Sin ownership, la fuente se degrada silenciosamente.",
      },
      {
        key: "qa",
        title: "QA y observabilidad",
        detail: "La captura operativa necesita revisiones de completitud, tiempos imposibles y excepciones mal codificadas.",
        boundary: "Calidad",
        automation: "Checks de salud y alertas sobre datos absurdos.",
        guardrail: "El error mas caro es creer que la captura esta bien solo porque existe.",
      },
    ],
  },
];

export const classTwelveCollectionCards = [
  {
    kicker: "Principio",
    title: "Capturar para decidir",
    body: "Todo evento o campo nuevo deberia justificarse por la decision, automatizacion o analisis que quiere habilitar.",
    tags: ["decision", "finalidad", "uso"],
  },
  {
    kicker: "Principio",
    title: "Usar taxonomia comun",
    body: "Nombres, estados y campos consistentes reducen confusiones y permiten comparar datos entre equipos y momentos.",
    tags: ["taxonomia", "consistencia", "comparacion"],
  },
  {
    kicker: "Principio",
    title: "Disenar identidad y consentimiento",
    body: "Relacionar eventos con personas o cuentas sin reglas claras de permiso crea riesgo y datos poco defendibles.",
    tags: ["identidad", "permiso", "privacidad"],
  },
  {
    kicker: "Principio",
    title: "Monitorear la captura viva",
    body: "Instrumentar no alcanza. Hay que revisar caidas, incoherencias, vacios y cambios de implementacion continuamente.",
    tags: ["monitoreo", "salud", "QA"],
  },
];

export const classTwelveQualityCards = [
  {
    kicker: "Chequeo",
    title: "Completitud",
    body: "Que porcentaje de eventos y campos realmente llega? Los huecos rara vez son neutros; suelen sesgar lectura y decision.",
    tags: ["faltantes", "coverage", "salud"],
  },
  {
    kicker: "Chequeo",
    title: "Coherencia",
    body: "Estados imposibles, fechas absurdas o transiciones ilogicas muestran que la captura existe pero no representa bien el proceso.",
    tags: ["reglas", "coherencia", "validacion"],
  },
  {
    kicker: "Chequeo",
    title: "Estabilidad",
    body: "Cada cambio de producto, formulario o flujo puede romper silenciosamente la serie de datos si nadie lo monitorea.",
    tags: ["versionado", "cambios", "ruptura"],
  },
  {
    kicker: "Chequeo",
    title: "Uso real",
    body: "La prueba final de una buena captura es si el negocio usa esa senal para decidir algo mejor y no solo para mirarla en un tablero.",
    tags: ["uso", "adopcion", "decision"],
  },
];

export const classTwelveAntiPatterns = [
  {
    title: "Capturar todo por ansiedad",
    body: "Se agregan eventos y campos sin caso de uso claro, y despues nadie entiende ni mantiene la taxonomia.",
  },
  {
    title: "No versionar cambios",
    body: "Producto o procesos cambian, pero la capa de datos no deja huella del cambio y el analisis se rompe sin aviso.",
  },
  {
    title: "Separar captura de operacion",
    body: "Cuando el equipo que captura no ve valor en el dato, la calidad cae porque la carga se siente burocratica.",
  },
  {
    title: "Olvidar permisos y limites",
    body: "Una implementacion tecnicamente correcta puede seguir siendo incorrecta si el uso del dato no es defendible.",
  },
];

export const classTwelveRules = [
  {
    title: "Disenar eventos y campos minimos utiles",
    body: "Menos captura, pero mejor pensada, suele generar mas valor que un esquema enorme sin disciplina de mantenimiento.",
  },
  {
    title: "Alinear taxonomia con negocio",
    body: "Nombres, etapas y categorias deben hacer sentido para quienes toman decisiones, no solo para quien implementa tracking.",
  },
  {
    title: "Definir QA desde el inicio",
    body: "Checks de completitud, coherencia y estabilidad deben salir junto con la captura, no aparecer meses despues.",
  },
  {
    title: "Conectar captura con ownership y rutina",
    body: "Toda fuente necesita responsable, mantenimiento y lectura viva dentro del trabajo real para sostener calidad.",
  },
];

export const classTwelveRoadmapCards = [
  {
    kicker: "Paso 1",
    title: "Elegir un flujo y una decision",
    body: "La mejor forma de empezar es tomando un journey o proceso concreto y definiendo que decision futura debe habilitar la captura.",
    tags: ["flujo", "decision", "foco"],
  },
  {
    kicker: "Paso 2",
    title: "Disenar taxonomia e identidad",
    body: "Se nombran eventos, campos, entidades y permisos de forma consistente para que el dato sea legible y defendible.",
    tags: ["taxonomia", "ID", "permiso"],
  },
  {
    kicker: "Paso 3",
    title: "Instrumentar QA y monitoreo",
    body: "La implementacion sale con checks de salud, alertas y validaciones minimas para no enterarse tarde de las roturas.",
    tags: ["QA", "alertas", "salud"],
  },
  {
    kicker: "Paso 4",
    title: "Cerrar el loop con negocio",
    body: "El dato se consolida cuando negocio confirma si realmente le sirvio para decidir mejor y que ajustes hay que hacer.",
    tags: ["feedback", "negocio", "ajuste"],
  },
];

export const classTwelveTakeaways = [
  "Recolectar datos bien es una disciplina de diseno, no solo un tema tecnico de tracking o integracion.",
  "La captura correcta empieza por una decision futura, no por el impulso de guardar todo.",
  "Taxonomia, consentimiento, QA y ownership son parte de la fuente, no anexos posteriores.",
  "La siguiente clase puede entrar a limpieza y consistencia con una base ya mucho mas solida.",
];

export const classThirteenCleaningProfiles = [
  {
    id: "customer-master",
    label: "Clientes",
    title: "Unificar identidades y registros duplicados",
    body: "En muchos negocios el mismo cliente vive varias veces: en CRM, facturacion, soporte y marketing. Limpiar no es solo borrar; es decidir cual registro representa mejor la realidad y como se sostendra en el tiempo.",
    focus: "Golden record",
    metrics: [
      { label: "Duplicados", value: "alto" },
      { label: "Impacto", value: "ventas" },
      { label: "Urgencia", value: "alta" },
    ],
    issues: ["IDs distintos para la misma persona", "emails inconsistentes", "campos criticos vacios"],
    fixes: ["reglas de matching", "prioridad de fuente", "normalizacion de contacto"],
    guardrail: "No conviene fusionar agresivamente sin dejar trazabilidad de origen y criterio de reconciliacion.",
  },
  {
    id: "pipeline",
    label: "Ventas",
    title: "Corregir etapas y definiciones incoherentes del funnel",
    body: "Muchas bases comerciales no estan sucias por formato sino por semantica: etapas con significados distintos, cierres mal clasificados y montos que nadie interpreta igual.",
    focus: "Consistencia semantica",
    metrics: [
      { label: "Etapas", value: "rotas" },
      { label: "Impacto", value: "forecast" },
      { label: "Urgencia", value: "alta" },
    ],
    issues: ["mismos nombres para cosas distintas", "cierres tardios", "monto y probabilidad poco confiables"],
    fixes: ["diccionario comun", "reglas por etapa", "checks sobre tiempos muertos"],
    guardrail: "No sirve limpiar historico si las reglas del flujo vivo siguen ambiguas para el equipo comercial.",
  },
  {
    id: "support",
    label: "Servicio",
    title: "Ordenar categorias, severidad y causa raiz",
    body: "En soporte el problema no suele ser falta de datos, sino clasificaciones inconsistentes que vuelven imposible comparar volumen, dolor y repeticion entre equipos o periodos.",
    focus: "Taxonomia util",
    metrics: [
      { label: "Categorias", value: "caoticas" },
      { label: "Impacto", value: "SLA" },
      { label: "Urgencia", value: "media" },
    ],
    issues: ["demasiadas categorias", "texto sin estructura", "severidad mal usada"],
    fixes: ["taxonomia reducida", "categoria + texto", "revision periodica de uso"],
    guardrail: "Normalizar no debe destruir el contexto original del reclamo o se pierde capacidad de aprendizaje.",
  },
  {
    id: "operations",
    label: "Operaciones",
    title: "Volver legibles estados, tiempos y excepciones",
    body: "En procesos operativos la suciedad aparece cuando no se registran bien las transiciones, las causas de excepcion o los tiempos entre estados del flujo.",
    focus: "Trazabilidad del flujo",
    metrics: [
      { label: "Estados", value: "inestables" },
      { label: "Impacto", value: "throughput" },
      { label: "Urgencia", value: "media" },
    ],
    issues: ["fechas imposibles", "estados faltantes", "excepciones sin codificar"],
    fixes: ["reglas de transicion", "catalogo de excepciones", "validaciones de tiempo"],
    guardrail: "La limpieza operativa vale mas cuando deja intacta la historia del proceso y no solo un snapshot final bonito.",
  },
];

export const classThirteenIssueCards = [
  {
    kicker: "Problema",
    title: "Duplicados y entidades partidas",
    body: "Un mismo cliente, caso o pedido aparece varias veces y rompe lectura de valor, historial o recurrencia.",
    tags: ["matching", "ID", "entidad"],
  },
  {
    kicker: "Problema",
    title: "Campos faltantes o mal formateados",
    body: "Fechas, emails, montos o categorias sin estructura vuelven fragil cualquier cruce o calculo posterior.",
    tags: ["faltantes", "formato", "parsing"],
  },
  {
    kicker: "Problema",
    title: "Definiciones diferentes para la misma palabra",
    body: "El dato parece limpio, pero negocio y analisis entienden cosas distintas por cliente activo, oportunidad o reclamo critico.",
    tags: ["semantica", "diccionario", "consistencia"],
  },
  {
    kicker: "Problema",
    title: "Valores extremos o absurdos",
    body: "Tiempos negativos, montos imposibles o estados incompatibles senalan que la captura no refleja bien el flujo real.",
    tags: ["outliers", "validacion", "reglas"],
  },
];

export const classThirteenConsistencyCards = [
  {
    kicker: "Consistencia",
    title: "Un solo criterio de identidad",
    body: "Sin una regla clara para reconciliar entidades, toda lectura de cliente, cuenta o caso queda partida desde el origen.",
    tags: ["ID", "reconciliacion", "golden record"],
  },
  {
    kicker: "Consistencia",
    title: "Catalogos y taxonomias compartidas",
    body: "Categorias, etapas y motivos funcionan mejor cuando son pocas, utiles y sostenibles entre equipos.",
    tags: ["catalogo", "taxonomia", "equipos"],
  },
  {
    kicker: "Consistencia",
    title: "Reglas sobre unidades y fechas",
    body: "Moneda, zona horaria, formato y unidad parecen detalles menores hasta que rompen comparabilidad y timeline.",
    tags: ["fecha", "unidad", "timezone"],
  },
  {
    kicker: "Consistencia",
    title: "Versionado de definiciones",
    body: "Cuando cambia una regla de negocio o una etapa del proceso, conviene dejar rastro para no mezclar mundos distintos como si fueran uno.",
    tags: ["versionado", "cambio", "historial"],
  },
];

export const classThirteenAntiPatterns = [
  {
    title: "Limpiar sin entender el uso del dato",
    body: "Se corrige formato o se rellena vacios, pero no se pregunta que decision futura necesita ese campo o entidad.",
  },
  {
    title: "Borrar historia para que se vea prolijo",
    body: "Se pierde trazabilidad de origen y despues nadie puede auditar de donde salio la version limpia.",
  },
  {
    title: "Resolver todo con una regla tecnica",
    body: "Muchos problemas de consistencia nacen en definiciones de negocio y no se arreglan solo con scripts o ETL.",
  },
  {
    title: "No cerrar el loop con la captura viva",
    body: "Se limpia el historico, pero el flujo operativo sigue produciendo el mismo ruido una semana despues.",
  },
];

export const classThirteenRules = [
  {
    title: "Limpiar segun la decision que se quiere defender",
    body: "La correccion gana foco cuando se sabe si el objetivo es mejorar scoring, forecast, churn, SLA o lectura de valor.",
  },
  {
    title: "Separar correccion tecnica de definicion semantica",
    body: "Formato, duplicados y vacios piden una capa; significado de estados, categorias o clientes pide otra.",
  },
  {
    title: "Dejar trazabilidad de la transformacion",
    body: "La empresa madura puede explicar que se cambio, por que se cambio y con que regla se resolvio el conflicto.",
  },
  {
    title: "Corregir origen y no solo historico",
    body: "La limpieza sostenible mejora cuando el aprendizaje vuelve a formularios, capturas y reglas de operacion.",
  },
];

export const classThirteenRoadmapCards = [
  {
    kicker: "Paso 1",
    title: "Elegir la entidad critica",
    body: "Cliente, oportunidad, ticket o pedido: conviene empezar por la entidad que mas dano hace cuando esta rota.",
    tags: ["entidad", "foco", "impacto"],
  },
  {
    kicker: "Paso 2",
    title: "Definir reglas de limpieza y reconciliacion",
    body: "Se nombran matching, defaults, taxonomias, validaciones y conflictos aceptables antes de transformar masivamente.",
    tags: ["matching", "reglas", "conflictos"],
  },
  {
    kicker: "Paso 3",
    title: "Validar sobre casos reales",
    body: "La limpieza se prueba en muestras concretas para ver si la version corregida realmente ayuda a leer mejor el negocio.",
    tags: ["muestra", "validacion", "casos"],
  },
  {
    kicker: "Paso 4",
    title: "Cerrar el loop con captura y ownership",
    body: "La mejora se sostiene cuando vuelve a formularios, procesos y responsables de la fuente original.",
    tags: ["origen", "ownership", "sostenibilidad"],
  },
];

export const classThirteenTakeaways = [
  "Limpiar datos no es maquillaje; es volver defendible una entidad, una definicion o una lectura de negocio.",
  "La consistencia vale tanto como la completitud cuando el objetivo es comparar, cruzar o automatizar decisiones.",
  "Toda limpieza sostenible deja trazabilidad y corrige tambien el origen del ruido.",
  "La siguiente clase convierte esta base en una disciplina mas amplia de calidad de datos.",
];

export const classFourteenQualityDimensions = [
  {
    id: "completeness",
    label: "Completitud",
    title: "La calidad cae cuando faltan campos, eventos o tramos enteros del flujo",
    body: "No todo faltante importa igual. El valor de revisar completitud esta en detectar huecos que cambian la decision, el analisis o la automatizacion futura.",
    signal: "Coverage del dato",
    signals: ["campos clave vacios", "eventos que desaparecen", "segmentos subrepresentados"],
    outcomes: ["lectura sesgada", "segmentos rotos", "forecast debil"],
    scores: [88, 76, 72],
    caution: "Rellenar por rellenar puede esconder el problema. Primero conviene distinguir vacios aceptables de vacios que cambian la historia.",
  },
  {
    id: "accuracy",
    label: "Precision",
    title: "El dato puede estar completo y aun asi representar mal la realidad",
    body: "La precision importa cuando montos, estados, tiempos o categorias llegan, pero llegan mal. Esa diferencia rompe confianza aunque la tabla se vea llena.",
    signal: "Representacion correcta",
    signals: ["valores absurdos", "estados imposibles", "montos que no cierran"],
    outcomes: ["KPIs falsos", "decisiones erradas", "perdida de credibilidad"],
    scores: [92, 82, 78],
    caution: "No alcanza con detectar outliers. Tambien hay que revisar reglas de negocio y origen operacional del error.",
  },
  {
    id: "timeliness",
    label: "Oportunidad",
    title: "La calidad tambien depende de llegar a tiempo para decidir",
    body: "Un dato perfecto pero tardio puede ser inutil. La oportunidad se vuelve critica cuando la empresa necesita priorizar, reaccionar o intervenir dentro de una ventana corta.",
    signal: "Freshness util",
    signals: ["cargas tardias", "lags entre sistemas", "dashboards desfasados"],
    outcomes: ["accion tarde", "SLA incumplido", "menos capacidad de reaccion"],
    scores: [84, 88, 70],
    caution: "No todo necesita tiempo real. La pregunta correcta es que latency tolera la decision sin perder valor.",
  },
  {
    id: "consistency",
    label: "Consistencia",
    title: "La calidad se rompe cuando el mismo hecho cambia de significado segun sistema o equipo",
    body: "La consistencia permite comparar periodos, areas y entidades sin pelear cada vez por definiciones distintas de estado, categoria o cliente.",
    signal: "Mismo significado",
    signals: ["diccionarios cruzados", "etapas incompatibles", "unidades mezcladas"],
    outcomes: ["comparacion falsa", "joins fragiles", "conflicto entre areas"],
    scores: [90, 80, 74],
    caution: "La consistencia no se logra solo en BI. Requiere acuerdo operativo y versionado de cambios de definicion.",
  },
];

export const classFourteenMonitoringCards = [
  {
    kicker: "Monitoreo",
    title: "Scorecards de salud por fuente",
    body: "Una fuente madura deja ver completitud, frescura, errores y volumen anormal sin tener que investigar manualmente cada semana.",
    tags: ["scorecard", "salud", "fuente"],
  },
  {
    kicker: "Monitoreo",
    title: "Thresholds y alertas accionables",
    body: "La calidad mejora cuando el equipo sabe que umbral importa y que hacer cuando se rompe, no solo que algo se puso rojo.",
    tags: ["threshold", "alerta", "respuesta"],
  },
  {
    kicker: "Monitoreo",
    title: "Owners visibles por dato critico",
    body: "Cada indicador importante necesita alguien que pueda revisar, corregir y escalar sin esperar a que otro equipo lo descubra.",
    tags: ["owner", "escalado", "responsable"],
  },
  {
    kicker: "Monitoreo",
    title: "Revision sobre uso real",
    body: "La calidad vale mas cuando se revisa sobre decisiones concretas: scoring, dashboard, forecast o automatizacion que consumen la fuente.",
    tags: ["uso", "decision", "consumo"],
  },
];

export const classFourteenImpactCards = [
  {
    kicker: "Impacto",
    title: "Forecast fragil",
    body: "Datos tardios o inconsistentes cambian lectura de pipeline, demanda o capacidad y erosionan confianza en la planificacion.",
    tags: ["forecast", "planeacion", "confianza"],
  },
  {
    kicker: "Impacto",
    title: "Automatizacion errada",
    body: "Un flujo automatico escala el problema mas rapido cuando la fuente que lo alimenta ya venia rota o desfasada.",
    tags: ["automatizacion", "escala", "riesgo"],
  },
  {
    kicker: "Impacto",
    title: "Servicio desigual",
    body: "Soporte y priorizacion se vuelven injustos cuando ciertos casos llegan incompletos o mal clasificados sistematicamente.",
    tags: ["servicio", "priorizacion", "fairness"],
  },
  {
    kicker: "Impacto",
    title: "Pelea politica por el numero",
    body: "Cuando cada equipo muestra una version distinta del mismo KPI, la calidad ya dejo de ser tecnica y se volvio problema de coordinacion ejecutiva.",
    tags: ["KPI", "alineacion", "credibilidad"],
  },
];

export const classFourteenAntiPatterns = [
  {
    title: "Mirar calidad solo en la tabla final",
    body: "Se revisa el dashboard, pero no la captura, el join o la regla operativa que genera el problema rio arriba.",
  },
  {
    title: "Confiar en promedio global",
    body: "Una fuente puede verse sana en conjunto y aun estar rota para segmentos, canales o equipos especificos.",
  },
  {
    title: "Alertar sin responsable ni accion",
    body: "Las notificaciones se acumulan, pero nadie sabe quien corrige ni con que prioridad hacerlo.",
  },
  {
    title: "Confundir dato disponible con dato confiable",
    body: "Que algo llegue al sistema no significa que ya represente bien la realidad o sirva para una decision sensible.",
  },
];

export const classFourteenRules = [
  {
    title: "Medir calidad sobre datos criticos para decision",
    body: "No hace falta instrumentar todo igual. Conviene empezar por los campos, entidades y eventos que cambian una accion importante.",
  },
  {
    title: "Separar dimension de calidad y respuesta operativa",
    body: "Completitud, precision, oportunidad y consistencia no se arreglan con la misma palanca ni con el mismo equipo.",
  },
  {
    title: "Monitorear por fuente y por consumo",
    body: "La calidad mejora cuando se observa tanto el origen como el dashboard, modelo o automatizacion que depende de esa fuente.",
  },
  {
    title: "Usar la calidad para crear confianza",
    body: "El objetivo no es solo tener scorecards; es que negocio vuelva a confiar en el numero y lo use para decidir con menos discusion improductiva.",
  },
];

export const classFourteenRoadmapCards = [
  {
    kicker: "Paso 1",
    title: "Elegir dato critico y dimension relevante",
    body: "Primero se define que entidad o KPI importa y que dimension de calidad la esta debilitando mas hoy.",
    tags: ["dato critico", "dimension", "foco"],
  },
  {
    kicker: "Paso 2",
    title: "Instrumentar medicion y thresholds",
    body: "Se crean checks de salud con umbrales y contexto suficiente para entender si el problema es real o ruido tolerable.",
    tags: ["checks", "thresholds", "salud"],
  },
  {
    kicker: "Paso 3",
    title: "Asignar owner y playbook de respuesta",
    body: "Cada alerta importante necesita responsable, prioridad y accion minima definida para no convertirse en decoracion.",
    tags: ["owner", "playbook", "respuesta"],
  },
  {
    kicker: "Paso 4",
    title: "Cerrar loop con origen y consumo",
    body: "La mejora se sostiene cuando la correccion vuelve a captura, definicion o integracion, y luego se verifica en el uso final.",
    tags: ["origen", "consumo", "verificacion"],
  },
];

export const classFourteenTakeaways = [
  "Calidad de datos no es un KPI aislado; es una condicion para confiar en decisiones, automatizaciones y visualizaciones.",
  "Completitud, precision, oportunidad y consistencia piden controles distintos y owners claros.",
  "La calidad madura cuando se mide sobre datos criticos y con respuesta operativa definida.",
  "La siguiente clase usa esta base para mostrar como visualizar mejor para decidir.",
];

export const classFifteenVisualizationProfiles = [
  {
    id: "executive",
    label: "Ejecutivo",
    title: "Tablero para ver rapido si el negocio esta dentro o fuera de rumbo",
    body: "La visualizacion ejecutiva no necesita mostrar todo. Necesita dejar clara la salud general, la desviacion importante y que pregunta deberia abrirse despues.",
    question: "Estamos mejor o peor de lo que esperabamos?",
    metrics: [
      { label: "Cadencia", value: "semanal" },
      { label: "Foco", value: "prioridades" },
      { label: "Detalle", value: "bajo" },
    ],
    designRules: ["pocos KPIs", "comparacion con meta", "alertas visibles"],
    failureModes: ["demasiado detalle", "sin contexto vs meta", "acciones no claras"],
    audience: "Direccion y liderazgo",
  },
  {
    id: "operations",
    label: "Operativo",
    title: "Cockpit para gestionar volumen, cola y excepciones en tiempo util",
    body: "La visualizacion operativa sirve cuando ayuda a priorizar ahora: que esta trabado, donde sube el error y a quien hay que mover primero.",
    question: "Que necesita intervencion inmediata?",
    metrics: [
      { label: "Cadencia", value: "intra-dia" },
      { label: "Foco", value: "cola" },
      { label: "Detalle", value: "alto" },
    ],
    designRules: ["estado actual", "excepciones arriba", "drilldown rapido"],
    failureModes: ["demasiadas tarjetas", "sin prioridad", "no muestra transicion"],
    audience: "Operacion y supervisores",
  },
  {
    id: "growth",
    label: "Growth",
    title: "Vista para entender funnel, cohortes y palancas de conversion",
    body: "La lectura de growth necesita secuencia, comparacion y capacidad de detectar donde cambia el comportamiento y para quien cambia.",
    question: "Que esta moviendo conversion o retencion?",
    metrics: [
      { label: "Cadencia", value: "diaria" },
      { label: "Foco", value: "funnel" },
      { label: "Detalle", value: "medio" },
    ],
    designRules: ["comparar cohortes", "mostrar drop-offs", "segmentacion util"],
    failureModes: ["solo vanity metrics", "sin cohortes", "sin lectura de causa"],
    audience: "Marketing, producto y growth",
  },
  {
    id: "risk",
    label: "Riesgo",
    title: "Vista para detectar desvio, incumplimiento o dano potencial antes de que escale",
    body: "Los tableros de riesgo funcionan cuando muestran thresholds, anomalias y responsables, no cuando se parecen a un resumen de negocio generico.",
    question: "Donde se esta rompiendo el control?",
    metrics: [
      { label: "Cadencia", value: "continua" },
      { label: "Foco", value: "thresholds" },
      { label: "Detalle", value: "medio" },
    ],
    designRules: ["umbrales claros", "anomalias visibles", "owner por alerta"],
    failureModes: ["semforos sin accion", "sin contexto", "alert fatigue"],
    audience: "Riesgo, compliance y operaciones criticas",
  },
];

export const classFifteenPrincipleCards = [
  {
    kicker: "Principio",
    title: "Una pantalla, una decision principal",
    body: "La visualizacion mejora cuando se diseña para una pregunta concreta y no como deposito de todos los numeros disponibles.",
    tags: ["pregunta", "decision", "foco"],
  },
  {
    kicker: "Principio",
    title: "Contexto antes que numero aislado",
    body: "Comparar contra meta, periodo anterior, segmento o threshold vuelve al KPI mucho mas util para decidir.",
    tags: ["contexto", "meta", "comparacion"],
  },
  {
    kicker: "Principio",
    title: "Jerarquia visual intencional",
    body: "No todo pesa igual. La pantalla debe dejar claro que mirar primero, que es apoyo y donde abrir mas detalle.",
    tags: ["jerarquia", "foco", "lectura"],
  },
  {
    kicker: "Principio",
    title: "Camino hacia la accion",
    body: "Un buen tablero no solo informa; deja claro si hay que investigar, priorizar, corregir o escalar algo.",
    tags: ["accion", "prioridad", "siguiente paso"],
  },
];

export const classFifteenChoiceCards = [
  {
    kicker: "Eleccion",
    title: "Serie temporal para tendencia y cambio",
    body: "Sirve cuando la pregunta principal es si algo mejora, empeora o cambia de ritmo a lo largo del tiempo.",
    tags: ["tiempo", "trend", "ritmo"],
  },
  {
    kicker: "Eleccion",
    title: "Funnel para perdida por etapa",
    body: "Ayuda cuando importa ver donde se fuga el valor o que tramo del proceso esta frenando la conversion.",
    tags: ["funnel", "drop-off", "etapa"],
  },
  {
    kicker: "Eleccion",
    title: "Cohortes para comportamiento comparado",
    body: "Permite ver como se comportan grupos distintos a lo largo del tiempo y detectar si una mejora es estructural o puntual.",
    tags: ["cohorte", "comparacion", "retencion"],
  },
  {
    kicker: "Eleccion",
    title: "Scatter o distribucion para dispersion y anomalias",
    body: "Conviene cuando la pregunta ya no es promedio sino variacion, dispersion o casos fuera de patron.",
    tags: ["dispersion", "outliers", "variacion"],
  },
];

export const classFifteenAntiPatterns = [
  {
    title: "Llenar la pantalla de numeros",
    body: "Cuando todo compite por atencion, nada ayuda a decidir con claridad ni rapidez.",
  },
  {
    title: "Usar visualizaciones por costumbre",
    body: "Se repiten barras, tortas o tablas sin preguntar si realmente responden mejor la decision que importa.",
  },
  {
    title: "Mostrar KPI sin comparacion",
    body: "El numero aislado parece informativo, pero no dice si la situacion es buena, mala o digna de accion.",
  },
  {
    title: "Olvidar quien consume el tablero",
    body: "Una vista ejecutiva, operativa o analitica no puede hablarle igual a todos sin perder potencia.",
  },
];

export const classFifteenRules = [
  {
    title: "Diseñar desde la pregunta y no desde la base",
    body: "Primero se define que decision debe habilitar la pantalla; despues se eligen KPIs, chart types y nivel de detalle.",
  },
  {
    title: "Comparar contra algo que importe",
    body: "Meta, periodo, threshold o cohorte: el contexto correcto convierte visualizacion en criterio y no en decoracion.",
  },
  {
    title: "Separar overview de investigacion",
    body: "La pantalla principal muestra que pasa; el detalle se abre despues para entender por que pasa sin saturar la primera lectura.",
  },
  {
    title: "Dejar explicito el siguiente paso",
    body: "La mejor visualizacion conduce a priorizar, corregir, explorar o escalar con menos friccion cognitiva.",
  },
];

export const classFifteenWorkflowCards = [
  {
    kicker: "Paso 1",
    title: "Nombrar la decision y la audiencia",
    body: "La misma fuente puede pedir tableros completamente distintos segun si la mira direccion, operacion o analisis.",
    tags: ["audiencia", "decision", "uso"],
  },
  {
    kicker: "Paso 2",
    title: "Elegir contexto y comparaciones",
    body: "Se define contra que se va a leer el numero: meta, periodo, segmento, threshold o cohorte relevante.",
    tags: ["meta", "contexto", "comparacion"],
  },
  {
    kicker: "Paso 3",
    title: "Diseñar jerarquia y drilldown",
    body: "Se decide que aparece primero y como se abre detalle sin romper la lectura inicial ni esconder lo importante.",
    tags: ["jerarquia", "detalle", "drilldown"],
  },
  {
    kicker: "Paso 4",
    title: "Validar con la rutina real",
    body: "La visualizacion solo madura cuando se prueba en la rutina del equipo y se ve si realmente ahorra tiempo o mejora foco.",
    tags: ["rutina", "adopcion", "ajuste"],
  },
];

export const classFifteenTakeaways = [
  "Visualizar bien es diseñar una decision, no acomodar graficos bonitos sobre una pantalla.",
  "Una buena vista deja clara la pregunta, el contexto y el siguiente paso.",
  "La eleccion de chart, comparacion y nivel de detalle depende de audiencia y cadencia de uso.",
  "La siguiente clase usa esta base para entrar a analisis exploratorio con mas disciplina.",
];

export const classSixteenExplorationProfiles = [
  {
    id: "sales",
    label: "Ventas",
    title: "Explorar cambios de volumen, mix y conversion comercial",
    body: "El analisis exploratorio en ventas sirve para dejar de discutir intuiciones sueltas y empezar a ver donde cambia el funnel, para quien cambia y desde cuando.",
    kpis: ["conversion", "ticket", "pipeline velocity"],
    note: "La exploracion madura no se queda en describir. Busca patrones que merezcan una hipotesis defendible y una siguiente prueba.",
    steps: [
      {
        key: "baseline",
        title: "Construir baseline",
        detail: "Primero se fija una foto base por periodo, etapa, territorio o segmento para no interpretar ruido como cambio real.",
        boundary: "Referencia",
        automation: "Elegir cortes y comparaciones que hagan sentido comercial.",
        guardrail: "Sin baseline claro, toda variacion parece importante aunque no lo sea.",
      },
      {
        key: "segments",
        title: "Abrir por segmentos",
        detail: "La exploracion gana poder cuando compara canal, territorio, tipo de cliente o ejecutivo y detecta donde vive la diferencia.",
        boundary: "Segmento",
        automation: "Separar lectura global de lectura por grupo.",
        guardrail: "Promedio total puede esconder diferencias muy grandes.",
      },
      {
        key: "outliers",
        title: "Detectar desvio y outliers",
        detail: "Se buscan cuentas, etapas o periodos fuera de patron para revisar si expresan oportunidad, error o cambio real del contexto.",
        boundary: "Anomalia",
        automation: "Comparar dispersion, no solo media.",
        guardrail: "No todo outlier es error; algunos muestran senales valiosas.",
      },
      {
        key: "hypothesis",
        title: "Formular hipotesis siguiente",
        detail: "La salida no deberia ser un grafico aislado, sino una explicacion tentativa que pueda validarse con mas datos o una prueba concreta.",
        boundary: "Hipotesis",
        automation: "Convertir patron en pregunta investigable.",
        guardrail: "Explorar no es confirmar lo que ya queriamos creer.",
      },
    ],
  },
  {
    id: "customers",
    label: "Clientes",
    title: "Explorar valor, recurrencia y riesgo por cohortes o segmentos",
    body: "En clientes la exploracion ayuda a ver diferencias de habito, retencion y valor que despues pueden convertirse en segmentacion, churn o personalizacion.",
    kpis: ["retencion", "frecuencia", "LTV"],
    note: "La mejor lectura aparece cuando se combinan cohortes, comportamiento y valor para detectar cambio y no solo foto estatica.",
    steps: [
      {
        key: "baseline",
        title: "Construir baseline",
        detail: "Se parte de una base por cohorte, segmento o etapa del journey para entender donde esta el comportamiento esperado.",
        boundary: "Referencia",
        automation: "Definir cohortes o etapas comparables.",
        guardrail: "Sin referencia temporal o de cohortes, la retencion se lee mal.",
      },
      {
        key: "segments",
        title: "Abrir por segmentos",
        detail: "Canal de adquisicion, valor, categoria o contexto ayudan a distinguir patrones mas accionables de uso y riesgo.",
        boundary: "Segmento",
        automation: "Buscar donde diverge el comportamiento.",
        guardrail: "Segmentar por demografia sola suele explicar poco valor real.",
      },
      {
        key: "outliers",
        title: "Detectar desvio y outliers",
        detail: "Se observan cohortes que aceleran, se desgastan o responden distinto a la media para revisar si hay una causa concreta detras.",
        boundary: "Anomalia",
        automation: "Comparar cohortes y cambio de patron.",
        guardrail: "No confundir una promocion puntual con cambio estructural.",
      },
      {
        key: "hypothesis",
        title: "Formular hipotesis siguiente",
        detail: "La lectura final propone si hay que investigar onboarding, experiencia, oferta o canal como explicacion del cambio observado.",
        boundary: "Hipotesis",
        automation: "Conectar patron con intervencion posible.",
        guardrail: "La exploracion pierde valor si no aterriza en una decision o experimento posterior.",
      },
    ],
  },
  {
    id: "operations",
    label: "Operaciones",
    title: "Explorar throughput, tiempos y excepciones del flujo real",
    body: "En operaciones el analisis exploratorio sirve para ubicar cuellos, saturacion y variacion entre equipos, turnos o tipos de caso.",
    kpis: ["throughput", "cycle time", "errores"],
    note: "El valor esta en detectar que transicion o excepcion explica gran parte de la demora, no solo mostrar promedio de proceso.",
    steps: [
      {
        key: "baseline",
        title: "Construir baseline",
        detail: "Se fija la referencia por tipo de caso, tramo del proceso o equipo para saber que demora o error es esperable.",
        boundary: "Referencia",
        automation: "Elegir ventanas y cortes operativos utiles.",
        guardrail: "Comparar flujos muy distintos entre si genera falsas alarmas.",
      },
      {
        key: "segments",
        title: "Abrir por segmentos",
        detail: "Equipo, turno, producto, prioridad o tipo de excepcion permiten encontrar donde vive el cuello o la falla.",
        boundary: "Segmento",
        automation: "Cruzar tiempo, error y volumen segun contexto operativo.",
        guardrail: "Sin contexto, una cola grande puede parecer problema cuando es solo mix distinto.",
      },
      {
        key: "outliers",
        title: "Detectar desvio y outliers",
        detail: "La dispersion muestra que casos salen completamente del patron y merecen auditoria de proceso o captura.",
        boundary: "Anomalia",
        automation: "Mirar variacion y no solo promedio final.",
        guardrail: "No todo desvio es error; algunos reflejan clases distintas de trabajo.",
      },
      {
        key: "hypothesis",
        title: "Formular hipotesis siguiente",
        detail: "La salida propone que tramo, regla o excepcion merece rediseño, automatizacion o mejor captura para seguir investigando.",
        boundary: "Hipotesis",
        automation: "Traducir hallazgo en mejora concreta del flujo.",
        guardrail: "Explorar sin proponer siguiente paso deja el aprendizaje congelado.",
      },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    title: "Explorar rendimiento por canal, cohorte y pieza",
    body: "En marketing la exploracion sirve para detectar donde cambia la conversion, como responden cohortes distintas y que combinacion de canal y mensaje merece inversion.",
    kpis: ["CTR", "conversion", "CAC"],
    note: "La exploracion robusta separa volumen de calidad y entiende donde la mejora es real y no solo efecto de mix o estacionalidad.",
    steps: [
      {
        key: "baseline",
        title: "Construir baseline",
        detail: "Se define una referencia por canal, periodo o campana para evaluar si el cambio observado es mejora real o ruido.",
        boundary: "Referencia",
        automation: "Elegir baseline por ventana y objetivo.",
        guardrail: "Sin referencia comparable, el uplift es dificil de defender.",
      },
      {
        key: "segments",
        title: "Abrir por segmentos",
        detail: "Canal, audiencia, creatividad, device o landing ayudan a entender donde vive la diferencia de performance.",
        boundary: "Segmento",
        automation: "Desagregar por componentes accionables del funnel.",
        guardrail: "Segmentar demasiado rapido puede llevar a conclusiones de muestra muy pequena.",
      },
      {
        key: "outliers",
        title: "Detectar desvio y outliers",
        detail: "Se busca si una pieza, audiencia o periodo sale del patron para revisar si hay oportunidad, saturacion o error de medicion.",
        boundary: "Anomalia",
        automation: "Combinar tendencia con dispersion.",
        guardrail: "Un outlier aislado no siempre es insight; a veces es tracking roto.",
      },
      {
        key: "hypothesis",
        title: "Formular hipotesis siguiente",
        detail: "La lectura propone si conviene cambiar presupuesto, creatividad, segmentacion o medicion para validar lo encontrado.",
        boundary: "Hipotesis",
        automation: "Convertir patron en siguiente prueba de growth.",
        guardrail: "La exploracion debe abrir preguntas mejores, no confirmar intuiciones previas a la fuerza.",
      },
    ],
  },
];

export const classSixteenPatternCards = [
  {
    kicker: "Patron",
    title: "Distribucion y dispersion",
    body: "Antes de interpretar promedios conviene mirar variacion, colas y concentracion para entender que tan estable es el fenomeno.",
    tags: ["distribucion", "variacion", "dispersion"],
  },
  {
    kicker: "Patron",
    title: "Tendencia y cambio de ritmo",
    body: "Las series muestran cuando algo acelera, cae o cambia de tendencia y si ese cambio coincide con contexto, campaña o proceso.",
    tags: ["tiempo", "tendencia", "ritmo"],
  },
  {
    kicker: "Patron",
    title: "Segmentos y cohortes",
    body: "Muchas respuestas aparecen recien cuando se compara grupos o cohortes y no solo el agregado total del negocio.",
    tags: ["segmentos", "cohortes", "comparacion"],
  },
  {
    kicker: "Patron",
    title: "Outliers y excepciones",
    body: "Los casos fuera de patron pueden revelar error, oportunidad o un mecanismo nuevo que valga la pena investigar.",
    tags: ["outliers", "anomalias", "excepciones"],
  },
];

export const classSixteenHypothesisCards = [
  {
    kicker: "Hipotesis",
    title: "Que cambio realmente",
    body: "La primera pregunta util es identificar que variable, tramo o segmento se movio de verdad y no solo visualmente.",
    tags: ["cambio", "variable", "senal"],
  },
  {
    kicker: "Hipotesis",
    title: "Para quien cambio",
    body: "Detectar si el efecto vive en un grupo particular ayuda a traducir insight en segmentacion o accion mas concreta.",
    tags: ["segmento", "grupo", "contexto"],
  },
  {
    kicker: "Hipotesis",
    title: "Desde cuando y con que contexto",
    body: "Tiempo, campaña, proceso, canal o cambio operacional ayudan a construir una explicacion mas defendible del patron.",
    tags: ["timeline", "contexto", "causa"],
  },
  {
    kicker: "Hipotesis",
    title: "Que prueba sigue despues",
    body: "La exploracion madura deja una siguiente validacion: un cruce, una limpieza, un experimento o una intervencion operativa.",
    tags: ["siguiente paso", "validacion", "prueba"],
  },
];

export const classSixteenAntiPatterns = [
  {
    title: "Explorar para confirmar prejuicios",
    body: "Se buscan graficos que validen una idea previa en lugar de dejar que el dato abra preguntas incomodas o nuevas.",
  },
  {
    title: "Confundir correlacion con explicacion final",
    body: "Ver una asociacion util no significa que ya entendimos la causa ni que debamos actuar sin mas validacion.",
  },
  {
    title: "Quedarse en promedio total",
    body: "El agregado es comodo, pero suele esconder diferencias fuertes entre segmentos, cohortes o etapas del flujo.",
  },
  {
    title: "No convertir hallazgo en siguiente pregunta",
    body: "La exploracion pierde valor cuando produce curiosidad, pero no hipotesis accionable ni siguiente paso de analisis.",
  },
];

export const classSixteenRules = [
  {
    title: "Partir de una pregunta y un baseline",
    body: "El analisis exploratorio mejora cuando la exploracion tiene una pregunta inicial y una referencia con la que comparar.",
  },
  {
    title: "Abrir por segmentos y tiempo",
    body: "La mayoria de los insights utiles aparece cuando se cruza cambio temporal con grupos o contextos relevantes.",
  },
  {
    title: "Separar hallazgo de explicacion definitiva",
    body: "La exploracion descubre patrones; la explicacion robusta suele necesitar limpieza adicional, contexto o una prueba posterior.",
  },
  {
    title: "Terminar en hipotesis o accion siguiente",
    body: "Cada visualizacion exploratoria deberia cerrar con que vale la pena validar, corregir o experimentar despues.",
  },
];

export const classSixteenFrameworkCards = [
  {
    kicker: "Paso 1",
    title: "Definir pregunta, baseline y unidad de analisis",
    body: "Se elige que variable mirar, contra que referencia compararla y sobre que entidad o segmento trabajar.",
    tags: ["pregunta", "baseline", "unidad"],
  },
  {
    kicker: "Paso 2",
    title: "Describir, segmentar y comparar",
    body: "La exploracion ordena primero tendencia, dispersion, cohortes y diferencias por grupo antes de sacar conclusiones fuertes.",
    tags: ["describir", "segmentar", "comparar"],
  },
  {
    kicker: "Paso 3",
    title: "Detectar anomalias y puntos de friccion",
    body: "Se buscan outliers, quiebres y transiciones donde vale la pena profundizar en vez de recorrer toda la data por igual.",
    tags: ["anomalias", "quiebres", "friccion"],
  },
  {
    kicker: "Paso 4",
    title: "Formular hipotesis y siguiente validacion",
    body: "La salida madura del EDA es una hipotesis defendible con un siguiente paso claro para confirmar o descartar.",
    tags: ["hipotesis", "validacion", "aprendizaje"],
  },
];

export const classSixteenTakeaways = [
  "El analisis exploratorio sirve para encontrar preguntas mejores, no solo para producir graficos bonitos.",
  "Baseline, segmentos, tiempo y dispersion ayudan a separar ruido de patron util.",
  "Un buen EDA termina en hipotesis y siguiente validacion, no en una opinion mas decorada.",
  "La siguiente fase del curso ya puede entrar a KPIs ejecutivos y dashboards con una base mucho mas solida.",
];

export const classSeventeenKpiProfiles = [
  {
    id: "growth",
    label: "Crecimiento",
    title: "KPIs para leer expansion, adquisicion y ritmo de negocio",
    body: "Los KPIs de crecimiento sirven cuando muestran si la empresa esta ganando velocidad sostenible y que palanca explica ese cambio.",
    chip: "Expansion y ritmo",
    scores: [88, 76, 72],
    primaryTitle: "Preguntas que deberian responder",
    primaryItems: [
      "Estamos creciendo por volumen, ticket o recurrencia?",
      "Que canal o segmento empuja la aceleracion real?",
      "La mejora es sostenible o una anomalia puntual?",
    ],
    pills: ["ingresos", "clientes", "frecuencia"],
    secondaryTitle: "Si se diseñan mal",
    secondaryItems: ["mezclan vanity con valor", "ocultan mix por segmento", "no dejan siguiente accion clara"],
    noteTitle: "Regla de diseño",
    noteBody: "Un KPI ejecutivo vale cuando conecta crecimiento con una palanca concreta y no solo con una celebracion del numero bruto.",
  },
  {
    id: "efficiency",
    label: "Eficiencia",
    title: "Indicadores para leer capacidad, costo y productividad",
    body: "La eficiencia importa cuando la organizacion necesita crecer sin escalar friccion operativa, tiempo o costo mas rapido que el valor capturado.",
    chip: "Capacidad y costo",
    scores: [84, 82, 78],
    primaryTitle: "Preguntas que deberian responder",
    primaryItems: [
      "Estamos liberando capacidad o solo moviendo trabajo de un cuello a otro?",
      "Que tramo del proceso consume mas tiempo o costo marginal?",
      "La mejora se sostiene entre equipos y periodos?",
    ],
    pills: ["throughput", "costo", "tiempo"],
    secondaryTitle: "Si se diseñan mal",
    secondaryItems: ["premian volumen sin calidad", "ignoran excepciones", "rompen la comparacion entre equipos"],
    noteTitle: "Regla de diseño",
    noteBody: "La eficiencia ejecutiva se lee mejor cuando el KPI muestra output junto con costo, tiempo o retrabajo y no solo actividad total.",
  },
  {
    id: "customer",
    label: "Cliente",
    title: "Indicadores para leer valor, experiencia y retencion",
    body: "Los KPIs de cliente ayudan a ver si la empresa no solo vende, sino que retiene, expande y sostiene una experiencia defendible en el tiempo.",
    chip: "Valor y experiencia",
    scores: [86, 70, 74],
    primaryTitle: "Preguntas que deberian responder",
    primaryItems: [
      "Estamos reteniendo a los clientes correctos?",
      "La experiencia mejora o solo baja el reclamo visible?",
      "Que segmento gana o pierde valor con el tiempo?",
    ],
    pills: ["retencion", "NPS/CSAT", "LTV"],
    secondaryTitle: "Si se diseñan mal",
    secondaryItems: ["mezclan percepcion con resultado", "no cruzan valor con riesgo", "ocultan desgaste por cohortes"],
    noteTitle: "Regla de diseño",
    noteBody: "Un KPI de cliente ejecutivo debe conectar experiencia con economia de cliente y no quedarse solo en percepcion o transaccion aislada.",
  },
  {
    id: "risk",
    label: "Riesgo",
    title: "KPIs para leer control, desvio y salud del sistema",
    body: "Los indicadores de riesgo valen cuando muestran donde una operacion, un modelo o una politica sale de tolerancia antes de que el dano escale.",
    chip: "Control y desvio",
    scores: [82, 88, 80],
    primaryTitle: "Preguntas que deberian responder",
    primaryItems: [
      "Que umbral se esta rompiendo y desde cuando?",
      "Que segmento o flujo concentra el mayor desvio?",
      "Quien deberia actuar primero y con que evidencia?",
    ],
    pills: ["thresholds", "anomalias", "cumplimiento"],
    secondaryTitle: "Si se diseñan mal",
    secondaryItems: ["usan semaforos sin contexto", "alertan sin prioridad", "no dejan owner claro"],
    noteTitle: "Regla de diseño",
    noteBody: "Los KPIs de riesgo deben mostrar desvio, impacto y responsable; si solo muestran rojo, no ayudan a gobernar nada.",
  },
];

export const classSeventeenMetricCards = [
  {
    kicker: "Diseno",
    title: "Un KPI debe tener definicion defendible",
    body: "Si el equipo no puede explicar como se calcula y que significa, el indicador no va a sostener confianza ejecutiva.",
    tags: ["definicion", "formula", "significado"],
  },
  {
    kicker: "Diseno",
    title: "Debe conectar con una decision",
    body: "El KPI importa cuando cambia foco, presupuesto, priorizacion o ritmo de accion del equipo que lo mira.",
    tags: ["decision", "accion", "prioridad"],
  },
  {
    kicker: "Diseno",
    title: "Necesita comparacion correcta",
    body: "Meta, periodo previo, threshold o cohorte convierten el numero en criterio y no en estadistica aislada.",
    tags: ["comparacion", "meta", "contexto"],
  },
  {
    kicker: "Diseno",
    title: "Debe sobrevivir a la rutina",
    body: "Un KPI ejecutivo maduro se usa en cadencia real y no desaparece despues de una reunion o de un dashboard bonito.",
    tags: ["rutina", "cadencia", "adopcion"],
  },
];

export const classSeventeenDecisionCards = [
  {
    kicker: "Lectura",
    title: "Leading y lagging no compiten",
    body: "Los indicadores adelantados ayudan a reaccionar; los rezagados ayudan a validar si el cambio se tradujo en resultado.",
    tags: ["leading", "lagging", "balance"],
  },
  {
    kicker: "Lectura",
    title: "Pocos KPIs suelen decidir mejor",
    body: "Una canasta corta y bien diseñada ordena mejor la conversacion que una lluvia de numeros sin jerarquia.",
    tags: ["foco", "jerarquia", "claridad"],
  },
  {
    kicker: "Lectura",
    title: "Segmentar cambia la utilidad del indicador",
    body: "El KPI agregado sirve para abrir la conversacion; el corte correcto muestra donde realmente vive la historia.",
    tags: ["segmentos", "cortes", "historia"],
  },
  {
    kicker: "Lectura",
    title: "Cadencia y owner importan tanto como formula",
    body: "Sin rutina y responsable, el KPI se vuelve decoracion ejecutiva y no instrumento de gobierno.",
    tags: ["cadencia", "owner", "gobierno"],
  },
];

export const classSeventeenAntiPatterns = [
  {
    title: "Confundir reporte con KPI",
    body: "Muchos numeros describen actividad, pero no todos cambian una decision o una prioridad de negocio.",
  },
  {
    title: "Mostrar demasiados indicadores juntos",
    body: "Cuando todo parece importante, la conversacion ejecutiva se dispersa y nadie sabe que numero pesa mas.",
  },
  {
    title: "No explicitar comparacion ni meta",
    body: "Un KPI sin contexto obliga al equipo a interpretar a ciegas si la situacion mejora, empeora o es irrelevante.",
  },
  {
    title: "No conectar el KPI con un owner",
    body: "Si nadie responde por moverlo o investigarlo, el indicador solo consume pantalla y tiempo de reunion.",
  },
];

export const classSeventeenRules = [
  {
    title: "Diseñar desde la decision ejecutiva",
    body: "Primero se define que debe decidir la persona que lo mira; despues se eligen formula, corte y frecuencia del KPI.",
  },
  {
    title: "Combinar resultado con palanca",
    body: "El mejor KPI muestra no solo que paso, sino por donde mirar para entender o mover ese resultado.",
  },
  {
    title: "Usar comparaciones consistentes",
    body: "Meta, periodo, threshold o cohorte deben elegirse de forma que la lectura sea rapida y repetible entre reuniones.",
  },
  {
    title: "Asignar dueño y cadencia de revision",
    body: "El indicador madura cuando alguien responde por leerlo, investigarlo y proponer siguiente accion si se desvia.",
  },
];

export const classSeventeenRoadmapCards = [
  {
    kicker: "Paso 1",
    title: "Elegir la decision ejecutiva principal",
    body: "El punto de partida no es la base de datos, sino la conversacion que necesita una lectura mejor del negocio.",
    tags: ["decision", "foco", "pregunta"],
  },
  {
    kicker: "Paso 2",
    title: "Diseñar canasta minima de KPIs",
    body: "Se eligen pocos indicadores complementarios que muestren resultado, palanca y riesgo sin saturar la pantalla.",
    tags: ["canasta", "jerarquia", "balance"],
  },
  {
    kicker: "Paso 3",
    title: "Definir comparacion, corte y owner",
    body: "Cada KPI necesita contexto, segmentacion util y responsable de lectura o investigacion si se desvia.",
    tags: ["comparacion", "segmento", "owner"],
  },
  {
    kicker: "Paso 4",
    title: "Probar en rutina real de liderazgo",
    body: "La prueba final es si la canasta ayuda a decidir mejor en una reunion real y no solo en la teoria de BI.",
    tags: ["rutina", "adopcion", "ajuste"],
  },
];

export const classSeventeenTakeaways = [
  "Un KPI ejecutivo vale cuando cambia una decision y no solo cuando se ve elegante en una pantalla.",
  "Resultado, palanca, comparacion y owner son la anatomia minima de un buen indicador.",
  "Pocos KPIs bien diseñados suelen gobernar mejor que una lluvia de numeros.",
  "La siguiente clase toma estos indicadores y los convierte en dashboards y storytelling para decision.",
];

export const classEighteenStoryProfiles = [
  {
    id: "leadership",
    label: "Direccion",
    title: "Narrativa corta para decidir donde acelerar o corregir",
    body: "El storytelling ejecutivo sirve cuando ordena una lectura breve: que paso, por que importa y que deberia decidir liderazgo despues de verlo.",
    kpis: ["salud", "desvio", "prioridad"],
    note: "Direccion necesita claridad y comparacion, no detalle operativo excesivo en la primera lectura.",
    steps: [
      {
        key: "question",
        title: "Pregunta central",
        detail: "Definir la pregunta que la reunion necesita responder antes de abrir cualquier slide o dashboard.",
        boundary: "Pregunta",
        automation: "Convertir reunion en decision concreta.",
        guardrail: "Sin pregunta clara, la historia se vuelve una caminata por numeros.",
      },
      {
        key: "signal",
        title: "Senal principal",
        detail: "Mostrar primero el dato o KPI que mejor resume la situacion, con comparacion y nivel de urgencia.",
        boundary: "Senal",
        automation: "Elegir un titular numerico claro.",
        guardrail: "No abrir con tres mensajes principales al mismo tiempo.",
      },
      {
        key: "cause",
        title: "Causa o tension",
        detail: "Explicar donde vive el cambio: segmento, canal, proceso o contexto que justifica la lectura.",
        boundary: "Causa",
        automation: "Traducir numero a historia defendible.",
        guardrail: "No confundir correlacion visual con explicacion final.",
      },
      {
        key: "action",
        title: "Decision siguiente",
        detail: "Cerrar con que se deberia priorizar, corregir, investigar o sostener despues de la lectura.",
        boundary: "Accion",
        automation: "Dejar un siguiente paso concreto.",
        guardrail: "Una historia sin accion final es solo reporte mejor decorado.",
      },
    ],
  },
  {
    id: "operations",
    label: "Operacion",
    title: "Historia para priorizar bloqueos y capacidad en tiempo util",
    body: "En operaciones el storytelling funciona cuando deja clara la cola, la excepcion o el cuello que necesita accion ya mismo.",
    kpis: ["cola", "SLA", "excepcion"],
    note: "La historia operativa necesita prioridad inmediata y drilldown rapido sin perder de vista el flujo completo.",
    steps: [
      {
        key: "question",
        title: "Pregunta central",
        detail: "Definir que necesita saberse ahora para mover equipo o capacidad y no solo para describir el sistema.",
        boundary: "Pregunta",
        automation: "Conectar historia con priorizacion inmediata.",
        guardrail: "Si no cambia el orden de accion, no era la historia correcta.",
      },
      {
        key: "signal",
        title: "Senal principal",
        detail: "Abrir con el tramo del flujo donde se concentra tiempo, error o volumen fuera de patron.",
        boundary: "Senal",
        automation: "Mostrar el cuello antes del detalle lateral.",
        guardrail: "Evitar overview genérico si el problema vive en una excepcion puntual.",
      },
      {
        key: "cause",
        title: "Causa o tension",
        detail: "Ubicar si el desvio nace en mix, proceso, captura, turno o decision operativa especifica.",
        boundary: "Causa",
        automation: "Separar sintoma de causa probable.",
        guardrail: "No llenar la historia de causas hipoteticas sin jerarquia.",
      },
      {
        key: "action",
        title: "Decision siguiente",
        detail: "Cerrar con que se reasigna, que se corrige o que alerta se eleva despues de la lectura.",
        boundary: "Accion",
        automation: "Traducir historia a movimiento operativo.",
        guardrail: "Si no hay responsable y timing, la historia no cambia el dia.",
      },
    ],
  },
  {
    id: "growth",
    label: "Growth",
    title: "Narrativa para leer funnel, cohortes y crecimiento sin humo",
    body: "En growth la historia sirve cuando deja claro que tramo mejora o cae, para quien pasa y que palanca merece experimento o presupuesto.",
    kpis: ["funnel", "cohortes", "uplift"],
    note: "Growth necesita conectar cambio con experimento siguiente y no solo mostrar charts atractivos.",
    steps: [
      {
        key: "question",
        title: "Pregunta central",
        detail: "Definir si la lectura busca crecimiento, retencion, eficiencia de canal o aprendizaje de experimento.",
        boundary: "Pregunta",
        automation: "Acotar la historia a una palanca concreta.",
        guardrail: "No mezclar adquisicion, activacion y retencion como si fueran un solo tema.",
      },
      {
        key: "signal",
        title: "Senal principal",
        detail: "Mostrar la parte del funnel, cohorte o canal donde el comportamiento realmente cambio contra baseline.",
        boundary: "Senal",
        automation: "Elegir una comparacion que abra la historia.",
        guardrail: "No abrir con vanity metrics sin contexto de negocio.",
      },
      {
        key: "cause",
        title: "Causa o tension",
        detail: "Explicar si el cambio parece venir de mix de audiencia, creatividad, timing, onboarding o friccion de producto.",
        boundary: "Causa",
        automation: "Volver accionable el patron observado.",
        guardrail: "Evitar vender causalidad cuando solo se vio correlacion preliminar.",
      },
      {
        key: "action",
        title: "Decision siguiente",
        detail: "Cerrar con el experimento, reasignacion o prueba que deberia seguir despues de la lectura.",
        boundary: "Accion",
        automation: "Conectar historia con siguiente test.",
        guardrail: "Sin experimento o cambio propuesto, la narrativa se enfria rapido.",
      },
    ],
  },
  {
    id: "board",
    label: "Board",
    title: "Historia condensada para alinear direccion y confianza",
    body: "En una lectura de board la narrativa debe resumir progreso, tension y control con un nivel de abstraccion mas alto pero sin perder credibilidad.",
    kpis: ["progreso", "riesgo", "ruta"],
    note: "El board necesita señal suficiente para juzgar direccion, pero sin entrar en el ruido operativo que se resuelve en otra instancia.",
    steps: [
      {
        key: "question",
        title: "Pregunta central",
        detail: "Definir si la historia busca aprobar una direccion, revisar un desvio o validar una inversion o apuesta.",
        boundary: "Pregunta",
        automation: "Traducir lectura a decision de alto nivel.",
        guardrail: "No llevar una reunion de board como si fuera un comite operativo.",
      },
      {
        key: "signal",
        title: "Senal principal",
        detail: "Abrir con los pocos indicadores que mejor resumen progreso, tension y exposicion actual del negocio.",
        boundary: "Senal",
        automation: "Dejar un titular cuantitativo claro.",
        guardrail: "No saturar con evidencia secundaria en la primera capa.",
      },
      {
        key: "cause",
        title: "Causa o tension",
        detail: "Explicar la razon principal del cambio y como se interpreta dentro de la estrategia o del contexto mas amplio.",
        boundary: "Causa",
        automation: "Conectar el dato con narrativa estrategica.",
        guardrail: "No esconder la incertidumbre cuando la explicacion aun no es completa.",
      },
      {
        key: "action",
        title: "Decision siguiente",
        detail: "Cerrar con la recomendacion ejecutiva y el trade-off que vale la pena aceptar o revisar.",
        boundary: "Accion",
        automation: "Llevar la historia hacia una resolucion clara.",
        guardrail: "La narrativa de board no deberia terminar en 'seguir mirando'.",
      },
    ],
  },
];

export const classEighteenNarrativeCards = [
  {
    kicker: "Narrativa",
    title: "Abrir con la pregunta, no con el dashboard completo",
    body: "La historia mejora cuando el usuario sabe desde el inicio que decision o duda se intenta resolver.",
    tags: ["pregunta", "apertura", "decision"],
  },
  {
    kicker: "Narrativa",
    title: "Elegir una senal principal",
    body: "Toda lectura fuerte necesita un dato o grafico que funcione como titular y ordene el resto de la evidencia.",
    tags: ["senal", "titular", "jerarquia"],
  },
  {
    kicker: "Narrativa",
    title: "Contextualizar con causa probable",
    body: "La historia gana credibilidad cuando explica donde vive el cambio sin prometer una certeza que aun no existe.",
    tags: ["causa", "contexto", "credibilidad"],
  },
  {
    kicker: "Narrativa",
    title: "Cerrar con decision o siguiente paso",
    body: "El storytelling de datos vale cuando deja una accion, una priorizacion o una validacion concreta sobre la mesa.",
    tags: ["accion", "cierre", "siguiente paso"],
  },
];

export const classEighteenEvidenceCards = [
  {
    kicker: "Evidencia",
    title: "Numero titular",
    body: "Sirve para abrir la historia con direccion y urgencia. Debe leerse en segundos y con contexto suficiente.",
    tags: ["titular", "contexto", "urgencia"],
  },
  {
    kicker: "Evidencia",
    title: "Comparacion relevante",
    body: "Periodo previo, meta, cohorte o threshold ayudan a entender si el cambio importa y cuanto importa.",
    tags: ["comparacion", "meta", "threshold"],
  },
  {
    kicker: "Evidencia",
    title: "Corte explicativo",
    body: "Segmento, canal, producto o proceso muestran donde vive la historia y donde conviene investigar o actuar.",
    tags: ["segmento", "corte", "explicacion"],
  },
  {
    kicker: "Evidencia",
    title: "Prueba o accion siguiente",
    body: "La evidencia madura cuando se transforma en una recomendacion o siguiente prueba, no cuando solo describe mejor el presente.",
    tags: ["prueba", "recomendacion", "accion"],
  },
];

export const classEighteenAntiPatterns = [
  {
    title: "Contar todo al mismo tiempo",
    body: "La historia pierde fuerza cuando mezcla demasiadas preguntas y obliga a la audiencia a construir sola el hilo conductor.",
  },
  {
    title: "Confundir evidencia con acumulacion de slides",
    body: "Mas graficos no significan mas claridad. Muchas veces solo esconden la pregunta principal.",
  },
  {
    title: "Prometer explicaciones definitivas muy pronto",
    body: "La narrativa gana mas credibilidad cuando distingue entre hallazgo observado y causa que aun necesita validacion.",
  },
  {
    title: "No cerrar con accion o recomendacion",
    body: "Si la historia no cambia foco, prioridad o siguiente paso, queda como reporte mejor presentado y nada mas.",
  },
];

export const classEighteenRules = [
  {
    title: "Diseñar la historia desde la audiencia",
    body: "Una misma base de datos necesita narrativas distintas segun la mire direccion, operacion, growth o board.",
  },
  {
    title: "Usar una senal principal por capa",
    body: "El relato se fortalece cuando cada slide o bloque responde una sola idea fuerte antes de pasar al detalle.",
  },
  {
    title: "Separar observacion, interpretacion y accion",
    body: "La audiencia entiende mejor cuando sabe que parte es hecho, que parte es lectura y que parte es recomendacion.",
  },
  {
    title: "Terminar con un movimiento defendible",
    body: "La historia madura cuando deja una accion, decision o prueba siguiente que vale la pena ejecutar o elevar.",
  },
];

export const classEighteenWorkflowCards = [
  {
    kicker: "Paso 1",
    title: "Definir audiencia y pregunta principal",
    body: "Toda historia gana foco cuando se diseña para una decision concreta de una audiencia concreta.",
    tags: ["audiencia", "pregunta", "decision"],
  },
  {
    kicker: "Paso 2",
    title: "Elegir la senal titular",
    body: "Se selecciona el KPI o grafico que mejor abre la lectura y ordena el resto de la evidencia.",
    tags: ["titular", "senal", "jerarquia"],
  },
  {
    kicker: "Paso 3",
    title: "Construir explicacion y contexto",
    body: "Se agregan cortes, comparaciones y tensiones que ayuden a entender por que importa la senal observada.",
    tags: ["contexto", "comparacion", "explicacion"],
  },
  {
    kicker: "Paso 4",
    title: "Cerrar con accion o validacion",
    body: "La historia termina cuando propone un siguiente paso defendible y no cuando agota todos los datos disponibles.",
    tags: ["accion", "validacion", "cierre"],
  },
];

export const classEighteenTakeaways = [
  "Storytelling con datos no es adornar dashboards; es ordenar una pregunta, una senal y una accion para una audiencia concreta.",
  "La narrativa mejora cuando separa observacion, interpretacion y recomendacion.",
  "Un buen relato ejecutivo deja claro que mirar primero y que deberia pasar despues.",
  "La siguiente clase aterriza todo esto en casos concretos de retail.",
];

export const classNineteenRetailCases = [
  {
    id: "demand",
    label: "Demanda",
    title: "Prever demanda para comprar, mover y reponer mejor",
    body: "En retail la prediccion de demanda impacta margen, rotacion y disponibilidad. El valor aparece cuando la señal ayuda a ordenar decisiones de surtido e inventario antes del quiebre.",
    chip: "Inventario y surtido",
    metrics: [
      { label: "Valor", value: "alto" },
      { label: "Complejidad", value: "media" },
      { label: "Cadencia", value: "semanal" },
    ],
    primaryTitle: "Datos que suelen pesar",
    primaryItems: ["ventas historicas", "promociones", "estacionalidad"],
    sideTitle: "Riesgos si se hace mal",
    sideItems: ["sobrestock", "quiebre", "forecast sin contexto"],
    noteTitle: "Lectura ejecutiva",
    noteBody: "No se trata solo de predecir mejor; se trata de convertir esa prediccion en decisiones de compra y reposicion mas defendibles.",
  },
  {
    id: "pricing",
    label: "Precio",
    title: "Optimizar precios sin destruir percepcion ni margen",
    body: "Retail usa IA para leer elasticidad, competencia y contexto, pero necesita hacerlo con cuidado para no entrenar a la demanda ni volver opaca la politica comercial.",
    chip: "Elasticidad y margen",
    metrics: [
      { label: "Valor", value: "alto" },
      { label: "Complejidad", value: "alta" },
      { label: "Cadencia", value: "diaria" },
    ],
    primaryTitle: "Datos que suelen pesar",
    primaryItems: ["historial de precio", "mix de producto", "respuesta por canal"],
    sideTitle: "Riesgos si se hace mal",
    sideItems: ["guerra de precios", "sesgo por canal", "erosion de marca"],
    noteTitle: "Lectura ejecutiva",
    noteBody: "La optimizacion de precio madura cuando combina rentabilidad con guardrails claros de percepcion y coherencia comercial.",
  },
  {
    id: "assortment",
    label: "Surtido",
    title: "Elegir mejor que producto, categoria o mix priorizar",
    body: "La IA ayuda a leer que surtido conviene por tienda, canal o segmento, pero necesita calidad de catalogo, ventas y contexto para no recortar valor futuro por una lectura cortoplacista.",
    chip: "Mix y espacio",
    metrics: [
      { label: "Valor", value: "medio-alto" },
      { label: "Complejidad", value: "media" },
      { label: "Cadencia", value: "mensual" },
    ],
    primaryTitle: "Datos que suelen pesar",
    primaryItems: ["rotacion", "margen", "afinidad de compra"],
    sideTitle: "Riesgos si se hace mal",
    sideItems: ["canibalizacion", "falta de contexto local", "quitar productos estrategicos"],
    noteTitle: "Lectura ejecutiva",
    noteBody: "El surtido correcto no optimiza solo rotacion; tambien protege experiencia, rentabilidad y promesa comercial por formato o canal.",
  },
  {
    id: "loyalty",
    label: "Loyalty",
    title: "Usar datos de cliente para retener y expandir mejor",
    body: "Programas de fidelizacion y activacion funcionan mejor cuando la lectura va mas alla del descuento y entiende habito, valor y siguiente mejor accion por cliente o cohorte.",
    chip: "Retencion y expansion",
    metrics: [
      { label: "Valor", value: "alto" },
      { label: "Complejidad", value: "media" },
      { label: "Cadencia", value: "semanal" },
    ],
    primaryTitle: "Datos que suelen pesar",
    primaryItems: ["recencia", "frecuencia", "mix", "respuesta a promociones"],
    sideTitle: "Riesgos si se hace mal",
    sideItems: ["sobrepromocion", "fatiga", "margen erosionado"],
    noteTitle: "Lectura ejecutiva",
    noteBody: "Loyalty genera mas valor cuando la personalizacion protege frecuencia y ticket sin educar al cliente a esperar siempre incentivo.",
  },
];

export const classNineteenRetailLevers = [
  {
    kicker: "Retail",
    title: "Disponibilidad correcta",
    body: "El valor del retail se destruye rapido cuando producto correcto no esta disponible en canal o tienda correcta en el momento correcto.",
    tags: ["stock", "reposicion", "disponibilidad"],
  },
  {
    kicker: "Retail",
    title: "Margen defendible",
    body: "Precios, promo y surtido deben leerse juntos para evitar mejoras aisladas que esconden destruccion de margen futuro.",
    tags: ["margen", "precio", "promo"],
  },
  {
    kicker: "Retail",
    title: "Experiencia consistente",
    body: "La IA ayuda cuando mejora disponibilidad, recomendacion y relevancia sin volver arbitraria la experiencia del cliente.",
    tags: ["experiencia", "consistencia", "cliente"],
  },
  {
    kicker: "Retail",
    title: "Decisiones con cadencia util",
    body: "No todos los casos necesitan tiempo real; cada palanca pide una frecuencia y una ventana de accion distinta.",
    tags: ["cadencia", "ventana", "operacion"],
  },
];

export const classNineteenRetailSignals = [
  {
    kicker: "Senal",
    title: "Venta + inventario + promo",
    body: "La combinacion mas util para leer demanda y disponibilidad casi siempre mezcla historico de venta, stock y presion promocional.",
    tags: ["venta", "stock", "promo"],
  },
  {
    kicker: "Senal",
    title: "Canal y tienda cambian la historia",
    body: "La misma categoria se comporta distinto segun formato, plaza y contexto local. Ignorarlo rompe precision y accionabilidad.",
    tags: ["canal", "tienda", "localidad"],
  },
  {
    kicker: "Senal",
    title: "Estacionalidad y calendario",
    body: "Eventos recurrentes, feriados, quincenas y campañas explican mucho del comportamiento si se integran con criterio.",
    tags: ["estacionalidad", "calendario", "eventos"],
  },
  {
    kicker: "Senal",
    title: "Cliente y canasta",
    body: "Cuando el retail conecta comportamiento individual con canasta y recurrencia, mejora loyalty y decisiones de mix con mucha mas precision.",
    tags: ["cliente", "canasta", "recurrencia"],
  },
];

export const classNineteenAntiPatterns = [
  {
    title: "Optimizar una palanca aislada",
    body: "Mejorar precio sin mirar demanda, stock o experiencia suele mover un problema de lugar en vez de resolverlo.",
  },
  {
    title: "Ignorar formato y contexto local",
    body: "La lectura agregada es comoda, pero esconde diferencias fuertes entre tienda, canal, plaza y segmento.",
  },
  {
    title: "Confundir mejora puntual con politica escalable",
    body: "Un ajuste que funciona en una categoria o en una promocion no necesariamente generaliza al resto del negocio.",
  },
  {
    title: "No cerrar el loop con operacion comercial",
    body: "El caso pierde valor si compra, precio o trade marketing no pueden convertir el insight en accion real dentro de su rutina.",
  },
];

export const classNineteenRules = [
  {
    title: "Leer rentabilidad junto con disponibilidad y experiencia",
    body: "Retail mejora cuando evita optimizaciones parciales que suben un numero y degradan otro mucho mas importante.",
  },
  {
    title: "Segmentar por formato, canal y categoria",
    body: "Las palancas de retail cambian rapido segun contexto comercial y mix de producto; el agregado total casi nunca alcanza.",
  },
  {
    title: "Diseñar cadencia por caso de uso",
    body: "Reposicion, pricing, promo y loyalty necesitan ritmos de decision distintos y no un unico tablero universal.",
  },
  {
    title: "Conectar el modelo con la accion comercial",
    body: "El valor aparece cuando compra, comercial o loyalty pueden actuar sobre la senal con ownership y timing claros.",
  },
];

export const classNineteenRoadmapCards = [
  {
    kicker: "Paso 1",
    title: "Elegir palanca retail prioritaria",
    body: "Conviene empezar por demanda, precio, surtido o loyalty segun dolor actual, calidad de datos y capacidad de accion.",
    tags: ["palanca", "dolor", "prioridad"],
  },
  {
    kicker: "Paso 2",
    title: "Mapear datos y cadencia de decision",
    body: "Se define que fuente sirve, con que ventana y que equipo va a consumir el insight o la prediccion.",
    tags: ["fuentes", "cadencia", "equipo"],
  },
  {
    kicker: "Paso 3",
    title: "Pilotear sobre una categoria o formato defendible",
    body: "La mejor forma de empezar es acotar la complejidad y validar si la palanca mejora margen, disponibilidad o respuesta del cliente.",
    tags: ["piloto", "categoria", "validacion"],
  },
  {
    kicker: "Paso 4",
    title: "Escalar con guardrails comerciales",
    body: "Si el caso funciona, se amplifica con monitoreo sobre margen, experiencia y coherencia entre canales o tiendas.",
    tags: ["escala", "guardrails", "monitoreo"],
  },
];

export const classNineteenTakeaways = [
  "Retail es una gran escuela de IA aplicada porque mezcla demanda, precio, inventario, experiencia y frecuencia en una misma cadena de valor.",
  "Las mejores oportunidades aparecen cuando se conecta palanca comercial con datos y cadencia de accion defendibles.",
  "Un caso retail serio evita optimizar un numero aislado y mira margen, disponibilidad y experiencia a la vez.",
  "La siguiente clase extiende esta lectura a banca y servicios.",
];

export const classTwentyBankingCases = [
  {
    id: "fraud",
    label: "Fraude",
    title: "Detectar anomalias y riesgo sin destruir experiencia legitima",
    body: "En banca y pagos el fraude muestra bien la tension entre precision, velocidad y costo reputacional de bloquear demasiado o demasiado poco.",
    chip: "Riesgo y friccion",
    metrics: [
      { label: "Valor", value: "alto" },
      { label: "Complejidad", value: "alta" },
      { label: "Cadencia", value: "tiempo real" },
    ],
    primaryTitle: "Datos que suelen pesar",
    primaryItems: ["patrones de transaccion", "dispositivo", "historial", "anomalias de comportamiento"],
    sideTitle: "Riesgos si se hace mal",
    sideItems: ["falsos positivos", "bloqueo injusto", "fatiga de revisores"],
    noteTitle: "Lectura ejecutiva",
    noteBody: "El fraude muestra por que una mejor deteccion vale mucho, pero tambien por que la friccion mal aplicada destruye confianza rapido.",
  },
  {
    id: "credit",
    label: "Credito",
    title: "Scoring y aprobacion con equilibrio entre riesgo y acceso",
    body: "Los modelos de credito ayudan a ordenar aprobacion y pricing, pero deben convivir con fairness, explicabilidad y apetito de riesgo claramente definido.",
    chip: "Score y acceso",
    metrics: [
      { label: "Valor", value: "alto" },
      { label: "Complejidad", value: "alta" },
      { label: "Cadencia", value: "continua" },
    ],
    primaryTitle: "Datos que suelen pesar",
    primaryItems: ["historial de pago", "ingresos", "comportamiento financiero"],
    sideTitle: "Riesgos si se hace mal",
    sideItems: ["sesgo", "explicacion debil", "aprobacion inconsistente"],
    noteTitle: "Lectura ejecutiva",
    noteBody: "Credito hace visible que la precision del score nunca alcanza sola: tambien importa si el trato es defendible y gobernable.",
  },
  {
    id: "collections",
    label: "Cobranza",
    title: "Priorizar mejor a quien contactar, cuando y por que canal",
    body: "Servicios financieros y utilities usan IA para leer probabilidad de recupero y diseñar estrategias de cobranza menos masivas y mas rentables.",
    chip: "Recupero y timing",
    metrics: [
      { label: "Valor", value: "medio-alto" },
      { label: "Complejidad", value: "media" },
      { label: "Cadencia", value: "diaria" },
    ],
    primaryTitle: "Datos que suelen pesar",
    primaryItems: ["historial de mora", "respuesta por canal", "valor de cuenta"],
    sideTitle: "Riesgos si se hace mal",
    sideItems: ["sobrecarga de contacto", "mala experiencia", "priorizacion ciega"],
    noteTitle: "Lectura ejecutiva",
    noteBody: "Cobranza gana valor cuando usa datos para enfocar mejor el esfuerzo y no solo para automatizar insistencia sin criterio.",
  },
  {
    id: "service",
    label: "Servicio",
    title: "Leer mejor volumen, prioridad y siguiente mejor respuesta",
    body: "En servicios regulados o masivos la IA ayuda a clasificar, priorizar y asistir respuestas con una mezcla delicada de control, fairness y trazabilidad.",
    chip: "Experiencia y control",
    metrics: [
      { label: "Valor", value: "medio" },
      { label: "Complejidad", value: "media" },
      { label: "Cadencia", value: "intra-dia" },
    ],
    primaryTitle: "Datos que suelen pesar",
    primaryItems: ["tickets", "motivos", "valor del cliente", "tono y urgencia"],
    sideTitle: "Riesgos si se hace mal",
    sideItems: ["trato desigual", "routing opaco", "escalado tardio"],
    noteTitle: "Lectura ejecutiva",
    noteBody: "Banca y servicios muestran bien como eficiencia y experiencia tienen que mejorar juntas y no competir como si fueran mundos separados.",
  },
];

export const classTwentyBankingConstraints = [
  {
    kicker: "Contexto",
    title: "Compliance y trazabilidad pesan mas",
    body: "Los casos de banca y servicios conviven con mayor presion regulatoria y necesidad de explicar decisiones sensibles.",
    tags: ["compliance", "trazabilidad", "regulacion"],
  },
  {
    kicker: "Contexto",
    title: "El costo del falso positivo puede ser alto",
    body: "Bloquear, negar o tratar distinto a un cliente legitimo puede destruir confianza muy rapido aunque el modelo se vea preciso en promedio.",
    tags: ["falso positivo", "confianza", "costo"],
  },
  {
    kicker: "Contexto",
    title: "Fairness y reputacion estan mas expuestos",
    body: "Credito, fraude o priorizacion hacen visible el debate sobre trato justo, explicabilidad y apelacion.",
    tags: ["fairness", "apelacion", "reputacion"],
  },
  {
    kicker: "Contexto",
    title: "Operacion y riesgo deben convivir",
    body: "El mejor caso aparece donde negocio, riesgo y operacion pueden usar la salida dentro de una misma disciplina de decision.",
    tags: ["riesgo", "operacion", "gobierno"],
  },
];

export const classTwentyBankingSignals = [
  {
    kicker: "Senal",
    title: "Historico de comportamiento",
    body: "Patrones de pago, uso, reclamo o transaccion ayudan a leer riesgo, friccion y probabilidad de respuesta futura.",
    tags: ["historial", "comportamiento", "riesgo"],
  },
  {
    kicker: "Senal",
    title: "Contexto de canal y momento",
    body: "En fraude, cobranza o servicio, el momento y el canal cambian mucho el significado de una misma senal.",
    tags: ["canal", "timing", "contexto"],
  },
  {
    kicker: "Senal",
    title: "Valor y exposicion",
    body: "No todo caso tiene el mismo peso; cruzar valor, riesgo y prioridad vuelve la decision mucho mas defendible.",
    tags: ["valor", "exposicion", "prioridad"],
  },
  {
    kicker: "Senal",
    title: "Feedback del sistema humano",
    body: "Overrides, apelaciones y correcciones humanas ayudan a entrenar mejor el sistema y a detectar cuando se esta equivocando de manera repetida.",
    tags: ["override", "apelacion", "feedback"],
  },
];

export const classTwentyAntiPatterns = [
  {
    title: "Optimizar solo precision tecnica",
    body: "En dominios regulados no alcanza con un buen score; importa tambien como se gobierna, se explica y se apela la salida.",
  },
  {
    title: "Ocultar el rol humano",
    body: "Muchos casos necesitan aprobacion, override o monitoreo activo y no conviene venderlos como automatizacion total.",
  },
  {
    title: "No diferenciar riesgo por producto o segmento",
    body: "La sensibilidad cambia mucho entre casos y no conviene aplicar una misma logica uniforme a todo el portafolio.",
  },
  {
    title: "Separar negocio de riesgo",
    body: "Si cada equipo lee el caso con sus metricas y sin una pregunta comun, la adopcion se rompe antes de escalar.",
  },
];

export const classTwentyRules = [
  {
    title: "Diseñar con trazabilidad desde el inicio",
    body: "Cada caso sensible necesita evidencia de datos usados, umbrales, overrides y cambios de politica a lo largo del tiempo.",
  },
  {
    title: "Balancear precision con friccion y fairness",
    body: "La salida correcta no es siempre la mas agresiva; es la que protege riesgo sin dañar innecesariamente experiencia o trato justo.",
  },
  {
    title: "Nombrar puntos de aprobacion y apelacion",
    body: "Cuando la decision pesa sobre personas o dinero, conviene dejar claro donde entra supervision humana y como se corrige error visible.",
  },
  {
    title: "Alinear negocio, riesgo y operacion",
    body: "Los mejores casos aparecen donde los equipos pueden usar la misma señal para decidir con menos conflicto y mayor disciplina.",
  },
];

export const classTwentyRoadmapCards = [
  {
    kicker: "Paso 1",
    title: "Elegir caso sensible pero defendible",
    body: "Conviene empezar por fraude, cobranza, scoring o servicio segun dolor actual, calidad de datos y capacidad de gobierno.",
    tags: ["caso", "gobierno", "prioridad"],
  },
  {
    kicker: "Paso 2",
    title: "Mapear riesgo, fairness y overrides",
    body: "Se definen thresholds, puntos de apelacion, dueños y tolerancia a falsos positivos o falsos negativos según el caso.",
    tags: ["thresholds", "fairness", "override"],
  },
  {
    kicker: "Paso 3",
    title: "Pilotear con evidencia visible",
    body: "La prueba se hace sobre segmentos o casos acotados dejando trazabilidad suficiente para revisar desvíos y decisiones humanas.",
    tags: ["piloto", "evidencia", "revision"],
  },
  {
    kicker: "Paso 4",
    title: "Escalar con monitoreo y gobierno",
    body: "El caso escala cuando puede medirse, explicarse y corregirse sin romper control ni experiencia del cliente.",
    tags: ["escala", "monitoreo", "control"],
  },
];

export const classTwentyTakeaways = [
  "Banca y servicios muestran donde la IA aplicada toca mas fuerte la tension entre eficiencia, fairness, riesgo y reputacion.",
  "Los mejores casos aparecen cuando negocio, riesgo y operacion pueden usar la misma señal con gobierno claro.",
  "La precision tecnica nunca alcanza sola en dominios sensibles; tambien importan explicacion, trazabilidad y apelacion.",
  "La siguiente clase baja esta lectura al terreno de e-commerce.",
];

export const classTwentyOneCommerceCases = [
  {
    id: "ranking",
    label: "Ranking",
    title: "Ordenar mejor productos, resultados y merchandising",
    body: "En e-commerce el ranking mueve gran parte de la experiencia y del valor. La IA ayuda a mostrar mejor lo que el cliente probablemente quiera ver sin perder margen ni diversidad util.",
    chip: "Discovery y conversion",
    metrics: [
      { label: "Valor", value: "alto" },
      { label: "Complejidad", value: "media" },
      { label: "Cadencia", value: "continua" },
    ],
    primaryTitle: "Datos que suelen pesar",
    primaryItems: ["clicks", "conversion", "afinidad", "margen"],
    sideTitle: "Riesgos si se hace mal",
    sideItems: ["sobreconcentracion", "poca diversidad", "sesgo a historico"],
    noteTitle: "Lectura ejecutiva",
    noteBody: "El ranking correcto no optimiza solo CTR; tambien cuida variedad, margen y experiencia de descubrimiento.",
  },
  {
    id: "recommendation",
    label: "Recomendacion",
    title: "Sugerir mejor siguiente producto, categoria o contenido",
    body: "Las recomendaciones valen cuando elevan relevancia y canasta sin sentirse invasivas o repetitivas. Eso exige leer contexto, historial y momento del journey.",
    chip: "Pertinencia y canasta",
    metrics: [
      { label: "Valor", value: "alto" },
      { label: "Complejidad", value: "media" },
      { label: "Cadencia", value: "continua" },
    ],
    primaryTitle: "Datos que suelen pesar",
    primaryItems: ["historial", "sesion actual", "afinidad de catalogo", "contexto"],
    sideTitle: "Riesgos si se hace mal",
    sideItems: ["fatiga", "eco chamber", "baja novedad"],
    noteTitle: "Lectura ejecutiva",
    noteBody: "La recomendacion madura cuando combina relevancia inmediata con exploracion suficiente para no congelar el catalogo que el cliente conoce.",
  },
  {
    id: "promo",
    label: "Promo",
    title: "Activar mejor promociones y mensajes segun propension y contexto",
    body: "E-commerce gana cuando deja de promo-masificar y usa datos para definir mejor a quien ofrecer, cuando, por que canal y con que intensidad.",
    chip: "Conversion y margen",
    metrics: [
      { label: "Valor", value: "medio-alto" },
      { label: "Complejidad", value: "media" },
      { label: "Cadencia", value: "diaria" },
    ],
    primaryTitle: "Datos que suelen pesar",
    primaryItems: ["respuesta historica", "segmento", "contexto de sesion", "valor del cliente"],
    sideTitle: "Riesgos si se hace mal",
    sideItems: ["descuento innecesario", "fatiga", "margen erosionado"],
    noteTitle: "Lectura ejecutiva",
    noteBody: "La promo inteligente protege conversion y margen cuando distingue que incentivo vale la pena y para quien realmente lo vale.",
  },
  {
    id: "promise",
    label: "Promise",
    title: "Mejorar promesa de entrega y experiencia post compra",
    body: "La IA ayuda a estimar tiempos, riesgo logístico y expectativas del cliente para reducir reclamos y proteger conversion sin prometer de mas.",
    chip: "Fulfillment y confianza",
    metrics: [
      { label: "Valor", value: "medio" },
      { label: "Complejidad", value: "alta" },
      { label: "Cadencia", value: "continua" },
    ],
    primaryTitle: "Datos que suelen pesar",
    primaryItems: ["historico logistico", "zona", "carrier", "mix de pedido"],
    sideTitle: "Riesgos si se hace mal",
    sideItems: ["sobrepromesa", "quiebre de confianza", "operacion saturada"],
    noteTitle: "Lectura ejecutiva",
    noteBody: "La mejor promesa no es la mas agresiva; es la que la operacion puede sostener sin destruir experiencia ni margen.",
  },
];

export const classTwentyOneCommerceLayers = [
  {
    kicker: "Layer",
    title: "Discovery",
    body: "Busqueda, ranking y merchandising deciden que tan rapido el cliente encuentra algo relevante dentro del catalogo.",
    tags: ["busqueda", "ranking", "discovery"],
  },
  {
    kicker: "Layer",
    title: "Conversion",
    body: "Promos, mensajes, confianza y checkout explican si la intención se convierte en compra sin agregar friccion innecesaria.",
    tags: ["conversion", "checkout", "promo"],
  },
  {
    kicker: "Layer",
    title: "Canasta",
    body: "Recomendacion, bundle y secuencia de contenido ayudan a crecer ticket y relevancia sin volverse repetitivos.",
    tags: ["canasta", "recomendacion", "bundle"],
  },
  {
    kicker: "Layer",
    title: "Post compra",
    body: "Promesa, fulfillment y soporte sostienen la confianza y el retorno mucho mas de lo que suele verse en una lectura solo de conversion.",
    tags: ["fulfillment", "retencion", "confianza"],
  },
];

export const classTwentyOneCommerceSignals = [
  {
    kicker: "Senal",
    title: "Sesion actual + historico",
    body: "La combinacion de contexto en vivo e historial suele dar mejor lectura que cualquiera de las dos por separado.",
    tags: ["sesion", "historial", "contexto"],
  },
  {
    kicker: "Senal",
    title: "Afinidad de catalogo",
    body: "Producto, categoria, margen y canasta ayudan a evitar recomendaciones o ranking que convierten pero deterioran valor futuro.",
    tags: ["catalogo", "margen", "afinidad"],
  },
  {
    kicker: "Senal",
    title: "Timing del journey",
    body: "No es lo mismo intervenir en exploracion, comparacion, checkout o post compra. El momento cambia por completo la accion correcta.",
    tags: ["journey", "timing", "ventana"],
  },
  {
    kicker: "Senal",
    title: "Contexto logistico y de confianza",
    body: "Entrega, stock, carrier y política post compra pesan fuerte sobre conversion y repeticion aunque no siempre estén en el primer dashboard.",
    tags: ["logistica", "stock", "confianza"],
  },
];

export const classTwentyOneAntiPatterns = [
  {
    title: "Optimizar solo CTR o conversion corta",
    body: "E-commerce pierde valor cuando mejora un micro indicador pero destruye canasta, margen, variedad o confianza post compra.",
  },
  {
    title: "Volver repetitiva la experiencia",
    body: "Sin exploracion ni novedad, el sistema encierra al cliente en una version demasiado estrecha del catalogo.",
  },
  {
    title: "No conectar experiencia con operacion",
    body: "Prometer o recomendar sin mirar stock y fulfillment genera una friccion que despues se paga en soporte y churn.",
  },
  {
    title: "Tratar promo como unica palanca",
    body: "Muchas veces el problema no es precio sino descubrimiento, timing, confianza o señal mal usada del cliente.",
  },
];

export const classTwentyOneRules = [
  {
    title: "Diseñar para relevancia y economics a la vez",
    body: "La mejor experiencia de e-commerce combina pertinenica, conversion, margen y promesa sostenible de servicio.",
  },
  {
    title: "Usar contexto de sesion y de cliente",
    body: "La lectura mejora cuando la accion toma en cuenta lo que pasa ahora y lo que la relacion historica ya enseñó.",
  },
  {
    title: "Cuidar diversidad y novedad",
    body: "Ranking y recomendaciones ganan fuerza cuando equilibran lo probable con suficiente exploracion del catalogo.",
  },
  {
    title: "Conectar front y back",
    body: "La experiencia que promete el sitio tiene que estar respaldada por stock, fulfillment y soporte para sostener confianza.",
  },
];

export const classTwentyOneRoadmapCards = [
  {
    kicker: "Paso 1",
    title: "Elegir tramo del journey a optimizar",
    body: "Conviene empezar por discovery, conversion, canasta o post compra segun donde este la mayor friccion actual del negocio.",
    tags: ["journey", "foco", "friccion"],
  },
  {
    kicker: "Paso 2",
    title: "Mapear señales y objetivo economico",
    body: "Se definen datos, ventana de uso y KPI principal para no optimizar el tramo con una metrica equivocada.",
    tags: ["senales", "KPI", "economics"],
  },
  {
    kicker: "Paso 3",
    title: "Pilotear con guardrails de experiencia",
    body: "La prueba sale sobre una parte del catalogo, audiencia o canal dejando visible impacto en relevancia, margen y confianza.",
    tags: ["piloto", "guardrails", "experiencia"],
  },
  {
    kicker: "Paso 4",
    title: "Escalar con monitoreo end to end",
    body: "El caso madura cuando mide no solo clicks y conversion, sino post compra, fulfillment y retorno del cliente.",
    tags: ["escala", "monitoreo", "full journey"],
  },
];

export const classTwentyOneTakeaways = [
  "E-commerce es un terreno ideal para IA aplicada porque discovery, conversion, canasta y fulfillment viven conectados.",
  "El caso mejora cuando combina relevancia de cliente con margin y promesa operativa sostenible.",
  "Ranking, recomendaciones y promo funcionan mejor cuando no destruyen diversidad, confianza ni logística.",
  "La siguiente clase entra al terreno de modelos predictivos y sus familias principales.",
];

export const classTwentyTwoModelProfiles = [
  {
    id: "regression",
    label: "Regresion",
    title: "Predecir un valor continuo como ventas, tiempo o monto",
    body: "La regresion sirve cuando la pregunta es cuantitativa: cuanto, cuanto tiempo, cuanto valor. Es la familia tipica para forecast simple, pricing y estimaciones de negocio.",
    chip: "Valor continuo",
    scores: [78, 74, 70],
    primaryTitle: "Cuando encaja",
    primaryItems: [
      "Quiero estimar un numero y no una clase",
      "Tengo drivers cuantitativos claros",
      "La salida se consumira como estimacion operativa",
    ],
    pills: ["ventas", "monto", "tiempo"],
    secondaryTitle: "Si se fuerza donde no va",
    secondaryItems: ["pierde interpretacion", "modela mal saltos", "oculta heterogeneidad"],
    noteTitle: "Lectura de clase",
    noteBody: "La regresion es util cuando el negocio necesita magnitud y no solo clasificar o rankear decisiones.",
  },
  {
    id: "classification",
    label: "Clasificacion",
    title: "Predecir categorias, riesgo o probabilidad de pertenencia",
    body: "La clasificacion organiza decisiones tipo si/no, clase A/B/C o riesgo alto/medio/bajo. Es la familia mas comun para scoring, churn, fraude y priorizacion.",
    chip: "Clase o riesgo",
    scores: [86, 82, 78],
    primaryTitle: "Cuando encaja",
    primaryItems: [
      "La salida final es una clase o probabilidad",
      "Quiero priorizar a quien revisar primero",
      "Necesito thresholds y colas de accion",
    ],
    pills: ["churn", "fraude", "lead score"],
    secondaryTitle: "Si se fuerza donde no va",
    secondaryItems: ["crea falsos binarios", "se usa sin threshold", "esconde fairness por grupo"],
    noteTitle: "Lectura de clase",
    noteBody: "La clasificacion vale mas cuando la empresa define bien que significa positivo, negativo y que costo tiene equivocarse.",
  },
  {
    id: "ranking",
    label: "Ranking",
    title: "Ordenar opciones segun relevancia o prioridad esperada",
    body: "El ranking aparece cuando importa mas el orden relativo que la probabilidad exacta, como en recomendaciones, priorizacion comercial o resultados de busqueda.",
    chip: "Orden de prioridad",
    scores: [82, 70, 80],
    primaryTitle: "Cuando encaja",
    primaryItems: [
      "Quiero decidir que va primero",
      "La relevancia relativa importa mas que la clase dura",
      "La salida se consumira en una lista o cola",
    ],
    pills: ["ranking", "cola", "relevancia"],
    secondaryTitle: "Si se fuerza donde no va",
    secondaryItems: ["se vuelve opaco", "ignora diversidad", "usa score sin accion posterior"],
    noteTitle: "Lectura de clase",
    noteBody: "Ranking es muy potente en negocio cuando la accion final consiste en elegir orden y no solo en etiquetar casos.",
  },
  {
    id: "forecasting",
    label: "Forecasting",
    title: "Predecir evolucion temporal de una serie",
    body: "Forecasting se usa cuando la pregunta central depende del tiempo: demanda, trafico, staffing, ingresos o capacidad futura.",
    chip: "Serie temporal",
    scores: [80, 78, 74],
    primaryTitle: "Cuando encaja",
    primaryItems: [
      "El tiempo cambia el significado de la senal",
      "Existe tendencia, estacionalidad o shocks",
      "La decision necesita una ventana futura clara",
    ],
    pills: ["demanda", "trafico", "capacidad"],
    secondaryTitle: "Si se fuerza donde no va",
    secondaryItems: ["mezcla series distintas", "ignora calendario", "usa horizonte incorrecto"],
    noteTitle: "Lectura de clase",
    noteBody: "Forecasting importa cuando el negocio necesita ver adelante con ventana, frecuencia y consumo claros de la prediccion.",
  },
];

export const classTwentyTwoLifecycleCards = [
  {
    kicker: "Lifecycle",
    title: "Pregunta de negocio",
    body: "Todo modelo empieza por una decision que necesita una señal mejor, no por una tecnica que la empresa quiere probar.",
    tags: ["pregunta", "decision", "foco"],
  },
  {
    kicker: "Lifecycle",
    title: "Datos y target",
    body: "El modelo necesita variables utiles y un target bien definido; sin eso, aprende una aproximacion confusa del problema real.",
    tags: ["features", "target", "datos"],
  },
  {
    kicker: "Lifecycle",
    title: "Entrenamiento y evaluacion",
    body: "No alcanza con accuracy bonita; importa como se comporta el modelo sobre el costo de error que realmente pesa para el negocio.",
    tags: ["training", "evaluacion", "costo de error"],
  },
  {
    kicker: "Lifecycle",
    title: "Consumo y monitoreo",
    body: "La prediccion vale cuando alguien la usa en rutina y cuando la empresa monitorea drift, errores y adopcion con criterio.",
    tags: ["consumo", "drift", "adopcion"],
  },
];

export const classTwentyTwoMetricCards = [
  {
    kicker: "Metricas",
    title: "Precision depende del caso",
    body: "Accuracy, recall, precision, ranking metrics o error absoluto valen distinto segun que costo tiene equivocarse.",
    tags: ["accuracy", "precision", "recall"],
  },
  {
    kicker: "Metricas",
    title: "Baseline importa mas de lo que parece",
    body: "Antes de celebrar un modelo conviene compararlo contra una referencia simple y defender por que realmente agrega valor.",
    tags: ["baseline", "benchmark", "valor"],
  },
  {
    kicker: "Metricas",
    title: "Drift y cambio de contexto",
    body: "El modelo puede verse bueno hoy y fallar mañana si cambian mezcla de datos, proceso o comportamiento del cliente.",
    tags: ["drift", "cambio", "contexto"],
  },
  {
    kicker: "Metricas",
    title: "Adopcion tambien es performance",
    body: "Una prediccion tecnicamente fuerte pero ignorada por el equipo tiene rendimiento de negocio cercano a cero.",
    tags: ["adopcion", "uso", "negocio"],
  },
];

export const classTwentyTwoAntiPatterns = [
  {
    title: "Elegir modelo antes que problema",
    body: "Muchas iniciativas arrancan por fascinacion tecnica y terminan ajustando el caso al algoritmo en vez de al reves.",
  },
  {
    title: "No definir costo del error",
    body: "Sin esa claridad, la empresa no sabe si debe optimizar recall, precision, estabilidad o una mezcla distinta.",
  },
  {
    title: "Comparar metricas sin baseline",
    body: "Un modelo puede parecer fuerte y aun asi no mejorar una regla simple o la practica actual del equipo.",
  },
  {
    title: "Olvidar el consumo operativo",
    body: "La familia correcta pierde valor si nadie sabe como usar la salida dentro de un flujo o decision real.",
  },
];

export const classTwentyTwoRules = [
  {
    title: "Partir de la forma de la decision",
    body: "La familia de modelo se elige mejor cuando la empresa sabe si necesita valor continuo, clase, ranking o evolucion temporal.",
  },
  {
    title: "Definir costo del error y baseline",
    body: "Esas dos piezas ordenan gran parte de la evaluacion mucho mejor que cualquier entusiasmo por una arquitectura puntual.",
  },
  {
    title: "Diseñar el modelo para ser consumido",
    body: "La salida mejora cuando el equipo entiende como leerla, como actuar sobre ella y donde desconfiar cuando cambie el contexto.",
  },
  {
    title: "Monitorear cambio y adopcion",
    body: "Drift, feedback humano y rutina de uso valen tanto como el score inicial para sostener valor real del modelo.",
  },
];

export const classTwentyTwoRoadmapCards = [
  {
    kicker: "Paso 1",
    title: "Elegir la forma de la salida",
    body: "Se define si el caso pide valor continuo, clase, ranking o forecast antes de entrar a tecnicas concretas.",
    tags: ["salida", "decision", "familia"],
  },
  {
    kicker: "Paso 2",
    title: "Definir target, features y baseline",
    body: "La estructura minima del problema se vuelve visible cuando la empresa nombra que quiere predecir y contra que lo comparara.",
    tags: ["target", "features", "baseline"],
  },
  {
    kicker: "Paso 3",
    title: "Evaluar con costo de error",
    body: "La metrica correcta se elige segun el daño de fallar y la forma en que la salida será usada por negocio u operacion.",
    tags: ["evaluacion", "costo", "uso"],
  },
  {
    kicker: "Paso 4",
    title: "Diseñar consumo y monitoreo",
    body: "La familia de modelo solo madura cuando entra a rutina y se deja una forma clara de revisar drift y adopcion.",
    tags: ["consumo", "monitoreo", "rutina"],
  },
];

export const classTwentyTwoTakeaways = [
  "La familia de modelo se elige por la forma de la decision y no por moda tecnica.",
  "Regresion, clasificacion, ranking y forecasting resuelven preguntas distintas del negocio.",
  "Baseline, costo del error y consumo operativo ordenan mejor la eleccion que cualquier benchmark aislado.",
  "La siguiente clase aterriza esto en prediccion de demanda.",
];

export const classTwentyThreeDemandProfiles = [
  {
    id: "retail",
    label: "Retail",
    title: "Forecast para compra, reposicion y surtido",
    body: "La prediccion de demanda en retail busca anticipar venta futura por tienda, canal, categoria o SKU para ordenar inventario y margen con menor quiebre.",
    kpis: ["quiebre", "sobrestock", "rotacion"],
    note: "La mejor demanda forecast combina historico con calendario, promo y contexto operativo del negocio real.",
    steps: [
      {
        key: "horizon",
        title: "Horizonte",
        detail: "Definir si la decision necesita ver dias, semanas o meses cambia por completo el modelo, la data y la accion posterior.",
        boundary: "Ventana",
        automation: "Elegir horizonte segun reposicion y compra.",
        guardrail: "Un horizonte equivocado hace inutil una prediccion aunque el error promedio parezca bueno.",
      },
      {
        key: "drivers",
        title: "Drivers",
        detail: "Promos, calendario, precio, stock, clima y eventos ayudan a explicar variacion si realmente pesan en la decision.",
        boundary: "Features",
        automation: "Separar drivers estructurales de ruido puntual.",
        guardrail: "No meter contexto solo porque existe; debe cambiar la prediccion utilmente.",
      },
      {
        key: "granularity",
        title: "Granularidad",
        detail: "Predecir por SKU, tienda, canal o categoria implica trade-offs de ruido, accionabilidad y capacidad operativa.",
        boundary: "Nivel",
        automation: "Elegir el nivel de forecast que el negocio realmente puede usar.",
        guardrail: "Mas granular no siempre significa mas util.",
      },
      {
        key: "consumption",
        title: "Consumo",
        detail: "La salida tiene que entrar a compra, reposicion o excepciones visibles y no quedarse como numero interesante en un tablero.",
        boundary: "Accion",
        automation: "Traducir forecast a regla operativa.",
        guardrail: "Sin accion sobre la prediccion, el caso no captura valor real.",
      },
    ],
  },
  {
    id: "staffing",
    label: "Staffing",
    title: "Forecast para dotacion, turnos y servicio",
    body: "Servicios, contact centers y operaciones usan demanda para anticipar carga y ajustar dotacion antes de que el SLA se rompa o la capacidad quede ociosa.",
    kpis: ["SLA", "ocupacion", "espera"],
    note: "El forecast vale cuando ayuda a balancear capacidad, costo y experiencia con una cadencia util para el equipo.",
    steps: [
      {
        key: "horizon",
        title: "Horizonte",
        detail: "La decision puede necesitar ver horas, dias o semanas segun como se arma la operacion y que tanta anticipacion requiere.",
        boundary: "Ventana",
        automation: "Alinear forecast con schedule real.",
        guardrail: "Predicciones fuera de la ventana util no cambian staffing de verdad.",
      },
      {
        key: "drivers",
        title: "Drivers",
        detail: "Campañas, calendario, incidentes, comportamiento histórico y mix de canales explican buena parte de la demanda de servicio.",
        boundary: "Features",
        automation: "Elegir drivers que muevan volumen y severidad.",
        guardrail: "No mezclar tipos de contacto muy distintos como si fueran una sola demanda homogénea.",
      },
      {
        key: "granularity",
        title: "Granularidad",
        detail: "Canal, skill, cola o turno pueden ser el nivel correcto según cómo la operación realmente asigna capacidad.",
        boundary: "Nivel",
        automation: "Definir forecast sobre la unidad que consume dotación.",
        guardrail: "Granularidad sin uso operativo agrega ruido y costo.",
      },
      {
        key: "consumption",
        title: "Consumo",
        detail: "La salida entra a turnos, colas, desvíos o alertas para que supervisión actúe antes de que aparezca el incumplimiento.",
        boundary: "Accion",
        automation: "Conectar forecast con schedule y alertas.",
        guardrail: "Si no se convierte en staffing o alerta, la predicción queda ornamental.",
      },
    ],
  },
  {
    id: "supply",
    label: "Supply",
    title: "Forecast para abastecimiento y capacidad logística",
    body: "La demanda en supply ayuda a ordenar compras, capacidad y promesa de entrega cuando la cadena necesita anticipación suficiente para reaccionar.",
    kpis: ["capacidad", "fill rate", "costo logístico"],
    note: "Supply necesita forecast con horizonte y granularidad alineados a restricciones de compra y operación física.",
    steps: [
      {
        key: "horizon",
        title: "Horizonte",
        detail: "Lead times, compras y disponibilidad física exigen una ventana de predicción que la cadena realmente pueda usar.",
        boundary: "Ventana",
        automation: "Alinear pronóstico con lead time.",
        guardrail: "Si el horizonte no conversa con compras, el valor operativo cae fuerte.",
      },
      {
        key: "drivers",
        title: "Drivers",
        detail: "Histórico, estacionalidad, promo, clima y restricciones de proveedores ayudan a explicar parte importante del flujo futuro.",
        boundary: "Features",
        automation: "Combinar demanda con señales de supply real.",
        guardrail: "No modelar demanda como si supply pudiera siempre reaccionar sin límites.",
      },
      {
        key: "granularity",
        title: "Granularidad",
        detail: "Centro, región, categoría o carrier pueden ser el nivel correcto según dónde se toman las decisiones reales de capacidad.",
        boundary: "Nivel",
        automation: "Modelar donde la operación decide, no donde más bonito se ve.",
        guardrail: "Demasiado detalle vuelve frágil el pronóstico y difícil su uso.",
      },
      {
        key: "consumption",
        title: "Consumo",
        detail: "La salida se convierte en compra, capacidad, promesa o alerta antes de que el cuello o el costo exploten.",
        boundary: "Accion",
        automation: "Traducir forecast a decisión de supply.",
        guardrail: "Sin integración a planificación, la predicción no mueve el sistema.",
      },
    ],
  },
  {
    id: "media",
    label: "Media",
    title: "Forecast para presupuesto, tráfico y respuesta de campaña",
    body: "En marketing y media la demanda forecast ayuda a ordenar inversión, volumen esperado y timing para no decidir presupuesto solo con intuición reciente.",
    kpis: ["trafico", "conversion", "CAC"],
    note: "Este forecast mejora cuando entiende estacionalidad, mix de canales y ventanas de activación comercial reales.",
    steps: [
      {
        key: "horizon",
        title: "Horizonte",
        detail: "La ventana correcta depende de la forma en que el equipo planifica campaña, asigna presupuesto y revisa performance.",
        boundary: "Ventana",
        automation: "Alinear predicción con ciclo de inversión.",
        guardrail: "Forecast demasiado largo o corto puede volverse irrelevante para growth.",
      },
      {
        key: "drivers",
        title: "Drivers",
        detail: "Canal, creatividad, estacionalidad, calendario y comportamiento de audiencia ayudan a explicar respuesta futura.",
        boundary: "Features",
        automation: "Usar drivers con efecto plausible sobre demanda.",
        guardrail: "No meter demasiados drivers débiles que solo vuelven frágil la señal.",
      },
      {
        key: "granularity",
        title: "Granularidad",
        detail: "Canal, campaña, audiencia o pieza pueden ser el nivel correcto según dónde realmente se redistribuye inversión.",
        boundary: "Nivel",
        automation: "Forecast sobre la unidad de presupuesto real.",
        guardrail: "Granularidad sin volumen suficiente vuelve ruidosa la predicción.",
      },
      {
        key: "consumption",
        title: "Consumo",
        detail: "La predicción alimenta presupuesto, pacing o experimentos de growth con una lectura más defendible del contexto futuro.",
        boundary: "Accion",
        automation: "Conectar forecast con inversión y pacing.",
        guardrail: "Si no cambia presupuesto o prueba, la predicción se enfría rápido.",
      },
    ],
  },
];

export const classTwentyThreeDriverCards = [
  {
    kicker: "Driver",
    title: "Histórico limpio y comparable",
    body: "Sin una serie legible y mínimamente estable, casi cualquier driver adicional pierde fuerza predictiva o confunde más de lo que ayuda.",
    tags: ["histórico", "serie", "base"],
  },
  {
    kicker: "Driver",
    title: "Calendario y estacionalidad",
    body: "Feriados, fines de semana, quincenas, campañas y eventos recurrentes suelen explicar gran parte del comportamiento futuro.",
    tags: ["calendario", "estacionalidad", "eventos"],
  },
  {
    kicker: "Driver",
    title: "Promos y shocks de negocio",
    body: "Cambios comerciales, promociones o incidentes pueden romper el patrón y conviene tratarlos con criterio y no como si fueran variación normal.",
    tags: ["promo", "shock", "cambio"],
  },
  {
    kicker: "Driver",
    title: "Restricciones operativas",
    body: "La demanda útil no se lee sola; también importa si la operación puede responder a esa señal y en qué ventana hacerlo.",
    tags: ["operacion", "capacidad", "restriccion"],
  },
];

export const classTwentyThreeHorizonCards = [
  {
    kicker: "Horizonte",
    title: "Corto plazo",
    body: "Sirve para reponer, asignar capacidad, manejar colas o reaccionar rápido cuando el sistema necesita respuesta táctica.",
    tags: ["corto", "tactico", "respuesta"],
  },
  {
    kicker: "Horizonte",
    title: "Mediano plazo",
    body: "Ayuda a compras, staffing o planificación comercial cuando hace falta una mirada suficiente para preparar al negocio sin adivinar demasiado lejos.",
    tags: ["medio", "planificacion", "preparacion"],
  },
  {
    kicker: "Horizonte",
    title: "Largo plazo",
    body: "Conviene cuando la empresa quiere orientar capacidad, estrategia o presupuesto, asumiendo más incertidumbre y menos granularidad.",
    tags: ["largo", "estrategia", "incertidumbre"],
  },
  {
    kicker: "Horizonte",
    title: "Multi horizonte",
    body: "Algunos sistemas necesitan varias ventanas a la vez para combinar reacción inmediata con planificación más amplia.",
    tags: ["multi", "ventanas", "balance"],
  },
];

export const classTwentyThreeAntiPatterns = [
  {
    title: "Elegir horizonte por comodidad tecnica",
    body: "La ventana correcta la define la decisión operativa o comercial, no la facilidad de entrenar el modelo.",
  },
  {
    title: "Modelar sin drivers de negocio",
    body: "Confiar solo en el histórico suele volver ciega la predicción frente a promo, calendario o cambios de contexto relevantes.",
  },
  {
    title: "Usar granularidad que nadie puede consumir",
    body: "Pronósticos hiper detallados se ven sofisticados, pero pierden valor si la operación decide en otra unidad o cadencia.",
  },
  {
    title: "No integrar la prediccion a la rutina",
    body: "Si compra, staffing o media no cambian nada con la salida, el caso se queda en experimento analitico.",
  },
];

export const classTwentyThreeRules = [
  {
    title: "Diseñar la demanda desde la decisión futura",
    body: "Horizon, granularidad y drivers se eligen mejor cuando primero se entiende qué equipo va a actuar y cómo lo hará.",
  },
  {
    title: "Combinar histórico con contexto relevante",
    body: "Calendario, promo, stock o capacidad pesan más cuando explican una parte real del cambio y no solo agregan complejidad.",
  },
  {
    title: "Validar por consumo y no solo por error promedio",
    body: "La mejor demanda forecast es la que ayuda a decidir mejor en operación, aunque no tenga el score perfecto en laboratorio.",
  },
  {
    title: "Monitorear shocks y drift",
    body: "La demanda cambia con comportamiento, mix y negocio; por eso conviene revisar desvíos y ajustar drivers o supuestos con frecuencia.",
  },
];

export const classTwentyThreeRoadmapCards = [
  {
    kicker: "Paso 1",
    title: "Elegir uso y ventana de pronostico",
    body: "Se define si el caso busca comprar, reponer, dotar o invertir y con cuánta anticipación necesita reaccionar el equipo.",
    tags: ["uso", "ventana", "reaccion"],
  },
  {
    kicker: "Paso 2",
    title: "Armar serie y drivers defendibles",
    body: "Se limpia la serie, se identifican quiebres y se suman drivers solo si ayudan a explicar mejor una parte real del patrón.",
    tags: ["serie", "drivers", "quiebres"],
  },
  {
    kicker: "Paso 3",
    title: "Probar en granularidad util",
    body: "La predicción se valida sobre el nivel y la frecuencia que el negocio realmente puede convertir en acción.",
    tags: ["granularidad", "frecuencia", "uso"],
  },
  {
    kicker: "Paso 4",
    title: "Integrar a compra, staffing o pacing",
    body: "El caso madura cuando deja de ser forecast aislado y entra a una rutina concreta con revisión de desvíos y ajustes.",
    tags: ["integracion", "rutina", "ajuste"],
  },
];

export const classTwentyThreeTakeaways = [
  "Predicción de demanda vale cuando la ventana, el nivel y los drivers están alineados con la decisión real del negocio.",
  "El mejor forecast no siempre es el más complejo; es el que más ayuda a comprar, dotar o invertir mejor.",
  "Serie limpia, contexto relevante y consumo operativo pesan más que cualquier entusiasmo por una técnica aislada.",
  "La siguiente clase usa esta lógica para clasificación y scoring.",
];

export const classTwentyFourScoringProfiles = [
  {
    id: "leads",
    label: "Leads",
    title: "Scoring comercial para priorizar a quien vale la pena atacar primero",
    body: "El lead scoring ayuda a ordenar foco comercial cuando el volumen ya no permite leer cada caso manualmente y cuando el equipo necesita una cola más defendible para actuar.",
    kpis: ["conversión", "velocidad", "prioridad"],
    note: "La fuerza del scoring comercial está menos en el score en sí y más en cómo cambia la secuencia de trabajo del equipo.",
    steps: [
      {
        key: "target",
        title: "Target",
        detail: "Definir qué significa lead valioso o convertido según el funnel real es la base del scoring comercial útil.",
        boundary: "Target",
        automation: "Nombrar resultado comercial relevante.",
        guardrail: "Si el target cambia entre equipos, el scoring se vuelve ruido político.",
      },
      {
        key: "features",
        title: "Features",
        detail: "Fuente, comportamiento, contexto de cuenta y señales históricas ayudan a explicar mejor prioridad o intención.",
        boundary: "Features",
        automation: "Elegir señales cercanas a conversión real.",
        guardrail: "No sobrecargar con campos que nadie mantiene bien.",
      },
      {
        key: "threshold",
        title: "Threshold",
        detail: "El score solo crea valor cuando se traduce en colas, SLAs o tipos de atención distintos para el equipo comercial.",
        boundary: "Threshold",
        automation: "Separar alta, media y baja prioridad con criterio visible.",
        guardrail: "Sin umbral y acción, el score es solo un número más en el CRM.",
      },
      {
        key: "feedback",
        title: "Feedback",
        detail: "Overrides y resultados reales del equipo ayudan a recalibrar el sistema y a evitar que se vuelva una recomendación ciega.",
        boundary: "Feedback",
        automation: "Cerrar loop entre score y resultado comercial.",
        guardrail: "Si ventas no puede corregir ni confiar, el scoring muere en adopción.",
      },
    ],
  },
  {
    id: "churn",
    label: "Churn",
    title: "Scoring de riesgo para intervenir antes de la fuga",
    body: "Los scores de churn ayudan cuando la empresa puede detectar deterioro temprano y convertirlo en una acción de retención realmente diferenciada.",
    kpis: ["retencion", "riesgo", "recupero"],
    note: "La predicción de churn vale más cuando conecta señales tempranas con una intervención de valor real y no solo con una campaña masiva tardía.",
    steps: [
      {
        key: "target",
        title: "Target",
        detail: "Definir qué se considera churn según producto, frecuencia y ciclo del cliente es clave para no modelar una fuga equivocada.",
        boundary: "Target",
        automation: "Nombrar la salida que realmente duele al negocio.",
        guardrail: "Una definición floja de churn arruina toda la lectura posterior.",
      },
      {
        key: "features",
        title: "Features",
        detail: "Uso, reclamos, frecuencia, valor y silencio relativo frente a cohortes similares suelen ser señales muy poderosas.",
        boundary: "Features",
        automation: "Combinar valor con comportamiento y experiencia.",
        guardrail: "No confiar solo en la última compra o en un único indicador tardío.",
      },
      {
        key: "threshold",
        title: "Threshold",
        detail: "Los umbrales ayudan a separar a quién intervenir, con qué intensidad y por qué canal conviene hacerlo primero.",
        boundary: "Threshold",
        automation: "Traducir score a plan de acción.",
        guardrail: "Intervenir a todos igual destruye foco y economics.",
      },
      {
        key: "feedback",
        title: "Feedback",
        detail: "La respuesta del cliente a la acción de retención sirve para recalibrar el sistema y aprender qué intervención realmente funciona.",
        boundary: "Feedback",
        automation: "Cerrar loop entre riesgo y retención efectiva.",
        guardrail: "Sin feedback sobre la acción, el score envejece rápido.",
      },
    ],
  },
  {
    id: "fraud",
    label: "Fraude",
    title: "Scoring para priorizar revisión o bloqueo según riesgo esperado",
    body: "En fraude la clasificación organiza qué transacción revisar, escalar o bloquear según riesgo, fricción aceptable y capacidad de supervisión.",
    kpis: ["deteccion", "falsos positivos", "tiempo"],
    note: "El valor del scoring de fraude aparece cuando el umbral correcto balancea prevención con experiencia legítima del cliente.",
    steps: [
      {
        key: "target",
        title: "Target",
        detail: "Definir qué evento constituye fraude confirmado o incidente relevante evita entrenar sobre etiquetas demasiado ambiguas.",
        boundary: "Target",
        automation: "Volver auditable la etiqueta de riesgo.",
        guardrail: "Labels inconsistentes debilitan más el scoring de lo que suele verse al inicio.",
      },
      {
        key: "features",
        title: "Features",
        detail: "Patrones de comportamiento, dispositivo, contexto de transacción e histórico ayudan a separar anormalidad útil de ruido normal.",
        boundary: "Features",
        automation: "Elegir señales con relación plausible al fraude.",
        guardrail: "No sobrecastigar proxies débiles que generen bloqueo injusto.",
      },
      {
        key: "threshold",
        title: "Threshold",
        detail: "El umbral define si la salida informa, alerta, bloquea o manda a revisión; ese diseño decide buena parte del costo del error.",
        boundary: "Threshold",
        automation: "Separar alerta, revisión y bloqueo.",
        guardrail: "Un umbral único rara vez sirve igual para todo tipo de operación o monto.",
      },
      {
        key: "feedback",
        title: "Feedback",
        detail: "Revisores, apelaciones y confirmaciones ayudan a recalibrar el sistema y a entender dónde se endureció o aflojó de más.",
        boundary: "Feedback",
        automation: "Aprender de revisión humana real.",
        guardrail: "Sin feedback vivo, el sistema pierde sensibilidad frente a cambios del patrón fraudulento.",
      },
    ],
  },
  {
    id: "service",
    label: "Servicio",
    title: "Scoring para priorizar tickets, casos o colas de atención",
    body: "La clasificación también sirve para ordenar volumen de soporte según urgencia, impacto o complejidad esperada y así asignar mejor el esfuerzo del equipo.",
    kpis: ["SLA", "prioridad", "resolucion"],
    note: "El scoring de servicio vale más cuando vuelve visible el criterio de prioridad y deja claro dónde debe intervenir un humano.",
    steps: [
      {
        key: "target",
        title: "Target",
        detail: "Definir qué significa caso crítico, urgente o complejo permite crear un scoring más defendible para el equipo de atención.",
        boundary: "Target",
        automation: "Alinear score con riesgo operativo y experiencia.",
        guardrail: "Si urgencia y severidad se usan distinto entre equipos, el modelo se rompe semánticamente.",
      },
      {
        key: "features",
        title: "Features",
        detail: "Texto, canal, historial, valor del cliente y contexto del incidente ayudan a priorizar mejor sin depender solo de intuición humana.",
        boundary: "Features",
        automation: "Usar señales cercanas al impacto real del caso.",
        guardrail: "No reducir toda la complejidad del caso a una sola categoría superficial.",
      },
      {
        key: "threshold",
        title: "Threshold",
        detail: "Los umbrales organizan colas, SLAs o escalados para que el equipo sepa qué tomar primero y qué mandar directo a revisión humana.",
        boundary: "Threshold",
        automation: "Traducir score a cola y tiempo de respuesta.",
        guardrail: "Sin política de escalado, el score agrega fricción y no claridad.",
      },
      {
        key: "feedback",
        title: "Feedback",
        detail: "Correcciones del agente, reclasificaciones y resultados finales ayudan a volver más robusto el scoring con el tiempo.",
        boundary: "Feedback",
        automation: "Aprender del override humano.",
        guardrail: "Si nadie corrige el error, el sistema repite la misma mala priorización.",
      },
    ],
  },
];

export const classTwentyFourThresholdCards = [
  {
    kicker: "Threshold",
    title: "No todo score necesita la misma accion",
    body: "Algunos casos informan, otros priorizan y otros bloquean; el valor del scoring vive en esa traduccion a flujo real.",
    tags: ["accion", "umbral", "flujo"],
  },
  {
    kicker: "Threshold",
    title: "Score sin cola es numero suelto",
    body: "La empresa captura valor cuando el score organiza orden de trabajo, tipo de contacto o intensidad de supervision.",
    tags: ["cola", "prioridad", "uso"],
  },
  {
    kicker: "Threshold",
    title: "El costo del error cambia el umbral",
    body: "Falsos positivos y falsos negativos pesan distinto segun el caso; por eso el threshold no puede fijarse por intuicion o estetica.",
    tags: ["costo", "error", "trade-off"],
  },
  {
    kicker: "Threshold",
    title: "Los umbrales tambien se revisan",
    body: "Cambio de mix, contexto o comportamiento del cliente puede volver obsoleto un threshold que antes parecia correcto.",
    tags: ["revision", "contexto", "drift"],
  },
];

export const classTwentyFourGovernanceCards = [
  {
    kicker: "Gobierno",
    title: "Explicacion suficiente",
    body: "No siempre hace falta abrir todo el modelo, pero sí dejar claro qué mira, dónde pesa y cómo se corrige un error visible.",
    tags: ["explicacion", "transparencia", "uso"],
  },
  {
    kicker: "Gobierno",
    title: "Override humano",
    body: "Los mejores sistemas de scoring permiten corrección o revisión cuando el contexto del caso no cabe bien en la señal automática.",
    tags: ["override", "contexto", "revision"],
  },
  {
    kicker: "Gobierno",
    title: "Monitoreo por segmento",
    body: "Comparar performance y trato por grupo ayuda a detectar si el score empieza a degradar fairness o valor sin que el promedio lo muestre.",
    tags: ["segmentos", "fairness", "monitoring"],
  },
  {
    kicker: "Gobierno",
    title: "Feedback vivo",
    body: "El sistema mejora cuando recoge decisiones humanas, resultados finales y cambios de contexto en vez de quedarse congelado en el entrenamiento inicial.",
    tags: ["feedback", "aprendizaje", "ajuste"],
  },
];

export const classTwentyFourAntiPatterns = [
  {
    title: "Confiar en el score como verdad final",
    body: "La señal automática ayuda a priorizar, pero no reemplaza el criterio cuando el caso pide contexto adicional o trato más delicado.",
  },
  {
    title: "No traducir score a flujo",
    body: "Muchos modelos fallan no por precisión, sino porque nadie define cómo se convierte la salida en cola, canal, SLA o revisión.",
  },
  {
    title: "Fijar umbrales sin costo del error",
    body: "Sin esa discusión el sistema termina castigando demasiado o demasiado poco según un promedio poco defendible.",
  },
  {
    title: "Olvidar fairness y revisión por segmento",
    body: "Un scoring puede parecer sano en total y aun así degradar trato o acceso para grupos concretos del negocio.",
  },
];

export const classTwentyFourRules = [
  {
    title: "Diseñar score para una accion concreta",
    body: "La clasificación madura cuando el equipo sabe qué cambia en su rutina al ver una probabilidad o una categoría.",
  },
  {
    title: "Elegir umbral según trade-off real",
    body: "La decisión sobre threshold debería reflejar costo operativo, riesgo, fairness y capacidad de revisión del sistema.",
  },
  {
    title: "Permitir override y aprendizaje",
    body: "La organización captura más valor cuando el score puede corregirse y aprender de esa corrección con trazabilidad.",
  },
  {
    title: "Monitorear por uso y por segmento",
    body: "La salud del scoring no vive solo en laboratorio; también se ve en adopción, fairness y efecto sobre flujo real.",
  },
];

export const classTwentyFourRoadmapCards = [
  {
    kicker: "Paso 1",
    title: "Elegir scoring con dolor real",
    body: "Lead, churn, fraude o priorización de servicio convienen según qué cola, riesgo o volumen hoy pide más criterio.",
    tags: ["caso", "cola", "dolor"],
  },
  {
    kicker: "Paso 2",
    title: "Definir target, features y threshold",
    body: "El corazón del caso está en nombrar bien la salida, elegir señales defensibles y traducir el score a acción real.",
    tags: ["target", "features", "threshold"],
  },
  {
    kicker: "Paso 3",
    title: "Pilotear con overrides y evidencia",
    body: "La prueba sale mejor cuando deja revisión humana, monitoreo por segmento y aprendizaje explícito del error.",
    tags: ["piloto", "override", "evidencia"],
  },
  {
    kicker: "Paso 4",
    title: "Escalar score a rutina y gobierno",
    body: "El scoring madura cuando vive dentro del flujo operativo con responsables, revisión periódica y capacidad de recalibrar.",
    tags: ["rutina", "gobierno", "recalibracion"],
  },
];

export const classTwentyFourTakeaways = [
  "Clasificación y scoring valen cuando convierten probabilidad en una mejor cola de acción, no cuando solo producen un número elegante.",
  "Target, threshold, costo del error y consumo operativo pesan tanto como la técnica elegida.",
  "Un score maduro deja espacio para override, fairness y revisión por segmento.",
  "La fase siguiente entra a recomendadores, churn, series temporales y optimización con esta base ya bien instalada.",
];

export const classTwentyFiveRecommenderProfiles = [
  {
    id: "collaborative",
    label: "Colaborativo",
    title: "Recomendar segun comportamientos parecidos entre usuarios o productos",
    body: "Los recomendadores colaborativos funcionan bien cuando hay suficiente historial de interacciones y cuando la afinidad colectiva ayuda a descubrir patrones que una regla simple no veria.",
    chip: "Interacciones historicas",
    scores: [88, 82, 72],
    primaryTitle: "Cuando encaja",
    primaryItems: [
      "Hay volumen suficiente de clics, vistas o compras",
      "El catalogo tiene patrones repetidos de afinidad",
      "La prioridad es relevancia a escala y no tanta explicacion",
    ],
    pills: ["historial", "afinidad", "co-ocurrencia"],
    secondaryTitle: "Si se fuerza donde no va",
    secondaryItems: ["cold start duro", "popularidad excesiva", "poca trazabilidad"],
    noteTitle: "Lectura de clase",
    noteBody: "Este enfoque gana fuerza cuando la red de interacciones ya es rica; antes de eso suele depender demasiado del azar o de productos populares.",
  },
  {
    id: "content",
    label: "Contenido",
    title: "Recomendar usando atributos del catalogo y perfil del usuario",
    body: "Los recomendadores basados en contenido ayudan cuando hay buen metadata, descripciones solidas y necesidad de explicar por que algo parece relevante aun con poco historial compartido.",
    chip: "Metadata y perfil",
    scores: [74, 80, 86],
    primaryTitle: "Cuando encaja",
    primaryItems: [
      "El catalogo tiene atributos utiles y consistentes",
      "El cold start de productos pesa bastante",
      "La explicacion de la recomendacion importa",
    ],
    pills: ["atributos", "catalogo", "perfil"],
    secondaryTitle: "Si se fuerza donde no va",
    secondaryItems: ["recomendacion estrecha", "metadata pobre", "baja sorpresa util"],
    noteTitle: "Lectura de clase",
    noteBody: "Cuando el catalogo esta bien descrito, este enfoque ayuda a arrancar rapido y a sostener una logica mas interpretable para el negocio.",
  },
  {
    id: "session",
    label: "Sesion",
    title: "Recomendar segun contexto inmediato e intencion actual",
    body: "Los recomendadores de sesion leen mejor el momento presente: que esta explorando el usuario, que comparo y en que punto del journey conviene intervenir con mas relevancia tactica.",
    chip: "Contexto en vivo",
    scores: [84, 76, 68],
    primaryTitle: "Cuando encaja",
    primaryItems: [
      "La intencion cambia rapido dentro de una misma visita",
      "El journey digital necesita reaccion en tiempo casi real",
      "No siempre existe gran historial individual",
    ],
    pills: ["contexto", "intencion", "journey"],
    secondaryTitle: "Si se fuerza donde no va",
    secondaryItems: ["ruido alto", "poca memoria", "sobreajuste al instante"],
    noteTitle: "Lectura de clase",
    noteBody: "Este enfoque vale cuando la sesion aporta senales fuertes de intencion, pero necesita guardrails para no perder estabilidad ni coherencia global.",
  },
  {
    id: "hybrid",
    label: "Hibrido",
    title: "Combinar historial, catalogo y contexto para una recomendacion mas robusta",
    body: "Los enfoques hibridos suelen capturar mas valor porque mezclan varias fuentes de relevancia y reducen parte de los limites de cada tecnica aislada, aunque con mayor complejidad operativa.",
    chip: "Senales combinadas",
    scores: [92, 86, 88],
    primaryTitle: "Cuando encaja",
    primaryItems: [
      "Hay varias fuentes de senal disponibles",
      "La empresa puede sostener un sistema mas complejo",
      "Se busca balance entre relevancia, cold start y control",
    ],
    pills: ["blend", "robustez", "balance"],
    secondaryTitle: "Si se fuerza donde no va",
    secondaryItems: ["demasiada complejidad", "debug dificil", "dependencias fragiles"],
    noteTitle: "Lectura de clase",
    noteBody: "Hibridar vale la pena cuando cada fuente corrige una limitacion real de la otra y cuando la organizacion puede monitorear el sistema con disciplina.",
  },
];

export const classTwentyFiveDesignCards = [
  {
    kicker: "Diseno",
    title: "Definir objetivo del recomendador",
    body: "No es lo mismo maximizar descubrimiento, conversion, canasta, retencion o consumo de contenido. La arquitectura cambia segun esa decision.",
    tags: ["objetivo", "KPI", "decision"],
  },
  {
    kicker: "Diseno",
    title: "Separar candidatos y ranking",
    body: "Primero se arma el conjunto posible; despues se ordena segun relevancia, margen, stock o guardrails del negocio.",
    tags: ["candidatos", "ranking", "guardrails"],
  },
  {
    kicker: "Diseno",
    title: "Cuidar cold start y exploracion",
    body: "Un sistema que solo explota historico termina escondiendo nuevos productos, nuevos usuarios y aprendizaje futuro valioso.",
    tags: ["cold start", "exploracion", "aprendizaje"],
  },
  {
    kicker: "Diseno",
    title: "Evaluar mas alla del clic corto",
    body: "CTR ayuda, pero tambien importan diversidad, conversion, canasta, retencion y experiencia sostenida del usuario.",
    tags: ["CTR", "diversidad", "valor"],
  },
];

export const classTwentyFiveSignalCards = [
  {
    kicker: "Senal",
    title: "Profundidad de interaccion",
    body: "No todas las interacciones pesan igual. Compra, repeticion o tiempo de consumo suelen valer mas que una vista superficial.",
    tags: ["compra", "consumo", "peso"],
  },
  {
    kicker: "Senal",
    title: "Metadata del catalogo",
    body: "Atributos consistentes ayudan a recomendar mejor y a explicar por que algo encaja para un usuario o contexto dado.",
    tags: ["catalogo", "atributos", "explicacion"],
  },
  {
    kicker: "Senal",
    title: "Contexto y momento",
    body: "Dispositivo, pagina, etapa del journey o intencion reciente cambian mucho la pertinencia de una recomendacion.",
    tags: ["momento", "contexto", "journey"],
  },
  {
    kicker: "Senal",
    title: "Restricciones de negocio",
    body: "Stock, margen, saturacion o compliance deben entrar como guardrails y no quedar fuera del motor de recomendacion.",
    tags: ["stock", "margen", "guardrails"],
  },
];

export const classTwentyFiveAntiPatterns = [
  {
    title: "Medir solo CTR",
    body: "Un recomendador puede inflar clics y aun asi degradar conversion, canasta, diversidad o experiencia futura del usuario.",
  },
  {
    title: "Olvidar cold start",
    body: "Sin estrategia para usuarios o productos nuevos, el sistema tiende a reforzar siempre lo conocido y frena aprendizaje util.",
  },
  {
    title: "No meter restricciones del negocio",
    body: "Recomendar sin mirar stock, margen o politicas comerciales puede crear una experiencia atractiva pero operativamente inviable.",
  },
  {
    title: "Confundir relevancia con repeticion",
    body: "Repetir demasiado lo ya conocido puede subir alguna metrica corta y al mismo tiempo empobrecer la experiencia total.",
  },
];

export const classTwentyFiveRules = [
  {
    title: "Elegir objetivo primario con claridad",
    body: "La recomendacion mejora cuando la empresa sabe si quiere discovery, conversion, ticket, engagement o retencion como foco principal.",
  },
  {
    title: "Combinar relevancia con exploracion",
    body: "Hace falta suficiente explotacion del historico, pero tambien espacio para aprender y evitar una experiencia demasiado estrecha.",
  },
  {
    title: "Meter guardrails desde el ranking",
    body: "Margen, stock, saturacion, diversidad o compliance deben formar parte del sistema y no solo de la revision posterior.",
  },
  {
    title: "Medir valor de negocio, no solo interaccion",
    body: "La salud del recomendador se entiende mejor cuando se conecta con canasta, conversion, recurrencia y experiencia sostenida.",
  },
];

export const classTwentyFiveRoadmapCards = [
  {
    kicker: "Paso 1",
    title: "Definir objetivo y punto del journey",
    body: "Conviene empezar por discovery, producto, canasta o contenido segun donde hoy exista mas friccion y mejor senal disponible.",
    tags: ["journey", "objetivo", "friccion"],
  },
  {
    kicker: "Paso 2",
    title: "Elegir senales y estrategia de cold start",
    body: "Se define que interacciones, metadata y contexto entran al sistema y como se cubren usuarios o productos nuevos.",
    tags: ["senales", "metadata", "cold start"],
  },
  {
    kicker: "Paso 3",
    title: "Pilotear ranking con guardrails",
    body: "La prueba se hace sobre una parte del journey dejando visible impacto en relevancia, negocio y diversidad de la experiencia.",
    tags: ["piloto", "ranking", "diversidad"],
  },
  {
    kicker: "Paso 4",
    title: "Escalar con monitoreo y aprendizaje",
    body: "El sistema madura cuando revisa drift, saturacion, valor de negocio y calidad del feedback que usa para aprender.",
    tags: ["escala", "drift", "feedback"],
  },
];

export const classTwentyFiveTakeaways = [
  "Un recomendador serio empieza por una decision de negocio clara y no por una tecnica de moda.",
  "Colaborativo, contenido, sesion e hibrido resuelven partes distintas del problema y suelen convivir mejor de lo que compiten.",
  "Cold start, diversidad y guardrails de negocio pesan tanto como la relevancia inmediata.",
  "La siguiente clase conecta scoring y propension con retencion, recompra y expansion comercial.",
];

export const classTwentySixPropensityProfiles = [
  {
    id: "subscription",
    label: "Suscripcion",
    title: "Churn para detectar deterioro antes de que el cliente se vaya",
    body: "En negocios de suscripcion el valor del churn esta en encontrar senales tempranas para intervenir antes de la cancelacion o del desgaste irreversible de uso.",
    kpis: ["retencion", "MRR", "riesgo"],
    note: "El modelo solo crea valor cuando se traduce en un playbook de retencion diferenciado por intensidad y costo esperado.",
    steps: [
      {
        key: "target",
        title: "Target",
        detail: "Definir que se considera churn real segun producto, ciclo y comportamiento evita modelar una salida demasiado ambigua.",
        boundary: "Target",
        automation: "Nombrar la fuga que realmente duele al negocio.",
        guardrail: "Si cada equipo entiende churn distinto, el score pierde sentido rapidamente.",
      },
      {
        key: "signals",
        title: "Senales",
        detail: "Uso, recencia, soporte, friccion y cambios de patron ayudan a leer deterioro antes de la cancelacion visible.",
        boundary: "Signals",
        automation: "Combinar comportamiento con experiencia y valor.",
        guardrail: "No depender solo de una senal tardia como la ultima compra o login.",
      },
      {
        key: "threshold",
        title: "Threshold",
        detail: "El umbral define a quien intervenir, con que urgencia y cuanta inversion de retencion vale la pena desplegar.",
        boundary: "Threshold",
        automation: "Convertir riesgo en cola accionable.",
        guardrail: "Tratar a todos los clientes de alto riesgo igual suele destruir economics.",
      },
      {
        key: "treatment",
        title: "Tratamiento",
        detail: "La accion puede ser outreach, incentivo, cambio de experiencia o priorizacion humana segun valor y causa probable del deterioro.",
        boundary: "Action",
        automation: "Conectar score con playbook concreto.",
        guardrail: "Sin una respuesta diferenciada, el score se queda como alerta bonita.",
      },
    ],
  },
  {
    id: "repeat",
    label: "Recompra",
    title: "Propension de compra para ordenar reactivacion y frecuencia",
    body: "En retail o e-commerce la propension ayuda a decidir a quien contactar, cuando y con que intensidad para proteger recompra y valor futuro.",
    kpis: ["recompra", "frecuencia", "ticket"],
    note: "La propension comercial mejora cuando distingue clientes que necesitan incentivo de los que igual volverian solos.",
    steps: [
      {
        key: "target",
        title: "Target",
        detail: "Conviene definir si la salida busca recompra dentro de una ventana, categoria especifica o frecuencia sostenida del cliente.",
        boundary: "Target",
        automation: "Ajustar el target a la decision comercial real.",
        guardrail: "Un target demasiado amplio diluye el valor del modelo para marketing.",
      },
      {
        key: "signals",
        title: "Senales",
        detail: "Recencia, frecuencia, categoria, respuesta a promo y contexto del cliente ayudan a estimar mejor intencion y valor.",
        boundary: "Signals",
        automation: "Elegir senales cercanas a habito de compra.",
        guardrail: "No asumir que todo cliente responde igual al mismo estimulo.",
      },
      {
        key: "threshold",
        title: "Threshold",
        detail: "Los umbrales separan a quien dejar en paz, a quien activar y a quien reservar para una intervencion mas fuerte.",
        boundary: "Threshold",
        automation: "Traducir score a intensidad de contacto.",
        guardrail: "Contactar a todos erosiona margen y desgasta la relacion.",
      },
      {
        key: "treatment",
        title: "Tratamiento",
        detail: "Oferta, mensaje, canal y timing cambian segun probabilidad, valor y tipo de cliente o cohorte.",
        boundary: "Action",
        automation: "Combinar scoring con orquestacion comercial.",
        guardrail: "Una accion masiva suele esconder que el modelo no se esta consumiendo bien.",
      },
    ],
  },
  {
    id: "crosssell",
    label: "Cross-sell",
    title: "Propension para expansion o siguiente mejor producto",
    body: "Los modelos de propension tambien sirven para ordenar a quien ofrecer un producto complementario o una expansion comercial con mayor probabilidad de adopcion.",
    kpis: ["upsell", "cross-sell", "LTV"],
    note: "La fuerza del modelo aparece cuando evita empujar ofertas irrelevantes y concentra energia comercial donde existe encaje plausible.",
    steps: [
      {
        key: "target",
        title: "Target",
        detail: "Hay que definir si la salida mide compra de un producto, ampliacion de plan o adopcion de una accion concreta del portafolio.",
        boundary: "Target",
        automation: "Volver especifica la expansion esperada.",
        guardrail: "Un target generico hace muy dificil interpretar despues el score.",
      },
      {
        key: "signals",
        title: "Senales",
        detail: "Uso del producto actual, valor, historial de compra, mix y comportamiento por segmento suelen explicar mucha parte de la propension.",
        boundary: "Signals",
        automation: "Mezclar potencial con senal de necesidad real.",
        guardrail: "No vender expansion como si todo cliente tuviera el mismo punto de madurez.",
      },
      {
        key: "threshold",
        title: "Threshold",
        detail: "El umbral ayuda a decidir si activar ventas, producto, automatizacion o solo observacion antes de una oferta directa.",
        boundary: "Threshold",
        automation: "Organizar cola comercial por potencial.",
        guardrail: "Sin SLA comercial, el score queda en CRM sin cambiar comportamiento.",
      },
      {
        key: "treatment",
        title: "Tratamiento",
        detail: "La accion puede ser mensaje consultivo, bundle, demo o incentivo segun valor, contexto y esfuerzo que requiere el producto.",
        boundary: "Action",
        automation: "Conectar propension con siguiente mejor oferta.",
        guardrail: "Una oferta errada repetida deteriora confianza mucho mas rapido que lo que suma el modelo.",
      },
    ],
  },
  {
    id: "winback",
    label: "Winback",
    title: "Propension para recuperar clientes o cuentas en riesgo tardio",
    body: "Cuando la fuga ya ocurrio o el deterioro es mas avanzado, la propension ayuda a decidir en que casos vale la pena invertir un esfuerzo de recuperacion y con que estrategia.",
    kpis: ["winback", "recupero", "economics"],
    note: "Winback exige un balance fino entre probabilidad de retorno, costo de la accion y valor futuro esperado del cliente.",
    steps: [
      {
        key: "target",
        title: "Target",
        detail: "Se define si el modelo busca reactivacion, retorno de compra o recuperacion de cuenta dentro de una ventana especifica.",
        boundary: "Target",
        automation: "Delimitar recuperacion esperada.",
        guardrail: "Sin una ventana clara, winback pierde mucha interpretacion de negocio.",
      },
      {
        key: "signals",
        title: "Senales",
        detail: "Valor historico, causa de salida, ultima experiencia y respuesta previa a contactos ayudan a decidir mejor donde invertir.",
        boundary: "Signals",
        automation: "Combinar valor perdido con recuperabilidad.",
        guardrail: "No tratar igual a clientes silenciosos y a clientes activamente insatisfechos.",
      },
      {
        key: "threshold",
        title: "Threshold",
        detail: "El umbral ordena a quien intentar recuperar, con que prioridad y en que momento conviene insistir o abandonar.",
        boundary: "Threshold",
        automation: "Asignar esfuerzo segun retorno esperado.",
        guardrail: "Un esfuerzo caro sobre cuentas inviables destruye rentabilidad rapido.",
      },
      {
        key: "treatment",
        title: "Tratamiento",
        detail: "La accion puede variar entre outreach humano, oferta, mejora de experiencia o simplemente aprendizaje para prevenir futuras fugas.",
        boundary: "Action",
        automation: "Hacer winback mas selectivo y rentable.",
        guardrail: "Sin distinguir causa de salida, la recuperacion se vuelve un disparo ciego.",
      },
    ],
  },
];

export const classTwentySixDriverCards = [
  {
    kicker: "Driver",
    title: "Comportamiento y uso",
    body: "Frecuencia, intensidad, silencio relativo y cambios de patron suelen anticipar compra o fuga mejor que una foto estatica del cliente.",
    tags: ["uso", "frecuencia", "patron"],
  },
  {
    kicker: "Driver",
    title: "Experiencia y friccion",
    body: "Tickets, reclamos, tiempos y problemas de experiencia ayudan a explicar por que la relacion gana o pierde traccion.",
    tags: ["friccion", "servicio", "experiencia"],
  },
  {
    kicker: "Driver",
    title: "Valor y etapa del cliente",
    body: "No todos los clientes merecen la misma intensidad de intervencion; valor historico y madurez de la relacion cambian la estrategia correcta.",
    tags: ["valor", "LTV", "etapa"],
  },
  {
    kicker: "Driver",
    title: "Respuesta a acciones previas",
    body: "Como respondio el cliente antes ayuda a evitar insistencia inutil y a diseñar un tratamiento mas inteligente.",
    tags: ["feedback", "respuesta", "historial"],
  },
];

export const classTwentySixInterventionCards = [
  {
    kicker: "Intervencion",
    title: "No todos necesitan descuento",
    body: "Muchas veces la mejor accion es soporte, onboarding, contenido o timing, no incentivo economico directo.",
    tags: ["oferta", "soporte", "timing"],
  },
  {
    kicker: "Intervencion",
    title: "La intensidad debe cambiar por valor y riesgo",
    body: "Un buen playbook usa umbrales para decidir a quien escalar, a quien automatizar y a quien dejar sin accion.",
    tags: ["intensidad", "umbral", "economics"],
  },
  {
    kicker: "Intervencion",
    title: "Canal y momento importan",
    body: "Email, push, llamada o contacto humano no sirven igual en todas las etapas ni para todos los segmentos.",
    tags: ["canal", "momento", "orquestacion"],
  },
  {
    kicker: "Intervencion",
    title: "Aprender del resultado cierra el loop",
    body: "La accion sobre churn o propension mejora cuando el sistema registra que oferta funciono, cual fallo y para quien.",
    tags: ["feedback", "aprendizaje", "resultado"],
  },
];

export const classTwentySixAntiPatterns = [
  {
    title: "Modelar sin playbook de accion",
    body: "Un score de churn o propension pierde valor si no existe una respuesta distinta segun umbral, valor y causa probable.",
  },
  {
    title: "Tratar igual a todos los clientes de riesgo",
    body: "La misma accion sobre segmentos muy distintos suele destruir economics y bajar efectividad del sistema.",
  },
  {
    title: "No medir incrementalidad",
    body: "Muchas acciones parecen funcionar aunque el cliente igual iba a comprar o a quedarse. Hace falta medir cambio real.",
  },
  {
    title: "Usar targets difusos",
    body: "Si nadie puede explicar que predice exactamente el modelo, despues tampoco se puede gobernar bien su uso.",
  },
];

export const classTwentySixRules = [
  {
    title: "Definir target segun decision comercial concreta",
    body: "Churn, recompra, upsell o winback requieren targets diferentes y no conviene mezclarlos como si fueran un mismo problema.",
  },
  {
    title: "Conectar score con tratamiento",
    body: "El valor aparece cuando el modelo ayuda a elegir accion, intensidad, canal y timing con mejor criterio.",
  },
  {
    title: "Priorizar por economics y no solo por probabilidad",
    body: "La mejor cola de accion mezcla riesgo o propension con valor esperado y costo de intervenir.",
  },
  {
    title: "Aprender del resultado de la accion",
    body: "Sin feedback sobre que tratamiento funciono, el sistema envejece rapido y repite esfuerzo poco rentable.",
  },
];

export const classTwentySixRoadmapCards = [
  {
    kicker: "Paso 1",
    title: "Elegir problema de riesgo o propension",
    body: "Conviene empezar por churn, recompra, cross-sell o winback segun donde exista mejor mezcla de dolor, datos y capacidad de accion.",
    tags: ["problema", "dolor", "prioridad"],
  },
  {
    kicker: "Paso 2",
    title: "Definir target, senales y economics",
    body: "Se deja claro que predice el sistema, que datos lo alimentan y cuanto vale actuar o equivocarse sobre cada caso.",
    tags: ["target", "senales", "economics"],
  },
  {
    kicker: "Paso 3",
    title: "Pilotear score con tratamiento diferencial",
    body: "La prueba debe distinguir que hacer por umbral y como se medira si la intervencion realmente cambia el resultado.",
    tags: ["piloto", "umbral", "tratamiento"],
  },
  {
    kicker: "Paso 4",
    title: "Escalar con feedback y monitoreo",
    body: "El sistema madura cuando revisa drift, incrementalidad, saturacion y respuesta por segmento dentro de una rutina operativa.",
    tags: ["feedback", "drift", "segmentos"],
  },
];

export const classTwentySixTakeaways = [
  "Churn y propension valen cuando traducen probabilidad en una mejor intervencion, no cuando solo agregan un score al CRM.",
  "Target claro, economics y tratamiento diferencial cambian mas el valor del caso que la complejidad del algoritmo.",
  "La efectividad real aparece cuando el sistema aprende del resultado de la accion y no solo del score inicial.",
  "La siguiente clase abre el mapa conceptual de series temporales para entender mejor forecasting y cambio en el tiempo.",
];

export const classTwentySevenSeriesProfiles = [
  {
    id: "trend",
    label: "Tendencia",
    title: "Series donde importa leer direccion y cambio estructural en el nivel",
    body: "Las series con tendencia ayudan a detectar crecimiento, caida o cambio de ritmo, pero necesitan cuidado para no confundir ruido corto con un movimiento mas estructural del sistema.",
    chip: "Nivel y direccion",
    scores: [86, 82, 74],
    primaryTitle: "Que revela",
    primaryItems: [
      "Si el sistema gana o pierde nivel con el tiempo",
      "Si hubo aceleracion o desaceleracion real",
      "Si conviene revisar cambio de contexto o estrategia",
    ],
    pills: ["nivel", "slope", "cambio"],
    secondaryTitle: "Riesgos de lectura",
    secondaryItems: ["ver tendencia donde no la hay", "ignorar estacionalidad", "reaccionar de mas al corto plazo"],
    noteTitle: "Lectura de clase",
    noteBody: "La tendencia sirve para orientar decisiones cuando el negocio necesita ver direccion general y no solo fluctuacion semanal o diaria.",
  },
  {
    id: "seasonality",
    label: "Estacionalidad",
    title: "Series donde el calendario explica gran parte del comportamiento",
    body: "La estacionalidad aparece cuando feriados, quincenas, fines de semana o campanas recurrentes explican patrones que se repiten en ventanas parecidas del tiempo.",
    chip: "Calendario recurrente",
    scores: [90, 88, 80],
    primaryTitle: "Que revela",
    primaryItems: [
      "Patrones que se repiten con cadencia conocida",
      "Cuando comparar contra el mismo periodo vale mas que contra el anterior",
      "Donde el calendario pesa mas que la intuicion puntual",
    ],
    pills: ["calendario", "repeticion", "comparacion"],
    secondaryTitle: "Riesgos de lectura",
    secondaryItems: ["ignorar eventos moviles", "comparar mal periodos", "sobreajustar efecto calendario"],
    noteTitle: "Lectura de clase",
    noteBody: "Muchos errores de negocio en forecasting nacen por tratar una serie estacional como si fuera una linea lisa sin ritmo propio.",
  },
  {
    id: "shocks",
    label: "Shocks",
    title: "Series donde eventos, promo o incidentes rompen el patron habitual",
    body: "Hay series donde el problema central no es la repeticion sino identificar que cambio el sistema: una promo, un incidente, una politica o un evento fuera de patron.",
    chip: "Intervenciones y rupturas",
    scores: [72, 78, 84],
    primaryTitle: "Que revela",
    primaryItems: [
      "Cuando una ruptura altera el baseline previo",
      "Si un evento genero cambio sostenido o solo un pico temporal",
      "Donde conviene separar contexto normal de intervencion puntual",
    ],
    pills: ["shock", "ruptura", "baseline"],
    secondaryTitle: "Riesgos de lectura",
    secondaryItems: ["mezclar anomalia con patron", "esconder eventos en promedios", "forzar continuidad falsa"],
    noteTitle: "Lectura de clase",
    noteBody: "Las rupturas cambian mucho la calidad del forecast y obligan a tratar el contexto con mas criterio que un simple promedio historico.",
  },
  {
    id: "hierarchy",
    label: "Jerarquia",
    title: "Series donde canal, tienda, producto o region forman varios niveles conectados",
    body: "Las series jerarquicas exigen entender como conviven total y detalle, porque la decision puede consumirse arriba o abajo y cada nivel trae ruido distinto.",
    chip: "Total y detalle",
    scores: [78, 70, 86],
    primaryTitle: "Que revela",
    primaryItems: [
      "Como se reparte el comportamiento entre niveles",
      "Donde el agregado es estable pero el detalle es ruidoso",
      "Que granularidad conviene usar para decidir",
    ],
    pills: ["region", "canal", "SKU"],
    secondaryTitle: "Riesgos de lectura",
    secondaryItems: ["demasiado detalle inutil", "totales inconsistentes", "consumo en nivel equivocado"],
    noteTitle: "Lectura de clase",
    noteBody: "Pensar series jerarquicas ayuda a evitar el error de modelar al nivel mas fino solo porque es tecnicamente posible.",
  },
];

export const classTwentySevenDecompositionCards = [
  {
    kicker: "Serie",
    title: "Nivel y tendencia",
    body: "Sirven para leer direccion general y si el sistema gana, pierde o cambia de ritmo en una ventana mas amplia.",
    tags: ["nivel", "tendencia", "direccion"],
  },
  {
    kicker: "Serie",
    title: "Calendario y estacionalidad",
    body: "Ayudan a separar patrones repetidos de cambios realmente nuevos en el comportamiento temporal.",
    tags: ["calendario", "estacionalidad", "comparacion"],
  },
  {
    kicker: "Serie",
    title: "Residuo y ruido",
    body: "Lo que queda fuera del patron esperado suele abrir preguntas sobre shocks, data quality o limites del modelo usado.",
    tags: ["residuo", "ruido", "anomalia"],
  },
  {
    kicker: "Serie",
    title: "Jerarquia y agregacion",
    body: "El total puede verse estable mientras una parte critica del sistema ya se deteriora o cambia mucho mas rapido.",
    tags: ["jerarquia", "agregado", "detalle"],
  },
];

export const classTwentySevenValidationCards = [
  {
    kicker: "Validacion",
    title: "Ventanas rodantes",
    body: "Las series se evalúan mejor respetando el tiempo y viendo si el comportamiento aguanta varias ventanas de prueba, no una sola particion comoda.",
    tags: ["rolling", "tiempo", "prueba"],
  },
  {
    kicker: "Validacion",
    title: "Horizon especifico",
    body: "El error se interpreta distinto segun se pronostiquen horas, dias o meses; la ventana final cambia la calidad del aprendizaje.",
    tags: ["horizon", "error", "decision"],
  },
  {
    kicker: "Validacion",
    title: "Baseline temporal",
    body: "Comparar contra naive, ultimo valor o promedio estacional ayuda a saber si el modelo realmente agrega algo defendible.",
    tags: ["baseline", "naive", "comparacion"],
  },
  {
    kicker: "Validacion",
    title: "Cambio de contexto",
    body: "Drift, quiebres o nuevas politicas pueden volver obsoleta una serie estable; por eso conviene revisar cambio de regimen y no solo error promedio.",
    tags: ["drift", "quiebre", "regimen"],
  },
];

export const classTwentySevenAntiPatterns = [
  {
    title: "Romper el tiempo al validar",
    body: "Mezclar pasado y futuro en entrenamiento o prueba hace que la serie parezca mas predecible de lo que realmente es.",
  },
  {
    title: "Tratar shocks como ruido cualquiera",
    body: "Promo, incidentes o cambios de politica pueden merecer tratamiento separado y no esconderse dentro del promedio general.",
  },
  {
    title: "Elegir granularidad por capricho",
    body: "Mas detalle no siempre mejora la decision; a veces solo crea ruido que el negocio ni puede usar ni mantener.",
  },
  {
    title: "Olvidar el calendario",
    body: "Muchas malas lecturas temporales vienen de ignorar estacionalidad, feriados o ventanas recurrentes del negocio.",
  },
];

export const classTwentySevenRules = [
  {
    title: "Pensar la serie desde la decision futura",
    body: "Horizonte, granularidad y frecuencia se eligen mejor cuando la empresa sabe quien consumira el pronostico y para que.",
  },
  {
    title: "Separar patron de shock",
    body: "Tendencia y estacionalidad sirven para leer repeticion; las rupturas piden contexto y criterio aparte.",
  },
  {
    title: "Validar respetando el tiempo",
    body: "Rolling windows, baselines y comparaciones temporales ayudan a medir mejor el valor real del modelo en series.",
  },
  {
    title: "Elegir nivel de consumo defendible",
    body: "No conviene modelar la serie mas fina posible si el negocio decide en un nivel mas alto y estable.",
  },
];

export const classTwentySevenRoadmapCards = [
  {
    kicker: "Paso 1",
    title: "Entender patron temporal dominante",
    body: "Se revisa si la serie esta dominada por tendencia, estacionalidad, shocks o jerarquia antes de elegir tecnica.",
    tags: ["patron", "estacionalidad", "shocks"],
  },
  {
    kicker: "Paso 2",
    title: "Definir horizonte y nivel de consumo",
    body: "La decision real ayuda a fijar que ventana y que granularidad hacen sentido para negocio u operacion.",
    tags: ["horizon", "nivel", "consumo"],
  },
  {
    kicker: "Paso 3",
    title: "Construir baseline temporal",
    body: "Antes de sofisticar el modelo conviene dejar una referencia simple para saber si de verdad se esta agregando valor.",
    tags: ["baseline", "naive", "referencia"],
  },
  {
    kicker: "Paso 4",
    title: "Pilotear y revisar cambios de regimen",
    body: "El sistema madura cuando monitorea desvíos, shocks y cambios de contexto dentro de una rutina clara de revision.",
    tags: ["piloto", "drift", "revision"],
  },
];

export const classTwentySevenTakeaways = [
  "Pensar en series temporales es entender patron, calendario, shock y nivel de consumo antes de elegir tecnica.",
  "La validacion temporal necesita respetar el orden del tiempo y compararse contra baselines simples pero utiles.",
  "Horizonte y granularidad correctos pesan tanto como el algoritmo sobre el valor final del forecast.",
  "La siguiente clase baja estas ideas a ARIMA y Prophet para comparar cuando conviene cada uno.",
];

export const classTwentyEightModelProfiles = [
  {
    id: "baseline",
    label: "Baseline",
    title: "Una referencia simple para no confundir complejidad con mejora real",
    body: "Antes de usar ARIMA o Prophet conviene dejar una referencia naive, promedio o ultimo valor para saber si el modelo sofisticado realmente esta aportando mas que una regla sencilla.",
    chip: "Referencia minima",
    scores: [92, 64, 90],
    primaryTitle: "Cuando encaja",
    primaryItems: [
      "Se necesita una comparacion rapida y defendible",
      "La serie aun no justifica gran complejidad",
      "El equipo quiere medir valor incremental real",
    ],
    pills: ["naive", "simple", "benchmark"],
    secondaryTitle: "Limites frecuentes",
    secondaryItems: ["captura poco calendario", "bajo ajuste fino", "se queda corto en series ricas"],
    noteTitle: "Lectura de clase",
    noteBody: "Una buena baseline no compite con el modelo; le da una vara honesta para demostrar si vale la pena subir complejidad.",
  },
  {
    id: "arima",
    label: "ARIMA",
    title: "Modelar dependencia temporal usando rezagos y diferenciacion",
    body: "ARIMA encaja cuando la serie tiene estructura temporal util, cuando el equipo puede trabajar la estacionariedad y cuando se busca una lectura mas clasica y controlada del patron.",
    chip: "Rezagos y drift",
    scores: [84, 72, 80],
    primaryTitle: "Cuando encaja",
    primaryItems: [
      "La serie es razonablemente estable tras transformar",
      "Se quiere una aproximacion clasica e interpretable",
      "El horizonte no exige demasiadas rupturas o shocks complejos",
    ],
    pills: ["lag", "diferenciacion", "estructura"],
    secondaryTitle: "Limites frecuentes",
    secondaryItems: ["requiere tuning cuidadoso", "sufre con cambios bruscos", "escala peor a muchas series"],
    noteTitle: "Lectura de clase",
    noteBody: "ARIMA vale cuando el patron temporal es relativamente ordenado y el equipo puede sostener una disciplina minima de preparacion de serie.",
  },
  {
    id: "sarima",
    label: "SARIMA",
    title: "Extender ARIMA para capturar componentes estacionales mas claros",
    body: "SARIMA resulta util cuando la estacionalidad pesa bastante y conviene modelarla de forma explicita dentro de una familia clasica de series temporales.",
    chip: "Estacionalidad explicita",
    scores: [82, 76, 78],
    primaryTitle: "Cuando encaja",
    primaryItems: [
      "La serie muestra un calendario repetitivo claro",
      "Se necesita una lectura temporal estructurada",
      "El patron estacional es suficientemente estable",
    ],
    pills: ["seasonal", "calendar", "classic"],
    secondaryTitle: "Limites frecuentes",
    secondaryItems: ["parametros mas delicados", "poca tolerancia a quiebres", "mantenimiento pesado"],
    noteTitle: "Lectura de clase",
    noteBody: "SARIMA suele ser buena opcion cuando la estacionalidad es fuerte y entendible, pero pide cuidado extra en ajuste y mantenimiento.",
  },
  {
    id: "prophet",
    label: "Prophet",
    title: "Modelar tendencia, estacionalidad y changepoints con una configuracion mas pragmatica",
    body: "Prophet suele gustar cuando el equipo necesita velocidad para capturar calendario y cambios de tendencia sin una calibracion tan manual como ARIMA clasico, aunque no resuelve todos los contextos.",
    chip: "Calendario y changepoints",
    scores: [78, 88, 84],
    primaryTitle: "Cuando encaja",
    primaryItems: [
      "Hay calendario relevante y cambios de tendencia visibles",
      "Se busca una entrada mas rapida al forecasting practico",
      "El equipo necesita iterar con varias series de negocio",
    ],
    pills: ["holiday", "trend", "changepoints"],
    secondaryTitle: "Limites frecuentes",
    secondaryItems: ["falsa sensacion de facilidad", "sobreconfianza en defaults", "no siempre gana a baseline"],
    noteTitle: "Lectura de clase",
    noteBody: "Prophet ayuda mucho cuando el problema pide rapidez y calendario, pero igual necesita criterio sobre horizonte, shocks y valor real de negocio.",
  },
];

export const classTwentyEightChoiceCards = [
  {
    kicker: "Eleccion",
    title: "Baseline primero",
    body: "Dejar una referencia simple evita celebrar una mejora aparente que en realidad no supera una regla temporal basica.",
    tags: ["baseline", "referencia", "humildad"],
  },
  {
    kicker: "Eleccion",
    title: "Estacionariedad y transformacion",
    body: "ARIMA gana claridad cuando la serie se prepara bien; si eso no ocurre, el modelo puede verse mas tecnico de lo que realmente entiende.",
    tags: ["transformacion", "diferenciacion", "estructura"],
  },
  {
    kicker: "Eleccion",
    title: "Calendario y changepoints",
    body: "Si feriados, eventos y quiebres pesan fuerte, conviene evaluar modelos que los traten de forma mas explicita.",
    tags: ["calendar", "holidays", "changepoints"],
  },
  {
    kicker: "Eleccion",
    title: "Mantenimiento y escala",
    body: "La mejor tecnica no es solo la mas precisa; tambien importa si el equipo puede mantenerla sobre muchas series sin volverse fragil.",
    tags: ["mantenimiento", "escala", "operacion"],
  },
];

export const classTwentyEightWorkflowCards = [
  {
    kicker: "Workflow",
    title: "Preparar la serie y el horizonte",
    body: "Limpiar, revisar calendario y fijar la ventana de consumo suelen explicar gran parte de la calidad final del experimento temporal.",
    tags: ["serie", "horizon", "limpieza"],
  },
  {
    kicker: "Workflow",
    title: "Elegir baseline y familia",
    body: "Se compara una referencia simple con ARIMA, SARIMA o Prophet segun estructura temporal y costo de mantenimiento esperado.",
    tags: ["familia", "comparacion", "benchmark"],
  },
  {
    kicker: "Workflow",
    title: "Evaluar varias ventanas",
    body: "No alcanza con una prueba unica; conviene revisar performance en varias ventanas y especialmente en el horizonte que mas pesa para negocio.",
    tags: ["rolling", "ventanas", "decision"],
  },
  {
    kicker: "Workflow",
    title: "Integrar y monitorear",
    body: "La tecnica elegida debe terminar dentro de una rutina operativa donde se revisan errores, shocks y necesidad de recalibrar.",
    tags: ["integracion", "monitoreo", "recalibracion"],
  },
];

export const classTwentyEightAntiPatterns = [
  {
    title: "Usar Prophet o ARIMA por marca y no por problema",
    body: "La eleccion pierde fuerza cuando el equipo sigue la herramienta conocida sin revisar si la serie y el horizonte realmente encajan.",
  },
  {
    title: "Olvidar la baseline",
    body: "Sin referencia simple es dificil defender si el modelo sofisticado mejora algo relevante o solo agrega complejidad.",
  },
  {
    title: "Ignorar shocks y quiebres",
    body: "Los modelos clasicos pueden sufrir mucho cuando cambian promociones, politicas o contexto y nadie revisa esas rupturas.",
  },
  {
    title: "No pensar en mantenimiento",
    body: "Un modelo temporal puede funcionar en laboratorio y volverse inviable cuando hay que sostenerlo sobre muchas series reales.",
  },
];

export const classTwentyEightRules = [
  {
    title: "Comparar tecnicas contra una baseline honesta",
    body: "La complejidad se justifica mejor cuando supera una referencia simple en el horizonte que realmente importa al negocio.",
  },
  {
    title: "Elegir familia segun estructura temporal",
    body: "ARIMA, SARIMA o Prophet se entienden mejor cuando la empresa ya separo tendencia, estacionalidad y shocks relevantes.",
  },
  {
    title: "Mirar horizonte y mantenimiento juntos",
    body: "No sirve elegir el modelo mas fino si el equipo no puede sostenerlo o si el consumo del forecast no necesita tanta sofisticacion.",
  },
  {
    title: "Revisar cambios de contexto con disciplina",
    body: "Las series cambian y la tecnica elegida debe convivir con monitoreo, recalibracion y criterio humano frente a eventos nuevos.",
  },
];

export const classTwentyEightRoadmapCards = [
  {
    kicker: "Paso 1",
    title: "Definir horizonte y baseline",
    body: "Se fija la ventana de decision y una referencia temporal simple antes de entrar en modelos mas complejos.",
    tags: ["horizon", "baseline", "decision"],
  },
  {
    kicker: "Paso 2",
    title: "Revisar estructura de la serie",
    body: "Tendencia, calendario, shocks y estabilidad ayudan a decidir si ARIMA, SARIMA o Prophet tienen mejor encaje.",
    tags: ["estructura", "calendar", "shocks"],
  },
  {
    kicker: "Paso 3",
    title: "Pilotear varias familias con rolling validation",
    body: "La prueba compara rendimiento, interpretacion y mantenimiento sobre ventanas que se parezcan al consumo real del negocio.",
    tags: ["piloto", "rolling", "comparacion"],
  },
  {
    kicker: "Paso 4",
    title: "Escalar el modelo que mejor balancee valor y operacion",
    body: "La tecnica final deberia elegirse por utilidad neta y sostenibilidad, no solo por una metrica aislada sobre una sola corrida.",
    tags: ["escala", "utilidad", "sostenibilidad"],
  },
];

export const classTwentyEightTakeaways = [
  "ARIMA y Prophet se eligen mejor cuando ya se entiende la estructura temporal y el horizonte que el negocio necesita consumir.",
  "La baseline sigue siendo la mejor defensa contra complejidad innecesaria.",
  "Calendario, changepoints, mantenimiento y escala importan tanto como el error final de laboratorio.",
  "La siguiente clase vuelve del pronostico a la optimizacion de campanas y presupuesto.",
];

export const classTwentyNineCampaignCases = [
  {
    id: "budget",
    label: "Budget",
    title: "Optimizar asignacion de presupuesto entre canales o frentes",
    body: "La optimizacion de campanas gana mucho cuando ayuda a decidir donde poner mas presupuesto y donde frenar gasto antes de que la eficiencia se degrade.",
    chip: "Asignacion y ROI",
    metrics: [
      { label: "Valor", value: "alto" },
      { label: "Complejidad", value: "media" },
      { label: "Cadencia", value: "diaria" },
    ],
    primaryTitle: "Datos que suelen pesar",
    primaryItems: ["gasto", "respuesta", "saturacion", "margen"],
    sideTitle: "Riesgos si se hace mal",
    sideItems: ["sobreinversion", "ceguera de canal", "reaccion tardia"],
    noteTitle: "Lectura ejecutiva",
    noteBody: "La asignacion mejora cuando el modelo ayuda a mover dinero con criterio y no solo a reportar performance pasada.",
  },
  {
    id: "audience",
    label: "Audiencia",
    title: "Optimizar mix de audiencias y segmentos por propension o retorno",
    body: "Los modelos de campana ayudan a decidir que segmentos conviene priorizar, a cuales dejar descansar y donde un mismo mensaje ya no rinde igual.",
    chip: "Mix y cobertura",
    metrics: [
      { label: "Valor", value: "medio-alto" },
      { label: "Complejidad", value: "media" },
      { label: "Cadencia", value: "semanal" },
    ],
    primaryTitle: "Datos que suelen pesar",
    primaryItems: ["respuesta historica", "valor de cliente", "overlap", "fatiga"],
    sideTitle: "Riesgos si se hace mal",
    sideItems: ["saturacion", "canibalizacion", "sesgo de segmento"],
    noteTitle: "Lectura ejecutiva",
    noteBody: "La optimizacion de audiencia madura cuando distingue valor incremental de simple repeticion de impacto aparente.",
  },
  {
    id: "creative",
    label: "Creatividad",
    title: "Optimizar rotacion de creatividades y mensajes segun contexto",
    body: "Creative optimization sirve cuando la empresa aprende que mensaje funciona mejor para cada segmento, etapa y canal sin quemar rapido una sola pieza ganadora.",
    chip: "Mensaje y fatiga",
    metrics: [
      { label: "Valor", value: "medio" },
      { label: "Complejidad", value: "media" },
      { label: "Cadencia", value: "intra-semanal" },
    ],
    primaryTitle: "Datos que suelen pesar",
    primaryItems: ["CTR", "conversion", "fatiga creativa", "audiencia"],
    sideTitle: "Riesgos si se hace mal",
    sideItems: ["sobreajuste", "agotamiento de pieza", "lectura superficial"],
    noteTitle: "Lectura ejecutiva",
    noteBody: "No se trata solo de elegir la pieza con mas clics, sino de mantener aprendizaje sostenido sin agotar rapido la creatividad.",
  },
  {
    id: "pacing",
    label: "Pacing",
    title: "Optimizar ritmo de gasto y entrega a lo largo de la campana",
    body: "Pacing ayuda a sostener volumen y eficiencia durante la vida de una campana, evitando quemar inventario o presupuesto demasiado pronto.",
    chip: "Ritmo y control",
    metrics: [
      { label: "Valor", value: "medio" },
      { label: "Complejidad", value: "alta" },
      { label: "Cadencia", value: "intra-dia" },
    ],
    primaryTitle: "Datos que suelen pesar",
    primaryItems: ["delivery", "costo", "ventana", "respuesta"],
    sideTitle: "Riesgos si se hace mal",
    sideItems: ["gasto prematuro", "subdelivery", "perdida de oportunidad"],
    noteTitle: "Lectura ejecutiva",
    noteBody: "El ritmo correcto de gasto puede importar tanto como el mix de canales, porque protege oportunidad futura dentro de la misma campana.",
  },
];

export const classTwentyNineLeverCards = [
  {
    kicker: "Palanca",
    title: "Objetivo y funcion de valor",
    body: "No toda campana optimiza lo mismo. Puede importar alcance, conversion, CAC, revenue o una mezcla con restricciones concretas.",
    tags: ["objetivo", "ROI", "funcion"],
  },
  {
    kicker: "Palanca",
    title: "Restricciones operativas",
    body: "Presupuesto, inventario creativo, frecuencia y saturacion deben entrar como limites y no quedarse fuera del problema.",
    tags: ["budget", "frecuencia", "limites"],
  },
  {
    kicker: "Palanca",
    title: "Cadencia de ajuste",
    body: "No todos los frentes se optimizan cada hora; la frecuencia correcta depende del volumen, la ventana y el tiempo que tarda en verse el resultado.",
    tags: ["cadencia", "ventana", "ritmo"],
  },
  {
    kicker: "Palanca",
    title: "Feedback real de la campana",
    body: "La optimizacion madura cuando aprende de la respuesta observable y evita seguir moviendo presupuesto por inercia o intuicion aislada.",
    tags: ["feedback", "respuesta", "aprendizaje"],
  },
];

export const classTwentyNineSignalCards = [
  {
    kicker: "Senal",
    title: "Spend y respuesta",
    body: "La relacion entre gasto, volumen y retorno es la base minima para cualquier optimizacion de campana seria.",
    tags: ["spend", "volumen", "retorno"],
  },
  {
    kicker: "Senal",
    title: "Saturacion y frecuencia",
    body: "Una audiencia puede dejar de responder aunque el gasto siga subiendo. Medir ese punto evita destruir eficiencia.",
    tags: ["saturacion", "frecuencia", "fatiga"],
  },
  {
    kicker: "Senal",
    title: "Overlap entre audiencias",
    body: "Cuando varios conjuntos se pisan, la optimizacion canal por canal puede esconder canibalizacion o atribucion engañosa.",
    tags: ["overlap", "canibalizacion", "atribucion"],
  },
  {
    kicker: "Senal",
    title: "Incrementalidad aproximada",
    body: "No todo impacto observado es incremental. Hace falta una lectura que ayude a distinguir aporte real de simple captura de demanda existente.",
    tags: ["incrementalidad", "uplift", "causalidad"],
  },
];

export const classTwentyNineAntiPatterns = [
  {
    title: "Mover presupuesto solo por ultimo dato visible",
    body: "La optimizacion se vuelve reactiva y fragil cuando persigue micro cambios sin entender saturacion, ventana o retraso del efecto.",
  },
  {
    title: "Optimizar un canal como isla",
    body: "Sin mirar overlap y journey, una mejora aparente puede esconder canibalizacion o transferencia de demanda entre frentes.",
  },
  {
    title: "Confundir impacto observado con incrementalidad",
    body: "Muchas campanas se llevan el credito de clientes que igual iban a comprar o responder sin ese esfuerzo.",
  },
  {
    title: "No poner restricciones del negocio",
    body: "Frecuencia, margen, inventario creativo o politica comercial cambian la accion correcta y deben entrar al modelo.",
  },
];

export const classTwentyNineRules = [
  {
    title: "Definir funcion de valor y restricciones",
    body: "La optimizacion mejora cuando se deja claro que quiere mover la campana y que limites no puede romper el sistema.",
  },
  {
    title: "Elegir cadencia acorde a la ventana de aprendizaje",
    body: "Ajustar muy rapido o muy lento puede ser igual de malo si la campana necesita otra velocidad para revelar su efecto.",
  },
  {
    title: "Mirar mix y overlap, no solo canal",
    body: "El valor real suele vivir en la asignacion conjunta y no en la performance aislada de un frente visto en soledad.",
  },
  {
    title: "Buscar incrementalidad cuando sea posible",
    body: "Hace falta distinguir respuesta aparente de aporte real antes de escalar una logica de optimizacion a gran presupuesto.",
  },
];

export const classTwentyNineRoadmapCards = [
  {
    kicker: "Paso 1",
    title: "Elegir objetivo de optimizacion",
    body: "Primero se define si importa mas conversion, CAC, revenue, volumen o una combinacion con restricciones claras de negocio.",
    tags: ["objetivo", "KPI", "restricciones"],
  },
  {
    kicker: "Paso 2",
    title: "Mapear senales, ventanas y limites",
    body: "Se revisan gasto, respuesta, overlap, saturacion y ritmo de aprendizaje antes de decidir automatizar o solo asistir la decision.",
    tags: ["senales", "ventana", "limites"],
  },
  {
    kicker: "Paso 3",
    title: "Pilotear con guardrails visibles",
    body: "La prueba mueve presupuesto o intensidad dejando monitoreo claro sobre canibalizacion, frecuencia y retorno incremental esperado.",
    tags: ["piloto", "guardrails", "retorno"],
  },
  {
    kicker: "Paso 4",
    title: "Escalar con rutina de aprendizaje",
    body: "El sistema madura cuando aprende de resultados reales y revisa si el contexto de audiencia, canal o creatividad cambio demasiado.",
    tags: ["aprendizaje", "escala", "contexto"],
  },
];

export const classTwentyNineTakeaways = [
  "Optimizar campanas es mover presupuesto, audiencias, creatividades y ritmo con una funcion de valor clara y restricciones visibles.",
  "La cadencia de ajuste y la incrementalidad importan tanto como la precision aparente del modelo.",
  "Una buena optimizacion mira el sistema completo y no solo el ultimo numerito del canal que mejor se vio hoy.",
  "La siguiente clase aterriza experimentacion y personalizacion para validar cambios con mas disciplina.",
];

export const classThirtyExperimentProfiles = [
  {
    id: "onboarding",
    label: "Onboarding",
    title: "Experimentar y personalizar la primera experiencia del usuario",
    body: "Onboarding es un buen terreno para A/B testing porque una pequena mejora en activacion puede cambiar retencion futura y calidad del resto del funnel.",
    kpis: ["activacion", "retencion", "friccion"],
    note: "La personalizacion en onboarding funciona mejor cuando cambia una experiencia concreta y no solo multiplica variantes sin hipotesis clara.",
    steps: [
      {
        key: "hypothesis",
        title: "Hipotesis",
        detail: "Se define que comportamiento se quiere mover y por que se espera que cierto mensaje, flujo o ayuda cambie la activacion.",
        boundary: "Hypothesis",
        automation: "Nombrar la palanca que se quiere probar.",
        guardrail: "Sin una hipotesis concreta, el test se vuelve una loteria de variantes.",
      },
      {
        key: "segment",
        title: "Segmentacion",
        detail: "Conviene decidir si el cambio sera para todos, para nuevos usuarios o para grupos donde la friccion es realmente distinta.",
        boundary: "Segment",
        automation: "Acotar donde el experimento tiene mas sentido.",
        guardrail: "No mezclar poblaciones muy distintas si eso rompe la lectura del test.",
      },
      {
        key: "test",
        title: "Test",
        detail: "Se arma una comparacion clara entre control y variante con metrica principal y secundarias bien definidas.",
        boundary: "Test",
        automation: "Diseñar control y exito antes de lanzar.",
        guardrail: "Sin criterio previo de exito, la lectura final se vuelve oportunista.",
      },
      {
        key: "rollout",
        title: "Rollout",
        detail: "Si la variante gana, se decide si escalar a todos, personalizar por segmento o seguir iterando con una siguiente hipotesis.",
        boundary: "Rollout",
        automation: "Convertir aprendizaje en cambio real.",
        guardrail: "No todo lift puntual justifica escalar sin revisar estabilidad y efectos laterales.",
      },
    ],
  },
  {
    id: "commerce",
    label: "E-commerce",
    title: "Experimentar personalizacion de ranking, promo o mensajes en compra",
    body: "En comercio digital el testing ayuda a validar si ranking, ofertas o mensajes realmente mejoran conversion, canasta o valor neto sin destruir experiencia.",
    kpis: ["conversion", "canasta", "margen"],
    note: "La mejor personalizacion comercial no es la mas agresiva sino la que mejora relevancia manteniendo economics y confianza.",
    steps: [
      {
        key: "hypothesis",
        title: "Hipotesis",
        detail: "Se define que cambio del journey o mensaje deberia mover conversion, ticket o discovery de manera defendible.",
        boundary: "Hypothesis",
        automation: "Traducir intuicion comercial a prueba concreta.",
        guardrail: "No mezclar varias palancas a la vez si despues no se puede atribuir el resultado.",
      },
      {
        key: "segment",
        title: "Segmentacion",
        detail: "Puede ser por audiencia, etapa del journey, valor o contexto de sesion si la diferencia cambia realmente la accion correcta.",
        boundary: "Segment",
        automation: "Definir para quien deberia cambiar la experiencia.",
        guardrail: "Segmentar sin volumen suficiente vuelve el test ruidoso y confuso.",
      },
      {
        key: "test",
        title: "Test",
        detail: "Se deja claro control, variante, periodo y jerarquia de metricas para no elegir ganador solo por el numero mas conveniente.",
        boundary: "Test",
        automation: "Sostener disciplina de medicion.",
        guardrail: "Cambiar demasiadas cosas a la vez rompe lectura causal del test.",
      },
      {
        key: "rollout",
        title: "Rollout",
        detail: "El resultado se convierte en regla nueva, personalizacion segmentada o siguiente experimento segun estabilidad y economics del lift observado.",
        boundary: "Rollout",
        automation: "Pasar de aprendizaje a decision de producto o growth.",
        guardrail: "No escalar una mejora marginal si degrada experiencia o margen en otra capa del journey.",
      },
    ],
  },
  {
    id: "retention",
    label: "Retencion",
    title: "Experimentar mensajes y ofertas para reducir fuga o reactivar uso",
    body: "Los tests en retencion ayudan a validar que tipo de outreach, incentivo o ayuda realmente cambia comportamiento y para que segmento vale la pena hacerlo.",
    kpis: ["retencion", "reactivacion", "economics"],
    note: "Retencion y personalizacion funcionan mejor cuando se conectan con riesgo, valor y causa probable del deterioro del cliente.",
    steps: [
      {
        key: "hypothesis",
        title: "Hipotesis",
        detail: "Se formula que accion deberia reducir fuga o aumentar retorno y en que parte del ciclo del cliente se espera el mayor cambio.",
        boundary: "Hypothesis",
        automation: "Definir la palanca de retencion a validar.",
        guardrail: "Sin una causa probable, la accion se vuelve una apuesta demasiado ciega.",
      },
      {
        key: "segment",
        title: "Segmentacion",
        detail: "Valor, riesgo, uso y etapa de vida ayudan a elegir grupos donde un mismo tratamiento puede tener sentido economico.",
        boundary: "Segment",
        automation: "Elegir el grupo correcto para la prueba.",
        guardrail: "Probar sobre una mezcla heterogenea suele esconder que la accion sirve solo para algunos casos.",
      },
      {
        key: "test",
        title: "Test",
        detail: "Se mide control vs variante con una jerarquia que no solo mire respuesta corta sino tambien retencion neta y costo de intervenir.",
        boundary: "Test",
        automation: "Balancear lift con economics.",
        guardrail: "No premiar una accion cara solo porque movio una metrica superficial.",
      },
      {
        key: "rollout",
        title: "Rollout",
        detail: "El aprendizaje se convierte en playbook segmentado o en siguiente experimento mas fino sobre canal, oferta o timing.",
        boundary: "Rollout",
        automation: "Convertir prueba en orquestacion mas inteligente.",
        guardrail: "Una personalizacion sin rutina de aprendizaje se enfria rapido y vuelve al mismo punto inicial.",
      },
    ],
  },
  {
    id: "content",
    label: "Contenido",
    title: "Experimentar personalizacion editorial, creativa o de contenido",
    body: "En media o contenido, testing y personalizacion sirven para decidir que orden, tono o formato genera mejor engagement sin volver monotona la experiencia.",
    kpis: ["engagement", "recurrencia", "satisfaccion"],
    note: "El mejor sistema editorial equilibra lo que ya funciona con suficiente novedad para seguir aprendiendo del usuario.",
    steps: [
      {
        key: "hypothesis",
        title: "Hipotesis",
        detail: "Se define que cambio editorial deberia mover consumo, retencion o descubrimiento segun una lectura defendible del usuario.",
        boundary: "Hypothesis",
        automation: "Traducir intuicion creativa a prueba medible.",
        guardrail: "No lanzar variantes sin explicar que comportamiento concreto deberian cambiar.",
      },
      {
        key: "segment",
        title: "Segmentacion",
        detail: "El test puede diferenciar nuevos vs recurrentes, heavy vs light users o contextos distintos del journey de contenido.",
        boundary: "Segment",
        automation: "Separar experiencias donde la lectura cambia.",
        guardrail: "Segmentar demasiado fino puede matar volumen y claridad del resultado.",
      },
      {
        key: "test",
        title: "Test",
        detail: "Se comparan control y variantes midiendo no solo clic o apertura, sino profundidad de consumo y retorno del usuario.",
        boundary: "Test",
        automation: "Medir calidad de engagement, no solo vanity metrics.",
        guardrail: "CTR alto no siempre significa mejor experiencia total.",
      },
      {
        key: "rollout",
        title: "Rollout",
        detail: "La personalizacion final puede desplegarse por segmento o quedarse como regla parcial mientras se protege variedad y aprendizaje nuevo.",
        boundary: "Rollout",
        automation: "Escalar lo que sostiene valor y novedad.",
        guardrail: "No encerrar al usuario en una version demasiado estrecha del contenido.",
      },
    ],
  },
];

export const classThirtyEvidenceCards = [
  {
    kicker: "Experimento",
    title: "Control y variante claros",
    body: "Sin una comparacion limpia entre control y tratamiento, el test pierde casi toda capacidad de aprendizaje defendible.",
    tags: ["control", "variante", "causalidad"],
  },
  {
    kicker: "Experimento",
    title: "Jerarquia de metricas",
    body: "Hace falta definir metrica principal, secundarias y guardrails para no declarar ganador al resultado mas conveniente.",
    tags: ["metrica", "guardrails", "jerarquia"],
  },
  {
    kicker: "Experimento",
    title: "Volumen y ventana suficientes",
    body: "El aprendizaje depende del tamano y del tiempo del test; cortar muy pronto suele fabricar falsas certezas.",
    tags: ["volumen", "ventana", "estabilidad"],
  },
  {
    kicker: "Experimento",
    title: "Lectura por segmento cuando haga falta",
    body: "A veces el promedio oculta que el efecto existe solo en ciertos grupos y que ahi vive realmente la personalizacion futura.",
    tags: ["segmentos", "heterogeneidad", "uplift"],
  },
];

export const classThirtyPersonalizationCards = [
  {
    kicker: "Personalizacion",
    title: "Elegir bien el timing",
    body: "La misma accion puede ser util o invasiva segun el momento del journey en que se dispare.",
    tags: ["timing", "journey", "contexto"],
  },
  {
    kicker: "Personalizacion",
    title: "Segmentar con criterio economico",
    body: "No toda diferencia observable amerita una experiencia distinta; conviene personalizar donde el cambio tiene valor real.",
    tags: ["segmentacion", "economics", "valor"],
  },
  {
    kicker: "Personalizacion",
    title: "Cuidar saturacion y consistencia",
    body: "Muchas variantes sin coordinacion pueden volver incoherente la experiencia o fatigar al usuario muy rapido.",
    tags: ["fatiga", "consistencia", "coordinacion"],
  },
  {
    kicker: "Personalizacion",
    title: "Usar testing para aprender, no solo para justificar cambios",
    body: "El mejor experimento deja una hipotesis mejor entendida y una siguiente pregunta mas fuerte para iterar despues.",
    tags: ["aprendizaje", "iteracion", "hipotesis"],
  },
];

export const classThirtyAntiPatterns = [
  {
    title: "Lanzar tests sin hipotesis clara",
    body: "Sin una explicacion previa de que se espera mover y por que, el aprendizaje posterior se vuelve poco confiable.",
  },
  {
    title: "Cortar el test por ansiedad",
    body: "Mirar resultados demasiado pronto suele fabricar senales falsas y decisiones precipitadas.",
  },
  {
    title: "Personalizar todo para todos",
    body: "La personalizacion indiscriminada agrega complejidad y fatiga sin necesariamente crear valor incremental.",
  },
  {
    title: "Medir una sola metrica feliz",
    body: "Una mejora en clic, apertura o conversion puede esconder costo, churn, saturacion o degradacion de experiencia en otra capa.",
  },
];

export const classThirtyRules = [
  {
    title: "Empezar por hipotesis y guardrails",
    body: "Un buen experimento define que variable mover, por que deberia hacerlo y que metricas no puede romper en el camino.",
  },
  {
    title: "Elegir bien poblacion y ventana",
    body: "El valor del test depende mucho de a quien se expone y durante cuanto tiempo se observa el cambio.",
  },
  {
    title: "Personalizar donde haya diferencia util",
    body: "No conviene segmentar por cualquier senal; la mejor personalizacion aparece donde la accion correcta cambia de verdad y vale la pena mantenerla.",
  },
  {
    title: "Convertir aprendizaje en regla o siguiente prueba",
    body: "El test madura cuando deja una decision de producto, growth o retencion y no solo un deck con resultados curiosos.",
  },
];

export const classThirtyRoadmapCards = [
  {
    kicker: "Paso 1",
    title: "Elegir hipotesis y momento del journey",
    body: "Conviene empezar por una palanca concreta donde la experiencia actual tenga una friccion clara y una metrica valiosa que mover.",
    tags: ["hipotesis", "journey", "friccion"],
  },
  {
    kicker: "Paso 2",
    title: "Definir poblacion, control y exito",
    body: "Se deja claro quien entra al test, que ve el control, que ve la variante y como se medira el cambio principal y sus guardrails.",
    tags: ["control", "poblacion", "exito"],
  },
  {
    kicker: "Paso 3",
    title: "Leer resultado por valor y segmento",
    body: "La interpretacion final combina lift, costo, estabilidad y heterogeneidad para decidir si vale la pena personalizar despues.",
    tags: ["lift", "segmento", "costo"],
  },
  {
    kicker: "Paso 4",
    title: "Escalar o iterar con aprendizaje explicito",
    body: "La salida del test es una regla nueva, una personalizacion segmentada o una mejor hipotesis para la siguiente iteracion.",
    tags: ["escala", "iteracion", "aprendizaje"],
  },
];

export const classThirtyTakeaways = [
  "A/B testing y personalizacion sirven para aprender que experiencia mueve valor, no para lanzar variantes sin disciplina.",
  "Hipotesis, control, guardrails y ventana suficiente sostienen la credibilidad del resultado.",
  "La personalizacion madura cuando se aplica solo donde cambia de verdad la accion correcta y el economics del caso.",
  "La siguiente clase abre el proyecto integrador y ayuda a convertir todo el curso en un caso concreto bien planteado.",
];

export const classThirtyOneProjectProfiles = [
  {
    id: "growth",
    label: "Growth",
    title: "Proyecto enfocado en conversion, demanda o asignacion comercial",
    body: "Un proyecto growth suele combinar senales de cliente, funnel y presupuesto para mover conversion, recompra, demanda o eficiencia de campana con una pregunta de negocio bien acotada.",
    kpis: ["conversion", "CAC", "recompra"],
    note: "Este tipo de proyecto funciona mejor cuando puede medir impacto rapido y dejar una accion concreta para marketing o e-commerce.",
    steps: [
      {
        key: "problem",
        title: "Problema",
        detail: "Se define un cuello concreto del funnel o de la demanda que valga la pena mover con datos y que tenga impacto defendible.",
        boundary: "Problema",
        automation: "Acotar un dolor que realmente importe.",
        guardrail: "Un proyecto growth demasiado amplio se vuelve imposible de demostrar en poco tiempo.",
      },
      {
        key: "data",
        title: "Datos",
        detail: "Conviene usar fuentes disponibles de cliente, funnel, campana o compra que permitan una primera lectura sin depender de integraciones eternas.",
        boundary: "Datos",
        automation: "Elegir senales accesibles y utiles.",
        guardrail: "No construir el proyecto sobre datos que aun no existen o no se pueden validar.",
      },
      {
        key: "solution",
        title: "Solucion",
        detail: "La propuesta puede ser score, forecast, recomendacion o dashboard accionable segun la forma de la decision que se quiere mejorar.",
        boundary: "Solucion",
        automation: "Convertir problema en artefacto defendible.",
        guardrail: "No elegir la tecnica antes de entender la forma de la salida necesaria.",
      },
      {
        key: "pilot",
        title: "Piloto",
        detail: "Se deja claro como se probaria la idea, que equipo la consumiria y que indicador demostraria valor inicial del caso.",
        boundary: "Piloto",
        automation: "Aterrizar el caso a una prueba realista.",
        guardrail: "Un proyecto sin piloto propuesto queda en teoria bonita y poco mas.",
      },
    ],
  },
  {
    id: "operations",
    label: "Operacion",
    title: "Proyecto enfocado en capacidad, colas o eficiencia operativa",
    body: "Los proyectos operativos suelen capturar valor en demanda, priorizacion, routing o automatizacion parcial de flujos donde el tiempo y la capacidad pesan mucho.",
    kpis: ["SLA", "throughput", "costo"],
    note: "Operacion es una gran opcion de proyecto cuando existe dolor visible y una rutina donde la salida se pueda usar con rapidez.",
    steps: [
      {
        key: "problem",
        title: "Problema",
        detail: "Se identifica un cuello concreto de capacidad, espera, cola o excepcion que hoy consuma demasiado esfuerzo o tiempo.",
        boundary: "Problema",
        automation: "Elegir friccion operativa visible.",
        guardrail: "No confundir problema estructural del proceso con ausencia de modelo por moda.",
      },
      {
        key: "data",
        title: "Datos",
        detail: "Logs, tickets, colas, tiempos y atributos de caso suelen ser suficientes para abrir un primer analisis defendible.",
        boundary: "Datos",
        automation: "Usar rastros del flujo real.",
        guardrail: "Sin trazabilidad minima de proceso, el proyecto pierde base muy rapido.",
      },
      {
        key: "solution",
        title: "Solucion",
        detail: "Puede ser score de prioridad, forecast de carga, dashboard de control o regla de asignacion mejorada segun el caso.",
        boundary: "Solucion",
        automation: "Elegir salida acorde a la cola o capacidad.",
        guardrail: "No sobredisenar una solucion si una regla simple ya resuelve el dolor.",
      },
      {
        key: "pilot",
        title: "Piloto",
        detail: "El proyecto se aterriza en una parte del flujo, un equipo o una cola concreta con forma clara de medir mejora.",
        boundary: "Piloto",
        automation: "Volver testable la propuesta.",
        guardrail: "Sin scope acotado, la implementacion se vuelve demasiado difusa.",
      },
    ],
  },
  {
    id: "customer",
    label: "Cliente",
    title: "Proyecto enfocado en experiencia, retencion o siguiente mejor accion",
    body: "Los proyectos centrados en cliente suelen mezclar comportamiento, servicio y valor para mejorar retencion, personalizacion, recomendacion o calidad de la experiencia.",
    kpis: ["NPS", "retencion", "LTV"],
    note: "Este tipo de proyecto gana fuerza cuando la intervencion sobre el cliente es creible y se puede defender con economics claros.",
    steps: [
      {
        key: "problem",
        title: "Problema",
        detail: "Se define que tension de experiencia o relacion conviene atacar y por que ese frente tiene valor defensible para el negocio.",
        boundary: "Problema",
        automation: "Alinear experiencia con impacto economico.",
        guardrail: "No formular un proyecto de cliente solo con intuicion blanda sin metrica de valor.",
      },
      {
        key: "data",
        title: "Datos",
        detail: "Senales de uso, compra, tickets, feedback o journey ayudan a construir una primera hipotesis accionable.",
        boundary: "Datos",
        automation: "Combinar comportamiento con voz del cliente.",
        guardrail: "No apoyarse solo en percepcion si ya existen rastros mas confiables del comportamiento.",
      },
      {
        key: "solution",
        title: "Solucion",
        detail: "La propuesta puede ser un score de churn, una recomendacion, una personalizacion o un playbook de siguiente mejor accion.",
        boundary: "Solucion",
        automation: "Elegir salida conectada con la intervencion.",
        guardrail: "Sin un cambio real en la experiencia, el proyecto se queda como diagnostico bonito.",
      },
      {
        key: "pilot",
        title: "Piloto",
        detail: "Se define donde probar, que segmento tocar y como demostrar si el cambio mejora retencion, conversion o calidad de experiencia.",
        boundary: "Piloto",
        automation: "Aterrizar impacto esperado.",
        guardrail: "No proponer un piloto imposible de medir dentro del contexto del curso.",
      },
    ],
  },
  {
    id: "risk",
    label: "Riesgo",
    title: "Proyecto enfocado en control, fraude o gobierno de decisiones",
    body: "Los proyectos de riesgo y control combinan scoring, monitoreo o reglas de gobierno donde importa reducir desvio sin perder fairness ni trazabilidad.",
    kpis: ["fraude", "perdida", "fairness"],
    note: "Es una gran ruta cuando el estudiante quiere mostrar criterio en umbrales, monitoreo, apelacion y uso responsable de modelos.",
    steps: [
      {
        key: "problem",
        title: "Problema",
        detail: "Se define que riesgo o desvio concreto vale la pena anticipar, clasificar o monitorear con una mejor senal.",
        boundary: "Problema",
        automation: "Nombrar riesgo y decision asociada.",
        guardrail: "Un problema de riesgo mal definido produce modelos impresionantes pero poco utiles.",
      },
      {
        key: "data",
        title: "Datos",
        detail: "Eventos, historico, texto, override humano y senales contextuales ayudan a construir una base razonable para el caso.",
        boundary: "Datos",
        automation: "Elegir evidencia trazable.",
        guardrail: "No depender de etiquetas poco confiables si despues se quiere defender el proyecto.",
      },
      {
        key: "solution",
        title: "Solucion",
        detail: "Puede ser un score, semaforo de riesgo, tablero de control o playbook de revision humana con thresholds visibles.",
        boundary: "Solucion",
        automation: "Conectar modelo con gobierno.",
        guardrail: "No vender automatizacion total cuando el caso pide supervision humana.",
      },
      {
        key: "pilot",
        title: "Piloto",
        detail: "El caso se prueba sobre una cola, tipo de caso o segmento donde sea posible medir mejora y revisar fairness o costo del error.",
        boundary: "Piloto",
        automation: "Volver auditable la prueba.",
        guardrail: "Sin monitoreo por segmento, el piloto queda incompleto en proyectos sensibles.",
      },
    ],
  },
];

export const classThirtyOneDeliverableCards = [
  {
    kicker: "Entregable",
    title: "Problema y valor",
    body: "El proyecto debe abrir con una tension de negocio clara, una metrica relevante y una razon defendible para intervenir con datos o modelos.",
    tags: ["problema", "valor", "metrica"],
  },
  {
    kicker: "Entregable",
    title: "Mapa de datos y supuestos",
    body: "Hace falta mostrar que fuentes se usan, que limitaciones existen y que supuestos sostienen la propuesta elegida.",
    tags: ["datos", "supuestos", "limites"],
  },
  {
    kicker: "Entregable",
    title: "Artefacto o solucion propuesta",
    body: "Dashboard, score, forecast, recomendador o playbook deben verse como salida concreta y no solo como idea aspiracional.",
    tags: ["artefacto", "solucion", "demo"],
  },
  {
    kicker: "Entregable",
    title: "Piloto y medicion",
    body: "Todo proyecto gana credibilidad cuando deja claro como se probaria, que equipo lo usaria y como se medirian valor y riesgos.",
    tags: ["piloto", "medicion", "adopcion"],
  },
];

export const classThirtyOneAlignmentCards = [
  {
    kicker: "Alineacion",
    title: "Sponsor o area dueña",
    body: "El proyecto necesita un area que realmente quiera usar la salida para que la propuesta no quede flotando en teoria.",
    tags: ["sponsor", "owner", "adopcion"],
  },
  {
    kicker: "Alineacion",
    title: "Usuario del output",
    body: "Conviene nombrar quien leeria el dashboard, quien operaria el score o quien actuaria sobre la recomendacion del caso.",
    tags: ["usuario", "flujo", "decision"],
  },
  {
    kicker: "Alineacion",
    title: "Guardrails y riesgos",
    body: "Tambien importa anticipar donde la propuesta podria fallar, sesgar o romper operacion para mostrar criterio de implementacion.",
    tags: ["guardrails", "riesgo", "control"],
  },
  {
    kicker: "Alineacion",
    title: "Siguiente paso realista",
    body: "El mejor cierre de planteamiento deja una ruta clara para pilotear y no una promesa vaga de transformacion total.",
    tags: ["piloto", "siguiente paso", "realismo"],
  },
];

export const classThirtyOneAntiPatterns = [
  {
    title: "Elegir un problema gigante",
    body: "Un planteamiento demasiado ambicioso suele terminar sin datos defendibles, sin piloto posible y sin una historia clara para evaluar.",
  },
  {
    title: "Forzar una tecnica bonita",
    body: "El proyecto pierde fuerza cuando parte de la herramienta favorita en vez del dolor de negocio y la decision que necesita mejor soporte.",
  },
  {
    title: "No nombrar usuario ni owner",
    body: "Sin dueños claros, la propuesta se vuelve academica y cuesta imaginar como entraria a una rutina real.",
  },
  {
    title: "No pensar en evidencia y limites",
    body: "Un proyecto serio reconoce que datos faltan, donde hay riesgo y que parte todavia es una hipotesis de implementacion.",
  },
];

export const classThirtyOneRules = [
  {
    title: "Empezar por un problema con dolor visible",
    body: "El mejor proyecto integrador no intenta resolver todo; ataca una decision concreta donde el valor sea facil de defender.",
  },
  {
    title: "Elegir datos ya plausibles",
    body: "Conviene apoyarse en fuentes accesibles y comprensibles, aunque imperfectas, antes que en integraciones imaginarias.",
  },
  {
    title: "Mostrar artefacto y piloto",
    body: "La propuesta gana credibilidad cuando deja una salida concreta y una forma realista de validarla en contexto.",
  },
  {
    title: "Reconocer riesgos y guardrails",
    body: "El planteamiento mejora mucho cuando incluye limites, supuestos y riesgos operativos o de gobierno desde el inicio.",
  },
];

export const classThirtyOneRoadmapCards = [
  {
    kicker: "Paso 1",
    title: "Elegir frente del proyecto",
    body: "Growth, operacion, cliente o riesgo son cuatro rutas utiles para aterrizar el curso en una propuesta concreta y defendible.",
    tags: ["frente", "alcance", "eleccion"],
  },
  {
    kicker: "Paso 2",
    title: "Acotar problema, usuario y metrica",
    body: "Se define quien sufre el dolor, quien usaria la salida y con que metrica se justificaria el valor de resolverlo.",
    tags: ["usuario", "metrica", "dolor"],
  },
  {
    kicker: "Paso 3",
    title: "Mapear datos, artefacto y guardrails",
    body: "El estudiante deja claro que datos usaria, que construiria y que limites o riesgos deberia vigilar durante el piloto.",
    tags: ["datos", "artefacto", "guardrails"],
  },
  {
    kicker: "Paso 4",
    title: "Preparar historia del piloto",
    body: "La clase cierra dejando lista la narrativa base para presentar el proyecto final con foco, evidencia y siguiente paso realista.",
    tags: ["piloto", "historia", "presentacion"],
  },
];

export const classThirtyOneTakeaways = [
  "El proyecto integrador empieza por un problema de negocio acotado, no por una tecnica llamativa.",
  "Usuario, metrica, datos plausibles y piloto realista sostienen gran parte de la calidad del planteamiento.",
  "Reconocer limites y guardrails fortalece la propuesta mucho mas que prometer solucion total.",
  "La siguiente clase usa esta base para cerrar el proyecto final con rubrica, narrativa y plan de escalamiento.",
];

export const classThirtyTwoRubricProfiles = [
  {
    id: "business",
    label: "Negocio",
    title: "Que tan claro y defendible es el valor del proyecto",
    body: "La primera pregunta del proyecto final es si el problema realmente importa, para quien importa y por que la solucion propuesta merece atencion de negocio.",
    chip: "Valor y foco",
    scores: [92, 84, 90],
    primaryTitle: "Que deberia mostrar",
    primaryItems: [
      "Dolor concreto y bien delimitado",
      "Metrica de valor clara",
      "Decision o flujo que mejoraria con la propuesta",
    ],
    pills: ["problema", "ROI", "decision"],
    secondaryTitle: "Si queda debil",
    secondaryItems: ["problema vago", "valor ambiguo", "sin usuario claro"],
    noteTitle: "Lectura de rubrica",
    noteBody: "Un proyecto puede usar buena tecnica y aun asi fallar si no deja claro que problema real resuelve y por que vale la pena hacerlo.",
  },
  {
    id: "data",
    label: "Datos",
    title: "Que tan creible es la base de evidencia y sus limites",
    body: "El proyecto final tambien se evalua por calidad de fuentes, supuestos explicitos y honestidad sobre los limites del dataset o la captura disponible.",
    chip: "Evidencia y limites",
    scores: [88, 80, 86],
    primaryTitle: "Que deberia mostrar",
    primaryItems: [
      "Fuentes plausibles y bien descritas",
      "Senales alineadas con la decision",
      "Limites y supuestos explicitos",
    ],
    pills: ["fuentes", "senales", "supuestos"],
    secondaryTitle: "Si queda debil",
    secondaryItems: ["datos imaginarios", "supuestos escondidos", "sin trazabilidad"],
    noteTitle: "Lectura de rubrica",
    noteBody: "La fortaleza del proyecto aumenta cuando la base de datos se presenta con criterio, no cuando se finge perfeccion imposible.",
  },
  {
    id: "solution",
    label: "Solucion",
    title: "Que tan coherente es el artefacto propuesto con la forma del problema",
    body: "Dashboard, score, forecast, recomendador o playbook deben verse como una salida coherente con la decision y no como un ejercicio tecnico desconectado.",
    chip: "Coherencia tecnica",
    scores: [90, 82, 88],
    primaryTitle: "Que deberia mostrar",
    primaryItems: [
      "Artefacto alineado con el problema",
      "Explicacion clara de por que esa salida encaja",
      "Metricas o criterios de evaluacion razonables",
    ],
    pills: ["artefacto", "coherencia", "evaluacion"],
    secondaryTitle: "Si queda debil",
    secondaryItems: ["tecnica por moda", "sin relacion con el flujo", "medicion poco clara"],
    noteTitle: "Lectura de rubrica",
    noteBody: "La tecnica gana puntos cuando parece inevitable dada la forma del problema y no cuando se siente elegida por capricho.",
  },
  {
    id: "adoption",
    label: "Adopcion",
    title: "Que tan implementable, gobernable y escalable luce la propuesta",
    body: "El cierre del proyecto tambien mira usuario final, piloto, guardrails, riesgos y siguiente paso realista para escalar la idea fuera del aula.",
    chip: "Piloto y gobierno",
    scores: [86, 78, 92],
    primaryTitle: "Que deberia mostrar",
    primaryItems: [
      "Usuario y owner claros",
      "Piloto realista con metrica de exito",
      "Guardrails y riesgos identificados",
    ],
    pills: ["owner", "piloto", "guardrails"],
    secondaryTitle: "Si queda debil",
    secondaryItems: ["sin adopcion", "sin piloto", "sin control visible"],
    noteTitle: "Lectura de rubrica",
    noteBody: "El proyecto final se vuelve mucho mas fuerte cuando ya suena a algo que un equipo podria probar en contexto real y no solo admirar en una presentacion.",
  },
];

export const classThirtyTwoPresentationCards = [
  {
    kicker: "Cierre",
    title: "Abrir con el problema y el valor",
    body: "La presentacion final funciona mejor cuando en los primeros minutos deja claro que dolor de negocio ataca y por que vale la pena atenderlo.",
    tags: ["problema", "valor", "apertura"],
  },
  {
    kicker: "Cierre",
    title: "Mostrar datos y limites con honestidad",
    body: "Reconocer que evidencia existe, que falta y donde viven los supuestos vuelve el proyecto mucho mas creible.",
    tags: ["datos", "limites", "credibilidad"],
  },
  {
    kicker: "Cierre",
    title: "Enseñar el artefacto y su uso",
    body: "No basta con nombrar un modelo o un dashboard; conviene mostrar como se veria y que decision ayudaria a tomar en la practica.",
    tags: ["demo", "uso", "decision"],
  },
  {
    kicker: "Cierre",
    title: "Terminar con piloto y siguiente paso",
    body: "El mejor cierre no promete revolucion total: propone un siguiente experimento o despliegue realista con metrica de exito.",
    tags: ["piloto", "siguiente paso", "realismo"],
  },
];

export const classThirtyTwoScaleCards = [
  {
    kicker: "Escala",
    title: "Del aula al piloto",
    body: "El primer salto natural del proyecto es una prueba pequeña pero bien instrumentada donde se pueda medir adopcion y valor inicial.",
    tags: ["piloto", "instrumentacion", "valor"],
  },
  {
    kicker: "Escala",
    title: "Gobierno minimo viable",
    body: "Incluso una prueba pequena necesita owner, supuestos claros, limites y una forma de revisar si la salida empieza a fallar.",
    tags: ["owner", "guardrails", "revision"],
  },
  {
    kicker: "Escala",
    title: "Cambio de habito del equipo",
    body: "El proyecto gana traccion cuando se vuelve parte de una reunion, una cola o una decision repetida y no solo de la entrega final.",
    tags: ["adopcion", "rutina", "flujo"],
  },
  {
    kicker: "Escala",
    title: "Aprendizaje continuo",
    body: "Despues del piloto conviene revisar feedback, supuestos rotos y nuevas preguntas para iterar con mejor foco y menor riesgo.",
    tags: ["feedback", "iteracion", "aprendizaje"],
  },
];

export const classThirtyTwoAntiPatterns = [
  {
    title: "Cerrar con una promesa gigante",
    body: "El proyecto pierde credibilidad cuando promete transformar todo sin dejar claro como se probaria primero en pequeño.",
  },
  {
    title: "Esconder los limites",
    body: "Ocultar huecos de datos, supuestos o riesgos suele debilitar mas la evaluacion que nombrarlos con claridad y criterio.",
  },
  {
    title: "Contar demasiadas cosas a la vez",
    body: "En el cierre final conviene defender bien una sola historia coherente y no intentar meter todo el curso en una sola explicacion caotica.",
  },
  {
    title: "No mostrar uso real",
    body: "Si el proyecto no deja claro quien consumiria la salida y que cambiaria con ella, se siente mas como ensayo que como solucion.",
  },
];

export const classThirtyTwoRules = [
  {
    title: "Defender una historia simple y fuerte",
    body: "Problema, datos, solucion y piloto forman una narrativa suficiente para mostrar dominio del curso sin dispersarse.",
  },
  {
    title: "Ser honesto con limites y supuestos",
    body: "La madurez del proyecto crece cuando reconoce que parte esta probada, que parte es hipotesis y donde vivirian los riesgos.",
  },
  {
    title: "Mostrar como se usaria la salida",
    body: "El artefacto final gana credibilidad cuando ya suena a reunion, flujo o decision real y no solo a concepto tecnico.",
  },
  {
    title: "Cerrar con siguiente paso realista",
    body: "El mejor proyecto deja una ruta pequena y viable para pilotear, medir y aprender, en vez de una promesa grandilocuente.",
  },
];

export const classThirtyTwoRoadmapCards = [
  {
    kicker: "Paso 1",
    title: "Sintetizar la historia del proyecto",
    body: "El cierre empieza por ordenar problema, valor, datos y solucion en una narrativa breve y defendible.",
    tags: ["historia", "sintesis", "valor"],
  },
  {
    kicker: "Paso 2",
    title: "Mostrar evidencia y artefacto",
    body: "Conviene ensenar la logica de datos y una vista concreta del dashboard, score, forecast o recomendador propuesto.",
    tags: ["evidencia", "artefacto", "demo"],
  },
  {
    kicker: "Paso 3",
    title: "Defender piloto y guardrails",
    body: "El proyecto final mejora mucho cuando deja claro como probarlo, con que limites y que riesgos deberian vigilarse.",
    tags: ["piloto", "guardrails", "riesgo"],
  },
  {
    kicker: "Paso 4",
    title: "Cerrar con plan de continuidad",
    body: "La presentacion termina mejor cuando propone como seguir aprendiendo y escalando despues del curso sin perder foco.",
    tags: ["continuidad", "iteracion", "escala"],
  },
];

export const classThirtyTwoTakeaways = [
  "Un buen proyecto final resume todo el curso en una historia simple: problema, datos, solucion, piloto y guardrails.",
  "La credibilidad del cierre crece cuando la propuesta suena implementable y reconoce sus limites con honestidad.",
  "El siguiente paso natural despues del diplomado es pilotear en pequeño, medir bien y aprender rapido.",
  "El curso cierra dejando una base clara para llevar IA aplicada a decisiones reales de negocio.",
];