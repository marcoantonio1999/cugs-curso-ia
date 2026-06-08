import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { classEightJourneyStages } from "../courseData";
import { accentText, accentizeDeep } from "../utils/accentText";

const journeyStages = accentizeDeep(classEightJourneyStages);

export default function PersonalizationJourneySlide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = journeyStages[activeIndex];

  return (
    <div className="automation-studio-shell">
      <section className="automation-case-row" aria-label={accentText("Etapas para fidelizacion y personalizacion")}>
        {journeyStages.map((stage, index) => (
          <button
            key={stage.id}
            type="button"
            className={`automation-case-button ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-pressed={index === activeIndex}
          >
            <span>{stage.label}</span>
            <strong>{stage.title}</strong>
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
              <span className="mini-label">Journey stage</span>
              <strong>{active.title}</strong>
            </div>
            <span className="course-chip accent">{active.action}</span>
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

          <div className="automation-note-box">
            <span className="mini-label">{accentText("Trigger recomendado")}</span>
            <strong>{active.trigger}</strong>
          </div>
        </motion.article>

        <article className="automation-case-sidecard">
          <div className="automation-score-head compact">
            <Sparkles size={16} />
            <strong>{accentText("Canales y guardrails")}</strong>
          </div>

          <div className="process-kpi-list">
            {active.channels.map((item) => (
              <span key={`${active.id}-${item}`}>{item}</span>
            ))}
          </div>

          <div className="automation-list-block">
            <span className="mini-label">{accentText("Siguiente mejor accion")}</span>
            <div className="automation-bullet-list compact">
              <article className="automation-bullet-item">
                <ArrowRight size={15} />
                <span>{active.action}</span>
              </article>
            </div>
          </div>

          <div className="automation-note-box compact">
            <span className="mini-label">{accentText("Guardrail")}</span>
            <strong>{active.guardrail}</strong>
          </div>
        </article>
      </section>
    </div>
  );
}