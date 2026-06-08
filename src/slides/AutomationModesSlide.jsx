import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Gauge, ShieldCheck } from "lucide-react";
import { classFiveAutomationModes } from "../courseData";
import { accentText, accentizeDeep } from "../utils/accentText";

const scoreLabels = accentizeDeep(["Volumen", "Estructura", "Juicio", "Control"]);
const automationModes = accentizeDeep(classFiveAutomationModes);

export default function AutomationModesSlide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = automationModes[activeIndex];

  return (
    <div className="automation-shell">
      <section className="automation-mode-row" aria-label={accentText("Modos de automatizacion empresarial")}>
        {automationModes.map((mode, index) => (
          <button
            key={mode.id}
            type="button"
            className={`automation-mode-button ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-pressed={index === activeIndex}
          >
            <span>{mode.label}</span>
            <strong>{mode.title}</strong>
          </button>
        ))}
      </section>

      <section className="automation-grid">
        <motion.article
          key={active.id}
          className="automation-detail-card"
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.22 }}
        >
          <div className="automation-detail-head">
            <div>
              <span className="mini-label">{accentText("Tipo de automatizacion")}</span>
              <strong>{active.title}</strong>
            </div>
            <span className="course-chip accent">{active.signal}</span>
          </div>

          <p className="lead">{active.body}</p>

          <div className="automation-list-block">
            <span className="mini-label">{accentText("Casos donde encaja")}</span>
            <div className="automation-bullet-list">
              {active.useCases.map((item) => (
                <article key={item} className="automation-bullet-item">
                  <ArrowRight size={15} />
                  <span>{item}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="automation-note-box">
            <span className="mini-label">{accentText("Regla de oro")}</span>
            <strong>{active.nextStep}</strong>
          </div>
        </motion.article>

        <article className="automation-score-card">
          <div className="automation-score-head">
            <div>
              <span className="mini-label">{accentText("Lectura rapida")}</span>
              <strong>{accentText("Perfil de uso y riesgo")}</strong>
            </div>
            <Gauge size={18} />
          </div>

          <div className="automation-score-list">
            {active.scores.map((score, index) => (
              <article key={`${active.id}-${scoreLabels[index]}`} className="automation-score-row">
                <div className="automation-score-label">
                  <span>{scoreLabels[index]}</span>
                  <strong>{score}%</strong>
                </div>
                <div className="automation-score-track">
                  <motion.div
                    className="automation-score-fill"
                    initial={false}
                    animate={{ width: `${score}%` }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </article>
            ))}
          </div>

          <div className="automation-risk-box">
            <div className="automation-score-head compact">
              <ShieldCheck size={16} />
              <strong>{accentText("Riesgos a vigilar")}</strong>
            </div>
            <div className="automation-bullet-list compact">
              {active.risks.map((item) => (
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