import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3 } from "lucide-react";
import { classFifteenVisualizationProfiles } from "../courseData";
import { accentText, accentizeDeep } from "../utils/accentText";

const visualizationProfiles = accentizeDeep(classFifteenVisualizationProfiles);

export default function DecisionVisualizationStudioSlide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = visualizationProfiles[activeIndex];

  return (
    <div className="automation-studio-shell">
      <section className="automation-case-row" aria-label={accentText("Arquetipos de visualizacion para decision")}>
        {visualizationProfiles.map((profile, index) => (
          <button
            key={profile.id}
            type="button"
            className={`automation-case-button ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-pressed={index === activeIndex}
          >
            <span>{profile.label}</span>
            <strong>{profile.title}</strong>
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
              <span className="mini-label">Visualization studio</span>
              <strong>{active.title}</strong>
            </div>
            <span className="course-chip accent">{active.audience}</span>
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
            <span className="mini-label">{accentText("Pregunta que debe responder")}</span>
            <strong>{active.question}</strong>
          </div>
        </motion.article>

        <article className="automation-case-sidecard">
          <div className="automation-score-head compact">
            <BarChart3 size={16} />
            <strong>{accentText("Reglas de diseno")}</strong>
          </div>

          <div className="automation-bullet-list compact">
            {active.designRules.map((item) => (
              <article key={item} className="automation-bullet-item">
                <ArrowRight size={15} />
                <span>{item}</span>
              </article>
            ))}
          </div>

          <div className="automation-list-block">
            <span className="mini-label">{accentText("Fallas comunes")}</span>
            <div className="automation-bullet-list compact">
              {active.failureModes.map((item) => (
                <article key={item} className="automation-bullet-item">
                  <ArrowRight size={15} />
                  <span>{item}</span>
                </article>
              ))}
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}