'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface NeutralityGaugeProps {
  neutrality: number;
  size?: number;
}

export default function NeutralityGauge({ neutrality, size = 180 }: NeutralityGaugeProps) {
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const arc = circumference * 0.75; // 270 degrees
  const filled = arc * neutrality;

  // Color based on score
  const getColor = (n: number) => {
    if (n >= 0.9) return '#22c55e';
    if (n >= 0.7) return '#eab308';
    if (n >= 0.5) return '#f97316';
    return '#ef4444';
  };

  const color = getColor(neutrality);

  return (
    <div className="relative flex flex-col items-center" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-[135deg]"
      >
        {/* Background arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeOpacity={0.1}
          strokeWidth={strokeWidth}
          strokeDasharray={`${arc} ${circumference}`}
          strokeLinecap="round"
        />
        {/* Filled arc */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={`${arc} ${circumference}`}
          strokeLinecap="round"
          initial={{ strokeDashoffset: arc }}
          animate={{ strokeDashoffset: arc - filled }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </svg>

      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          className="text-3xl font-bold"
          style={{ color }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {(neutrality * 100).toFixed(1)}%
        </motion.span>
        <span className="text-xs text-muted-foreground mt-1">Neutrality</span>
      </div>
    </div>
  );
}
