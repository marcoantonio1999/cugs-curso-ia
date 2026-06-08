import { useState } from "react";
import { motion } from "framer-motion";
import { Compass, Sparkles } from "lucide-react";
import { classFourReadinessProfiles } from "../courseData";
import { accentText, accentizeDeep } from "../utils/accentText";

const readinessProfiles = accentizeDeep(classFourReadinessProfiles);

export default function ReadinessWorkbenchSlide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = readinessProfiles[activeIndex];
  const average = Math.round(active.dimensions.reduce((total, item) => total + item.score, 0) / active.dimensions.length);

  return (
    <div className="readiness-shell">
      <section className="readiness-profile-row" aria-label={accentText("Perfiles para diagnosticar madurez inicial")}>
        {readinessProfiles.map((profile, index) => (
          <button
            key={profile.id}
            type="button"
            className={`readiness-profile-button ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-pressed={index === activeIndex}
          >
            <span>{profile.label}</span>
            <strong>{profile.title}</strong>
          </button>
        ))}
      </section>

      <section className="readiness-grid">
        <motion.article
          key={active.id}
          className="readiness-detail-card"
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.22 }}
        >
          <div className="readiness-detail-head">
            <div>
              <span className="mini-label">{accentText("Diagnostico guiado")}</span>
              <strong>{active.title}</strong>
            </div>
            <span className="course-chip">{average}% promedio</span>
          </div>

          <p className="lead">{active.body}</p>

          <div className="readiness-bar-list">
            {active.dimensions.map((dimension) => (
              <article key={`${active.id}-${dimension.label}`} className="readiness-bar-row">
                <div className="readiness-bar-label">
                  <span>{dimension.label}</span>
                  <strong>{dimension.score}%</strong>
                </div>
                <div className="readiness-bar-track">
                  <motion.div
                    className="readiness-bar-fill"
                    initial={false}
                    animate={{ width: `${dimension.score}%` }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </article>
            ))}
          </div>
        </motion.article>

        <article className="readiness-recommendation-card">
          <div className="readiness-recommendation-head">
            <Compass size={18} />
            <strong>{accentText("Por donde entrar primero")}</strong>
          </div>

          <p>{active.recommendation}</p>

          <div className="readiness-win-list">
            {active.quickWins.map((item) => (
              <article key={item} className="readiness-win-item">
                <Sparkles size={15} />
                <span>{item}</span>
              </article>
            ))}
          </div>

          <div className="readiness-note-box">
            <span className="mini-label">{accentText("Como leer esto")}</span>
            <strong>{accentText("El punto no es elegir el area mas sexy; es elegir la que puede aprender mas rapido con mejor senal.")}</strong>
          </div>
        </article>
      </section>
    </div>
  );
}