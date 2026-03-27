'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, BarChart3 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      {/* Gradient Orbs */}
      <div className="hero-orb hero-orb-purple w-[600px] h-[600px] -top-[200px] -left-[200px] animate-pulse-glow" />
      <div className="hero-orb hero-orb-gold w-[500px] h-[500px] -bottom-[150px] -right-[150px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <div className="hero-orb hero-orb-violet w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" style={{ animationDelay: '3s' }} />

      {/* Vignette + Noise */}
      <div className="absolute inset-0 karma-vignette pointer-events-none" />
      <div className="absolute inset-0 karma-noise opacity-[0.03] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Pill Badge */}
          <div className="mb-8 flex justify-center">
            <span className="pill-badge">
              <Zap className="h-4 w-4" />
              Community-Powered Oracle
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
            <span className="gradient-text">Karma</span>{' '}
            <span className="text-foreground">Protocol</span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Community-driven price feeds for decentralized prediction markets.
            <br className="hidden sm:block" />
            Replace oracles with position-neutral, weighted price submissions.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/oracle"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full gradient-bg text-white font-semibold text-base transition-all hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
          >
            Submit Price
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border text-foreground font-semibold text-base transition-all hover:bg-muted hover:scale-105"
          >
            Explore Pools
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            {
              icon: Shield,
              label: 'Position Neutrality',
              desc: 'Balanced holders get more weight',
            },
            {
              icon: BarChart3,
              label: 'Weighted Pricing',
              desc: 'Aggregated from all submissions',
            },
            {
              icon: Zap,
              label: 'Oracle Rounds',
              desc: 'Continuous price feed cycles',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-xl text-center group hover:glow-purple transition-all duration-300"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">{item.label}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
