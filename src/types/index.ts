export interface StatisticItem {
  id: string;
  metric: string;
  unit?: string;
  title: string;
  description: string;
  year: string;
  source: string;
  sourceUrl?: string;
  metaphor: string;
  category: 'sdg5' | 'sdg10' | 'connected';
  benchmark?: string;
  details?: string;
}

export interface SDGTopic {
  id: string;
  title: string;
  summary: string;
  expandedDetails: string;
  iconName: string;
}

export interface ActionGuideline {
  step: string;
  title: string;
  summary: string;
  practicalAction: string;
  cautions: string;
}

export interface WorkplaceSpectrumLevel {
  level: number;
  label: string;
  indicator: string;
  example: string;
  appropriateAction: string;
  severity: 'low' | 'moderate' | 'high' | 'critical';
}

export interface GameSector {
  id: string;
  name: string;
  sdgFocus: 'SDG 5' | 'SDG 10' | 'SDG 5 × 10';
  initialState: string;
  resolvedState: string;
  actionLabel: string;
  impactScore: number;
  solved: boolean;
  explanation: string;
  reformTitle: string;
}
