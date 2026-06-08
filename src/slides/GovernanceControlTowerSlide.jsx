import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Gauge, ShieldCheck } from "lucide-react";
import { classNineGovernanceProfiles } from "../courseData";
import { accentText, accentizeDeep } from "../utils/accentText";

const scoreLabels = accentizeDeep(["Impacto", "Sensibilidad", "Madurez de control"]);
const governanceProfiles = accentizeDeep(classNineGovernanceProfiles);

export default function GovernanceControlTowerSlide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = governanceProfiles[activeIndex];

  return (
    <div className="automation-shell">
      <section className="automation-mode-row" aria-label={accentText("Frentes de etica, privacidad y gobernanza")}>
        {governanceProfiles.map((profile, index) => (
          <button
            key={profile.id}
            type="button"
            className={`automation-mode-button ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-pressed={index === activeIndex}
          >
            <span>{profile.label}</span>
            <strong>{profile.title}</strong>
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
              <span className="mini-label">Governance lens</span>
              <strong>{active.title}</strong>
            </div>
            <span className="course-chip accent">{active.signal}</span>
          </div>

          <p className="lead">{active.body}</p>

          <div className="automation-list-block">
            <span className="mini-label">Ejemplos donde aparece</span>
            <div className="automation-bullet-list">
              {active.examples.map((item) => (
                <article key={item} className="automation-bullet-item">
                  <ArrowRight size={15} />
                  <span>{item}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="process-kpi-list">
            {active.owners.map((item) => (
              <span key={`${active.id}-${item}`}>{item}</span>
            ))}
          </div>

          <div className="automation-note-box compact">
            <span className="mini-label">{accentText("Cuidado principal")}</span>
            <strong>{active.caution}</strong>
          </div>
        </motion.article>

        <article className="automation-score-card">
          <div className="automation-score-head">
            <div>
              <span className="mini-label">{accentText("Lectura del riesgo")}</span>
              <strong>{accentText("Como sube la exigencia de control")}</strong>
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
              <strong>{accentText("Controles minimos")}</strong>
            </div>
            <div className="automation-bullet-list compact">
              {active.controls.map((item) => (
                <article key={item} className="automation-bullet-item">
                  <ArrowRight size={15} />
                  <span>{item}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="automation-note-box">
            <span className="mini-label">{accentText("Disparador de revision")}</span>
            <strong>{active.trigger}</strong>
          </div>
        </article>
      </section>
    </div>
  );
}