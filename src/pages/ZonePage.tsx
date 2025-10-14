import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ZoneType } from '@/types/zone';
import { getZone } from '@/lib/zones';
import { getQuestionsForZone } from '@/lib/questions';
import { updateZoneProgress } from '@/lib/storage';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Coins } from 'lucide-react';
import { toast } from 'sonner';

const ZonePage = () => {
  const { zoneId } = useParams<{ zoneId: ZoneType }>();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [earnedCoins, setEarnedCoins] = useState(0);

  const zone = zoneId ? getZone(zoneId) : null;
  const questions = zoneId ? getQuestionsForZone(zoneId) : [];

  if (!zone) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Zone not found</p>
      </div>
    );
  }

  const handleNext = () => {
    const coins = 10;
    setEarnedCoins(prev => prev + coins);

    // Move to next question or complete
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Complete zone - award 1 point for completion
      if (zoneId) {
        updateZoneProgress(zoneId, earnedCoins + coins, 1);
      }
      toast.success('Zone completed! +1 point', {
        description: `Total coins earned: ${earnedCoins + coins}`,
        icon: '✨'
      });
      navigate('/');
    }
  };

  const handleExit = () => {
    // Exit without completion - no points awarded
    toast.info('Progress not saved', {
      description: 'Complete all questions to earn your point!',
    });
    navigate('/');
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Zone Header */}
      <div className={`${zone.gradient} text-white py-12`}>
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            className="mb-4 text-white hover:bg-white/20"
            onClick={handleExit}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Exit (No Points)
          </Button>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="text-6xl">{zone.icon}</div>
            <div>
              <h1 className="text-4xl font-bold mb-2">{zone.name}</h1>
              <p className="text-xl opacity-90">{zone.description}</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Coins className="w-5 h-5" />
              <span className="font-semibold">{earnedCoins} coins earned</span>
            </div>
            <div>
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>
        </div>
      </div>

      {/* Question Area */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">{questions[currentQuestion].text}</h2>

            <div className="mb-8 p-6 bg-muted/50 rounded-lg text-center">
              <p className="text-lg text-muted-foreground italic">Answer in your head</p>
            </div>

            <div className="flex justify-end">
              <Button
                onClick={handleNext}
                size="lg"
                className={zone.gradient}
              >
                When ready, click next
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ZonePage;
