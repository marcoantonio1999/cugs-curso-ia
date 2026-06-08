import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { kickoffCases } from "../data";
import { accentText, accentizeDeep } from "../utils/accentText";

export default function CasesSlide() {
  const cases = accentizeDeep(kickoffCases);

  return (
    <div className="course-case-grid">
      {cases.map((item, index) => (
        <motion.article
          key={`${item.area}-${item.company}`}
          className="course-case-card"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.06, duration: 0.22 }}
        >
          <div className="course-card-topline">
            <span className="course-chip">{item.area}</span>
            <span className="course-case-impact">{item.impact}</span>
          </div>

          <div className="course-card-copy">
            <strong>{item.company}</strong>
            <p>{item.move}</p>
          </div>

          <div className="course-case-footer">
            <Building2 size={16} />
            <span>{accentText("Ejemplo util para abrir conversacion con el grupo.")}</span>
          </div>
        </motion.article>
      ))}
    </div>
  );
}