import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SlideFrame from "./components/SlideFrame";
import { courseDecks } from "./slides";
import { accentizeDeep } from "./utils/accentText";

const decks = accentizeDeep(courseDecks);

const getDeckIndexFromSearch = (search) => {
  const params = new URLSearchParams(search);
  const deckId = params.get("deck");
  const deckIndex = decks.findIndex((deck) => deck.id === deckId);

  return deckIndex >= 0 ? deckIndex : 0;
};

export default function App() {
  const [activeDeckIndex, setActiveDeckIndex] = useState(() => getDeckIndexFromSearch(window.location.search));
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const wheelLockRef = useRef(false);

  const activeDeck = decks[activeDeckIndex];
  const activeSlides = activeDeck.slides;

  const goToDeck = (nextDeckIndex) => {
    const bounded = Math.max(0, Math.min(decks.length - 1, nextDeckIndex));
    if (bounded === activeDeckIndex) {
      return;
    }

    setActiveDeckIndex(bounded);
    setActiveIndex(0);
    setDirection(1);
  };

  const goToSlide = (nextIndex) => {
    const bounded = Math.max(0, Math.min(activeSlides.length - 1, nextIndex));
    if (bounded === activeIndex) {
      return;
    }

    setDirection(bounded > activeIndex ? 1 : -1);
    setActiveIndex(bounded);
  };

  const shiftSlide = (delta) => {
    goToSlide(activeIndex + delta);
  };

  useEffect(() => {
    const handleKey = (event) => {
      const target = event.target;
      const isTyping =
        target instanceof HTMLElement &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable);

      if (isTyping) {
        return;
      }

      if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        shiftSlide(1);
      }

      if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
        event.preventDefault();
        shiftSlide(-1);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  useEffect(() => {
    const handlePopState = () => {
      const nextDeckIndex = getDeckIndexFromSearch(window.location.search);

      setActiveDeckIndex(nextDeckIndex);
      setActiveIndex(0);
      setDirection(1);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("deck") === activeDeck.id) {
      return;
    }

    params.set("deck", activeDeck.id);
    const nextSearch = params.toString();
    const nextUrl = `${window.location.pathname}?${nextSearch}${window.location.hash}`;

    window.history.replaceState({}, "", nextUrl);
  }, [activeDeck.id]);

  const handleWheel = (event) => {
    if (wheelLockRef.current || Math.abs(event.deltaY) < 34) {
      return;
    }

    wheelLockRef.current = true;
    shiftSlide(event.deltaY > 0 ? 1 : -1);
    window.setTimeout(() => {
      wheelLockRef.current = false;
    }, 520);
  };

  const activeSlide = activeSlides[activeIndex];
  const ActiveComponent = activeSlide.Component;
  const isSyllabusSlide = activeSlide.kicker === "01 · Temario";

  return (
    <main className={`deck-app ${isSyllabusSlide ? "deck-app-syllabus" : ""}`} onWheel={handleWheel}>
      <section className={`deck-stage ${isSyllabusSlide ? "deck-stage-syllabus" : ""}`}>
        <div className={`deck-stage-shell ${isSyllabusSlide ? "deck-stage-shell-syllabus" : ""}`}>
          {isSyllabusSlide ? null : (
            <div className="deck-floating-controls">
              <button type="button" className="nav-arrow" onClick={() => shiftSlide(-1)} disabled={activeIndex === 0} aria-label="Slide anterior">
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                className="nav-arrow"
                onClick={() => shiftSlide(1)}
                disabled={activeIndex === activeSlides.length - 1}
                aria-label="Slide siguiente"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          )}

          <motion.section
            key={`${activeDeck.id}-${activeIndex}`}
            initial={{ opacity: 0, x: direction > 0 ? 64 : -64, scale: 0.99, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="slide-panel"
          >
            <SlideFrame
              kicker={activeSlide.kicker}
              title={activeSlide.title}
              subtitle={activeSlide.subtitle}
              scrollable={activeSlide.scrollable ?? true}
              variant={isSyllabusSlide ? "syllabus" : undefined}
            >
              <ActiveComponent />
            </SlideFrame>
          </motion.section>
        </div>
      </section>
    </main>
  );
}
