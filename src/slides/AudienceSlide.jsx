import { motion } from "framer-motion";
import { BriefcaseBusiness, ChartColumnBig, Megaphone, Rocket } from "lucide-react";
import { audienceProfiles } from "../data";
import { accentizeDeep } from "../utils/accentText";

const icons = {
  strategy: BriefcaseBusiness,
  marketing: Megaphone,
  data: ChartColumnBig,
  founder: Rocket,
};

const audienceVisuals = {
  strategy: {
    image: `${import.meta.env.BASE_URL}audience-strategy.svg`,
    alt: "Ilustracion de una sala estrategica con paneles y lectura ejecutiva de negocio.",
  },
  marketing: {
    image: `${import.meta.env.BASE_URL}audience-marketing.svg`,
    alt: "Ilustracion de un embudo de marketing con segmentos y conversion.",
  },
  data: {
    image: `${import.meta.env.BASE_URL}audience-data.svg`,
    alt: "Ilustracion de analitica y tableros de datos con series y comparaciones.",
  },
  founder: {
    image: `${import.meta.env.BASE_URL}audience-ops.svg`,
    alt: "Ilustracion de operacion empresarial con monitoreo y automatizacion.",
  },
};

export default function AudienceSlide() {
  const profiles = accentizeDeep(audienceProfiles);
  const visuals = accentizeDeep(audienceVisuals);

  return (
    <div className="course-audience-grid">
      {profiles.map((profile, index) => {
        const Icon = icons[profile.key] ?? BriefcaseBusiness;
        const visual = visuals[profile.key];

        return (
          <motion.article
            key={profile.title}
            className="course-audience-card"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06, duration: 0.24 }}
          >
            <div className="course-card-topline">
              <span className="course-icon-shell">
                <Icon size={18} />
              </span>
              <span className="course-chip">{profile.signal}</span>
            </div>

            {visual ? (
              <div className="course-audience-visual">
                <img src={visual.image} alt={visual.alt} className="course-audience-image" loading="eager" draggable="false" />
              </div>
            ) : null}

            <div className="course-card-copy">
              <strong>{profile.title}</strong>
              <p>{profile.body}</p>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}