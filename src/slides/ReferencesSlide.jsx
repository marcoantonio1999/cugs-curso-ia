import { motion } from "framer-motion";
import { references } from "../data";
import { accentizeDeep } from "../utils/accentText";

const sourceReferences = accentizeDeep(references);

export default function ReferencesSlide() {
  return (
    <div className="references-list">
      {sourceReferences.map((reference, index) => (
        <motion.a
          key={reference.url}
          className="reference-item"
          href={reference.url}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.015, duration: 0.16 }}
        >
          <span className="reference-type">{reference.type}</span>
          <span>{reference.label}</span>
        </motion.a>
      ))}
    </div>
  );
}
