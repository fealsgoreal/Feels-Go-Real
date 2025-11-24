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
  return (
    <div onClick={onClick} className="card w-full cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-accent text-accent-foreground">
          {zone.icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground">{zone.name}</h3>
          <p className="text-sm text-muted-foreground">{zone.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ZoneCard;
