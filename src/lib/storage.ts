import { UserProgress, ZoneType } from '@/types/zone';
import { ProgressHistory, ProgressEntry } from '@/types/progress-history';

const STORAGE_KEYS = {
  PROGRESS: 'feels_go_real_progress',
  PROGRESS_HISTORY: 'feels_go_real_progress_history',
  LAST_SESSION: 'feels_go_real_last_session'
};

// --- Load user progress ---
export const loadProgress = (): UserProgress | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Failed to load progress:', error);
    return null;
  }
};

// --- Save user progress ---
export const saveProgress = (progress: UserProgress): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
  } catch (error) {
    console.error('Failed to save progress:', error);
  }
};

// --- Initialize new progress ---
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

// --- Reset current streak manually ---
export const resetCurrentStreak = (): void => {
  const progress = loadProgress() || initializeProgress();
  progress.currentStreak = 0;
  saveProgress(progress);
  localStorage.setItem(STORAGE_KEYS.LAST_SESSION, new Date().toISOString());
};

// --- Automatically reset streak after inactivity ---
export const checkSessionAndResetStreak = (): void => {
  const lastSession = localStorage.getItem(STORAGE_KEYS.LAST_SESSION);
  const now = new Date();

  if (lastSession) {
    const last = new Date(lastSession);
    const minutesPassed = (now.getTime() - last.getTime()) / 1000 / 60;

    // If more than 30 minutes passed since last session, reset streak
    if (minutesPassed > 30) {
      resetCurrentStreak();
      console.log('Streak reset: new session started.');
    }
  }

  // Update session timestamp
  localStorage.setItem(STORAGE_KEYS.LAST_SESSION, now.toISOString());
};

// --- Update progress when user earns points ---
export const updateZoneProgress = (zoneId: ZoneType, coinsEarned: number, pointsEarned: number): void => {
  checkSessionAndResetStreak(); // Auto-check session before updating

  const progress = loadProgress() || initializeProgress();
  const zoneProgress = progress.zones.find(z => z.zoneId === zoneId);
  
  if (zoneProgress) {
    zoneProgress.questionsCompleted++;
    zoneProgress.coins += coinsEarned;
    zoneProgress.lastVisited = new Date().toISOString();
  }

  progress.totalCoins += coinsEarned;
  progress.totalPoints += pointsEarned;

  // Update streaks
  progress.currentStreak += pointsEarned;
  if (progress.currentStreak > progress.bestStreak) {
    progress.bestStreak = progress.currentStreak;
  }

  saveProgress(progress);

  // Record progress history
  if (pointsEarned > 0) {
    addProgressEntry(zoneId, pointsEarned);
  }
};

// --- Progress History ---
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

// --- Download progress JSON ---
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
