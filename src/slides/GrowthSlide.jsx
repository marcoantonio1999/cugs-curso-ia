import { useState } from "react";
import { motion } from "framer-motion";
import { Area, AreaChart, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Building2, LineChart, Rocket } from "lucide-react";
import MetricTooltip from "../components/MetricTooltip";
import { aiGrowthData, businessUseData, companyExamples } from "../data";
import { accentText, accentizeDeep } from "../utils/accentText";

const visualScenes = [
  {
    title: "Direccion ejecutiva",
    note: "IA como lectura de negocio en salas de decision.",
    image: `${import.meta.env.BASE_URL}growth-scene-boardroom.svg`,
    alt: "Ilustracion de una sala ejecutiva con paneles y crecimiento de inversion en inteligencia artificial.",
  },
  {
    title: "Copilotos internos",
    note: "Asistentes, busqueda semantica y trabajo aumentado.",
    image: `${import.meta.env.BASE_URL}growth-scene-copilot.svg`,
    alt: "Ilustracion de una interfaz de copiloto empresarial con paneles y sugerencias.",
  },
  {
    title: "Operacion aumentada",
    note: "Forecast, monitoreo y automatizacion en flujos reales.",
    image: `${import.meta.env.BASE_URL}growth-scene-operations.svg`,
    alt: "Ilustracion de una operacion empresarial con tableros y monitoreo impulsado por inteligencia artificial.",
  },
];

const companyMarks = {
  Microsoft: { type: "tiles", label: "Microsoft" },
  JPMorgan: { type: "word", label: "JPMC" },
  Walmart: { type: "spark", label: "Walmart" },
  Duolingo: { type: "word", label: "duo" },
  Pfizer: { type: "word", label: "pfizer" },
  Siemens: { type: "word", label: "SIEMENS" },
  "Mercado Libre": { type: "word", label: "ML" },
  Notion: { type: "word", label: "N" },
};

const growthNotes = {
  2019: "Base pre-GenAI: la IA se concentraba en analítica, visión y automatización especializada.",
  2020: "Aceleración digital por trabajo remoto, nube y automatización.",
  2021: "Pico de inversión privada previo al ajuste del mercado tecnológico.",
  2022: "Corrección del mercado, pero la infraestructura de IA siguió madurando.",
  2023: "La IA generativa pasó de laboratorio a producto masivo.",
  2024: "Empresas integran copilotos, búsqueda semántica y agentes internos.",
  2025: "Nuevo salto de inversión: infraestructura, modelos fundacionales y aplicaciones empresariales.",
};

export default function GrowthSlide() {
  const [selectedYear, setSelectedYear] = useState(aiGrowthData.at(-1).year);
  const selectedPoint = aiGrowthData.find((point) => point.year === selectedYear) ?? aiGrowthData.at(-1);
  const firstInvestment = aiGrowthData[0].investment;
  const growthMultiple = selectedPoint.investment / firstInvestment;
  const scenes = accentizeDeep(visualScenes);
  const uses = accentizeDeep(businessUseData);
  const companies = accentizeDeep(companyExamples);
  const notes = accentizeDeep(growthNotes);

  return (
    <div className="growth-dashboard">
      <section className="growth-chart-card">
        <div className="growth-card-head">
          <div>
            <span className="mini-label">Inversión corporativa global en IA</span>
            <strong>{selectedPoint.year}: ${selectedPoint.investment.toFixed(1)}B USD</strong>
          </div>
          <motion.div key={selectedPoint.year} className="growth-multiple" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <LineChart size={16} />
            <span>{growthMultiple.toFixed(1)}x vs 2019</span>
          </motion.div>
        </div>

        <div className="growth-chart-shell">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={aiGrowthData}
              margin={{ top: 22, right: 18, left: 8, bottom: 8 }}
              onMouseMove={(state) => {
                if (state?.activePayload?.[0]?.payload?.year) {
                  setSelectedYear(state.activePayload[0].payload.year);
                }
              }}
            >
              <defs>
                <linearGradient id="investmentFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ff63b0" stopOpacity={0.42} />
                  <stop offset="48%" stopColor="#2fd7e5" stopOpacity={0.22} />
                  <stop offset="100%" stopColor="#2fd7e5" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="4 7" vertical={false} stroke="rgba(110, 212, 228, 0.12)" />
              <XAxis dataKey="year" tickLine={false} axisLine={false} tickMargin={10} stroke="rgba(227,245,255,0.7)" />
              <YAxis tickLine={false} axisLine={false} tickMargin={10} width={42} unit="B" stroke="rgba(227,245,255,0.7)" />
              <Tooltip content={(props) => <MetricTooltip {...props} suffix=" B USD" />} />
              <ReferenceLine x={selectedYear} stroke="rgba(255, 99, 176, 0.72)" strokeDasharray="5 5" />
              <Area
                type="monotone"
                dataKey="investment"
                stroke="#80e9f5"
                strokeWidth={3}
                fill="url(#investmentFill)"
                activeDot={{ r: 6, stroke: "#ff63b0", strokeWidth: 3, fill: "#07131f" }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="growth-visual-strip" aria-label={accentText("Escenas de adopcion empresarial de IA")}>
          {scenes.map((scene, index) => (
            <motion.article
              key={scene.title}
              className="growth-visual-card"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + index * 0.05, duration: 0.24 }}
            >
              <div className="growth-visual-image-shell">
                <img src={scene.image} alt={scene.alt} className="growth-visual-image" loading="eager" draggable="false" />
              </div>
              <div className="growth-visual-copy">
                <strong>{scene.title}</strong>
                <span>{scene.note}</span>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="growth-year-strip">
          {aiGrowthData.map((point) => (
            <button
              type="button"
              key={point.year}
              className={`growth-year ${selectedYear === point.year ? "active" : ""}`}
              onClick={() => setSelectedYear(point.year)}
            >
              <span>{point.year}</span>
              <strong>${Math.round(point.investment)}B</strong>
            </button>
          ))}
        </div>

        <motion.div key={selectedYear} className="growth-note" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          <Rocket size={17} />
          <span>{notes[selectedYear]}</span>
        </motion.div>
      </section>

      <section className="growth-side-card">
        <div className="growth-card-head">
          <div>
            <span className="mini-label">Adopción reportada</span>
            <strong>La IA ya se volvió infraestructura empresarial.</strong>
          </div>
        </div>

        <div className="growth-stat-grid">
          {uses.map((item, index) => (
            <motion.article
              key={item.label}
              className="growth-stat"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.22 }}
            >
              <strong>{item.value}%</strong>
              <span>{item.label}</span>
            </motion.article>
          ))}
        </div>

        <div className="company-wall">
          <div className="company-wall-head">
            <Building2 size={16} />
            <span>{accentText("Empresas reconocibles")}</span>
          </div>

          <div className="logo-company-grid">
            {companies.map((company, index) => {
              const mark = companyMarks[company.name];
              return (
                <motion.article
                  key={company.name}
                  className="logo-company-card"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.08 + index * 0.035, duration: 0.18 }}
                >
                  <div className={`company-logo-box mark-${mark.type}`} aria-label={`${company.name} logo`}>
                    {mark.type === "tiles" ? (
                      <span className="microsoft-tiles">
                        <i />
                        <i />
                        <i />
                        <i />
                      </span>
                    ) : mark.type === "spark" ? (
                      <span className="walmart-spark">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </span>
                    ) : (
                      <span>{mark.label}</span>
                    )}
                  </div>
                  <div>
                    <strong>{company.name}</strong>
                    <span>{company.use}</span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
