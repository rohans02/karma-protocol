import React from 'react';
import Link from 'next/link';
import { Flame } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-bg">
                <Flame className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold">
                <span className="gradient-text">Karma</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Community-driven price feeds for decentralized prediction markets.
              Built on the Stability Nexus.
            </p>
          </div>

          {/* Protocol */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-foreground">Protocol</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/oracle" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Oracle Dashboard
                </Link>
              </li>
              <li>
                <Link href="/explore" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Explore Pools
                </Link>
              </li>
              <li>
                <Link href="/create" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Create Pool
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-foreground">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://github.com/StabilityNexus" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Stability Nexus
                </a>
              </li>
              <li>
                <a href="https://github.com/StabilityNexus/Fate-EVM-Frontend" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Fate Protocol
                </a>
              </li>
              <li>
                <a href="https://github.com/AOSSIE-Org/Info/blob/main/GSoC-Ideas/2026/Karma.md" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-foreground">Community</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://github.com/StabilityNexus" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://discord.gg/xnmAPS7zqB" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Karma Protocol. Part of the{' '}
            <a href="https://stability.nexus" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Stability Nexus
            </a>{' '}
            ecosystem.
          </p>
          <p className="text-xs text-muted-foreground/60">
            GSoC 2026 Project
          </p>
        </div>
      </div>
    </footer>
  );
}
