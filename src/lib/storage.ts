import { UserProgress, ContestMode, ZoneType } from '@/types/zone';

const STORAGE_KEYS = {
  PROGRESS: 'feels_go_real_progress',
  CONTEST: 'feels_go_real_contest'
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
};

export const loadContest = (): ContestMode | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.CONTEST);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Failed to load contest:', error);
    return null;
  }
};

export const saveContest = (contest: ContestMode): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.CONTEST, JSON.stringify(contest));
  } catch (error) {
    console.error('Failed to save contest:', error);
  }
};

export const downloadProgress = (): void => {
  const progress = loadProgress();
  const contest = loadContest();
  const data = { progress, contest, exportDate: new Date().toISOString() };
  
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
