import { useState } from 'react';
import { ContestMode } from '@/types/zone';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Trophy, Download } from 'lucide-react';
import { saveContest, downloadProgress } from '@/lib/storage';
import { toast } from 'sonner';

const ContestSelector = () => {
  const [selectedDuration, setSelectedDuration] = useState<'1month' | '6months' | '1year' | null>(null);

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
      currentPoints: 0
    };

    saveContest(contest);
    setSelectedDuration(duration);
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

      <div className="grid md:grid-cols-3 gap-4">
        {contestOptions.map((option) => (
          <Card
            key={option.duration}
            className={`p-4 cursor-pointer transition-all hover:shadow-lg ${
              selectedDuration === option.duration ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => startContest(option.duration)}
          >
            <div className="flex items-start justify-between mb-3">
              <Calendar className={`w-5 h-5 text-${option.color}`} />
              {selectedDuration === option.duration && (
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
