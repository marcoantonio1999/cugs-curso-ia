import { motion } from "framer-motion";
import { ShieldAlert, Sparkles } from "lucide-react";
import { accentText, accentizeDeep } from "../utils/accentText";

export default function SplitChecklistSlide({ intro, leftTitle, leftItems, rightTitle, rightItems, note }) {
  const viewLeftItems = accentizeDeep(leftItems);
  const viewRightItems = accentizeDeep(rightItems);

  return (
    <div className="course-split-shell">
      {intro ? <p className="lead">{accentText(intro)}</p> : null}

      <div className="course-split-grid">
        <motion.article
          className="course-split-card"
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.22 }}
        >
          <div className="course-split-head">
            <ShieldAlert size={18} />
            <strong>{accentText(leftTitle)}</strong>
          </div>

          <div className="course-split-list">
            {viewLeftItems.map((item) => (
              <article key={item.title} className="course-split-item">
                <span />
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </motion.article>

        <motion.article
          className="course-split-card accent"
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.22, delay: 0.06 }}
        >
          <div className="course-split-head">
            <Sparkles size={18} />
            <strong>{accentText(rightTitle)}</strong>
          </div>

          <div className="course-split-list">
            {viewRightItems.map((item) => (
              <article key={item.title} className="course-split-item">
                <span />
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </motion.article>
      </div>

      {note ? <p className="signal-caption">{accentText(note)}</p> : null}
    </div>
  );
}