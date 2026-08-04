export interface ReviewSummary {
  average: number;
  total: number;
  counts: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
}