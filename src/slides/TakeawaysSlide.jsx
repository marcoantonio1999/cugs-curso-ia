import { motion } from "framer-motion";
import { ArrowRight, Flag, NotebookPen } from "lucide-react";
import { accentText, accentizeDeep } from "../utils/accentText";

export default function TakeawaysSlide({ focus, takeaways, nextClass, question, closingPanel }) {
  const viewFocus = accentizeDeep(focus);
  const viewTakeaways = accentizeDeep(takeaways);
  const viewNextClass = accentizeDeep(nextClass);
  const viewClosingPanel = accentizeDeep(closingPanel);
  const closingSteps = Array.isArray(viewClosingPanel?.steps) ? viewClosingPanel.steps : [];
  const closingMetrics = Array.isArray(viewClosingPanel?.metrics) ? viewClosingPanel.metrics : [];
  const closingThemeClass = viewClosingPanel?.theme ? `theme-${viewClosingPanel.theme}` : "";

  return (
    <div className="takeaways-shell">
      <motion.article
        className="takeaways-focus-card"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22 }}
      >
        <div className="takeaways-head">
          <Flag size={18} />
          <strong>{viewFocus.title}</strong>
        </div>
        <p>{viewFocus.body}</p>
        <div className="takeaways-chip-row">
          {viewFocus.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </motion.article>

      <motion.article
        className="takeaways-list-card"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, delay: 0.05 }}
      >
        <div className="takeaways-head">
          <NotebookPen size={18} />
          <strong>{accentText("Ideas que deben quedar claras")}</strong>
        </div>
        <div className="takeaways-list">
          {viewTakeaways.map((item) => (
            <article key={item} className="takeaways-item">
              <ArrowRight size={15} />
              <span>{item}</span>
            </article>
          ))}
        </div>
      </motion.article>

      <motion.article
        className="takeaways-next-card"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, delay: 0.1 }}
      >
        <div className="takeaways-head">
          <ArrowRight size={18} />
          <strong>{viewNextClass.title}</strong>
        </div>
        <p>{viewNextClass.body}</p>
        <div className="takeaways-question-box">
          <span className="mini-label">{accentText("Pregunta para abrir discusion")}</span>
          <strong>{accentText(question)}</strong>
        </div>
      </motion.article>

      {viewClosingPanel ? (
        <motion.article
          className={`takeaways-bridge-card ${closingThemeClass}`.trim()}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, delay: 0.14 }}
        >
          <div className="takeaways-bridge-head">
            {viewClosingPanel.label ? <span className="mini-label">{viewClosingPanel.label}</span> : null}
            <strong>{viewClosingPanel.title}</strong>
            {viewClosingPanel.body ? <p>{viewClosingPanel.body}</p> : null}
          </div>

          <div className="takeaways-bridge-body">
            {closingSteps.length ? (
              <div className="takeaways-bridge-route">
                {closingSteps.map((step, index) => (
                  <article key={`${step}-${index}`} className="takeaways-bridge-step">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{step}</strong>
                  </article>
                ))}
              </div>
            ) : null}

            {closingMetrics.length ? (
              <div className="takeaways-bridge-metrics">
                {closingMetrics.map((metric) => (
                  <article key={`${metric.value}-${metric.label}`} className="takeaways-bridge-metric">
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </article>
                ))}
              </div>
            ) : null}
          </div>
        </motion.article>
      ) : null}
    </div>
  );
}