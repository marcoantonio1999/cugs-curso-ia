import { motion } from "framer-motion";

const dendrites = [
  "M40 356 C146 280, 190 252, 286 262 C398 274, 458 196, 560 126 C692 36, 802 74, 940 42",
  "M-20 172 C106 158, 170 210, 276 192 C382 174, 430 96, 538 86 C660 74, 720 158, 846 150 C958 142, 1042 88, 1160 106",
  "M96 538 C184 460, 286 456, 386 386 C500 306, 610 348, 716 278 C820 210, 920 238, 1048 174",
  "M124 48 C226 112, 274 178, 372 190 C506 206, 564 114, 704 126 C840 138, 890 244, 1036 252",
  "M676 676 C646 560, 680 490, 760 408 C836 330, 832 228, 918 150 C988 86, 1074 78, 1190 28",
  "M-12 618 C112 598, 194 552, 292 558 C418 566, 496 644, 634 606 C768 570, 808 458, 948 430 C1048 410, 1124 448, 1248 404",
  "M328 728 C372 616, 356 526, 426 448 C508 358, 618 376, 688 284 C750 204, 728 126, 806 48",
  "M16 32 C112 82, 142 140, 220 154 C316 172, 342 94, 448 76 C528 62, 604 104, 650 180",
];

const branches = [
  "M286 262 C246 214, 212 172, 194 116",
  "M286 262 C238 304, 202 336, 130 344",
  "M560 126 C574 196, 612 240, 676 284",
  "M538 86 C520 154, 496 206, 438 260",
  "M716 278 C772 310, 824 342, 906 350",
  "M760 408 C704 434, 640 454, 566 516",
  "M948 430 C986 360, 1038 320, 1118 300",
  "M292 558 C332 488, 372 438, 426 448",
  "M704 126 C742 86, 784 58, 860 54",
  "M386 386 C320 372, 250 388, 184 460",
];

const nodes = [
  { x: 146, y: 280, tone: "cyan", delay: 0.1 },
  { x: 286, y: 262, tone: "magenta", delay: 0.28 },
  { x: 458, y: 196, tone: "cyan", delay: 0.44 },
  { x: 560, y: 126, tone: "cyan", delay: 0.58 },
  { x: 802, y: 74, tone: "magenta", delay: 0.72 },
  { x: 276, y: 192, tone: "cyan", delay: 0.86 },
  { x: 538, y: 86, tone: "magenta", delay: 1.0 },
  { x: 716, y: 278, tone: "cyan", delay: 1.14 },
  { x: 948, y: 430, tone: "magenta", delay: 1.28 },
  { x: 386, y: 386, tone: "cyan", delay: 1.42 },
  { x: 634, y: 606, tone: "magenta", delay: 1.56 },
  { x: 918, y: 150, tone: "cyan", delay: 1.7 },
  { x: 426, y: 448, tone: "magenta", delay: 1.84 },
  { x: 704, y: 126, tone: "cyan", delay: 1.98 },
];

export default function HeroBrain() {
  return (
    <div className="synapse-field" aria-hidden="true">
      <svg viewBox="0 0 1240 720" className="synapse-svg">
        <defs>
          <filter id="synapseGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="axonCyan" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(136,244,255,0)" />
            <stop offset="48%" stopColor="rgba(136,244,255,0.54)" />
            <stop offset="100%" stopColor="rgba(255,99,176,0)" />
          </linearGradient>
          <linearGradient id="axonMagenta" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,99,176,0)" />
            <stop offset="48%" stopColor="rgba(255,99,176,0.5)" />
            <stop offset="100%" stopColor="rgba(136,244,255,0)" />
          </linearGradient>
          <radialGradient id="nodeCore">
            <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
            <stop offset="42%" stopColor="rgba(136,244,255,0.72)" />
            <stop offset="100%" stopColor="rgba(47,215,229,0)" />
          </radialGradient>
        </defs>

        <g opacity="0.42">
          {dendrites.map((path, index) => (
            <motion.path
              key={path}
              d={path}
              className="synapse-path"
              stroke={index % 2 === 0 ? "url(#axonCyan)" : "url(#axonMagenta)"}
              initial={{ pathLength: 0.2, opacity: 0.24 }}
              animate={{ pathLength: [0.18, 1, 0.18], opacity: [0.18, 0.7, 0.18] }}
              transition={{ duration: 5.8 + index * 0.3, delay: index * 0.22, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </g>

        <g opacity="0.32">
          {branches.map((path, index) => (
            <motion.path
              key={path}
              d={path}
              className="synapse-branch"
              stroke={index % 2 === 0 ? "rgba(136,244,255,0.42)" : "rgba(255,99,176,0.34)"}
              animate={{ opacity: [0.16, 0.5, 0.16], pathLength: [0.25, 1, 0.25] }}
              transition={{ duration: 4.2, delay: index * 0.18, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </g>

        {nodes.map((node, index) => (
          <motion.g key={`${node.x}-${node.y}`} filter="url(#synapseGlow)">
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="22"
              fill={node.tone === "cyan" ? "rgba(47,215,229,0.14)" : "rgba(255,99,176,0.13)"}
              animate={{ scale: [0.72, 1.28, 0.72], opacity: [0.16, 0.55, 0.16] }}
              transition={{ duration: 2.5, delay: node.delay, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
            />
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={index % 3 === 0 ? 6 : 4.5}
              fill={node.tone === "cyan" ? "#88f4ff" : "#ff63b0"}
              animate={{ opacity: [0.45, 1, 0.45], scale: [0.85, 1.18, 0.85] }}
              transition={{ duration: 1.8, delay: node.delay, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
            />
          </motion.g>
        ))}

        {[0, 1, 2, 3, 4].map((item) => (
          <motion.circle
            key={item}
            r="3.5"
            fill={item % 2 === 0 ? "#88f4ff" : "#ff63b0"}
            filter="url(#synapseGlow)"
            initial={{ offsetDistance: "0%", opacity: 0 }}
            animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 4.8, delay: item * 0.7, repeat: Infinity, ease: "easeInOut" }}
            style={{
              offsetPath: `path("${dendrites[item]}")`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
