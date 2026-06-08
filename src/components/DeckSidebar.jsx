import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { accentText, accentizeDeep } from "../utils/accentText";

export default function DeckSidebar({ decks, activeDeckIndex, onSelectDeck, deck, sections, activeIndex, onSelect }) {
  const [isDeckMenuOpen, setIsDeckMenuOpen] = useState(false);
  const viewDeck = accentizeDeep(deck);
  const viewDecks = accentizeDeep(decks);
  const viewSections = accentizeDeep(sections);

  const handleSelectDeck = (index) => {
    onSelectDeck(index);
    setIsDeckMenuOpen(false);
  };

  return (
    <aside className="deck-sidebar">
      <div className="brand-block">
        <p className="eyebrow">CUGS · Diplomado 2026</p>
        <h1 className="hud-title">{viewDeck.sidebarTitle}</h1>
        <p className="hud-note">{viewDeck.sidebarNote}</p>

        <div className={`deck-course-menu ${isDeckMenuOpen ? "open" : ""}`}>
          <button
            type="button"
            className={`deck-course-trigger ${isDeckMenuOpen ? "active" : ""}`}
            aria-expanded={isDeckMenuOpen}
            aria-controls="deck-course-picker"
            onClick={() => setIsDeckMenuOpen((current) => !current)}
          >
            <span className="deck-course-trigger-copy">
              <span className="deck-course-trigger-label">Todas las clases</span>
              <strong>{viewDeck.label}</strong>
            </span>
            <ChevronDown size={18} className="deck-course-trigger-icon" />
          </button>

          {isDeckMenuOpen ? (
            <div id="deck-course-picker" className="deck-course-picker" aria-label="Clases disponibles">
              {viewDecks.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={`deck-course-button ${activeDeckIndex === index ? "active" : ""}`}
                  onClick={() => handleSelectDeck(index)}
                >
                  <span className="deck-course-label">{item.label}</span>
                  <strong>{item.sidebarTitle}</strong>
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div className="deck-sidebar-scroll">
        <nav className="deck-nav" aria-label={accentText("Slides")}
        >
          {viewSections.map((label, index) => (
            <button
              key={label}
              type="button"
              className={`deck-nav-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => onSelect(index)}
            >
              <span className="deck-nav-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="deck-nav-label">{label}</span>
              <ChevronRight size={16} />
            </button>
          ))}
        </nav>
      </div>

      <div className="deck-sidebar-footer">
        <span>{viewDeck.label}</span>
        <span>
          {String(activeIndex + 1).padStart(2, "0")} / {String(viewSections.length).padStart(2, "0")}
        </span>
      </div>
    </aside>
  );
}
