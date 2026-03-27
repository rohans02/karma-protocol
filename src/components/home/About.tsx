'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Scale, Plug, TrendingUp, Lock, Globe } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Community Oracle',
    description:
      'Token holders submit prices directly. No external oracle dependency — the community IS the oracle.',
    gradient: 'from-purple-500/20 to-violet-500/20',
  },
  {
    icon: Scale,
    title: 'Neutrality Weighted',
    description:
      'Position neutrality determines influence. Hold balanced bull/bear positions to maximize your submission weight.',
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
  {
    icon: Plug,
    title: 'DeFi Compatible',
    description:
      'Chainlink-style interface (getLatestPrice, getLatestRoundData) for seamless integration with existing DeFi protocols.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: TrendingUp,
    title: 'Prediction Pools',
    description:
      'Buy and sell bull/bear coins to dynamically hedge against price risks. Every trade triggers oracle rebalancing.',
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    icon: Lock,
    title: 'Sybil Resistant',
    description:
      'Weighted by capital commitment, not identity. The neutrality formula naturally resists manipulation.',
    gradient: 'from-red-500/20 to-pink-500/20',
  },
  {
    icon: Globe,
    title: 'Built on Stability Nexus',
    description:
      'Part of the Stability Nexus ecosystem. Evolved from the Fate Protocol codebase with community-driven innovation.',
    gradient: 'from-indigo-500/20 to-purple-500/20',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="pill-badge mb-6 inline-flex">How It Works</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Oracle by the{' '}
            <span className="gradient-text">Community</span>,{' '}
            for the Community
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            KARMA replaces external oracle dependency with a novel mechanism
            where token holders collectively determine the price feed.
          </p>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="glass-card p-6 rounded-xl group hover:border-primary/20 transition-all duration-300"
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}
              >
                <feature.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Formula Section */}
        <div className="mt-20 glass-card p-8 sm:p-12 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-6">
            The <span className="gradient-text">Neutrality Formula</span>
          </h3>
          <div className="space-y-4">
            <div className="inline-block bg-muted/50 rounded-xl px-6 py-4">
              <code className="text-sm sm:text-base font-mono text-foreground">
                neutrality = min(bullBal, bearBal) / max(bullBal, bearBal)
              </code>
            </div>
            <div className="inline-block bg-muted/50 rounded-xl px-6 py-4 ml-0 sm:ml-4">
              <code className="text-sm sm:text-base font-mono text-foreground">
                weight = (bullBal + bearBal) × neutrality<sup>α</sup>
              </code>
            </div>
          </div>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Users holding equal bull and bear coins have the highest neutrality (≈1.0),
            giving them maximum influence over the aggregated price. The alpha (α)
            parameter controls how aggressively neutrality is rewarded.
          </p>
        </div>
      </div>
    </section>
  );
}
