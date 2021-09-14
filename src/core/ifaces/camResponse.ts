export type Outcome = 'Approved' | 'Too Much Glare' | null;

interface ISummary {
  outcome: Outcome;
}

export interface ICamResponse {
  summary: ISummary;
}
