import { useState } from "react";
import { motion } from "framer-motion";
import { decode, encode } from "gpt-tokenizer/encoding/o200k_base";

const tokenColors = [
  { bg: "rgba(47, 215, 229, 0.16)", border: "rgba(136, 244, 255, 0.38)", fg: "#b9fbff" },
  { bg: "rgba(255, 99, 176, 0.15)", border: "rgba(255, 99, 176, 0.34)", fg: "#ffc4e2" },
  { bg: "rgba(118, 240, 172, 0.14)", border: "rgba(118, 240, 172, 0.34)", fg: "#c9ffdf" },
  { bg: "rgba(255, 210, 92, 0.14)", border: "rgba(255, 210, 92, 0.34)", fg: "#ffe7a3" },
  { bg: "rgba(170, 147, 255, 0.16)", border: "rgba(170, 147, 255, 0.36)", fg: "#ddd4ff" },
  { bg: "rgba(255, 144, 105, 0.14)", border: "rgba(255, 144, 105, 0.34)", fg: "#ffd0bf" },
];

export default function TokenLab() {
  const [sentence, setSentence] = useState("La inteligencia artificial aprende patrones y genera respuestas.");
  const tokens = encode(sentence);
  const pieces = tokens.slice(0, 48).map((token, index) => ({
    id: token,
    index,
    text: decode([token]).replaceAll(" ", "·"),
  }));

  return (
    <div className="token-lab">
      <div className="token-demo-block">
        <div className="token-demo-head">
          <div>
            <p className="mini-label">Tokenización en vivo</p>
            <strong>{tokens.length} tokens</strong>
          </div>
          <div className="token-running-counter">
            <span>Mostrando</span>
            <strong>{pieces.length}</strong>
          </div>
        </div>
        <div className="token-stream">
          {pieces.map((piece, index) => (
            <motion.span
              key={`${piece.id}-${index}`}
              className="token-pill"
              style={{
                "--token-bg": tokenColors[index % tokenColors.length].bg,
                "--token-border": tokenColors[index % tokenColors.length].border,
                "--token-fg": tokenColors[index % tokenColors.length].fg,
              }}
              initial={{ opacity: 0, y: 12, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.03, duration: 0.18 }}
            >
              <small>{index + 1}</small>
              <span>{piece.text || "␠"}</span>
            </motion.span>
          ))}
        </div>
        {tokens.length > pieces.length ? (
          <p className="token-overflow-note">Se muestran los primeros {pieces.length} tokens para que el slide no se sature.</p>
        ) : null}
      </div>

      <div className="token-input-card">
        <label htmlFor="tokenizer-input" className="mini-label">
          Escribe una oración
        </label>
        <textarea
          id="tokenizer-input"
          value={sentence}
          onChange={(event) => setSentence(event.target.value)}
          placeholder="Ejemplo: La IA no piensa como humano; optimiza probabilidades."
        />
        <div className="token-input-footer">
          <div className="metric-card slim">
            <span className="metric-label">Caracteres</span>
            <strong>{sentence.length}</strong>
          </div>
          <div className="metric-card slim accent">
            <span className="metric-label">Tokens GPT</span>
            <strong>{tokens.length}</strong>
          </div>
          <div className="metric-card slim">
            <span className="metric-label">Promedio</span>
            <strong>{tokens.length ? (sentence.length / tokens.length).toFixed(1) : "0"} c/t</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
