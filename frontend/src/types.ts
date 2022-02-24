export type SalesByDate = {
  date: string;
  sum: number;
};

export type SalesSummaryData = {
  sum?: number;
  min: number;
  max: number;
  avg: number;
  count: number;
};

export type SalesByStore = {
  storeName: string;
  sum: number;
};

export type SalesByPaymentMethod = {
  description: string;
  sum: number;
};

export type SaleResponse = {
  content: Sale[];
};

export type Sale = {
  id: number;
  date: string;
  volume: number;
  total: number;
  gender: Gender;
  categoryName: string;
  paymentMethod: string;
  storeName: string;
};

export type SalePage = {
  content?: Sale[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  number: number;
  numberOfElements?: number;
  size?: number;
  empty?: boolean;
};

export type ChartSeriesData = {
  x: string;
  y: number;
};

export type PieChartConfig = {
  labels?: string[];
  series?: number[];
};

export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type FilterData = {
  dates?: Date[];
  gender?: Gender;
  page?: number;
};
