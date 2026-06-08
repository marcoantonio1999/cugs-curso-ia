import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { classFiveAutomationCases } from "../courseData";
import { accentText, accentizeDeep } from "../utils/accentText";

const automationCases = accentizeDeep(classFiveAutomationCases);

export default function AutomationCaseStudioSlide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = automationCases[activeIndex];

  return (
    <div className="automation-studio-shell">
      <section className="automation-case-row" aria-label={accentText("Casos para estudiar automatizacion empresarial")}>
        {automationCases.map((item, index) => (
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
              <span className="mini-label">{accentText("Caso estudiado")}</span>
              <strong>{active.title}</strong>
            </div>
            <span className="course-chip">{active.fit}</span>
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
            <span className="mini-label">{accentText("Condiciones minimas")}</span>
            <div className="automation-bullet-list">
              {active.prerequisites.map((item) => (
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
            <Sparkles size={16} />
            <strong>{accentText("Controles para no romper el flujo")}</strong>
          </div>

          <div className="automation-bullet-list compact">
            {active.controls.map((item) => (
              <article key={item} className="automation-bullet-item">
                <ArrowRight size={15} />
                <span>{item}</span>
              </article>
            ))}
          </div>

          <div className="automation-note-box compact">
            <span className="mini-label">{accentText("Como usar este slide en clase")}</span>
            <strong>{accentText("Sirve para discutir que automatizacion encaja mejor segun estructura del proceso, excepciones y costo del error.")}</strong>
          </div>
        </article>
      </section>
    </div>
  );
}