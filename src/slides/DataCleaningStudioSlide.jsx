import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { classThirteenCleaningProfiles } from "../courseData";
import { accentText, accentizeDeep } from "../utils/accentText";

const cleaningProfiles = accentizeDeep(classThirteenCleaningProfiles);

export default function DataCleaningStudioSlide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = cleaningProfiles[activeIndex];

  return (
    <div className="automation-studio-shell">
      <section className="automation-case-row" aria-label={accentText("Casos para limpieza y consistencia de datos")}>
        {cleaningProfiles.map((profile, index) => (
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
              <span className="mini-label">Cleaning studio</span>
              <strong>{active.title}</strong>
            </div>
            <span className="course-chip accent">{active.focus}</span>
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
            <span className="mini-label">{accentText("Problemas tipicos")}</span>
            <div className="automation-bullet-list">
              {active.issues.map((item) => (
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
            <strong>{accentText("Palancas de correccion")}</strong>
          </div>

          <div className="automation-bullet-list compact">
            {active.fixes.map((item) => (
              <article key={item} className="automation-bullet-item">
                <ArrowRight size={15} />
                <span>{item}</span>
              </article>
            ))}
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