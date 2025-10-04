import { Zone, ZoneProgress } from '@/types/zone';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Coins } from 'lucide-react';

interface ZoneCardProps {
  zone: Zone;
  progress: ZoneProgress;
  onClick: () => void;
}

const ZoneCard = ({ zone, progress, onClick }: ZoneCardProps) => {
  const percentage = (progress.questionsCompleted / progress.totalQuestions) * 100;
  
  return (
    <Card
      onClick={onClick}
      className="cursor-pointer transition-all hover:scale-105 hover:shadow-lg overflow-hidden group"
    >
      <div className={`h-2 ${zone.gradient}`}></div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-4xl">{zone.icon}</div>
            <div>
              <h3 className="text-lg font-bold">{zone.name}</h3>
              <p className="text-sm text-muted-foreground">{zone.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-coin-gold/10 px-3 py-1 rounded-full">
            <Coins className="w-4 h-4 text-coin-gold" />
            <span className="text-sm font-semibold text-coin-gold">{progress.coins}</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium">{progress.questionsCompleted}/{progress.totalQuestions}</span>
          </div>
          <Progress value={percentage} className="h-2" />
        </div>
      </div>
    </Card>
  );
};

export default ZoneCard;
