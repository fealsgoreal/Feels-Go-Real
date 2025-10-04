import { useState, useEffect } from 'react';
import { ContestMode, UserProgress } from '@/types/zone';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Calendar, Trophy, Download, Target } from 'lucide-react';
import { saveContest, downloadProgress, loadContest, loadProgress } from '@/lib/storage';
import { toast } from 'sonner';

const ContestSelector = () => {
  const [activeContest, setActiveContest] = useState<ContestMode | null>(null);
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    const contest = loadContest();
    const progress = loadProgress();
    setActiveContest(contest);
    setUserProgress(progress);
  }, []);

  const startContest = (duration: '1month' | '6months' | '1year') => {
    const now = new Date();
    const endDate = new Date(now);
    
    switch (duration) {
      case '1month':
        endDate.setMonth(endDate.getMonth() + 1);
        break;
      case '6months':
        endDate.setMonth(endDate.getMonth() + 6);
        break;
      case '1year':
        endDate.setFullYear(endDate.getFullYear() + 1);
        break;
    }

    const contest: ContestMode = {
      id: crypto.randomUUID(),
      duration,
      startDate: now.toISOString(),
      endDate: endDate.toISOString(),
      targetPoints: duration === '1month' ? 1000 : duration === '6months' ? 5000 : 10000,
      currentPoints: userProgress?.totalPoints || 0
    };

    saveContest(contest);
    setActiveContest(contest);
    toast.success(`${duration} contest started!`, {
      description: 'Good luck on your journey!'
    });
  };

  const handleDownload = () => {
    downloadProgress();
    toast.success('Progress downloaded successfully!');
  };

  const contestOptions = [
    { duration: '1month' as const, label: '1 Month Challenge', target: 1000, color: 'zone-fire' },
    { duration: '6months' as const, label: '6 Month Journey', target: 5000, color: 'zone-ocean' },
    { duration: '1year' as const, label: '1 Year Master', target: 10000, color: 'zone-mystic' }
  ];

  const currentPoints = userProgress?.totalPoints || 0;

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Trophy className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-bold">Contest Modes</h2>
        </div>
        <Button variant="outline" onClick={handleDownload}>
          <Download className="w-4 h-4 mr-2" />
          Download Progress
        </Button>
      </div>

      {activeContest && (
        <Card className="p-4 mb-6 bg-primary/5 border-primary/20">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Active Contest</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Duration:</span>
              <span className="font-medium">{activeContest.duration}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Progress:</span>
              <span className="font-bold text-lg">
                {currentPoints} / {activeContest.targetPoints} points
              </span>
            </div>
            <Progress 
              value={(currentPoints / activeContest.targetPoints) * 100} 
              className="h-3"
            />
            <div className="text-xs text-muted-foreground text-center">
              {Math.max(0, activeContest.targetPoints - currentPoints)} points to goal
            </div>
          </div>
        </Card>
      )}

      <div className="grid md:grid-cols-3 gap-4">
        {contestOptions.map((option) => (
          <Card
            key={option.duration}
            className={`p-4 cursor-pointer transition-all hover:shadow-lg ${
              activeContest?.duration === option.duration ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => startContest(option.duration)}
          >
            <div className="flex items-start justify-between mb-3">
              <Calendar className={`w-5 h-5 text-${option.color}`} />
              {activeContest?.duration === option.duration && (
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              )}
            </div>
            <h3 className="font-semibold mb-1">{option.label}</h3>
            <p className="text-sm text-muted-foreground">Target: {option.target} points</p>
          </Card>
        ))}
      </div>
    </Card>
  );
};

export default ContestSelector;
