import React from 'react';
import { BrainCircuit, Network, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

/* ============================================================
   HERO IMAGES
   ============================================================ */

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.2, ease: 'easeOut' },
};

export const TitleVisual = () => (
  <div className="hero-image-wrapper">
    <motion.img {...fadeIn} className="hero-image" src="/images/watercolor_mind.png" alt="The Relational Mind" />
  </div>
);

export const HealingVisual = () => (
  <div className="hero-image-wrapper">
    <motion.img {...fadeIn} className="hero-image" src="/images/watercolor_healing.png" alt="Healing Through Relationships" />
  </div>
);

export const ConnectionVisual = () => (
  <div className="hero-image-wrapper">
    <motion.img {...fadeIn} className="hero-image" src="/images/watercolor_connection.png" alt="Human Connection" />
  </div>
);

/* ============================================================
   CONCEPTUAL MAP — Paradigm Shift
   ============================================================ */

export const ConceptualMap = () => (
  <div className="diagram-card">
    <div className="diagram-heading">The Paradigm Shift</div>
    <div className="paradigm-shift">
      <div className="paradigm-side paradigm-side--old">
        <BrainCircuit size="5rem" strokeWidth={1.5} />
        <div className="paradigm-label">
          Isolated Mind<br />(Cartesian)
        </div>
      </div>
      <div className="paradigm-arrow">→</div>
      <div className="paradigm-side">
        <Network size="5.5rem" color="var(--c-teal)" strokeWidth={1.5} />
        <div className="paradigm-label paradigm-label--new">
          Relational Mind<br />(Matrix)
        </div>
      </div>
    </div>
  </div>
);

/* ============================================================
   CIRCULAR NEEDS — SVG radial diagram
   Scales perfectly at any zoom / resolution because SVG
   viewBox handles all proportional sizing internally.
   ============================================================ */

export const CircularNeeds = () => {
  const needs = [
    ['Security'],
    ['Validation'],
    ['Acceptance'],
    ['Confirmation'],
    ['Self-', 'Definition'],
    ['Impact'],
    ['Initiation'],
    ['Love'],
  ];

  const cx = 250;
  const cy = 250;
  const orbit = 160;
  const centerR = 60;
  const satR = 48;

  return (
    <div className="diagram-card">
      <svg className="diagram-svg" viewBox="0 0 500 500">
        {/* Connecting lines from center to each satellite */}
        {needs.map((_, i) => {
          const angle = (i / 8) * 2 * Math.PI - Math.PI / 2;
          const sx = cx + Math.cos(angle) * orbit;
          const sy = cy + Math.sin(angle) * orbit;
          return (
            <line
              key={`line-${i}`}
              x1={cx}
              y1={cy}
              x2={sx}
              y2={sy}
              stroke="rgba(0,0,0,0.06)"
              strokeWidth="1.5"
            />
          );
        })}

        {/* Center circle */}
        <circle cx={cx} cy={cy} r={centerR} fill="#3D7C82" />
        <text x={cx} y={cy - 10} textAnchor="middle" dominantBaseline="central" fill="white" fontSize="16" fontFamily="Lora, serif" fontWeight="600">
          Relational
        </text>
        <text x={cx} y={cy + 12} textAnchor="middle" dominantBaseline="central" fill="white" fontSize="16" fontFamily="Lora, serif" fontWeight="600">
          Needs
        </text>

        {/* Satellite circles */}
        {needs.map((labels, i) => {
          const angle = (i / 8) * 2 * Math.PI - Math.PI / 2;
          const sx = cx + Math.cos(angle) * orbit;
          const sy = cy + Math.sin(angle) * orbit;
          const lineOffset = labels.length > 1 ? 7.5 : 0;

          return (
            <g key={`sat-${i}`}>
              <circle
                cx={sx}
                cy={sy}
                r={satR}
                fill="white"
                stroke="#B8941F"
                strokeWidth="1.5"
              />
              {labels.map((line, j) => (
                <text
                  key={j}
                  x={sx}
                  y={sy - lineOffset + j * 15}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize="12.5"
                  fontWeight="600"
                  fill="#2A2520"
                  fontFamily="Inter, sans-serif"
                >
                  {line}
                </text>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

/* ============================================================
   TRAUMA FLOW — vertical flowchart
   ============================================================ */

export const TraumaFlow = () => {
  const steps = [
    'Cumulative Trauma & Neglect',
    'Right-Brain Dysregulation',
    'Insecure Attachment',
    'Unmet Relational Needs',
  ];

  return (
    <div className="diagram-card">
      <div className="trauma-flow">
        {steps.map((step, i) => (
          <React.Fragment key={step}>
            <div className="trauma-node">{step}</div>
            {i < steps.length - 1 && (
              <ArrowDown size="1.5rem" className="trauma-arrow-icon" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

/* ============================================================
   PERMA HIGHLIGHT
   ============================================================ */

export const PermaHighlight = () => {
  const items = [
    { letter: 'P', label: 'Positive Emotion' },
    { letter: 'E', label: 'Engagement' },
    { letter: 'R', label: 'Relationships', highlighted: true },
    { letter: 'M', label: 'Meaning' },
    { letter: 'A', label: 'Accomplishment' },
  ];

  return (
    <div className="diagram-card">
      <div className="diagram-heading">PERMA Model</div>
      <div className="perma-list">
        {items.map((item) => (
          <div
            key={item.letter}
            className={`perma-item${item.highlighted ? ' perma-item--highlighted' : ''}`}
          >
            <span className="perma-letter">{item.letter}</span>
            <span className="perma-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ============================================================
   VICIOUS CIRCLE — SVG cycle diagram
   ============================================================ */

export const ViciousCircle = () => {
  const cx = 265;
  const cy = 220;
  const r = 115;

  const nodes = [
    { label: 'Unmet Archaic Need', x: cx, y: 38 },
    { label: 'Fear of Rejection', x: cx + 190, y: cy },
    { label: 'Defensive Behavior', x: cx, y: cy + 188 },
    { label: 'Actual Rejection', x: cx - 190, y: cy },
  ];

  /* Small directional triangles on the dashed circle between nodes */
  const arrowAngles = [315, 45, 135, 225];

  return (
    <div className="diagram-card">
      <svg className="diagram-svg" viewBox="0 0 530 440">
        {/* Dashed circle track */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="rgba(61,124,130,0.2)"
          strokeWidth="2"
          strokeDasharray="8 6"
        />

        {/* Clockwise arrows on the track */}
        {arrowAngles.map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const ax = cx + r * Math.cos(rad);
          const ay = cy + r * Math.sin(rad);
          return (
            <polygon
              key={i}
              points="5,0 -4,-4.5 -4,4.5"
              fill="#3D7C82"
              opacity="0.35"
              transform={`translate(${ax.toFixed(1)},${ay.toFixed(1)}) rotate(${deg + 90})`}
            />
          );
        })}

        {/* Center text */}
        <text x={cx} y={cy - 11} textAnchor="middle" dominantBaseline="central" fontSize="17" fontWeight="700" fill="#3D7C82" fontFamily="Lora, serif">
          Reinforcement
        </text>
        <text x={cx} y={cy + 13} textAnchor="middle" dominantBaseline="central" fontSize="17" fontWeight="700" fill="#3D7C82" fontFamily="Lora, serif">
          of Fear
        </text>

        {/* Node boxes */}
        {nodes.map((node, i) => {
          const textWidth = node.label.length * 7.2;
          const boxW = textWidth + 28;
          const boxH = 34;
          return (
            <g key={i}>
              <rect
                x={node.x - boxW / 2}
                y={node.y - boxH / 2}
                width={boxW}
                height={boxH}
                rx="17"
                fill="white"
                stroke="#B8941F"
                strokeWidth="1.5"
                filter="drop-shadow(0 2px 4px rgba(0,0,0,0.04))"
              />
              <text
                x={node.x}
                y={node.y}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="12.5"
                fontWeight="600"
                fill="#2A2520"
                fontFamily="Inter, sans-serif"
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

/* ============================================================
   THREE PILLARS — Contact-in-Relationship
   ============================================================ */

export const ThreePillars = () => (
  <div className="diagram-card">
    <div className="diagram-heading">Contact-in-Relationship</div>
    <div className="pillars">
      <div className="pillars-row">
        <div className="pillar-card">Inquiry</div>
        <div className="pillar-card pillar-card--center">Attunement</div>
        <div className="pillar-card">Presence</div>
      </div>
      <div className="pillar-arrows">
        <ArrowDown size="1.5rem" />
        <ArrowDown size="1.5rem" />
        <ArrowDown size="1.5rem" />
      </div>
      <div className="pillar-result">Therapeutic Healing</div>
    </div>
  </div>
);

/* ============================================================
   STAIRCASE — Two-step synthesis
   ============================================================ */

export const Staircase = () => (
  <div className="diagram-card">
    <div className="staircase">
      <div className="step step--upper">
        Step 2: Building Strengths
        <span className="step-sub">(Positive Psychology)</span>
      </div>
      <div className="step step--lower">
        Step 1: Deficit-Repair
        <span className="step-sub">(Integrative Psychotherapy)</span>
      </div>
    </div>
  </div>
);
