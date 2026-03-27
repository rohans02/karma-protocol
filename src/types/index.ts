export interface Pool {
  address: string;
  name: string;
  assetPair: string;
  totalReserves: string;
  bullSupply: string;
  bearSupply: string;
  oraclePrice: string;
  priceChange24h: number;
  lastRebalance: string;
  alpha: number;
  createdAt: string;
  status: 'active' | 'bootstrap' | 'stale';
}

export interface OracleRound {
  roundId: number;
  aggregatedPrice: string;
  submissions: number;
  timestamp: string;
  totalWeight: string;
}

export interface PriceSubmission {
  submitter: string;
  price: string;
  weight: string;
  neutrality: number;
  roundId: number;
  timestamp: string;
}

export interface UserPosition {
  bullBalance: string;
  bearBalance: string;
  neutrality: number;
  weight: string;
  totalValue: string;
  lastSubmission?: string;
}

export interface PoolStats {
  totalValueLocked: string;
  totalPools: number;
  totalSubmissions: number;
  activeOracles: number;
  averageNeutrality: number;
}

export interface PricePoint {
  timestamp: string;
  price: number;
  label: string;
}
