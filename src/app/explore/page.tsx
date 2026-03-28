'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Search,
  Layers,
  ArrowRight,
  Activity,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { mockPools } from '@/data/mockData';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ExplorePage() {
  const [search, setSearch] = React.useState('');

  const filteredPools = mockPools.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.assetPair.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="relative py-12 sm:py-16 overflow-hidden">
        <div className="hero-orb hero-orb-violet w-[400px] h-[400px] -top-[200px] left-1/2 -translate-x-1/2 animate-pulse-glow" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="pill-badge mb-4 inline-flex">
            <Layers className="h-4 w-4" />
            {mockPools.length} Active Pools
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Explore <span className="gradient-text">Pools</span>
          </h1>
          <p className="mt-2 text-muted-foreground max-w-xl">
            Browse and trade on community-driven prediction pools powered by the
            Karma oracle.
          </p>

          {/* Search */}
          <div className="mt-6 max-w-md">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search pools by name or asset pair..."
                className="w-full bg-muted/50 border border-border rounded-xl pl-11 pr-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredPools.map((pool) => {
            const isStale = pool.status === 'stale';
            const cardContent = (
                <div className={cn(
                  "glass-card rounded-2xl p-6 h-full transition-all duration-300",
                  isStale ? "opacity-75" : "hover:border-primary/20 group-hover:glow-purple"
                )}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className={cn(
                        "text-lg font-semibold transition-colors",
                        !isStale && "group-hover:text-primary"
                      )}>
                        {pool.assetPair}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {pool.name}
                      </p>
                    </div>
                    <span
                      className={cn(
                        'text-xs font-medium px-2.5 py-1 rounded-full',
                        pool.status === 'active'
                          ? 'bg-green-500/10 text-green-400'
                          : pool.status === 'bootstrap'
                          ? 'bg-amber-500/10 text-amber-400'
                          : 'bg-red-500/10 text-red-400'
                      )}
                    >
                      {pool.status}
                    </span>
                  </div>

                  {/* Stale warning */}
                  {isStale && (
                    <p className="text-xs text-red-400/80 mb-3">
                      No submissions for 2+ hours
                    </p>
                  )}

                  {/* Price */}
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-1">Current Price</p>
                    <p className="text-2xl font-bold">${pool.oraclePrice}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-muted-foreground text-xs">Reserves</p>
                      <p className="font-medium">${pool.totalReserves}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">
                        Last Rebalance
                      </p>
                      <p className="font-medium">{pool.lastRebalance}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-4 pt-4 border-t border-border/30 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Activity className="h-3 w-3" />
                      α = {pool.alpha}
                    </span>
                    <span
                      className={cn(
                        "text-sm font-medium flex items-center gap-1 transition-all",
                        isStale
                          ? "text-muted-foreground/40 cursor-not-allowed"
                          : "text-primary group-hover:gap-2"
                      )}
                      title={isStale ? "Oracle is stale — rebalance paused" : undefined}
                    >
                      Trade
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
            );

            return (
              <motion.div key={pool.address} variants={item}>
                {isStale ? (
                  <div className="block cursor-not-allowed" title="Oracle is stale — rebalance paused">
                    {cardContent}
                  </div>
                ) : (
                  <Link href="/pool" className="block group">
                    {cardContent}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {filteredPools.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg">No pools found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
