import { useState } from "react";
import { motion } from "framer-motion";

const scenarios = [
  {
    prompt: "El sol sale por el",
    choice: "este",
    choices: [
      { word: "este", score: 0.81 },
      { word: "norte", score: 0.1 },
      { word: "árbol", score: 0.05 },
      { word: "azul", score: 0.04 },
    ],
    signals: ["conocimiento del mundo", "relación semántica", "frase frecuente"],
  },
  {
    prompt: "Los peces viven en el",
    choice: "agua",
    choices: [
      { word: "agua", score: 0.88 },
      { word: "cielo", score: 0.06 },
      { word: "fuego", score: 0.03 },
      { word: "techo", score: 0.03 },
    ],
    signals: ["coherencia del contexto", "probabilidad aprendida", "sentido común"],
  },
  {
    prompt: "Si practicas más, probablemente",
    choice: "mejores",
    choices: [
      { word: "mejores", score: 0.67 },
      { word: "llueve", score: 0.13 },
      { word: "rompas", score: 0.11 },
      { word: "desaparece", score: 0.09 },
    ],
    signals: ["continuidad gramatical", "texto visto en entrenamiento", "contexto inmediato"],
  },
];

export default function LearningFlowPanel() {
  const [phase, setPhase] = useState(0);
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const scenario = scenarios[scenarioIndex];
  const promptWords = scenario.prompt.split(" ");
  const steps = ["entra texto", "busca patrón", "predice palabra"];
  const nextScenario = () => {
    setScenarioIndex((value) => (value + 1) % scenarios.length);
    setPhase(0);
  };

  return (
    <div className="signal-panel ai-inference">
      <div className="ai-inference-head">
        <div className="ai-sequence-rail">
          {steps.map((label, index) => (
            <button
              key={label}
              type="button"
              className={`ai-sequence-step ${phase >= index ? "active" : ""}`}
              onClick={() => setPhase(index)}
              aria-pressed={phase === index}
            >
              <span>{index + 1}</span>
              <strong>{label}</strong>
            </button>
          ))}
        </div>
        <button type="button" className="ai-scenario-chip" onClick={nextScenario}>
          Ejemplo {scenarioIndex + 1}
        </button>
      </div>

      <div className="ai-inference-grid">
        <button type="button" className={`ai-stage-card ${phase === 0 ? "active" : ""}`} onClick={() => setPhase(0)}>
          <span className="flow-label">Entrada</span>
          <h3>Se mete el texto</h3>
          <div className="prompt-screen" key={`prompt-${scenarioIndex}`}>
            {promptWords.map((word, index) => (
              <motion.span
                key={`${scenarioIndex}-${word}-${index}`}
                className="prompt-token"
                initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: index * 0.08, duration: 0.24 }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              className="prompt-token prompt-gap"
              animate={{ opacity: phase >= 2 ? 0.35 : 0.9, scale: phase >= 2 ? 0.96 : 1.02 }}
              transition={{ duration: 0.25 }}
            >
              __
            </motion.span>
            <motion.span
              className="prompt-cursor"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 0.9, repeat: Infinity }}
            />
          </div>
          <p className="signal-caption">
            El modelo no ve “ideas”; ve una secuencia de tokens y el hueco donde debe continuar.
          </p>
        </button>

        <button type="button" className={`ai-stage-card ${phase === 1 ? "active" : ""}`} onClick={() => setPhase(1)}>
          <span className="flow-label">Modelo</span>
          <h3>Busca patrón aprendido</h3>
          <div className="pattern-core">
            <motion.div
              className="pattern-orb"
              animate={{ scale: phase >= 1 ? [1, 1.06, 1] : 1, rotate: phase >= 1 ? [0, 8, 0] : 0 }}
              transition={{ duration: 1.4, repeat: phase >= 1 ? Infinity : 0, ease: "easeInOut" }}
            />
            <div className="pattern-rings">
              {[0, 1, 2].map((ring) => (
                <motion.div
                  key={ring}
                  className="pattern-ring"
                  animate={{ scale: phase >= 1 ? [0.92, 1.08, 0.92] : 0.92, opacity: phase >= 1 ? [0.18, 0.4, 0.18] : 0.12 }}
                  transition={{ duration: 1.8, delay: ring * 0.18, repeat: phase >= 1 ? Infinity : 0 }}
                />
              ))}
            </div>
            <div className="pattern-stream">
              {scenario.signals.map((signal, index) => (
                <motion.div
                  key={signal}
                  className="pattern-signal"
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: phase >= 1 ? 1 : 0.4, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.24 }}
                >
                  {signal}
                </motion.div>
              ))}
            </div>
          </div>
          <p className="signal-caption">
            Compara miles de relaciones aprendidas y calcula cuál continuación encaja mejor con el contexto.
          </p>
        </button>

        <button type="button" className={`ai-stage-card ${phase >= 2 ? "active" : ""}`} onClick={() => setPhase(2)}>
          <span className="flow-label">Predicción</span>
          <h3>Elige la siguiente palabra</h3>
          <div className="prediction-list">
            {scenario.choices.map((item, index) => {
              const isWinner = item.word === scenario.choice;
              return (
                <motion.div
                  key={item.word}
                  className={`prediction-option ${isWinner && phase >= 2 ? "winner" : ""}`}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: phase >= 2 ? 1 : 0.42, x: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.22 }}
                >
                  <div className="prediction-row">
                    <strong>{item.word}</strong>
                    <span>{Math.round(item.score * 100)}%</span>
                  </div>
                  <div className="prediction-bar-shell">
                    <motion.div
                      className="prediction-bar"
                      animate={{ width: phase >= 2 ? `${item.score * 100}%` : "16%" }}
                      transition={{ delay: index * 0.06, duration: 0.34 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="prediction-final">
            <span className="flow-label">Salida</span>
            <p>
              {scenario.prompt}{" "}
              <motion.strong
                key={`${scenario.choice}-${phase}`}
                animate={{
                  opacity: phase >= 2 ? 1 : 0.28,
                  y: phase >= 2 ? 0 : 8,
                  scale: phase >= 2 ? 1 : 0.94,
                }}
                transition={{ duration: 0.24 }}
              >
                {scenario.choice}
              </motion.strong>
            </p>
          </div>
        </button>
      </div>

      <p className="signal-caption">
        En inferencia hace esto miles de veces por segundo: recibe contexto, calcula probabilidades y selecciona la continuación más probable.
      </p>
    </div>
  );
}
