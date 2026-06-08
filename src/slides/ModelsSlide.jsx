import { motion } from "framer-motion";
import BrandMark from "../components/BrandMark";
import { modelCards } from "../data";
import { accentizeDeep } from "../utils/accentText";

const cards = accentizeDeep(modelCards);

export default function ModelsSlide() {
  return (
    <div className="models-grid">
      {cards.map((card, index) => (
        <motion.article
          key={card.provider}
          className="model-card"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.04, duration: 0.2 }}
        >
          <div className="model-header">
            <div className="model-provider">
              <BrandMark provider={card.provider} />
              <div>
                <span className="provider-name">{card.provider}</span>
                <h3>{card.model}</h3>
              </div>
            </div>
            <span className="currency-badge">{card.currency}</span>
          </div>
          <div className="model-stats">
            <div>
              <span>Contexto</span>
              <strong>{card.context}</strong>
            </div>
            <div>
              <span>Input</span>
              <strong>{card.input}</strong>
            </div>
            <div>
              <span>Output</span>
              <strong>{card.output}</strong>
            </div>
          </div>
          <p className="model-note">{card.note}</p>
        </motion.article>
      ))}
    </div>
  );
}
