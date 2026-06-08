import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Pause, Play, RotateCcw, SkipForward } from "lucide-react";

const trainingFrames = [
  { epoch: 0, trainLoss: 0.82, testLoss: 0.88, progress: 0.12, weights: [0.2, -0.18, 0.16, -0.12, 0.22, -0.08, 0.14, -0.2, 0.18, 0.1, -0.16, 0.12] },
  { epoch: 80, trainLoss: 0.46, testLoss: 0.52, progress: 0.34, weights: [0.36, -0.28, 0.3, -0.2, 0.42, -0.18, 0.26, -0.34, 0.32, 0.24, -0.28, 0.22] },
  { epoch: 180, trainLoss: 0.22, testLoss: 0.28, progress: 0.62, weights: [0.58, -0.48, 0.5, -0.38, 0.68, -0.32, 0.44, -0.56, 0.52, 0.42, -0.45, 0.4] },
  { epoch: 360, trainLoss: 0.08, testLoss: 0.13, progress: 0.9, weights: [0.86, -0.72, 0.78, -0.6, 0.92, -0.54, 0.76, -0.84, 0.82, 0.7, -0.66, 0.68] },
];

const dataPoints = [
  { x: 48, y: 38, label: -1 }, { x: 66, y: 44, label: -1 }, { x: 78, y: 66, label: -1 }, { x: 22, y: 62, label: -1 },
  { x: 32, y: 82, label: -1 }, { x: 86, y: 28, label: -1 }, { x: 14, y: 34, label: -1 }, { x: 58, y: 88, label: -1 },
  { x: 50, y: 52, label: 1 }, { x: 43, y: 48, label: 1 }, { x: 55, y: 46, label: 1 }, { x: 58, y: 56, label: 1 },
  { x: 42, y: 58, label: 1 }, { x: 49, y: 62, label: 1 }, { x: 62, y: 50, label: 1 }, { x: 37, y: 52, label: 1 },
  { x: 71, y: 73, label: -1 }, { x: 24, y: 24, label: -1 }, { x: 76, y: 18, label: -1 }, { x: 18, y: 76, label: -1 },
];

const networkNodes = [
  [{ id: "x", label: "x", x: 40, y: 86 }, { id: "y", label: "y", x: 40, y: 184 }],
  [{ id: "h1", label: "1", x: 190, y: 42 }, { id: "h2", label: "2", x: 190, y: 106 }, { id: "h3", label: "3", x: 190, y: 170 }, { id: "h4", label: "4", x: 190, y: 234 }],
  [{ id: "z1", label: "1", x: 340, y: 92 }, { id: "z2", label: "2", x: 340, y: 188 }],
  [{ id: "out", label: "ŷ", x: 490, y: 140 }],
];

const connectionPairs = [
  ["x", "h1"], ["x", "h2"], ["x", "h3"], ["x", "h4"], ["y", "h1"], ["y", "h2"], ["y", "h3"], ["y", "h4"],
  ["h1", "z1"], ["h2", "z1"], ["h3", "z2"], ["h4", "z2"], ["z1", "out"], ["z2", "out"],
];

const flatNodes = networkNodes.flat();

function findNode(id) {
  return flatNodes.find((node) => node.id === id);
}

function decisionColor(x, y, progress) {
  const dx = x - 50;
  const dy = y - 50;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const boundary = 17 + progress * 13;
  const raw = (boundary - distance) / 20;
  const confidence = Math.min(1, Math.max(0.16, Math.abs(raw)));
  return raw >= 0
    ? `rgba(47, 215, 229, ${0.12 + confidence * 0.42})`
    : `rgba(255, 99, 176, ${0.1 + confidence * 0.34})`;
}

function DecisionMap({ frame, compact = false }) {
  const cells = useMemo(() => Array.from({ length: 18 * 18 }, (_, index) => {
    const col = index % 18;
    const row = Math.floor(index / 18);
    const x = (col + 0.5) * (100 / 18);
    const y = (row + 0.5) * (100 / 18);
    return { id: index, x, y, color: decisionColor(x, y, frame.progress) };
  }), [frame]);

  return (
    <div className={`playground-map ${compact ? "compact" : ""}`}>
      <div className="decision-grid">
        {cells.map((cell) => (
          <motion.span
            key={cell.id}
            className="decision-cell"
            animate={{ backgroundColor: cell.color }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>
      {dataPoints.map((point, index) => (
        <motion.span
          key={`${point.x}-${point.y}`}
          className={`data-dot ${point.label > 0 ? "positive" : "negative"}`}
          style={{ left: `${point.x}%`, top: `${point.y}%` }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.015, duration: 0.18 }}
        />
      ))}
    </div>
  );
}

export default function NeuralNetworkPanel() {
  const [frameIndex, setFrameIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const frame = trainingFrames[frameIndex];

  useEffect(() => {
    if (!isRunning) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setFrameIndex((current) => (current + 1) % trainingFrames.length);
    }, 1800);

    return () => window.clearInterval(timer);
  }, [isRunning]);

  const step = () => setFrameIndex((current) => (current + 1) % trainingFrames.length);
  const reset = () => {
    setIsRunning(false);
    setFrameIndex(0);
  };

  return (
    <div className="tf-playground">
      <div className="tf-toolbar">
        <div className="tf-controls">
          <button type="button" className="tf-icon-button" onClick={reset} aria-label="Reiniciar entrenamiento">
            <RotateCcw size={18} />
          </button>
          <button type="button" className="tf-icon-button primary" onClick={() => setIsRunning((value) => !value)} aria-label={isRunning ? "Pausar entrenamiento" : "Reproducir entrenamiento"}>
            {isRunning ? <Pause size={18} /> : <Play size={18} />}
          </button>
          <button type="button" className="tf-icon-button" onClick={step} aria-label="Avanzar un paso">
            <SkipForward size={18} />
          </button>
        </div>
        <div className="tf-setting">
          <span>learning rate</span>
          <strong>0.03</strong>
        </div>
        <div className="tf-setting">
          <span>activation</span>
          <strong>tanh</strong>
        </div>
        <div className="tf-setting">
          <span>dataset</span>
          <strong>circle</strong>
        </div>
        <div className="tf-metric">
          <span>epoch</span>
          <motion.strong key={frame.epoch} initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            {frame.epoch}
          </motion.strong>
        </div>
      </div>

      <div className="tf-workspace">
        <section className="tf-card data-card">
          <div className="tf-card-head">
            <span>Data</span>
            <strong>Clasificación circular</strong>
          </div>
          <DecisionMap frame={frame} />
          <div className="tf-legend">
            <span><i className="positive" /> centro</span>
            <span><i className="negative" /> exterior</span>
          </div>
        </section>

        <section className="tf-card network-card">
          <div className="tf-card-head">
            <span>Network</span>
            <strong>2 entradas · 4 neuronas · 2 neuronas · salida</strong>
          </div>
          <div className="tf-network-stage">
            <svg viewBox="0 0 540 278" className="tf-network-svg">
              {connectionPairs.map(([fromId, toId], index) => {
                const from = findNode(fromId);
                const to = findNode(toId);
                const weight = frame.weights[index % frame.weights.length];
                return (
                  <motion.line
                    key={`${fromId}-${toId}`}
                    x1={from.x + 21}
                    y1={from.y}
                    x2={to.x - 21}
                    y2={to.y}
                    stroke={weight > 0 ? "var(--accent-cyan)" : "var(--accent-magenta-soft)"}
                    strokeLinecap="round"
                    animate={{ strokeWidth: 1.5 + Math.abs(weight) * 8, opacity: 0.22 + Math.abs(weight) * 0.62 }}
                    transition={{ duration: 0.45 }}
                  />
                );
              })}
              {networkNodes.map((layer) => layer.map((node, index) => (
                <g key={node.id}>
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r="22"
                    fill={node.id === "out" ? "rgba(255,99,176,0.16)" : "rgba(47,215,229,0.11)"}
                    stroke={node.id === "out" ? "var(--accent-magenta-soft)" : "var(--accent-cyan-soft)"}
                    strokeWidth="2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 1.4, delay: index * 0.12, repeat: Infinity }}
                    style={{ transformOrigin: `${node.x}px ${node.y}px` }}
                  />
                  <text x={node.x} y={node.y + 5} textAnchor="middle" className="network-label">{node.label}</text>
                </g>
              )))}
            </svg>
          </div>
        </section>

        <section className="tf-card output-card">
          <div className="tf-card-head">
            <span>Output</span>
            <strong>Frontera aprendida</strong>
          </div>
          <DecisionMap frame={frame} compact />
          <div className="loss-readout">
            <div>
              <span>Training loss</span>
              <strong>{frame.trainLoss.toFixed(2)}</strong>
            </div>
            <div>
              <span>Test loss</span>
              <strong>{frame.testLoss.toFixed(2)}</strong>
            </div>
          </div>
        </section>
      </div>

      <div className="tf-footer">
        <span>Las líneas gruesas influyen más.</span>
        <span>El color indica si un peso empuja la predicción hacia una clase u otra.</span>
        <span>La frontera se ajusta conforme baja la pérdida.</span>
      </div>
    </div>
  );
}
