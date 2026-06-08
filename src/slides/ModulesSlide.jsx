import { motion } from "framer-motion";
import { FolderKanban } from "lucide-react";
import { courseModules } from "../data";
import { accentText, accentizeDeep } from "../utils/accentText";

export default function ModulesSlide() {
  const modules = accentizeDeep(courseModules);

  return (
    <div className="course-modules-shell">
      <div className="course-modules-grid">
        {modules.map((module, index) => (
          <motion.article
            key={module.id}
            className="course-module-card"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06, duration: 0.24 }}
          >
            <div className="course-module-head">
              <span>{module.id}</span>
              <strong>{module.title}</strong>
            </div>
            <p>{module.summary}</p>
            <div className="course-topic-list">
              {module.topics.map((topic) => (
                <article key={topic} className="course-topic-item">
                  <i />
                  <span>{topic}</span>
                </article>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <motion.article
        className="course-project-card"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.24 }}
      >
        <div className="course-project-head">
          <FolderKanban size={18} />
          <div>
            <span className="mini-label">Proyecto integrador final</span>
            <strong>{accentText("Una solucion aplicada a un desafio real de negocio.")}</strong>
          </div>
        </div>
        <p>
          {accentText(
            "Durante el diplomado el alumno construye una propuesta que conecta datos, modelo aplicado y recomendacion estrategica para marketing, ventas o experiencia del cliente."
          )}
        </p>
      </motion.article>
    </div>
  );
}