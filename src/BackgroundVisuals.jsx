import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundVisuals() {
  return (
    <div className="bg-layer">
      <motion.div
        className="bg-blob bg-blob--teal"
        animate={{ x: [0, 60, 0], y: [0, 30, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="bg-blob bg-blob--gold"
        animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}
