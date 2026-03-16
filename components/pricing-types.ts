export type BillingCycle = 'monthly' | 'yearly';

export type Plan = {
  name: string;
  buttonname: string;
  monthlyPrice: number;
  yearlyMonthlyPrice: number;
  badge: string;
  description: string;
  features: string[];
  highlighted: boolean;
};
