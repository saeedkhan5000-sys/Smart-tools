export interface CalculationResult {
  investedAmount: number;
  estimatedReturns: number;
  totalValue: number;
}

export interface ChartData {
  name: string;
  value: number;
}

export interface ZakatRates {
  gold: number;
  silver: number;
}

export interface ZakatInputs {
  cash: number;
  goldWeight: number;
  silverWeight: number;
  investments: number;
  liabilities: number;
}