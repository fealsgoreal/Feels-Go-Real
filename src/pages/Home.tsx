import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserProgress } from '@/types/zone';
import { zones } from '@/lib/zones';
import { loadProgress, initializeProgress } from '@/lib/storage';
import ZoneCard from '@/components/ZoneCard';
import ProgressStats from '@/components/ProgressStats';
import ContestSelector from '@/components/ContestSelector';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Sparkles, Info } from 'lucide-react';

const Home = () => {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedProgress = loadProgress();
    setProgress(savedProgress || initializeProgress());
  }, []);

  if (!progress) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 gradient-primary rounded-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Feels Go Real</h1>
                <p className="text-sm text-muted-foreground">Your emotional growth journey</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Progress Stats */}
        <div className="mb-8">
          <ProgressStats progress={progress} />
        </div>

        {/* Contest Section */}
        <div className="mb-8">
          <ContestSelector />
        </div>

        {/* About Button */}
        <div className="mb-8 flex justify-center">
          <Button
            variant="outline"
            onClick={() => window.open('/about', '_blank')}
            className="gap-2"
          >
            <Info className="w-4 h-4" />
            About Feels Go Real
          </Button>
        </div>

        {/* Zones Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full justify-start mb-6 flex-wrap h-auto">
            <TabsTrigger value="all">All Zones</TabsTrigger>
            {zones.map(zone => (
              <TabsTrigger key={zone.id} value={zone.id}>
                <span className="mr-2">{zone.icon}</span>
                {zone.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {zones.map(zone => {
                const zoneProgress = progress.zones.find(z => z.zoneId === zone.id);
                if (!zoneProgress) return null;
                
                return (
                  <ZoneCard
                    key={zone.id}
                    zone={zone}
                    progress={zoneProgress}
                    onClick={() => navigate(`/zone/${zone.id}`)}
                  />
                );
              })}
            </div>
          </TabsContent>

          {zones.map(zone => {
            const zoneProgress = progress.zones.find(z => z.zoneId === zone.id);
            if (!zoneProgress) return null;

            return (
              <TabsContent key={zone.id} value={zone.id}>
                <div className="max-w-md">
                  <ZoneCard
                    zone={zone}
                    progress={zoneProgress}
                    onClick={() => navigate(`/zone/${zone.id}`)}
                  />
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </main>
    </div>
  );
};

export default Home;
