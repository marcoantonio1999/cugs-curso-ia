import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Gauge } from "lucide-react";
import { accentText, accentizeDeep } from "../utils/accentText";

export default function TabbedSignalMapSlide({ items, scoreLabels, ariaLabel, detailLabel = "Mapa" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const viewItems = accentizeDeep(items);
  const viewScoreLabels = accentizeDeep(scoreLabels);
  const active = viewItems[activeIndex];

  return (
    <div className="automation-shell">
      <section className="automation-mode-row" aria-label={accentText(ariaLabel)}>
        {viewItems.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={`automation-mode-button ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-pressed={index === activeIndex}
          >
            <span>{item.label}</span>
            <strong>{item.title}</strong>
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
              <span className="mini-label">{accentText(detailLabel)}</span>
              <strong>{active.title}</strong>
            </div>
            {active.chip ? <span className="course-chip accent">{active.chip}</span> : null}
          </div>

          <p className="lead">{active.body}</p>

          {active.primaryItems?.length ? (
            <div className="automation-list-block">
              <span className="mini-label">{active.primaryTitle}</span>
              <div className="automation-bullet-list">
                {active.primaryItems.map((item) => (
                  <article key={item} className="automation-bullet-item">
                    <ArrowRight size={15} />
                    <span>{item}</span>
                  </article>
                ))}
              </div>
            </div>
          ) : null}

          {active.pills?.length ? (
            <div className="process-kpi-list">
              {active.pills.map((item) => (
                <span key={`${active.id}-${item}`}>{item}</span>
              ))}
            </div>
          ) : null}

          {active.noteBody ? (
            <div className="automation-note-box">
              <span className="mini-label">{active.noteTitle}</span>
              <strong>{active.noteBody}</strong>
            </div>
          ) : null}
        </motion.article>

        <article className="automation-score-card">
          <div className="automation-score-head">
            <div>
              <span className="mini-label">Lectura rapida</span>
              <strong>{accentText("Como interpretar el perfil")}</strong>
            </div>
            <Gauge size={18} />
          </div>

          <div className="automation-score-list">
            {active.scores.map((score, index) => (
              <article key={`${active.id}-${viewScoreLabels[index]}`} className="automation-score-row">
                <div className="automation-score-label">
                  <span>{viewScoreLabels[index]}</span>
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

          {active.secondaryItems?.length ? (
            <div className="automation-list-block">
              <span className="mini-label">{active.secondaryTitle}</span>
              <div className="automation-bullet-list compact">
                {active.secondaryItems.map((item) => (
                  <article key={item} className="automation-bullet-item">
                    <ArrowRight size={15} />
                    <span>{item}</span>
                  </article>
                ))}
              </div>
            </div>
          ) : null}
        </article>
      </section>
    </div>
  );
}