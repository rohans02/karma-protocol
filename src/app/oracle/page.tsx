'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  Send,
  Clock,
  Hash,
  Users,
  Scale,
  Coins,
} from 'lucide-react';
import NeutralityGauge from '@/components/oracle/NeutralityGauge';
import {
  mockOracleRounds,
  mockSubmissions,
  mockUserPosition,
} from '@/data/mockData';

export default function OraclePage() {
  const [priceInput, setPriceInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!priceInput) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setPriceInput('');
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="relative py-12 sm:py-16 overflow-hidden">
        <div className="hero-orb hero-orb-purple w-[400px] h-[400px] -top-[200px] -right-[100px] animate-pulse-glow" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="pill-badge mb-4 inline-flex">
            <Activity className="h-4 w-4" />
            Live Oracle
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Oracle <span className="gradient-text">Dashboard</span>
          </h1>
          <p className="mt-2 text-muted-foreground max-w-xl">
            Submit price observations, track your neutrality score, and view
            oracle round history.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        {/* Current Price Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-2xl p-6 sm:p-8 mb-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                Current Aggregated Price (ETH/USD)
              </p>
              <div className="flex items-baseline gap-3">
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                  $3,245.67
                </h2>
              </div>
              <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Hash className="h-3.5 w-3.5" />
                  Round #1042
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-3.5 w-3.5" />
                  24 submissions
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  2 min ago
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Submit Price + Your Position */}
          <div className="lg:col-span-2 space-y-8">
            {/* Submit Price */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Send className="h-5 w-5 text-primary" />
                Submit Price
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Your Price Observation (USD)
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="number"
                      value={priceInput}
                      onChange={(e) => setPriceInput(e.target.value)}
                      placeholder="3245.67"
                      className="flex-1 bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                    <button
                      onClick={handleSubmit}
                      disabled={!priceInput || isSubmitting}
                      className="px-6 py-3 rounded-xl gradient-bg text-white font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>
                </div>

                {/* User Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="bg-muted/30 rounded-xl p-3">
                    <p className="text-xs text-muted-foreground">Bull Balance</p>
                    <p className="text-sm font-semibold mt-1">
                      {mockUserPosition.bullBalance}
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-3">
                    <p className="text-xs text-muted-foreground">Bear Balance</p>
                    <p className="text-sm font-semibold mt-1">
                      {mockUserPosition.bearBalance}
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-3">
                    <p className="text-xs text-muted-foreground">Your Weight</p>
                    <p className="text-sm font-semibold mt-1">
                      {mockUserPosition.weight}
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-3">
                    <p className="text-xs text-muted-foreground">Last Submitted</p>
                    <p className="text-sm font-semibold mt-1">
                      {mockUserPosition.lastSubmission}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Recent Submissions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold mb-4">
                Recent Submissions (Round #1042)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-muted-foreground border-b border-border/50">
                      <th className="text-left py-3 px-2 font-medium">Submitter</th>
                      <th className="text-right py-3 px-2 font-medium">Price</th>
                      <th className="text-right py-3 px-2 font-medium">Weight</th>
                      <th className="text-right py-3 px-2 font-medium">Neutrality</th>
                      <th className="text-right py-3 px-2 font-medium">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockSubmissions.map((sub, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-border/20 hover:bg-muted/20 transition-colors"
                      >
                        <td className="py-3 px-2 font-mono text-xs">
                          {sub.submitter}
                        </td>
                        <td className="text-right py-3 px-2">${sub.price}</td>
                        <td className="text-right py-3 px-2">{sub.weight}</td>
                        <td className="text-right py-3 px-2">
                          <span
                            className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                              sub.neutrality >= 0.9
                                ? 'bg-green-500/10 text-green-400'
                                : sub.neutrality >= 0.7
                                ? 'bg-yellow-500/10 text-yellow-400'
                                : 'bg-red-500/10 text-red-400'
                            }`}
                          >
                            {(sub.neutrality * 100).toFixed(0)}%
                          </span>
                        </td>
                        <td className="text-right py-3 px-2 text-muted-foreground text-xs">
                          {sub.timestamp}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Round History */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold mb-4">Round History</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-muted-foreground border-b border-border/50">
                      <th className="text-left py-3 px-2 font-medium">Round</th>
                      <th className="text-right py-3 px-2 font-medium">
                        Aggregated Price
                      </th>
                      <th className="text-right py-3 px-2 font-medium">
                        Submissions
                      </th>
                      <th className="text-right py-3 px-2 font-medium">
                        Total Weight
                      </th>
                      <th className="text-right py-3 px-2 font-medium">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockOracleRounds.map((round) => (
                      <tr
                        key={round.roundId}
                        className="border-b border-border/20 hover:bg-muted/20 transition-colors"
                      >
                        <td className="py-3 px-2 font-medium">#{round.roundId}</td>
                        <td className="text-right py-3 px-2">
                          ${round.aggregatedPrice}
                        </td>
                        <td className="text-right py-3 px-2">{round.submissions}</td>
                        <td className="text-right py-3 px-2">{round.totalWeight}</td>
                        <td className="text-right py-3 px-2 text-muted-foreground text-xs">
                          {round.timestamp}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Neutrality Gauge */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <h3 className="text-lg font-semibold mb-6 flex items-center justify-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                Your Neutrality
              </h3>
              <div className="flex justify-center mb-4">
                <NeutralityGauge neutrality={mockUserPosition.neutrality} />
              </div>
              <p className="text-sm text-muted-foreground">
                Your balance ratio gives you a{' '}
                <span className="text-green-400 font-medium">high</span>{' '}
                neutrality score
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <Coins className="h-3.5 w-3.5 text-green-400" />
                    Bull Balance
                  </span>
                  <span className="font-medium">{mockUserPosition.bullBalance}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <Coins className="h-3.5 w-3.5 text-red-400" />
                    Bear Balance
                  </span>
                  <span className="font-medium">{mockUserPosition.bearBalance}</span>
                </div>
                <hr className="border-border/30" />
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Value</span>
                  <span className="font-semibold gradient-text">
                    {mockUserPosition.totalValue}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Protocol Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold mb-4">Protocol Stats</h3>
              <div className="space-y-4">
                {[
                  { label: 'Active Oracles', value: '142' },
                  { label: 'Total Submissions', value: '15,420' },
                  { label: 'Current Round', value: '#1042' },
                ].map((stat, idx) => (
                  <div key={idx} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{stat.label}</span>
                    <span className="font-medium">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
