const timeline = [
  {
    year: "1950s",
    title: "La pregunta",
    body: "Maquinas capaces de imitar partes del razonamiento humano.",
  },
  {
    year: "1980s",
    title: "Reglas expertas",
    body: "Sistemas que seguian instrucciones escritas por especialistas.",
  },
  {
    year: "2010s",
    title: "Aprendizaje con datos",
    body: "Modelos que detectan patrones en grandes volumenes de informacion.",
  },
  {
    year: "2020s",
    title: "IA generativa",
    body: "Modelos que producen texto, imagen, codigo o audio a partir de ejemplos.",
  },
];

const concepts = [
  {
    label: "IA",
    title: "Campo general",
    body: "Tecnicas para que una maquina resuelva tareas que requieren percepcion, lenguaje, prediccion o decision.",
  },
  {
    label: "ML",
    title: "Aprende patrones",
    body: "Machine Learning usa datos para mejorar una prediccion o clasificacion sin escribir todas las reglas a mano.",
  },
  {
    label: "Deep Learning",
    title: "Capas de aprendizaje",
    body: "Usa redes neuronales profundas para trabajar con imagenes, texto, voz y patrones complejos.",
  },
  {
    label: "LLM",
    title: "Modelo de lenguaje",
    body: "Un Large Language Model predice y genera texto usando contexto, tokens y entrenamiento masivo.",
  },
];

export default function AIHistoryBasicsSlide() {
  return (
    <div className="ai-history-shell">
      <section className="ai-history-panel">
        <div className="ai-history-head">
          <p className="mini-label">Historia breve</p>
          <h3>La IA no aparecio de golpe: fue acumulando capas.</h3>
        </div>

        <div className="ai-history-timeline">
          {timeline.map((item) => (
            <article key={item.year} className="ai-history-step">
              <span>{item.year}</span>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ai-concepts-panel">
        <div className="ai-history-head">
          <p className="mini-label">Mapa simple</p>
          <h3>Como se relacionan los terminos mas comunes.</h3>
        </div>

        <div className="ai-concepts-grid">
          {concepts.map((item) => (
            <article key={item.label} className="ai-concept-card">
              <span>{item.label}</span>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </article>
          ))}
        </div>

        <div className="ai-concepts-summary">
          <strong>Idea central:</strong>
          <span>IA es el campo; ML aprende con datos; deep learning usa redes profundas; LLM es una familia especializada en lenguaje.</span>
        </div>
      </section>
    </div>
  );
}
