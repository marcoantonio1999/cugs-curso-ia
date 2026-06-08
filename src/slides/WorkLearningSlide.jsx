import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, GraduationCap, ScanSearch, ShieldAlert, Sparkles, Zap } from "lucide-react";
import { laborExposureData, learningSignals } from "../data";
import { accentText, accentizeDeep } from "../utils/accentText";

const impactCards = [
  {
    icon: BriefcaseBusiness,
    value: "88%",
    label: "organizaciones con IA",
    note: "Stanford AI Index 2026",
  },
  {
    icon: GraduationCap,
    value: "75%",
    label: "estudiantes 16+ usan GenAI",
    note: "OECD 2026",
  },
  {
    icon: ArrowUpRight,
    value: "60%",
    label: "exposición en economías avanzadas",
    note: "IMF 2024",
  },
];

const signalIcons = {
  Velocidad: Zap,
  Riesgo: ShieldAlert,
  Cambio: ScanSearch,
};

const impactMetrics = accentizeDeep(impactCards);
const exposureData = accentizeDeep(laborExposureData);
const signals = accentizeDeep(learningSignals);

export default function WorkLearningSlide() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = exposureData[selectedIndex];

  return (
    <div className="work-dashboard">
      <section className="work-metric-strip" aria-label={accentText("Indicadores clave de adopcion de IA")}>
        {impactMetrics.map((card, index) => (
          <motion.article
            key={card.label}
            className="work-kpi"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.22 }}
          >
            <card.icon size={19} />
            <strong>{card.value}</strong>
            <span>{card.label}</span>
            <small>{card.note}</small>
          </motion.article>
        ))}
      </section>

      <section className="exposure-panel">
        <div className="work-panel-head">
          <div>
            <span className="mini-label">Exposición laboral a IA generativa</span>
            <strong>{selected.group}</strong>
          </div>
          <motion.div
            key={selected.exposure}
            className="exposure-score"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {selected.exposure}%
          </motion.div>
        </div>

        <div className="exposure-bars">
          {exposureData.map((item, index) => (
            <button
              type="button"
              key={item.group}
              className={`exposure-row ${selectedIndex === index ? "active" : ""}`}
              aria-pressed={selectedIndex === index}
              data-testid={`exposure-${index}`}
              onMouseEnter={() => setSelectedIndex(index)}
              onPointerEnter={() => setSelectedIndex(index)}
              onPointerDown={() => setSelectedIndex(index)}
              onFocus={() => setSelectedIndex(index)}
              onClick={() => setSelectedIndex(index)}
            >
              <span>{item.group}</span>
              <div className="exposure-track">
                <motion.div
                  className="exposure-fill"
                  animate={{ width: `${item.exposure}%` }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <strong>{item.exposure}%</strong>
            </button>
          ))}
        </div>

        <div className="exposure-source">{accentText("Fuente: IMF Staff Discussion Note, 2024.")}</div>
      </section>

      <section className="impact-orbit">
        <div className="orbit-grid" />
        <motion.div className="orbit-ring" animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} />
        <motion.div
          className="orbit-core"
          animate={{ boxShadow: ["0 0 22px rgba(47, 215, 229, 0.2)", "0 0 42px rgba(255, 99, 176, 0.28)", "0 0 22px rgba(47, 215, 229, 0.2)"] }}
          transition={{ duration: 2.6, repeat: Infinity }}
        >
          IA
        </motion.div>
        {[
          { label: accentText("Tareas expuestas"), value: selected.exposure, x: "50%", y: "13%" },
          { label: "Productividad", value: 88, x: "84%", y: "46%" },
          { label: accentText("Uso estudiantil"), value: 75, x: "50%", y: "84%" },
          { label: accentText("Evaluacion"), value: 64, x: "16%", y: "49%" },
        ].map((node, index) => (
          <motion.div
            key={node.label}
            className="orbit-node"
            style={{ left: node.x, top: node.y }}
            animate={{ scale: [1, 1.045, 1], opacity: [0.86, 1, 0.86] }}
            transition={{ duration: 2.3, delay: index * 0.2, repeat: Infinity }}
          >
            <strong>{node.value}%</strong>
            <span>{node.label}</span>
          </motion.div>
        ))}
      </section>

      <section className="learning-panel">
        <div className="work-panel-head">
          <div>
            <span className="mini-label">Efecto en aprendizaje</span>
            <strong>Más velocidad, menos señal si no hay práctica.</strong>
          </div>
          <Sparkles size={20} />
        </div>

        <div className="learning-signal-list">
          {signals.map((signal, index) => {
            const Icon = signalIcons[signal.title] ?? ScanSearch;
            return (
              <motion.article
                key={signal.title}
                className="learning-signal"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.07, duration: 0.24 }}
              >
                <Icon size={18} />
                <div>
                  <strong>{signal.title}</strong>
                  <span>{signal.body}</span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
