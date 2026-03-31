export type BillingCycle = 'monthly' | 'yearly';

export type KvkSearchResult = {
  id: string;
  kvkNumber: string;
  establishmentNumber?: string;
  name: string;
  city?: string;
  street?: string;
  postalCode?: string;
};

export type CheckoutSubmission = {
  quantity: number;
  customerName: string;
  customerEmail: string;
  company: KvkSearchResult;
};

export type Plan = {
  name: string;
  buttonname: string;
  monthlyPrice: number;
  yearlyPrice: number;
  badge: string;
  description: string;
  features: string[];
  highlighted: boolean;
};
