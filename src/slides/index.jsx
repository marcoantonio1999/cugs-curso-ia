import IntroSlide from "./IntroSlide";
import AudienceSlide from "./AudienceSlide";
import OutcomesSlide from "./OutcomesSlide";
import ModulesSlide from "./ModulesSlide";
import ValueChainSlide from "./ValueChainSlide";
import CasesSlide from "./CasesSlide";
import RoadmapSlide from "./RoadmapSlide";
import GrowthSlide from "./GrowthSlide";
import CourseSyllabusSlide from "./CourseSyllabusSlide";
import SessionHeroSlide from "./SessionHeroSlide";
import CourseCardGridSlide from "./CourseCardGridSlide";
import SplitChecklistSlide from "./SplitChecklistSlide";
import TakeawaysSlide from "./TakeawaysSlide";
import MaturityMapSlide from "./MaturityMapSlide";
import ReadinessWorkbenchSlide from "./ReadinessWorkbenchSlide";
import AutomationModesSlide from "./AutomationModesSlide";
import AutomationCaseStudioSlide from "./AutomationCaseStudioSlide";
import ProcessDesignWorkbenchSlide from "./ProcessDesignWorkbenchSlide";
import DecisionBoundarySlide from "./DecisionBoundarySlide";
import ConsumerSignalMapSlide from "./ConsumerSignalMapSlide";
import PersonalizationJourneySlide from "./PersonalizationJourneySlide";
import GovernanceControlTowerSlide from "./GovernanceControlTowerSlide";
import BiasRiskStudioSlide from "./BiasRiskStudioSlide";
import DataSourceWorkbenchSlide from "./DataSourceWorkbenchSlide";
import CaptureDesignWorkbenchSlide from "./CaptureDesignWorkbenchSlide";
import DataCleaningStudioSlide from "./DataCleaningStudioSlide";
import DataQualitySignalSlide from "./DataQualitySignalSlide";
import DecisionVisualizationStudioSlide from "./DecisionVisualizationStudioSlide";
import ExploratoryAnalysisWorkbenchSlide from "./ExploratoryAnalysisWorkbenchSlide";
import TabbedSignalMapSlide from "./TabbedSignalMapSlide";
import TabbedCaseStudioSlide from "./TabbedCaseStudioSlide";
import TabbedProcessWorkbenchSlide from "./TabbedProcessWorkbenchSlide";
import {
  classFiveAntiPatterns,
  classFiveRoadmapCards,
  classFiveRules,
  classFiveSignalCards,
  classFiveTakeaways,
  classEightAntiPatterns,
  classEightEconomicsCards,
  classEightLayerCards,
  classEightRoadmapCards,
  classEightRules,
  classEightTakeaways,
  classElevenAntiPatterns,
  classElevenBlueprintCards,
  classElevenLayerCards,
  classElevenRules,
  classElevenSourceCards,
  classElevenTakeaways,
  classFifteenAntiPatterns,
  classFifteenChoiceCards,
  classFifteenPrincipleCards,
  classFifteenRules,
  classFifteenTakeaways,
  classFifteenWorkflowCards,
  classFourteenAntiPatterns,
  classFourteenImpactCards,
  classFourteenMonitoringCards,
  classFourteenRoadmapCards,
  classFourteenRules,
  classFourteenTakeaways,
  classNineAntiPatterns,
  classNinePrincipleCards,
  classNinePrivacyCards,
  classNineRoadmapCards,
  classNineRules,
  classNineTakeaways,
  classSixteenAntiPatterns,
  classSixteenFrameworkCards,
  classSixteenHypothesisCards,
  classSixteenPatternCards,
  classSixteenRules,
  classSixteenTakeaways,
  classThirteenAntiPatterns,
  classThirteenConsistencyCards,
  classThirteenIssueCards,
  classThirteenRoadmapCards,
  classThirteenRules,
  classThirteenTakeaways,
  classSixAntiPatterns,
  classSixBlueprintCards,
  classSixDesignCheckCards,
  classSixRules,
  classSixTakeaways,
  classTenAntiPatterns,
  classTenBiasSourceCards,
  classTenReputationCards,
  classTenResponseCards,
  classTenRules,
  classTenTakeaways,
  classFourAntiPatterns,
  classFourRoadmapCards,
  classFourSelectionRules,
  classFourSignalCards,
  classFourTakeaways,
  classSevenAntiPatterns,
  classSevenFrameworkCards,
  classSevenJourneyCards,
  classSevenRules,
  classSevenSegmentationCards,
  classSevenTakeaways,
  classThreeCompanyCases,
  classThreeMarketingCards,
  classThreeSalesCards,
  classThreeServiceCards,
  classThreeTakeaways,
  classThreeWorkshopCards,
  classTwelveAntiPatterns,
  classTwelveCollectionCards,
  classTwelveQualityCards,
  classTwelveRoadmapCards,
  classTwelveRules,
  classTwelveTakeaways,
  classTwoFoundationCards,
  classTwoMyths,
  classTwoOpportunityCards,
  classTwoRealities,
  classTwoRiskCards,
  classTwoTakeaways,
  classTwoTypeCards,
} from "../courseData";
import {
  classSeventeenAntiPatterns,
  classSeventeenDecisionCards,
  classSeventeenKpiProfiles,
  classSeventeenMetricCards,
  classSeventeenRoadmapCards,
  classSeventeenRules,
  classSeventeenTakeaways,
  classEighteenAntiPatterns,
  classEighteenEvidenceCards,
  classEighteenNarrativeCards,
  classEighteenRules,
  classEighteenStoryProfiles,
  classEighteenTakeaways,
  classEighteenWorkflowCards,
  classNineteenAntiPatterns,
  classNineteenRetailCases,
  classNineteenRetailLevers,
  classNineteenRetailSignals,
  classNineteenRoadmapCards,
  classNineteenRules,
  classNineteenTakeaways,
  classTwentyAntiPatterns,
  classTwentyBankingCases,
  classTwentyBankingConstraints,
  classTwentyBankingSignals,
  classTwentyRoadmapCards,
  classTwentyRules,
  classTwentyTakeaways,
  classTwentyOneAntiPatterns,
  classTwentyOneCommerceCases,
  classTwentyOneCommerceLayers,
  classTwentyOneCommerceSignals,
  classTwentyOneRoadmapCards,
  classTwentyOneRules,
  classTwentyOneTakeaways,
  classTwentyTwoAntiPatterns,
  classTwentyTwoLifecycleCards,
  classTwentyTwoMetricCards,
  classTwentyTwoModelProfiles,
  classTwentyTwoRoadmapCards,
  classTwentyTwoRules,
  classTwentyTwoTakeaways,
  classTwentyThreeAntiPatterns,
  classTwentyThreeDemandProfiles,
  classTwentyThreeDriverCards,
  classTwentyThreeHorizonCards,
  classTwentyThreeRoadmapCards,
  classTwentyThreeRules,
  classTwentyThreeTakeaways,
  classTwentyFourAntiPatterns,
  classTwentyFourGovernanceCards,
  classTwentyFourRoadmapCards,
  classTwentyFourRules,
  classTwentyFourScoringProfiles,
  classTwentyFourTakeaways,
  classTwentyFourThresholdCards,
} from "../courseData";
import {
  classTwentyFiveAntiPatterns,
  classTwentyFiveDesignCards,
  classTwentyFiveRecommenderProfiles,
  classTwentyFiveRoadmapCards,
  classTwentyFiveRules,
  classTwentyFiveSignalCards,
  classTwentyFiveTakeaways,
  classTwentySixAntiPatterns,
  classTwentySixDriverCards,
  classTwentySixInterventionCards,
  classTwentySixPropensityProfiles,
  classTwentySixRoadmapCards,
  classTwentySixRules,
  classTwentySixTakeaways,
  classTwentySevenAntiPatterns,
  classTwentySevenDecompositionCards,
  classTwentySevenRoadmapCards,
  classTwentySevenRules,
  classTwentySevenSeriesProfiles,
  classTwentySevenTakeaways,
  classTwentySevenValidationCards,
  classTwentyEightAntiPatterns,
  classTwentyEightChoiceCards,
  classTwentyEightModelProfiles,
  classTwentyEightRoadmapCards,
  classTwentyEightRules,
  classTwentyEightTakeaways,
  classTwentyEightWorkflowCards,
  classTwentyNineAntiPatterns,
  classTwentyNineCampaignCases,
  classTwentyNineLeverCards,
  classTwentyNineRoadmapCards,
  classTwentyNineRules,
  classTwentyNineSignalCards,
  classTwentyNineTakeaways,
  classThirtyAntiPatterns,
  classThirtyEvidenceCards,
  classThirtyExperimentProfiles,
  classThirtyPersonalizationCards,
  classThirtyRoadmapCards,
  classThirtyRules,
  classThirtyTakeaways,
  classThirtyOneAlignmentCards,
  classThirtyOneAntiPatterns,
  classThirtyOneDeliverableCards,
  classThirtyOneProjectProfiles,
  classThirtyOneRoadmapCards,
  classThirtyOneRules,
  classThirtyOneTakeaways,
  classThirtyTwoAntiPatterns,
  classThirtyTwoPresentationCards,
  classThirtyTwoRoadmapCards,
  classThirtyTwoRubricProfiles,
  classThirtyTwoRules,
  classThirtyTwoScaleCards,
  classThirtyTwoTakeaways,
} from "../courseData";

const ClassOneSyllabus = () => (
  <CourseSyllabusSlide
    activeClass={1}
    sessionTitle="Clase 1 · Introducción práctica a la IA"
    sessionSummary="Antes de entrar a herramientas, el alumno necesita ver la ruta completa: donde empieza el curso, como avanzara y que resultado final se espera."
  />
);

const ClassTwoSyllabus = () => (
  <CourseSyllabusSlide
    activeClass={2}
    sessionTitle="Clase 2 · Que es IA y que no es"
    sessionSummary="Esta clase baja el ruido: define que cuenta como IA util, donde empieza el valor real y que limites deben entenderse antes de implementar."
  />
);

const ClassThreeSyllabus = () => (
  <CourseSyllabusSlide
    activeClass={3}
    sessionTitle="Clase 3 · Casos reales por area"
    sessionSummary="La teoria se vuelve util cuando se traduce a marketing, ventas y servicio. Esta clase conecta el concepto con decisiones reales de negocio."
  />
);

const ClassFourSyllabus = () => (
  <CourseSyllabusSlide
    activeClass={4}
    sessionTitle="Clase 4 · Mapa de madurez de IA"
    sessionSummary="Esta clase ordena donde conviene entrar primero. El foco ya no es entender la IA, sino leer que tan lista esta una empresa para capturar valor sin quemar energia en el lugar equivocado."
  />
);

const ClassFiveSyllabus = () => (
  <CourseSyllabusSlide
    activeClass={5}
    sessionTitle="Clase 5 · Automatizacion empresarial"
    sessionSummary="Esta clase baja el criterio de madurez a un terreno concreto: bots, RPA, asistentes y agentes. La pregunta central es que tipo de automatizacion encaja mejor para cada tarea."
  />
);

const ClassSixSyllabus = () => (
  <CourseSyllabusSlide
    activeClass={6}
    sessionTitle="Clase 6 · Diseno de procesos automatizables"
    sessionSummary="Despues de elegir un frente para automatizar, toca disenar el proceso correctamente: separar regla, excepcion, juicio humano y control."
  />
);

const ClassSevenSyllabus = () => (
  <CourseSyllabusSlide
    activeClass={7}
    sessionTitle="Clase 7 · Analisis del consumidor con IA"
    sessionSummary="Esta clase convierte datos dispersos en lectura accionable del consumidor: senales, segmentos, journey y decisiones que se pueden activar con criterio."
  />
);

const ClassEightSyllabus = () => (
  <CourseSyllabusSlide
    activeClass={8}
    sessionTitle="Clase 8 · Fidelizacion y personalizacion"
    sessionSummary="Despues de entender al consumidor, esta clase se enfoca en intervenir mejor: siguiente mejor accion, timing, canal y esfuerzo de retencion segun valor y etapa."
  />
);

const ClassNineSyllabus = () => (
  <CourseSyllabusSlide
    activeClass={9}
    sessionTitle="Clase 9 · Etica, privacidad y gobernanza"
    sessionSummary="La Fase 2 arranca ordenando el uso responsable de IA: que se puede hacer, con que datos, con que limites y bajo que forma de control."
  />
);

const ClassTenSyllabus = () => (
  <CourseSyllabusSlide
    activeClass={10}
    sessionTitle="Clase 10 · Sesgos y riesgo reputacional"
    sessionSummary="Esta clase muestra donde nacen los sesgos, como se vuelven dano reputacional y que controles sirven para detectar diferencias antes de que escalen."
  />
);

const ClassElevenSyllabus = () => (
  <CourseSyllabusSlide
    activeClass={11}
    sessionTitle="Clase 11 · Datos de negocio y fuentes"
    sessionSummary="Despues de hablar de riesgo y control, la clase entra al sustrato operativo: que fuentes tiene una empresa, cual sirve para que decision y como leerlas con criterio."
  />
);

const ClassTwelveSyllabus = () => (
  <CourseSyllabusSlide
    activeClass={12}
    sessionTitle="Clase 12 · Recoleccion de datos"
    sessionSummary="La clase convierte la conversacion de fuentes en diseno concreto de captura: eventos, campos, identidad, consentimiento y QA."
  />
);

const ClassThirteenSyllabus = () => (
  <CourseSyllabusSlide
    activeClass={13}
    sessionTitle="Clase 13 · Limpieza y consistencia"
    sessionSummary="La clase transforma captura cruda en dato util: como corregir ruido, duplicados, definiciones rotas y entidades partidas sin perder trazabilidad."
  />
);

const ClassFourteenSyllabus = () => (
  <CourseSyllabusSlide
    activeClass={14}
    sessionTitle="Clase 14 · Calidad de datos"
    sessionSummary="Despues de limpiar, la clase instala una disciplina de calidad: que dimension mirar, como monitorearla y como conectar salud de datos con confianza para decidir."
  />
);

const ClassFifteenSyllabus = () => (
  <CourseSyllabusSlide
    activeClass={15}
    sessionTitle="Clase 15 · Visualizacion para decision"
    sessionSummary="La clase conecta fuentes y calidad con una capa mas ejecutiva: como mostrar informacion para priorizar, investigar y actuar con menos ruido cognitivo."
  />
);

const ClassSixteenSyllabus = () => (
  <CourseSyllabusSlide
    activeClass={16}
    sessionTitle="Clase 16 · Analisis exploratorio"
    sessionSummary="El cierre de esta fase muestra como leer tendencias, dispersion, segmentos y outliers para convertir datos en hipotesis defendibles."
  />
);

const ClassTwoHero = () => (
  <SessionHeroSlide
    badge="Clase 2 · Fundamentos y criterio"
    title="Que es IA aplicada y donde empieza el valor real."
    summary="La meta es salir de la narrativa de moda y entrar en una lectura mas dura: tipos de IA, condiciones minimas y casos donde si conviene usarla."
    bullets={[
      {
        title: "Separar IA de hype",
        body: "Primero se aclara que problema resuelve y que tipo de salida produce.",
      },
      {
        title: "Entender familias utiles",
        body: "Clasificar, predecir, recomendar y generar sirven para cosas distintas.",
      },
      {
        title: "Evaluar con criterio de negocio",
        body: "Si no mejora una decision, una prioridad o un proceso, no es el momento.",
      },
      {
        title: "Preparar la clase 3",
        body: "El marco de hoy permite leer mejor los casos reales del proximo encuentro.",
      },
    ]}
    chips={["criterio", "tipos de IA", "limites", "decision"]}
    spotlight={{
      label: "Pregunta guia",
      value: "Que decision mejora?",
      body: "Ese filtro ordena casi todo: si una idea de IA no mejora una decision concreta, aun no esta madura.",
      points: ["Que datos ya existen?", "Que salida se espera?", "Quien va a usarla?"],
    }}
    visual={{
      theme: "insight",
      eyebrow: "Mapa minimo",
      headline: "Problema · datos · salida · uso",
      body: "Cuando esas cuatro piezas aparecen juntas, la IA deja de sonar abstracta y empieza a verse ejecutable.",
      nodes: [
        { label: "Problema", tone: "cool" },
        { label: "Datos" },
        { label: "Salida" },
        { label: "Uso real", tone: "warm" },
      ],
    }}
  />
);

const ClassTwoFoundations = () => (
  <CourseCardGridSlide
    intro="Cuatro ideas base para explicar IA sin caer en magia ni simplificaciones vacias."
    items={classTwoFoundationCards}
    columns={4}
    showcase={{
      theme: "insight",
      eyebrow: "Radar de la clase",
      title: "El alumno entiende mejor cuando puede ver la arquitectura completa.",
      body: "Estas piezas dejan de ser teoria cuando conectan problema, tipo de modelo, salida esperada y dueño de la decision.",
      points: ["problema nombrable", "datos suficientes", "salida util"],
      coreLabel: "Filtro",
      coreValue: "Criterio antes que hype",
      stats: [
        { value: "4", label: "bloques base" },
        { value: "1", label: "decision concreta" },
        { value: "0", label: "magia necesaria" },
      ],
    }}
  />
);

const ClassTwoMythSlide = () => (
  <SplitChecklistSlide
    intro="Cuando la clase entiende esta diferencia, la conversacion cambia de tecnologia abstracta a capacidad operativa concreta."
    leftTitle="Lo que no es"
    leftItems={classTwoMyths}
    rightTitle="Lo que si es"
    rightItems={classTwoRealities}
    note="La IA deja de verse impresionante cuando se la obliga a responder una pregunta sencilla: que decision o tarea mejora mejor que antes."
  />
);

const ClassTwoTypes = () => (
  <CourseCardGridSlide
    intro="Estas son las familias que mas aparecen en negocio. No compiten entre si: resuelven capas distintas del trabajo."
    items={classTwoTypeCards}
    columns={4}
  />
);

const ClassTwoOpportunities = () => (
  <CourseCardGridSlide
    intro="Conviene empezar donde ya existen volumen, repeticion y una decision comercial que hoy se toma con demasiada intuicion."
    items={classTwoOpportunityCards}
    columns={4}
  />
);

const ClassTwoRisks = () => (
  <CourseCardGridSlide
    intro="Estas son las cuatro razones mas comunes por las que un proyecto con IA parece prometedor en presentacion pero no genera retorno en la practica."
    items={classTwoRiskCards}
    columns={4}
  />
);

const ClassTwoClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Marco que debe quedar instalado",
      body: "La IA es una capacidad para leer patrones y mejorar decisiones. No es una identidad de marca ni un sustituto de claridad estrategica.",
      tags: ["problema correcto", "datos", "decision", "ownership"],
    }}
    takeaways={classTwoTakeaways}
    nextClass={{
      title: "Clase 3 · Casos reales por area",
      body: "La siguiente sesion aterriza el marco en ejemplos concretos de marketing, ventas y servicio al cliente.",
    }}
    question="En tu trabajo, cual es la primera decision que hoy se toma con intuicion y deberia pasar a tomarse con mejor senal?"
    closingPanel={{
      theme: "insight",
      label: "Puente de avance",
      title: "Del criterio a los casos reales.",
      body: "El cierre de esta clase deja un lente simple para entrar a la siguiente: buscar senal, decision y uso en contextos que el alumno ya reconoce.",
      steps: ["marketing", "ventas", "servicio", "priorizar"],
      metrics: [
        { value: "3", label: "areas para observar" },
        { value: "1", label: "filtro de decision" },
        { value: "100%", label: "enfoque practico" },
      ],
    }}
  />
);

const ClassThreeHero = () => (
  <SessionHeroSlide
    badge="Clase 3 · Casos por area"
    title="Como se ve la IA cuando entra en marketing, ventas y servicio."
    summary="La clase no busca impresionar con nombres de herramientas. Busca mostrar donde se genera impacto y como detectar una oportunidad real dentro del contexto del alumno."
    bullets={[
      {
        title: "Mirar procesos reales",
        body: "Se parte de flujos concretos y no de demos aisladas.",
      },
      {
        title: "Detectar senales y decisiones",
        body: "Cada caso vale por la decision que mejora y por la data que lo hace posible.",
      },
      {
        title: "Comparar areas de negocio",
        body: "Marketing, ventas y servicio piden enfoques distintos aunque compartan tecnologia.",
      },
      {
        title: "Salir con oportunidades propias",
        body: "El cierre de la clase obliga a mapear un caso posible en el contexto del alumno.",
      },
    ]}
    chips={["casos reales", "marketing", "ventas", "servicio"]}
    spotlight={{
      label: "Filtro de lectura",
      value: "Senal + decision + impacto",
      body: "Ese trio sirve para evaluar si un caso es serio o solo una presentacion bonita sin adopcion operativa.",
      points: ["De donde sale la senal?", "Que accion cambia?", "Como se mide el valor?"],
    }}
    visual={{
      theme: "commerce",
      eyebrow: "Mapa de areas",
      headline: "La IA se vuelve creible cuando toca el flujo real.",
      body: "Marketing, ventas y servicio comparten tecnologia, pero cambian por completo en la senal que usan y la accion que disparan.",
      nodes: [
        { label: "Marketing", tone: "warm" },
        { label: "Ventas" },
        { label: "Servicio" },
        { label: "Impacto" , tone: "cool"},
      ],
    }}
  />
);

const ClassThreeMarketing = () => (
  <CourseCardGridSlide
    intro="En marketing el valor aparece cuando la IA mejora segmentacion, velocidad de ejecucion y asignacion de presupuesto sin perder criterio de marca."
    items={classThreeMarketingCards}
    columns={4}
    showcase={{
      theme: "commerce",
      eyebrow: "Donde aparece primero",
      title: "La lectura comercial mejora cuando la senal entra al presupuesto y al mensaje.",
      body: "La idea no es decorar dashboards; es encontrar palancas que cambien alcance, conversion o velocidad de ejecucion.",
      points: ["segmentacion", "presupuesto", "mensaje"],
      coreLabel: "Ruta",
      coreValue: "Señal -> acción",
      stats: [
        { value: "3", label: "palancas visibles" },
        { value: "1", label: "mensaje correcto" },
        { value: "+", label: "velocidad" },
      ],
    }}
  />
);

const ClassThreeSales = () => (
  <CourseCardGridSlide
    intro="En ventas la IA suele entrar por priorizacion, forecast y retencion: menos intuicion, mas foco sobre donde vale la pena actuar primero."
    items={classThreeSalesCards}
    columns={4}
  />
);

const ClassThreeService = () => (
  <CourseCardGridSlide
    intro="En servicio el retorno llega cuando la empresa reduce tiempos, ordena volumen y recupera contexto para el equipo de atencion."
    items={classThreeServiceCards}
    columns={4}
  />
);

const ClassThreeCases = () => (
  <CourseCardGridSlide
    intro="Los casos mas utiles para clase son los que los alumnos pueden reconocer como patrones repetibles, no los que se sienten lejanos o demasiado tecnicos."
    items={classThreeCompanyCases}
    columns={4}
  />
);

const ClassThreeWorkshop = () => (
  <CourseCardGridSlide
    intro="Este mini framework sirve para transformar inspiracion en una oportunidad concreta que se pueda discutir, priorizar y eventualmente ejecutar."
    items={classThreeWorkshopCards}
    columns={4}
  />
);

const ClassThreeClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Lo que debe quedar claro despues de ver casos",
      body: "Los mejores casos de IA no nacen de buscar herramientas nuevas. Nacen de detectar friccion repetitiva, datos disponibles y decisiones perfectibles.",
      tags: ["caso", "senal", "decision", "impacto"],
    }}
    takeaways={classThreeTakeaways}
    nextClass={{
      title: "Clase 4 · Mapa de madurez de IA",
      body: "La siguiente iteracion deberia priorizar donde entrar primero dentro de una empresa segun madurez, datos y retorno esperado.",
    }}
    question="Si tuvieras que elegir solo un flujo para empezar con IA en tu contexto, cual seria y por que ese antes que otro?"
    closingPanel={{
      theme: "commerce",
      label: "Cierre de la clase",
      title: "Del caso inspirador al caso priorizado.",
      body: "La siguiente clase toma esa intuicion y la endurece con lectura de madurez para elegir mejor donde entrar primero.",
      steps: ["señal", "decision", "impacto", "madurez"],
      metrics: [
        { value: "3", label: "areas comparadas" },
        { value: "1", label: "caso defendible" },
        { value: "0", label: "demos vacias" },
      ],
    }}
  />
);

const ClassFourHero = () => (
  <SessionHeroSlide
    badge="Clase 4 · Priorizacion y madurez"
    title="No todo caso de IA conviene ahora, aunque suene atractivo."
    summary="La madurez permite decidir donde empezar primero. Esta clase obliga a leer senal, proceso, adopcion y control antes de abrir mas frentes de los que una empresa puede sostener."
    bullets={[
      {
        title: "Leer madurez antes de elegir caso",
        body: "La pregunta correcta es donde existe mejor condicion de aprendizaje y retorno.",
      },
      {
        title: "Separar exploracion de capacidad real",
        body: "Un piloto aislado no significa que la empresa ya este lista para escalar.",
      },
      {
        title: "Elegir un primer frente defendible",
        body: "Se prioriza donde hay decision clara, datos minimos y adopcion probable.",
      },
      {
        title: "Preparar la clase 5",
        body: "La siguiente sesion baja esta lectura a automatizacion empresarial concreta.",
      },
    ]}
    chips={["madurez", "priorizacion", "readiness", "portafolio"]}
    spotlight={{
      label: "Filtro de la clase",
      value: "No se empieza donde mas brilla",
      body: "Se empieza donde la empresa puede aprender rapido, medir algo util y sostener la salida dentro del trabajo real.",
      points: ["senal suficiente", "decision clara", "equipo que use la salida"],
    }}
    visual={{
      theme: "readiness",
      eyebrow: "Mapa de lectura",
      headline: "Señal · proceso · adopción · control",
      body: "La madurez se vuelve visible cuando esas cuatro capas se pueden leer juntas y no como entusiasmo aislado.",
      nodes: [
        { label: "Señal", tone: "cool" },
        { label: "Proceso" },
        { label: "Adopción" },
        { label: "Control", tone: "warm" },
      ],
    }}
  />
);

const ClassFourMaturity = () => <MaturityMapSlide />;

const ClassFourReadiness = () => <ReadinessWorkbenchSlide />;

const ClassFourSignals = () => (
  <CourseCardGridSlide
    intro="Estas cuatro senales ayudan a distinguir un caso listo para empezar de uno que todavia necesita orden previo."
    items={classFourSignalCards}
    columns={4}
    showcase={{
      theme: "readiness",
      eyebrow: "Lectura ejecutiva",
      title: "Una buena prioridad se reconoce antes de abrir el piloto.",
      body: "Cuando la señal es clara y el proceso ya existe, la empresa puede aprender sin dispersarse ni abrir frentes imposibles de sostener.",
      points: ["datos minimos", "flujo existente", "equipo disponible"],
      coreLabel: "Pregunta",
      coreValue: "¿Listo para aprender?",
      stats: [
        { value: "90", label: "dias para probar" },
        { value: "1", label: "frente inicial" },
        { value: "4", label: "senales criticas" },
      ],
    }}
  />
);

const ClassFourPriorityRules = () => (
  <SplitChecklistSlide
    intro="La priorizacion casi siempre falla por entusiasmo, no por falta de ideas. Esta comparacion ayuda a endurecer el criterio antes de abrir un caso nuevo."
    leftTitle="Errores al priorizar"
    leftItems={classFourAntiPatterns}
    rightTitle="Criterios para elegir bien"
    rightItems={classFourSelectionRules}
    note="Si el caso no entra en flujo real y no puede medirse con una variable de negocio, todavia no compite por prioridad."
  />
);

const ClassFourRoadmap = () => (
  <CourseCardGridSlide
    intro="Una buena Clase 4 no solo ordena ideas: deja una secuencia clara para abrir el primer caso en 90 dias con disciplina y sin sobrecargar a la empresa."
    items={classFourRoadmapCards}
    columns={4}
  />
);

const ClassFourClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Lo que deberia quedar instalado despues de esta clase",
      body: "La madurez no es un discurso de transformacion. Es una lectura practica sobre donde una empresa puede capturar valor sin desordenarse ni sobredimensionar lo que hoy puede sostener.",
      tags: ["madurez", "senal", "caso inicial", "disciplina"],
    }}
    takeaways={classFourTakeaways}
    nextClass={{
      title: "Clase 5 · Automatizacion empresarial",
      body: "La siguiente sesion baja el criterio de madurez a bots, RPA, asistentes y procesos repetitivos donde si conviene automatizar.",
    }}
    question="Si hoy tuvieras que abrir un solo frente de IA en tu contexto, cual tiene mejor combinacion de senal, proceso y adopcion probable?"
    closingPanel={{
      theme: "readiness",
      label: "Puente a automatizacion",
      title: "Priorizar bien antes de automatizar.",
      body: "La siguiente clase aterriza esta lectura en tareas repetitivas concretas, pero con el mismo filtro: elegir el frente correcto antes de ejecutar.",
      steps: ["leer madurez", "elegir frente", "bajar a tarea", "automatizar"],
      metrics: [
        { value: "1", label: "caso para empezar" },
        { value: "4", label: "capas de lectura" },
        { value: "90", label: "dias de foco" },
      ],
    }}
  />
);

const ClassFiveHero = () => (
  <SessionHeroSlide
    badge="Clase 5 · Automatizacion empresarial"
    title="No toda tarea repetitiva pide el mismo tipo de automatizacion."
    summary="La clase traduce la discusion de IA a operaciones concretas: cuando conviene usar bots, RPA, asistentes o agentes, y como evitar automatizar en el lugar incorrecto."
    bullets={[
      {
        title: "Elegir el tipo correcto",
        body: "La automatizacion depende del nivel de estructura, juicio requerido y riesgo del proceso.",
      },
      {
        title: "Bajar la idea a un caso usable",
        body: "Se trabaja sobre tickets, leads, backoffice y copilot interno como casos defendibles.",
      },
      {
        title: "Definir fallback y control",
        body: "Automatizar bien significa saber donde seguir solo y donde salir a humano.",
      },
      {
        title: "Preparar la clase 6",
        body: "La siguiente sesion toma estos casos y ensena a disenar el flujo automatizable correctamente.",
      },
    ]}
    chips={["bots", "RPA", "asistentes", "agentes"]}
    spotlight={{
      label: "Filtro de la clase",
      value: "Tarea correcta + control correcto",
      body: "La automatizacion no se elige por lo vistoso de la tecnologia, sino por la naturaleza del flujo y el costo del error.",
      points: ["regla o juicio", "volumen real", "fallback humano"],
    }}
    visual={{
      theme: "automation",
      eyebrow: "Ruta operativa",
      headline: "Regla · volumen · fallback · riesgo",
      body: "La automatización gana cuando el flujo ya permite distinguir qué parte puede correr sola y cuál debe escalar a humano.",
      nodes: [
        { label: "Regla", tone: "cool" },
        { label: "Volumen" },
        { label: "Fallback" },
        { label: "Riesgo", tone: "warm" },
      ],
    }}
  />
);

const ClassFiveModes = () => <AutomationModesSlide />;

const ClassFiveStudio = () => <AutomationCaseStudioSlide />;

const ClassFiveSignals = () => (
  <CourseCardGridSlide
    intro="Estas cuatro senales sirven para reconocer cuando una tarea ya esta suficientemente madura para ser automatizada sin autoengano."
    items={classFiveSignalCards}
    columns={4}
    showcase={{
      theme: "automation",
      eyebrow: "Checklist de fit",
      title: "La automatizacion luce mejor cuando se lee como una decision de proceso.",
      body: "Antes de hablar de bots o agentes, conviene verificar si la tarea tiene estructura suficiente, observabilidad y costo del error entendible.",
      points: ["estructura", "volumen", "observabilidad"],
      coreLabel: "Fit",
      coreValue: "Automatizar con criterio",
      stats: [
        { value: "4", label: "señales de fit" },
        { value: "1", label: "dueño del flujo" },
        { value: "24/7", label: "presión operativa" },
      ],
    }}
  />
);

const ClassFiveRulesSlide = () => (
  <SplitChecklistSlide
    intro="La automatizacion mala suele nacer de entusiasmo y poca lectura de proceso. La buena automatizacion nace de limites, observabilidad y foco."
    leftTitle="Automatizar mal"
    leftItems={classFiveAntiPatterns}
    rightTitle="Automatizar bien"
    rightItems={classFiveRules}
    note="Toda automatizacion seria debe responder tres preguntas: que tramo se automatiza, que tramo se supervisa y como se mide el impacto."
  />
);

const ClassFiveRoadmap = () => (
  <CourseCardGridSlide
    intro="La ruta recomendada evita dos errores comunes: automatizar demasiado pronto o quedarse eternamente en un piloto lindo pero irrelevante."
    items={classFiveRoadmapCards}
    columns={4}
  />
);

const ClassFiveClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Lo que debe quedar instalado despues de hablar de automatizacion",
      body: "Automatizar no es un objetivo estetico. Es una forma de quitar friccion repetitiva con el nivel correcto de control y con una salida que el negocio pueda sostener.",
      tags: ["fit de tarea", "fallback", "control", "impacto"],
    }}
    takeaways={classFiveTakeaways}
    nextClass={{
      title: "Clase 6 · Diseno de procesos automatizables",
      body: "La siguiente sesion muestra como transformar una idea de automatizacion en un flujo concreto, legible y gobernable.",
    }}
    question="Que tarea repetitiva de tu contexto hoy parece automatizable, pero todavia necesita que aclares donde termina la regla y donde empieza el juicio humano?"
    closingPanel={{
      theme: "automation",
      label: "Siguiente salto",
      title: "De la tarea correcta al flujo bien diseñado.",
      body: "La clase siguiente toma la intuicion operativa y la convierte en arquitectura: trigger, handoff, excepcion y control visibles.",
      steps: ["fit de tarea", "control", "handoff", "blueprint"],
      metrics: [
        { value: "1", label: "flujo a diseñar" },
        { value: "4", label: "puntos de control" },
        { value: "0", label: "automatizacion ciega" },
      ],
    }}
  />
);

const ClassSixHero = () => (
  <SessionHeroSlide
    badge="Clase 6 · Diseno de procesos"
    title="Un proceso automatizable se diseña por capas, no por intuicion."
    summary="La clase obliga a pasar de 'queremos automatizar' a un mapa mas disciplinado: trigger, input, decision, excepcion, handoff y control."
    bullets={[
      {
        title: "Mirar el flujo real",
        body: "Se parte del proceso que hoy existe, no del proceso ideal que nadie sigue.",
      },
      {
        title: "Separar regla, excepcion y juicio",
        body: "Eso define que se automatiza, que se asiste y que sigue en manos humanas.",
      },
      {
        title: "Disenar handoffs claros",
        body: "Todo proceso necesita puntos de control y responsables visibles para no romperse en silencio.",
      },
      {
        title: "Dejar una plantilla repetible",
        body: "La salida de la clase es un blueprint que el alumno puede usar sobre su propio contexto.",
      },
    ]}
    chips={["flujo", "handoffs", "guardrails", "observabilidad"]}
    spotlight={{
      label: "Pregunta de diseno",
      value: "Que parte si, que parte no",
      body: "Esa frontera vale mas que cualquier herramienta. Cuando se define bien, el proceso se vuelve automatizable con menos riesgo.",
      points: ["trigger claro", "reglas nombrables", "excepcion visible"],
    }}
  />
);

const ClassSixWorkbench = () => <ProcessDesignWorkbenchSlide />;

const ClassSixBoundary = () => <DecisionBoundarySlide />;

const ClassSixChecks = () => (
  <CourseCardGridSlide
    intro="Antes de automatizar un proceso, conviene pasar este checklist. Si faltan varias piezas, el mejor trabajo todavia es de diseno y no de tecnologia."
    items={classSixDesignCheckCards}
    columns={3}
  />
);

const ClassSixRulesSlide = () => (
  <SplitChecklistSlide
    intro="Estas comparaciones ayudan a mostrar por que muchos proyectos fallan en la arquitectura del proceso y no en la herramienta elegida."
    leftTitle="Errores de diseño"
    leftItems={classSixAntiPatterns}
    rightTitle="Reglas para diseñar bien"
    rightItems={classSixRules}
    note="Un proceso bien diseñado reduce ambiguedad antes de escribir reglas, prompts o integraciones."
  />
);

const ClassSixBlueprint = () => (
  <CourseCardGridSlide
    intro="Esta secuencia sirve como plantilla para convertir una friccion operativa en un proceso que se pueda automatizar, auditar y mejorar."
    items={classSixBlueprintCards}
    columns={4}
  />
);

const ClassSixClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Lo que debe quedar despues de disenar procesos automatizables",
      body: "La automatizacion madura cuando el proceso ya puede explicarse por capas: entrada, validacion, decision, excepcion, handoff y control. Esa arquitectura vale mas que cualquier demo.",
      tags: ["arquitectura de proceso", "regla", "excepcion", "control"],
    }}
    takeaways={classSixTakeaways}
    nextClass={{
      title: "Clase 7 · Analisis del consumidor con IA",
      body: "La siguiente sesion usa esta disciplina operativa para leer mejor comportamiento, valor, servicio y contexto del consumidor.",
    }}
    question="Que proceso de tu contexto hoy podria rediseñarse por capas para dejar de depender tanto de memoria, intuicion o retrabajo manual?"
  />
);

const ClassSevenHero = () => (
  <SessionHeroSlide
    badge="Clase 7 · Analisis del consumidor"
    title="La IA ayuda a leer al consumidor cuando conecta senales con decisiones reales."
    summary="La clase busca que el alumno deje de ver clientes como listas o demografia y empiece a leer patrones de comportamiento, valor, servicio y contexto para intervenir mejor."
    bullets={[
      {
        title: "Detectar que senales importan",
        body: "No toda data vale lo mismo. La clave es distinguir senales con capacidad real de explicar conducta y valor.",
      },
      {
        title: "Pasar de segmento a accion",
        body: "El analisis solo sirve cuando termina en priorizacion, mensaje, oferta o rediseño de experiencia.",
      },
      {
        title: "Leer movimiento y no foto fija",
        body: "La IA es mas util cuando muestra cambio, riesgo o aceleracion y no solo describe el estado actual.",
      },
      {
        title: "Preparar la clase 8",
        body: "La siguiente sesion convierte esta lectura en fidelizacion y personalizacion accionable.",
      },
    ]}
    chips={["senales", "segmentacion", "journey", "decision"]}
    spotlight={{
      label: "Pregunta de la clase",
      value: "Que senal cambia que decision",
      body: "Ese filtro evita analitica ornamental. Toda senal deberia empujar una accion o una priorizacion concreta.",
      points: ["comportamiento", "valor", "servicio"],
    }}
  />
);

const ClassSevenSignals = () => <ConsumerSignalMapSlide />;

const ClassSevenSegments = () => (
  <CourseCardGridSlide
    intro="Estas son las cuatro lecturas mas utiles para transformar datos de consumidor en decisiones comerciales o de experiencia."
    items={classSevenSegmentationCards}
    columns={4}
  />
);

const ClassSevenJourney = () => (
  <CourseCardGridSlide
    intro="Leer al consumidor bien tambien significa entender en que etapa del journey aparece la senal y que friccion o oportunidad expresa."
    items={classSevenJourneyCards}
    columns={4}
  />
);

const ClassSevenRulesSlide = () => (
  <SplitChecklistSlide
    intro="Muchos equipos recolectan mucha data de consumidor pero siguen decidiendo con intuicion porque nunca traducen lectura a accion concreta."
    leftTitle="Errores comunes"
    leftItems={classSevenAntiPatterns}
    rightTitle="Reglas para analizar mejor"
    rightItems={classSevenRules}
    note="La IA aporta valor cuando conecta senal, etapa del journey y decision de negocio en una misma lectura."
  />
);

const ClassSevenFramework = () => (
  <CourseCardGridSlide
    intro="Esta secuencia sirve para ordenar el analisis del consumidor sin perderse en dashboards bonitos pero poco accionables."
    items={classSevenFrameworkCards}
    columns={4}
  />
);

const ClassSevenClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Lo que debe quedar despues de esta clase",
      body: "Analizar consumidor con IA no es solo describir comportamientos. Es construir una lectura suficientemente fina como para decidir mejor a quien intervenir, cuando y con que tipo de accion.",
      tags: ["senales", "segmentos", "journey", "accion"],
    }}
    takeaways={classSevenTakeaways}
    nextClass={{
      title: "Clase 8 · Fidelizacion y personalizacion",
      body: "La siguiente sesion usa esta lectura para definir siguiente mejor accion, timing, canal y esfuerzo de retencion segun valor y etapa.",
    }}
    question="Si tuvieras que intervenir hoy sobre un solo segmento de clientes, que senales usarias para defender esa decision y por que?"
  />
);

const ClassEightHero = () => (
  <SessionHeroSlide
    badge="Clase 8 · Fidelizacion y personalizacion"
    title="Personalizar bien es intervenir distinto segun etapa, valor y contexto."
    summary="La clase aterriza la lectura del consumidor en acciones de retencion y expansion: siguiente mejor accion, timing, canal y control de esfuerzo comercial."
    bullets={[
      {
        title: "Definir siguiente mejor accion",
        body: "Cada etapa del journey pide una intervencion distinta, no una comunicacion masiva con maquillaje personal.",
      },
      {
        title: "Cruzar valor y riesgo",
        body: "No todo cliente merece el mismo esfuerzo; conviene priorizar segun potencial, costo y probabilidad de respuesta.",
      },
      {
        title: "Orquestar canal y timing",
        body: "Personalizar no es solo que decir; tambien importa cuando aparecer y por donde hacerlo.",
      },
      {
        title: "Preparar la fase siguiente",
        body: "Con esta base ya se puede avanzar hacia etica/gobernanza o profundizar capas de datos, segun tu secuencia docente.",
      },
    ]}
    chips={["retencion", "next best action", "timing", "canal"]}
    spotlight={{
      label: "Filtro de la clase",
      value: "No todo cliente, no todo momento",
      body: "La fidelizacion rentable empieza cuando el equipo deja de intervenir por reflejo y empieza a elegir mejor donde poner energia.",
      points: ["valor", "riesgo", "ventana correcta"],
    }}
  />
);

const ClassEightJourney = () => <PersonalizationJourneySlide />;

const ClassEightLayers = () => (
  <CourseCardGridSlide
    intro="La personalizacion real no vive solo en un texto. Vive en la combinacion de mensaje, oferta, timing y canal."
    items={classEightLayerCards}
    columns={4}
  />
);

const ClassEightEconomics = () => (
  <CourseCardGridSlide
    intro="La fidelizacion importa porque protege ingreso futuro, prioriza mejor el esfuerzo y evita depender siempre de adquisicion nueva."
    items={classEightEconomicsCards}
    columns={4}
  />
);

const ClassEightRulesSlide = () => (
  <SplitChecklistSlide
    intro="Las estrategias de fidelizacion fallan cuando se vuelven masivas, invasivas o economicamente ingenuas. Estas comparaciones ayudan a endurecer criterio."
    leftTitle="Errores comunes"
    leftItems={classEightAntiPatterns}
    rightTitle="Reglas para personalizar mejor"
    rightItems={classEightRules}
    note="Una buena personalizacion mejora experiencia y economics al mismo tiempo; si solo sube envio o descuento, probablemente esta mal diseñada."
  />
);

const ClassEightRoadmap = () => (
  <CourseCardGridSlide
    intro="Esta secuencia sirve para pasar de lectura del consumidor a un sistema de fidelizacion y personalizacion con trigger, accion, canal y feedback."
    items={classEightRoadmapCards}
    columns={4}
  />
);

const ClassEightClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Lo que deberia quedar despues de fidelizacion y personalizacion",
      body: "Fidelizar con IA no es solo mandar mensajes mejores. Es decidir a quien intervenir, cuando, con que propuesta y con que esfuerzo segun valor, riesgo y etapa del journey.",
      tags: ["retencion", "personalizacion", "timing", "NBA"],
    }}
    takeaways={classEightTakeaways}
    nextClass={{
      title: "Clase 9 · Etica, privacidad y gobernanza",
      body: "La siguiente fase del curso puede entrar a como usar toda esta capacidad sin romper confianza, compliance ni criterio organizacional.",
    }}
    question="Si hoy tuvieras que elegir una sola etapa del journey para personalizar mejor, cual te daria mas retorno y por que esa antes que otra?"
  />
);

const ClassNineHero = () => (
  <SessionHeroSlide
    badge="Clase 9 · Gobernanza responsable"
    title="La IA escala mejor cuando tambien escala control, criterio y confianza."
    summary="La clase instala una mirada pragmatica sobre etica, privacidad y gobernanza: no como burocracia, sino como sistema minimo para usar IA sin romper confianza, compliance ni capacidad de respuesta."
    bullets={[
      {
        title: "Separar control real de compliance ornamental",
        body: "La pregunta no es tener un documento; es poder decidir mejor sobre casos, datos y vendors concretos.",
      },
      {
        title: "Ubicar donde el riesgo cambia",
        body: "Privacidad, decisiones sensibles, automatizacion y terceros no piden el mismo nivel de revision.",
      },
      {
        title: "Asignar dueños y limites",
        body: "La gobernanza madura nombra que se puede hacer, que no y quien responde cuando algo cambia o falla.",
      },
      {
        title: "Preparar la clase 10",
        body: "La siguiente sesion baja este marco al problema concreto de sesgos y riesgo reputacional.",
      },
    ]}
    chips={["privacidad", "governance", "owners", "control"]}
    spotlight={{
      label: "Filtro de la clase",
      value: "Uso permitido, uso prohibido",
      body: "Ese borde vale mas que cualquier slogan etico. La empresa madura sabe donde frena, donde aprueba y donde deja evidencia.",
      points: ["dato correcto", "owner correcto", "control correcto"],
    }}
  />
);

const ClassNineGovernance = () => <GovernanceControlTowerSlide />;

const ClassNinePrinciples = () => (
  <CourseCardGridSlide
    intro="Estos principios sirven para discutir etica y privacidad sin convertir la clase en teoria abstracta."
    items={classNinePrincipleCards}
    columns={4}
  />
);

const ClassNinePrivacy = () => (
  <CourseCardGridSlide
    intro="La privacidad deja de ser un tema legal aislado cuando se la conecta con acceso, contexto, terceros e incidentes dentro del flujo real de datos."
    items={classNinePrivacyCards}
    columns={4}
  />
);

const ClassNineRulesSlide = () => (
  <SplitChecklistSlide
    intro="Muchas empresas creen que ya resolvieron gobernanza porque redactaron una politica. La prueba real aparece cuando el marco tiene que servir para decidir sobre un caso concreto."
    leftTitle="Errores comunes"
    leftItems={classNineAntiPatterns}
    rightTitle="Reglas utiles"
    rightItems={classNineRules}
    note="La mejor gobernanza es la que vuelve mas clara la operacion, no la que agrega friccion sin criterio."
  />
);

const ClassNineRoadmap = () => (
  <CourseCardGridSlide
    intro="Esta secuencia permite pasar de preocupacion abstracta por riesgo a una capa de gobierno realmente usable dentro de la empresa."
    items={classNineRoadmapCards}
    columns={4}
  />
);

const ClassNineClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Lo que deberia quedar despues de gobernanza",
      body: "La IA responsable no se logra con slogans. Se logra cuando la organizacion puede explicar para que usa la tecnologia, con que datos, bajo que limites y con quien responde por el sistema.",
      tags: ["gobernanza", "privacidad", "owners", "limites"],
    }}
    takeaways={classNineTakeaways}
    nextClass={{
      title: "Clase 10 · Sesgos y riesgo reputacional",
      body: "La siguiente sesion muestra como un problema de fairness o de opacidad puede convertirse rapidamente en conflicto operativo y de marca.",
    }}
    question="Si tuvieras que revisar hoy un solo caso de IA en tu contexto desde gobernanza, cual te daria mas preocupacion y por que?"
  />
);

const ClassTenHero = () => (
  <SessionHeroSlide
    badge="Clase 10 · Fairness y reputacion"
    title="El sesgo importa cuando cambia trato, acceso o confianza de forma dificil de defender."
    summary="La clase lleva la conversacion de riesgo a un terreno mas fino: donde aparece el sesgo, como se esconde en datos y reglas, y por que puede dañar reputacion, adopcion y valor de negocio."
    bullets={[
      {
        title: "Ver el sesgo mas alla del modelo",
        body: "Muestra, labels, variables proxy y loops de decision pueden producir trato desigual aunque el modelo parezca correcto en promedio.",
      },
      {
        title: "Separar performance de aceptabilidad",
        body: "Un sistema rentable puede seguir siendo indefendible si perjudica sistematicamente a ciertos grupos o contextos.",
      },
      {
        title: "Diseñar control y apelacion",
        body: "La salida correcta no es solo medir; tambien es dejar espacio para corregir, explicar y aprender.",
      },
      {
        title: "Preparar la clase 11",
        body: "La siguiente sesion entra a la base de todo esto: los datos de negocio y las fuentes que alimentan cada decision.",
      },
    ]}
    chips={["sesgo", "fairness", "riesgo", "marca"]}
    spotlight={{
      label: "Pregunta de la clase",
      value: "Para quien falla distinto",
      body: "Ese filtro obliga a mirar diferencias por grupo y contexto, no solo un promedio elegante que esconde desigualdad.",
      points: ["grupos", "errores", "explicacion"],
    }}
  />
);

const ClassTenBias = () => <BiasRiskStudioSlide />;

const ClassTenSources = () => (
  <CourseCardGridSlide
    intro="Estas son las cuatro fuentes mas comunes de sesgo cuando un equipo cree que el sistema solo esta aprendiendo objetivamente del pasado."
    items={classTenBiasSourceCards}
    columns={4}
  />
);

const ClassTenImpact = () => (
  <CourseCardGridSlide
    intro="El dano reputacional aparece cuando el sesgo se vuelve visible para clientes, equipos o terceros y la empresa no puede defender lo que hace el sistema."
    items={classTenReputationCards}
    columns={4}
  />
);

const ClassTenRulesSlide = () => (
  <SplitChecklistSlide
    intro="La mayor parte de los problemas de fairness no se arregla con una unica tecnica. Requiere revisar metricas, reglas de negocio y capacidad de corregir errores visibles."
    leftTitle="Errores comunes"
    leftItems={classTenAntiPatterns}
    rightTitle="Reglas utiles"
    rightItems={classTenRules}
    note="La pregunta no es solo si el sistema predice bien, sino si la organizacion puede defender el trato que produce."
  />
);

const ClassTenResponse = () => (
  <CourseCardGridSlide
    intro="Este bloque deja una secuencia de respuesta para detectar diferencias, revisar causa y corregir antes de que el problema se vuelva crisis."
    items={classTenResponseCards}
    columns={4}
  />
);

const ClassTenClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Lo que deberia quedar despues de sesgos y reputacion",
      body: "Un sistema de IA serio no se juzga solo por precision. Tambien se juzga por si produce trato defendible, si deja espacio para apelacion y si la empresa puede explicar como controla diferencias injustas.",
      tags: ["fairness", "diferencias", "explicacion", "reputacion"],
    }}
    takeaways={classTenTakeaways}
    nextClass={{
      title: "Clase 11 · Datos de negocio y fuentes",
      body: "La siguiente sesion baja a la materia prima del analisis: que datos existen, donde viven y cual sirve para que decision.",
    }}
    question="Que sistema de tu contexto mereceria una revision de fairness si mañana empezara a afectar trato, prioridad o acceso para personas?"
  />
);

const ClassElevenHero = () => (
  <SessionHeroSlide
    badge="Clase 11 · Datos y fuentes"
    title="Los datos valen cuando habilitan una decision, no cuando solo existen en un sistema."
    summary="La clase ordena el mapa de fuentes de negocio: que capas de dato existen, como se conectan, donde vive el owner y por que una fuente sirve o no para un caso analitico o de IA."
    bullets={[
      {
        title: "Partir de la decision",
        body: "La fuente correcta se elige por la pregunta que queremos responder y no por prestigio tecnologico.",
      },
      {
        title: "Distinguir capas de dato",
        body: "Resultado, comportamiento, operacion y contexto aportan cosas distintas y no pesan igual en cada uso.",
      },
      {
        title: "Nombrar owner y definicion",
        body: "Sin responsables ni definiciones consistentes, la fuente se vuelve fragil aunque el sistema exista hace anos.",
      },
      {
        title: "Preparar la clase 12",
        body: "La siguiente sesion convierte este mapa en diseno concreto de recoleccion de datos.",
      },
    ]}
    chips={["fuentes", "decisiones", "owner", "joins"]}
    spotlight={{
      label: "Filtro de la clase",
      value: "Fuente util, no fuente famosa",
      body: "Una fuente vale cuando mejora una rutina de negocio con calidad y definicion suficientes para sostenerse en el tiempo.",
      points: ["decision", "owner", "accionabilidad"],
    }}
  />
);

const ClassElevenWorkbench = () => <DataSourceWorkbenchSlide />;

const ClassElevenLayers = () => (
  <CourseCardGridSlide
    intro="Estas cuatro capas ayudan a ordenar el tipo de dato con el que una empresa puede explicar mejor resultado, conducta y operacion."
    items={classElevenLayerCards}
    columns={4}
  />
);

const ClassElevenSources = () => (
  <CourseCardGridSlide
    intro="No todas las fuentes se comportan igual. Algunas son mas confiables, otras mas ricas en comportamiento y otras mas utiles para contexto o feedback humano."
    items={classElevenSourceCards}
    columns={4}
  />
);

const ClassElevenRulesSlide = () => (
  <SplitChecklistSlide
    intro="Las fuentes fallan menos por falta total de datos que por falta de criterio sobre definiciones, owners y accionabilidad."
    leftTitle="Errores comunes"
    leftItems={classElevenAntiPatterns}
    rightTitle="Reglas utiles"
    rightItems={classElevenRules}
    note="La arquitectura de fuentes se vuelve util cuando negocio y datos pueden nombrar lo mismo de la misma manera."
  />
);

const ClassElevenBlueprint = () => (
  <CourseCardGridSlide
    intro="Esta secuencia sirve para pasar de intuicion sobre una fuente a un mapa util de sistemas, joins, owners y decisiones habilitadas."
    items={classElevenBlueprintCards}
    columns={4}
  />
);

const ClassElevenClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Lo que deberia quedar despues de fuentes de datos",
      body: "Una fuente de negocio vale cuando tiene definicion clara, owner claro y una relacion visible con la decision que el equipo quiere mejorar. Sin eso, el dato existe pero no trabaja.",
      tags: ["fuente", "owner", "definicion", "decision"],
    }}
    takeaways={classElevenTakeaways}
    nextClass={{
      title: "Clase 12 · Recoleccion de datos",
      body: "La siguiente sesion transforma el mapa de fuentes en diseno de captura, identidad, consentimiento y QA.",
    }}
    question="Si hoy tuvieras que elegir una sola fuente de negocio para mejorar, cual te daria mas valor por impacto y cercania a una decision real?"
  />
);

const ClassTwelveHero = () => (
  <SessionHeroSlide
    badge="Clase 12 · Recoleccion de datos"
    title="Recolectar bien es disenar la futura capacidad de decidir mejor."
    summary="La clase baja el mapa de fuentes a su origen operativo: como se diseña una captura minimamente util, consistente, defendible y sostenible para luego analizar, modelar o automatizar."
    bullets={[
      {
        title: "Capturar para una decision futura",
        body: "No se trata de guardar todo; se trata de registrar lo necesario para una lectura o accion que valga la pena.",
      },
      {
        title: "Crear taxonomia legible",
        body: "Eventos, campos y estados deben entenderse igual entre negocio, producto y analisis.",
      },
      {
        title: "Alinear identidad, permiso y QA",
        body: "La captura util tambien necesita reglas de uso, salud tecnica y ownership visible.",
      },
      {
        title: "Preparar la clase 13",
        body: "La siguiente sesion toma esta base y entra a limpieza y consistencia del dato recolectado.",
      },
    ]}
    chips={["tracking", "taxonomia", "consentimiento", "QA"]}
    spotlight={{
      label: "Pregunta de la clase",
      value: "Que vale la pena capturar",
      body: "Ese criterio separa una implementacion util de un desorden costoso. Todo campo nuevo deberia defender su existencia.",
      points: ["decision futura", "owner", "mantenimiento"],
    }}
  />
);

const ClassTwelveWorkbench = () => <CaptureDesignWorkbenchSlide />;

const ClassTwelvePrinciples = () => (
  <CourseCardGridSlide
    intro="Estos principios ayudan a disenar recoleccion de datos sin caer en tracking excesivo, taxonomias rotas ni problemas de privacidad o uso posterior."
    items={classTwelveCollectionCards}
    columns={4}
  />
);

const ClassTwelveQuality = () => (
  <CourseCardGridSlide
    intro="La captura solo vale cuando se mantiene sana. Estos chequeos permiten detectar antes si el dato esta incompleto, incoherente o roto por cambios del flujo."
    items={classTwelveQualityCards}
    columns={4}
  />
);

const ClassTwelveRulesSlide = () => (
  <SplitChecklistSlide
    intro="La mayoria de los problemas de tracking y captura no nace en la tecnologia: nace en la falta de criterio sobre taxonomia, finalidad, ownership y mantenimiento."
    leftTitle="Errores comunes"
    leftItems={classTwelveAntiPatterns}
    rightTitle="Reglas utiles"
    rightItems={classTwelveRules}
    note="La captura madura no se mide por volumen de campos sino por su capacidad de sostener decision, analisis y mejora continua."
  />
);

const ClassTwelveRoadmap = () => (
  <CourseCardGridSlide
    intro="Esta ruta sirve para disenar una capa de recoleccion razonable antes de pasar a limpieza, consistencia y calidad de datos en las clases siguientes."
    items={classTwelveRoadmapCards}
    columns={4}
  />
);

const ClassTwelveClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Lo que deberia quedar despues de recoleccion de datos",
      body: "Recolectar bien es decidir que registrar, con que identidad, bajo que permiso y como sostener salud de captura a lo largo del tiempo. Sin esa disciplina, despues todo lo demas se debilita.",
      tags: ["captura", "taxonomia", "permiso", "QA"],
    }}
    takeaways={classTwelveTakeaways}
    nextClass={{
      title: "Clase 13 · Limpieza y consistencia",
      body: "La siguiente sesion toma esta base y entra a como corregir ruido, unificar definiciones y volver confiable el dato recolectado.",
    }}
    question="Si tuvieras que redisenar hoy una sola capa de captura en tu contexto, cual elegirias y que decision futura justificaria ese esfuerzo?"
  />
);

const ClassThirteenHero = () => (
  <SessionHeroSlide
    badge="Clase 13 · Limpieza y consistencia"
    title="Limpiar bien es volver confiable una entidad, una definicion y una lectura de negocio."
    summary="La clase muestra que la limpieza de datos no es cosmetica. Sirve para reconciliar identidades, corregir reglas semanticas y dejar una base mas defendible para analisis y automatizacion."
    bullets={[
      {
        title: "Separar ruido tecnico de ruido semantico",
        body: "Duplicados, vacios y formato son una capa; definiciones rotas y etapas inconsistentes son otra.",
      },
      {
        title: "Limpiar sin borrar historia",
        body: "La correccion madura deja evidencia de origen y criterio para que el dato limpio siga siendo auditable.",
      },
      {
        title: "Corregir tambien el origen",
        body: "La limpieza solo se sostiene cuando vuelve a captura, procesos y ownership de la fuente viva.",
      },
      {
        title: "Preparar la clase 14",
        body: "La siguiente sesion usa esta base para hablar de calidad de datos como disciplina continua y no como arreglo puntual.",
      },
    ]}
    chips={["duplicados", "consistencia", "matching", "trazabilidad"]}
    spotlight={{
      label: "Filtro de la clase",
      value: "Que version del dato vamos a defender",
      body: "Esa pregunta ordena toda limpieza seria: que entidad importa, que regla la corrige y por que esa version mejora la decision futura.",
      points: ["entidad", "regla", "uso"],
    }}
  />
);

const ClassThirteenStudio = () => <DataCleaningStudioSlide />;

const ClassThirteenIssues = () => (
  <CourseCardGridSlide
    intro="Estos son los cuatro tipos de suciedad que mas suelen romper lectura, joins y automatizacion en una empresa antes de que alguien lo note del todo."
    items={classThirteenIssueCards}
    columns={4}
  />
);

const ClassThirteenConsistency = () => (
  <CourseCardGridSlide
    intro="La consistencia no es solo prolijidad. Es lo que permite comparar, unir y sostener una misma historia del negocio entre sistemas y equipos."
    items={classThirteenConsistencyCards}
    columns={4}
  />
);

const ClassThirteenRulesSlide = () => (
  <SplitChecklistSlide
    intro="Mucha limpieza falla porque se hace solo como trabajo tecnico y sin una idea clara de que entidad o decision intenta defender."
    leftTitle="Errores comunes"
    leftItems={classThirteenAntiPatterns}
    rightTitle="Reglas utiles"
    rightItems={classThirteenRules}
    note="La limpieza madura deja trazabilidad, foco y una correccion concreta sobre el origen del ruido, no solo sobre el historico."
  />
);

const ClassThirteenRoadmap = () => (
  <CourseCardGridSlide
    intro="Esta secuencia sirve para elegir una entidad critica, limpiar con reglas claras y cerrar el loop con captura y ownership sin perder auditabilidad."
    items={classThirteenRoadmapCards}
    columns={4}
  />
);

const ClassThirteenClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Lo que deberia quedar despues de limpieza y consistencia",
      body: "La limpieza de datos vale cuando convierte una fuente rota en una base defendible para decisiones, comparaciones y automatizaciones. Sin criterio semantico y sin trazabilidad, limpiar es solo esconder el problema.",
      tags: ["limpieza", "consistencia", "trazabilidad", "entidad"],
    }}
    takeaways={classThirteenTakeaways}
    nextClass={{
      title: "Clase 14 · Calidad de datos",
      body: "La siguiente sesion amplifica este trabajo hacia una disciplina continua de monitoreo, thresholds y confianza en el dato critico.",
    }}
    question="Si hoy tuvieras que elegir una sola entidad para limpiar primero en tu contexto, cual seria y que decision futura justificaria esa prioridad?"
  />
);

const ClassFourteenHero = () => (
  <SessionHeroSlide
    badge="Clase 14 · Calidad de datos"
    title="La calidad del dato importa porque define cuanta confianza merece una decision."
    summary="La clase saca a la calidad del terreno abstracto y la vuelve operativa: dimensiones claras, monitoreo util, owners visibles y relacion directa con dashboards, modelos y automatizaciones."
    bullets={[
      {
        title: "Separar dimensiones de calidad",
        body: "Completitud, precision, oportunidad y consistencia no se rompen igual ni se corrigen igual.",
      },
      {
        title: "Medir donde el dato pesa de verdad",
        body: "Conviene empezar por fuentes criticas para scoring, forecast, SLA o visualizacion ejecutiva, no por todo a la vez.",
      },
      {
        title: "Conectar scorecard con respuesta",
        body: "Una alerta vale cuando alguien sabe que hacer con ella, con que prioridad y sobre que parte del flujo.",
      },
      {
        title: "Preparar la clase 15",
        body: "La siguiente sesion usa esta confianza para diseñar visualizaciones que ayuden a decidir y no solo a mirar numeros.",
      },
    ]}
    chips={["quality", "thresholds", "owners", "confianza"]}
    spotlight={{
      label: "Pregunta de la clase",
      value: "Que dato merece confianza operativa",
      body: "Ese filtro diferencia una fuente disponible de una fuente que realmente puede entrar a un dashboard, modelo o automatizacion sin generar ruido caro.",
      points: ["dimension", "owner", "consumo"],
    }}
  />
);

const ClassFourteenSignals = () => <DataQualitySignalSlide />;

const ClassFourteenMonitoring = () => (
  <CourseCardGridSlide
    intro="Estas piezas convierten la calidad de datos en una practica viva: scorecards, thresholds, owners y revision sobre consumos reales."
    items={classFourteenMonitoringCards}
    columns={4}
  />
);

const ClassFourteenImpact = () => (
  <CourseCardGridSlide
    intro="La calidad deja de verse tecnica cuando se conecta con forecast, automatizacion, fairness o confianza ejecutiva en los numeros que se presentan."
    items={classFourteenImpactCards}
    columns={4}
  />
);

const ClassFourteenRulesSlide = () => (
  <SplitChecklistSlide
    intro="La mayoria de las organizaciones habla de calidad de datos como ideal abstracto, pero falla al convertirla en monitoreo util y respuesta operativa."
    leftTitle="Errores comunes"
    leftItems={classFourteenAntiPatterns}
    rightTitle="Reglas utiles"
    rightItems={classFourteenRules}
    note="Una cultura de calidad madura aparece cuando negocio vuelve a confiar en el dato porque entiende como se mide, quien responde y como se corrige."
  />
);

const ClassFourteenRoadmap = () => (
  <CourseCardGridSlide
    intro="Esta secuencia ayuda a elegir una dimension critica, instrumentar checks y dejar playbooks de respuesta sobre el dato que realmente mueve una decision importante."
    items={classFourteenRoadmapCards}
    columns={4}
  />
);

const ClassFourteenClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Lo que deberia quedar despues de calidad de datos",
      body: "La calidad no es una obsesion tecnica ni un numero aislado. Es una condicion para confiar en el dato que entra a dashboards, modelos, automatizaciones y decisiones sensibles del negocio.",
      tags: ["calidad", "confianza", "owner", "threshold"],
    }}
    takeaways={classFourteenTakeaways}
    nextClass={{
      title: "Clase 15 · Visualizacion para decision",
      body: "La siguiente sesion usa esta base para mostrar informacion con mejor foco, contexto y capacidad de accion.",
    }}
    question="Si tuvieras que monitorear solo una dimension de calidad en una fuente critica de tu contexto, cual elegirias y por que esa primero?"
  />
);

const ClassFifteenHero = () => (
  <SessionHeroSlide
    badge="Clase 15 · Visualizacion para decision"
    title="Un dashboard sirve cuando reduce duda y acelera una buena decision."
    summary="La clase muestra que visualizar no es acomodar graficos. Es diseñar una pregunta, un contexto y un camino hacia la accion segun audiencia, cadencia y nivel de detalle necesario."
    bullets={[
      {
        title: "Diseñar desde la pregunta",
        body: "La primera decision es que tiene que poder decidir el usuario de la pantalla y con que frecuencia.",
      },
      {
        title: "Dar contexto al numero",
        body: "Un KPI aislado dice poco; la meta, el periodo o el threshold correcto lo vuelven util.",
      },
      {
        title: "Separar overview de investigacion",
        body: "La pantalla principal orienta; el detalle aparece despues para explicar sin saturar la primera lectura.",
      },
      {
        title: "Preparar la clase 16",
        body: "La siguiente sesion usa esta base visual para hacer analisis exploratorio con mas disciplina y menos intuicion.",
      },
    ]}
    chips={["dashboards", "storytelling", "decision", "contexto"]}
    spotlight={{
      label: "Filtro de la clase",
      value: "Una pantalla, una decision",
      body: "Ese criterio evita tableros saturados y ayuda a priorizar que numero debe verse primero, contra que comparacion y para que accion siguiente.",
      points: ["audiencia", "contexto", "siguiente paso"],
    }}
  />
);

const ClassFifteenStudio = () => <DecisionVisualizationStudioSlide />;

const ClassFifteenPrinciples = () => (
  <CourseCardGridSlide
    intro="Estos principios ordenan la visualizacion para que ayude a decidir mejor sin convertir la pantalla en deposito de datos."
    items={classFifteenPrincipleCards}
    columns={4}
  />
);

const ClassFifteenChoices = () => (
  <CourseCardGridSlide
    intro="Elegir bien el tipo de vista importa tanto como elegir bien el KPI. Cada pregunta pide una forma distinta de mostrar cambio, comparacion o dispersion."
    items={classFifteenChoiceCards}
    columns={4}
  />
);

const ClassFifteenRulesSlide = () => (
  <SplitChecklistSlide
    intro="Gran parte de los dashboards falla no por falta de datos sino por falta de foco, contexto y jerarquia visual alineada con una decision concreta."
    leftTitle="Errores comunes"
    leftItems={classFifteenAntiPatterns}
    rightTitle="Reglas utiles"
    rightItems={classFifteenRules}
    note="Visualizar bien es dejar claro que mirar, contra que leerlo y que hacer despues si algo se desvía."
  />
);

const ClassFifteenWorkflow = () => (
  <CourseCardGridSlide
    intro="Esta secuencia sirve para pasar de una base de datos o un KPI importante a una visualizacion realmente util para la rutina del equipo."
    items={classFifteenWorkflowCards}
    columns={4}
  />
);

const ClassFifteenClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Lo que deberia quedar despues de visualizacion para decision",
      body: "Una visualizacion madura no compite por impresionar. Ordena una pregunta, una comparacion y un camino de accion para una audiencia concreta y con menos ruido cognitivo.",
      tags: ["visualizacion", "decision", "contexto", "audiencia"],
    }}
    takeaways={classFifteenTakeaways}
    nextClass={{
      title: "Clase 16 · Analisis exploratorio",
      body: "La siguiente sesion usa esta disciplina para leer tendencias, dispersion y segmentos y convertirlos en hipotesis defendibles.",
    }}
    question="Si hoy tuvieras que rediseñar un dashboard en tu contexto, que decision deberia responder con mucha mas claridad que ahora?"
  />
);

const ClassSixteenHero = () => (
  <SessionHeroSlide
    badge="Clase 16 · Analisis exploratorio"
    title="Explorar bien es convertir datos en preguntas mejores y no en opiniones mejor decoradas."
    summary="La clase cierra esta fase mostrando como leer tendencia, dispersion, cohortes y outliers para descubrir patrones utiles y transformarlos en hipotesis que luego puedan validarse."
    bullets={[
      {
        title: "Partir de una pregunta y un baseline",
        body: "La exploracion necesita referencia; si no, todo grafico parece insight aunque solo muestre ruido normal.",
      },
      {
        title: "Abrir por segmentos y tiempo",
        body: "Las respuestas buenas suelen aparecer cuando se cruza cambio temporal con grupos, contextos o etapas del flujo.",
      },
      {
        title: "Detectar anomalias sin sobreinterpretar",
        body: "No todo desvio es error ni toda correlacion es causa; la lectura madura sabe dejar abierta la siguiente validacion.",
      },
      {
        title: "Preparar la fase siguiente",
        body: "Con esta base ya se puede pasar a KPIs ejecutivos, dashboards y narrativa de decision con mucha mas solidez.",
      },
    ]}
    chips={["EDA", "patrones", "hipotesis", "segmentos"]}
    spotlight={{
      label: "Pregunta de la clase",
      value: "Que vale la pena investigar despues",
      body: "Ese filtro separa un grafico curioso de un hallazgo util: el EDA madura cuando termina en una hipotesis y una siguiente validacion concreta.",
      points: ["baseline", "segmentos", "siguiente prueba"],
    }}
  />
);

const ClassSixteenWorkbench = () => <ExploratoryAnalysisWorkbenchSlide />;

const ClassSixteenPatterns = () => (
  <CourseCardGridSlide
    intro="Estas cuatro lecturas ordenan gran parte del analisis exploratorio serio: distribucion, tiempo, segmentacion y outliers como disparadores de preguntas mejores."
    items={classSixteenPatternCards}
    columns={4}
  />
);

const ClassSixteenHypotheses = () => (
  <CourseCardGridSlide
    intro="La exploracion gana valor cuando el hallazgo se formula como hipotesis defendible y no como conclusion apresurada."
    items={classSixteenHypothesisCards}
    columns={4}
  />
);

const ClassSixteenRulesSlide = () => (
  <SplitChecklistSlide
    intro="El analisis exploratorio falla cuando se usa para confirmar intuiciones previas o cuando nunca logra convertirse en una pregunta mejor para investigar despues."
    leftTitle="Errores comunes"
    leftItems={classSixteenAntiPatterns}
    rightTitle="Reglas utiles"
    rightItems={classSixteenRules}
    note="EDA no es una licencia para sacar conclusiones faciles; es una disciplina para descubrir patrones y abrir la siguiente validacion con mas criterio."
  />
);

const ClassSixteenFramework = () => (
  <CourseCardGridSlide
    intro="Esta secuencia sirve para usar el analisis exploratorio como puente entre fuente de datos y decision futura, sin quedarse solo en la descripcion superficial."
    items={classSixteenFrameworkCards}
    columns={4}
  />
);

const ClassSixteenClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Lo que deberia quedar despues de analisis exploratorio",
      body: "Explorar datos bien es ordenar baseline, segmentos, tiempo y dispersion para encontrar patrones utiles y convertirlos en hipotesis defendibles, no en explicaciones apresuradas.",
      tags: ["EDA", "baseline", "hipotesis", "validacion"],
    }}
    takeaways={classSixteenTakeaways}
    nextClass={{
      title: "Clase 17 · KPIs ejecutivos",
      body: "La siguiente fase del curso usa esta base para construir indicadores, dashboards y narrativa de decision mas ejecutiva.",
    }}
    question="Si hoy tuvieras que explorar una sola fuente de tu contexto para encontrar un patron util, que pregunta inicial le harías y que baseline usarías?"
  />
);

const ClassSeventeenSyllabus = () => (
  <CourseSyllabusSlide
    activeClass={17}
    sessionTitle="Clase 17 · KPIs ejecutivos"
    sessionSummary="La Fase 3 empieza traduciendo datos y analisis en indicadores que liderazgo realmente pueda usar para decidir, priorizar y gobernar el negocio."
  />
);

const ClassSeventeenHero = () => (
  <SessionHeroSlide
    badge="Clase 17 · KPIs ejecutivos"
    title="Un KPI ejecutivo sirve cuando cambia una decision y no solo cuando se ve bien en una pantalla."
    summary="La clase instala criterio para diseñar indicadores con definicion clara, comparacion correcta, owner visible y una relacion directa con la conversacion ejecutiva que deberian ordenar."
    bullets={[
      {
        title: "Pocos indicadores, mejor gobierno",
        body: "La jerarquia correcta ordena mejor la discusion que una lluvia de numeros sin peso relativo.",
      },
      {
        title: "Resultado y palanca deben convivir",
        body: "El KPI maduro no solo muestra que paso; tambien ayuda a leer por donde entender o mover ese resultado.",
      },
      {
        title: "Contexto antes que estetica",
        body: "Meta, periodo, umbral y segmentacion vuelven util al indicador mucho antes que cualquier tratamiento visual bonito.",
      },
      {
        title: "Puente hacia dashboards",
        body: "La siguiente clase usa estos KPIs para construir narrativa y visualizacion ejecutiva mas clara.",
      },
    ]}
    chips={["KPI", "direccion", "cadencia", "decision"]}
    spotlight={{
      label: "Filtro de la clase",
      value: "Indicador que decide",
      body: "El KPI ejecutivo correcto deja una pregunta mejor contestada y un owner mas claro para actuar o investigar si aparece un desvio.",
      points: ["comparacion", "owner", "siguiente accion"],
    }}
  />
);

const ClassSeventeenSignals = () => (
  <TabbedSignalMapSlide
    items={classSeventeenKpiProfiles}
    scoreLabels={["Impacto", "Frecuencia", "Control"]}
    ariaLabel="KPIs ejecutivos por frente"
    detailLabel="Familia de KPI"
  />
);

const ClassSeventeenMetrics = () => (
  <CourseCardGridSlide
    intro="Estos cuatro criterios ayudan a distinguir indicadores utiles de paneles llenos de numeros que solo describen actividad sin ordenar una decision ejecutiva."
    items={classSeventeenMetricCards}
    columns={4}
  />
);

const ClassSeventeenDecisions = () => (
  <CourseCardGridSlide
    intro="Una buena canasta ejecutiva necesita balance entre leading, lagging, segmentacion y ownership para sostener conversacion y accion."
    items={classSeventeenDecisionCards}
    columns={4}
  />
);

const ClassSeventeenRulesSlide = () => (
  <SplitChecklistSlide
    intro="Los indicadores ejecutivos fallan cuando se diseñan como reporte o celebracion de numeros aislados. Funcionan cuando nacen de una decision concreta y de una rutina real de liderazgo."
    leftTitle="Errores comunes"
    leftItems={classSeventeenAntiPatterns}
    rightTitle="Reglas utiles"
    rightItems={classSeventeenRules}
    note="El KPI no empieza en el dashboard. Empieza en la pregunta ejecutiva que necesita una lectura mas clara y repetible para gobernar mejor."
  />
);

const ClassSeventeenRoadmap = () => (
  <CourseCardGridSlide
    intro="Esta secuencia sirve para pasar de una conversacion ejecutiva confusa a una canasta corta de KPIs con formula, contexto y dueño visibles."
    items={classSeventeenRoadmapCards}
    columns={4}
  />
);

const ClassSeventeenClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Lo que deberia quedar despues de KPIs ejecutivos",
      body: "Un indicador ejecutivo maduro conecta resultado, palanca, comparacion y owner. Si no cambia una decision o una prioridad, no merece ocupar la primera pantalla.",
      tags: ["KPI", "decision", "owner", "comparacion"],
    }}
    takeaways={classSeventeenTakeaways}
    nextClass={{
      title: "Clase 18 · Dashboards y storytelling",
      body: "La siguiente sesion convierte estos KPIs en historias visuales que ordenan mejor la lectura y la accion ejecutiva.",
    }}
    question="Si tuvieras que dejar solo tres KPIs en una reunion de liderazgo de tu contexto, cuales pondrias y que decision deberian ayudar a tomar?"
  />
);

const ClassEighteenSyllabus = () => (
  <CourseSyllabusSlide
    activeClass={18}
    sessionTitle="Clase 18 · Dashboards y storytelling"
    sessionSummary="Despues de definir indicadores, la clase muestra como convertirlos en narrativas visuales segun audiencia, contexto y decision esperada."
  />
);

const ClassEighteenHero = () => (
  <SessionHeroSlide
    badge="Clase 18 · Dashboards y storytelling"
    title="Un dashboard fuerte no muestra todo; cuenta la historia minima necesaria para decidir mejor."
    summary="La clase ordena la construccion de una narrativa con datos: pregunta principal, senal titular, causa probable, comparacion y accion siguiente segun quien mira la informacion."
    bullets={[
      {
        title: "La audiencia cambia la historia",
        body: "Direccion, operacion, growth y board necesitan distintos niveles de detalle para confiar y decidir.",
      },
      {
        title: "Una senal principal ordena la lectura",
        body: "El mejor dashboard abre con un titular numerico claro y usa el resto como evidencia, no como ruido simultaneo.",
      },
      {
        title: "Contexto y accion completan el relato",
        body: "La narrativa madura cuando explica por que importa la senal y que deberia pasar despues de verla.",
      },
      {
        title: "Puente hacia casos reales",
        body: "Las siguientes clases aterrizan este criterio en retail, banca, servicios y e-commerce.",
      },
    ]}
    chips={["dashboard", "storytelling", "audiencia", "decision"]}
    spotlight={{
      label: "Filtro de la clase",
      value: "Pregunta, senal, accion",
      body: "Esa secuencia obliga a dejar de mostrar todo al mismo tiempo y ayuda a que cada slide responda una sola idea fuerte antes de abrir el detalle.",
      points: ["titular", "contexto", "cierre"],
    }}
  />
);

const ClassEighteenWorkbench = () => (
  <TabbedProcessWorkbenchSlide
    profiles={classEighteenStoryProfiles}
    ariaLabel="Perfiles de storytelling ejecutivo"
    headerLabel="Narrativa por audiencia"
  />
);

const ClassEighteenNarrative = () => (
  <CourseCardGridSlide
    intro="Estos principios ayudan a ordenar cualquier dashboard o slide deck para que responda una sola historia principal antes de abrir detalle."
    items={classEighteenNarrativeCards}
    columns={4}
  />
);

const ClassEighteenEvidence = () => (
  <CourseCardGridSlide
    intro="La evidencia mas util no es la mas abundante, sino la que ayuda a sostener la historia con comparacion, corte y accion sugerida."
    items={classEighteenEvidenceCards}
    columns={4}
  />
);

const ClassEighteenRulesSlide = () => (
  <SplitChecklistSlide
    intro="Storytelling con datos se rompe cuando mezcla demasiadas preguntas o cuando confunde volumen de slides con claridad ejecutiva."
    leftTitle="Errores comunes"
    leftItems={classEighteenAntiPatterns}
    rightTitle="Reglas utiles"
    rightItems={classEighteenRules}
    note="La historia correcta deja claro que mirar primero, que significa y que deberia decidirse despues."
  />
);

const ClassEighteenWorkflow = () => (
  <CourseCardGridSlide
    intro="Esta secuencia ordena la construccion de una narrativa con datos desde la audiencia hasta el siguiente paso sugerido."
    items={classEighteenWorkflowCards}
    columns={4}
  />
);

const ClassEighteenClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Lo que deberia quedar despues de dashboards y storytelling",
      body: "Una narrativa ejecutiva fuerte abre con una pregunta, elige una senal principal y termina en una accion defendible. Todo lo demas es soporte, no protagonista.",
      tags: ["storytelling", "titular", "contexto", "accion"],
    }}
    takeaways={classEighteenTakeaways}
    nextClass={{
      title: "Clase 19 · Casos retail",
      body: "La siguiente sesion lleva estos principios a un terreno muy tangible: demanda, precio, surtido y loyalty en retail.",
    }}
    question="Si tuvieras que rehacer un dashboard que hoy te abruma, cual seria la pregunta principal que deberia contestar primero y que dejarias fuera?"
  />
);

const ClassNineteenSyllabus = () => (
  <CourseSyllabusSlide
    activeClass={19}
    sessionTitle="Clase 19 · Casos retail"
    sessionSummary="La clase aterriza IA aplicada en retail: demanda, pricing, surtido y loyalty como palancas donde datos y decisiones comerciales se encuentran de forma muy visible."
  />
);

const ClassNineteenHero = () => (
  <SessionHeroSlide
    badge="Clase 19 · Casos retail"
    title="Retail es una gran escuela de IA aplicada porque margen, disponibilidad y experiencia viven en la misma decision."
    summary="La clase muestra donde la IA agrega mas valor en retail cuando conecta demanda, precio, surtido y loyalty con una rutina comercial y operativa capaz de actuar sobre la senal."
    bullets={[
      {
        title: "Demanda e inventario cambian rentabilidad",
        body: "Forecast, reposicion y quiebre muestran por que una mejor prediccion mueve valor real con rapidez.",
      },
      {
        title: "Precio y surtido no pueden leerse aislados",
        body: "Margen, elasticidad, mix y experiencia del cliente necesitan convivir en una sola lectura comercial.",
      },
      {
        title: "Loyalty exige criterio economico",
        body: "El incentivo correcto no es el mas generoso, sino el que protege frecuencia y ticket sin erosionar margen.",
      },
      {
        title: "Puente hacia otros sectores",
        body: "Las clases siguientes comparan este razonamiento con banca, servicios y e-commerce.",
      },
    ]}
    chips={["retail", "demanda", "pricing", "loyalty"]}
    spotlight={{
      label: "Filtro de la clase",
      value: "Palanca mas rutina",
      body: "Un caso retail vale cuando la senal llega a compra, trade, pricing o loyalty con suficiente tiempo y ownership para cambiar algo real.",
      points: ["cadencia", "accion comercial", "guardrails"],
    }}
  />
);

const ClassNineteenStudio = () => (
  <TabbedCaseStudioSlide
    items={classNineteenRetailCases}
    ariaLabel="Casos de IA en retail"
    detailLabel="Caso retail"
  />
);

const ClassNineteenLevers = () => (
  <CourseCardGridSlide
    intro="Estas cuatro lecturas ayudan a entender por que retail necesita mirar disponibilidad, margen, experiencia y cadencia de decision al mismo tiempo."
    items={classNineteenRetailLevers}
    columns={4}
  />
);

const ClassNineteenSignals = () => (
  <CourseCardGridSlide
    intro="Venta, inventario, promo, canal, calendario y comportamiento del cliente componen buena parte de las senales que hacen valioso un caso retail."
    items={classNineteenRetailSignals}
    columns={4}
  />
);

const ClassNineteenRulesSlide = () => (
  <SplitChecklistSlide
    intro="Retail castiga rapido las optimizaciones parciales. Mejorar una metrica aislada puede romper margen, disponibilidad o experiencia si no se diseña con visión mas amplia."
    leftTitle="Errores comunes"
    leftItems={classNineteenAntiPatterns}
    rightTitle="Reglas utiles"
    rightItems={classNineteenRules}
    note="Los mejores casos retail conectan la salida analitica con una palanca comercial concreta y una cadencia defendible de accion."
  />
);

const ClassNineteenRoadmap = () => (
  <CourseCardGridSlide
    intro="Esta secuencia ayuda a elegir una palanca retail, pilotearla con foco y escalarla sin perder de vista margen, experiencia ni coherencia comercial."
    items={classNineteenRoadmapCards}
    columns={4}
  />
);

const ClassNineteenClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Lo que deberia quedar despues de casos retail",
      body: "Retail muestra que la IA aplicada captura valor cuando conecta señal con una palanca comercial concreta y cuando evita optimizar precio, demanda o loyalty como mundos separados.",
      tags: ["retail", "margen", "inventario", "experiencia"],
    }}
    takeaways={classNineteenTakeaways}
    nextClass={{
      title: "Clase 20 · Casos banca y servicios",
      body: "La siguiente sesion mantiene el enfoque de casos, pero entra en dominios donde fairness, riesgo y trazabilidad pesan mucho mas."
    }}
    question="Si tu negocio tuviera que empezar por una sola palanca retail-like, seria demanda, precio, surtido o loyalty? Que dato te haria confiar para arrancar?"
  />
);

const ClassTwentySyllabus = () => (
  <CourseSyllabusSlide
    activeClass={20}
    sessionTitle="Clase 20 · Casos banca y servicios"
    sessionSummary="La clase muestra como se ven los casos de IA cuando entran fairness, regulacion, trazabilidad y una relacion mas sensible entre riesgo y experiencia."
  />
);

const ClassTwentyHero = () => (
  <SessionHeroSlide
    badge="Clase 20 · Casos banca y servicios"
    title="En dominios sensibles, una buena prediccion no alcanza: tambien importa como se explica, se corrige y se gobierna."
    summary="Fraude, scoring, cobranza y priorizacion de servicio muestran por que los modelos no viven solos: necesitan thresholds defendibles, supervision humana y una lectura clara del costo del error."
    bullets={[
      {
        title: "Fairness y trazabilidad pesan mas",
        body: "La organizacion necesita justificar la decision y permitir correccion cuando el caso lo exige.",
      },
      {
        title: "La friccion tambien cuesta",
        body: "Bloquear de mas, negar de mas o contactar de mas puede destruir confianza aunque el score se vea fuerte en promedio.",
      },
      {
        title: "Negocio, riesgo y operacion deben hablar el mismo idioma",
        body: "Los mejores casos aparecen cuando varios equipos usan la misma senal dentro de un gobierno comun.",
      },
      {
        title: "Puente hacia e-commerce",
        body: "La clase siguiente compara este contexto con un terreno mas orientado a relevancia, conversion y fulfillment.",
      },
    ]}
    chips={["riesgo", "fairness", "fraude", "gobernanza"]}
    spotlight={{
      label: "Filtro de la clase",
      value: "Precision con gobierno",
      body: "El sistema correcto no es el mas agresivo, sino el que protege riesgo sin destruir experiencia legitima ni perder trazabilidad.",
      points: ["threshold", "override", "apelacion"],
    }}
  />
);

const ClassTwentyStudio = () => (
  <TabbedCaseStudioSlide
    items={classTwentyBankingCases}
    ariaLabel="Casos de IA en banca y servicios"
    detailLabel="Caso sensible"
  />
);

const ClassTwentyConstraints = () => (
  <CourseCardGridSlide
    intro="Estas restricciones hacen que banca y servicios lean la IA aplicada con otro nivel de exigencia sobre control, fairness y costo reputacional."
    items={classTwentyBankingConstraints}
    columns={4}
  />
);

const ClassTwentySignals = () => (
  <CourseCardGridSlide
    intro="Historico, canal, valor, exposicion y feedback humano son senales clave para construir casos mas robustos en dominios sensibles."
    items={classTwentyBankingSignals}
    columns={4}
  />
);

const ClassTwentyRulesSlide = () => (
  <SplitChecklistSlide
    intro="Los casos sensibles fallan cuando solo celebran precision tecnica y olvidan explicacion, apelacion, ownership y costo de la friccion mal aplicada."
    leftTitle="Errores comunes"
    leftItems={classTwentyAntiPatterns}
    rightTitle="Reglas utiles"
    rightItems={classTwentyRules}
    note="La IA en banca y servicios gana madurez cuando negocio, riesgo y operacion comparten una señal con trazabilidad suficiente para corregirla."
  />
);

const ClassTwentyRoadmap = () => (
  <CourseCardGridSlide
    intro="Esta secuencia ayuda a elegir un caso sensible, pilotearlo con evidencias visibles y escalarlo sin perder fairness ni control operativo."
    items={classTwentyRoadmapCards}
    columns={4}
  />
);

const ClassTwentyClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Lo que deberia quedar despues de banca y servicios",
      body: "En dominios sensibles la mejor decision no es siempre la mas automatizada. Es la que balancea riesgo, experiencia, fairness y capacidad real de supervision."
      ,tags: ["riesgo", "fairness", "trazabilidad", "umbral"],
    }}
    takeaways={classTwentyTakeaways}
    nextClass={{
      title: "Clase 21 · Casos e-commerce",
      body: "La siguiente sesion compara este terreno regulado con uno donde discovery, conversion y fulfillment se vuelven el centro de la decision."
    }}
    question="En un caso sensible de tu contexto, que te preocuparia mas hoy: falsos positivos, explicacion debil o falta de gobierno?"
  />
);

const ClassTwentyOneSyllabus = () => (
  <CourseSyllabusSlide
    activeClass={21}
    sessionTitle="Clase 21 · Casos e-commerce"
    sessionSummary="La clase baja IA aplicada al journey digital: ranking, recomendacion, promo y fulfillment como decisiones que mezclan relevancia, economics y confianza."
  />
);

const ClassTwentyOneHero = () => (
  <SessionHeroSlide
    badge="Clase 21 · Casos e-commerce"
    title="En e-commerce, la IA vale cuando mejora discovery, conversion y post compra sin romper margen ni confianza."
    summary="La clase muestra como ranking, recomendacion, promo y promesa de entrega pueden crear valor cuando la organizacion conecta senales de cliente con contexto logistico y de catalogo."
    bullets={[
      {
        title: "Discovery y ranking mueven gran parte del journey",
        body: "Lo que el cliente ve primero condiciona conversion, canasta y aprendizaje de todo el sistema.",
      },
      {
        title: "Recomendacion no es solo repetir historial",
        body: "La experiencia mejora cuando combina relevancia inmediata con suficiente diversidad y novedad.",
      },
      {
        title: "Promo y fulfillment tambien son IA aplicada",
        body: "La mejor conversion no sirve si destruye margen o promete algo que la operacion no puede sostener.",
      },
      {
        title: "Puente hacia modelos predictivos",
        body: "La siguiente sesion abstrae estos casos para entrar a las familias de modelos mas utiles del negocio.",
      },
    ]}
    chips={["e-commerce", "ranking", "recomendacion", "fulfillment"]}
    spotlight={{
      label: "Filtro de la clase",
      value: "Relevancia con economics",
      body: "La experiencia digital madura cuando la empresa conecta señales de sesion y cliente con margen, stock y promesa real de servicio.",
      points: ["journey", "margen", "confianza"],
    }}
  />
);

const ClassTwentyOneStudio = () => (
  <TabbedCaseStudioSlide
    items={classTwentyOneCommerceCases}
    ariaLabel="Casos de IA en e-commerce"
    detailLabel="Caso e-commerce"
  />
);

const ClassTwentyOneLayers = () => (
  <CourseCardGridSlide
    intro="Discovery, conversion, canasta y post compra ayudan a leer e-commerce como un sistema continuo y no como islas de KPI separadas."
    items={classTwentyOneCommerceLayers}
    columns={4}
  />
);

const ClassTwentyOneSignals = () => (
  <CourseCardGridSlide
    intro="Sesion actual, historico, catalogo, journey y contexto logistico son parte de las senales que vuelven mas defendible la experiencia personalizada."
    items={classTwentyOneCommerceSignals}
    columns={4}
  />
);

const ClassTwentyOneRulesSlide = () => (
  <SplitChecklistSlide
    intro="E-commerce falla cuando optimiza un micro indicador y se olvida de la experiencia completa, del margen o de la promesa que sostiene la operacion real."
    leftTitle="Errores comunes"
    leftItems={classTwentyOneAntiPatterns}
    rightTitle="Reglas utiles"
    rightItems={classTwentyOneRules}
    note="Los mejores casos digitales cruzan relevancia, economics y capacidad operativa para no convertir la personalizacion en una fuente de friccion futura."
  />
);

const ClassTwentyOneRoadmap = () => (
  <CourseCardGridSlide
    intro="Esta secuencia ayuda a elegir un tramo del journey digital, pilotearlo con guardrails claros y escalarlo sin perder de vista experiencia end to end."
    items={classTwentyOneRoadmapCards}
    columns={4}
  />
);

const ClassTwentyOneClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Lo que deberia quedar despues de e-commerce",
      body: "La IA en e-commerce gana valor cuando discovery, conversion, canasta y fulfillment se leen juntos. Optimizar una sola capa rara vez alcanza para sostener crecimiento sano.",
      tags: ["journey", "relevancia", "margen", "fulfillment"],
    }}
    takeaways={classTwentyOneTakeaways}
    nextClass={{
      title: "Clase 22 · Introduccion a modelos predictivos",
      body: "La siguiente sesion abstrae todos estos casos para mostrar que familia de modelo conviene segun la forma de la decision."
    }}
    question="Si tuvieras que mejorar un solo tramo del journey digital de tu contexto, empezarias por discovery, conversion, canasta o post compra?"
  />
);

const ClassTwentyTwoSyllabus = () => (
  <CourseSyllabusSlide
    activeClass={22}
    sessionTitle="Clase 22 · Introduccion a modelos predictivos"
    sessionSummary="La clase organiza las familias principales de modelos segun la forma de la pregunta: valor continuo, clase, ranking o evolucion temporal."
  />
);

const ClassTwentyTwoHero = () => (
  <SessionHeroSlide
    badge="Clase 22 · Introduccion a modelos predictivos"
    title="Elegir un modelo empieza por entender la forma de la decision, no por elegir una tecnica de moda."
    summary="La clase baja el mapa base de regresion, clasificacion, ranking y forecasting para que el alumno pueda distinguir que familia conviene segun la salida esperada y el costo del error."
    bullets={[
      {
        title: "Cada familia responde una pregunta distinta",
        body: "Un modelo sirve mejor cuando la empresa sabe si necesita estimar, clasificar, ordenar o ver una serie hacia adelante.",
      },
      {
        title: "Costo del error ordena la evaluacion",
        body: "Recall, precision, error absoluto o ranking metricas valen distinto segun el dano real de equivocarse.",
      },
      {
        title: "Baseline antes que entusiasmo",
        body: "La comparacion con una referencia simple ayuda a defender si el modelo realmente agrega valor al negocio.",
      },
      {
        title: "Puente hacia forecasting y scoring",
        body: "Las siguientes dos clases aterrizan este mapa en demanda y clasificacion operativa."
      },
    ]}
    chips={["modelos", "regresion", "clasificacion", "forecasting"]}
    spotlight={{
      label: "Filtro de la clase",
      value: "Forma de la salida",
      body: "La pregunta correcta es si el negocio necesita un valor, una clase, un orden o una serie futura. Esa distincion resuelve mucha confusion temprana.",
      points: ["target", "baseline", "costo del error"],
    }}
  />
);

const ClassTwentyTwoSignals = () => (
  <TabbedSignalMapSlide
    items={classTwentyTwoModelProfiles}
    scoreLabels={["Explicabilidad", "Madurez", "Accionabilidad"]}
    ariaLabel="Familias de modelos predictivos"
    detailLabel="Familia de modelo"
  />
);

const ClassTwentyTwoLifecycle = () => (
  <CourseCardGridSlide
    intro="El ciclo minimo de un modelo serio va desde una pregunta de negocio clara hasta consumo y monitoreo con rutina real."
    items={classTwentyTwoLifecycleCards}
    columns={4}
  />
);

const ClassTwentyTwoMetrics = () => (
  <CourseCardGridSlide
    intro="Estas cuatro ideas ayudan a evaluar modelos con mas criterio que el simple reflejo de mirar una metrica bonita en laboratorio."
    items={classTwentyTwoMetricCards}
    columns={4}
  />
);

const ClassTwentyTwoRulesSlide = () => (
  <SplitChecklistSlide
    intro="Los modelos predictivos se vuelven confusos cuando se eligen por moda tecnica o cuando se evaluan sin baseline, costo del error ni una forma clara de consumo."
    leftTitle="Errores comunes"
    leftItems={classTwentyTwoAntiPatterns}
    rightTitle="Reglas utiles"
    rightItems={classTwentyTwoRules}
    note="La familia correcta aparece cuando la empresa entiende la forma de la decision y diseña el modelo para ser usado, monitoreado y discutido con criterio."
  />
);

const ClassTwentyTwoRoadmap = () => (
  <CourseCardGridSlide
    intro="Esta secuencia sirve para elegir familia de modelo, definir target y preparar una evaluacion mucho mas defendible desde negocio."
    items={classTwentyTwoRoadmapCards}
    columns={4}
  />
);

const ClassTwentyTwoClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Lo que deberia quedar despues de introduccion a modelos predictivos",
      body: "Regresion, clasificacion, ranking y forecasting resuelven preguntas distintas. La eleccion mejora mucho cuando se piensa desde la forma de la salida y el costo del error.",
      tags: ["target", "baseline", "costo de error", "familias"],
    }}
    takeaways={classTwentyTwoTakeaways}
    nextClass={{
      title: "Clase 23 · Prediccion de demanda",
      body: "La siguiente sesion aplica este mapa al terreno de forecasting y muestra como diseñar una prediccion util para compra, staffing o capacidad."
    }}
    question="En tu contexto, que te cuesta mas hoy: estimar un valor, clasificar un riesgo, ordenar una cola o anticipar una serie en el tiempo?"
  />
);

const ClassTwentyThreeSyllabus = () => (
  <CourseSyllabusSlide
    activeClass={23}
    sessionTitle="Clase 23 · Prediccion de demanda"
    sessionSummary="La clase aterriza forecasting a decisiones concretas: horizonte, granularidad, drivers y forma de consumo segun compra, staffing, supply o media."
  />
);

const ClassTwentyThreeHero = () => (
  <SessionHeroSlide
    badge="Clase 23 · Prediccion de demanda"
    title="Un forecast sirve cuando la ventana y el nivel de detalle coinciden con la decision que el negocio realmente puede tomar."
    summary="La clase muestra que la prediccion de demanda no es solo tecnica de serie temporal; es diseño de horizonte, granularidad y drivers para que compra, operaciones o growth puedan actuar con anticipacion suficiente."
    bullets={[
      {
        title: "Horizonte define utilidad",
        body: "Dias, semanas o meses cambian por completo que equipo puede consumir la prediccion y como la convierte en accion.",
      },
      {
        title: "Granularidad es un trade-off",
        body: "Mas detalle no siempre significa mas valor; a veces solo agrega ruido que la operacion no puede usar.",
      },
      {
        title: "Drivers deben ser defendibles",
        body: "Calendario, promo, stock o comportamiento pesan cuando explican parte real del cambio y no solo complejidad extra.",
      },
      {
        title: "Puente hacia scoring",
        body: "La siguiente clase cambia del tiempo a la priorizacion: clasificacion y scoring para colas de accion."
      },
    ]}
    chips={["forecast", "horizonte", "granularidad", "drivers"]}
    spotlight={{
      label: "Filtro de la clase",
      value: "Ventana que el negocio puede usar",
      body: "Si el forecast no conversa con compra, staffing o pacing real, puede verse sofisticado y aun asi no mover ninguna decision importante.",
      points: ["horizonte", "consumo", "accion"],
    }}
  />
);

const ClassTwentyThreeWorkbench = () => (
  <TabbedProcessWorkbenchSlide
    profiles={classTwentyThreeDemandProfiles}
    ariaLabel="Escenarios de prediccion de demanda"
    headerLabel="Forecast por contexto"
  />
);

const ClassTwentyThreeDrivers = () => (
  <CourseCardGridSlide
    intro="El forecast mejora cuando historico, calendario, shocks y restricciones operativas se incorporan con criterio y no por acumulacion de features."
    items={classTwentyThreeDriverCards}
    columns={4}
  />
);

const ClassTwentyThreeHorizons = () => (
  <CourseCardGridSlide
    intro="Corto, medio, largo y multi horizonte ayudan a pensar la prediccion como una herramienta de decision y no solo como un output tecnico."
    items={classTwentyThreeHorizonCards}
    columns={4}
  />
);

const ClassTwentyThreeRulesSlide = () => (
  <SplitChecklistSlide
    intro="Los casos de demanda se rompen cuando el horizonte lo define la comodidad tecnica o cuando la granularidad elegida nunca llega a una accion real del negocio."
    leftTitle="Errores comunes"
    leftItems={classTwentyThreeAntiPatterns}
    rightTitle="Reglas utiles"
    rightItems={classTwentyThreeRules}
    note="La prediccion de demanda vale cuando la empresa puede convertirla en compra, dotacion, capacidad o presupuesto con suficiente tiempo para reaccionar."
  />
);

const ClassTwentyThreeRoadmap = () => (
  <CourseCardGridSlide
    intro="Esta secuencia ayuda a elegir una ventana, armar la serie correcta y llevar el forecast a una rutina donde se revisan desvíos y se ajusta el sistema."
    items={classTwentyThreeRoadmapCards}
    columns={4}
  />
);

const ClassTwentyThreeClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Lo que deberia quedar despues de prediccion de demanda",
      body: "La demanda forecast gana valor cuando horizonte, granularidad, drivers y consumo operan sobre la misma decision real. Sin eso, la prediccion se vuelve un ejercicio elegante pero aislado.",
      tags: ["forecast", "ventana", "drivers", "consumo"],
    }}
    takeaways={classTwentyThreeTakeaways}
    nextClass={{
      title: "Clase 24 · Clasificacion y scoring",
      body: "La siguiente sesion cambia de pronostico temporal a probabilidad y priorizacion para ordenar colas de accion en negocio y operacion."
    }}
    question="En una decision de tu contexto, que horizonte seria realmente util: horas, dias, semanas o meses? Y quien actuaria con esa señal?"
  />
);

const ClassTwentyFourSyllabus = () => (
  <CourseSyllabusSlide
    activeClass={24}
    sessionTitle="Clase 24 · Clasificacion y scoring"
    sessionSummary="La clase muestra como convertir probabilidad en cola de accion: target, threshold, override y monitoreo para lead scoring, churn, fraude o priorizacion de servicio."
  />
);

const ClassTwentyFourHero = () => (
  <SessionHeroSlide
    badge="Clase 24 · Clasificacion y scoring"
    title="Un score vale cuando cambia el orden del trabajo y deja claro como actuar, no cuando solo agrega un numero mas al sistema."
    summary="La clase organiza clasificacion y scoring desde el target hasta el threshold y el feedback, para mostrar como la probabilidad se convierte en colas, SLAs, revisiones y decisiones mas defendibles."
    bullets={[
      {
        title: "Target correcto antes que algoritmo",
        body: "La calidad del scoring depende mucho de definir bien que significa positivo, negativo o prioridad en el flujo real.",
      },
      {
        title: "Threshold crea la accion",
        body: "El score importa cuando separa que revisar, que atender primero, que retener o que escalar segun costo de error.",
      },
      {
        title: "Override y fairness no son opcionales",
        body: "El sistema madura cuando puede corregirse, explicar su criterio y revisar si trata distinto a segmentos sensibles.",
      },
      {
        title: "Puente hacia la Fase 4",
        body: "Las clases siguientes extienden esta base a recomendadores, churn, series temporales y proyecto integrador."
      },
    ]}
    chips={["clasificacion", "scoring", "threshold", "priorizacion"]}
    spotlight={{
      label: "Filtro de la clase",
      value: "Probabilidad que mueve cola",
      body: "La mejor clasificación no es la más elegante; es la que ayuda a decidir quién va primero, cómo y con qué supervisión dentro del flujo real.",
      points: ["target", "threshold", "override"],
    }}
  />
);

const ClassTwentyFourWorkbench = () => (
  <TabbedProcessWorkbenchSlide
    profiles={classTwentyFourScoringProfiles}
    ariaLabel="Escenarios de scoring y clasificacion"
    headerLabel="Scoring por contexto"
  />
);

const ClassTwentyFourThresholds = () => (
  <CourseCardGridSlide
    intro="Los thresholds convierten probabilidad en flujo real. Son el punto donde el score deja de ser estadistica y pasa a ser una decision operativa."
    items={classTwentyFourThresholdCards}
    columns={4}
  />
);

const ClassTwentyFourGovernance = () => (
  <CourseCardGridSlide
    intro="Explicacion, override, monitoreo por segmento y feedback vivo ayudan a sostener scoring serio mas alla del laboratorio."
    items={classTwentyFourGovernanceCards}
    columns={4}
  />
);

const ClassTwentyFourRulesSlide = () => (
  <SplitChecklistSlide
    intro="La clasificacion se vuelve fragil cuando se celebra el score sin definir cola, costo del error o capacidad de correccion humana."
    leftTitle="Errores comunes"
    leftItems={classTwentyFourAntiPatterns}
    rightTitle="Reglas utiles"
    rightItems={classTwentyFourRules}
    note="El mejor scoring es el que deja una accion clara, umbrales defendibles y un sistema que aprende del override y del cambio de contexto."
  />
);

const ClassTwentyFourRoadmap = () => (
  <CourseCardGridSlide
    intro="Esta secuencia sirve para elegir un caso de scoring, convertirlo en una cola util y escalarlo con monitoreo, fairness y capacidad de recalibrar."
    items={classTwentyFourRoadmapCards}
    columns={4}
  />
);

const ClassTwentyFourClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Lo que deberia quedar despues de clasificacion y scoring",
      body: "La clasificacion vale cuando la probabilidad se traduce en una cola mejor de trabajo, con thresholds visibles, posibilidad de override y monitoreo por uso y segmento.",
      tags: ["score", "threshold", "override", "priorizacion"],
    }}
    takeaways={classTwentyFourTakeaways}
    nextClass={{
      title: "Clase 25 · Sistemas de recomendacion",
      body: "La fase siguiente entra a recomendadores, churn, series temporales y optimizacion con una base mucho mas firme sobre modelos y decisiones."
    }}
    question="Si hoy pudieras poner un score en una sola cola de trabajo de tu contexto, cual seria y que accion distinta deberia disparar?"
  />
);

const ClassTwentyFiveSyllabus = () => (
  <CourseSyllabusSlide
    activeClass={25}
    sessionTitle="Clase 25 · Recomendadores"
    sessionSummary="La Fase 4 entra a sistemas que sugieren productos, contenido o acciones segun historial, contexto y restricciones del negocio."
  />
);

const ClassTwentyFiveHero = () => (
  <SessionHeroSlide
    badge="Clase 25 · Recomendadores"
    title="Un recomendador vale cuando mejora descubrimiento o conversion sin romper margen, diversidad ni confianza."
    summary="La clase organiza los sistemas de recomendacion desde la pregunta de negocio: discovery, canasta, engagement o retencion, y muestra por que el cold start, la exploracion y los guardrails importan tanto como la relevancia inmediata."
    bullets={[
      {
        title: "Cada familia resuelve una limitacion distinta",
        body: "Colaborativo, contenido, sesion e hibrido conviven mejor cuando la empresa entiende que problema corrige cada uno.",
      },
      {
        title: "Cold start no es un detalle",
        body: "Usuarios o productos nuevos pueden destruir la experiencia si el sistema no fue pensado para aprender desde el inicio.",
      },
      {
        title: "La recomendacion tambien necesita economics",
        body: "Stock, margen, saturacion y diversidad deberian entrar al ranking y no quedar para una revision manual tardia.",
      },
      {
        title: "Puente hacia churn y propension",
        body: "La siguiente clase cambia de sugerencia a riesgo y probabilidad comercial, pero conserva la misma logica de accion diferenciada.",
      },
    ]}
    chips={["recomendadores", "cold start", "ranking", "diversidad"]}
    spotlight={{
      label: "Filtro de la clase",
      value: "Relevancia con guardrails",
      body: "El sistema correcto no solo adivina que podria gustar; tambien cuida que eso tenga sentido para el journey, el negocio y la operacion.",
      points: ["discovery", "margen", "stock"],
    }}
  />
);

const ClassTwentyFiveMap = () => (
  <TabbedSignalMapSlide
    items={classTwentyFiveRecommenderProfiles}
    scoreLabels={["Relevancia", "Escala", "Robustez"]}
    ariaLabel="Familias de recomendadores"
    detailLabel="Motor de recomendacion"
  />
);

const ClassTwentyFiveDesign = () => (
  <CourseCardGridSlide
    intro="Estas piezas ayudan a disenar un recomendador desde objetivo, candidatos, exploracion y medicion util de negocio."
    items={classTwentyFiveDesignCards}
    columns={4}
  />
);

const ClassTwentyFiveSignals = () => (
  <CourseCardGridSlide
    intro="Interacciones, metadata, contexto y restricciones de negocio componen gran parte de la materia prima que hace defendible un sistema de recomendacion."
    items={classTwentyFiveSignalCards}
    columns={4}
  />
);

const ClassTwentyFiveRulesSlide = () => (
  <SplitChecklistSlide
    intro="Los recomendadores fallan cuando solo persiguen clic corto o cuando olvidan cold start, diversidad y restricciones del negocio real."
    leftTitle="Errores comunes"
    leftItems={classTwentyFiveAntiPatterns}
    rightTitle="Reglas utiles"
    rightItems={classTwentyFiveRules}
    note="Una recomendacion madura mezcla relevancia con exploracion, guardrails y una medicion que vaya mas alla del CTR."
  />
);

const ClassTwentyFiveRoadmap = () => (
  <CourseCardGridSlide
    intro="Esta secuencia ayuda a elegir el punto del journey, armar las senales del motor y escalar con monitoreo y aprendizaje reales."
    items={classTwentyFiveRoadmapCards}
    columns={4}
  />
);

const ClassTwentyFiveClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Lo que deberia quedar despues de recomendadores",
      body: "Un recomendador serio parte del objetivo del journey, combina senales con criterio y cuida cold start, diversidad y guardrails de negocio desde el ranking.",
      tags: ["ranking", "cold start", "diversidad", "journey"],
    }}
    takeaways={classTwentyFiveTakeaways}
    nextClass={{
      title: "Clase 26 · Churn y propension de compra",
      body: "La siguiente sesion usa la misma logica de senales y accion diferenciada para trabajar riesgo, recompra y expansion comercial."
    }}
    question="Si tuvieras que recomendar algo en tu contexto, que deberia optimizar primero: discovery, conversion, canasta o retencion?"
  />
);

const ClassTwentySixSyllabus = () => (
  <CourseSyllabusSlide
    activeClass={26}
    sessionTitle="Clase 26 · Churn y propension de compra"
    sessionSummary="La clase conecta scores de riesgo y propension con intervenciones concretas sobre retencion, recompra, cross-sell y winback."
  />
);

const ClassTwentySixHero = () => (
  <SessionHeroSlide
    badge="Clase 26 · Churn y propension de compra"
    title="Un score comercial vale cuando organiza una mejor intervencion y no cuando solo llena el CRM de probabilidades."
    summary="La clase muestra que churn, recompra y propension crean valor cuando se combinan con economics, umbrales y playbooks que distinguen a quien actuar, como y con que intensidad."
    bullets={[
      {
        title: "Target y tratamiento van juntos",
        body: "No alcanza con predecir riesgo o compra; hace falta definir la respuesta que tendra cada umbral del score.",
      },
      {
        title: "No todo cliente merece el mismo esfuerzo",
        body: "Valor, etapa y causa probable del comportamiento cambian mucho la intervencion correcta.",
      },
      {
        title: "Sin incrementalidad, el score se engaña solo",
        body: "Muchas acciones parecen utiles aunque el cliente igual iba a comprar o quedarse sin necesidad de intervenir.",
      },
      {
        title: "Puente hacia series temporales",
        body: "La siguiente clase cambia del cliente al tiempo para pensar patrones, shocks y validacion temporal con mas criterio.",
      },
    ]}
    chips={["churn", "propension", "economics", "playbook"]}
    spotlight={{
      label: "Filtro de la clase",
      value: "Probabilidad que cambia la accion",
      body: "El score correcto se convierte en una cola distinta, un canal distinto o una intensidad distinta de contacto segun valor y riesgo.",
      points: ["umbral", "tratamiento", "feedback"],
    }}
  />
);

const ClassTwentySixWorkbench = () => (
  <TabbedProcessWorkbenchSlide
    profiles={classTwentySixPropensityProfiles}
    ariaLabel="Escenarios de churn y propension"
    headerLabel="Scoring comercial"
  />
);

const ClassTwentySixDrivers = () => (
  <CourseCardGridSlide
    intro="Comportamiento, experiencia, valor y respuesta previa ayudan a construir scores mas utiles que una foto estatica del cliente."
    items={classTwentySixDriverCards}
    columns={4}
  />
);

const ClassTwentySixInterventions = () => (
  <CourseCardGridSlide
    intro="La intervencion correcta depende de economics, valor, timing y canal; no todos los problemas se resuelven con descuento o mas contacto."
    items={classTwentySixInterventionCards}
    columns={4}
  />
);

const ClassTwentySixRulesSlide = () => (
  <SplitChecklistSlide
    intro="Los modelos de churn y propension fallan cuando no tienen tratamiento real, cuando usan targets difusos o cuando nadie mide si la accion cambia algo de verdad."
    leftTitle="Errores comunes"
    leftItems={classTwentySixAntiPatterns}
    rightTitle="Reglas utiles"
    rightItems={classTwentySixRules}
    note="La probabilidad gana valor cuando organiza una accion diferenciada y aprende del resultado de esa accion."
  />
);

const ClassTwentySixRoadmap = () => (
  <CourseCardGridSlide
    intro="Esta secuencia ayuda a elegir un problema de riesgo o propension, armar economics y pilotear el score junto con su tratamiento diferencial."
    items={classTwentySixRoadmapCards}
    columns={4}
  />
);

const ClassTwentySixClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Lo que deberia quedar despues de churn y propension",
      body: "El mejor score comercial no termina en una probabilidad. Termina en una mejor cola de accion, con economics claros y aprendizaje sobre que intervencion realmente funciona.",
      tags: ["churn", "propension", "umbral", "tratamiento"],
    }}
    takeaways={classTwentySixTakeaways}
    nextClass={{
      title: "Clase 27 · Series temporales",
      body: "La siguiente sesion cambia del cliente al tiempo para pensar tendencia, estacionalidad, shocks y validacion temporal."
    }}
    question="En tu contexto, donde ves hoy mas valor potencial: prevenir fuga, impulsar recompra, hacer cross-sell o recuperar clientes perdidos?"
  />
);

const ClassTwentySevenSyllabus = () => (
  <CourseSyllabusSlide
    activeClass={27}
    sessionTitle="Clase 27 · Series temporales"
    sessionSummary="La clase ordena como pensar datos en el tiempo: tendencia, estacionalidad, shocks, jerarquia y validacion temporal antes de elegir modelo."
  />
);

const ClassTwentySevenHero = () => (
  <SessionHeroSlide
    badge="Clase 27 · Series temporales"
    title="Pensar en series temporales es entender patron y cambio antes de pensar en el algoritmo."
    summary="La clase instala la gramatica base del tiempo: nivel, tendencia, calendario, shocks y jerarquia, para que el alumno pueda leer mejor un forecast y discutir cuando realmente agrega valor."
    bullets={[
      {
        title: "El tiempo cambia la lectura del dato",
        body: "Una serie necesita respetar orden, ventana y comparacion temporal para que la evaluacion tenga sentido.",
      },
      {
        title: "No todo es tendencia suave",
        body: "Calendario, promo y rupturas pueden explicar mas del comportamiento que una linea general de crecimiento o caida.",
      },
      {
        title: "La jerarquia importa",
        body: "Total, region, canal o producto pueden pedir niveles distintos de lectura segun donde viva la decision.",
      },
      {
        title: "Puente hacia ARIMA y Prophet",
        body: "La siguiente clase usa esta base para comparar dos familias clasicas de forecasting con mucha mas precision conceptual.",
      },
    ]}
    chips={["series", "estacionalidad", "shocks", "validacion temporal"]}
    spotlight={{
      label: "Filtro de la clase",
      value: "Patron antes que tecnica",
      body: "La mejor forma de entrar a forecasting es describir que domina la serie y que ventana necesita el negocio, no correr directo a una libreria."
      ,points: ["horizon", "calendar", "baseline"],
    }}
  />
);

const ClassTwentySevenMap = () => (
  <TabbedSignalMapSlide
    items={classTwentySevenSeriesProfiles}
    scoreLabels={["Frecuencia", "Legibilidad", "Robustez"]}
    ariaLabel="Arquetipos de series temporales"
    detailLabel="Patron temporal"
  />
);

const ClassTwentySevenDecomposition = () => (
  <CourseCardGridSlide
    intro="Nivel, calendario, residuo y jerarquia ayudan a separar el comportamiento temporal en piezas que despues vuelven mas defendible el forecast."
    items={classTwentySevenDecompositionCards}
    columns={4}
  />
);

const ClassTwentySevenValidation = () => (
  <CourseCardGridSlide
    intro="La validacion temporal necesita respetar rolling windows, horizonte, baseline y cambios de contexto para no fabricar una falsa confianza."
    items={classTwentySevenValidationCards}
    columns={4}
  />
);

const ClassTwentySevenRulesSlide = () => (
  <SplitChecklistSlide
    intro="Las series se vuelven engañosas cuando se ignora el calendario, se rompen las ventanas de tiempo o se modela al nivel equivocado solo por comodidad tecnica."
    leftTitle="Errores comunes"
    leftItems={classTwentySevenAntiPatterns}
    rightTitle="Reglas utiles"
    rightItems={classTwentySevenRules}
    note="Horizonte, baseline y patron temporal son tres preguntas previas a casi cualquier conversacion util sobre forecasting."
  />
);

const ClassTwentySevenRoadmap = () => (
  <CourseCardGridSlide
    intro="Esta secuencia ayuda a abrir una serie temporal con mejor criterio antes de saltar a tecnicas o librerias especificas."
    items={classTwentySevenRoadmapCards}
    columns={4}
  />
);

const ClassTwentySevenClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Lo que deberia quedar despues de series temporales",
      body: "La serie correcta se entiende mejor cuando el alumno puede nombrar tendencia, estacionalidad, shocks, jerarquia y forma de validacion antes de hablar de modelos concretos.",
      tags: ["series", "calendar", "horizon", "baseline"],
    }}
    takeaways={classTwentySevenTakeaways}
    nextClass={{
      title: "Clase 28 · ARIMA y Prophet",
      body: "La siguiente sesion compara familias clasicas de forecasting con esta base ya ordenada sobre patron temporal y horizonte."
    }}
    question="En un dato de tu contexto que cambia con el tiempo, que pesa mas hoy: tendencia, estacionalidad, un shock puntual o una jerarquia complicada?"
  />
);

const ClassTwentyEightSyllabus = () => (
  <CourseSyllabusSlide
    activeClass={28}
    sessionTitle="Clase 28 · ARIMA y Prophet"
    sessionSummary="La clase compara tecnicas clasicas de forecasting usando baseline, estructura temporal, mantenimiento y horizonte como criterios reales de eleccion."
  />
);

const ClassTwentyEightHero = () => (
  <SessionHeroSlide
    badge="Clase 28 · ARIMA y Prophet"
    title="ARIMA y Prophet se entienden mejor cuando dejan de sonar a marca y pasan a ser respuestas a una estructura temporal concreta."
    summary="La clase toma la gramatica de series temporales y la aterriza a baseline, ARIMA, SARIMA y Prophet para mostrar que la mejor eleccion combina calidad del ajuste con interpretacion y sostenibilidad operativa."
    bullets={[
      {
        title: "La baseline sigue mandando",
        body: "Comparar contra una referencia simple evita que la complejidad se vuelva un objetivo en si mismo.",
      },
      {
        title: "ARIMA pide disciplina temporal",
        body: "Cuando la serie esta bien preparada, la familia clasica puede ser muy util y defendible.",
      },
      {
        title: "Prophet no reemplaza criterio",
        body: "Ayuda con calendario y changepoints, pero igual necesita horizonte claro, comparacion honesta y monitoreo real.",
      },
      {
        title: "Puente hacia marketing aplicado",
        body: "La siguiente clase usa este criterio para mover presupuesto, mix y ritmo en optimizacion de campanas."
      },
    ]}
    chips={["ARIMA", "Prophet", "baseline", "forecasting"]}
    spotlight={{
      label: "Filtro de la clase",
      value: "Valor neto de la tecnica",
      body: "La mejor familia temporal es la que gana suficiente valor sobre la baseline y que el equipo realmente puede sostener en el tiempo.",
      points: ["horizon", "mantenimiento", "calendar"],
    }}
  />
);

const ClassTwentyEightMap = () => (
  <TabbedSignalMapSlide
    items={classTwentyEightModelProfiles}
    scoreLabels={["Interpretacion", "Flexibilidad", "Operacion"]}
    ariaLabel="Comparacion entre baseline, ARIMA y Prophet"
    detailLabel="Familia temporal"
  />
);

const ClassTwentyEightChoices = () => (
  <CourseCardGridSlide
    intro="Estas cuatro preguntas ordenan gran parte de la eleccion entre baseline, ARIMA, SARIMA y Prophet antes de entrar en tuning."
    items={classTwentyEightChoiceCards}
    columns={4}
  />
);

const ClassTwentyEightWorkflow = () => (
  <CourseCardGridSlide
    intro="La secuencia de trabajo adecuada parte de la serie y del horizonte, no de la herramienta."
    items={classTwentyEightWorkflowCards}
    columns={4}
  />
);

const ClassTwentyEightRulesSlide = () => (
  <SplitChecklistSlide
    intro="La eleccion entre familias de forecasting se rompe cuando se sigue una moda tecnica, se olvida la baseline o se ignoran shocks y mantenimiento real del sistema."
    leftTitle="Errores comunes"
    leftItems={classTwentyEightAntiPatterns}
    rightTitle="Reglas utiles"
    rightItems={classTwentyEightRules}
    note="La familia correcta no es la que suena mejor en teoria, sino la que gana valor neto sobre la baseline en la ventana que el negocio consume."
  />
);

const ClassTwentyEightRoadmap = () => (
  <CourseCardGridSlide
    intro="Esta secuencia ayuda a abrir un caso temporal comparando familias con mejor criterio sobre valor, interpretacion y mantenimiento."
    items={classTwentyEightRoadmapCards}
    columns={4}
  />
);

const ClassTwentyEightClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Lo que deberia quedar despues de ARIMA y Prophet",
      body: "ARIMA, SARIMA y Prophet se eligen mejor cuando el alumno puede compararlos contra una baseline honesta y contra el horizonte real de decision del negocio.",
      tags: ["ARIMA", "Prophet", "baseline", "horizon"],
    }}
    takeaways={classTwentyEightTakeaways}
    nextClass={{
      title: "Clase 29 · Optimizacion de campanas",
      body: "La siguiente sesion vuelve a growth para usar modelos y reglas en asignacion de presupuesto, audiencias y ritmo de campanas."
    }}
    question="En un forecast de tu contexto, te preocuparia mas hoy la precision, el mantenimiento o que el equipo realmente use la salida?"
  />
);

const ClassTwentyNineSyllabus = () => (
  <CourseSyllabusSlide
    activeClass={29}
    sessionTitle="Clase 29 · Optimizacion de campanas"
    sessionSummary="La clase lleva modelos y reglas al terreno de growth: presupuesto, audiencias, creatividad y pacing como decisiones continuas de optimizacion."
  />
);

const ClassTwentyNineHero = () => (
  <SessionHeroSlide
    badge="Clase 29 · Optimizacion de campanas"
    title="Optimizar campanas es mover dinero y atencion con mas criterio, no solo perseguir el ultimo numero que subio."
    summary="La clase muestra como combinar respuesta, saturacion, overlap, ritmo y restricciones del negocio para tomar decisiones de growth mas defendibles y menos reactivas."
    bullets={[
      {
        title: "La funcion de valor manda",
        body: "No toda campana optimiza lo mismo; puede importar conversion, revenue, CAC o un equilibrio entre varias metricas.",
      },
      {
        title: "Cadencia y ventana importan",
        body: "Ajustar demasiado rapido o demasiado lento puede ser igual de malo si la campana necesita otro ritmo para revelar su efecto.",
      },
      {
        title: "El sistema completo vale mas que el canal aislado",
        body: "Presupuesto, audiencias y creatividad deben leerse juntos para evitar canibalizacion o falsa atribucion.",
      },
      {
        title: "Puente hacia experimentacion",
        body: "La siguiente clase baja esta logica al terreno de A/B testing y personalizacion para validar cambios con mas disciplina."
      },
    ]}
    chips={["budget", "audiencias", "pacing", "incrementalidad"]}
    spotlight={{
      label: "Filtro de la clase",
      value: "Mover presupuesto con guardrails",
      body: "La optimizacion madura cuando la empresa sabe que quiere maximizar, con que limites y con que evidencia revisar si el cambio fue realmente incremental.",
      points: ["ROI", "saturacion", "overlap"],
    }}
  />
);

const ClassTwentyNineStudio = () => (
  <TabbedCaseStudioSlide
    items={classTwentyNineCampaignCases}
    ariaLabel="Casos de optimizacion de campanas"
    detailLabel="Palanca de growth"
  />
);

const ClassTwentyNineLevers = () => (
  <CourseCardGridSlide
    intro="Objetivo, restricciones, cadencia y feedback forman la anatomia minima de una optimizacion de campanas que realmente pueda sostenerse."
    items={classTwentyNineLeverCards}
    columns={4}
  />
);

const ClassTwentyNineSignals = () => (
  <CourseCardGridSlide
    intro="Spend, respuesta, saturacion, overlap e incrementalidad ayudan a que el ajuste de campanas se parezca mas a una disciplina y menos a una corazonada."
    items={classTwentyNineSignalCards}
    columns={4}
  />
);

const ClassTwentyNineRulesSlide = () => (
  <SplitChecklistSlide
    intro="La optimizacion de growth falla cuando corre detras del ultimo dato visible o cuando olvida restricciones y causalidad aproximada del sistema completo."
    leftTitle="Errores comunes"
    leftItems={classTwentyNineAntiPatterns}
    rightTitle="Reglas utiles"
    rightItems={classTwentyNineRules}
    note="Mejorar campanas no es perseguir microcambios; es definir una funcion de valor y mover mix, ritmo y presupuesto con criterio."
  />
);

const ClassTwentyNineRoadmap = () => (
  <CourseCardGridSlide
    intro="Esta secuencia ayuda a elegir una palanca de optimizacion, mapear sus limites y pilotear cambios con monitoreo mas inteligente."
    items={classTwentyNineRoadmapCards}
    columns={4}
  />
);

const ClassTwentyNineClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Lo que deberia quedar despues de optimizacion de campanas",
      body: "Una buena optimizacion de growth parte de un objetivo claro, respeta restricciones del negocio y aprende del sistema completo en vez de perseguir una metrica aislada."
      ,tags: ["growth", "budget", "incrementalidad", "cadencia"],
    }}
    takeaways={classTwentyNineTakeaways}
    nextClass={{
      title: "Clase 30 · A/B testing y personalizacion",
      body: "La siguiente sesion usa testing para validar cambios de experiencia y decidir cuando personalizar de verdad."
    }}
    question="En tus decisiones de marketing, que pesa mas hoy: a quien impactar, cuanto gastar, que mensaje usar o cuando ajustar la campana?"
  />
);

const ClassThirtySyllabus = () => (
  <CourseSyllabusSlide
    activeClass={30}
    sessionTitle="Clase 30 · A/B testing y personalizacion"
    sessionSummary="La clase cierra la fase aplicada mostrando como validar cambios de experiencia y decidir cuando escalar una personalizacion."
  />
);

const ClassThirtyHero = () => (
  <SessionHeroSlide
    badge="Clase 30 · A/B testing y personalizacion"
    title="Experimentar bien es aprender con disciplina que cambio mueve valor y para quien."
    summary="La clase conecta testing con personalizacion para que el alumno pueda distinguir entre variantes lanzadas por intuicion y experimentos que realmente producen aprendizaje accionable."
    bullets={[
      {
        title: "Hipotesis antes que variante",
        body: "El test serio empieza con una razon clara de por que un cambio deberia mover una metrica o una experiencia.",
      },
      {
        title: "Control y guardrails sostienen credibilidad",
        body: "Sin jerarquia de metricas, ventana y control claros, el resultado pierde mucha fuerza interpretativa.",
      },
      {
        title: "Personalizar no siempre conviene",
        body: "Vale la pena solo donde la accion correcta cambia de verdad y donde mantener esa complejidad tiene sentido economico.",
      },
      {
        title: "Puente al proyecto final",
        body: "La siguiente clase usa todo lo anterior para ayudar a los alumnos a elegir y plantear su proyecto integrador."
      },
    ]}
    chips={["A/B testing", "personalizacion", "uplift", "guardrails"]}
    spotlight={{
      label: "Filtro de la clase",
      value: "Aprendizaje que cambia la experiencia",
      body: "El experimento correcto no solo dice que variante gano; dice que se aprendio, para quien vale y si eso justifica escalar una personalizacion."
      ,points: ["hipotesis", "control", "segmentos"],
    }}
  />
);

const ClassThirtyWorkbench = () => (
  <TabbedProcessWorkbenchSlide
    profiles={classThirtyExperimentProfiles}
    ariaLabel="Escenarios de experimentacion y personalizacion"
    headerLabel="Testing por contexto"
  />
);

const ClassThirtyEvidence = () => (
  <CourseCardGridSlide
    intro="Control, jerarquia de metricas, volumen y lectura por segmento vuelven mucho mas defendible el aprendizaje del experimento."
    items={classThirtyEvidenceCards}
    columns={4}
  />
);

const ClassThirtyPersonalization = () => (
  <CourseCardGridSlide
    intro="Timing, segmentacion, saturacion y aprendizaje continuo ayudan a decidir cuando personalizar vale la pena y cuando solo agrega ruido."
    items={classThirtyPersonalizationCards}
    columns={4}
  />
);

const ClassThirtyRulesSlide = () => (
  <SplitChecklistSlide
    intro="Testing y personalizacion se rompen cuando no hay hipotesis, cuando se corta por ansiedad o cuando se personaliza mas de lo que la experiencia y el economics pueden sostener."
    leftTitle="Errores comunes"
    leftItems={classThirtyAntiPatterns}
    rightTitle="Reglas utiles"
    rightItems={classThirtyRules}
    note="El valor del experimento no es solo elegir un ganador; es dejar una mejor regla o una mejor siguiente pregunta para iterar."
  />
);

const ClassThirtyRoadmap = () => (
  <CourseCardGridSlide
    intro="Esta secuencia ayuda a convertir una intuicion sobre experiencia o growth en un experimento y luego en una personalizacion defendible."
    items={classThirtyRoadmapCards}
    columns={4}
  />
);

const ClassThirtyClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Lo que deberia quedar despues de A/B testing y personalizacion",
      body: "Experimentar y personalizar bien exige hipotesis, control, guardrails y criterio para decidir donde la diferencia entre usuarios realmente amerita una experiencia distinta.",
      tags: ["testing", "control", "uplift", "segmentacion"],
    }}
    takeaways={classThirtyTakeaways}
    nextClass={{
      title: "Clase 31 · Proyecto integrador: planteamiento",
      body: "La siguiente sesion usa todo el recorrido del diplomado para ayudar a cada alumno a convertir un problema real en un proyecto defendible."
    }}
    question="Si tuvieras que testear una sola mejora en tu contexto, que hipotesis te daria mas aprendizaje util hoy?"
  />
);

const ClassThirtyOneSyllabus = () => (
  <CourseSyllabusSlide
    activeClass={31}
    sessionTitle="Clase 31 · Proyecto integrador: planteamiento"
    sessionSummary="La clase ayuda a elegir frente, problema, datos, artefacto y piloto para convertir el curso en un proyecto realista y defendible."
  />
);

const ClassThirtyOneHero = () => (
  <SessionHeroSlide
    badge="Clase 31 · Proyecto integrador: planteamiento"
    title="Un buen proyecto final empieza por un problema con dolor visible y una decision que valga la pena mejorar."
    summary="La clase reorganiza todo el diplomado en una estructura practica para que cada alumno pueda elegir un frente, acotar el problema y proponer un artefacto con datos y piloto plausibles."
    bullets={[
      {
        title: "Problema y usuario primero",
        body: "La propuesta mejora mucho cuando queda claro quien sufre el dolor y quien usaria la salida del proyecto.",
      },
      {
        title: "Datos plausibles antes que ambicion tecnica",
        body: "Conviene apoyarse en fuentes accesibles y bien entendidas antes que en integraciones imaginarias o demasiado lejanas.",
      },
      {
        title: "El artefacto debe encajar con la decision",
        body: "Dashboard, score, forecast, recomendador o playbook tienen sentido solo si se sienten inevitables dado el problema.",
      },
      {
        title: "Puente al cierre final",
        body: "La siguiente clase toma este planteamiento y lo convierte en una presentacion final con rubrica, piloto y siguiente paso."
      },
    ]}
    chips={["proyecto", "alcance", "piloto", "artefacto"]}
    spotlight={{
      label: "Filtro de la clase",
      value: "Problema pequeño, valor defendible",
      body: "El mejor proyecto de curso no resuelve toda la empresa; resuelve una decision concreta con suficiente evidencia para justificar un piloto.",
      points: ["usuario", "metrica", "datos plausibles"],
    }}
  />
);

const ClassThirtyOneWorkbench = () => (
  <TabbedProcessWorkbenchSlide
    profiles={classThirtyOneProjectProfiles}
    ariaLabel="Rutas para el proyecto integrador"
    headerLabel="Ruta de proyecto"
  />
);

const ClassThirtyOneDeliverables = () => (
  <CourseCardGridSlide
    intro="Problema, datos, artefacto y piloto forman la columna vertebral de un proyecto final que suene serio y accionable."
    items={classThirtyOneDeliverableCards}
    columns={4}
  />
);

const ClassThirtyOneAlignment = () => (
  <CourseCardGridSlide
    intro="Sponsor, usuario, guardrails y siguiente paso ayudan a que el proyecto se parezca a una propuesta real y no solo a un ejercicio academico."
    items={classThirtyOneAlignmentCards}
    columns={4}
  />
);

const ClassThirtyOneRulesSlide = () => (
  <SplitChecklistSlide
    intro="Los proyectos se debilitan cuando intentan resolver demasiado, cuando fuerzan tecnica por moda o cuando no dejan claro quien usaria la salida y bajo que limites."
    leftTitle="Errores comunes"
    leftItems={classThirtyOneAntiPatterns}
    rightTitle="Reglas utiles"
    rightItems={classThirtyOneRules}
    note="El planteamiento gana fuerza cuando combina foco, datos plausibles, artefacto coherente y un piloto que un equipo podria imaginar usando."
  />
);

const ClassThirtyOneRoadmap = () => (
  <CourseCardGridSlide
    intro="Esta secuencia ayuda a elegir el frente del proyecto y a salir de la clase con una historia base lista para la presentacion final."
    items={classThirtyOneRoadmapCards}
    columns={4}
  />
);

const ClassThirtyOneClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Lo que deberia quedar despues del planteamiento del proyecto",
      body: "Un proyecto integrador serio deja claro problema, usuario, metrica, datos plausibles, artefacto propuesto y una forma realista de pilotear sin esconder limites."
      ,tags: ["proyecto", "scope", "datos", "piloto"],
    }}
    takeaways={classThirtyOneTakeaways}
    nextClass={{
      title: "Clase 32 · Proyecto integrador final",
      body: "La siguiente sesion cierra el curso con rubrica, narrativa de presentacion y plan de continuidad para los proyectos del grupo."
    }}
    question="Si hoy tuvieras que elegir el frente de tu proyecto final, te irias por growth, operacion, cliente o riesgo? Y por que ese primero?"
  />
);

const ClassThirtyTwoSyllabus = () => (
  <CourseSyllabusSlide
    activeClass={32}
    sessionTitle="Clase 32 · Proyecto integrador final"
    sessionSummary="La ultima clase ordena la rubrica final del proyecto: valor, datos, solucion, adopcion y siguiente paso para salir del diplomado con una propuesta defendible."
  />
);

const ClassThirtyTwoHero = () => (
  <SessionHeroSlide
    badge="Clase 32 · Proyecto integrador final"
    title="El cierre del diplomado no pide una promesa gigante; pide una historia clara, creible y lista para pilotear."
    summary="La clase final ayuda a presentar los proyectos con una narrativa fuerte sobre problema, datos, solucion, piloto y guardrails para que el aprendizaje del curso termine en una propuesta accionable."
    bullets={[
      {
        title: "Valor claro antes que complejidad",
        body: "La defensa del proyecto empieza mostrando por que el problema importa y que decision mejoraria si la propuesta se usara.",
      },
      {
        title: "Datos y limites con honestidad",
        body: "Reconocer supuestos y huecos vuelve el proyecto mas creible que fingir una perfeccion imposible.",
      },
      {
        title: "Artefacto y uso real",
        body: "La propuesta gana fuerza cuando deja ver el dashboard, score, forecast o recomendador dentro de un flujo concreto.",
      },
      {
        title: "Cierre con continuidad",
        body: "El ultimo paso natural del proyecto es un piloto pequeno, bien medido y con guardrails claros para seguir aprendiendo."
      },
    ]}
    chips={["proyecto final", "rubrica", "piloto", "continuidad"]}
    spotlight={{
      label: "Filtro de la clase",
      value: "Historia simple y defendible",
      body: "Problema, datos, solucion, piloto y guardrails son suficientes para demostrar dominio del curso si la historia esta bien construida.",
      points: ["valor", "credibilidad", "siguiente paso"],
    }}
  />
);

const ClassThirtyTwoRubric = () => (
  <TabbedSignalMapSlide
    items={classThirtyTwoRubricProfiles}
    scoreLabels={["Peso", "Madurez", "Defensibilidad"]}
    ariaLabel="Rubrica del proyecto final"
    detailLabel="Dimension de evaluacion"
  />
);

const ClassThirtyTwoPresentation = () => (
  <CourseCardGridSlide
    intro="Estas cuatro piezas ayudan a contar el proyecto final con foco, evidencia y una demo suficiente para volverlo creible."
    items={classThirtyTwoPresentationCards}
    columns={4}
  />
);

const ClassThirtyTwoScale = () => (
  <CourseCardGridSlide
    intro="Del aula al piloto hay una ruta corta pero concreta: owner, guardrails, adopcion y aprendizaje continuo."
    items={classThirtyTwoScaleCards}
    columns={4}
  />
);

const ClassThirtyTwoRulesSlide = () => (
  <SplitChecklistSlide
    intro="El proyecto final se debilita cuando promete demasiado, esconde sus limites o no deja claro quien usaria la salida dentro de un flujo real."
    leftTitle="Errores comunes"
    leftItems={classThirtyTwoAntiPatterns}
    rightTitle="Reglas utiles"
    rightItems={classThirtyTwoRules}
    note="Cerrar bien el curso es sintetizar una historia simple, honesta y suficientemente accionable para justificar un primer piloto."
  />
);

const ClassThirtyTwoRoadmap = () => (
  <CourseCardGridSlide
    intro="Esta secuencia final ayuda a defender el proyecto y a dejar un siguiente paso natural para continuar despues del diplomado."
    items={classThirtyTwoRoadmapCards}
    columns={4}
  />
);

const ClassThirtyTwoClosing = () => (
  <TakeawaysSlide
    focus={{
      title: "Lo que deberia quedar al cerrar el diplomado",
      body: "El curso termina dejando una forma clara de pensar IA aplicada: partir de un problema real, usar datos con criterio, elegir una salida coherente y pilotear con guardrails visibles.",
      tags: ["criterio", "datos", "piloto", "continuidad"],
    }}
    takeaways={classThirtyTwoTakeaways}
    nextClass={{
      title: "Cierre del diplomado",
      body: "El siguiente paso natural es llevar uno de estos proyectos a un piloto pequeno en contexto real y seguir aprendiendo con evidencia, no con intuicion sola."
    }}
    question="Si tuvieras que llevar una sola idea del curso a un piloto real durante las proximas semanas, cual seria y que evidencia te haria confiar para arrancar?"
  />
);

const CourseOutlineOverview = () => (
  <CourseSyllabusSlide
    sessionTitle="Introducción práctica a la IA"
    sessionSummary="Esta seccion concentra la ruta completa del curso para que no se repita dentro de cada clase y el alumno pueda revisarla cuando quiera."
  />
);

function renumberKicker(kicker, position) {
  const parts = kicker.split("·");
  const label = parts.length > 1 ? parts.slice(1).join("·").trim() : kicker;
  return `${String(position).padStart(2, "0")} · ${label}`;
}

function stripRepeatedSyllabus(deck) {
  if (deck.sections[0] !== "Temario" || deck.slides.length < 2) {
    return deck;
  }

  const nextSlides = deck.slides.slice(1).map((slide, index) => ({
    ...slide,
    kicker: renumberKicker(slide.kicker, index + 1),
  }));

  return {
    ...deck,
    sections: deck.sections.slice(1),
    slides: nextSlides,
  };
}

const classDecks = [
  {
    id: "class-1",
    label: "Clase 1",
    sidebarTitle: "Introducción práctica a la IA",
    sidebarNote: "Panorama general, objetivos, modulos y sistema de valor del curso.",
    sections: ["Temario", "Bienvenida", "Contexto", "Perfil", "Resultados", "Ruta", "Sistema", "Casos", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "Como vamos a avanzar en Introducción práctica a la IA.",
        subtitle: "La primera vista del curso ya muestra la ruta completa para que el grupo entienda el orden del aprendizaje.",
        Component: ClassOneSyllabus,
      },
      {
        kicker: "02 · Bienvenida",
        title: "Introducción práctica a la IA.",
        subtitle: "Apertura del curso: por que existe, que problema resuelve y como se va a trabajar.",
        Component: IntroSlide,
      },
      {
        kicker: "03 · Contexto",
        title: "La IA ya dejo de ser innovacion aislada.",
        subtitle: "Inversion, adopcion y uso empresarial muestran que ya es infraestructura competitiva.",
        Component: GrowthSlide,
      },
      {
        kicker: "04 · Perfil",
        title: "A quien le sirve este diplomado.",
        subtitle: "El curso esta pensado para quienes toman decisiones, analizan datos o necesitan escalar procesos con criterio.",
        Component: AudienceSlide,
      },
      {
        kicker: "05 · Resultado",
        title: "Que deberia poder hacer el alumno al terminar.",
        subtitle: "La meta es tomar mejores decisiones con datos, automatizacion y modelos aplicados.",
        Component: OutcomesSlide,
      },
      {
        kicker: "06 · Ruta",
        title: "Como se organiza el diplomado.",
        subtitle: "Tres modulos conectados y un proyecto integrador para aterrizar el aprendizaje en un caso real.",
        Component: ModulesSlide,
      },
      {
        kicker: "07 · Sistema De Valor",
        title: "La IA crea valor cuando conecta datos, analisis, prediccion y accion.",
        subtitle: "Este es el marco que va a ordenar todo el curso antes de hablar de herramientas puntuales.",
        Component: ValueChainSlide,
      },
      {
        kicker: "08 · Casos",
        title: "Donde ya se ve impacto en negocio.",
        subtitle: "Marketing, ventas, servicio y e-commerce muestran ejemplos claros para abrir la conversacion con el grupo.",
        Component: CasesSlide,
      },
      {
        kicker: "09 · Hoja De Ruta",
        title: "Como abrir la clase y con que deberia salir el grupo hoy.",
        subtitle: "Agenda, expectativa y pregunta de arranque para convertir la primera sesion en una conversacion util.",
        Component: RoadmapSlide,
      },
    ],
  },
  {
    id: "class-2",
    label: "Clase 2",
    sidebarTitle: "Que es IA y que no es",
    sidebarNote: "Tipos de IA, limites, oportunidades y criterios para decidir cuando usarla.",
    sections: ["Temario", "Apertura", "Ideas Base", "Mitos", "Tipos", "Donde Empezar", "Limites", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "La ruta completa antes de profundizar.",
        subtitle: "Se vuelve a mostrar el mapa del curso para ubicar la clase dentro del avance total.",
        Component: ClassTwoSyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "Que es IA aplicada y por que importa distinguirla del hype.",
        subtitle: "La clase instala definiciones utiles para negocio antes de saltar a herramientas o marcas.",
        Component: ClassTwoHero,
      },
      {
        kicker: "03 · Ideas Base",
        title: "Cuatro ideas para explicar IA sin humo.",
        subtitle: "Datos, patrones, prediccion e impacto son la base para discutir cualquier caso serio.",
        Component: ClassTwoFoundations,
      },
      {
        kicker: "04 · Criterio",
        title: "Lo que no es IA vs lo que si deberia hacer.",
        subtitle: "La diferencia entre deslumbrar y realmente crear valor aparece en como se formula el problema.",
        Component: ClassTwoMythSlide,
      },
      {
        kicker: "05 · Tipos De IA",
        title: "No toda IA produce el mismo tipo de salida.",
        subtitle: "Clasificar, predecir, recomendar y generar sirven para capas distintas del negocio.",
        Component: ClassTwoTypes,
      },
      {
        kicker: "06 · Donde Empezar",
        title: "Las mejores oportunidades tienen datos, repeticion y una decision clara.",
        subtitle: "Marketing, ventas, servicio y operaciones suelen ser las puertas de entrada mas practicas.",
        Component: ClassTwoOpportunities,
      },
      {
        kicker: "07 · Limites",
        title: "Por que tantos proyectos con IA no pasan de la diapositiva.",
        subtitle: "Datos, proceso, gobernanza y adopcion definen si el caso madura o se queda en piloto eterno.",
        Component: ClassTwoRisks,
      },
      {
        kicker: "08 · Cierre",
        title: "Con que debe salir el alumno despues de esta clase.",
        subtitle: "El objetivo es instalar un filtro de evaluacion antes de mirar casos y herramientas concretas.",
        Component: ClassTwoClosing,
      },
    ],
  },
  {
    id: "class-3",
    label: "Clase 3",
    sidebarTitle: "Casos reales por area",
    sidebarNote: "Aplicaciones concretas en marketing, ventas y servicio con foco en decision e impacto.",
    sections: ["Temario", "Apertura", "Marketing", "Ventas", "Servicio", "Casos", "Workshop", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "Donde encaja esta clase dentro de la ruta completa.",
        subtitle: "El grupo ve como la teoria del criterio da paso a casos concretos por area.",
        Component: ClassThreeSyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "Los casos reales convierten la teoria en decision operativa.",
        subtitle: "La pregunta ya no es que es IA, sino donde mueve una variable importante dentro de una empresa.",
        Component: ClassThreeHero,
      },
      {
        kicker: "03 · Marketing",
        title: "Como entra la IA en marketing sin perder direccion estrategica.",
        subtitle: "Segmentacion, contenido, presupuesto y personalizacion son las cuatro puertas de entrada mas visibles.",
        Component: ClassThreeMarketing,
      },
      {
        kicker: "04 · Ventas",
        title: "Ventas mejora cuando la IA ayuda a priorizar antes de actuar.",
        subtitle: "Lead scoring, forecast, churn y upsell conectan mejor la senal con la accion comercial.",
        Component: ClassThreeSales,
      },
      {
        kicker: "05 · Servicio",
        title: "En servicio el valor aparece cuando baja friccion y sube contexto.",
        subtitle: "Clasificacion, autoservicio y copilots internos son buenos puntos de entrada.",
        Component: ClassThreeService,
      },
      {
        kicker: "06 · Casos Reales",
        title: "Ejemplos que el alumno puede reconocer como patrones repetibles.",
        subtitle: "La utilidad pedagogica esta en mostrar estructuras de valor, no solo nombres de empresas famosas.",
        Component: ClassThreeCases,
      },
      {
        kicker: "07 · Workshop",
        title: "Como detectar una oportunidad propia dentro del trabajo real.",
        subtitle: "Se fuerza a traducir inspiracion en alcance, datos, decision e impacto esperado.",
        Component: ClassThreeWorkshop,
      },
      {
        kicker: "08 · Cierre",
        title: "Lo que deberia quedar instalado antes de hablar de madurez.",
        subtitle: "El grupo ya puede distinguir un caso atractivo de un caso verdaderamente implementable.",
        Component: ClassThreeClosing,
      },
    ],
  },
  {
    id: "class-4",
    label: "Clase 4",
    sidebarTitle: "Mapa de madurez de IA",
    sidebarNote: "Como priorizar por readiness real y no por entusiasmo o moda interna.",
    sections: ["Temario", "Apertura", "Madurez", "Diagnostico", "Senales", "Criterios", "Roadmap", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "Donde se ubica la clase dentro del avance del diplomado.",
        subtitle: "El grupo ve que despues de entender la IA y sus casos, ahora toca decidir donde conviene entrar primero.",
        Component: ClassFourSyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "Madurez de IA = capacidad de capturar valor sin desordenarse.",
        subtitle: "La clase instala un criterio practico para priorizar casos segun senal, proceso, adopcion y gobernanza.",
        Component: ClassFourHero,
      },
      {
        kicker: "03 · Mapa De Madurez",
        title: "Una empresa no pasa de cero a escala por entusiasmo.",
        subtitle: "Este mapa muestra como cambian los riesgos y el siguiente movimiento segun la etapa en la que realmente esta la organizacion.",
        Component: ClassFourMaturity,
      },
      {
        kicker: "04 · Diagnostico",
        title: "No todas las areas tienen el mismo readiness para empezar.",
        subtitle: "Marketing, ventas, servicio y operaciones piden entradas distintas. El punto es elegir la mas defendible para arrancar.",
        Component: ClassFourReadiness,
      },
      {
        kicker: "05 · Senales",
        title: "Que tiene que estar presente para que el caso merezca prioridad.",
        subtitle: "Si faltan estas senales, lo mas probable es que la empresa este confundiendo interes con capacidad real.",
        Component: ClassFourSignals,
      },
      {
        kicker: "06 · Criterios",
        title: "Errores comunes al priorizar vs reglas para elegir bien.",
        subtitle: "La mayor parte de los proyectos mal elegidos fallan antes de ejecutar: fallan en la forma en que fueron seleccionados.",
        Component: ClassFourPriorityRules,
      },
      {
        kicker: "07 · Roadmap",
        title: "Como abrir un caso inicial en 90 dias con disciplina.",
        subtitle: "La salida de esta clase es una secuencia defendible para pasar de idea a caso repetible sin abrir demasiados frentes.",
        Component: ClassFourRoadmap,
      },
      {
        kicker: "08 · Cierre",
        title: "Con que criterio deberia salir el alumno despues de priorizar.",
        subtitle: "La clase deja un marco para elegir donde empezar y enlaza con la siguiente sesion de automatizacion empresarial.",
        Component: ClassFourClosing,
      },
    ],
  },
  {
    id: "class-5",
    label: "Clase 5",
    sidebarTitle: "Automatizacion empresarial",
    sidebarNote: "Bots, RPA, asistentes y agentes con foco en fit de tarea, control y retorno.",
    sections: ["Temario", "Apertura", "Modos", "Casos", "Senales", "Reglas", "Roadmap", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "Donde entra la automatizacion dentro de la ruta del diplomado.",
        subtitle: "El grupo ya entendio casos y madurez. Ahora toca bajar eso a tareas repetitivas, niveles de control y automatizacion concreta.",
        Component: ClassFiveSyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "Automatizar bien es elegir la tarea y el control correctos.",
        subtitle: "La clase instala una forma mas dura de pensar bots, RPA, asistentes y agentes sin romantizar tecnologia.",
        Component: ClassFiveHero,
      },
      {
        kicker: "03 · Modos",
        title: "No todo flujo repetitivo necesita la misma automatizacion.",
        subtitle: "Este mapa interactivo compara cuando conviene usar bots, RPA, asistentes o agentes segun estructura, juicio y riesgo.",
        Component: ClassFiveModes,
      },
      {
        kicker: "04 · Casos",
        title: "Como se ve la automatizacion en casos empresariales defendibles.",
        subtitle: "Soporte, leads, backoffice y copilots internos sirven para discutir fit, controles y retorno esperado.",
        Component: ClassFiveStudio,
      },
      {
        kicker: "05 · Senales",
        title: "Que tiene que existir para automatizar sin autoengano.",
        subtitle: "Volumen, estabilidad, excepciones visibles y medicion clara son senales mucho mas utiles que el entusiasmo del sponsor.",
        Component: ClassFiveSignals,
      },
      {
        kicker: "06 · Reglas",
        title: "Errores comunes al automatizar vs principios para hacerlo bien.",
        subtitle: "El mayor riesgo no suele ser tecnico: suele ser elegir la tarea equivocada o quitar control demasiado pronto.",
        Component: ClassFiveRulesSlide,
      },
      {
        kicker: "07 · Roadmap",
        title: "Como abrir un caso de automatizacion sin caer en piloto eterno.",
        subtitle: "La secuencia recomendada va de mapear tarea a integrar observabilidad con disciplina y foco.",
        Component: ClassFiveRoadmap,
      },
      {
        kicker: "08 · Cierre",
        title: "Con que criterio deberia salir el alumno despues de esta clase.",
        subtitle: "La clase deja una lectura util para decidir que tarea automatizar, con que nivel de control y como medir si valio la pena.",
        Component: ClassFiveClosing,
      },
    ],
  },
  {
    id: "class-6",
    label: "Clase 6",
    sidebarTitle: "Diseno de procesos automatizables",
    sidebarNote: "Como pasar de idea de automatizacion a flujo legible, gobernable y repetible.",
    sections: ["Temario", "Apertura", "Workbench", "Frontera", "Checklist", "Reglas", "Blueprint", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "La automatizacion madura necesita arquitectura de proceso.",
        subtitle: "El grupo ve que despues de hablar de tareas y tecnologia, ahora toca disenar el flujo para que realmente sea automatizable.",
        Component: ClassSixSyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "Proceso automatizable = flujo con capas, handoffs y guardrails claros.",
        subtitle: "La clase instala una plantilla para disenar procesos sin esconder excepciones ni confundir regla con juicio.",
        Component: ClassSixHero,
      },
      {
        kicker: "03 · Workbench",
        title: "Un mismo proceso contiene tramos que se automatizan distinto.",
        subtitle: "Este slide interactivo permite leer captura, validacion, decision y seguimiento dentro de procesos reales de negocio.",
        Component: ClassSixWorkbench,
      },
      {
        kicker: "04 · Frontera",
        title: "Automatizar, asistir, aprobar o mantener humano no es lo mismo.",
        subtitle: "La frontera correcta depende de predictibilidad, ambiguedad y costo del error en cada tipo de decision.",
        Component: ClassSixBoundary,
      },
      {
        kicker: "05 · Checklist",
        title: "Que debe estar claro antes de disenar el flujo final.",
        subtitle: "Este checklist evita construir automatizaciones sobre procesos que todavia no tienen salida, input o control bien definidos.",
        Component: ClassSixChecks,
      },
      {
        kicker: "06 · Reglas",
        title: "Errores de diseño vs principios para construir procesos repetibles.",
        subtitle: "Muchos fallos atribuidos a la herramienta en realidad nacen de una arquitectura de proceso floja o ambigua.",
        Component: ClassSixRulesSlide,
      },
      {
        kicker: "07 · Blueprint",
        title: "Plantilla para convertir una friccion operativa en proceso automatizable.",
        subtitle: "La salida de la clase es una secuencia de diseño que el alumno puede aplicar sobre su propio contexto laboral.",
        Component: ClassSixBlueprint,
      },
      {
        kicker: "08 · Cierre",
        title: "Con que mirada deberia salir el alumno despues de esta clase.",
        subtitle: "El objetivo es que ya pueda distinguir entre idea de automatizacion y proceso realmente listo para ser automatizado.",
        Component: ClassSixClosing,
      },
    ],
  },
  {
    id: "class-7",
    label: "Clase 7",
    sidebarTitle: "Analisis del consumidor con IA",
    sidebarNote: "Como leer senales, segmentos y journey para tomar mejores decisiones sobre clientes.",
    sections: ["Temario", "Apertura", "Senales", "Segmentos", "Journey", "Reglas", "Framework", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "Donde entra el analisis del consumidor dentro del diplomado.",
        subtitle: "Despues de ordenar madurez y automatizacion, la clase baja a la lectura del cliente con senales accionables.",
        Component: ClassSevenSyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "Analizar consumidor bien es leer patrones que cambian decisiones.",
        subtitle: "La clase instala una forma mas ejecutiva de mirar comportamiento, valor, servicio y contexto con ayuda de IA.",
        Component: ClassSevenHero,
      },
      {
        kicker: "03 · Senales",
        title: "No toda data del consumidor tiene el mismo poder de lectura.",
        subtitle: "Este mapa interactivo compara familias de senales segun cobertura, intencion y capacidad de accion.",
        Component: ClassSevenSignals,
      },
      {
        kicker: "04 · Segmentos",
        title: "Las lecturas mas utiles no salen solo de demografia.",
        subtitle: "Clusters, valor, etapa y propension ayudan a construir segmentos mas cercanos a una decision real.",
        Component: ClassSevenSegments,
      },
      {
        kicker: "05 · Journey",
        title: "La misma senal cambia segun momento del recorrido del cliente.",
        subtitle: "Descubrimiento, evaluacion, compra y postventa piden lecturas distintas y acciones distintas.",
        Component: ClassSevenJourney,
      },
      {
        kicker: "06 · Reglas",
        title: "Errores comunes al analizar consumidores vs principios utiles.",
        subtitle: "El riesgo mas frecuente es terminar con analitica linda pero poco accionable para negocio o experiencia.",
        Component: ClassSevenRulesSlide,
      },
      {
        kicker: "07 · Framework",
        title: "Como pasar de senales dispersas a una lectura que active decisiones.",
        subtitle: "La clase deja una secuencia util para capturar, unir, detectar patrones y activar acciones concretas.",
        Component: ClassSevenFramework,
      },
      {
        kicker: "08 · Cierre",
        title: "Con que mirada deberia salir el alumno despues de esta clase.",
        subtitle: "El objetivo es que pueda leer consumidores con mejor criterio y defender por que una senal merece accion.",
        Component: ClassSevenClosing,
      },
    ],
  },
  {
    id: "class-8",
    label: "Clase 8",
    sidebarTitle: "Fidelizacion y personalizacion",
    sidebarNote: "Como transformar lectura de consumidor en siguiente mejor accion, timing y retencion rentable.",
    sections: ["Temario", "Apertura", "Journey", "Capas", "Economics", "Reglas", "Roadmap", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "La fidelizacion aparece despues de entender bien al consumidor.",
        subtitle: "Esta clase convierte senales y segmentos en activacion, retencion y personalizacion mas rentable.",
        Component: ClassEightSyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "Personalizar bien es decidir mejor a quien intervenir, cuando y con que propuesta.",
        subtitle: "La clase ordena fidelizacion y personalizacion como un sistema de decisiones, no como una serie de mensajes aislados.",
        Component: ClassEightHero,
      },
      {
        kicker: "03 · Journey",
        title: "Cada etapa pide una siguiente mejor accion distinta.",
        subtitle: "Este slide interactivo muestra como cambia trigger, canal, guardrail y objetivo entre onboarding, habito, expansion, riesgo y winback.",
        Component: ClassEightJourney,
      },
      {
        kicker: "04 · Capas",
        title: "La personalizacion real vive en varias capas a la vez.",
        subtitle: "Mensaje, oferta, timing y canal se combinan para crear intervenciones mas pertinentes y menos masivas.",
        Component: ClassEightLayers,
      },
      {
        kicker: "05 · Economics",
        title: "Fidelizar importa porque mejora los economics del negocio.",
        subtitle: "Retencion, LTV, costo de intervencion y priorizacion del esfuerzo son el corazon economico de esta clase.",
        Component: ClassEightEconomics,
      },
      {
        kicker: "06 · Reglas",
        title: "Errores frecuentes al personalizar vs principios utiles para retener mejor.",
        subtitle: "La mayor parte de los errores viene de intervenir igual a todos o de medir vanidad en vez de uplift real.",
        Component: ClassEightRulesSlide,
      },
      {
        kicker: "07 · Roadmap",
        title: "Como pasar de analisis de consumidor a un sistema de personalizacion accionable.",
        subtitle: "La secuencia recomendada va desde elegir una etapa del journey hasta activar, medir y realimentar la decision siguiente.",
        Component: ClassEightRoadmap,
      },
      {
        kicker: "08 · Cierre",
        title: "Con que criterio deberia salir el alumno despues de esta clase.",
        subtitle: "El objetivo es que ya pueda defender por que una intervencion de fidelizacion merece esfuerzo y como medir si realmente funciona.",
        Component: ClassEightClosing,
      },
    ],
  },
  {
    id: "class-9",
    label: "Clase 9",
    sidebarTitle: "Etica, privacidad y gobernanza",
    sidebarNote: "Como usar IA con limites claros, owners visibles y control proporcional al riesgo.",
    sections: ["Temario", "Apertura", "Frentes", "Principios", "Privacidad", "Reglas", "Roadmap", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "La Fase 2 arranca ordenando riesgo, control y confianza.",
        subtitle: "Despues de los fundamentos y casos, el curso entra a como usar IA sin romper privacidad, compliance ni criterio operativo.",
        Component: ClassNineSyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "Gobernar IA bien es dejar claros los limites antes de escalar el uso.",
        subtitle: "La clase instala un marco pragmatico para pasar de preocupacion abstracta a decisiones concretas sobre datos, vendors y owners.",
        Component: ClassNineHero,
      },
      {
        kicker: "03 · Frentes",
        title: "No todo uso de IA pide el mismo nivel de control.",
        subtitle: "Este mapa interactivo compara privacidad, decisiones sensibles, automatizacion y terceros segun impacto, sensibilidad y madurez de control.",
        Component: ClassNineGovernance,
      },
      {
        kicker: "04 · Principios",
        title: "Los principios utiles aterrizan mejor que la etica abstracta.",
        subtitle: "Finalidad, minimizacion, responsabilidad y explicacion suficiente sirven para discutir casos reales sin volver la clase demasiado teorica.",
        Component: ClassNinePrinciples,
      },
      {
        kicker: "05 · Privacidad",
        title: "Privacidad aparece dentro del flujo, no solo en un documento legal.",
        subtitle: "Consentimiento, acceso, retencion, terceros e incidentes se vuelven concretos cuando se los mira sobre el uso real del dato.",
        Component: ClassNinePrivacy,
      },
      {
        kicker: "06 · Reglas",
        title: "Errores frecuentes al gobernar IA vs reglas para hacerlo util.",
        subtitle: "La mayor trampa es construir una gobernanza que suena bien pero no sirve para decidir nada en operacion.",
        Component: ClassNineRulesSlide,
      },
      {
        kicker: "07 · Roadmap",
        title: "Como pasar de inquietud por riesgo a una capa de gobierno usable.",
        subtitle: "La secuencia recomendada inventaria casos, clasifica sensibilidad, asigna owners y ajusta controles sobre casos reales.",
        Component: ClassNineRoadmap,
      },
      {
        kicker: "08 · Cierre",
        title: "Con que criterio deberia salir el alumno despues de esta clase.",
        subtitle: "El objetivo es que ya pueda mirar un caso de IA y preguntar con claridad que se puede hacer, con que limites y quien responde.",
        Component: ClassNineClosing,
      },
    ],
  },
  {
    id: "class-10",
    label: "Clase 10",
    sidebarTitle: "Sesgos y riesgo reputacional",
    sidebarNote: "Como detectar diferencias injustas, explicarlas y controlarlas antes de que se vuelvan dano visible.",
    sections: ["Temario", "Apertura", "Casos", "Fuentes", "Impacto", "Reglas", "Respuesta", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "Despues de gobernanza, toca mirar el riesgo mas sensible en la practica.",
        subtitle: "La clase entra a sesgos y fairness para mostrar como una salida aparentemente util puede volverse reputacionalmente fragil.",
        Component: ClassTenSyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "Un sistema puede rendir bien y seguir siendo dificil de defender.",
        subtitle: "La clase instala la idea de que performance y aceptabilidad no son lo mismo cuando la IA cambia trato o acceso sobre personas.",
        Component: ClassTenHero,
      },
      {
        kicker: "03 · Casos",
        title: "El sesgo se entiende mejor cuando se lo mira sobre decisiones reales.",
        subtitle: "Este studio interactivo compara scoring, soporte, ofertas y talento para mostrar donde nace el problema y como se vuelve visible.",
        Component: ClassTenBias,
      },
      {
        kicker: "04 · Fuentes",
        title: "Muchas veces el sesgo ya venia escondido en el pasado.",
        subtitle: "Muestra, labels, proxies y feedback loops son las fuentes mas comunes de diferencia injusta aunque el modelo parezca tecnico y neutral.",
        Component: ClassTenSources,
      },
      {
        kicker: "05 · Impacto",
        title: "El riesgo reputacional aparece cuando el sesgo se vuelve visible.",
        subtitle: "Exclusion, opacidad, escalada social y perdida de confianza interna explican por que este tema importa mas alla del dato puro.",
        Component: ClassTenImpact,
      },
      {
        kicker: "06 · Reglas",
        title: "Errores comunes al tratar fairness vs reglas utiles para controlarlo.",
        subtitle: "La idea es salir de una vision puramente tecnica y entrar en una lectura de negocio, control y posibilidad de apelacion.",
        Component: ClassTenRulesSlide,
      },
      {
        kicker: "07 · Respuesta",
        title: "Como detectar, diagnosticar y corregir antes de que el problema explote.",
        subtitle: "La clase deja una secuencia practica para revisar diferencias, abrir metricas por grupo y ajustar sistema y politica.",
        Component: ClassTenResponse,
      },
      {
        kicker: "08 · Cierre",
        title: "Con que mirada deberia salir el alumno despues de esta clase.",
        subtitle: "El objetivo es que ya pueda distinguir entre un sistema que solo parece funcionar y uno que tambien es defendible.",
        Component: ClassTenClosing,
      },
    ],
  },
  {
    id: "class-11",
    label: "Clase 11",
    sidebarTitle: "Datos de negocio y fuentes",
    sidebarNote: "Como mapear sistemas, owners y joins para saber que dato sirve a que decision.",
    sections: ["Temario", "Apertura", "Workbench", "Capas", "Fuentes", "Reglas", "Blueprint", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "La capa de datos arranca por entender fuentes y no por modelar a ciegas.",
        subtitle: "La clase ubica al alumno frente a los sistemas, las definiciones y los joins que sostienen cualquier analisis posterior.",
        Component: ClassElevenSyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "La mejor fuente es la que mejora una decision real con suficiente claridad.",
        subtitle: "La clase baja el entusiasmo por dashboards y tablas a una pregunta mas util: que dato sirve para que accion y bajo que owner.",
        Component: ClassElevenHero,
      },
      {
        kicker: "03 · Workbench",
        title: "Cada area del negocio pide una lectura distinta de sus fuentes.",
        subtitle: "Este workbench interactivo permite comparar marketing, ventas, servicio y operaciones segun sistemas, eventos, joins y decision habilitada.",
        Component: ClassElevenWorkbench,
      },
      {
        kicker: "04 · Capas",
        title: "No todo dato explica lo mismo.",
        subtitle: "Resultado, comportamiento, operacion y contexto aportan piezas distintas para leer mejor clientes, procesos o valor.",
        Component: ClassElevenLayers,
      },
      {
        kicker: "05 · Fuentes",
        title: "Las fuentes cambian por confiabilidad, riqueza y costo de integracion.",
        subtitle: "Systems of record, engagement, feedback humano y contexto externo cumplen roles distintos y no siempre conviene mezclarlos todos.",
        Component: ClassElevenSources,
      },
      {
        kicker: "06 · Reglas",
        title: "Errores comunes al trabajar con fuentes vs principios utiles.",
        subtitle: "La mayoria de los problemas aparece cuando nadie define owners, significados o accionabilidad de lo que se esta conectando.",
        Component: ClassElevenRulesSlide,
      },
      {
        kicker: "07 · Blueprint",
        title: "Como pasar de intuicion sobre una fuente a arquitectura util de datos.",
        subtitle: "La secuencia deja una forma concreta de elegir decision, inventariar fuentes, aceptar gaps y conectar el dato con rutina real.",
        Component: ClassElevenBlueprint,
      },
      {
        kicker: "08 · Cierre",
        title: "Con que criterio deberia salir el alumno despues de esta clase.",
        subtitle: "El objetivo es que ya pueda discutir fuentes de negocio con mucho mas criterio sobre uso, calidad y ownership.",
        Component: ClassElevenClosing,
      },
    ],
  },
  {
    id: "class-12",
    label: "Clase 12",
    sidebarTitle: "Recoleccion de datos",
    sidebarNote: "Como disenar eventos, campos, identidad y QA para una captura realmente util.",
    sections: ["Temario", "Apertura", "Workbench", "Principios", "Calidad", "Reglas", "Roadmap", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "La capa de datos sigue en su origen: como se recolecta bien.",
        subtitle: "La clase transforma el mapa de fuentes en decisiones concretas sobre eventos, campos, consentimiento y salud de captura.",
        Component: ClassTwelveSyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "Recolectar bien es construir la futura capacidad de decidir mejor.",
        subtitle: "La clase instala una disciplina de captura orientada a decision, taxonomia, ownership y sostenibilidad operativa.",
        Component: ClassTwelveHero,
      },
      {
        kicker: "03 · Workbench",
        title: "Cada capa de captura pide decisiones distintas de diseno.",
        subtitle: "Este workbench interactivo compara web/app, CRM, servicio y operaciones segun evento, atributos, identidad y QA.",
        Component: ClassTwelveWorkbench,
      },
      {
        kicker: "04 · Principios",
        title: "La captura correcta se disena con pocos principios muy claros.",
        subtitle: "Finalidad, taxonomia, identidad y monitoreo sirven para evitar desde el inicio gran parte del ruido posterior.",
        Component: ClassTwelvePrinciples,
      },
      {
        kicker: "05 · Calidad",
        title: "La captura vive o muere por su salud operativa.",
        subtitle: "Completitud, coherencia, estabilidad y uso real permiten detectar si el dato sigue representando bien el flujo o ya se degrado.",
        Component: ClassTwelveQuality,
      },
      {
        kicker: "06 · Reglas",
        title: "Errores comunes al recolectar datos vs reglas utiles para hacerlo bien.",
        subtitle: "La mayoria de los fallos nace por ansiedad de captura, mala taxonomia o ausencia de QA y ownership visibles.",
        Component: ClassTwelveRulesSlide,
      },
      {
        kicker: "07 · Roadmap",
        title: "Como disenar una capa de captura util antes de hablar de limpieza y calidad.",
        subtitle: "La secuencia recomendada define foco, taxonomia, identidad, QA y feedback de negocio en una sola ruta coherente.",
        Component: ClassTwelveRoadmap,
      },
      {
        kicker: "08 · Cierre",
        title: "Con que criterio deberia salir el alumno despues de esta clase.",
        subtitle: "El objetivo es que ya pueda justificar que vale la pena capturar, con que limites y como mantener esa captura saludable.",
        Component: ClassTwelveClosing,
      },
    ],
  },
  {
    id: "class-13",
    label: "Clase 13",
    sidebarTitle: "Limpieza y consistencia",
    sidebarNote: "Como corregir ruido, duplicados y definiciones rotas sin perder trazabilidad ni sentido de negocio.",
    sections: ["Temario", "Apertura", "Studio", "Problemas", "Consistencia", "Reglas", "Roadmap", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "La calidad del dato empieza por volverlo legible y consistente.",
        subtitle: "La clase ubica la limpieza como puente entre una captura cruda y una fuente que ya puede defender mejor una decision.",
        Component: ClassThirteenSyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "Limpiar bien es defender una version mas confiable del negocio.",
        subtitle: "La clase muestra que la limpieza importa porque cambia identidades, definiciones y lecturas futuras de valor, riesgo o rendimiento.",
        Component: ClassThirteenHero,
      },
      {
        kicker: "03 · Studio",
        title: "Cada tipo de fuente ensucia de manera distinta.",
        subtitle: "Este studio interactivo compara clientes, ventas, servicio y operaciones para mostrar problemas tipicos, palancas de correccion y guardrails de limpieza.",
        Component: ClassThirteenStudio,
      },
      {
        kicker: "04 · Problemas",
        title: "El ruido no siempre se ve igual, pero casi siempre rompe la decision despues.",
        subtitle: "Duplicados, faltantes, definiciones ambiguas y valores absurdos son cuatro formas frecuentes de degradar el dato antes de cualquier analisis serio.",
        Component: ClassThirteenIssues,
      },
      {
        kicker: "05 · Consistencia",
        title: "Sin reglas de consistencia no hay comparacion ni join confiable.",
        subtitle: "Identidad, catalogos, unidades y versionado permiten sostener una misma historia del negocio entre equipos y sistemas.",
        Component: ClassThirteenConsistency,
      },
      {
        kicker: "06 · Reglas",
        title: "Errores comunes al limpiar datos vs reglas utiles para hacerlo bien.",
        subtitle: "La limpieza vale mas cuando se hace con foco, trazabilidad y conexion directa con el origen del ruido y la decision futura.",
        Component: ClassThirteenRulesSlide,
      },
      {
        kicker: "07 · Roadmap",
        title: "Como abrir una iniciativa de limpieza sin convertirla en trabajo infinito.",
        subtitle: "La secuencia propone elegir entidad critica, definir reglas, validar sobre casos reales y volver a captura y ownership.",
        Component: ClassThirteenRoadmap,
      },
      {
        kicker: "08 · Cierre",
        title: "Con que criterio deberia salir el alumno despues de esta clase.",
        subtitle: "El objetivo es que ya pueda discutir limpieza de datos como una inversion en decision y no solo como higiene tecnica.",
        Component: ClassThirteenClosing,
      },
    ],
  },
  {
    id: "class-14",
    label: "Clase 14",
    sidebarTitle: "Calidad de datos",
    sidebarNote: "Como medir salud de fuentes criticas y convertir calidad en confianza operativa.",
    sections: ["Temario", "Apertura", "Dimensiones", "Monitoreo", "Impacto", "Reglas", "Roadmap", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "Despues de limpiar, toca sostener salud y confianza de forma continua.",
        subtitle: "La clase mueve la conversacion de correccion puntual a monitoreo, thresholds, owners y uso real del dato critico.",
        Component: ClassFourteenSyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "La calidad del dato importa porque define la calidad de la decision que lo usa.",
        subtitle: "La clase instala una mirada operativa sobre completitud, precision, oportunidad y consistencia conectadas con consumo real.",
        Component: ClassFourteenHero,
      },
      {
        kicker: "03 · Dimensiones",
        title: "No toda falla de calidad se ve ni se corrige igual.",
        subtitle: "Este mapa interactivo compara dimensiones de calidad segun impacto, visibilidad y esfuerzo para priorizar mejor donde entrar primero.",
        Component: ClassFourteenSignals,
      },
      {
        kicker: "04 · Monitoreo",
        title: "La calidad madura cuando deja scorecards, thresholds y responsables visibles.",
        subtitle: "Estas piezas permiten pasar de percepcion difusa a una practica continua de salud de fuente y respuesta operativa.",
        Component: ClassFourteenMonitoring,
      },
      {
        kicker: "05 · Impacto",
        title: "La calidad deja de ser tecnica cuando rompe forecast, fairness o automatizacion.",
        subtitle: "Este bloque muestra por que la salud del dato pesa sobre confianza ejecutiva, servicio y riesgo mucho mas de lo que parece.",
        Component: ClassFourteenImpact,
      },
      {
        kicker: "06 · Reglas",
        title: "Errores comunes al hablar de calidad vs reglas utiles para sostenerla.",
        subtitle: "La clave es medir donde el dato realmente mueve una decision y dejar playbooks claros de respuesta sobre problemas recurrentes.",
        Component: ClassFourteenRulesSlide,
      },
      {
        kicker: "07 · Roadmap",
        title: "Como convertir calidad de datos en una disciplina y no en una promesa.",
        subtitle: "La secuencia propone elegir dato critico, instrumentar checks, asignar owners y verificar tanto origen como consumo de la fuente.",
        Component: ClassFourteenRoadmap,
      },
      {
        kicker: "08 · Cierre",
        title: "Con que criterio deberia salir el alumno despues de esta clase.",
        subtitle: "El objetivo es que ya pueda mirar una fuente y preguntarse que dimension de calidad importa, quien responde y como se protege la confianza del numero.",
        Component: ClassFourteenClosing,
      },
    ],
  },
  {
    id: "class-15",
    label: "Clase 15",
    sidebarTitle: "Visualizacion para decision",
    sidebarNote: "Como convertir datos y KPIs en pantallas que prioricen, expliquen y orienten accion.",
    sections: ["Temario", "Apertura", "Studio", "Principios", "Elecciones", "Reglas", "Workflow", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "La siguiente capa no es mas datos: es mejor lectura para decidir.",
        subtitle: "La clase conecta confianza en la fuente con una pregunta clave: como mostrar el dato para que realmente cambie una accion o priorizacion.",
        Component: ClassFifteenSyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "Visualizar bien es diseñar una decision, no un mural de numeros.",
        subtitle: "La clase instala foco, contexto y jerarquia visual como base para dashboards y tableros mas utiles para negocio y operacion.",
        Component: ClassFifteenHero,
      },
      {
        kicker: "03 · Studio",
        title: "No todas las audiencias necesitan la misma visualizacion.",
        subtitle: "Este studio interactivo compara vistas ejecutivas, operativas, de growth y de riesgo segun pregunta, cadencia y nivel de detalle.",
        Component: ClassFifteenStudio,
      },
      {
        kicker: "04 · Principios",
        title: "Hay pocas reglas, pero cambian mucho la utilidad de un tablero.",
        subtitle: "Una pregunta principal, contexto claro, jerarquia visual y camino hacia la accion ordenan gran parte del problema.",
        Component: ClassFifteenPrinciples,
      },
      {
        kicker: "05 · Elecciones",
        title: "El tipo de visualizacion depende de la pregunta y no de la costumbre.",
        subtitle: "Tiempo, funnel, cohortes y dispersion sirven para cosas distintas y ayudan a evitar charts que informan poco o confunden.",
        Component: ClassFifteenChoices,
      },
      {
        kicker: "06 · Reglas",
        title: "Errores comunes al visualizar vs reglas utiles para decidir mejor.",
        subtitle: "Muchas pantallas fallan por saturacion y falta de contexto, no por falta de datos o de herramientas de BI.",
        Component: ClassFifteenRulesSlide,
      },
      {
        kicker: "07 · Workflow",
        title: "Como pasar de un KPI importante a una visualizacion realmente util.",
        subtitle: "La secuencia deja un metodo para definir audiencia, comparacion, jerarquia y validacion sobre la rutina real del equipo.",
        Component: ClassFifteenWorkflow,
      },
      {
        kicker: "08 · Cierre",
        title: "Con que criterio deberia salir el alumno despues de esta clase.",
        subtitle: "El objetivo es que ya pueda rediseñar una pantalla preguntando primero que decision debe habilitar y para quien.",
        Component: ClassFifteenClosing,
      },
    ],
  },
  {
    id: "class-16",
    label: "Clase 16",
    sidebarTitle: "Analisis exploratorio",
    sidebarNote: "Como leer tendencias, dispersion, segmentos y outliers para convertir datos en hipotesis utiles.",
    sections: ["Temario", "Apertura", "Workbench", "Patrones", "Hipotesis", "Reglas", "Framework", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "El cierre de la fase prepara la entrada a KPIs y dashboards mas ejecutivos.",
        subtitle: "La clase sintetiza fuentes, limpieza, calidad y visualizacion en una disciplina de exploracion que ayuda a descubrir patrones utiles para el negocio.",
        Component: ClassSixteenSyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "Explorar bien es ordenar preguntas y no decorar intuiciones previas.",
        subtitle: "La clase instala baseline, segmentos, tiempo y dispersion como base para descubrir hallazgos mas defendibles y accionables.",
        Component: ClassSixteenHero,
      },
      {
        kicker: "03 · Workbench",
        title: "Cada tipo de analisis exploratorio pide una ruta distinta.",
        subtitle: "Este workbench interactivo compara ventas, clientes, operaciones y marketing segun baseline, segmentos, outliers e hipotesis siguiente.",
        Component: ClassSixteenWorkbench,
      },
      {
        kicker: "04 · Patrones",
        title: "Distribucion, tendencia, cohortes y outliers ordenan gran parte del trabajo exploratorio serio.",
        subtitle: "Estas lecturas ayudan a separar ruido, cambio real y preguntas que merecen un siguiente analisis mas profundo.",
        Component: ClassSixteenPatterns,
      },
      {
        kicker: "05 · Hipotesis",
        title: "La salida madura del EDA no es una conclusion final, sino una mejor hipotesis.",
        subtitle: "Este bloque muestra como traducir un patron en una pregunta mas fuerte sobre cambio, segmentos, contexto y validacion posterior.",
        Component: ClassSixteenHypotheses,
      },
      {
        kicker: "06 · Reglas",
        title: "Errores comunes al explorar datos vs reglas utiles para hacerlo con criterio.",
        subtitle: "El riesgo mas frecuente es usar el EDA para confirmar ideas previas o para quedarse en una descripcion que no conduce a accion ni aprendizaje.",
        Component: ClassSixteenRulesSlide,
      },
      {
        kicker: "07 · Framework",
        title: "Como convertir una exploracion en una siguiente validacion util.",
        subtitle: "La secuencia deja un metodo para definir pregunta, baseline, comparaciones, anomalias e hipotesis antes de pasar a la fase siguiente del curso.",
        Component: ClassSixteenFramework,
      },
      {
        kicker: "08 · Cierre",
        title: "Con que criterio deberia salir el alumno despues de esta clase.",
        subtitle: "El objetivo es que ya pueda usar el analisis exploratorio para encontrar patrones y abrir mejores validaciones, no solo para mirar datos por curiosidad.",
        Component: ClassSixteenClosing,
      },
    ],
  },
  {
    id: "class-17",
    label: "Clase 17",
    sidebarTitle: "KPIs ejecutivos",
    sidebarNote: "Como diseñar indicadores que liderazgo realmente pueda usar para decidir, priorizar y gobernar mejor.",
    sections: ["Temario", "Apertura", "Mapa", "Diseno", "Lectura", "Reglas", "Framework", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "La Fase 3 empieza convirtiendo datos y analisis en indicadores que lideres puedan usar de verdad.",
        subtitle: "La clase instala una base comun para diseñar KPIs con definicion clara, ownership y relacion directa con decisiones ejecutivas.",
        Component: ClassSeventeenSyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "Un KPI vale cuando cambia una decision y no cuando solo decora una pantalla.",
        subtitle: "La apertura baja el filtro principal de la sesion: diseñar desde la pregunta ejecutiva, no desde la disponibilidad de numeros.",
        Component: ClassSeventeenHero,
      },
      {
        kicker: "03 · Mapa",
        title: "Crecimiento, eficiencia, cliente y riesgo organizan gran parte de la lectura ejecutiva.",
        subtitle: "Este mapa interactivo compara familias de KPIs segun impacto, frecuencia de uso y necesidad de control.",
        Component: ClassSeventeenSignals,
      },
      {
        kicker: "04 · Diseno",
        title: "La anatomia minima de un buen KPI ejecutivo.",
        subtitle: "Formula, contexto, decision y uso recurrente convierten un numero en un indicador serio y no en una estadistica suelta.",
        Component: ClassSeventeenMetrics,
      },
      {
        kicker: "05 · Lectura",
        title: "Leading, lagging, segmentacion y ownership cambian la utilidad del indicador.",
        subtitle: "Esta capa muestra como una canasta corta puede gobernar mejor que una pantalla saturada de datos sin jerarquia.",
        Component: ClassSeventeenDecisions,
      },
      {
        kicker: "06 · Reglas",
        title: "Errores comunes al diseñar indicadores vs reglas utiles para volverlos accionables.",
        subtitle: "La clase distingue reporte de KPI y muestra por que comparacion, owner y cadencia pesan tanto como la formula misma.",
        Component: ClassSeventeenRulesSlide,
      },
      {
        kicker: "07 · Framework",
        title: "Como pasar de una reunion confusa a una canasta ejecutiva de KPIs bien diseñada.",
        subtitle: "La secuencia propone un metodo simple para elegir indicadores, contexto y responsables antes de construir el dashboard.",
        Component: ClassSeventeenRoadmap,
      },
      {
        kicker: "08 · Cierre",
        title: "Con que criterio deberia salir el alumno despues de esta clase.",
        subtitle: "El objetivo es que ya pueda distinguir indicadores que gobiernan de otros que solo reportan actividad sin mover decisiones.",
        Component: ClassSeventeenClosing,
      },
    ],
  },
  {
    id: "class-18",
    label: "Clase 18",
    sidebarTitle: "Dashboards y storytelling",
    sidebarNote: "Como transformar KPIs en narrativas visuales segun audiencia, contexto y decision esperada.",
    sections: ["Temario", "Apertura", "Workbench", "Narrativa", "Evidencia", "Reglas", "Workflow", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "La clase conecta KPIs con visualizacion y narrativa para decision.",
        subtitle: "La sesion muestra como pasar de una lista de indicadores a una historia clara para direccion, operacion, growth o board.",
        Component: ClassEighteenSyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "Un dashboard fuerte cuenta la historia minima necesaria para decidir mejor.",
        subtitle: "La apertura instala el filtro central: pregunta principal, senal titular y accion sugerida segun audiencia.",
        Component: ClassEighteenHero,
      },
      {
        kicker: "03 · Workbench",
        title: "Cada audiencia necesita una narrativa distinta.",
        subtitle: "Este workbench compara direccion, operacion, growth y board para mostrar como cambia la historia sin cambiar la base de datos.",
        Component: ClassEighteenWorkbench,
      },
      {
        kicker: "04 · Narrativa",
        title: "Los principios que sostienen una buena historia con datos.",
        subtitle: "La capa muestra como abrir, jerarquizar y cerrar una lectura sin convertir el dashboard en un deposito de graficos.",
        Component: ClassEighteenNarrative,
      },
      {
        kicker: "05 · Evidencia",
        title: "No toda evidencia pesa igual dentro del relato.",
        subtitle: "Titular, comparacion, corte explicativo y accion siguiente ayudan a sostener una narrativa mas ejecutiva y menos dispersa.",
        Component: ClassEighteenEvidence,
      },
      {
        kicker: "06 · Reglas",
        title: "Errores comunes al contar datos vs reglas utiles para ordenar una historia.",
        subtitle: "La clase muestra por que demasiadas preguntas o demasiados slides suelen debilitar la lectura en vez de fortalecerla.",
        Component: ClassEighteenRulesSlide,
      },
      {
        kicker: "07 · Workflow",
        title: "Como construir una narrativa visual desde la audiencia hasta la accion.",
        subtitle: "La secuencia deja un metodo para diseñar una historia clara antes de preocuparse por la estetica del tablero.",
        Component: ClassEighteenWorkflow,
      },
      {
        kicker: "08 · Cierre",
        title: "Con que criterio deberia salir el alumno despues de esta clase.",
        subtitle: "El objetivo es que ya pueda rediseñar dashboards y decks preguntando primero que historia debe contarse y para quien.",
        Component: ClassEighteenClosing,
      },
    ],
  },
  {
    id: "class-19",
    label: "Clase 19",
    sidebarTitle: "Casos retail",
    sidebarNote: "Demanda, pricing, surtido y loyalty como palancas donde la IA aplicada impacta margen, disponibilidad y experiencia.",
    sections: ["Temario", "Apertura", "Studio", "Palancas", "Senales", "Reglas", "Roadmap", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "Retail aterriza la teoria en decisiones comerciales muy visibles.",
        subtitle: "La sesion usa casos de demanda, precio, surtido y loyalty para mostrar como la IA se conecta con margen y experiencia.",
        Component: ClassNineteenSyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "Retail mezcla disponibilidad, margen y experiencia en una misma decision.",
        subtitle: "La apertura ordena la clase alrededor de palancas que capturan valor rapido cuando la señal llega al equipo correcto con suficiente tiempo.",
        Component: ClassNineteenHero,
      },
      {
        kicker: "03 · Studio",
        title: "Cuatro casos retail para leer donde vive el valor.",
        subtitle: "Este studio interactivo compara demanda, pricing, surtido y loyalty segun dificultad, cadencia y riesgos tipicos de implementacion.",
        Component: ClassNineteenStudio,
      },
      {
        kicker: "04 · Palancas",
        title: "Disponibilidad, margen, experiencia y cadencia sostienen la lectura retail.",
        subtitle: "Estas capas ayudan a entender por que optimizar una sola variable rara vez alcanza en comercio y consumo.",
        Component: ClassNineteenLevers,
      },
      {
        kicker: "05 · Senales",
        title: "Que datos suelen volver fuerte un caso retail.",
        subtitle: "Venta, stock, promo, canal, calendario y cliente ayudan a construir decisiones comerciales con mas criterio.",
        Component: ClassNineteenSignals,
      },
      {
        kicker: "06 · Reglas",
        title: "Errores comunes al aplicar IA en retail vs reglas utiles para que el caso funcione.",
        subtitle: "La clase muestra por que las optimizaciones parciales suelen romper margen, disponibilidad o experiencia si no se diseñan con mas amplitud.",
        Component: ClassNineteenRulesSlide,
      },
      {
        kicker: "07 · Roadmap",
        title: "Como elegir, pilotear y escalar una palanca retail defendible.",
        subtitle: "La secuencia ayuda a empezar por el caso con mejor mezcla de dolor, datos y capacidad real de accion.",
        Component: ClassNineteenRoadmap,
      },
      {
        kicker: "08 · Cierre",
        title: "Con que criterio deberia salir el alumno despues de esta clase.",
        subtitle: "El objetivo es que ya pueda leer retail como un sistema de decisiones conectadas y no como islas separadas de precio o inventario.",
        Component: ClassNineteenClosing,
      },
    ],
  },
  {
    id: "class-20",
    label: "Clase 20",
    sidebarTitle: "Casos banca y servicios",
    sidebarNote: "Fraude, scoring, cobranza y servicio como casos donde riesgo, fairness y trazabilidad pesan mucho mas.",
    sections: ["Temario", "Apertura", "Studio", "Contexto", "Senales", "Reglas", "Roadmap", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "Los casos sensibles cambian la forma de leer IA aplicada.",
        subtitle: "La sesion muestra como se transforman los criterios cuando entran friccion, fairness, regulacion y gobierno operativo.",
        Component: ClassTwentySyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "Precision tecnica sin gobierno no alcanza en dominios sensibles.",
        subtitle: "La apertura instala el filtro principal de la clase: equilibrar riesgo, experiencia legitima y capacidad de correccion.",
        Component: ClassTwentyHero,
      },
      {
        kicker: "03 · Studio",
        title: "Cuatro casos sensibles para ver donde vive la tension real.",
        subtitle: "Este studio compara fraude, credito, cobranza y servicio segun complejidad, friccion y riesgos tipicos de implementacion.",
        Component: ClassTwentyStudio,
      },
      {
        kicker: "04 · Contexto",
        title: "Lo que cambia cuando fairness, reputacion y compliance pesan mas.",
        subtitle: "Estas capas hacen visible por que banca y servicios necesitan mas trazabilidad, thresholds y puntos de apelacion.",
        Component: ClassTwentyConstraints,
      },
      {
        kicker: "05 · Senales",
        title: "Que datos vuelven mas robusto un caso sensible.",
        subtitle: "Historico, canal, exposicion y feedback humano ayudan a sostener decisiones mas defendibles en contextos regulados.",
        Component: ClassTwentySignals,
      },
      {
        kicker: "06 · Reglas",
        title: "Errores comunes al aplicar IA en dominios sensibles vs reglas utiles para gobernarla mejor.",
        subtitle: "La clase diferencia entre modelos que lucen bien en laboratorio y sistemas que pueden escalar con fairness, supervision y trazabilidad."
        ,Component: ClassTwentyRulesSlide,
      },
      {
        kicker: "07 · Roadmap",
        title: "Como pilotear un caso sensible sin perder control ni credibilidad.",
        subtitle: "La secuencia ayuda a elegir el caso correcto, mapear thresholds y escalar con monitoreo y gobierno claros.",
        Component: ClassTwentyRoadmap,
      },
      {
        kicker: "08 · Cierre",
        title: "Con que criterio deberia salir el alumno despues de esta clase.",
        subtitle: "El objetivo es que ya pueda evaluar casos sensibles preguntando no solo por precision, sino por fairness, costo de friccion y capacidad de correccion.",
        Component: ClassTwentyClosing,
      },
    ],
  },
  {
    id: "class-21",
    label: "Clase 21",
    sidebarTitle: "Casos e-commerce",
    sidebarNote: "Ranking, recomendacion, promo y fulfillment como palancas donde relevancia y economics deben convivir.",
    sections: ["Temario", "Apertura", "Studio", "Journey", "Senales", "Reglas", "Roadmap", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "La clase baja IA aplicada al journey completo de e-commerce.",
        subtitle: "Discovery, conversion, canasta y post compra sirven como mapa para leer donde la personalizacion y la prediccion crean valor real.",
        Component: ClassTwentyOneSyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "Relevancia y economics tienen que mejorar juntos en la experiencia digital.",
        subtitle: "La apertura instala el criterio principal de la sesion: no optimizar discovery o conversion sin mirar margen, stock y confianza post compra.",
        Component: ClassTwentyOneHero,
      },
      {
        kicker: "03 · Studio",
        title: "Cuatro casos digitales para ver como la IA toca el journey.",
        subtitle: "Este studio interactivo compara ranking, recomendacion, promo y promesa de entrega segun valor, dificultad y riesgos mas comunes.",
        Component: ClassTwentyOneStudio,
      },
      {
        kicker: "04 · Journey",
        title: "Discovery, conversion, canasta y post compra deben leerse como sistema.",
        subtitle: "Estas capas ayudan a ordenar la experiencia digital mas alla del KPI aislado de CTR o conversion inmediata.",
        Component: ClassTwentyOneLayers,
      },
      {
        kicker: "05 · Senales",
        title: "Sesion, historico, catalogo y logistica hacen mas fuerte la personalizacion.",
        subtitle: "La clase muestra que las mejores experiencias nacen de combinar contexto de cliente con capacidad real de la operacion.",
        Component: ClassTwentyOneSignals,
      },
      {
        kicker: "06 · Reglas",
        title: "Errores comunes al optimizar e-commerce vs reglas utiles para sostener una mejor experiencia.",
        subtitle: "La sesion diferencia entre mejoras cortas de conversion y sistemas que sostienen confianza, variedad, margen y fulfillment.",
        Component: ClassTwentyOneRulesSlide,
      },
      {
        kicker: "07 · Roadmap",
        title: "Como elegir un tramo del journey, pilotearlo y escalarlo con guardrails claros.",
        subtitle: "La secuencia ayuda a empezar por discovery, conversion, canasta o post compra segun donde hoy viva la mayor friccion del negocio.",
        Component: ClassTwentyOneRoadmap,
      },
      {
        kicker: "08 · Cierre",
        title: "Con que criterio deberia salir el alumno despues de esta clase.",
        subtitle: "El objetivo es que ya pueda leer e-commerce como una cadena de decisiones donde cliente, catalogo y operacion se afectan mutuamente.",
        Component: ClassTwentyOneClosing,
      },
    ],
  },
  {
    id: "class-22",
    label: "Clase 22",
    sidebarTitle: "Introduccion a modelos predictivos",
    sidebarNote: "Regresion, clasificacion, ranking y forecasting como familias basicas segun la forma de la decision.",
    sections: ["Temario", "Apertura", "Mapa", "Lifecycle", "Metricas", "Reglas", "Roadmap", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "La clase abstrae los casos vistos en familias de modelos predictivos.",
        subtitle: "La sesion deja un mapa simple para elegir mejor entre estimar, clasificar, ordenar o prever una serie futura.",
        Component: ClassTwentyTwoSyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "La familia correcta aparece cuando se entiende la forma de la salida que el negocio necesita.",
        subtitle: "La apertura ordena la clase alrededor de target, baseline y costo del error antes de entrar a tecnicas puntuales.",
        Component: ClassTwentyTwoHero,
      },
      {
        kicker: "03 · Mapa",
        title: "Regresion, clasificacion, ranking y forecasting en una sola vista.",
        subtitle: "Este mapa interactivo compara familias de modelos segun explicabilidad, madurez y accionabilidad en negocio.",
        Component: ClassTwentyTwoSignals,
      },
      {
        kicker: "04 · Lifecycle",
        title: "El modelo serio empieza en una pregunta de negocio y termina en consumo y monitoreo.",
        subtitle: "La clase ordena las piezas minimas del ciclo de vida para que el alumno pueda discutir modelos con mejor criterio.",
        Component: ClassTwentyTwoLifecycle,
      },
      {
        kicker: "05 · Metricas",
        title: "Como leer performance mas alla de una accuracy bonita.",
        subtitle: "Baseline, costo del error, drift y adopcion ayudan a evaluar mejor si un modelo realmente agrega valor.",
        Component: ClassTwentyTwoMetrics,
      },
      {
        kicker: "06 · Reglas",
        title: "Errores comunes al hablar de modelos predictivos vs reglas utiles para elegir mejor.",
        subtitle: "La sesion muestra por que la fascinacion tecnica suele confundir la eleccion cuando no existe una forma clara de decision y consumo.",
        Component: ClassTwentyTwoRulesSlide,
      },
      {
        kicker: "07 · Roadmap",
        title: "Como pasar de una idea de modelo a una eleccion mas defendible de familia y evaluacion.",
        subtitle: "La secuencia ayuda a definir target, baseline y forma de monitoreo antes de profundizar en casos especificos.",
        Component: ClassTwentyTwoRoadmap,
      },
      {
        kicker: "08 · Cierre",
        title: "Con que criterio deberia salir el alumno despues de esta clase.",
        subtitle: "El objetivo es que ya pueda identificar que familia de modelo conviene segun la forma de la pregunta y el costo del error.",
        Component: ClassTwentyTwoClosing,
      },
    ],
  },
  {
    id: "class-23",
    label: "Clase 23",
    sidebarTitle: "Prediccion de demanda",
    sidebarNote: "Como diseñar forecasting util con horizonte, granularidad, drivers y consumo operativo claros.",
    sections: ["Temario", "Apertura", "Workbench", "Drivers", "Horizonte", "Reglas", "Roadmap", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "La clase aterriza forecasting a decisiones que equipos reales puedan consumir.",
        subtitle: "La sesion baja la prediccion de demanda a retail, staffing, supply y media para mostrar como cambia segun contexto.",
        Component: ClassTwentyThreeSyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "Un forecast solo vale cuando su ventana coincide con la decision que el negocio puede tomar.",
        subtitle: "La apertura instala el filtro central: horizonte, granularidad y drivers deben elegirse por consumo real y no por comodidad tecnica.",
        Component: ClassTwentyThreeHero,
      },
      {
        kicker: "03 · Workbench",
        title: "Cuatro escenarios de demanda para ver como cambia el diseño del forecast.",
        subtitle: "Este workbench interactivo compara retail, staffing, supply y media segun ventana, drivers y forma de consumo.",
        Component: ClassTwentyThreeWorkbench,
      },
      {
        kicker: "04 · Drivers",
        title: "Historico, calendario, shocks y restricciones explican gran parte del pronostico util.",
        subtitle: "La clase muestra como elegir contexto relevante sin convertir el modelo en una acumulacion innecesaria de features.",
        Component: ClassTwentyThreeDrivers,
      },
      {
        kicker: "05 · Horizonte",
        title: "Corto, medio, largo y multi horizonte cambian el valor del forecast.",
        subtitle: "Estas lecturas ayudan a pensar la prediccion como herramienta de compra, staffing, capacidad o inversion segun la ventana correcta.",
        Component: ClassTwentyThreeHorizons,
      },
      {
        kicker: "06 · Reglas",
        title: "Errores comunes al pronosticar demanda vs reglas utiles para volverla accionable.",
        subtitle: "La sesion diferencia entre forecast elegante y forecast que realmente entra a una rutina operativa o comercial con impacto claro.",
        Component: ClassTwentyThreeRulesSlide,
      },
      {
        kicker: "07 · Roadmap",
        title: "Como elegir ventana, serie y forma de integracion del forecast.",
        subtitle: "La secuencia ayuda a pilotear demanda con foco y a llevarla despues a una rutina donde se revisan desvíos y se ajusta el sistema.",
        Component: ClassTwentyThreeRoadmap,
      },
      {
        kicker: "08 · Cierre",
        title: "Con que criterio deberia salir el alumno despues de esta clase.",
        subtitle: "El objetivo es que ya pueda evaluar si un forecast esta bien diseñado segun la decision que alimenta y no solo por el score que reporta.",
        Component: ClassTwentyThreeClosing,
      },
    ],
  },
  {
    id: "class-24",
    label: "Clase 24",
    sidebarTitle: "Clasificacion y scoring",
    sidebarNote: "Como convertir probabilidad en colas de accion con target, threshold, fairness y feedback claros.",
    sections: ["Temario", "Apertura", "Workbench", "Threshold", "Gobierno", "Reglas", "Roadmap", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "La clase cambia de forecasting temporal a scoring y priorizacion operativa.",
        subtitle: "La sesion muestra como clasificacion y scoring sirven para ordenar colas de trabajo en ventas, retencion, fraude y servicio.",
        Component: ClassTwentyFourSyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "Un score vale cuando reorganiza el flujo y deja una accion mas clara para el equipo.",
        subtitle: "La apertura instala el filtro central: target correcto, thresholds defendibles y espacio para override y aprendizaje.",
        Component: ClassTwentyFourHero,
      },
      {
        kicker: "03 · Workbench",
        title: "Cuatro escenarios para entender como el scoring se convierte en cola de accion.",
        subtitle: "Este workbench interactivo compara leads, churn, fraude y servicio segun target, thresholds y feedback util.",
        Component: ClassTwentyFourWorkbench,
      },
      {
        kicker: "04 · Threshold",
        title: "Los umbrales convierten probabilidad en politica operativa.",
        subtitle: "La clase muestra por que el threshold correcto depende del costo del error y de la forma concreta en que el equipo consume la salida.",
        Component: ClassTwentyFourThresholds,
      },
      {
        kicker: "05 · Gobierno",
        title: "Explicacion, override y monitoreo sostienen scoring serio mas alla del laboratorio.",
        subtitle: "Estas capas ayudan a discutir fairness, correccion humana y aprendizaje del sistema dentro de una rutina real.",
        Component: ClassTwentyFourGovernance,
      },
      {
        kicker: "06 · Reglas",
        title: "Errores comunes al diseñar scoring vs reglas utiles para volverlo defendible.",
        subtitle: "La sesion diferencia entre scores que solo producen numeros y sistemas que realmente ordenan colas, revisiones y prioridades con criterio.",
        Component: ClassTwentyFourRulesSlide,
      },
      {
        kicker: "07 · Roadmap",
        title: "Como elegir un caso de scoring, pilotearlo y escalarlo con feedback visible.",
        subtitle: "La secuencia ayuda a llevar un score desde el target hasta el monitoreo por uso y segmento dentro del flujo real.",
        Component: ClassTwentyFourRoadmap,
      },
      {
        kicker: "08 · Cierre",
        title: "Con que criterio deberia salir el alumno despues de esta clase.",
        subtitle: "El objetivo es que ya pueda discutir scores preguntando por cola de accion, threshold, override, fairness y forma de aprendizaje del sistema.",
        Component: ClassTwentyFourClosing,
      },
    ],
  },
  {
    id: "class-25",
    label: "Clase 25",
    sidebarTitle: "Recomendadores",
    sidebarNote: "Como sugerir productos, contenido o acciones segun historial, contexto y guardrails de negocio.",
    sections: ["Temario", "Apertura", "Mapa", "Diseno", "Senales", "Reglas", "Roadmap", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "La fase final entra a sistemas que recomiendan, retienen, optimizan y culminan en proyecto aplicado.",
        subtitle: "La clase abre el frente de recomendadores y lo conecta con discovery, conversion, canasta y experiencia del usuario.",
        Component: ClassTwentyFiveSyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "Recomendar bien es equilibrar relevancia, exploracion y restricciones del negocio.",
        subtitle: "La apertura instala el filtro principal de la sesion: discovery y conversion no sirven de mucho si el sistema destruye diversidad, stock o margen.",
        Component: ClassTwentyFiveHero,
      },
      {
        kicker: "03 · Mapa",
        title: "Cuatro familias para entender como se construye un motor de recomendacion.",
        subtitle: "Este mapa interactivo compara enfoques colaborativos, de contenido, de sesion e hibridos segun relevancia, escala y robustez.",
        Component: ClassTwentyFiveMap,
      },
      {
        kicker: "04 · Diseno",
        title: "Objetivo, candidatos, exploracion y medicion cambian toda la arquitectura del recomendador.",
        subtitle: "La clase muestra como pasar de una idea intuitiva de recomendacion a un sistema mejor amarrado a valor de negocio.",
        Component: ClassTwentyFiveDesign,
      },
      {
        kicker: "05 · Senales",
        title: "Que datos suelen volver fuerte una recomendacion.",
        subtitle: "Interacciones, metadata, contexto y guardrails ayudan a construir un sistema util y no solo un ranking simpatico.",
        Component: ClassTwentyFiveSignals,
      },
      {
        kicker: "06 · Reglas",
        title: "Errores comunes al recomendar vs reglas utiles para sostener valor y experiencia.",
        subtitle: "La sesion diferencia entre motores que persiguen solo clic corto y sistemas que realmente cuidan negocio y aprendizaje futuro.",
        Component: ClassTwentyFiveRulesSlide,
      },
      {
        kicker: "07 · Roadmap",
        title: "Como elegir el punto del journey y pilotear un recomendador con guardrails claros.",
        subtitle: "La secuencia ayuda a pasar de discovery o canasta a una primera prueba defendible con senales y metricas bien ordenadas.",
        Component: ClassTwentyFiveRoadmap,
      },
      {
        kicker: "08 · Cierre",
        title: "Con que criterio deberia salir el alumno despues de esta clase.",
        subtitle: "El objetivo es que ya pueda discutir un recomendador preguntando por objetivo, cold start, diversidad, ranking y valor real de negocio.",
        Component: ClassTwentyFiveClosing,
      },
    ],
  },
  {
    id: "class-26",
    label: "Clase 26",
    sidebarTitle: "Churn y propension de compra",
    sidebarNote: "Como convertir scores de riesgo o compra en intervenciones comerciales y de retencion mejor diseñadas.",
    sections: ["Temario", "Apertura", "Workbench", "Drivers", "Intervencion", "Reglas", "Roadmap", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "La clase conecta scoring con accion comercial y economics reales.",
        subtitle: "Churn, recompra, cross-sell y winback sirven como mapa para ver como una probabilidad cambia una cola de trabajo y una intervencion.",
        Component: ClassTwentySixSyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "El score comercial correcto cambia que hacer, no solo a quien etiquetar.",
        subtitle: "La apertura instala el filtro principal: target claro, economics, umbrales y tratamiento diferencial dentro de un playbook real.",
        Component: ClassTwentySixHero,
      },
      {
        kicker: "03 · Workbench",
        title: "Cuatro escenarios para pensar churn y propension con mas criterio.",
        subtitle: "Este workbench interactivo compara suscripcion, recompra, cross-sell y winback segun target, senales, thresholds y accion.",
        Component: ClassTwentySixWorkbench,
      },
      {
        kicker: "04 · Drivers",
        title: "Que senales suelen explicar mejor riesgo o compra futura.",
        subtitle: "Comportamiento, experiencia, valor y respuesta previa ayudan a construir scores mas utiles para negocio.",
        Component: ClassTwentySixDrivers,
      },
      {
        kicker: "05 · Intervencion",
        title: "La accion correcta no siempre es descuento.",
        subtitle: "Canal, timing, intensidad y economics cambian por segmento y ayudan a evitar intervenciones caras o irrelevantes.",
        Component: ClassTwentySixInterventions,
      },
      {
        kicker: "06 · Reglas",
        title: "Errores comunes al modelar churn o propension vs reglas utiles para que el score cambie algo real.",
        subtitle: "La clase muestra por que target, tratamiento e incrementalidad pesan tanto como el algoritmo que produce la probabilidad.",
        Component: ClassTwentySixRulesSlide,
      },
      {
        kicker: "07 · Roadmap",
        title: "Como elegir un problema de riesgo o propension y pilotearlo con economics visibles.",
        subtitle: "La secuencia ayuda a pasar de un dolor comercial o de retencion a un score con playbook y feedback real.",
        Component: ClassTwentySixRoadmap,
      },
      {
        kicker: "08 · Cierre",
        title: "Con que criterio deberia salir el alumno despues de esta clase.",
        subtitle: "El objetivo es que ya pueda discutir scores comerciales preguntando por target, economics, umbral, tratamiento y aprendizaje posterior.",
        Component: ClassTwentySixClosing,
      },
    ],
  },
  {
    id: "class-27",
    label: "Clase 27",
    sidebarTitle: "Series temporales",
    sidebarNote: "Como pensar tendencia, estacionalidad, shocks y jerarquia antes de elegir una tecnica de forecasting.",
    sections: ["Temario", "Apertura", "Mapa", "Descomposicion", "Validacion", "Reglas", "Roadmap", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "La clase abre la logica temporal que sostiene cualquier forecast serio.",
        subtitle: "Tendencia, estacionalidad, shocks y jerarquia se vuelven el lenguaje base para pensar datos que cambian en el tiempo.",
        Component: ClassTwentySevenSyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "Forecasting empieza por describir bien el patron temporal, no por elegir la libreria mas famosa.",
        subtitle: "La apertura instala el filtro principal de la sesion: horizonte, baseline y estructura temporal antes de hablar de modelos concretos.",
        Component: ClassTwentySevenHero,
      },
      {
        kicker: "03 · Mapa",
        title: "Cuatro arquetipos para leer mejor una serie temporal.",
        subtitle: "Este mapa interactivo compara tendencia, estacionalidad, shocks y jerarquia segun legibilidad, frecuencia y robustez de uso.",
        Component: ClassTwentySevenMap,
      },
      {
        kicker: "04 · Descomposicion",
        title: "Nivel, calendario, residuo y agregacion ordenan gran parte del trabajo temporal serio.",
        subtitle: "La clase muestra como separar las piezas de una serie para evitar confundir ruido, cambio real y estructura repetida.",
        Component: ClassTwentySevenDecomposition,
      },
      {
        kicker: "05 · Validacion",
        title: "Validar series temporales exige respetar el tiempo.",
        subtitle: "Rolling windows, horizon, baseline y drift ayudan a medir si el modelo realmente agrega valor en el contexto correcto.",
        Component: ClassTwentySevenValidation,
      },
      {
        kicker: "06 · Reglas",
        title: "Errores comunes al pensar series temporales vs reglas utiles para leerlas con criterio.",
        subtitle: "La sesion muestra por que calendario, shocks y granularidad cambian gran parte de la calidad del forecast final.",
        Component: ClassTwentySevenRulesSlide,
      },
      {
        kicker: "07 · Roadmap",
        title: "Como abrir un caso temporal antes de decidir que tecnica usar.",
        subtitle: "La secuencia ayuda a definir patron, baseline, horizonte y consumo antes de comparar modelos.",
        Component: ClassTwentySevenRoadmap,
      },
      {
        kicker: "08 · Cierre",
        title: "Con que criterio deberia salir el alumno despues de esta clase.",
        subtitle: "El objetivo es que ya pueda mirar una serie y nombrar que domina su comportamiento, como validarla y para que decision sirve.",
        Component: ClassTwentySevenClosing,
      },
    ],
  },
  {
    id: "class-28",
    label: "Clase 28",
    sidebarTitle: "ARIMA y Prophet",
    sidebarNote: "Como comparar familias clasicas de forecasting con baseline, horizonte y mantenimiento como criterios reales.",
    sections: ["Temario", "Apertura", "Mapa", "Eleccion", "Workflow", "Reglas", "Roadmap", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "La clase baja el mapa temporal a tecnicas concretas y comparables.",
        subtitle: "Baseline, ARIMA, SARIMA y Prophet aparecen como familias con costos, ventajas y limites distintos segun la estructura de la serie.",
        Component: ClassTwentyEightSyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "ARIMA y Prophet dejan de sonar a marca cuando se comparan contra el problema temporal correcto.",
        subtitle: "La apertura instala el criterio central: elegir tecnica por estructura, horizonte y operacion, no por moda ni por familiaridad de herramienta.",
        Component: ClassTwentyEightHero,
      },
      {
        kicker: "03 · Mapa",
        title: "Cuatro puntos de comparacion para elegir familia temporal con mas criterio.",
        subtitle: "Este mapa interactivo compara baseline, ARIMA, SARIMA y Prophet segun interpretacion, flexibilidad y sostenibilidad operativa.",
        Component: ClassTwentyEightMap,
      },
      {
        kicker: "04 · Eleccion",
        title: "Que preguntas ordenan la eleccion antes del tuning.",
        subtitle: "Baseline, transformacion, calendario y mantenimiento ayudan a distinguir cuando conviene cada familia y cuando no vale la pena complejizar.",
        Component: ClassTwentyEightChoices,
      },
      {
        kicker: "05 · Workflow",
        title: "De la serie y el horizonte a la comparacion entre familias.",
        subtitle: "La clase muestra una ruta corta para preparar la serie, comparar tecnicas y elegir la que deje mas valor neto para el negocio.",
        Component: ClassTwentyEightWorkflow,
      },
      {
        kicker: "06 · Reglas",
        title: "Errores comunes al elegir ARIMA o Prophet vs reglas utiles para comparar mejor.",
        subtitle: "La sesion deja claro por que baseline, shocks y mantenimiento importan tanto como la precision puntual del modelo.",
        Component: ClassTwentyEightRulesSlide,
      },
      {
        kicker: "07 · Roadmap",
        title: "Como probar varias familias temporales sin perder foco en negocio.",
        subtitle: "La secuencia ayuda a fijar ventana, baseline, comparacion y criterio de operacion antes de escalar un forecast temporal."
        ,Component: ClassTwentyEightRoadmap,
      },
      {
        kicker: "08 · Cierre",
        title: "Con que criterio deberia salir el alumno despues de esta clase.",
        subtitle: "El objetivo es que ya pueda evaluar ARIMA y Prophet preguntando por baseline, estructura temporal, horizonte y esfuerzo de mantenimiento.",
        Component: ClassTwentyEightClosing,
      },
    ],
  },
  {
    id: "class-29",
    label: "Clase 29",
    sidebarTitle: "Optimizacion de campanas",
    sidebarNote: "Como mover presupuesto, audiencias, creatividad y ritmo con una funcion de valor y guardrails claros.",
    sections: ["Temario", "Apertura", "Studio", "Palancas", "Senales", "Reglas", "Roadmap", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "La clase lleva modelos y reglas al terreno mas directo de growth aplicado.",
        subtitle: "Presupuesto, audiencias, creatividad y pacing muestran como la optimizacion se vuelve una disciplina mas completa que mover dinero por intuicion."
        ,Component: ClassTwentyNineSyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "Optimizar campanas es mover un sistema, no un numerito aislado.",
        subtitle: "La apertura instala el filtro central: objetivo, restricciones, cadencia e incrementalidad antes de tocar budget o mix.",
        Component: ClassTwentyNineHero,
      },
      {
        kicker: "03 · Studio",
        title: "Cuatro palancas donde growth suele capturar valor rapido o cometer errores caros.",
        subtitle: "Este studio interactivo compara presupuesto, audiencia, creatividad y pacing segun valor, dificultad y riesgos mas comunes.",
        Component: ClassTwentyNineStudio,
      },
      {
        kicker: "04 · Palancas",
        title: "Objetivo, restricciones, cadencia y feedback ordenan la optimizacion seria.",
        subtitle: "La clase muestra que gran parte del problema se resuelve mejor cuando esas cuatro piezas quedan explicitadas desde el inicio.",
        Component: ClassTwentyNineLevers,
      },
      {
        kicker: "05 · Senales",
        title: "Spend, saturacion, overlap e incrementalidad ayudan a leer el sistema completo.",
        subtitle: "Estas senales vuelven mas defendible el ajuste de campanas y reducen decisiones reactivas de corto plazo.",
        Component: ClassTwentyNineSignals,
      },
      {
        kicker: "06 · Reglas",
        title: "Errores comunes al optimizar growth vs reglas utiles para mover campanas con criterio.",
        subtitle: "La sesion diferencia entre perseguir el ultimo dato visible y construir una disciplina de ajuste con valor incremental mas claro.",
        Component: ClassTwentyNineRulesSlide,
      },
      {
        kicker: "07 · Roadmap",
        title: "Como elegir una palanca de growth, pilotearla y escalarla con aprendizaje mas fuerte.",
        subtitle: "La secuencia ayuda a pasar de una intuicion de marketing a un sistema con funcion de valor, guardrails y monitoreo visible.",
        Component: ClassTwentyNineRoadmap,
      },
      {
        kicker: "08 · Cierre",
        title: "Con que criterio deberia salir el alumno despues de esta clase.",
        subtitle: "El objetivo es que ya pueda discutir optimizacion de campanas preguntando por objetivo, restricciones, cadencia, causalidad y aprendizaje real."
        ,Component: ClassTwentyNineClosing,
      },
    ],
  },
  {
    id: "class-30",
    label: "Clase 30",
    sidebarTitle: "A/B testing y personalizacion",
    sidebarNote: "Como validar cambios de experiencia y decidir donde una personalizacion realmente vale la pena.",
    sections: ["Temario", "Apertura", "Workbench", "Evidencia", "Personalizacion", "Reglas", "Roadmap", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "La clase cierra la parte aplicada con experimentacion y aprendizaje causal mas disciplinado.",
        subtitle: "A/B testing y personalizacion aparecen como herramientas para decidir cambios de experiencia con mejor evidencia y menos intuicion decorada.",
        Component: ClassThirtySyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "Experimentar bien es producir aprendizaje accionable y no solo elegir una variante ganadora.",
        subtitle: "La apertura instala el filtro principal: hipotesis, control, guardrails y criterio para decidir cuando una diferencia justifica personalizar."
        ,Component: ClassThirtyHero,
      },
      {
        kicker: "03 · Workbench",
        title: "Cuatro escenarios donde testing y personalizacion cambian la experiencia con mas criterio.",
        subtitle: "Este workbench interactivo compara onboarding, e-commerce, retencion y contenido segun hipotesis, segmento, test y rollout.",
        Component: ClassThirtyWorkbench,
      },
      {
        kicker: "04 · Evidencia",
        title: "Control, ventana y jerarquia de metricas sostienen la credibilidad del experimento.",
        subtitle: "La clase muestra como se evita declarar un ganador demasiado pronto o por una sola metrica feliz.",
        Component: ClassThirtyEvidence,
      },
      {
        kicker: "05 · Personalizacion",
        title: "Timing, segmentacion y saturacion deciden si una experiencia distinta realmente vale la pena.",
        subtitle: "No toda diferencia observable justifica complejidad adicional; estas capas ayudan a pensar donde conviene personalizar."
        ,Component: ClassThirtyPersonalization,
      },
      {
        kicker: "06 · Reglas",
        title: "Errores comunes al testear o personalizar vs reglas utiles para aprender con mas rigor.",
        subtitle: "La sesion distingue entre variantes lanzadas por ansiedad y experimentos que dejan una siguiente decision mas fuerte.",
        Component: ClassThirtyRulesSlide,
      },
      {
        kicker: "07 · Roadmap",
        title: "Como pasar de una intuicion sobre experiencia a un test y luego a una personalizacion defendible.",
        subtitle: "La secuencia ayuda a elegir hipotesis, poblacion y reglas de despliegue antes de escalar un cambio.",
        Component: ClassThirtyRoadmap,
      },
      {
        kicker: "08 · Cierre",
        title: "Con que criterio deberia salir el alumno despues de esta clase.",
        subtitle: "El objetivo es que ya pueda discutir experimentos preguntando por hipotesis, control, guardrails, segmentos y aprendizaje posterior.",
        Component: ClassThirtyClosing,
      },
    ],
  },
  {
    id: "class-31",
    label: "Clase 31",
    sidebarTitle: "Proyecto integrador: planteamiento",
    sidebarNote: "Como elegir el frente del proyecto, acotar el problema y diseñar un piloto defendible.",
    sections: ["Temario", "Apertura", "Workbench", "Entregables", "Alineacion", "Reglas", "Roadmap", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "La clase convierte todo el diplomado en una estructura lista para un proyecto final serio.",
        subtitle: "Growth, operacion, cliente y riesgo aparecen como cuatro rutas para aterrizar un problema real con datos y una salida util.",
        Component: ClassThirtyOneSyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "El proyecto final empieza por un problema acotado y una decision que merezca mejor evidencia.",
        subtitle: "La apertura instala el criterio central: usuario, metrica, datos plausibles y artefacto coherente antes de hablar de un gran despliegue."
        ,Component: ClassThirtyOneHero,
      },
      {
        kicker: "03 · Workbench",
        title: "Cuatro rutas para elegir con que tipo de proyecto cerrar el curso.",
        subtitle: "Este workbench interactivo compara growth, operacion, cliente y riesgo segun problema, datos, solucion y piloto."
        ,Component: ClassThirtyOneWorkbench,
      },
      {
        kicker: "04 · Entregables",
        title: "Problema, datos, artefacto y piloto forman la base del proyecto.",
        subtitle: "Estas piezas ayudan a que el planteamiento se vea como una propuesta accionable y no como una idea demasiado abstracta.",
        Component: ClassThirtyOneDeliverables,
      },
      {
        kicker: "05 · Alineacion",
        title: "Sponsor, usuario, guardrails y siguiente paso vuelven mas creible la propuesta.",
        subtitle: "La clase muestra por que un proyecto gana mucho cuando ya suena a algo que un equipo podria usar y gobernar.",
        Component: ClassThirtyOneAlignment,
      },
      {
        kicker: "06 · Reglas",
        title: "Errores comunes al plantear el proyecto vs reglas utiles para salir con un scope defendible.",
        subtitle: "La sesion protege al alumno de dos fallos tipicos: resolver demasiado o enamorarse de una tecnica antes del problema.",
        Component: ClassThirtyOneRulesSlide,
      },
      {
        kicker: "07 · Roadmap",
        title: "Como elegir el frente del proyecto y dejar lista la historia para la entrega final.",
        subtitle: "La secuencia ayuda a salir de clase con foco, metrica, datos, artefacto y un piloto ya suficientemente narrables.",
        Component: ClassThirtyOneRoadmap,
      },
      {
        kicker: "08 · Cierre",
        title: "Con que criterio deberia salir el alumno despues de esta clase.",
        subtitle: "El objetivo es que ya pueda defender un proyecto integrador preguntando por problema, usuario, datos plausibles, piloto y guardrails."
        ,Component: ClassThirtyOneClosing,
      },
    ],
  },
  {
    id: "class-32",
    label: "Clase 32",
    sidebarTitle: "Proyecto integrador final",
    sidebarNote: "Rubrica final para defender el proyecto con valor, evidencia, adopcion y un siguiente paso realista.",
    sections: ["Temario", "Apertura", "Rubrica", "Pitch", "Escala", "Reglas", "Roadmap", "Cierre"],
    slides: [
      {
        kicker: "01 · Temario",
        title: "La ultima clase ordena la defensa final del proyecto y cierra el recorrido completo del diplomado.",
        subtitle: "Valor, datos, solucion y adopcion sirven como rubrica para convertir el aprendizaje en una propuesta creible y pilotable.",
        Component: ClassThirtyTwoSyllabus,
      },
      {
        kicker: "02 · Apertura",
        title: "El cierre final del curso pide una historia clara y no una promesa grandilocuente.",
        subtitle: "La apertura instala el filtro de cierre: problema, evidencia, artefacto, piloto y continuidad con suficiente honestidad sobre limites."
        ,Component: ClassThirtyTwoHero,
      },
      {
        kicker: "03 · Rubrica",
        title: "Cuatro dimensiones para evaluar si el proyecto final realmente esta bien planteado.",
        subtitle: "Este mapa interactivo compara valor de negocio, datos, solucion y adopcion como ejes de una presentacion final mas fuerte.",
        Component: ClassThirtyTwoRubric,
      },
      {
        kicker: "04 · Pitch",
        title: "Como contar el proyecto con foco, evidencia y una demo suficiente.",
        subtitle: "Estas piezas ayudan a construir una presentacion final que se entienda rapido y deje claro por que la propuesta vale la pena."
        ,Component: ClassThirtyTwoPresentation,
      },
      {
        kicker: "05 · Escala",
        title: "Del aula al piloto hay una ruta corta pero concreta.",
        subtitle: "Owner, guardrails, adopcion y aprendizaje continuo ayudan a mostrar que el proyecto puede salir del deck y entrar a un contexto real.",
        Component: ClassThirtyTwoScale,
      },
      {
        kicker: "06 · Reglas",
        title: "Errores comunes al cerrar un proyecto vs reglas utiles para dejar una entrega mas creible.",
        subtitle: "La sesion muestra por que reconocer limites y aterrizar un siguiente paso realista fortalece mucho mas el cierre que prometer demasiado."
        ,Component: ClassThirtyTwoRulesSlide,
      },
      {
        kicker: "07 · Roadmap",
        title: "Como sintetizar, defender y continuar el proyecto despues del curso.",
        subtitle: "La secuencia final ayuda a dejar una ruta de continuidad y aprendizaje para que el proyecto no muera al cerrar la presentacion.",
        Component: ClassThirtyTwoRoadmap,
      },
      {
        kicker: "08 · Cierre",
        title: "Con que criterio deberia salir el alumno al terminar el diplomado.",
        subtitle: "El objetivo final es que ya pueda convertir un problema real de negocio en una propuesta de IA aplicada con datos, salida coherente, guardrails y piloto defendible.",
        Component: ClassThirtyTwoClosing,
      },
    ],
  },
];

export const courseDecks = [
  {
    id: "course-outline",
    label: "Indice",
    sidebarTitle: "Introducción práctica a la IA",
    sidebarNote: "Ruta completa del curso para revisar fases, clases y progreso sin repetir el temario dentro de cada sesion.",
    sections: ["Ruta general"],
    slides: [
      {
        kicker: "01 · Ruta general",
        title: "Introducción práctica a la IA.",
        subtitle: "Esta seccion deja visible el indice completo del curso en un solo lugar para que no se repita dentro de las 32 clases.",
        Component: CourseOutlineOverview,
      },
    ],
  },
  ...classDecks.map(stripRepeatedSyllabus),
];
