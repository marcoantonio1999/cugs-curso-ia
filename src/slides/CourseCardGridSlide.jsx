import { motion } from "framer-motion";
import { accentText, accentizeDeep } from "../utils/accentText";

export default function CourseCardGridSlide({ intro, items, columns = 2, showcase }) {
  const viewItems = accentizeDeep(items);
  const viewShowcase = accentizeDeep(showcase);
  const showcasePoints = Array.isArray(viewShowcase?.points) ? viewShowcase.points : [];
  const showcaseStats = Array.isArray(viewShowcase?.stats) ? viewShowcase.stats : [];
  const showcaseThemeClass = viewShowcase?.theme ? `theme-${viewShowcase.theme}` : "";

  return (
    <div className="course-grid-slide">
      {intro ? <p className="lead">{accentText(intro)}</p> : null}

      {viewShowcase ? (
        <motion.section
          className={`course-grid-showcase ${showcaseThemeClass}`.trim()}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.24 }}
        >
          <div className="course-grid-showcase-copy">
            {viewShowcase.eyebrow ? <span className="mini-label">{viewShowcase.eyebrow}</span> : null}
            <strong>{viewShowcase.title}</strong>
            {viewShowcase.body ? <p>{viewShowcase.body}</p> : null}

            {showcasePoints.length ? (
              <div className="course-grid-showcase-points">
                {showcasePoints.map((point) => (
                  <span key={point}>{point}</span>
                ))}
              </div>
            ) : null}
          </div>

          <div className="course-grid-beacon">
            <div className="course-grid-beacon-grid" />

            <div className="course-grid-beacon-core">
              {viewShowcase.coreLabel ? <span>{viewShowcase.coreLabel}</span> : null}
              <strong>{viewShowcase.coreValue ?? viewShowcase.title}</strong>
            </div>

            {showcaseStats.length ? (
              <div className="course-grid-showcase-stats">
                {showcaseStats.map((stat) => (
                  <article key={`${stat.value}-${stat.label}`} className="course-grid-showcase-stat">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </article>
                ))}
              </div>
            ) : null}
          </div>
        </motion.section>
      ) : null}

      <div className="course-card-grid" style={{ "--course-card-columns": columns }}>
        {viewItems.map((item, index) => (
          <motion.article
            key={`${item.kicker}-${item.title}`}
            className="course-grid-card"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.22 }}
          >
            <div className="course-grid-card-head">
              <span className="course-chip">{item.kicker}</span>
              {item.metric ? <span className="course-grid-metric">{item.metric}</span> : null}
            </div>

            <strong>{item.title}</strong>
            <p>{item.body}</p>

            {item.tags?.length ? (
              <div className="course-grid-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            ) : null}
          </motion.article>
        ))}
      </div>
    </div>
  );
}