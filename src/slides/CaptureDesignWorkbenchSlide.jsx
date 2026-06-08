import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Radar } from "lucide-react";
import { classTwelveCaptureProfiles } from "../courseData";
import { accentText, accentizeDeep } from "../utils/accentText";

const captureProfiles = accentizeDeep(classTwelveCaptureProfiles);

export default function CaptureDesignWorkbenchSlide() {
  const [profileIndex, setProfileIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const activeProfile = captureProfiles[profileIndex];
  const activeStep = activeProfile.steps[stepIndex];

  return (
    <div className="process-shell">
      <section className="process-profile-row" aria-label={accentText("Workbench de recoleccion de datos")}>
        {captureProfiles.map((profile, index) => (
          <button
            key={profile.id}
            type="button"
            className={`process-profile-button ${index === profileIndex ? "active" : ""}`}
            onClick={() => {
              setProfileIndex(index);
              setStepIndex(0);
            }}
            aria-pressed={index === profileIndex}
          >
            <span>{profile.label}</span>
            <strong>{profile.title}</strong>
          </button>
        ))}
      </section>

      <section className="process-grid">
        <motion.article
          key={activeProfile.id}
          className="process-map-card"
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.22 }}
        >
          <div className="process-map-head">
            <div>
              <span className="mini-label">Capture workbench</span>
              <strong>{activeProfile.title}</strong>
            </div>
            <span className="course-chip accent">{activeProfile.label}</span>
          </div>

          <p className="lead">{activeProfile.body}</p>

          <div className="process-step-row">
            {activeProfile.steps.map((step, index) => (
              <button
                key={step.key}
                type="button"
                className={`process-step-button ${index === stepIndex ? "active" : ""}`}
                onClick={() => setStepIndex(index)}
                aria-pressed={index === stepIndex}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step.title}</strong>
              </button>
            ))}
          </div>

          <motion.article
            key={`${activeProfile.id}-${activeStep.key}`}
            className="process-step-panel"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="process-step-panel-head">
              <div>
                <span className="mini-label">Paso seleccionado</span>
                <strong>{activeStep.title}</strong>
              </div>
              <span className="course-chip">{activeStep.boundary}</span>
            </div>

            <p>{activeStep.detail}</p>

            <div className="process-step-block">
              <span className="mini-label">{accentText("Diseno recomendado")}</span>
              <strong>{activeStep.automation}</strong>
            </div>

            <div className="process-step-block accent">
              <span className="mini-label">{accentText("Guardrail")}</span>
              <strong>{activeStep.guardrail}</strong>
            </div>
          </motion.article>
        </motion.article>

        <article className="process-summary-card">
          <div className="process-map-head compact">
            <Radar size={16} />
            <strong>{accentText("Lectura ejecutiva de captura")}</strong>
          </div>

          <div className="process-kpi-list">
            {activeProfile.kpis.map((kpi) => (
              <span key={`${activeProfile.id}-${kpi}`}>{kpi}</span>
            ))}
          </div>

          <div className="process-note-box">
            <span className="mini-label">{accentText("Nota de criterio")}</span>
            <strong>{activeProfile.note}</strong>
          </div>

          <div className="automation-bullet-list compact">
            {activeProfile.steps.map((step) => (
              <article key={`${activeProfile.id}-${step.key}-summary`} className="automation-bullet-item">
                <ArrowRight size={15} />
                <span>
                  {step.title}: {step.boundary}
                </span>
              </article>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}