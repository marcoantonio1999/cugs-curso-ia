import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { valueChainStages } from "../data";
import { accentText, accentizeDeep } from "../utils/accentText";

export default function ValueChainSlide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stages = accentizeDeep(valueChainStages);
  const active = stages[activeIndex];

  return (
    <div className="course-value-shell">
      <section className="course-value-rail" aria-label="Etapas de valor de IA en negocio">
        {stages.map((stage, index) => (
          <button
            key={stage.label}
            type="button"
            className={`course-value-step ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-pressed={index === activeIndex}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{stage.label}</strong>
          </button>
        ))}
      </section>

      <section className="course-value-grid">
        <motion.article
          key={active.label}
          className="course-value-card"
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.22 }}
        >
          <div className="course-value-head">
            <div>
              <span className="mini-label">Marco de trabajo</span>
              <strong>{active.title}</strong>
            </div>
            <span className="course-chip accent">{active.metric}</span>
          </div>

          <p className="lead">{active.body}</p>

          <div className="course-value-bullets">
            {active.bullets.map((item) => (
              <article key={item} className="course-value-bullet">
                <ArrowRight size={15} />
                <span>{item}</span>
              </article>
            ))}
          </div>

          <div className="course-value-tags">
            {active.examples.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </motion.article>

        <article className="course-loop-card">
          <div className="course-loop-grid" />
          <div className="course-loop-core">IA</div>
          {[
            { label: accentText("Mas velocidad"), x: "50%", y: "14%" },
            { label: accentText("Menos friccion"), x: "82%", y: "48%" },
            { label: accentText("Mejor decision"), x: "50%", y: "82%" },
            { label: accentText("Mas precision"), x: "18%", y: "48%" },
          ].map((node, index) => (
            <motion.div
              key={node.label}
              className="course-loop-node"
              style={{ left: node.x, top: node.y }}
              animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2.4, delay: index * 0.18, repeat: Infinity }}
            >
              {node.label}
            </motion.div>
          ))}
          <div className="course-loop-note">
            <Sparkles size={16} />
            <span>{accentText("La clase arranca por el sistema completo antes de bajar a herramientas puntuales.")}</span>
          </div>
        </article>
      </section>
    </div>
  );
}