import { useState } from "react";
import { motion } from "framer-motion";
import { Gauge, ShieldCheck } from "lucide-react";
import { classSixBoundaryProfiles } from "../courseData";
import { accentText, accentizeDeep } from "../utils/accentText";

const scoreLabels = accentizeDeep(["Predictibilidad", "Ambiguedad", "Intervencion humana"]);
const boundaryProfiles = accentizeDeep(classSixBoundaryProfiles);

export default function DecisionBoundarySlide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = boundaryProfiles[activeIndex];

  return (
    <div className="boundary-shell">
      <section className="boundary-row" aria-label={accentText("Fronteras entre automatizar, asistir y mantener humano")}>
        {boundaryProfiles.map((profile, index) => (
          <button
            key={profile.id}
            type="button"
            className={`boundary-button ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-pressed={index === activeIndex}
          >
            <span>{profile.label}</span>
            <strong>{profile.title}</strong>
          </button>
        ))}
      </section>

      <section className="boundary-grid">
        <motion.article
          key={active.id}
          className="boundary-detail-card"
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.22 }}
        >
          <div className="boundary-head">
            <div>
              <span className="mini-label">Decision boundary</span>
              <strong>{active.title}</strong>
            </div>
            <span className="course-chip accent">{active.signal}</span>
          </div>

          <p className="lead">{active.body}</p>

          <div className="automation-list-block">
            <span className="mini-label">{accentText("Ejemplos donde encaja")}</span>
            <div className="automation-bullet-list compact">
              {active.examples.map((item) => (
                <article key={item} className="automation-bullet-item">
                  <ShieldCheck size={15} />
                  <span>{item}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="automation-note-box compact">
            <span className="mini-label">{accentText("Control recomendado")}</span>
            <strong>{active.control}</strong>
          </div>
        </motion.article>

        <article className="boundary-score-card">
          <div className="automation-score-head">
            <div>
              <span className="mini-label">{accentText("Lectura del tipo de decision")}</span>
              <strong>{accentText("Como cambia el control")}</strong>
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
        </article>
      </section>
    </div>
  );
}