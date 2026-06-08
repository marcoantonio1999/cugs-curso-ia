import { motion } from "framer-motion";
import HeroBrain from "../components/HeroBrain";
import { accentText } from "../utils/accentText";

const cugsLogo = `${import.meta.env.BASE_URL}cugs-logo-white.png`;

export default function IntroSlide() {
  return (
    <section className="intro-hero">
      <HeroBrain />
      <div className="intro-veil" />

      <div className="intro-brand">
        <img src={cugsLogo} alt="Logo de Universidad CUGS" className="intro-logo" />
        <div>
          <span className="intro-brand-name">Universidad CUGS</span>
          <span className="intro-brand-subtitle">Academia Internacional</span>
        </div>
      </div>

      <motion.div
        className="intro-copy"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.34 }}
      >
        <p className="intro-overline">Clase 01 · Apertura del diplomado</p>
        <div className="intro-word-stack">
          {[
            ["Diplomado", "ia aplicada a negocios"],
            ["Marketing", "datos y decisiones"],
            ["Prediccion", "leer antes de ejecutar"],
            ["Ventaja", "automatizacion con criterio"],
          ].map(([word, detail], index) => (
            <motion.span
              key={word}
              className="intro-word"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08, duration: 0.24 }}
            >
              {accentText(word)}
              <small>{accentText(detail)}</small>
            </motion.span>
          ))}
        </div>
      </motion.div>

      <div className="intro-bottom">
        {["4 meses", "100% online", "lunes y miercoles", "proyecto integrador"].map((item, index) => (
          <motion.span
            key={item}
            className="intro-chip"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.05, duration: 0.18 }}
          >
            {accentText(item)}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
