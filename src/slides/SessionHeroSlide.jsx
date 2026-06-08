import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { accentText, accentizeDeep } from "../utils/accentText";

const visualNodePositions = [
  { top: "14%", left: "9%" },
  { top: "16%", right: "11%" },
  { bottom: "17%", left: "14%" },
  { bottom: "12%", right: "10%" },
];

export default function SessionHeroSlide({ badge, title, summary, bullets, chips, spotlight, visual }) {
  const viewBullets = accentizeDeep(bullets);
  const viewChips = accentizeDeep(chips);
  const viewSpotlight = accentizeDeep(spotlight);
  const viewVisual = accentizeDeep(visual);
  const visualNodes = Array.isArray(viewVisual?.nodes) ? viewVisual.nodes : [];
  const visualThemeClass = viewVisual?.theme ? `theme-${viewVisual.theme}` : "";

  return (
    <div className="session-hero-layout">
      <motion.section
        className="session-hero-card"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.24 }}
      >
        <span className="mini-label">{accentText(badge)}</span>
        <h3>{accentText(title)}</h3>
        <p className="lead">{accentText(summary)}</p>

        <div className="session-bullet-list">
          {viewBullets.map((item, index) => (
            <motion.article
              key={item.title}
              className="session-bullet-item"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.2 }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="session-chip-row">
          {viewChips.map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </div>
      </motion.section>

      <motion.aside
        className="session-spotlight-card"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.24 }}
      >
        <div className="session-spotlight-head">
          <Sparkles size={18} />
          <span>{viewSpotlight.label}</span>
        </div>
        <strong>{viewSpotlight.value}</strong>
        <p>{viewSpotlight.body}</p>

        <div className="session-spotlight-list">
          {viewSpotlight.points.map((item) => (
            <article key={item} className="session-spotlight-item">
              <i />
              <span>{item}</span>
            </article>
          ))}
        </div>

        {viewVisual ? (
          <motion.div
            className={`session-visual-card ${visualThemeClass}`.trim()}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.14, duration: 0.24 }}
          >
            <div className="session-visual-grid" />

            <div className="session-visual-core">
              {viewVisual.eyebrow ? <span>{viewVisual.eyebrow}</span> : null}
              <strong>{viewVisual.headline}</strong>
              {viewVisual.body ? <p>{viewVisual.body}</p> : null}
            </div>

            {visualNodes.map((node, index) => {
              const entry = typeof node === "string" ? { label: node } : node;
              const position = visualNodePositions[index % visualNodePositions.length];

              return (
                <span
                  key={`${entry.label}-${index}`}
                  className={`session-visual-node ${entry.tone ? `tone-${entry.tone}` : ""}`.trim()}
                  style={position}
                >
                  {entry.label}
                </span>
              );
            })}
          </motion.div>
        ) : null}
      </motion.aside>
    </div>
  );
}