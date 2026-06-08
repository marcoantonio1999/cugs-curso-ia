import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { decode, encode } from "gpt-tokenizer/encoding/o200k_base";

const initialText =
  "Los tokens cambian el costo de cada prompt y la forma en que la IA lee el texto.";

const getWordHue = (index) => Math.round((index * 137.508 + 188) % 360);

const visibleWhitespace = (piece) => piece.replaceAll(" ", "·") || "∅";

export default function WordTokenSlide() {
  const [text, setText] = useState(initialText);

  const tokenData = useMemo(() => {
    const words = text.match(/\S+/g) ?? [];
    const visibleWords = words.slice(0, 64).map((word, index) => {
      const ids = encode(index === 0 ? word : ` ${word}`);

      return {
        word,
        hue: getWordHue(index),
        tokenCount: ids.length,
        pieces: ids.map((id) => visibleWhitespace(decode([id]))),
      };
    });

    return {
      totalTokens: encode(text).length,
      totalWords: words.length,
      visibleWords,
    };
  }, [text]);

  return (
    <div className="word-token-lab">
      <section className="word-token-input-panel">
        <div className="word-token-panel-head">
          <div>
            <p className="mini-label">Caja de texto</p>
            <h3>Escribe y observa como suben los tokens</h3>
          </div>
          <div className="word-token-total">
            <span>Tokens totales</span>
            <strong>{tokenData.totalTokens}</strong>
          </div>
        </div>

        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Escribe aqui un prompt, una instruccion o una frase larga."
          aria-label="Texto para revisar tokens por palabra"
        />

        <div className="word-token-metrics">
          <div>
            <span>Palabras</span>
            <strong>{tokenData.totalWords}</strong>
          </div>
          <div>
            <span>Caracteres</span>
            <strong>{text.length}</strong>
          </div>
          <div>
            <span>Promedio</span>
            <strong>
              {tokenData.totalWords ? (tokenData.totalTokens / tokenData.totalWords).toFixed(1) : "0.0"}
            </strong>
          </div>
        </div>
      </section>

      <section className="word-token-map-panel">
        <div className="word-token-panel-head compact">
          <div>
            <p className="mini-label">Tokenizacion por palabra</p>
            <h3>Cada color representa una palabra distinta</h3>
          </div>
          <span className="word-token-note">o200k_base</span>
        </div>

        <div className="word-token-cloud" aria-live="polite">
          {tokenData.visibleWords.length ? (
            tokenData.visibleWords.map((item, index) => (
              <motion.article
                key={`${item.word}-${index}`}
                className="word-token-card"
                style={{
                  "--word-hue": item.hue,
                  "--word-bg": `hsl(${item.hue} 88% 74%)`,
                  "--word-border": `hsl(${item.hue} 92% 88%)`,
                }}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.16, delay: Math.min(index * 0.018, 0.28) }}
              >
                <div className="word-token-card-head">
                  <strong>{item.word}</strong>
                  <span>
                    {item.tokenCount} {item.tokenCount === 1 ? "token" : "tokens"}
                  </span>
                </div>
                <div className="word-token-pieces">
                  {item.pieces.map((piece, pieceIndex) => (
                    <span key={`${piece}-${pieceIndex}`}>{piece}</span>
                  ))}
                </div>
              </motion.article>
            ))
          ) : (
            <div className="word-token-empty">Empieza a escribir para ver las palabras tokenizadas.</div>
          )}
        </div>

        {tokenData.totalWords > tokenData.visibleWords.length ? (
          <p className="word-token-overflow">
            Se muestran las primeras {tokenData.visibleWords.length} palabras para mantener legible el slide.
          </p>
        ) : null}
      </section>
    </div>
  );
}
