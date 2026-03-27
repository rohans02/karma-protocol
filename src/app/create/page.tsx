'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Info, Rocket, Settings } from 'lucide-react';

export default function CreatePage() {
  const [formData, setFormData] = useState({
    poolName: '',
    assetPair: '',
    seedPrice: '',
    alpha: '2',
    stalenessThreshold: '24',
    reserveToken: '',
    description: '',
  });
  const [isCreating, setIsCreating] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreate = () => {
    setIsCreating(true);
    setTimeout(() => {
      setIsCreating(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="relative py-12 sm:py-16 overflow-hidden">
        <div className="hero-orb hero-orb-purple w-[400px] h-[400px] -top-[200px] -right-[100px] animate-pulse-glow" />
        <div className="hero-orb hero-orb-gold w-[300px] h-[300px] -bottom-[100px] -left-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="pill-badge mb-4 inline-flex">
            <Plus className="h-4 w-4" />
            Deploy New Pool
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Create <span className="gradient-text">Pool</span>
          </h1>
          <p className="mt-2 text-muted-foreground max-w-xl">
            Deploy a new Karma-powered prediction pool with a community-driven
            oracle. Set the parameters below to get started.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                Pool Configuration
              </h2>

              <div className="space-y-5">
                {/* Pool Name */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Pool Name
                  </label>
                  <input
                    type="text"
                    name="poolName"
                    value={formData.poolName}
                    onChange={handleChange}
                    placeholder="e.g. ETH/USD Karma Pool"
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    A display name for your pool. Stored on-chain.
                  </p>
                </div>

                {/* Asset Pair */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Asset Pair
                  </label>
                  <select
                    name="assetPair"
                    value={formData.assetPair}
                    onChange={handleChange}
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none"
                  >
                    <option value="">Select asset pair</option>
                    <option value="ETH/USD">ETH/USD</option>
                    <option value="BTC/USD">BTC/USD</option>
                    <option value="SOL/USD">SOL/USD</option>
                    <option value="AVAX/USD">AVAX/USD</option>
                    <option value="MATIC/USD">MATIC/USD</option>
                    <option value="LINK/USD">LINK/USD</option>
                    <option value="CUSTOM">Custom Pair</option>
                  </select>
                </div>

                {/* Seed Price */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Initial Seed Price (USD)
                  </label>
                  <input
                    type="number"
                    name="seedPrice"
                    value={formData.seedPrice}
                    onChange={handleChange}
                    placeholder="e.g. 3245.67"
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    The bootstrap price before community submissions begin.
                  </p>
                </div>

                {/* Alpha */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Alpha Parameter (α)
                  </label>
                  <input
                    type="number"
                    name="alpha"
                    value={formData.alpha}
                    onChange={handleChange}
                    placeholder="2"
                    min="1"
                    max="10"
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Controls how aggressively neutrality is rewarded. Higher α =
                    stronger neutrality bias. Recommended: 2-3.
                  </p>
                </div>

                {/* Staleness Threshold */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Staleness Threshold (hours)
                  </label>
                  <input
                    type="number"
                    name="stalenessThreshold"
                    value={formData.stalenessThreshold}
                    onChange={handleChange}
                    placeholder="24"
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Maximum time before the oracle reports the price as stale.
                  </p>
                </div>

                {/* Reserve Token */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Reserve Token Address
                  </label>
                  <input
                    type="text"
                    name="reserveToken"
                    value={formData.reserveToken}
                    onChange={handleChange}
                    placeholder="0x..."
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground font-mono text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    The ERC-20 token used as the reserve (e.g. USDC, USDT).
                  </p>
                </div>

                {/* Description */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Pool Description (optional)
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="A brief description of this prediction pool..."
                    rows={3}
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                onClick={handleCreate}
                disabled={!formData.assetPair || !formData.seedPrice || isCreating}
                className="mt-6 w-full py-3.5 rounded-xl gradient-bg text-white font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isCreating ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Rocket className="h-4 w-4" />
                    Deploy Karma Pool
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Sidebar: Preview + Info */}
          <div className="space-y-6">
            {/* Preview Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
                <Rocket className="h-4 w-4 text-primary" />
                Pool Preview
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pool Name</span>
                  <span className="font-medium">
                    {formData.poolName || '—'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Asset Pair</span>
                  <span className="font-medium">
                    {formData.assetPair || '—'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Seed Price</span>
                  <span className="font-medium">
                    {formData.seedPrice ? `$${formData.seedPrice}` : '—'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Alpha (α)</span>
                  <span className="font-medium">{formData.alpha || '—'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Staleness</span>
                  <span className="font-medium">
                    {formData.stalenessThreshold
                      ? `${formData.stalenessThreshold}h`
                      : '—'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <span className="status-bootstrap font-medium">Bootstrap</span>
                </div>
              </div>
            </motion.div>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
                <Info className="h-4 w-4 text-primary" />
                How Pool Creation Works
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">1. Bootstrap Phase:</strong>{' '}
                  Pool starts with your seed price. No oracle submissions yet.
                </p>
                <p>
                  <strong className="text-foreground">2. Active Phase:</strong>{' '}
                  Once token holders join, community submissions power the oracle.
                </p>
                <p>
                  <strong className="text-foreground">3. Each Trade:</strong>{' '}
                  Buying or selling bull/bear coins triggers an oracle rebalance.
                </p>
                <p>
                  <strong className="text-foreground">4. Staleness Guard:</strong>{' '}
                  If no submission occurs within the threshold, the feed reports
                  stale.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
