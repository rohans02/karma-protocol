'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Coins, Send, Calculator, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: Coins,
    title: 'Hold Both Coins',
    description: 'Acquire bull and bear coins from a Karma pool to become an oracle participant.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
  {
    icon: Send,
    title: 'Submit Price',
    description: 'Submit your price observation for the current oracle round.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
  },
  {
    icon: Calculator,
    title: 'Weight Calculated',
    description: 'Your submission weight is computed from your balance and neutrality score.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: BarChart3,
    title: 'Price Aggregated',
    description: 'All weighted submissions are aggregated into the final oracle price for the round.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="pill-badge mb-6 inline-flex">Step by Step</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            How <span className="gradient-text">KARMA</span> Works
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            A simple 4-step process from holding tokens to influencing the oracle price.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="relative"
              >
                <div className="glass-card p-6 rounded-xl text-center h-full hover:border-primary/20 transition-all duration-300">
                  {/* Step number */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex h-7 w-7 items-center justify-center rounded-full gradient-bg text-white text-xs font-bold">
                    {idx + 1}
                  </div>

                  <div className={`mx-auto mt-4 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${step.bg}`}>
                    <step.icon className={`h-7 w-7 ${step.color}`} />
                  </div>
                  <h3 className="text-base font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
