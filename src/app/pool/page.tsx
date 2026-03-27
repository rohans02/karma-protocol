'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpCircle,
  ArrowDownCircle,
  TrendingUp,
  TrendingDown,
  Activity,
  BarChart3,
  Clock,
  Coins,
  RefreshCw,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { mockPriceHistory } from '@/data/mockData';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

type TradeTab = 'buyBull' | 'buyBear' | 'sellBull' | 'sellBear';

const tabs: { key: TradeTab; label: string; color: string; icon: React.ElementType }[] = [
  { key: 'buyBull', label: 'Buy Bull', color: 'text-green-400', icon: ArrowUpCircle },
  { key: 'buyBear', label: 'Buy Bear', color: 'text-red-400', icon: ArrowDownCircle },
  { key: 'sellBull', label: 'Sell Bull', color: 'text-green-400', icon: TrendingUp },
  { key: 'sellBear', label: 'Sell Bear', color: 'text-red-400', icon: TrendingDown },
];

export default function PoolPage() {
  const [activeTab, setActiveTab] = useState<TradeTab>('buyBull');
  const [amount, setAmount] = useState('');
  const [isTrading, setIsTrading] = useState(false);

  const isBull = activeTab.includes('Bull');
  const isBuy = activeTab.startsWith('buy');

  const handleTrade = () => {
    if (!amount) return;
    setIsTrading(true);
    setTimeout(() => {
      setIsTrading(false);
      setAmount('');
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="relative py-12 sm:py-16 overflow-hidden">
        <div className="hero-orb hero-orb-gold w-[400px] h-[400px] -top-[200px] -left-[100px] animate-pulse-glow" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="pill-badge mb-4 inline-flex">
            <Activity className="h-4 w-4" />
            ETH/USD Karma Pool
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Pool <span className="gradient-text">Trading</span>
          </h1>
          <p className="mt-2 text-muted-foreground">
            Buy and sell bull/bear coins. Every trade triggers oracle rebalancing.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Trade Panel */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card rounded-2xl p-6"
            >
              {/* Tabs */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={cn(
                      'flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-medium transition-all',
                      activeTab === tab.key
                        ? tab.key.includes('Bull')
                          ? 'bg-green-500/15 text-green-400 ring-1 ring-green-500/30'
                          : 'bg-red-500/15 text-red-400 ring-1 ring-red-500/30'
                        : 'text-muted-foreground hover:bg-muted/50'
                    )}
                  >
                    <tab.icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Amount Input */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    {isBuy ? 'Amount to spend (USDC)' : `Amount of ${isBull ? 'Bull' : 'Bear'} Coins`}
                  </label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-lg"
                  />
                </div>

                {/* Estimate */}
                {amount && (
                  <div className="bg-muted/30 rounded-xl p-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Estimated {isBuy ? 'receive' : 'return'}</span>
                      <span className="font-medium">
                        {isBuy
                          ? `${(parseFloat(amount) * 0.987).toFixed(2)} ${isBull ? 'Bull' : 'Bear'} Coins`
                          : `${(parseFloat(amount) * 1.013).toFixed(2)} USDC`}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Slippage</span>
                      <span className="text-amber-400">~0.3%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Pool Fee</span>
                      <span>1.0%</span>
                    </div>
                  </div>
                )}

                <button
                  onClick={handleTrade}
                  disabled={!amount || isTrading}
                  className={cn(
                    'w-full py-3.5 rounded-xl font-semibold text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed',
                    isBull
                      ? 'bg-green-600 hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/20'
                      : 'bg-red-600 hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/20'
                  )}
                >
                  {isTrading
                    ? 'Processing...'
                    : `${isBuy ? 'Buy' : 'Sell'} ${isBull ? 'Bull' : 'Bear'} Coins`}
                </button>
              </div>
            </motion.div>

            {/* Your Holdings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
                <Coins className="h-5 w-5 text-primary" />
                Your Holdings
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-green-500/15 flex items-center justify-center">
                      <ArrowUpCircle className="h-4 w-4 text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Bull Coins</p>
                      <p className="text-xs text-muted-foreground">ETH/USD</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold">1,250.00</p>
                    <p className="text-xs text-green-400">+$45.20</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-red-500/15 flex items-center justify-center">
                      <ArrowDownCircle className="h-4 w-4 text-red-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Bear Coins</p>
                      <p className="text-xs text-muted-foreground">ETH/USD</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold">1,180.00</p>
                    <p className="text-xs text-red-400">-$12.30</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Chart + Pool Stats */}
          <div className="lg:col-span-2 space-y-6">
            {/* Price Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Oracle Price History
                </h3>
                <div className="flex gap-2 text-xs">
                  {['1H', '4H', '1D', '1W'].map((period) => (
                    <button
                      key={period}
                      className={cn(
                        'px-3 py-1.5 rounded-lg transition-colors',
                        period === '1D'
                          ? 'bg-primary/15 text-primary'
                          : 'text-muted-foreground hover:bg-muted/50'
                      )}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={mockPriceHistory}>
                    <defs>
                      <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                    <XAxis
                      dataKey="timestamp"
                      stroke="rgba(255,255,255,0.3)"
                      fontSize={12}
                      tickLine={false}
                    />
                    <YAxis
                      stroke="rgba(255,255,255,0.3)"
                      fontSize={12}
                      tickLine={false}
                      domain={['dataMin - 20', 'dataMax + 20']}
                      tickFormatter={(val: number) => `$${val}`}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(15,15,15,0.9)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '12px',
                        color: '#fff',
                      }}
                      formatter={(value: number) => [`$${value}`, 'Price']}
                    />
                    <Area
                      type="monotone"
                      dataKey="price"
                      stroke="#a855f7"
                      strokeWidth={2}
                      fill="url(#priceGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Pool Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {[
                { label: 'Total Reserves', value: '$1,245,890', icon: Coins },
                { label: 'Bull Supply', value: '523,450', icon: ArrowUpCircle },
                { label: 'Bear Supply', value: '522,440', icon: ArrowDownCircle },
                { label: 'Last Rebalance', value: '2 min ago', icon: RefreshCw },
              ].map((stat, idx) => (
                <div key={idx} className="glass-card rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <stat.icon className="h-4 w-4 text-primary" />
                    <span className="text-xs text-muted-foreground">{stat.label}</span>
                  </div>
                  <p className="text-lg font-semibold">{stat.value}</p>
                </div>
              ))}
            </motion.div>

            {/* Pool Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold mb-4">Pool Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pool Address</span>
                  <span className="font-mono text-xs">0x1234...5678</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Asset Pair</span>
                  <span className="font-medium">ETH/USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Alpha (α)</span>
                  <span className="font-medium">2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <span className="status-active font-medium">Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Staleness Threshold</span>
                  <span className="font-medium">24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Created</span>
                  <span className="font-medium">Jan 15, 2026</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
