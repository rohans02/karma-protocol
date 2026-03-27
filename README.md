# Karma Protocol

Community-driven price feeds for decentralized prediction markets. Part of the [Stability Nexus](https://stability.nexus) ecosystem.

## Overview

KARMA replaces external oracle dependency (e.g. Chainlink) with a novel community-driven price feed mechanism. Token holders submit prices weighted by their **position neutrality**:

```
neutrality = min(bullBal, bearBal) / max(bullBal, bearBal)
weight = (bullBal + bearBal) × neutrality^α
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **Wallet**: RainbowKit + wagmi + viem
- **Animations**: framer-motion
- **Charts**: recharts
- **Fonts**: Geist (Sans + Mono)

## Pages

| Route | Description |
|---|---|
| `/` | Landing page with hero, features, and how-it-works |
| `/oracle` | Oracle dashboard — submit prices, view neutrality score |
| `/pool` | Pool trading — buy/sell bull and bear coins |
| `/explore` | Browse all active Karma pools |
| `/create` | Deploy a new Karma pool |

## Smart Contracts (Planned)

- `KarmaOracle.sol` — Submissions, weight calculations, price aggregation
- `IKarmaOracle.sol` — Chainlink-compatible interface
- `KarmaPool.sol` — Prediction pool using KarmaOracle
- `WadMath.sol` — Fixed-point math library

## License

See [LICENSE](LICENSE) for details.
