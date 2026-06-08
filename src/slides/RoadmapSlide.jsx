import { motion } from "framer-motion";
import { ArrowRight, Compass, Flag, NotebookPen } from "lucide-react";
import { classRoadmap } from "../data";
import { accentText, accentizeDeep } from "../utils/accentText";

const sections = [
  { key: "today", title: "En esta clase", icon: Compass, items: classRoadmap.today },
  { key: "next", title: "Proxima clase", icon: ArrowRight, items: classRoadmap.next },
  { key: "deliverables", title: "Te llevas", icon: Flag, items: classRoadmap.deliverables },
];

export default function RoadmapSlide() {
  const viewSections = accentizeDeep(sections);

  return (
    <div className="course-roadmap-shell">
      <section className="course-roadmap-grid">
        {viewSections.map((section, index) => {
          const Icon = section.icon;

          return (
            <motion.article
              key={section.key}
              className="course-roadmap-card"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06, duration: 0.22 }}
            >
              <div className="course-roadmap-head">
                <Icon size={18} />
                <strong>{section.title}</strong>
              </div>
              <div className="course-roadmap-list">
                {section.items.map((item) => (
                  <article key={item} className="course-roadmap-item">
                    <i />
                    <span>{item}</span>
                  </article>
                ))}
              </div>
            </motion.article>
          );
        })}
      </section>

      <motion.article
        className="course-prompt-card"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18, duration: 0.22 }}
      >
        <div className="course-roadmap-head">
          <NotebookPen size={18} />
          <strong>{accentText("Pregunta de arranque para abrir la clase")}</strong>
        </div>
        <p>
          {accentText(
            "Si hoy tuvieras que aplicar IA en una sola parte de tu negocio o trabajo, donde estaria el mayor retorno: marketing, ventas, servicio, operacion o analitica."
          )}
        </p>
      </motion.article>
    </div>
  );
}