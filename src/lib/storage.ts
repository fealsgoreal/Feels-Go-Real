import { UserProgress, ZoneType } from '@/types/zone';
import { ProgressHistory, ProgressEntry } from '@/types/progress-history';

const STORAGE_KEYS = {
  PROGRESS: 'feels_go_real_progress',
  PROGRESS_HISTORY: 'feels_go_real_progress_history'
};

export const loadProgress = (): UserProgress | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Failed to load progress:', error);
    return null;
  }
};

export const saveProgress = (progress: UserProgress): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
  } catch (error) {
    console.error('Failed to save progress:', error);
  }
};

export const initializeProgress = (): UserProgress => {
  const progress: UserProgress = {
    totalCoins: 0,
    totalPoints: 0,
    currentStreak: 0,
    bestStreak: 0,
    zones: [
      { zoneId: 'anger', questionsCompleted: 0, totalQuestions: 5, coins: 0, lastVisited: new Date().toISOString() },
      { zoneId: 'jealousy', questionsCompleted: 0, totalQuestions: 5, coins: 0, lastVisited: new Date().toISOString() },
      { zoneId: 'pride', questionsCompleted: 0, totalQuestions: 5, coins: 0, lastVisited: new Date().toISOString() },
      { zoneId: 'anxiety', questionsCompleted: 0, totalQuestions: 5, coins: 0, lastVisited: new Date().toISOString() },
      { zoneId: 'fear', questionsCompleted: 0, totalQuestions: 5, coins: 0, lastVisited: new Date().toISOString() }
    ]
  };
  saveProgress(progress);
  return progress;
};

export const updateZoneProgress = (zoneId: ZoneType, coinsEarned: number, pointsEarned: number): void => {
  const progress = loadProgress() || initializeProgress();
  const zoneProgress = progress.zones.find(z => z.zoneId === zoneId);
  
  if (zoneProgress) {
    zoneProgress.questionsCompleted++;
    zoneProgress.coins += coinsEarned;
    zoneProgress.lastVisited = new Date().toISOString();
  }
  
  progress.totalCoins += coinsEarned;
  progress.totalPoints += pointsEarned;
  saveProgress(progress);
  
  // Record progress history
  if (pointsEarned > 0) {
    addProgressEntry(zoneId, pointsEarned);
  }
};

export const loadProgressHistory = (): ProgressHistory => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.PROGRESS_HISTORY);
    return data ? JSON.parse(data) : { entries: [] };
  } catch (error) {
    console.error('Failed to load progress history:', error);
    return { entries: [] };
  }
};

export const saveProgressHistory = (history: ProgressHistory): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.PROGRESS_HISTORY, JSON.stringify(history));
  } catch (error) {
    console.error('Failed to save progress history:', error);
  }
};

export const addProgressEntry = (zoneId: ZoneType, points: number): void => {
  const history = loadProgressHistory();
  const entry: ProgressEntry = {
    date: new Date().toISOString(),
    zoneId,
    points
  };
  history.entries.push(entry);
  saveProgressHistory(history);
};


export const downloadProgress = (): void => {
  const progress = loadProgress();
  const history = loadProgressHistory();
  const data = { progress, history, exportDate: new Date().toISOString() };
  
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `feels-go-real-progress-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
