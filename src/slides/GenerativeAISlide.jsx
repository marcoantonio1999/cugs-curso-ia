import { useState } from "react";
import { motion } from "framer-motion";
import { FileCode2, Image, MessageSquareText, Music2, Sparkles } from "lucide-react";

const stages = [
  {
    label: "Prompt",
    title: "La persona da una intención",
    detail: "No se pide una respuesta guardada; se define qué se quiere construir.",
  },
  {
    label: "Modelo",
    title: "El modelo usa patrones aprendidos",
    detail: "Relaciona instrucciones, contexto y ejemplos vistos durante entrenamiento.",
  },
  {
    label: "Generación",
    title: "Produce piezas nuevas",
    detail: "Predice la siguiente pieza probable y repite el proceso hasta formar una salida.",
  },
];

const tokens = ["Un", "sistema", "generativo", "crea", "contenido", "nuevo", "a", "partir", "del", "contexto"];

const outputs = [
  { icon: MessageSquareText, label: "Texto", value: "resumen, explicación, historia" },
  { icon: Image, label: "Imagen", value: "boceto, estilo, composición" },
  { icon: Music2, label: "Audio", value: "voz, música, efectos" },
  { icon: FileCode2, label: "Código", value: "funciones, pruebas, scripts" },
];

export default function GenerativeAISlide() {
  const [stage, setStage] = useState(0);

  return (
    <div className="genai-stage">
      <div className="genai-controls" aria-label="Etapas de IA generativa">
        {stages.map((item, index) => (
          <button
            key={item.label}
            type="button"
            className={`genai-step ${stage >= index ? "active" : ""}`}
            onClick={() => setStage(index)}
            aria-pressed={stage === index}
          >
            <span>{index + 1}</span>
            <strong>{item.label}</strong>
          </button>
        ))}
      </div>

      <div className="genai-canvas">
        <section className={`genai-panel prompt-panel ${stage === 0 ? "active" : ""}`}>
          <span className="flow-label">Entrada</span>
          <h3>{stages[0].title}</h3>
          <div className="prompt-card">
            <MessageSquareText size={22} />
            <p>“Explícame la inteligencia artificial con un ejemplo para clase.”</p>
          </div>
          <p className="signal-caption">{stages[0].detail}</p>
        </section>

        <section className={`genai-panel model-panel ${stage === 1 ? "active" : ""}`}>
          <span className="flow-label">Modelo generativo</span>
          <h3>{stages[1].title}</h3>
          <div className="latent-orbit">
            <motion.div
              className="latent-core"
              animate={{ rotate: stage >= 1 ? [0, 360] : 0 }}
              transition={{ duration: 8, repeat: stage >= 1 ? Infinity : 0, ease: "linear" }}
            >
              <Sparkles size={34} />
            </motion.div>
            {["instrucción", "contexto", "patrones", "probabilidad"].map((item, index) => (
              <motion.span
                key={item}
                className={`latent-chip latent-chip-${index}`}
                animate={{ opacity: stage >= 1 ? [0.55, 1, 0.55] : 0.35, scale: stage >= 1 ? [0.96, 1.04, 0.96] : 0.96 }}
                transition={{ duration: 2, delay: index * 0.16, repeat: stage >= 1 ? Infinity : 0 }}
              >
                {item}
              </motion.span>
            ))}
          </div>
          <p className="signal-caption">{stages[1].detail}</p>
        </section>

        <section className={`genai-panel output-panel ${stage >= 2 ? "active" : ""}`}>
          <span className="flow-label">Salida</span>
          <h3>{stages[2].title}</h3>
          <div className="token-build">
            {tokens.map((token, index) => (
              <motion.span
                key={token}
                className="generated-token"
                initial={false}
                animate={{
                  opacity: stage >= 2 ? 1 : 0.18,
                  y: stage >= 2 ? 0 : 10,
                }}
                transition={{ delay: index * 0.06, duration: 0.2 }}
              >
                {token}
              </motion.span>
            ))}
          </div>
          <p className="signal-caption">{stages[2].detail}</p>
        </section>
      </div>

      <div className="genai-output-grid">
        {outputs.map((item, index) => (
          <motion.article
            key={item.label}
            className="genai-output-card"
            animate={{ opacity: stage >= 2 ? 1 : 0.42, y: stage >= 2 ? 0 : 8 }}
            transition={{ delay: index * 0.05, duration: 0.2 }}
          >
            <item.icon size={22} />
            <div>
              <strong>{item.label}</strong>
              <span>{item.value}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
