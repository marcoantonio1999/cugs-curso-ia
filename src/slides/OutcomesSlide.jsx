import { motion } from "framer-motion";
import { CheckCheck, GraduationCap, LayoutDashboard, Target } from "lucide-react";
import { courseOutcomes, courseStats } from "../data";
import { accentText, accentizeDeep } from "../utils/accentText";

const statIcons = [GraduationCap, LayoutDashboard, Target, CheckCheck];

export default function OutcomesSlide() {
  const stats = accentizeDeep(courseStats);
  const outcomes = accentizeDeep(courseOutcomes);

  return (
    <div className="course-outcomes-shell">
      <section className="course-stat-strip" aria-label="Datos base del diplomado">
        {stats.map((item, index) => {
          const Icon = statIcons[index] ?? GraduationCap;

          return (
            <motion.article
              key={item.label}
              className="course-stat-card"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.22 }}
            >
              <Icon size={18} />
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </motion.article>
          );
        })}
      </section>

      <section className="course-outcomes-grid">
        <article className="course-focus-card">
          <span className="mini-label">Objetivo general</span>
          <h3>Formar criterio para implementar IA con impacto real en negocio.</h3>
          <p>
            {accentText(
              "El foco del diplomado no es acumular herramientas. Es entender donde hay valor, como leer los datos, cuando automatizar y como defender una recomendacion estrategica frente a una empresa."
            )}
          </p>
          <div className="course-focus-tags">
            {[
              "marketing",
              "ventas",
              "customer experience",
              "analitica",
              "automatizacion",
            ].map((item) => (
              <span key={item}>{accentText(item)}</span>
            ))}
          </div>
        </article>

        <div className="course-outcome-list">
          {outcomes.map((item, index) => (
            <motion.article
              key={item}
              className="course-outcome-card"
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.22 }}
            >
              <CheckCheck size={16} />
              <span>{item}</span>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}