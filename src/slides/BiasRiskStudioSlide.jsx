import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, ShieldCheck } from "lucide-react";
import { classTenBiasCases } from "../courseData";
import { accentText, accentizeDeep } from "../utils/accentText";

const biasCases = accentizeDeep(classTenBiasCases);

export default function BiasRiskStudioSlide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = biasCases[activeIndex];

  return (
    <div className="automation-studio-shell">
      <section className="automation-case-row" aria-label={accentText("Casos para estudiar sesgos y riesgo reputacional")}>
        {biasCases.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={`automation-case-button ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-pressed={index === activeIndex}
          >
            <span>{item.label}</span>
            <strong>{item.title}</strong>
          </button>
        ))}
      </section>

      <section className="automation-studio-grid">
        <motion.article
          key={active.id}
          className="automation-case-detail"
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.22 }}
        >
          <div className="automation-detail-head">
            <div>
              <span className="mini-label">Bias case</span>
              <strong>{active.title}</strong>
            </div>
            <span className="course-chip accent">{active.riskLevel}</span>
          </div>

          <p className="lead">{active.body}</p>

          <div className="automation-case-metrics">
            {active.metrics.map((metric) => (
              <article key={`${active.id}-${metric.label}`} className="automation-case-metric">
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </article>
            ))}
          </div>

          <div className="automation-list-block">
            <span className="mini-label">{accentText("Donde puede nacer el sesgo")}</span>
            <div className="automation-bullet-list">
              {active.biasVectors.map((item) => (
                <article key={item} className="automation-bullet-item">
                  <ArrowRight size={15} />
                  <span>{item}</span>
                </article>
              ))}
            </div>
          </div>
        </motion.article>

        <article className="automation-case-sidecard">
          <div className="automation-score-head compact">
            <AlertTriangle size={16} />
            <strong>{accentText("Grupos expuestos")}</strong>
          </div>

          <div className="automation-bullet-list compact">
            {active.affectedGroups.map((item) => (
              <article key={item} className="automation-bullet-item">
                <ShieldCheck size={15} />
                <span>{item}</span>
              </article>
            ))}
          </div>

          <div className="automation-list-block">
            <span className="mini-label">{accentText("Controles sugeridos")}</span>
            <div className="automation-bullet-list compact">
              {active.controls.map((item) => (
                <article key={item} className="automation-bullet-item">
                  <ArrowRight size={15} />
                  <span>{item}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="automation-note-box compact">
            <span className="mini-label">{accentText("Riesgo reputacional")}</span>
            <strong>{active.publicRisk}</strong>
          </div>
        </article>
      </section>
    </div>
  );
}