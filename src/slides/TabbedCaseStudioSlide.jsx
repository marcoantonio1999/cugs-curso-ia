import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { accentText, accentizeDeep } from "../utils/accentText";

export default function TabbedCaseStudioSlide({ items, ariaLabel, detailLabel = "Case studio" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const viewItems = accentizeDeep(items);
  const active = viewItems[activeIndex];

  return (
    <div className="automation-studio-shell">
      <section className="automation-case-row" aria-label={accentText(ariaLabel)}>
        {viewItems.map((item, index) => (
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
              <span className="mini-label">{accentText(detailLabel)}</span>
              <strong>{active.title}</strong>
            </div>
            {active.chip ? <span className="course-chip accent">{active.chip}</span> : null}
          </div>

          <p className="lead">{active.body}</p>

          {active.metrics?.length ? (
            <div className="automation-case-metrics">
              {active.metrics.map((metric) => (
                <article key={`${active.id}-${metric.label}`} className="automation-case-metric">
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </article>
              ))}
            </div>
          ) : null}

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
        </motion.article>

        <article className="automation-case-sidecard">
          <div className="automation-score-head compact">
            <Sparkles size={16} />
            <strong>{active.sideTitle}</strong>
          </div>

          {active.sideItems?.length ? (
            <div className="automation-bullet-list compact">
              {active.sideItems.map((item) => (
                <article key={item} className="automation-bullet-item">
                  <ArrowRight size={15} />
                  <span>{item}</span>
                </article>
              ))}
            </div>
          ) : null}

          {active.noteBody ? (
            <div className="automation-note-box compact">
              <span className="mini-label">{active.noteTitle}</span>
              <strong>{active.noteBody}</strong>
            </div>
          ) : null}
        </article>
      </section>
    </div>
  );
}