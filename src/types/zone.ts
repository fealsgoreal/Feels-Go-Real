export type ZoneType = 'fire' | 'ocean' | 'forest' | 'mystic' | 'solar';

export interface Zone {
  id: ZoneType;
  name: string;
  color: string;
  gradient: string;
  icon: string;
  description: string;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface ZoneProgress {
  zoneId: ZoneType;
  questionsCompleted: number;
  totalQuestions: number;
  coins: number;
  lastVisited: string;
}

export interface UserProgress {
  totalCoins: number;
  totalPoints: number;
  zones: ZoneProgress[];
  currentStreak: number;
  bestStreak: number;
}

export interface ContestMode {
  id: string;
  duration: '1month' | '6months' | '1year';
  startDate: string;
  endDate: string;
  targetPoints: number;
  currentPoints: number;
}
