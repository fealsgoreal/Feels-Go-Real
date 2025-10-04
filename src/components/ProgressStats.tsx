import { UserProgress } from '@/types/zone';
import { Card } from '@/components/ui/card';
import { Coins, TrendingUp, Zap, Award } from 'lucide-react';

interface ProgressStatsProps {
  progress: UserProgress;
}

const ProgressStats = ({ progress }: ProgressStatsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card className="p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-coin-gold/10 rounded-lg">
            <Coins className="w-5 h-5 text-coin-gold" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total Coins</p>
            <p className="text-2xl font-bold">{progress.totalCoins}</p>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total Points</p>
            <p className="text-2xl font-bold">{progress.totalPoints}</p>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-zone-fire/10 rounded-lg">
            <Zap className="w-5 h-5 text-zone-fire" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Current Streak</p>
            <p className="text-2xl font-bold">{progress.currentStreak}</p>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-zone-mystic/10 rounded-lg">
            <Award className="w-5 h-5 text-zone-mystic" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Best Streak</p>
            <p className="text-2xl font-bold">{progress.bestStreak}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProgressStats;
