import { ZoneType } from './zone';

export interface ProgressEntry {
  date: string; // ISO date string
  zoneId: ZoneType;
  points: number;
}

export interface ProgressHistory {
  entries: ProgressEntry[];
}
