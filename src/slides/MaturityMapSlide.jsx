import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Gauge, ShieldCheck } from "lucide-react";
import { classFourMaturityStages } from "../courseData";
import { accentText, accentizeDeep } from "../utils/accentText";

const scoreLabels = accentizeDeep(["Datos", "Proceso", "Adopcion", "Gobernanza"]);
const maturityStages = accentizeDeep(classFourMaturityStages);

export default function MaturityMapSlide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = maturityStages[activeIndex];
  const average = Math.round(active.scores.reduce((total, score) => total + score, 0) / active.scores.length);

  return (
    <div className="maturity-shell">
      <section className="maturity-stage-rail" aria-label={accentText("Etapas de madurez de IA")}>
        {maturityStages.map((stage, index) => (
          <button
            key={stage.id}
            type="button"
            className={`maturity-stage-button ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-pressed={index === activeIndex}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{stage.label}</strong>
          </button>
        ))}
      </section>

      <section className="maturity-grid">
        <motion.article
          key={active.id}
          className="maturity-detail-card"
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.22 }}
        >
          <div className="maturity-detail-head">
            <div>
              <span className="mini-label">Mapa de madurez</span>
              <strong>{active.title}</strong>
            </div>
            <span className="course-chip accent">{active.signal}</span>
          </div>

          <p className="lead">{active.body}</p>

          <div className="maturity-risk-list">
            {active.risks.map((item) => (
              <article key={item} className="maturity-risk-item">
                <ArrowRight size={15} />
                <span>{item}</span>
              </article>
            ))}
          </div>

          <div className="maturity-next-box">
            <span className="mini-label">{accentText("Siguiente movimiento")}</span>
            <strong>{active.nextStep}</strong>
          </div>
        </motion.article>

        <article className="maturity-score-card">
          <div className="maturity-score-head">
            <div>
              <span className="mini-label">Lectura ejecutiva</span>
              <strong>{average}% de readiness promedio</strong>
            </div>
            <Gauge size={18} />
          </div>

          <div className="maturity-score-list">
            {active.scores.map((score, index) => (
              <article key={`${active.id}-${scoreLabels[index]}`} className="maturity-score-row">
                <div className="maturity-score-label">
                  <span>{scoreLabels[index]}</span>
                  <strong>{score}%</strong>
                </div>
                <div className="maturity-score-track">
                  <motion.div
                    className="maturity-score-fill"
                    initial={false}
                    animate={{ width: `${score}%` }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </article>
            ))}
          </div>

          <div className="maturity-score-note">
            <ShieldCheck size={16} />
            <span>{accentText("La madurez sube cuando el caso deja de depender del entusiasmo y entra a proceso, adopcion y control.")}</span>
          </div>
        </article>
      </section>
    </div>
  );
}