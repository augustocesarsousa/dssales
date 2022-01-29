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

export type ChartSeriesData = {
  x: string;
  y: number;
};

export type Gender = 'MALE' | 'FAMALE' | 'OTHER';

export type FilterData = {
  dates?: Date[];
  gender?: Gender;
};
