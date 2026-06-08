import { CalendarRange, Flag, Layers3 } from "lucide-react";
import { coursePlanPhases } from "../courseData";
import { accentText, accentizeDeep } from "../utils/accentText";

function findSession(activeClass) {
  for (const phase of coursePlanPhases) {
    const match = phase.sessions.find((session) => session.number === activeClass);
    if (match) {
      return match;
    }
  }

  return null;
}

export default function CourseSyllabusSlide({ activeClass, sessionTitle, sessionSummary }) {
  const activeSession = findSession(activeClass);
  const viewPhases = accentizeDeep(coursePlanPhases);
  const viewSession = accentizeDeep(activeSession);

  return (
    <div className="syllabus-shell">
      <section className="syllabus-hero-card">
        <div className="syllabus-copy">
          <span className="mini-label">Temario general del diplomado</span>
          <strong>{accentText(sessionTitle)}</strong>
          <p>{accentText(sessionSummary)}</p>
          {viewSession ? (
            <div className="syllabus-current-pill">
              <span className="course-chip accent">Clase activa</span>
              <span>
                {String(viewSession.number).padStart(2, "0")} · {viewSession.title}
              </span>
            </div>
          ) : null}
        </div>

        <div className="syllabus-metric-strip">
          <article className="syllabus-metric-card">
            <CalendarRange size={18} />
            <strong>32 clases</strong>
            <span>Ruta completa del curso</span>
          </article>
          <article className="syllabus-metric-card">
            <Layers3 size={18} />
            <strong>4 fases</strong>
            <span>{accentText("Fundamentos, datos, prediccion y proyecto")}</span>
          </article>
          <article className="syllabus-metric-card">
            <Flag size={18} />
            <strong>1 proyecto</strong>
            <span>{accentText("Cierre con solucion aplicada a negocio")}</span>
          </article>
        </div>
      </section>

      <section className="syllabus-phase-grid">
        {viewPhases.map((phase) => (
          <article key={phase.title} className="syllabus-phase-card">
            <div className="syllabus-phase-head">
              <div className="syllabus-phase-copy">
                <span className="mini-label">{phase.note}</span>
                <strong>{phase.title}</strong>
              </div>
            </div>

            <div className="syllabus-session-list">
              {phase.sessions.map((session) => (
                <a
                  key={session.number}
                  href={`?deck=class-${session.number}`}
                  className={`syllabus-session-item ${session.number === activeClass ? "active" : ""}`}
                  aria-label={`Abrir ${session.title}`}
                >
                  <span>{String(session.number).padStart(2, "0")}</span>
                  <strong>{session.title}</strong>
                </a>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}